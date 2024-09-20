const ORES = {
    'stone': {
        color: '#888c8d',
        dense: 1,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[1],sharkUpgEffect('m3')).mul(getCRBoost(8)).mul(sharkUpgEffect('m5')).mul(simpleResearchEffect('f6')).pow(forgeUpgradeEffect('drill')).pow(getPAEffect(2)).pow(tmp.mining_tier_bonus[8]??1) },
    },
    'coal': {
        color: '#343735',
        dense: 2,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[1],sharkUpgEffect('m5')).mul(simpleResearchEffect('f6')).pow(tmp.mining_tier_bonus[8]??1) },
    },
    'iron': {
        color: '#e5e5e5',
        dense: 10,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[2]??1,sharkUpgEffect('m5')).mul(simpleResearchEffect('f6')).pow(tmp.mining_tier_bonus[8]??1) },
    },
    'gold': {
        color: '#ffeb3b',
        dense: 100,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[3]??1,sharkUpgEffect('m5')).mul(simpleResearchEffect('f6')).pow(tmp.mining_tier_bonus[8]??1) },
    },
    'platinum': {
        color: '#a0b2c6',
        dense: 2500,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[4]??1,simpleResearchEffect('f6')).pow(tmp.mining_tier_bonus[8]??1) },
    },
    'bismuth': {
        color: `linear-gradient(0deg, rgb(255,74,220) 0%, rgb(223,177,79) 25%, rgb(239,241,122) 50%, rgb(120,203,109) 75%, rgb(24,247,255) 100%)`,
        textColor: 'rgb(255,74,220)',
        dense: 1e8,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[5]??1,simpleResearchEffect('f6')).pow(tmp.mining_tier_bonus[8]??1) },
    },
    'diamond': {
        color: '#b9f2ff',
        dense: 1e11,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[6]??1,simpleResearchEffect('f6')).pow(tmp.mining_tier_bonus[8]??1) },
    },
    'obsidian': {
        color: '#441269',
        dense: 1e13,
        luck_penalty: 0.1,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[7]??1,simpleResearchEffect('f6')).pow(tmp.mining_tier_bonus[8]??1) },
    },
    'vibranium': {
        color: '#4AE07B',
        dense: 1e14,
        luck_penalty: 0.1,
        get mult() { return Decimal.mul(simpleResearchEffect('f6'),getSharkRankBonus('vibranium')).pow(tmp.mining_tier_bonus[8]??1) },
    },
    // Non-Earth Only
    'radium': {
        color: `radial-gradient(circle, rgb(194,238,174) 0%, rgb(84,255,57) 100%)`,
        textColor: 'rgb(84,255,57)',
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[10]??1,sharkUpgEffect('m8')) },
    },
    'uranium': {
        dense: 5,
        color: `radial-gradient(circle, rgb(151,175,140) 0%, rgb(97,190,82) 100%)`,
        textColor: 'rgb(97,190,82)',
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[11]??1,1) },
    },
    'berkelium': {
        dense: 15,
        color: `radial-gradient(circle, rgb(255,0,0) 0%, rgb(255,127,0) 20%, rgb(255,255,0) 40%, rgb(127,255,0) 60%, rgb(0,255,0) 80%, rgb(0,255,127) 100%)`,
        textColor: 'rgb(0,255,127)',
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[12]??1,1) },
    },
    'californium': {
        dense: 100,
        color: `radial-gradient(circle, rgb(255,222,122) 0%, rgb(235,189,0) 100%)`,
        textColor: 'rgb(255,222,122)',
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[13]??1,1) },
    },
    'oganesson': {
        dense: 1e13,
        color: `radial-gradient(circle, rgb(0,0,0) 0%, rgb(180,180,180) 25%, rgb(0,0,0) 50%, rgb(180,180,180) 75%, rgb(0,0,0) 100%)`,
        textColor: 'rgb(255,255,255)',
    },
    'sharkium': {
        dense: 1e100,
        luck_penalty: 0.1,
        color: `linear-gradient(0deg, rgb(97,220,222) 0%, rgb(123,149,190) 50%, rgb(201,158,217) 100%)`,
        textColor: 'rgb(123,149,190)',
    },
}
const ORE_KEYS = Object.keys(ORES)

const MINING_TIER = {
    get require() {
        var x = Decimal.pow(10,player.humanoid.mining_tier.scaleAll("mining_tier").pow(1.25)).mul(100)

        return x.ceil()
    },
    get bulk() {
        var x = CURRENCIES.stone.amount.div(100).log(10).root(1.25).scaleAll("mining_tier",true)

        return x.floor().add(1)
    },

    get ascend_require() {
        var x = player.humanoid.mining_ascend.scaleAll("mining_ascend").mul(5).add(100).pow(2).div(10)

        return x.ceil()
    },

    get bonus() {

        var t = player.humanoid.mining_tier, a = tmp.ss_difficulty ? E(0) : player.humanoid.mining_ascend

        var res_m4 = researchEffect('m4'), t_m4 = t.mul(res_m4)
        
        var x = [1,1]

        if (t.gte(1)) x = [Decimal.pow(4,player.singularity.best_bh.gte(5)?t:t.scale(20,hasResearch("f8") ? 1.8 : 2,'P')),Decimal.pow(5,t_m4)]

        if (t.gte(4)) x[2] = Decimal.pow(3,t_m4.sub(3));
        if (t.gte(7)) x[3] = Decimal.pow(4,t_m4.sub(6));
        if (t.gte(10)) x[4] = Decimal.pow(3,t_m4.sub(9));
        if (t.gte(17)) x[5] = Decimal.pow(3,t.sub(16));
        if (t.gte(21)) x[6] = Decimal.pow(3,t.sub(20));
        if (t.gte(25)) x[7] = Decimal.pow(2,t.sub(24));

        if (a.gte(1)) x[8] = Decimal.pow(1.25,a);
        if (a.gte(2)) x[9] = Decimal.pow(4,a.sub(1));
        if (a.gte(2)) x[10] = Decimal.pow(5,a.sub(1));
        if (a.gte(4)) x[11] = Decimal.pow(3,a.sub(3));
        if (a.gte(7)) x[12] = Decimal.pow(4,a.sub(6));
        if (a.gte(13)) x[13] = Decimal.pow(3,a.sub(12));

        return x
    },

    upgrade(bulking=false) {
        if (CURRENCIES.stone.amount.gte(this.require)) {
            let bulk = player.humanoid.mining_tier.add(1)
            if (bulking) bulk = bulk.max(this.bulk)

            player.humanoid.mining_tier = bulk

            updateCultivationTemp()

            if (!isSSObserved('moon')) {
                ores_grid = []
                mine_time = E(0)
                reloadOres()
            }
        }
    },
    ascend() {
        if (isSSObserved('moon') && player.humanoid.mining_tier.gte(this.ascend_require)) {
            let bulk = player.humanoid.mining_ascend.add(1)

            player.humanoid.mining_ascend = bulk

            RESETS["black-hole"].doReset()
        }
    },
    undo() {
        if (player.humanoid.mining_tier.gte(1)) {
            player.humanoid.mining_tier = player.humanoid.mining_tier.sub(1)

            updateCultivationTemp()

            ores_grid = []
            mine_time = E(0)
            reloadOres()
        }
    },
    ascend_undo() {
        if (player.humanoid.mining_ascend.gte(1)) {
            player.humanoid.mining_ascend = player.humanoid.mining_ascend.sub(1)

            RESETS["black-hole"].doReset()
        }
    },

    base_milestone: [0,3,6,9,16,20,24,30],
    gen_milestone: [8,11,18,23,27,32,1250,1500,1750],

    get base() {
        var b = this.base_milestone.filter(x => player.humanoid.mining_tier.gte(x)).length

        return b
    },
    get ore_generator() {
        var b = this.gen_milestone.filter(x => player.humanoid.mining_tier.gte(x)).length

        return b
    },

    ascend_base_milestone: [1,3,6,12,25,50],
    ascend_gen_milestone: [10,15,30,60],

    get ascend_base() {
        var b = this.ascend_base_milestone.filter(x => player.humanoid.mining_ascend.gte(x)).length

        return b
    },
    get ascend_ore_generator() {
        var b = this.ascend_gen_milestone.filter(x => player.humanoid.mining_ascend.gte(x)).length

        return b
    },
}

var ores_grid = []
var mine_time = E(0)

function reloadOres() {
    if (ores_grid.length >= 8) return

    var mf = tmp.mining_fortune.div(100)
    var smf = tmp.super_mining_fortune.div(100)

    var h_inc = tmp.mining_tier_bonus[0]
    var h2_inc = tmp.mining_tier_bonus[9]??1

    while (ores_grid.length < 8) {
        var s = player.humanoid.mining_tier.gte(1e3) && tmp.ascend_ore_spawn_base && (tmp.ore_generator >= 9 || Math.random() < 1/3)

        var name, oo, fortune, p = Math.random()**-0.5, health, value

        if (s) {
            name = ORE_KEYS[Math.min(ORE_KEYS.length-1, 8+tmp.ascend_ore_spawn_base, 9+tmp.ascend_ore_generator+Math.floor(Math.logBase(Math.random(), 1/3)))]
            oo = ORES[name]

            fortune = smf.mul(oo.luck_penalty??1).floor()
            if (smf.mod(1).gt(Math.random())) fortune = fortune.add(1)

            health = Decimal.mul(p,10).mul(oo.dense??1).mul(h2_inc).round()
            value = Decimal.pow(2,fortune).mul(Decimal.mul(p,oo.mult??1).round())
        } else {
            name = ORE_KEYS[Math.min(ORE_KEYS.length-1, tmp.ore_spawn_base, tmp.ore_generator+Math.floor(Math.logBase(Math.random(), 1/3)))]
            oo = ORES[name]

            fortune = mf.mul(oo.luck_penalty??1).floor()
            if (mf.mod(1).gt(Math.random())) fortune = fortune.add(1)

            health = Decimal.mul(p,10).mul(oo.dense??1).mul(h_inc).round()
            value = Decimal.pow(2,fortune).mul(Decimal.mul(p,oo.mult??1).round())
        }

        var o = {
            name,
            fortune,
            health,
            value,
            super: s,
        }

        ores_grid.push(o)
    }
}

function setupCultivationHTML() {
    var h = "", lang = lang_text("ore-names")

    for (let x = 0; x < 8; x++) {
        h += `
        <div class="ore-grid" id="ore-grid-${x}"><div></div></div>
        `
    }

    el("ores-grid").innerHTML = h
}

function updateCultivationHTML() {
    var lang = lang_text("ore-names")
    var txt = {
        luck: icon('luck'),
        heart: icon('heart'),
    }

    var ascend = player.humanoid.mining_ascend

    for (let x = 0; x < 8; x++) {
        var o = ores_grid[x], e = el(`ore-grid-${x}`), s = o.super

        e.style.background = ORES[o.name].color

        var h = `${toColoredText(lang[o.name])} ${toColoredText('×'+o.value.format(0))}<br>${toColoredText(o.health.format(0)+txt.heart,s?'orangered':'red')}`

        if (o.fortune.gt(0)) h = `${s ? toColoredText(o.fortune.format(0)+txt.luck,'orange') : toTextStyle(o.fortune.format(0)+txt.luck,'gold')}<br>` + h

        e.innerHTML = `<div>${h}</div>`
    }

    var speed, dmg

    if (ores_grid[0].super) {
        speed = tmp.super_mining_speed, dmg = tmp.super_mining_damage
    } else {
        speed = tmp.mining_speed, dmg = tmp.mining_damage
    }

    el("mining-progress").innerHTML = speed.gte(10) ? format(dmg.mul(speed))+"/s" : formatTime(Decimal.sub(1,mine_time).div(speed).max(0),1)
    el("mining-damage").innerHTML = tmp.mining_damage.format(0)
    el("mining-fortune").innerHTML = tmp.mining_fortune.format(0)

    el("super-mining-text").style.display = el_display(ascend.gte(1))
    if (ascend.gte(1)) {
        el("super-mining-damage").innerHTML = tmp.super_mining_damage.format(0)
        el("super-mining-fortune").innerHTML = tmp.super_mining_fortune.format(0)
    }
    
    var r = ""

    ORE_KEYS.forEach(x => {
        var c = CURRENCIES[x], amt = c.amount
        if (amt.gt(0)) r += `<div class='ore-list'>${c.costName+" ×"+amt.format(0)+(c.passive>0?" "+amt.formatGain(tmp.currency_gain[x]):"")}</div>`
    })

    el('ores-list').innerHTML = r

    var tier = player.humanoid.mining_tier

    el('mining-tier').innerHTML = tier.format(0)

    el('mining-tier-undo-btn').className = el_classes({locked: tier.eq(0)})
    el('mining-ascend-undo-btn').className = el_classes({locked: ascend.eq(0)})

    var req = MINING_TIER.require, next_tier = MINING_TIER.base_milestone[tmp.ore_spawn_base], next_gen = MINING_TIER.gen_milestone[tmp.ore_generator]

    r = lang_text('mining-tier-reset')
    if (next_tier && tmp.ore_spawn_base < 8) r += "<br>" + lang_text('next-mining-tier') + " " + format(next_tier,0) + " - " + lang_text('mining-tier-ore-unlock',CURRENCIES[ORE_KEYS[tmp.ore_spawn_base+1]].costName)
    if (next_gen) r += "<br>" + lang_text('next-mining-tier') + " " + format(next_gen,0) + " - " + lang_text('mining-tier-ore-generation',CURRENCIES[ORE_KEYS[tmp.ore_generator]].costName)

    el('mining-tier-btn').innerHTML = r + "<br>" + lang_text('require') + ": " + req.format(0) + " " + CURRENCIES.stone.costName
    el('mining-tier-btn').className = el_classes({locked: CURRENCIES.stone.amount.lt(req), 'huge-btn': true})

    lang = lang_text('mining-tier-bonus')
    el('mining-tier-bonus').innerHTML = tmp.mining_tier_bonus.map((x,i)=>x?`<div>${lang[i](x)}</div>`:"").join("")

    var unl = isSSObserved('moon')
    el('mining-ascend-unlock').style.display = el_display(unl)
    if (unl) {
        el('mining-ascend').innerHTML = ascend.format(0)

        req = MINING_TIER.ascend_require, next_tier = MINING_TIER.ascend_base_milestone[tmp.ascend_ore_spawn_base], next_gen = MINING_TIER.ascend_gen_milestone[tmp.ascend_ore_generator]

        r = lang_text('mining-ascend-reset')
        if (next_tier) r += "<br>" + lang_text('next-mining-ascend') + " " + format(next_tier,0) + " - " + lang_text('mining-tier-ore-unlock',CURRENCIES[ORE_KEYS[tmp.ascend_ore_spawn_base+9]].costName);
        if (next_gen) r += "<br>" + lang_text('next-mining-ascend') + " " + format(next_gen,0) + " - " + lang_text('mining-tier-ore-generation',CURRENCIES[ORE_KEYS[tmp.ascend_ore_generator+9]].costName);
        r += `<br>${lang_text('require')}: <b>${lang_text('mining-tier')}</b> ${req.format(0)}`
        
        el('mining-ascend-btn').innerHTML = r
        el('mining-ascend-btn').className = el_classes({locked: tier.lt(req), 'huge-btn': true})
    }
}

function getMiningDamage() {
    var x = Decimal.mul(sharkUpgEffect('m1'),getSharkRankBonus('mining_damage'))
    if (hasResearch('f5')) x = x.mul(researchEffect('f5'))
    return x.pow(getPAEffect(2))
}
function getMiningSpeed() {
    var x = Decimal.mul(1,sharkUpgEffect('m2')).mul(sharkUpgEffect('m7'))
    return x
}
function getMiningFortune() {
    var x = researchEffect('m1',0)
    for (let i = 0; i < 4; i++) x = x.add(simpleETEffect(24+i,0))
    x = x.add(sharkUpgEffect('m4',0))
    return x.overflow(1e9,0.5)
}

function getSuperMiningDamage() {
    var x = tmp.mining_damage.add(10).log10().log10().add(1).mul(sharkUpgEffect('m6')).mul(simpleResearchEffect('m5')).mul(remnantUpgEffect(14))
    return x
}
function getSuperMiningSpeed() {
    var x = tmp.mining_speed.add(10).log10().mul(sharkUpgEffect('m7'))
    return x
}
function getSuperMiningFortune() {
    var x = tmp.mining_fortune.add(1).log10().add(sharkUpgEffect('m9',0))
    for (let i = 0; i < 4; i++) x = x.add(simpleCETEffect(24+i,0));
    return x
}

function updateCultivationTemp() {
    tmp.ore_spawn_base = MINING_TIER.base
    tmp.ore_generator = MINING_TIER.ore_generator

    tmp.ascend_ore_spawn_base = MINING_TIER.ascend_base
    tmp.ascend_ore_generator = MINING_TIER.ascend_ore_generator

    tmp.mining_tier_bonus = MINING_TIER.bonus

    tmp.mining_damage = getMiningDamage()
    tmp.mining_speed = getMiningSpeed()
    tmp.mining_fortune = getMiningFortune()

    tmp.super_mining_damage = getSuperMiningDamage()
    tmp.super_mining_speed = getSuperMiningSpeed()
    tmp.super_mining_fortune = getSuperMiningFortune()

    tmp.ore_generator_mult = Decimal.pow(2,tmp.mining_fortune.div(100)).mul(tmp.mining_speed)
    tmp.ascend_ore_generator_mult = Decimal.pow(2,tmp.super_mining_fortune.div(100)).mul(tmp.super_mining_speed)
}