const ROCKET_PARTS = {
    get total() {
        let x = E(0)
        for (let y of player.solar_system.rocket_parts) x = x.add(y)
        return x
    },
    costs: [
        [()=>player.fish,'fish-costName',x=>x.pow_base(1.1).pow_base('1e100000').pow_base(10),x=>x.log10().log('1e100000').log(1.1).floor().add(1)],
        [()=>player.shark_rank,'full-shark-rank',x=>x.mul(5).add(100).pow(2),x=>x.root(2).sub(100).div(5).add(1).floor()],
        [()=>player.singularity.dm,'dark-matter-costName',x=>x.sumBase(1.1).pow_base(100).mul(1e12),x=>x.div(1e12).log(100).sumBase(1.1,true).add(1).floor()],
    ],
    buy(i) {
        let cost = ROCKET_PARTS.costs[i], res = cost[0]()
        if (res.gte(cost[2](player.solar_system.rocket_parts[i]))) {
            player.solar_system.rocket_parts[i] = player.solar_system.rocket_parts[i].add(1).max(cost[3](res))
        }
    },
}

function setupSolarSystemHTML() {
    let h = ''
    for (let i = 0; i < ROCKET_PARTS.costs.length; i++) h += `<button class="small-upg" id="rocket-part-btn-${i}" onclick="ROCKET_PARTS.buy(${i})"></button>`;
    el('rocket-part-btns').innerHTML = h

    for (let id of SS_KEYS) el('ss-' + id).onclick = () => chooseSolarSystem(id)
}

const SOLAR_SYSTEM = {
    'moon': {
        rp_req: 1,
        goal: 1e12,
        difficulty: 1,
    },
    'venus': {
        get rp_req() { return isSSObserved('mars') ? 14 : 7 },
        goal: 1e24,
        difficulty: 2,
    },
    'mars': {
        get rp_req() { return isSSObserved('venus') ? 14 : 7 },
        goal: 1e24,
        difficulty: 2,
    },
    'mercury': {
        get rp_req() { return isSSObserved('jupiter') ? 50 : 21 },
        goal: 1e60,
        difficulty: 3,
    },
    'jupiter': {
        get rp_req() { return isSSObserved('mercury') ? 32 : 21 },
        goal: 1e60,
        difficulty: 3,
    },
    'saturn': {
        rp_req: 50,
        goal: 1e300,
        difficulty: 4,
    },
    'uranus': {
        rp_req: 75,
        goal: 'ee4',
        difficulty: 5,
    },
    'neptune': {
        rp_req: 100,
        goal: 'ee6',
        difficulty: 6,
    },
    'pluto': {
        rp_req: 158,
        goal: 'ee9',
        difficulty: 7,
    },
    'sun': {
        rp_req: 500,
        goal: 'ee16',
        difficulty: 8,
    },
}
const SS_KEYS = Object.keys(SOLAR_SYSTEM)

function isSSObserved(id) {
    return player.solar_system.completion[id]
}

var ss_choose = ''
function chooseSolarSystem(id) {
    if (ROCKET_PARTS.total.gte(SOLAR_SYSTEM[id].rp_req)) ss_choose = id;
}
function observReset() {
    for (let x of PRE_BH_RESEARCH) player.research[x] = E(0);
    player.humanoid.tree = []
    player.humanoid.faith = [E(0), E(0), E(0)]

    player.solar_system.observ = E(0)
    player.solar_system.total_observ = E(0)
    for (let id of SPACEBASE_UPG_KEYS) player.solar_system.sb_upgs[id] = E(0);
    for (let id of SPACEBASE_RESEARCH) player.research[id] = E(0);

    player.solar_system.reserv = E(0)
    player.solar_system.traject = E(0)
    player.solar_system.experiment = E(0)
    
    RESETS["black-hole"].doReset()

    tmp.pass = 2
}

function observeSolarSystem() {
    if (player.solar_system.active !== "") {
        if (player.solar_system.total_observ.gte(SOLAR_SYSTEM[player.solar_system.active].goal)) player.solar_system.completion[player.solar_system.active] = true;
        
        player.solar_system.active = ""
        updateTemp()
        observReset()

        player.humanoid.tree = player.solar_system.evo_save[0].map(x=>x)
        player.solar_system.evo_save[0] = []

        for (let i = 0; i < 3; i++) {
            player.humanoid.faith[i] = E(player.solar_system.evo_save[1][i]);
            player.solar_system.evo_save[1][i] = E(0)
        }

        if (hasSMilestone(8)) {
            player.research.e3 = E(4)
            player.research.e5 = E(1)
        }

        return
    }

    if (player.solar_system.completion[ss_choose] || ROCKET_PARTS.total.gte(SOLAR_SYSTEM[ss_choose].rp_req)) {
        player.solar_system.active = ss_choose

        player.solar_system.evo_save[0] = player.humanoid.tree.map(x=>x)
        for (let i = 0; i < 3; i++) player.solar_system.evo_save[1][i] = E(player.humanoid.faith[i]);

        observReset()
    }
}

function updateSolarSystemHTML() {
    let text = [lang_text('next-at'),lang_text('total-rp')]
    for (let i = 0; i < ROCKET_PARTS.costs.length; i++) {
        let cost = ROCKET_PARTS.costs[i], res = cost[0](), e = el('rocket-part-btn-' + i), r = player.solar_system.rocket_parts[i], c = cost[2](r),
        b = res.gte(c) ? cost[3](res).sub(r).max(0) : 0

        e.innerHTML = `${lang_text('build-rocket-part',("+"+format(b,0)).bold())}<br>(${text[0]}: ${format(cost[2](r.add(b)))} ${lang_text(cost[1])})`
        e.className = el_classes({'small-upg':true,'locked':res.lt(c)})
    }

    let total_rp = ROCKET_PARTS.total, ss_text = lang_text('solar-system-list')
    el('total-rocket-part').textContent = total_rp.format(0)

    for (let id of SS_KEYS) {
        let ss = SOLAR_SYSTEM[id], e = el('ss-' + id), rp_req = ss.rp_req, comp = player.solar_system.completion[id], req = comp || total_rp.gte(rp_req)

        e.innerHTML = `<img src="textures/solar-system/${req ? id : "hidden"}.png"><br>${req ? ss_text[id][0] : format(rp_req,0,6).bold()+" "+text[1]}`
        e.className = el_classes({'locked':!comp&&!req,'bought':comp})
        e.style.filter = id === player.solar_system.active?"brightness(1.5)":""
    }

    el('observ-button').style.display = el_display(!tmp.ss_difficulty || ss_choose === player.solar_system.active)
    el('observ-button').textContent = lang_text('solar-system-status',tmp.ss_difficulty?player.solar_system.total_observ.gte(SOLAR_SYSTEM[player.solar_system.active].goal)?2:1:0)

    el('solar-system-desc-div').style.display = el_display(ss_choose !== '')
    if (ss_choose !== '') {
        let s = SOLAR_SYSTEM[ss_choose], l = ss_text[ss_choose]

        el('ss-title').innerHTML = `<h3>${l[0]}</h3> [${lang_text('difficulty')}: ${s.difficulty}]`
        el('ss-desc').innerHTML = l[1]
        el('ss-reward').innerHTML = player.solar_system.completion[ss_choose] ? l[2] : lang_text('solar-system-lock-reward')
        el('ss-goal').innerHTML = lang_text('solar-system-goal',format(s.goal,0))
    }
}

const SPACEBASE_UPGS = {
    o1: {
        unl:()=>true,
        diff: 1,
        cost:a=>a.sumBase(1.05).pow_base(3).mul(10),
        bulk:a=>a.div(10).log(3).sumBase(1.05,true).add(1).floor(),
        res: "observ",
        effect(a) {
            let base = 2
            if (hasResearch('o2')) base = Decimal.add(base,spaceBaseUpgEffect('e5',0));
            let x = a.pow_base(base)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    o2: {
        unl:()=>true,
        diff: 1,
        cost:a=>a.scale(100,2,"P").pow_base(2).mul(100),
        bulk:a=>a.div(100).log(2).scale(100,2,"P",true).add(1).floor(),
        res: "observ",
        effect(a) {
            let base = 1.05
            if (hasResearch('o2')) base = Decimal.add(base,spaceBaseUpgEffect('e5',0));
            let x = a.pow_base(base).mul(a.add(1))
            return x
        },
        effDesc: x=>formatPow(x),
    },
    o3: {
        unl:()=>true,
        diff: 1,
        cost:a=>a.scale(100,2,"P").pow_base(5).mul(1e6),
        bulk:a=>a.div(1e6).log(5).add(1).scale(100,2,"P",true).floor(),
        res: "observ",
        effect(a) {
            let base = 1.05
            if (hasResearch('o2')) base = Decimal.add(base,spaceBaseUpgEffect('e5',0));
            let x = a.pow_base(base).mul(a.add(1))
            return x
        },
        effDesc: x=>formatPow(x),
    },
    o4: {
        unl:()=>true,
        diff: 3,
        cost:a=>a.scale(100,2,"P").pow_base(10).mul(1e30),
        bulk:a=>a.div(1e30).log(10).add(1).scale(100,2,"P",true).floor(),
        res: "observ",
        effect(a) {
            let x = a.pow(2).pow_base(10)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    o5: {
        unl:()=>true,
        diff: 5,
        cost:a=>a.pow_base(1.05).pow_base(1e100),
        bulk:a=>a.log(1e100).log(1.05).floor(),
        res: "observ",
        effect(a) {
            let x = a.pow_base(1.05).mul(a.add(1))
            return x
        },
        effDesc: x=>formatPow(x),
    },

    e1: {
        unl:()=>true,
        diff: 1,
        cost:a=>a.scale(1000,2,"P").pow_base(1.2).pow_base(1e10),
        bulk:a=>a.log(1e10).log(1.2).scale(1000,2,"P",true).add(1).floor(),
        res: "fish",
        effect(a) {
            let b = Decimal.add(1.5,spaceBaseUpgEffect('e5',0))
            let x = a.pow_base(b)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    e2: {
        unl:()=>true,
        diff: 1,
        cost:a=>a.scale(1000,2,"P").pow_base(1.2).pow_base(1e10),
        bulk:a=>a.log(1e10).log(1.2).scale(1000,2,"P",true).add(1).floor(),
        res: "prestige",
        effect(a) {
            let b = Decimal.add(1.5,spaceBaseUpgEffect('e5',0))
            let x = a.pow_base(b)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    e3: {
        unl:()=>true,
        diff: 3,
        cost:a=>a.scale(1000,2,"P").pow_base(1.2).pow_base(1e10),
        bulk:a=>a.log(1e10).log(1.2).scale(1000,2,"P",true).add(1).floor(),
        res: "core",
        effect(a) {
            let b = Decimal.add(1.5,spaceBaseUpgEffect('e5',0))
            let x = a.pow_base(b)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    e4: {
        unl:()=>true,
        diff: 4,
        cost:a=>a.sumBase(1.05).pow_base(10).mul(1e60),
        bulk:a=>a.div(1e60).log(10).sumBase(1.05,true).add(1).floor(),
        res: "observ",
        effect(a) {
            let x = a.pow_base(1.5)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    e5: {
        unl:()=>true,
        diff: 4,
        cost:a=>a.sumBase(1.05).pow_base(1e3).mul(1e30),
        bulk:a=>a.div(1e30).log(1e3).sumBase(1.05,true).add(1).floor(),
        res: "reserv",
        effect(a) {
            let x = a.mul(.05)
            return x
        },
        effDesc: x=>"+"+format(x),
    },
    e6: {
        unl:()=>true,
        diff: 6,
        cost:a=>a.sumBase(1.05).pow_base(10).mul(1e180),
        bulk:a=>a.div(1e180).log(10).sumBase(1.05,true).add(1).floor(),
        res: "reserv",
        effect(a) {
            let x = a.pow_base(1.5)
            return x
        },
        effDesc: x=>formatMult(x),
    },

    r1: {
        unl:()=>true,
        diff: 2,
        cost:a=>a.sumBase(1.05).pow_base(2).mul(1),
        bulk:a=>a.div(1).log(2).sumBase(1.05,true).add(1).floor(),
        res: "reserv",
        effect(a) {
            let base = 2
            if (hasResearch('o3')) base = Decimal.add(base,spaceBaseUpgEffect('e5',0));
            let x = a.pow_base(base)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    r2: {
        unl:()=>true,
        diff: 2,
        cost:a=>a.sumBase(1.05).pow_base(3).mul(5),
        bulk:a=>a.div(5).log(3).sumBase(1.05,true).add(1).floor(),
        res: "reserv",
        effect(a) {
            let base = 2
            if (hasResearch('o3')) base = Decimal.add(base,spaceBaseUpgEffect('e5',0));
            let x = a.pow_base(base)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    r3: {
        unl:()=>true,
        diff: 2,
        cost:a=>a.pow_base(2).mul(1000),
        bulk:a=>a.div(1000).log(2).add(1).floor(),
        res: "reserv",
        effect(a) {
            let base = 1.05
            if (hasResearch('o3')) base = Decimal.add(base,spaceBaseUpgEffect('e5',0));
            let x = a.pow_base(base).mul(a.add(1))
            return x
        },
        effDesc: x=>formatPow(x),
    },
    r4: {
        unl:()=>true,
        diff: 3,
        cost:a=>a.pow_base(5).mul(1e6),
        bulk:a=>a.div(1e6).log(5).add(1).floor(),
        res: "reserv",
        effect(a) {
            let base = 1.05
            if (hasResearch('o3')) base = Decimal.add(base,spaceBaseUpgEffect('e5',0));
            let x = a.pow_base(base).mul(a.add(1))
            return x
        },
        effDesc: x=>formatPow(x),
    },
    r5: {
        unl:()=>true,
        diff: 5,
        cost:a=>a.pow_base(1.05).pow_base(1e100),
        bulk:a=>a.log(1e100).log(1.05).floor(),
        res: "reserv",
        effect(a) {
            let x = a.pow_base(1.05).mul(a.add(1))
            return x
        },
        effDesc: x=>formatPow(x),
    },

    t1: {
        unl:()=>true,
        diff: 4,
        cost:a=>a.sumBase(1.05).pow_base(10).mul(1),
        bulk:a=>a.div(1).log(10).sumBase(1.05,true).add(1).floor(),
        res: "traject",
        effect(a) {
            let base = Decimal.add(.1,spaceBaseUpgEffect('t6',0))
            let x = a.mul(base).add(1)
            return x
        },
        effDesc: x=>formatPow(x),
    },
    t2: {
        unl:()=>true,
        diff: 4,
        cost:a=>a.sumBase(1.05).pow_base(3).mul(10),
        bulk:a=>a.div(10).log(3).sumBase(1.05,true).add(1).floor(),
        res: "traject",
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    t3: {
        unl:()=>true,
        diff: 4,
        cost:a=>a.sumBase(1.05).pow_base(4).mul(100),
        bulk:a=>a.div(100).log(4).sumBase(1.05,true).add(1).floor(),
        res: "traject",
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    t4: {
        unl:()=>true,
        diff: 4,
        cost:a=>a.pow_base(2).mul(10000),
        bulk:a=>a.div(10000).log(2).add(1).floor(),
        res: "traject",
        effect(a) {
            let x = a.pow_base(1.05).mul(a.add(1))
            return x
        },
        effDesc: x=>formatPow(x),
    },
    t5: {
        unl:()=>true,
        diff: 5,
        cost:a=>a.scale(100,2,"ME2").pow_base(10).mul(1e15),
        bulk:a=>a.div(1e15).log(10).scale(100,2,"ME2",true).add(1).floor(),
        res: "traject",
        effect(a) {
            let x = a.pow(2)
            return x.softcap(1.5e3,0.5,0)
        },
        effDesc: x=>"+"+format(x,0),
    },
    t6: {
        unl:()=>true,
        diff: 6,
        cost:a=>a.sumBase(1.05).pow_base(1e10).mul(1e90),
        bulk:a=>a.div(1e90).log(1e10).sumBase(1.05,true).add(1).floor(),
        res: "traject",
        effect(a) {
            let x = a.mul(.01)
            return x
        },
        effDesc: x=>"+"+format(x),
    },
}
const SPACEBASE_UPG_KEYS = Object.keys(SPACEBASE_UPGS)
const SPACEBASE_UPGS_GROUPS = {
    o: [
        'o1','o2','o3','o4',
        'o5','','','',
        'e1','e2','e3','e4',
    ],
    r: [
        'r1','r2','r3','r4',
        'r5','','','',
        'e5','e6'
    ],
    t: [
        't1','t2','t3','t4',
        't5','t6',
    ],
}
const SPACEBASE_RESEARCH = ['o2','o3','r2','t2']
const SPACEBASE_UPGS_GROUPS_AUTO = {
    o: ()=>hasResearch('o1'),
    r: ()=>hasResearch('r1'),
    t: ()=>hasResearch('t1'),
}

const EXPERIMENT_TIER = {
    get require() { return player.solar_system.experiment.mul(constellationBoostEffect(3,true)).sumBase(1.05).pow_base(3).pow_base('1e15000') },

    reset() {
        if (player.solar_system.observ.gte(this.require)) {
            player.solar_system.experiment = player.solar_system.experiment.add(1)

            player.solar_system.traject = E(0)
            resetSpaceBaseUpgs(['t1','t2','t3','t4','t5','t6'])
            RESETS.traject.doReset()
        }
    },

    boosts: [
        [1, x => x.pow_base(1.1).mul(x.add(1)).max(1), x => formatPow(x)],
        [2, x => x.pow_base(1.1).mul(x.div(10).add(1)).max(1), x => formatPow(x)],
        [10, x => x.pow_base(1.05).mul(x.div(25).add(1)).max(1), x => formatPow(x)],
    ],
}
function experimentBoostEffect(i,def=1) { return tmp.experiment_boosts[i]??def }

function buySpaceBaseUpg(i,auto) {
    let u = SPACEBASE_UPGS[i], lvl, cost, amt = CURRENCIES[u.res]
    if (u.unl() && tmp.ss_difficulty >= u.diff && amt.amount.gte(cost = u.cost(lvl = player.solar_system.sb_upgs[i]))) {
        let bulk = lvl.add(1).max(u.bulk(amt.amount))
        player.solar_system.sb_upgs[i] = bulk
        if (!auto && ["observ","reserv","traject"].includes(u.res)) amt.amount = amt.amount.sub(u.cost(bulk.sub(1))).max(0)
    }
}
function resetSpaceBaseUpgs(l=[]) {
    for (let i of l) player.solar_system.sb_upgs[i] = E(0)
}

function spaceBaseUpgEffect(i,def=1) { return tmp.sb_upg_effects[i]??def }

function setupSpaceBaseHTML() {
    let texts = [lang_text('space-base-upgrades'),lang_text('cost'),lang_text('difficulty')]

    for (let gid in SPACEBASE_UPGS_GROUPS) {
        let group = SPACEBASE_UPGS_GROUPS[gid]
        let h = ""

        for (let id of group) {
            let u = SPACEBASE_UPGS[id]

            h += id === '' ? `<div></div>` : `<button class="small-upg" id="spacebase-upg-${id}-button" onclick="buySpaceBaseUpg('${id}')"><div class="sb-upg-desc"><b>${texts[0][id][0]}</b> [<span id="spacebase-upg-${id}-level">0</span>]<div id="spacebase-upg-${id}-desc">${texts[0][id][1]('???')}</div>${texts[1]}: <span id="spacebase-upg-${id}-cost">???</span> ${CURRENCIES[u.res].costName}</div><div class="sb-upg-req">${texts[2]}: ${u.diff}</div></button>`
        }

        el("spacebase-upgs-"+gid).innerHTML = h
    }
}

function updateSpaceBaseHTML() {
    let texts = [lang_text('space-base-upgrades'),lang_text('experiment-boosts')], d = tmp.ss_difficulty

    el('observ-amount').textContent = format(player.solar_system.observ,0)
    el('observ-total').textContent = format(player.solar_system.total_observ,0)
    el('observ-gain').textContent = formatGain(player.solar_system.observ,tmp.currency_gain.observ)

    el('reserv-content').style.display = el_display(d >= 2)
    el('reserv-amount').textContent = format(player.solar_system.reserv,0)

    el('traject-content').style.display = el_display(d >= 4)
    el('traject-amount').textContent = format(player.solar_system.traject,0)

    el('experiment-content').style.display = el_display(d >= 6)
    el('experiment-tier').textContent = format(player.solar_system.experiment,0)
    if (d >= 6) {
        let req = EXPERIMENT_TIER.require
        el('experiment-button').innerHTML = `${lang_text('experiment-reset')}<br>${lang_text('require')}: ${format(req)} ${CURRENCIES.observ.costName}`
        el('experiment-button').className = el_classes({'huge-btn': true, locked: player.solar_system.observ.lt(req)})

        let e = player.solar_system.experiment, h = []
        for (let i = 0; i < EXPERIMENT_TIER.boosts.length; i++) {
            let b = EXPERIMENT_TIER.boosts[i]
            if (e.gte(b[0])) h.push(texts[1][i](toColoredText(b[2](tmp.experiment_boosts[i]),'lime')));
        }
        el('experiment-boosts').innerHTML = h.join("<br>")
    }

    for (let gid in SPACEBASE_UPGS_GROUPS) {
        let group = SPACEBASE_UPGS_GROUPS[gid]

        for (let id of group) if (id !== '') {
            let u = SPACEBASE_UPGS[id], e_id = "spacebase-upg-" + id + "-", e = el(e_id+'button'), unl = u.unl(), locked = d < u.diff

            e.style.display = el_display(unl)
    
            if (unl && d >= u.diff) {
                let lvl = player.solar_system.sb_upgs[id]
    
                el(e_id+'level').textContent = format(lvl,0)
                el(e_id+'desc').innerHTML = texts[0][id][1](toColoredText(u.effDesc(tmp.sb_upg_effects[id]),'lime'))
    
                let cost = u.cost(lvl)
    
                el(e_id+'cost').textContent = format(cost)
                
                locked = CURRENCIES[u.res].amount.lt(cost)
            }

            e.className = el_classes({'small-upg': true, locked, required: d < u.diff})
        }
    }
}