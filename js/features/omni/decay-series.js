const DECAY_CHAIN = [
    { // 0
        unl: () => true,
        symbols: ['Pb',207,82],
        pos: [2,5],

        cost: x => x.pow_base(2),
        bulk: x => x.log(2),

        boost: [
            [1,0,(x,y)=>x.add(1).log10().mul(y).add(1).log10().div(4).mul(ISOTOPES.boost(4,0)),x=>"+"+format(x,3)],
            [10,0,(x,y)=>x.add(1).log10().mul(y).div(100).mul(ISOTOPES.boost(4,0)),x=>"+"+formatPercent(x)],
        ],
    },{
        unl: () => player.omni.tier.gte(22),
        symbols: ['Ti',207,81],
        pos: [1,4],
        target: [[0,1,1]],
        half: 4.7*60,

        cost: x => x.pow_base(3).mul(1e3),
        bulk: x => x.div(1e3).log(3),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).div(10).add(1),x=>formatPow(x,3)],
        ],
    },{
        unl: () => player.omni.tier.gte(24),
        symbols: ['Po',211,84],
        pos: [4,5],
        target: [[0,0,1]],
        half: .5,

        cost: x => x.pow_base(3).mul(1e20),
        bulk: x => x.div(1e20).log(3),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).div(100).add(1),x=>formatPow(x,3)],
        ],
    },{
        unl: () => player.omni.tier.gte(23),
        symbols: ['Bi',211,83],
        pos: [3,4],
        target: [[1,0,.9972],[2,1,.0028]],
        half: 2.1*60,

        cost: x => x.pow_base(4).mul(1e6),
        bulk: x => x.div(1e6).log(4),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).div(10).add(1),x=>formatPercent(Decimal.sub(x,1))],
            [10,1,(x,y)=>x.add(1).log10().mul(y).div(50).add(1).root(2),x=>formatPercent(Decimal.sub(x,1))],
            [125,1,(x,y)=>x.add(1).log10().mul(y).div(100).add(1).softcap(100,ISOTOPES.boost(4,1),0),x=>formatPercent(Decimal.sub(x,1))],
        ],
    },{
        unl: () => player.omni.tier.gte(25),
        symbols: ['Pb',211,82],
        pos: [2,3],
        target: [[3,1,1]],
        half: 36.1*60,

        cost: x => x.pow_base(1e3).mul(1e27),
        bulk: x => x.div(1e27).log(1e3),

        boost: [
            [1,1,(x,y)=>{
                let e = 1
                for (let i = 0; i < 5; i++) e *= ISOTOPES.boost(5,i);
                return x.add(1).log10().mul(y).add(1).log10().div(10).add(1).pow(e)
            },x=>formatPercent(Decimal.sub(x,1))],
        ],
    },{ // 5
        unl: () => player.omni.tier.gte(26),
        symbols: ['At',215,85],
        pos: [5,4],
        target: [[3,0,1]],
        half: 1e-4,

        cost: x => x.pow_base(1e4).mul(1e48),
        bulk: x => x.div(1e48).log(1e4),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).mul(.2).add(1).root(4),x=>formatPow(x,3)],
        ],
    },{
        unl: () => player.omni.tier.gte(27),
        symbols: ['Po',215,84],
        pos: [4,3],
        target: [[4,0,.999],[5,1,.001]],
        half: 1.8e-3,

        cost: x => x.pow_base(1e2).mul(1e64),
        bulk: x => x.div(1e64).log(1e2),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).add(1).pow(2),x=>format(x,3)],
        ],
    },{
        unl: () => player.omni.tier.gte(28),
        symbols: ['Bi',215,83],
        pos: [3,2],
        target: [[6,1,1]],
        half: 7.7 * 60,

        cost: x => x.pow_base(1e10).mul(1e100),
        bulk: x => x.div(1e100).log(1e10),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).div(5).add(1).sqrt(),x=>formatPercent(Decimal.sub(x,1))],
            [15,0,(x,y)=>1,x=>'???'],
        ],
    },{
        unl: () => player.omni.tier.gte(29),
        symbols: ['Rn',219,86],
        pos: [6,3],
        target: [[6,0,1]],
        half: 4,

        cost: x => x.pow_base(1e10).mul(1e300),
        bulk: x => x.div(1e300).log(1e10),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).add(1).log10().div(10).add(1),x=>formatPow(x,3)],
        ],
    },{
        unl: () => player.omni.tier.gte(30),
        symbols: ['At',219,85],
        pos: [5,2],
        target: [[7,0,.5],[8,1,.5]],
        half: 56,

        cost: x => x.pow_base(1e50).mul('1e500'),
        bulk: x => x.div('1e500').log(1e50),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).div(10).add(1).log10().add(1),x=>formatPow(x,3)],
            [10,1,(x,y)=>x.add(1).log10().mul(y).add(1).log10().div(10).mul(ISOTOPES.boost(4,3)).add(1),x=>formatPow(x,3)],
        ],
    },{ // 10
        unl: () => player.omni.tier.gte(32),
        symbols: ['Ra',223,88],
        pos: [8,3],
        target: [[8,0,1]],
        half: 11.4 * 86400,

        cost: x => x.pow_base(1e10).mul('1e1500'),
        bulk: x => x.div('1e1500').log(1e10),

        boost: [
            [1,1,(x,y)=>x.pow(y),x=>format(x)],
        ],
    },{
        unl: () => player.omni.tier.gte(31),
        symbols: ['Fr',223,87],
        pos: [7,2],
        target: [[9,0,.001],[10,1,.999]],
        half: 21.8 * 60,

        cost: x => x.pow_base(1e100).mul('1e900'),
        bulk: x => x.div('1e900').log(1e100),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).add(1).log10().div(10).add(1).cbrt(),x=>formatPow(x,3)],
        ],
    },{
        unl: () => player.omni.tier.gte(35),
        symbols: ['Th',227,90],
        pos: [10,3],
        target: [[10,0,1]],
        half: 18.7 * 86400,

        cost: x => x.pow_base(1e100).mul('1e2000'),
        bulk: x => x.div('1e2000').log(1e100),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).add(1).log10().div(25).add(1).cbrt(),x=>formatPow(x,3)],
        ],
    },{
        unl: () => player.omni.tier.gte(33),
        symbols: ['Ac',227,89],
        pos: [9,2],
        target: [[11,0,.0138],[12,1,.9862]],
        half: 21.7 * 365 * 86400,

        cost: x => x.pow_base(1e100).mul('1e1600'),
        bulk: x => x.div('1e1600').log(1e100),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).add(1).log10().div(5).add(1).sqrt(),x=>formatPercent(Decimal.sub(x,1))],
        ],
    },{
        unl: () => player.omni.tier.gte(36),
        symbols: ['Pa',231,91],
        pos: [11,2],
        target: [[13,0,1]],
        half: 32760 * 365 * 86400,

        cost: x => x.pow_base(1e100).mul('1e2800'),
        bulk: x => x.div('1e2800').log(1e100),

        boost: [
            [1,1,(x,y)=>x.add(1).log10().mul(y).div(10).add(1).sqrt(),x=>formatPercent(Decimal.sub(x,1))],
            [39,0,(x,y)=>1,x=>'???'],
        ],
    },{ // 15
        unl: () => player.omni.tier.gte(38),
        symbols: ['Th',231,90],
        pos: [10,1],
        target: [[14,1,1]],
        half: 25.5 * 3600,

        cost: x => x.pow_base(1e200).mul('1e9800'),
        bulk: x => x.div('1e9800').log(1e200),

        boost: [
            [1,1,(x,y)=>expPow(x.add(10).pow(y), 0.75).overflow(1e20,1/3),x=>formatMult(x)],
        ],
    },{
        unl: () => player.omni.tier.gte(39),
        symbols: ['U',235,92],
        pos: [12,1],
        target: [[15,0,1]],
        half: 7.04e8 * 365 * 86400,

        cost: x => x.pow_base(1.05).pow_base('e18000'),
        bulk: x => x.log('e18000').log(1.05),

        boost: [
            [1,0,(x,y)=>y.pow(2).pow10(),x=>format(x,0)],
        ],
    },
]
var choosedDecaySeries = null

function getDecaySeriesCost(i,x) {
    x = x.scaleAll('decay_series')

    return DECAY_CHAIN[i].cost(x).ceil()
}

function getDecaySeriesBulk(i,x) {
    x = DECAY_CHAIN[i].bulk(x)

    x = x.scaleAll('decay_series',true)

    return x.floor().add(1)
}

function purchaseAllDecaySeries() {
    for (let i = 0; i < DECAY_CHAIN.length; i++) purchaseDecaySeries(i, true);
}

function chooseDecaySeries(i) {
    if (choosedDecaySeries !== i) {
        const x = DECAY_CHAIN[i]

        el('decay-table').style.display = el_display('target' in x);

        if ('target' in x) {
            const t = x.target

            let y = DECAY_CHAIN[t[0][0]]

            let h = `<tr><td><supsub><sup>${x.symbols[1]}</sup><sub>${x.symbols[2]}</sub></supsub>${x.symbols[0]}</td><td>→ <supsub><sup>${y.symbols[1]}</sup><sub>${y.symbols[2]}</sub></supsub>${y.symbols[0]} + ${DECAY_PARTICLES[t[0][1]]}</td><td>(${formatTime(x.half,1)})</td></tr>`

            for (let i = 1; i < t.length; i++) {
                y = DECAY_CHAIN[t[i][0]]

                h += `<tr><td></td><td>→ <supsub><sup>${y.symbols[1]}</sup><sub>${y.symbols[2]}</sub></supsub>${y.symbols[0]} + ${DECAY_PARTICLES[t[i][1]]}</td></tr>`
            }

            el('decay-table').innerHTML = h
        }
    } else purchaseDecaySeries(i, true);

    choosedDecaySeries = i;

    updateDecaySeriesHTML()
}

const DECAY_PARTICLES = [`α`,'β<sup>-</sup>']
const DECAY_PARTICLES_EFFECT = [
    ['alpha',x=>expPow(x.add(1),.5).pow(decaySeriesEffect(9,1)),x=>formatMult(x)],
    ['beta',x=>x.add(1).log10().pow(.5).pow_base(2).mul(x.add(10).log10()),x=>formatMult(x)],
    ['gamma-ray',x=>x.add(10).log10().log10().add(1).sqr(),x=>formatPow(x,3)],
    ['barium',x=>x.add(10).log10().pow(2),x=>formatPow(x)],
    ['krypton',x=>x.add(10).log10(),x=>formatPow(x)],
    ['energy',x=>expPow(x.add(1),.8),x=>formatMult(x),202.5],
]

function updateDecaySeriesTemp() {
    tmp.omni.paticles_gain = [E(0),E(0),E(0),E(0),E(0),E(0)]

    let e1 = decaySeriesEffect(7,0), e1a = decaySeriesEffect(7,1), e2 = decaySeriesEffect(14,0), e2a = decaySeriesEffect(14,1)

    for (let i = 0; i < DECAY_CHAIN.length; i++) {
        tmp.omni.decay_nucleus_gain[i] = E(0);
        const x = DECAY_CHAIN[i], t = tmp.omni.decay_series_effects[i], c = player.omni.decay_series[i];
        for (let j = 0; j < x.boost.length; j++) {
            const y = x.boost[j];

            var a = c[0].add(1).sub(y[0])

            if (i < 4) a = a.mul(e1);
            else if (i < 7) a = e1a ? Decimal.mul(e1, e1a).mul(a) : a;
            else if (i < 10) a = a.mul(e2);
            else if (i < 13) a = e2a ? Decimal.mul(e2, e2a).mul(a) : a;

            t[j] = c[0].gte(y[0]) ? y[2](c[1],a) : y[1];
        }
        if (c[0].gte(1) && 'target' in x) for (y of x.target) if (player.omni.decay_series[y[0]][0].gte(1)) {
            let gain = c[1].div(x.half ?? 1).mul(y[2])
            tmp.omni.decay_nucleus_gain[y[0]] = gain.add(tmp.omni.decay_nucleus_gain[y[0]]);
            tmp.omni.paticles_gain[y[1]] = gain.add(tmp.omni.paticles_gain[y[1]]);
        }
    }

    var yield = Decimal.mul(tmp.speed, getCondenserBonus(2)).mul(tmp.omni.particles_effect[5] ?? 1)

    for (let i = 0; i < DECAY_CHAIN.length; i++) tmp.omni.decay_nucleus_gain[i] = tmp.omni.decay_nucleus_gain[i].mul(yield).mul(tmp.global_mult);
    tmp.omni.decay_nucleus_gain[16] = Decimal.mul(decaySeriesEffect(16,0), tmp.speed).add(tmp.omni.decay_nucleus_gain[16])

    if (player.omni.fission) for (let i = 2; i < 6; i++) tmp.omni.paticles_gain[i] = tmp.omni.paticles_gain[i].add(player.omni.decay_series[16][1]);

    for (let i = 0; i < DECAY_PARTICLES_EFFECT.length; i++) {
        tmp.omni.paticles_gain[i] = tmp.omni.paticles_gain[i].mul(DECAY_PARTICLES_EFFECT[i][3] ?? 1).mul(tmp.global_mult);
        if (i < 2) tmp.omni.paticles_gain[i] = tmp.omni.paticles_gain[i].mul(yield).pow(tmp.omni.particles_effect[2] ?? 1);
        tmp.omni.particles_effect[i] = DECAY_PARTICLES_EFFECT[i][1](player.omni.particles[i]);
    }
}
function decaySeriesEffect(i,j) { return tmp.omni.decay_series_effects[i][j] }
function startFission() {
    if (!player.omni.fission && player.omni.decay_series[16][1].gte(1)) player.omni.fission = true;
}

function tickDecaySeries(dt) {
    if (player.feature < 30) return;
    
    for (let i = 0; i < DECAY_CHAIN.length; i++) {
        const C = player.omni.decay_series[i]; // [level, nucleus]

        if (C[0].lt(1)) continue;

        C[1] = C[1].add(tmp.omni.decay_nucleus_gain[i].mul(dt));
    }

    for (let i = 0; i < DECAY_PARTICLES_EFFECT.length; i++) player.omni.particles[i] = player.omni.particles[i].add(tmp.omni.paticles_gain[i].mul(dt));
}

function purchaseDecaySeries(i, m=false) {
    const x = DECAY_CHAIN[i], C = player.omni.decay_series[i];
    let cost;

    if (x.unl() && player.omni.nucleus.gte(cost = getDecaySeriesCost(i,C[0]))) {
        let bulk = C[0].add(1);

        if (m) {
            bulk = bulk.max(getDecaySeriesBulk(i,player.omni.nucleus));
            cost = getDecaySeriesCost(i,bulk.sub(1));
        };

        if (player.omni.tier.lt(30)) player.omni.nucleus = player.omni.nucleus.sub(cost).max(0);

        C[1] = bulk.sub(C[0]).add(C[1]);
        C[0] = bulk;
    }
}

var DS_canvas, DS_ctx;

function setupDecaySeriesHTML() {
    let h = `<canvas id="decay-chain-canvas"></canvas>`

    DECAY_CHAIN.forEach((x,i) => {
        h += `<button class="decay-chain-btn omni locked" id="decay-chain-btn-${i}" style="grid-column: ${x.pos[1]}; grid-row: ${x.pos[0]};" onclick="chooseDecaySeries(${i});"><div id="decay-chain-${i}-level">Level ???</div><div class="decay-chain-element"><supsub><sup>${x.symbols[1]}</sup><sub>${x.symbols[2]}</sub></supsub>${x.symbols[0]}</div><div id="decay-chain-${i}-amount">???</div></button>`
    })

    el('decay-chain').innerHTML = h

    DS_canvas = el('decay-chain-canvas')
    DS_ctx = DS_canvas.getContext('2d')

    DS_canvas.width = 100 + 110 * 4
    DS_canvas.height = 100 + 110 * 11
}

function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

const CONST_DCB_DIAGONAL = 25 + 25 / Math.sqrt(2)

function updateDecaySeriesHTML() {
    DS_ctx.clearRect(0, 0, DS_canvas.width, DS_canvas.height)

    DS_ctx.lineWidth = 2
    DS_ctx.strokeStyle = '#fff'

    DS_ctx.beginPath();

    for (let i = 0; i < DECAY_CHAIN.length; i++) {
        const x = DECAY_CHAIN[i], elem = el(`decay-chain-btn-${i}`), unl = x.unl();

        elem.style.display = el_display(unl)

        if (!unl) continue;

        if ('target' in x) {
            const [y0, x0] = x.pos

            for (const t of x.target) {
                const y = DECAY_CHAIN[t[0]], [y1, x1] = y.pos;
                
                if (y.unl()) switch (t[1]) {
                    case 0:
                        canvas_arrow(DS_ctx, 110 * x0 - 60, 110 * y0 - 110, 110 * x1 - 60, 110 * y1 - 10);
                        break;
                    case 1:
                        canvas_arrow(DS_ctx, 110 * x0 - 60 + CONST_DCB_DIAGONAL, 110 * y0 - 60 + CONST_DCB_DIAGONAL, 110 * x1 - 60 - CONST_DCB_DIAGONAL, 110 * y1 - 60 - CONST_DCB_DIAGONAL);
                        break;
                }
            }
        }

        elem.className = el_classes({
            'decay-chain-btn': true,
            'omni': true,
            'locked': getDecaySeriesCost(i, player.omni.decay_series[i][0]).gt(player.omni.nucleus),
        })

        el('decay-chain-' + i + '-level').innerHTML = lang_text('level')+": "+format(player.omni.decay_series[i][0],0);
        el('decay-chain-' + i + '-amount').innerHTML = format(player.omni.decay_series[i][1],0);
    }

    DS_ctx.stroke();

    el('decay-chain-description').style.display = el_display(choosedDecaySeries !== null)

    const TEXTS = {
        boosts: lang_text('decay-series-boosts'),
        elem: lang_text('full-element-name'),
        require: lang_text('require'),
    }

    if (choosedDecaySeries !== null) {
        const x = DECAY_CHAIN[choosedDecaySeries], C = player.omni.decay_series[choosedDecaySeries]

        el('decay-chain-title').textContent = TEXTS.elem[x.symbols[2]] + '-' + x.symbols[1];
        el('decay-chain-amount').innerHTML = lang_text('amount')+": "+format(C[1],0)
        +(tmp.omni.decay_nucleus_gain[choosedDecaySeries].gt(0) ? " " + formatGain(C[1],tmp.omni.decay_nucleus_gain[choosedDecaySeries]) : "");
        el('decay-chain-level').innerHTML = lang_text('level')+": "+format(C[0],0);

        var cost = getDecaySeriesCost(choosedDecaySeries, C[0])

        el('decay-chain-cost').innerHTML = lang_text('cost')+": "+format(cost,0)+" "+CURRENCIES.nucleus.costName;
        el('decay-chain-cost').className = el_classes({
            'omni': true,
            'big-btn': true,
            locked: player.omni.nucleus.lt(cost),
        })

        let h = ""

        for (let i = 0; i < x.boost.length; i++) {
            const y = x.boost[i];
            h += `<li>${C[0].gte(y[0]) ? TEXTS.boosts[choosedDecaySeries][i](toColoredText(y[3](tmp.omni.decay_series_effects[choosedDecaySeries][i]),'lime')) : `[${TEXTS.require}: <b>${format(y[0],0)}</b>]`}</li>`
        }

        el('decay-chain-boosts').innerHTML = h
    }
}

function updateDecayParticlesHTML() {
    el('uranium-235-fission').style.display = el_display(!player.omni.fission && player.omni.tier.gte(39))

    DECAY_PARTICLES_EFFECT.forEach((x,i) => {
        let t = `${x[0]}-particle`

        el(t+'-div').style.display = el_display(i < 2 || player.omni.fission)

        el(t+'-amount').innerHTML = format(player.omni.particles[i],0);
        el(t+'-gain').innerHTML = formatGain(player.omni.particles[i],tmp.omni.paticles_gain[i]);

        el(t+'-effect').innerHTML = x[2](tmp.omni.particles_effect[i]);
    })
}