var tab = 0, stab = [0,0,0,0,0], tab_name = 'shark'

const TAB_IDS = {
    'shark': {
        html: updateSharkHTML,

        notify() {
            return !isAutoEnabled('shark') && CURRENCIES.fish.amount.gte(SHARK.cost())
        },
    },
    'options': {
        html() {
            for (let [i,x] of Object.entries(CONFIRMATIONS)) {
                el("radio-confirm-"+i).style.display = el_display(x[0]())
            }
        },
    },
    'scalings': {
        html: updateScalingsTable,
    },
    'auto': {
        html: updateAutomationHTML,
        
        notify() {
            for (let [i,x] of Object.entries(AUTOMATION)) {
                var lvl = player.auto[i][0]
                if (x.unl() && lvl < x.max && CURRENCIES[x.curr].amount.gte(x.cost(lvl))) return true
            }
            return false
        },
    },
    'research': {
        html: updateResearchHTML,

        notify() {
            let auto = isAutoEnabled('research')
            for (let [i,x] of Object.entries(RESEARCH)) {
                if (auto && PRE_BH_RESEARCH.includes(i)) continue;

                var max = x.max ?? 1, amt = player.research[i]

                if (!x.unl() || amt.gte(max)) continue

                var afford = true

                for (let r of x.require) {
                    let curr = CURRENCIES[r[0]], c = max>1?r[2](amt):r[2], s = (r[1]?curr.total:curr.amount)
                    if (s.sub(c).lt(0)) {
                        afford = false
                        break
                    }
                }

                if (afford) return true
            }
            return false
        },
    },
    'explore': {
        html: updateExplorationHTML,

        notify() {
            if (isAutoEnabled('eu')) return false
            for (let i = 0; i < EXPLORE.length; i++) if (i < player.explore.unl) {
                var e = EXPLORE[i]

                var amt = [CURRENCIES[e.cost[0][2]].amount, player.explore.res[i]]

                for (let j = 0; j < 2; j++) if (amt[j].gte(e.cost[j][0](player.explore.upg[i][j]))) return true
            }
            return false
        },
    },
    'core-reactor': {
        html: updateCoreHTML,

        notify() {
            if (isAutoEnabled('core_reactor')) return false
            for (let i = 0; i < tmp.core_reactor_unl; i++) {
                if (CORE_REACTOR[i].resource.gte(getCoreReactorCost(i))) return true
            }
            return false
        },
    },
    'core-radiation': {
        html: updateCoreRadiation,

        notify() {
            var rad = player.core.radiation
            if (!isAutoEnabled('radioactive_boosts') && rad.amount.gte(CORE_RAD.limit())) return true

            var active = rad.active, r_c15 = hasResearch('c15')
            return !isAutoEnabled('core_radiation') && (active || r_c15) && CURRENCIES.fish.amount.pow(!active && r_c15 ? researchEffect('c15',0) : 1).gte(CORE_RAD.genCost(rad.gen))
        },
    },
    'core-assembler': {
        html: updateCoreAssemblerHTML,

        notify() {
            return CURRENCIES.core.amount.gte(CA_MAX_BUILDINGS_COST[player.core.max_buildings]??EINF)
        },
    },
    'shark-rank': {
        html: updateSharkRankHTML,
    },
    'evolution-tree': {
        html: updateEvolutionTreeHTML,

        notify() {
            for (let i = 0; i < EVOLUTION_TREE.faith_cost.length; i++) {
                var x = EVOLUTION_TREE.faith_cost[i]
                if (CURRENCIES[x[0]].amount.gte(x[1](player.humanoid.faith[i]))) return true
            }

            var row_available = []
            for (let i = 0; i < tmp.evo_tree_rows; i++) row_available.push(EVOLUTION_TREE.getAvilableSlot(i))
            for (let i = 0; i < tmp.evo_tree_rows * 4; i++) if (EVOLUTION_TREE.canAfford(i, row_available[Math.floor(i / 4)])) return true

            return false
        },
    },
    'evolution-goal': {
        html: updateEvolutionGoalHTML,
    },
    'cultivation': {
        html: updateCultivationHTML,

        notify() {
            return !isAutoEnabled('mining_tier') && CURRENCIES.stone.amount.gte(MINING_TIER.require)
        },
    },
    'forge': {
        html: updateForgeHTML,

        notify() {
            if (player.humanoid.forge.queue != '') return false
            for (let i of FORGE_KEYS) if (tmp.forge_affords[i]) return true
            return false
        },
    },
    'particle-accel': {
        html: updatePAHtml,
    },
    'black-hole': {
        html: updateBlackHoleHTML,

        notify() {
            let r = player.singularity.remnants
            for (let i in REMNANT_UPGS) {
                let u = REMNANT_UPGS[i]
                if (u.unl() && r.gte(u.cost(player.singularity.upgs[i]))) return true;
            }
            return false
        },
    },
    'singularity-milestones': {
        html: updateSingularityMilestones,
    },
}

const TABS = [
    {
        stab: "shark",
    },{
        stab: "options",
    },{
        stab: "scalings",
    },{
        unl: ()=>player.feature>=2 || player.singularity.best_bh.gte(2),
        stab: "auto",
    },{
        unl: ()=>player.feature>=3,
        stab: "research",
    },{
        unl: ()=>player.feature>=4,
        stab: "explore",
    },{
        id: 'core',
        unl: ()=>player.core.times>0,
        stab: [
            ["core-reactor"],
            ['core-radiation',()=>player.feature>=7],
            ['core-assembler',()=>player.feature>=9],
        ],
    },{
        id: 'evolution',
        unl: ()=>player.humanoid.times>0,
        stab: [
            ["shark-rank"],
            ["evolution-tree"],
            ["evolution-goal",()=>player.feature>=12],
            ["cultivation",()=>player.feature>=13],
            ["forge",()=>player.feature>=15],
            ["particle-accel",()=>player.feature>=16],
        ],
    },{
        id: 'singularity',
        unl: ()=>player.singularity.first,
        stab: [
            ["black-hole"],
            ["singularity-milestones"],
        ],
        style: {
            "background": `black url('textures/cosmic-pattern.png')`,
            "color": "white",
            "animation": `cosmic-pattern 20s linear infinite`,
        },
    },
]

const DEFAULT_TAB_STYLE = {
    "background": "lightseagreen",
    "color": "black",
    "animation": "none",
}

function switchTab(t,st) {
    tab = t
    if (st !== undefined) stab[t] = st

    let s = TABS[t].stab

    if (Array.isArray(s)) tab_name = s[stab[t]??0][0]
    else tab_name = s
}

function getTabNotification(id) {
    return TAB_IDS[id].notify?.() || id in SU_TABS && SU_TABS[id].filter(x => !tmp.su_automated.includes(x) && canAffordSharkUpgrade(x)).length > 0
}

function updateTabs() {
    var tab_unlocked = {}

    for (let [i,v] of Object.entries(TABS)) {
        let unl = !v.unl || v.unl(), elem, selected = parseInt(i) == tab, array = Array.isArray(v.stab)
        tab_unlocked[i] = []

        if (array) {
            if (player.radios.notify && unl) {
                tab_unlocked[i] = v.stab.filter(x => (!x[1] || x[1]()) && getTabNotification(x[0])).map(x => x[0])
            }

            elem = el('stab'+i+'-div')

            elem.style.display = el_display(selected)

            if (selected) v.stab.forEach(([x,u],j) => {
                var s_elem = el('stab'+i+'-'+j+'-button')

                s_elem.style.display = el_display(!u || u())
                s_elem.className = el_classes({"tab-button": true, stab: true, selected: x == tab_name, notify: tab_unlocked[i].includes(x)}) // "tab-button stab"+(x == tab_name ? " selected" : "")
            })
        }

        elem = el('tab'+i+'-button')

        elem.style.display = el_display(unl)
        if (unl) elem.className = el_classes({"tab-button": true, selected, notify: player.radios.notify && (array ? tab_unlocked[i].length > 0 : getTabNotification(v.stab))}) // "tab-button"+(selected ? " selected" : "")
    }

    for (let [i,v] of Object.entries(TAB_IDS)) {
        let unl = tab_name == i, elem = el(i+"-tab")

        if (!elem) continue;

        elem.style.display = el_display(unl)

        if (unl) v.html?.()
    }

    for (let [k,v] of Object.entries(TABS[tab]?.style ?? DEFAULT_TAB_STYLE)) document.body.style[k] = v
}

function setupTabs() {
    // Setting Tab as Language

    for (let [i,v] of Object.entries(TAB_IDS)) v.name = lang_text('tab-'+i)
    TABS.forEach(v => { if (!Array.isArray(v.stab)) v.name = TAB_IDS[v.stab].name; else v.name = lang_text('tab-'+v.id) })

    // Setup HTML

    let h = "", h2 = ""

    for (let [i,v] of Object.entries(TABS)) {
        h += `<button class="tab-button" id="tab${i}-button" onclick="switchTab(${i})">${v.name}</button>`

        if (Array.isArray(v.stab)) {
            h2 += `<div id="stab${i}-div" id="${v.stab[stab[i]]}-tab">
            ${v.stab.map(([x],j) => `<button class="tab-button stab" id="stab${i}-${j}-button" onclick="switchTab(${i},${j})">${TAB_IDS[x].name}</button>`).join("")}
            </div>`
        }
    }

    el('tabs').innerHTML = h + h2
}