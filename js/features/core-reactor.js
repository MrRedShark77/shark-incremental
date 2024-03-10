const CORE_REACTOR = [
    {
        symbol: "Fe",

        get req_text() { return CURRENCIES.core.costName },
        get resource() { return CURRENCIES.core.amount },

        require: l => Decimal.pow(2,l),
        bulk: x => x.log(2).floor().add(1),

        effect: l=>player.fish.max(10).log10().log10().div(100).mul(l).add(1),
        effDesc: x => formatPow(x,3),
    },{
        symbol: "Ni",

        get req_text() { return CURRENCIES.fish.costName },
        get resource() { return CURRENCIES.fish.amount },
        
        require: l => Decimal.pow(1e100,l.pow(3)).mul('e6000'),
        bulk: x => x.div('e6000').log(1e100).root(3).floor().add(1),

        effect: l=>{
            let x = player.prestige.shards.max(10).log10().log10().div(100).mul(l)
            if (hasResearch('c4')) x = x.mul(2)
            return x.add(1)
        },
        effDesc: x => formatPow(x,3),
    },{
        symbol: "O",

        get req_text() { return CURRENCIES.prestige.costName },
        get resource() { return CURRENCIES.prestige.amount },

        require: l => Decimal.pow(1e10,l.pow(3)).mul('e700'),
        bulk: x => x.div('e700').log(1e10).root(3).floor().add(1),

        effect(l) {
            let x = E(1)

            for (let i = 0; i < 4; i++) {
                x = x.mul(player.explore.res[i].add(10).log10())
            }

            return Decimal.pow(expPow(x,0.5),l)
        },
        effDesc: x => formatMult(x),
    },{
        symbol: "Ne",

        get req_text() { return CURRENCIES.coral.costName },
        get resource() { return CURRENCIES.coral.amount },

        require: l => Decimal.pow(10,l.pow(2.5)).mul('e60'),
        bulk: x => x.div('e60').log(10).root(2.5).floor().add(1),

        effect: l=>player.shark_level.sqrt().div(100).mul(l).add(1),
        effDesc: x => format(x,3)+"√",
    },
]

function getBonusReactor() {
    let x = E(1)

    for (let i = 0; i < CORE_REACTOR.length; i++) {
        x = x.mul(player.core.reactor[i].add(1))
    }

    return Decimal.pow10(x.pow(0.8).sub(1))
}

function upgradeCoreReactor(i) {
    var CR = CORE_REACTOR[i]

    if (CR.resource.gte(CR.require(player.core.reactor[i]))) {
        player.core.reactor[i] = CR.bulk(CR.resource).max(player.core.reactor[i].add(1))
    }
}

function updateCoreHTML() {
    var texts = [
        lang_text(`require`),
        lang_text(`effect`),
        lang_text(`next-at`),
    ]

    for (let i = 0; i < CORE_REACTOR.length; i++) {
        var CR = CORE_REACTOR[i], el_id = `core-reactor-${i}-`, level = player.core.reactor[i], res = CR.resource

        var req = CR.require(level), bulk = res.lt(req) ? Decimal.dZero : CR.bulk(res), afford = bulk.gt(level)

        el(el_id+"div").className = el_classes({"core-reactor-button": true, locked: !afford})
        el(el_id+"level").innerHTML = format(level,0) + (afford ? " ➜ " + format(bulk,0) : "")
        el(el_id+"req").innerHTML = texts[0]+": "+format(req,0)+" "+CR.req_text+(afford ? "<br>("+texts[2]+" "+format(CR.require(bulk),0).bold()+")" : "")
        el(el_id+"effect").innerHTML = texts[1]+": "+CR.effDesc(tmp.core_effect[i]).bold() + (afford ? " ➜ " + CR.effDesc(CR.effect(bulk)).bold() : "")
    }

    el("core-reactor-bonus").innerHTML = lang_text(`core-bonus`,tmp.core_bonus)
}

function coreReactorEffect(i,def=1) { return tmp.core_effect[i] ?? def }

function setupCoreHTML() {
    let h = ""

    for (let i = 0; i < CORE_REACTOR.length; i++) {
        var CR = CORE_REACTOR[i]

        h += `
        <button class="core-reactor-button" id="core-reactor-${i}-div" onclick="upgradeCoreReactor(${i})">
            <div class="core-reactor-symbol">${CR.symbol}</div>
            <div class="core-reactor-desc">
                <div><b>${lang_text(`core-${i}-name`)}</b> [<span id="core-reactor-${i}-level">0</span>]:</div>
                <div>${lang_text(`core-${i}-desc`)}</div>
                <div id="core-reactor-${i}-effect">Effect: ???</div>
                <div id="core-reactor-${i}-req">Require: ???</div>
            </div>
        </button>
        `
    }

    el("core-reactor-table").innerHTML = h
}

function updateCoreTemp() {
    for (let i = 0; i < CORE_REACTOR.length; i++) {
        var CR = CORE_REACTOR[i], level = player.core.reactor[i]

        tmp.core_effect[i] = CR.effect(level)
    }

    tmp.core_bonus = getBonusReactor()
}