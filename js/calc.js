function calc(dt) {
    if (tmp.pass > 0) {
        tmp.pass--
        ores_grid = []
    }
    else {
        let OA = offline.active

        for (let [i,v] of Object.entries(CURRENCIES)) {
            var passive = v.passive ?? 1
            gainCurrency(i, tmp.currency_gain[i].mul(dt*passive))
        }
    
        let p = PROGRESS[player.feature]
    
        if (p && p.auto && p.amount.gte(p.require)) player.feature++
    
        for (let [i,v] of Object.entries(AUTOMATION)) {
            let a = player.auto[i], [I,D] = v.interval
            if (a[1] && v.unl()) {
                let s = Math.max(AUTO_MIN_INTERVAL,I*D**a[0])
                let t = auto_time[i] + dt
                if (t >= s) {
                    t %= s
                    v.trigger()
                }
                auto_time[i] = t
            }
            else auto_time[i] = 0
        }
    
        if (player.feature >= 4) {
            let u = player.explore.unl
            if (EXPLORE[u] && player.shark_level.gte(EXPLORE[u].level_req)) player.explore.unl++
    
            if (player.explore.active > -1) player.explore.best_fish = player.explore.best_fish.max(player.fish)
    
            var auto_e = player.research.e3.toNumber() + (hasResearch('e5') ? 1 : 0)
            var research_e6 = hasResearch('e6')
    
            for (let i in EXPLORE) {
                i = parseInt(i)
                if (u > i) {
                    var c = calcNextDepth(player.explore.depth[i], tmp.depth_gain[i].mul(dt), i)
                    if (i >= 4 || !hasEvolutionTree(i+8)) if (i < 4 || !research_e6) c = c.min(EXPLORE[i].maxDepth)
                    player.explore.depth[i] = c
                }
                if (auto_e > i) player.explore.base[i] = player.explore.base[i].max(getBaseExploration(i,player.fish))
            }
        }
    
        if (player.feature >= 7) {
            var rad = player.core.radiation
            var goal = hasEvolutionGoal(6)
    
            if (goal || rad.amount.lt(tmp.cr_limit)) {
                let g = rad.amount.add(tmp.cr_gain.mul(dt))
                if (!goal) g = g.min(tmp.cr_limit)
                rad.amount = g
            }
        }
    
        if (player.feature >= 12) {
            for (let i = 0; i < EVOLUTION_GOAL.length; i++) if (!hasEvolutionGoal(i)) {
                var g = EVOLUTION_GOAL[i]
                if (!g.locked() && g.goal()) player.humanoid.goal.push(i)
            }

            if (!hasEvolutionGoal(3) && hasEvolutionGoal(4)) player.humanoid.goal.push(3)
        }

        if (player.feature >= 13) {
            if (OA) {
                var ms = tmp.mining_speed, md = tmp.mining_damage, mf = tmp.mining_fortune, hb = tmp.mining_tier_bonus[0]

                for (let i = tmp.ore_generator; i < tmp.ore_spawn_base+1; i++) {
                    var ok = ORE_KEYS[i], o = ORES[ok]
                    var health = Decimal.mul(10, o.dense??1).mul(hb)
                    var value = Decimal.pow(2,mf.div(100).mul(o.luck_penalty??1)).mul(md.div(health).min(1)).mul(ms).mul(o.mult??1).div(2**(i-1))

                    gainCurrency(ok,value.mul(dt))
                }
            } else {
                var o = ores_grid[0], s = o.super

                var m = mine_time.add((s ? tmp.super_mining_speed : tmp.mining_speed).mul(dt))

                if (m.gte(1)) {
                    var dmg = m.floor().mul(s ? tmp.super_mining_damage : tmp.mining_damage)

                    o.health = o.health.sub(dmg)
                    if (o.health.round().lte(0)) {
                        gainCurrency(o.name,o.value)
                        ores_grid.splice(0,1)
                    }

                    m = m.mod(1)
                }

                mine_time = m
            }
        }

        if (player.feature >= 15) {
            var forge = player.humanoid.forge
            if (forge.queue != "") {
                forge.time = forge.time.add(tmp.forge_speed.mul(dt))
                if (forge.time.gte(FORGE[forge.queue].time[forge.level[forge.queue]])) {
                    forge.time = new Decimal(0)
                    forge.level[forge.queue]++

                    addNotify(lang_text("notify-desc").forge_completed(lang_text('forge')[forge.queue][0]))

                    forge.queue = ""
                }
            }
        }

        if (player.feature >= 16) {
            let p = player.humanoid.particle_accel, a = p.active, b4 = player.singularity.best_bh.gte(4)
            if (hasSMilestone(9)) {
                for (let i = 0; i < PARTICLE_ACCELERATOR.length; i++) {
                    let PA = PARTICLE_ACCELERATOR[i], pp = p.percent[i]

                    if (pp.gte(1)) continue;

                    p.percent[i] = pp.max(pp.add(b4?dt/10:dt/100).min(PA.percent(CURRENCIES[PA.curr].amount))).max(0).min(1)
                }
            } else {
                if (a > -1) {
                    if (p.percent[a].lt(1)) {
                        let PA = PARTICLE_ACCELERATOR[a]
        
                        let pg = PA.percent(CURRENCIES[PA.curr].amount).max(0)
                        let s = p.percent[a].add(b4?dt/10:dt/100).max(0)
        
                        if (s.lt(pg)) {
                            p.percent[a] = s.max(p.percent[a]).min(1)
                        } else {
                            p.percent[a] = pg.max(p.percent[a]).min(1)
                            p.active = -1
                        }
                    } else p.active = -1;
                }
            }
        }

        if (tmp.ss_difficulty) {
            for (let g_id in SPACEBASE_UPGS_GROUPS) if (SPACEBASE_UPGS_GROUPS_AUTO[g_id]?.()) for (let id of SPACEBASE_UPGS_GROUPS[g_id]) if (id !== "") buySpaceBaseUpg(id,true);
        }
    
        player.shark_rank = player.shark_rank.max(SHARK.rank.bulk)
    }

    player.latest_time = Date.now()
}