const RESETS = {
    prestige: {
        get require() { return player.total_fish.gte(1e36) }, 
        reset(force) {
            if (!force) {
                gainCurrency('prestige',tmp.currency_gain.prestige)
                player.prestige.times++
                increaseFeature(1)
            }

            this.doReset()
        },
        doReset() {
            player.fish = E(1)
            player.total_fish = E(0)
            player.shark_level = E(0)

            resetSharkUpgrades('s1','s2','s3','s4')
        }
    },
    core: {
        get require() { return player.prestige.total.gte('e450') }, 
        reset(force) {
            if (!force) {
                gainCurrency('core',tmp.currency_gain.core)
                player.core.times++
                increaseFeature(6)
            }

            player.core.assembler_strength = player.core.assembler_strength.map((_,i)=>tmp.ca_building_strength[i])

            this.doReset()
        },
        doReset() {
            player.prestige.total = E(0)
            player.prestige.shards = E(0)

            resetSharkUpgrades('p1','p2','p3')
            if (!hasResearch("c1")) resetResearch('p3','e1','e2')

            var k = player.research.c2.round().toNumber()

            player.explore.unl = k == 4 && player.feature>=8 ? 5 : k
            for (let x = 0; x < 4; x++) {
                player.explore.res[x] = E(0)
                if (x >= k) player.explore.depth[x] = E(0)
                player.explore.base[x] = E(0)
                player.explore.upg[x] = [E(0), E(0)]
            }
            player.explore.active = -1

            RESETS.prestige.doReset()
        }
    },
}

function doReset(id, force, ...arg) {
    var r = RESETS[id]
    if (force || !player.radios['confirm-'+id] && r.require) r.reset(force, ...arg)
    else if (r.require) createConfirmationPopup(lang_text('reset-'+id+"-message"), () => {r.reset(false, ...arg)})
}