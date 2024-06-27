const CORE_RAD = {
    experiment() {
        var rad = player.core.radiation

        rad.active = !rad.active
        
        doReset("core",true)
    },

    gain() {
        let x = this.genValue(player.core.radiation.gen).mul(sharkUpgEffect('s5')).mul(tmp.explore_eff[4]??1).pow(getPAEffect(0))

        return x
    },

    limit() {
        let x = Decimal.mul(this.limitIncrease(),1e6).div(simpleResearchEffect("c6"))

        if (hasDepthMilestone(4,0)) x = x.div(1e3)

        return x
    },
    boostBulk() {
        let x = player.core.radiation.amount

        if (hasDepthMilestone(4,0)) x = x.mul(1e3)

        x = x.div(1e6).mul(simpleResearchEffect("c6")).log(1e3).root(hasResearch('c12') ? 1.2 : 1.25).scale(tmp.cr_scale1,2,'P',true).scale(tmp.cr_scale2,2,'P',true).floor().add(1)

        return x
    },

    limitIncrease() {
        let x = Decimal.pow(1e3,player.core.radiation.boost.scale(tmp.cr_scale2,2,'P').scale(tmp.cr_scale1,2,'P').pow(hasResearch('c12') ? 1.2 : 1.25))

        return x
    },

    purchaseBoost() {
        var rad = player.core.radiation
        if (rad.amount.gte(this.limit())) {
            rad.boost = rad.boost.add(1).max(this.boostBulk())

            if (!hasEvolutionGoal(6)) {
                rad.gen = E(0)
                resetSharkUpgrades('s5')
            }

            if (!hasEvolutionGoal(7)) {
                rad.amount = E(0)
                doReset("core",true)
            }
        }
    },

    genCost: l => Decimal.pow('e850', Decimal.pow(1.05, l)),
    genBulk: x => x.log('e850').log(1.05).floor().add(1),

    genValue: l => Decimal.pow(2,l.sub(1)).mul(l),

    purchaseGeneration() {
        var r_c15 = hasResearch('c15'), active = tmp.cr_active
        if (!r_c15 && !active) return
        let x = player.core.radiation.gen, amt = CURRENCIES.fish.amount.pow(!active && r_c15 ? researchEffect('c15',0) : 1)
        if (amt.gte(this.genCost(x))) {
            player.core.radiation.gen = this.genBulk(amt).max(x.add(1))
        }
    },

    boosts: [
        {
            req: 0,
            effect: (r,b)=>{
                let x = r.add(1).log10().mul(b.add(1)).root(2)

                return x
            },
        },{
            req: 1,
            effect: (r,b)=>{
                let x = expPow(r.add(1),1/3).pow(b.div(4).add(1))

                return x
            },
        },{
            req: 2,
            effect: (r,b)=>{
                let x = r.add(1).log10().root(2).mul(b.add(1)).div(100).add(1)

                return x
            },
        },{
            req: 9,
            effect: (r,b)=>{
                let x = r.add(1).log10().root(2).mul(b.add(10))

                return x
            },
        },{
            req: 13,
            effect: (r,b)=>{
                let x = r.add(1).log10().mul(b.add(1).root(2)).softcap(250,3,3).div(5000)

                return x
            },
        },{
            req: 17,
            effect: (r,b)=>{
                let x = r.add(10).log10().log10().mul(b.root(2).div(10).add(1)).add(1).root(2).mul(1.25)

                return x
            },
        },{
            req: 20,
            effect: (r,b)=>{
                let x = r.add(1).log10().mul(b.add(1)).root(3).div(100).add(1)

                return x
            },
        },{
            req: 25,
            effect: (r,b)=>{
                let x = player.shark_level.add(1).pow(r.add(1).log10().mul(b.add(1)).root(2).div(100)).overflow(1e3,0.5)

                return x
            },
        },{
            req: 35,
            effect: (r,b)=>{
                let x = r.add(1).log10().div(1e3).add(1).pow(b.add(1).root(2))

                return x
            },
        },{
            req: 45,
            effect: (r,b)=>{
                let x = r.add(1).log10().mul(b.add(1)).add(1).log10().div(100).add(1)

                return x
            },
        },{
            req: 64,
            effect: (r,b)=>{
                let x = r.add(1).log10().mul(b.add(1)).add(1).log10().add(1)

                return x
            },
        },
    ],
}

function getCRBoost(i,def=1) { return player.core.radiation.boost.gte(CORE_RAD.boosts[i].req) ? tmp.cr_boost[i] ?? def : def }

function getCoreTemperature() {
    var x = E(6150)

    for (let i = 0; i < CORE_ASSEMBLER.length; i++) x = x.add(CORE_ASSEMBLER[i].temperature(player.core.assembler_strength[i]))

    return x
}

function getCoreTemperatureEffect() {
    var x = getCoreTemperature()

    if (x.gte(6150)) {
        x = x.sub(6050).div(100).root(2)

        return x.softcap(10,hasResearch('f4') ? 0.5 : 1/3,0)
    } else return x.div(6150).max(0)
}

function updateCoreRadiation() {
    var rad = player.core.radiation

    el('radioactive-amount').innerHTML = rad.amount.format(0) + " / " + tmp.cr_limit.format(0) + " " + icon("radioactive")
    el('radioactive-gain').innerHTML = tmp.cr_gain.gt(0) ? rad.amount.formatGain(tmp.cr_gain) : ""

    el('start-cr-experiment').innerHTML = lang_text('cr-start',rad.active)

    var r_c15 = hasResearch('c15'), active = tmp.cr_active
    var cost = CORE_RAD.genCost(rad.gen)
    el('upgrade-cr-btn').innerHTML = lang_text('upgrade-cr',CORE_RAD.genValue(rad.gen),cost)
    el('upgrade-cr-btn').className = el_classes({locked: !r_c15 && !active || CURRENCIES.fish.amount.pow(!active && r_c15 ? researchEffect('c15',0) : 1).lt(cost), 'huge-btn': true})

    el('reset-cr-btn').innerHTML = lang_text('reset-cr',CORE_RAD.limitIncrease())
    el('reset-cr-btn').className = el_classes({locked: rad.amount.lt(tmp.cr_limit), 'huge-btn': true})

    let h = "", boosts_list = lang_text("cr-boosts"), boost = player.core.radiation.boost

    for (let i = 0; i < CORE_RAD.boosts.length; i++) if (boost.gte(CORE_RAD.boosts[i].req)) h += boosts_list[i](tmp.cr_boost[i])+`<br>`

    el('cr-boosts-div').innerHTML = h

    el('radioactive-boost').innerHTML = format(player.core.radiation.boost,0)

    el('core-temp-div').style.display = el_display(player.feature>=9)
    if (player.feature>=9) {
        el('core-temperature').innerHTML = format(getCoreTemperature())+"°K"
        el('core-temp-effect').innerHTML = formatPercent(tmp.core_temp_eff.sub(1))
    }
}

function updateCoreRadiationTemp() {
    tmp.cr_gain = CORE_RAD.gain()
    tmp.cr_limit = CORE_RAD.limit()

    tmp.cr_scale1 = Decimal.add(10,researchEffect('m3',0))
    tmp.cr_scale2 = Decimal.add(30,researchEffect('m3',0))

    var temp_eff = tmp.core_temp_eff = getCoreTemperatureEffect()

    var amt = player.core.radiation.amount, b = player.core.radiation.boost

    for (let i = 0; i < CORE_RAD.boosts.length; i++) {
        let boost = CORE_RAD.boosts[i]
        tmp.cr_boost[i] = boost.effect(b.gte(boost.req) ? amt : Decimal.dZero, b.sub(boost.req).max(0).mul(temp_eff))
    }
}