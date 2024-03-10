const el = id => document.getElementById(id);
const FPS = 30;

function toTextStyle(text,style,id) { return `<text-style text="${style}" ${id ? `id="${id}"` : ""}>${text}</text-style>` }

var player = {}, date = Date.now(), diff = 0;

function loop() {
    if (offline.active) return

    updateTemp()

    diff = Date.now()-date;
    updateOptions()
    updateHTML()
    calc(diff/1000)
    date = Date.now()
}

const TOP_CURR = [
    {
        curr: "prestige",
        req: ()=>player.total_fish.gte(CURRENCIES.prestige.require),
    },
    {
        unl: ()=>player.core.times > 0 || hasDepthMilestone(0,4),
        curr: "core",
        req: ()=>player.prestige.total.gte(CURRENCIES.core.require),
    },
]

const PROGRESS = [
    {
        cond_text: true,
        get amount() { return CURRENCIES.fish.total },
        require: 1e40,
        logHeight: 1,
    },{
        auto: true,
        get amount() { return CURRENCIES.prestige.amount },
        require: 1e3,
    },{
        auto: true,
        get amount() { return CURRENCIES.prestige.amount },
        require: 1e7,
        logHeight: 1,
    },{
        auto: true,
        get amount() { return player.shark_level },
        require: 110,
    },{
        auto: true,
        get amount() { return player.explore.depth[0] },
        require: 10935,
    },{
        cond_text: true,
        get amount() { return CURRENCIES.prestige.total },
        require: '1e450',
        logHeight: 1,
    },
]

function increaseFeature(v) {
    if (player.feature == v-1) player.feature++
}

const CONFIRMATIONS = {
    prestige: [()=>player.prestige.times>0],
    core: [()=>player.core.times>0],
}