var tmp = {}
var options = {
    notation: "mixed_sc",
    max_range: 9,
}

function reloadTemp() {
    tmp = {
        currency_gain: {},

        shark_bonus: {},
        shark_upg_eff: [],

        research_eff: {},

        su_el: {},
        su_locked: {},

        depth_gain: [],
        explore_mult: [],
        explore_eff: [],
        explore_upg_boost: [],
        explore_mil_reached: [],

        core_effect: [],
    }

    for (let x in EXPLORE) {
        tmp.explore_mil_reached[x] = []
        tmp.explore_upg_boost[x] = [E(1),E(1)]
    }
}

function updateTemp() {
    updateResearchTemp()
    updateCoreTemp()
    updateExplorationTemp()
    updateSharkTemp()

    for (let [i,v] of Object.entries(CURRENCIES)) tmp.currency_gain[i] = v.gain??E(0)
}

function updateOptions() {
    options.notation = ['sc','st','mixed_sc'][player.radios["notation"]]
    options.max_range = [3,6,9,12,15][player.radios["comma-format"]]
}