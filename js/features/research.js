const RESEARCH = {
    p1: {
        unl: ()=>true,
        require: [
            ['prestige',false,1e9],
            // ['prestige',false,l=>Decimal.pow(10,l).mul(1e7),x=>x.div(1e7).log(10).floor().add(1)],
        ],
        effect(r) {
            return Decimal.div(sharkUpgEffect('s2',0),100)
        },
        effDesc: x => "+"+format(x),
    },
    p2: {
        unl: ()=>true,
        require: [
            ['prestige',false,1e11],
        ],
    },
    p3: {
        max: 5,
        noBuyMax: true,
        unl: ()=>true,
        require: [
            // l=>Decimal.pow(100,l.pow(2.5)).mul(1e13)
            ['prestige',false,l=>[1e13,1e15,1e24,1e30,1e48][l.round().toNumber()]??EINF,x=>0],
        ],
        onBuy() {
            if (REBIRTH.hasUpgrade(0) || player.singularity.best_bh.gte(5)) return;
            CURRENCIES.prestige.amount = E(0)
            resetSharkUpgrades('p1','p2')
            doReset('prestige',true)
        },
        effect(r) {
            return r
        },
        effDesc: x => "-"+format(x,0),
    },
    p4: {
        unl: ()=>true,
        require: [
            ['prestige',false,1e56],
        ],
    },
    p5: {
        unl: ()=>player.feature>=4,
        require: [
            ['prestige',false,1e98],
        ],
        effect(r) {
            return player.shark_level.sub(99).max(0).div(100).add(1).softcap(10,0.5,0)
        },
        effDesc: x => formatPercent(x.sub(1)),
    },
    p6: {
        unl: ()=>player.explore.unl>=2 || player.core.times>0,
        require: [
            ['prestige',false,1e155],
            ['ice',false,1e13],
        ],
    },
    p7: {
        unl: ()=>player.explore.unl>=3 || player.core.times>0,
        require: [
            ['prestige',false,1e265],
            ['salt',false,1e7],
        ],
    },
    p8: {
        unl: ()=>player.feature>=7,
        require: [
            ['core',false,25e6],
            ['prestige',false,'e14000'],
        ],
    },
    p9: {
        max: 3,
        unl: ()=>player.feature>=13,
        require: [
            ['stone',false,l=>Decimal.pow(10,l).mul(100),x=>x.div(100).log(10).add(1).floor()]
        ],
        effect(r) {
            return r.mul(0.05)
        },
        effDesc: x => "^"+format(Decimal.sub(1.25,x)),
    },

    e1: {
        unl: ()=>player.explore.unl>=3 || player.core.times>0,
        require: [
            ['coral',false,1e42],
        ],
        effect(r) {
            return player.explore.res[2].add(1).root(2)
        },
        effDesc: x => formatMult(x),
    },
    e2: {
        unl: ()=>player.explore.unl>=4 || player.core.times>0,
        require: [
            ['ice',false,1e36],
        ],
        effect(r) {
            return player.explore.res[3].add(1).root(2)
        },
        effDesc: x => formatMult(x),
    },
    e3: {
        max: 4,
        unl: ()=>player.feature>=7,
        require: [
            ['core',false,l=>Decimal.pow(5,l).mul(1e4),x=>x.div(1e4).log(5).add(1).floor()],
        ],
    },
    e4: {
        unl: ()=>player.explore.unl>=5,
        require: [
            ['core',false,1e18],
        ],
        effect(r) {
            return expPow(coreReactorEffect(2),0.5)
        },
        effDesc: x => formatMult(x),
    },
    e5: {
        unl: ()=>player.feature>=10 && hasResearch('e3'),
        require: [
            ['kelp',false,1e78],
        ],
    },
    e6: {
        unl: ()=>player.feature>=14,
        require: [
            ['kelp',false,'e700'],
        ],
    },
    e7: {
        unl: ()=>isSSObserved('uranus'),
        require: [
            ['kelp',false,'ee100'],
        ],
    },

    c1: {
        unl: ()=>player.core.times>0,
        require: [
            ['core',false,10],
        ],
    },
    c2: {
        max: 4,
        unl: ()=>player.core.times>0,
        require: [
            ['core',false,l=>l.add(1).pow(3).mul(100),x=>x.div(100).root(3).floor()],
        ],
    },
    c3: {
        unl: ()=>player.core.times>0,
        require: [
            ['core',false,1e3],
        ],
    },
    c4: {
        unl: ()=>player.core.times>0,
        require: [
            ['core',false,1e3],
            ['prestige',false,'e2000'],
        ],
    },
    c5: {
        unl: ()=>player.feature>=7,
        require: [
            ['core',false,1e9],
        ],
    },
    c6: {
        unl: ()=>player.feature>=8,
        require: [
            ['core',false,1e20],
        ],
        effect(r) {
            return expPow(CURRENCIES.core.amount.add(1),hasResearch('c11') ? 0.55 : 0.5)//.overflow('eee1000',0.5,3)
        },
        effDesc: x => formatMult(x.pow(-1)),
    },
    c7: {
        unl: ()=>player.feature>=8,
        require: [
            ['core',false,1e36],
        ],
    },
    c8: {
        unl: ()=>player.feature>=8,
        require: [
            ['core',false,1e60],
        ],
    },
    c9: {
        unl: ()=>player.feature>=9,
        require: [
            ['core',false,1e84],
        ],
    },
    c10: {
        unl: ()=>player.feature>=9,
        require: [
            ['core',false,1e133],
        ],
        effect(r) {
            return Decimal.root(sharkUpgEffect('p3',0),3).overflow(1e3,0.5)
        },
        effDesc: x => "+"+format(x),
    },
    c11: {
        unl: ()=>player.feature>=10,
        require: [
            ['core',false,1e213],
        ],
    },
    c12: {
        unl: ()=>player.feature>=12,
        require: [
            ['core',false,'1e675'],
        ],
    },
    c13: {
        unl: ()=>player.feature>=13,
        require: [
            ['coal',false,1e3],
        ],
    },
    c14: {
        unl: ()=>player.humanoid.mining_tier.gte(3),
        require: [
            ['iron',false,1e3],
        ],
        effect(r) {
            var x = E(1)

            for (let i = 0; i < CORE_REACTOR.length; i++) {
                x = x.mul(player.core.reactor[i].add(10).log10())
            }

            return x
        },
        effDesc: x => formatPow(x),
    },
    c15: {
        max: 5,
        unl: ()=>player.humanoid.mining_tier.gte(9),
        require: [
            ['platinum',false,l=>Decimal.pow(10,l).mul(100),x=>x.div(100).log(10).add(1).floor()],
        ],
        effect(r) {
            return r.gt(0) ? Decimal.pow(10,r.sub(5)) : 0
        },
        effDesc: x => formatPow(x,4),
    },

    m1: {
        max: 10,
        unl: ()=>player.feature>=13,
        require: [
            ['core',false,l=>Decimal.pow('e100',l).mul('e1200'),x=>x.div('e1200').log('e100').add(1).floor()],
        ],
        effect(r) {
            return r.mul(5)
        },
        effDesc: x => "+"+format(x,0),
    },
    m2: {
        unl: ()=>player.feature>=13,
        require: [
            ['coal',false,1e6],
        ],
    },
    m3: {
        max: 5,
        unl: ()=>player.humanoid.mining_tier.gte(6),
        require: [
            ['gold',false,l=>Decimal.pow(10,l).mul(1e3),x=>x.div(1e3).log(10).add(1).floor()],
        ],
        effect(r) {
            return r
        },
        effDesc: x => "+"+format(x,0),
    },
    m4: {
        max: 10,
        unl: ()=>player.humanoid.mining_tier.gte(12),
        require: [
            ['stone',false,l=>Decimal.pow(1e4,l.pow(1.5)).mul(1e24),x=>x.div(1e24).log(1e4).root(1.5).add(1).floor()],
        ],
        effect(r) {
            return r.mul(0.25).add(1)
        },
        effDesc: x => "+"+formatPercent(x.sub(1),0),
    },
    m5: {
        tier: 2,
        unl: ()=>player.humanoid.mining_ascend.gte(3),
        require: [
            ['uranium',false,10],
        ],
        effect() {
            return Decimal.add(getSharkRankBonus('mining_damage'),10).log10()
        },
        effDesc: x => formatMult(x),
    },
    m6: {
        tier: 2,
        unl: ()=>player.humanoid.mining_ascend.gte(3),
        require: [
            ['uranium',false,500],
        ],
    },
    m7: {
        tier: 2,
        unl: ()=>player.humanoid.mining_ascend.gte(25),
        require: [
            ['oganesson',false,1e3],
        ],
    },
    m8: {
        tier: 2,
        unl: ()=>player.humanoid.mining_ascend.gte(25),
        require: [
            ['oganesson',false,1e4],
        ],
    },
    m9: {
        tier: 2,
        unl: ()=>hasForgeUpgrade('adv_research',4),
        require: [
            ['sharkium',false,1e3],
        ],
    },
    m10: {
        tier: 2,
        unl: ()=>hasForgeUpgrade('adv_research',4),
        require: [
            ['sharkium',false,1e4],
        ],
    },
    m11: {
        tier: 2,
        unl: ()=>hasForgeUpgrade('adv_research',4),
        require: [
            ['sharkium',false,1e5],
        ],
    },

    f1: {
        max: 10,
        unl: ()=>hasForgeUpgrade('adv_research'),
        require: [
            ['diamond',false,l=>Decimal.pow(1e3,l).mul(1e5),x=>x.div(1e5).log(1e3).add(1).floor()],
        ],
        effect(r) {
            return r.mul(0.25)
        },
        effDesc: x => "+"+format(x),
    },
    f2: {
        unl: ()=>hasForgeUpgrade('adv_research'),
        require: [
            ['bismuth',false,1e8],
        ],
    },
    f3: {
        max: 10,
        unl: ()=>hasForgeUpgrade('adv_research',2),
        require: [
            ['obsidian',false,l=>Decimal.pow(100,l).mul(1e3),x=>x.div(1e3).log(100).add(1).floor()],
        ],
        effect(r) {
            return r.toNumber()
        },
        effDesc: x => "+"+format(x,0),
    },
    f4: {
        unl: ()=>hasForgeUpgrade('adv_research',2),
        require: [
            ['diamond',false,1e16],
            ['obsidian',false,1e5],
        ],
    },
    f5: {
        unl: ()=>hasForgeUpgrade('adv_research',2),
        require: [
            ['vibranium',false,100],
        ],
        effect(r) {
            return expPow(CURRENCIES.vibranium.amount.add(1),0.5)
        },
        effDesc: x => formatMult(x),
    },
    f6: {
        unl: ()=>hasForgeUpgrade('adv_research',3),
        require: [
            ['vibranium',false,10000],
        ],
        effect(r) {
            return Decimal.pow(1.15,player.humanoid.mining_tier)
        },
        effDesc: x => formatMult(x),
    },
    f7: {
        unl: ()=>hasForgeUpgrade('adv_research',3),
        require: [
            ['fish',true,'e3e115'],
            ['vibranium',false,2.5e5],
        ],
    },
    f8: {
        unl: ()=>hasForgeUpgrade('adv_research',3),
        require: [
            ['vibranium',false,1e10],
        ],
    },

    s1: {
        tier: 2,
        unl: ()=>player.singularity.best_bh.gte(3),
        require: [
            ['remnants',false,1e3],
        ],
        effect(r) {
            return expPow(CURRENCIES.fish.amount.add(1).log10().add(1).log10().mul(2).add(1),2)
        },
        effDesc: x => formatMult(x),
    },
    s2: {
        tier: 2,
        unl: ()=>player.singularity.best_bh.gte(7),
        require: [
            ['remnants',false,1e30],
        ],
    },
    s3: {
        tier: 2,
        unl: ()=>player.singularity.best_bh.gte(8),
        require: [
            ['remnants',false,1e48],
        ],
    },
    s4: {
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['dark-matter',true,1e4],
            ['remnants',false,1e70],
        ],
    },
    s5: {
        max: 6,
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['remnants',false,a=>a.pow_base(1e15).mul(1e75),a=>a.div(1e75).log(1e15).add(1).floor()],
        ],
    },
    
    dm1: {
        max: 8,
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['dark-matter',true,a=>a.pow_base(10).ceil(),a=>a.log(10).add(1).floor()],
        ],
        onBuy() {
            player.singularity.bh = player.singularity.bh.max(player.research.dm1)
        },
    },
    dm2: {
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['dark-matter',false,1],
        ],
    },
    dm3: {
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['dark-matter',false,10],
        ],
    },
    dm4: {
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['dark-matter',false,100],
        ],
    },
    dm5: {
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['dark-matter',false,1e6],
        ],
    },
    dm6: {
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['dark-matter',false,1e8],
            ['core',false,'e5e17'],
        ],
    },
    dm7: {
        tier: 2,
        unl: ()=>player.feature>=19,
        require: [
            ['dark-matter',false,1e10],
            ['remnants',false,'1e110'],
        ],
        effect(r) {
            let x = CURRENCIES['dark-matter'].total.add(1)
            if (x.gte('ee100000')) x = x.log10().log10().div(1e5).log10().add(1).mul(1e5).pow10().pow10();
            return x
        },
        effDesc: x => formatMult(x),
    },

    o1: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 3,
        require: [
            ['reserv',false,1e6],
        ],
    },
    o2: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 5,
        require: [
            ['reserv',false,1e150],
        ],
    },
    o3: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 6,
        require: [
            ['reserv',false,'1e1996'],
        ],
    },

    r1: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 5,
        require: [
            ['traject',false,1e6],
        ],
    },
    r2: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 5,
        require: [
            ['traject',false,1e12],
        ],
    },
    r3: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 6,
        require: [
            ['traject',false,1e24],
        ],
    },

    t1: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 7,
        require: [
            ['traject',false,1e250],
        ],
    },
    t2: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 7,
        require: [
            ['traject',false,'e500'],
        ],
    },
    t3: {
        tier: 2,
        unl: ()=>tmp.ss_difficulty >= 8,
        require: [
            ['traject',false,'ee6'],
        ],
    },

    h1: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',true,5]
        ],
        effect(r) {
            let x = player.shark_level.add(10).slog(10)
            if (hasResearch('h6')) x = x.max(player.shark_level.add(1).slog(2).pow_base(2));
            return x
        },
        effDesc: x => formatMult(x),
    },
    h2: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',true,100]
        ],
    },
    h3: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',false,1e6]
        ],
        effect(r) {
            return player.hadron.total.add(1).log10()
        },
        effDesc: x => "+"+format(x,3),
    },
    h4: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',false,1e10]
        ],
    },
    h5: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',false,1e20]
        ],
    },
    h6: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',false,1e50]
        ],
        effect(r) {
            return player.fish.add(1).slog(2).pow_base(2)
        },
        effDesc: x => formatMult(x),
    },
    h7: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',false,1e63],
            ['remnants',false,'ee45'],
        ],
    },
    h8: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',false,1e93]
        ],
    },
    h9: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',false,'1e1000']
        ],
    },
    h10: {
        tier: 3,
        unl: ()=>player.hadron.times,
        require: [
            ['hadron',false,'1e3000']
        ],
    },
    h11: {
        tier: 3,
        unl: ()=>player.feature>=24,
        require: [
            ['hadron',false,'e150000']
        ],
    },
    h12: {
        tier: 3,
        unl: ()=>player.feature>=24,
        require: [
            ['hadron',false,'e900000']
        ],
    },
    h13: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=5,
        require: [
            ['hadron',false,'e1.6e7']
        ],
    },
    h14: {
        tier: 3,
        unl: ()=>player.feature>=26,
        require: [
            ['hadron',false,'e1.6e36']
        ],
    },
    h15: {
        tier: 3,
        unl: ()=>player.feature>=26,
        require: [
            ['hadron',false,'e1e51']
        ],
    },
    h16: {
        tier: 3,
        unl: ()=>player.feature>=26,
        require: [
            ['hadron',false,'e6e82']
        ],
    },
    h17: {
        tier: 3,
        unl: ()=>player.feature>=26,
        require: [
            ['hadron',false,'e3e84']
        ],
        effect(r) {
            return player.hadron.total.add(1).log10().add(1).log10().add(1).log10().div(8.5).add(1)
        },
        effDesc: x => formatMult(x,3),
    },
    h18: {
        tier: 3,
        unl: ()=>player.feature>=26,
        require: [
            ['hadron',false,'e2.6e89']
        ],
        effect(r) {
            return player.fish.add(10).slog(10).log10().div(8.5).add(1)
        },
        effDesc: x => formatMult(x,3),
    },
    h19: {
        tier: 3,
        unl: ()=>player.feature>=27,
        max: 10,
        require: [
            ['hadron',false,l=>[
                'e1e16486',
                'e2e18089',
                'e4e21462',
                'e3e27213',
                'e1e39185',
                'e4e69166',
                'e2e171028',
                'e1e664653',
                'ee3873926',
                'ee31506045',
            ][l.round().toNumber()]??EINF,x=>0]
        ],
    },
    h20: {
        tier: 3,
        unl: ()=>hasResearch('h19',10),
        require: [
            ['hadron',false,'ee305316605']
        ],
    },
    h21: {
        tier: 3,
        unl: ()=>hasDNAMilestone(9),
        require: [
            ['hadron',false,'ee2.037e17']
        ],
    },

    ge1: {
        tier: 3,
        unl: ()=>player.feature>=24,
        require: [
            ['gal-explore-0',false,1e4]
        ],
        effect(r) {
            return player.shark_tier.root(2).pow_base(1.25)
        },
        effDesc: x => formatMult(x),
    },
    ge2: {
        max: 5,
        tier: 3,
        unl: ()=>player.feature>=24,
        require: [
            ['gal-explore-0',false,x=>x.pow10().mul(1e5),x=>x.div(1e5).log10().add(1).floor()]
        ],
        effect(r) {
            return r.mul(.2).add(1)
        },
        effDesc: x => formatPow(x),
    },
    ge3: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=2,
        require: [
            ['gal-explore-1',false,1e4]
        ],
        effect(r) {
            return player.hadron.gal_explore.res[1].add(10).log10()
        },
        effDesc: x => formatPow(x),
    },
    ge4: {
        max: 10,
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=2,
        require: [
            ['gal-explore-1',false,x=>x.pow(2).pow10().mul(1e5),x=>x.div(1e5).log10().root(2).add(1).floor()]
        ],
        effect(r) {
            return r.mul(.1).add(1)//.min(1.25)
        },
        effDesc: x => formatPow(x),
    },
    ge5: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=2,
        require: [
            ['gal-explore-1',false,1e12]
        ],
    },
    ge6: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=3,
        require: [
            ['gal-explore-2',false,1e6]
        ],
        effect(r) {
            return CURRENCIES.humanoid.amount.add(10).log10().log10().add(10).log10().pow(2)
        },
        effDesc: x => formatPow(x),
    },
    ge7: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=3,
        require: [
            ['gal-explore-2',false,1e7]
        ],
    },
    ge8: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=3,
        require: [
            ['gal-explore-2',false,1e10]
        ],
    },
    ge9: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=4,
        require: [
            ['gal-explore-3',false,1e5]
        ],
    },
    ge10: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=3,
        require: [
            ['gal-explore-2',false,1e36]
        ],
    },
    ge11: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=4,
        require: [
            ['gal-explore-3',false,1e9]
        ],
    },
    ge12: {
        tier: 3,
        unl: ()=>player.hadron.gal_explore.unl>=5,
        require: [
            ['gal-explore-4',false,1e6]
        ],
    },

    t1: {
        tier: 4,
        unl: ()=>player.omni.tier.gte(12),
        max: 9,
        require: [
            ['transcend',false,x=>x.pow(1.25).pow_base(1e2).mul(1e20),x=>x.div(1e20).log(1e2).root(1.25).add(1).floor()]
        ],
        effect: r => r.mul(15),
        effDesc: x => "+"+format(x,0),
    },
    t2: {
        tier: 4,
        unl: ()=>player.omni.tier.gte(13),
        require: [
            ['transcend',false,1e30]
        ],
        effect: r => Decimal.div(sharkUpgEffect('os2',0),10),
        effDesc: x => "+"+format(x,1),
    },
    t3: {
        tier: 4,
        unl: ()=>player.omni.tier.gte(14),
        require: [
            ['transcend',false,1e50]
        ],
    },
    t4: {
        tier: 4,
        unl: ()=>player.omni.tier.gte(18),
        require: [
            ['transcend',false,1e200]
        ],
    },

    u1: {
        tier: 4,
        unl: ()=>player.omni.tier.gte(17),
        require: [
            ['transcend',false,1e125]
        ],
    },
    u2: {
        tier: 5,
        max: 10,
        unl: ()=>player.omni.tier.gte(18),
        require: [
            ['undead',false,x=>x.pow_base(4/3).pow_base(1e9),x=>x.log(1e9).log(4/3).add(1).floor()]
        ],
        effect: r => Decimal.div(8,r.add(1)).add(2).max(2),
        effDesc: x => formatMult(x),
    },
    u3: {
        tier: 4,
        unl: ()=>player.omni.tier.gte(21),
        require: [
            ['nucleus',false,100]
        ],
    },
    u4: {
        tier: 4,
        unl: ()=>player.omni.tier.gte(38),
        require: [
            ['undead',false,'e10000']
        ],
        effect: r => expPow(getCondenserBonus(1), 2).overflow('ee6',0.5,2),
        effDesc: x => formatMult(x),
    },

    re1: {
        tier: 4,
        unl: ()=>player.omni.tier.gte(22),
        require: [
            ['nucleus',false,1e4]
        ],
    },

    d1: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(40),
        require: [
            ['rune-fragments',false,10]
        ],
    },
    d2: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(41),
        require: [
            ['rune-fragments',false,100]
        ],
    },
    d3: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(42),
        require: [
            ['rune-fragments',false,5000]
        ],
    },
    d4: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(44),
        require: [
            ['rune-fragments',false,1e9]
        ],
    },
    d5: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(62),
        require: [
            ['rune-fragments',false,'e5.358e10']
        ],
    },

    rc1: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(46),
        require: [
            ['rune-fragments',false,2.5e22]
        ],
    },
    rc2: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(50),
        require: [
            ['rune-fragments',false,1e100]
        ],
    },
    rc3: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(52),
        require: [
            ['rune-fragments',false,1e120]
        ],
    },
    rc4: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(59),
        require: [
            ['rune-fragments',false,'e17080']
        ],
    },
    rc5: {
        tier: 5,
        unl: ()=>player.omni.tier.gte(61),
        require: [
            ['rune-fragments',false,'e2.14e7']
        ],
    },
}

const RESEARCH_KEYS = Object.keys(RESEARCH)
const MAX_RESEARCH = [null,15,20,25,30]

RESEARCH_KEYS.forEach(x => RESEARCH[x].tier ??= 1)

const PRE_BH_RESEARCH = RESEARCH_KEYS.filter(x => RESEARCH[x].tier < 2)
const PRE_HADRON_RESEARCH = RESEARCH_KEYS.filter(x => RESEARCH[x].tier < 3)
const PRE_OMNI_RESEARCH = RESEARCH_KEYS.filter(x => RESEARCH[x].tier < 4)

PRE_OMNI_RESEARCH.forEach(x => {
    const U = RESEARCH[x].unl ?? (() => true)
    RESEARCH[x].unl = () => !player.omni.active && U()
})

var research_page = 1

function setupResearchHTML() {
    let text = lang_text('all-research')
    el('research-table').innerHTML = Object.entries(RESEARCH).map(
        ([i,x]) => {
            return `
            <div class="research-div ${x.tier > 3 ? 'omni' : ''}" id="research-${i}-div">
                <div class="research-name">${text[i]?.[0] ?? lang_text('research-'+i+'-name')}</div>
                <div class="research-desc" id="research-${i}-desc">???</div>
                <div class="research-short-text" id="research-${i}-require"></div>
                <div class="research-status" id="research-${i}-status">
                    <div><b>Not Purchased</b></div>
                    <div><b>Effect:</b> +0.41</div>
                </div>
                <div class="research-buttons">
                    <button id="research-${i}-button" onclick="purchaseResearch('${i}')">Purchase</button>
                    ${(x.max??1)>1&&!x.noBuyMax?`<button id="research-${i}-max-button" onclick="purchaseResearch('${i}',true)">${lang_text("buyMax")}</button>`:""}
                </div>
            </div>
            `
        }
    ).join("")
}

function hasResearch(id,l=1) { return player.research[id].gte(l) }
function isResearchMaxed(id) { return player.research[id].gte(RESEARCH[id].max??1) }
function researchEffect(id,def=E(1)) { return tmp.research_eff[id]??def }
function simpleResearchEffect(id,def=E(1)) { return player.research[id].gte(1)?tmp.research_eff[id]??def:def }

function purchaseResearch(id,bulking=false) {
    const R = RESEARCH[id]
    let max = R.max??1
    bulking &&= max != 1;
    if (!R.unl() || player.research[id].gte(max)) return
    let amt = player.research[id], afford = true, after = R.require.map(r => {
        if (afford) {
            let curr = CURRENCIES[r[0]], c = max>1?r[2](amt):r[2], s = (r[1]?curr.total:curr.amount)
            if (s.sub(c).lt(0)) {
                afford = false
                return
            }
            return bulking ? r[3](s).max(amt.add(1)).min(max) : [curr,r[1]?undefined:s.sub(c).max(0)]
        }
    })
    if (afford) {
        if (bulking) {
            let min_bulk = amt.add(1)
            after.forEach(x => {min_bulk = min_bulk.max(x)})
            player.research[id] = min_bulk
            R.require.forEach(r => {
                if (r[1]) return
                let curr = CURRENCIES[r[0]]
                curr.amount = curr.amount.sub(r[2](min_bulk.sub(1))).max(0)
            })
        } else {
            player.research[id] = player.research[id].add(1)
            after.forEach(x => {if (x[1]) x[0].amount = x[1]})
        }
        R.onBuy?.()
    }
}

function purchaseAllResearch() {
    for (const id of RESEARCH_KEYS) purchaseResearch(id, true);
}

function changeResearchPage(diff) {
    research_page = Math.max(1,research_page+diff)
    el("research-page").value = research_page
    updateResearchHTML()
}

function updateResearchHTML() {
    let text = [lang_text('effect'),lang_text('level'),lang_text('require'),lang_text('all-research')]

    var hidden = player.radios['visible-research']
    var visible_research = (hidden ? RESEARCH_KEYS.filter(x => !isResearchMaxed(x)) : RESEARCH_KEYS).filter(x => RESEARCH[x].unl())

    var m = MAX_RESEARCH[player.radios['max-research-amt']]
    var unl = player.radios['max-research-amt'] != 0 && visible_research.length > m
    el("research-page-div").style.display = el_display(unl)
    if (unl) {
        var c = Math.max(1,Math.ceil(visible_research.length/m))

        el("research-total-pages").innerHTML = lang_text('research-pages',c)

        if (research_page > c) {
            el("research-page").value = research_page = c
        }

        visible_research = [...visible_research].splice(m*(research_page-1),m)
    }

    for (let [i,x] of Object.entries(RESEARCH)) {
        let unl = visible_research.includes(i) && x.unl(), el_id = "research-"+i
        el(el_id+"-div").style.display = el_display(unl)
        if (unl) {
            let amt = player.research[i], max = x.max??1, bought = amt.gte(max), afford = true

            el(el_id+"-desc").innerHTML = `<b style="font-size:12px">[${i}]</b> ` + (text[3][i]?.[1] ?? lang_text(el_id+"-desc"))
            el(el_id+"-require").style.display = el_display(!bought)
            el(el_id+"-button").style.display = el_display(!bought)
            if ((x.max??1)>1&&!x.noBuyMax) el(el_id+"-max-button").style.display = el_display(!bought)
            if (!bought) {
                el(el_id+"-require").innerHTML = `<b>${text[2]}:</b> ` + x.require.map(r => {
                    let curr = CURRENCIES[r[0]], cost = max>1?r[2](amt):r[2], a = (r[1]?curr.total:curr.amount).gte(cost)
                    if (afford) afford &&= a
                    return `<span ${a ? "" : `style="color: #800"`}>${format(cost,0)}</span>`+" "+(r[1]?lang_text("total")+" ":"")+curr.costName
                }).join(", ")
                el(el_id+"-button").className = el_classes({locked: !afford})
                el(el_id+"-button").textContent = lang_text('research-afford',afford)
            }
            el(el_id+"-status").innerHTML = `<div>${x.max > 1 ? `<b>${text[1]}:</b> ${amt.format(0)} / ${format(max,0)}` : lang_text('research-bought',bought)}</div>`
            + (x.effDesc ? `<div><b>${text[0]}:</b> ${x.effDesc(tmp.research_eff[i])}</div>` : "")
        }
    }
}

function updateResearchTemp() {
    for (let [i,x] of Object.entries(RESEARCH)) if (x.effect) tmp.research_eff[i] = x.effect(player.research[i])
}

function resetResearch(...x) {
    for (let i of x) {
        player.research[i] = E(0)
    }
}