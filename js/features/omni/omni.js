function activeOmni() {
    if (player.hadron.dna.gte(1e100) && !tmp.omni.pause) {
        if (player.rebirth.first) {
            increaseFeature(28)
            omniReset()
            REBIRTH.restore()
            return
        }

        tmp.omni.pause = true

        el('omni-cutscene').style.pointerEvents = 'all'
        el('omni-cutscene').style.opacity = 1
        el('app').style.display = "none"

        setTimeout(() => {
            el('omni-cutscene-text').style.opacity = 1
            let t = lang_text("omni-cutscene-texts")
            el('omni-cutscene-text').innerHTML = t[0]
            setTimeout(() => {
                el('omni-cutscene-text').style.opacity = 0
                setTimeout(() => {
                    el('omni-cutscene-text').style.opacity = 1
                    el('omni-cutscene-text').innerHTML = t[1]
                    setTimeout(() => {
                        el('omni-cutscene-text').style.opacity = 0
                        setTimeout(() => {

                            el('omni-cutscene').style.opacity = 0
                            el('app').style.display = "block"

                            tmp.omni.pause = false
                            increaseFeature(28)
                            omniReset()

                            setTimeout(() => {
                                el('omni-cutscene').style.pointerEvents = 'none'
                            }, 5000);
                        }, 5000);
                    }, 10000);
                }, 5000);
            }, 10000);
        }, 5000);
    }
}

function omniReset() {
    player.omni.active = true
    tab = 0
    tab_name = "shark-upgs"

    const keep_presets = player.humanoid.tree_preset

    const force_key = [
        'fish', 'total_fish', 'shark_level', 'shark_rank', 'shark_tier', 'shark_upg',

        'prestige', 'research', 'explore', 'core', 'humanoid', 'singularity',
        'solar_system', 'hadron', 'auto'
    ]
    const D = getPlayerData()

    for (const K of force_key) player[K] = D[K];
    player.humanoid.tree_preset = keep_presets;

    reloadTemp()
}

const OMNI = {
    equivalents: [
        /* 00 */ null,
        /*    */ `10^^10^1000`,
        /*    */ `10^^10^^10`,
        /*    */ `10^^^10`,
        /*    */ `10{4}10`,
        /*    */ `10{10}10`,
        /*    */ `10{{2}}10`,
        /*    */ `10{{3}}10`,
        /*    */ `{10, 10, 1, 1, 2}`,
        /*    */ `{10, 10 [2] 2}`,
        /* 10 */ `{10, 10 [2] 3}`,
        /*    */ `{10, 10 [3] 2}`,
        /*    */ `{10, 10 [1, 2] 2}`,
        /*    */ `{10, 10 [1 [2] 2] 2}`,
        /*    */ `{10, 10 [1 \\ 2] 2}`,
        /*    */ `{10, 10 [1 \\ 3] 2}`,
        /*    */ `{10, 10 [1 \\ 1 \\ 2] 2}`,
        /*    */ `{10, 10 [1 [2 ¬ 2] 2] 2}`,
        /*    */ `{10, 10 [1 [1 ¬ 3] 2] 2}`,
        /*    */ `{10, 10 [1 [1 ¬ 1, 2] 2] 2}`,
        /* 20 */ `{10, 10 [1 [1 ¬ 1 [2] 2] 2] 2}`,
        /*    */ `{10, 10 [1 [1 ¬ 1 \\ 2] 2] 2}`,
        /*    */ `{10, 10 [1 [1 ¬ 1 ¬ 2] 2] 2}`,
        /*    */ `{10, 10 [1 [1 [2 \\<sub>3</sub> 2] 2] 2] 2}`,
        /*    */ `{10, 10 [1 [1 [1 [2 \\<sub>4</sub> 2] 2] 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1, 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1, 3</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1, 1, 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [3] 2</sub> 2] 2] 2}`,
        /* 30 */ `{10, 10 [1 [2 \\<sub>1 [1, 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 \\ 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 \\ 1 \\ 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 [2 \\<sub>2</sub> 2] 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 [1 [2 \\<sub>3</sub> 2] 2] 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 [2 \\<sub>1, 2</sub> 2] 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 [2 \\<sub>1 [2] 2</sub> 2] 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 [2 \\<sub>1 [1, 2] 2</sub> 2] 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 [2 \\<sub>1 [1 \\ 2] 2</sub> 2] 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [1 [2 \\<sub>1 [1 [2 \\<sub>2</sub> 2] 2] 2</sub> 2] 2] 2</sub> 2] 2] 2}`,
        /* 40 */ `{10, 10 [1 [2 \\<sub>1 \\ 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\ 3</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\ 1 \\ 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [2 \\<sub>2</sub> 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [2 \\<sub>1, 2</sub> 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 [2 \\<sub>1 [1 \\ 2] 2</sub> 2] 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\<sub>3</sub> 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\<sub>1, 2</sub> 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\<sub>1 [2] 2</sub> 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\<sub>1 \\ 2</sub> 2</sub> 2] 2] 2}`,
        /* 50 */ `{10, 10 [1 [2 \\<sub>1 \\<sub>1 \\<sub>2</sub> 2</sub> 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\<sub>1 \\<sub>1 \\ 2</sub> 2</sub> 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\<sub>1 \\<sub>1 \\<sub>2</sub> 2</sub> 2</sub> 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\<sub>1 \\<sub>1 \\<sub>1 \\ 2</sub> 2</sub> 2</sub> 2</sub> 2] 2] 2}`,
        /*    */ `{10, 10 [1 [2 \\<sub>1 \\<sub>1 \\<sub>1 \\<sub>1 \\<sub>...</sub> 2</sub> 2</sub> 2</sub> 2</sub> 2] 2] 2}`,
        /*    */ `Σ(1919)`,
        /*    */ `F<sub>4</sub><sup>63</sup>(3)`,
        /*    */ `Ξ(10^6)`,
        /*    */ `Σ<sub>∞</sub>(10^9)`,
        /*    */ `Rayo(10^100)`,
        /* 60 */ `F<sub>7</sub><sup>63</sup>(10^100)`,
        /*    */ `Oblivion`,
        /*    */ `Utter Oblivion`,
    ],

    goals: [
        null,
        [1, 'anti-fish'],
        [10, 'anti-fish'],
        [1000, 'anti-fish'],
        [1e6, 'anti-fish'],
        [1e15, 'anti-fish'],
        [1e27, 'anti-fish'],
        'other',
        [1e4, 'transcend'],
        [1e6, 'transcend'],
        [1e12, 'transcend'],
        [1e20, 'transcend'],
        [1e27, 'transcend'],
        [1e49, 'transcend'],
        [1e64, 'transcend'],
        [1e100, 'transcend'],
        [1e125, 'transcend'],
        [1e200, 'transcend'],
        [1e300, 'transcend'],
        ['1e720', 'transcend'],
        'other',
        [1e3, 'nucleus'],
        [1e6, 'nucleus'],
        [1e15, 'nucleus'],
        [1e27, 'nucleus'],
        [1e48, 'nucleus'],
        [1e64, 'nucleus'],
        [1e100, 'nucleus'],
        ['e2e15', 'anti-fish'],
        ['e500', 'nucleus'],
        ['e2e21', 'anti-fish'],
        ['e7.2e24', 'anti-fish'],
        ['e1690', 'nucleus'],
        ['e2100', 'nucleus'],
        ['e3.333e30', 'anti-fish'],
        ['e2800', 'nucleus'],
        ['e2e33', 'anti-fish'],
        ['e3e37', 'anti-fish'],
        ['e1.5e46', 'anti-fish'],
        ['e45000', 'nucleus'],
        ['ee100', 'anti-fish'],
        ['ee245', 'anti-fish'],
        ['ee500', 'anti-fish'],
        ['ee950', 'anti-fish'],
        ['ee2400', 'anti-fish'],
        ['ee7500', 'anti-fish'],
        ['ee172000', 'anti-fish'],
        ['ee68e6', 'anti-fish'],
        ['ee129e6', 'anti-fish'],
        ['ee3.2e9', 'anti-fish'],
        ['ee96e9', 'anti-fish'],
        ['ee158e9', 'anti-fish'],
        ['ee43.5e15', 'anti-fish'],
        ['ee69e18', 'anti-fish'],
        ['ee5.4e24', 'anti-fish'],
        ['ee5.2e36', 'anti-fish'],
        ['ee7.795e78', 'anti-fish'],
        ['ee9.496e92', 'anti-fish'],
        ['ee1.4369e112', 'anti-fish'],
        ['ee8e1614', 'anti-fish'],
        ['ee3e4627', 'anti-fish'],
        ['eee231478', 'anti-fish'],
        ['eee192e12', 'anti-fish'],
    ],

    rewards: {
        2: [0, x => {
            let b = E(2)
            if (player.omni.tier.gte(5)) b = b.add(sharkUpgEffect('os2',0));
            return b.pow(x.sub(2)).mul(x.sub(1))
        }, x => "+"+format(x,0)],
        5: null,
        7: null,
        9: null,
        10: null,
        11: [0, x => x.sub(1).max(0).div(10), x => "+"+format(x,1)],
        12: null,
        15: [0, x => player.omni.tier.gte(41) ? E(1) : x.sub(10).max(0).mul(.01), x => formatPercent(x,0)],
        16: null,
        19: null,
        20: [0, x => x.sub(19).max(0).mul(.001), x => formatPercent(x,1)],
        22: null,
        24: null,
        28: null,
        30: null,
        32: [0, x => x.sub(31).max(0).mul(.001), x => formatPercent(x,1)],
        36: [0.1, x => x.sub(34).max(0).mul(.1).min(1), x => formatPow(x,1)],
        40: null,
        41: [1, x => x.sub(40).max(0).pow_base(player.omni.tier.gte(53) ? x.sub(39).mul(2.5) : 2).mul(x.sub(39)), x => format(x,0)],
        43: null,
        44: [0.5, x => x.sub(39).max(0).mul(.125).min(1), x => "+"+formatPercent(x,2)],
        48: null,
        50: [1, x => x.sub(49).max(0).pow_base(.95), x => formatReduction(x)],
        53: null,
        56: [0, x => x.sub(55).max(0).mul(.01), x => formatPercent(x,0)],
        60: null,
        63: null,
    },

    increase(tier) {
        const G = this.goals[player.omni.tier]

        if (tier !== undefined ? player.omni.tier.eq(tier) : G && CURRENCIES[G[1]].amount.gte(G[0])) {
            player.omni.tier = player.omni.tier.add(1)

            this.clear()

            updateTemp()

            return true
        }
    },

    clear() {
        const O = player.omni

        player.fish = E(0)
        player.total_fish = E(0)

        let keep = [];

        if (O.tier.gte(28)) keep.push('re1');

        for (let id of RESEARCH_KEYS) if (RESEARCH[id].tier < 5 && !keep.includes(id)) player.research[id] = E(0);
        for (let id of SU_KEYS) player.shark_upg[id] = E(0);

        O.transcend = E(0)

        O.undead = E(0)
        O.undead_tick = E(0)
        for (let i = 0; i < UNDEAD.upgrades.length; i++) O.undead_upgs[i] = E(0);

        O.nucleus = E(0)
        for (let i = 0; i < DECAY_CHAIN.length; i++) O.decay_series[i] = [E(0),E(0)];
        O.particles = [E(0),E(0),E(0),E(0),E(0),E(0)];

        O.rune_fragments = E(0);
        this.condenserReset()

        reloadTemp()
    },

    condensers: [
        [() => player.omni.tier.gte(10), 'transcend', x => {
            let e = hasResearch('t4') ? .625 : .5
            for (let i = 0; i < 5; i++) e += ISOTOPES.boost(6,i);
            return expPow(x.add(1), e).overflow('ee100',0.5,2)
        }, x => formatMult(x), () => player.omni.tier.gte(24)],
        [() => player.omni.tier.gte(16), 'undead', x => x.add(1).log10().pow(.5).pow_base(2).mul(x.add(10).log10()), x => formatMult(x), () => player.omni.tier.gte(30)],
        [() => player.omni.tier.gte(24), 'nucleus', x => expPow(x.add(1), .4).pow(decaySeriesEffect(9,0)), x => formatMult(x), () => player.omni.tier.gte(40)],
        [() => player.omni.tier.gte(43), 'rune-fragments', x => expPow(x.add(1), 1/3), x => formatMult(x), () => player.omni.tier.gte(56)],
    ],

    condense(i) {
        const C = this.condensers[i]

        if (C[0]()) {
            const CURR = CURRENCIES[C[1]]
            var round = CURR.amount.mul([.1,.25,.5,1][player.radios['condenser-ratio']]).round().min(CURR.amount.floor())

            player.omni.condensed[i] = player.omni.condensed[i].add(round);
            CURR.amount = CURR.amount.sub(round).max(0);
        }
    },

    condenserReset() {
        const O = player.omni

        if (O.tier.gt(40)) for (let i = 0; i < 3; i++) O.condensed[i] = E(0);

        if (hasResearch('d3') && O.best_condensed[0].gte(10)) O.condensed[0] = O.best_condensed[0].log10().log10().pow(.75).pow10().pow10();
        if (hasResearch('d4')) O.condensed[1] = O.best_condensed[1];

        if (O.tier.lt(20)) {
            O.total_isotopes = E(0);
            for (let i = 0; i < ISOTOPES.ctn.length; i++) O.isotopes[i] = E(0);
        }
    },

    godRequire: E('3 PT 3.1e15'),
    
    get godRequire2() {
        return player.omni.overmodification.scale(100,1.09,'P').pow_base(9).mul(10);
    },

    enterGod() {
        if (player.end) return;

        if (player.omni.god && player.fish.gte(this.godRequire2)) {
            player.omni.overmodification = player.omni.overmodification.add(1);
            if (player.omni.overmodification.gte(178)) {
                player.end = true;
                player.fish = EINF;

                el('god-fish-amount').innerHTML = '∞';
                el('antimatter-equivalent').innerHTML = 'Ω';
                el('god-fish-gain').innerHTML = '';
                el('tabs').style.display = el('main-line').style.display = el('god-tab').style.display = el('bottom-div').style.display = 'none';

                el('app').style.opacity = 0;
                el('app').animate({
                    opacity: [1,0]
                },{
                    duration: 10000,
                    iterations: 1,
                })

                setTimeout(() => {
                    el('app').style.display = 'none';

                    el('ending-time').innerHTML = formatTime(player.timePlayed);

                    el('ending').style.display = '';
                    el('ending').style.opacity = 1;
                    el('ending').animate({
                        opacity: [0,1]
                    },{
                        duration: 10000,
                        iterations: 1,
                    })
                }, 10000);
            }
        } else if (!player.omni.god && player.omni.active && player.fish.gte(this.godRequire)) {
            player.omni.god = true;
            player.fish = E(0);
            player.total_fish = E(0);
        }
    },

    godHTML() {
        const cost = player.omni.god ? this.godRequire2 : this.godRequire
        el('god-button').innerHTML = `${lang_text('overmodify-shark')}<br><br><b>${lang_text('require')}:</b> ${format(cost,0)} ${player.omni.god ? CURRENCIES['omni-fish'].costName : CURRENCIES.fish.costName}`
        el('god-button').className = el_classes({omni: true, 'huge-btn': true, locked: player.fish.lt(cost)})
    },

    god_equivalents: [
        /* 00 */ `ω`,
        /*    */ `ω+1`,
        /*    */ `ω+2`,
        /*    */ `ω+3`,
        /*    */ `ω2`,
        /*    */ `ω2+1`,
        /*    */ `ω3`,
        /*    */ `ω<sup>2</sup>`,
        /*    */ `ω<sup>2</sup>+1`,
        /*    */ `ω<sup>2</sup>+ω`,
        /*    */ `ω<sup>2</sup>+ω2`,
        /*    */ `ω<sup>2</sup>2`,
        /*    */ `ω<sup>2</sup>2+ω`,
        /*    */ `ω<sup>2</sup>3`,
        /*    */ `ω<sup>3</sup>`,
        /*    */ `ω<sup>3</sup>2`,
        /*    */ `ω<sup>4</sup>`,
        /*    */ `ω<sup>ω</sup>`,
        /*    */ `ω<sup>ω+1</sup>`,
        /*    */ `ω<sup>ω2</sup>`,
        /*    */ `ω<sup>ω<sup>2</sup></sup>`,
        /*    */ `ω<sup>ω<sup>ω</sup></sup>`,
        /*    */ `ω<sup>ω<sup>ω<sup>ω</sup></sup></sup>`,
        /*    */ `ε<sub>0</sub>`,
        /*    */ `ε<sub>0</sub>+1`,
        /*    */ `ε<sub>0</sub>+ω`,
        /*    */ `ε<sub>0</sub>+ω<sup>2</sup>`,
        /*    */ `ε<sub>0</sub>+ω<sup>ω</sup>`,
        /*    */ `ε<sub>0</sub>2`,
        /*    */ `ω<sup>ε<sub>0</sub>+1</sup>`,
        /*    */ `ε<sub>1</sub>`,
        /*    */ `ω<sup>ε<sub>1</sub>+1</sup>`,
        /*    */ `ε<sub>2</sub>`,
        /*    */ `ε<sub>ω</sub>`,
        /*    */ `ε<sub>ω<sup>2</sup></sub>`,
        /*    */ `ε<sub>ω<sup>ω</sup></sub>`,
        /*    */ `ε<sub>ε<sub>0</sub></sub>`,
        /*    */ `ζ<sub>0</sub>`,
        /*    */ `ζ<sub>0</sub>+1`,
        /*    */ `ζ<sub>0</sub>+ω`,
        /*    */ `ζ<sub>0</sub>+ω<sup>ω</sup>`,
        /*    */ `ζ<sub>0</sub>+ε<sub>0</sub>`,
        /*    */ `ζ<sub>0</sub>+ε<sub>1</sub>`,
        /*    */ `ζ<sub>0</sub>+ε<sub>ω</sub>`,
        /*    */ `ζ<sub>0</sub>+ε<sub>ε<sub>0</sub></sub>`,
        /*    */ `ζ<sub>0</sub>2`,
        /*    */ `ω<sup>ζ<sub>0</sub>+1</sup>`,
        /*    */ `ε<sub>ζ<sub>0</sub>+1</sub>`,
        /*    */ `ζ<sub>1</sub>`,
        /*    */ `ζ<sub>ω</sub>`,
        /*    */ `ζ<sub>ε<sub>0</sub></sub>`,
        /*    */ `ζ<sub>ζ<sub>0</sub></sub>`,
        /*    */ `φ(3,0)`,
        /*    */ `φ(3,1)`,
        /*    */ `φ(3,ω)`,
        /*    */ `φ(3,ε<sub>0</sub>)`,
        /*    */ `φ(3,ζ<sub>0</sub>)`,
        /*    */ `φ(3,φ(3,0))`,
        /*    */ `φ(4,0)`,
        /*    */ `φ(ω,0)`,
        /*    */ `φ(ε<sub>0</sub>,0)`,
        /*    */ `φ(φ(ω,0),0)`,
        /*    */ `φ(1,0,0)`,
        /*    */ `φ(1,0,1)`,
        /*    */ `φ(1,1,0)`,
        /*    */ `φ(1,1,1)`,
        /*    */ `φ(1,2,0)`,
        /*    */ `φ(2,0,0)`,
        /*    */ `φ(ω,0,0)`,
        /*    */ `φ(ε<sub>0</sub>,0,0)`,
        /*    */ `φ(φ(ω,0),0,0)`,
        /*    */ `φ(φ(1,0,0),0,0)`,
        /*    */ `φ(1,0,0,0)`,
        /*    */ `φ(1,0,0,0,0)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+1)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+ω)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+ψ(Ω<sup>Ω<sup>ω</sup></sup>))`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+Ω)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+Ω<sup>ω</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+Ω<sup>ψ(Ω<sup>Ω<sup>ω</sup></sup>)</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+Ω<sup>Ω</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+Ω<sup>Ωω</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>+Ω<sup>Ω<sup>2</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>2)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>ω)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup></sup>ψ(Ω<sup>Ω<sup>ω</sup></sup>))`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>+1</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>+ω</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>+ψ(Ω<sup>Ω<sup>ω</sup></sup>)</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>+Ω</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>+Ωω</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>+Ω<sup>2</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>2</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>ω</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω</sup>ψ(Ω<sup>Ω<sup>ω</sup></sup>)</sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω+1</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω+2</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω2</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω<sup>2</sup></sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω<sup>ω</sup></sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ω<sup>ω<sup>ω</sup></sup></sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ψ(Ω)</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ψ(Ω<sup>2</sup>)</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ψ(Ω<sup>ω</sup>)</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ψ(Ω<sup>Ω</sup>)</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ψ(Ω<sup>Ω<sup>2</sup></sup>)</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ψ(Ω<sup>Ω<sup>ω</sup></sup>)</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>ψ(Ω<sup>Ω<sup>ψ(Ω)</sup></sup>)</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>Ω</sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>Ω<sup>2</sup></sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>Ω<sup>ω</sup></sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>Ω<sup>ψ(Ω)</sup></sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>Ω<sup>Ω</sup></sup></sup>)`,
        /*    */ `ψ(Ω<sup>Ω<sup>Ω<sup>Ω<sup>Ω</sup></sup></sup></sup>)`,
        /*    */ `ψ(Ω<sub>2</sub>)`,
        /*    */ `ψ(Ω<sub>2</sub>ω)`,
        /*    */ `ψ(Ω<sub>2</sub>Ω)`,
        /*    */ `ψ(Ω<sub>2</sub><sup>2</sup>)`,
        /*    */ `ψ(Ω<sub>2</sub><sup>ω</sup>)`,
        /*    */ `ψ(Ω<sub>2</sub><sup>Ω</sup>)`,
        /*    */ `ψ(Ω<sub>2</sub><sup>Ω<sup>Ω</sup></sup>)`,
        /*    */ `ψ(Ω<sub>2</sub><sup>Ω<sub>2</sub></sup>)`,
        /*    */ `ψ(Ω<sub>3</sub>)`,
        /*    */ `ψ(Ω<sub>ω</sub>)`,
        /*    */ `ψ(Ω<sub>ω+1</sub>)`,
        /*    */ `ψ(Ω<sub>ω2</sub>)`,
        /*    */ `ψ(Ω<sub>ω<sup>2</sup></sub>)`,
        /*    */ `ψ(Ω<sub>ψ(Ω)</sub>)`,
        /*    */ `ψ(Ω<sub>ψ(Ω<sub>2</sub>)</sub>)`,
        /*    */ `ψ(Ω<sub>ψ(Ω<sub>ψ(Ω)</sub>)</sub>)`,
        /*    */ `ψ(Ω<sub>Ω</sub>)`,
        /*    */ `ψ(Ω<sub>Ω</sub>)`,
        /*    */ `ψ(Ω<sub>Ω+1</sub>)`,
        /*    */ `ψ(Ω<sub>Ω+ω</sub>)`,
        /*    */ `ψ(Ω<sub>Ω2</sub>)`,
        /*    */ `ψ(Ω<sub>Ωω</sub>)`,
        /*    */ `ψ(Ω<sub>Ω<sup>2</sup></sub>)`,
        /*    */ `ψ(Ω<sub>Ω<sup>ω</sup></sub>)`,
        /*    */ `ψ(Ω<sub>Ω<sup>Ω</sup></sub>)`,
        /*    */ `ψ(Ω<sub>Ω<sub>2</sub></sub>)`,
        /*    */ `ψ(Ω<sub>Ω<sub>ω</sub></sub>)`,
        /*    */ `ψ(Ω<sub>Ω<sub>ψ(Ω)</sub></sub>)`,
        /*    */ `ψ(Ω<sub>Ω<sub>Ω</sub></sub>)`,
        /*    */ `ψ(Ι)`,
        /*    */ `ψ(Ι2)`,
        /*    */ `ψ(Ι<sup>2</sup>)`,
        /*    */ `ψ(Ι<sup>ω</sup>)`,
        /*    */ `ψ(Ι<sup>Ω</sup>)`,
        /*    */ `ψ(Ι<sup>Ι</sup>)`,
        /*    */ `ψ(Ι<sub>2</sub>)`,
        /*    */ `ψ(Ι<sub>ω</sub>)`,
        /*    */ `ψ(Ι<sub>Ω</sub>)`,
        /*    */ `ψ(Ι<sub>Ι</sub>)`,
        /*    */ `ψ(Ι(2,0))`,
        /*    */ `ψ(Ι(2,1))`,
        /*    */ `ψ(Ι(2,ω))`,
        /*    */ `ψ(Ι(2,Ω))`,
        /*    */ `ψ(Ι(2,Ι))`,
        /*    */ `ψ(Ι(2,Ι(2,0)))`,
        /*    */ `ψ(Ι(3,0))`,
        /*    */ `ψ(Ι(ω,0))`,
        /*    */ `ψ(Ι(Ω,0))`,
        /*    */ `ψ(Ι(Ι,0))`,
        /*    */ `ψ(Ι(Ι(2,0),0))`,
        /*    */ `ψ(Ι(1,0,0))`,
        /*    */ `ψ(Ι(1,0,0,0))`,
        /*    */ `ψ(Μ<sup>Μ<sup>ω</sup></sup>)`,
        /*    */ `ψ(Μ<sup>Μ<sup>Ω</sup></sup>)`,
        /*    */ `ψ(Μ<sup>Μ<sup>Ι</sup></sup>)`,
        /*    */ `ψ(Μ<sup>Μ<sup>Ι(2,0)</sup></sup>)`,
        /*    */ `ψ(Μ<sup>Μ<sup>Μ</sup></sup>)`,
        /*    */ `ψ(Μ<sub>2</sub>)`,
        /*    */ `ψ(Μ<sub>ω</sub>)`,
        /*    */ `ψ(Μ<sub>Ω</sub>)`,
        /*    */ `ψ(Μ<sub>Ι</sub>)`,
        /*    */ `ψ(Μ<sub>Μ</sub>)`,
        /*    */ `ψ(Μ<sub>Μ<sub>Μ</sub></sub>)`,
    ],
}

function getOmniSaveData() {
    let s = {
        active: false,

        tier: E(1),

        transcend: E(0),
        transcendences: 0,

        undead: E(0),
        undead_upgs: [],
        undead_tick: E(0),

        nucleus: E(0),
        reactions: 0,

        decay_series: [],
        particles: [E(0),E(0),E(0),E(0),E(0),E(0)],
        fission: false,

        condensed: [],
        best_condensed: [],

        total_isotopes: E(0),
        isotopes: [],

        runeifications: 0,
        rune_fragments: E(0),

        rune_upgrades: [],
        spent_rune_essence: E(0),
        rune_slots: [],

        rune_sacrificed: 0,
        rune_current_sacrifice: -1,

        god: false,
        overmodification: E(0),
    }

    for (let i = 0; i < OMNI.condensers.length; i++) {
        s.condensed[i] = E(0)
        s.best_condensed[i] = E(0)
    };
    for (let i = 0; i < UNDEAD.upgrades.length; i++) s.undead_upgs[i] = E(0);
    for (let i = 0; i < DECAY_CHAIN.length; i++) s.decay_series[i] = [E(0),E(0)];
    for (let i = 0; i < ISOTOPES.ctn.length; i++) s.isotopes[i] = E(0);
    for (let i = 0; i < 25; i++) s.rune_slots[i] = {id: 'fehu', amount: E(0)};
    for (let i = 0; i < 4; i++) s.rune_upgrades[i] = E(0);

    return s
}

CURRENCIES['anti-fish'] = {
    get amount() { return player.fish },
    set amount(v) { player.fish = v.max(0) },

    get total() { return player.total_fish },
    set total(v) { player.total_fish = v.max(0) },

    get gain() {
        if (player.omni.god || !player.omni.active) return E(0);

        let x = Decimal.mul(getOmniReward(2,0), sharkUpgEffect('os1')).mul(sharkUpgEffect('os3')).mul(sharkUpgEffect('t1')).mul(tmp.global_mult)

        x = x.pow(sharkUpgEffect('os4'))

        if (!RUNE_SACRIFICE.in(0)) x = x.pow(getUndeadUpgradeEffect(0)).pow(decaySeriesEffect(1,0)).pow(tmp.omni.particles_effect[3]);

        if (!RUNE_SACRIFICE.in(0)) x = expPow(x, decaySeriesEffect(11,0))
        x = expPow(x, getRuneEffect('fehu'))

        var pre = x;

        tmp.omni.op_start = player.omni.tier.gte(63) ? EINF : E(player.omni.tier.lt(60) ? 'ee1000' : 'ee1e10')

        if (player.omni.tier.lt(60)) x = x.overflow(tmp.omni.op_start, Decimal.pow(.5, getOmniReward(50,1)), 2);
        if (player.omni.tier.lt(63)) x = x.overflow('ee1e10', hasResearch('rc3') ? (1/3) ** 0.5 : 1/3, 2);

        tmp.omni.op_penalty = pre.gte(tmp.omni.op_start) ? pre.log10().log10().div(x.log10().log10()) : 1;

        return x
    },

    get passive() { return tmp.speed },
}

CURRENCIES['omni-fish'] = {
    get amount() { return player.fish },
    set amount(v) { player.fish = v.max(0) },

    get total() { return player.total_fish },
    set total(v) { player.total_fish = v.max(0) },

    get gain() {
        if (!player.omni.god) return E(0);

        let x = Decimal.pow10(player.omni.overmodification).mul(tmp.global_mult)

        return x
    },

    get passive() { return 1 },
}

CURRENCIES.transcend = {
    get amount() { return player.omni.transcend },
    set amount(v) { player.omni.transcend = v.max(0) },

    require: 1e33,

    get gain() {
        if (player.omni.god || !player.omni.active || player.omni.tier.lt(7)) return E(0);

        let x = player.total_fish.div(1e33)

        if (x.lt(1)) return E(0);

        var exp = .5

        if (hasResearch('t3')) exp += .05;
        for (let i = 0; i < 4; i++) exp += ISOTOPES.boost(2,i);
        
        x = expPow(x, exp).mul(sharkUpgEffect('t2')).mul(tmp.global_mult)

        if (!RUNE_SACRIFICE.in(1)) x = x.mul(getCondenserBonus(0)).pow(getUndeadUpgradeEffect(1)).pow(decaySeriesEffect(2,0)).pow(tmp.omni.particles_effect[4]);

        if (!RUNE_SACRIFICE.in(1)) x = expPow(x, decaySeriesEffect(12,0));
        x = expPow(x, getRuneEffect('berkanan'))

        if (RUNE_SACRIFICE.in(1)) x = x.max(10).log10();

        return x.floor()
    },

    get passive() { return Decimal.mul(+(REBIRTH.hasUpgrade(8) || player.omni.tier.gte(20)), Decimal.max(getOmniReward(20,0),.01)).mul(tmp.speed.div(100).max(1)) },
}

CURRENCIES.nucleus = {
    get amount() { return player.omni.nucleus },
    set amount(v) { player.omni.nucleus = v.max(0) },

    require: E('e800'),

    get gain() {
        if (player.omni.god || !player.omni.active || player.omni.tier.lt(20) || player.omni.transcend.lt(this.require)) return E(0);

        let x = player.omni.transcend.log10().div(100).sub(7), exp = 2

        for (let i = 0; i < 4; i++) exp += ISOTOPES.boost(0,i);

        x = expPow(x,exp).mul(tmp.global_mult)

        x = x.mul(tmp.omni.particles_effect[0]).mul(getCondenserBonus(2))

        x = x.pow(getRuneEffect('naudiz'))

        return x.floor()
    },

    get passive() { return Decimal.mul(+(REBIRTH.hasUpgrade(8) || player.omni.tier.gte(32)), Decimal.max(getOmniReward(32,0),.01)).mul(tmp.speed.max(1).pow(getOmniReward(36,0.1))) },
}

RESETS.transcend = {
    get require() { return player.total_fish.gte(CURRENCIES.transcend.require) }, 
    reset(force) {
        if (!force) {
            gainCurrency('transcend',tmp.currency_gain.transcend)
            player.omni.transcendences++
            increaseFeature(29)
            
            if (OMNI.increase(7)) return;
        }

        this.doReset()
    },
    doReset() {
        player.fish = E(0)
        player.total_fish = E(0)

        resetSharkUpgrades('os1','os2','os3')

        reloadTemp()
    },
}

RESETS.reaction = {
    get require() { return player.omni.transcend.gte(CURRENCIES.nucleus.require) }, 
    reset(force) {
        if (!force) {
            gainCurrency('nucleus',tmp.currency_gain.nucleus)
            player.omni.reactions++
            increaseFeature(30)
            
            if (OMNI.increase(20)) return;
        }

        this.doReset()
    },
    doReset() {
        player.omni.transcend = E(0)

        player.omni.undead = E(0)
        player.omni.undead_tick = E(0)
        for (let i = 0; i < UNDEAD.upgrades.length; i++) player.omni.undead_upgs[i] = E(0);

        resetSharkUpgrades('t1','t2')
        if (!hasResearch('re1')) resetResearch('t1','t2','u1');

        RESETS.transcend.doReset()
    },
}

function calculateGameSpeed() {
    let x = Decimal.mul(tmp.omni.particles_effect[1], getCondenserBonus(1))

    if (!RUNE_SACRIFICE.in(-1)) x = x.max(10).log10();

    return x
}

function updateOmniTemp() {
    tmp.omni.condensers = []
    for (let i = 0; i < OMNI.condensers.length; i++) if (OMNI.condensers[i][0]()) tmp.omni.condensers[i] = OMNI.condensers[i][2](player.omni.condensed[i]);

    updateRuneTemp()
    ISOTOPES.temp()
    updateDecaySeriesTemp()
    updateUndeadTemp()

    for (let t in OMNI.rewards) {
        t = parseInt(t)
        const R = OMNI.rewards[t]

        if (R) tmp.omni.rewards[t] = player.omni.tier.gte(t) ? R[1](player.omni.tier) : R[0];
    }
    
    tmp.speed = calculateGameSpeed()
}
function getOmniReward(t, def=1) { return tmp.omni.rewards[t] ?? def }
function getCondenserBonus(i, def=1) { return tmp.omni.condensers[i] ?? def }

function setupOmniHTML() {
    let h = '', text = {
        tier: lang_text('omni-tier'),
        condense: lang_text('condense'),
    }

    for (let t in OMNI.rewards) {
        t = parseInt(t)

        h += `<div class="omni-reward-div" id="omni-reward-${t}-div">
            <div>
                <h4>${text.tier} ${t}</h4>
                <hr class="line">
                <div id="omni-reward-${t}-desc">???</div>
            </div>
        </div>`
    }

    el('omni-rewards-table').innerHTML = h

    h = ""

    for (let i = 0; i < OMNI.condensers.length; i++) {
        h += `<button class="omni" id="omni-condenser-${i}-div" onclick="OMNI.condense(${i})">
            ${text.condense} ${CURRENCIES[OMNI.condensers[i][1]].costName}
            <hr class="line">
            <div id="omni-condenser-${i}-boost">???</div>
        </button>`
    }

    el('shark-condensers-table').innerHTML = h

    setupDecaySeriesHTML()
    ISOTOPES.setupHTML()
}

function updateOmniRewardsHTML() {
    let rewards = lang_text('omni-rewards')
    
    for (let t in OMNI.rewards) {
        t = parseInt(t)

        el(`omni-reward-${t}-div`).style.display = el_display(player.omni.tier.gte(t))

        const R = OMNI.rewards[t]
        el(`omni-reward-${t}-desc`).innerHTML = rewards[t](R && R[2] ? toColoredText(R[2](tmp.omni.rewards[t]), 'lime') : "")
    }
}

function updateSharkCondensersHTML() {
    let condensers = lang_text("condensers")

    for (let i = 0; i < OMNI.condensers.length; i++) {
        const O = OMNI.condensers[i]
        let unl = O[0]()
        el(`omni-condenser-${i}-div`).style.display = el_display(unl)
        if (unl) {
            el(`omni-condenser-${i}-boost`).innerHTML = `${condensers[i](toColoredText(O[3](tmp.omni.condensers[i]), 'lime'))}<br><span class='small-text'>${lang_text("condensed",format(player.omni.condensed[i],0))}</span>`
        }
    }
}