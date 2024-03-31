var tab = 0, stab = [0,0,0,0,0], tab_name = 'shark'

const TAB_IDS = {
    'shark': {
        name: "Shark",
        html: updateSharkHTML,
    },
    'options': {
        name: "Options",
        html: ()=>{
            for (let [i,x] of Object.entries(CONFIRMATIONS)) {
                el("radio-confirm-"+i).style.display = el_display(x[0]())
            }
        },
    },
    'auto': {
        name: "Automation",
        html: updateAutomationHTML,
    },
    'research': {
        name: "Research",
        html: updateResearchHTML,
    },
    'explore': {
        name: "Exploration",
        html: updateExplorationHTML,
    },
    'core-reactor': {
        name: "Core Reactor",
        html: updateCoreHTML,
    },
    'core-radiation': {
        name: "Core Radiation",
        html: updateCoreRadiation,
    },
    'core-assembler': {
        name: "Core Assembler",
        html: updateCoreAssemblerHTML,
    },
}

const TABS = [
    {
        stab: "shark",
    },{
        stab: "options",
    },{
        unl: ()=>player.feature>=2,
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
    },
]

function switchTab(t,st) {
    tab = t
    if (st !== undefined) stab[t] = st

    let s = TABS[t].stab

    if (Array.isArray(s)) tab_name = s[stab[t]??0][0]
    else tab_name = s
}

function updateTabs() {
    for (let [i,v] of Object.entries(TABS)) {
        let unl = !v.unl || v.unl(), elem, selected = parseInt(i) == tab

        if (Array.isArray(v.stab)) {
            elem = el('stab'+i+'-div')

            elem.style.display = el_display(selected)

            if (selected) v.stab.forEach(([x,u],j) => {
                var s_elem = el('stab'+i+'-'+j+'-button')

                s_elem.style.display = el_display(!u || u())
                s_elem.className = "tab-button stab"+(x == tab_name ? " selected" : "")
            })
        }

        elem = el('tab'+i+'-button')

        elem.style.display = el_display(unl)
        elem.className = "tab-button"+(selected ? " selected" : "")
    }

    for (let [i,v] of Object.entries(TAB_IDS)) {
        let unl = tab_name == i, elem = el(i+"-tab")

        if (!elem) continue;

        elem.style.display = el_display(unl)

        if (unl) v.html?.()
    }
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