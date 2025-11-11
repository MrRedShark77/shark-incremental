// This is Japanese!

LANGUAGES.JA = {
    name: "Japanese",
    inter_name: "日本語",
    icon: "lang-ja",

    text: {
        // Currencies

        'fish-name': '魚',
        'fish-costName': toTextStyle('魚', 'fish'),

        'prestige-name': '転生の破片',
        'prestige-costName': toTextStyle('転生', 'prestige') + 'の破片',

        'coral-name': 'サンゴ',
        'coral-costName': toTextStyle('サンゴ', 'coral'),

        'ice-name': '氷',
        'ice-costName': toTextStyle('氷', 'ice'),

        'salt-name': '塩',
        'salt-costName': toTextStyle('塩', 'salt'),

        'snow-name': '圧縮された雪',
        'snow-costName': toTextStyle('圧縮された雪', 'snow'),

        'kelp-name': '昆布',
        'kelp-costName': toTextStyle('昆布', 'kelp'),

        'core-name': 'マグマの欠片',
        'core-costName': toTextStyle('マグマ', 'core') + 'の欠片',

        'humanoid-name': '人型のサメ',
        'humanoid-costName': toTextStyle('人型', 'humanoid') + 'のサメ',

        'remnants-name': '残骸',
        'remnants-costName': toTextStyle('残骸', 'black-hole'),

        'dark-matter-name': '暗黒物質',
        'dark-matter-costName': toTextStyle('暗黒物質', 'black-hole'),

        'observ-name': '観測記録',
        'observ-costName': toTextStyle('観測記録', 'observ'),

        'reserv-name': '蓄積データ',
        'reserv-costName': toTextStyle('蓄積データ', 'reserv'),

        'traject-name': '軌道',
        'traject-costName': toTextStyle('軌道', 'traject'),

        'hadron-name': '基本粒子',
        'hadron-costName': toTextStyle('基本粒子', 'hadron'),

        'full-shark-level': toTextStyle('サメ', 'shark') + 'のレベル',
        'full-shark-rank': toTextStyle('サメ', 'shark') + 'のランク',

        'sharkoid-faith': toTextStyle('サメの信仰', 'humanoid'),

        'curr-top-0-req': x => `合計<b>${format(x)}</b>匹の${toTextStyle('魚', 'fish')}に到達`,
        'curr-top-0-reset': x => `<b>${x.format(0)}</b>個の${toTextStyle('転生', 'prestige')}の破片を獲得`,

        'curr-top-1-req': x => `合計<b>${format(x)}</b>個の${toTextStyle('転生', 'prestige')}の欠片に到達`,
        'curr-top-1-reset': x => `<b>${x.format(0)}</b>個の${toTextStyle('マグマ', 'core')}の欠片を獲得`,

        'curr-top-2-req': x => `<b>${format(x)}</b>匹の${toTextStyle('魚', 'fish')}に到達`,
        'curr-top-2-reset': (x, next) => `<b>${format(x, 0)}</b>体の${toTextStyle('人型', 'humanoid')}のサメを獲得<br>(次: <b>${format(next)}</b> ${toTextStyle('魚', 'fish')})`,

        'curr-top-3-req': x => `<b>${format(x)}</b>${toTextStyle('魚', 'fish')} & <b>8</b>${toTextStyle('ブラックホール', 'black-hole')}に到達して犠牲を実行`,
        'curr-top-3-reset': x => `<b>${format(x, 0)}</b>個の${toTextStyle('暗黒物質', 'black-hole')}を獲得`,

        'curr-top-4-req': x => `<b>${format(x)}</b>${toTextStyle('観測記録', 'observ')}に到達`,
        'curr-top-4-reset': x => `<b>${format(x, 0)}</b>個の${toTextStyle('蓄積データ', 'reserv')}を獲得`,

        'curr-top-5-req': x => `<b>${format(x)}</b>${toTextStyle('蓄積データ', 'reserv')}に到達`,
        'curr-top-5-reset': x => `<b>${format(x, 0)}</b>個の${toTextStyle('軌道', 'traject')}を獲得`,

        'curr-top-6-req': x => `<b>${format(x)}</b>${toTextStyle('魚', 'fish')}に到達`,
        'curr-top-6-reset': (x, next) => `<b>${format(x, 0)}</b>個の${toTextStyle('基本粒子', 'hadron')}を獲得<br>(次: <b>${format(next)}</b> ${toTextStyle('魚', 'fish')})`,

        'radioactive-name': toTextStyle('放射線' + icon('radioactive'), 'core'),

        // Tabs

        'tab-shark': toTextStyle('サメ', 'shark'),
        'tab-options': '設定',
        'tab-scalings': 'スケーリング',
        'tab-auto': '自動化',
        'tab-research': toTextStyle('研究', 'prestige'),
        'tab-explore': '探索',
        'tab-space-base': toTextStyle('宇宙基地', 'observ'),

        'tab-core': toTextStyle('核', 'core'),
        'tab-core-reactor': toTextStyle('核', 'core') + '融合炉',
        'tab-core-radiation': toTextStyle('核', 'core') + '放射線',
        'tab-core-assembler': toTextStyle('核', 'core') + 'アセンブラ',

        'tab-evolution': toTextStyle('進化', 'humanoid'),
        'tab-shark-rank': toTextStyle('サメ', 'shark') + 'のランク',
        'tab-evolution-tree': toTextStyle('進化', 'humanoid') + 'ツリー',
        'tab-evolution-goal': toTextStyle('進化', 'humanoid') + 'の目標',
        'tab-cultivation': '採掘',
        'tab-forge': '鍛冶',
        'tab-particle-accel': '粒子加速器',

        'tab-singularity': toTextStyle('特異点', 'black-hole'),
        'tab-black-hole': toTextStyle('ブラックホール', 'black-hole'),
        'tab-singularity-milestones': toTextStyle('特異点', 'black-hole') + 'マイルストーン',
        'tab-solar-system': '太陽系',
        'tab-constellation': toTextStyle('星座', 'star'),

        'tab-hadron': toTextStyle('ハドロン化', 'hadron'),
        'tab-hadron-su': 'スターターアップグレード',
        'tab-shark-tier': toTextStyle('サメ', 'shark') + 'ティア',
        'tab-nucleobase': '核酸塩基',
        'tab-gal-explore': '銀河探索',
        'tab-dna': "DNA",

        'tab-shark-upgs': toTextStyle('サメ','shark') + "アップグレード",

        // Elements

        'fish-div': `あなたの${toTextStyle('サメ', 'shark')}は<h2>${toTextStyle('0', 'fish', 'fish-amount')}</h2> <span id="fish-gain"></span>匹の魚を食べました`,
        'shark-stats': `${toTextStyle('サメ', 'shark')}の統計<br>レベル: <h4 id="shark-level">???</h4><br>ランク: <h4 id="shark-tier">???</h4> <span id="shark-next-rank"></span>`,

        'shark-elo-div': `あなたの${toTextStyle('サメ', 'shark')}ELOは<h3>${toTextStyle('0', 'humanoid', 'shark-elo')}</h3>。`,
        'shark-rank-div': `あなたの${toTextStyle('サメ', 'shark')}ランクは<h3 id="shark-rank">0</h3>。`,
        'shark-rank-req-div': `次のランクは${toTextStyle('サメ', 'shark')}ELOが<h4>${toTextStyle('0', 'humanoid', 'shark-rank-req')}</h4>必要です。.`,
        'shark-rank-note': `注意: 進化リセット時にサメランクはリセットされます。`,

        'shark-iq-div': `あなたの${toTextStyle('サメ', 'shark')}IQは<h3>${toTextStyle('0', 'hadron', 'shark-iq')}</h3>です。`,
        'shark-tier-div': `あなたの${toTextStyle('サメ', 'shark')}ティアは<h3 id="shark-tier2">0</h3>です。`,
        'shark-tier-req-div': `次のティアに到達するには${toTextStyle('サメ', 'shark')}IQが<h4>${toTextStyle('0', 'hadron', 'shark-tier-req')}</h4>必要です。`,
        'shark-tier-note': `注意: サメティアはハドロン化時にリセットされます。`,

        'option-title-1': 'メイン設定',
        'option-title-2': '表記法',
        'option-title-3': '確認',
        'option-title-4': '言語',

        'offline-speed': 'オフライン時間を高速化',
        'offline-done': '完了',

        'radioactive-div': `${toTextStyle('核', 'core')}は<h3>${toTextStyle('0 / 1,000 ' + icon('radioactive'), 'core', 'radioactive-amount')}</h3> <span id="radioactive-gain"></span>生産しました。`,
        get 'radioactive-summary'() {
            var c = toTextStyle('核', 'core'), rf = toTextStyle('魚 ' + icon('radioactive'), 'fish');
            return `
            <summary>${c}放射線実験の仕組み</summary>
            核放射線実験を開始すると${toTextStyle('核', 'core')}リセットを行います。<br>
            実験中は核融合炉が停止します。${toTextStyle('魚', 'fish')}、${toTextStyle('転生', 'prestige')}の破片、4つの海洋の資源の獲得量は立方根されます。<br>
            実験中は${toTextStyle('サメ', 'shark')}に${rf}を食べさせるのを強制させます。<br>
            放射性の${rf}を使ってアップグレードすることで、追加のブーストを提供する、より多くの${toTextStyle('放射性 ' + icon('radioactive'), 'core')}を生産します。
            `;
        },
        'radioboost-div': `<h3 id="radioactive-boost">0</h3>つの放射性ブーストを持っています。`,

        'core-temp-div': `${toTextStyle('核', 'core')}の温度は<h3>${toTextStyle('6,150', 'core', 'core-temperature')}</h3>です。放射性ブーストを<h4 id="core-temp-effect">100%</h4>強化しています。`,
        'core-temp-after-div': `(${toTextStyle('核', 'core')}の温度はリセット後に<span id="core-temp-after">???</span>になります。)`,

        'sharkoid-faith-div': `<h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3>個の${toTextStyle('サメの信仰', 'humanoid')}を持っています。`,
        'respec-evolution-tree': `${toTextStyle('進化', 'humanoid')}ツリーを再構築`,
        'respec-evolution-tree-2': `強化された${toTextStyle('進化', 'humanoid')}ツリーのみ再構築`,
        'export-evolution-tree': `${toTextStyle('進化', 'humanoid')}ツリーを<br>エクスポート`,
        'import-evolution-tree': `${toTextStyle('進化', 'humanoid')}ツリーを<br>インポート`,
        'evolution-tree-preset': `${toTextStyle('進化', 'humanoid')}ツリーのプリセット`,

        'rerun-evolution': `${toTextStyle('進化', 'humanoid')}を再走し、ツリーを再構築`,

        'mining-text': `採掘中... <b id="mining-progress">???</b> | 攻撃力 <b id="mining-damage">???</b> | ${toTextStyle(`採掘幸運 <span id="mining-fortune">0</span>` + icon('luck'), 'gold')}`,
        'super-mining-text': `超攻撃力<b id="super-mining-damage">???</b> | ${toColoredText(`超採掘幸運 <span id="super-mining-fortune">0</span>` + icon('luck'), 'orange')}`,
        'mining-tier-div': `採掘ティア: <h3 id="mining-tier">0</h3>`,
        'mining-ascend-div': `採掘アセンション: <h3 id="mining-ascend">0</h3>`,
        'mining-note': `注意: 体力が高すぎて採掘が進まないように感じたら、ページを再読み込みしてみてください。`,
        'mining-tier-undo-btn': `採掘ティアを1下げる<br>(進捗が止まった場合に使用)`,
        'mining-ascend-undo-btn': `採掘アセンションを1下げる<br>(進捗が止まった場合に使用)`,

        'black-hole-button': `すべての粒子加速器が最大化されたため、新しい宇宙へ行くためにブラックホールを形成する必要があります。`,
        'black-hole-html': `<h2>${toTextStyle('0', 'black-hole', 'black-hole-amount')}</h2>個のブラックホールを形成しました。魚と転生の破片の獲得指数や、マグマの欠片の獲得倍率を<h3 id="black-hole-effect">^???</h3>します。`,

        'remnant-html': `<h3>${toTextStyle('0', 'black-hole', 'remnant-amount')}</h3> <span id="remnant-gain"></span>個の残骸を獲得しました。`,

        'rocket-part-div': `<h3 id="total-rocket-part">0</h3>個のロケットの部品を作成しました。`,
        'observ-div': `<h3>${toTextStyle('0', 'observ', 'observ-amount')}</h3> <span id="observ-gain"></span>観測記録があります。(合計 <h3>${toTextStyle('0', 'observ', 'observ-total')}</h3>)`,
        'reserv-div': `<h3>${toTextStyle('0', 'reserv', 'reserv-amount')}</h3> <span id="reserv-gain"></span>蓄積データがあります。`,
        'traject-div': `<h3>${toTextStyle('0', 'traject', 'traject-amount')}</h3> <span id="traject-gain"></span>軌道があります。`,
        'experiment-div': `${toTextStyle('実験', 'experiment')}ティアは<h3 id="experiment-tier">0</h3>です。`,

        'bh-tier-div': `ブラックホールティアは<h3>${toTextStyle('0', 'black-hole', 'bh-tier')}</h3>です。`,
        'bh-tier-button': `要求量に到達し、${toTextStyle('ブラックホール', 'black-hole')}ティアを上昇させ、強力なブーストを得よう。`,

        'fundamental-amount-div': `合計<h3>${toTextStyle('0', 'hadron', 'total-fundamental')}</h3>個の基本粒子を持っていて、${toTextStyle('魚', 'fish')}の上限を<h3 id="fundamental-effect">???</h3>に増加させています。`,
        'starter-upg-note': `注意: アップグレードを購入する度に価格が<b>2倍</b>になります。1番目のアップグレードを初回リセット後に買うことを<b>強く</b>お勧めします。`,

        "dna-descirption": `${toTextStyle('サメ','shark')}の<b>DNA(cデオキシリボ核酸)</b>の長さは <h3 id="dna-length">???</h3>(<span id="dna-length-gain">???</span>) ナノメートルです。<br>
        ${toTextStyle('魚','fish')}のテトレーションを<h4 id="dna-boost1">???</h4>増加させ、4つの核酸塩基を <h4 id="dna-boost2">???</h4> 強化します。`,
        "dna-button": `${toTextStyle('ハドロン化','hadron')}リセットをして、DNAを引き伸ばす。`,
        'dna-note': `注意: DNAを引き伸ばすと${toTextStyle('ハドロン化','hadron')}が行うリセットに加え、 ${toTextStyle('基本粒子','hadron')}と核酸塩基をリセットします。`,

        'shark-worth': bool => bool ? `${toColoredText('あらゆるもの全て','red')}を吸収し、<br>${toTextStyle('サメ','shark')}を<h3>${toTextStyle('全能','omni')}</h3>にする...` : `今は${toTextStyle('サメ','shark')}に価値はないよ<br>ごめんね...`,
        
        'research-all-btn': "購入可能なすべての研究を購入する。",

        // Upgrades

        'su-s1-req': 'レベル3',
        'su-s1-name': 'サメのパワー',
        'su-s1-desc': `${toTextStyle('魚', 'fish')}を食べる量を<b>+1</b>。`,

        'su-s2-req': 'レベル7',
        'su-s2-name': 'サメの素早さ',
        'su-s2-desc': `${toTextStyle('サメ', 'shark')}レベルの${toTextStyle('魚', 'fish')}ボーナスのベースを<b>+1</b>。`,

        'su-s3-req': 'レベル15',
        'su-s3-name': 'サメの噛みつき',
        'su-s3-desc': `最初の${toTextStyle('サメ', 'shark')}アップグレードの指数を<b>+50%</b>。`,

        'su-s4-req': 'レベル38',
        'su-s4-name': 'サメの指数',
        'su-s4-desc': `${toTextStyle('魚', 'fish')}の獲得量の指数が<b>+1%</b>増加します。`,

        'su-s5-req': 'レベル640',
        'su-s5-name': '放射性のサメ',
        'su-s5-desc': `${toTextStyle('放射線 ' + icon('radioactive'), 'core')}の生産量を<b>x2</b>。`,

        'su-p1-req': '初回の転生',
        'su-p1-name': '強力なサメのパワー',
        'su-p1-desc': `${toTextStyle('魚', 'fish')}を食べる量を<b>×3</b>。`,

        'su-p2-req': '初回の転生',
        'su-p2-name': '転生ブースター',
        'su-p2-desc': `${toTextStyle('魚', 'fish')}を食べる量を<b>×lg(${toTextStyle('魚', 'fish')})</b>。`,

        'su-p3-name': 'サメの拡張',
        'su-p3-desc': `${toTextStyle('サメ', 'shark')}レベルのスケーリングを<b>+1</b>遅らせます。`,

        'su-m1-name': '採掘攻撃力',
        'su-m1-desc': `採掘の攻撃力を<b>×2</b>します。`,

        'su-m2-name': '採掘速度',
        'su-m2-desc': `採掘速度を<b>+10%</b>増加させます。`,

        'su-m3-req': '採掘ティア3',
        'su-m3-name': '石の圧縮',
        'su-m3-desc': `<b>石</b>の採掘量を<b>×2</b>します。`,

        'su-m4-req': '採掘ティア6',
        'su-m4-name': '採掘幸運',
        'su-m4-desc': `${toTextStyle('採掘幸運 ' + icon('luck'), 'gold')}を<b>+5</b>します。`,

        'su-m5-req': '採掘ティア9',
        'su-m5-name': '基礎鉱石',
        'su-m5-desc': `最初の4つの鉱石の採掘量を<b>×2</b>します。`,

        'su-m6-req': '採掘アセンション1',
        'su-m6-name': '超採掘ダメージ',
        'su-m6-desc': `超採掘ダメージをレベルごとに<b>×2</b>増加させます。`,

        'su-m7-req': '採掘アセンション3',
        'su-m7-name': '超採掘速度',
        'su-m7-desc': `採掘と超採掘の速度を<b>+25%</b>します。`,

        'su-m8-req': '採掘アセンション6',
        'su-m8-name': '圧縮ラジウム',
        'su-m8-desc': `<b>ラジウム-223</b>の採掘量を<b>×2</b>します。`,

        'su-m9-req': '採掘アセンション12',
        'su-m9-name': '超採掘幸運',
        'su-m9-desc': `${toColoredText('超採掘幸運 ' + icon('luck'), 'orange')}を<b>+5</b>増加させます。`,

        // Researches

        'research-p1-name': '転生の素早さ',
        'research-p1-desc': `'サメの素早さ'は${toTextStyle('サメ', 'shark')}レベルの${toTextStyle('転生', 'prestige')}の破片ボーナスに低効率で影響します。`,
        // ELはeverlastingの略
        'research-p2-name': '無料のサメアップグレード',
        'research-p2-desc': `${toTextStyle('サメ', 'shark')}のアップグレードで${toTextStyle('魚', 'fish')}を消費しません。`,

        'research-p3-name': '強化されたサメレベル',
        'research-p3-desc': `${toTextStyle('サメ', 'shark')}レベルの要求量のベースを<b>1</b>減らします。
        強制的に${toTextStyle('転生', 'prestige')}リセットを行い, ${toTextStyle('転生', 'prestige')}の破片や${toTextStyle('転生', 'prestige')}アップグレードをリセットします。
        新しい${toTextStyle('サメ', 'shark')}のアップグレードを解放します。`,

        'research-p4-name': '有意義な転生',
        'research-p4-desc': `${toTextStyle('転生', 'prestige')}の破片の獲得量の計算式が改善されます。`,

        'research-p5-name': '膨大なパワー',
        'research-p5-desc': `${toTextStyle('サメ', 'shark')}レベルに応じて'強力なサメのパワー'を<b>1%</b>増加します。`,

        'research-p6-name': '強大なサメの拡張',
        'research-p6-desc': `'サメの拡張'は<b>2倍</b>強化されます。`,

        'research-p7-name': '資源の改良 I',
        'research-p7-desc': `${toTextStyle('サンゴ', 'coral')}と${toTextStyle('氷', 'ice')}の効果を強化します。`,

        'research-p8-name': 'もっと強化されたサメレベル',
        'research-p8-desc': `${toTextStyle('サメ', 'shark')}レベルの要求量のベースを<b>1</b>減らします。`,

        'research-p9-name': '格安転生ブースター',
        'research-p9-desc': `'転生ブースター'の拡張スケーリングを<b>-0.05</b>する。`,

        'research-e1-name': '海の共鳴 I',
        'research-e1-desc': `${toTextStyle('塩', 'salt')}は${toTextStyle('サンゴ', 'coral')}の生産量をブーストします。`,

        'research-e2-name': '海の共鳴 II',
        'research-e2-desc': `${toTextStyle('圧縮された雪', 'snow')}は${toTextStyle('氷', 'ice')}の生産量をブーストします。`,

        'research-e3-name': '自動探索',
        'research-e3-desc': `探索せずとも<b>X</b>個の海洋のベースを自動で獲得します。`,

        'research-e4-name': '昆布の酸化',
        'research-e4-desc': `<b>酸素</b>は${toTextStyle('昆布', 'kelp')}の生産量に影響を与えます。`,

        'research-e5-name': '自動探索マーク2',
        'research-e5-desc': `探索せずともインド洋のベースを自動で獲得します。${toTextStyle('昆布', 'kelp')}の効果をブーストします。`,

        'research-e6-name': 'スンダ海溝',
        'research-e6-desc': `<b>インド洋</b>の水深は上限がなくなり、その効果が強化されます。`,

        'research-c1-name': '研究キーパー',
        'research-c1-desc': `${toTextStyle('研究', 'prestige')}を${toTextStyle('核', 'core')}リセットで保持します。`,

        'research-c2-name': '探索キーパー',
        'research-c2-desc': `<b>X</b>個の海洋を${toTextStyle('核', 'core')}リセットで保持します。`,

        'research-c3-name': 'ネオンの愛情 I',
        'research-c3-desc': `<b>ネオン</b>は'サメの噛みつき'、'サメの指数'、'サメの拡張'に影響します。`,

        'research-c4-name': 'ニッケルの改良',
        'research-c4-desc': `<b>ニッケル</b>の効果は<b>2倍</b>になります。`,

        'research-c5-name': '追加の核ブースト',
        'research-c5-desc': `核放射線のボーナス核融合炉は、核融合炉の${toTextStyle('魚', 'fish')}へのブーストに影響を与えます。`,

        'research-c6-name': '放射線軽減',
        'research-c6-desc': `${toTextStyle('マグマ', 'core')}の破片は放射線の最大値を減少させます。`,

        'research-c7-name': '鋭いサメの歯',
        'research-c7-desc': `'サメの歯'の効果が<b>2.5乗</b>されます。`,

        'research-c8-name': '鉄とネオンの品質強化',
        'research-c8-desc': `<b>鉄</b>の効果は2倍になります。また、<b>鉄</b>と<b>ネオン</b>の要求量も大きく減ります。`,

        'research-c9-name': '強力な核ブースト',
        'research-c9-desc': `${toTextStyle('魚', 'fish')}への核融合炉のブーストを強化します。`,

        'research-c10-name': 'サメの大膨張',
        'research-c10-desc': `'サメの拡張'は2番目の${toTextStyle('サメ', 'shark')}レベルのスケーリングを遅らせます。`,

        'research-c11-name': '強力な放射線軽減',
        'research-c11-desc': `'放射線軽減'の効果を強化します。`,

        'research-c12-name': '膨大な放射線軽減',
        'research-c12-desc': `放射線の上限を大きく減少させます。`,

        'research-c13-name': '超放射性サメ',
        'research-c13-desc': `'放射性のサメ'は<b>50%</b>強化されます。`,

        'research-c14-name': '指数的な核ブースト',
        'research-c14-desc': `核融合炉は、${toTextStyle('魚', 'fish')}への指数的なブーストを与えます。`,

        'research-c15-name': '自己放射',
        'research-c15-desc': `放射線アップグレードを${toTextStyle('魚' + icon('radioactive'), 'fish')}の代わりに通常の${toTextStyle('魚', 'fish')}で購入できるようになります。ただし、レートは<b>^0.0001</b>です。その後、レートはレベルごとに<b>×10</b>増加します。`,

        'research-m1-name': 'マグマの幸運',
        'research-m1-desc': `${toTextStyle('採掘幸運' + icon('luck'), 'gold')}を<b>+5</b>します。`,

        'research-m2-name': 'サメの超膨張',
        'research-m2-desc': `3番目の${toTextStyle('サメ', 'shark')}レベルのスケーリングを<b>+1000</b>遅らせます。`,

        'research-m3-name': '拡張された放射性ブースト',
        'research-m3-desc': `最初の2つの放射性ブーストのスケーリングを<b>+1</b>遅らせます。`,

        'research-m4-name': '採掘ティアの強化',
        'research-m4-desc': `2から5番目の採掘ティアの効果を<b>+25%</b>します。`,

        'research-f1-name': '基礎のランク指数強化',
        'research-f1-desc': `${toTextStyle('サメ', 'shark')}ELOの指数を<b>+25%</b>増加させます。`,

        'research-f2-name': '多くのサメの信仰',
        'research-f2-desc': ` ${toTextStyle('魚', 'fish')}と${toTextStyle('転生', 'prestige')}の破片からより多くの${toTextStyle('サメの信仰', 'humanoid')}を獲得できます。`,

        'research-f3-name': '拡張された核融合炉',
        'research-f3-desc': `核融合炉のスケーリングを<b>+1</b>遅らせます。`,

        'research-f4-name': '核温度のソフトキャップの弱体化',
        'research-f4-desc': `${toTextStyle('核', 'core')}温度のソフトキャップを弱めます。`,

        'research-f5-name': 'ヴィブラニウムブースト',
        'research-f5-desc': `<b>ヴィブラニウム</b>は採掘攻撃力を強化します。`,

        'research-f6-name': '万能な採掘ティア',
        'research-f6-desc': `最初の9つの鉱石の獲得量は採掘ティアによってブーストされます。`,

        'research-f7-name': 'サメELOの強化',
        'research-f7-desc': `${toTextStyle('サメ', 'shark')}ELOの人型のサメの数式が<b>x</b>から<b>2<sup>x</sup>-1</b>に変更されます。`,

        'research-f8-name': '鉱石弱体化',
        'research-f8-desc': `採掘ティアの最初の効果を弱体化します。`,

        'research-s1-name': '魚の残骸',
        'research-s1-desc': `${toTextStyle('魚', 'fish')}は${toTextStyle('残骸', 'black-hole')}の生成量をブーストします。`,

        'research-s2-name': 'ランクブーストの強化',
        'research-s2-desc': `${toTextStyle('サメ', 'shark')}ランクの${toTextStyle('転生', 'prestige')}の破片へのブーストを強化します。`,

        'research-s3-name': '清らかな海',
        'research-s3-desc': `<b>太平洋 & 北極海</b>は指数的なブーストを提供します。また、<b>大西洋 & 南極海</b>を改善します。`,

        'all-research': {
            's4': ['清らかな海 II', `<b>インド洋</b>は指数的なブーストを提供します。`],
            's5': ['清らかな海 III', `<b>N</b>つの海洋の水深の進捗の減少が削除されます。6レベル目では放射性ブーストの10番目の効果が強化されます。`],

            'dm1': ['初期ブラックホール', `犠牲時にレベルに応じて<b>+1</b> ${toTextStyle('ブラックホール', 'black-hole')}を獲得します。これらのブラックホールは生産量の減少に影響しません。`],
            'dm2': ['残骸の強化 I', `${toTextStyle('残骸', 'black-hole')}アップグレード"おかえりなさい"を改善し、${toTextStyle('転生', 'prestige')}の破片に影響するようになります。`],
            'dm3': ['残骸の強化 II', `${toTextStyle('残骸', 'black-hole')}アップグレード"サメを極めし者"を改善します。`],
            'dm4': ['残骸の強化 III', `${toTextStyle('サメ', 'shark')}レベルとランクの${toTextStyle('残骸', 'black-hole')}生産量ブーストを強化します。`],
            'dm5': ['限界のない核温度', `${toTextStyle('核', 'core')}の温度のソフトキャップを削除します。`],
            'dm6': ['放射線生成の強化', `${toTextStyle('放射線' + icon('radioactive'), 'core')}生成量を指数的に増加させます。`],
            'dm7': ['暗黒な残骸', `合計の${toTextStyle('暗黒物質', 'black-hole')}は${toTextStyle('残骸', 'black-hole')}の生産量をブーストします。`],

            'e7': ['スンダ海溝マーク2', `<b>インド洋</b>の水深の進捗が大幅に改善されます。`],

            'm5': ['超採掘へのブースト', `${toTextStyle('サメ', 'shark')}ランクの採掘攻撃力ブーストは超採掘攻撃力にも影響します。`],
            'm6': ['ウランなサメ', `'サメの指数'が超強力になります。`],
            'm7': ['倍々残骸スケーリング', `最初の${toTextStyle('残骸', 'black-hole')}アップグレードのスケーリングを<b>+100</b>遅延させます。`],
            'm8': ['超強力な放射線', `14番目の放射性ブーストの効果を増強します。`],
            'm9': [`放射線のオーバーフロー対策`, `${toTextStyle('放射線' + icon('radioactive'), 'core')}の生産量のソフトキャップをなくします。`],
            'm10': [`自動核融合炉マーク2`, `自動${toTextStyle('核', 'core')}融合炉は3行目の${toTextStyle('核', 'core')}融合炉も購入します。`],
            'm11': [`自動採掘アップグレードマーク2`, `自動採掘アップグレードは残りの採掘アップグレードも購入します。`],

            'o1': [`観測の自動化`, `${toTextStyle('観測記録', 'observ')}アップグレードを自動かつ無料で購入します。<i>この研究はリセットされません。</i>`],
            'o2': [`万能変換器の改善`, `万能変換器”アップグレードは“宇宙”、“宇宙の魚”、“宇宙の転生”アップグレードのベースに影響します。`],
            'o3': [`万能変換器の改善II`, `“万能変換器”アップグレードは“相対的”、“観測可能”、“宇宙の魚II”、“宇宙の転生II”アップグレードのベースに影響します。`],

            'r1': [`蓄積の自動化`, `${toTextStyle('蓄積データ', 'reserv')}アップグレードを自動かつ無料で購入します。<i>この研究はリセットされません。</i>`],
            'r2': [`蓄積の改善`, `${toTextStyle('蓄積データ', 'reserv')}の獲得式を改善します。`],
            'r3': [`蓄積の生成`, `<b>100%</b>の${toTextStyle('蓄積データ', 'reserv')}を獲得します。<i>この研究はリセットされません。</i>`],

            't1': [`軌道の自動化`, `${toTextStyle('軌道', 'traject')}アップグレードを無料かつ自動で購入します。<i>この研究はリセットされません。</i>`],
            't2': [`軌道の改善`, `${toTextStyle('軌道', 'traject')}の獲得式を改善します。`],
            't3': [`軌道の生成`, `<b>100%</b>の${toTextStyle('軌道', 'traject')}を獲得します。<i>この研究はリセットされません。</i>`],

            'h1': [`IQ変換機`, `${toTextStyle('サメ', 'shark')}レベルは${toTextStyle('サメ', 'shark')}${toTextStyle('IQ', 'hadron')}を超対数的に増加させます。`],
            'h2': [`ハドロン鍛治キーパー`, `${toTextStyle('ハドロン化', 'hadron')}時に鍛治アップグレードを保持します。`],
            'h3': [`ブラックホールの拡張`, `合計の${toTextStyle('基本粒子', 'hadron')}は${toTextStyle('ブラックホール', 'black-hole')}ティアのスケーリングを対数的に遅らせます。`],
            'h4': [`魚上限の改善`, `合計の${toTextStyle('基本粒子', 'hadron')}の効果を改善します。`],
            'h5': [`ブラックホール相当`, `自動でリセットせずに${toTextStyle('ブラックホール', 'black-hole')}ティアを上げます。`],
            'h6': [`量子ビットIQ`, `${toTextStyle('魚', 'fish')}は${toTextStyle('魚', 'shark')}${toTextStyle('IQ', 'hadron')}を増加させます。研究<b>h1</b>を改善します。`],
            'h7': [`最初の犠牲スケーリング`, `${toTextStyle('残骸', 'black-hole')}アップグレードの最初のスケーリングをなくします。${toTextStyle('残骸', 'black-hole')}アップグレードを解放します。`],
            'h8': [`強力な魚上限の改善`, `合計の${toTextStyle('基本粒子', 'hadron')}の効果をより改善します。`],
            'h9': [`ハドロン生成`, `<b>100%</b>の${toTextStyle('基本粒子', 'hadron')}を獲得します。`],
            'h10': [`インフレなんてナンセンス`, `すべての放射性ブーストのスケーリングをなくします。`],
            'h11': [`ランクをランクへ`, `最初の3つの${toTextStyle('サメ', 'shark')}ランクのスケーリングをなくします。`],
            'h12': [`星座の強化`, `${toTextStyle('ブラックホール', 'black-hole')}ティアの${toTextStyle('星座', 'star')}の資源へのブーストを改善します。`],
            'h13': [`平等化`, `${toTextStyle("転生",'prestige')}の破片と${toTextStyle('マグマ','core')}の欠片の獲得量を${toTextStyle("魚",'fish')}の獲得量と等しくします。`],
            'h14': [`レベルとランクよ、この残酷な世界からさようなら!`, `${toTextStyle("サメ",'shark')}レベルとランクのスケーリングが無効化されます。`],
            'h15': [`核酸塩基の強化III`, `アデニンの6番目のブーストを強化します。`],
            'h16': [`自動銀河探索`, `6つの銀河のスコアを自動で獲得します。`],
            'h17': [`聖なるDNA`, `${toTextStyle("基本粒子",'hadron')}の総獲得量はDNAを引き伸ばします。`],
            'h18': [`ほとんど魚のＤＮＡ`, `${toTextStyle("魚",'fish')}はDNAを引き伸ばします`],
            'h19': [`強化アデニン`, `アデニンの4番目のブーストを大きく改善します。<i>終わりは近づいている...</i>`],
            'h20': [`強化グアニン`, `グアニンの4番目のブーストは5番目のサメティアのボーナスに影響します。<i>今すぐ止めるんだ...</i>`],
            'h21': [`強化DNA`, `DNAはDNA自身を引き伸ばします... ${toColoredText(`警告: 自己拡張によってサメは不安定となり、魚を食べられなくなると同時に、反物質魚に置き換えられるようになります!元に戻すことはできません!`,'red')} それとも、突き進む?`],

            'ge1': [`銀河探索の愛`, `平方根された${toTextStyle('サメ', 'shark')}ティアの数に応じて、銀河海洋の資源の獲得量を<b>25%</b>増加させます。`],
            'ge2': [`核酸塩基の強化`, `グアニンの5番目のブーストを改善します。`],
            'ge3': [`テトレーションの転生`, `深海のナーフを受けた後、${toTextStyle('生物発光物資', 'gal-explore-1')}の量に応じて${toTextStyle('転生', 'prestige')}の破片の獲得量が増加します。`],
            'ge4': [`超強力な残骸`, `すべての${toTextStyle('残骸', 'black-hole')}アップグレードは<b>+10%指数的に</b>強くなります。`],
            'ge5': [`青い藻の強化`, `${toTextStyle('青い藻', 'gal-explore-0')}の効果を強化します。`],
            'ge6': [`ELOの指数^2`, `${toTextStyle('人型', 'humanoid')}のサメは${toTextStyle('サメ', 'shark')}${toTextStyle('ELO', 'humanoid')}の指数をブーストします。`],
            'ge7': [`強力なスコアブースト`, `銀河海洋の獲得資源ブーストを改善します。`],
            'ge8': [`ティアのスケール`, `${toTextStyle('サメ', 'shark')}ティアのスケールを<b>+5</b>遅らせます。`],
            'ge9': [`銀河アップグレードの強化`, `銀河海洋アップグレードのベースを<b>+1</b>します。`],
            'ge10': [`灰色のプランクトンの強化`, `${toTextStyle('灰色のプランクトン', 'gal-explore-2')}の効果を強化します。`],
            'ge11': [`核酸塩基の強化II`, `シトシンとグアニンの2番目のブーストを改善します。`],
            'ge12': [`役立たずのスケーリング`,`ブラックホールティアの最初の2つのスケーリングを無効化します。`],

            't1': ['全能サメのパワーのスケール', `'全能サメのパワー'のスケールを<b>+15</b>レベル遅らせます。`],
            't2': ['全能サメの素早さの伝染', `'全能サメの素早さ'は'強力な全能サメのパワー'と'全能サメの超越'のベースに10%の割合で影響します。`],
            't3': ['凝縮の強化', `${toTextStyle("凝縮",'transcend')}の破片の獲得数式を改善します。`],
            't4': ['強力な超越凝縮器', `凝縮された${toTextStyle("超越",'transcend')}の破片を強化します。`],

            'u1': ['不死のアップグレードの強化', `'不死の反物質'&'不死の超越'の効果が2乗されます。`],
            'u2': ['不死の収集の強化', `'不死の収集'のコストが減少します。 <i>${toTextStyle('サメの全能','omni')}リセット時にも保持されます。</i>`],
            'u3': ['不死の伝染', `ゲームスピードが${toTextStyle('不死のエッセンス','undead')}の獲得に影響を与えるようになります。`],
            'u4': ['不死の凝縮の強化', `凝縮された${toTextStyle('不死のエッセンス','undead')}による${toTextStyle('不死のエッセンス','undead')}へのブーストを大きく強化します。`],

            'r1': ['研究Rキーパー',`${toTextStyle('研究','prestige')}を${toTextStyle('反応','atom')}リセットで保持します。`],

            'd1': ['研究Rキーパー+',`${toTextStyle('研究','prestige')}を${toTextStyle('ルーン化','rune')}リセットで保持します。`],
            'd2': ['全能サメの指数の強化', `‘全能サメの指数’の効果数式を改善します。`],
            'd3': ['凝縮キーパーI', `${toTextStyle("超越",'transcend')}の破片の凝縮の最高値の指数^2の<b>^0.75</b>を${toTextStyle('ルーン化','rune')}時に保持します。`],
            'd4': ['凝縮キーパーII', `${toTextStyle('不死のエッセンス','undead')}の凝縮の最高値を${toTextStyle('ルーン化','rune')}時に保持します。`],
            'd5': ['ルーンの欠片の改善', `${toTextStyle('ルーン','rune')}の欠片の獲得量を改善します。`],

            'rc1': ['ボーナスルーン', `<b>100%</b>の${toTextStyle('ルーン','rune')}アップグレードのエフェクトごとに隣接した1つの${toTextStyle('ルーン','rune')}分のボーナスを獲得します。`],
            'rc2': ['高速なルーンアップグレード', `最初の3つの${toTextStyle('ルーン','rune')}アップグレードのスケーリングを<b>×2</b>遅らせます。`],
            'rc3': ['弱い警告', `2番目の${toTextStyle('神','god')}の処罰を弱めます。`],
            'rc4': ['ルーンアップグレードの強化', `最初の3つの${toTextStyle('ルーン','rune')}アップグレードを強化します。`],
            'rc5': ['ルーンの連続体', `${toTextStyle('ルーン','rune')}が設置できなくなり、代わりに${toTextStyle('ルーン','rune')}の効果は4番目の${toTextStyle('ルーン','rune')}アップグレードに基づくようになります。${toTextStyle('ルーン','rune')}アップグレードを自動化します。`],
        },

        // Exploration

        'explore-while': `探索中`,
        'explore-inside': (a, b, c) => `資源獲得量<br>${a.format()}/s` + (b.gt(a) ? ' ➜ ' : ' ~ ') + `${b.format()}/s` + `.<br>${format(c, 0)}${toTextStyle('魚', 'fish')}に到達して獲得`,
        'explore-outside': x => `現在の基礎獲得量は<br>${x.format()}/秒<br><br>海洋を探索する！`,

        'explore-next': x => `次の海洋は${toTextStyle('サメ', 'shark')}レベル<h3>${format(x, 0)}</h3>で解放`,

        'explore-doubler-1': x => `${x}の獲得量を倍にする`,
        'explore-doubler-2': `水深の進捗を倍にする`,

        'explore-0-name': `太平洋`,
        'explore-0-desc': `${toTextStyle('魚', 'fish')}の獲得量を2乗根します。`,
        'explore-0-milestone': [
            `${toTextStyle('転生', 'prestige')}の破片の獲得量を1.05乗します。`,
             `平方根された${toTextStyle('サメ', 'shark')}レベルに基づいて、資源や水深の進歩を25%増加します。`,
             `${toTextStyle('サメ', 'shark')}レベルが増加しても${toTextStyle('魚', 'fish')}を消費しません。`,
             `${toTextStyle('魚', 'fish')}の獲得量を1.05乗します。`,
             `${toTextStyle('核', 'core')}を解放します。`
        ],

        'explore-1-name': `北極海`,
        'explore-1-desc': `${toTextStyle('転生', 'prestige')}の破片と${toTextStyle('転生', 'prestige')}アップグレードをリセットします。${toTextStyle('転生', 'prestige')}の破片の獲得量を2乗根します。`,
        'explore-1-milestone': [
            `自動${toTextStyle('転生', 'prestige')}アップグレードを解放します。`,
            `平方根された${toTextStyle('サメ', 'shark')}レベルに基づいて、資源や水深の進歩を25%増加します。`,
            `${toTextStyle('サメ', 'shark')} ${toTextStyle('転生', 'prestige')}アップグレードは${toTextStyle('転生', 'prestige')}の破片を消費しません。`,
            `常時100%の${toTextStyle('転生', 'prestige')}の破片を生成します。`
        ],

        'explore-2-name': `大西洋`,
        'explore-2-desc': `${toTextStyle('転生', 'prestige')}の破片と${toTextStyle('転生', 'prestige')}アップグレードをリセットします。${toTextStyle('サメ', 'shark')}レベルのスケールが10倍大きくなります。`,
        'explore-2-milestone': [
            `'サメの嚙みつき'と'サメの指数'のスケーリングを少し弱くします。`,
            `平方根された${toTextStyle('サメ', 'shark')}レベルに基づいて、資源や水深の進歩を25%増加します。`,
            `水深500mごとに${toTextStyle('サメ', 'shark')}レベルの最初のスケーリングの開始を+1レベル遅らせます。`,
            `${toTextStyle('塩', 'salt')}の効果を50%強化します。`
        ],

        'explore-3-name': `南極海`,
        'explore-3-desc': `${toTextStyle('転生', 'prestige')}の破片と${toTextStyle('転生', 'prestige')}アップグレードをリセットします。${toTextStyle('魚', 'fish')}と${toTextStyle('転生', 'prestige')}アップグレードは購入できません。`,
        'explore-3-milestone': [
            `探索のベースを10倍します。`,
            `平方根された${toTextStyle('サメ', 'shark')}レベルに基づいて、資源や水深の進歩を25%増加します。`,
            `${toTextStyle('圧縮された雪', 'snow')}の効果を50%強化します。`
        ],

        'explore-4-name': `インド洋`,
        'explore-4-desc': `最初の4つの海洋の悪効果に加え、${toTextStyle('魚', 'fish')}の獲得量を0.75乗します。`,
        'explore-4-milestone': [
            `放射性の最大値を/1,000します。`,
            `平方根された${toTextStyle('サメ', 'shark')}レベルに基づいて、資源や水深の進歩を25%増加します。`,
            `核融合炉のスケーリングを+5遅らせます。`,
            `${toTextStyle('昆布', 'kelp')}の効果を強化します。`
        ],

        // Core Reactor

        'core-0-name': `鉄`,
        'core-0-desc': ` <b>鉄</b>のティアに基づいて${toTextStyle('魚', 'fish')}の獲得量を増加させます。`,

        'core-1-name': `ニッケル`,
        'core-1-desc': `<b>ニッケル</b>のティアに基づいて${toTextStyle('転生', 'prestige')}の破片の獲得量を増加させます。`,

        'core-2-name': `酸素`,
        'core-2-desc': `<b>酸素</b>のティアに基づいて4つの海洋の資源の獲得量を増加させます。`,

        'core-3-name': `ネオン`,
        'core-3-desc': `<b>ネオン</b>のティアに基づいて${toTextStyle('サメ', 'shark')}レベルの要求量を減少させます。`,

        'core-4-name': `硫黄`,
        'core-4-desc': `<b>硫黄</b>のティアに基づいて${toTextStyle('魚', 'fish')}が<b>鉄</b>を強化します。`,

        'core-5-name': `シリコン`,
        'core-5-desc': `<b>シリコン</b>のティアに基づいて${toTextStyle('転生', 'prestige')}の破片が<b>ニッケル</b>を強化します。`,

        'core-6-name': `窒素`,
        'core-6-desc': `<b>窒素</b>のティアに基づいて${toTextStyle('昆布', 'kelp')}が<b>酸素</b>を強化します。`,

        'core-7-name': `ヘリウム`,
        'core-7-desc': `<b>ヘリウム</b>のティアに基づいて${toTextStyle('サメ', 'shark')}レベルが<b>ネオン</b>を強化します。`,

        'core-8-name': `マグネシウム`,
        'core-8-desc': `<b>マグネシウム</b>のティアに基づいて${toTextStyle('魚', 'fish')}の獲得量の指数を増加させます。`,

        'core-9-name': `ナトリウム`,
        'core-9-desc': `<b>ナトリウム</b>のティアに基づいて${toTextStyle('転生', 'prestige')}の破片の獲得量の指数を増加させます。`,

        'core-10-name': `リン`,
        'core-10-desc': `<b>リン</b>のティアに基づいて${toTextStyle('マグマ', 'core')}の欠片の獲得量を増加させます。`,

        'core-11-name': `クロミウム`,
        'core-11-desc': `<b>クロミウム</b>のティアに基づいて${toTextStyle('人型', 'humanoid')}のサメは${toTextStyle('サメ', 'shark')}ELOの指数を増加させます。`,

        'core-bonus': x => `核融合炉は${toTextStyle('魚', 'fish')}を<h4>${formatMult(x)}</h4>倍します。`,

        'core-assembler-erase': `削除モード`,
        'core-assembler-choose': `選択中`,
        'core-assembler-building-stats': (s, p, m) => `強さ <b>${s}</b> | 設置数 <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m, x, mm) => `最大設置数: ${mm} / ${m}<br>要求量: ${format(x)} ${toTextStyle('マグマ', 'core')}の欠片`,
        'ca-building-base': b => `[ベース: ${b}]`,
        'ca-building-temp': t => `核の温度を${t}上げます.`,

        // Core Radiation

        'cr-start': x => (x ? '実験を停止' : '実験を開始'),

        'upgrade-cr': (gen, cost) => `
        ${toTextStyle('放射線 ' + icon('radioactive'), 'core')}の生産を強化<br>
        毎秒<b>${format(gen, 0)}</b>生産しています<br>
        コスト: ${format(cost, 0)} ${toTextStyle('魚 ' + icon('radioactive'), 'fish')}`,

        'reset-cr': inc => `${toTextStyle('放射線 ' + icon('radioactive'), 'core')}をリセットし、最大値を<b>${formatMult(inc, 0)}</b>増加させます。また、放射性ブーストを強化し、時には新しい効果を追加します。最大値に到達すればこのリセットを行えます。`,

        'cr-boosts': [
            x => `1行目の核融合炉に<h4>+${format(x)}</h4>個のボーナスを追加します。`,
            x => `${toTextStyle('マグマ', 'core')}の欠片を<h4>${formatMult(x)}</h4>倍します。`,
            x => `最初の4つの${toTextStyle('魚', 'fish')}アップグレードを<h4>${formatPercent(x.sub(1))}</h4>強化します。`,
            x => `2つ目の${toTextStyle('サメ', 'shark')}レベルのスケーリングを<h4>+${format(x)}</h4>遅らせます。`,
            x => `${toTextStyle('サメ', 'shark')}レベルの${toTextStyle('マグマ', 'core')}の欠片ボーナスのベースを<h4>+${format(x, 3)}</h4>します。`,
            x => `${toTextStyle('サメ', 'shark')}レベルの${toTextStyle('魚', 'fish')}ボーナスを<h4>${formatPow(x, 3)}</h4>します。`,
            x => `最初の3つの${toTextStyle('転生', 'prestige')}アップグレードは<h4>${formatPercent(x.sub(1))}</h4>強力になります。`,
            x => `${toTextStyle('サメ', 'shark')}レベルは${toTextStyle('サメ', 'shark')}ELOを<h4>${formatMult(x)}</h4>します。`,
            x => `<b>石</b>の採掘量を<h4>${formatMult(x)}</h4>します。`,
            x => `探索アップグレードに<h4>${formatMult(x, 3)}</h4>ボーナスを与えます。`,
            x => `2行目の核融合炉に<h4>+${format(x)}</h4>個のボーナスを与えます。`,
            x => `${toTextStyle('暗黒物質', 'black-hole')}を<h4>${formatMult(x)}</h4>します。`,
            x => `${toTextStyle('残骸', 'black-hole')}の生成量を<h4>${formatMult(x)}</h4>します。`,
            x => `6番目を除いたこれ以前のボーナスを<h4>${formatPercent(x.sub(1))}</h4>強力にします。`
        ],

        // Evolution Tree

        'evolution-tree-row': (r, a) => `<b>${r}行目</b><br>${a}個購入可能`,
        'evolution-tree-ctn': [
            ['魚体', x => `${toTextStyle('魚', 'fish')}は${toTextStyle('サメ', 'shark')}ELOを<b>${formatMult(x)}</b>倍します。`, x => `${toTextStyle('魚', 'fish')}は${toTextStyle('サメ', 'shark')}ELOを<b>${formatMult(x)}</b>乗します。`],
            ['転生体', x => `${toTextStyle('転生', 'prestige')}の破片は${toTextStyle('サメ', 'shark')}ELOを<b>${formatMult(x)}</b>倍します。`, x => `${toTextStyle('転生', 'prestige')}の破片は${toTextStyle('サメ', 'shark')}ELOを<b>${formatMult(x)}</b>乗します。`],
            ['放射性体', x => `${toTextStyle('マグマ', 'core')}の欠片は${toTextStyle('サメ', 'shark')} ELOを<b>${formatMult(x)}</b>倍します。`, x => `${toTextStyle('マグマ', 'core')}の欠片は${toTextStyle('サメ', 'shark')} ELOを<b>${formatMult(x)}</b>乗します。`],
            ['完全体', x => `${toTextStyle('サメ', 'shark')} ELOを<b>${formatMult(x, 0)}</b>倍します。`, x => `The ${toTextStyle('サメ', 'shark')} ELOを<b>${formatMult(x, 0)}</b>乗します。`],

            ['剛鉄のサメ', x => `<b>鉄</b>のボーナスティアを<b>${format(x, 0)}</b>獲得します。`, x => `<b>鉄</b>を改善します。`],
            ['高価なサメ', x => `<b>ニッケル</b>のボーナスティアを<b>${format(x, 0)}</b>獲得します。`, x => `<b>ニッケル</b>を改善します。`],
            ['口呼吸するサメ', x => `<b>酸素</b>のボーナスティアを<b>${format(x, 0)}</b>獲得します。`, x => `<b>酸素</b>を改善します。`],
            ['光輝いたサメ', x => `<b>ネオン</b>のボーナスティアを<b>${format(x, 0)}</b>獲得します。`, x => `<b>ネオン</b>を改善します。`],

            ['マリアナ海溝', x => `<b>太平洋</b>の水深は最大値を持たなくなり、水深が深くなるほど、効果が強くなります。`, x => `太平洋の水深の進捗を大幅に改善します。`],
            ['リトケ海淵', x => `<b>北極海</b>の水深は最大値を持たなくなり、水深が深くなるほど、効果が強くなります。`, x => `北極海の水深の進捗を大幅に改善します。`],
            ['ミルウォーキー海淵', x => `<b>大西洋</b>の水深は最大値を持たなくなり、水深が深くなるほど、効果が強くなります。`, x => `大西洋の水深の進捗を大幅に改善します。`],
            ['サウスサンドウィッチ海溝', x => `<b>南極海</b>の水深は最大値を持たなくなり、水深が深くなるほど、効果が強くなります。`, x => `南極海の水深の進捗を大幅に改善します。`],

            ['魚インフレーション', x => `${toTextStyle('魚', 'fish')}の獲得量が<b>${format(x)}</b>乗されます。`, x => `${toTextStyle('魚', 'fish')}の獲得量が<b>${format(x)}</b>乗されます。`],
            ['過剰な転生', x => `${toTextStyle('転生', 'prestige')}の破片の獲得量が<b>${format(x)}</b>乗されます。`, x => `${toTextStyle('転生', 'prestige')}の破片の獲得量が<b>${format(x)}</b>乗されます。`],
            ['圧縮された核', x => `${toTextStyle('マグマ', 'core')}の欠片が<b>${format(x)}</b>乗されます。`, x => `${toTextStyle('マグマ', 'core')}の欠片が<b>${format(x)}</b>乗されます。`],
            ['手作りのサメ', x => `${toTextStyle('人型', 'humanoid')}のサメの要求量を<b>${format(x, 0)}</b>減少させます。`, x => `${toTextStyle('人型', 'humanoid')}のサメの獲得量を<b>+${format(x)}</b>乗します。`],

            ['サメの変換', x => `<b>硫黄</b>のボーナスティアを<b>${format(x, 0)}</b>獲得します。`, x => `ティア1以上の<b>硫黄</b>にさらに${formatPow(x)}のボーナスを与えます。`],
            ['装甲サメ', x => `<b>シリコン</b>のボーナスティアを<b>${format(x, 0)}</b>獲得します。`, x => `ティア1以上の<b>シリコン</b>にさらに${formatPow(x)}のボーナスを与えます。`],
            ['太陽サメ', x => `<b>窒素</b>のボーナスティアを<b>${format(x, 0)}</b>獲得します。`, x => `ティア1以上の<b>窒素</b>にさらに${formatPow(x)}のボーナスを与えます。`],
            ['飛翔サメ', x => `<b>ヘリウム</b>のボーナスティアを<b>${format(x, 0)}</b>獲得します。`, x => `ティア1以上の<b>ヘリウム</b>にさらに${formatPow(x)}のボーナスを与えます。`],

            ['強靭な魚体', x => `${toTextStyle('魚', 'fish')}は'魚体'</b>を<b>${formatPow(x)}</b>します。`, x => `${toTextStyle('魚', 'fish')}は<b>'強靭な魚体'</b>と強化された<b>'魚体'</b>を<b>${formatPow(x)}</b>します。`],
            ['再生体', x => `${toTextStyle('転生', 'prestige')}の破片は<b>'転生体'</b>を<b>${formatPow(x)}</b>します。`, x => `${toTextStyle('転生', 'prestige')}の破片は<b>'再生体'</b>と強化された<b>'転生体'</b>を<b>${formatPow(x)}</b>します。`],
            ['超自然体', x => `${toTextStyle('マグマ', 'core')}の欠片は<b>'放射性体'</b>を<b>${formatPow(x)}</b>します。`, x => `${toTextStyle('マグマ', 'core')}の欠片は<b>'超自然体'</b>と強化された<b>'放射性体'</b>を<b>${formatPow(x)}</b>します。`],
            ['不死体', x => `<b>'完全体'</b>の効果が<b>2乗</b>されます。`, x => `<b>'不死体'</b>と強化された<b>'完全体'</b>の効果が<b>2乗</b>されます。`],

            ['海の幸', x => `${toTextStyle('魚', 'fish')}は${toTextStyle('採掘幸運 ' + icon('luck'), 'gold')}を<b>+${format(x)}</b>します。`, x => `${toTextStyle('魚', 'fish')}は${toColoredText('超採掘幸運' + icon('luck'), 'orange')}を<b>+${format(x)}</b>します。`],
            ['地球の幸', x => `<b>石</b>は${toTextStyle('採掘幸運 ' + icon('luck'), 'gold')}を<b>+${format(x)}</b>します。`, x => `<b>ラジウム223</b>は${toColoredText('超採掘幸運' + icon('luck'), 'orange')}を<b>+${format(x)}</b>します。`],
            ['サメの幸', x => `${toTextStyle('人型', 'humanoid')}のサメは${toTextStyle('採掘幸運 ' + icon('luck'), 'gold')}を<b>+${format(x)}</b>します。`, x => `${toTextStyle('人型', 'humanoid')}のサメは${toColoredText('超採掘幸運' + icon('luck'), 'orange')}を<b>+${format(x)}</b>します。`],
            ['小さな幸', x => `${toTextStyle('採掘幸運 ' + icon('luck'), 'gold')}を<b>+${format(x)}</b>します。`, x => `${toColoredText('超採掘幸運' + icon('luck'), 'orange')}を<b>+${format(x)}</b>します。`],

            ['良質な鉄', x => `核アセンブラの<b>鉄</b>施設を強化します。`, x => `<b>硫黄</b>融合炉を強化します。`],
            ['良質なニッケル', x => `核アセンブラの<b>ニッケル</b>の施設を強化します。`, x => `<b>シリコン</b>融合炉を強化します。`],
            ['良質な酸素', x => `核アセンブラの<b>酸素</b>の施設を強化します。`, x => `<b>窒素</b>融合炉を強化します。`],
            ['良質なネオン', x => `核アセンブラの<b>ネオン</b>の施設を強化します。`, x => `<b>ヘリウム</b>融合炉を強化します。`],

            ['皮肉交じりの鉄', x => `<b>鉄</b>融合炉を強化します。`, x => `<b>マグネシウム</b>融合炉を強化します。`],
            ['貯金箱', x => `<b>ニッケル</b>融合炉を強化します。`, x => `<b>ナトリウム</b>融合炉を強化します。`],
            ['オゾン', x => `<b>酸素</b>融合炉を強化します。`, x => `<b>リン</b>融合炉を強化します。`],
            ['偽の放射性廃棄物', x => `<b>ネオン</b>融合炉を強化します。`, x => `<b>クロミウム</b>融合炉を強化します。`],

            ['列の強化1', x => `このアップグレードより上にある1列目のアップグレードは<b>${formatPercent(x - 1)}</b>強くなります。`, x => `強化されたアップグレードを含んだ1列目のアップグレードは<b>${formatPercent(x - 1)}</b>強くなります。`],
            ['列の強化2', x => `このアップグレードより上にある2列目のアップグレードは<b>${formatPercent(x - 1)}</b>強くなります。`, x => `強化されたアップグレードを含んだ2列目のアップグレードは<b>${formatPercent(x - 1)}</b>強くなります。`],
            ['列の強化3', x => `このアップグレードより上にある3列目のアップグレードは<b>${formatPercent(x - 1)}</b>強くなります。`, x => `強化されたアップグレードを含んだ3列目のアップグレードは<b>${formatPercent(x - 1)}</b>強くなります。`],
            ['列の強化4', x => `このアップグレードより上にある4列目のアップグレードは<b>${formatPercent(x - 1)}</b>強くなります。`, x => `強化されたアップグレードを含んだ4列目のアップグレードは<b>${formatPercent(x - 1)}</b>強くなります。`],

            ['魚の鍛造', x => `${toTextStyle('魚', 'fish')}は鍛造速度を<b>${formatMult(x)}</b>します。`, x => `${toTextStyle('魚', 'fish')}は${toTextStyle('星座', 'star')}の資源を<b>${formatMult(x)}</b>します。`],
            ['転生の鍛造', x => `${toTextStyle('転生', 'prestige')}の破片は鍛造速度を<b>${formatMult(x)}</b>します。`, x => `${toTextStyle('転生', 'prestige')}の破片は${toTextStyle('星座', 'star')}の資源を<b>${formatMult(x)}</b>します。`],
            ['マグマの鍛造', x => `${toTextStyle('マグマ', 'core')}の欠片は鍛造速度を<b>${formatMult(x)}</b>します。`, x => `${toTextStyle('マグマ', 'core')}の欠片は${toTextStyle('星座', 'star')}の資源を<b>${formatMult(x)}</b>します。`],
            ['高速鍛造', x => `鍛造速度を<b>${formatMult(x)}</b>します。`, x => `${toTextStyle('星座', 'star')}の資源を<b>${formatMult(x)}</b>します。`],

            ['列の解放1', x => `すべての1列目のアップグレードを購入できるようになります。`, x => `すべての1列目の強化されたアップグレードを購入できるようになります。`],
            ['列の解放2', x => `すべての2列目のアップグレードを購入できるようになります。`, x => `すべての2列目の強化されたアップグレードを購入できるようになります。`],
            ['列の解放3', x => `すべての3列目のアップグレードを購入できるようになります。`, x => `すべての3列目の強化されたアップグレードを購入できるようになります。`],
            ['列の解放4', x => `すべての4列目のアップグレードを購入できるようになります。`, x => `すべての4列目の強化されたアップグレードを購入できるようになります。`]
        ],

        'evolution-goal-status': (x, y) => (x ? '解放済み' : y ? 'ロック済み' : '進行中'),
        'evolution-goal-ctn': [
            [
                x => `<b>${format(x, 0)}</b> ${toTextStyle('マグマ', 'core')}の欠片を初回の${toTextStyle('核', 'core')}リセットで獲得。`,
                `<b>100%</b>の${toTextStyle('マグマ', 'core')}の欠片を生成する。`
            ],　[
                x => `${toTextStyle('核', 'core')}アセンブラで何も購入せずに<b>${format(x, 0)}</b>${toTextStyle('マグマ', 'core')}の欠片を獲得。`,
                `${toTextStyle('核', 'core')}アセンブラを${toTextStyle('進化', 'humanoid')}リセット時に保持する。`
            ], [
                x => `<b>${format(x, 0)}</b>${toTextStyle('マグマ', 'core')}の欠片に獲得。`,
                `${toTextStyle('マグマ', 'core')}の欠片の獲得数式を改善。`
            ], [
                x => `${toTextStyle('昆布', 'kelp')}を生成せずに<b>${format(x, 0)}</b>${toTextStyle('転生', 'prestige')}の破片を獲得。`,
                `最深の海洋の状態から開始。`
            ], [
                x => `海洋で資源を得ずに<b>${format(x, 0)}</b>${toTextStyle('転生', 'prestige')}の破片を獲得。`,
                `${toTextStyle('進化', 'humanoid')}リセット時に研究を保持する。`
            ], [
                x => `<b>${format(x, 0)}</b>${toTextStyle('転生', 'prestige')}の破片を獲得。`,
                `${toTextStyle('転生', 'prestige')}の破片の獲得数式を改善。`
            ], [
                x => `多くとも<b>10個</b>の放射性ブーストで<b>${format(x, 0)}</b>${toTextStyle('魚', 'fish')}を獲得。`,
                `放射性ブーストが${toTextStyle('放射線' + icon('radioactive'), 'core')}アップグレードをリセットしなくなる。また、1つのジェネレーターを保持して開始する。さらに${toTextStyle('放射線' + icon('radioactive'), 'core')}は上限を突破できるようになる。`
            ], [
                x => `放射性ブーストなしで<b>${format(x, 0)}</b>${toTextStyle('魚', 'fish')}を獲得。`,
                `放射性ブーストが何もリセットしなくなる。自動放射性ブーストをアンロック。`
            ], [
                x => `<b>${format(x, 0)}</b>${toTextStyle('魚', 'fish')}を獲得。`,
                `最初の${toTextStyle('サメ', 'shark')}ランクのスケーリングが<b>+5</b>後になる。`
            ]
        ],

        // Cultivation

        'ore-names': {
            'stone': '石',
            'coal': '石炭',
            'iron': '鉄',
            'gold': '金',
            'platinum': 'プラチナ',
            'diamond': 'ダイヤモンド',
            'bismuth': 'ビスマス',
            'obsidian': '黒曜石',
            'vibranium': 'ヴィブラニウム',
            'radium': 'ラジウム223',
            'uranium': 'ウラン235',
            'berkelium': 'バークリウム247',
            'californium': 'カリホルニウム252',
            'oganesson': 'オガネソン294',
            'sharkium': 'サメニウム'
        },

        'mined-resources-text': `採掘した素材`,
        'mining-tier': `採掘ティア`,
        'next-mining-tier': `<b>採掘ティア</b>`,
        'mining-tier-reset': `<b>採掘ティア</b>を増加させます。<br>鉱石の量と体力が増加します。`,
        'mining-tier-ore-unlock': x => `${x}鉱石を解放`,
        'mining-tier-ore-generation': x => `${x}鉱石が採掘できなくなり、採掘速度と幸運に基づいて生成されます。`,

        'mining-ascend': `採掘アセンション`,
        'next-mining-ascend': `<b>採掘アセンション</b>`,
        'mining-ascend-reset': `<b>採掘アセンション</b>を増加させます。<br>特異点リセットを行い、強力なブーストを与えます。`,

        'mining-tier-bonus': [
            x => `鉱石の体力を<b>${formatMult(x)}</b>します。`,
            x => `<b>石</b>と<b>石炭</b>の採掘量を<b>${formatMult(x)}</b>をします。`,
            x => `<b>鉄</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `<b>鉄</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `<b>プラチナ</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `<b>ビスマス</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `<b>ダイヤモンド</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `<b>黒曜石</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `最初の9つの鉱石の採掘量を<b>${formatPow(x)}</b>します。`,
            x => `超鉱石の体力を<b>${formatMult(x)}</b>します。`,
            x => `<b>ラジウム223</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `<b>ウラン235</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `<b>バークリウム247</b>の採掘量を<b>${formatMult(x)}</b>します。`,
            x => `<b>カリホルニウム252</b>の採掘量を<b>${formatMult(x)}</b>します。`
        ],

        // Forge

        'forge': {
            'anvil': ['金床ティア', '鍛治アップグレードを解放します。'],
            'drill': ['ドリルティア', '<b>石</b>の採掘量を増加させます。'],
            'shard': ['破片の精製', `${toTextStyle('転生', 'prestige')}の破片の獲得量を増加させます。`],
            'tree': ['素晴らしい木', `${toTextStyle('進化', 'humanoid')}ツリーの新しい行を解放します。`],
            'adv_research': ['高度な研究', `新しい研究を解放します。`],
            'auto': ['高度な自動化', `新しい自動化を解放します。`],
            'shark': ['遠隔サメレベル', `3番目の${toTextStyle('サメ', 'shark')}レベルのスケーリングを遅らせます。`],
            'refined_shard': ['精製された破片', `${toTextStyle('転生', 'prestige')}の破片の獲得量を増加させます。`],
            'wormhole': ['ワームホール', `新しい粒子加速器を解放します。`],
            'matter': ['物質凝縮器', `${toTextStyle('暗黒物質', 'black-hole')}の生成量を増加させます。`]
        },
        'forge-progress': (x, s) => (x ? `<b>${x}</b>を鍛造中... <b>${s}</b>` : `鍛冶場は空いています。`),
        'forge-speed': x => `鍛造速度: <b>${x}</b>`,
        'forge-button': ['鍛造キャンセル', '鍛造開始', '鍛造するための材料が不足しています'],

        // Particle Accelerator

        'particle-accel-condense': x => `${x}を凝縮する:`,
        'particle-accel-boost': [
            x => `${toTextStyle('放射線' + icon('radioactive'), 'core')}の生産量を<b>${x}</b>します。`,
            x => `すべての海洋の水深の進捗を<b>${x}</b>します。`,
            x => `<b>石</b>の採掘量と採掘攻撃力を<b>${x}</b>します。`,
            x => `${toTextStyle('人型', 'humanoid')}のサメの獲得量を<b>${x}</b>する。`,
            x => `核融合炉の最初のスケーリングを<b>${x}</b>遅らせる。`,
            x => `${toTextStyle('サメ', 'shark')}ELOの指数を<b>${x}</b>する。`
        ],

        // Singularity

        'black-hole-texts': [
            `十分な物質をそろえてブラックホールを形成しよう...<br>しかし、そのブラックホールに閉じ込められている間、あなたは何をする?<br><br>心配はいらない。<br>別の宇宙へ送り込むホワイトホールがあるが、それは少々複雑だ。`,
            `並行宇宙にいる気分はどうですか?<br>って、また新しいブラックホールに閉じ込められるのか。`,
            `ちょっと待って...<br>どうしてそんなに早く${toTextStyle('魚', 'fish')}を集めたのかい?<br>あなたを過酷な状況に追い込むぞ!`,
            `冗談抜きだぞ...`,
            `...`,
            `ブラックホールをするな!`,
            `これは最後の忠告だぞ!`,
            `ああ... そうかい... おまえの勝ちだ。獲得量も戻してやる...`
        ],
        get 'singularity-milestones'() {
            return [
                [`1ブラックホール`, `${toTextStyle('残骸', 'black-hole')}を解放します。${toTextStyle('サメ', 'shark')}レベルは${toTextStyle('残骸', 'black-hole')}の生成量を増やします。`],
                [`2ブラックホール`, `リセット時に自動化が解放された状態を保持しますが、間隔はリセットされます。${toTextStyle('サメ', 'shark')}ランクは${toTextStyle('残骸', 'black-hole')}の生成量を増やします。`],
                [`3ブラックホール`, `リセット時に自動化、採掘以前の機能が解放された状態、10${toTextStyle('人型', 'humanoid')}のサメを保持します。新しい研究を解放します。`],
                [`4ブラックホール`, `${toTextStyle('進化', 'humanoid')}の目標が完了された状態を保持します。粒子加速器が10倍高速になります。探索のベースがリセット時に<b>1/s</b>に減少します。`],
                [`5ブラックホール`, `鉱石の体力の増加が小さくなります。新たな自動化を解放します。`],
                [`6ブラックホール`, `ブラックホールを形成するごとに、${toTextStyle('残骸', 'black-hole')}の生産量を2倍に増加させます。`],
                [`7ブラックホール`, `リセット時に採掘が解放された状態を維持します。`],
                [`8ブラックホール`, `${toTextStyle('ブラックホール', 'black-hole')}を8回形成しているとき、${toTextStyle('ブラックホール', 'black-hole')}による生産の減少が無効化されます。 ブラックホールを形成してもアニメーションが再生されません。新しい機能を解放します。`],

                [`合計1暗黒物質`, `リセット時に${toTextStyle('特異点', 'black-hole')}より前に解放された研究、${toTextStyle('進化', 'humanoid')}ツリー、鍛治を保持します。より多くの研究を解放します。`],
                [`合計10暗黒物質`, `自動で同時に全ての粒子加速器を起動します。`],
                [`合計${format(1e6)}暗黒物質`, `研究<b>s1-s3</b>を犠牲時に保持します。新しい自動化を解放します。残骸アップグレードは残骸を消費しなくなります。`],
                [`合計${format(1e12)}暗黒物質`, `新しい機能を解放します。`],
                [`合計${format(1e100)}暗黒物質`, `常時100%の${toTextStyle('暗黒物質', 'black-hole')}を獲得します。`]
            ];
        },

        'remnant-upgrades': [
            [`ようこそ`, x => `${toTextStyle('サメ', 'shark')}レベルのボーナスを${x}強化します。`],
            [`漂流`, x => `探索のベース倍率が${x}されます。`],
            [`半生`, x => `${toTextStyle('核', 'core')}融合炉が${x}強くなります。`],
            [`時間の節約`, x => `鍛造速度が${x}高速になります。`],

            [`おかえりなさい`, x => `${toTextStyle('魚', 'fish')}は魚を${x}ブーストします。`],
            [`最高級の達人`, x => `${toTextStyle('サメ', 'shark')}ランクのボーナスを${x}強化します。`],
            [`銀河級のレベル`, x => `3つの${toTextStyle('サメ', 'shark')}レベルのスケーリングを${x}遅らせます。`],
            [`サメを極めし者`, x => `${toTextStyle('サメ', 'shark')}ELOを${x}します。`],

            [`終わりのない深海`, x => `海洋の水深の進捗を${x}します。`],
            [`ほかほかないも`, x => `放射性ブーストは${x}強化されます。`],
            [`メガレベル`, x => `4番目の${toTextStyle('サメ', 'shark')}レベルのスケーリングを${x}遅らせます。`],
            [`採掘のエリート`, x => `3番目の採掘ティアのスケーリングを${x}を遅らせます。`],

            [`自己加速器`, x => `${toTextStyle('残骸', 'black-hole')}は残骸を${x}ブーストします。`],
            [`超強力なパワー`, x => `4番目を除いた、最初の12個の${toTextStyle('残骸', 'black-hole')}アップグレードを${x}強化します。`],
            [`効率強化VI`, x => `超採掘攻撃力を${x}します。`],
            [`超自然なサメ`, x => `${toTextStyle('人型', 'humanoid')}のサメの獲得量の指数を${x}します。`],

            [`星`, x => `${toTextStyle('星座', 'star')}の資源の獲得量が${x}されます。`],
            [`成長`, x => `${toTextStyle('星座', 'star')}のベースの指数が${x}されます。`],
            [`古い学校`, x => `${toTextStyle('基本粒子', 'hadron')}は${x}されます。`],
            [`完了`, x => `${toTextStyle('魚', 'fish')}の獲得量の指数は${x}されます。`]
        ],

        'solar-system-list': {
            sun: ['太陽', `太陽は太陽系の中心に位置する恒星です。主に水素とヘリウムによって構成されており、 地球や他の太陽系の惑星の光と熱の供給源です。また、光合成と気候条件をもたらすことで、地球上の生命の存在条件を作り出しています。直径は地球の109倍もの大きさで330000倍の質量を持っています。地球と太陽の距離は1.5億キロメートルであるため、太陽は小さく見えています。`, `次のレイヤーを解放します。${toTextStyle('サメの信仰', 'humanoid')}を2倍します。`],
            mercury: ['水星', `水星は太陽系で最も小さく、最も太陽に近い惑星です。天空で他の惑星より素早く動くことから、古代ローマの神にちなんで名づけられました。水星はクレーターに覆われ、外観が月と似ており、10億年にわたって内部の地質活動がほとんどなかったことを示しています。惑星は大気をほとんど持たず、表面温度は太陽系の他のどの惑星よりも大きく変動します。`, `最初の3つの放射性ブーストが10倍遅れます。${toTextStyle('観測記録', 'observ')}を10倍します。`],
            venus: ['金星',`金星は2番目に太陽から遠く、6番目に大きい惑星です。古代ローマの愛の女神にちなんで名前が付けられました。金星は大気のほとんどが二酸化炭素でできており、96%以上の割合にも及びます。金星の平均温度は735 K (462 °C)であり、太陽系で最も熱い惑星です。金星には天然の衛星がありません。地球の空では、太陽、月に次いで3番目に明るい天体です。`, `100%の${toTextStyle('人型', 'humanoid')}のサメがボーナスとして常時精製されるようになり、自動${toTextStyle('進化', 'humanoid')}が動作しなくなります。${toTextStyle('人型', 'humanoid')}のサメが劇的に改善され、3番目の${toTextStyle('サメ', 'shark')}ランクのスケーリングを2x遅らせます。${toTextStyle('観測記録', 'observ')}の生産量を10倍にします。`],
            earth: ['Earth', `???`, `???`],
            moon: ['月', `太陽系へようこそ!今、あなたは自由に惑星を探索できます。しかし、強力な報酬を得るには深い観測が必要です。特異点リセットを行い、いくつかの研究や進化ツリーをリセットします。(後ほど戻ってきます) ブラックホールによる生産量の減少は^0.5に固定され、探索が行えなくなり、採掘以降の機能は使えなくなります。${toTextStyle('観測記録','observ')}を宇宙基地で生成でき、進捗を速めてくれます。難易度が存在しますが、進捗に影響を与えるのではなく、宇宙基地での機能に影響を与えます。まずは月へと向かいましょう! この星はLunaと呼ばれていますが、衝突以前はThetaと呼ばれていました。`, `採掘アセンションや${toTextStyle('残骸', 'black-hole')}アップグレードを解放します。採掘アセンションは特異点リセットを行い、強力なボーナスや鉱石を提供します。`],
            mars: ['火星', `火星は太陽系で太陽から4番目に遠い惑星です。固体の地面を持ち地球との大きさが近い、地球型惑星の一つで、衝突クレーター、火山、峡谷、砂漠、極冠などの地形の特徴を持ちます。火星には水の浸食に似た地形や長期間の水との接触によって形成される鉱物などが存在します。火星に生命が存在するかの疑問は、数世紀にわたって科学者によって興味を持たれてきました。`, `${toTextStyle('進化', 'humanoid')}ツリーのテラフォーミングを通じて、より強力な効果を購入できるようになりますが、コストは大きいです。新しい自動化を解放します。${toTextStyle('観測記録', 'observ')}の生成量を10倍します。` ],
            jupiter: ['木星', `木星は最も大きく、太陽から5番目に大きい惑星であり、太陽系の他の全ての惑星の総質量より2.47倍多くガスを持つ気体惑星です。木星は古代より知られており、様々な宗教や神話で述べられています。惑星の名前は古代ローマの雷を司る神より名づけられました。木星の大気は嵐、雷、オーロラ、そして17世紀から知られている大きな渦、大赤斑などの数々の気象現象を特徴とします。`, `${toTextStyle('残骸', 'black-hole')}アップグレードを解放します。${toTextStyle('観測記録', 'observ')}の生成量を10倍します。`],
            saturn: ['土星', `土星は6番目に太陽から遠く、太陽系で2番目に大きい惑星です。土星は主に酸素やヘリウムで構成されているため、気体惑星に分類されています。惑星の名前は古代ローマの農業の神にちなんで名づけられました。土星は氷の粒子、重たい物質や塵からなる環をもっています。146もの既知の衛星を持ち、最も大きいものはタイタンと呼ばれています。また、惑星固有の磁場や特徴的な環を持っています。`, `新しい${toTextStyle('核', 'core')}融合炉の行を解放します。<i>これらの融合炉は進化によってリセットされませんが、${toTextStyle('残骸', 'black-hole')}アップグレードの“半生”に影響しません。</i>`],
            uranus: ['天王星', `天王星は太陽から7番目に遠い惑星です。1781年にイギリスの天文学者ウィリアム・ハーシェルによって発見され、ギリシャ神話の天空の神にちなんで名づけられました。天王星は望遠鏡の助けを借りて現代に発見された最初の惑星です。天王星は、太陽系で3番目に直径が大きく、4番目に質量が大きい惑星で、ほとんどが岩や氷と酸素、ヘリウム、メタンを含んだ大気で構成されています。天王星は環と28個の衛星を持っています。また、自転軸が横に傾いているため、太陽の周りを公転するときに北極と南極を交互に太陽に向けています。`, `${toTextStyle('サメ', 'shark')}の過剰繁殖がなくなります。${toTextStyle('サメの信仰', 'humanoid')}が2倍になります。`],
            neptune: ['海王星', `海王星は太陽から最も遠い惑星で、平均45億キロメートルほど離れています。海王星は巨大な惑星の一つで、地球の17倍の質量を持っています。直径の観点からみると、4番目に大きく、地球の3.9倍ほどです。海王星の大気は他の主要な惑星のガス層と類似しており、水素やヘリウムから構成されていて、メタン、水、アンモニア、およびその他の化合物が混入しています。最も寒い惑星の1つで平均気温は-200°C前後です。大気は他のどの惑星よりも強い風を持っています。`, `${toTextStyle('ブラックホール', 'black-hole')}を強化し、よりよい報酬を得るための${toTextStyle('星座', 'star')}を解放します。`],
            pluto: ['冥王星',`冥王星は最も太陽系で知られている準惑星で、太陽系外縁天体であり、太陽を公転する天体で8個の惑星とエリスに次いで10個目に質量の大きい惑星です。岩と氷から構成されており、月の6分の1の質量で3分の1の体積を持っています。冥王星は軌道離心率が大きく、黄道面に対する傾きが大きいです。これにより、太陽に最も近づいたときは29.7a.u.(天文単位)、最も離れたときは49.3a.u.の距離に位置します。`,`より多くの${toTextStyle('残骸', 'black-hole')}アップグレードを解放します。${toTextStyle('星座', 'star')}の資源はリセットされなくなります。`]
        },
        'build-rocket-part': x => `ロケットの部品(RP)を${x}作成する`,
        'total-rp': '合計RP',
        'solar-system-lock-reward': `${toTextStyle('観測', 'observ')}を終わらせることで報酬を見ることができます。`,
        'solar-system-goal': x => `合計${toTextStyle('観測記録', 'observ')}目標: <h4>${x}</h4>`,
        'solar-system-status': x => [`観測を開始`, `観測を放棄`, `観測を完了`][x],
        'observ-progress': x => `合計<b>${x}</b> ${toTextStyle('観測', 'observ')}に到達`,
        'observ-cond': `${toTextStyle('観測', 'observ')}を完了`,

        'space-base-upgrades': {
            'o1': [`宇宙`, x => `${toTextStyle('観測記録', 'observ')}を${x}します。`],
            'o2': [`宇宙の魚`, x => `${toTextStyle('魚', 'fish')}を${x}します。`],
            'o3': [`宇宙の転生`, x => `${toTextStyle('転生の破片', 'prestige')}を${x}します。`],
            'o4': [`宇宙のコア`, x => `${toTextStyle('マグマの欠片', 'core')}を${x}します。`],
            'o5': [`宇宙の放射線`, x => `${toTextStyle('放射線' + icon('radioactive'), 'core')}を${x}します。`],

            'e1': [`魚変換`, x => `${toTextStyle('観測記録', 'observ')}を${x}します。`],
            'e2': [`転生変換`, x => `${toTextStyle('観測記録', 'observ')}を${x}します。`],
            'e3': [`核変換`, x => `${toTextStyle('観測記録', 'observ')}を${x}します。`],
            'e4': [`観測-貯蔵室`, x => `${toTextStyle('蓄積データ', 'reserv')}を${x}します。`],
            'e5': [`万能変換器`, x => `${toTextStyle('観測記録', 'observ')}の変換アップグレードの効果のベースが${x}されます。`],
            'e6': [`軌道蓄積`, x => `${toTextStyle('軌道', 'traject')}を${x}します。`],

            'r1': [`相対的`, x => `${toTextStyle('観測記録', 'observ')}を${x}します。`],
            'r2': [`観測可能`, x => `${toTextStyle('蓄積データ', 'reserv')}を${x}します。`],
            'r3': [`宇宙の魚II`, x => `${toTextStyle('魚', 'fish')}を${x}します。`],
            'r4': [`宇宙の転生II`, x => `${toTextStyle('転生の破片', 'prestige')}を${x}します。`],
            'r5': [`宇宙の放射線II`, x => `${toTextStyle('放射線' + icon('radioactive'), 'core')}を${x}します。`],

            't1': [`輸送`, x => `${toTextStyle('観測記録', 'observ')}を${x}します。`],
            't2': [`蓄積可能`, x => `${toTextStyle('蓄積データ', 'reserv')}を${x}します。`],
            't3': [`観測可能II`, x => `${toTextStyle('軌道', 'traject')}を${x}します。`],
            't4': [`宇宙の魚III`, x => `${toTextStyle('魚', 'fish')}を${x}します。`],
            't5': [`放射線の拡張`, x => `最初の3つの放射線ブーストのスケーリングを${x}遅延させます。`],
            't6': [`輸送II`, x => `"輸送"のベースが${x}増加します。`]
        },

        'experiment-reset': `宇宙基地をすべてリセットします。${toTextStyle('実験', 'experiment')}ティアを上昇させ、強力なブーストを得ます。`,
        'experiment-boosts': [
            x => `${toTextStyle('観測記録', 'observ')}を${x}します。`,
            x => `${toTextStyle('蓄積データ', 'reserv')}を${x}します。`,
            x => `${toTextStyle('軌道', 'traject')}を${x}します。`
        ],

        'constellation-boosts': [
            [`魚の星`, x => `${toTextStyle('魚', 'fish')}の獲得量の指数を${x}します。`, x => `${toTextStyle('観測記録', 'observ')}の生成量を${x}します。`],
            [`転生の星`, x => `${toTextStyle('転生', 'prestige')}の破片の獲得量の指数を${x}します。`, x => `${toTextStyle('蓄積データ', 'reserv')}の生成量を${x}します。`],
            [`欠片の星`, x => `${toTextStyle('マグマ', 'core')}の欠片の獲得量を${x}します。`, x => `${toTextStyle('軌道', 'traject')}の獲得量を${x}します。`],
            [`サメの星`, x => `${toTextStyle('人型の', 'humanoid')}サメの獲得量の指数を${x}します。`, x => `${toTextStyle('実験', 'experiment')}ティアの要求量を${x}します。`],
            [`放射性の星` + icon('radioactive'), x => `${toTextStyle('放射線' + icon('radioactive'), 'core')}の生産量を${x}します。`, x => `効果がありません。`],
            [`ホーキング放射` + icon('radioactive'), x => `${toTextStyle('基本粒子', 'hadron')}の獲得量を${x}します。`, x => `効果がありません。`],
            [`星雲`, x => `最初の6つの${toTextStyle('星座', 'star')}資源が${x}強くなります。`, x => `効果がありません。`],
            [`銀河`, x => `最初の7つの${toTextStyle('星座', 'star')}資源を${x}増加させます。`, x => `効果がありません。`],
            [`銀河団`, x => `${toTextStyle('残骸', 'black-hole')}の獲得量の指数と${toTextStyle('暗黒物質', 'black-hole')}の獲得量の指数を${x}増加させます。`, x => `効果がありません。`],
            [`超銀河団`, x=>`ブラックホールのスケーリングを${x}遅らせます。`, x=>`効果がありません。`],
            [`宇宙`, x=>`${toTextStyle('魚','fish')}の獲得量の指数^2を${x}増加させます。`, x=>`効果がありません。`],
            [`多元宇宙`, x=>`${toTextStyle('魚','fish')}の獲得量のテトレーションを${x}増加させます。`, x=>`効果がありません。`],
        ],

        // Haronize

        'hadron-cutscenes': [
            `今のうちに目を覚ませ。`,
            `ハドロン化をして、聖なる粒子に祈りを捧げよ。`,
            `痛くない、痛くない、そんな大きいリセットじゃないよ。`,
            `Antimatter Dimensions NG+3 からの参照ですか?!?!??!`,
            `ある日は簡単、別の日は難しい。どちらにせよ、そこにたどりつく唯一の方法は...<br>...を始めることです。`
        ],
        'starter-upgrades': [
            [`サメティア`, `${toTextStyle('サメ', 'shark')}ランクに似た、より強力な${toTextStyle('サメ', 'shark')}ティアを解放します。${toTextStyle('サメ', 'shark')}ティアは${toTextStyle('サメ', 'shark')}${toTextStyle('IQ', 'hadron')}によって計算されます。`],
            [`自動太陽系`, `ロケットの部品の要求量に達したときに惑星を完了できるようになり、要求量が増えることもなくなります。`],
            [`無制限の転生アップグレード`, `最初の2つの${toTextStyle('転生', 'prestige')}アップグレードの効果の上限が消えます。ただし、上限以降の効果は制限されます。`],
            [`即席鍛治 & 粒子加速器`, `鍛治はすぐに完了し、粒子加速器は超高速になります。`],
            [`採掘連続体`, `すべての鉱石は採掘しなくても、速度や幸運、解放条件に応じて生成されます。採掘画面は削除されます。`],
            [`遠隔残骸スケーリング`, `最初の${toTextStyle('残骸', 'black-hole')}アップグレードのスケーリングの開始位置を<b>100</b>から<b>1000</b>に送らせます。`],
            [`馬鹿げたリセットはいらない`, `8つの${toTextStyle('ブラックホール', 'black-hole')}とそれ以前の生産の解放を維持します。`],
            [`永遠の木`, `${toTextStyle('進化', 'humanoid')}ツリーは${toTextStyle('サメの信仰', 'humanoid')}を消費しなくなります。${toTextStyle('進化', 'humanoid')}ツリーの自動化を解放します。`]
        ],

        'nucleobases': {
            'cytosine': ['シトシン', [
                x => `${toTextStyle('星座', 'star')}の資源を${x}します。`,
                x => `${toTextStyle('基本粒子', 'hadron')}を${x}します。`,
                x => `${toTextStyle('残骸', 'black-hole')}と${toTextStyle('暗黒物質', 'black-hole')}を${x}します。`,
                x => `${toTextStyle('星座', 'star')}の資源を${x}します。`,
                x => `3行目の${toTextStyle('核', 'core')}融合炉の効果を${x}強くします。`,
                x => `崩壊した放射性ブーストの成長を${x}促進します。`
            ]],
            'guanine': ['グアニン', [
                x => `${toTextStyle('星座', 'star')}のベースの指数を${x}します。`,
                x => `${toTextStyle('基本粒子', 'hadron')}を${x}します。`,
                x => `${toTextStyle('マグマ', 'core')}の欠片と${toTextStyle('放射線 ' + icon('radioactive'), 'core')}の生産量の指数を${x}します。`,
                x => `${toTextStyle('サメ', 'shark')}ティアボーナスを${x}強化します。`,
                x => `10行目の${toTextStyle('進化', 'humanoid')}ツリーを${x}強化します。`,
                x => `${toTextStyle('残骸', 'black-hole')}と${toTextStyle('暗黒物質', 'black-hole')}の獲得量の指数を${x}します。`
            ]],
            'adenine': ['アデニン', [
                x => `${toTextStyle('サメ', 'shark')}${toTextStyle('IQ', 'hadron')}の指数を${x}します。`,
                x => `${toTextStyle('ハドロン化', 'hadron')}以前のスケーリングを${x}弱くします。`,
                x => `<b>シトシン</b>のティアを${x}します。`,
                x => `合計の${toTextStyle('基本粒子', 'hadron')}の効果を${x}します。`,
                x => `${toTextStyle('基本粒子', 'hadron')}の獲得量を${x}します。`,
                x => `${toTextStyle('ハドロン化','hadron')}の上限のテトレーションを${x}します。`,
            ]],
            'thymine': ['チミン', [
                x => `6-9番目の${toTextStyle('星座', 'star')}の資源は${x}強化されます。`,
                x => `銀河海洋のアップグレードのベースを${x}します。`,
                x => `<b>グアニン</b>のティアを${x}します。`,
                x => `銀河のスコアを${x}します。`,
                x => `銀河の資源の獲得量を${x}します。`,
            ]],
            'uracil': ["ウラシル",[
                x => `${toTextStyle('魚','fish')}の獲得量のテトレーションを${x}します。`,
                x => `最初の4つの塩基を${x}します。`,
                x => `${toTextStyle('基本粒子','hadron')}の獲得量の指数を${x}します。`,
                x => `<b>ウラシル</b>の経験値を${x}します。`,
            ]],
        },
        'experience': '経験値',
        'next-at-experience': '次の経験値で1つ獲得',
        'nucleobase-boosts': '塩基のブースト',
        'experience-base': '経験値ベース',
        'nucleobase-tier': '塩基ティア',

        'gal-explore-ocean': `海洋を探索`,
        'gal-explore-inside': (x, y) => `<b>現在のスコア:</b> ${x}<br>${y} ${toTextStyle('魚', 'fish')}に到達。`,
        'gal-explore-require': x => `${toTextStyle('サメ', 'shark')}ティア${x}で解放`,
        'gal-explore-upgrade': (x, y) => `${x}の生産量を${y}する。`,
        'gal-explore': [
            [
                `青く深い海`, `青い藻`,
                `${toTextStyle('マグマ', 'core')}の欠片の獲得量の指数^2は<b>0.5</b>乗されます。${toTextStyle('核', 'core')}の温度と${toTextStyle('放射線' + icon('radioactive'), 'core')}の生産量が<b>log(x)</b>になります。`,
                x => `${toTextStyle('マグマ', 'core')}の欠片の獲得量の指数と${toTextStyle('放射線' + icon('radioactive'), 'core')}の生産量を${x}します。`
            ],[
                `深海`, `生物発光物質`,
                `${toTextStyle('転生', 'prestige')}の破片の獲得量のテトレーションを<b>半減</b>します。`,
                x => `${toTextStyle('転生', 'prestige')}の破片の生産量の指数を${x}します。`
            ],[
                `灰色の海`, `灰色のプランクトン`,
                `${toTextStyle('人型', 'humanoid')}のサメの獲得量の指数を10乗根します。${toTextStyle('サメ', 'shark')}${toTextStyle('ELO', 'humanoid')}への倍数や指数が増加しなくなります。`,
                x => `${toTextStyle('サメ', 'shark')}${toTextStyle('ELO', 'humanoid')}への指数を${x}します。`
            ],[
                `腐敗した海`, `腐敗した残骸`,
                `${toTextStyle('残骸', 'black-hole')}の獲得量の指数^2と${toTextStyle('暗黒物質', 'black-hole')}の獲得量が平方根されます。`,
                x => `${toTextStyle('残骸', 'black-hole')}の獲得量の指数を${x}します。`
            ],[
                `星の海`, `プラズマ`,
                `${toTextStyle('星座','star')}資源を獲得できなくなり、ブラックホールティアが増加しなくなります。`,
                x => `${toTextStyle('星座', 'star')}のベースと資源を${x}します。`
            ],[
                `砂漠の海`, `乾燥した砂`,
                `${toTextStyle('魚','fish')}の獲得量のテトレーションを半減します。`,
                x => `探索していないときに、${toTextStyle('魚','fish')}の獲得量のテトレーションを${x}します。`
            ],
        ],

        'dna-milestones': [
            `自動銀河探索アップグレードを解放します。`,
            `${toTextStyle('魚','fish')}は${toTextStyle('ハドロン化','hadron')}で設定された上限を上回ることができますが、獲得量はひどく落ち込みます。`,
            `${toTextStyle('人型','humanoid')}のサメの獲得量が${toTextStyle('魚','fish')}と等しくなります。`,
            `DNAのブーストが強化されます。`,
            `DNAの1番目のブーストをより強化します。`,
            `5番目の塩基を解放します。`,
            `1番目のチミンのブーストは最後の${toTextStyle('星座','star')}資源に10%の割合で影響します。`,
            `${toTextStyle('サメ','shark')}ティアは${toTextStyle('魚','fish')}の獲得量のテトレーションを増加させます。1000から開始します。`,
            `自動でDNAを引き伸ばします。`,
            `DNAの2番目のブーストはウラシルにも影響します。`,
        ],

        // Omnipotence

        'omni-cutscene-texts': [`あなたのサメは全能となった...`, `...何を引き換えに...?`],
        
        'tab-omni-rewards': `${toTextStyle("全能","omni")}の報酬`,
        'tab-shark-condenser': `${toTextStyle("サメ","shark")}${toTextStyle("凝縮器","omni")}`,
        'tab-undead': `${toTextStyle('不死','undead')}のハンター`,

        'tab-nucleus': `${toTextStyle('核反応','atom')}`,
        'tab-actinium': `${toTextStyle('アクチニウム','atom')}崩壊系列`,
        'tab-particles': `${toTextStyle('原子','atom')}粒子`,
        'tab-isotopes': `同位体`,

        'tab-runes': `${toTextStyle('ルーン','rune')}`,
        'tab-rune-constructor': `${toTextStyle('ルーン','rune')}構造`,
        'tab-rune-sacrifice': `${toTextStyle('ルーン','rune')}犠牲`,

        'tab-god': `${toTextStyle('サメの神','god')}`,

        'antimatter-div': `${toTextStyle('全能サメ<sup id="omni-tier"></sup>','omni')}は<h2>${toTextStyle('0','antimatter','antimatter-amount')}</h2> <span id="antimatter-gain"></span> 匹の反物質魚を消費しました。`,
        'antimatter-equivalent-div': `<b id="antimatter-equivalent">???</b>匹の${toTextStyle("魚",'fish')}と同等`,
        'undead-essence-html': `<h3>${toTextStyle('0','undead','undead-essence-amount')}</h3><span id="undead-essence-gain"></span>個の不死のエッセンスを獲得しました。<br>
        毎秒<b id="undead-essence-chance">0%</b>の確率で${toTextStyle('不死のエッセンス','undead')}を獲得します。ゲームスピードには影響されません。`,
        'game-speed-div': `ゲームスピード: <b id="game-speed">???</b>`,
        'antimatter-god-div': `${toTextStyle('神','god')}からの天罰により、${toTextStyle('反物質魚','antimatter')}の獲得量の指数が${toTextStyle('1','god','antimatter-god-penalty')}乗根されます。`,
        'rune-sacrifice-info': `${toTextStyle('ルーン','rune')}を犠牲にすると設置できなくなり、そのルーンの数は他の${toTextStyle('ルーン','rune')}の最高の数に影響されます。チャレンジ中は、ほとんどの${toTextStyle('ルーン','rune')}アップグレードは効果を持たなくなり、<b>ゲームスピード</b>は対数化されます。`,

        'anti-fish-name': "反物質魚",
        'anti-fish-costName': toTextStyle('反物質魚','antimatter'),

        'transcend-name': "超越の破片",
        'transcend-costName': toTextStyle('超越','transcend') + "の破片",

        'undead-name': "不死のエッセンス",
        'undead-costName': toTextStyle('不死のエッセンス','undead'),

        'nucleus-name': "原子核",
        'nucleus-costName': toTextStyle('原子核','atom'),

        'rune-fragments-name': "ルーンの欠片",
        'rune-fragments-costName': toTextStyle('ルーン','rune') + "の欠片",

        'curr-top-7-req': x => `合計<b>${format(x)}</b>匹の${toTextStyle('反物質魚','antimatter')}に到達`, 
        'curr-top-7-reset': x => `<b>${x.format(0)}</b>個の${toTextStyle('超越','transcend')}の破片を獲得`,

        'curr-top-8-req': x => `<b>${format(x)}</b>個の${toTextStyle('超越','transcend')}の破片に到達`, 
        'curr-top-8-reset': x => `<b>${x.format(0)}</b>個の${toTextStyle('原子核','atom')}を反応`,

        'curr-top-9-req': x => `合計<b>${format(x)}</b>匹の${toTextStyle('反物質魚','antimatter')}に到達`, 
        'curr-top-9-reset': x => `<b>${x.format(0)}</b>個の${toTextStyle('ルーン','rune')}の欠片を獲得`,

        'omni-shark-button': `全てを凝縮し、${toTextStyle("サメ","shark")}の${toTextStyle("全能","omni")}ティアを増加させ、大きな報酬を得る。<hr class="line"><b>必要量:</b> <span id="omni-require"></span>`,
        'omni-tier': `${toTextStyle("全能","omni")}ティア`,
        'omni-other-requirements': {
            7: `${toTextStyle('超越','transcend')}する`,
            20: `Do a ${toTextStyle('Reaction','atom')}`,
        },
        'omni-rewards': {
            2: x => `${toTextStyle('反物質魚','antimatter')}を基礎獲得量${x}で集める。`,
            5: x => `'全能サメの素早さ'は${toTextStyle("全能","omni")}ティア2の報酬に影響します。`,
            7: x => `${toTextStyle('超越','transcend')}を解放。`,
            9: x => `${toTextStyle("全能サメ","omni")}の${toTextStyle('反物質魚','antimatter')}アップグレードの自動化を解放します。アップグレードは${toTextStyle('反物質魚','antimatter')}を消費しなくなります。`,
            10: x => `${toTextStyle("サメ","shark")}の${toTextStyle("全能","omni")}ティアの上昇を通じて持続する${toTextStyle("サメ","shark")}${toTextStyle("凝縮器","omni")}を解放。`,
            11: x => `'強力な全能サメのパワー'と'全能サメの超越'アップグレードの購入数を${x}します。`,
            12: x => `${toTextStyle("研究","prestige")}を解放。`,
            15: x => `${toTextStyle('不死のエッセンス','undead')}を毎秒${x}の確率で収集します。`,
            16: x => `${toTextStyle('不死のエッセンス','undead')}を凝縮してブーストを得られるようになります。`,
            19: x => `${toTextStyle("全能サメ","omni")}の${toTextStyle('超越','transcend')}アップグレードの自動化を解放します。アップグレードは${toTextStyle('超越','transcend')}の破片を消費しなくなります。`,
            20: x => `${toTextStyle('原子核','atom')}を解放。ゲームスピードの<b>1%</b>の効率で、${x}の${toTextStyle('超越','transcend')}の破片を獲得します。`,
            22: x => `${toTextStyle('不死のエッセンス','undead')}のアップグレードの自動化を解放します。アップグレードは何も消費しなくなります。`,
            24: x => `${toTextStyle('原子核','atom')}を凝縮してブーストできるようになります。${toTextStyle('超越','transcend')}の凝縮は常に最適な状態を保持します。`,
            28: x => `同位体を解放。‘研究Rキーパー’を${toTextStyle("サメ","shark")}の${toTextStyle("全能","omni")}リセット時に適用します。`,
            30: x => `${toTextStyle('核','atom')}の自動化を解放し、アップグレードは何も消費しなくなります。${toTextStyle('不死のエッセンス','undead')}の凝縮は常に最適な状態を保持します。`,
            32: x => `ゲームスピードの<b>^0.1</b>の効率で${x}の${toTextStyle('原子核','atom')}を常時獲得します。`,
            36: x => `${toTextStyle("全能","omni")}ティア32の報酬の効率が${x}に増加します。`,
            40: x => `${toTextStyle("ルーン化","rune")}を解放。${toTextStyle('原子核','atom')}の凝縮は常に最適な状態を保持します。`,
            41: x => `${toTextStyle("ルーン","rune")}の欠片が${x}倍されます。 ${toTextStyle("全能","omni")}ティア15の報酬は常に<b>100%</b>になります。`,
            43: x => `${toTextStyle("ルーン","rune")}の欠片を凝縮してブーストできるようになります。`,
            44: x => `ウルズ${toTextStyle("ルーン","rune")}のベースを${x}します。`,
            48: x => `${toTextStyle("ルーン","rune")}犠牲を解放。`,
            50: x => `最初の${toTextStyle("神","god")}の処罰を${x}弱めます。同位体を${toTextStyle("ルーン化","rune")}リセット時に保持します。`,
            53: x => `${toTextStyle("全能","omni")}ティア41報酬を改善します。`,
            56: x => `${x}の${toTextStyle("ルーン","rune")}の欠片を常時獲得します。${toTextStyle("ルーン","rune")}の欠片の凝縮は常に最適な状態を保持します。`,
            60: x => `最初の${toTextStyle("神","god")}の処罰は解かれた。<i>あと3歩...</i>`,
            63: x => `${toTextStyle("神","god")}は処罰を解きました。${toTextStyle("究極","god")}ステージの${toTextStyle("???","god")}をアンロックします。`,
        },

        'su-os1-req': `${toTextStyle("全能","omni")}ティア3`,
        'su-os1-name': '全能サメのパワー',
        'su-os1-desc': `${toTextStyle('反物質魚','antimatter')}の消費量を2倍にします。`,

        'su-os2-req': `${toTextStyle("全能","omni")}ティア4`,
        'su-os2-name': '全能サメの素早さ',
        'su-os2-desc': `'全能サメのパワー'の倍率のベースを<b>+1</b>します。`,

        'su-os3-req': `${toTextStyle("全能","omni")}ティア6`,
        'su-os3-name': '全能サメの共鳴',
        'su-os3-desc': `${toTextStyle('反物質魚','antimatter')}の消費量を<b>×lg(${toTextStyle('反物質魚','antimatter')})</b>します。`,

        'su-os4-req': `${toTextStyle("全能","omni")}ティア29`,
        'su-os4-name': '全能サメの指数',
        'su-os4-desc': ` ${toTextStyle('反物質魚','antimatter')}の指数を<b>+1%</b>します。`,

        'su-t1-req': `${toTextStyle("全能","omni")}ティア7`,
        'su-t1-name': '強力なサメのパワー',
        'su-t1-desc': `${toTextStyle('反物質魚','antimatter')}の消費量を3倍にします。`,

        'su-t2-req': `${toTextStyle("全能","omni")}ティア9`,
        'su-t2-name': '全能サメの超越',
        'su-t2-desc': `${toTextStyle('超越','transcend')}の破片の獲得量を2倍にします。`,

        'condense': "凝縮",
        'condensed': x => `(${x} 凝縮済み)`,

        'condensers': [
            x => `${toTextStyle('凝縮','transcend')}の破片の獲得量を${x}します。`,
            x => `${toTextStyle('不死のエッセンス','undead')}と<b>ゲームスピード</b>を${x}します。`,
            x => `${toTextStyle('原子核','atom')}と<b>崩壊系列</b>の獲得量を${x}します。`,
            x => `${toTextStyle('ルーン','rune')}の欠片の獲得量を${x}します。`,
        ],

        'undead-upgrades': [
            [`不死の魚`,x=>`${toTextStyle('反物質魚','antimatter')}の獲得量を${x}します。`],
            [`不死の転生`,x=>`${toTextStyle('凝縮','transcend')}の破片の獲得量を${x}します。`],
            [`不死の運`,x=>`${toTextStyle('不死のエッセンス','undead')}の獲得確率を${x}します。`],
            [`不死の収集`,x=>`${toTextStyle('不死のエッセンス','undead')}の獲得量を${x}します。`],

            [`不死の反物質`,x=>`${toTextStyle('不死のエッセンス','undead')}の獲得量を${x}します。`],
            [`不死の超越`,x=>`${toTextStyle('不死のエッセンス','undead')}の獲得量を${x}します。`],
            [`不死のパワー`,x=>`1, 2, 5, 6番目の${toTextStyle('不死','undead')}アップグレードが${x}強化されます。`],
            [`不死のパワーII`,x=>`'不死のパワー'の強さを${x}増加させます。`],
        ],

        'decay-series-boosts': [
            [
                x => `'不死の収集'のベースを${x}します。`,
                x => `${toTextStyle('不死のエッセンス','undead')}の獲得確率を${x}します。`,
            ],[
                x => `${toTextStyle('反物質魚','antimatter')}の獲得量を${x}します。`,
            ],[
                x => `${toTextStyle('超越','transcend')}の破片の獲得量を${x}します。`,
            ],[
                x => `最初の3つの${toTextStyle("超全能サメ","omni")}の${toTextStyle('反物質','antimatter')}アップグレードを${x}強化します。`,
                x => `${toTextStyle("全能サメ","omni")}の${toTextStyle('超越','transcend')}アップグレードを${x}強化します。`,
                x => `4番目の${toTextStyle("全能サメ","omni")}の${toTextStyle('反物質','antimatter')}アップグレードを${x}強化します。`,
            ],[
                x => `最初の7つの${toTextStyle('不死','undead')}アップグレードを${x}強化します。`,
            ],[
                x => `‘不死の反物質’と‘不死の超越’の効果を${x}強化します。`,
            ],[
                x => `${toTextStyle("全能サメ","omni")}の${toTextStyle('反物質魚','antimatter')}のアップグレードコストを${x}乗根します。`,
            ],[
                x => `最初の4つの核を${x}強化します。`,
                x => `ブーストが5-7番目の核にも影響します。`,
            ],[
                x => `${toTextStyle('不死のエッセンス','undead')}の獲得量を${x}します。`,
            ],[
                x => `凝縮された${toTextStyle('原子核','atom')}の効果を${x}強化します。`,
                x => `アルファ粒子の効果を${x}強化します。`,
            ],[
                x => `次の同位体の必要量を${x}で割ります。`,
            ],[
                x => `${toTextStyle('反物質魚','antimatter')}の獲得量の指数を${x}します。`,
            ],[
                x => `${toTextStyle('超越','transcend')}の破片の獲得量の指数を${x}します。`,
            ],[
                x => `8番目の${toTextStyle('不死','undead')}アップグレードを${x}強化します。`,
            ],[
                x => `8-10番目の核を${x}強化します。`,
                x => `ブーストが11-13番目の核にも影響します。`,
            ],[
                x => `ヘリウム-3のベースを${x}強化します。`,
            ],[
                x => `毎秒${x}個の<sup>235</sup>U核を生成します。ゲームスピードの影響を受けます。`,
            ],
        ],
        'full-element-name': [
            'ニュートロニウム',
            '水素','ヘリウム','リチウム','ベリリウム','ホウ素','炭素','窒素','酸素','フッ素','ネオン',
            'ナトリウム','マグネシウム','アルミニウム','ケイ素','リン','硫黄','塩素','アルゴン','カリウム','カルシウム',
            'スカンジウム','チタン','バナジウム','クロム','マンガン','鉄','コバルト','ニッケル','銅','亜鉛',
            'ガリウム','ゲルマニウム','ヒ素','セレン','臭素','クリプトン','ルビジウム','ストロンチウム','イットリウム','ジルコニウム',
            'ニオブ','モリブデン','テクネチウム','ルテニウム','ロジウム','パラジウム','銀','カドニウム','インジウム','スズ',
            'アンチモン','テルル','ヨウ素','キセノン','セシウム','バリウム','ランタン','セリウム','プラセオジム','ネオジム',
            'プロメチウム','サマリウム','ユウロピウム','ガドリニウム','テルビウム','ジスプロシウム','ホルミウム','エルビウム','ツリウム','イッテルビウム',
            'ルテチウム','ハフニウム','タンタル','タングステン','レニウム','オスミウム','イリジウム','白金','金','水銀',
            'タリウム','鉛','ビスマス','ポロニウム','アスタチン','ラドン','フランシウム','ラジウム','アクチニウム','トリウム',
            'プロトアクチニウム','ウラン','ネプツニウム','プルトニウム','アメリシウム','キュリウム','バークリウム','カリホルニウム','アインスタイニウム','フェルミウム',
            'マンデレビウム','ノーベリウム','ローレンシウム','ラザホージウム','ドブニウム','シーホーギウム','ボーリウム','ハッシウム','マイトネリウム','ダームスタチウム',
            'レントゲニウム','コペルニシウム','ニホニウム','フレロビウム','モスコビウム','リバモリウム','テネシン','オガネソン'
        ],

        'decay-chain-max': "全て購入",
        'decay-chain-buy-all': "購入可能な全ての原子を購入する",
        
        'alpha-particle-div': `崩壊した原子核は<h3 id="alpha-particle-amount">0</h3> <span id="alpha-particle-gain"></span>個のアルファ粒子を生成し、${toTextStyle('原子核','atom')}の獲得量を<h3 id="alpha-particle-effect">???</h3>しています。`,
        'beta-particle-div': `崩壊した原子核は<h3 id="beta-particle-amount">0</h3> <span id="beta-particle-gain"></span>個のベータ粒子を生成し, ゲームスピードを<h3 id="beta-particle-effect">???</h3>しています。`,
        'gamma-ray-particle-div': `ウラン236の原子核は<h3 id="gamma-ray-particle-amount">0</h3> <span id="gamma-ray-particle-gain"></span>個のガンマ線を生成し、アルファおよびベータ粒子の生成量を<h3 id="gamma-ray-particle-effect">???</h3>しています。`,
        'energy-particle-div': `ウラン236の原子核は<h3 id="energy-particle-amount">0</h3> <span id="energy-particle-gain"></span>MeVのエネルギーを生成し、崩壊系列の獲得量を<h3 id="energy-particle-effect">???</h3>しています。`,
        'barium-particle-div': `ウラン236の原子核は<h3 id="barium-particle-amount">0</h3> <span id="barium-particle-gain"></span>個のバリウム141の原子核を生成し、${toTextStyle('反物質魚','antimatter')}の獲得量を<h3 id="barium-particle-effect">???</h3>しています。`,
        'krypton-particle-div': `ウラン236の原子核は<h3 id="krypton-particle-amount">0</h3> <span id="krypton-particle-gain"></span>個のクリプトン92の原子核を生成し、${toTextStyle('超越','transcend')}の破片の獲得量を<h3 id="krypton-particle-effect">???</h3>しています。`,

        'uranium-235-fission': `ウラン235に中性子を吸収させて核分裂を始める。`,

        'isotopes-div': `<h3 id="isotopes-amount">0 / 0</h3>個の同位体を持っています。(+1: <h4 id="isotopes-next">???</h4> ${toTextStyle('原子核','atom')})
        <subtitle>注意: 同位体をダウングレードすると${toTextStyle('反応','atom')}リセットを行います。同位体をホバーして効果を表示します。</subtitle>`,
        'isotope-rewards': [
            [
                x => `${toTextStyle('原子核','atom')}の指数のベースを${x}増加させます。`,
                x => `${toTextStyle('原子核','atom')}の指数のベースを${x}増加させます。`,
                x => `${toTextStyle('原子核','atom')}の指数のベースを${x}増加させます。`,
                x => `${toTextStyle('原子核','atom')}の指数のベースを${x}増加させます。`,
            ],[
                x => `‘不死の反物質’と‘不死の超越’の数の平方根に基づいて${toTextStyle('不死のエッセンス','undead')}を${x[0]}倍します。(現在 ${x[1]})`,
                x => `この同位体の数に基づいて最初の効果を+${x[0]}します。(現在 ${x[1]})`,
                x => `この同位体の最初の効果の指数を${x}に増加させます。`,
                x => `この同位体の最初の効果の指数を${x}に増加させます。`,
                x => `この同位体の最初の効果の指数を${x}に増加させます。`,
            ],[
                x => `${toTextStyle('超越','transcend')}の破片の指数のベースを${x}増加させます。`,
                x => `${toTextStyle('超越','transcend')}の破片の指数のベースを${x}増加させます。`,
                x => `${toTextStyle('超越','transcend')}の破片の指数のベースを${x}増加させます。`,
                x => `${toTextStyle('超越','transcend')}の破片の指数のベースを${x}増加させます。`,
            ],[
                x => `立方根された${toTextStyle('不死のエッセンス','undead')}の収集確率の100%ごとに${toTextStyle('不死のエッセンス','undead')}の獲得量を${x[0]}倍にします。(現在 ${x[1]})`,
                x => `最初の効果のベースを${x[0]}増加させます。(現在 ${x[1]})`,
                x => `この同位体の最初の効果の指数を${x}に増加させます。`,
                x => `この同位体の最初の効果の指数を${x}に増加させます。`,
            ],[
                x => `鉛-207を2倍強くします。`,
                x => `ビスマス-211の3番目のソフトキャップが弱くなります。`,
                x => `ポロニウム-215は‘不死の収集’に非常に低い効率で影響します。(現在 ${x})`,
                x => `アスタチン-219の2番目の効果を強くします。`,
            ],[
                x => `鉛-211を${x}強化します。`,
                x => `鉛-211を${x}強化します。`,
                x => `鉛-211を${x}強化します。`,
                x => `鉛-211を${x}強化します。`,
                x => `鉛-211を${x}強化します。`,
            ],[
                x => `凝縮された${toTextStyle('超越','transcend')}の破片のブーストの指数を${x}増加させます。`,
                x => `凝縮された${toTextStyle('超越','transcend')}の破片のブーストの指数を${x}増加させます。`,
                x => `凝縮された${toTextStyle('超越','transcend')}の破片のブーストの指数を${x}増加させます。`,
                x => `凝縮された${toTextStyle('超越','transcend')}の破片のブーストの指数を${x}増加させます。`,
                x => `凝縮された${toTextStyle('超越','transcend')}の破片のブーストの指数を${x}増加させます。`,
            ],
        ],

        'runes': {
            'fehu': [
                `フェオ`,
                `${toTextStyle('反物質魚','antimatter')}の獲得量の指数を増加させます。(現在の${toTextStyle('反物質魚','antimatter')}の量に基づきます。)`,
                x => `${toTextStyle('反物質魚','antimatter')}の獲得量の指数を${x}します。`,
            ],
            'berkanan': [
                `べルカナン`,
                `${toTextStyle('超越','transcend')}の破片の獲得量の指数を増加させます。(現在の${toTextStyle('超越','transcend')}の破片の量に基づきます。)`,
                x => `${toTextStyle('超越','transcend')}の破片の獲得量の指数を${x}します。`,
            ],
            'kaunan': [
                `カウナン`,
                `${toTextStyle('不死のエッセンス','undead')}の獲得量を増加させます。(現在の${toTextStyle('不死のエッセンス','undead')}の量に基づきます。)`,
                x => `${toTextStyle('不死のエッセンス','undead')}の獲得量を${x}します。`,
            ],
            'naudiz': [
                `ナウディズ`,
                `${toTextStyle('原子核','atom')}の獲得量を増加させます。(現在の${toTextStyle('原子核','atom')}の量に基づきます。)`,
                x => `${toTextStyle('原子核','atom')}の獲得量を${x}します。`,
            ],
            'uruz': [
                `ウルズ`,
                `隣接するウルズではない${toTextStyle("ルーン","rune")}を強化します。`,
                x => `隣接するウルズではない${toTextStyle("ルーン","rune")}は${x}強くなります。`,
            ],
        },
        'short-rune-essence': 'RE',

        'rune-upgrades': [
            x => `フェオ${toTextStyle("ルーン","rune")}を${x}強化。`,
            x => `ベルカナン&カウナン${toTextStyle("ルーン","rune")}を${x}強化。`,
            x => `ナウディズ${toTextStyle("ルーン","rune")}を${x}強化。`,
            x => `${x}${toTextStyle("ルーン","rune")}エッセンス(RE)を獲得。`,
        ],

        'rune-clear-all': `全ての${toTextStyle("ルーン","rune")}を消去`,
        'rune-erase-mode': bool => bool ? "消去を終了" : "消去モード",
        'rune-sacrificed': "犠牲済み",

        'rune-sacrifice': [
            [
                `犠牲ティアI`,
                [
                    `フェオ${toTextStyle("ルーン","rune")}は効果を持ちません。`,
                    `‘不死の魚’${toTextStyle('不死','undead')}アップグレード、バリウム141、タリウム207、フランシウム223は効果を持ちません。`,
                ],
                `フェオ${toTextStyle("ルーン","rune")}を犠牲にします。`,
            ],[
                `犠牲ティアII`,
                [
                    `ベルカナン${toTextStyle("ルーン","rune")}は効果を持ちません。`,
                    `‘不死の転生’${toTextStyle('不死','undead')}アップグレード、クリプトン92、ポロニウム211、トリウム227、凝縮された${toTextStyle('超越','transcend')}の破片は効果を持ちません。`,
                    `${toTextStyle('超越','transcend')}の破片の獲得量が対数的に減少します。`,
                ],
                `ベルカナン${toTextStyle("ルーン","rune")}を犠牲にします。`,
            ],[
                `犠牲ティアIII`,
                [
                    `カウナン${toTextStyle("ルーン","rune")}は効果を持ちません。`,
                    `‘不死の運命’、‘不死の反物質’、‘不死の超越’${toTextStyle('不死','undead')}アップグレード、ヘリウム3、炭素11、ラドン219、凝縮された${toTextStyle('不死のエッセンス','undead')}は効果を持ちません。`,
                ],
                `カウナン${toTextStyle("ルーン","rune")}を犠牲にします。`,
            ],
        ],

        'rune-sacrifice-state': [
            `${toTextStyle("ルーン","rune")}の犠牲を開始する。`,
            `${toTextStyle("ルーン","rune")}の犠牲をやめる。`,
            `${toTextStyle("ルーン","rune")}の犠牲を完了する。`
        ],

        get 'reset-transcend-message'() {
            let p = toTextStyle('超越','transcend'), s = toTextStyle('全能サメ','omni'), f = toTextStyle('反物質魚','antimatter')
            return `
            <h3>${p}</h3><br>
            ${p}は、最初の全能におけるリセットレイヤーです。超越すると${s}アップグレードと${f}をリセットし、${toTextStyle('超越','transcend')}の破片を獲得します。<br>
            最初の${p}は新しい${s}アップグレードを解放します。<br>
            <img src="textures/TranscendentalShard.png"><br>
            超越しますか?
            `
        },
        get 'reset-reaction-message'() {
            let c = toTextStyle('反応','atom'), m = toTextStyle('原子核','atom'), p = toTextStyle('超越','transcend')
            return `
            <h3>${c}</h3><br>
            ${c}は、2番目の全能におけるリセットレイヤーです。反応リセットを行うと、${p}が行うリセットに加え、${p}の破片や、${p}アップグレード、いくつかの${toTextStyle('研究','prestige')}、${toTextStyle('不死のエッセンス','undead')}をリセットし、${m}を獲得します。<br>
            <img src="textures/Nucleus.png"><br>
            本当に反応しますか?
            `
        },
        get 'reset-runeification-message'() {
            let c = toTextStyle('ルーン化','rune'), m = toTextStyle('ルーン','rune'), p = toTextStyle('反応','atom')
            return `
            <h3>${c}</h3><br>
            ${c}は、3番目の全能におけるリセットレイヤーです。ルーン化リセットを行うと、${p}が行うリセットに加え、${toTextStyle('原子核','atom')}、${toTextStyle('アクチニウム','atom')}原子系列、${toTextStyle('原子','atom')}粒子、同位体、いくつかの研究をリセットし、${m}の欠片を獲得します。<br>
            <subtitle>しかし、ルーン化前の${toTextStyle("凝縮器","omni")}もリセットされます。 (${toTextStyle("全能","omni")}ティア40以降も同様です。) 多くの${m}機能は${toTextStyle("サメ","shark")}${toTextStyle("全能","omni")}ティア上昇時にも保持されますが、${m}の欠片はリセットされます。</subtitle>
            <img src="textures/Rune.png"><br>
            本当にルーン化しますか?
            `
        },

        'confirm-transcend': "超越",
        'confirm-reaction': "反応",
        'confirm-runeification': "ルーン化",

        'progress-28-text': r => `合計${format(r)}匹の${toTextStyle('反物質魚','antimatter')}に到達`, 
        get 'progress-28-cond-text'() { return `${toTextStyle('超越','transcend')}する` },

        'progress-29-text': r => `${format(r)}個の${toTextStyle('超越','transcend')}の破片に到達`, 
        get 'progress-29-cond-text'() { return `${toTextStyle('反応','atom')}する` },

        'progress-30-text': r => `合計${format(r)}匹の${toTextStyle('反物質魚','antimatter')}に到達`, 
        get 'progress-30-cond-text'() { return `${toTextStyle('ルーン化','rune')}する` },

        'progress-31-text': r => `???`,

        'auto-osu-name': `${toTextStyle("全能サメ","omni")}の${toTextStyle('反物質魚','antimatter')}アップグレード`,
        'auto-ostu-name': `${toTextStyle("全能サメ","omni")}の${toTextStyle('超越','transcend')}アップグレード`,
        'auto-ue-name': `${toTextStyle('不死のエッセンス','undead')}アップグレード`,
        'auto-nucleus-name': `${toTextStyle('核','atom')}`,

        'god-info': `"繰り返す。${toTextStyle("サメの神","god")}は最後のステージに連れて行ってくれるようだ。今までの進捗は全て消去され、もう元には戻せない!だが、${toTextStyle("サメの神","god")}は${toTextStyle("神宇宙","god")}を超える${toTextStyle("全能魚","god")}を生産する能力を与えてくれるようだ。そう、${toTextStyle("サメ","shark")}を生まれ変わらせる準備はほとんどできている...もう選択肢はないんだ..."`,
        'overmodify-shark': `${toTextStyle("サメ","shark")}を超改造する`,

        'god-fish-div': `${toTextStyle('サメの神','god')}は<h2>${toTextStyle('0','god','god-fish-amount')}</h2> <span id="god-fish-gain"></span>匹の全能魚を全滅させた。`,

        'omni-fish-name': "全能魚",
        'omni-fish-costName': toTextStyle('全能魚','god'),

        'endings': [
            `クリアおめでとうございます!クリアタイム: `,
            `3つの選択肢があります:　${toTextStyle("サメ","shark")}を${toTextStyle("再生","rebirth")}しさらに多くのコンテンツをプレイする。ゲームをインポートする。ゲームをリセットする。`
        ],
        'ending-options': [
            `${toTextStyle("サメ","shark")}を生まれ変わらせる`,
            `プロンプトでインポート`,
            `ファイルでインポート`,
            `最初の状態にリセット`
        ],

        'tab-rebirth': `${toTextStyle('再生','rebirth')}`,
        'tab-rebirth-upgs': `${toTextStyle('再生','rebirth')}アップグレード`,
        'tab-rebirth-past10': `過去10回の${toTextStyle('再生','rebirth')}`,

        'rebirth-points-div': `<h3>${toTextStyle('???','rebirth','rebirth-amount')}</h3>再生ポイントを持っています。<h3>${toTextStyle('???','rebirth','global-mult')}</h3>の全体倍率を与えています。`,

        'rebirth-upgrades': [
            ["クラシックな自動化", `${toTextStyle('サメ','shark')}、${toTextStyle('転生','prestige')}、${toTextStyle('核','core')}の自動化を永久に解放します。`],
            ["銀河の採掘", `${toTextStyle('進化','humanoid')}と${toTextStyle('特異点','black-hole')}の自動化を永久に解放します。`],
            ["ハドロンのアセンブラ", `${toTextStyle('ハドロン化','hadron')}に関連する自動化を永久に解放します。`],
            ["反物質の自動化I", `${toTextStyle('全能','omni')}に関連する自動化を永久に解放します。`],
            ["反物質の自動化II", `リセットなしに自動で${toTextStyle('全能','omni')}ティアを上昇させます。`],
            ["クラシックな生成", `${toTextStyle('転生','prestige')}の破片と${toTextStyle('マグマ','core')}の欠片の常時生成を永久に解放します。 `],
            ["人型のサメの群れ", `${toTextStyle('人型','humanoid')}のサメの常時生成を永久に解放します。`],
            ["粒子の自己複製", `${toTextStyle('特異点','black-hole')}や${toTextStyle('基本粒子','hadron')}に関連する常時生成を永久に解放します。`],
            ["反物質の三資源", `${toTextStyle('全能','omni')}に関連する常時生成を永久に解放します。`],
            ["倍率が足りない", `さらに<b>+50%</b>の全体倍率を獲得します。`],
        ],

        'rebirth-upgrades-note': `注意: 再生アップグレードが実装されていないことに気づいた場合、開発者に連絡してください。`,
        'rebirth-time': `${toTextStyle('再生','rebirth')}のプレイ時間`,
        'rebirth-points': `${toTextStyle('再生','rebirth')}ポイント`,

        'global-mult-title': `全体倍率の生産`,
        'global-mults': {
            base: x => `${x} 基本倍率`,
            time: x => `${x} 最速の${toTextStyle('再生','rebirth')}からの増加`,
            other: x => `${x} 他の場所からの増加`,
        },

        // Automation

        'auto-shark-name': `${toTextStyle('サメ', 'shark')}レベル`,
        'auto-su-name': `${toTextStyle('魚', 'fish')}アップグレード`,
        'auto-spu-name': `${toTextStyle('転生', 'prestige')}アップグレード`,
        'auto-eu-name': `探索アップグレード`,
        'auto-core_reactor-name': `${toTextStyle('核', 'core')}融合炉`,
        'auto-core_radiation-name': `${toTextStyle('核', 'core')}放射線`,
        'auto-radioactive_boosts-name': `放射性ブースト`,
        'auto-mining_upgs-name': `採掘アップグレード`,
        'auto-humanoid-name': `${toTextStyle('進化', 'humanoid')}`,
        'auto-research-name': `研究(${toTextStyle('特異点', 'black-hole')}前)`,
        'auto-mining_tier-name': `採掘ティア`,
        'auto-remnant-name': `${toTextStyle('残骸', 'black-hole')}アップグレード`,
        'auto-faith-name': `${toTextStyle('サメの信仰', 'humanoid')}獲得`,

        'auto-sing_research-name': `研究(${toTextStyle('特異点', 'black-hole')})`,
        'auto-evolution_tree-name': `${toTextStyle('進化', 'humanoid')}ツリー`,
        'auto-rocket_part-name': `ロケットの部品作成`,
        'auto-mining_ascend-name': `採掘アセンション`,
        'auto-nucleobase-name': `核酸塩基`,
        'auto-gal_eu-name': `銀河探索アップグレード`,

        'auto-cost': (D, cost, name) => `間隔を${formatReduction(D, 0)}短縮する。<br>コスト: ${format(cost, 0)} ${name}`,
        'auto-interval': (a, b, maxed) => `間隔: ${format(a, 3)}秒` + (maxed ? '' : ` ➜ ${format(b, 3)}秒`),

        // Progress

        'progress-0-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達`,
        get 'progress-0-cond-text'() { return `${toTextStyle('転生', 'prestige')}する`; },

        'progress-1-text': r => `${format(r)}${toTextStyle('転生', 'prestige')}の破片を獲得して自動化を解放`,
        'progress-2-text': r => `${format(r)}${toTextStyle('転生', 'prestige')}の破片を獲得して研究を解放`,
        'progress-3-text': r => `${toTextStyle('サメ', 'shark')}レベル${format(r, 0)}に到達して探索を解放`,
        'progress-4-text': r => `太平洋の水深${format(r)}mに到達して${toTextStyle('核', 'core')}を解放`,

        'progress-5-text': r => `合計${format(r)}${toTextStyle('転生', 'prestige')}の破片を獲得する`,
        get 'progress-5-cond-text'() { return `${toTextStyle('核', 'core')}リセットする`; },

        'progress-6-text': r => `${format(r)} ${toTextStyle('マグマ', 'core')}の欠片を獲得して次の${toTextStyle('核', 'core')}の機能を解放`,
        'progress-7-text': r => `${toTextStyle('サメ', 'shark')}レベル${format(r, 0)}に到達して新しい海洋を解放`,
        'progress-8-text': r => `${format(r)} ${toTextStyle('マグマ', 'core')}の欠片を獲得して次の${toTextStyle('核', 'core')}の機能を解放`,
        'progress-9-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達して新しい${toTextStyle('核', 'core')}融合炉を解放`,

        'progress-10-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達`,
        get 'progress-10-cond-text'() { return `${toTextStyle('サメ', 'shark')}を進化させる`; },

        'progress-11-text': r => `${format(r, 0)} ${toTextStyle('人型', 'humanoid')}のサメを獲得して次の${toTextStyle('進化', 'humanoid')}機能を解放`,
        'progress-12-text': r => `${format(r, 0)} ${toTextStyle('人型', 'humanoid')}のサメを獲得して次の${toTextStyle('進化', 'humanoid')}機能を解放`,
        'progress-13-text': r => `採掘ティア${format(r, 0)}に到達して新しい${toTextStyle('進化', 'humanoid')}ツリーの行を解放`,
        'progress-14-text': r => `採掘ティア${format(r, 0)}に到達して次の${toTextStyle('進化', 'humanoid')}機能を解放`,
        'progress-15-text': r => `採掘ティア${format(r, 0)}に到達して次の${toTextStyle('進化', 'humanoid')}機能を解放`,

        'progress-16-text': r => `${format(r, 0)}本の粒子加速器を満杯にする`,
        get 'progress-16-cond-text'() { return `${toTextStyle('ブラックホール', 'black-hole')}を形成`; },

        'progress-17-text': r => `${format(r, 0)} ${toTextStyle('ブラックホール', 'black-hole')}を形成`,

        'progress-18-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達`,
        get 'progress-18-cond-text'() { return `${toTextStyle('犠牲', 'black-hole')}を実行`; },

        'progress-19-text': r => `合計${format(r)}${toTextStyle('暗黒物質', 'black-hole')}に到達`,

        'progress-20-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達`,
        get 'progress-20-cond-text'() { return `${toTextStyle('ハドロン化', 'hadron')}を実行`; },

        'progress-21-text': r => `合計${format(r, 0)}${toTextStyle('基本粒子', 'hadron')}に到達して次の要素を解放`,
        'progress-22-text': r => `合計${format(r)}${toTextStyle('基本粒子', 'hadron')}に到達して第3の核酸塩基を解放`,
        'progress-23-text': r => `${format(r, 0)}${toTextStyle('サメ', 'shark')}ティアに到達して次の要素を解放`,
        'progress-24-text': r => `合計${format(r)}${toTextStyle('基本粒子', 'hadron')}に到達して第4の核酸塩基を解放`,
        'progress-25-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達して次の要素を解放`,
        'progress-26-text': r => `合計${format(r)}nmのDNAに到達して第5の塩基を解放`,

        'progress-27-text': r => `${toTextStyle('サメ','shark')}の価値を証明するための条件なんてないよ!`,
        get 'progress-27-cond-text'() { return `価値を証明しろ...` },

        'maxed-progress': '全ての機能が解放されました!',

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('転生', 'prestige'), s = toTextStyle('サメ', 'shark'), f = toTextStyle('魚', 'fish');
            return `
            <h3>${p}</h3><br>
            ${p}は最初のリセットレイヤーです。転生をすると、${s}、${s}のアップグレードをリセットし、${f}を${p}の欠片に変換します。
            最初の${p}は新しい${s}アップグレードを解放します<br>
            <img src="textures/PrestigeShard.png"><br>
            本当に転生しますか?
            `;
        },
        get 'reset-core-message'() {
            let c = toTextStyle('核', 'core'), m = toTextStyle('マグマ', 'core'), p = toTextStyle('転生', 'prestige');
            return `
            <h3>${c}</h3><br>
            ${c}は2番目のリセットレイヤーです。核リセットを行うと${p}が行うリセットに加え、${p}の破片や${p}アップグレード、一部の${toTextStyle('研究', 'prestige')}、探索をリセットし${m}の欠片を獲得します。
            ${c}融合炉もアンロックされます。<br>
            <img src="textures/Magmatic.png"><br>
            本当に核リセットを行いますか?
            `;
        },
        get 'reset-humanoid-message'() {
            let e = toTextStyle('進化', 'humanoid'), c = toTextStyle('核', 'core'), m = toTextStyle('マグマ', 'core'), p = toTextStyle('転生', 'prestige');
            return `
            <h3>${e}</h3><br>
            <subtitle>“サメはだんだんと凶暴に、人の形へと変異しようとしている。しかし、それには大きな代償が伴っていた。”</subtitle>
            ${e}は3番目のリセットレイヤーです。サメを進化させることで${c}が行うリセットに加え、${m}の欠片、${c}融合炉、${c}放射線、${c}アセンブラ、${p}をリセットし、${toTextStyle('人型', 'humanoid')}のサメを獲得します。
            また、${toTextStyle('サメ', 'shark')}ランクや${e}ツリーを解放します。<br>
            <img src="textures/Evolution.png"><br>
            本当にサメを進化させますか?
            `;
        },
        get 'reset-black-hole-message'() {
            let e = toTextStyle('ブラックホール', 'black-hole'), c = toTextStyle('進化', 'humanoid');
            return `
            <h3>${e}</h3><br>
            ${e}は4番目のリセットレイヤーです。<br>
            ${e}を形成すると${c}が行うリセットに加え、サメランク、人型のサメ、進化ツリー、サメの信仰、進化の目標、採掘、鍛治、粒子加速器、一部の研究や自動化などをリセットします。
            また、${e}を形成するたびに手に入れられる資源が減少しますが、マイルストーンのような新しい機能を通じて新たな恩恵を獲得できます。<br>
            <img src="textures/black-hole.png"><br>
            新しい宇宙へと突入しますか?
            `;
        },
        get 'reset-sacrifice-message'() {
            let e = toTextStyle('犠牲', 'black-hole'), c = toTextStyle('ブラックホール', 'black-hole');
            return `
            <h3>${e}</h3><br>
            ${e}は小さいリセットレイヤーです。<br>
            犠牲を行うと${c}が行うリセットに加え、ブラックホール(最初の7つのマイルストーンを除く）、残骸、残骸アップグレード、一部の研究がリセットされます。<br>
            <img src="textures/sacrifice.png"><br>
            本当にサメを犠牲にしますか?
            `;
        },
        get 'reset-hadron-message'() {
            let e = toTextStyle('ハドロン化', 'hadron'), c = toTextStyle('犠牲', 'black-hole');
            return `
            <h3>${e}</h3><br>
            ${e}は5番目のリセットレイヤーです。<br>
            サメが全宇宙を超越する存在にすると、${c}が行うリセットに加え、暗黒物質、犠牲アップグレード、ロケットの部品を含む太陽系、ブラックホールティア、星座の資源、特異点マイルストーン、採掘アセンション、鉱石、特異点以降の研究をすべてリセットします。その代わりに、${toTextStyle('基本粒子', 'hadron')}を手に入れ、アップグレード、自動化、研究を解放します。<br>
            <img src="textures/hadronize.png"><br>
            全宇宙を超越しますか？
            `;
        },

        // Other

        'scalings': {
            'shark_level': `サメレベル`,
            'shark_rank': `サメランク`,
            'shark_tier': `サメティア`,
            'su_s3': `"サメの噛みつき"アップグレード`,
            'su_s4': `"サメの指数"アップグレード`,
            'su_m1': `"採掘攻撃力"アップグレード`,
            'su_m3': `"石の圧縮"アップグレード`,
            'su_m5': `"基礎鉱石"アップグレード`,
            'cr_boost': `放射性ブースト`,
            'mining_tier': `採掘ティア`,
            'mining_ascend': `採掘アセンション`,
            'remnant_upg': `残骸アップグレード`,
            'bh_tier': `ブラックホールティア`,
            'decay_series' : `崩壊核`,
            'isotopes' : `同位体`,
            'rune_upg1' : `最初の3つのルーンアップグレード`,
            'rune_upg2' : `4番目のルーンアップグレード`,
        },
        'scaling-start': '開始',
        'scaling-mode': {
            L: x => `<b>${x}</b> 直線的`,
            D: x => `<b>${x}</b> 指数`
        },
        'scaling-info': `スケーリングは到達度に応じて追加されていきます。<b>N</b> - 個数, <b>S</b> - 開始地点`,

        'upgrade-shark': x => `${toTextStyle('サメ', 'shark')}のレベルアップ<br>コスト: ${x.format(0)} ${toTextStyle('魚', 'fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} ${toTextStyle('魚', 'fish')}のベース`,
        'shark-bonus-prestige': x => `${formatMult(x)} ${toTextStyle('転生', 'prestige')}の破片`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('マグマ', 'core')}の欠片`,
        'shark-bonus-remnants': x => `+${x.format(0)} ${toTextStyle('残骸', 'black-hole')}`,

        'shark-overpopulation': (x, y) => `${toTextStyle('サメ', 'shark')}が繁殖しすぎたため、<h4>${toTextStyle(format(y), 'fish')}${toTextStyle('魚', 'fish')}</h4>において、食べられる量が<h4>${format(x, 3)}√</h4>減少します。`,

        'shark-rank-bonuses': {
            fish: x => `${formatPow(x)} ${toTextStyle('魚', 'fish')}`,
            prestige: x => `${formatPow(x)} ${toTextStyle('転生', 'prestige')}の破片`,
            mining_damage: x => `${formatMult(x)}採掘攻撃力`,
            so: x => `${formatPow(x)} ${toTextStyle('サメ', 'shark')}の繁殖遅延`,
            vibranium: x => `${formatMult(x)} <b>ヴィブラニウム</b>`,
            remnants: x => `${formatMult(x)} ${toTextStyle('残骸', 'black-hole')}`
        },

        'shark-tier-bonuses': {
            fish: x => `${x} ${toTextStyle('魚', 'fish')}の指数`,
            hadron: x => `${x} ${toTextStyle('基本粒子', 'hadron')}`,
            prestige: x => `${x} ${toTextStyle('転生', 'prestige')}の破片の指数`,
            nucleobase: x => `${x} 核酸塩基の経験値`,
            fish2: x => `${x} ${toTextStyle('Fish','fish')}の獲得量のテトレーション`,
        },

        'amount': '個数',
        'total': '合計',
        'level': 'レベル',
        'effect': '効果',
        'cost': 'コスト',
        'goal': "目標",
        'buyMax': '最大',
        'require': '要求量',
        'next-at': '次:',
        'depth': '水深',
        'reward': '報酬',
        'new-preset': '新規プリセット',
        'maxed': '最大',
        'difficulty': '難易度',
        'score': 'スコア',
        'picked': "選択済み",

        'remove': '削除',
        'overwrite-current': '現在のツリーで上書き',
        'load': 'ロード',
        'force-load': '強制ロード',
        'you-have': '所持量',

        'offline-time-text': x => `あなたは<b>${formatTime(x, 0)}</b>の間オフラインでした。`,

        'research-afford': bool => (bool ? '購入' : '購入不可'),
        'research-bought': bool => (bool ? `<b>購入済み</b>` : `<b>未購入</b>`),
        'research-pages': x => `${x}ページ`,

        'purchased': '購入済み',

        'off-on': bool => (bool ? 'オン' : 'オフ'),

        'popup-buttons': [
            ['はい', 'いいえ'],
            ['OK', 'キャンセル']
        ],

        'popup-desc': {
            import: `セーブデータを入力してください。警告: 現在のセーブデータは上書きされます。`,
            wipe: `本当にデータを削除しますか?<br />削除するには、「<span class="free-select">I'm sorry what I don't want sharks!</span>」と入力してください。`,
            'evolution-tree-respec': `本当に${toTextStyle('進化', 'humanoid')}ツリーを再構築しますか?${toTextStyle('人型', 'humanoid')}のサメを手に入れずに${toTextStyle('進化', 'humanoid')}リセットを行います。`,
            'evolution-tree-import': `進化ツリーをペーストしてください。`,
            'starter-upgrade-warning': `本当にそのアップグレードを購入しますか?初回は<b>"サメティア"</b>がおすすめです!`,
            "rebirth-confirm": `${toTextStyle('再生','rebirth')}はエンドゲーム後のコンテンツで、メインステージにおける進捗を速めるのを助けてくれます。 ${toTextStyle('再生','rebirth')}すると、設定や進化ツリーのプリセットを除いた全てをリセットしますが、${toTextStyle('再生','rebirth')}ポイントを受け取り、全体倍率を増加させます。${toTextStyle('再生','rebirth')}ポイントで${toTextStyle('再生','rebirth')}アップグレードを購入し、より進捗を速めましょう。<br><br>サメを生まれ変わらせますか?`,
            "rebirth-undo": `本当に最初の状態に戻しますか?`,
        },

        'notify-desc': {
            save: 'ゲームをセーブしました!',
            copy_to_clipboard: 'クリップボードにコピーしました!',
            forge_completed: x => `<b>${x}</b>の鍛造に成功しました!`
        },

        'radio-desc': {
            'notation': ['表記記法', ['科学的表記', '標準表記', '混合化学表記', '対数表記']],
            'comma-format': ['カンマ表示の最大桁数', ['3', '6', '9', '12', '15']],
            'autosave': ['自動セーブ', ['無効', '有効']],
            'autosave-time': ['自動セーブの間隔', ['15秒', '30秒', '60秒', '120秒']],
            'offline': ['オフライン進行', ['無効', '有効']],
            'max-research-amt': ['1ページあたりの研究表示数', ['∞', '15', '20', '25', '30']],
            'visible-research': [`購入した研究の可視性`, ['表示', '非表示']],
            'notify': ['タブ通知', ['無効', '有効']],
            'condenser-ratio': ['凝縮する割合',['10%','25%','50%','100%']],
        },

        'radio-desc-default': ['無効', '有効'],

        'prompt-placeholder': 'テキストを入力...',

        'option-buttons-text': ['セーブ', 'クリップボードに<br />エクスポート', 'ファイルとして<br />エクスポート', 'プロンプトで<br />インポート', 'ファイルから<br />インポート', 'データ削除!!!', 'コミュニティに参加<br />(Discord)', 'クリエイターを<br />サポート(Boosty)'],

        'confirm-prestige': '転生',
        'confirm-core': '核',
        'confirm-humanoid': 'サメの進化',
        'confirm-black-hole': 'ブラックホールの形成',
        'confirm-sacrifice': 'サメの犠牲',
        'confirm-hadron': 'ハドロン化'
    }
};
