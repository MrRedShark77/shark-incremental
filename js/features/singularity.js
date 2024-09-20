const S_MILESTONES = [
    {
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(1),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(2),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(3),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(4),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(5),
    },{ // 5
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(6),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(7),
    },{
        unl:()=>true,
        req:()=>player.singularity.bh.gte(8),
    },

    {
        unl:()=>player.feature>=18,
        req:()=>CURRENCIES["dark-matter"].total.gte(1),
    },{
        unl:()=>player.feature>=18,
        req:()=>CURRENCIES["dark-matter"].total.gte(10),
    },{ // 10
        unl:()=>player.feature>=18,
        req:()=>CURRENCIES["dark-matter"].total.gte(1e6),
    },{
        unl:()=>player.feature>=18,
        req:()=>CURRENCIES["dark-matter"].total.gte(1e12),
    },{
        unl:()=>player.feature>=18,
        req:()=>CURRENCIES["dark-matter"].total.gte(1e100),
    },
]

const REMNANT_UPGS = [
    {
        unl:()=>true,
        cost:a=>a.add(1).pow(1.25).pow_base(10),
        bulk:a=>a.log(10).root(1.25).sub(1),
        effect(a) {
            let x = a.mul(.5).add(1)
            return x
        },
        effDesc: x=>"+"+formatPercent(x.sub(1)),
    },{
        unl:()=>true,
        cost:a=>a.add(1).pow(1.25).pow_base(2).mul(5e2),
        bulk:a=>a.div(5e2).log(2).root(1.25).sub(1),
        effect(a) {
            let x = a.pow_base(10)
            return x
        },
        effDesc: x=>formatMult(x),
    },{
        unl:()=>true,
        cost:a=>a.add(1).pow(1.25).pow_base(10).mul(1e3),
        bulk:a=>a.div(1e3).log(10).root(1.25).sub(1),
        effect(a) {
            let x = a.root(2).mul(1).add(1)
            return x
        },
        effDesc: x=>"+"+formatPercent(x.sub(1)),
    },{
        unl:()=>true,
        cost:a=>a.add(1).pow(1.25).pow_base(5).mul(2e7),
        bulk:a=>a.div(2e7).log(5).root(1.25).sub(1),
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    
    {
        unl:()=>player.singularity.best_bh.gte(2),
        cost:a=>a.add(1).pow(1.25).pow_base(100),
        bulk:a=>a.log(100).root(1.25).sub(1),
        effect(a) {
            if (hasResearch('dm2')) a = a.sqr();
            let x = player.fish.add(1).log10().add(1).log10().add(1).pow(a)
            return x
        },
        effDesc: x=>formatPow(x),
    },{
        unl:()=>player.singularity.best_bh.gte(2),
        cost:a=>a.add(1).pow(1.25).pow_base(10).mul(1e5),
        bulk:a=>a.div(1e5).log(10).root(1.25).sub(1),
        effect(a) {
            let x = a.mul(.5).add(1)
            return x
        },
        effDesc: x=>"+"+formatPercent(x.sub(1)),
    },{
        unl:()=>player.singularity.best_bh.gte(4),
        cost:a=>a.add(1).pow(1.25).pow_base(100).mul(1e4),
        bulk:a=>a.div(1e4).log(100).root(1.25).sub(1),
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x),
    },{
        unl:()=>player.singularity.best_bh.gte(5),
        cost:a=>a.add(1).pow(1.25).pow_base(5).mul(20),
        bulk:a=>a.div(20).log(5).root(1.25).sub(1),
        effect(a) {
            if (hasResearch('dm3')) a = a.pow(3.5);
            let x = a.pow_base(10)
            return x
        },
        effDesc: x=>formatMult(x),
    },

    {
        unl:()=>player.feature>=19,
        cost:a=>a.add(1).pow(1.25).pow_base(1e5).mul(1e55),
        bulk:a=>a.div(1e55).log(1e5).root(1.25).sub(1),
        effect(a) {
            let x = a.add(1).pow(2)
            return x
        },
        effDesc: x=>formatPow(x,0),
    },{
        unl:()=>player.feature>=19,
        cost:a=>a.add(1).sumBase(1.1).pow_base(1e5).mul(1e65),
        bulk:a=>a.div(1e65).log(1e5).sumBase(1.1,true).sub(1),
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x,0),
    },{
        unl:()=>player.feature>=19,
        cost:a=>a.add(1).pow(1.25).pow_base(1e5).mul(1e95),
        bulk:a=>a.div(1e95).log(1e5).root(1.25).sub(1),
        effect(a) {
            let x = a.add(1).pow(2)
            return x
        },
        effDesc: x=>formatMult(x,0),
    },{
        unl:()=>player.feature>=19,
        cost:a=>a.add(1).pow(1.25).pow_base(1e25).mul(1e100),
        bulk:a=>a.div(1e100).log(1e25).root(1.25).sub(1),
        effect(a) {
            let x = a.mul(5)
            return x
        },
        effDesc: x=>"+"+format(x,0),
    },

    {
        unl:()=>isSSObserved('jupiter'),
        cost:a=>a.add(1).pow(1.25).pow_base(1e3).mul(1e247),
        bulk:a=>a.div(1e247).log(1e3).root(1.25).sub(1),
        effect(a) {
            let x = player.singularity.remnants.add(1).log10().add(1).pow(a)
            return x
        },
        effDesc: x=>formatMult(x),
    },{
        unl:()=>isSSObserved('jupiter'),
        cost:a=>a.add(1).sumBase(1.1).pow_base(1e15).mul(1e250),
        bulk:a=>a.div(1e250).log(1e15).sumBase(1.1,true).sub(1),
        effect(a) {
            let x = a.root(2).mul(.1).add(1)
            return x
        },
        effDesc: x=>"+"+formatPercent(x.sub(1)),
    },{
        unl:()=>isSSObserved('jupiter'),
        cost:a=>a.add(1).pow(1.25).pow_base(1e10).mul('e740'),
        bulk:a=>a.div('e740').log(1e10).root(1.25).sub(1),
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x,0),
    },{
        unl:()=>isSSObserved('jupiter'),
        cost:a=>a.pow_base(1.2).pow_base('e1000'),
        bulk:a=>a.log('e1000').log(1.2),
        effect(a) {
            let x = a
            return x
        },
        effDesc: x=>"+"+format(x,0),
    },

    {
        unl:()=>isSSObserved('pluto'),
        cost:a=>a.pow(1.25).pow_base(1.05).pow_base('e10000'),
        bulk:a=>a.log('e10000').log(1.05).root(1.25),
        effect(a) {
            let x = a.add(1).mul(a.pow_base(1.1))
            return x
        },
        effDesc: x=>formatMult(x),
    },{
        unl:()=>isSSObserved('pluto'),
        cost:a=>a.pow_base(1.05).pow_base('ee5'),
        bulk:a=>a.log('ee5').log(1.05),
        effect(a) {
            let x = a.div(1e3)
            return x
        },
        effDesc: x=>"+"+format(x,3),
    },
]

function getRemnantUpgradeCost(i,l=player.singularity.upgs[i]) {
    l = l.scaleAll('remnant_upg')

    return REMNANT_UPGS[i].cost(l)
}
function getRemnantUpgradeBulk(i,r=player.singularity.remnants) {
    let l = REMNANT_UPGS[i].bulk(r)

    l = l.scaleAll('remnant_upg',true)

    return l.add(1).floor()
}

function buyRemnantUpg(i) {
    let u = REMNANT_UPGS[i], lvl, cost, amt = player.singularity.remnants
    if (u.unl() && amt.gte(cost = getRemnantUpgradeCost(i,lvl = player.singularity.upgs[i]))) {
        let bulk = lvl.add(1).max(getRemnantUpgradeBulk(i,amt))
        player.singularity.upgs[i] = bulk
        if (!hasSMilestone(10)) player.singularity.remnants = amt.sub(getRemnantUpgradeCost(i,bulk.sub(1))).max(0)
    }
}

function hasSMilestone(i) { return S_MILESTONES[i].req() }
function remnantUpgEffect(i,def=1) { return tmp.remnant_upg_effects[i]??def }

function updateSingularityTemp() {
    tmp.bh_reduction = tmp.ss_difficulty ? E(.5) : player.singularity.bh.gte(8) ? E(1) : Decimal.div(1,player.singularity.bh.sub(player.research.dm1).max(0).pow(2).div(20).add(1))

    let pow = remnantUpgEffect(13), experiment = player.solar_system.experiment

    for (let i = 0; i < EXPERIMENT_TIER.boosts.length; i++) {
        let b = EXPERIMENT_TIER.boosts[i]

        tmp.experiment_boosts[i] = b[1](experiment.gte(b[0]) ? experiment.sub(b[0]).add(1) : E(0))
    }

    for (let i = 0; i < REMNANT_UPGS.length; i++) {
        let u = REMNANT_UPGS[i], l = player.singularity.upgs[i]
        if (tmp.ss_difficulty && i < 16) l = E(0);
        if (i !== 3 && i < 12) l = l.mul(pow)
        if ('effect' in u) tmp.remnant_upg_effects[i] = u.effect(l)
    }

    for (let i of SPACEBASE_UPG_KEYS) {
        let u = SPACEBASE_UPGS[i], l = player.solar_system.sb_upgs[i]
        
        if ('effect' in u) tmp.sb_upg_effects[i] = u.effect(l)
    }
}

function updateBlackHoleHTML() {
    let remnants = player.singularity.remnants, texts = [lang_text('remnant-upgrades')]

    el('black-hole-amount').innerHTML = format(player.singularity.bh,0) + " / 8"
    el('black-hole-effect').innerHTML = formatPow(tmp.bh_reduction,4)

    el('remnant-amount').innerHTML = format(remnants,0)
    el('remnant-gain').innerHTML = formatGain(remnants,tmp.currency_gain.remnants)

    for (let i = 0; i < REMNANT_UPGS.length; i++) {
        let u = REMNANT_UPGS[i], id = `remnant-upg-${i}-`, e = el(id+'button'), unl = u.unl()

        e.style.display = el_display(unl)

        if (unl) {
            let lvl = player.singularity.upgs[i]

            el(id+'level').textContent = format(lvl,0)
            el(id+'desc').innerHTML = texts[0][i][1](toColoredText(u.effDesc(tmp.remnant_upg_effects[i]),'lime'))

            let cost = getRemnantUpgradeCost(i,lvl)

            el(id+'cost').textContent = format(cost)
            e.className = el_classes({'remnant-upg': true, locked: remnants.lt(cost)})
        }
    }
}

function setupSingularityHTML() {
    let h = "", texts = [lang_text('remnant-upgrades'),lang_text('cost')]

    for (let i = 0; i < S_MILESTONES.length; i++) {
        let s = S_MILESTONES[i]

        h += `
        <div class="singularity-milestone" id="sm-${i}"><h3>???</h3><br>???</div>
        `
    }

    el('singularity-milestones').innerHTML = h

    h = ""

    for (let i = 0; i < REMNANT_UPGS.length; i++) {
        h += `<button class="remnant-upg" id="remnant-upg-${i}-button" onclick="buyRemnantUpg(${i})"><b>${texts[0][i][0]}</b> [<span id="remnant-upg-${i}-level">0</span>]<div id="remnant-upg-${i}-desc">${texts[0][i][1]('???')}</div>${texts[1]}: <span id="remnant-upg-${i}-cost">???</span></button>`
    }

    el('remnant-upgs').innerHTML = h

    setupSolarSystemHTML()
    setupConstellationHTML()
}

function updateSingularityMilestones() {
    let text = lang_text('singularity-milestones')

    for (let i = 0; i < S_MILESTONES.length; i++) {
        let s = S_MILESTONES[i], e = el(`sm-${i}`), unl = s.unl()

        e.style.display = el_display(unl)

        if (unl) {
            let t = text[i]

            e.innerHTML = `<h3>${t[0]}</h3><br>${t[1]}`
            e.style.borderColor = s.req() ? "lime" : "white"
        }
    }
}