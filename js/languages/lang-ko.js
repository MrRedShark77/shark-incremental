// This is Korean!

LANGUAGES.KO = {
    name: "Korean",
    inter_name: "한국어",
    icon: "lang-ko",

    text: {
        // Currencies / 재화들

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

        'humanoid-name': "휴머노이드 상어",
        'humanoid-costName': toTextStyle('휴머노이드','humanoid') + ' 상어',

        'remnants-name': "잔재물",
        'remnants-costName': toTextStyle('잔재물','black-hole'),

        'dark-matter-name': "암흑물질",
        'dark-matter-costName': toTextStyle('암흑물질','black-hole'),

        'observ-name': "천체", // quick note: translating into 2 word, '천체' and '관측'.
        'observ-costName': toTextStyle('천체','observ'),

        'reserv-name': "비축량",
        'reserv-costName': toTextStyle('비축량','reserv'),

        'traject-name': "궤도",
        'traject-costName': toTextStyle('궤도','traject'),

        'full-shark-level': toTextStyle('상어','shark') + ' 레벨',
        'full-shark-rank': toTextStyle('상어','shark') + ' 랭크',

        'sharkoid-faith': toTextStyle('상어 인간의 신앙','humanoid'),

        'curr-top-0-req': x => `총 <b>${format(x)}</b> ${toTextStyle('물고기','fish')}에 도달하세요`, 
        'curr-top-0-reset': x => `환생을 해 <b>${x.format(0)}</b> ${toTextStyle('환생','prestige')} 파편을 획득`,

        'curr-top-1-req': x => `총 <b>${format(x)}</b> ${toTextStyle('환생','prestige')} 파편에 도달하세요`, 
        'curr-top-1-reset': x => `핵으로 들어가 <b>${x.format(0)}</b> ${toTextStyle('마그마','core')} 파편을 획득`,

        'curr-top-2-req': x => `<b>${format(x)}</b> ${toTextStyle('물고기','fish')} 도달`, 
        'curr-top-2-reset': (x,next) => `당신의 ${toTextStyle('상어','shark')}를 <b>${format(x,0)}</b> ${toTextStyle('상어','humanoid')} 인간으로 진화(<b>${format(next)}</b> ${toTextStyle('물고기','fish')}에서 다음 진화 가능)`,

        'curr-top-3-req': x => `<b>${format(x)}</b> ${toTextStyle('물고기','fish')} & <b>8</b> ${toTextStyle('블랙홀','black-hole')} 도달`, 
        'curr-top-3-reset': x => `${toTextStyle('상어','shark')}를 희생해 <b>${format(x,0)}</b>개의 ${toTextStyle('암흑물질','black-hole')} 획득`,

        'curr-top-4-req': x => `총 <b>${format(x)}</b> 개의 ${toTextStyle('천체','observ')}에 도달`, 
        'curr-top-4-reset': x => `<b>${format(x,0)}</b> 개의 ${toTextStyle('비축량','reserv')} 획득`,

        'curr-top-5-req': x => `총 <b>${format(x)}</b> 개의 ${toTextStyle('비축량','reserv')}에 도달`, 
        'curr-top-5-reset': x => `<b>${format(x,0)}</b> 개의 ${toTextStyle('궤도','traject')} 획득`,

        'radioactive-name': toTextStyle('방사능 '+icon("radioactive"),'core'),

        // Tabs / 탭들

        'tab-shark': toTextStyle('상어','shark'),
        'tab-options': "옵션들",
        'tab-scalings': "스케일링",
        'tab-auto': "자동화",
        'tab-research': toTextStyle('연구','prestige'),
        'tab-explore': "탐험",
        'tab-space-base': toTextStyle('우주 기지','observ'),

        'tab-core': toTextStyle('핵','core'),
        'tab-core-reactor': toTextStyle('핵','core')+" 원자로",
        'tab-core-radiation': toTextStyle('핵','core')+" 방사능",
        'tab-core-assembler': toTextStyle('핵','core')+" 조립기",

        'tab-evolution': toTextStyle('진화','humanoid'),
        'tab-shark-rank': toTextStyle('상어','shark') + " 랭크",
        'tab-evolution-tree': toTextStyle('진화','humanoid') + " 트리",
        'tab-evolution-goal': toTextStyle('진화','humanoid') + " 목표",
        'tab-cultivation': "채굴",
        'tab-forge': "용광로",
        'tab-particle-accel': "입자 가속기",

        'tab-singularity': toTextStyle('특이점','black-hole'),
        'tab-black-hole': toTextStyle('블랙홀','black-hole'),
        'tab-singularity-milestones': toTextStyle('특이점','black-hole') + " 마일스톤",
        'tab-solar-system': "태양계",
        'tab-constellation': toTextStyle('별자리','star'),

        // Elements / 기초적인 것들

        'fish-div': `당신의 ${toTextStyle('상어','shark')}가 <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> 마리의 물고기를 먹었습니다.`,
        'shark-stats': `${toTextStyle('상어','shark')} 상태<br>레벨: <h4 id="shark-level">???</h4><br>랭크: <h4 id="shark-tier">???</h4> <span id="shark-next-rank"></span>`,

        'shark-elo-div': `당신의 ${toTextStyle('상어','shark')} ELO는 <h3>${toTextStyle('0','humanoid','shark-elo')}</h3>입니다.`,
        'shark-rank-div': `당신의 ${toTextStyle('상어','shark')} 랭크는 <h3 id="shark-rank">0</h3>입니다.`,
        'shark-rank-req-div': `다음 랭크는 ${toTextStyle('상어','shark')} ELO <h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4>을 더 요구합니다.`,
        'shark-rank-note': `노트: 진화 환생을 할 때 상어 랭크는 초기화 됩니다.`,

        'option-title-1': "메인 옵션들",
        'option-title-2': "표기법",
        'option-title-3': "환생 확인",
        'option-title-4': "언어들",

        'offline-speed': "오프라인 시간<br>계산을 가속하기",
        'offline-done': "완료됨",

        'radioactive-div': `${toTextStyle('핵','core')}은  <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> 을 생산함 <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('핵','core'), rf = toTextStyle('생선'+icon("radioactive"),'fish')
            return `
            <summary>${c} 방사선 실험</summary>
            핵의 방사선을 통한 실험은 강제로 ${toTextStyle('핵','core')} 환생을 합니다.
            실험 도중에는 핵 원자로는 작동하지 않습니다. ${toTextStyle('물고기','fish')}, ${toTextStyle('환생','prestige')} 파편들, 그리고 첫 네개의 바다 자원들이 세제곱근으로 나눠집니다.
            실험의 힘은 당신의 ${toTextStyle('상어','shark')}가 방사선 ${rf}을 먹게 합니다.<br>
            방사선 ${rf}로 업그레이드 해 추가적인 부스트를 주는 ${toTextStyle('방사능 '+icon("radioactive"),'core')}을 더 획득하세요.
            `
        },
        'radioboost-div': `당신은 <h3 id="radioactive-boost">0</h3> 개의 방사능 부스트를 가지고 있습니다.`,

        'core-temp-div': `${toTextStyle('핵','core')}의 온도는 <h3>${toTextStyle('6,150','core','core-temperature')}</h3>이며, 이는 방사선 부스트를 <h4 id="core-temp-effect">100%</h4> 더 강하게 만듭니다.`,
        'core-temp-after-div': `(${toTextStyle('핵','core')}의 온도는 ${toTextStyle('핵','core')} 환생 이후 <span id="core-temp-after">???</span>가 됩니다.<br><b>꼭, 무조건 환생을 해야 적용이 되니 ${toTextStyle('핵','core')} 환생을 한 번 해주세요<b>)`,

        'sharkoid-faith-div': `당신은 <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('상어 인간의 신앙','humanoid')}을 가지고 있습니다.`,
        'respec-evolution-tree': `${toTextStyle('진화','humanoid')} 트리를<br>초기화하기`,
        'respec-evolution-tree-2': `강화된 ${toTextStyle('진화','humanoid')} 트리만<br>초기화하기`,
        'export-evolution-tree': `${toTextStyle('진화','humanoid')} 트리를<br>내보내기`,
        'import-evolution-tree': `${toTextStyle('진화','humanoid')} 트리를<br>불러오기`,
        'evolution-tree-preset': `${toTextStyle('진화','humanoid')} 트리<br><b>한국어는 안됩니다!</b>`,

        'rerun-evolution': `진화 트리를 초기화하면서 강제로 ${toTextStyle('진화','humanoid')} 환생을 진행`,

        'mining-text': `채광 중... <b id="mining-progress">???</b> | 대미지 <b id="mining-damage">???</b> | ${toTextStyle(`채광 행운 <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'super-mining-text': `슈퍼 대미지 <b id="super-mining-damage">???</b> | ${toColoredText(`슈퍼 채광 행운 <span id="super-mining-fortune">0</span>`+icon("luck"),'orange')}`,
        'mining-tier-div': `채광 티어: <h3 id="mining-tier">0</h3>`,
        'mining-ascend-div': `채광 승천: <h3 id="mining-ascend">0</h3>`,
        'mining-note': `노트: 만약 높은 체력의 광석에 의해 채광을 못하는 경우 (매우 오랜 시간이 걸리면), 게임을 재로딩해 해결이 가능합니다(F5).`,
        'mining-tier-undo-btn': `채광 중 막혔을 경우 버튼을 눌러<br>채광 티어를 1 내리세요`,
        'mining-ascend-undo-btn': `채광 중 막혔을 경우 버튼을 눌러<br>채광 승천을 1 내리세요`,

        'black-hole-button': `모든 입자 가속기가 최대에 달성하였기 때문에, 다른 우주에 진입할 때를 대비해 블랙홀을 만들어야 합니다.`,
        'black-hole-html': `<h2>${toTextStyle('0','black-hole','black-hole-amount')}</h2> 개의 블랙홀을 만들었습니다. 이는 물고기와 환생 파편의 지수, 그리고 마그마 파편의 획득 지수를 <h3 id="black-hole-effect">^???</h3> 만큼 감소시킵니다.`,

        'remnant-html': `<h3>${toTextStyle('0','black-hole','remnant-amount')}</h3> <span id="remnant-gain"></span> 개의 잔재물을 가지고 있습니다.`,
        
        'rocket-part-div': `총 <h3 id="total-rocket-part">0</h3> 개의 로켓 부품을 만들었습니다.`,
        'observ-div': `<h3>${toTextStyle('0','observ','observ-amount')}</h3> <span id="observ-gain"></span> 개의 천체를 가지고 있습니다. (총 <h3>${toTextStyle('0','observ','observ-total')}</h3>)`,
        'reserv-div': `<h3>${toTextStyle('0','reserv','reserv-amount')}</h3> <span id="reserv-gain"></span> 개의 비축량을 가지고 있습니다.`,
        'traject-div': `<h3>${toTextStyle('0','traject','traject-amount')}</h3> <span id="traject-gain"></span> 개의 궤도를 가지고 있습니다.`,
        'experiment-div': `당신의 ${toTextStyle('경험','experiment')} 티어는 <h3 id="experiment-tier">0</h3> 입니다.`,

        'bh-tier-div': `당신의 블랙홀 티어는 <h3>${toTextStyle('0','black-hole','bh-tier')}</h3> 입니다.`,
        'bh-tier-button': `요구치를 달성해 당신의 ${toTextStyle('블랙홀','black-hole')} 티어를 올려 강력한 보상을 받으세요.`,

        // Upgrades / 업그레이드들

        'su-s1-req': "레벨 3",
        'su-s1-name': '상어 힘 강화',
        'su-s1-desc': `${toTextStyle('물고기','fish')} 섭취량을 레벨 당 <b>+1</b> 올립니다.`,

        'su-s2-req': "레벨 7",
        'su-s2-name': '상어 민첩성 강화',
        'su-s2-desc': `${toTextStyle('상어','shark')} 레벨의 기본 ${toTextStyle('물고기','fish')} 보너스를 레벨 당 <b>+1</b> 올립니다.`,

        'su-s3-req': "레벨 15",
        'su-s3-name': '상어 이빨 강화',
        'su-s3-desc': `첫 번째 ${toTextStyle('상어','shark')} 업그레이드의 지수를 레벨 당 <b>+50%</b> 올립니다.`,

        'su-s4-req': "레벨 38",
        'su-s4-name': '상어 지수 강화',
        'su-s4-desc': `${toTextStyle('물고기','fish')} 획득의 지수를 레벨 당 <b>+1%</b> 올립니다.`,

        'su-s5-req': "레벨 640",
        'su-s5-name': '방사성 상어',
        'su-s5-desc': `${toTextStyle('방사선 '+icon("radioactive"),'core')} 생산량을 레벨 당 <b>x2</b> 올립니다.`,

        'su-p1-req': "환생 한 번 하기",
        'su-p1-name': '상어 힘 슈퍼 강화',
        'su-p1-desc': `${toTextStyle('물고기','fish')} 섭취량을 레벨 당 <b>×3</b> 올립니다.`,

        'su-p2-req': "환생 한 번 하기",
        'su-p2-name': '환생 부스터',
        'su-p2-desc': `${toTextStyle('물고기','fish')} 섭취량을 레벨 당<b>×lg(${toTextStyle('물고기','fish')})</b> 올립니다.`,

        'su-p3-name': '느려진 상어',
        'su-p3-desc': `첫 번째 ${toTextStyle('상어','shark')} 레벨 스케일링이<br>레벨 당 <b>+1</b> 느려집니다.`,

        'su-m1-name': '채광 대미지',
        'su-m1-desc': `채광 대미지를 레벨 당 <b>×2</b> 올립니다.`,

        'su-m2-name': '채광 속도',
        'su-m2-desc': `채광 속도를 레벨 당 <b>+10%</b> 올립니다.`,

        'su-m3-req': '채광 티어 3',
        'su-m3-name': '압축된 돌',
        'su-m3-desc': `채광시 획득하는 <b>돌</b>을 레벨 당 <b>×2</b> 올립니다.`,

        'su-m4-req': '채광 티어 6',
        'su-m4-name': '채광 행운',
        'su-m4-desc': `${toTextStyle('채광 행운 '+icon('luck'),'gold')}을 레벨 당 <b>+5</b> 올립니다.`,

        'su-m5-req': '채광 티어 9',
        'su-m5-name': '기본 광석들',
        'su-m5-desc': `처음 네 광석들을 채광시 획득하는 량이 레벨 당 <b>×2</b> 만큼 올라갑니다.`,

        'su-m6-req': '채광 승천 1',
        'su-m6-name': '슈퍼 채광 대미지',
        'su-m6-desc': `슈퍼 채광 대미지를 레벨 당 <b>×2</b> 만큼 올립니다.`,

        'su-m7-req': '채광 승천 3',
        'su-m7-name': '슈퍼 채광 속도',
        'su-m7-desc': `일반 채광 속도와 슈퍼 채광 속도를 레벨 당 <b>+25%</b> 만큼 올립니다.`,

        'su-m8-req': '채광 승천 6',
        'su-m8-name': '압축된 라듐',
        'su-m8-desc': `레벨 당 <b>라듐-223</b> 획득량을 <b>×2</b> 배로 늘립니다.`,

        'su-m9-req': '채광 승천 12',
        'su-m9-name': '슈퍼 채광 행운',
        'su-m9-desc': `${toColoredText('슈퍼 채광 행운 '+icon('luck'),'orange')} 을 레벨 당 <b>+5</b> 만큼 올립니다.`,

        // Researches / 연구들

        'research-p1-name': "뛰어난 민첩성",
        'research-p1-desc': `'상어 민첩성 강화'는 이제 ${toTextStyle("상어",'shark')} 레벨의 ${toTextStyle("환생",'prestige')} 파편 보너스의 베이스에 감소된 상태로 강화합니다.`,

        'research-p2-name': "상어 업그레이드 EL",
        'research-p2-desc': `${toTextStyle("상어",'shark')} ${toTextStyle("물고기",'fish')} 업그레이드는 더 이상 ${toTextStyle("물고기",'fish')}를 소모하지 않습니다.`,

        'research-p3-name': "강화된 상어 레벨",
        'research-p3-desc': `${toTextStyle("상어",'shark')} 레벨 업의 요구량의 베이스를 <b>1</b> 줄이는 대신,<br>
        강제로 ${toTextStyle("환생",'prestige')}을 하며 ${toTextStyle("환생",'prestige')} 파편과 ${toTextStyle("환생",'prestige')} 업그레이드를<br>전부 초기화 합니다.
        새로운 ${toTextStyle("상어",'shark')} 업그레이드를<br>해금합니다.`,

        'research-p4-name': "더 나은 환생",
        'research-p4-desc': `${toTextStyle("환생",'prestige')} 파편 획득 공식을 조금 개선합니다.`,

        'research-p5-name': "엄청난 힘",
        'research-p5-desc': `'상어 힘 슈퍼 강화'가 매 ${toTextStyle("상어",'shark')} 레벨 마다<br><b>1%</b> 강해집니다.(100부터 시작합니다)`,

        'research-p6-name': "엄청 느려진 상어",
        'research-p6-desc': `'느려진 상어'가 <b>두배</b> 강해집니다.`,

        'research-p7-name': "더 나은 자원 I",
        'research-p7-desc': `${toTextStyle("산호",'coral')}와 ${toTextStyle("얼음",'ice')}'의 효과가 개선됩니다.`,

        'research-p8-name': "더욱 강화된 상어 레벨",
        'research-p8-desc': `${toTextStyle("상어",'shark')} 레벨의 요구량을 1만큼 더 줄입니다.`,

        'research-p9-name': "싼 환생 부스터",
        'research-p9-desc': `레벨 당 '환생 부스터'의 가격 증가를<br><b>-0.05</b>씩 줄입니다.`,

        'research-e1-name': "바다 시너지즘I",
        'research-e1-desc': `${toTextStyle("소금",'salt')}이 ${toTextStyle("산호",'coral')}의 생산량을 증가시킵니다.`,

        'research-e2-name': "바다 시너지즘 II",
        'research-e2-desc': `${toTextStyle("압축된 눈",'snow')}이 ${toTextStyle("얼음",'ice')}의 생산량을 증가시킵니다.`,

        'research-e3-name': "탑험 자동화",
        'research-e3-desc': `자동으로 <b>X</b> 번째 바다의 베이스를<br>자동으로 획득합니다.`,

        'research-e4-name': "산화 켈프",
        'research-e4-desc': `<b>산소</b>가 ${toTextStyle("켈프",'kelp')}의 생산량을 감소된 상태로<br>증가시킵니다.`,

        'research-e5-name': "탐험 자동화 MK2",
        'research-e5-desc': `자동으로 인도양의 베이스를 탐험하지 않고도<br>획득합니다. ${toTextStyle('켈프','kelp')} 효과를 강화시킵니다.`,

        'research-e6-name': "자바 해구",
        'research-e6-desc': `<b>인도양</b>의 깊이 제한이 사라지며,<br>그 이후의 효과를 강화시킵니다.`,

        'research-c1-name': "연구 핵 유지기",
        'research-c1-desc': `${toTextStyle('핵','core')}에 들어가도 ${toTextStyle("연구",'prestige')}가 초기화 되지 않습니다.`,

        'research-c2-name': "탐험 핵 유지기",
        'research-c2-desc': `${toTextStyle('핵','core')}에 들어가도 <b>X</b> 번째 바다의<br>마일스톤과 깊이가 유지됩니다.`,

        'research-c3-name': "네온의 영향력 I",
        'research-c3-desc': `<b>네온</b>이 '상어 이빨 강화', '상어 지수 강화', 그리고 '느려진 상어'에도 영향을 줍니다.`,

        'research-c4-name': "더 나은 니켈",
        'research-c4-desc': `<b>니켈</b>의 효과가 <b>두 배</b> 강해집니다.`,

        'research-c5-name': "추가적인 핵 부스트",
        'research-c5-desc': `이제 핵 방사선의 보너스 원자로가 핵 원자로의 부스트에 감소된 비율로 ${toTextStyle('물고기','fish')}에 영향을 미칩니다.`,

        'research-c6-name': "방사선 감소",
        'research-c6-desc': `${toTextStyle('마그마','core')} 파편이 방사선의 한계치를 감소된 상태로 줄입니다.`,

        'research-c7-name': "엄청난 상어의 이빨",
        'research-c7-desc': `'상어 이빨 강화'의 효과가 <b>^2.5</b>만큼 증가합니다.`,

        'research-c8-name': "더 나은 철 & 네온",
        'research-c8-desc': `<b>철</b>의 효과가 2배 강해지며, <b>철</b> 과 <b>네온</b>의 요구량이 엄청나게 줄어듭니다.`,

        'research-c9-name': "더 나은 핵 부스트",
        'research-c9-desc': `핵 원자로의 ${toTextStyle('물고기','fish')} 부스트가 강화됩니다.`, // need to fix, need more info

        'research-c10-name': "엄청 느려진 상어",
        'research-c10-desc': `'느려진 상어' 두 번째 ${toTextStyle('상어','shark')} 레벨 증가량을<br>감소된 상태로 줄입니다.`,

        'research-c11-name': "더 나은 방사선 감소",
        'research-c11-desc': `'방사선 감소'가 조금 더 강해집니다.`,

        'research-c12-name': "메가 방사선 감소",
        'research-c12-desc': `방사선의 한계를 엄청나게 줄입니다.`,

        'research-c13-name': "슈퍼 방사선 상어",
        'research-c13-desc': `'방사선 상어'가 <b>50%</b> 강해집니다.`,

        'research-c14-name': "핵 지수 부스트",
        'research-c14-desc': `핵 원자로가 ${toTextStyle('물고기','fish')}에 지수<br>부스트를 제공합니다.`,

        'research-c15-name': "자가-방사성",
        'research-c15-desc': `이제 방사선 업그레이드를 ${toTextStyle('물고기 '+icon('radioactive'),'fish')} 대신 일반 ${toTextStyle('물고기','fish')}로 구매 할 수 있습니다, 대신 수치가<br><b>^0.0001</b>로 감소합니다. 수치가 레벨 당<br><b>×10</b> 증가합니다.`,

        'research-m1-name': "마그마 행운",
        'research-m1-desc': `${toTextStyle('채광 행운 '+icon('luck'),'gold')}을 레벨 당 <b>+5</b> 올립니다.`,

        'research-m2-name': "하이퍼 느려진 상어",
        'research-m2-desc': `세 번째 ${toTextStyle("상어",'shark')} 레벨 증가량이<br><b>+1000</b>만큼 미뤄집니다.`,

        'research-m3-name': "느려진 방사선 부스트",
        'research-m3-desc': `레벨 당 첫 두 개의 방사선 부스트의 수치 증가가 <b>+1</b> 미뤄집니다.`,

        'research-m4-name': "더 나은 채광 티어",
        'research-m4-desc': `채광 티어의 2 ~ 5 번재 효과가 레벨 당 <b>+25%</b><br>강해집니다.`,

        'research-f1-name': "기본 랭크 지수",
        'research-f1-desc': `레벨 당 ${toTextStyle("상어",'shark')} ELO 의 지수를 <b>+25%</b> 올립니다.`,

        'research-f2-name': "더 많은 신앙",
        'research-f2-desc': `${toTextStyle('물고기','fish')} & ${toTextStyle("환생",'prestige')} 파편을 통해 더 많은 ${toTextStyle('상어 인간의 신앙','humanoid')}을 획득합니다.`,

        'research-f3-name': "느려진 핵 원자로",
        'research-f3-desc': `첫 번째 핵 원자로의 증가를 레벨 당 <b>+1</b> 미룹니다.`, //need to fix, need more info

        'research-f4-name': "감소된 핵 온도 소프트캡",
        'research-f4-desc': `${toTextStyle('핵','core')} 온도의 소프트 캡이 약해집니다.`,

        'research-f5-name': "비브라늄 부스트",
        'research-f5-desc': `<b>비브라늄</b>이 채광 대미지를 감소된 상태로<br>강화합니다.`,

        'research-f6-name': "우주적 채광 티어",
        'research-f6-desc': `첫 9 종류의 광석들이 채광 티어에 의해 획득량이 증가됩니다.`,

        'research-f7-name': "더 나은 상어 ELO",
        'research-f7-desc': `휴머노이드 상어에서의 ${toTextStyle("상어",'shark')} ELO의 베이스<br>공식이 <b>x</b> 에서 <b>2<sup>x</sup>-1</b>으로 개선됩니다.`,

        'research-f8-name': "약해진 광석 체력",
        'research-f8-desc': `채광 티어의 첫 번재 효과가 감소됩니다.`,

        'research-s1-name': "잔재물 물고기",
        'research-s1-desc': `${toTextStyle("물고기",'fish')} 가 ${toTextStyle("잔재물",'black-hole')} 생산을 감소된 상태로<br>강화합니다.`,

        'research-s2-name': "나은 랭커 부스트",
        'research-s2-desc': `${toTextStyle("상어",'shark')} 랭크가 주는 ${toTextStyle('환생','prestige')} 파편 부스트를<br>개선합니다.`,

        'research-s3-name': "순수한 바다",
        'research-s3-desc': `<b>태평양과 북극해</b>가 추가적인 지수 부스트를<br>제공하며, <b>대서양과 남극해</b>를 개선합니다.`,

        'all-research': {
            's4': ["순수한 바다 II",`<b>인도양</b>이 추가적인 지수 부스트를 감소된 상태로<br>제공합니다.`],
            's5': ["순수한 바다 III",`첫 <b>N</b> 번째 바다의 깊이 진행의 감소가<br>삭제됩니다. 이는 <b>인도양</b>까지 적용 됩니다.<br>6번째 레벨에서는 10 번째 방사선 부스트를<br>개선합니다.`], // need more info to "6th leval"

            'dm1': ["시작 블랙홀",`희생 시에 레벨 당 <b>+1</b>개의 ${toTextStyle("블랙홀",'black-hole')}을 형성한<br>상태로 시작합니다. 블랙홀의 자원 감소를<br>늦춥니다.`],
            'dm2': ["나은 잔재물 I",`${toTextStyle("잔재물",'black-hole')} 업그레이드 "다시 안녕"을 개선합니다,<br>${toTextStyle("환생",'prestige')} 파편에도 영향을 줍니다.`],
            'dm3': ["나은 잔재물 II",`${toTextStyle("잔재물",'black-hole')} 업그레이드 "상어 마스터"를<br>개선합니다.`],
            'dm4': ["나은 잔재물 III",`${toTextStyle("상어",'shark')} 레벨 & 랭크로 인한 ${toTextStyle("잔재물",'black-hole')} 생산 부스트를<br>개선합니다.`],
            'dm5': ["소프트캡 없는 핵 온도",`${toTextStyle('핵','core')} 온도의 소프트캡을 삭제합니다.`],
            'dm6': ["나은 방사선 생산기",`${toTextStyle('방사선 '+icon('radioactive'),'core')} 생산기가 자기 자신의 지수를 감소된<br>상태로 부스트합니다.`],
            'dm7': ["암흑 잔재물",`총 ${toTextStyle("암흑물질",'black-hole')}이 ${toTextStyle("잔재물",'black-hole')} 생산을 부스트합니다.`],

            'e7': ["자바 해구 MK2",`<b>인도양</b>의 깊이 진행을 조금 개선합니다.`],

            'm5': ["상어 랭크가 슈퍼 채광에게",`${toTextStyle("상어",'shark')} 랭크의 채광 대미지 부스트가 슈퍼 채광에도 감소된 상태로 부스트를 제공합니다.`],
            'm6': ["우라늄 상어",`'상어 지수 강화'가 강화됩니다.`],
            'm7': ["더블 잔재물 스케일링",`${toTextStyle("잔재물",'black-hole')} 업그레이드의 첫 번째 스케일링이<br><b>+100</b> 만큼 미뤄집니다.`],
            'm8': ["궁극의 방사선",`방사선 부스트의 14번째 효과가 개선됩니다.`],
            
            'o1': [`천체 자동화`,`${toTextStyle('천체','observ')} 업그레이드를 자동으로 구매하며 ${toTextStyle('천체','observ')}를<br>소모하지 않습니다.<br><i>이 업그레이드는 초기화 되지 않습니다.</i>`],
            'o2': [`유니버셜 변환기 개선`,`“유니버셜 변환기” ${toTextStyle('비축량','reserv')} 업그레이드가 “우주”,<br>“우주 물고기”, 그리고 “우주 환생”<br>${toTextStyle('천체','observ')} 업그레이드의 베이스에도 영향을 줍니다.`],
            'o3': [`유니버셜 변환기 개선 II`,`“유니버셜 변환기” ${toTextStyle('비축량','reserv')} 업그레이드가 “상대론”,<br>“관측”, “우주 물고기 II”, 그리고 “우주 환생 II”<br>${toTextStyle('비축량','reserv')} 업그레이드의 베이스에도 영향을 줍니다.`],
            
            'r1': [`비축량 자동화`,`모든 ${toTextStyle('비축량','reserv')} 업그레이드를 자동으로 구매하며<br>${toTextStyle('비축량','reserv')}를 소모하지 않습니다.<br><i>이 업그레이드는 초기화 되지 않습니다.</i>`],
            'r2': [`비축량 개선`,`${toTextStyle('비축량','reserv')} 획득 공식을 개선합니다.`],
            'r3': [`비축량 생산`,`환생시 얻는 ${toTextStyle('비축량','reserv')}의 100%를 자동으로 생산합니다.<br><i>이 업그레이드는 초기화 되지 않습니다.</i>`],
        },

        // Exploration / 탐험들

        'explore-while': `탐험 중 받는 효과`,
        'explore-inside': (a,b,c)=>`베이스 <br> ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ➜ ")+`${b.format()}/s`+`.<br>${format(c,0)} ${toTextStyle("물고기",'fish')}에 도달해<br>베이스를 획득하세요.`,
        'explore-outside': x=>`현재 베이스는 <br>${x.format()}/s 입니다.<br> 클릭해 바다를 탐험하세요!`,

        'explore-next': x=>`${toTextStyle("상어",'shark')} 레벨 <h3>${format(x,0)}</h3>에서 새로운 바다가 열립니다.`,

        'explore-doubler-1': x=>`${x} 획득 두 배.`,
        'explore-doubler-2': `깊이 진행 두 배.`,

        'explore-0-name': `태평양`,
        'explore-0-desc': `${toTextStyle('물고기','fish')} 획득이 제곱근이 됩니다.`,
        'explore-0-milestone': [
            `${toTextStyle('환생','prestige')} 파편 획득량이 ^1.05 올라갑니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `${toTextStyle('상어','shark')} 레벨 업에 ${toTextStyle('물고기','fish')}를 소모하지 않습니다.`,
            `${toTextStyle('물고기','fish')} 섭취량이 ^1.05 올라갑니다.`,
            `${toTextStyle('핵','core')}을 해금합니다.`,
        ],

        'explore-1-name': `북극해`,
        'explore-1-desc': `${toTextStyle("환생",'prestige')} 파편과 ${toTextStyle("환생",'prestige')} 업그레이드가 초기화 됩니다.<br>${toTextStyle('환생','prestige')} 파편 획득량이 제곱근이 됩니다.`,
        'explore-1-milestone': [
            `${toTextStyle('상어','shark')} ${toTextStyle('환생','prestige')} 업그레이드 자동화를 해금합니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `${toTextStyle('상어','shark')} ${toTextStyle('환생','prestige')} 업그레이드가 ${toTextStyle('환생','prestige')} 파편을 소모하지 않습니다.`,
            `${toTextStyle('환생','prestige')}시 얻는  ${toTextStyle('환생','prestige')} 파편의 100%를 자동으로 획득합니다.`,
        ],

        'explore-2-name': `대서양`,
        'explore-2-desc': `${toTextStyle("환생",'prestige')} 파편과 ${toTextStyle("환생",'prestige')} 업그레이드가 초기화 됩니다.<br>${toTextStyle('상어','shark')} 레벨 스케일링이 10배 강해집니다.` ,
        'explore-2-milestone': [
            `'상어 이빨 강화'와 '상어 지수 강화' 가격 증가량이 조금 약해집니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `첫 번째 ${toTextStyle('상어','shark')} 레벨의 가격 증가가 깊이 500m마다 +1 늦게 시작합니다.`,
            `${toTextStyle("소금",'salt')}의 효과가 50% 강해집니다.`,
        ],

        'explore-3-name': `남극해`,
        'explore-3-desc': `${toTextStyle("환생",'prestige')} 파편과 ${toTextStyle("환생",'prestige')} 업그레이드가 초기화 됩니다.<br>${toTextStyle('상어','shark')} ${toTextStyle('물고기','fish')} & ${toTextStyle('환생','prestige')} 업그레이드들을 구매 할 수 없습니다.`,
        'explore-3-milestone': [
            `탐험의 베이스가 10배 증가합니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `${toTextStyle('압축된 눈','snow')}의 효과가 50% 강해집니다.`,
        ],

        'explore-4-name': `인도양`,
        'explore-4-desc': `첫 네 바다의 효과가 모두 적용되며 당신의 ${toTextStyle('물고기','fish')} 획득 지수가 ^0.75로 감소합니다.`,
        'explore-4-milestone': [
            `방사능 한계치가 /1000으로 나눠집니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `핵 원자로의 가격 증가가 +5 늦게 시작합니다.`,
            `${toTextStyle('켈프','kelp')}의 효과를 개선합니다.`,
        ],

        // Core Reactor / 핵 원자로

        'core-0-name': `철`,
        'core-0-desc': `${toTextStyle("물고기",'fish')} 섭취량이<br><b>철</b>의 티어에 기반해 증가합니다.`,

        'core-1-name': `니켈`,
        'core-1-desc': `${toTextStyle("환생",'prestige')} 파편의 획득량이<br><b>니켈</b>의 티어에 기반해 증가합니다.`,

        'core-2-name': `산소`,
        'core-2-desc': `첫 4 바다 자원의 생산량이<br><b>산소</b>의 티어에 기반해 증가합니다.`,

        'core-3-name': `네온`,
        'core-3-desc': `${toTextStyle("상어",'shark')} 레벨의 요구량을<br><b>네온</b>의 티어에 기반해 줄입니다.`,

        'core-4-name': `황`,
        'core-4-desc': `${toTextStyle("물고기",'fish')}가 <b>철</b>의 효과를<br><b>황</b>의 티어에 기반해 강화합니다.`,

        'core-5-name': `실리콘`,
        'core-5-desc': `${toTextStyle("환생",'prestige')} 파편이 <b>니켈</b>의 효과를<br><b>실리콘</b>의 티어에 기반해 강화합니다.`,

        'core-6-name': `질소`,
        'core-6-desc': `${toTextStyle("켈프",'kelp')}가 <b>산소</b>의 효과를<br><b>질소</b>의 티어에 기반해 강화합니다.`,

        'core-7-name': `헬륨`,
        'core-7-desc': `${toTextStyle("상어",'shark')} 레벨이 <b>네온</b>의 효과를<br><b>헬륨</b>의 티어에 기반해 강화합니다.`,

        'core-8-name': `마그네슘`,
        'core-8-desc': `<b>마그네슘</b>의 티어에 기반해 ${toTextStyle("물고기",'fish')} 자기 자신의 획득량 지수를 올립니다.`,

        'core-9-name': `나트륨`,
        'core-9-desc': `<b>나트륨</b>의 티어에 기반해 ${toTextStyle("환생",'prestige')} 파편 자기 자신의 획득량 지수를 올립니다.`,

        'core-10-name': `인`,
        'core-10-desc': `<b>인</b>의 티어에 기반해 ${toTextStyle("마그마",'core')} 조각 자기 자신의 획득량 지수를 올립니다.`,

        'core-11-name': `크로뮴`,
        'core-11-desc': `<b>크로뮴</b>의 티어에 기반해 ${toTextStyle("휴머노이드",'humanoid')} 상어가 ${toTextStyle("상어",'shark')} ELO의 지수를 올립니다.`,

        'core-bonus': x => `핵 원자로의 생성물이 ${toTextStyle("물고기",'fish')} 획득량을 <h4>${formatMult(x)}</h4>만큼 강화합니다.`,

        'core-assembler-erase': `삭제 모드`,
        'core-assembler-choose': `현재 선택 중`,
        'core-assembler-building-stats': (s,p,m) => `배수 <b>${s}</b> | 설치 현황 <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `최대 개수: ${mm} / ${m}<br>요구: ${format(x)} ${toTextStyle("마그마",'core')} 파편`, 
        'ca-building-base': b => `[베이스: ${b}]`,
        'ca-building-temp': t => `핵의 온도를 ${t}만큼 올립니다.`,

        // Core Radiation / 핵 방사능

        'cr-start': x=>x?"실험을 중지하기":"실험을 시작하기",

        'upgrade-cr': (gen,cost)=>`
        ${toTextStyle('방사능 '+icon("radioactive"),'core')} 생산을 업그레이드 하기.<br>
        초 당 <b>${format(gen,0)}</b> 생산 중.<br>
        비용: ${format(cost,0)} ${toTextStyle('생선 '+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`${toTextStyle('방사능 '+icon("radioactive"),'core')} 환생을 하는 대신, 방사능의<br>한계치가 <b>${formatMult(inc,0)}</b> 만큼 늘어나며,<br>방사능 부스트가 강화되며 가끔 새 능력이 추가 될 수 있습니다.<br>한계치에 도달해야 환생이 가능합니다.`,

        'cr-boosts': [
            x=>`${toTextStyle('핵','core')} 반응로의 첫 번째 줄에 <h4>+${format(x)}</h4> 개의 반응로가 추가됩니다.`,
            x=>`${toTextStyle('마그마','core')} 파편을 <h4>${formatMult(x)}</h4> 만큼 부스트됩니다.`,
            x=>`첫 네개의 ${toTextStyle('상어','shark')} ${toTextStyle('물고기','fish')} 업그레이드가 <h4>${formatPercent(x.sub(1))}</h4> 만큼 더 강해집니다.`,
            x=>`두 번째 ${toTextStyle('상어','shark')} 레벨 스케일링이 <h4>+${format(x)}</h4> 만큼 늦춰집니다.`,
            x=>`${toTextStyle('상어','shark')} 레벨의 ${toTextStyle('마그마','core')} 파편 보너스의 베이스가 <h4>+${format(x,3)}</h4> 만큼 증가합니다.`,
            x=>`${toTextStyle('상어','shark')} 레벨의 ${toTextStyle('물고기','fish')} 보너스가 <h4>${formatPow(x,3)}</h4>만큼 증가합니다.`,
            x=>`첫 세개의 ${toTextStyle('상어','shark')} ${toTextStyle('환생','prestige')} 업그레이드가 <h4>${formatPercent(x.sub(1))}</h4> 만큼 더 강해집니다.`,
            x=>`${toTextStyle('상어','shark')} 레벨이 ${toTextStyle('상어','shark')} ELO를 <h4>${formatMult(x)}</h4>만큼 부스트 합니다.`,
            x=>`<b>돌</b>의 획득량이 <h4>${formatMult(x)}</h4> 증가됩니다.`,
            x=>`<h4>${formatMult(x,3)}</h4>만큼의 <b>탐험 업그레이드 추가 업그레이드</b>를 획득합니다.`,
            x=>`${toTextStyle('핵','core')} 반응로의 두 번째 줄에 <h4>+${format(x)}</h4> 개의 반응로가 추가됩니다.`,
            x=>`${toTextStyle('암흑물질','black-hole')}이 <h4>${formatMult(x)}</h4>만큼 부스트됩니다.`,
            x=>`${toTextStyle('잔재물','black-hole')} 생산이 <h4>${formatMult(x)}</h4>만큼 부스트됩니다.`,
            x=>`위의 모든 효과가 <h4>${formatPercent(x.sub(1))}</h4> 만큼 강해집니다.(6번째 효과 제외)`,
        ],

        // Evolution Tree  진화 트리

        'evolution-tree-row': (r,a) => `<b>${r} 열</b><br>${a}개 더 가능`,
        'evolution-tree-ctn': [
            ["물고기의 몸체", x=>`${toTextStyle('물고기','fish')}가 ${toTextStyle('상어','shark')} ELO를<b>${formatMult(x)}</b>만큼 증가시킵니다.`, x=>`${toTextStyle('물고기','fish')}가 ${toTextStyle('상어','shark')} ELO의 지수를 <b>${formatMult(x)}</b>만큼 증가시킵니다.`],
            ["환생의 몸체", x=>`${toTextStyle('환생','prestige')} 파편이 ${toTextStyle('상어','shark')} ELO를 <b>${formatMult(x)}</b>만큼 증가시킵니다.`, x=>`${toTextStyle('환생','prestige')} 파편이 ${toTextStyle('상어','shark')} ELO의 지수를 <b>${formatMult(x)}</b>만큼 증가시킵니다.`],
            ["방사성 몸체", x=>`${toTextStyle('마그마','core')} 조각이 ${toTextStyle('상어','shark')} ELO를 <b>${formatMult(x)}</b>만큼 증가시킵니다.`, x=>`${toTextStyle('마그마','core')} 조각이 ${toTextStyle('상어','shark')} ELO의 지수를 <b>${formatMult(x)}</b>만큼 증가시킵니다.`],
            ["완벽한 몸체", x=>`${toTextStyle('상어','shark')} ELO가 <b>${formatMult(x,0)}</b>만큼 증가합니다.`, x=>`${toTextStyle('상어','shark')} ELO의 지수가 <b>${formatMult(x,0)}</b> 만큼 늘어납니다.`],

            ["강철 상어", x=>`추가 <b>철</b> 티어를 <b>${format(x,0)}</b>만큼 획득합니다.`, x=>`<b>철</b>을 약간 개선합니다.`],
            ["비싼 상어", x=>`추가 <b>니켈</b> 티어를 <b>${format(x,0)}</b>만큼 획득합니다.`, x=>`<b>니켈</b>을 약간 개선합니다.`],
            ["수중 호흡 상어", x=>`추가 <b>산소</b> 티어를 <b>${format(x,0)}</b>만큼 획득합니다.`, x=>`<b>산소</b>를 약간 개선합니다.`],
            ["빛나는 상어", x=>` 추가 <b>네온</b> 티어를 <b>${format(x,0)}</b>만큼 획득합니다.`, x=>`<b>네온</b>을 약간 개선합니다.`],

            ["마리아나 해구", x=>`<b>태평양</b>의 깊이 제한이 사라지며, 그 이후의 효과를 강화시킵니다.`, x=>`<b>태평양</b>의 깊이 진행을 약간 개선합니다.`],
            ["Litke 딥", x=>`<b>북극해</b>의 깊이 제한이 사라지며, 그 이후의 효과를 강화시킵니다.`, x=>`<b>북극해</b>의 깊이 진행을 약간 개선합니다.`],
            ["Milwaukee 딥", x=>`<b>대서양</b>의 깊이 제한이 사라지며, 그 이후의 효과를 강화시킵니다.`, x=>`<b>대서양</b>의 깊이 진행을 약간 개선합니다.`],
            ["사우스샌드위치 해구", x=>`<b>남극해</b>의 깊이 제한이 사라지며, 그 이후의 효과를 강화시킵니다.`, x=>`<b>남극해</b>의 깊이 진행을 약간 개선합니다.`],

            ["물고기 인플레이션", x=>`${toTextStyle('물고기','fish')} 획득량이 <b>${format(x)}</b> 제곱 증가합니다.`, x=>`${toTextStyle('물고기','fish')} 획득 지수가 <b>${format(x)}</b> 제곱 증가합니다.`],
            ["오버프레스티지", x=>`${toTextStyle('환생','prestige')} 파편 획득량이 <b>${format(x)}</b> 제곱 증가합니다.`, x=>`${toTextStyle('환생','prestige')} 파편 획득 지수가 <b>${format(x)}</b> 제곱 증가합니다.`],
            ["압축된 핵", x=>`${toTextStyle("마그마",'core')} 조각 획득량이 <b>${format(x)}</b> 제곱 증가합니다.`, x=>`${toTextStyle("마그마",'core')} 조각 획득 지수가 <b>${format(x)}</b> 제곱 증가합니다.`],
            ["홈메이드 상어", x=>`${toTextStyle('휴머노이드','humanoid')} 상어의 상어 요구량 베이스가 <b>${format(x,0)}</b> 감소합니다.`, x=>`${toTextStyle('휴머노이드','humanoid')} 상어의 지수가 <b>+${format(x)}</b> 만큼 증가합니다.`],

            ["상어 전환", x=>`<b>${format(x,0)}</b> 개의 추가 <b>황</b> 티어를 획득합니다.`, x=>`<b>${formatPow(x)}</b> 더 많은 <b>황</b> 티어를 획득합니다.`],
            ["엑소스켈레톤 상어", x=>`<b>${format(x,0)}</b> 개의 추가 <b>실리콘</b> 티어를 획득합니다.`, x=>`<b>${formatPow(x)}</b> 더 많은 <b>실리콘</b> 티어를 획득합니다.`],
            ["태양 상어", x=>`<b>${format(x,0)}</b> 개의 추가 <b>질소</b> 티어를 획득합니다.`, x=>`<b>${formatPow(x)}</b> 더 많은 <b>질소</b> 티어를 획득합니다.`],
            ["나는 상어", x=>`<b>${format(x,0)}</b> 개의 추가 <b>헬륨</b> 티어를 획득합니다.`, x=>`<b>${formatPow(x)}</b> 더 많은 <b>헬륨</b> 티어를 획득합니다.`],

            ["엄청난 상어 몸체", x=>`${toTextStyle('물고기','fish')}가 <b>'물고기의 몸체'</b>를 <b>${formatPow(x)}</b>만큼 강화시킵니다.`, x=>`${toTextStyle('물고기','fish')}가 <b>'엄청난 상어 몸체'</b>와 강화된 <b>'물고기의 몸체'</b>를 <b>${formatPow(x)}</b> 만큼 강화시킵니다.`],
            ["재탄생의 몸체", x=>`${toTextStyle('환생','prestige')} 파편이 <b>'환생의 몸체'</b>를 <b>${formatPow(x)}</b>만큼 강화시킵니다.`, x=>`${toTextStyle('환생','prestige')} 파편이 <b>'재탄생의 몸체'</b>와 강화된 <b>'환생의 몸체'</b>를 <b>${formatPow(x)}</b> 만큼 강화시킵니다.`],
            ["초 자연적 몸체", x=>`${toTextStyle('마그마','core')} 조각이 <b>'방사성 몸체'</b>를 <b>${formatPow(x)}</b>만큼 강화시킵니다.`, x=>`${toTextStyle('마그마','core')} 조각이 <b>'초 자연적 몸체'</b>와 강화된 <b>'방사성 몸체'</b>를 <b>${formatPow(x)}</b> 만큼 강화시킵니다.`],
            ["불멸의 몸체", x=>`<b>'완벽한 몸체'</b>의 효과가 <b>제곱</b>이 됩니다.`, x=>`<b>'불멸의 몸체'</b>와 강화된 <b>'완벽한 몸체'</b>의 효과가 <b>제곱됩니다</b>.`],

            ['바다의 행운', x=>`${toTextStyle('물고기','fish')}가 ${toTextStyle('채광 행운 '+icon('luck'),'gold')} 을 <b>+${format(x)}</b>만큼 부스트시킵니다`, x=>`${toTextStyle('물고기','fish')}가 ${toColoredText('슈퍼 채광 행운 '+icon('luck'),'orange')}을 <b>+${format(x)}</b> 만큼 늘립니다.`],
            ['지구의 행운', x=>`<b>돌</b>이 ${toTextStyle('채광 행운 '+icon('luck'),'gold')} 을 <b>+${format(x)}</b>만큼 부스트시킵니다`, x=>`<b>라듐-223</b>이 ${toColoredText('슈퍼 채광 행운 '+icon('luck'),'orange')}을 <b>+${format(x)}</b> 만큼 늘립니다.`],
            ['상어의 행운', x=>`${toTextStyle('휴머노이드','humanoid')} 상어가 ${toTextStyle('채광 행운 '+icon('luck'),'gold')} 을<b>+${format(x)}</b>만큼 부스트시킵니다`, x=>`${toTextStyle('휴머노이드','humanoid')} 상어가 ${toColoredText('슈퍼 채광 행운 '+icon('luck'),'orange')}을 <b>+${format(x)}</b> 만큼 늘립니다.`],
            ['순수한 행운', x=>`${toTextStyle('채광 행운 '+icon('luck'),'gold')} 이 <b>+${format(x)}</b>만큼 상승합니다.`, x=>`${toColoredText('슈퍼 채광 행운 '+icon('luck'),'orange')}이 <b>+${format(x)}</b> 만큼 늘어납니다.`],

            ["더 나은 철", x=>`<b>철</b> 조립기를 개선합니다.`, x=>`<b>황</b> 원자로를 약간 개선합니다.`],
            ["더 나은 니켈", x=>`<b>니켈</b> 조립기를 개선합니다.`, x=>`<b>실리콘</b> 원자로를 약간 개선합니다.`],
            ["더 나은 산소", x=>`<b>산소</b> 조립기를 개선합니다.`, x=>`<b>질소</b> 원자로를 약간 개선합니다..`],
            ["더 나은 네온", x=>`<b>네온</b> 조립기를 개선합니다.`, x=>`<b>헬륨</b> 원자로를 약간 개선합니다.`],

            ["아이러니한 아이언", x=>`<b>철</b> 원자로를 개선합니다.`, x=>`<b>마그네슘</b> 원자로를 개선합니다.`],
            ["돼지 저금통", x=>`<b>니켈</b> 원자로를 개선합니다.`, x=>`<b>나트륨</b> 원자로를 개선합니다.`],
            ["오존", x=>`<b>산소</b> 원자로를 개선합니다.`, x=>`<b>인</b> 원자로를 개선합니다.`],
            ["가짜 방사성 폐기뮬", x=>`<b>네온</b> 원자로를 개선합니다.`, x=>`<b>크로뮴</b> 원자로를 개선합니다.`],

            ["강해진 열 1", x=>`첫 번째 열에 있는 이 위의 모든 업그레이드가 <b>${formatPercent(x-1)}</b> 더 강해집니다.`],
            ["강해진 열 2", x=>`두 번째 열에 있는 이 위의 모든 업그레이드가 <b>${formatPercent(x-1)}</b> 더 강해집니다.`],
            ["강해진 열 3", x=>`세 번째 열에 있는 이 위의 모든 업그레이드가 <b>${formatPercent(x-1)}</b> 더 강해집니다.`],
            ["강해진 열 4", x=>`네 번째 열에 있는 이 위의 모든 업그레이드가 <b>${formatPercent(x-1)}</b> 더 강해집니다.`],

            ["물고기 용광로", x=>`${toTextStyle('물고기','fish')}가 재련을 <b>${formatMult(x)}</b> 만큼 빨라지게 합니다.`],
            ["환생 용광로", x=>`${toTextStyle('환생','prestige')} 파편이 재련을 <b>${formatMult(x)}</b> 만큼 빨라지게 합니다.`],
            ["마그마 용광로", x=>`${toTextStyle('마그마','core')} 조각이 재련을<b>${formatMult(x)}</b> 만큼 빨라지게 합니다.`],
            ["빠른 용광로", x=>`재련이 <b>${formatMult(x)}</b> 만큼 빨라집니다.`],

            ["진정한 열 1", x=>`진화 트리의 첫 번째 열을 구매할 수 있습니다.`],
            ["진정한 열 2", x=>`진화 트리의 두 번째 열을 구매할 수 있습니다.`],
            ["진정한 열 3", x=>`진화 트리의 세 번째 열을 구매할 수 있습니다.`],
            ["진정한 열 4", x=>`진화 트리의 네 번째 열을 구매할 수 있습니다.`],
        ],

        'evolution-goal-status': (x,y)=>x?"완료":y?"달성 못 함":"현재 진행 중", // need more info
        'evolution-goal-ctn': [
            [
                x=>`첫 번째 ${toTextStyle("핵",'core')} 환생에서<br>최소 <b>${format(x,0)}</b>개의 ${toTextStyle("마그마",'core')} 파편을 획득하세요.`,
                `${toTextStyle("핵",'core')} 진입 시 획득하는<br>${toTextStyle("마그마",'core')} 조각의 <b>100%</b>를 매 초마다 획득합니다.`
            ],[
                x=>`${toTextStyle("핵",'core')} 조립기를 구매 하지 않고 총 <b>${format(x,0)}</b>개의 ${toTextStyle("마그마",'core')} 조각을 획득하세요.`,
                ` ${toTextStyle('진화','humanoid')} 환생을 해도 ${toTextStyle("핵",'core')} 조립기를 유지합니다.`
            ],[
                x=>`총 <b>${format(x,0)}</b>개의 ${toTextStyle("마그마",'core')} 조각 획득하세요.`,
                `${toTextStyle("마그마",'core')} 조각의 획득 공식을 개선합니다.`
            ],[
                x=>`${toTextStyle('켈프','kelp')} 생산 없이 총 <b>${format(x,0)}</b>개의 ${toTextStyle('환생','prestige')} 파편을<br>획득하세요.`,
                `환생 시작 시 모든 바다가 최대 깊이 상태로 시작합니다.`,
            ],[
                x=>`각 바다에서 자원을 생산하지 않고<br>총 <b>${format(x,0)}</b>개의 ${toTextStyle('환생','prestige')} 파편을 획득하세요.`,
                `${toTextStyle('진화','humanoid')} 환생을 해도 연구가 유지됩니다.`,
            ],[
                x=>`총 <b>${format(x,0)}</b>개의 ${toTextStyle('환생','prestige')} 파편을 획득하세요.`,
                `${toTextStyle('환생','prestige')} 파편의 획득 공식을 개선합니다.`,
            ],[
                x=>`<b>10</b>개 이하의 방사선 부스트를 가진 채<br>총 <b>${format(x,0)}</b>마리의 ${toTextStyle('물고기','fish')}을 획득하세요.`,
                `방사선 부스트는 더 이상 ${toTextStyle('방사선 '+icon("radioactive"),'core')}과<br>관련한 업그레이드를 초기화 하지 않습니다.<br>항상 하나의 발전기를 가지고 시작하며,<br>${toTextStyle('방사선 '+icon("radioactive"),'core')}을 한계 이상으로 소지가 가능합니다.`,
            ],[
                x=>`방사선 부스트 없이<br>총<b>${format(x,0)}</b>마리의 ${toTextStyle('물고기','fish')}를 획득하세요.`,
                `방사선 부스트가 이제 아무것도 초기화<br>하지 않습니다. 자동 방사선 부스트를<br>해금합니다.`,
            ],[
                x=>`총 <b>${format(x,0)}</b>마리의 ${toTextStyle('물고기','fish')}를 획득하세요.`,
                `첫 번째 ${toTextStyle('상어','shark')} 랭크 스케일링이 <b>+5</b> 만큼<br>미뤄집니다.`,
            ],
        ],

        // Cultivation / 채광

        'ore-names': {
            'stone': "돌",
            'coal': "석탄",
            'iron': "철",
            'gold': "금",
            'platinum': "백금",
            'diamond': "다이아몬드",
            'bismuth': "비스무트",
            'obsidian': "흑요석",
            'vibranium': "비브라늄",
            'radium': "라듐-223",
            'uranium': "우라늄-235",
            'berkelium': "버클륨-247",
            'californium': "캘리포늄-252",
            'oganesson': "오가네손-294",
            'sharkium': "샤큠",
        },

        'mined-resources-text': `채굴한 자원들`,
        'mining-tier': `채광 티어`,
        'next-mining-tier': `<b>채광 티어</b>에서`,
        'mining-tier-reset': `<b>채광 티어</b>를 올리는 대신 광석의 체력과 양이 증가합니다.`,
        'mining-tier-ore-unlock': x=>`${x} 광석을 해금합니다.`,
        'mining-tier-ore-generation': x=>`더 이상 ${x} 광석이 나타나지 않습니다, 대신 해당 광석을 채광 속도와 행운에 기반해 자동으로 생성됩니다.`,

        'mining-ascend': `채광 승천`,
        'next-mining-ascend': `<b>채광 승천</b>`,
        'mining-ascend-reset': `<b>채광 승천</b>을 증가시킵니다, 강력한 부스트를 제공하는 대신 강제로 특이점 환생을 하게 됩니다.`,

        'mining-tier-bonus': [
            x=>`모든 광석의 체력이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>돌</b>과 <b>석탄</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>철</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>금</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>백금</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>비스무트</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>다이아몬드</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>흑요석</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`첫 9 종류의 광석 획득량이 <b>${formatPow(x)}</b>만큼 증가합니다.`,
            x=>`슈퍼 광석의 체력이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>라듐-223</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>우라늄-235</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>버클륨-247</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
            x=>`<b>캘리포늄-252</b>의 양이 <b>${formatMult(x)}</b>만큼 증가합니다.`,
        ],

        // Forge / 용광로

        'forge': {
            'anvil': ['모루 티어','새로운 용광로 업그레이드를 해금합니다.'],
            'drill': ['드릴 티어','채광하는 <b>돌</b>의 배수가 증가합니다.'],
            'shard': ['정제된 파편',`${toTextStyle('환생','prestige')} 파편 배수가 증가합니다.`],
            'tree': ['특별한 나무',`새로운 ${toTextStyle('진화','humanoid')} 트리의 행을 해금합니다.`],
            'adv_research': ['고급 연구',`새로운 연구를 해금합니다.`],
            'auto': ['고급 자동화',`새로운 자동화를 해금합니다.`],
            'shark': ['더 멀은 상어 레벨',`세 번째 ${toTextStyle('상어','shark')} 레벨의 스케일링을 미룹니다.`],
            'refined_shard': ['충전된 파편',`${toTextStyle('환생','prestige')} 파편의 지수를 증가시킵니다.`],
            'wormhole': ['웜홀',`새로운 콘텐츠인 입자 가속기를 해금합니다.`],
            'matter': ['물질 변환기',`${toTextStyle('잔재물','black-hole')} 획득량을 늘립니다.`],
        },
        'forge-progress': (x,s) => x ? `<b>${x}</b> 재련 중... <b>${s}</b>` : `용광로에서 제작을 하고 있지 않습니다.`,
        'forge-speed': x => `재련 속도: <b>${x}</b>`,
        'forge-button': ['재련 취소','재련 시작','자원이 부족해 재련할 수 없습니다!'], // need more info

        // Particle Accelerator / 입자 가속기

        'particle-accel-condense': x => `${x}을(를)<br>다음으로 변환:<br>`,
        'particle-accel-boost': [
            x => `${toTextStyle('방사선 '+icon("radioactive"),'core')} 생산량이<br><b>${x}</b>만큼 증가함.`,
            x => `모든 바다의 진행이<br><b>${x}</b> 만큼 증가함.`,
            x => `<b>돌</b> 획득량과 채광 대미지가<br><b>${x}</b> 만큼 증가함.`,
            x => `<b>${x}</b> 배<br>더 많은 ${toTextStyle('휴머노이드','humanoid')} 상어를 획득함.`,
            x => `첫 번째 ${toTextStyle('핵','core')} 원자로의 스케일링이<br><b>${x}</b> 만큼 미뤄짐.`,
            x => `${toTextStyle("상어",'shark')} ELO의 지수가<br><b>${x}</b> 만큼 증가함.`,
        ],

        // Singularity / 특이점

        'black-hole-texts': [
            `블랙홀을 형성하기 위한 충분한 물질들이 모였습니다.... <br>하지만 당신은 블랙홀 안에 갇혀 무엇을할 수 있나요? <br>걱정하지 마세요, 당신을 다른 우주로 보내는 화이트홀이 있지만 조금 복잡합니다..`,
            `평행 우주에서는 어떠셨나요? 아무튼 당신은 또 다른 블랙홀에 갇히게 될 것 입니다!`,
            `잠시만... 어떻게 ${toTextStyle("물고기",'fish')}를 그렇게 빨리 모았나요? 그래서 어쩌라고요? 이제 당신을 엄청난 고난에 넣을 차례입니다!`,
            `진짜로..`,
            `...`,
            `그만둬!`,
            `이게 마지막 기회야!`,
            `아... 그래... 너가 이겼어! 여기 보상이야...`,
        ],
        get 'singularity-milestones'() {
            return [
                [`블랙홀 1개`,`${toTextStyle("잔재물",'black-hole')}을 해금합니다. ${toTextStyle("상어",'shark')} 레벨이 ${toTextStyle("잔재물",'black-hole')} 획득을 강화합니다.`],
                [`블랙홀 2개`,`간격 업그레이드가 안 되어 있는<br>자동화를 환생 시에도 유지합니다.<br>${toTextStyle("상어",'shark')} 랭크가 ${toTextStyle("잔재물",'black-hole')} 획득을<br>강화합니다.`],
                [`블랙홀 3개`,`자동화를 환생 시에도 유지합니다.<br>채광 이전의 모든 컨텐츠를 해금한<br>상태를 유지하며 그리고 10 ${toTextStyle("휴머노이드",'humanoid')}<br>상어를 유지합니다. 더 많은 연구를<br>해금합니다.`],
                [`블랙홀 4개`,`${toTextStyle("진화",'humanoid')} 목표 완료를 환생 시에도<br>유지합니다. 입자 가속기가 10배 빨라집니다.`],
                [`블랙홀 5개`,`광석 체력 스케일링이 약해집니다.<br>새로운 자동화를 해금합니다.`],
                [`블랙홀 6개`,`만든 블랙홀 마다 ${toTextStyle("잔재물",'black-hole')} 획득이<br>2배 늘어납니다.`],
                [`블랙홀 7개`,`채광을 환생시에도 해금한 상태로<br>유지합니다.`],
                [`블랙홀 8개`,`${toTextStyle("블랙홀",'black-hole')}의 패널티가 8개의 ${toTextStyle("블랙홀",'black-hole')}을<br>만들면 사라집니다. 블랙홀을<br>만들 때의 애니메이션이 사라집니다.`],

                [`총 암흑물질 1개`,`${toTextStyle("특이점",'black-hole')}-이전의 연구를 유지합니다,<br>${toTextStyle("진화",'humanoid')} 트리, 그리고 용광로를 환생시에도<br>유지합니다. 더 많은 연구를<br>해금합니다.`],
                [`총 암흑물질 10개`,`자동으로 모든 입자 가속기를<br>활성화합니다.`],
                [`총 암흑물질 ${format(1e6)}개`,`연구 <b>s1-s3</b> 을 환생 시에도 유지합니다.<br>새로운 자동화를 해금합니다.<br>잔재물 업그레이드가 더 이상 잔재물을<br>사용하지 않습니다.`],
                [`총 암흑물질 ${format(1e12)}개`,`다음 콘텐츠를 해금합니다.`],
                [`총 암흑물질 ${format(1e100)}개`,`환생시 획득하는 ${toTextStyle("암흑 물질",'black-hole')}의 100%를 자동으로 생산합니다.`],
            ]
        },

        'remnant-upgrades': [
            [`안녕`,x=>`${toTextStyle("상어",'shark')} 레벨 보너스가<br>${x} 만큼<br>강해집니다.`],
            [`흐름`,x=>`탐험 베이스 배수가<br>${x} 만큼<br>강해집니다.`],
            [`하프-라이프`,x=>`${toTextStyle("핵",'core')} 원자로가<br>${x} 만큼<br>강해집니다.`],
            [`낭비할 시간은 없다`,x=>`재련 속도가<br>${x} 만큼<br>빨라집니다.`],

            [`다시 안녕`,x=>`${toTextStyle("물고기",'fish')}가 자기 자신을<br>${x} 만큼<br>강화시킵니다.`],
            [`그랜드마스터`,x=>`${toTextStyle("상어",'shark')} 랭크 보너스가<br>${x} 만큼<br>강해집니다.`],
            [`우주적 레벨`,x=>`${toTextStyle("상어",'shark')} 레벨의 첫 세<br>스케일링이 ${x} 만큼<br>늦춰집니다.`],
            [`상어 마스터`,x=>`${toTextStyle("상어",'shark')} ELO가<br>${x} 만큼<br>증가합니다.`],

            [`끝없는 깊이`,x=>`각 바다의 깊이<br>진행이 ${x} 만큼<br>부스트 됩니다.`],
            [`뜨거운 감자`,x=>`방사선 부스트가<br>${x} 만큼<br>강해집니다.`],
            [`메가 레벨`,x=>`${toTextStyle("상어",'shark')} 레벨의 첫<br>네 개의 스케일링이 ${x} 만큼<br>늦춰집니다.`],
            [`엘리트 마이너`,x=>`채광 티어의 세 번째<br>스케일링이 ${x} 만큼<br>늦춰집니다.`],

            [`셀프-가속기`,x=>`${toTextStyle("잔재물",'black-hole')}이 자기 자신을<br>${x} 만큼<br>강화시킵니다.`],
            [`궁극의 힘`,x=>`첫 12 개의 ${toTextStyle("잔재물",'black-hole')}<br>업그레이드가 ${x}<br>만큼 강해집니다.<br>(4번째 제외)`],
            [`효율 VI`,x=>`슈퍼 채광 대미지가<br>${x} 만큼 증가합니다.`],
            [`슈퍼내츄럴 상어`,x=>`${toTextStyle("휴머노이드",'humanoid')} 상어의<br>지수가 ${x} 만큼<br>증가합니다.`],
        ],
        
        'solar-system-list': {
            'sun':     ["태양",`???`,`???`],
            'mercury': ["수성",`수성은 태양계에서 가장 작은 행성이며 태양과 제일 가까운 행성입니다.<br>수성은 하늘에서 다른 행성보다 빠르게 움직였기에 로마 신화의 헤르메스의 또 다른 이름인<br>메르쿠리우스(Mercury)에서 따온 머큐리(Mercury)가 되었습니다. 수성은 달과 비슷하게<br>충돌 크레이터가 있으며, 이는 지난 10억 년 동안 내부 지질 활동이 부족했음을 나타내기도 합니다.<br>수성은 또한 거의 대기가 없기에 표면 온도는 태양계의 어떤 다른 행성보다 극과 극을 달립니다.`, `방사선 부스트의 첫 3 스케일링이 x10 늦춰지며 ${toTextStyle('천체','observ')}의 생산량이 다시 10배 늘어납니다.`],
            'venus':   ["금성",`금성은 태양계의 두 번째 행성으로 태양계에서 6번째로 큰 행성입니다. 금성의 이름은 로마 신화의<br>미를 상징하는 여신의 이름을 따 비너스(Venus)라고 부릅니다. 금성은 96% 이상이 이산화탄소로<br>이루어져 있으며 밀도가 높은 대기를 가지고 있습니다. 금성의 평균 표면 온도는 735 K (462 °C)으로<br>태양계에서 가장 뜨거운 행성이며 위성이 없습니다. 태양과 달에 이어 지구의 하늘에서 볼 수 있는<br>세 번째로 밝은 천체입니다.`,`현재 ${toTextStyle('휴머노이드','humanoid')} 상어의 100%를 추가 ${toTextStyle('휴머노이드','humanoid')} 상어로 써 획득하는 대신<br>'자동-${toTextStyle('휴머노이드','humanoid')} 상어'가 더 이상 작동하지 않습니다. ${toTextStyle('휴머노이드','humanoid')} 상어를 드라마틱하게 개선하며,<br>${toTextStyle('상어','shark')} 랭크의 세 번째 스케일링이 x2 만큼 미뤄집니다. ${toTextStyle('천체','observ')}의 생산량이 x10 만큼 증가합니다.`],
            'earth':   ["지구",`???`,`???`],
            'moon':    ["달",`태양계에 오신 것을 환영합니다! 일부 행성을 자유롭게 탐험할 수 있지만, 강력한 보상을<br>받기 위해서는 관측이 필요합니다. 관측을 시작하면 강제로 특이점 환생이 이루어지며<br>일부 연구 및 진화 트리가 초기화 되며(관측을 끝내면 다시 생깁니다),<br>블랙홀의 감소 효과가 ^0.5 로 고정되며 거의 모든 채광 이후의 기능이 비활성화 되며,<br>마지막으로 어떠한 바다도 탐험할 수 없습니다. 우주 기지에서 ${toTextStyle('천체','observ')}를 생성해<br>업그레이드를 구매하여 진행을 더 빠르게 만들 수 있습니다. 난이도는 게임 진행에는<br>영향을 미치지 않지만 우주 기지의 기능을 더 많이 사용할 수 있도록 만듭니다.<br>자! 먼저 지구의 달부터 시작하겠습니다!<br>달이라고도 부르지만, '거대 충돌 가설'에서는 충돌 이전엔 '테이아' 라고 불렀습니다.`,`채광 승천과 새 ${toTextStyle('잔재물','black-hole')} 업그레이드를 해금합니다. 채광 승천은 강제로 특이점 환생을 진행하는<br>대신 강력한 보너스와 여러 광석을 해금할 수 있습니다.`],
            'mars':    ["화성",`화성은 태양계의 네 번째 행성으로 표면이 단단하고 크기가 지구와 비슷하기 때문에 지구 행성군에<br>속합니다. 화성의 지형은 충돌 분화구, 화산, 계곡, 사막, 극지방 만년설 등<br>독특한 특징을 가지고 있습니다. 화성은 물의 침식과 유사한 지질 구조와<br>장기간동안 물에 노출되었을 때만 형성될 수 있는 미네랄을 가지고 있습니다.<br>화성에 생명체가 존재하는지에 대한 질문은 수세기 동안 과학자들의 이목을 끌었습니다`,`이미 구매한 ${toTextStyle('진화','humanoid')} 트리를 테라포밍하여 강력한 보너스를 얻을 수 있게 되지만<br>더 많은 비용을 요구합니다. 새로운 자동화를 해금합니다. ${toTextStyle('천체','observ')}의 생산량이 x10 만큼 증가합니다.`],
            'jupiter': ["목성",`목성은 태양계에서 가장 큰 행성으로, 태양계의 다섯 번째 행성입니다. 거대 기체 행성으로<br>태양계의 다른 행성들을 모두 합한 질량에 약 2.47배에 달하는 질량을 가지고 있습니다.<br>목성은 고대부터 알려져 왔으며 다양한 문화의 신화와 종교적 신념에도 언급되어 있습니다.<br>목성의 현대 이름인 주피터(Jupiter)는 로마 신화의 하늘과 천둥의 신인 유피테르(Jupiter)에서<br>따온 이름입니다. 목성의 대기는 폭풍, 번개, 오로라, 그리고 17세기 부터 관측되어온 거대한 폭풍인<br>'대적점'과 같은 다양한 특징을 가지고 있습니다.`, `더 많은 ${toTextStyle('잔재물','black-hole')} 업그레이드를 해금합니다. ${toTextStyle('천체','observ')}의 생산량이 다시 10배 늘어납니다.`],
            'saturn':  ["토성",`토성은 태양계에서 목성 다음으로 두 번째로 큰 행성으로 태양계의 여섯 번째 행성입니다.<br>토성은 대부분 수소와 헬륨으로 이루어져 있기 때문에 목성과 같이 거대 기체 행성으로 분류됩니다.<bt>토성의 이름인 새턴(Saturnus)은 로마 신화의 농업의 신인 사투르누스(Saturnus)에서<br>비롯된 이름입니다. 토성은 거대한 고리에 둘려싸여있는데, 이는 얼음 입자, 무거운 입자들,<br>그리고 먼지로 이루어져 있습니다. 토성은 거대한 타이탄과 같은 여러 위성을 146개를 가지고<br>있습니다.`, `새로운 ${toTextStyle('핵','core')} 원자로를 한 줄 해금합니다. <i>이 원자로들은 핵 이후의 환생 레이어의 환생을 통해<br>초기화 되지 않으며, ${toTextStyle('잔재물','black-hole')} 업그레이드인 "하프-라이프"에 영향을 받지 않습니다.`],
            'uranus':  ["천왕성",`천왕성은 태양계의 일곱 번째 행성입니다. 1781년 윌리엄 허셜(William Herschel)에 의해<br>발견되었으며, 로마 신화의 하늘의 신인 우라노스(Uranus)의 이름을 따서 우라노스(Uranus)라고<br>부릅니다. 천왕성은 기술 망원경을 이용해 발견한 최초의 행성입니다. 태양계에서 세 번째로 크고<br>질량이 네 번째로 큰 행성입니다. 천왕성은 대부분 얼음과 암석으로 구성되어 있으며,<br>대기에는 수소, 헬륨, 메탄이 포함되어 있습니다. 천왕성은 고리와 28개의 위성을 가지고 있습니다.<br>천왕성의 자전축은 다른 태양계 행성들과 다르게 "옆으로" 넘어져 있어 행성은 태양을 공전하면서<br>북극과 남극이 번갈아가며 태양을 향하게 됩니다.`, `${toTextStyle('상어','shark')} 과잉 문제를 해결하며 ${toTextStyle('신앙','humanoid')}의 배수를 두 배로 늘립니다.`],
            'neptune': ["해왕성",`해왕성은 태양계의 여덟 번째 행성이자 태양에서 가장 먼 행성입니다. 태양으로부터의 거리는<br>평균 45억 킬로미터입니다. 해왕성은 태양계에서 네 번째로 큰 행성으로 질량은 지구의 17배,<br>적도 지름은 지구의 3.9배에 달합니다. 해왕성의 이름인 넵튠(Neptune)은 로마 신화에선 포세이돈,<br>그리스 신화의 넵튠(Neptune)으로 불리는 신의 이름에서 따왔습니다. 해왕성의 대기는 주로 수소와<br>헬륨으로 구성되어 있으며 메탄, 물, 암모니아 및 기타 화합물이 혼합되어 있습니다.<br>해왕성은 태양계에서 가장 추운 행성 중 하나로 꼽히며 평균 기온은 -200°C입니다.`, `${toTextStyle('블랙홀','black-hole')}을 더욱 강화시키는 ${toTextStyle('별자리','star')}를 해금합니다.`],
            'pluto':   ["명왕성",`???`,`???`],
        },
        'build-rocket-part': x => `${x} 개의 로켓 부품을 제작.`,
        'total-rp': "개의 총 로켓 부품",
        'solar-system-lock-reward': `${toTextStyle('관측','observ')}을 완료해 보상을 해금하세요.`,
        'solar-system-goal': x => `총 ${toTextStyle('천체','observ')} 목표: <h4>${x}</h4>`,
        'solar-system-status': x => [`관측 시작하기`,`관측 포기하기`,`관측 완료하기`][x],
        'observ-progress': x => `총 <b>${x}</b> 개의 ${toTextStyle('천체','observ')}에 도달하세요`,
        'observ-cond': `${toTextStyle('관측','observ')}을 완료하세요`,

        'space-base-upgrades': {
            'o1': [`우주`,x=>`${toTextStyle('천체','observ')} 획득량이 ${x} 만큼 증가합니다.`],
            'o2': [`우주 물고기`,x=>`${toTextStyle('물고기','fish')} 획득량이 ${x} 만큼 증가합니다.`],
            'o3': [`우주 환생`,x=>`${toTextStyle('환생','prestige')} 파편 획득량이 ${x} 만큼 증가합니다.`],
            'o4': [`우주 핵`,x=>`${toTextStyle('마그마','core')} 조각 획득량이 ${x} 만큼 증가합니다.`],
            'o5': [`우주 방사선`,x=>`${toTextStyle('방사선 '+icon("radioactive"),'core')} 생산량이 ${x} 만큼 증가합니다.`],
            
            'e1': [`물고기 변환기`,x=>`${toTextStyle('천체','observ')} 획득량이 ${x} 만큼 증가합니다.`],
            'e2': [`환생 변환기`,x=>`${toTextStyle('천체','observ')} 획득량이 ${x} 만큼 증가합니다.`],
            'e3': [`핵 변환기`,x=>`${toTextStyle('천체','observ')} 획득량이 ${x} 만큼 증가합니다.`],
            'e4': [`천체 변환기`,x=>`${toTextStyle('비축량','reserv')} 획득량이 ${x} 만큼 증가합니다.`],
            'e5': [`유니버셜 변환기`,x=>`천체 "변환기" 업그레이드의 베이스가 ${x} 만큼 증가합니다.`],
            'e6': [`축적-궤도`,x=>`${toTextStyle('궤도','traject')} 획득량이 ${x} 만큼 증가합니다.`],

            'r1': [`상대론`,x=>`${toTextStyle('천체','observ')} 획득량이 ${x} 만큼 증가합니다.`],
            'r2': [`관측`,x=>`${toTextStyle('비축량','reserv')} 획득량이 ${x} 만큼 증가합니다.`],
            'r3': [`우주 물고기 II`,x=>`${toTextStyle('물고기','fish')} 획득량이 ${x} 만큼 증가합니다.`],
            'r4': [`우주 환생 II`,x=>`${toTextStyle('환생','prestige')} 파편 획득량이 ${x}만큼 증가합니다.`],
            'r5': [`우주 방사선 II`,x=>`${toTextStyle('방사선 '+icon("radioactive"),'core')} 생산량이 ${x} 만큼 증가합니다.`],

            't1': [`트랜스포트`,x=>`${toTextStyle('천체','observ')} 획득량이 ${x} 만큼 증가합니다.`],
            't2': [`비축 시스템`,x=>`${toTextStyle('비축량','reserv')} 획득량이 ${x} 만큼 증가합니다.`],
            't3': [`관측 II`,x=>`${toTextStyle('궤도','traject')} 획득량이 ${x} 만큼 증가합니다.`],
            't4': [`우주 물고기 III`,x=>`${toTextStyle('물고기','fish')} 획득량이 ${x} 만큼 증가합니다.`],
            't5': [`늦춰진 방사선`,x=>`방사능 부스트의 첫 세 스케일링이 ${x} 만큼 늦춰집니다.`],
            't6': [`트랜스포트 II`,x=>`“트랜스포트”의 베이스가 ${x} 만큼 증가합니다.`],
        },
        
        'experiment-reset': `이전의 모든 우주 베이스 콘텐츠를 초기화 시키지만, ${toTextStyle('경험','experiment')} 티어를<br>올려 강력한 부스트를 획득하세요.`,
        'experiment-boosts': [
            x=>`${toTextStyle('천체','observ')} 획득량이 ${x} 만큼 증가합니다.`,
            x=>`${toTextStyle('비축량','reserv')} 획득량이 ${x} 만큼 증가합니다.`,
        ],

        'constellation-boosts': [
            [`별의 물고기`, x=>`${toTextStyle('물고기','fish')}의 획득량에 ${x} 을 지수에 추가합니다.`, x=>`${toTextStyle('천체','observ')} 획득량이 ${x} 만큼 증가합니다.`],
            [`별의 환생`, x=>`${toTextStyle('환생','prestige')} 파편 획득량에 ${x} 을 지수를 추가합니다.`, x=>`${toTextStyle('비축량','reserv')} 획득량이 ${x} 만큼 증가합니다.`],
        ],

        // Automation / 자동화

        'auto-shark-name': `자동-${toTextStyle("상어","shark")} 레벨`,
        'auto-su-name': `자동-${toTextStyle("상어","shark")} ${toTextStyle("물고기","fish")}<br>업그레이드`,
        'auto-spu-name': `자동-${toTextStyle("상어","shark")} ${toTextStyle("환생","prestige")}<br>업그레이드`,
        'auto-eu-name': `자동-탐험 업그레이드`,
        'auto-core_reactor-name': `자동-${toTextStyle("핵","core")} 원자로`,
        'auto-core_radiation-name': `자동-${toTextStyle("핵","core")} 방사선`,
        'auto-radioactive_boosts-name': `자동-방사선 부스트`,
        'auto-mining_upgs-name': `자동-${toTextStyle("상어","shark")} 채광<br>업그레이드`,
        'auto-humanoid-name': `자동-${toTextStyle("휴머노이드","humanoid")} 상어`,
        'auto-research-name': `자동-${toTextStyle("특이점","black-hole")}-이전의 연구`,
        'auto-mining_tier-name': `자동-채광 티어`,
        'auto-remnant-name': `자동-${toTextStyle("잔재물","black-hole")} 업그레이드`,
        'auto-faith-name': `자동-${toTextStyle("신앙","humanoid")}`,

        'auto-cost': (D,cost,name) => `간격 ${formatReduction(D,0)} 감소.<br>비용: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `간격: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress / 진행

        'progress-0-text': r => `총 ${format(r)} 마리의 ${toTextStyle('물고기','fish')}에 도달하세요`, 
        get 'progress-0-cond-text'() { return `${toTextStyle('환생','prestige')}을 하세요` },

        'progress-1-text': r => `${format(r)} 개의 ${toTextStyle('환생','prestige')} 파편을 모아 자동화를 해금하세요`,
        'progress-2-text': r => `${format(r)} 개의 ${toTextStyle('환생','prestige')} 파편을 모아 연구를 해금하세요`,
        'progress-3-text': r => `${toTextStyle('상어','shark')} 레벨 ${format(r,0)} 에 도달해 탐험을 해금하세요`,
        'progress-4-text': r => `태평양에서 ${format(r)}m 에 도달해 ${toTextStyle('핵','core')}을 해금하세요`,

        'progress-5-text': r => `총 ${format(r)} 개의 ${toTextStyle('환생','prestige')} 파편에 도달하세요`, 
        get 'progress-5-cond-text'() { return `${toTextStyle('핵','core')}에 들어가세요` },

        'progress-6-text': r => `${format(r)} 개의 ${toTextStyle('마그마','core')} 파편을 모아 다음 ${toTextStyle('핵','core')} 콘텐츠를 해금하세요`, 
        'progress-7-text': r => `${toTextStyle('상어','shark')} 레벨 ${format(r,0)} 에 도달해 새로운 바다를 해금하세요`, 
        'progress-8-text': r => `${format(r)} 개의 ${toTextStyle('마그마','core')} 파편을 모아 다음 ${toTextStyle('핵','core')} 콘텐츠를 해금하세요`, 
        'progress-9-text': r => `총 ${format(r)} 개의 ${toTextStyle('물고기','fish')}에 도달해 새로운 ${toTextStyle('핵','core')} 원자로를 해금하세요`, 

        'progress-10-text': r => `총 ${format(r)} 마리의 ${toTextStyle('물고기','fish')}에 도달하세요`, 
        get 'progress-10-cond-text'() { return `당신의 ${toTextStyle('상어','shark')}를 진화시키세요` },

        'progress-11-text': r => `${format(r,0)} 게의 ${toTextStyle('휴머노이드','humanoid')} 상어에 도달해 다음 ${toTextStyle('진화','humanoid')} 콘텐츠를 해금하세요`, 
        'progress-12-text': r => `${format(r,0)} 개의 ${toTextStyle('휴머노이드','humanoid')} 상어에 도달해 다음 ${toTextStyle('진화','humanoid')} 콘텐츠를 해금하세요`, 
        'progress-13-text': r => `채광 티어 ${format(r,0)} 에 도달해 다음 ${toTextStyle('진화','humanoid')} 트리의 열을 해금하세요`, 
        'progress-14-text': r => `채광 티어 ${format(r,0)} 에 도달해 다음 ${toTextStyle('진화','humanoid')} 콘텐츠를 해금하세요`, 
        'progress-15-text': r => `채광 티어 ${format(r,0)} 에 도달해 다음 ${toTextStyle('진화','humanoid')} 콘텐츠를 해금하세요`, 

        'progress-16-text': r => `${format(r,0)}개의 입자 가속기를 채우세요`, 
        get 'progress-16-cond-text'() { return `${toTextStyle('블랙홀','black-hole')}을 형성하세요` },

        'progress-17-text': r => `${format(r,0)} ${toTextStyle('블랙홀','black-hole')}을 형성하세요`,

        'progress-18-text': r => `총 ${format(r)} 마리의 ${toTextStyle('물고기','fish')}에 도달하세요`, 
        get 'progress-18-cond-text'() { return `${toTextStyle('희생','black-hole')}을 하세요` },

        'progress-19-text': r => `총 ${format(r)} 개의 ${toTextStyle('암흑물질','black-hole')}에 도달하세요`,

        'maxed-progress': "모든 콘텐츠를 해금함!",

        // Reset / 환생 메시지

        get 'reset-prestige-message'() {
            let p = toTextStyle('환생','prestige'), s = toTextStyle('상어','shark'), f = toTextStyle('물고기','fish')
            return `
            <h3>${p}</h3><br>
            ${p} 은 첫 번째 환생 레이어 입니다. 환생은 당신의 ${s} 와 ${s} 업그레이드, 그리고 ${f} 를 초기화 하는 대신 ${p} 파편을 획득합니다.
            첫 번째 ${p} 은 새로운 ${s} 업그레이드를 해금합니다.<br>
            <img src="textures/PrestigeShard.png"><br>
            정말로 환생을 하시겠습니까?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('핵','core'), m = toTextStyle('마그마','core'), p = toTextStyle('환생','prestige')
            return `
            <h3>${c}</h3><br>
            ${c} 은 두 번째 환생 레이어 입니다. 핵에 진입하는 것은 ${p} 파편과 ${p} 업그레이드 같은 ${p} 에 관련한 모든것을 초기화 시키며, 몇몇 ${toTextStyle('연구','prestige')} 와 탐험도 초기화 되는 대신 ${m} 조각을 획득합니다.
            또한 ${c} 원자로를 해금합니다.<br>
            <img src="textures/Magmatic.png"><br>
            정말로 핵에 들어가시겠습니까?
            `
        },
        get 'reset-humanoid-message'() {
            let e = toTextStyle('진화','humanoid'), c = toTextStyle('핵','core'), m = toTextStyle('마그마','core'), p = toTextStyle('환생','prestige')
            return `
            <h3>${e}</h3><br>
            <subtitle>“상어가 야생을 깨우쳐 상어 인간으로 변합니다. 하지만 지금까지 모은 것을 전부 초기화 해야 합니다.”</subtitle>
            ${e} 는 세 번째 환생 레이어 입니다. 상어를 진화 시키는 것은 ${c} 관련한 ${m} 조각들, ${c} 원자로, ${c} 방사선, ${c} 조립기, 그리고 몇몇 ${toTextStyle('환생','prestige')} 을 초기화 시키는 대신 ${toTextStyle('휴머노이드','humanoid')} 상어를 획득합니다.
            또한 랭크와 ${e} 트리를 해금합니다.<br>
            <img src="textures/Evolution.png"><br>
            정말로 당신의 상어를 진화시키겠습니까?
            `
        },
        get 'reset-black-hole-message'() {
            let e = toTextStyle('블랙홀','black-hole'), c = toTextStyle('진화','humanoid'), m = toTextStyle('마그마','core'), p = toTextStyle('환생','prestige')
            return `
            <h3>${e}</h3><br>
            ${e} 은 네 번째 환생 레이어 입니다.
            ${e}을 형성하는 것은 ${c} 처럼 모든것을 초기화 시킵니다, 이는 상어 랭크, 휴머노이드 상어, 진화 트리, 신앙, 진화 목표, 채광, 재련, 입자 가속기, 몇몇 연구, 몇몇 자동화, 그리고 조금의 게임 프로그래션을 포함합니다.
            ${e} 을 만드는 것은 자원 획득을 감소 시키며, 하지만 목표처럼 새로운 이득이 있습니다.<br>
            <img src="textures/black-hole.png"><br>
            정말로 다른 우주에 진입하겠습니까?
            `
        },
        get 'reset-sacrifice-message'() {
            let e = toTextStyle('희생','black-hole'), c = toTextStyle('블랙홀','black-hole')
            return `
            <h3>${e}</h3><br>
            ${e}은 미니 환생 레이어입니다.
            희생을 하는 것은 ${c} 처럼 모든것을 초기화 시킵니다, 이는 현재 가진 블랙홀 (첫 7개의 블랙홀 마일스톤을 제외한), 잔재물, 잔재물 업그레이드, 그리고 몇몇 연구를 초기화하는 대신 ${toTextStyle('암흑물질','black-hole')}을 획득합니다.<br>
            <img src="textures/sacrifice.png"><br>
            정말로 당신의 상어를 희생시키겠습니까?
            `
        },
        
        // Other / 기타

        'scalings': {
            'shark_level' : `상어 레벨`,
            'shark_rank' : `상어 랭크`,
            'su_s3' : `"상어 이빨 강화" 업그레이드`,
            'su_s4' : `"상어 지수 강화" 업그레이드`,
            'su_m1' : `"채광 대미지" 업그레이드`,
            'su_m3' : `"압축된 돌" 업그레이드`,
            'su_m5' : `"기본 광석들" 업그레이드`,
            'cr_boost' : `방사성 부스트`,
            'mining_tier' : `채광 티어`,
            'mining_ascend' : `채광 승천`,
            'remnant_upg' : `잔재물 업그레이드`,
        },
        'scaling-start': "시작: ",
        'scaling-mode': {
            "L": x => `<b>${x}</b> 선형적`,
            "D": x => `<b>${x}</b> 지수적`,
        },
        'scaling-info': `스케일링은 일정 수준에 도달할 때 마다 추가됩니다. <b>N</b> - 개수, <b>S</b> - 시작`,

        'upgrade-shark': x => `${toTextStyle('상어','shark')} 레벨 올리기<br>비용: ${x.format(0)} ${toTextStyle('물고기','fish')}`,
        'shark-bonus-fish': x => `<br>+${x.format(0)} ${toTextStyle('물고기','fish')} 베이스`,
        'shark-bonus-prestige': x => `<br>${formatMult(x)} ${toTextStyle('환생','prestige')} 파편`,
        'shark-bonus-core': x => `<br>${formatMult(x)} ${toTextStyle('마그마','core')} 조각`,
        'shark-bonus-remnants': x => `<br>+${x.format(0)} ${toTextStyle('잔재물','black-hole')}`,

        'shark-overpopulation': (x,y) => `${toTextStyle('Shark','shark')}가 너무 많아 <h4>${toTextStyle(format(y),'fish')}</h4>마리 이상의 ${toTextStyle('물고기','fish')}가 <h4>${format(x,3)}√</h4>만큼 줄어듭니다.`,

        'shark-rank-bonuses': {
            fish: x => `${toTextStyle('물고기','fish')} ${formatPow(x)}`,
            prestige: x => `${toTextStyle('환생','prestige')} 파편 ${formatPow(x)}`,
            mining_damage: x => `채광 대미지 ${formatMult(x)}`,
            so: x => `${toTextStyle('상어','shark')} 과잉 문제를 ${formatPow(x)} 만큼 미룹니다`,
            vibranium: x => `<b>비브라늄</b> ${formatMult(x)}`,
            remnants: x => `${formatMult(x)} ${toTextStyle('잔재물','black-hole')}`,
        },

        'total': "총",
        'level': "레벨",
        'effect': "효과",
        'cost': "비용",
        'buyMax': "최대 구매",
        'require': "요구",
        'next-at': "다음: ", // need to fix
        'depth': "깊이",
        'reward': "보상",
        'new-preset': "새로운 프리셋",
        'maxed': "최대",
        'difficulty': "난이도",

        'remove': "삭제",
        'overwrite-current': "현재 트리 불러오기",
        'load': "사용하기",
        'force-load': "트리를 초기화하고 사용하기",
        'you-have': "현재 소지:",

        'offline-time-text': x=>`<b>${formatTime(x,0)}</b> 동안 오프라인이었습니다.`,

        'research-afford': bool => bool ? "구매" : "구매하지 않음",
        'research-bought': bool => bool ? `<b>구매함</b>` : `<b>구매하지 않음</b>`,
        'research-pages': x => `${x} 페이지`,

        'off-on': bool => bool ? "켜짐" : "꺼짐",

        'popup-buttons': [
            ["예","아니오"],
            ["확인","취소"],
        ],

        'popup-desc' : {
            import: `아래에 붙여넣기. <b>주의: 현재 게임 진행 상태는 사라집니다!</b>`,
            wipe: `정말로 게임 진행 상태를 초기화 하겠습니까? 초기화 하기 위해선 아래에<br>"<span class="free-select">I'm sorry what I don't want sharks!</span>"를 입력하세요`,
            "evolution-tree-respec": `정말로 ${toTextStyle('진화','humanoid')} 트리를 재설정 하시겠습니까? 재설정은 ${toTextStyle('진화','humanoid')} 환생을 강제로 진행하며, 어떠한 ${toTextStyle('휴머노이드','humanoid')} 상어를 획득할 수 없습니다.`,
            "evolution-tree-import": `아래에 트리 프리셋을 넣으세요.`,
        },

        'notify-desc' : {
            save: "게임 저장됨!",
            copy_to_clipboard: "클립보드로 복사함!",
            forge_completed: x => `<b>${x}</b>을(를) 성공적으로 제작함!`,
        },

        'radio-desc' : {
            'notation': ['표기법',['과학적','스텐다드','복합적 과학','로그']],
            'comma-format': ['최대 OoM 표기 자릿수',['3','6','9','12','15']],
            'autosave': ['자동 저장',['꺼짐','켜짐']],
            'autosave-time': ['자동 저장 간격',['15초','30초','60초','120초']],
            'offline': ['오프라인 진행',['꺼짐','켜짐']],
            'max-research-amt': ['페이지에 표시되는 최대 연구 개수',['∞','15','20','25','30']],
            'visible-research': [`구매한 연구 보이기`,["보이기","숨기기"]],
            'notify': ['탭 알림',['꺼짐','켜짐']],
        },

        'radio-desc-default' : ['꺼짐','켜짐'],

        'prompt-placeholder': "아래에 입력하세요...",

        'option-buttons-text': ["저장","클립보드에 내보내기","파일로 내보내기","프롬포트로 불러오기","파일로 불러오기","초기화!!!",'커뮤니티에 가입하기 (Discord)','제작자를 지원하기 (Boosty)'],

        'confirm-prestige': "환생",
        'confirm-core': "핵 진입",
        'confirm-humanoid': "상어 진화",
        'confirm-black-hole': "블랙홀 형성",
        'confirm-sacrifice': "상어 희생",
    },
}
