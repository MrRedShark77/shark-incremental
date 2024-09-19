const CORE_REACTOR = [
    {
        symbol: "Fe",

        get req_text() { return CURRENCIES.core.costName },
        get resource() { return CURRENCIES.core.amount },

        require: l => Decimal.pow(2,l).ceil(),
        bulk: x => x.log(2),

        effect: l=>{
            let x = player.fish.max(10).log10().log10().div(100).mul(l).mul(coreReactorEffect(4))
            if (hasResearch('c8')) x = x.mul(2);
            x = x.add(1)
            if (hasEvolutionTree(32)) x = x.pow(1.75);
            if (hasEvolutionTree(4,true)) x = expPow(x,2.5);
            return x
        },
        effDesc: x => formatPow(x,3),
    },{
        symbol: "Ni",

        get req_text() { return CURRENCIES.fish.costName },
        get resource() { return CURRENCIES.fish.amount },
        
        require: l => Decimal.pow(1e100,l.pow(3)).mul('e6000'),
        bulk: x => x.div('e6000').log(1e100).root(3),

        effect: l=>{
            let x = player.prestige.shards.max(10).log10().log10().div(100).mul(l).mul(coreReactorEffect(5))
            if (hasResearch('c4')) x = x.mul(2);
            x = x.add(1)
            if (hasEvolutionTree(33)) x = x.pow(5.6);
            if (hasEvolutionTree(5,true)) x = expPow(x,2);
            return x
        },
        effDesc: x => formatPow(x,3),
    },{
        symbol: "O",

        get req_text() { return CURRENCIES.prestige.costName },
        get resource() { return CURRENCIES.prestige.amount },

        require: l => Decimal.pow(1e10,l.pow(3)).mul('e700'),
        bulk: x => x.div('e700').log(1e10).root(3),

        effect(l) {
            let x = E(1)

            for (let i = 0; i < 4; i++) {
                x = x.mul(player.explore.res[i].add(10).log10())
            }

            x = Decimal.pow(expPow(x,0.5),l.mul(coreReactorEffect(6)).overflow(1e25,0.5))

            if (hasEvolutionTree(34)) x = x.pow(1.06);
            if (hasEvolutionTree(6,true)) x = expPow(x,1.5);

            return x
        },
        effDesc: x => formatMult(x),
    },{
        symbol: "Ne",

        get req_text() { return CURRENCIES.coral.costName },
        get resource() { return CURRENCIES.coral.amount },

        require: l => Decimal.pow(10,l.pow(hasResearch('c8') ? 1.5 : 2.5)).mul('e60'),
        bulk: x => x.div('e60').log(10).root(hasResearch('c8') ? 1.5 : 2.5),

        effect: l=>{
            let x = player.shark_level.max(0).sqrt().div(100).mul(l).mul(coreReactorEffect(7)).add(1)
            if (hasEvolutionTree(35)) x = x.pow(3);
            if (hasEvolutionTree(7,true)) x = expPow(x,2.25);
            return x
        },
        effDesc: x => format(x,3)+"√",
    },
    
    {
        symbol: "S",

        get req_text() { return lang_text("core-0-name").bold() },
        get resource() { return player.core.reactor[0] },

        require: l => l.mul(20).add(100).ceil(),
        bulk: x => x.sub(100).div(20),

        effect: l=>{
            let x = player.fish.max(10).log10().log10().root(3).div(100).mul(l)
            if (hasEvolutionTree(28,true)) x = x.pow(3);
            return x.add(1)
        },
        effDesc: x => formatPercent(x.sub(1)),
    },{
        symbol: "Si",

        get req_text() { return lang_text("core-1-name").bold() },
        get resource() { return player.core.reactor[1] },
        
        require: l => l.mul(15).add(100).ceil(),
        bulk: x => x.sub(100).div(15),

        effect: l=>{
            let x = player.prestige.shards.max(10).log10().log10().root(3).div(100).mul(l)
            if (hasEvolutionTree(29,true)) x = x.pow(10);
            return x.add(1)
        },
        effDesc: x => formatPercent(x.sub(1)),
    },{
        symbol: "N",

        get req_text() { return lang_text("core-2-name").bold() },
        get resource() { return player.core.reactor[2] },

        require: l => l.mul(10).add(80).ceil(),
        bulk: x => x.sub(80).div(10),

        effect: l=>{
            let x = player.explore.res[4].max(1).log10().root(2).div(100).mul(l)
            if (hasEvolutionTree(30,true)) x = x.pow(2);
            return x.add(1)
        },
        effDesc: x => formatPercent(x.sub(1)),
    },{
        symbol: "He",

        get req_text() { return lang_text("core-3-name").bold() },
        get resource() { return player.core.reactor[3] },

        require: l => l.mul(5).add(60).ceil(),
        bulk: x => x.sub(60).div(5),

        effect: l=>{
            let x = player.shark_level.max(0).cbrt().div(100).mul(l).add(1)
            if (hasEvolutionTree(31,true)) x = x.pow(2);
            return x
        },
        effDesc: x => formatPercent(x.sub(1)),
    },

    {
        symbol: "Mg",

        get req_text() { return CURRENCIES.remnants.costName },
        get resource() { return CURRENCIES.remnants.amount },

        require: l => l.pow_base(1.1).pow_base('e1000'),
        bulk: x => x.log('e1000').log(1.1),

        effect: l=>{
            let x = player.fish.iteratedlog(10,3).max(0)
            if (isNaNed(x)) return E(1);
            x = x.mul(l).div(250).add(1)
            if (hasEvolutionTree(32,true)) x = x.pow(2);
            return x
        },
        effDesc: x => formatPow(x,3),
    },{
        symbol: "Na",

        get req_text() { return CURRENCIES.fish.costName },
        get resource() { return CURRENCIES.fish.amount },

        require: l => l.pow_base(1.1).pow_base('e2.5e6').pow10(),
        bulk: x => x.log10().log('e2.5e6').log(1.1),

        effect: l=>{
            let x = player.prestige.shards.iteratedlog(10,3).max(0)
            if (isNaNed(x)) return E(1);
            x = x.mul(l).div(250).add(1)
            if (hasEvolutionTree(33,true)) x = x.pow(2);
            return x
        },
        effDesc: x => formatPow(x,3),
    },{
        symbol: "P",

        get req_text() { return CURRENCIES.humanoid.costName },
        get resource() { return CURRENCIES.humanoid.amount },

        require: l => l.pow_base(10).mul(1e15),
        bulk: x => x.div(1e15).log(10),

        effect: l=>{
            let x = player.core.fragments.iteratedlog(10,2).max(0)
            if (isNaNed(x)) return E(1);
            x = x.div(50).add(1).pow(l)
            if (hasEvolutionTree(34,true)) x = x.pow(2);
            return x
        },
        effDesc: x => formatPow(x,3),
    },{
        symbol: "Cr",

        get req_text() { return CURRENCIES["dark-matter"].costName },
        get resource() { return CURRENCIES["dark-matter"].amount },

        require: l => l.pow_base(1e5).mul(1e75),
        bulk: x => x.div(1e75).log(1e5),

        effect: l=>{
            let x = player.humanoid.shark.iteratedlog(10,1).max(0)
            if (isNaNed(x)) return E(1);
            x = x.div(10).add(1).pow(l)
            if (hasEvolutionTree(35,true)) x = x.pow(2);
            return x
        },
        effDesc: x => formatMult(x,3),
    },
]

function getCoreReactorCost(i,l) {
    let CR = CORE_REACTOR[i], x = l??player.core.reactor[i]

    x = x.scale(1e15,3,"P")

    if (i < 4) x = (i==0 || i==3) && hasResearch('c8') ? x.scale(tmp.core_scale1,1.5,'P') : x.scale(tmp.core_scale1,3,'E2')
    else x = x.scale(10,2,'P')

    return CR.require(x)
}

function getCoreReactorBulk(i,res) {
    let CR = CORE_REACTOR[i], x = res??CR.resource, y = CR.bulk(x)

    if (i < 4) y = (i==0 || i==3) && hasResearch('c8') ? y.scale(tmp.core_scale1,1.5,'P',true) : y.scale(tmp.core_scale1,3,'E2',true)
    else y = y.scale(10,2,'P',true)

    y = y.scale(1e15,3,"P",true)

    return y.floor().add(1)
}

function getBonusReactor() {
    let x = E(1)

    if (hasResearch('c9')) {
        var boost = 0

        if (hasResearch('c5')) boost = getCRBoost(0,0)

        for (let i = 0; i < CORE_REACTOR.length; i++) {
            var v = player.core.reactor[i].add(1)
            if (i < 4) v = v.add(boost)
            x = x.mul(v)
        }

        x = Decimal.pow10(x.sub(1))
    } else {
        for (let i = 0; i < CORE_REACTOR.length; i++) {
            x = x.mul(player.core.reactor[i].add(1))
        }
    
        if (hasResearch('c5')) x = x.mul(getCRBoost(0,0).div(50).add(1))

        x = Decimal.pow10(x.pow(0.8).sub(1))
    }

    return x
}

function upgradeCoreReactor(i) {
    if (player.core.times==0) return;

    var CR = CORE_REACTOR[i]

    if (CR.resource.gte(getCoreReactorCost(i))) {
        player.core.reactor[i] = getCoreReactorBulk(i).max(player.core.reactor[i].add(1))
    }
}

function updateCoreHTML() {
    var texts = [
        lang_text(`require`),
        lang_text(`effect`),
        lang_text(`next-at`),
    ]

    var strong = remnantUpgEffect(2)

    for (let i = 0; i < CORE_REACTOR.length; i++) {
        var CR = CORE_REACTOR[i], el_id = `core-reactor-${i}-`

        var unl = tmp.core_reactor_unl > i

        el(el_id+"div").style.display = el_display(unl)

        if (unl) {
            var level = player.core.reactor[i], res = CR.resource

            var req = getCoreReactorCost(i,level), bulk = res.lt(req) ? Decimal.dZero : getCoreReactorBulk(i,res), afford = bulk.gt(level), bonus = tmp.core_bonus_level[i],
            s = i < 8 ? strong : 1

            el(el_id+"div").className = el_classes({"core-reactor-button": true, locked: !afford})
            el(el_id+"level").innerHTML = format(level,0) + (afford ? " ➜ " + format(bulk,0) : "") + (bonus.gt(0) ? " + " + format(bonus) : "")
            el(el_id+"req").innerHTML = texts[0]+": "+format(req,0)+" "+CR.req_text+(afford ? "<br>("+texts[2]+" "+format(getCoreReactorCost(i,bulk),0).bold()+")" : "")
            el(el_id+"effect").innerHTML = texts[1]+": "+CR.effDesc(tmp.core_effect[i]).bold() + (afford ? " ➜ " + CR.effDesc(CR.effect(bulk.add(bonus).mul(s))).bold() : "")
        }
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

    setupCoreAssemblerHTML()
}

function updateCoreTemp() {
    updateCoreAssemblerTemp()
    updateCoreRadiationTemp()

    tmp.core_reactor_unl = 4

    if (player.feature >= 10) tmp.core_reactor_unl = 8
    if (isSSObserved('saturn')) tmp.core_reactor_unl = 12

    var bonus1 = getCRBoost(0,0), bonus2 = getCRBoost(10,0)
    var strong = remnantUpgEffect(2)
    
    for (let i = 0; i < CORE_REACTOR.length; i++) {
        var bonus = Decimal.dZero

        if (i < 4) bonus = bonus.add(bonus1).add(simpleETEffect(i+4,0));
        else if (i < 8) {
            bonus = bonus.add(bonus2).add(simpleETEffect(i+12,0))
            if (bonus.gt(1)) bonus = bonus.pow(simpleCETEffect(i+12,1));
        }

        tmp.core_bonus_level[i] = bonus

        var CR = CORE_REACTOR[i], level = tmp.cr_active ? Decimal.dZero : player.core.reactor[i].add(bonus)

        if (tmp.ss_difficulty && i >= 8) level = E(0);

        if (i < 8) level = level.mul(strong);

        tmp.core_effect[i] = CR.effect(level)
    }

    tmp.core_bonus = getBonusReactor()

    var scale = 10 + simpleResearchEffect('f3',0)
    if (hasDepthMilestone(4,2)) scale += 5
    tmp.core_scale1 = Decimal.add(scale, getPAEffect(4,0))
}