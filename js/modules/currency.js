const CURRENCIES = {
    fish: {
        get amount() { return player.fish },
        set amount(v) { player.fish = v },

        get total() { return player.total_fish },
        set total(v) { player.total_fish = v },
    
        get gain() {
            let x = getSharkBonus("fish").mul(sharkUpgEffect('s1')).mul(sharkUpgEffect('p1')).mul(sharkUpgEffect('p2'))

            .mul(tmp.explore_eff[0]).mul(tmp.core_bonus)

            x = x.pow(sharkUpgEffect('s4')).pow(tmp.explore_eff[2]).pow(coreReactorEffect(0))

            if (inExploration(0)) x = x.root(2)
            if (hasDepthMilestone(0,3)) x = x.pow(1.05)

            if (tmp.cr_active) x = x.root(3)

            if (inExploration(4)) x = expPow(x,0.75)
    
            return x
        },
    },
    prestige: {
        get require() { return E(1e36) },

        get amount() { return player.prestige.shards },
        set amount(v) { player.prestige.shards = v },

        get total() { return player.prestige.total },
        set total(v) { player.prestige.total = v },
    
        get gain() {
            let x = player.total_fish.div(1e36)

            if (x.lt(1)) return E(0)

            x = expPow(x,hasResearch('p4') ? 0.55 : 0.5).pow(coreReactorEffect(1)).mul(getSharkBonus("prestige")).mul(tmp.explore_eff[1])

            x = x.pow(tmp.explore_eff[3])

            if (hasDepthMilestone(0,0)) x = x.pow(1.05)
            if (inExploration(1)) x = x.root(2)

            if (tmp.cr_active) x = x.root(3)
    
            return x.floor()
        },

        get passive() { return hasDepthMilestone(1,3) ? 1 : 0 },
    },
    core: {
        get require() { return E('1e450') },

        get amount() { return player.core.fragments },
        set amount(v) { player.core.fragments = v },

        get gain() {
            let x = player.prestige.total.div('1e450')

            if (x.lt(1)) return E(0)

            x = x.log10().div(10).add(1).mul(getSharkBonus("core")).mul(getCRBoost(1))
    
            return x.floor()
        },

        passive: 0,
    },
}

function setupCurrencies() {
    for (let i = 0; i < EXPLORE.length; i++) {
        var e = EXPLORE[i]
        CURRENCIES[e.resource] = {
            get amount() { return player.explore.res[i] },
            set amount(v) { player.explore.res[i] = v },
        
            get gain() {
                if (player.explore.unl <= i) return E(0)

                let x = player.explore.base[i].mul(tmp.explore_upg_boost[i][0]).mul(tmp.explore_mult[i])

                if (i < 4 && tmp.cr_active) x = x.root(3)
        
                return x
            },
        }
    }

    for (let [i,v] of Object.entries(CURRENCIES)) {
        v.name ??= lang_text(i+"-name")
        v.costName ??= lang_text(i+"-costName") ?? v.name
    }
}

function gainCurrency(id,amt) {
    var curr = CURRENCIES[id]
    curr.amount = curr.amount.add(amt)
    if ('total' in curr) curr.total = curr.total.add(amt)
}