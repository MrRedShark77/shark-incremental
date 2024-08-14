const FORGE = {
    anvil: {
        max: 3,
        unl: ()=>true,

        time: [10,300,6000],
        cost: [
            [
                ['bismuth',1e3],
            ],[
                ['bismuth',1e7],
                ['diamond',1e4],
            ],[
                ['diamond',1e17],
                ['obsidian',1e5],
                ['vibranium',1000],
            ],
        ],
    },
    drill: {
        max: 7,
        unl: ()=>hasForgeUpgrade('anvil'),

        time: [150, 300, 600, 900, 3000, 6000, 2e7],
        cost: [
            [
                ['stone',1e47],
                ['bismuth',5e3],
            ],[
                ['stone',1e51],
                ['bismuth',2.5e5],
            ],[
                ['stone',1e78],
                ['bismuth',1e9],
                ['diamond',1e7],
            ],[
                ['obsidian',100],
            ],[
                ['stone',1e128],
                ['diamond',1e12],
                ['obsidian',1e4],
            ],[
                ['stone',1e155],
                ['obsidian',1e5],
                ['vibranium',1000],
            ],[
                ['stone',1e195],
                ['obsidian',1e9],
                ['vibranium',1e6],
            ],
        ],

        effect(l) {
            var x = Decimal.mul(l,0.05).add(1)

            return x
        },
        effDesc: x => formatPow(x),
    },
    shard: {
        max: 4,
        unl: ()=>hasForgeUpgrade('anvil'),

        time: [150,300,600,1800],
        cost: [
            [
                ['prestige','ee50',true],
                ['bismuth',5e3],
            ],[
                ['prestige','e3e55',true],
                ['bismuth',1e6],
            ],[
                ['prestige','e3e63',true],
                ['diamond',1e6],
            ],[
                ['prestige','e4.8e92',true],
                ['obsidian',1e4],
            ],
        ],

        effect(l) {
            var x = Decimal.pow(10,l)

            return x
        },
        effDesc: x => formatPow(x),
    },
    tree: {
        max: 4,
        unl: ()=>hasForgeUpgrade('anvil'),

        time: [150,600,900,6000],
        cost: [
            [
                ['humanoid',36,true],
                ['bismuth',1e5],
            ],[
                ['humanoid',45,true],
                ['bismuth',1e8],
                ['diamond',1e6],
            ],[
                ['humanoid',62,true],
                ['diamond',1e11],
                ['obsidian',1e2],
            ],[
                ['humanoid',81,true],
                ['obsidian',1e6],
                ['vibranium',5e3],
            ],
        ],
    },
    adv_research: {
        max: 3,
        unl: ()=>hasForgeUpgrade('anvil',2),

        time: [300, 1800, 1e7],
        cost: [
            [
                ['prestige','ee63',true],
                ['diamond',1e5],
            ],[
                ['prestige','e2e85',true],
                ['diamond',2e11],
                ['obsidian',1e3],
            ],[
                ['prestige','e2e115',true],
                ['obsidian',1e6],
                ['vibranium',1e4],
            ],
        ],
    },
    auto: {
        max: 2,
        unl: ()=>hasForgeUpgrade('anvil',2),

        time: [300, 1800],
        cost: [
            [
                ['core','e5400',true],
                ['diamond',1e5],
            ],[
                ['obsidian',1e3],
            ],
        ],
    },
    shark: {
        max: 4,
        unl: ()=>hasForgeUpgrade('anvil',3),

        time: [6000, 1e7, 1e8,1e10],
        cost: [
            [
                ['fish','ee91',true],
                ['vibranium',1e3],
            ],[
                ['fish','ee110',true],
                ['vibranium',1e5],
            ],[
                ['fish','ee159',true],
                ['vibranium',1e7],
            ],[
                ['fish','e2e520',true],
                ['vibranium',1e18],
            ],
        ],

        effect(l) {
            var x = Decimal.pow(2,l)

            return x
        },
        effDesc: x => formatMult(x),
    },
    refined_shard: {
        max: 3,
        unl: ()=>hasForgeUpgrade('anvil',3),

        time: [6000, 2e7, 3e9],
        cost: [
            [
                ['prestige','e2.5e105',true],
                ['vibranium',1e3],
            ],[
                ['prestige','e5e127',true],
                ['vibranium',1e6],
            ],[
                ['prestige','e1e428',true],
                ['vibranium',1e12],
            ],
        ],

        effect(l) {
            var x = Decimal.mul(l,0.01).add(1)

            return x
        },
        effDesc: x => formatPow(x),
    },
    wormhole: {
        max: 4,
        unl: ()=>player.feature >= 16,

        time: [1e8,3e8,6e8,5e9],
        cost: [
            [
                ['stone','e243'],
                ['vibranium',1e7],
            ],[
                ['humanoid',178,true],
                ['vibranium',1e8],
            ],[
                ['core','e16e4',true],
                ['vibranium',1e9],
            ],[
                ['fish','e8e369',true],
                ['vibranium',1e12],
            ],
        ],
    },
}

const FORGE_KEYS = Object.keys(FORGE)

var forge_tab = ''

function hasForgeUpgrade(i, lvl=1) { return player.humanoid.forge.level[i] >= lvl }
function forgeUpgradeEffect(i,def=1) { return tmp.forge_effect[i] ?? def }

function updateForgeHTML() {
    var lang_forge = lang_text('forge')
    var locks = {}, queue = player.humanoid.forge.queue

    el('forge-status').innerHTML = lang_text('forge-progress',
    lang_forge[queue]?.[0],
    queue != '' && formatTime(Decimal.sub(FORGE[queue].time[player.humanoid.forge.level[queue]], player.humanoid.forge.time).div(tmp.forge_speed).max(0),1))
    +' | '+lang_text('forge-speed',formatMult(tmp.forge_speed))

    for (let i of FORGE_KEYS) {
        var f = FORGE[i]
        var forge_el = el(`forge-div-${i}`), unl = f.unl()

        forge_el.style.display = el_display(unl)

        if (!unl) continue

        var lvl = player.humanoid.forge.level[i]
        el(`forge-level-${i}`).innerHTML = lvl > 0 ? romanize(lvl) : '';

        var lock = []

        if (lvl < f.max) {
            for (let i = 0; i < f.cost[lvl].length; i++) {
                var c = f.cost[lvl][i]
                if (CURRENCIES[c[0]].amount.lt(c[1])) lock.push(i)
            }

            locks[i] = lock
        }

        forge_el.className = el_classes({bought: lvl >= f.max, 'forge-btn': true, 'notify': player.humanoid.forge.queue != i && lvl < f.max && tmp.forge_affords[i]})
    }

    el('forge-description-div').style.display = el_display(forge_tab != '')

    if (forge_tab != '') {
        var f = FORGE[forge_tab], lf = lang_forge[forge_tab], lvl = player.humanoid.forge.level[forge_tab], maxed = lvl >= f.max

        var h = `<h2><b>${lf[0]} ${lvl > 0 ? romanize(lvl) : ''} ${maxed ? '['+lang_text('maxed')+']' : ""}</b></h2>`

        h += `<div>${lf[1]}</div>`

        if (f.effDesc) h += `<p><b>${lang_text('effect')}:</b> ${f.effDesc(tmp.forge_effect[forge_tab]) + (maxed ? "" : " ➜ " + f.effDesc(f.effect(lvl+1)))}</p>`

        var el_btn = el('forge-btn')

        el_btn.style.display = el_display(!maxed)

        if (!maxed) {
            var cost = f.cost[lvl], lock = locks[forge_tab]
            h += `
            <p>
                <b>${lang_text('cost')}:</b> ${cost.map((x,i) => `<span ${lock.includes(i) ? `style="color: #800"` : ""}>${format(x[1],0)}</span>` + " " + CURRENCIES[x[0]].costName).join(", ")} + ${formatTime(Decimal.div(f.time[lvl], tmp.forge_speed),1)}
            </p>
            `

            el_btn.innerHTML = lang_text('forge-button')[player.humanoid.forge.queue == "" ? tmp.forge_affords[forge_tab] ? 1 : 2 : 0]
            el_btn.className = el_classes({locked: player.humanoid.forge.queue == "" && !tmp.forge_affords[forge_tab], 'big-btn': true})
        }

        el('forge-description').innerHTML = h
    }
}

function doForge() {
    if (player.humanoid.forge.queue == "") if (forge_tab == "" || !tmp.forge_affords[forge_tab]) return

    if (player.humanoid.forge.queue == "") {
        player.humanoid.forge.queue = forge_tab

        FORGE[forge_tab].cost[player.humanoid.forge.level[forge_tab]].filter(x => !x[2]).forEach(x => CURRENCIES[x[0]].amount = CURRENCIES[x[0]].amount.sub(x[1]))
    } else {
        var q = player.humanoid.forge.queue

        player.humanoid.forge.queue = ""

        FORGE[q].cost[player.humanoid.forge.level[q]].filter(x => !x[2]).forEach(x => CURRENCIES[x[0]].amount = CURRENCIES[x[0]].amount.add(x[1]))
    }

    player.humanoid.forge.time = E(0)
}

function updateForgeTemp() {
    var f15 = player.feature >= 15

    if (!f15) tmp.forge_affords = {}
    for (let i of FORGE_KEYS) {
        var f = FORGE[i], lvl = player.humanoid.forge.level[i]

        if (f.effect) tmp.forge_effect[i] = f.effect(lvl)

        if (f15) tmp.forge_affords[i] = f.unl() && lvl < f.max && f.cost[lvl].filter(x => CURRENCIES[x[0]].amount.lt(x[1])).length == 0
    }

    var fs = E(1)

    fs = fs.mul(simpleETEffect(40)).mul(simpleETEffect(41)).mul(simpleETEffect(42)).mul(simpleETEffect(43)).mul(remnantUpgEffect(3))

    tmp.forge_speed = fs
}

function setupForgeHTML() {
    var h = ""
    
    for (let i of FORGE_KEYS) {
        h += `
        <button id="forge-div-${i}" class="forge-btn" style="background-image: url('textures/forge/${i}.png');" onclick="forge_tab = '${i}'">
            <div id="forge-level-${i}"></div>
        </button>
        `
    }

    el("forge-table").innerHTML = h
}