const EVOLUTION_TREE = {
    faith_cost: [
        ["fish",x=>Decimal.pow(10,Decimal.pow(hasResearch('f2') ? 1e3 : 1e4,x.add(1).div(tmp.faith_mult).scale(1e7,1.1,"ME2").scale(1e6,2,"P"))),x=>x.log10().log(hasResearch('f2') ? 1e3 : 1e4).scale(1e6,2,"P",true).scale(1e7,1.1,"ME2",true).mul(tmp.faith_mult).floor()],
        ["prestige",x=>Decimal.pow(10,Decimal.pow(hasResearch('f2') ? 1e2 : 1e3,x.add(1).div(tmp.faith_mult).scale(1e7,1.1,"ME2").scale(1e6,2,"P"))),x=>x.log10().log(hasResearch('f2') ? 1e2 : 1e3).scale(1e6,2,"P",true).scale(1e7,1.1,"ME2",true).mul(tmp.faith_mult).floor()],
        ["core",x=>Decimal.pow(1e60,x.add(1).div(tmp.faith_mult).scale(1e7,1.1,"ME2").scale(1e6,2,"P").scale(2.5e3,2,"ME2").scale(20,2,'P')),x=>x.log(1e60).scale(20,2,'P',true).scale(2.5e3,2,"ME2",true).scale(1e6,2,"P",true).scale(1e7,1.1,"ME2",true).mul(tmp.faith_mult).floor()],
    ],

    getCost: (i,charged) => {
        let r = Math.floor(i/4), y = Math.max(0,1 + r)
        if (charged) {
            y = y * (y + 1) * 25000;
            if (r > 4) y *= Math.pow(2,r-4);
        }
        return y
    },

    rows: 12,
    charged_rows: 12,

    effect: [
        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().add(1).pow(simpleETEffect(20)).pow(simpleETEffect(36)),
        ()=>CURRENCIES.prestige.total.max(0).add(10).log10().log10().mul(1.5).add(1).pow(simpleETEffect(21)).pow(simpleETEffect(37)),
        ()=>CURRENCIES.core.total.max(0).add(10).log10().root(2).pow(simpleETEffect(22)).pow(simpleETEffect(38)),
        ()=>Decimal.pow(10,simpleETEffect(23)).pow(simpleETEffect(39)),

        ()=>10 ** simpleETEffect(36),
        ()=>10 ** simpleETEffect(37),
        ()=>10 ** simpleETEffect(38),
        ()=>10 ** simpleETEffect(39),

        null,
        null,
        null,
        null,

        ()=>1.5 ** simpleETEffect(36),
        ()=>1.5 ** simpleETEffect(37),
        ()=>1.1 ** simpleETEffect(38),
        ()=>1 * simpleETEffect(39),

        ()=>1 * simpleETEffect(36),
        ()=>1 * simpleETEffect(37),
        ()=>1 * simpleETEffect(38),
        ()=>1 * simpleETEffect(39),

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().div(60).add(1).mul(simpleETEffect(36)).pow(simpleCETEffect(20)),
        ()=>CURRENCIES.prestige.total.max(0).add(10).log10().log10().div(45).add(1).mul(simpleETEffect(37)).pow(simpleCETEffect(21)),
        ()=>CURRENCIES.core.total.max(0).add(1).log10().root(2).div(60).add(1).mul(simpleETEffect(38)).pow(simpleCETEffect(22)),
        ()=>Decimal.pow(2 * simpleETEffect(39),simpleCETEffect(23)),

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().div(2).mul(simpleETEffect(36)),
        ()=>CURRENCIES.stone.amount.max(0).add(1).log10().mul(5).mul(simpleETEffect(37)),
        ()=>CURRENCIES.humanoid.amount.mul(simpleETEffect(38)),
        ()=>30 * simpleETEffect(39),

        null,
        null,
        null,
        null,

        null,
        null,
        null,
        null,

        ()=>2 * simpleCETEffect(36),
        ()=>2 * simpleCETEffect(37),
        ()=>2 * simpleCETEffect(38),
        ()=>2 * simpleCETEffect(39),

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().div(6).add(1),
        ()=>CURRENCIES.prestige.total.max(0).add(10).log10().log10().div(6).add(1),
        ()=>CURRENCIES.core.total.max(0).add(10).log10().root(2).div(6).add(1),
        ()=>20,

        null,
        null,
        null,
        null,
    ],

    charged_effect: [
        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().add(1).log10().add(1).pow(simpleCETEffect(20)).pow(simpleCETEffect(36)),
        ()=>CURRENCIES.prestige.total.max(0).add(10).log10().log10().add(1).log10().add(1).pow(simpleCETEffect(21)).pow(simpleCETEffect(37)),
        ()=>CURRENCIES.core.total.max(0).add(10).log10().log10().div(20).add(1).pow(2).pow(simpleCETEffect(22)).pow(simpleCETEffect(38)),
        ()=>Decimal.pow(10,simpleCETEffect(23)).pow(simpleCETEffect(39)),

        null,
        null,
        null,
        null,

        null,
        null,
        null,
        null,

        ()=>1.1 ** simpleCETEffect(36),
        ()=>1.1 ** simpleCETEffect(37),
        ()=>4 ** simpleCETEffect(38),
        ()=>1 * simpleCETEffect(39),

        ()=>2 * simpleCETEffect(36),
        ()=>2 * simpleCETEffect(37),
        ()=>2 * simpleCETEffect(38),
        ()=>2 * simpleCETEffect(39),

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().add(1).log10().div(10).add(1).pow(simpleCETEffect(36)),
        ()=>CURRENCIES.prestige.total.max(0).add(10).log10().log10().add(1).log10().div(10).add(1).pow(simpleCETEffect(37)),
        ()=>CURRENCIES.core.total.max(0).add(10).log10().log10().div(100).add(1).softcap(10,2,'log').pow(simpleCETEffect(38)),
        ()=>2 * simpleCETEffect(39),

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().add(1).log10().add(1).pow(2).mul(simpleCETEffect(36)),
        ()=>CURRENCIES.radium.amount.max(0).add(1).log10().mul(3).mul(simpleCETEffect(37)),
        ()=>CURRENCIES.humanoid.amount.max(0).add(1).log10().mul(2).mul(simpleCETEffect(38)),
        ()=>100 * simpleCETEffect(39),

        null,
        null,
        null,
        null,

        null,
        null,
        null,
        null,

        ()=>2,
        ()=>2,
        ()=>2,
        ()=>2,

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().add(1).log10().add(1),
        ()=>CURRENCIES.prestige.total.max(0).add(10).log10().log10().add(1).log10().add(1),
        ()=>CURRENCIES.core.total.max(0).add(10).log10().log10().add(1).log10().add(1).pow(2),
        ()=>10,

        null,
        null,
        null,
        null,
    ],

    getAvilableSlot(row,charged) {
        if (charged) {
            if (row >= this.charged_rows) return 0;
            for (let i = 0; i < 4; i++) if (!hasEvolutionTree(row*4+i)) return 0;
        }

        var spent = 0
        for (let i = 0; i < 4; i++) {
            if (hasEvolutionTree(row*4+i,charged)) spent += 1;
        }
        var maxed = spent >= 4
        if (row+1 == this.rows) return Math.max(4-spent,0);
        var sum = 0
        for (let i = (row+1)*4; i < this.rows*4; i++) sum += hasEvolutionTree(i,charged);
        var bonus = 0
        if (row < 11) for (let i = 0; i < 4; i++) if (hasEvolutionTree(44+i,charged)) bonus++;
        return maxed ? 0 : Math.max(0,Math.min(1+bonus+Math.max(0,sum-2)-spent,4))
    },
    canAfford(i,slot,charged) {
        let row = Math.floor(i/4)
        if (charged) for (let j = 0; j < 4; j++) if (!hasEvolutionTree(row*4+j)) return false;

        let s = (slot ?? this.getAvilableSlot(row,charged)), only = [], bonus = []
        if (row >= tmp.evo_tree_rows || charged && row >= this.charged_rows) return false;
        for (let i = 0; i < 4; i++) {
            only.push(row*4+i)
            if (hasEvolutionTree(44+i,charged) && !hasEvolutionTree(row*4+i,charged)) bonus.push(row*4+i);
        }
        if (s <= bonus.length) only = bonus
        return i >= 0 && !hasEvolutionTree(i,charged) && tmp.unspent_faith.gte(this.getCost(i,charged)) && only.includes(i) && s > 0
    },
}

function purchaseSharkoidFaith(i) {
    var fc = EVOLUTION_TREE.faith_cost[i], cost = fc[1](player.humanoid.faith[i]), curr = CURRENCIES[fc[0]]

    if (curr.amount.gte(cost)) {
        var bulk = player.humanoid.faith[i].add(1).max(fc[2](curr.amount))
        if (!isSSObserved('mars')) curr.amount = curr.amount.sub(fc[1](bulk.sub(1))).max(0);
        player.humanoid.faith[i] = bulk
    }
}

function purchaseEvolutionTree(i) {
    if (hasEvolutionTree(i) && isSSObserved('mars') && EVOLUTION_TREE.canAfford(i,undefined,true)) {
        player.humanoid.tree.push(i+"C")
        updateUnspentFaith()
    } else if (EVOLUTION_TREE.canAfford(i)) {
        player.humanoid.tree.push(i)
        updateUnspentFaith()
    }
}

function respecEvolutionTree(force,charged) {
    var f = ()=>{
        player.humanoid.tree = charged ? player.humanoid.tree.filter(x => !String(x).includes("C")) : []
        doReset("humanoid",true)
    }

    if (!force && player.radios['confirm-humanoid']) createConfirmationPopup(lang_text("popup-desc")["evolution-tree-respec"],f)
    else f()
}

function updateEvolutionTreeHTML() {
    var lang_texts = lang_text("evolution-tree-ctn")
    var row_available = []
    var charged_row_available = []
    var unl_rows = tmp.evo_tree_rows
    var tf_unl = isSSObserved('mars')
    var maxed_row = []

    for (let x = 0; x < EVOLUTION_TREE.rows; x++) {
        el("evolution-tree-available-"+x).style.display = el_display(x < unl_rows)
        if (x >= unl_rows) continue
        if (hasEvolutionTree(4*x) && hasEvolutionTree(4*x+1) && hasEvolutionTree(4*x+2) && hasEvolutionTree(4*x+3)) maxed_row[x] = true;
        var a = EVOLUTION_TREE.getAvilableSlot(x)
        row_available.push(a)
        var ca = EVOLUTION_TREE.getAvilableSlot(x,true)
        charged_row_available.push(ca)
        el("evolution-tree-available-"+x).innerHTML = lang_text("evolution-tree-row",x+1,Math.max(ca,a))
    }
    for (let x = 0; x < EVOLUTION_TREE.rows*4; x++) {
        var row = Math.floor(x/4)
        var tree_el = el("evolution-tree-"+x+"-div")
        tree_el.style.display = el_display(row < unl_rows)
        if (row >= unl_rows) continue
        let c = tf_unl && row < EVOLUTION_TREE.charged_rows && maxed_row[row]
        let w = lang_texts[x]?.[1]?.(tmp.evolution_tree_effect[x]) ?? "Placeholder"
        if (c) w += "<br class='line'>" + (lang_texts[x]?.[2]?.(tmp.charged_et_effect[x]) ?? "Placeholder")
        el("evolution-tree-"+x+"-desc").innerHTML = w
        tree_el.className = el_classes({locked: c ? !EVOLUTION_TREE.canAfford(x, charged_row_available[row], true) : !EVOLUTION_TREE.canAfford(x, row_available[row]), bought: !c && player.humanoid.tree.includes(x), 'pre-charged': c, charged: player.humanoid.tree.includes(x+"C"), "evolution-tree-btn": true})

        el("evolution-tree-"+x+"-cost").textContent = format(EVOLUTION_TREE.getCost(x, c),0)
    }
    lang_texts = [
        lang_text("cost"),
        lang_text("sharkoid-faith"),
    ]
    for (let [i,j] of Object.entries(EVOLUTION_TREE.faith_cost)) {
        var el_btn = el("shark-faith-cost-"+i)
        var cost = j[1](player.humanoid.faith[i]), curr = CURRENCIES[j[0]]
        el_btn.innerHTML = `+1 ${lang_texts[1]}<br>${lang_texts[0]}: ${format(cost,0)} ${curr.costName}`
        el_btn.className = el_classes({locked: curr.amount.lt(cost), 'huge-btn': true})
    }

    el("sharkoid-faith-spent").innerHTML = tmp.unspent_faith.format(0)
    el("sharkoid-faith-total").innerHTML = tmp.total_faith.format(0)

    el('respec-evolution-tree-2').style.display = el_display(tf_unl)
}

function hasEvolutionTree(x,c) { return c ? player.humanoid.tree.includes(x+"C") : player.humanoid.tree.includes(x) }
function evolutionTreeEffect(x,def=1) { return tmp.evolution_tree_effect[x] ?? def }
function simpleETEffect(x,def=1) { return player.humanoid.tree.includes(x) ? evolutionTreeEffect(x,def) : def }
function chargedETreeEffect(x,def=1) { return tmp.charged_et_effect[x] ?? def }
function simpleCETEffect(x,def=1) { return player.humanoid.tree.includes(x+"C") ? chargedETreeEffect(x,def) : def }

function updateUnspentFaith() {
    var spent = E(0)
    for (let x = 0; x < EVOLUTION_TREE.rows*4; x++) {
        tmp.evolution_tree_effect[x] = EVOLUTION_TREE.effect[x]?.() ?? null
        tmp.charged_et_effect[x] = EVOLUTION_TREE.charged_effect[x]?.() ?? null
        if (player.humanoid.tree.includes(x)) spent = spent.add(EVOLUTION_TREE.getCost(x));
        if (player.humanoid.tree.includes(x+"C")) spent = spent.add(EVOLUTION_TREE.getCost(x,true));
    }
    tmp.unspent_faith = tmp.total_faith.sub(spent).max(0)
}

function getFaithMultiplier() {
    let x = 1
    if (isSSObserved('uranus')) x *= 2;
    if (isSSObserved('sun')) x *= 2;
    return x
}

function updateEvolutionTreeTemp() {
    tmp.evo_tree_rows = 5 + player.humanoid.forge.level.tree
    if (player.feature>=12) tmp.evo_tree_rows++
    if (player.feature>=13) tmp.evo_tree_rows++
    if (player.feature>=14) tmp.evo_tree_rows++

    tmp.total_faith = E(0)
    for (let i = 0; i < player.humanoid.faith.length; i++) {
        tmp.total_faith = tmp.total_faith.add(player.humanoid.faith[i]??0)
    }

    tmp.faith_mult = getFaithMultiplier()

    updateUnspentFaith()

    updateCultivationTemp()
    updateForgeTemp()
}

// Evolution Goal

const EVOLUTION_GOAL = [
    {
        values: E(1e10),

        goal() { return tmp.currency_gain.core.gte(this.values) },
        locked() { return player.core.total.gt(0) },
    },{
        values: E('e270'),

        goal() { return CURRENCIES.core.total.gte(this.values) },
        locked() { return player.core.max_buildings > 0 },
    },{
        values: E('e540'),

        goal() { return CURRENCIES.core.total.gte(this.values) },
        locked() { return false },
    },{
        values: E('ee16'),

        goal() { return CURRENCIES.prestige.total.gte(this.values) },
        locked() { return player.explore.base[4].gt(0) },
    },{
        values: E('e6e9'),

        goal() { return CURRENCIES.prestige.total.gte(this.values) },
        locked() { return player.explore.base.filter(x => x.gt(0)).length>0 },
    },{
        values: E('e6.777e19'),

        goal() { return CURRENCIES.prestige.total.gte(this.values) },
        locked() { return false },
    },{
        values: E('e5e16'),

        goal() { return CURRENCIES.fish.total.gte(this.values) },
        locked() { return player.core.radiation.boost.gt(10) },
    },{
        values: E('e1e18'),

        goal() { return CURRENCIES.fish.total.gte(this.values) },
        locked() { return player.core.radiation.boost.gt(0) },
    },{
        values: E('e6.9e31'),

        goal() { return CURRENCIES.fish.total.gte(this.values) },
        locked() { return false },
    },
]

function hasEvolutionGoal(i) { return player.humanoid.goal.includes(i) }

function updateEvolutionGoalHTML() {
    var lang_texts = lang_text("evolution-goal-ctn")
    for (let i = 0; i < EVOLUTION_GOAL.length; i++) {
        var el_ctn = el("evolution-goal-"+i), ctn = EVOLUTION_GOAL[i], lang = lang_texts[i]

        var goal = hasEvolutionGoal(i), locked = ctn.locked()

        el_ctn.className = el_classes({locked: !goal && locked, bought: goal, 'evolution-goal-ctn': true})
        el_ctn.innerHTML = `<b>[${lang_text("evolution-goal-status",goal,locked)}]</b><br>${lang[0](ctn.values)}<br><b>${lang_text("reward")}:</b> ${lang[1]}`
    }
}

function loadEvolutionTree(tree,index) {
    var o = index?tree:tree.map(x => convertTreeToIndex(x))
    o = o.filter(x => typeof x == "number").sort((a,b)=>b-a).concat(o.filter(x => String(x).includes("C")).map(x => +x.split("C")[0]).sort((a,b)=>b-a))
    console.log(o)
    o.forEach(x => purchaseEvolutionTree(x))
}

function convertTreeToIndex(n) {
    var c = String(n).includes("C");
    if (c) n = +n.split("C")[0];

    var row = Math.floor(n/10)

    return (n - 6*row - 5) + (c ? "C" : 0)
}

function convertIndexToTree(n) {
    var c = String(n).includes("C");
    if (c) n = +n.split("C")[0];

    var row = Math.floor(n/4)

    return (n%4 + 10*row + 11) + (c ? "C" : 0)
}

function convertTreeToString(tree) {
    return tree.map(x=>convertIndexToTree(x)).join(",")
}

function convertStringToTree(str) {
    return str.split(",").map(x=>convertTreeToIndex(x))
}

function importEvolutionTree() {
    createPromptPopup(lang_text('popup-desc')["evolution-tree-import"],x=>{
        let y = []
        for (let z of x.split(",")) {
            let c = z.includes("C");
            z = parseInt(z.split("C")[0])

            if (isNaN(z)) y.push(z + (c ? "C" : ""));
        }
        loadEvolutionTree(y) // x.split(",").map(y=>parseInt(y)).filter(y=>!isNaN(y))
    })
}

function exportEvolutionTree() {
    copyToClipboard(convertTreeToString(player.humanoid.tree))
    addNotify(lang_text("notify-desc")["copy_to_clipboard"])
}

function calculateEvolutionTreeCost(tree) {
    var sum = 0, a = []
    console.log(tree)
    for (let x of tree) if (!a.includes(x)) {
        var c = String(x).includes("C"); x = c ? +x.split("C")[0] : x;
        var cost = EVOLUTION_TREE.getCost(x,c)
        sum += isNaN(cost) ? 0 : cost
        a.push(x)
    }
    return sum
}

function openEvolutionTreePreset() {
    var reload = function () {
        el("presets-temp").innerHTML = ""
        player.humanoid.tree_preset.forEach((x,i) => {
            var h = `
            <div class="tree-preset">
                <input type="text" class="popup-input" id="preset-${i}-name" value="${x[0]}" style="font-weight:bold; font-size: 20px; text-align: center">
                <input type="text" class="popup-input" id="preset-${i}-tree" value="${x[1]}">
                <div id="preset-${i}-tree-cost"></div>
                <button id="remove-preset-${i}">${lang_text("remove")}</button>
                <button id="overwrite-preset-${i}">${lang_text("overwrite-current")}</button>
                <button id="load-preset-${i}">${lang_text("load")}</button>
                <button id="force-preset-${i}">${lang_text("force-load")}</button>
            </div>
            `
            el("presets-temp").innerHTML += h
        })
        player.humanoid.tree_preset.forEach((x,i) => {
            var update_cost = function () {
                var cost = calculateEvolutionTreeCost(convertStringToTree(player.humanoid.tree_preset[i][1]))
                el("preset-" + i + "-tree-cost").innerHTML = `${lang_text("cost")}: ${format(cost,0)} ${lang_text("sharkoid-faith")}`
            }

            el("preset-" + i + "-name").onchange = function () {
                player.humanoid.tree_preset[i][0] = this.value
            }
            el("preset-" + i + "-tree").onchange = function () {
                player.humanoid.tree_preset[i][1] = this.value
                update_cost()
            }

            el("remove-preset-" + i).onclick = function () {
                player.humanoid.tree_preset.splice(i,1)
                reload()
            }
            el("overwrite-preset-" + i).onclick = function () {
                var o = convertTreeToString(player.humanoid.tree)
                player.humanoid.tree_preset[i][1] = o
                el("preset-" + i + "-tree").value = o
                update_cost()
            }
            el("load-preset-" + i).onclick = function () {
                loadEvolutionTree(convertStringToTree(player.humanoid.tree_preset[i][1]),true)
            }
            el("force-preset-" + i).onclick = function () {
                respecEvolutionTree(true)
                updateEvolutionTreeTemp()
                loadEvolutionTree(convertStringToTree(player.humanoid.tree_preset[i][1]),true)
            }

            update_cost()
        })
    }

    createNormalPopup(`
        <button id="new-preset-temp" class="big-btn">${lang_text("new-preset")}</button>
        <div id="presets-temp"></div>
    `)

    el("new-preset-temp").onclick = function () {
        player.humanoid.tree_preset.push(["Preset",convertTreeToString(player.humanoid.tree)])
        reload()
    }

    reload()
}

// Setup HTML

function setupEvolutionHTML() { //  onmouseover="evolution_tree_hover = ${x}" onmouseleave="evolution_tree_hover = -1"
    let h = ""
    var lang_texts = lang_text("evolution-tree-ctn")
    for (let x = 0; x < EVOLUTION_TREE.rows*4; x++) {
        var row = Math.floor(x/4)
        if (x % 4 == 0) h += `<div><div class="evolution-tree-avilable" id="evolution-tree-available-${row}"></div></div>`
        var y = 10*(row+1)
        h += `<button class="evolution-tree-btn" id="evolution-tree-${x}-div" onclick="purchaseEvolutionTree(${x})">
        <div class="etb-name">${lang_texts[x]?.[0]??"Placeholder"} [${y+x%4+1}]</div>
        <div class="etb-cost">${lang_text("cost")}: <span id="evolution-tree-${x}-cost">${EVOLUTION_TREE.getCost(x)}</span></div>
        <div id="evolution-tree-${x}-desc">Hello chat</div>
        </button>`
    }
    el("evolution-tree").innerHTML = h

    h = ""
    for (let [i,j] of Object.entries(EVOLUTION_TREE.faith_cost)) {
        h += `<button class="huge-btn" id="shark-faith-cost-${i}" onclick="purchaseSharkoidFaith(${i})"></button>`
    }
    el("sharkoid-faith-btns").innerHTML = h

    h = ""
    for (let x = 0; x < EVOLUTION_GOAL.length; x++) h += `<button class="evolution-goal-ctn" id="evolution-goal-${x}">ARGH</button>`
    el("evolution-goal-grid").innerHTML = h

    setupCultivationHTML()
}