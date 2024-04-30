const EVOLUTION_TREE = {
    faith_cost: [
        ["fish",x=>Decimal.pow(10,Decimal.pow(1e4,x.add(1))),x=>x.log10().log(1e4).floor()],
        ["prestige",x=>Decimal.pow(10,Decimal.pow(1e3,x.add(1))),x=>x.log10().log(1e3).floor()],
        ["core",x=>Decimal.pow(1e60,x.add(1)),x=>x.log(1e60).floor()],
    ],

    getCost: i => 1 + Math.floor(i/4),

    rows: 6,

    effect: [
        ()=>CURRENCIES.fish.total.add(10).log10().log10().add(1).pow(simpleETEffect(20)),
        ()=>CURRENCIES.prestige.total.add(10).log10().log10().mul(1.5).add(1).pow(simpleETEffect(21)),
        ()=>CURRENCIES.core.total.add(10).log10().root(2).pow(simpleETEffect(22)),
        ()=>Decimal.pow(10,simpleETEffect(23)),

        ()=>10,
        ()=>10,
        ()=>10,
        ()=>10,

        null,
        null,
        null,
        null,

        ()=>1.5,
        ()=>1.5,
        ()=>1.1,
        ()=>1,

        ()=>1,
        ()=>1,
        ()=>1,
        ()=>1,

        ()=>CURRENCIES.fish.total.add(10).log10().log10().div(60).add(1),
        ()=>CURRENCIES.prestige.total.add(10).log10().log10().div(45).add(1),
        ()=>CURRENCIES.core.total.add(1).log10().root(2).div(60).add(1),
        ()=>2,
    ],

    getAvilableSlot(row) {
        var spent = 0
        for (let i = row*4; i < (row+1)*4; i++) spent += player.humanoid.tree.includes(i)
        if (row+1 == this.rows) return Math.max(1-spent,0)
        var sum = 0
        for (let i = (row+1)*4; i < this.rows*4; i++) sum += player.humanoid.tree.includes(i)
        return Math.max(0,Math.min(1+Math.max(0,sum-2),4)-spent)
    },
    canAfford(i, slot) {
        return !player.humanoid.tree.includes(i) && tmp.unspent_faith.gte(this.getCost(i)) && (slot ?? this.getAvilableSlot(Math.floor(i/4))) > 0
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
    for (let x = 0; x < EVOLUTION_TREE.rows; x++) {
        var a = EVOLUTION_TREE.getAvilableSlot(x)
        row_available.push(a)
        el("evolution-tree-available-"+x).innerHTML = lang_text("evolution-tree-row",x+1,a)
    }
    for (let x = 0; x < EVOLUTION_TREE.rows*4; x++) {
        var row = Math.floor(x/4)
        var tree_el = el("evolution-tree-"+x+"-div")

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

function updateEvolutionTreeTemp() {
    tmp.total_faith = E(0)
    for (let i = 0; i < player.humanoid.faith.length; i++) {
        tmp.total_faith = tmp.total_faith.add(player.humanoid.faith[i]??0)
    }

    var spent = E(0)
    for (let x = 0; x < EVOLUTION_TREE.rows*4; x++) {
        tmp.evolution_tree_effect[x] = EVOLUTION_TREE.effect[x]?.() ?? null
        if (player.humanoid.tree.includes(x)) spent = spent.add(EVOLUTION_TREE.getCost(x))
    }
    tmp.unspent_faith = tmp.total_faith.sub(spent).max(0)
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
}