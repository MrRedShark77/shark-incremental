const CORE_ASSEMBLER = [
    {
        color: ['#ff5500','#feff00'],

        get res_text() { return CURRENCIES.core.costName },
        get base() { return CURRENCIES.core.amount },

        temperature(x) {
            var y = this.base.max(0).add(1).log10().div(4).mul(x)
            if (hasEvolutionTree(28)) y = y.mul(2)
            return y
        },
    },{
        color: ['#FFE400','#ffa500'],

        get res_text() { return CURRENCIES.fish.costName },
        get base() { return CURRENCIES.fish.amount },

        temperature(x) {
            var y = this.base.max(0).add(10).log10().log10()
            y = hasEvolutionTree(29) ? y.pow(2).div(1.5) : y.mul(1.5)
            return y.mul(x)
        },
    },{
        color: ['#fff','#00ffff'],

        get res_text() { return CURRENCIES.prestige.costName },
        get base() { return CURRENCIES.prestige.amount },

        temperature(x) {
            var y = this.base.max(0).add(10).log10().log10()
            y = hasEvolutionTree(30) ? y.pow(2) : y.mul(2)
            return y.mul(x)
        },
    },{
        color: ['#BFC8CD','#93a3ac'],

        get res_text() { return lang_text("full-shark-level") },
        get base() { return player.shark_level },

        temperature(x) {
            return this.base.root(hasEvolutionTree(31) ? 1.39 : 2.5).mul(x)
        },
    },
]

var ca_builder = -1

function moveCADirection(before,d) {
    switch (d) {
        case 0:
            return (before+12)%16
        case 1:
            return (before+4)%16
        case 2:
            return Math.floor(before/4)*4+(before%4+3)%4
        case 3:
            return Math.floor(before/4)*4+(before%4+1)%4
    }
}

function setupCoreAssemblerHTML() {
    var h = ""

    for (let x = 0; x < 16; x++) {
        /**
        var ii = Math.floor(Math.random()*4)
        var r = CORE_REACTOR[ii], a = CORE_ASSEMBLER[ii]
        h += `<button class='ca-grid-btn active' id="ca-grid-${x}" style="--color1: ${a.color[0]}; --color2: ${a.color[1]};">
            <div>${r.symbol}</div>
            100%
        </button>`
        **/
        h += `<button class='ca-grid-btn' id="ca-grid-${x}-div" onclick="placeCABuildling(${x})"></button>`
    }

    el("core-assembler-grid").innerHTML = h, h = ''

    for (let x = 0; x < 16; x++) el(`ca-grid-${x}-div`).addEventListener('contextmenu', e => {
        e.preventDefault()
        placeCABuildling(x,-1)
    });

    for (let i = 0; i < CORE_ASSEMBLER.length; i++) {
        var r = CORE_REACTOR[i], a = CORE_ASSEMBLER[i]

        h += `<button class="ca-building" id="ca-building-${i}-div" onclick="chooseCABuilding(${i})">
        <div class="table-center"><div>${lang_text(`core-${i}-name`)}</div><div class="ca-building-symbol" style="--color1: ${a.color[0]}; --color2: ${a.color[1]};"></div></div>
        <div id="ca-building-${i}-desc">???</div>
        </button>`
    }

    el("core-assembler-buildings").innerHTML = h, h = ""
}

function chooseCABuilding(i) {
    ca_builder = ca_builder == i ? -1 : i
}

const CA_MAX_BUILDINGS_COST = [1e72,1e76,1e101,1e109,1e196,1e300,'1e650','1e800','1e10000','1e11000','1e16000','1e25000','e38000','e52000','e69000','ee5']

function purchaseCAMaxBuildings() {
    if (CURRENCIES.core.amount.gte(CA_MAX_BUILDINGS_COST[player.core.max_buildings]??EINF)) {
        player.core.max_buildings++
    }
}

function placeCABuildling(i,b=ca_builder) {
    if (b == -1 || (player.core.assembler[i] >= 0 || tmp.totalCABuildings < player.core.max_buildings) && tmp.placedACBuildings[b] < tmp.maxCABuildingEach) {
        player.core.assembler[i] = b

        updateCoreAssemblerTemp()
    }
}

function updateCoreAssemblerHTML() {
    var req = CA_MAX_BUILDINGS_COST[player.core.max_buildings]??EINF
    el('ca-building-limit').innerHTML = lang_text('core-assembler-building-limit',player.core.max_buildings,req,tmp.totalCABuildings)
    el('ca-building-limit').className = el_classes({locked: CURRENCIES.core.amount.lt(req), 'huge-btn': true})

    var icons = [icon("up-arrow"), icon("down-arrow")]
    var total_temp = E(6150)

    for (let i = 0; i < CORE_ASSEMBLER.length; i++) {
        var r = CORE_REACTOR[i], a = CORE_ASSEMBLER[i]

        var ss = player.core.assembler_strength[i], s = tmp.ca_building_strength[i]

        // el(`ca-building-${i}-div`).className = el_classes({'ca-building': true, locked: tmp.placedACBuildings[i]>=1 || tmp.totalCABuildings>=player.core.max_buildings})

        el(`ca-building-${i}-desc`).innerHTML = lang_text('core-assembler-building-stats',compareStyle(formatPercent(s,0),s,ss),tmp.placedACBuildings[i],tmp.maxCABuildingEach) + "<br>"
        + lang_text(`ca-building-base`,a.res_text) + "<br>"
        + lang_text(`ca-building-temp`,compareStyle(format(a.temperature(s))+"°K",s,ss)) // + " " + lang_text(`core-${i}-assemble`)

        total_temp = total_temp.add(a.temperature(s))
    }

    if (ca_builder >= 0) {
        var a = CORE_ASSEMBLER[ca_builder]
        el('core-assembler-choose-div').innerHTML = "<div>"+lang_text('core-assembler-choose')+": "+lang_text(`core-${ca_builder}-name`).bold()+`</div><div class="ca-building-symbol" style="--color1: ${a.color[0]}; --color2: ${a.color[1]};"></div>`
    } else el('core-assembler-choose-div').innerHTML = lang_text('core-assembler-erase')

    for (let x = 0; x < 16; x++) {
        var b = player.core.assembler[x], b_el = el(`ca-grid-${x}-div`)

        b_el.className = el_classes({'ca-grid-btn': true, active:b>=0})

        if (b>=0) {
            var r = CORE_REACTOR[b], a = CORE_ASSEMBLER[b]

            b_el.style.setProperty("--color1", a.color[0])
            b_el.style.setProperty("--color2", a.color[1])

            b_el.innerHTML = `<div>${r.symbol}</div>`+formatPercent(tmp.cab_strengths[x],0)
        } else {
            b_el.innerHTML = ""
        }
    }

    el("core-temp-after").innerHTML = compareStyle(format(total_temp)+"°K",total_temp,getCoreTemperature())
}

function updateCoreAssemblerTemp() {
    tmp.totalCABuildings = player.core.assembler.filter(b => b>=0).length

    tmp.maxCABuildingEach = Math.min(2,1 + Math.floor(player.core.max_buildings/4))+Math.ceil(Math.max(player.core.max_buildings-8,0)/4)

    tmp.placedACBuildings = [0,0,0,0]
    tmp.ca_building_strength = [0,0,0,0]
    tmp.cab_strengths = []

    var assembler = player.core.assembler

    for (let x = 0; x < 16; x++) {
        var b = assembler[x]
        if (b>=0) {
            var s = 1
            for (let y = 0; y < 4; y++) {
                var bb = assembler[moveCADirection(x,y)]
                if (bb>=0) s += 0.5
            }
            tmp.ca_building_strength[b]+=s
            tmp.cab_strengths[x]=s
            tmp.placedACBuildings[b]++
        }
    }
}