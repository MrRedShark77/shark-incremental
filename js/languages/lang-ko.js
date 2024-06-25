// This is Korean!

LANGUAGES.KO = {
    name: "Korean",
    inter_name: "한국어",
    icon: "lang-ko",

    text: {
        // Currencies

        'fish-name': "물고기",
        'fish-costName': toTextStyle('물고기','fish'),

        'prestige-name': "환생 파편",
        'prestige-costName': toTextStyle('환생','prestige') + " 파편",

        'coral-name': "산호",
        'coral-costName': toTextStyle('산호','coral'),

        'ice-name': "얼음",
        'ice-costName': toTextStyle('얼음','ice'),

        'salt-name': "소금",
        'salt-costName': toTextStyle('소금','salt'),

        'snow-name': "압축된 눈",
        'snow-costName': toTextStyle('압축된 눈','snow'),

        'kelp-name': "켈프",
        'kelp-costName': toTextStyle('켈프','kelp'),

        'core-name': "마그마 조각",
        'core-costName': toTextStyle('마그마','core') + ' 조각',

        'humanoid-name': "상어 인간",
        'humanoid-costName': toTextStyle('상어','humanoid') + ' 인간',

        'full-shark-level': toTextStyle('상어','shark') + ' 레벨',

        'sharkoid-faith': toTextStyle('상어 인간의 신앙','humanoid'),

        'curr-top-0-req': x => `총 <b>${format(x)}</b> ${toTextStyle('물고기','fish')}에 도달하세요`, 
        'curr-top-0-reset': x => `환생을 해 <b>${x.format(0)}</b> ${toTextStyle('환생','prestige')} 파편을 획득`,

        'curr-top-1-req': x => `총 <b>${format(x)}</b> ${toTextStyle('환생','prestige')} 파편에 도달하세요`, 
        'curr-top-1-reset': x => `핵으로 들어가 <b>${x.format(0)}</b> ${toTextStyle('마그마','core')} 파편을 획득`,

        'curr-top-2-req': x => `<b>${format(x)}</b> ${toTextStyle('물고기','fish')} 도달`, 
        'curr-top-2-reset': (x,next) => `당신의 ${toTextStyle('상어','shark')}를  <b>${format(x,0)}</b> ${toTextStyle('상어','humanoid')} 인간으로 진화 ( <b>${format(next)}</b> ${toTextStyle('물고기','fish')}에서 다음 진화 가능)`,

        'radioactive-name': toTextStyle('방사능 '+icon("radioactive"),'core'),

        // Tabs

        'tab-shark': toTextStyle('상어','shark'),
        'tab-options': "옵션들",
        'tab-auto': "자동화",
        'tab-research': toTextStyle('연구','prestige'),
        'tab-explore': "탐험",

        'tab-core': toTextStyle('핵','core'),
        'tab-core-reactor': toTextStyle('핵','core')+" 반응로",
        'tab-core-radiation': toTextStyle('핵','core')+" 방사능",
        'tab-core-assembler': toTextStyle('핵','core')+" 조립기",

        'tab-evolution': toTextStyle('진화','humanoid'),
        'tab-shark-rank': toTextStyle('상어','shark') + " 랭크",
        'tab-evolution-tree': toTextStyle('진화','humanoid') + " 트리",
        'tab-evolution-goal': toTextStyle('진화','humanoid') + " 목표",
        'tab-cultivation': "채굴",
        'tab-forge': "용광로",
        'tab-particle-accel': "입자 가속기",

        // Elements

        'fish-div': `당신의 ${toTextStyle('상어','shark')}가 <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> 마리의 물고기를 먹었습니다.`,
        'shark-stats': `${toTextStyle('상어','shark')} 상태<br>레벨: <h4 id="shark-level">???</h4><br>랭크: <h4 id="shark-tier">???</h4> <span id="shark-next-rank"></span>`,

        'shark-elo-div': `당신의 ${toTextStyle('상어','shark')} ELO는 <h3>${toTextStyle('0','humanoid','shark-elo')}</h3>입니다.`,
        'shark-rank-div': `당신의 ${toTextStyle('상어','shark')} 랭크는 <h3 id="shark-rank">0</h3>입니다.`,
        'shark-rank-req-div': `다음 랭크는 ${toTextStyle('상어','shark')} ELO을 요구합니다. <h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4>.`, // need more info, fix later
        'shark-rank-note': `노트: 진화 환생을 할 때 상어 랭크는 초기화 됩니다.`,

        'option-title-1': "메인 옵션들",
        'option-title-2': "표기법",
        'option-title-3': "환생 확인",
        'option-title-4': "언어들",

        'offline-speed': "오프라인 시간 계산을 가속하기",
        'offline-done': "완료함",

        'radioactive-div': `${toTextStyle('핵','core')}은  <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> 을 생산함 <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('핵','core'), rf = toTextStyle('생선'+icon("radioactive"),'fish')
            return `
            <summary>${c} 방사선 실험</summary>
            핵의 방사선을 통한 실험은 강제로 ${toTextStyle('핵','core')} 환생을 합니다.
            실험 도중에는 핵 반응로는 작동하지 않습니다. ${toTextStyle('물고기','fish')}, ${toTextStyle('환생','prestige')} 파편들, 그리고 첫 네개의 바다 자원들이 세제곱근으로 나눠집니다.
            실험의 힘은 당신의 ${toTextStyle('상어','shark')}가 방사선 ${rf}을 먹게 합니다.<br>
            방사선 ${rf}로 업그레이드 해 추가적인 부스트를 주는 ${toTextStyle('방사능 '+icon("radioactive"),'core')}을 더 획득하세요.
            `
        },
        'radioboost-div': `당신은 <h3 id="radioactive-boost">0</h3> 개의 방사능 부스트를 가지고 있습니다.`,

        'core-temp-div': `${toTextStyle('핵','core')}의 온도는 <h3>${toTextStyle('6,150','core','core-temperature')}</h3>이며, 이는 방사선 부스트를 <h4 id="core-temp-effect">100%</h4> 더 강하게 만듭니다.`,
        'core-temp-after-div': `(${toTextStyle('핵','core')}의 온도는 ${toTextStyle('핵','core')} 환생 이후 <span id="core-temp-after">???</span>도가 됩니다.)`,

        'sharkoid-faith-div': `You have <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('Sharkoid Faith','humanoid')}.`,
        'respec-evolution-tree': `Respec ${toTextStyle('Evolution','humanoid')} Tree`,
        'export-evolution-tree': `Export ${toTextStyle('Evolution','humanoid')} Tree`,
        'import-evolution-tree': `Import ${toTextStyle('Evolution','humanoid')} Tree`,
        'evolution-tree-preset': `${toTextStyle('Evolution','humanoid')} Tree Presets`,

        'rerun-evolution': `Re-run ${toTextStyle('Evolution','humanoid')}, respecing its Tree`,

        'mining-text': `Mining... <b id="mining-progress">???</b> | Damage <b id="mining-damage">???</b> | ${toTextStyle(`Mining Fortune <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'mining-tier-div': `Mining Tier: <h3 id="mining-tier">0</h3>`,
        'mining-note': `Note: If you're stuck while mining ore with high health (taking a long time), you should reload the page.`,

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
        ],

        // Evolution Tree

        'evolution-tree-row': (r,a) => `<b>Row ${r}</b><br>${a} available`,
        'evolution-tree-ctn': [
            ["Fish Body", x=>`${toTextStyle('Fish','fish')} boosts ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`],
            ["Prestigious Body", x=>`${toTextStyle('Prestige','prestige')} shards boost ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`],
            ["Radioactive Body", x=>`${toTextStyle('Magmatic','core')} fragments boost ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`],
            ["Perfect Body", x=>`${toTextStyle('Shark','shark')} ELO is multiplied by <b>${formatMult(x,0)}</b>.`],

            ["Steel Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Iron</b> tiers.`],
            ["Priceful Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Nickel</b> tiers.`],
            ["Air-breathing Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Oxygen</b> tiers.`],
            ["Glowing Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Neon</b> tiers.`],

            ["Mariana Trench", x=>`The <b>Pacific Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`],
            ["Litke Deep", x=>`The <b>Arctic Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`],
            ["Milwaukee Deep", x=>`The <b>Atlantic Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`],
            ["South Sandwich Trench", x=>`The <b>Southern Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`],

            ["Inflated Fish", x=>`${toTextStyle('Fish','fish')} is raised to the <b>${format(x)}th</b> power.`],
            ["Overprestige", x=>`${toTextStyle('Prestige','prestige')} shards are raised to the <b>${format(x)}th</b> power.`],
            ["Compressed Core", x=>`${toTextStyle("Magmatic",'core')} fragments are raised to the <b>${format(x)}th</b> power.`],
            ["Homemade Shark", x=>`Decrease the base of the ${toTextStyle('Humanoid','humanoid')} shark requirement by <b>${format(x,0)}</b>.`],

            ["Shark Conversion", x=>`Gain <b>${format(x,0)}</b> bonus <b>Sulfur</b> tiers.`],
            ["Exoskeleton Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Silicon</b> tiers.`],
            ["Solar Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Nitrogen</b> tiers.`],
            ["Flying Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Helium</b> tiers.`],

            ["Great Shark Body", x=>`${toTextStyle('Fish','fish')} boosts <b>'Fish Body'</b> by <b>${formatPow(x)}</b>.`],
            ["Rebirth Body", x=>`${toTextStyle('Prestige','prestige')} shards boost <b>'Prestigious Body'</b> by <b>${formatPow(x)}</b>.`],
            ["Supernatural Body", x=>`${toTextStyle('Magmatic','core')} fragments boost <b>'Radioactive Body'</b> by <b>${formatPow(x)}</b>.`],
            ["Immortal Body", x=>`<b>'Perfect Body'</b> is <b>squared</b>.`],

            ['Luck of the Sea', x=>`${toTextStyle('Fish','fish')} boosts the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>`],
            ['Luck of the Earth', x=>`<b>Stone</b> boosts the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>`],
            ['Luck of the Shark', x=>`${toTextStyle('Humanoid','humanoid')} Sharks boost the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>`],
            ['Pure Luck', x=>`The ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} is increased by <b>+${format(x)}</b>`],

            ["Better Iron", x=>`Improve <b>Iron</b> building better.`],
            ["Better Nickel", x=>`Improve <b>Nickel</b> building better.`],
            ["Better Oxygen", x=>`Improve <b>Oxygen</b> building better.`],
            ["Better Neon", x=>`Improve <b>Neon</b> building better.`],

            ["Ironic Iron", x=>`Improve <b>Iron</b> reactor better.`],
            ["Piggy Bank", x=>`Improve <b>Nickel</b> reactor better.`],
            ["Ozone", x=>`Improve <b>Oxygen</b> reactor better.`],
            ["Fake Radioactive Waste", x=>`Improve <b>Neon</b> reactor better.`],

            ["Strong Column 1", x=>`The above upgrades in the first column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 2", x=>`The above upgrades in the second column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 3", x=>`The above upgrades in the third column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 4", x=>`The above upgrades in the fourth column are <b>${formatPercent(x-1)}</b> stronger.`],

            ["Fish Forge", x=>`${toTextStyle('Fish','fish')} speeds forging by <b>${formatMult(x)}</b>.`],
            ["Prestigious Forge", x=>`${toTextStyle('Prestige','prestige')} shards speed forging by <b>${formatMult(x)}</b>.`],
            ["Magmatic Forge", x=>`${toTextStyle('Magmatic','core')} fragments speed forging by <b>${formatMult(x)}</b>.`],
            ["Faster Forge", x=>`Forging is <b>${formatMult(x)}</b> faster.`],

            ["True Column 1", x=>`You are allowed to purchase the first column of tree evolution.`],
            ["True Column 2", x=>`You are allowed to purchase the second column of tree evolution.`],
            ["True Column 3", x=>`You are allowed to purchase the third column of tree evolution.`],
            ["True Column 4", x=>`You are allowed to purchase the fourth column of tree evolution.`],
        ],

        'evolution-goal-status': (x,y)=>x?"UNLOCKED":y?"LOCKED":"IN PROGRESS",
        'evolution-goal-ctn': [
            [
                x=>`Earn at least <b>${format(x,0)}</b> ${toTextStyle("Magmatic",'core')} fragments on the first entering ${toTextStyle("Core",'core')}.`,
                `Passively generate <b>100%</b> of ${toTextStyle("Magmatic",'core')} fragments earned on entering ${toTextStyle("Core",'core')}.`
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle("Magmatic",'core')} fragments without purchasing the ${toTextStyle("Core",'core')} assembler's building.`,
                `Keep the ${toTextStyle("Magmatic",'core')} assembler on ${toTextStyle('Evolution','humanoid')}.`
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
        'mining-tier-reset': `Increase the <b>Mining Tier</b>, but it will multiply each ore's health and amount.`,
        'mining-tier-ore-unlock': x=>`Unlock ${x} ore.`,
        'mining-tier-ore-generation': x=>`You will no longer mine ${x} ore, but will generate it based on mining speed & fortune instead.`,

        'mining-tier-bonus': [
            x=>`Ore's health is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Stone</b> & <b>Coal</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Iron</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Gold</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Platinum</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Bismuth</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Diamond</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Obsidian</b> amount is increased by <b>${formatMult(x)}</b>.`,
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
        
        // Other

        'upgrade-shark': x => `Upgrade ${toTextStyle('Shark','shark')} Level<br>Cost: ${x.format(0)} ${toTextStyle('Fish','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} ${toTextStyle('Fish','fish')}'s base`,
        'shark-bonus-prestige': x => `${formatMult(x)} ${toTextStyle('Prestige','prestige')} shard`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('Magmatic','core')} fragments`,
        // 'shark-bonus-rad': x => `${formatMult(x)} ${toTextStyle('Radiation ' + icon("radioactive"),'core')}`,

        'shark-overpopulation': (x,y) => `Due to ${toTextStyle('Shark','shark')} overpopulation at <h4>${toTextStyle(format(y),'fish')}</h4>, ${toTextStyle('Fish','fish')} eaten is reduced by <h4>${format(x,3)}√</h4>.`,

        'shark-rank-bonuses': {
            fish: x => `${formatPow(x)} ${toTextStyle('Fish','fish')}`,
            prestige: x => `${formatPow(x)} ${toTextStyle('Prestige','prestige')} shard`,
            mining_damage: x => `${formatMult(x)} Mining Damage`,
            so: x => `${formatPow(x)} ${toTextStyle('Shark','shark')} overpopulation delay`,
            vibranium: x => `${formatMult(x)} <b>Vibranium</b>`,
        },

        'level': "Level",
        'effect': "Effect",
        'cost': "Cost",
        'buyMax': "Buy Max",
        'require': "Require",
        'next-at': "Next at",
        'depth': "Depth",
        'reward': "Reward",
        'new-preset': "New Preset",
        'maxed': "Maxed",

        'remove': "Remove",
        'overwrite-current': "Overwrite Current",
        'load': "Load",
        'force-load': "Force Load",

        'offline-time-text': x=>`You have been offline for <b>${formatTime(x,0)}</b>.`,

        'research-afford': bool => bool ? "Purchase" : "Can't Afford",
        'research-bought': bool => bool ? `<b>Purchased</b>` : `<b>Not Purchased</b>`,
        'research-pages': x => `${x} pages`,

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
        },

        'radio-desc-default' : ['Disabled','Enabled'],

        'prompt-placeholder': "Type text here...",

        'option-buttons-text': ["Save","Export to clipboard","Export as file","Import from prompt","Import from file","WIPE!!!",'Join the community (Discord)','Support the creator (Boosty)'],

        'confirm-prestige': "Prestige",
        'confirm-core': "Enter the Core",
        'confirm-humanoid': "Evolve Sharks",
    },
}
