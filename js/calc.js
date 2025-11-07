function calc(dt) {
    if (tmp.pass > 0) {
        tmp.pass--
        ores_grid = []
    }
    else {
        let OA = offline.active

        for (let [i,v] of Object.entries(CURRENCIES)) {
            var passive = v.passive ?? 1
            gainCurrency(i, tmp.currency_gain[i].mul(passive).mul(dt))
        }
    
        let p = PROGRESS[player.feature]
    
        if (p && p.auto && p.amount.gte(p.require)) player.feature++;

        if (REBIRTH.hasUpgrade(5) && RESETS.prestige.require && player.feature == 1-1) {
            increaseFeature(1);
            player.prestige.times++;
        }

        if (REBIRTH.hasUpgrade(5) && RESETS.core.require && player.feature == 6-1) {
            increaseFeature(6);
            player.core.times++;
        }

        if (REBIRTH.hasUpgrade(7) && RESETS.core.require && player.feature == 19-1) {
            increaseFeature(19);
            player.singularity.sac_times++;
        }

        if (REBIRTH.hasUpgrade(7) && RESETS.hadron.require && player.feature == 21-1) {
            increaseFeature(21);
            player.hadron.times++;
        }

        if (REBIRTH.hasUpgrade(8) && RESETS.transcend.require && player.feature == 28) {
            increaseFeature(29);
            player.omni.transcendences++;
            player.omni.tier = player.omni.tier.add(1);
        }

        if (REBIRTH.hasUpgrade(8) && RESETS.reaction.require && player.feature == 29) {
            increaseFeature(30);
            player.omni.reactions++;
            player.omni.tier = player.omni.tier.add(1);
        }

        if (REBIRTH.hasUpgrade(8) && RESETS.runeification.require && player.feature == 30) {
            increaseFeature(31);
            player.omni.runeifications++;
            player.omni.tier = player.omni.tier.add(1);
        }
    
        if (!player.omni.god) for (let [i,v] of Object.entries(AUTOMATION)) {
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
    
        if (player.omni.god) {

        } else if (player.omni.active) {
            UNDEAD.tick(dt)
            tickDecaySeries(dt)

            OMNI.condensers.forEach((x,i) => { if (x[4]?.()) player.omni.condensed[i] = player.omni.condensed[i].max(CURRENCIES[x[1]].amount) });
            for (let i = 0; i < OMNI.condensers.length; i++) player.omni.best_condensed[i] = player.omni.best_condensed[i].max(player.omni.condensed[i]);

            if (player.omni.tier.gte(28)) player.omni.total_isotopes = player.omni.total_isotopes.max(ISOTOPES.amount);
            if (REBIRTH.hasUpgrade(3) || hasResearch('rc5')) for (let x = 0; x < 4; x++) purchaseRuneUpgrade(x);

            if (REBIRTH.hasUpgrade(4)) {
                const t = OMNI.goals[player.omni.tier];

                if (t && (t === 'other' || CURRENCIES[t[1]].amount.gte(t[0]))) player.omni.tier = player.omni.tier.add(1);
            }
        } else {
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
                if (!player.hadron.starter_upgs.includes(4)) {
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
            }
    
            if (player.feature >= 15) {
                var forge = player.humanoid.forge
                if (forge.queue != "") {
                    forge.time = player.hadron.starter_upgs.includes(3) ? EINF : forge.time.add(tmp.forge_speed.mul(dt))
                    if (forge.time.gte(FORGE[forge.queue].time[forge.level[forge.queue]])) {
                        forge.time = new Decimal(0)
                        forge.level[forge.queue]++
    
                        addNotify(lang_text("notify-desc").forge_completed(lang_text('forge')[forge.queue][0]))
    
                        forge.queue = ""
                    }
                }
            }
    
            if (player.feature >= 16) {
                let p = player.humanoid.particle_accel, a = p.active, b4 = player.singularity.best_bh.gte(4), speed = Decimal.mul(b4 ? dt / 10 : dt / 100, tmp.global_mult)
                if (player.hadron.starter_upgs.includes(3)) {
                    for (let i = 0; i < PARTICLE_ACCELERATOR.length; i++) {
                        let PA = PARTICLE_ACCELERATOR[i], pp = p.percent[i]
    
                        if (pp.gte(1)) continue;
    
                        let pg = PA.percent(CURRENCIES[PA.curr].amount).max(0)
                        if (isNaN(pg.mag)) pg = E(0);
    
                        p.percent[i] = p.percent[i].max(pg).max(0).min(1)
                    }
                } else if (hasSMilestone(9)) {
                    for (let i = 0; i < PARTICLE_ACCELERATOR.length; i++) {
                        let PA = PARTICLE_ACCELERATOR[i], pp = p.percent[i]
    
                        if (pp.gte(1)) continue;
    
                        p.percent[i] = pp.max(pp.add(speed).min(PA.percent(CURRENCIES[PA.curr].amount))).max(0).min(1)
                    }
                } else {
                    if (a > -1) {
                        if (p.percent[a].lt(1)) {
                            let PA = PARTICLE_ACCELERATOR[a]
            
                            let pg = PA.percent(CURRENCIES[PA.curr].amount).max(0)
                            let s = p.percent[a].add(speed).max(0)
            
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
    
            if (player.feature >= 22) {
                for (let id in NUCLEOBASES.ctn) {
                    if (!NUCLEOBASES.ctn[id].unl()) continue;
    
                    let data = player.hadron.nucleobases[id]
    
                    data.experience = NUCLEOBASES.calc(data.experience,tmp.nucleobases[id].exp_gain.mul(dt),tmp.nucleobases[id].tier)
    
                    data.amount = data.amount.max(NUCLEOBASES.get_amount(id,data.experience))
                }
            }
    
            if (player.feature >= 24) {
                let ge = player.hadron.gal_explore
                let u = ge.unl
                if (GALACTIC_EXPLORE[u] && player.shark_tier.gte(GALACTIC_EXPLORE[u].tier_req)) ge.unl++;
        
                if (ge.active > -1) ge.best_fish = ge.best_fish.max(player.fish);
        
                var auto_e = 0
                if (hasResearch('h16')) auto_e += 6;
                // var research_e6 = hasResearch('e6')
        
                for (let i in GALACTIC_EXPLORE) {
                    i = parseInt(i)
                    if (u > i && auto_e > i) player.hadron.gal_explore.score[i] = player.hadron.gal_explore.score[i].max(getGalacticExplorationScore(player.fish,i));
                }
            }
    
            if (player.feature >= 27 && hasDNAMilestone(8)) player.hadron.dna = player.hadron.dna.max(DNA.length);
    
            if (REBIRTH.hasUpgrade(1) || hasResearch('h5')) {
                player.singularity.bh_tier = player.singularity.bh_tier.max(CONSTELLATION.bulk)
            }
    
            var total_rp = player.solar_system.rocket_parts.reduce((a,b) => a.add(b),new Decimal(0))
            if (player.hadron.starter_upgs.includes(1)) for (let id of SS_KEYS) {
                let ss = SOLAR_SYSTEM[id]
                if (!player.solar_system.completion[id] && total_rp.gte(ss.rp_req)) player.solar_system.completion[id] = true;
            }
    
            if (tmp.ss_difficulty) {
                for (let g_id in SPACEBASE_UPGS_GROUPS) if (REBIRTH.hasUpgrade(1) || SPACEBASE_UPGS_GROUPS_AUTO[g_id]?.()) for (let id of SPACEBASE_UPGS_GROUPS[g_id]) if (id !== "") buySpaceBaseUpg(id,true);
            }
        
            player.shark_rank = player.shark_rank.max(SHARK.rank.bulk)
            if (player.hadron.starter_upgs.includes(0)) player.shark_tier = player.shark_tier.max(SHARK.tier.bulk);
        }
    }

    player.latest_time = Date.now()
    player.timePlayed += dt;
    player.totalTimePlayed += dt;
}