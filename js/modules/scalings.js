const SCALINGS = {
    shark_level: {
        get amount() { return player.shark_level },

        base: [
            [10,2,"P"],
            [100,3,"E2"],
            [1e3,3,"P"],
            [7.5e9,2,"D"],
            ['1e1337',3,"D"],
        ],
    },
    shark_rank: {
        get amount() { return player.shark_rank },

        base: [
            [25,2,"P"],
            [1250,3,"E2"],
            [5000,3,"P"],
            [1e6,2,"ME2"],
        ],
    },
    shark_tier: {
        get amount() { return player.shark_tier },

        base: [
            [25,2,"P"],
            [1000,2,"ME2"],
        ],
    },
    su_s3: {
        get amount() { return player.shark_upg.s3 },

        base: [
            [30,3,"E2"],
        ],
    },
    su_s4: {
        get amount() { return player.shark_upg.s4 },

        base: [
            [10,3,"E2"],
        ],
    },
    su_m1: {
        get amount() { return player.shark_upg.m1 },

        base: [
            [15,2,"L"],
            [50,1.5,"P"],
        ],
    },
    su_m3: {
        get amount() { return player.shark_upg.m3 },

        base: [
            [10,2,"L"],
            [25,1.5,"P"],
        ],
    },
    su_m5: {
        get amount() { return player.shark_upg.m5 },

        base: [
            [10,2,"L"],
            [25,1.5,"P"],
        ],
    },
    cr_boost: {
        get amount() { return player.core.radiation.boost },

        base: [
            [10,2,"P"],
            [30,2,"P"],
            [1500,2,"ME2"],
        ],
    },
    mining_tier: {
        get amount() { return player.humanoid.mining_tier },

        base: [
            [10,1.5,"L"],
            [15,1.5,"P"],
            [100,2,"ME2"],
            [3e3,2,"P"],
            [1e5,2,"ME2"],
        ],
    },
    mining_ascend: {
        get amount() { return player.humanoid.mining_ascend },

        base: [
            [15,2,"L"],
            [25,2,"P"],
        ],
    },
    remnant_upg: {
        get amount() {
            let x = E(0)
            for (let i = 0; i < REMNANT_UPGS.length; i++) x = x.max(player.singularity.upgs[i])
            return x
        },

        base: [
            [100,1.1,"ME2"],
        ],
    },
    bh_tier: {
        get amount() { return player.singularity.bh_tier },

        base: [
            [10,2,"P"],
            [50,3,"P"],
        ],
    },
    decay_series: {
        get amount() {
            let x = E(0)
            for (let i = 0; i < DECAY_CHAIN.length; i++) x = x.max(player.omni.decay_series[i][0]);
            return x
        },

        base: [
            [25,2,"P"],
        ],
    },
    isotopes: {
        get amount() { return player.omni.total_isotopes },

        base: [
            [10,2,"P"],
            [20,3,"P"],
        ],
    },
    rune_upg1: {
        get amount() {
            let x = E(0)
            for (let i = 0; i < 3; i++) x = x.max(player.omni.rune_upgrades[i]);
            return x
        },

        base: [
            [25,2,"P"],
        ],
    },
    rune_upg2: {
        get amount() { return player.omni.rune_upgrades[3] },

        base: [
            [10,2,"L"],
            [15,2,"L"],
        ],
    },
}

const PRE_HADRON_SCALINGS = ['shark_level','shark_rank','su_s3','su_s4','su_m1','su_m3','su_m5','cr_boost','mining_tier','mining_ascend','remnant_upg','bh_tier']

function getScalingStarts(id) {
    let b = SCALINGS[id].base.map(x=>x[0])

    switch (id) {
        case "shark_level": {
            b[0] = Decimal.add(b[0],sharkUpgEffect('p3',0)).add(hasDepthMilestone(2,2)?player.explore.depth[2].div(500).overflow(1e6,0.5).floor():0)
            b[1] = Decimal.add(b[1],getCRBoost(3,0)).add(simpleResearchEffect('c10',0))
            b[2] = Decimal.mul(b[2],hasResearch('m2')?2:1).mul(forgeUpgradeEffect('shark'))

            let r = remnantUpgEffect(6)
            for (let i = 0; i < 3; i++) b[i] = Decimal.mul(b[i],r);

            b[3] = Decimal.mul(b[3],remnantUpgEffect(10))

            break
        }
        case "shark_rank": {
            if (hasEvolutionGoal(8)) b[0] = 30;
            if (isSSObserved('venus')) b[2] *= 2;
            break
        }
        case "shark_tier": {
            if (hasResearch('ge8')) b[0] += 5;
            break
        }
        case "cr_boost": {
            if (tmp.ss_difficulty) {
                let q = Decimal.add(1,spaceBaseUpgEffect('t5',0))
                b[0] = q, b[1] = q, b[2] = q
                break
            }
            b[0] = Decimal.add(b[0],researchEffect('m3',0))
            b[1] = Decimal.add(b[1],researchEffect('m3',0))
            if (isSSObserved('mercury')) for (let i = 0; i < 3; i++) b[i] = Decimal.mul(b[i],10);
            break
        }
        case "mining_tier": {
            b[2] = Decimal.add(b[2],remnantUpgEffect(11,0))
            break
        }
        case "remnant_upg": {
            if (player.hadron.starter_upgs.includes(5)) b[0] = Decimal.mul(b[0],10);
            if (hasResearch('m7')) b[0] = Decimal.add(b[0],100);
            break
        }
        case "bh_tier": {
            b[0] = Decimal.add(b[0],simpleResearchEffect('h3',0))
        }
        case "rune_upg1": {
            if (hasResearch('rc2')) b[0] = Decimal.mul(b[0],2);
        }
    }

    return b
}

function getScalingPowers(id) {
    let b = SCALINGS[id].base.map(x=>x[1])

    switch (id) {
        case "su_s3": {
            if (hasDepthMilestone(2,0)) b[0] = 2.75
            break
        }
        case "su_s4": {
            if (hasDepthMilestone(2,0)) b[0] = 2.75
            break
        }
    }

    if (PRE_HADRON_SCALINGS.includes(id)) for (let i = 0; i < b.length; i++) b[i] = Decimal.pow(b[i],getNucleobaseEffect('adenine',1));

    return b
}

function getScalingModes(id) {
    let b = SCALINGS[id].base.map(x=>x[2])

    return b
}

function getScalingExclusions(id) {
    let e = SCALINGS[id].base.map(x=>false)

    switch (id) {
        case "shark_level": {
            if (hasResearch('h14')) for (let x = 0; x < 5; x++) e[x] = true;
            break
        }
        case "shark_rank": {
            if (hasResearch('h14')) for (let x = 0; x < 4; x++) e[x] = true;
            else if (hasResearch('h11')) for (let x = 0; x < 3; x++) e[x] = true;
            break
        }
        case "remnant_upg": {
            e[0] = hasResearch('h7')
            break
        }
        case "cr_boost": {
            if (hasResearch('h10')) for (let x = 0; x < 3; x++) e[x] = true;
            break
        }
        case "bh_tier": {
            if (hasResearch('ge12')) for (let x = 0; x < 2; x++) e[x] = true;
            break
        }
    }

    return e
}

Decimal.prototype.scale = function (s, p, mode, rev=false) {
    var x = this.clone()

    if (Decimal.lte(x,s)) return x

    switch (mode) {
        case 'L':
            // (x-s)*p+s
            return rev ? x.sub(s).div(p).add(s) : x.sub(s).mul(p).add(s)
        case 'P':
            // (x/s)^p*s
            return rev ? x.div(s).root(p).mul(s) : x.div(s).pow(p).mul(s)
        case 'E1':
            // p^(x-s)*s
            return rev ? x.div(s).max(1).log(p).add(s) : Decimal.pow(p,x.sub(s)).mul(s)
        case 'E2':
            // p^(x/s-1)*s, p >= 2.71828
            return rev ? x.div(s).max(1).log(p).add(1).mul(s).min(x) : Decimal.pow(p,x.div(s).sub(1)).mul(s).max(x)
        case 'ME1': {
            // p^(x-s)*x
            let ln_p = Decimal.ln(p)
            return rev ? Decimal.pow(p,s).mul(x).mul(ln_p).lambertw().div(ln_p) : Decimal.pow(p,x.sub(s)).mul(x)
        }
        case 'ME2': {
            // p^(x/s-1)*x
            let ln_p = Decimal.ln(p)
            return rev ? x.mul(p).mul(ln_p).div(s).lambertw().mul(s).div(ln_p) : Decimal.pow(p,x.div(s).sub(1)).mul(x)
        }
        case 'D': {
            // 10^((lg(x)/s)^p*s)
            let s10 = Decimal.log10(s)
            return rev ? Decimal.pow(10,x.log10().div(s10).root(p).mul(s10)) : Decimal.pow(10,x.log10().div(s10).pow(p).mul(s10))
        }
        default: {
            return x
        }
    }
}

Decimal.prototype.scaleAll = function (id, rev=false) {
    var x = this.clone(), t = tmp.scalings[id], l = t.length

    for (let i = 0; i < l; i++){
        let j = rev ? i : l - i - 1, tt = t[j]

        if (!tt[3]) x = x.scale(tt[0],tt[1],tt[2],rev);
    }

    return x
}

function updateScalingsTemp() {
    for (let x in SCALINGS) {
        let t = tmp.scalings[x]

        let s = getScalingStarts(x), m = getScalingModes(x), p = getScalingPowers(x).map((q,i) => m[i] == "E2" ? Decimal.max(q,Math.E) : q), e = getScalingExclusions(x)

        for (let i = 0; i < SCALINGS[x].base.length; i++) t[i] = [s[i],p[i],m[i],e[i]];
    }
}

function setupScalingsTable() {
    let h = "", t = lang_text("scalings")

    for (let i in SCALINGS) {
        let s = SCALINGS[i]

        h += `<tr id="scaling-tr-${i}"><th>${t[i]}</th>${s.base.map((x,j)=>`<td id="scaling-${i}-${j}">???</td>`).join("")}</tr>`
    }

    el("scalings-table").innerHTML = h
}

function updateScalingsTable() {
    let text = [lang_text("scaling-start"), lang_text("scaling-mode")]

    for (let i in SCALINGS) {
        let scaling = SCALINGS[i], amount = scaling.amount, t = tmp.scalings[i]

        let u = t.findLastIndex(x => !x[3] && Decimal.gte(amount, x[0]))

        if ((el('scaling-tr-' + i).style.display = u > -1 ? "table-row" : "none") == "table-row") {
            for (let j = 0; j < scaling.base.length; j++) {
                let e = el("scaling-" + i + "-" + j), u2 = !t[j][3] && j <= u

                e.style.display = u2 ? "table-cell" : "none"
                if (u2) {
                    let tt = t[j]
                    let h = `${text[0]}: <b>${format(tt[0],0)}</b><br>`, p = tt[1]

                    switch (tt[2]) {
                        case "L": {
                            h += text[1].L(formatMult(p,4))
                            break
                        }
                        case "P": {
                            h += `<b>${formatPow(p,4)}</b>`
                            break
                        }
                        case "E2": {
                            h += `S×<b>${format(p,4)}</b><sup>N/S-1</sup>`
                            break
                        }
                        case "ME2": {
                            h += `N×<b>${format(p,4)}</b><sup>N/S-1</sup>`
                            break
                        }
                        case "D": {
                            h += text[1].D(formatPow(p,4))
                            break
                        }
                    }

                    e.innerHTML = h
                }
            }
        }
    }

    el('scalings-table').className = el_classes({omni: player.omni.active})
}