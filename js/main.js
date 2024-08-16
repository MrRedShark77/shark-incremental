const el = id => document.getElementById(id);
const FPS = 30;

function toTextStyle(text,style="",id) { return `<text-style text="${style}" ${id ? `id="${id}"` : ""}>${text}</text-style>` }
function toColoredText(text,color="") { return `<text-style style="color:${color}">${text}</text-style>` }
function compareStyle(text,x,y) { return Decimal.eq(x,y)?toTextStyle(text):Decimal.gte(x,y)?toTextStyle(icon("up-arrow")+text,"green"):toTextStyle(icon("down-arrow")+text,"red") }

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
    {
        unl: ()=>player.humanoid.times > 0 || player.feature >= 10,
        curr: "humanoid",
        req: ()=>player.fish.gte(CURRENCIES.humanoid.require),
    },
    {
        unl: ()=>player.feature >= 18,
        reset: "sacrifice",
        curr: "dark-matter",
        req: ()=>player.fish.gte(CURRENCIES['dark-matter'].require) && player.singularity.bh.gte(8),
    },
]

const PROGRESS = [
    {
        cond_text: true,
        get amount() { return CURRENCIES.fish.total },
        require: 1e36,
        logHeight: 1,
    },{
        auto: true,
        get amount() { return CURRENCIES.prestige.amount },
        require: 1e3,
    },{
        auto: true,
        get amount() { return CURRENCIES.prestige.amount },
        require: 1e9,
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
    },{
        auto: true,
        get amount() { return CURRENCIES.core.amount },
        require: 10000,
    },{
        auto: true,
        get amount() { return player.shark_level },
        require: 1000,
    },{
        auto: true,
        get amount() { return CURRENCIES.core.amount },
        require: 1e72,
        logHeight: 1,
    },{
        auto: true,
        get amount() { return CURRENCIES.fish.total },
        require: 'e6e15',
        logHeight: 2,
    },{
        cond_text: true,
        get amount() { return CURRENCIES.fish.total },
        require: 'e1.5e18',
        logHeight: 2,
    },{
        auto: true,
        get amount() { return CURRENCIES.humanoid.amount },
        require: 10,
    },{
        auto: true,
        get amount() { return CURRENCIES.humanoid.amount },
        require: 20,
    },{
        auto: true,
        get amount() { return player.humanoid.mining_tier },
        require: 6,
    },{
        auto: true,
        get amount() { return player.humanoid.mining_tier },
        require: 16,
    },{
        auto: true,
        get amount() { return player.humanoid.mining_tier },
        require: 34,
    },{
        get auto() { return player.singularity.first },
        cond_text: true,
        get amount() { return player.humanoid.particle_accel.percent.reduce((x,y)=>Decimal.add(x,y)) },
        require: 6,
    },{
        auto: true,
        get amount() { return player.singularity.best_bh },
        require: 8,
    },{
        cond_text: true,
        get amount() { return CURRENCIES.fish.total },
        require: 'ee10000',
        logHeight: 2,
    },{
        auto: true,
        get amount() { return CURRENCIES["dark-matter"].total },
        require: 1e12,
        logHeight: 1,
    },
]

function increaseFeature(v) {
    if (player.feature == v-1) player.feature++
}

const CONFIRMATIONS = {
    prestige: [()=>player.prestige.times>0],
    core: [()=>player.core.times>0],
    humanoid: [()=>player.humanoid.times>0],
    'black-hole': [()=>player.singularity.first],
    sacrifice: [()=>player.singularity.sac_times>0],
}