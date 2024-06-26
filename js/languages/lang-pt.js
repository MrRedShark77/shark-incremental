// This is Korean!

LANGUAGES.PT = {
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

        'humanoid-name': "상어 인간",
        'humanoid-costName': toTextStyle('상어','humanoid') + ' 인간',

        'full-shark-level': toTextStyle('상어','shark') + ' 레벨',

        'sharkoid-faith': toTextStyle('상어 인간의 신앙','humanoid'),

        'curr-top-0-req': x => `총 <b>${format(x)}</b> ${toTextStyle('물고기','fish')}에 도달하세요`, 
        'curr-top-0-reset': x => `환생을 해 <b>${x.format(0)}</b> ${toTextStyle('환생','prestige')} 파편을 획득`,

        'curr-top-1-req': x => `총 <b>${format(x)}</b> ${toTextStyle('환생','prestige')} 파편에 도달하세요`, 
        'curr-top-1-reset': x => `핵으로 들어가 <b>${x.format(0)}</b> ${toTextStyle('마그마','core')} 파편을 획득`,

        'curr-top-2-req': x => `<b>${format(x)}</b> ${toTextStyle('물고기','fish')} 도달`, 
        'curr-top-2-reset': (x,next) => `당신의 ${toTextStyle('상어','shark')}를  <b>${format(x,0)}</b> ${toTextStyle('상어','humanoid')} 인간으로 진화   (<b>${format(next)}</b> ${toTextStyle('물고기','fish')}에서 다음 진화 가능)`,

        'radioactive-name': toTextStyle('방사능 '+icon("radioactive"),'core'),

        // Tabs / 탭들

        'tab-shark': toTextStyle('상어','shark'),
        'tab-options': "옵션들",
        'tab-auto': "자동화",
        'tab-research': toTextStyle('연구','prestige'),
        'tab-explore': "탐험",

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

        // Elements / 원소들

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
        'core-temp-after-div': `(${toTextStyle('핵','core')}의 온도는 ${toTextStyle('핵','core')} 환생 이후 <span id="core-temp-after">???</span>도가 됩니다.)`,

        'sharkoid-faith-div': `당신은 <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('상어 인간의 신앙','humanoid')}을 가지고 있습니다.`,
        'respec-evolution-tree': `${toTextStyle('진화','humanoid')} 트리를 초기화하기`,
        'export-evolution-tree': `${toTextStyle('진화','humanoid')} 트리를 내보내기`,
        'import-evolution-tree': `${toTextStyle('진화','humanoid')} 트리를 불러오기`,
        'evolution-tree-preset': `${toTextStyle('진화','humanoid')} 트리 프리셋`,

        'rerun-evolution': `진화 트리를 초기화하면서 강제로 ${toTextStyle('진화','humanoid')} 환생을 진행`,

        'mining-text': `채광 중... <b id="mining-progress">???</b> | 대미지 <b id="mining-damage">???</b> | ${toTextStyle(`채광 행운 <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'mining-tier-div': `채광 티어: <h3 id="mining-tier">0</h3>`,
        'mining-note': `노트: 만약 높은 체력의 광석에 의해 채광을 못하는 경우 (매우 오랜 시간이 걸리면), 게임을 재로딩해 해결이 가능합니다(F5).`,

        // Upgrades / 업그레이드 들

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
        'su-p2-desc': `${toTextStyle('Fish','fish')} 섭취량을 레벨 당<b>×lg(${toTextStyle('물고기','fish')})</b> 올립니다.`,

        'su-p3-name': '느려진 상어',
        'su-p3-desc': `첫 번째 ${toTextStyle('상어','shark')} 레벨 스케일링이 레벨 당 <b>+1</b> 느려집니다.`,

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
        'su-m5-desc': `처음 네 광석들을 채광시 획득하는 량이 레벨 당 <b>×2</b> 올라갑니다.`,

        // Researches / 연구들

        'research-p1-name': "뛰어난 민첩성",
        'research-p1-desc': `'상어 민첩성 강화'는 이제 ${toTextStyle("상어",'shark')} 레벨의 ${toTextStyle("환생",'prestige')} 파편 보너스의 베이스에 감소된 상태로 강화합니다.`,

        'research-p2-name': "상어 업그레이드 EL",
        'research-p2-desc': `${toTextStyle("상어",'shark')} ${toTextStyle("물고기",'fish')} 업그레이드는 더 이상 ${toTextStyle("물고기",'fish')}를 소모하지 않습니다.`,

        'research-p3-name': "강화된 상어 레벨",
        'research-p3-desc': `${toTextStyle("상어",'shark')} 레벨 업의 요구량의 베이스를 <b>1</b> 줄이는 대신,
        강제로 ${toTextStyle("환생",'prestige')}을 하며 ${toTextStyle("환생",'prestige')} 파편 과 ${toTextStyle("환생",'prestige')} 업그레이드들을 초기화 합니다.
        새로운 ${toTextStyle("상어",'shark')} 업그레이드를 해금합니다.`,

        'research-p4-name': "더 나은 환생",
        'research-p4-desc': `${toTextStyle("환생",'prestige')} 파편 획득 공식을 조금 개선합니다.`,

        'research-p5-name': "엄청난 힘",
        'research-p5-desc': `'상어 힘 슈퍼 강화'가 매 ${toTextStyle("상어",'shark')} 레벨 마다 <b>1%</b> 강해집니다.(100부터 시작합니다)`,

        'research-p6-name': "엄청 느려진 상어",
        'research-p6-desc': `'느려진 상어'가 <b>두배</b> 강해집니다.`,

        'research-p7-name': "더 나은 자원 I",
        'research-p7-desc': `${toTextStyle("산호",'coral')}와 ${toTextStyle("얼음",'ice')}'의 효과가 개선됩니다.`,

        'research-p8-name': "더욱 강화된 상어 레벨",
        'research-p8-desc': `${toTextStyle("상어",'shark')} 레벨의 요구량을 1만큼 더 줄입니다.`,

        'research-p9-name': "싼 환생 부스터",
        'research-p9-desc': `레벨 당 '환생 부스터'의 가격 증가를 <b>-0.05</b>씩 줄입니다.`,

        'research-e1-name': "바다 시너지즘I",
        'research-e1-desc': `${toTextStyle("소금",'salt')}이 ${toTextStyle("산호",'coral')}의 생산량을 증가시킵니다.`,

        'research-e2-name': "바다 시너지즘 II",
        'research-e2-desc': `${toTextStyle("압축된 눈",'snow')}이 ${toTextStyle("얼음",'ice')}의 생산량을 증가시킵니다.`,

        'research-e3-name': "탑험 자동화",
        'research-e3-desc': `자동으로 <b>X</b> 번째 바다의 베이스를 탐험하지 않고도 획득합니다.`,

        'research-e4-name': "산화 켈프",
        'research-e4-desc': `<b>산소</b>가 ${toTextStyle("켈프",'kelp')}의 생산량을 감소된 상태로 증가시킵니다.`,

        'research-e5-name': "탐험 자동화 MK2",
        'research-e5-desc': `자동으로 인도양의 베이스를 탐험하지 않고도 획득합니다. ${toTextStyle('켈프','kelp')} 효과를 강화시킵니다.`,

        'research-e6-name': "자바 해구",
        'research-e6-desc': `<b>인도양</b>의 깊이 제한이 사라지며, 그 이후의 효과를 강화시킵니다.`,

        'research-c1-name': "연구 핵 유지기",
        'research-c1-desc': `${toTextStyle('핵','core')}에 들어가도 ${toTextStyle("연구",'prestige')}가 초기화 되지 않습니다.`,

        'research-c2-name': "탐험 핵 유지기",
        'research-c2-desc': `${toTextStyle('핵','core')}에 들어가도 <b>X</b> 번째 바다의 해금과 깊이가 유지됩니다.`,

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
        'research-c10-desc': `'느려진 상어' 두 번째 ${toTextStyle('상어','shark')} 레벨 증가량을 감소된 상태로 줄입니다.`,

        'research-c11-name': "더 나은 방사선 감소",
        'research-c11-desc': `'방사선 감소'가 조금 더 강해집니다.`,

        'research-c12-name': "메가 방사선 감소",
        'research-c12-desc': `방사선의 한계를 엄청나게 줄입니다.`,

        'research-c13-name': "슈퍼 방사선 상어",
        'research-c13-desc': `'방사선 상어'가 <b>50%</b> 강해집니다.`,

        'research-c14-name': "핵 지수 부스트",
        'research-c14-desc': `핵 원자로가 ${toTextStyle('물고기','fish')}에 지수 부스트를 제공합니다.`,

        'research-c15-name': "자가-방사성",
        'research-c15-desc': `이제 방사선 업그레이드를 ${toTextStyle('물고기 '+icon('radioactive'),'fish')} 대신 일반 ${toTextStyle('물고기','fish')}로 구매 할 수 있습니다, 대신 수치가 <b>^0.0001</b>로 감소합니다. 수치가 레벨 당 <b>×10</b> 증가합니다.`,

        'research-m1-name': "마그마 행운",
        'research-m1-desc': `${toTextStyle('채광 행운 '+icon('luck'),'gold')}을 레벨 당 <b>+5</b> 올립니다.`,

        'research-m2-name': "하이퍼 느려진 상어",
        'research-m2-desc': `세 번째 ${toTextStyle("상어",'shark')} 레벨 증가량이 <b>+1000</b>만큼 미뤄집니다.`,

        'research-m3-name': "느려진 방사선 부스트",
        'research-m3-desc': `레벨 당 첫 두 개의 방사선 부스트의 수치 증가가 <b>+1</b> 미뤄집니다.`,

        'research-m4-name': "더 나은 채광 티어",
        'research-m4-desc': `채광 티어의 2 ~ 5 번재 효과가 레벨 당 <b>+25%</b> 강해집니다.`,

        'research-f1-name': "기본 랭크 지수",
        'research-f1-desc': `레벨 당 ${toTextStyle("상어",'shark')} ELO 의 지수를 <b>+25%</b> 올립니다.`,

        'research-f2-name': "더 많은 신앙",
        'research-f2-desc': `${toTextStyle('물고기','fish')} & ${toTextStyle("환생",'prestige')} 파편을 통해 더 많은 ${toTextStyle('상어 인간의 신앙','humanoid')}을 획득합니다.`,

        'research-f3-name': "느려진 핵 원자로",
        'research-f3-desc': `첫 번째 핵 원자로의 증가를 레벨 당 <b>+1</b> 미룹니다.`, //need to fix, need more info

        'research-f4-name': "감소된 핵 온도 소프트캡",
        'research-f4-desc': `${toTextStyle('핵','core')} 온도의 소프트 캡이 약해집니다.`,

        'research-f5-name': "비브라늄 부스트",
        'research-f5-desc': `<b>비브라늄</b>이 채광 대미지를 감소된 상태로 강화합니다.`,

        'research-f6-name': "우주적 채광 티어",
        'research-f6-desc': `첫 9 종류의 광석들이 채광 티어에 의해 획득량이 증가됩니다.`,

        'research-f7-name': "더 나은 상어 ELO",
        'research-f7-desc': `상어 인간에서의 ${toTextStyle("상어",'shark')} ELO의 베이스 공식이 <b>x</b> 에서 <b>2<sup>x</sup>-1</b>으로 개선됩니다.`,

        'research-f8-name': "약해진 광석 체력",
        'research-f8-desc': `채광 티어의 첫 번재 효과가 감소됩니다.`,

        // Exploration / 탐험들

        'explore-while': `탐험 중 받는 효과`,
        'explore-inside': (a,b,c)=>`베이스 ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>${format(c,0)} ${toTextStyle("Fish",'fish')}에 도달하세요.`,
        'explore-outside': x=>`현재 베이스는 ${x.format()}/s 입니다.<br>바다를 탐험하세요!`,

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
        'explore-1-desc': `${toTextStyle("환생",'prestige')} 파편과 ${toTextStyle("환생",'prestige')} 업그레이드가 초기화 됩니다. ${toTextStyle('환생','prestige')} 파편 획득량이 제곱근이 됩니다.`,
        'explore-1-milestone': [
            `${toTextStyle('상어','shark')} ${toTextStyle('환생','prestige')} 업그레이드 자동화를 해금합니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `${toTextStyle('상어','shark')} ${toTextStyle('환생','prestige')} 업그레이드가 ${toTextStyle('환생','prestige')} 파편을 소모하지 않습니다.`,
            `${toTextStyle('환생','prestige')}시 얻는  ${toTextStyle('환생','prestige')} 파편의 100%를 자동으로 획득합니다.`,
        ],

        'explore-2-name': `대서양`,
        'explore-2-desc': `${toTextStyle("환생",'prestige')} 파편과 ${toTextStyle("환생",'prestige')} 업그레이드가 초기화 됩니다. ${toTextStyle('상어','shark')} 레벨 스케일링이 10배 강해집니다.` ,
        'explore-2-milestone': [
            `'상어 이빨 강화'와 '상어 지수 강화' 가격 증가량이 조금 약해집니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `첫 번째 ${toTextStyle('상어','shark')} 레벨의 가격 증가가 깊이 500m마다 +1 늦게 시작합니다.`,
            `${toTextStyle("소금",'salt')}의 효과가 50% 강해집니다.`,
        ],

        'explore-3-name': `남극해`,
        'explore-3-desc': `${toTextStyle("환생",'prestige')} 파편과 ${toTextStyle("환생",'prestige')} 업그레이드가 초기화 됩니다. You cannot buy ${toTextStyle('Shark','shark')} ${toTextStyle('Fish','fish')} & ${toTextStyle('Prestige','prestige')} upgrades.`,
        'explore-3-milestone': [
            `탐험의 베이스가 10배 증가합니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `${toTextStyle('압축된 눈','snow')}의 효과가 50% 강해집니다.`,
        ],

        'explore-4-name': `인도양`,
        'explore-4-desc': `You are trapped in the first four active oceans, and your ${toTextStyle('Fish','fish')} exponent is raised to the 0.75th power.`,
        'explore-4-milestone': [
            `방사능 한계치가 /1000으로 나눠집니다.`,
            `자원과 깊이 진행률이 ${toTextStyle('상어','shark')} 레벨의 제곱근 마다 25% 복리로 증가합니다.`,
            `핵 원자로의 가격 증가가 +5 늦게 시작합니다.`,
            `${toTextStyle('켈프','kelp')}의 효과를 개선합니다.`,
        ],

        // Core Reactor / 핵 원자로

        'core-0-name': `철`,
        'core-0-desc': `${toTextStyle("물고기",'fish')} 섭취량이 <b>철</b>의 티어에 기반해 증가합니다.`,

        'core-1-name': `니켈`,
        'core-1-desc': `${toTextStyle("Prestige",'prestige')} 파편의 획득량이 <b>니켈</b>의 티어에 기반해 증가합니다.`,

        'core-2-name': `산소`,
        'core-2-desc': `첫 4 바다 자원의 생산량이 <b>산소</b>의 티어에 기반해 증가합니다.`,

        'core-3-name': `네온`,
        'core-3-desc': `${toTextStyle("Shark",'shark')} Level reduces its requirement based on <b>Neon</b>'s tier.`,

        'core-4-name': `황`,
        'core-4-desc': `${toTextStyle("Fish",'fish')} strengthens <b>Iron</b> based on <b>Sulfur</b>'s tier.`,

        'core-5-name': `실리콘`,
        'core-5-desc': `${toTextStyle("Prestige",'prestige')} shard strengthen <b>Nickel</b> based on <b>Silicon</b>'s tier.`,

        'core-6-name': `질소`,
        'core-6-desc': `${toTextStyle("Kelp",'kelp')} strengthens <b>Oxygen</b> based on <b>Nitrogen</b>'s tier.`,

        'core-7-name': `헬륨`,
        'core-7-desc': `${toTextStyle("Shark",'shark')} Level strengthens <b>Neon</b> based on <b>Helium</b>'s tier.`,

        'core-bonus': x => `Product of core reactors will boost ${toTextStyle("Fish",'fish')} by <h4>${formatMult(x)}</h4>.`,

        'core-assembler-erase': `Erase Mode`,
        'core-assembler-choose': `You're choosing`,
        'core-assembler-building-stats': (s,p,m) => `Strength <b>${s}</b> | Placed <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Max buildings: ${mm} / ${m}<br>Require: ${format(x)} ${toTextStyle("Magmatic",'core')} fragments`, 
        'ca-building-base': b => `[Base: ${b}]`,
        'ca-building-temp': t => `Increase the core's temperature by ${t}.`,

        // Core Radiation / 핵 방사능

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

        // Evolution Tree  진화 트리

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

        // Cultivation / 채광

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

        // Forge / 용광로

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

        // Particle Accelerator / 입자 가속시

        'particle-accel-condense': x => `Condense over ${x} to:`,
        'particle-accel-boost': [
            x => `Increase the ${toTextStyle('Radiation '+icon("radioactive"),'core')} production by <b>${x}</b>.`,
            x => `Increase every ocean's depth progression by <b>${x}</b>.`,
            x => `Increase <b>Stone</b> amount and mining damage by <b>${x}</b>.`,
            x => `Gain <b>${x}</b> more ${toTextStyle('Humanoid','humanoid')} Sharks.`,
            x => `Delay the first scaling of the core reactors by <b>${x}</b>.`,
            x => `Increase the exponent of ${toTextStyle("Shark",'shark')} ELO by <b>${x}</b>.`,
        ],

        // Automation / 자동화

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

        // Progress / 진행

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

        // Reset / 환생

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
        
        // Other / 기타

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
