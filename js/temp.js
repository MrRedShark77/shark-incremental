var tmp = {}
var options = {
    notation: "mixed_sc",
    max_range: 9,
    pass: 0,
}

function reloadTemp() {
    tmp = {
        currency_gain: {},

        shark_bonus: {},
        shark_upg_eff: [],

        shark_elo: E(0),
        shark_rank_bonus: {},

        research_eff: {},

        su_el: {},
        su_locked: {},

        depth_gain: [],
        explore_mult: [],
        explore_eff: [],
        explore_upg_boost: [],
        explore_mil_reached: [],

        core_bonus_level: [],
        core_effect: [],
        cr_boost: [],

        ca_building_effect: [],
        ca_building_strength: [],

        evolution_tree_effect: [],
    }

    for (let x in EXPLORE) {
        tmp.explore_mil_reached[x] = []
        tmp.explore_upg_boost[x] = [E(1),E(1)]
    }
}

function updateTemp() {
    tmp.cr_active = player.core.radiation.active

    updateResearchTemp()
    updateEvolutionTreeTemp()
    updateCoreTemp()
    updateExplorationTemp()
    updateSharkTemp()

    for (let [i,v] of Object.entries(CURRENCIES)) tmp.currency_gain[i] = v.gain??E(0)
}

function updateOptions() {
    options.notation = ['sc','st','mixed_sc'][player.radios["notation"]]
    options.max_range = [3,6,9,12,15][player.radios["comma-format"]]
}