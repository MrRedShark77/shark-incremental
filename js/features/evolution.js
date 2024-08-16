const EVOLUTION_TREE = {
    faith_cost: [
        ["fish",x=>Decimal.pow(10,Decimal.pow(hasResearch('f2') ? 1e3 : 1e4,x.add(1))),x=>x.log10().log(hasResearch('f2') ? 1e3 : 1e4).floor()],
        ["prestige",x=>Decimal.pow(10,Decimal.pow(hasResearch('f2') ? 1e2 : 1e3,x.add(1))),x=>x.log10().log(hasResearch('f2') ? 1e2 : 1e3).floor()],
        ["core",x=>Decimal.pow(1e60,x.add(1).scale(20,2,'P')),x=>x.log(1e60).scale(20,2,'P',true).floor()],
    ],

    getCost: i => Math.max(0,1 + Math.floor(i/4)),

    rows: 12,

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

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().div(60).add(1).mul(simpleETEffect(36)),
        ()=>CURRENCIES.prestige.total.max(0).add(10).log10().log10().div(45).add(1).mul(simpleETEffect(37)),
        ()=>CURRENCIES.core.total.max(0).add(1).log10().root(2).div(60).add(1).mul(simpleETEffect(38)),
        ()=>2 * simpleETEffect(39),

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().div(2).mul(simpleETEffect(36)),
        ()=>CURRENCIES.stone.amount.max(0).add(1).log10().mul(5).mul(simpleETEffect(37)).overflow(1e9,0.5),
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

        ()=>2,
        ()=>2,
        ()=>2,
        ()=>2,

        ()=>CURRENCIES.fish.total.max(0).add(10).log10().log10().div(6).add(1),
        ()=>CURRENCIES.prestige.total.max(0).add(10).log10().log10().div(6).add(1),
        ()=>CURRENCIES.core.total.max(0).add(10).log10().root(2).div(6).add(1),
        ()=>20,

        null,
        null,
        null,
        null,
    ],

    getAvilableSlot(row) {
        var spent = 0
        for (let i = 0; i < 4; i++) {
            if (player.humanoid.tree.includes(row*4+i)) spent += 1;
        }
        if (row+1 == this.rows) return Math.max(4-spent,0);
        var sum = 0
        for (let i = (row+1)*4; i < this.rows*4; i++) sum += player.humanoid.tree.includes(i);
        var bonus = 0
        if (row < 11) for (let i = 0; i < 4; i++) if (player.humanoid.tree.includes(44+i)) bonus++;
        return Math.max(0,Math.min(1+bonus+Math.max(0,sum-2)-spent,4))
    },
    canAfford(i, slot) {
        let row = Math.floor(i/4), s = (slot ?? this.getAvilableSlot(row)), only = [], bonus = []
        if (row >= tmp.evo_tree_rows) return false;
        for (let i = 0; i < 4; i++) {
            only.push(row*4+i)
            if (player.humanoid.tree.includes(44+i) && !player.humanoid.tree.includes(row*4+i)) bonus.push(row*4+i);
        }
        if (s <= bonus.length) only = bonus
        return i >= 0 && !player.humanoid.tree.includes(i) && tmp.unspent_faith.gte(this.getCost(i)) && only.includes(i) && s > 0
    },
}

function purchaseSharkoidFaith(i) {
    var fc = EVOLUTION_TREE.faith_cost[i], cost = fc[1](player.humanoid.faith[i]), curr = CURRENCIES[fc[0]]

    if (curr.amount.gte(cost)) {
        var bulk = player.humanoid.faith[i].add(1).max(fc[2](curr.amount))
        curr.amount = curr.amount.sub(fc[1](bulk.sub(1))).max(0)
        player.humanoid.faith[i] = bulk
    }
}

function purchaseEvolutionTree(i) {
    if (EVOLUTION_TREE.canAfford(i)) {
        player.humanoid.tree.push(i)
        updateUnspentFaith()
    }
}

function respecEvolutionTree(force) {
    var f = ()=>{
        player.humanoid.tree = []
        doReset("humanoid",true)
    }

    if (!force && player.radios['confirm-humanoid']) createConfirmationPopup(lang_text("popup-desc")["evolution-tree-respec"],f)
    else f()
}

function updateEvolutionTreeHTML() {
    var lang_texts = lang_text("evolution-tree-ctn")
    var row_available = []
    var unl_rows = tmp.evo_tree_rows
    for (let x = 0; x < EVOLUTION_TREE.rows; x++) {
        el("evolution-tree-available-"+x).style.display = el_display(x < unl_rows)
        if (x >= unl_rows) continue
        var a = EVOLUTION_TREE.getAvilableSlot(x)
        row_available.push(a)
        el("evolution-tree-available-"+x).innerHTML = lang_text("evolution-tree-row",x+1,a)
    }
    for (let x = 0; x < EVOLUTION_TREE.rows*4; x++) {
        var row = Math.floor(x/4)
        var tree_el = el("evolution-tree-"+x+"-div")
        tree_el.style.display = el_display(row < unl_rows)
        if (row >= unl_rows) continue
        el("evolution-tree-"+x+"-desc").innerHTML = lang_texts[x]?.[1]?.(tmp.evolution_tree_effect[x]) ?? "Placeholder"
        tree_el.className = el_classes({locked: !EVOLUTION_TREE.canAfford(x, row_available[row]), bought: player.humanoid.tree.includes(x), "evolution-tree-btn": true})
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
}

function hasEvolutionTree(x) { return player.humanoid.tree.includes(x) }
function evolutionTreeEffect(x,def=1) { return tmp.evolution_tree_effect[x] ?? def }
function simpleETEffect(x,def=1) { return player.humanoid.tree.includes(x) ? evolutionTreeEffect(x,def) : def }

function updateUnspentFaith() {
    var spent = E(0)
    for (let x = 0; x < EVOLUTION_TREE.rows*4; x++) {
        tmp.evolution_tree_effect[x] = EVOLUTION_TREE.effect[x]?.() ?? null
        if (player.humanoid.tree.includes(x)) spent = spent.add(EVOLUTION_TREE.getCost(x))
    }
    tmp.unspent_faith = tmp.total_faith.sub(spent).max(0)
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
    var o = (index?tree:tree.map(x => convertTreeToIndex(x))).sort((a,b) => b-a)
    o.forEach(x => purchaseEvolutionTree(x))
}

function convertTreeToIndex(n) {
    var row = Math.floor(n/10)

    return n - 6*row - 5
}

function convertIndexToTree(n) {
    var row = Math.floor(n/4)

    return n%4 + 10*row + 11
}

function convertTreeToString(tree) {
    return tree.map(x=>convertIndexToTree(x)).join(",")
}

function convertStringToTree(str) {
    return str.split(",").map(x=>convertTreeToIndex(x))
}

function importEvolutionTree() {
    createPromptPopup(lang_text('popup-desc')["evolution-tree-import"],x=>{
        loadEvolutionTree(x.split(",").map(y=>parseInt(y)).filter(y=>!isNaN(y)))
    })
}

function exportEvolutionTree() {
    copyToClipboard(convertTreeToString(player.humanoid.tree))
    addNotify(lang_text("notify-desc")["copy_to_clipboard"])
}

function calculateEvolutionTreeCost(tree) {
    var sum = 0, a = []
    for (let x of tree) if (!a.includes(x)) {
        var cost = EVOLUTION_TREE.getCost(x)
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

function setupEvolutionHTML() {
    let h = ""
    var lang_texts = lang_text("evolution-tree-ctn")
    for (let x = 0; x < EVOLUTION_TREE.rows*4; x++) {
        var row = Math.floor(x/4)
        if (x % 4 == 0) h += `<div><div class="evolution-tree-avilable" id="evolution-tree-available-${row}"></div></div>`
        var y = 10*(row+1)
        h += `<button class="evolution-tree-btn" id="evolution-tree-${x}-div" onclick="purchaseEvolutionTree(${x})">
        <div class="etb-name">${lang_texts[x]?.[0]??"Placeholder"} [${y+x%4+1}]</div>
        <div class="etb-cost">${lang_text("cost")}: ${EVOLUTION_TREE.getCost(x)}</div>
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