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
        },
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
        },
    },
    humanoid: {
        get require() { return player.fish.gte(CURRENCIES.humanoid.require) }, 
        reset(force) {
            if (!force) {
                gainCurrency('humanoid',tmp.currency_gain.humanoid)
                player.humanoid.times++
                increaseFeature(11)
            }

            this.doReset()
        },
        doReset() {
            var c = player.core

            c.fragments = E(0)
            c.total = E(0)

            c.reactor = c.reactor.map(()=>E(0))

            c.radiation.active = false
            c.radiation.amount = E(0)
            c.radiation.gen = E(hasEvolutionGoal(6) ? 1 : 0)
            c.radiation.boost = E(0)

            if (player.singularity.best_bh.lt(4) && !hasEvolutionGoal(1)) {
                c.max_buildings = 0
                c.assembler = c.assembler.map(()=>-1)
                c.assembler_strength = c.assembler_strength.map(()=>0)
            }

            resetSharkUpgrades('s5')
            if (!hasEvolutionGoal(4)) resetResearch('p8','e3','e4','e5','c3','c4','c5','c7','c8','c9')

            for (let x = 0; x < 5; x++) {
                player.explore.res[x] = E(0)
                player.explore.depth[x] = hasEvolutionGoal(3) ? E(EXPLORE[x].maxDepth) : E(0)
                player.explore.base[x] = E(0)
                player.explore.upg[x] = [E(0), E(0)]
            }

            player.shark_rank = E(0)
            player.humanoid.particle_accel.active = -1

            tmp.pass = 1

            RESETS.core.doReset()
        },
    },
    'black-hole': {
        get require() { return player.humanoid.particle_accel.percent.reduce((x,y)=>Decimal.add(x,y)).gte(6) }, 
        reset(force) {
            if (!force && !tmp.bh_pause) {
                if (player.singularity.best_bh.lt(8)) {
                    tmp.bh_pause = true

                    el('black-hole').style.width = el('black-hole').style.height = "200vmax"

                    setTimeout(() => {
                        el('title-center').style.opacity = 1
                        el('title-center').innerHTML = lang_text('black-hole-texts')[player.singularity.bh.toNumber()] ?? "???"

                        setTimeout(() => {
                            el('title-center').style.opacity = 0
        
                            setTimeout(() => {
                                el('title-center').style.innerHTML = ""
                                el('black-hole').style.width = el('black-hole').style.height = "0px"

                                tmp.bh_pause = false
                                player.singularity.best_bh = player.singularity.best_bh.max(player.singularity.bh = player.singularity.bh.add(1).min(8))
                                player.singularity.first = true

                                updateTemp()
                                this.doReset()
                            }, 5000);
                        }, 10000);
                    }, 5000);
                } else {
                    player.singularity.bh = player.singularity.bh.add(1).min(8)
                    updateTemp()
                    this.doReset()
                }
            }
        },
        doReset() {
            var h = player.humanoid, data = getPlayerData(), bh = player.singularity.best_bh

            if (bh.lt(3)) {
                player.prestige.times = 0
                player.core.times = 0
                h.times = 0
                for (let x in AUTOMATION) player.auto[x][0] = 0;
                h.shark = E(0)
                player.feature = 0
            } else {
                h.shark = E(10)
                if (bh.lt(8)) player.feature = bh.gte(7) ? 13 : 12;
            }

            if (bh.lt(4)) {
                h.goal = []
            } else {
                h.goal = [0,1,2,3,4,5,6,7,8]
            }

            h.mining_tier = E(0)

            h.forge.queue = ''
            h.forge.time = E(0)

            h.particle_accel.active = -1

            for (let x of ORE_KEYS) h.ores[x] = E(0);
            if (!hasSMilestone(8)) {
                h.faith = [E(0), E(0), E(0)],
                h.tree = []
                for (let x of FORGE_KEYS) h.forge.level[x] = 0;
                for (let x of PRE_BH_RESEARCH) player.research[x] = E(0);
            }
            for (let x in PARTICLE_ACCELERATOR) h.particle_accel.percent[x] = E(0);

            resetSharkUpgrades('m1','m2','m3','m4','m5')

            RESETS.humanoid.doReset()

            if (player.singularity.sac_times == 0) tab = 0, tab_name = 'shark', stab = stab.map(x=>0);

            player.singularity.remnants = E(0)
            for (let i = 0; i < REMNANT_UPGS.length; i++) player.singularity.upgs[i] = E(0);

            if (bh.gte(4)) {
                for (let x = 0; x < 5; x++) {
                    player.explore.depth[x] = E(EXPLORE[x].maxDepth)
                }
            }

            ores_grid = []

            tmp.pass = 2
        },
    },
    sacrifice: {
        get require() { return player.fish.gte(CURRENCIES['dark-matter'].require) && player.singularity.bh.gte(8) },
        reset(force) {
            if (!force) {
                gainCurrency('dark-matter',tmp.currency_gain['dark-matter'])
                player.singularity.sac_times++
                increaseFeature(19)
            }

            this.doReset()
        },
        doReset() {
            player.singularity.bh = player.research.dm1

            if (!hasSMilestone(10)) resetResearch('s1','s2','s3');

            RESETS["black-hole"].doReset()
        },
    },
}

function doReset(id, force, ...arg) {
    var r = RESETS[id]
    if (force || !player.radios['confirm-'+id] && r.require) r.reset(force, ...arg)
    else if (r.require) createConfirmationPopup(lang_text('reset-'+id+"-message"), () => {r.reset(false, ...arg)})
}