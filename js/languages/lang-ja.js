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
        'starter-upg-note': `注意: アップグレードを購入する度に価格が<b>倍</b>になります。最初のアップグレードを初回リセット後に行うことを<b>強く</b>お勧めします。`,

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
        新しい${toTextStyle('サメ', 'shark')}のアップグレードを開放します。`,

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
        'research-c7-desc': `'サメの歯'のエフェクトが<b>2.5乗</b>されます。`,

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
            'h7': [`最初の犠牲スケーリング`, `${toTextStyle('残骸', 'black-hole')}アップグレードの最初のスケーリングをなくします。${toTextStyle('残骸', 'black-hole')}アップグレードを開放します。`],
            'h8': [`強力な魚上限の改善`, `合計の${toTextStyle('基本粒子', 'hadron')}の効果をより改善します。`],
            'h9': [`ハドロン生成`, `<b>100%</b>の${toTextStyle('基本粒子', 'hadron')}を獲得します。`],
            'h10': [`インフレなんてナンセンス`, `すべての放射性ブーストのスケーリングをなくします。`],
            'h11': [`ランクをランクへ`, `最初の3つの${toTextStyle('サメ', 'shark')}ランクのスケーリングをなくします。`],
            'h12': [`星座の強化`, `${toTextStyle('ブラックホール', 'black-hole')}ティアの${toTextStyle('星座', 'star')}の資源へのブーストを改善します。`],

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
            'ge11': [`核酸塩基の強化II`, `シトシンとグアニンの2番目のブーストを改善します。`]
        },

        // Exploration

        'explore-while': `探索中`,
        'explore-inside': (a, b, c) => `資源獲得量<br>${a.format()}/s` + (b.gt(a) ? ' ➜ ' : ' ~ ') + `${b.format()}/s` + `.<br>${format(c, 0)}${toTextStyle('魚', 'fish')}に到達して獲得`,
        'explore-outside': x => `現在の基礎獲得量は<br>${x.format()}/秒<br><br>海洋を探索する！`,

        'explore-next': x => `次の海洋は${toTextStyle('サメ', 'shark')}レベル<h3>${format(x, 0)}</h3>で開放`,

        'explore-doubler-1': x => `${x}の獲得量を倍にする`,
        'explore-doubler-2': `水深の進捗を倍にする`,

        'explore-0-name': `太平洋`,
        'explore-0-desc': `${toTextStyle('魚', 'fish')}の獲得量を2乗根する。`,
        'explore-0-milestone': [
            `${toTextStyle('転生', 'prestige')}の破片の獲得量を1.05乗します。`,
             `平方根された${toTextStyle('サメ', 'shark')}レベルに基づいて、資源や水深の進歩を25%増加します。`,
             `${toTextStyle('サメ', 'shark')}レベルが増加しても${toTextStyle('魚', 'fish')}を消費しません。`,
             `${toTextStyle('魚', 'fish')}の獲得量を1.05乗します。`,
             `${toTextStyle('核', 'core')}を開放します。`
        ],

        'explore-1-name': `北極海`,
        'explore-1-desc': `${toTextStyle('転生', 'prestige')}の破片と${toTextStyle('転生', 'prestige')}アップグレードをリセットします。${toTextStyle('転生', 'prestige')}の破片の獲得量を2乗根します。`,
        'explore-1-milestone': [
            `自動${toTextStyle('転生', 'prestige')}アップグレードを開放する。`,
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

            ['列の開放1', x => `すべての1列目のアップグレードを購入できるようになります。`, x => `すべての1列目の強化されたアップグレードを購入できるようになります。`],
            ['列の開放2', x => `すべての2列目のアップグレードを購入できるようになります。`, x => `すべての2列目の強化されたアップグレードを購入できるようになります。`],
            ['列の開放3', x => `すべての3列目のアップグレードを購入できるようになります。`, x => `すべての3列目の強化されたアップグレードを購入できるようになります。`],
            ['列の開放4', x => `すべての4列目のアップグレードを購入できるようになります。`, x => `すべての4列目の強化されたアップグレードを購入できるようになります。`]
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
        'mining-tier-ore-unlock': x => `${x}鉱石を開放`,
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
            'anvil': ['金床ティア', '鍛治アップグレードを開放します。'],
            'drill': ['ドリルティア', '<b>石</b>の採掘量を増加させます。'],
            'shard': ['破片の精製', `${toTextStyle('転生', 'prestige')}の破片の獲得量を増加させます。`],
            'tree': ['素晴らしい木', `${toTextStyle('進化', 'humanoid')}ツリーの新しい行を開放します。`],
            'adv_research': ['高度な研究', `新しい研究を開放します。`],
            'auto': ['高度な自動化', `新しい自動化を開放します。`],
            'shark': ['遠隔サメレベル', `3番目の${toTextStyle('サメ', 'shark')}レベルのスケーリングを遅らせます。`],
            'refined_shard': ['精製された破片', `${toTextStyle('転生', 'prestige')}の破片の獲得量を増加させます。`],
            'wormhole': ['ワームホール', `新しい粒子加速器を開放します。`],
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
                [`1ブラックホール`, `${toTextStyle('残骸', 'black-hole')}を開放します。${toTextStyle('サメ', 'shark')}レベルは${toTextStyle('残骸', 'black-hole')}の生成量を増やします。`],
                [`2ブラックホール`, `リセット時に自動化が解放された状態を保持しますが、間隔はリセットされます。${toTextStyle('サメ', 'shark')}ランクは${toTextStyle('残骸', 'black-hole')}の生成量を増やします。`],
                [`3ブラックホール`, `リセット時に自動化、採掘以前の機能が解放された状態、10${toTextStyle('人型', 'humanoid')}のサメを保持します。新しい研究を開放します。`],
                [`4ブラックホール`, `${toTextStyle('進化', 'humanoid')}の目標が完了された状態を保持します。粒子加速器が10倍高速になります。探索のベースがリセット時に<b>1/s</b>に減少します。`],
                [`5ブラックホール`, `鉱石の体力の増加が小さくなります。新たな自動化を開放します。`],
                [`6ブラックホール`, `ブラックホールを形成するごとに、${toTextStyle('残骸', 'black-hole')}の生産量を2倍に増加させます。`],
                [`7ブラックホール`, `リセット時に採掘が解放された状態を維持します。`],
                [`8ブラックホール`, `${toTextStyle('ブラックホール', 'black-hole')}を8回形成しているとき、${toTextStyle('ブラックホール', 'black-hole')}による生産の減少が無効化されます。 ブラックホールを形成してもアニメーションが再生されません。新しい機能を開放します。`],

                [`合計1暗黒物質`, `リセット時に${toTextStyle('特異点', 'black-hole')}より前に開放された研究、${toTextStyle('進化', 'humanoid')}ツリー、鍛治を保持します。より多くの研究を開放します。`],
                [`合計10暗黒物質`, `自動で同時に全ての粒子加速器を起動します。`],
                [`合計${format(1e6)}暗黒物質`, `研究<b>s1-s3</b>を犠牲時に保持します。新しい自動化を開放します。残骸アップグレードは残骸を消費しなくなります。`],
                [`合計${format(1e12)}暗黒物質`, `新しい機能を開放します。`],
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
            sun: ['太陽', `太陽は太陽系の中心に位置する恒星です。主に水素とヘリウムによって構成されており、 地球や他の太陽系の惑星の光と熱の供給源です。また、光合成と気候条件をもたらすことで、地球上の生命の存在条件を作り出しています。直径は地球の109倍もの大きさで330000倍の質量を持っています。地球と太陽の距離は1.5億キロメートルであるため、太陽は小さく見えています。`, `次のレイヤーを開放します。${toTextStyle('サメの信仰', 'humanoid')}を2倍します。`],
            mercury: ['水星', `水星は太陽系で最も小さく、最も太陽に近い惑星です。天空で他の惑星より素早く動くことから、古代ローマの神にちなんで名づけられました。水星はクレーターに覆われ、外観が月と似ており、10億年にわたって内部の地質活動がほとんどなかったことを示しています。惑星は大気をほとんど持たず、表面温度は太陽系の他のどの惑星よりも大きく変動します。`, `最初の3つの放射性ブーストが10倍遅れます。${toTextStyle('観測記録', 'observ')}を10倍します。`],
            venus: ['金星',`金星は2番目に太陽から遠く、6番目に大きい惑星です。古代ローマの愛の女神にちなんで名前が付けられました。金星は大気のほとんどが二酸化炭素でできており、96%以上の割合にも及びます。金星の平均温度は735 K (462 °C)であり、太陽系で最も熱い惑星です。金星には天然の衛星がありません。地球の空では、太陽、月に次いで3番目に明るい天体です。`, `100%の${toTextStyle('人型', 'humanoid')}のサメがボーナスとして常時精製されるようになり、自動${toTextStyle('進化', 'humanoid')}が動作しなくなります。${toTextStyle('人型', 'humanoid')}のサメが劇的に改善され、3番目の${toTextStyle('サメ', 'shark')}ランクのスケーリングを2x遅らせます。${toTextStyle('観測記録', 'observ')}の生産量を10倍にします。`],
            earth: ['Earth', `???`, `???`],
            moon: ['月', `太陽系へようこそ!今、あなたは自由に惑星を探索できます。しかし、強力な報酬を得るには深い観測が必要です。特異点リセットを行い、いくつかの研究や進化ツリーをリセットします。(後ほど戻ってきます) ブラックホールによる生産量の減少は^0.5に固定され、探索が行えなくなり、採掘以降の機能は使えなくなります。${toTextStyle('観測記録','observ')}を宇宙基地で生成でき、進捗を速めてくれます。難易度が存在しますが、進捗に影響を与えるのではなく、宇宙基地での機能に影響を与えます。まずは月へと向かいましょう! この星はLunaと呼ばれていますが、衝突以前はThetaと呼ばれていました。`, `採掘アセンションや${toTextStyle('残骸', 'black-hole')}アップグレードを開放します。採掘アセンションは特異点リセットを行い、強力なボーナスや鉱石を提供します。`],
            mars: ['火星', `火星は太陽系で太陽から4番目に遠い惑星です。固体の地面を持ち地球との大きさが近い、地球型惑星の一つで、衝突クレーター、火山、峡谷、砂漠、極冠などの地形の特徴を持ちます。火星には水の浸食に似た地形や長期間の水との接触によって形成される鉱物などが存在します。火星に生命が存在するかの疑問は、数世紀にわたって科学者によって興味を持たれてきました。`, `${toTextStyle('進化', 'humanoid')}ツリーのテラフォーミングを通じて、より強力な効果を購入できるようになりますが、コストは大きいです。新しい自動化を開放します。${toTextStyle('観測記録', 'observ')}の生成量を10倍します。` ],
            jupiter: ['木星', `木星は最も大きく、太陽から5番目に大きい惑星であり、太陽系の他の全ての惑星の総質量より2.47倍多くガスを持つ気体惑星です。木星は古代より知られており、様々な宗教や神話で述べられています。惑星の名前は古代ローマの雷を司る神より名づけられました。木星の大気は嵐、雷、オーロラ、そして17世紀から知られている大きな渦、大赤斑などの数々の気象現象を特徴とします。`, `${toTextStyle('残骸', 'black-hole')}アップグレードを開放します。${toTextStyle('観測記録', 'observ')}の生成量を10倍します。`],
            saturn: ['土星', `土星は6番目に太陽から遠く、太陽系で2番目に大きい惑星です。土星は主に酸素やヘリウムで構成されているため、気体惑星に分類されています。惑星の名前は古代ローマの農業の神にちなんで名づけられました。土星は氷の粒子、重たい物質や塵からなる環をもっています。146もの既知の衛星を持ち、最も大きいものはタイタンと呼ばれています。また、惑星固有の磁場や特徴的な環を持っています。`, `新しい${toTextStyle('核', 'core')}融合炉の行を開放します。<i>これらの融合炉は進化によってリセットされませんが、${toTextStyle('残骸', 'black-hole')}アップグレードの“半生”に影響しません。</i>`],
            uranus: ['天王星', `天王星は太陽から7番目に遠い惑星です。1781年にイギリスの天文学者ウィリアム・ハーシェルによって発見され、ギリシャ神話の天空の神にちなんで名づけられました。天王星は望遠鏡の助けを借りて現代に発見された最初の惑星です。天王星は、太陽系で3番目に直径が大きく、4番目に質量が大きい惑星で、ほとんどが岩や氷と酸素、ヘリウム、メタンを含んだ大気で構成されています。天王星は環と28個の衛星を持っています。また、自転軸が横に傾いているため、太陽の周りを公転するときに北極と南極を交互に太陽に向けています。`, `${toTextStyle('サメ', 'shark')}の過剰繁殖がなくなります。${toTextStyle('サメの信仰', 'humanoid')}が2倍になります。`],
            neptune: ['海王星', `海王星は太陽から最も遠い惑星で、平均45億キロメートルほど離れています。海王星は巨大な惑星の一つで、地球の17倍の質量を持っています。直径の観点からみると、4番目に大きく、地球の3.9倍ほどです。海王星の大気は他の主要な惑星のガス層と類似しており、水素やヘリウムから構成されていて、メタン、水、アンモニア、およびその他の化合物が混入しています。最も寒い惑星の1つで平均気温は-200°C前後です。大気は他のどの惑星よりも強い風を持っています。`, `${toTextStyle('ブラックホール', 'black-hole')}を強化し、よりよい報酬を得るための${toTextStyle('星座', 'star')}を開放します。`],
            pluto: ['冥王星',`冥王星は最も太陽系で知られている準惑星で、太陽系外縁天体であり、太陽を公転する天体で8個の惑星とエリスに次いで10個目に質量の大きい惑星です。岩と氷から構成されており、月の6分の1の質量で3分の1の体積を持っています。冥王星は軌道離心率が大きく、黄道面に対する傾きが大きいです。これにより、太陽に最も近づいたときは29.7a.u.(天文単位)、最も離れたときは49.3a.u.の距離に位置します。`,`より多くの${toTextStyle('残骸', 'black-hole')}アップグレードを開放します。${toTextStyle('星座', 'star')}の資源はリセットされなくなります。`]
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
            [`銀河`, x => `最初の7つの${toTextStyle('星座', 'star')}資源が${x}されます。`, x => `効果がありません。`],
            [`銀河団`, x => `${toTextStyle('残骸', 'black-hole')}の獲得量の指数と${toTextStyle('暗黒物質', 'black-hole')}の獲得量の指数を${x}します。`, x => `効果がありません。`]
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
            [`サメティア`, `${toTextStyle('サメ', 'shark')}ランクに似た、より強力な${toTextStyle('サメ', 'shark')}ティアを開放します。${toTextStyle('サメ', 'shark')}ティアは${toTextStyle('サメ', 'shark')}${toTextStyle('IQ', 'hadron')}によって計算されます。`],
            [`自動太陽系`, `ロケットの部品の要求量に達したときに惑星を完了できるようになり、要求量が増えることもなくなります。`],
            [`無制限の転生アップグレード`, `最初の2つの${toTextStyle('転生', 'prestige')}アップグレードのエフェクトの上限が消えます。ただし、上限以降の効果は制限されます。`],
            [`即席鍛治 & 粒子加速器`, `鍛治はすぐに完了し、粒子加速器は超高速になります。`],
            [`採掘連続体`, `すべての鉱石は採掘しなくても、速度や幸運、解放条件に応じて生成されます。採掘画面は削除されます。`],
            [`遠隔残骸スケーリング`, `最初の${toTextStyle('残骸', 'black-hole')}アップグレードのスケーリングの開始位置を<b>100</b>から<b>1000</b>に送らせます。`],
            [`馬鹿げたリセットはいらない`, `8つの${toTextStyle('ブラックホール', 'black-hole')}とそれ以前の生産の開放を維持します。`],
            [`永遠の木`, `${toTextStyle('進化', 'humanoid')}ツリーは${toTextStyle('サメの信仰', 'humanoid')}を消費しなくなります。${toTextStyle('進化', 'humanoid')}ツリーの自動化を開放します。`]
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
                x => `${toTextStyle('基本粒子', 'hadron')}を${x}します。`,
            ]],
            'thymine': ['チミン', [
                x => `6-9番目の${toTextStyle('星座', 'star')}の資源は${x}強化されます。`,
                x => `銀河海洋のアップグレードのベースを${x}します。`,
                x => `<b>グアニン</b>のティアを${x}します。`
            ]]
        },
        'experience': '経験値',
        'next-at-experience': '次の経験値で1つ獲得',
        'nucleobase-boosts': '塩基のブースト',
        'experience-base': '経験値ベース',
        'nucleobase-tier': '塩基ティア',

        'gal-explore-ocean': `海洋を探索`,
        'gal-explore-inside': (x, y) => `<b>現在のスコア:</b> ${x}<br>${y} ${toTextStyle('魚', 'fish')}に到達。`,
        'gal-explore-require': x => `${toTextStyle('サメ', 'shark')}ティア${x}が解放に必要です。`,
        'gal-explore-upgrade': (x, y) => `${x}の生産量を${y}する。`,
        'gal-explore': [
            [
                `青く深い海`, `青い藻`,
                `${toTextStyle('マグマ', 'core')}の欠片の獲得量の指数^2は<b>0.5</b>乗されます。${toTextStyle('核', 'core')}の温度と${toTextStyle('放射線' + icon('radioactive'), 'core')}の生産量が<b>log(x)</b>になります。`,
                x => `${toTextStyle('マグマ', 'core')}の欠片の獲得量の指数と${toTextStyle('放射線' + icon('radioactive'), 'core')}の生産量を${x}します。`
            ],[
                `深海`, `生物発光物質`,
                `${toTextStyle('転生', 'prestige')}の破片のテトレーションが<b>半減</b>します。`,
                x => `${toTextStyle('転生', 'prestige')}の破片の生産量の指数を${x}します。`
            ],[
                `灰色の海`, `灰色のプランクトン`,
                `${toTextStyle('人型', 'humanoid')}のサメの指数を10乗根します。${toTextStyle('サメ', 'shark')}${toTextStyle('ELO', 'humanoid')}への倍数や指数が増加しなくなります。`,
                x => `${toTextStyle('サメ', 'shark')}${toTextStyle('ELO', 'humanoid')}への指数を${x}します。`
            ],[
                `腐敗した海`, `腐敗した残骸`,
                `${toTextStyle('残骸', 'black-hole')}の獲得量の指数^2と${toTextStyle('暗黒物質', 'black-hole')}の獲得量が平方根されます。`,
                x => `${toTextStyle('残骸', 'black-hole')}の獲得量の指数を${x}します。`
            ]
        ],

        // Automation

        'auto-shark-name': `自動${toTextStyle('サメ', 'shark')}レベル`,
        'auto-su-name': `自動${toTextStyle('魚', 'fish')}アップグレード`,
        'auto-spu-name': `自動${toTextStyle('転生', 'prestige')}アップグレード`,
        'auto-eu-name': `自動探索アップグレード`,
        'auto-core_reactor-name': `自動${toTextStyle('核', 'core')}融合炉`,
        'auto-core_radiation-name': `自動${toTextStyle('核', 'core')}放射線`,
        'auto-radioactive_boosts-name': `自動放射性ブースト`,
        'auto-mining_upgs-name': `自動採掘アップグレード`,
        'auto-humanoid-name': `自動${toTextStyle('進化', 'humanoid')}`,
        'auto-research-name': `自動研究(${toTextStyle('特異点', 'black-hole')}前)`,
        'auto-mining_tier-name': `自動採掘ティア`,
        'auto-remnant-name': `自動${toTextStyle('残骸', 'black-hole')}アップグレード`,
        'auto-faith-name': `自動${toTextStyle('サメの信仰', 'humanoid')}獲得`,

        'auto-sing_research-name': `自動研究(${toTextStyle('特異点', 'black-hole')})`,
        'auto-evolution_tree-name': `自動${toTextStyle('進化', 'humanoid')}ツリー`,
        'auto-rocket_part-name': `自動ロケットの部品作成`,
        'auto-mining_ascend-name': `自動採掘アセンション`,
        'auto-nucleobase-name': `自動核酸塩基`,

        'auto-cost': (D, cost, name) => `間隔を${formatReduction(D, 0)}短縮する。<br>コスト: ${format(cost, 0)} ${name}`,
        'auto-interval': (a, b, maxed) => `間隔: ${format(a, 3)}s` + (maxed ? '' : ` ➜ ${format(b, 3)}s`),

        // Progress

        'progress-0-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達`,
        get 'progress-0-cond-text'() { return `${toTextStyle('転生', 'prestige')}する`; },

        'progress-1-text': r => `${format(r)}${toTextStyle('転生', 'prestige')}の破片を獲得して自動化を開放`,
        'progress-2-text': r => `${format(r)}${toTextStyle('転生', 'prestige')}の破片を獲得して研究を開放`,
        'progress-3-text': r => `${toTextStyle('サメ', 'shark')}レベル${format(r, 0)}に到達して探索を開放`,
        'progress-4-text': r => `太平洋の水深${format(r)}mに到達して${toTextStyle('核', 'core')}を開放`,

        'progress-5-text': r => `合計${format(r)}${toTextStyle('転生', 'prestige')}の破片を獲得する`,
        get 'progress-5-cond-text'() { return `${toTextStyle('核', 'core')}リセットする`; },

        'progress-6-text': r => `${format(r)} ${toTextStyle('マグマ', 'core')}の欠片を獲得して次の${toTextStyle('核', 'core')}の機能を開放`,
        'progress-7-text': r => `${toTextStyle('サメ', 'shark')}レベル${format(r, 0)}に到達して新しい海洋を開放`,
        'progress-8-text': r => `${format(r)} ${toTextStyle('マグマ', 'core')}の欠片を獲得して次の${toTextStyle('核', 'core')}の機能を開放`,
        'progress-9-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達して新しい${toTextStyle('核', 'core')}融合炉を開放`,

        'progress-10-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達`,
        get 'progress-10-cond-text'() { return `${toTextStyle('サメ', 'shark')}を進化させる`; },

        'progress-11-text': r => `${format(r, 0)} ${toTextStyle('人型', 'humanoid')}のサメを獲得して次の${toTextStyle('進化', 'humanoid')}機能を開放`,
        'progress-12-text': r => `${format(r, 0)} ${toTextStyle('人型', 'humanoid')}のサメを獲得して次の${toTextStyle('進化', 'humanoid')}機能を開放`,
        'progress-13-text': r => `採掘ティア${format(r, 0)}に到達して新しい${toTextStyle('進化', 'humanoid')}ツリーの行を開放`,
        'progress-14-text': r => `採掘ティア${format(r, 0)}に到達して次の${toTextStyle('進化', 'humanoid')}機能を開放`,
        'progress-15-text': r => `採掘ティア${format(r, 0)}に到達して次の${toTextStyle('進化', 'humanoid')}機能を開放`,

        'progress-16-text': r => `${format(r, 0)}本の粒子加速器を満杯にする`,
        get 'progress-16-cond-text'() { return `${toTextStyle('ブラックホール', 'black-hole')}を形成`; },

        'progress-17-text': r => `${format(r, 0)} ${toTextStyle('ブラックホール', 'black-hole')}を形成`,

        'progress-18-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達`,
        get 'progress-18-cond-text'() { return `${toTextStyle('犠牲', 'black-hole')}を実行`; },

        'progress-19-text': r => `合計${format(r)}${toTextStyle('暗黒物質', 'black-hole')}に到達`,

        'progress-20-text': r => `合計${format(r)}${toTextStyle('魚', 'fish')}に到達`,
        get 'progress-20-cond-text'() { return `${toTextStyle('ハドロン化', 'hadron')}を実行`; },

        'progress-21-text': r => `合計${format(r, 0)}${toTextStyle('基本粒子', 'hadron')}に到達して次の要素を開放`,
        'progress-22-text': r => `合計${format(r)}${toTextStyle('基本粒子', 'hadron')}に到達して第3の核酸塩基を開放`,
        'progress-23-text': r => `${format(r, 0)}${toTextStyle('サメ', 'shark')}ティアに到達して次の要素を開放`,
        'progress-24-text': r => `合計${format(r)}${toTextStyle('基本粒子', 'hadron')}に到達して第4の核酸塩基を開放`,

        'maxed-progress': '全ての機能が解放されました!',

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('転生', 'prestige'), s = toTextStyle('サメ', 'shark'), f = toTextStyle('魚', 'fish');
            return `
            <h3>${p}</h3><br>
            ${p}は最初のリセットレイヤーです。転生をすると、${s}、${s}のアップグレードをリセットし、${f}を${p}の欠片に変換します。
            最初の${p}は新しい${s}アップグレードを開放します<br>
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
            また、${toTextStyle('サメ', 'shark')}ランクや${e}ツリーを開放します。<br>
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
            サメが全宇宙を超越する存在にすると、${c}が行うリセットに加え、暗黒物質、犠牲アップグレード、ロケットの部品を含む太陽系、ブラックホールティア、星座の資源、特異点マイルストーン、採掘アセンション、鉱石、特異点以降の研究をすべてリセットします。その代わりに、${toTextStyle('基本粒子', 'hadron')}を手に入れ、アップグレード、自動化、研究を開放します。<br>
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
            'bh_tier': `ブラックホールティア`
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
            nucleobase: x => `${x} 核酸塩基の経験値`
        },

        'amount': '個数',
        'total': '合計',
        'level': 'レベル',
        'effect': '効果',
        'cost': 'コスト',
        'buyMax': '最大',
        'require': '要求量',
        'next-at': '次:',
        'depth': '水深',
        'reward': '報酬',
        'new-preset': '新規プリセット',
        'maxed': '最大',
        'difficulty': '難易度',
        'score': 'スコア',

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
            'starter-upgrade-warning': `本当にそのアップグレードを購入しますか?初回は<b>"サメティア"</b>がおすすめです!`
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
            'notify': ['タブ通知', ['無効', '有効']]
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
