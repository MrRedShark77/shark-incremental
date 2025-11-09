// This is main language file! It's English!

LANGUAGES.EN = {
    name: "English",
    inter_name: "English",
    icon: "lang-en",

    text: {
        // Currencies

        'fish-name': "Fish",
        'fish-costName': toTextStyle('Fish','fish'),

        'prestige-name': "Prestige Shards",
        'prestige-costName': toTextStyle('Prestige','prestige') + " Shards",

        'coral-name': "Coral",
        'coral-costName': toTextStyle('Coral','coral'),

        'ice-name': "Ice",
        'ice-costName': toTextStyle('Ice','ice'),

        'salt-name': "Salt",
        'salt-costName': toTextStyle('Salt','salt'),

        'snow-name': "Compressed Snow",
        'snow-costName': toTextStyle('Compressed Snow','snow'),

        'kelp-name': "Kelp",
        'kelp-costName': toTextStyle('Kelp','kelp'),

        'core-name': "Magmatic Fragments",
        'core-costName': toTextStyle('Magmatic','core') + ' Fragments',

        'humanoid-name': "Humanoid Sharks",
        'humanoid-costName': toTextStyle('Humanoid','humanoid') + ' Sharks',

        'remnants-name': "Remnants",
        'remnants-costName': toTextStyle('Remnants','black-hole'),

        'dark-matter-name': "Dark Matter",
        'dark-matter-costName': toTextStyle('Dark Matter','black-hole'),

        'observ-name': "Observatories",
        'observ-costName': toTextStyle('Observatories','observ'),

        'reserv-name': "Reservatories",
        'reserv-costName': toTextStyle('Reservatories','reserv'),

        'traject-name': "Trajectories",
        'traject-costName': toTextStyle('Trajectories','traject'),

        'hadron-name': "Fundamental Particles",
        'hadron-costName': toTextStyle('Fundamental Particles','hadron'),

        'full-shark-level': toTextStyle('Shark','shark') + ' Level',
        'full-shark-rank': toTextStyle('Shark','shark') + ' Rank',

        'sharkoid-faith': toTextStyle('Sharkoid Faith','humanoid'),

        'curr-top-0-req': x => `Reach <b>${format(x)}</b> total ${toTextStyle('Fish','fish')}`, 
        'curr-top-0-reset': x => `Prestige for <b>${x.format(0)}</b> ${toTextStyle('Prestige','prestige')} Shards`,

        'curr-top-1-req': x => `Reach <b>${format(x)}</b> total ${toTextStyle('Prestige','prestige')} Shards`, 
        'curr-top-1-reset': x => `Enter the core for <b>${x.format(0)}</b> ${toTextStyle('Magmatic','core')} Fragments`,

        'curr-top-2-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Fish','fish')}`, 
        'curr-top-2-reset': (x,next) => `Evolve your ${toTextStyle('Sharks','shark')} into <b>${format(x,0)}</b> ${toTextStyle('Humanoid','humanoid')} Sharks (Next at <b>${format(next)}</b> ${toTextStyle('Fish','fish')})`,

        'curr-top-3-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Fish','fish')} & <b>8</b> ${toTextStyle('Black Holes','black-hole')}`, 
        'curr-top-3-reset': x => `Sacrifice your ${toTextStyle('Sharks','shark')} for <b>${format(x,0)}</b> ${toTextStyle('Dark Matter','black-hole')}`,

        'curr-top-4-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Observatories','observ')}`, 
        'curr-top-4-reset': x => `Reserve for <b>${format(x,0)}</b> ${toTextStyle('Reservatories','reserv')}`,

        'curr-top-5-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Reservatories','reserv')}`, 
        'curr-top-5-reset': x => `Traject for <b>${format(x,0)}</b> ${toTextStyle('Trajectories','traject')}`,

        'curr-top-6-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Fish','fish')}`, 
        'curr-top-6-reset': (x,next) => `Hadronize for <b>${format(x,0)}</b> ${toTextStyle('Fundamental Particles','hadron')} (Next at <b>${format(next)}</b> ${toTextStyle('Fish','fish')})`,
        
        'radioactive-name': toTextStyle('Radiation '+icon("radioactive"),'core'),

        // Tabs

        'tab-shark': toTextStyle('Shark','shark'),
        'tab-options': "Options",
        'tab-scalings': "Scalings",
        'tab-auto': "Automation",
        'tab-research': toTextStyle('Research','prestige'),
        'tab-explore': "Exploration",
        'tab-space-base': toTextStyle('Space Base','observ'),

        'tab-core': toTextStyle('Core','core'),
        'tab-core-reactor': toTextStyle('Core','core')+" Reactor",
        'tab-core-radiation': toTextStyle('Core','core')+" Radiation",
        'tab-core-assembler': toTextStyle('Core','core')+" Assembler",

        'tab-evolution': toTextStyle('Evolution','humanoid'),
        'tab-shark-rank': toTextStyle('Shark','shark') + " Rank",
        'tab-evolution-tree': toTextStyle('Evolution','humanoid') + " Tree",
        'tab-evolution-goal': toTextStyle('Evolution','humanoid') + " Goals",
        'tab-cultivation': "Cultivation",
        'tab-forge': "Forge",
        'tab-particle-accel': "Particle Accelerator",

        'tab-singularity': toTextStyle('Singularity','black-hole'),
        'tab-black-hole': toTextStyle('Black Hole','black-hole'),
        'tab-singularity-milestones': toTextStyle('Singularity','black-hole') + " Milestones",
        'tab-solar-system': "Solar System",
        'tab-constellation': toTextStyle('Constellation','star'),

        'tab-hadron': toTextStyle('Hadronize','hadron'),
        'tab-hadron-su': "Starter Upgrades",
        'tab-shark-tier': toTextStyle('Shark','shark') + " Tier",
        'tab-nucleobase': "Nucleobases",
        'tab-gal-explore': "Galactic Exploration",
        'tab-dna': "DNA",

        'tab-shark-upgs': toTextStyle('Shark','shark') + " Upgrades",

        // Elements

        'fish-div': `Your ${toTextStyle('Shark','shark')} has eaten <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> fish.`,
        'shark-stats': `${toTextStyle('Shark','shark')} Stats<br>Level: <h4 id="shark-level">???</h4><br>Rank: <h4 id="shark-tier">???</h4> <span id="shark-next-rank"></span>`,

        'shark-elo-div': `Your ${toTextStyle('Shark','shark')} ELO is <h3>${toTextStyle('0','humanoid','shark-elo')}</h3>.`,
        'shark-rank-div': `Your ${toTextStyle('Shark','shark')} Rank is <h3 id="shark-rank">0</h3>.`,
        'shark-rank-req-div': `The next rank requires ${toTextStyle('Shark','shark')} ELO <h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4>.`,
        'shark-rank-note': `Note: Shark Rank gets reset when you trigger an Evolution reset.`,

        'shark-iq-div': `Your ${toTextStyle('Shark','shark')} IQ is <h3>${toTextStyle('0','hadron','shark-iq')}</h3>.`,
        'shark-tier-div': `Your ${toTextStyle('Shark','shark')} Tier is <h3 id="shark-tier2">0</h3>.`,
        'shark-tier-req-div': `The next tier requires ${toTextStyle('Shark','shark')} IQ <h4>${toTextStyle('0','hadron','shark-tier-req')}</h4>.`,
        'shark-tier-note': `Note: Shark Tier gets reset when you trigger a Hadronize reset.`,

        'option-title-1': "Main Options",
        'option-title-2': "Notations",
        'option-title-3': "Confirmations",
        'option-title-4': "Languages",

        'offline-speed': "Speed up Offline time",
        'offline-done': "Done",

        'radioactive-div': `The ${toTextStyle('Core','core')} has produced <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('Core','core'), rf = toTextStyle('Fish '+icon("radioactive"),'fish')
            return `
            <summary>The ${c} Radiation Experiment</summary>
            Experimenting with the core radiation forces a ${toTextStyle('Core','core')} reset.
            While in the experiment, core reactors don't work. ${toTextStyle('Fish','fish')}, ${toTextStyle('Prestige','prestige')} shards, and the first four oceans' resources are cube-rooted.
            The experiment forces your ${toTextStyle('Shark','shark')} to eat radioactive ${rf}.<br>
            Upgrade with radioactive ${rf} to generate more ${toTextStyle('Radiation '+icon("radioactive"),'core')}, which gives you additional boosts.
            `
        },
        'radioboost-div': `You have <h3 id="radioactive-boost">0</h3> radioactive boosts.`,

        'core-temp-div': `The ${toTextStyle('Core','core')}'s temperature is <h3>${toTextStyle('6,150','core','core-temperature')}</h3>, which makes radioactive boosts <h4 id="core-temp-effect">100%</h4> effective.`,
        'core-temp-after-div': `(The ${toTextStyle('Core','core')}'s temperature will be <span id="core-temp-after">???</span> after a ${toTextStyle('Core','core')} reset)`,

        'sharkoid-faith-div': `You have <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('Sharkoid Faith','humanoid')}.`,
        'respec-evolution-tree': `Respec ${toTextStyle('Evolution','humanoid')} Tree`,
        'respec-evolution-tree-2': `Respec charged-only ${toTextStyle('Evolution','humanoid')} Tree`,
        'export-evolution-tree': `Export ${toTextStyle('Evolution','humanoid')} Tree`,
        'import-evolution-tree': `Import ${toTextStyle('Evolution','humanoid')} Tree`,
        'evolution-tree-preset': `${toTextStyle('Evolution','humanoid')} Tree Presets`,

        'rerun-evolution': `Re-run ${toTextStyle('Evolution','humanoid')}, respecing its Tree`,

        'mining-text': `Mining... <b id="mining-progress">???</b> | Damage <b id="mining-damage">???</b> | ${toTextStyle(`Mining Fortune <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'super-mining-text': `Super Damage <b id="super-mining-damage">???</b> | ${toColoredText(`Super Mining Fortune <span id="super-mining-fortune">0</span>`+icon("luck"),'orange')}`,
        'mining-tier-div': `Mining Tier: <h3 id="mining-tier">0</h3>`,
        'mining-ascend-div': `Mining Ascension: <h3 id="mining-ascend">0</h3>`,
        'mining-note': `Note: If you're stuck while mining ore with high health (taking a long time), you should reload the page.`,
        'mining-tier-undo-btn': `Decrease Mining Tier by 1 if you're stuck while mining.`,
        'mining-ascend-undo-btn': `Decrease Mining Ascension by 1 if you're stuck while mining.`,

        'black-hole-button': `Because you maxed out all the particle accelerators, you need to form a black hole in case you enter another universe.`,
        'black-hole-html': `You have formed <h2>${toTextStyle('0','black-hole','black-hole-amount')}</h2> black hole, which reduces the exponents of fish & prestige shards and the multiplier of magmatic fragments by <h3 id="black-hole-effect">^???</h3>.`,

        'remnant-html': `You have <h3>${toTextStyle('0','black-hole','remnant-amount')}</h3> <span id="remnant-gain"></span> remnants.`,

        'rocket-part-div': `You have created <h3 id="total-rocket-part">0</h3> total Rocket Parts.`,
        'observ-div': `You have <h3>${toTextStyle('0','observ','observ-amount')}</h3> <span id="observ-gain"></span> observatories. (<h3>${toTextStyle('0','observ','observ-total')}</h3> total)`,
        'reserv-div': `You have <h3>${toTextStyle('0','reserv','reserv-amount')}</h3> <span id="reserv-gain"></span> reservatories.`,
        'traject-div': `You have <h3>${toTextStyle('0','traject','traject-amount')}</h3> <span id="traject-gain"></span> trajectories.`,
        'experiment-div': `Your ${toTextStyle('Experiment','experiment')} Tier is <h3 id="experiment-tier">0</h3>.`,

        'bh-tier-div': `Your Black Hole Tier is <h3>${toTextStyle('0','black-hole','bh-tier')}</h3>.`,
        'bh-tier-button': `Reach the requirement to upgrade your${toTextStyle('Black Hole','black-hole')} tier for a powerful reward.`,

        'fundamental-amount-div': `You have <h3>${toTextStyle('0','hadron','total-fundamental')}</h3> total fundamental particles, which increases the cap of ${toTextStyle('Fish','fish')} to <h3 id="fundamental-effect">???</h3>.`,
        'starter-upg-note': `Note: The cost is <b>doubled</b> for each upgrade bought. The first upgrade is <b>RECOMMENDED</b> to buy after the first reset.`,

        "dna-descirption": `The length of your ${toTextStyle('Shark','shark')} <b>DNA (Deoxyribonucleic Acid)</b> is <h3 id="dna-length">???</h3> (<span id="dna-length-gain">???</span>) nanometers.<br>
        Increases the tetration of ${toTextStyle('Fish','fish')} by <h4 id="dna-boost1">???</h4> and strengthens the first 4 Nucleobases by <h4 id="dna-boost2">???</h4>.`,
        "dna-button": `Force a ${toTextStyle('Hadronize','hadron')} reset to expand DNA.`,
        'dna-note': `Note: Extending DNA resets everything ${toTextStyle('Hadronize','hadron')} does, as well as ${toTextStyle('Fundamental Particles','hadron')} and Nucleobases.`,

        'shark-worth': bool => bool ? `Absorb ${toColoredText('absolutely everything','red')} to transform your ${toTextStyle('Shark','shark')} into the <h3>${toTextStyle('Omnipotence','omni')}</h3>...` : `Your ${toTextStyle('Shark','shark')} is worthless, sorry...`,
        
        'research-all-btn': "Attempt to purchase all possible research.",

        // Upgrades

        'su-s1-req': "Level 3",
        'su-s1-name': 'Shark Strength',
        'su-s1-desc': `Increases ${toTextStyle('Fish','fish')} eaten by <b>+1</b> per level.`,

        'su-s2-req': "Level 7",
        'su-s2-name': 'Shark Agility',
        'su-s2-desc': `Increases the base of ${toTextStyle('Shark','shark')} Level's ${toTextStyle('Fish','fish')} bonus by <b>+1</b> per level.`,

        'su-s3-req': "Level 15",
        'su-s3-name': 'Shark Teeth',
        'su-s3-desc': `Increases the exponent of 1st ${toTextStyle('Shark','shark')} Upgrade by <b>+50%</b> per level.`,

        'su-s4-req': "Level 38",
        'su-s4-name': 'Shark Exponent',
        'su-s4-desc': `Increases the exponent of ${toTextStyle('Fish','fish')} by <b>+1%</b> per level.`,

        'su-s5-req': "Level 640",
        'su-s5-name': 'Radioactive Shark',
        'su-s5-desc': `Increase ${toTextStyle('Radiation '+icon("radioactive"),'core')} production by <b>x2</b> per level.`,

        'su-p1-req': "First Prestige",
        'su-p1-name': 'Super Shark Strength',
        'su-p1-desc': `Increases ${toTextStyle('Fish','fish')} eaten by <b>×3</b> per level.`,

        'su-p2-req': "First Prestige",
        'su-p2-name': 'Prestige Booster',
        'su-p2-desc': `Increases ${toTextStyle('Fish','fish')} eaten by <b>×lg(${toTextStyle('Fish','fish')})</b> per level.`,

        'su-p3-name': 'Scaled Shark',
        'su-p3-desc': `Delays the first ${toTextStyle('Shark','shark')} Level scaling by <b>+1</b> per level.`,

        'su-m1-name': 'Mining Damage',
        'su-m1-desc': `Increases the mining damage by <b>×2</b> per level.`,

        'su-m2-name': 'Mining Speed',
        'su-m2-desc': `Increases the mining speed by <b>+10%</b> per level.`,

        'su-m3-req': 'Mining Tier 3',
        'su-m3-name': 'Compressed Stone',
        'su-m3-desc': `Increases <b>Stone</b> mined by <b>×2</b> per level.`,

        'su-m4-req': 'Mining Tier 6',
        'su-m4-name': 'Mining Fortune',
        'su-m4-desc': `Increases the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+5</b> per level.`,

        'su-m5-req': 'Mining Tier 9',
        'su-m5-name': 'Basic Ores',
        'su-m5-desc': `Increases the first 4 ores mined by <b>×2</b> per level.`,

        'su-m6-req': 'Mining Ascension 1',
        'su-m6-name': 'Super Mining Damage',
        'su-m6-desc': `Increases the super mining damage by <b>×2</b> per level.`,

        'su-m7-req': 'Mining Ascension 3',
        'su-m7-name': 'Super Mining Speed',
        'su-m7-desc': `Increases the normal and super mining speed by <b>+25%</b> per level.`,

        'su-m8-req': 'Mining Ascension 6',
        'su-m8-name': 'Compressed Radium',
        'su-m8-desc': `Increases <b>Radium-223</b> mined by <b>×2</b> per level.`,

        'su-m9-req': 'Mining Ascension 12',
        'su-m9-name': 'Super Mining Fortune',
        'su-m9-desc': `Increases the ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} by <b>+5</b> per level.`,

        // Researches

        'research-p1-name': "Prestigious Agility",
        'research-p1-desc': `'Shark Agility' now affects the base of ${toTextStyle("Shark",'shark')} Level's ${toTextStyle("Prestige",'prestige')} Shard bonus at a reduced rate.`,

        'research-p2-name': "Shark Upgrade EL",
        'research-p2-desc': `${toTextStyle("Shark",'shark')} ${toTextStyle("Fish",'fish')} upgrades no longer spend ${toTextStyle("Fish",'fish')}.`,

        'research-p3-name': "Upgraded Shark Level",
        'research-p3-desc': `Reduce the base of ${toTextStyle("Shark",'shark')} level's requirement by <b>1</b>,
        but force a ${toTextStyle("Prestige",'prestige')} reset, resetting your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades.
        Unlock new ${toTextStyle("Shark",'shark')} upgrades.`,

        'research-p4-name': "Better Prestige",
        'research-p4-desc': `Slightly improve the formula of ${toTextStyle("Prestige",'prestige')} shards gain.`,

        'research-p5-name': "Mega Strength",
        'research-p5-desc': `'Super Shark Strength' is <b>1%</b> stronger for every ${toTextStyle("Shark",'shark')} Level, starting at 100.`,

        'research-p6-name': "Super Scaled Shark",
        'research-p6-desc': `'Scaled Shark' is <b>twice</b> as strong.`,

        'research-p7-name': "Better Resources I",
        'research-p7-desc': `${toTextStyle("Coral",'coral')} and ${toTextStyle("Ice",'ice')}' effect is better.`,

        'research-p8-name': "Further Upgraded Shark Level",
        'research-p8-desc': `Further reduce the base of ${toTextStyle("Shark",'shark')} level's requirement by 1.`,

        'research-p9-name': "Cheap Prestige Booster",
        'research-p9-desc': `Reduce the dilation scaling of 'Prestige Booster' by <b>-0.05</b> per level.`,

        'research-e1-name': "Ocean Synergism I",
        'research-e1-desc': `${toTextStyle("Salt",'salt')} boosts ${toTextStyle("Corals",'coral')} generated.`,

        'research-e2-name': "Ocean Synergism II",
        'research-e2-desc': `${toTextStyle("Compressed Snow",'snow')} boosts ${toTextStyle("Ice",'ice')} generated.`,

        'research-e3-name': "Exploration Automation",
        'research-e3-desc': `Automatically gain base of the first <b>X</b> oceans without exploring.`,

        'research-e4-name': "Kelp Oxidation",
        'research-e4-desc': `<b>Oxygen</b> now affects ${toTextStyle("Kelp",'kelp')} production at a reduced rate.`,

        'research-e5-name': "Exploration Automation MK2",
        'research-e5-desc': `Automatically gain base in the Indian Ocean without exploring. Improve ${toTextStyle('Kelp','kelp')}'s effect again.`,

        'research-e6-name': "Sunda Trench",
        'research-e6-desc': `The <b>Indian Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`,

        'research-c1-name': "Research C-Keeper",
        'research-c1-desc': `Keep ${toTextStyle("Research",'prestige')} when entering the ${toTextStyle('Core','core')}.`,

        'research-c2-name': "Exploration C-Keeper",
        'research-c2-desc': `Keep first <b>X</b> oceans unlocked and their depth on entering the ${toTextStyle('Core','core')}.`,

        'research-c3-name': "Neon's Affection I",
        'research-c3-desc': `<b>Neon</b> now affects 'Shark Teeth', 'Shark Exponent', and 'Scaled Shark'.`,

        'research-c4-name': "Better Nickel",
        'research-c4-desc': `<b>Nickel</b>'s effect is <b>twice</b> as powerful.`,

        'research-c5-name': "Additional Core Boost",
        'research-c5-desc': `The core radiation's bonus reactors now affect the core reactor's boost to ${toTextStyle('Fish','fish')} at a reduced rate.`,

        'research-c6-name': "Radiation Reduction",
        'research-c6-desc': `${toTextStyle('Magmatic','core')} fragments reduce radiation's limit at a reduced rate.`,

        'research-c7-name': "Greater Shark Teeth",
        'research-c7-desc': `The effect of 'Shark Teeth' is raised to the <b>2.5th</b> power.`,

        'research-c8-name': "Better Iron & Neon",
        'research-c8-desc': `<b>Iron</b>'s effect is twice as powerful, and <b>Iron</b>'s & <b>Neon</b>'s requirements are reduced drastically.`,

        'research-c9-name': "Better Core Boost",
        'research-c9-desc': `Improve the core reactor's boost to ${toTextStyle('Fish','fish')}.`,

        'research-c10-name': "Super-Scaled Shark",
        'research-c10-desc': `'Scaled Shark' now delays the second ${toTextStyle('Shark','shark')} Level scaling at a reduced rate.`,

        'research-c11-name': "Better Radiation Reduction",
        'research-c11-desc': `'Radiation Reduction' is stronger slightly.`,

        'research-c12-name': "Mega Radiation Reduction",
        'research-c12-desc': `Drastically reduce radiation's limit.`,

        'research-c13-name': "Super Radioactive Shark",
        'research-c13-desc': `'Radioactive Shark' is <b>50%</b> stronger.`,

        'research-c14-name': "Exponential Core Boost",
        'research-c14-desc': `Core reactors now provide an exponential boost to ${toTextStyle('Fish','fish')}.`,

        'research-c15-name': "Self-Radiation",
        'research-c15-desc': `You can buy a radiation upgrade, costing regular ${toTextStyle('Fish','fish')} instead of radioactive ${toTextStyle('Fish '+icon('radioactive'),'fish')}, but at a <b>^0.0001</b> rate. Then increase the rate by <b>×10</b> per level.`,

        'research-m1-name': "Magmatic Fortune",
        'research-m1-desc': `Increase the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+5</b> per level.`,

        'research-m2-name': "Hyper-Scaled Shark",
        'research-m2-desc': `The third ${toTextStyle("Shark",'shark')} level scaling is delayed by <b>+1000</b>.`,

        'research-m3-name': "Scaled Radioactive Boost",
        'research-m3-desc': `Delay the first 2 radioactive boost scalings by <b>+1</b> per level.`,

        'research-m4-name': "Better Mining Tier",
        'research-m4-desc': `The second, third, fourth, and fifth effects of mining tier are <b>+25%</b> stronger per level.`,

        'research-f1-name': "Basic Rank Exponent",
        'research-f1-desc': `Increase the exponent of ${toTextStyle("Shark",'shark')} ELO by <b>+25%</b> per level.`,

        'research-f2-name': "More Sharkoid Faith",
        'research-f2-desc': `Gain more ${toTextStyle('Sharkoid Faith','humanoid')} from ${toTextStyle('Fish','fish')} & ${toTextStyle("Prestige",'prestige')} shards.`,

        'research-f3-name': "Scaled Core Reactors",
        'research-f3-desc': `Delay the first scaling of the core reactors by <b>+1</b> per level.`,

        'research-f4-name': "Less Core Temperature Softcap",
        'research-f4-desc': `The softcap of the ${toTextStyle('Core','core')}'s temperature is weaker.`,

        'research-f5-name': "Vibranium Boost",
        'research-f5-desc': `<b>Vibranium</b> boosts mining damage at a reduced rate.`,

        'research-f6-name': "Universal Mining Tier",
        'research-f6-desc': `The first 9 ores are boosted by the mining tier.`,

        'research-f7-name': "Better Shark ELO",
        'research-f7-desc': `The base of humanoid sharks in the formula for ${toTextStyle("Shark",'shark')} ELO is improved from <b>x</b> to <b>2<sup>x</sup>-1</b>.`,

        'research-f8-name': "Weak Ore Health",
        'research-f8-desc': `The first effect of mining tier is reduced.`,

        'research-s1-name': "Remnant Fish",
        'research-s1-desc': `${toTextStyle("Fish",'fish')} boosts ${toTextStyle("Remnants",'black-hole')} generation at a reduced rate.`,

        'research-s2-name': "Better Rank Boost",
        'research-s2-desc': `Improve ${toTextStyle("Shark",'shark')} rank boost to ${toTextStyle('Prestige','prestige')} shards.`,

        'research-s3-name': "Pure Oceans",
        'research-s3-desc': `The <b>Pacific & Arctic oceans</b> provide an exponential boost, and improve the <b>Atlantic & Southern oceans</b>.`,

        'all-research': {
            's4': ["Pure Oceans II",`The <b>Indian Ocean</b> provides an exponential boost at a reduced rate.`],
            's5': ["Pure Oceans III",`The first <b>N</b> Oceans' depth progress reductions are removed until the <b>Indian Ocean</b>. The 6th level improves the 10th radioactive bonus.`],

            'dm1': ["Starting Black Hole",`Start with a <b>+1</b> ${toTextStyle("Black Hole",'black-hole')} formed on sacrifice per level. Every starting black hole delays reduction.`],
            'dm2': ["Better Remnant I",`Improve the ${toTextStyle("Remnant",'black-hole')} upgrade "Welcome Again", it affects ${toTextStyle("Prestige",'prestige')} shards.`],
            'dm3': ["Better Remnant II",`Improve the ${toTextStyle("Remnant",'black-hole')} upgrade "Shark Master".`],
            'dm4': ["Better Remnant III",`Improve the ${toTextStyle("Shark",'shark')} level & rank boosts for ${toTextStyle("Remnant",'black-hole')} generation.`],
            'dm5': ["Softcapless Core Temperature",`Remove the softcap of the ${toTextStyle('Core','core')}'s temperature.`],
            'dm6': ["Better Radiation Generator",`${toTextStyle('Radiation '+icon('radioactive'),'core')} generator raises itself to the exponent at a reduced rate.`],
            'dm7': ["Dark Remnants",`Total ${toTextStyle("Dark Matter",'black-hole')} boosts ${toTextStyle("Remnant",'black-hole')} generation.`],

            'e7': ["Sunda Trench MK2",`Improve the <b>Indian Ocean</b>’s depth progress significantly.`],

            'm5': ["Shark Rank 'onto' Super Mining",`${toTextStyle("Shark",'shark')} Rank boost to mining damage affects super mining damage at a reduced rate.`],
            'm6': ["The Uranium Shark",`'Shark Exponent' is overpowered.`],
            'm7': ["Double Remnant Scaling",`The first scaling of ${toTextStyle("Remnant",'black-hole')} upgrades is delayed by <b>+100</b>.`],
            'm8': ["Ultimate Radiation",`The 14th radioactive boost’s effect is improved.`],
            'm9': [`No Radiation Overflow`,`The softcap of ${toTextStyle('Radiation '+icon('radioactive'),'core')} production is removed.`],
            'm10': [`Auto-Core Reactor MK2`,`Auto-${toTextStyle('Core','core')} Reactor now applies to the third row of ${toTextStyle('Core','core')} reactors.`],
            'm11': [`Auto-Mining Upgrade MK2`,`Auto-${toTextStyle('Shark','shark')} Mining Upgrade now applies to the rest of ${toTextStyle('Shark','shark')} mining upgrades.`],

            'o1': [`Observatory Automation`,`Automates all ${toTextStyle('Observatory','observ')} upgrades without spending currencies. <i>This research doesn’t get reset.</i>`],
            'o2': [`Universal Exchanger Affection`,`The “Universal Exchanger” ${toTextStyle('Reservatory','reserv')} upgrade affects the base of “The Space”, “Space Fish”, and “Space Prestige” ${toTextStyle('Observatory','observ')} upgrades.`],
            'o3': [`Universal Exchanger Affection II`,`The “Universal Exchanger” ${toTextStyle('Reservatory','reserv')} upgrade affects the base of the “The Relative”, “Observable”, “Space Fish II”, and “Space Prestige II” ${toTextStyle('Reservatory','reserv')} upgrades.`],
            
            'r1': [`Reservatory Automation`,`Automates all ${toTextStyle('Reservatory','reserv')} upgrades without spending currencies. <i>This research doesn’t get reset.</i>`],
            'r2': [`Reservatory Improvement`,`Improves ${toTextStyle('Reservatory','reserv')} gain formula even better.`],
            'r3': [`Reservatory Generation`,`Generates <b>100%</b> of your ${toTextStyle('Reservatories','reserv')} gained on reset. <i>This research doesn’t get reset.</i>`],
        
            't1': [`Trajectory Automation`,`Automates all ${toTextStyle('Trajectory','traject')} upgrades without spending currencies. <i>This research doesn’t get reset.</i>`],
            't2': [`Trajectory Improvement`,`Improves ${toTextStyle('Trajectory','traject')} gain formula even better.`],
            't3': [`Trajectory Generation`,`Generates <b>100%</b> of your ${toTextStyle('Trajectories','traject')} gained on reset. <i>This research doesn’t get reset.</i>`],

            'h1': [`IQ Exchanger`,`${toTextStyle("Shark",'shark')} Level multiplies ${toTextStyle("Shark",'shark')} ${toTextStyle("IQ",'hadron')} super-logarithmically.`],
            'h2': [`Hadron Forge Keeper`, `Always keep forges on ${toTextStyle("Hadronize",'hadron')}.`],
            'h3': [`Scaled Black Hole`, `Total ${toTextStyle("Fundamental Particles",'hadron')} delay the scaling of ${toTextStyle("Black Hole",'black-hole')} tier logarithmically.`],
            'h4': [`Better Fish Cap`, `Improve the effect of total ${toTextStyle("Fundamental Particles",'hadron')}.`],
            'h5': [`Black Hole Equivalent`, `Automatically tier ${toTextStyle("Black Hole",'black-hole')} up without triggering a reset.`],
            'h6': [`Qubit IQ`, `${toTextStyle("Fish",'fish')} multiplies Shark ${toTextStyle("Shark",'shark')} ${toTextStyle("IQ",'hadron')}. Improve the research <b>h1</b>.`],
            'h7': [`First Scaling Sacrifice`, `Remove the scaling of ${toTextStyle("Remnant",'black-hole')} upgrades. Unlock more ${toTextStyle("Remnant",'black-hole')} upgrades.`],
            'h8': [`Even Better Fish Cap`, `Improve the effect of total ${toTextStyle("Fundamental Particles",'hadron')} even more.`],
            'h9': [`Hadronic Generation`, `Passively generates <b>100%</b> of your ${toTextStyle("Fundamental Particles",'hadron')} gained on reset.`],
            'h10': [`Inflation is Nonsense`, `Remove all scalings of radioactive boosts.`],
            'h11': [`Rank-into-rank`, `Remove the first 3 scalings of ${toTextStyle("Shark",'shark')} rank.`],
            'h12': [`Better Constellation`, `Improve ${toTextStyle("Black Hole",'black-hole')} tier’s boost to ${toTextStyle("Constellation",'star')} resources.`],
            'h13': [`Fish Equality`, `${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle('Magmatic','core')} fragments gain is now equal to ${toTextStyle("Fish",'fish')} gain.`],
            'h14': [`Level & Rank, goodbye cruel world!`, `All scalings of ${toTextStyle("Shark",'shark')} Level & Rank are removed.`],
            'h15': [`Better Nucleobase III`, `The sixth boost of adenine is improved.`],
            'h16': [`Galactic Exploration Automation`, `Automatically gain score of the first 6 galactic oceans without exploring.`],
            'h17': [`Holy DNA`, `Total ${toTextStyle("Fundamental Particles",'hadron')} increase the length of DNA at a reduced rate.`],
            'h18': [`Totally fish DNA`, `${toTextStyle("Fish",'fish')} increases the length of DNA at a reduced rate.`],
            'h19': [`EMPOWERED ADENINE`, `Improve the fourth boost of adenine significantly... <i>It’s almost coming to the end...</i>`],
            'h20': [`EMPOWERED GUANINE`, `The fourth boost of guanine now affects the fifth shark tier bonus... <i>Please stop doing this...</i>`],
            'h21': [`EMPOWERED DNA`, `DNA will expand itself... ${toColoredText(`CAUTION: SELF-EXPANDING DNA CAUSES A SERIOUS INSTABILITY IN YOUR SHARK TO MAKE IT UNABLE TO EAT FISH AND ABLE TO CONVERT THEM INTO ANTIMATTER FISH! THERE IS NO GOING BACK!`,'red')} No?`],

            'ge1': [`Galactic Ocean Affection`,`Every galactic ocean’s resource is increased by <b>25%</b> compounding per square-rooted ${toTextStyle("Shark",'shark')} tier.`],
            'ge2': [`Better Nucleobase`,`The fifth boost of guanine is improved.`],
            'ge3': [`Post-Tetration Prestige`,`After the nerf, ${toTextStyle('Prestige','prestige')} shards are raised by ${toTextStyle('Bioluminescent Matter','gal-explore-1')} while exploring in Abyssal ocean.`],
            'ge4': [`Overpowered Remnant`,`All ${toTextStyle("Remnant",'black-hole')} upgrades are <b>+10% exponentially</b> stronger per level.`],
            'ge5': [`Better Blue Algae`,`Improve the ${toTextStyle('Blue Algae','gal-explore-0')}’s effect.`],
            'ge6': [`ELO Exponent^2`,`${toTextStyle('Humanoid','humanoid')} sharks boost the exponent of ${toTextStyle('Shark','shark')} ${toTextStyle('ELO','humanoid')} to the exponent.`],
            'ge7': [`Better Score Boost`,`Improve the galactic ocean's score boost to its resource.`],
            'ge8': [`Scaled Tier`,`Delay the scaling of ${toTextStyle('Shark','shark')} tier by <b>+5</b>.`],
            'ge9': [`Better Galactic Upgrade`,`Increase the base of galactic ocean’s upgrade by <b>+1</b>.`],
            'ge10': [`Better Gray Plankton`,`Improve the ${toTextStyle('Gray Plankton','gal-explore-2')}’s effect.`],
            'ge11': [`Better Nucleobase II`,`The second boost of cytosine and guanine is improved.`],
            'ge12': [`Useless Scalings`,`Remove the first 2 scalings of black hole tier.`],

            't1': ['Scaled Omni-Shark Strength', `Delays the scaling of 'Omni-Shark Strength' by <b>+15</b> per level.`],
            't2': ['Omni-Shark Agility Affection', `'Omni-Shark Agility' affects the base of 'Super Omni-Shark Strength' and 'Omni-Shark Transcendence' at a 10% rate.`],
            't3': ['Better Transcendence', `Slightly improve the formula of ${toTextStyle("Transcendental",'transcend')} shards gain.`],
            't4': ['Better Transcendental Condenser', `Condensed ${toTextStyle("Transcendental",'transcend')} shards are improved slightly.`],

            'u1': ['Better Undead Upgrades', `The effect of 'Undead Antimatter' & 'Undead Transcendence' is squared.`],
            'u2': ['Better Undead Yield', `The cost increment of 'Undead Yield' is reduced. <i>This research persists through ${toTextStyle('Shark Omnipotence','omni')}.</i>`],
            'u3': ['Undead Affection', `Game speed now affects the catch of ${toTextStyle('Undead Essence','undead')}.`],
            'u4': ['Better Undead Condenser', `Condensed ${toTextStyle('Undead Essence','undead')} is improved significantly only for ${toTextStyle('Undead Essence','undead')}.`],

            're1': ['Research R-Keeper',`Keep ${toTextStyle('Research','prestige')} on ${toTextStyle('Reaction','atom')}.`],

            'd1': ['Research R-Keeper+',`Keep ${toTextStyle('Research','prestige')} on ${toTextStyle('Runeification','rune')}.`],
            'd2': ['Better Omni-Shark Exponent', `The formula for ‘Omni-Shark Exponent’ is improved.`],
            'd3': ['Condenser Keeper I', `Start with <b>^0.75</b> of the exponent^2 of the best condensed ${toTextStyle("Transcendental",'transcend')} shards you ever condensed on ${toTextStyle('Runeification','rune')}.`],
            'd4': ['Condenser Keeper II', `Start with the best condensed ${toTextStyle('Undead Essence','undead')} you ever condensed on ${toTextStyle('Runeification','rune')}.`],
            'd5': ['Better Rune Fragments', `Improve ${toTextStyle('Rune','rune')} fragments gain.`],

            'rc1': ['Bonus Runes', `Every <b>100%</b> of any ${toTextStyle('Rune','rune')} upgrade's effect gives one bonus ${toTextStyle('Rune','rune')} which is affected by it.`],
            'rc2': ['Faster Rune Upgrades', `The first 3 ${toTextStyle('Rune','rune')} upgrades’ scaling starts <b>×2</b> later.`],
            'rc3': ['Less Punishment', `The second ${toTextStyle('God','god')}’s punishment is weaker.`],
            'rc4': ['Better Rune Upgrades', `The first 3 ${toTextStyle('Rune','rune')} upgrades are improved.`],
            'rc5': ['Rune Continuum', `You will no longer be able to place any ${toTextStyle('Runes','rune')}, instead ${toTextStyle('Runes','rune')}' effect is calculated based on the fourth ${toTextStyle('Rune','rune')} upgrade. Automate ${toTextStyle('Rune','rune')} upgrades.`],
        },

        // Exploration

        'explore-while': `While exploring`,
        'explore-inside': (a,b,c)=>`Base ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Reach ${format(c,0)} best ${toTextStyle("Fish",'fish')}.`,
        'explore-outside': x=>`Your current base is ${x.format()}/s.<br>Explore the ocean!`,

        'explore-next': x=>`New Ocean at ${toTextStyle("Shark",'shark')} Level <h3>${format(x,0)}</h3>.`,

        'explore-doubler-1': x=>`Double ${x} gained.`,
        'explore-doubler-2': `Double depth progression gain.`,

        'explore-0-name': `Pacific Ocean`,
        'explore-0-desc': `${toTextStyle('Fish','fish')} gain is rooted by 2.`,
        'explore-0-milestone': [
            `Raise ${toTextStyle('Prestige','prestige')} shards gained to the 1.05th power.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `Leveling ${toTextStyle('Shark','shark')} will no longer spend ${toTextStyle('Fish','fish')}.`,
            `Raise ${toTextStyle('Fish','fish')} eaten to the 1.05th power.`,
            `Unlock the ${toTextStyle('Core','core')}.`,
        ],

        'explore-1-name': `Arctic Ocean`,
        'explore-1-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. ${toTextStyle('Prestige','prestige')} Shards gain is rooted by 2.`,
        'explore-1-milestone': [
            `Unlock Auto-${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades will no longer spend ${toTextStyle('Prestige','prestige')} shards.`,
            `Passively generate 100% of ${toTextStyle('Prestige','prestige')} shards earned on ${toTextStyle('Prestige','prestige')}.`,
        ],

        'explore-2-name': `Atlantic Ocean`,
        'explore-2-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. ${toTextStyle('Shark','shark')} Level scales 10x as strong.` ,
        'explore-2-milestone': [
            `'Shark Teeth' and 'Shark Exponent' scalings are weaker slightly.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Shark','shark')} Level's first scaling starts +1 later per 500m of depth.`,
            `${toTextStyle("Salt",'salt')}'s effect is 50% more powerful.`,
        ],

        'explore-3-name': `Southern Ocean`,
        'explore-3-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. You cannot buy ${toTextStyle('Shark','shark')} ${toTextStyle('Fish','fish')} & ${toTextStyle('Prestige','prestige')} upgrades.`,
        'explore-3-milestone': [
            `Increase the base of exploration by 10x.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Compressed Snow','snow')}'s effect is 50% more powerful.`,
        ],

        'explore-4-name': `Indian Ocean`,
        'explore-4-desc': `You are trapped in the first four active oceans, and your ${toTextStyle('Fish','fish')} exponent is raised to the 0.75th power.`,
        'explore-4-milestone': [
            `Decrease radiation's limit by /1,000.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `Core reactors scale +5 later.`,
            `Improve ${toTextStyle('Kelp','kelp')}'s effect.`,
        ],

        // Core Reactor

        'core-0-name': `Iron`,
        'core-0-desc': `${toTextStyle("Fish",'fish')} raises itself based on <b>Iron</b>'s tier.`,

        'core-1-name': `Nickel`,
        'core-1-desc': `${toTextStyle("Prestige",'prestige')} shards raise their base based on <b>Nickel</b>'s tier.`,

        'core-2-name': `Oxygen`,
        'core-2-desc': `Product of the first four oceans' resources boosts their production based on <b>Oxygen</b>'s tier.`,

        'core-3-name': `Neon`,
        'core-3-desc': `${toTextStyle("Shark",'shark')} Level reduces its requirement based on <b>Neon</b>'s tier.`,

        'core-4-name': `Sulfur`,
        'core-4-desc': `${toTextStyle("Fish",'fish')} strengthens <b>Iron</b> based on <b>Sulfur</b>'s tier.`,

        'core-5-name': `Silicon`,
        'core-5-desc': `${toTextStyle("Prestige",'prestige')} shard strengthen <b>Nickel</b> based on <b>Silicon</b>'s tier.`,

        'core-6-name': `Nitrogen`,
        'core-6-desc': `${toTextStyle("Kelp",'kelp')} strengthens <b>Oxygen</b> based on <b>Nitrogen</b>'s tier.`,

        'core-7-name': `Helium`,
        'core-7-desc': `${toTextStyle("Shark",'shark')} Level strengthens <b>Neon</b> based on <b>Helium</b>'s tier.`,

        'core-8-name': `Magnesium`,
        'core-8-desc': `${toTextStyle("Fish",'fish')} raises itself to the exponent based on <b>Magnesium</b>'s tier.`,

        'core-9-name': `Sodium`,
        'core-9-desc': `${toTextStyle("Prestige",'prestige')} shards raise themselves to the exponent based on <b>Sodium</b>'s tier.`,

        'core-10-name': `Phosphor`,
        'core-10-desc': `${toTextStyle("Magmatic",'core')} fragments raise themselves based on <b>Phosphor</b>'s tier.`,

        'core-11-name': `Chromium`,
        'core-11-desc': `${toTextStyle("Humanoid",'humanoid')} shark increase the exponent of ${toTextStyle("Shark",'shark')} ELO based on <b>Chromium</b>'s tier.`,

        'core-bonus': x => `Product of core reactors will boost ${toTextStyle("Fish",'fish')} by <h4>${formatMult(x)}</h4>.`,

        'core-assembler-erase': `Erase Mode`,
        'core-assembler-choose': `You're choosing`,
        'core-assembler-building-stats': (s,p,m) => `Strength <b>${s}</b> | Placed <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Max buildings: ${mm} / ${m}<br>Require: ${format(x)} ${toTextStyle("Magmatic",'core')} fragments`, 
        'ca-building-base': b => `[Base: ${b}]`,
        'ca-building-temp': t => `Increase the core's temperature by ${t}.`,

        // Core Radiation

        'cr-start': x=>x?"Stop the experiment.":"Start the experiment.",

        'upgrade-cr': (gen,cost)=>`
        Upgrade ${toTextStyle('Radiation '+icon("radioactive"),'core')} production.<br>
        Producing <b>${format(gen,0)}</b> per second.<br>
        Cost: ${format(cost,0)} ${toTextStyle('Fish '+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`Reset ${toTextStyle('Radiation '+icon("radioactive"),'core')}, but increase its limit by <b>${formatMult(inc,0)}</b>, and upgrades radioactive boosts and sometimes adds new effects. You need to reach the limit to reset.`,

        'cr-boosts': [
            x=>`Provide <h4>+${format(x)}</h4> bonus core reactors on the first row.`,
            x=>`Boost ${toTextStyle('Magmatic','core')} fragments by <h4>${formatMult(x)}</h4>.`,
            x=>`The first four ${toTextStyle('Shark','shark')} ${toTextStyle('Fish','fish')} upgrades are <h4>${formatPercent(x.sub(1))}</h4> more powerful.`,
            x=>`Second ${toTextStyle('Shark','shark')} level scaling is delayed by <h4>+${format(x)}</h4>.`,
            x=>`Increase the base of ${toTextStyle('Shark','shark')} level's ${toTextStyle('Magmatic','core')} fragment bonus by <h4>+${format(x,3)}</h4>.`,
            x=>`Increase ${toTextStyle('Shark','shark')} Level's ${toTextStyle('Fish','fish')} bonus by <h4>${formatPow(x,3)}</h4> to the exponent.`,
            x=>`The first three ${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades are <h4>${formatPercent(x.sub(1))}</h4> more powerful.`,
            x=>`${toTextStyle('Shark','shark')} Level boosts ${toTextStyle('Shark','shark')} ELO by <h4>${formatMult(x)}</h4>.`,
            x=>`Boost <b>Stone</b> amount by <h4>${formatMult(x)}</h4>.`,
            x=>`Provide a <h4>${formatMult(x,3)}</h4> bonus purchase for exploration upgrades.`,
            x=>`Provide <h4>+${format(x)}</h4> bonus core reactors on the second row.`,
            x=>`Boost ${toTextStyle('Dark Matter','black-hole')} by <h4>${formatMult(x)}</h4>.`,
            x=>`Boost ${toTextStyle('Remnant','black-hole')} generation by <h4>${formatMult(x)}</h4>.`,
            x=>`The previous bonuses are <h4>${formatPercent(x.sub(1))}</h4> more powerful, except the sixth.`,
        ],

        // Evolution Tree

        'evolution-tree-row': (r,a) => `<b>Row ${r}</b><br>${a} available`,
        'evolution-tree-ctn': [
            ["Fish Body", x=>`${toTextStyle('Fish','fish')} boosts ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Fish','fish')} boosts ${toTextStyle('Shark','shark')} ELO's exponent by <b>${formatMult(x)}</b>.`],
            ["Prestigious Body", x=>`${toTextStyle('Prestige','prestige')} shards boost ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Prestige','prestige')} shards boost ${toTextStyle('Shark','shark')} ELO's exponent by <b>${formatMult(x)}</b>.`],
            ["Radioactive Body", x=>`${toTextStyle('Magmatic','core')} fragments boost ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Magmatic','core')} fragments boost ${toTextStyle('Shark','shark')} ELO's exponent by <b>${formatMult(x)}</b>.`],
            ["Perfect Body", x=>`${toTextStyle('Shark','shark')} ELO is multiplied by <b>${formatMult(x,0)}</b>.`, x=>`The ${toTextStyle('Shark','shark')} ELO's exponent is multiplied by <b>${formatMult(x,0)}</b>.`],

            ["Steel Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Iron</b> tiers.`, x=>`Improve <b>Iron</b> significantly.`],
            ["Priceful Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Nickel</b> tiers.`, x=>`Improve <b>Nickel</b> significantly.`],
            ["Air-breathing Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Oxygen</b> tiers.`, x=>`Improve <b>Oxygen</b> significantly.`],
            ["Glowing Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Neon</b> tiers.`, x=>`Improve <b>Neon</b> significantly.`],

            ["Mariana Trench", x=>`The <b>Pacific Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`, x=>`Improve the <b>Pacific Ocean</b>’s depth progress significantly.`],
            ["Litke Deep", x=>`The <b>Arctic Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`, x=>`Improve the <b>Arctic Ocean</b>’s depth progress significantly.`],
            ["Milwaukee Deep", x=>`The <b>Atlantic Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`, x=>`Improve the <b>Atlantic Ocean</b>’s depth progress significantly.`],
            ["South Sandwich Trench", x=>`The <b>Southern Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`, x=>`Improve the <b>Southern Ocean</b>’s depth progress significantly.`],

            ["Inflated Fish", x=>`${toTextStyle('Fish','fish')} is raised to the <b>${format(x)}th</b> power.`, x=>`The exponent of ${toTextStyle('Fish','fish')} is raised to the <b>${format(x)}th</b> power.`],
            ["Overprestige", x=>`${toTextStyle('Prestige','prestige')} shards are raised to the <b>${format(x)}th</b> power.`, x=>`The exponent of ${toTextStyle('Prestige','prestige')} is raised to the <b>${format(x)}th</b> power.`],
            ["Compressed Core", x=>`${toTextStyle("Magmatic",'core')} fragments are raised to the <b>${format(x)}th</b> power.`, x=>`${toTextStyle("Magmatic",'core')} fragments are raised to the <b>${format(x)}th</b> power again.`],
            ["Homemade Shark", x=>`Decrease the base of the ${toTextStyle('Humanoid','humanoid')} shark requirement by <b>${format(x,0)}</b>.`, x=>`The exponent of ${toTextStyle('Humanoid','humanoid')} sharks is increased by <b>+${format(x)}</b>.`],

            ["Shark Conversion", x=>`Gain <b>${format(x,0)}</b> bonus <b>Sulfur</b> tiers.`, x=>`Gain <b>${formatPow(x)}</b> more bonus <b>Sulfur</b> tiers above 1.`],
            ["Exoskeleton Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Silicon</b> tiers.`, x=>`Gain <b>${formatPow(x)}</b> more bonus <b>Silicon</b> tiers above 1.`],
            ["Solar Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Nitrogen</b> tiers.`, x=>`Gain <b>${formatPow(x)}</b> more bonus <b>Nitrogen</b> tiers above 1.`],
            ["Flying Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Helium</b> tiers.`, x=>`Gain <b>${formatPow(x)}</b> more bonus <b>Helium</b> tiers above 1.`],

            ["Great Shark Body", x=>`${toTextStyle('Fish','fish')} boosts <b>'Fish Body'</b> by <b>${formatPow(x)}</b>.`, x=>`${toTextStyle('Fish','fish')} boosts <b>'Great Shark Body'</b> and charged <b>'Fish Body'</b> by <b>${formatPow(x)}</b>.`],
            ["Rebirth Body", x=>`${toTextStyle('Prestige','prestige')} shards boost <b>'Prestigious Body'</b> by <b>${formatPow(x)}</b>.`, x=>`${toTextStyle('Prestige','prestige')} shards boost <b>'Rebirth Body'</b> and charged <b>'Prestigious Body'</b> by <b>${formatPow(x)}</b>.`],
            ["Supernatural Body", x=>`${toTextStyle('Magmatic','core')} fragments boost <b>'Radioactive Body'</b> by <b>${formatPow(x)}</b>.`, x=>`${toTextStyle('Magmatic','core')} fragments boost <b>'Supernatural Body'</b> and charged <b>'Radioactive Body'</b> by <b>${formatPow(x)}</b>.`],
            ["Immortal Body", x=>`<b>'Perfect Body'</b> is <b>squared</b>.`,x=>`<b>'Immortal Body'</b> and charged <b>'Perfect Body'</b> are <b>squared</b>.`],

            ['Luck of the Sea', x=>`${toTextStyle('Fish','fish')} boosts the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>.`, x=>`${toTextStyle('Fish','fish')} boosts the ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} by <b>+${format(x)}</b>.`],
            ['Luck of the Earth', x=>`<b>Stone</b> boosts the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>.`, x=>`<b>Radium-223</b> boosts the ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} by <b>+${format(x)}</b>.`],
            ['Luck of the Shark', x=>`${toTextStyle('Humanoid','humanoid')} Sharks boost the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>.`, x=>`${toTextStyle('Humanoid','humanoid')} Sharks boost the ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} by <b>+${format(x)}</b>.`],
            ['Pure Luck', x=>`The ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} is increased by <b>+${format(x)}</b>.`, x=>`The ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} is increased by <b>+${format(x)}</b>.`],

            ["Better Iron", x=>`Improve <b>Iron</b> building better.`, x=>`Improve <b>Sulfur</b> reactor significantly.`],
            ["Better Nickel", x=>`Improve <b>Nickel</b> building better.`, x=>`Improve <b>Silicon</b> reactor significantly.`],
            ["Better Oxygen", x=>`Improve <b>Oxygen</b> building better.`, x=>`Improve <b>Nitrogen</b> reactor significantly.`],
            ["Better Neon", x=>`Improve <b>Neon</b> building better.`, x=>`Improve <b>Helium</b> reactor significantly.`],

            ["Ironic Iron", x=>`Improve <b>Iron</b> reactor better.`, x=>`Improve <b>Magnesium</b> reactor better.`],
            ["Piggy Bank", x=>`Improve <b>Nickel</b> reactor better.`, x=>`Improve <b>Sodium</b> reactor better.`],
            ["Ozone", x=>`Improve <b>Oxygen</b> reactor better.`, x=>`Improve <b>Phosphor</b> reactor better.`],
            ["Fake Radioactive Waste", x=>`Improve <b>Neon</b> reactor better.`, x=>`Improve <b>Chromium</b> reactor better.`],

            ["Strong Column 1", x=>`The above upgrades in the first column are <b>${formatPercent(x-1)}</b> stronger.`, x=>`The above upgrades, including charged, in the first column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 2", x=>`The above upgrades in the second column are <b>${formatPercent(x-1)}</b> stronger.`, x=>`The above upgrades, including charged, in the second column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 3", x=>`The above upgrades in the third column are <b>${formatPercent(x-1)}</b> stronger.`, x=>`The above upgrades, including charged, in the third column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 4", x=>`The above upgrades in the fourth column are <b>${formatPercent(x-1)}</b> stronger.`, x=>`The above upgrades, including charged, in the fourth column are <b>${formatPercent(x-1)}</b> stronger.`],

            ["Fish Forge", x=>`${toTextStyle('Fish','fish')} speeds forging by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Fish','fish')} boosts ${toTextStyle("Constellation",'star')} resources by <b>${formatMult(x)}</b>.`],
            ["Prestigious Forge", x=>`${toTextStyle('Prestige','prestige')} shards speed forging by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Prestige','prestige')} shards boost ${toTextStyle("Constellation",'star')} resources by <b>${formatMult(x)}</b>.`],
            ["Magmatic Forge", x=>`${toTextStyle('Magmatic','core')} fragments speed forging by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Magmatic','core')} fragments boost ${toTextStyle("Constellation",'star')} resources by <b>${formatMult(x)}</b>.`],
            ["Faster Forge", x=>`Forging is <b>${formatMult(x)}</b> faster.`, x=>`${toTextStyle("Constellation",'star')} resources are increased by <b>${formatMult(x)}</b>.`],

            ["True Column 1", x=>`You are allowed to purchase the first column of tree evolution.`, x=>`You are allowed to purchase the first column of charged tree evolution.`],
            ["True Column 2", x=>`You are allowed to purchase the second column of tree evolution.`, x=>`You are allowed to purchase the second column of charged tree evolution.`],
            ["True Column 3", x=>`You are allowed to purchase the third column of tree evolution.`, x=>`You are allowed to purchase the third column of charged tree evolution.`],
            ["True Column 4", x=>`You are allowed to purchase the fourth column of tree evolution.`, x=>`You are allowed to purchase the fourth column of charged tree evolution.`],
        ],

        'evolution-goal-status': (x,y)=>x?"UNLOCKED":y?"LOCKED":"IN PROGRESS",
        'evolution-goal-ctn': [
            [
                x=>`Earn at least <b>${format(x,0)}</b> ${toTextStyle("Magmatic",'core')} fragments on the first entering ${toTextStyle("Core",'core')}.`,
                `Passively generate <b>100%</b> of ${toTextStyle("Magmatic",'core')} fragments earned on entering ${toTextStyle("Core",'core')}.`
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle("Magmatic",'core')} fragments without purchasing the ${toTextStyle("Core",'core')} assembler's building.`,
                `Keep the ${toTextStyle("Core",'core')} assembler on ${toTextStyle('Evolution','humanoid')}.`
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle("Magmatic",'core')} fragments.`,
                `Improve the formula of ${toTextStyle('Prestige','prestige')} shards for ${toTextStyle("Magmatic",'core')} fragments.`
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Prestige','prestige')} shards without generating ${toTextStyle('Kelp','kelp')}.`,
                `Start with capped depth in every ocean.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Prestige','prestige')} shards without generating resources in each ocean.`,
                `Keep research on ${toTextStyle('Evolution','humanoid')}.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Prestige','prestige')} shards.`,
                `Further improve the formula of ${toTextStyle('Prestige','prestige')} shards gain.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Fish','fish')} with at most <b>10</b> radioactive boosts.`,
                `Radioactive boosts no longer reset upgrades related to ${toTextStyle('Radiation '+icon("radioactive"),'core')}. You start with one generator, and ${toTextStyle('Radiation '+icon("radioactive"),'core')} can go beyond its limit.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Fish','fish')} without radioactive boosts.`,
                `Radioactive boosts no longer reset anything. Unlock Auto-Radioactive Boosts.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Fish','fish')}.`,
                `First ${toTextStyle('Shark','shark')} Rank scaling is delayed by <b>+5</b>.`,
            ],
        ],

        // Cultivation

        'ore-names': {
            'stone': "Stone",
            'coal': "Coal",
            'iron': "Iron",
            'gold': "Gold",
            'platinum': "Platinum",
            'diamond': "Diamond",
            'bismuth': "Bismuth",
            'obsidian': "Obsidian",
            'vibranium': "Vibranium",
            'radium': "Radium-223",
            'uranium': "Uranium-235",
            'berkelium': "Berkelium-247",
            'californium': "Californium-252",
            'oganesson': "Oganesson-294",
            'sharkium': "Sharkium",
        },

        'mined-resources-text': `Mined Resources`,
        'mining-tier': `Mining Tier`,
        'next-mining-tier': `At <b>Mining Tier</b>`,
        'mining-tier-reset': `Increase the <b>Mining Tier</b>, but it will multiply each ore's health and amount.`,
        'mining-tier-ore-unlock': x=>`Unlock ${x} ore.`,
        'mining-tier-ore-generation': x=>`You will no longer mine ${x} ore, but will generate it based on mining speed & fortune instead.`,

        'mining-ascend': `Mining Ascension`,
        'next-mining-ascend': `At <b>Mining Ascension</b>`,
        'mining-ascend-reset': `Increase the <b>Mining Ascension</b>, but it forces a singularity reset for powerful boosts.`,

        'mining-tier-bonus': [
            x=>`Ore's health is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Stone</b> & <b>Coal</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Iron</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Gold</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Platinum</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Bismuth</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Diamond</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Obsidian</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`The first 9 ores are increased by <b>${formatPow(x)}</b>.`,
            x=>`Super Ore's health is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Radium-223</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Uranium-235</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Berkelium-247</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Californium-252</b> amount is increased by <b>${formatMult(x)}</b>.`,
        ],

        // Forge

        'forge': {
            'anvil': ['Anvil Tier','Unlocks new forge upgrades.'],
            'drill': ['Drill Tier','Increases the multiplier of <b>Stone</b> mined.'],
            'shard': ['Refined Shard',`Increases the multiplier of ${toTextStyle('Prestige','prestige')} shards.`],
            'tree': ['Extraordinary Tree',`Unlocks new row of the ${toTextStyle('Evolution','humanoid')} tree.`],
            'adv_research': ['Advanced Research',`Unlocks new research.`],
            'auto': ['Advanced Automation',`Unlocks new automation.`],
            'shark': ['Distant Shark Level',`Delays the third scaling of ${toTextStyle('Shark','shark')} Level.`],
            'refined_shard': ['Energized Shard',`Increases the exponent of ${toTextStyle('Prestige','prestige')} shards.`],
            'wormhole': ['Wormhole',`Unlocks new Particle Accelerator.`],
            'matter': ['Matter Condenser',`Increases ${toTextStyle('Remnant','black-hole')} generation.`],
        },
        'forge-progress': (x,s) => x ? `Forging <b>${x}</b>... <b>${s}</b>` : `Forge is empty`,
        'forge-speed': x => `Forging Speed: <b>${x}</b>`,
        'forge-button': ['Cancel Forging','Start Forging','Not enough materials to forge'],

        // Particle Accelerator

        'particle-accel-condense': x => `Condense over ${x} to:`,
        'particle-accel-boost': [
            x => `Increase the ${toTextStyle('Radiation '+icon("radioactive"),'core')} production by <b>${x}</b>.`,
            x => `Increase every ocean's depth progression by <b>${x}</b>.`,
            x => `Increase <b>Stone</b> amount and mining damage by <b>${x}</b>.`,
            x => `Gain <b>${x}</b> more ${toTextStyle('Humanoid','humanoid')} Sharks.`,
            x => `Delay the first scaling of the core reactors by <b>${x}</b>.`,
            x => `Increase the exponent of ${toTextStyle("Shark",'shark')} ELO by <b>${x}</b>.`,
        ],

        // Singularity

        'black-hole-texts': [
            `Have enough matter to form a black hole.... But what are you doing while stuck inside a black hole? No worries, there is a white hole that sends you into another universe, but it's a bit complex.`,
            `How have you been in a parallel universe? So, you're going to get stuck in another black hole!`,
            `Wait a minute... How did you get ${toTextStyle("Fish",'fish')} faster, no matter what? I'm going to put you in serious trouble!`,
            `Seriously...`,
            `...`,
            `Please stop it here!`,
            `THIS IS YOUR LAST CHANCE!`,
            `Ugh... Fine... You win! Here's without reductions...`,
        ],
        get 'singularity-milestones'() {
            return [
                [`1 Black Hole`,`Unlock ${toTextStyle("Remnants",'black-hole')}. ${toTextStyle("Shark",'shark')} Level boosts ${toTextStyle("Remnant",'black-hole')} generation.`],
                [`2 Black Holes`,`Start with automations unlocked on reset, with starting interval. ${toTextStyle("Shark",'shark')} Rank boosts ${toTextStyle("Remnant",'black-hole')} generation.`],
                [`3 Black Holes`,`Keep automations on reset. Start with pre-cultivation features unlocked and 10 ${toTextStyle("Humanoid",'humanoid')} Sharks. Unlock more new research.`],
                [`4 Black Holes`,`Keep ${toTextStyle("Evolution",'humanoid')} goals competed on reset. Particle accelerators are ten times faster. Each exploration base is reduced to <b>1/s</b> on reset.`],
                [`5 Black Holes`,`Ore’s health scales weaker. Unlock more automations.`],
                [`6 Black Holes`,`Double ${toTextStyle("Remnant",'black-hole')} generation every black hole you formed.`],
                [`7 Black Holes`,`Start with cultivation unlocked on reset.`],
                [`8 Black Holes`,`${toTextStyle("Black Hole",'black-hole')}’s penalties are now removed if you have formed 8 current ${toTextStyle("Black Holes",'black-hole')}. Forming it no longer plays animation. Unlock next feature.`],
            
                [`1 Total Dark Matter`,`Keep pre-${toTextStyle("Singularity",'black-hole')} research, ${toTextStyle("Evolution",'humanoid')} tree, and forges on reset. Unlock more research.`],
                [`10 Total Dark Matter`,`Automatically activate all particle accelerators at once.`],
                [`${format(1e6)} Total Dark Matter`,`Keep research <b>s1-s3</b> on sacrifice. Unlock new automation. Remnant upgrades no longer spend remnants.`],
                [`${format(1e12)} Total Dark Matter`,`Unlock next feature.`],
                [`${format(1e100)} Total Dark Matter`,`Passively generate 100% of your ${toTextStyle("Dark Matter",'black-hole')} gained on reset.`],
            ]
        },

        'remnant-upgrades': [
            [`Welcome`,x=>`${toTextStyle("Shark",'shark')} Level Bonuses are ${x} stronger.`],
            [`Flowing`,x=>`Exploration base multiplier is boosted by ${x}.`],
            [`Half-life`,x=>`${toTextStyle("Core",'core')} Reactors are ${x} stronger.`],
            [`No Wasting Time`,x=>`Forging speed is increased by ${x}.`],

            [`Welcome Again`,x=>`${toTextStyle("Fish",'fish')} boosts itself by ${x}.`],
            [`Grandmaster`,x=>`${toTextStyle("Shark",'shark')} Rank Bonuses are ${x} stronger.`],
            [`Galactic Level`,x=>`The first 3 scalings of ${toTextStyle("Shark",'shark')} Level are delayed by ${x}.`],
            [`Shark Master`,x=>`${toTextStyle("Shark",'shark')} ELO is increased by ${x}.`],

            [`Bottomless Depth`,x=>`Each ocean's depth progress is boosted by ${x}.`],
            [`Hot Potato`,x=>`Radioactive boosts are ${x} stronger.`],
            [`Mega Level`,x=>`The fourth scaling of ${toTextStyle("Shark",'shark')} Level is delayed by ${x}.`],
            [`Elite Miner`,x=>`The third scaling of mining tier is delayed by ${x}.`],

            [`Self-Accelerator`,x=>`${toTextStyle("Remnants",'black-hole')} boost themselves by ${x}.`],
            [`Ultimate Power`,x=>`The first 12 ${toTextStyle("Remnant",'black-hole')} upgrades are ${x} more powerful, except 4th.`],
            [`Efficiency VI`,x=>`The super mining damage is boosted by ${x}.`],
            [`Supernatural Shark`,x=>`The exponent of ${toTextStyle("Humanoid",'humanoid')} sharks is increased by ${x}.`],

            [`The Star`,x=>`${toTextStyle("Constellation",'star')} resources are boosted by ${x}.`],
            [`The Growth`,x=>`The exponent of the ${toTextStyle("Constellation",'star')} base is increased by ${x}.`],
            [`Old School`,x=>`${toTextStyle("Fundamental Particles",'hadron')} are boosted by ${x}.`],
            [`Finished`,x=>`The exponent of ${toTextStyle("Fish",'fish')} is boosted by ${x}.`],
        ],

        'solar-system-list': {
            'sun':     ["Sun",`The Sun is a star that sits at the center of our solar system. It is made up mostly of hydrogen and helium and is the main source of light and heat for Earth and the other planets in the system. The Sun also creates the conditions for life on Earth by providing photosynthesis and climatic conditions. The Sun is huge. Its diameter is 109 times the diameter of the Earth, and its mass is 330,000 times the mass of the Earth. The distance between the Earth and the Sun is 150 million kilometers, so the Sun seems so small to us.`,`Unlock the next layer. The multiplier of ${toTextStyle('Sharkoid Faith','humanoid')} is doubled again.`],
            'mercury': ["Mercury",`Mercury is the smallest planet in the solar system and closest to the Sun. It is named after the ancient Roman god of commerce because it moves across the sky faster than the other planets. Mercury is covered in impact craters and is similar to the Moon in appearance, indicating a lack of internal geologic activity over the past billion years. The planet has almost no atmosphere, so its surface temperature varies more than any other planet in the solar system.`,`The first 3 scalings of radioactive boost are delayed by ×10. Multiply ${toTextStyle('Observatories','observ')} generation by 10 again.`],
            'venus':   ["Venus",`Venus is the second farthest from the Sun and the sixth-largest planet in the Solar System. It is named after the ancient Roman goddess of love. Venus has a dense atmosphere consisting of more than 96% carbon dioxide. Venus has an average surface temperature of 735 K (462 °C), making it the hottest planet in the solar system. Venus has no natural satellites. In the Earth's sky, it is the third-brightest luminary, after the Sun and the Moon.`,`Passively generate 100% of current ${toTextStyle('Humanoid','humanoid')} sharks as bonus ${toTextStyle('Humanoid','humanoid')} sharks, but auto-${toTextStyle('Humanoid','humanoid')} shark no longer works. Improve ${toTextStyle('Humanoid','humanoid')} shark drastically, and the third scaling of ${toTextStyle('Shark','shark')} rank is delayed by ×2. Multiply ${toTextStyle('Observatories','observ')} generation by 10.`],
            'earth':   ["Earth",`???`,`???`],
            'moon':    ["Moon",`Welcome to the Solar System! So, you are free to explore some planet, but it requires observing for powerful rewards. Force a singularity reset, resetting some research and evolution tree (it returns after), but black hole’s reduction is forced to ^0.5, nearly post-cultivation features are disabled, and you cannot explore any ocean. You can generate ${toTextStyle('Observatories','observ')} in the space-base, which helps you progress faster with their upgrades. There is difficulty, it affects not progress, but the space-base features to make progress further. Let’s start with Moon of the Earth! It’s called Luna, but Theta, originally before the collision.`,`Unlock the Mining Ascension and new ${toTextStyle('Remnant','black-hole')} upgrade. Mining ascension forces a singularity reset for powerful bonus and various ores.`],
            'mars':    ["Mars",`Mars is the fourth most distant planet from the Sun in the Solar System. It belongs to the planets of the Earth group, as it has a solid surface and a size comparable to Earth. The terrain of Mars has unique features, including impact craters, volcanoes, valleys, deserts, and polar ice caps. Mars has geologic formations that resemble water erosion and minerals that could only have been formed by prolonged exposure to water. The question of the existence of life on Mars has interested scientists for centuries.`,`Earn the ability to terraform any purchased ${toTextStyle('Evolution','humanoid')} tree for powerful bonuses, but the cost grows faster. Unlock new automation. Multiply ${toTextStyle('Observatories','observ')} generation by 10.`],
            'jupiter': ["Jupiter",`Jupiter is the largest planet in the Solar System and the fifth farthest from the Sun. It is a gas giant with a mass 2.47 times greater than the combined mass of all the other planets in the Solar System. Jupiter has been known since antiquity and is mentioned in mythology and religious beliefs of different cultures. The modern name of the planet comes from the name of the ancient Roman supreme thunder god. Jupiter's atmosphere is characterized by a number of atmospheric phenomena such as storms, lightning, auroras and the Great Red Spot, a giant storm known since the 17th century.`,`Unlock more ${toTextStyle('Remnant','black-hole')} upgrades. Multiply ${toTextStyle('Observatories','observ')} generation by 10 again.`],
            'saturn':  ["Saturn",`Saturn is the sixth planet from the Sun and the second-largest planet in the solar system after Jupiter. Saturn is classified as a gas giant because it is composed mostly of hydrogen and helium. The planet is named after the Roman god of agriculture. Saturn is surrounded by rings made up of ice particles, heavy elements and dust. The planet has 146 known satellites, the largest of which is Titan. Saturn has a planetary magnetic field and a prominent ring system.`,`Unlock a new row of ${toTextStyle('Core','core')} reactors. <i>These reactors don’t get reset by Evolution or later, but they aren’t affected by the ${toTextStyle('Remnant','black-hole')} upgrade “Half-life”.</i>`],
            'uranus':  ["Uranus",`Uranus is the seventh-farthest planet in the solar system from the Sun. It was discovered in 1781 by English astronomer William Herschel and named after the Greek sky god Uranus. Uranus was the first planet discovered in modern times and with the aid of a telescope. Uranus is the third-largest planet in diameter and fourth largest in mass in the solar system. It is composed mostly of ice and rock, and its atmosphere contains hydrogen, helium, and methane. Uranus has a ring system and 28 satellites. Uranus' axis of rotation is “on its side,” so the planet orbits the Sun, alternately turning its north and south poles toward it.`,`Remove the ${toTextStyle('Shark','shark')} overpopulation. The multiplier of ${toTextStyle('Sharkoid Faith','humanoid')} is doubled.`],
            'neptune': ["Neptune",`Neptune is the eighth and farthest planet in the Solar System. Its distance from the Sun averages 4.5 billion kilometers. Neptune is one of the giant planets. It has 17 times the mass of Earth.  Neptune is fourth in equatorial diameter, 3.9 times larger than Earth. Neptune's atmosphere is similar to the gas envelopes of other major planets in the solar system. It consists mainly of hydrogen and helium, with admixtures of methane, water, ammonia, and other compounds. Neptune is considered one of the coldest planets in the solar system. Its average temperature ranges from -200 °C. Neptune's atmosphere has the strongest winds of any planet in the solar system.`,`Unlock the ${toTextStyle('Constellation','star')} that upgrade the ${toTextStyle('Black Hole','black-hole')} further for a powerful reward.`],
            'pluto':   ["Pluto",`Pluto is the largest known dwarf planet in the solar system, a trans-Neptunian object and the tenth most massive celestial body orbiting the Sun after the eight planets and Eridas. It is composed of rock and ice and has a mass about six times smaller than the mass of the Moon and a volume about three times smaller. Pluto has a large eccentricity of orbit and a large inclination to the ecliptic plane. Because of this, it is approaching the Sun at a distance of 29.7 a.u. and moving away at 49.3 a.u.`,`Unlock more ${toTextStyle('Remnant','black-hole')} upgrades again. ${toTextStyle('Constellation','star')} resources no longer get reset.`],
        },
        'build-rocket-part': x => `Build ${x} Rocket Parts.`,
        'total-rp': "total RP",
        'solar-system-lock-reward': `You must complete ${toTextStyle('observing','observ')} to reveal the reward.`,
        'solar-system-goal': x => `Total ${toTextStyle('Observatories','observ')} goal: <h4>${x}</h4>`,
        'solar-system-status': x => [`Start Observing`,`Give up Observing`,`Complete Observing`][x],
        'observ-progress': x => `Reach <b>${x}</b> total ${toTextStyle('Observatories','observ')}`,
        'observ-cond': `Complete ${toTextStyle('observing','observ')}`,

        'space-base-upgrades': {
            'o1': [`The Space`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'o2': [`Space Fish`,x=>`${toTextStyle('Fish','fish')} is boosted by ${x}.`],
            'o3': [`Space Prestige`,x=>`${toTextStyle('Prestige shards','prestige')} are boosted by ${x}.`],
            'o4': [`Space Core`,x=>`${toTextStyle('Magmatic fragments','core')} are boosted by ${x}.`],
            'o5': [`Space Radiation`,x=>`${toTextStyle('Radiation '+icon("radioactive"),'core')} production is boosted by ${x}.`],
            
            'e1': [`Fish Exchanger`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'e2': [`Prestige Exchanger`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'e3': [`Core Exchanger`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'e4': [`Observe-Reservatory`,x=>`${toTextStyle('Reservatories','reserv')} are boosted by ${x}.`],
            'e5': [`Universal Exchanger`,x=>`The base of ${toTextStyle('Observatory','observ')} upgrades “Exchanger” is increased by ${x}.`],
            'e6': [`Reserve-Trajectory`,x=>`${toTextStyle('Trajectories','traject')} are boosted by ${x}.`],

            'r1': [`The Relative`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'r2': [`Observable`,x=>`${toTextStyle('Reservatories','reserv')} are boosted by ${x}.`],
            'r3': [`Space Fish II`,x=>`${toTextStyle('Fish','fish')} is boosted by ${x}.`],
            'r4': [`Space Prestige II`,x=>`${toTextStyle('Prestige shards','prestige')} are boosted by ${x}.`],
            'r5': [`Space Radiation II`,x=>`${toTextStyle('Radiation '+icon("radioactive"),'core')} production is boosted by ${x}.`],

            't1': [`The Transport`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            't2': [`Reservable`,x=>`${toTextStyle('Reservatories','reserv')} are boosted by ${x}.`],
            't3': [`Observable II`,x=>`${toTextStyle('Trajectories','traject')} are boosted by ${x}.`],
            't4': [`Space Fish III`,x=>`${toTextStyle('Fish','fish')} is boosted by ${x}.`],
            't5': [`Scaled Radiation`,x=>`The first 3 scalings of radioactive boost are delayed by ${x}.`],
            't6': [`The Transport II`,x=>`The base of “The Transport” is increased by ${x}.`],
        },
        
        'experiment-reset': `Reset all previous space-base features, but increase the ${toTextStyle('Experiment','experiment')} tier for a powerful boost.`,
        'experiment-boosts': [
            x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`,
            x=>`${toTextStyle('Reservatories','reserv')} are boosted by ${x}.`,
            x=>`${toTextStyle('Trajectories','traject')} are boosted by ${x}.`,
        ],

        'constellation-boosts': [
            [`Stellar Fish`, x=>`Boost ${toTextStyle('Fish','fish')} amount by ${x} to the exponent.`, x=>`Boost ${toTextStyle('Observatories','observ')} generation by ${x}.`],
            [`Stellar Prestige`, x=>`Boost ${toTextStyle('Prestige','prestige')} shards gain by ${x} to the exponent.`, x=>`Boost ${toTextStyle('Reservatories','reserv')} gain by ${x}.`],
            [`Stellar Fragments`, x=>`Boost ${toTextStyle('Magmatic','core')} fragments gain by ${x}.`, x=>`Boost ${toTextStyle('Trajectories','traject')} gain by ${x}.`],
            [`Stellar Sharks`, x=>`Boost the exponent of ${toTextStyle('Humanoid','humanoid')} sharks by ${x}.`, x=>`Reduce the ${toTextStyle('Experiment','experiment')} tier requirement by ${x}`],
            [`Stellar Radiation `+icon("radioactive"), x=>`Boost ${toTextStyle('Radiation ' + icon("radioactive"),'core')} production by ${x}.`, x=>`No effect provided.`],
            [`Hawking Radiation `+icon("radioactive"), x=>`Boost ${toTextStyle('Fundamental Particles','hadron')} by ${x}.`, x=>`No effect provided.`],
            [`Nebulae`, x=>`First 6 ${toTextStyle("Constellation",'star')} resources are ${x} stronger.`, x=>`No effect provided.`],
            [`Galaxies`, x=>`First 7 ${toTextStyle("Constellation",'star')} resources are boosted by ${x}.`, x=>`No effect provided.`],
            [`Galaxy Clusters`, x=>`Boost the exponent of ${toTextStyle('Remnant','black-hole')} generation and ${toTextStyle('Dark Matter','black-hole')} by ${x}.`, x=>`No effect provided.`],
            [`Galaxy Superclusters`, x=>`Black Hole Tier scales ${x} slower.`, x=>`No effect provided.`],
            [`Universes`, x=>`Boost ${toTextStyle('Fish','fish')} amount by ${x} to the exponent^2.`, x=>`No effect provided.`],
            [`Multiverses`, x=>`Boost ${toTextStyle('Fish','fish')} amount by ${x} to the tetration.`, x=>`No effect provided.`],
        ],

        // Haronize

        'hadron-cutscenes': [
            `Open your eyes before this point.`,
            `To hadronize, must go pray to holy particle yourself.`,
            `No pain, no gain, no hard reset.`,
            `Is that Antimatter Dimensions NG+3 reference?!?!??!`,
            `Some days, it's easier. Other days, it's harder. Be it easy or hard, the only way to get there...<br>...is to start.`
        ],
        'starter-upgrades': [
            [`Shark Tier`,`Unlock ${toTextStyle('Shark','shark')} Tier similar to ${toTextStyle('Shark','shark')} Rank, but even more overpowered. ${toTextStyle('Shark','shark')} Tier is calculated by ${toTextStyle('Shark','shark')} ${toTextStyle('IQ','hadron')}.`],
            [`Auto Solar System`,`Some planet or star can be completed immediately if you meet its rocket part requirement, and its rocket part requirement won’t be increased again.`],
            [`Uncapped Prestige Upgrades`,`The first and second ${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades’ effect no longer gets capped, but it gets reduced harsher after the removed cap.`],
            [`Instant Forge & Particle Accelerator`,`Forge can be completed instantly, particle accelerators' speed is ludicrous.`],
            [`Mining Continuum`,`Every ore can be generated without mining, depending on speed, fortune, and unlock requirement. Ore field is removed.`],
            [`Distant Remnant Scaling`,`The first scaling of ${toTextStyle('Remnant','black-hole')} upgrades is delayed from <b>100</b> (normally) to <b>1000</b>.`],
            [`No more annoying resets`,`Start with 8 ${toTextStyle('Black Holes','black-hole')} and all previous generations unlocked on reset.`],
            [`Eternal Tree`,`The ${toTextStyle("Evolution","humanoid")} tree no longer takes ${toTextStyle("Sharkoid Faith","humanoid")} away. Unlock an automation for the ${toTextStyle("Evolution","humanoid")} tree.`],
        ],

        'nucleobases': {
            'cytosine': ["Cytosine",[
                x => `${x} to ${toTextStyle('Constellation','star')} resources.`,
                x => `${x} to ${toTextStyle('Fundamental Particles','hadron')}.`,
                x => `${x} to ${toTextStyle('Remnant','black-hole')} generation & ${toTextStyle('Dark Matter','black-hole')}.`,
                x => `${x} to ${toTextStyle('Constellation','star')} resources.`,
                x => `${toTextStyle('Core','core')} reactors in the third row are ${x} stronger.`,
                x => `${x} to decayed radioactive boost's growth.`,
            ]],
            'guanine': ["Guanine",[
                x => `${x} to the exponent of ${toTextStyle('Constellation','star')} base.`,
                x => `${x} to ${toTextStyle('Fundamental Particles','hadron')}.`,
                x => `${x} to the exponent of ${toTextStyle('Magmatic','core')} fragments and ${toTextStyle('Radiation ' + icon("radioactive"),'core')} production.`,
                x => `${x} to the strength of ${toTextStyle("Shark",'shark')} Tier Bonuses.`,
                x => `The tenth row of the ${toTextStyle('Evolution','humanoid')} tree is ${x} stronger.`,
                x => `${x} to the exponent of ${toTextStyle('Remnant','black-hole')} generation & ${toTextStyle('Dark Matter','black-hole')}.`,
            ]],
            'adenine': ["Adenine",[
                x => `${x} to the exponent of ${toTextStyle('Shark','shark')} ${toTextStyle('IQ','hadron')}.`,
                x => `All pre-${toTextStyle('Hadronize','hadron')} scalings are ${x} weaker.`,
                x => `${x} to the tier of <b>Cytosine</b>.`,
                x => `${x} to the effect of total ${toTextStyle('Fundamental Particles','hadron')}.`,
                x => `${x} to ${toTextStyle('Fundamental Particles','hadron')}.`,
                x => `${x} to the tetration of ${toTextStyle('Hadronize','hadron')} cap.`,
            ]],
            'thymine': ["Thymine",[
                x => `The 6-9th ${toTextStyle('Constellation','star')} resources are ${x} stronger.`,
                x => `${x} to the base of galactic ocean's upgrade.`,
                x => `${x} to the tier of <b>Guanine</b>.`,
                x => `${x} to the score of each galactic ocean.`,
                x => `${x} to galactic ocean resources.`,
            ]],
            'uracil': ["Uracil",[
                x => `${x} to the tetration of ${toTextStyle('Fish','fish')}.`,
                x => `${x} to the first 4 nucleobases.`,
                x => `${x} to the exponent of ${toTextStyle('Fundamental Particles','hadron')}.`,
                x => `<b>Uracil</b> experience boosts itself by ${x}.`,
            ]],
        },
        'experience': "Experience",
        'next-at-experience': "Next amount at experience",
        'nucleobase-boosts': "Nucleobase Boosts",
        'experience-base': "Experience Base",
        'nucleobase-tier': "Nucleobase Tier",

        'gal-explore-ocean': `Explore the ocean.`,
        'gal-explore-inside': (x,y) => `<b>Current Score:</b> ${x}<br>Reach ${y} ${toTextStyle('Fish','fish')}.`,
        'gal-explore-require': x => `${toTextStyle('Shark','shark')} Tier ${x} required to unlock.`,
        'gal-explore-upgrade': (x,y) => `Boost ${x} gained by ${y}.`,
        'gal-explore': [
            [
                `Deep Blue Ocean`, `Blue Algae`,
                `${toTextStyle('Magmatic','core')} fragments are raised by <b>0.5</b> to the exponent^2, the ${toTextStyle('Core','core')} temperature and ${toTextStyle('Radiation ' + icon("radioactive"),'core')} production are set to <b>log(x)</b>.`,
                x => `${x} to the exponent of ${toTextStyle('Magmatic','core')} fragments and ${toTextStyle('Radiation ' + icon("radioactive"),'core')} production.`
            ],[
                `Abyssal Ocean`, `Bioluminescent Matter`,
                `The tetration of ${toTextStyle('Prestige','prestige')} shards is <b>halved</b>.`,
                x => `${x} to the exponent of ${toTextStyle('Prestige','prestige')} shards.`
            ],[
                `Grey Ocean`, `Grey Plankton`,
                `The exponent of ${toTextStyle('Humanoid','humanoid')} sharks is rooted by 10, you cannot increase the multiplier and exponent of ${toTextStyle('Shark','shark')} ${toTextStyle('ELO','humanoid')}.`,
                x => `${x} to the exponent of ${toTextStyle('Shark','shark')} ${toTextStyle('ELO','humanoid')}.`
            ],[
                `Corrupted Ocean`, `Corrupted Remnants`,
                `The exponent^2 of ${toTextStyle('Remnant','black-hole')} generation & ${toTextStyle('Dark Matter','black-hole')} is square-rooted.`,
                x => `${x} to the exponent of ${toTextStyle('Remnant','black-hole')} generation.`
            ],[
                `Stellar Ocean`, `Plasma`,
                `You cannot tier black hole up as you cannot gain ${toTextStyle('Constellation','star')} resources.`,
                x => `${x} to ${toTextStyle('Constellation','star')} base and resources.`
            ],[
                `Desert Ocean`, `Dry Sands`,
                `The tetration of ${toTextStyle('Fish','fish')} is halved.`,
                x => `${x} to the tetration of ${toTextStyle('Fish','fish')} outside of this ocean.`
            ],
        ],

        'dna-milestones': [
            `Unlock an Auto-Galactic Exploration Upgrade.`,
            `${toTextStyle('Fish','fish')} can surpass ${toTextStyle('Hadronize','hadron')} cap, but its gain will be slower harshly.`,
            `${toTextStyle('Humanoid','humanoid')} sharks gain is now equal to ${toTextStyle('Fish','fish')} gain.`,
            `Improve DNA boosts better.`,
            `Improve DNA’s first boost better again.`,
            `Unlock the fifth nucleobase.`,
            `The first boost of thymine affects the last ${toTextStyle('Constellation','star')} resource at a 10% rate.`,
            `${toTextStyle('Shark','shark')} Tier increases ${toTextStyle('Fish','fish')} eaten tetrationally, starting at 1,000.`,
            `Automatically expand DNA.`,
            `The second boost of DNA affects boosts of uracil.`,
        ],

        // Omnipotence

        'omni-cutscene-texts': [`Your shark became the omnipotence...`, `...but at what cost?`],
        
        'tab-omni-rewards': `${toTextStyle("Omnipotence","omni")} Rewards`,
        'tab-shark-condenser': `${toTextStyle("Shark","shark")} ${toTextStyle("Condenser","omni")}`,
        'tab-undead': `${toTextStyle('Undead','undead')} Hunter`,

        'tab-nucleus': `${toTextStyle('Nuclear Reaction','atom')}`,
        'tab-actinium': `${toTextStyle('Actinium','atom')} Decay Series`,
        'tab-particles': `${toTextStyle('Atom','atom')} Particles`,
        'tab-isotopes': `Isotopes`,

        'tab-runes': `${toTextStyle('Runes','rune')}`,
        'tab-rune-constructor': `${toTextStyle('Rune','rune')} Constructor`,
        'tab-rune-sacrifice': `${toTextStyle('Rune','rune')} Sacrifice`,

        'tab-god': `${toTextStyle('Shark God','god')}`,

        'antimatter-div': `Your ${toTextStyle('Omni-Shark<sup id="omni-tier"></sup>','omni')} has consumed <h2>${toTextStyle('0','antimatter','antimatter-amount')}</h2> <span id="antimatter-gain"></span> fish antimatter.`,
        'antimatter-equivalent-div': `Equivalent to <b id="antimatter-equivalent">???</b> ${toTextStyle("Fish",'fish')}`,
        'undead-essence-html': `You have gathered <h3>${toTextStyle('0','undead','undead-essence-amount')}</h3> <span id="undead-essence-gain"></span> undead essence.<br>
        It's a <b id="undead-essence-chance">0%</b> chance to catch ${toTextStyle('Undead Essence','undead')} every second, unaffected by game speed.`,
        'game-speed-div': `Game Speed: <b id="game-speed">???</b>`,
        'antimatter-god-div': `Due to ${toTextStyle('God','god')}'s punishment, your ${toTextStyle('Fish Antimatter','antimatter')}'s exponent is rooted by ${toTextStyle('1','god','antimatter-god-penalty')}.`,
        'rune-sacrifice-info': `Sacrificing any ${toTextStyle('Rune','rune')} makes it no longer placed, but its amount is affected by the highest amount given by other ${toTextStyle('Runes','rune')}. During the challenge, most ${toTextStyle('Rune','rune')} upgrades have no effect, and <b>game speed</b> is reduced to logarithmic.`,

        'anti-fish-name': "Fish Antimatter",
        'anti-fish-costName': toTextStyle('Fish Antimatter','antimatter'),

        'transcend-name': "Transcendental Shards",
        'transcend-costName': toTextStyle('Transcendental','transcend') + " Shards",

        'undead-name': "Undead Essence",
        'undead-costName': toTextStyle('Undead Essence','undead'),

        'nucleus-name': "Atomic Nucleus",
        'nucleus-costName': toTextStyle('Atomic Nucleus','atom'),

        'rune-fragments-name': "Rune Fragments",
        'rune-fragments-costName': toTextStyle('Rune','rune') + " Fragments",

        'curr-top-7-req': x => `Reach <b>${format(x)}</b> total ${toTextStyle('Fish Antimatter','antimatter')}`, 
        'curr-top-7-reset': x => `Transcend for <b>${x.format(0)}</b> ${toTextStyle('Transcendental','transcend')} Shards`,

        'curr-top-8-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Transcendental','transcend')} Shards`, 
        'curr-top-8-reset': x => `Reactive for <b>${x.format(0)}</b> ${toTextStyle('Atomic Nucleus','atom')}`,

        'curr-top-9-req': x => `Reach <b>${format(x)}</b> total ${toTextStyle('Fish Antimatter','antimatter')}`, 
        'curr-top-9-reset': x => `Runeificate for <b>${x.format(0)}</b> ${toTextStyle('Rune','rune')} Fragments`,

        'omni-shark-button': `Condense everything to increase your ${toTextStyle("Shark","shark")}'s ${toTextStyle("Omnipotence","omni")} for a big reward.<hr class="line"><b>Require:</b> <span id="omni-require"></span>`,
        'omni-tier': `${toTextStyle("Omnipotence","omni")} Tier`,
        'omni-other-requirements': {
            7: `Do a ${toTextStyle('Transcendence','transcend')}`,
            20: `Do a ${toTextStyle('Reaction','atom')}`,
        },
        'omni-rewards': {
            2: x => `Start generating ${toTextStyle('Fish Antimatter','antimatter')} with a ${x} base.`,
            5: x => `'Omni-Shark Agility' affects the ${toTextStyle("Omnipotence","omni")} Tier 2 reward.`,
            7: x => `Unlock the ${toTextStyle('Transcendence','transcend')}.`,
            9: x => `Unlock an Auto-${toTextStyle("Omni-Shark","omni")} ${toTextStyle('Fish Antimatter','antimatter')} Upgrade. Those upgrades no longer take ${toTextStyle('Fish Antimatter','antimatter')} away.`,
            10: x => `Unlock the ${toTextStyle("Shark","shark")} ${toTextStyle("Condenser","omni")} that persists through ${toTextStyle("Shark","shark")} ${toTextStyle("Omnipotence","omni")}.`,
            11: x => `The base of 'Super Omni-Shark Strength' and 'Omni-Shark Transcendence' is increased by ${x}.`,
            12: x => `Unlock the ${toTextStyle("Research","prestige")}.`,
            15: x => `Start gathering ${toTextStyle('Undead Essence','undead')} every second with a ${x} chance.`,
            16: x => `${toTextStyle('Undead Essence','undead')} can be condensed for persisted boost.`,
            19: x => `Unlock an Auto-${toTextStyle("Omni-Shark","omni")} ${toTextStyle('Transcendental','transcend')} Upgrade. Those upgrades no longer take ${toTextStyle('Transcendental','transcend')} shards away.`,
            20: x => `Unlock the ${toTextStyle('Atomic Nucleus','atom')}. Passively generate ${x} of ${toTextStyle('Transcendental','transcend')} shards you gained on reset, affected by game speed at a <b>1%</b> rate.`,
            22: x => `Unlock an Auto-${toTextStyle('Undead Essence','undead')} Upgrade (without spending anything).`,
            24: x => `${toTextStyle('Atomic Nucleus','atom')} can be condensed for persisted boost. ${toTextStyle('Transcendental','transcend')} shards update the condensed to best.`,
            28: x => `Unlock the Isotopes. Keep the ‘Research R-Keeper’ research on ${toTextStyle("Shark","shark")} ${toTextStyle("Omnipotence","omni")}.`,
            30: x => `Unlock an Auto-${toTextStyle('Nucleus','atom')} (without spending anything). ${toTextStyle('Undead Essence','undead')} updates the condensed to best.`,
            32: x => `Passively generate ${x} of ${toTextStyle('Atomic Nucleus','atom')} you gained on reset, affected by game speed at a <b>^0.1</b> rate.`,
            36: x => `The rate of ${toTextStyle("Omnipotence","omni")} Tier 32 reward is increased to ${x}.`,
            40: x => `Unlock the ${toTextStyle("Runeification","rune")}. ${toTextStyle('Atomic Nucleus','atom')} updates the condensed to best.`,
            41: x => `${toTextStyle("Rune","rune")} fragments are multiplied by ${x}. ${toTextStyle("Omnipotence","omni")} Tier 15 reward is always <b>100%</b>.`,
            43: x => `${toTextStyle("Rune","rune")} fragments can be condensed for persisted boost.`,
            44: x => `Uruz ${toTextStyle("Rune","rune")}'s base is increased to ${x}.`,
            48: x => `Unlock the ${toTextStyle("Rune","rune")} Sacrifice.`,
            50: x => `The first ${toTextStyle("God","god")}’s punishment is ${x} weaker. Keep isotopes on ${toTextStyle("Runeification","rune")}.`,
            53: x => `${toTextStyle("Omnipotence","omni")} Tier 41 reward is improved.`,
            56: x => `Passively generate ${x} of ${toTextStyle("Rune","rune")} fragments you gained on reset. ${toTextStyle("Rune","rune")} fragments update the condensed to best.`,
            60: x => `The first ${toTextStyle("God","god")}'s punishment is lifted. <i>Three steps left...</i>`,
            63: x => `The ${toTextStyle("God","god")} lifted its punishments for you and lets you unlock the ${toTextStyle("ULTIMATE","god")} stage called ${toTextStyle("???","god")}.`,
        },

        'su-os1-req': `${toTextStyle("Omnipotence","omni")} Tier 3`,
        'su-os1-name': 'Omni-Shark Strength',
        'su-os1-desc': `Doubles ${toTextStyle('Fish Antimatter','antimatter')} consumed per level.`,

        'su-os2-req': `${toTextStyle("Omnipotence","omni")} Tier 4`,
        'su-os2-name': 'Omni-Shark Agility',
        'su-os2-desc': `Increases the base of 'Omni-Shark Strength' by <b>+1</b> per level.`,

        'su-os3-req': `${toTextStyle("Omnipotence","omni")} Tier 6`,
        'su-os3-name': 'Omni-Shark Synergism',
        'su-os3-desc': `Increases ${toTextStyle('Fish Antimatter','antimatter')} consumed by <b>×lg(${toTextStyle('Fish Antimatter','antimatter')})</b> per level.`,

        'su-os4-req': `${toTextStyle("Omnipotence","omni")} Tier 29`,
        'su-os4-name': 'Omni-Shark Exponent',
        'su-os4-desc': `Increases the exponent of ${toTextStyle('Fish Antimatter','antimatter')} by <b>+1%</b> per level.`,

        'su-t1-req': `${toTextStyle("Omnipotence","omni")} Tier 7`,
        'su-t1-name': 'Super Omni-Shark Strength',
        'su-t1-desc': `Triples ${toTextStyle('Fish Antimatter','antimatter')} consumed per level.`,

        'su-t2-req': `${toTextStyle("Omnipotence","omni")} Tier 9`,
        'su-t2-name': 'Omni-Shark Transcendence',
        'su-t2-desc': `Doubles ${toTextStyle('Transcendental','transcend')} shards gained per level.`,

        'condense': "Condense",
        'condensed': x => `(${x} condensed)`,

        'condensers': [
            x => `${x} boost to ${toTextStyle('Transcendental','transcend')} shards`,
            x => `${x} boost to ${toTextStyle('Undead Essence','undead')} and <b>Game Speed</b>`,
            x => `${x} boost to ${toTextStyle('Atomic Nucleus','atom')} and <b>Decay Yield</b>`,
            x => `${x} boost to ${toTextStyle('Rune','rune')} fragments`,
        ],

        'undead-upgrades': [
            [`Undead Fish`,x=>`${toTextStyle('Fish Antimatter','antimatter')} is powered by ${x}.`],
            [`Undead Prestige`,x=>`${toTextStyle('Transcendental','transcend')} shards are powered by ${x}.`],
            [`Undead Chance`,x=>`${toTextStyle('Undead Essence','undead')}'s chance is increased by ${x}.`],
            [`Undead Yield`,x=>`${toTextStyle('Undead Essence','undead')} is increased by ${x}.`],

            [`Undead Antimatter`,x=>`${toTextStyle('Undead Essence','undead')} is increased by ${x}.`],
            [`Undead Transcendence`,x=>`${toTextStyle('Undead Essence','undead')} is increased by ${x}.`],
            [`Undead Strength`,x=>`The 1st, 2nd, 5th, and 6th ${toTextStyle('Undead','undead')} upgrades are ${x} stronger.`],
            [`Undead Strength II`,x=>`The power of 'Undead Strength' is increased to ${x}.`],
        ],

        'decay-series-boosts': [
            [
                x => `Increase the base of 'Undead Yield' by ${x}.`,
                x => `Increase the chance of ${toTextStyle('Undead Essence','undead')} by ${x}.`,
            ],[
                x => `Power ${toTextStyle('Fish Antimatter','antimatter')} by ${x}.`,
            ],[
                x => `Power ${toTextStyle('Transcendental','transcend')} shards by ${x}.`,
            ],[
                x => `Strengthen the first 3 ${toTextStyle("Omni-Shark","omni")} ${toTextStyle('Fish Antimatter','antimatter')} upgrades by ${x}.`,
                x => `Strengthen ${toTextStyle("Omni-Shark","omni")} ${toTextStyle('Transcendental','transcend')} upgrades by ${x}.`,
                x => `Strengthen the fourth ${toTextStyle("Omni-Shark","omni")} ${toTextStyle('Fish Antimatter','antimatter')} upgrades by ${x}.`,
            ],[
                x => `Strengthen the first 7 ${toTextStyle('Undead','undead')} upgrades by ${x}.`,
            ],[
                x => `Power the effect of ‘Undead Antimatter’ & ‘Undead Transcendence’ by ${x}.`,
            ],[
                x => `${toTextStyle("Omni-Shark","omni")} ${toTextStyle('Fish Antimatter','antimatter')} upgrades' cost is rooted by ${x}.`,
            ],[
                x => `Strengthen the first 4 nuclei by ${x}.`,
                x => `The first boost affects the 5-7th nuclei.`,
            ],[
                x => `Power ${toTextStyle('Undead Essence','undead')} by ${x}.`,
            ],[
                x => `Power the effect of condensed ${toTextStyle('Atomic Nucleus','atom')} by ${x}.`,
                x => `Power the effect of alpha particle by ${x}.`,
            ],[
                x => `Divide the requirement of next isotope by ${x}.`,
            ],[
                x => `Power ${toTextStyle('Fish Antimatter','antimatter')} by ${x} to the exponent.`,
            ],[
                x => `Power ${toTextStyle('Transcendental','transcend')} shards by ${x} to the exponent.`,
            ],[
                x => `Strengthen the 8th ${toTextStyle('Undead','undead')} upgrade by ${x}.`,
            ],[
                x => `Strengthen the 8-10th nuclei by ${x}.`,
                x => `The first boost affects the 11-13th nuclei.`,
            ],[
                x => `Power the Helium-3's base by ${x}.`,
            ],[
                x => `Generate ${x} <sup>235</sup>U nuclei every second, affected by game speed.`,
            ],
        ],
        'full-element-name': [
            'Neutronium',
            'Hydrogen','Helium','Lithium','Beryllium','Boron','Carbon','Nitrogen','Oxygen','Fluorine','Neon',
            'Sodium','Magnesium','Aluminium','Silicon','Phosphorus','Sulfur','Chlorine','Argon','Potassium','Calcium',
            'Scandium','Titanium','Vanadium','Chromium','Manganese','Iron','Cobalt','Nickel','Copper','Zinc',
            'Gallium','Germanium','Arsenic','Selenium','Bromine','Krypton','Rubidium','Strontium','Yttrium','Zirconium',
            'Niobium','Molybdenum','Technetium','Ruthenium','Rhodium','Palladium','Silver','Cadmium','Indium','Tin',
            'Antimony','Tellurium','Iodine','Xenon','Caesium','Barium','Lanthanum','Cerium','Praseodymium','Neodymium',
            'Promethium','Samarium','Europium','Gadolinium','Terbium','Dysprosium','Holmium','Erbium','Thulium','Ytterbium',
            'Lutetium','Hafnium','Tantalum','Tungsten','Rhenium','Osmium','Iridium','Platinum','Gold','Mercury',
            'Thallium','Lead','Bismuth','Polonium','Astatine','Radon','Francium','Radium','Actinium','Thorium',
            'Protactinium','Uranium','Neptunium','Plutonium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium',
            'Mendelevium','Nobelium','Lawrencium','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadium',
            'Roeritgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson'
        ],

        'decay-chain-max': "Buy Max",
        'decay-chain-buy-all': "Attempt to purchase all possible atoms",
        
        'alpha-particle-div': `Decayed nuclei have generated <h3 id="alpha-particle-amount">0</h3> <span id="alpha-particle-gain"></span> alpha particles, which boosts ${toTextStyle('Atomic Nucleus','atom')} by <h3 id="alpha-particle-effect">???</h3>.`,
        'beta-particle-div': `Decayed nuclei have generated <h3 id="beta-particle-amount">0</h3> <span id="beta-particle-gain"></span> beta particles, which boosts the game speed by <h3 id="beta-particle-effect">???</h3>.`,
        'gamma-ray-particle-div': `Uranum-236 nuclei has generated <h3 id="gamma-ray-particle-amount">0</h3> <span id="gamma-ray-particle-gain"></span> gamma rays, which powers alpha & beta particles by <h3 id="gamma-ray-particle-effect">???</h3>.`,
        'energy-particle-div': `Uranum-236 nuclei has generated <h3 id="energy-particle-amount">0</h3> <span id="energy-particle-gain"></span> MeV of energy, which boosts decay yield by <h3 id="energy-particle-effect">???</h3>.`,
        'barium-particle-div': `Uranum-236 nuclei has generated <h3 id="barium-particle-amount">0</h3> <span id="barium-particle-gain"></span> Barium-141 nuclei, which powers ${toTextStyle('Fish Antimatter','antimatter')} by <h3 id="barium-particle-effect">???</h3>.`,
        'krypton-particle-div': `Uranum-236 nuclei has generated <h3 id="krypton-particle-amount">0</h3> <span id="krypton-particle-gain"></span> Krypton-92 nuclei, which powers ${toTextStyle('Transcendental','transcend')} shards by <h3 id="krypton-particle-effect">???</h3>.`,

        'uranium-235-fission': `Insert one neutron into Uranium-235 to start fission.`,

        'isotopes-div': `You have <h3 id="isotopes-amount">0 / 0</h3> isotopes. (+1 at <h4 id="isotopes-next">???</h4> ${toTextStyle('Atomic Nucleus','atom')})
        <subtitle>Note: Downgrading any isotope forces a ${toTextStyle('Reaction','atom')} reset. Hover any isotope to show its effect.</subtitle>`,
        'isotope-rewards': [
            [
                x => `The exponent of ${toTextStyle('Atomic Nucleus','atom')}’ base is increased by ${x}.`,
                x => `The exponent of ${toTextStyle('Atomic Nucleus','atom')}’ base is increased by ${x}.`,
                x => `The exponent of ${toTextStyle('Atomic Nucleus','atom')}’ base is increased by ${x}.`,
                x => `The exponent of ${toTextStyle('Atomic Nucleus','atom')}’ base is increased by ${x}.`,
            ],[
                x => `${toTextStyle('Undead Essence','undead')} is multiplied by ${x[0]} per square-rooted amount of ‘Undead Antimatter’ and ‘Undead Transcendence’. (Currently ${x[1]})`,
                x => `The base of this first isotope is increased by ${x[0]} per this isotope. (Currently ${x[1]})`,
                x => `The exponent of this first isotope is increased to ${x}.`,
                x => `The exponent of this first isotope is increased to ${x}.`,
                x => `The exponent of this first isotope is increased to ${x}.`,
            ],[
                x => `The exponent of ${toTextStyle('Transcendental','transcend')} shard's base is increased by ${x}.`,
                x => `The exponent of ${toTextStyle('Transcendental','transcend')} shard's base is increased by ${x}.`,
                x => `The exponent of ${toTextStyle('Transcendental','transcend')} shard's base is increased by ${x}.`,
                x => `The exponent of ${toTextStyle('Transcendental','transcend')} shard's base is increased by ${x}.`,
            ],[
                x => `${toTextStyle('Undead Essence','undead')} is multiplied by ${x[0]} per cube-rooted 100% chance to catch ${toTextStyle('Undead Essence','undead')}. (Currently ${x[1]})`,
                x => `The base of this first isotope is increased by ${x[0]} per this isotope. (Currently ${x[1]})`,
                x => `The exponent of this first isotope is increased to ${x}.`,
                x => `The exponent of this first isotope is increased to ${x}.`,
            ],[
                x => `Lead-207 is twice stronger.`,
                x => `The softcap of Bismuth-211’s third effect is weaker.`,
                x => `Polonium-215 affects ‘Undead Yield’ at an extremely reduced rate. (Currently ${x})`,
                x => `The second effect of Astatine-219 is stronger.`,
            ],[
                x => `Lead-211 is ${x} stronger.`,
                x => `Lead-211 is ${x} stronger.`,
                x => `Lead-211 is ${x} stronger.`,
                x => `Lead-211 is ${x} stronger.`,
                x => `Lead-211 is ${x} stronger.`,
            ],[
                x => `The exponent of condensed ${toTextStyle('Transcendental','transcend')} shard's boost is increased by ${x}.`,
                x => `The exponent of condensed ${toTextStyle('Transcendental','transcend')} shard's boost is increased by ${x}.`,
                x => `The exponent of condensed ${toTextStyle('Transcendental','transcend')} shard's boost is increased by ${x}.`,
                x => `The exponent of condensed ${toTextStyle('Transcendental','transcend')} shard's boost is increased by ${x}.`,
                x => `The exponent of condensed ${toTextStyle('Transcendental','transcend')} shard's boost is increased by ${x}.`,
            ],
        ],

        'runes': {
            'fehu': [
                `Fehu`,
                `Powers ${toTextStyle('Fish Antimatter','antimatter')} to the exponent (based on current ${toTextStyle('Fish Antimatter','antimatter')}).`,
                x => `${toTextStyle('Fish Antimatter','antimatter')} is powered by ${x} to the exponent.`,
            ],
            'berkanan': [
                `Berkanan`,
                `Powers ${toTextStyle('Transcendental','transcend')} shards to the exponent (based on current ${toTextStyle('Transcendental','transcend')} shards).`,
                x => `${toTextStyle('Transcendental','transcend')} shards are powered by ${x} to the exponent.`,
            ],
            'kaunan': [
                `Kaunan`,
                `Powers ${toTextStyle('Undead Essence','undead')} (based on current ${toTextStyle('Undead Essence','undead')}).`,
                x => `${toTextStyle('Undead Essence','undead')} is powered by ${x}.`,
            ],
            'naudiz': [
                `Naudiz`,
                `Powers ${toTextStyle('Atomic Nucleus','atom')} (based on current ${toTextStyle('Atomic Nucleus','atom')}).`,
                x => `${toTextStyle('Atomic Nucleus','atom')} is powered by ${x}.`,
            ],
            'uruz': [
                `Uruz`,
                `Strengthens non-Uruz adjacent ${toTextStyle("Runes","rune")}.`,
                x => `Non-Uruz adjacent ${toTextStyle("Runes","rune")} are ${x} stronger.`,
            ],
        },
        'short-rune-essence': 'RE',

        'rune-upgrades': [
            x => `Fehu ${toTextStyle("Runes","rune")} are ${x} stronger.`,
            x => `Berkanan & Kaunan ${toTextStyle("Runes","rune")} are ${x} stronger.`,
            x => `Naudiz ${toTextStyle("Runes","rune")} are ${x} stronger.`,
            x => `Adds ${x} ${toTextStyle("Rune","rune")} Essence.`,
        ],

        'rune-clear-all': `Clear all ${toTextStyle("Runes","rune")}`,
        'rune-erase-mode': bool => bool ? "Cancel erasing" : "Erase mode",
        'rune-sacrificed': "SACRIFICED",

        'rune-sacrifice': [
            [
                `Sacrifice Tier I`,
                [
                    `Fehu ${toTextStyle("Rune","rune")} have no effect.`,
                    `‘Undead Fish’ ${toTextStyle('Undead','undead')} upgrade, Barium-141, Thallium-207, and Francium-223 have no effect.`,
                ],
                `Sacrifice Fehu ${toTextStyle("Rune","rune")} completely.`,
            ],[
                `Sacrifice Tier II`,
                [
                    `Berkanan ${toTextStyle("Rune","rune")} have no effect.`,
                    `‘Undead Prestige’ ${toTextStyle('Undead','undead')} upgrade, Krypton-92, Polonium-211, Thorium-227, and condensed ${toTextStyle('Transcendental','transcend')} shards have no effect.`,
                    `${toTextStyle('Transcendental','transcend')} shards are reduced to logarithmic.`,
                ],
                `Sacrifice Berkanan ${toTextStyle("Rune","rune")} completely.`,
            ],[
                `Sacrifice Tier III`,
                [
                    `Kaunan  ${toTextStyle("Rune","rune")} have no effect.`,
                    `‘Undead Chance’, ‘Undead Antimatter’ and ‘Undead Transcendence’ ${toTextStyle('Undead','undead')} upgrades, Helium-3, Carbon-11, Radon-219, and condensed ${toTextStyle('Undead Essence','undead')} have no effect.`,
                ],
                `Sacrifice Berkanan ${toTextStyle("Rune","rune")} completely.`,
            ],
        ],

        'rune-sacrifice-state': [
            `Start sacrificing this ${toTextStyle("Rune","rune")}.`,
            `Cancel sacrificing this ${toTextStyle("Rune","rune")}.`,
            `Finish sacrificing this ${toTextStyle("Rune","rune")}.`
        ],

        get 'reset-transcend-message'() {
            let p = toTextStyle('Transcendence','transcend'), s = toTextStyle('Omni-Shark','omni'), f = toTextStyle('Fish Antimatter','antimatter')
            return `
            <h3>${p}</h3><br>
            ${p} is the first omni-reset layer. Transcending resets your ${s} upgrades and ${f} for ${toTextStyle('Transcendental','transcend')} shards.
            First ${p} unlocks new ${s} upgrades.<br>
            <img src="textures/TranscendentalShard.png"><br>
            Are you sure you want to transcend?
            `
        },
        get 'reset-reaction-message'() {
            let c = toTextStyle('Reaction','atom'), m = toTextStyle('Atomic Nucleus','atom'), p = toTextStyle('Transcendental','transcend')
            return `
            <h3>The ${c}</h3><br>
            The ${c} is the second omni-reset layer. Doing the reaction resets everything ${p} does, as well as ${p} shards, ${p} upgrades, some ${toTextStyle('Research','prestige')}, and ${toTextStyle('Undead Essence','undead')} for ${m}.<br>
            <img src="textures/Nucleus.png"><br>
            Are you sure you want to do the reaction?
            `
        },
        get 'reset-runeification-message'() {
            let c = toTextStyle('Runeification','rune'), m = toTextStyle('Rune','rune'), p = toTextStyle('Reaction','atom')
            return `
            <h3>The ${c}</h3><br>
            The ${c} is the third omni-reset layer. Runeificating resets everything ${p} does, as well as ${toTextStyle('Atomic Nucleus','atom')}, ${toTextStyle('Actinium','atom')} radioactive decay, ${toTextStyle('Atom','atom')} particles, isotopes, and some research for ${m} Fragments.<br>
            <subtitle>However, it also resets pre-Runeification ${toTextStyle("Condensers","omni")} (as well as after ${toTextStyle("Omnipotence","omni")} Tier 40). Most ${m} features are persisted through ${toTextStyle("Shark","shark")} ${toTextStyle("Omnipotence","omni")}, but ${m} fragments are reset.</subtitle>
            <img src="textures/Rune.png"><br>
            Are you sure you want to runeificate?
            `
        },

        'confirm-transcend': "Transcend",
        'confirm-reaction': "Reaction",
        'confirm-runeification': "Runeification",

        'progress-28-text': r => `Reach ${format(r)} total ${toTextStyle('Fish Antimatter','antimatter')}`, 
        get 'progress-28-cond-text'() { return `Do a ${toTextStyle('Transcendence','transcend')}` },

        'progress-29-text': r => `Reach ${format(r)} ${toTextStyle('Transcendental','transcend')} shards`, 
        get 'progress-29-cond-text'() { return `Do a ${toTextStyle('Reaction','atom')}` },

        'progress-30-text': r => `Reach ${format(r)} total ${toTextStyle('Fish Antimatter','antimatter')}`, 
        get 'progress-30-cond-text'() { return `Do a ${toTextStyle('Runeification','rune')}` },

        'progress-31-text': r => `???`,

        'auto-osu-name': `Auto-${toTextStyle("Omni-Shark","omni")} ${toTextStyle('Fish Antimatter','antimatter')} Upgrade`,
        'auto-ostu-name': `Auto-${toTextStyle("Omni-Shark","omni")} ${toTextStyle('Transcendental','transcend')} Upgrade`,
        'auto-ue-name': `Auto-${toTextStyle('Undead Essence','undead')} Upgrade`,
        'auto-nucleus-name': `Auto-${toTextStyle('Nucleus','atom')}`,

        'god-info': `"Repeat, the ${toTextStyle("Shark God","god")} lets you go to the final stage! Then everything is wiped before this point, and it is irreversible! But the ${toTextStyle("Shark God","god")} gives you an ability to produce ${toTextStyle("Omni-Fish","god")} that almost exceeds the ${toTextStyle("Godverse","god")}. Or... it means it almost ready to rebirth ${toTextStyle("Shark","shark")}... So, you have no choice..."`,
        'overmodify-shark': `Overmodify the ${toTextStyle("Shark","shark")}.`,

        'god-fish-div': `The ${toTextStyle('God Shark','god')} has annihilated <h2>${toTextStyle('0','god','god-fish-amount')}</h2> <span id="god-fish-gain"></span> omni-fish.`,

        'omni-fish-name': "Omni-Fish",
        'omni-fish-costName': toTextStyle('Omni-Fish','god'),

        'endings': [
            `Congrulations! You beat the game in`,
            `You have 3 options: ${toTextStyle("Rebirth","rebirth")} your ${toTextStyle("Shark","shark")} for an extra content; import the game; reset to the previous.`
        ],
        'ending-options': [
            `Rebirth ${toTextStyle("Shark","shark")}`,
            `Import from prompt`,
            `Import from file`,
            `Reset to the previous`
        ],

        'tab-rebirth': `${toTextStyle('Rebirth','rebirth')}`,
        'tab-rebirth-upgs': `${toTextStyle('Rebirth','rebirth')} Upgrades`,
        'tab-rebirth-past10': `Past 10 ${toTextStyle('Rebirths','rebirth')}`,

        'rebirth-points-div': `You have <h3>${toTextStyle('???','rebirth','rebirth-amount')}</h3> rebirth points, which gives you <h3>${toTextStyle('???','rebirth','global-mult')}</h3> to global mult.`,

        'rebirth-upgrades': [
            ["The Classic Automation", `Unlock the ${toTextStyle('Shark','shark')}, ${toTextStyle('Prestige','prestige')}, and ${toTextStyle('Core','core')} automations permanently.`],
            ["Galactic Cultivation", `Unlock the ${toTextStyle('Evolution','humanoid')} and ${toTextStyle('Singularity','black-hole')} automations permanently.`],
            ["Hadronic Assembler", `Unlock the ${toTextStyle('Hadron','hadron')}-related automations permanently.`],
            ["Antimatter Automation I", `Unlock the ${toTextStyle('Omnipotence','omni')}-related automations permanently.`],
            ["Antimatter Automation II", `Automatically update ${toTextStyle('Omnipotence','omni')} tier without reset required.`],
            ["The Classic Generation", `Unlock the ${toTextStyle('Prestige','prestige')} point and ${toTextStyle('Magmatic','core')} fragment generations permanently. `],
            ["Humanoid Shark Population", `Unlock the ${toTextStyle('Humanoid','humanoid')} shark generation permanently.`],
            ["Self-duplicate Particle", `Unlock the ${toTextStyle('Singularity','black-hole')}-related and ${toTextStyle('Fundamental Particle','hadron')} generations permanently.`],
            ["Antimatter Triad", `Unlock the ${toTextStyle('Omnipotence','omni')}-related generations permanently.`],
            ["Extra Multiplier", `Gain <b>+50%</b> more global multiplier.`],
        ],

        'rebirth-upgrades-note': `Note: Most rebirth upgrades are unknowingly unimplemented, contact the developer if you notice the upgrade that gives noting.`,
        'rebirth-time': `Time played on ${toTextStyle('Rebirth','rebirth')}`,
        'rebirth-points': `${toTextStyle('Rebirth','rebirth')} Points`,

        'global-mult-title': `Products of Global Mult`,
        'global-mults': {
            base: x => `${x} multiplier base`,
            time: x => `${x} from the fastest ${toTextStyle('Rebirth','rebirth')}`,
            other: x => `${x} from other sources`,
        },

        // Automation

        'auto-shark-name': `Auto-${toTextStyle("Shark","shark")} Level`,
        'auto-su-name': `Auto-${toTextStyle("Shark","shark")} ${toTextStyle("Fish","fish")} Upgrade`,
        'auto-spu-name': `Auto-${toTextStyle("Shark","shark")} ${toTextStyle("Prestige","prestige")} Upgrade`,
        'auto-eu-name': `Auto-Exploration Upgrade`,
        'auto-core_reactor-name': `Auto-${toTextStyle("Core","core")} Reactor`,
        'auto-core_radiation-name': `Auto-${toTextStyle("Core","core")} Radiation`,
        'auto-radioactive_boosts-name': `Auto-Radioactive Boosts`,
        'auto-mining_upgs-name': `Auto-${toTextStyle("Shark","shark")} Mining Upgrade`,
        'auto-humanoid-name': `Auto-${toTextStyle("Humanoid","humanoid")} Shark`,
        'auto-research-name': `Auto-Pre-${toTextStyle("Singularity","black-hole")} Research`,
        'auto-mining_tier-name': `Auto-Mining Tier`,
        'auto-remnant-name': `Auto-${toTextStyle("Remnant","black-hole")} Upgrades`,
        'auto-faith-name': `Auto-${toTextStyle("Sharkoid Faith","humanoid")}`,

        'auto-sing_research-name': `Auto-${toTextStyle("Singularity","black-hole")} Research`,
        'auto-evolution_tree-name': `Auto-${toTextStyle("Evolution","humanoid")} Tree`,
        'auto-rocket_part-name': `Auto-Rocket Part`,
        'auto-mining_ascend-name': `Auto-Mining Ascension`,
        'auto-nucleobase-name': `Auto-Nucleobases`,
        'auto-gal_eu-name': `Auto-Galactic Exploration Upgrade`,

        'auto-cost': (D,cost,name) => `Decrease Interval by ${formatReduction(D,0)}.<br>Cost: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Interval: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress

        'progress-0-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')}`, 
        get 'progress-0-cond-text'() { return `Do a ${toTextStyle('Prestige','prestige')}` },

        'progress-1-text': r => `Reach ${format(r)} ${toTextStyle('Prestige','prestige')} shards to unlock Automation`,
        'progress-2-text': r => `Reach ${format(r)} ${toTextStyle('Prestige','prestige')} shards to unlock Research`,
        'progress-3-text': r => `Reach ${toTextStyle('Shark','shark')} Level ${format(r,0)} to unlock Exploration`,
        'progress-4-text': r => `Reach ${format(r)}m of Pacific ocean's depth to unlock the ${toTextStyle('Core','core')}`,

        'progress-5-text': r => `Reach ${format(r)} total ${toTextStyle('Prestige','prestige')} shards`, 
        get 'progress-5-cond-text'() { return `Enter the ${toTextStyle('Core','core')}` },

        'progress-6-text': r => `Reach ${format(r)} ${toTextStyle('Magmatic','core')} fragments to unlock the next ${toTextStyle('Core','core')} feature`, 
        'progress-7-text': r => `Reach ${toTextStyle('Shark','shark')} Level ${format(r,0)} to unlock new ocean type`, 
        'progress-8-text': r => `Reach ${format(r)} ${toTextStyle('Magmatic','core')} fragments to unlock the next ${toTextStyle('Core','core')} feature`, 
        'progress-9-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')} to unlock new ${toTextStyle('Core','core')} reactors`, 

        'progress-10-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')}`, 
        get 'progress-10-cond-text'() { return `Evolve your ${toTextStyle('Sharks','shark')}` },

        'progress-11-text': r => `Reach ${format(r,0)} ${toTextStyle('Humanoid','humanoid')} sharks to unlock the next ${toTextStyle('Evolution','humanoid')} feature`, 
        'progress-12-text': r => `Reach ${format(r,0)} ${toTextStyle('Humanoid','humanoid')} sharks to unlock the next ${toTextStyle('Evolution','humanoid')} feature`, 
        'progress-13-text': r => `Reach Mining Tier ${format(r,0)} to unlock a new row of ${toTextStyle('Evolution','humanoid')} tree`, 
        'progress-14-text': r => `Reach Mining Tier ${format(r,0)} to unlock the next ${toTextStyle('Evolution','humanoid')} feature`, 
        'progress-15-text': r => `Reach Mining Tier ${format(r,0)} to unlock the next ${toTextStyle('Evolution','humanoid')} feature`,

        'progress-16-text': r => `Fill ${format(r,0)} particle accelerators`, 
        get 'progress-16-cond-text'() { return `Form ${toTextStyle('Black Hole','black-hole')}` },

        'progress-17-text': r => `Form ${format(r,0)} ${toTextStyle('Black Holes','black-hole')}`,

        'progress-18-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')}`, 
        get 'progress-18-cond-text'() { return `Do a ${toTextStyle('Sacrifice','black-hole')}` },

        'progress-19-text': r => `Reach ${format(r)} total ${toTextStyle('Dark Matter','black-hole')}`,

        'progress-20-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')}`, 
        get 'progress-20-cond-text'() { return `Do a ${toTextStyle('Hadronize','hadron')}` },

        'progress-21-text': r => `Reach ${format(r,0)} total ${toTextStyle('Fundamental Particles','hadron')} to unlock the next feature`, 
        'progress-22-text': r => `Reach ${format(r)} total ${toTextStyle('Fundamental Particles','hadron')} to unlock the third nucleobase`, 
        'progress-23-text': r => `Reach ${toTextStyle('Shark','shark')} Tier ${format(r,0)} to unlock the next feature`,
        'progress-24-text': r => `Reach ${format(r)} total ${toTextStyle('Fundamental Particles','hadron')} to unlock the fourth nucleobase`, 
        'progress-25-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')} to unlock the next feature`,
        'progress-26-text': r => `Reach ${format(r)}nm of DNA to unlock the fifth nucleobase`,

        'progress-27-text': r => `I won't give you a requirement to prove your ${toTextStyle('Shark','shark')}'s worth!`,
        get 'progress-27-cond-text'() { return `Prove worth...` },

        'maxed-progress': "All features unlocked!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestige','prestige'), s = toTextStyle('Shark','shark'), f = toTextStyle('Fish','fish')
            return `
            <h3>${p}</h3><br>
            ${p} is the first reset layer. Prestiging resets your ${s}, ${s} upgrades, and ${f} for ${p} shards.
            First ${p} unlocks new ${s} upgrades.<br>
            <img src="textures/PrestigeShard.png"><br>
            Are you sure you want to prestige?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Core','core'), m = toTextStyle('Magmatic','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>The ${c}</h3><br>
            The ${c} is the second reset layer. Entering the core resets everything ${p} does, as well as ${p} shards, ${p} upgrades, some ${toTextStyle('Research','prestige')}, and Exploration for ${m} fragments.
            It also unlocks the ${c} reactor.<br>
            <img src="textures/Magmatic.png"><br>
            Are you sure you want to enter the core?
            `
        },
        get 'reset-humanoid-message'() {
            let e = toTextStyle('Evolution','humanoid'), c = toTextStyle('Core','core'), m = toTextStyle('Magmatic','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>The ${e}</h3><br>
            <subtitle>“Mutating will make sharks wild, turning them into humanoid sharks. However with a cost of everything you had up to this point.”</subtitle>
            The ${e} is the third reset layer. Evolving sharks will reset everything the ${c} does, as well as ${m} fragments, ${c} reactors, ${c} radiation, ${c} assembler, and some ${toTextStyle('Research','prestige')} for ${toTextStyle('Humanoid','humanoid')} sharks.
            It also unlocks the Rank and the ${e} tree.<br>
            <img src="textures/Evolution.png"><br>
            Are you sure you want to evolve your sharks?
            `
        },
        get 'reset-black-hole-message'() {
            let e = toTextStyle('Black Hole','black-hole'), c = toTextStyle('Evolution','humanoid')
            return `
            <h3>The ${e}</h3><br>
            The ${e} is the fourth and major reset layer.
            Forming the ${e} resets everything ${c} does, as well as shark rank, humanoid sharks, evolution tree, sharkoid faith, evolution goals, cultivation, forge, particle accelerators, some research, some automations, and some feature progress for a new ${e}.
            However, every ${e} reduces resources a bit, but it unlocks benefits like milestones.<br>
            <img src="textures/black-hole.png"><br>
            Are you sure you want to enter another universe?
            `
        },
        get 'reset-sacrifice-message'() {
            let e = toTextStyle('Sacrifice','black-hole'), c = toTextStyle('Black Hole','black-hole')
            return `
            <h3>The ${e}</h3><br>
            The ${e} is the reset mini-layer.
            Sacrificing your sharks resets everything the ${c} does, as well as current black holes (except the first 7 milestones), remnants, remnant upgrades, and some research for ${toTextStyle('Dark Matter','black-hole')}.<br>
            <img src="textures/sacrifice.png"><br>
            Are you sure you want to sacrifice your sharks?
            `
        },
        get 'reset-hadron-message'() {
            let e = toTextStyle('Hadronize','hadron'), c = toTextStyle('Sacrifice','black-hole')
            return `
            <h3>The ${e}</h3><br>
            The ${e} is the fifth and major reset layer.
            Making sharks go beyond the omniverse resets everything ${c} does, as well as dark matter, post-16 remnant upgrades, solar system (including rocket parts), black hole tiers, constellation resources, singularity milestones, mining ascensions and their ores, and some post-singularity research for ${toTextStyle('Fundamental Particles','hadron')}. It also unlocks the starter upgrades, more research and automations.<br>
            <img src="textures/hadronize.png"><br>
            Are you sure you want to go beyond the omniverse?
            `
        },
        
        // Other

        'scalings': {
            'shark_level' : `Shark Level`,
            'shark_rank' : `Shark Rank`,
            'shark_tier' : `Shark Tier`,
            'su_s3' : `"Shark Teeth" Upgrade`,
            'su_s4' : `"Shark Exponent" Upgrade`,
            'su_m1' : `"Mining Damage" Upgrade`,
            'su_m3' : `"Compressed Stone" Upgrade`,
            'su_m5' : `"Basic Ore" Upgrade`,
            'cr_boost' : `Radioactive Boost`,
            'mining_tier' : `Mining Tier`,
            'mining_ascend' : `Mining Ascension`,
            'remnant_upg' : `Remnant Upgrades`,
            'bh_tier' : `Black Hole Tier`,
            'decay_series' : `Decay Nucleus`,
            'isotopes' : `Isotopes`,
            'rune_upg1' : `First 3 Rune Upgrades`,
            'rune_upg2' : `Fourth Rune Upgrade`,
        },
        'scaling-start': "Starts at",
        'scaling-mode': {
            "L": x => `<b>${x}</b> linearly`,
            "D": x => `<b>${x}</b> to exponent`,
        },
        'scaling-info': `Scalings will be added as soon as you reach them. <b>N</b> - amount, <b>S</b> - starting`,

        'upgrade-shark': x => `Upgrade ${toTextStyle('Shark','shark')} Level<br>Cost: ${x.format(0)} ${toTextStyle('Fish','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} ${toTextStyle('Fish','fish')}'s base`,
        'shark-bonus-prestige': x => `${formatMult(x)} ${toTextStyle('Prestige','prestige')} shard`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('Magmatic','core')} fragments`,
        'shark-bonus-remnants': x => `+${x.format(0)} ${toTextStyle('Remnants','black-hole')}`,

        'shark-overpopulation': (x,y) => `Due to ${toTextStyle('Shark','shark')} overpopulation at <h4>${toTextStyle(format(y),'fish')}</h4>, ${toTextStyle('Fish','fish')} eaten is reduced by <h4>${format(x,3)}√</h4>.`,

        'shark-rank-bonuses': {
            fish: x => `${formatPow(x)} ${toTextStyle('Fish','fish')}`,
            prestige: x => `${formatPow(x)} ${toTextStyle('Prestige','prestige')} shard`,
            mining_damage: x => `${formatMult(x)} Mining Damage`,
            so: x => `${formatPow(x)} ${toTextStyle('Shark','shark')} overpopulation delay`,
            vibranium: x => `${formatMult(x)} <b>Vibranium</b>`,
            remnants: x => `${formatMult(x)} ${toTextStyle('Remnants','black-hole')}`,
        },

        'shark-tier-bonuses': {
            fish: x => `${x} ${toTextStyle('Fish','fish')} to the exponent`,
            hadron: x => `${x} ${toTextStyle('Fundamental Particles','hadron')}`,
            prestige: x => `${x} ${toTextStyle('Prestige','prestige')} shards to the exponent`,
            nucleobase: x => `${x} nucleobase's experience`,
            fish2: x => `${x} ${toTextStyle('Fish','fish')} to the tetration`,
        },

        'amount': "Amount",
        'total': "total",
        'level': "Level",
        'effect': "Effect",
        'cost': "Cost",
        'goal': "Goal",
        'buyMax': "Buy Max",
        'require': "Require",
        'next-at': "Next at",
        'depth': "Depth",
        'reward': "Reward",
        'new-preset': "New Preset",
        'maxed': "Maxed",
        'difficulty': "Difficulty",
        'score': "Score",
        'picked': "Picked",

        'remove': "Remove",
        'overwrite-current': "Overwrite Current",
        'load': "Load",
        'force-load': "Force Load",
        'you-have': "You have",

        'offline-time-text': x=>`You have been offline for <b>${formatTime(x,0)}</b>.`,

        'research-afford': bool => bool ? "Purchase" : "Can't Afford",
        'research-bought': bool => bool ? `<b>Purchased</b>` : `<b>Not Purchased</b>`,
        'research-pages': x => `${x} pages`,

        'purchased': "Purchased",

        'off-on': bool => bool ? "ON" : "OFF",

        'popup-buttons': [
            ["Yes","No"],
            ["Ok","Cancel"],
        ],

        'popup-desc' : {
            import: `Paste in your save. WARNING: WILL OVERWRITE YOUR CURRENT SAVE!`,
            wipe: `Are you sure you want to wipe your save? To wipe, type "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
            "evolution-tree-respec": `Are you sure you want to respec ${toTextStyle('Evolution','humanoid')} tree? It will trigger an ${toTextStyle('Evolution','humanoid')} reset, not gaining ${toTextStyle('Humanoid','humanoid')} sharks.`,
            "evolution-tree-import": `Paste in your evolution tree.`,
            "starter-upgrade-warning": `Are you sure you want to purchase this starter upgrade? You should purchase upgrade <b>"Shark Tier"</b>!`,
            "rebirth-confirm": `${toTextStyle('Rebirth','rebirth')} is the post-end feature that helps you progress faster through the main stage. ${toTextStyle('Rebirthing','rebirth')} the shark resets EVERYTHING POSSIBLE, except options and humanoid tree presets. It rewards you with a ${toTextStyle('Rebirth','rebirth')} point and increases your global multiplier for almost every currency. You can spend ${toTextStyle('Rebirth','rebirth')} points on buying ${toTextStyle('Rebirth','rebirth')} upgrades to make your progress faster.<br><br>Are you sure you want your shark to rebirth?`,
            "rebirth-undo": `Are you sure you want to reset to the previous?`,
        },

        'notify-desc' : {
            save: "Game Saved!",
            copy_to_clipboard: "Copied to Clipboard!",
            forge_completed: x => `Forged <b>${x}</b> successfully!`,
        },

        'radio-desc' : {
            'notation': ['Formatting Notation',['Scientific','Standard','Mixed Scientific','Logarithm']],
            'comma-format': ['Maximum OoMs of Number Commas',['3','6','9','12','15']],
            'autosave': ['Autosaving',['Disabled','Enabled']],
            'autosave-time': ['Autosave Interval',['15s','30s','60s','120s']],
            'offline': ['Offline Progress',['Disabled','Enabled']],
            'max-research-amt': ['Maximum research upgrades per page',['∞','15','20','25','30']],
            'visible-research': [`Purchased research's visibility`,["Shown","Hidden"]],
            'notify': ['Tab Notification',['Disabled','Enabled']],
            'condenser-ratio': ['Condenser Ratio',['10%','25%','50%','100%']],
        },

        'radio-desc-default' : ['Disabled','Enabled'],

        'prompt-placeholder': "Type text here...",

        'option-buttons-text': ["Save","Export to clipboard","Export as file","Import from prompt","Import from file","WIPE!!!",'Join the community (Discord)','Support the creator (Boosty)'],

        'confirm-prestige': "Prestige",
        'confirm-core': "Enter the Core",
        'confirm-humanoid': "Evolve Sharks",
        'confirm-black-hole': "Form the Black Hole",
        'confirm-sacrifice': "Sacrifice Sharks",
        'confirm-hadron': "Hadronize",
    },
}
