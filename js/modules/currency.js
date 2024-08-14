const CURRENCIES = {
    fish: {
        get amount() { return player.fish },
        set amount(v) { player.fish = v.max(0) },

        get total() { return player.total_fish },
        set total(v) { player.total_fish = v.max(0) },
    
        get gain() {
            let x = getSharkBonus("fish").mul(sharkUpgEffect('s1')).mul(sharkUpgEffect('p1')).mul(sharkUpgEffect('p2'))

            .mul(tmp.explore_eff[0]).mul(tmp.core_bonus)

            x = x.pow(sharkUpgEffect('s4')).pow(tmp.explore_eff[2]).pow(coreReactorEffect(0)).pow(getSharkRankBonus('fish')).pow(simpleETEffect(12))
            .pow(remnantUpgEffect(4))

            if (inExploration(0)) x = x.root(2)
            if (hasDepthMilestone(0,3)) x = x.pow(1.05)
            if (tmp.cr_active) x = x.root(3)
            
            if (hasResearch('c14')) x = x.pow(researchEffect('c14'))

            if (inExploration(4)) x = expPow(x,0.75);

            x = expPow(x,tmp.bh_reduction)

            var s = E('ee40'), pre_s = x

            s = s.pow(getSharkRankBonus('so'))
            
            tmp.shark_op_start = s

            if (x.gte(s)) {
                x = x.overflow(s,0.5)
                tmp.shark_op = pre_s.log10().div(x.log10())
            } else tmp.shark_op = E(1)

            return x
        },
    },
    prestige: {
        get require() { return E(1e36) },

        get amount() { return player.prestige.shards },
        set amount(v) { player.prestige.shards = v.max(0) },

        get total() { return player.prestige.total },
        set total(v) { player.prestige.total = v.max(0) },
    
        get gain() {
            let x = player.total_fish.div(1e36)

            if (x.lt(1)) return E(0)

            var exp = 0.5
            if (hasResearch('p4')) exp += 0.05
            if (hasEvolutionGoal(5)) exp += 0.0125

            x = expPow(x,exp).pow(coreReactorEffect(1)).mul(getSharkBonus("prestige")).mul(tmp.explore_eff[1])

            x = x.pow(tmp.explore_eff[3]).pow(simpleETEffect(13)).pow(getSharkRankBonus('prestige')).pow(forgeUpgradeEffect('shard'))

            if (hasDepthMilestone(0,0)) x = x.pow(1.05)
            if (inExploration(1)) x = x.root(2)

            if (tmp.cr_active) x = x.root(3);

            x = expPow(x,forgeUpgradeEffect('refined_shard'))
            x = expPow(x,tmp.bh_reduction)
    
            return x.floor()
        },

        get passive() { return hasDepthMilestone(1,3) ? 1 : 0 },
    },
    core: {
        get require() { return E('1e450') },

        get amount() { return player.core.fragments },
        set amount(v) { player.core.fragments = v.max(0) },

        get total() { return player.core.total },
        set total(v) { player.core.total = v.max(0) },

        get gain() {
            let x = player.prestige.total.div('1e450')

            if (x.lt(1)) return E(0)

            x = x.log10().div(10).add(1)

            if (hasEvolutionGoal(2)) x = expPow(x,1.25)

            x = x.mul(getSharkBonus("core")).mul(getCRBoost(1)).pow(simpleETEffect(14))

            x = x.pow(tmp.bh_reduction)
    
            return x.floor()
        },

        get passive() { return hasEvolutionGoal(0) ? 1 : 0 },
    },
    humanoid: {
        next(s=player.humanoid.shark) { return Decimal.pow(10,Decimal.pow(this.base,s.div(this.mult)).mul(1.5e18)) },
        get require() { return this.next() },

        get base() { return Decimal.sub(10,simpleETEffect(15,0)) },
        get mult() { return getPAEffect(3) },

        get moreArg() { return [this.next(player.humanoid.shark.add(tmp.currency_gain.humanoid))] },

        get amount() { return player.humanoid.shark },
        set amount(v) { player.humanoid.shark = v.max(0) },

        get gain() {
            let x = player.fish

            if (x.lt("e1.5e18")) return E(0)

            x = x.log10().div(1.5e18).log(this.base).mul(this.mult).sub(player.humanoid.shark).add(1).max(0)
    
            return x.floor()
        },

        passive: 0,
    },
    remnants: {
        get amount() { return player.singularity.remnants },
        set amount(v) { player.singularity.remnants = v.max(0) },
    
        get gain() {
            if (!S_MILESTONES[0].req()) return E(0)

            let x = E(1).add(getSharkBonus('remnants',0)).mul(getSharkRankBonus('remnants'))

            if (hasResearch('s1')) x = x.mul(researchEffect('s1'));
            if (player.singularity.best_bh.gte(6)) x = x.mul(player.singularity.bh.pow_base(2));

            return x
        },
    },
}

function setupCurrencies() {
    for (let i = 0; i < EXPLORE.length; i++) {
        var e = EXPLORE[i]
        CURRENCIES[e.resource] = {
            get amount() { return player.explore.res[i] },
            set amount(v) { player.explore.res[i] = v.max(0) },
        
            get gain() {
                if (player.explore.unl <= i) return E(0)

                let x = player.explore.base[i].mul(tmp.explore_upg_boost[i][0]).mul(tmp.explore_mult[i])

                if (i < 4 && tmp.cr_active) x = x.root(3)
        
                return x//.pow(getPAEffect(1))
            },
        }
    }

    for (let [i,v] of Object.entries(CURRENCIES)) {
        v.name ??= lang_text(i+"-name")
        v.costName ??= lang_text(i+"-costName") ?? v.name
    }

    var lang = lang_text("ore-names")

    for (let [i,k] of Object.entries(ORE_KEYS)) {
        i = parseInt(i)
        var o = ORES[k]
        CURRENCIES[k] = {
            get amount() { return player.humanoid.ores[k] },
            set amount(v) { player.humanoid.ores[k] = v.max(0) },

            get gain() { return Decimal.mul(tmp.ore_generator_mult,ORES[k].mult??1) },

            get passive() { return tmp.ore_generator > i ? 1 : 0 },

            name: lang[k],
            costName: toColoredText(lang[k],o.textColor ?? o.color),
        }
    }
}

function gainCurrency(id,amt) {
    var curr = CURRENCIES[id]
    curr.amount = curr.amount.add(amt)
    if ('total' in curr) curr.total = curr.total.add(amt)
}