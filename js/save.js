const VERSION = 2
const SAVE_ID = "shark_inc_save"
var prevSave = "", autosave

function getPlayerData() {
    let s = {
        fish: E(1),
        total_fish: E(0),
        shark_level: E(0),
        shark_rank: E(0),
        shark_upg: {},

        prestige: {
            shards: E(0),
            total: E(0),
            times: 0,
        },

        research: {},

        explore: {
            unl: 0,
            active: -1,
            best_fish: E(0),
            res: [],
            depth: [],
            base: [],
            upg: [],
        },

        core: {
            fragments: E(0),
            total: E(0),
            times: 0,

            reactor: [],
            
            radiation: {
                active: false,
                amount: E(0),
                gen: E(0),
                boost: E(0),
            },

            assembler: [],
            assembler_strength: [],
            max_buildings: 0,
        },

        humanoid: {
            shark: E(0),
            times: 0,

            faith: [E(0), E(0), E(0)],
            tree: [],
            tree_preset: [],
            transform: false,

            goal: [],

            mining_tier: E(0),
            mining_ascend: E(0),
            ores: {},

            forge: {
                level: {},
                queue: '',
                time: E(0),
            },

            particle_accel: {
                active: -1,
                percent: [],
            },
        },

        singularity: {
            first: false,
            bh: E(0),
            best_bh: E(0),
            remnants: E(0),
            upgs: [],

            dm: E(0),
            total_dm: E(0),
            sac_times: 0,
        },

        solar_system: {
            rocket_parts: [E(0), E(0), E(0)],

            active: "",
            completion: {},
            evo_save: [[],[E(0), E(0), E(0)]],

            observ: E(0),
            total_observ: E(0),

            reserv: E(0),
            traject: E(0),

            sb_upgs: {},
        },

        radios: {},

        auto: {},
        feature: 0,

        latest_time: Date.now(),

        language: "EN",

        VERSION: VERSION,
    }

    for (let x in SHARK_UPGRADES) s.shark_upg[x] = E(0);
    for (let x in AUTOMATION) s.auto[x] = [0,false];
    for (let x in RESEARCH) s.research[x] = E(0);
    for (let x in EXPLORE) {
        s.explore.res[x] = s.explore.depth[x] = s.explore.base[x] = E(0)
        s.explore.upg[x] = [E(0), E(0)]
    }
    for (let x in CORE_REACTOR) {
        s.core.reactor[x] = E(0)
        s.core.assembler_strength[x] = 0
    }
    for (let x = 0; x < 16; x++) s.core.assembler[x] = -1;
    for (let x of ORE_KEYS) s.humanoid.ores[x] = E(0);
    for (let x of FORGE_KEYS) s.humanoid.forge.level[x] = 0;
    for (let x in PARTICLE_ACCELERATOR) s.humanoid.particle_accel.percent[x] = E(0);
    for (let x in REMNANT_UPGS) s.singularity.upgs[x] = E(0);
    for (let x in SPACEBASE_UPGS) s.solar_system.sb_upgs[x] = E(0);

    return s
}

function wipe(reload,start) {
	player = getPlayerData()
    if (start) return
    setupOptions()
    reloadTemp()
    tab = 0, stab = stab.map(x=>0), tab_name = 'shark'
    ores_grid = []
	if (reload) {
        save()
        location.reload()
    }
}

function loadPlayer(load) {
    const DATA = getPlayerData()
    player = deepNaN(load, DATA)
    player = deepUndefinedAndDecimal(player, DATA)

    if (player.singularity.best_bh.gte(4)) player.humanoid.goal = [0,1,2,3,4,5,6,7,8];

    checkVersion()
}

function checkVersion() {
    if (player.VERSION < 2) {
        player.humanoid.faith[2] = E(0)
    }

    player.VERSION = Math.max(player.VERSION, VERSION)
}

function clonePlayer(obj,data) {
    let unique = {}

    for (let k in obj) {
        if (data[k] == null || data[k] == undefined) continue
        unique[k] = Object.getPrototypeOf(data[k]).constructor.name == "Decimal"
        ? E(obj[k])
        : typeof obj[k] == 'object'
        ? clonePlayer(obj[k],data[k])
        : obj[k]
    }

    return unique
}

function deepNaN(obj, data) {
    for (let k in obj) {
        if (typeof obj[k] == 'string') {
            if (data[k] == null || data[k] == undefined ? false : Object.getPrototypeOf(data[k]).constructor.name == "Decimal") if (isNaN(E(obj[k]).mag)) obj[k] = data[k]
        } else {
            if (typeof obj[k] != 'object' && isNaN(obj[k])) obj[k] = data[k]
            if (typeof obj[k] == 'object' && data[k] && obj[k] != null) obj[k] = deepNaN(obj[k], data[k])
        }
    }
    return obj
}

function deepUndefinedAndDecimal(obj, data) {
    if (obj == null) return data
    for (let k in data) {
        if (obj[k] === null) continue
        if (obj[k] === undefined) obj[k] = data[k]
        else {
            if (Object.getPrototypeOf(data[k]).constructor.name == "Decimal") obj[k] = E(obj[k])
            else if (typeof obj[k] == 'object') deepUndefinedAndDecimal(obj[k], data[k])
        }
    }
    return obj
}

function preventSaving() { return tmp.bh_pause || offline.nosave }

function save(auto=false) {
    if (auto && !player.radios.autosave) return
    let str = btoa(JSON.stringify(player))
    if (preventSaving() || findNaN(str, true)) return
    if (localStorage.getItem(SAVE_ID) == '') wipe()
    localStorage.setItem(SAVE_ID,str)
    prevSave = str
    addNotify(lang_text("notify-desc").save)
}

function load(x){
    if(typeof x == "string" && x != ''){
        loadPlayer(JSON.parse(atob(x)))
    } else {
        wipe(false,true)
    }
}

function exporty() {
    let str = btoa(JSON.stringify(player))
    save();
    let file = new Blob([str], {type: "text/plain"})
    window.URL = window.URL || window.webkitURL;
    let a = document.createElement("a")
    a.href = window.URL.createObjectURL(file)
    a.download = "Shark Incremental Save - "+new Date().toGMTString()+".txt"
    a.click()
}

function copyToClipboard(text) {
    let copyText = document.getElementById('copy')
    copyText.value = text
    copyText.style.visibility = "visible"
    copyText.select();
    document.execCommand("copy");
    copyText.style.visibility = "hidden"
}

function export_copy() {
    copyToClipboard(btoa(JSON.stringify(player)))
}

function importy() {
    createPromptPopup(lang_text('popup-desc').import, loadgame=>{
        if (loadgame != null) {
            let keep = player
            try {
                if (findNaN(loadgame, true)) {
                    error("Error Importing, because it got NaNed")
                    return
                }
                localStorage.setItem(SAVE_ID, loadgame)
                location.reload()
            } catch (error) {
                error("Error Importing")
                player = keep
            }
        }
    })
}

function importy_file() {
    let a = document.createElement("input")
    a.setAttribute("type","file")
    a.click()
    a.onchange = ()=>{
        let fr = new FileReader();
        fr.onload = () => {
            let loadgame = fr.result
            if (findNaN(loadgame, true)) {
				error("Error Importing, because it got NaNed")
				return
			}
            localStorage.setItem(SAVE_ID, loadgame)
			location.reload()
        }
        fr.readAsText(a.files[0]);
    }
}

function wipeConfirm() {
    createPromptPopup(lang_text('popup-desc').wipe, p=>{
        if (p == "I'm sorry what I don't want sharks!") wipe()
    })
}

function checkNaN() {
    let naned = findNaN(player)
    if (naned) {
        warn("Game Data got NaNed because of "+naned.bold())
        resetTemp()
        loadGame(false, true)
        tmp.start = 1
        tmp.pass = 1
    }
}

function isNaNed(val) {
    return typeof val == "number" ? isNaN(val) : Object.getPrototypeOf(val).constructor.name == "Decimal" ? isNaN(val.mag) : false
}

function findNaN(obj, str=false, data=getPlayerData(), node='player') {
    if (str ? typeof obj == "string" : false) obj = JSON.parse(atob(obj))
    for (let k in obj) {
        if (typeof obj[k] == "number") if (isNaNed(obj[k])) return node+'.'+k
        if (str) {
            if (typeof obj[k] == "string") if (data[k] == null || data[k] == undefined ? false : Object.getPrototypeOf(data[k]).constructor.name == "Decimal") if (isNaN(E(obj[k]).mag)) return node+'.'+k
        } else {
            if (obj[k] == null || obj[k] == undefined ? false : Object.getPrototypeOf(obj[k]).constructor.name == "Decimal") if (isNaN(E(obj[k]).mag)) return node+'.'+k
        }
        if (typeof obj[k] == "object") {
            let node2 = findNaN(obj[k], str, data[k], (node?node+'.':'')+k)
            if (node2) return node2
        }
    }
    return false
}