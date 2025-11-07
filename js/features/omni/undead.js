CURRENCIES.undead = {
    get amount() { return player.omni.undead },
    set amount(v) { player.omni.undead = v.max(0) },

    get gain() {
        if (player.omni.god || !player.omni.active || player.omni.tier.lt(15)) return E(0);

        let x = Decimal.mul(getUndeadUpgradeEffect(3), 1).mul(tmp.global_mult)

        if (!RUNE_SACRIFICE.in(2)) {
            x = x.mul(getUndeadUpgradeEffect(4)).mul(getUndeadUpgradeEffect(5)).mul(hasResearch('u4') ? researchEffect('u4') : getCondenserBonus(1)).mul(ISOTOPES.boost(1,0)[1]).mul(ISOTOPES.boost(3,0)[1])

            x = x.pow(decaySeriesEffect(8,0))
            x = x.pow(getRuneEffect('kaunan'))
        }

        return x.round()
    },

    get passive() {
        let chance = UNDEAD.chance;
        if (chance.lt(1)) return 0;

        if (hasResearch('u3')) chance = chance.mul(tmp.speed);
        return chance
    },
}

const UNDEAD = {
    get chance() {
        if (!player.omni.active || player.omni.tier.lt(15)) return E(0);

        let x = E(getOmniReward(15,0))

        if (!RUNE_SACRIFICE.in(2)) x = x.add(getUndeadUpgradeEffect(2,0)).add(decaySeriesEffect(0,1));

        return x
    },

    upgrades: [
        {
            unl:()=>true,

            cost:a=>a.pow_base(2).mul(1).ceil(),
            bulk:a=>a.div(1).log(2).add(1).floor(),
            res: "undead",

            effect(a) {
                return a.mul(getUndeadUpgradeEffect(6)).mul(.05).add(1)
            },
            effDesc: x=>formatPow(x),
        },{
            unl:()=>true,

            cost:a=>a.pow_base(3).mul(2).ceil(),
            bulk:a=>a.div(2).log(3).add(1).floor(),
            res: "undead",

            effect(a) {
                return a.mul(getUndeadUpgradeEffect(6)).mul(.01).add(1)
            },
            effDesc: x=>formatPow(x),
        },{
            unl:()=>true,

            cost:a=>a.pow_base(4).mul(5).ceil(),
            bulk:a=>a.div(5).log(4).add(1).floor(),
            res: "undead",

            effect(a) {
                return a.mul(.01)
            },
            effDesc: x=>"+"+formatPercent(x,0),
        },{
            unl:()=>true,

            cost:a=>a.sumBase(1.01).pow_base(researchEffect('u2',10)).mul(10).root(ISOTOPES.boost(4,2)).ceil(),
            bulk:a=>a.pow(ISOTOPES.boost(4,2)).div(10).log(researchEffect('u2',10)).sumBase(1.01,true).add(1).floor(),
            res: "undead",

            effect(a) {
                return Decimal.add(2, decaySeriesEffect(0,0)).pow(a)
            },
            effDesc: x=>formatMult(x,0),
        },
        
        {
            unl:()=>true,

            cost:a=>a.sumBase(1.1).pow_base(1e50).mul('1e350'),
            bulk:a=>a.div('1e350').log(1e50).sumBase(1.1,true).add(1).floor(),
            res: "anti-fish",

            effect(a) {
                return a.mul(getUndeadUpgradeEffect(6)).add(1).pow(hasResearch('u1')?2:1).pow(decaySeriesEffect(5,0))
            },
            effDesc: x=>formatMult(x,0),
        },{
            unl:()=>player.omni.tier.gte(16),

            cost:a=>a.sumBase(1.1).pow_base(1e10).mul('1e100'),
            bulk:a=>a.div('1e100').log(1e10).sumBase(1.1,true).add(1).floor(),
            res: "transcend",

            effect(a) {
                return a.mul(getUndeadUpgradeEffect(6)).add(1).pow(hasResearch('u1')?2:1).pow(decaySeriesEffect(5,0))
            },
            effDesc: x=>formatMult(x,0),
        },{
            unl:()=>player.omni.tier.gte(19),

            cost:a=>a.pow_base(10).mul(1e12),
            bulk:a=>a.div(1e12).log(10).add(1).floor(),
            res: "undead",

            effect(a) {
                return a.mul(.5).add(1).pow(getUndeadUpgradeEffect(7,.5))
            },
            effDesc: x=>formatPercent(x.sub(1)),
        },{
            unl:()=>player.omni.tier.gte(26),

            cost:a=>a.sumBase(1.1).pow(1.5).pow_base(1e10).mul(1e80),
            bulk:a=>a.div(1e80).log(1e10).root(1.5).sumBase(1.1,true).add(1).floor(),
            res: "undead",

            effect(a) {
                let x = a.sqrt().add(5).div(10)
                return x
            },
            effDesc: x=>formatPow(x,3),
        },
    ],

    purchase(i) {
        const U = UNDEAD.upgrades[i]

        if (!U || player.omni.tier.lt(15) || !U.unl()) return;

        const C = CURRENCIES[U.res]
        let level = player.omni.undead_upgs[i];

        if (C.amount.gte(U.cost(level))) {
            let bulk = U.bulk(C.amount).max(level.add(1))

            if (!player.omni.tier.gte(22) && U.res === 'undead') C.amount = C.amount.sub(U.cost(bulk.sub(1))).max(0);
            player.omni.undead_upgs[i] = bulk
        }
    },

    tick(dt) {
        if (player.omni.tier.lt(15)) return;

        let chance = this.chance;

        if (chance.gte(1)) return;

        let t = player.omni.undead_tick.add(hasResearch('u3') ? tmp.speed.mul(dt) : dt);

        if (t.gte(1)) {
            // getYieldFromChance(N,amount=1) { return Math.floor(amount / Math.max(Math.random() * N, 1)) }
            player.omni.undead = player.omni.undead.add(tmp.currency_gain.undead.mul(
                t.floor().div(Decimal.div(Math.random(), chance).max(1)).floor()
            ))
            
            t = t.mod(1)
        }

        player.omni.undead_tick = t
    },
}

function getUndeadUpgradeEffect(i,def=1) { return tmp.omni.undead_upgs[i] ?? def }

function updateUndeadTemp() {
    for (let i = 0; i < UNDEAD.upgrades.length; i++) {
        const U = UNDEAD.upgrades[i]; var l = player.omni.undead_upgs[i]

        if (i < 7) l = l.mul(decaySeriesEffect(4,0));
        else if (i == 7) l = l.mul(decaySeriesEffect(13,0));

        tmp.omni.undead_upgs[i] = U.effect(l)
    }
}

function setupUndeadHTML() {
    let texts = [lang_text('undead-upgrades'),lang_text('cost')]

    let h = ""

    for (let i = 0; i < UNDEAD.upgrades.length; i++) {
        const U = UNDEAD.upgrades[i]

        h += U === null ? `<div></div>` : `<button class="small-upg" id="undead-upg-${i}-button" onclick="UNDEAD.purchase(${i})"><b>${texts[0][i][0]}</b> [<span id="undead-upg-${i}-level">0</span>]<div id="undead-upg-${i}-desc">${texts[0][i][1]('???')}</div>${texts[1]}: <span id="undead-upg-${i}-cost">???</span> ${CURRENCIES[U.res].costName}</button>`
    }

    el('undead-upgrades-table').innerHTML = h
}

function updateUndeadHTML() {
    el('undead-essence-amount').innerHTML = format(CURRENCIES.undead.amount,0)

    let chance = UNDEAD.chance

    el('undead-essence-chance').innerHTML = formatPercent(chance)
    el('undead-essence-gain').innerHTML = chance.gte(1) ? formatGain(CURRENCIES.undead.amount, tmp.currency_gain.undead.mul(chance).mul(hasResearch('u3') ? tmp.speed : 1)) : `(<b>+${tmp.currency_gain.undead.format(0)}</b> / ${formatTime(chance.pow(-1),1)})`

    let descs = lang_text('undead-upgrades')

    for (let i = 0; i < UNDEAD.upgrades.length; i++) {
        const U = UNDEAD.upgrades[i]
        if (!U) continue;

        let unl = U.unl()

        el(`undead-upg-${i}-button`).style.display = el_display(unl)
        if (!unl) continue;

        let level = player.omni.undead_upgs[i], cost = U.cost(level)

        el(`undead-upg-${i}-level`).innerHTML = player.omni.undead_upgs[i].format(0)
        el(`undead-upg-${i}-desc`).innerHTML = descs[i][1](toColoredText(U.effDesc(tmp.omni.undead_upgs[i]), 'lime'))

        el(`undead-upg-${i}-cost`).innerHTML = format(cost,0)
        el(`undead-upg-${i}-button`).className = el_classes({'small-upg': true, locked: CURRENCIES[U.res].amount.lt(cost)})
    }
}