const ORES = {
    'stone': {
        color: '#888c8d',
        dense: 1,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[1],sharkUpgEffect('m3')).mul(getCRBoost(8)).mul(sharkUpgEffect('m5')).mul(simpleResearchEffect('f6')).pow(forgeUpgradeEffect('drill')).pow(getPAEffect(2)) },
    },
    'coal': {
        color: '#343735',
        dense: 2,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[1],sharkUpgEffect('m5')).mul(simpleResearchEffect('f6')) },
    },
    'iron': {
        color: '#e5e5e5',
        dense: 10,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[2]??1,sharkUpgEffect('m5')).mul(simpleResearchEffect('f6')) },
    },
    'gold': {
        color: '#ffeb3b',
        dense: 100,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[3]??1,sharkUpgEffect('m5')).mul(simpleResearchEffect('f6')) },
    },
    'platinum': {
        color: '#a0b2c6',
        dense: 2500,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[4]??1,simpleResearchEffect('f6')) },
    },
    'bismuth': {
        color: `linear-gradient(0deg, rgb(255,74,220) 0%, rgb(223,177,79) 25%, rgb(239,241,122) 50%, rgb(120,203,109) 75%, rgb(24,247,255) 100%)`,
        textColor: 'rgb(255,74,220)',
        dense: 1e8,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[5]??1,simpleResearchEffect('f6')) },
    },
    'diamond': {
        color: '#b9f2ff',
        dense: 1e11,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[6]??1,simpleResearchEffect('f6')) },
    },
    'obsidian': {
        color: '#441269',
        dense: 1e13,
        luck_penalty: 0.1,
        get mult() { return Decimal.mul(tmp.mining_tier_bonus[7]??1,simpleResearchEffect('f6')) },
    },
    'vibranium': {
        color: '#4AE07B',
        dense: 1e14,
        luck_penalty: 0.1,
        get mult() { return Decimal.mul(simpleResearchEffect('f6'),getSharkRankBonus('vibranium')) },
    },
    'radium': {
        color: `radial-gradient(circle, rgb(194,238,174) 0%, rgb(84,255,57) 100%);`,
        textColor: 'rgb(84,255,57)',
    },
    'uranium': {
        color: `radial-gradient(circle, rgb(151,175,140) 0%, rgb(97,190,82) 100%);`,
        textColor: 'rgb(97,190,82)',
    },
    'berkelium': {
        color: `radial-gradient(circle, rgb(255,0,0) 0%, rgb(255,127,0) 20%, rgb(255,255,0) 40%, rgb(127,255,0) 60%, rgb(0,255,0) 80%, rgb(0,255,127) 100%);`,
        textColor: 'rgb(0,255,127)',
    },
    'californium': {
        color: `radial-gradient(circle, rgb(255,222,122) 0%, rgb(235,189,0) 100%);`,
        textColor: 'rgb(255,222,122)',
    },
    'oganesson': {
        color: `radial-gradient(circle, rgb(0,0,0) 0%, rgb(180,180,180) 25%, rgb(0,0,0) 50%, rgb(180,180,180) 75%, rgb(0,0,0) 100%);`,
        textColor: 'rgb(255,255,255)',
    },
    'sharkium': {
        color: `linear-gradient(0deg, rgb(97,220,222) 0%, rgb(123,149,190) 50%, rgb(201,158,217) 100%);`,
        textColor: 'rgb(123,149,190)',
    },
}
const ORE_KEYS = Object.keys(ORES)

const MINING_TIER = {
    get require() {
        var x = Decimal.pow(10,player.humanoid.mining_tier.scale(15,1.5,'P').scale(10,1.5,'L').pow(1.25)).mul(100)

        return x.ceil()
    },
    get bulk() {
        var x = CURRENCIES.stone.amount.div(100).log(10).root(1.25).scale(10,1.5,'L',true).scale(15,1.5,'P',true)

        return x.floor().add(1)
    },

    get bonus() {

        var t = player.humanoid.mining_tier

         var res_m4 = researchEffect('m4'), t_m4 = t.mul(res_m4)
        
        var x = [Decimal.pow(4,t.scale(20,hasResearch("f8") ? 1.8 : 2,'P')),Decimal.pow(5,t_m4)]

        if (t.gte(4)) x.push(Decimal.pow(3,t_m4.sub(3)));
        if (t.gte(7)) x.push(Decimal.pow(4,t_m4.sub(6)));
        if (t.gte(10)) x.push(Decimal.pow(3,t_m4.sub(9)));
        if (t.gte(17)) x.push(Decimal.pow(3,t.sub(16)));
        if (t.gte(21)) x.push(Decimal.pow(3,t.sub(20)));
        if (t.gte(25)) x.push(Decimal.pow(2,t.sub(24)));

        return x
    },

    upgrade() {
        if (CURRENCIES.stone.amount.gte(this.require)) {
            player.humanoid.mining_tier = player.humanoid.mining_tier.add(1)

            updateCultivationTemp()

            ores_grid = []
            mine_time = E(0)
            reloadOres()
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

    base_milestone: [0,3,6,9,16,20,24,30],
    gen_milestone: [8,11,18,23,27,32],

    get base() {
        var b = this.base_milestone.filter(x => player.humanoid.mining_tier.gte(x)).length

        return b
    },

    get ore_generator() {
        var b = this.gen_milestone.filter(x => player.humanoid.mining_tier.gte(x)).length

        return b
    },
}

var ores_grid = []
var mine_time = E(0)

function reloadOres() {
    if (ores_grid.length >= 8) return

    var mf = tmp.mining_fortune.div(100)

    var h_inc = tmp.mining_tier_bonus[0]

    while (ores_grid.length < 8) {
        var name = ORE_KEYS[Math.min(ORE_KEYS.length-1, tmp.ore_spawn_base, tmp.ore_generator+Math.floor(Math.logBase(Math.random(), 1/3)))]
        var oo = ORES[name]

        var fortune = mf.mul(oo.luck_penalty??1).floor()
        if (mf.mod(1).gt(Math.random())) fortune = fortune.add(1)

        var p = Math.random()**-0.5

        var health = Decimal.mul(p,10).mul(oo.dense??1).mul(h_inc).round()
        var value = Decimal.pow(2,fortune).mul(Decimal.mul(p,oo.mult??1).round(p))

        var o = {
            name,
            fortune,
            health,
            value,
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

    for (let x = 0; x < 8; x++) {
        var o = ores_grid[x], e = el(`ore-grid-${x}`)

        e.style.background = ORES[o.name].color

        var h = `${toColoredText(lang[o.name])} ${toColoredText('×'+o.value.format(0))}<br>${toTextStyle(o.health.format(0)+txt.heart,'red')}`

        if (o.fortune.gt(0)) h = `${toTextStyle(o.fortune.format(0)+txt.luck,'gold')}<br>` + h

        e.innerHTML = `<div>${h}</div>`
    }

    el("mining-progress").innerHTML = tmp.mining_speed.gte(10) ? format(tmp.mining_damage.mul(tmp.mining_speed))+"/s" : formatTime(Decimal.sub(1,mine_time).div(tmp.mining_speed).max(0),1)
    el("mining-damage").innerHTML = tmp.mining_damage.format(0)
    el("mining-fortune").innerHTML = tmp.mining_fortune.format(0)
    
    var r = ""

    ORE_KEYS.forEach(x => {
        var c = CURRENCIES[x], amt = c.amount
        if (amt.gt(0)) r += `<div class='ore-list'>${c.costName+" ×"+amt.format(0)+(c.passive>0?" "+amt.formatGain(tmp.currency_gain[x]):"")}</div>`
    })

    el('ores-list').innerHTML = r

    var tier = player.humanoid.mining_tier

    el('mining-tier').innerHTML = tier.format(0)

    el('mining-tier-undo-btn').className = el_classes({locked: tier.eq(0)})

    var req = MINING_TIER.require, next_tier = MINING_TIER.base_milestone[tmp.ore_spawn_base], next_gen = MINING_TIER.gen_milestone[tmp.ore_generator]

    r = lang_text('mining-tier-reset')
    if (next_tier && tier.eq(next_tier-1)) r += " " + lang_text('mining-tier-ore-unlock',CURRENCIES[ORE_KEYS[tmp.ore_spawn_base+1]].costName)
    if (next_gen && tier.eq(next_gen-1)) r += " " + lang_text('mining-tier-ore-generation',CURRENCIES[ORE_KEYS[tmp.ore_generator]].costName)

    el('mining-tier-btn').innerHTML = r + "<br>" + lang_text('require') + ": " + req.format(0) + " " + CURRENCIES.stone.costName
    el('mining-tier-btn').className = el_classes({locked: CURRENCIES.stone.amount.lt(req), 'huge-btn': true})

    lang = lang_text('mining-tier-bonus')
    el('mining-tier-bonus').innerHTML = tier.gt(0) ? tmp.mining_tier_bonus.map((x,i)=>`<div>${lang[i](x)}</div>`).join("") : ""
}

function getMiningDamage() {
    var x = Decimal.mul(sharkUpgEffect('m1'),getSharkRankBonus('mining_damage'))
    if (hasResearch('f5')) x = x.mul(researchEffect('f5'))
    return x.pow(getPAEffect(2))
}

function getMiningSpeed() {
    var x = sharkUpgEffect('m2')
    return x
}

function getMiningFortune() {
    var x = researchEffect('m1',0)
    for (let i = 0; i < 4; i++) x = x.add(simpleETEffect(24+i,0))
    x = x.add(sharkUpgEffect('m4'))
    return x
}

function updateCultivationTemp() {
    tmp.ore_spawn_base = MINING_TIER.base
    tmp.ore_generator = MINING_TIER.ore_generator

    tmp.mining_tier_bonus = MINING_TIER.bonus

    tmp.mining_damage = getMiningDamage()
    tmp.mining_speed = getMiningSpeed()
    tmp.mining_fortune = getMiningFortune()

    tmp.ore_generator_mult = Decimal.pow(2,tmp.mining_fortune.div(100)).mul(tmp.mining_speed)
}