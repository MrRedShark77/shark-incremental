const STARTER_UPGRADES_ON_PURCHASE = [
    null,
    null,
    null,
    null,
    null,
    null,
    ()=>{
        player.singularity.bh = E(8)
        player.research.dm1 = E(8)
        player.research.r3 = E(1)
        player.research.t3 = E(1)
    },
    null,
]

const STARTER_UPGRADES_LENGTH = 8

function buyStarterUpgrade(i) {
    let cost = 2**player.hadron.starter_upgs.length

    let success = ()=>{
        player.hadron.amount = player.hadron.amount.sub(cost).max(0)
        player.hadron.starter_upgs.push(i)
        if (STARTER_UPGRADES_ON_PURCHASE[i]) STARTER_UPGRADES_ON_PURCHASE[i]();
    }

    if (player.hadron.amount.gte(cost) && !player.hadron.starter_upgs.includes(i)) {
        if (!player.hadron.starter_upgs.includes(0) && i > 0) createConfirmationPopup(lang_text('popup-desc')['starter-upgrade-warning'],success);
        else success();
    }
}

function updateStarterUpgradesHTML() {
    el('total-fundamental').textContent = player.hadron.total.format(0)
    el('fundamental-effect').textContent = tmp.fish_cap.format(0)

    let len = player.hadron.starter_upgs.length, text = [lang_text('cost'),lang_text('purchased')], cost = 2**len
    for (let i = 0; i < STARTER_UPGRADES_LENGTH; i++) {
        let el_id = `starter-upgrade-${i}`

        el(el_id + '-div').className = el_classes(player.hadron.starter_upgs.includes(i) ? {bought: true} : {locked: player.hadron.amount.lt(cost)})
        el(el_id + '-cost').innerHTML = player.hadron.starter_upgs.includes(i) ? `<b>${text[1]}</b>` : `<b>${text[0]}:</b> ${format(cost,0)} ${CURRENCIES.hadron.costName}`
    }
}

const NUCLEOBASES = {
    calc(x,gain,exp) {
        if (exp.lte(0)) return x
        return x.max(0).root(exp).add(gain).pow(exp)
    },

    get_cost(id,type,x) {
        x = x.scale(125,2,"ME2").scale(10,2,"P")

        return this.ctn[id][type].cost(x)
    },
    get_bulk(id,type,y) {
        let x = this.ctn[id][type].bulk(y)

        x = x.scale(10,2,"P",true).scale(125,2,"ME2",true)

        return x.add(1).floor()
    },

    get_require(id,x) {
        x = x.add(1)

        return this.ctn[id].exp_req(x)
    },
    get_amount(id,y) {
        let x = this.ctn[id].exp_bulk(y)

        return x.floor()
    },

    ctn: {
        'cytosine': {
            unl: ()=>true,

            exp_req: x => x.sumBase(1.01).pow_base(2).mul(5),
            exp_bulk: x => x.div(5).max(1).log(2).sumBase(1.01,true),

            base: {
                slog: Decimal.slog('ee1e18',10),
                cost(x) { return Decimal.tetrate(10,x.mul(.01).add(this.slog)) },
                bulk(x) { return x.slog(10).sub(this.slog).div(.01) },
                currency: "fish",
            },
            tier: {
                cost(x) { return x.pow(1.25).pow_base(3).ceil() },
                bulk(x) { return x.log(3).root(1.25) },
            },

            effect: [
                [1, 1, y => y.pow_base(1.5).mul(y.pow(2).add(1)), x => formatMult(x)],
                [10, 1, y => [y.root(2).pow_base(1.1).mul(y.mul(.1).add(1)),y.add(1).log10().div(25).add(1)], x => formatMult(x[0]) + (hasResearch('ge11') ? ", " + formatPow(x[1]) : "")],
                [50, 1, y => y.pow_base(1.1), x => formatPow(x)],
                [150, 1, y => y.pow_base(1.01), x => formatPow(x,3)],
                [300, 1, y => y.pow_base(1.1).mul(y.add(1)), x => formatMult(x)],
                [500, 1, y => y.div(10).add(1), x => formatMult(x)],
            ],
        },
        'guanine': {
            unl: ()=>true,

            exp_req: x => x.sumBase(1.01).pow_base(2).mul(5),
            exp_bulk: x => x.div(5).max(1).log(2).sumBase(1.01,true),

            base: {
                slog: Decimal.slog('ee1e24',10),
                cost(x) { return Decimal.tetrate(10,x.mul(.01).add(this.slog)) },
                bulk(x) { return x.slog(10).sub(this.slog).div(.01) },
                currency: "prestige",
            },
            tier: {
                cost(x) { return x.pow(1.25).pow_base(3.5).mul(1000).ceil() },
                bulk(x) { return x.div(1000).log(3.5).root(1.25) },
            },

            effect: [
                [1, 0, y => y.mul(.01), x => "+"+format(x)],
                [10, 1, y => [y.root(2).pow_base(1.1).mul(y.mul(.1).add(1)),y.add(1).log10().div(25).add(1)], x => formatMult(x[0]) + (hasResearch('ge11') ? ", " + formatPow(x[1]) : "")],
                [50, 1, y => y.pow_base(1.1), x => formatPow(x)],
                [150, 1, y => y.root(2).mul(.1).add(1), x => "+"+formatPercent(x.sub(1))],
                [300, 1, y => y.add(1).pow(researchEffect('ge2')), x => formatMult(x)],
                [500, 1, y => y.add(1).cbrt(), x => formatPow(x,3)],
            ],
        },
        'adenine': {
            unl: ()=>player.feature>=23,

            exp_req: x => x.sumBase(1.01).pow_base(4).mul(25),
            exp_bulk: x => x.div(25).max(1).log(4).sumBase(1.01,true),

            base: {
                slog: Decimal.slog('ee1e63',10),
                cost(x) { return Decimal.tetrate(10,x.mul(.01).add(this.slog)) },
                bulk(x) { return x.slog(10).sub(this.slog).div(.01) },
                currency: "core",
            },
            tier: {
                cost(x) { return x.pow(1.25).pow_base(1e50).mul('1e1000').ceil() },
                bulk(x) { return x.div('1e1000').log(1e50).root(1.25) },
            },

            effect: [
                [1, 0, y => y.root(2).mul(.1), x => "+"+format(x,3)],
                [25, 1, y => y.log10().add(1).pow(-1), x => formatReduction(x,3)],
                [100, 0, y => y, x => "+"+format(x,0)],
                [250, 1, y => y.add(1).log10().div(150).add(1), x => "+"+formatPercent(x.sub(1),3)],
                [350, 1, y => y.add(10).log10(), x => formatPow(x,3)],
            ],
        },
        'thymine': {
            unl: ()=>player.feature>=25,

            exp_req: x => x.sumBase(1.01).pow_base(4).mul(2.5e6),
            exp_bulk: x => x.div(2.5e6).max(1).log(4).sumBase(1.01,true),

            base: {
                slog: Decimal.slog('ee1e8',10),
                cost(x) { return Decimal.tetrate(10,x.mul(.01).add(this.slog)) },
                bulk(x) { return x.slog(10).sub(this.slog).div(.01) },
                currency: "remnants",
            },
            tier: {
                cost(x) { return x.pow(1.25).pow_base('e6.5e4').mul('e1e6').ceil() },
                bulk(x) { return x.div('e1e6').log('e6.5e5').root(1.25) },
            },

            effect: [
                [1, 1, y => y.mul(.2).add(1).root(2), x => "+"+formatPercent(x.sub(1),3)],
                [25, 0, y => y.root(2).mul(.1), x => "+"+format(x,3)],
                [100, 0, y => y, x => "+"+format(x,0)],
            ],
        },
    },
}

function buyNucleobaseUpgrade(id,type) {
    let n = NUCLEOBASES.ctn[id]

    if (!n.unl()) return;

    let amt = player.hadron.nucleobases[id].upg[type], si = ['base','tier'][type], cost = NUCLEOBASES.get_cost(id,si,amt), res = si == 'base' ? CURRENCIES[n.base.currency] : player.hadron

    if (res.amount.gte(cost)) {
        let bulk = NUCLEOBASES.get_bulk(id,si,res.amount)

        if (bulk.gt(amt)) cost = NUCLEOBASES.get_cost(id,si,bulk.sub(1));
        else bulk = amt.add(1)

        if (si != 'base') res.amount = res.amount.sub(cost).max(0);

        player.hadron.nucleobases[id].upg[type] = bulk
    }
}

function getNucleobaseEffect(id,i,def=1) { return tmp.nucleobases[id].effect[i] ?? def }

function updateNucleobasesHTML() {
    let text = {
        nucleobases: lang_text('nucleobases'),

        base: lang_text('experience-base'),
        tier: lang_text('nucleobase-tier'),

        cost: lang_text('cost'),
        require: lang_text('require'),
    }

    for (let [id,n] of Object.entries(NUCLEOBASES.ctn)) {
        let unl = n.unl(), el_id = `nucleobase-${id}`

        el(el_id + '-div').style.display = el_display(unl)

        if (unl) {
            let data = player.hadron.nucleobases[id], n_tmp = tmp.nucleobases[id]
            let amt = data.amount, exp = data.experience

            el(el_id + '-tier').textContent = n_tmp.tier.format(0)

            el(el_id + '-amount').textContent = amt.format(0)
            el(el_id + '-exp').textContent = exp.format(0) + ' ' + formatGain(exp, NUCLEOBASES.calc(exp,n_tmp.exp_gain.div(FPS),n_tmp.tier).sub(exp).mul(FPS))
            el(el_id + '-next').textContent = NUCLEOBASES.get_require(id,amt).format(0)

            for (let s = 0; s < 2; s++) {
                let si = ['base','tier'][s], l = data.upg[s], cost = NUCLEOBASES.get_cost(id,si,l)

                el(el_id + '-upgrade-' + si).innerHTML = `${text[si]}: ${toColoredText(si == 'base' ? '+' + format(n_tmp.base_mult) : format(l,0),'lime')}<br>${text.cost}: ${format(cost,0)} ${si == 'base' ? CURRENCIES[n.base.currency].costName : CURRENCIES.hadron.costName}`

                el(el_id + '-upgrade-' + si).className = el_classes({'explore-cost': true, locked: (si == 'base' ? CURRENCIES[n.base.currency].amount : player.hadron.amount).lt(cost)})
            }

            for (let i = 0; i < n.effect.length; i++) {
                let e = n.effect[i]

                el(el_id + '-boost-' + i).innerHTML = amt.gte(e[0]) ? text.nucleobases[id][1][i](toColoredText(e[3](n_tmp.effect[i]),'lime')) : `[${text.require}: <b>${format(e[0],0)}</b>]`
            }
        }
    }
}

function updateHadronTemp() {
    let mult1 = getSharkTierBonus('nucleobase')

    for (let [id,n] of Object.entries(NUCLEOBASES.ctn)) {
        let unl = n.unl(), data = player.hadron.nucleobases[id], n_tmp = tmp.nucleobases[id]

        n_tmp.base_mult = data.upg[0].pow_base(2)
        n_tmp.exp_gain = n_tmp.base_mult.mul(mult1)

        let bonus = E(0)

        if (id == "cytosine") bonus = bonus.add(getNucleobaseEffect("adenine",2,0));
        if (id == "guanine") bonus = bonus.add(getNucleobaseEffect("thymine",2,0));

        n_tmp.tier = data.upg[1].add(bonus)

        for (let i = 0; i < n.effect.length; i++) {
            let a = data.amount, e = n.effect[i]

            n_tmp.effect[i] = a.gte(e[0]) ? e[2](a.sub(e[0]).add(1)) : e[1]
        }
    }
}

function setupHadronHTML() {
    let h = "", text = lang_text('starter-upgrades')

    for (let i = 0; i < STARTER_UPGRADES_LENGTH; i++) {
        h += `
        <button id="starter-upgrade-${i}-div" onclick="buyStarterUpgrade(${i})">
            <div class="starter-upg-title">${text[i][0]}</div>
            <br class="line">
            <div class="starter-upg-desc">${text[i][1]}</div>
            <div id="starter-upgrade-${i}-cost">???</div>
        </button>
        `
    }
    
    el('starter-upgrades-table').innerHTML = h

    h = "", text = [lang_text('nucleobases'),lang_text('experience'),lang_text('next-at-experience'),lang_text('amount'),lang_text('nucleobase-boosts')]

    for (let [id,n] of Object.entries(NUCLEOBASES.ctn)) {
        let n_text = text[0][id]

        h += `
        <div class="nucleobase-div" id="nucleobase-${id}-div">
            <div class="nucleobase-name">
                <h3>${n_text[0]}<sup id="nucleobase-${id}-tier">0</sup></h3><br>
                <b>${text[3]}:</b> <span id="nucleobase-${id}-amount">???</span>
                <img src="textures/nucleobases/${id}.png">
            </div><div class="nucleobase-exp">
                <div style="width: 100%; min-height: 156px;">
                    <b>${text[1]}:</b> <span id="nucleobase-${id}-exp">???</span><br>
                    <b>${text[2]}:</b> <span id="nucleobase-${id}-next">???</span>
                </div><div class="table-left">
                    <button class="explore-cost" id="nucleobase-${id}-upgrade-base" onclick="buyNucleobaseUpgrade('${id}',0)">Experience Base: <text-style style="color: lime;">+1</text-style><br>Cost: ???</button>
                    <button class="explore-cost" id="nucleobase-${id}-upgrade-tier" onclick="buyNucleobaseUpgrade('${id}',1)">Nucleobase Tier: <text-style style="color: lime;">0</text-style><br>Cost: ???</button>
                </div>
            </div><div>
                <h3>${text[4]}:</h3><ul>
                    ${n.effect.map((e,i) => `<li id="nucleobase-${id}-boost-${i}">???</li>`).join('')}
                </ul>
            </div>
        </div>
        `
    }

    el('nucleobases-table').innerHTML = h

    setupGalacticExploreHTML()
}