const RUNES = {
    'fehu': {
        effect: x => player.fish.add(1).log10().add(1).log10().add(1).log10().div(10).add(1).pow(x.mul(tmp.omni.rune_upgrades[0]).sqrt()),
        effDesc: x => formatPow(x,3),
        cost: 1,
    },
    'berkanan': {
        effect: x => player.omni.transcend.add(1).log10().add(1).log10().add(1).log10().div(10).add(1).pow(x.mul(tmp.omni.rune_upgrades[1]).sqrt()),
        effDesc: x => formatPow(x,3),
        cost: 1,
    },
    'kaunan': {
        effect: x => player.omni.undead.add(1).log10().add(1).log10().div(25).add(1).pow(x.mul(tmp.omni.rune_upgrades[1]).sqrt()),
        effDesc: x => formatPow(x,3),
        cost: 1,
    },
    'naudiz': {
        effect: x => player.omni.nucleus.add(1).log10().add(1).log10().div(25).add(1).pow(x.mul(tmp.omni.rune_upgrades[2]).sqrt()),
        effDesc: x => formatPow(x,3),
        cost: 1,
    },
    'uruz': {
        effect: x => x.mul(getOmniReward(44,0.5)).add(1),
        effDesc: x => formatPercent(x),
        cost: 2,
    },
}
const RUNE_KEYS = Object.keys(RUNES)

const RUNE_UPGS = [
    {
        cost: x => x.scaleAll('rune_upg1').sumBase(1.01).pow_base(1.2).mul(100).pow10().pow10(),
        bulk: x => x.log10().log10().div(100).log(1.2).sumBase(1.01,true).scaleAll('rune_upg1',true).floor().add(1),
        currency: "anti-fish",

        effect: x => {
            let y = x.mul(.1).add(1)
            if (hasResearch('rc4')) y = x.pow_base(1.01).mul(y);
            return y
        },
        effDesc: x => formatPercent(x.sub(1),0),
    },{
        cost: x => x.scaleAll('rune_upg1').sumBase(1.01).pow_base(1.3).mul(100).pow10().pow10(),
        bulk: x => x.log10().log10().div(100).log(1.3).sumBase(1.01,true).scaleAll('rune_upg1',true).floor().add(1),
        currency: "transcend",

        effect: x => {
            let y = x.mul(.1).add(1)
            if (hasResearch('rc4')) y = x.pow_base(1.01).mul(y);
            return y
        },
        effDesc: x => formatPercent(x.sub(1),0),
    },{
        cost: x => x.scaleAll('rune_upg1').sumBase(1.01).pow_base(1.5).mul(1e4).pow10(),
        bulk: x => x.log10().div(1e4).log(1.5).sumBase(1.01,true).scaleAll('rune_upg1',true).floor().add(1),
        currency: "nucleus",

        effect: x => {
            let y = x.mul(.1).add(1)
            if (hasResearch('rc4')) y = x.pow_base(1.01).mul(y);
            return y
        },
        effDesc: x => formatPercent(x.sub(1),0),
    },{
        cost: x => x.scaleAll('rune_upg2').sumBase(1.1).pow_base(2).ceil(),
        bulk: x => x.log(2).sumBase(1.1,true).scaleAll('rune_upg2',true).floor().add(1),
        currency: "rune-fragments",

        effect: x => x.round(),
        effDesc: x => format(RUNE_ESSENCE.amount,0) + " / " + format(x,0),
    },
]

function purchaseRuneUpgrade(i) {
    const U = RUNE_UPGS[i], C = CURRENCIES[U.currency];
    let cost = U.cost(player.omni.rune_upgrades[i]);
    if (C.amount.gte(cost))
        C.amount = C.amount.sub(U.cost((player.omni.rune_upgrades[i] = U.bulk(C.amount).max(player.omni.rune_upgrades[i].add(1))).sub(1)));
}

function switchRuneEraseMode() { picked_rune = picked_rune === 'erase' ? "" : 'erase' }

const RUNE_ESSENCE = {
    get amount() { return tmp.omni.rune_upgrades[3].sub(player.omni.spent_rune_essence).max(0) },
}

function runeAction(i) {
    if (hasResearch('rc5') || picked_rune === '')
        return;

    const D = player.omni.rune_slots[i], R = RUNES[picked_rune];

    if (picked_rune === 'erase' && D.amount.gt(0)) {
        player.omni.spent_rune_essence = player.omni.spent_rune_essence.sub(D.amount.mul(RUNES[D.id].cost));
        D.amount = E(0);
        RESETS.runeification.doReset();
    } else if (R) {
        if (D.amount.eq(0))
            D.id = picked_rune;

        if (D.id === picked_rune) {
            if (RUNE_ESSENCE.amount.gte(R.cost)) {
                player.omni.spent_rune_essence = player.omni.spent_rune_essence.add(R.cost);
                D.amount = D.amount.add(1)
            }
        } else if (RUNE_ESSENCE.amount.add(D.amount.mul(RUNES[D.id].cost)).gte(R.cost)) {
            player.omni.spent_rune_essence = player.omni.spent_rune_essence.sub(D.amount.mul(RUNES[D.id].cost)).add(R.cost);
            D.amount = E(1);
            D.id = picked_rune;
            RESETS.runeification.doReset();
        }
    }
}

function clearRunes() {
    if (player.omni.spent_rune_essence.lte(0)) return;
    for (let i = 0; i < 25; i++) player.omni.rune_slots[i].amount = E(0);
    player.omni.spent_rune_essence = E(0)
    RESETS.runeification.doReset();
}

var hovered_rune = '', picked_rune = '';

function updateRuneTemp() {
    const DV = [[1,0],[-1,0],[0,1],[0,-1]]
    for (let i in RUNES) tmp.omni.runes[i] = { amount: E(0), effect: E(1) };
    const sacrificed = RUNE_KEYS.filter((x,i) => i < player.omni.rune_sacrificed);

    for (let i = 0; i < 4; i++) tmp.omni.rune_upgrades[i] = RUNE_UPGS[i].effect(i === 3 || RUNE_SACRIFICE.in(-1) ? player.omni.rune_upgrades[i] : E(0));

    if (hasResearch('rc5')) {
        const p = player.omni.rune_upgrades[3], q = p.pow_base(1.2).mul(p.add(1))
        for (const id of RUNE_KEYS) tmp.omni.runes[id].amount = q;

        if (hasResearch('rc1')) for (let i = 0; i < 3; i++) {
            const r = player.omni.rune_upgrades[i].div(10).floor();
            switch (i) {
                case 0:
                    tmp.omni.runes.fehu.amount = tmp.omni.runes.fehu.amount.add(r);
                break;
                case 1:
                    tmp.omni.runes.berkanan.amount = tmp.omni.runes.berkanan.amount.add(r);
                    tmp.omni.runes.kaunan.amount = tmp.omni.runes.kaunan.amount.add(r);
                break;
                case 2:
                    tmp.omni.runes.naudiz.amount = tmp.omni.runes.naudiz.amount.add(r);
                break;
            }
        }
    } else {
        let existed = 0, uruz_existed = 0;

        for (let i = 0; i < 25; i++) {
            const D = player.omni.rune_slots[i];
            let x = i % 5, y = Math.floor(i / 5), s = E(1);

            if (D.amount.gt(0)) {
                for (let [dx, dy] of DV) if (x + dx >= 0 && x + dx < 5 && y + dy >= 0 && y + dy < 5) {
                    const DD = player.omni.rune_slots[x + dx + (y + dy) * 5];

                    if (D.id === DD.id && DD.amount.gt(0)) s = s.add(.5);
                }

                if (D.id === 'uruz') uruz_existed += 1 << i;
                existed += 1 << i;
            }

            tmp.omni.rune_strength[i] = s;
        }

        for (let i = 0; i < 25; i++) if (uruz_existed >> i & 1) {
            let x = i % 5, y = Math.floor(i / 5), s = RUNES.uruz.effect(player.omni.rune_slots[i].amount.mul(tmp.omni.rune_strength[i]));

            for (let [dx, dy] of DV) if (x + dx >= 0 && x + dx < 5 && y + dy >= 0 && y + dy < 5) {
                let j = x + dx + (y + dy) * 5;
                const DD = player.omni.rune_slots[j];

                if (DD.id !== 'uruz' && existed >> j & 1) tmp.omni.rune_strength[j] = tmp.omni.rune_strength[j].mul(s);
            }
        }

        for (let i = 0; i < 25; i++) if (existed >> i & 1) {
            const D = player.omni.rune_slots[i], I = tmp.omni.runes[D.id];
            if (!sacrificed.includes(D.id)) I.amount = I.amount.add(D.amount.mul(tmp.omni.rune_strength[i]));
        }

        if (hasResearch('rc1')) for (let i = 0; i < 3; i++) {
            const r = player.omni.rune_upgrades[i].div(10).floor();
            switch (i) {
                case 0:
                    tmp.omni.runes.fehu.amount = tmp.omni.runes.fehu.amount.add(r);
                break;
                case 1:
                    tmp.omni.runes.berkanan.amount = tmp.omni.runes.berkanan.amount.add(r);
                    tmp.omni.runes.kaunan.amount = tmp.omni.runes.kaunan.amount.add(r);
                break;
                case 2:
                    tmp.omni.runes.naudiz.amount = tmp.omni.runes.naudiz.amount.add(r);
                break;
            }
        }

        const maxed = Object.keys(tmp.omni.runes).reduce((a,b) => Decimal.max(a,b == 'uruz' ? 0 : tmp.omni.runes[b].amount), E(0))

        for (let i = 0; i < player.omni.rune_sacrificed; i++) {
            tmp.omni.runes[RUNE_KEYS[i]].amount = maxed;
        }
    }

    RUNE_KEYS.forEach((x,i) => tmp.omni.runes[x].effect = RUNES[x].effect(RUNE_SACRIFICE.in(i) ? E(0) : tmp.omni.runes[x].amount));
}

function getRuneEffect(id,def=1) { return tmp.omni.runes[id].effect ?? def }

const RUNE_SACRIFICE = {
    enter() {
        const s = this.tier[player.omni.rune_current_sacrifice]

        if (s && CURRENCIES[s[1]].amount.gte(s[0])) {
            player.omni.rune_sacrificed++;
            player.omni.rune_current_sacrifice = -1;
        } else
            player.omni.rune_current_sacrifice = player.omni.rune_current_sacrifice === player.omni.rune_sacrificed ? -1 : player.omni.rune_sacrificed;

        RESETS.runeification.doReset();
    },

    tier: [
        ['ee361', 'anti-fish'],
        ['e22600', 'transcend'],
        ['e3.003e8', 'undead'],
    ],

    html() {
        const texts = [lang_text('rune-sacrifice'), lang_text('goal'), lang_text('reward')], t = texts[0][player.omni.rune_sacrificed], s = this.tier[player.omni.rune_sacrificed];

        el('rune-sacrifice-btn').style.display = el_display(s !== undefined)

        if (s) {
            el('rune-sacrifice-tier').innerHTML = t[0];
            el('rune-sacrifice-res').innerHTML = t[1].map(x => `<li>${x}</li>`).join("");
            el('rune-sacrifice-goal').innerHTML = `<b>${texts[1]}:</b> ${format(s[0])} ${CURRENCIES[s[1]].costName}`;
            el('rune-sacrifice-reward').innerHTML = `<b>${texts[2]}:</b> ${t[2]}`;
            el('rune-sacrifice-status').innerHTML = lang_text('rune-sacrifice-state')[player.omni.rune_current_sacrifice >= 0 ? 1+(CURRENCIES[s[1]].amount.gte(s[0])) : 0]
        }
    },

    in: x => player.omni.rune_current_sacrifice === x,
}

function updateRuneHTML() {
    const rc5 = hasResearch('rc5')

    for (let x = 0; x < 25; x++) {
        const D = player.omni.rune_slots[x];

        el(`rune-slot-${x}`).className = el_classes({'rune-div': true, 'empty': !rc5 && D.amount.lte(0)})

        if (rc5 || D.amount.gt(0)) {
            el(`rune-slot-${x}-amount`).innerHTML = toColoredText(rc5 ? "???" : formatMult(D.amount,0));
            el(`rune-slot-${x}-strength`).innerHTML = toColoredText(rc5 ? "???" : formatPercent(tmp.omni.rune_strength[x],0));

            el(`rune-slot-${x}-img`).setAttribute("src",`textures/runes/${rc5 ? RUNE_KEYS[Math.floor(Math.random() * RUNE_KEYS.length)] : D.id}.png`)
        }
    }

    const texts = [lang_text('runes'),lang_text('rune-upgrades'),lang_text('cost')]
    var unl = false

    for (let x in RUNES) {
        const R = RUNES[x], T = tmp.omni.runes[x], L = texts[0][x];
        unl = x !== 'uruz' && hovered_rune === '' && T.amount.gt(0);

        el(`rune-effect-${x}`).style.display = el_display(unl);

        if (unl) {
            el(`rune-effect-${x}-amount`).textContent = formatMult(T.amount)
            el(`rune-effect-${x}-desc`).innerHTML = L[2](toColoredText(R.effDesc(T.effect),'lime'))
        }

        el(`rune-item-${x}-cost`).innerHTML = RUNE_KEYS.indexOf(x) < player.omni.rune_sacrificed ? toColoredText(lang_text('rune-sacrificed'),'red') : toColoredText(format(R.cost,0) + " " + lang_text('short-rune-essence'),RUNE_ESSENCE.amount.gte(R.cost) ? 'lime' : 'red')
        el(`rune-item-${x}-choose`).style.display = el_display(x === picked_rune);
    }

    el('rune-hover').style.display = el_display(hovered_rune !== '');
    if (hovered_rune !== '') {
        const [t,i] = hovered_rune.split('-')

        switch (t) {
            case 's': {
                const D = player.omni.rune_slots[i], R = RUNES[D.id], T = texts[0][D.id];
                el(`rune-hover-name`).textContent = T[0];
                el(`rune-hover-img`).setAttribute('src',`textures/runes/${D.id}.png`);
                el(`rune-hover-desc`).innerHTML = D.id === 'uruz' ? T[2](toColoredText(R.effDesc(R.effect(D.amount.mul(tmp.omni.rune_strength[i]))),'lime')) : T[1]
                break;
            }
            case 'i': {
                const T = texts[0][i]
                el(`rune-hover-name`).textContent = T[0]
                el(`rune-hover-img`).setAttribute('src',`textures/runes/${i}.png`);
                el(`rune-hover-desc`).innerHTML = T[1]
                break;
            }
        }
    }

    for (let i = 0; i < 4; i++) {
        const e = el('rune-upgrade-'+i), x = RUNE_UPGS[i], l = player.omni.rune_upgrades[i], cost = x.cost(l), curr = CURRENCIES[x.currency];

        e.innerHTML = `${texts[1][i](toColoredText(x.effDesc(tmp.omni.rune_upgrades[i]),'lime'))}<hr class='sub-line'>${texts[2]}: ${format(cost,0)} ${curr.costName}`;
        e.className = el_classes({locked: curr.amount.lt(cost)})
    }

    el("rune-erase-mode").innerHTML = lang_text("rune-erase-mode", picked_rune === 'erase');
}

function setupRuneHTML() {
    const texts = [lang_text('runes'), lang_text('picked')]

    let h = '',
    hh = `<div class="rune-effect" id="rune-hover">
        <div class="rune-effect-name"><text-style id="rune-hover-name">Fehu</text-style></div>
        <img id="rune-hover-img" src="textures/runes/fehu.png">
        <hr class="sub-line">
        <div class="rune-effect-desc" id="rune-hover-desc">
            ???
        </div>
    </div>`;

    for (let x = 0; x < 25; x++) {
        h += `<div class="rune-div empty" id="rune-slot-${x}" onclick="runeAction(${x})">
            <div class="rune-top" id="rune-slot-${x}-amount"><text-style></text-style></div>
            <img id="rune-slot-${x}-img" src="textures/runes/fehu.png">
            <div class="rune-bottom" id="rune-slot-${x}-strength"><text-style>???%</text-style></div>
        </div>`
    }

    el('rune-grid').innerHTML = h

    for (let x = 0; x < 25; x++) {
        const e = el(`rune-slot-${x}`)
        e.addEventListener('mouseover',() => {if (!hasResearch('rc5')) hovered_rune = player.omni.rune_slots[x].amount.gt(0) ? 's-'+x : ''})
        e.addEventListener('mouseout',() => hovered_rune = '')
    }

    h = ''

    for (let x in RUNES) {
        h += `<div class="rune-div" id="rune-item-${x}" onclick="picked_rune = '${x}'">
            <div class="rune-top" id="rune-item-${x}-choose"><text-style>${texts[1]}</text-style></div>
            <img src="textures/runes/${x}.png">
            <div class="rune-bottom" id="rune-item-${x}-cost"><text-style>??? RE</text-style></div>
        </div>`
        hh += `<div class="rune-effect" id="rune-effect-${x}">
            <div class="rune-effect-name">${toColoredText(texts[0][x][0])}<br><b id="rune-effect-${x}-amount">×123</b></div>
            <img src="textures/runes/${x}.png">
            <hr class="sub-line">
            <div class="rune-effect-desc" id="rune-effect-${x}-desc">
                ???
            </div>
        </div>`
    }

    el('rune-items').innerHTML = h
    el('rune-effects').innerHTML = hh

    for (let x in RUNES) {
        const e = el(`rune-item-${x}`)
        e.addEventListener('mouseover',() => hovered_rune = 'i-'+x)
        e.addEventListener('mouseout',() => hovered_rune = '')
    }
}

CURRENCIES['rune-fragments'] = {
    get amount() { return player.omni.rune_fragments },
    set amount(v) { player.omni.rune_fragments = v.max(0) },

    require: E('ee60'),

    get gain() {
        if (player.omni.god || !player.omni.active || player.omni.tier.lt(40)) return E(0);

        let x = player.fish.max(10).log10().log10().div(60)

        if (x.lt(1)) return E(0);

        x = expPow(x, hasResearch('d5') ? 3 : 2).mul(tmp.global_mult)

        x = x.mul(getOmniReward(41,1)).mul(getCondenserBonus(3))

        return x.floor();
    },

    get passive() { return Decimal.mul(+(REBIRTH.hasUpgrade(8) || player.omni.tier.gte(56)), Decimal.max(getOmniReward(56,0),.01)) },
}

RESETS.runeification = {
    get require() { return player.total_fish.gte(CURRENCIES["rune-fragments"].require) },
    reset(force) {
        if (!force) {
            gainCurrency('rune-fragments',tmp.currency_gain['rune-fragments'])
            player.omni.runeifications++
            increaseFeature(31)
        }

        this.doReset()
    },
    doReset() {
        const O = player.omni

        O.nucleus = E(0)
        for (let i = 0; i < DECAY_CHAIN.length; i++) O.decay_series[i] = [E(0),E(0)];
        O.particles = [E(0),E(0),E(0),E(0),E(0),E(0)];

        OMNI.condenserReset()

        if (!hasResearch('d1')) resetResearch('tr3','tr4','u3','u4');

        RESETS.reaction.doReset();
    },
}