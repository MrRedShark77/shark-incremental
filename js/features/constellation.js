const CONSTELLATION = {
    get exp() {
        let x = 0.44
        return x
    },

    get base() {
        let x = player.fish.add(10).iteratedlog(10,2).mul(CURRENCIES.remnants.amount.add(1).log10()).mul(CURRENCIES["dark-matter"].amount.add(1).log10())

        return x.pow(this.exp)
    },

    get require() {
        return player.singularity.bh_tier.pow(1.5).pow_base(2).mul(1e6)
    },

    upgrade() {
        if (this.base.gte(this.require)) {
            player.singularity.bh_tier = player.singularity.bh_tier.add(1)

            RESETS["black-hole"].doReset()
        }
    },

    boosts: [
        {
            name: "stellar-fish",
            req: 1,
            effect(r,d) {
                let x = d ? expPow(r.max(0),0.5).div(10).add(1) : r.add(1).log10().div(4).add(1)
                return x
            },
            effDesc: x=>formatPow(x,3),
        },{
            name: "stellar-prestige",
            req: 2,
            effect(r,d) {
                let x = d ? expPow(r.max(0),0.5).div(25).add(1) : r.add(1).log10().div(4).add(1)
                return x
            },
            effDesc: x=>formatPow(x,3),
        },
    ],
}

function constellationBoostEffect(i,d,diff=1) { return (tmp.ss_difficulty>0)==d ? tmp.constellation_boosts[i]??diff : diff }

function updateConstellationTemp() {
    let d = tmp.ss_difficulty, bht = player.singularity.bh_tier
    for (let i = 0; i < CONSTELLATION.boosts.length; i++) {
        let b = CONSTELLATION.boosts[i]

        tmp.constellation_boosts[i] = b.effect(bht.gte(b.req) ? CURRENCIES[b.name].amount : E(0),d)
    }
}

function setupConstellationHTML() {
    let h = ""
    for (let i = 0; i < CONSTELLATION.boosts.length; i++) {
        let b = CONSTELLATION.boosts[i]

        h += `<div class="constellation-boost" id="constellation-boost-${i}-div"><div style="min-height: 40px;">${lang_text('you-have')} <span id="constellation-boost-${i}-amount">???</span> <span id="constellation-boost-${i}-gain"></span> ${CURRENCIES[b.name].costName}.</div><br class="line"><div id="constellation-boost-${i}-effect">???</div></div>`
    }
    el('constellation-boosts-table').innerHTML = h
}

function updateConstellationHTML() {
    let exp = CONSTELLATION.exp, base = CONSTELLATION.base, req = CONSTELLATION.require, bht = player.singularity.bh_tier, d = tmp.ss_difficulty

    el('constellation-base').innerHTML = `[log(log(${CURRENCIES.fish.costName})) × log(${CURRENCIES.remnants.costName}) × log(${CURRENCIES["dark-matter"].costName})]<sup>${format(exp)}</sup> = <h3>${format(base)}</h3>`
    el('cp-text').innerHTML = format(base) + " / " + format(req)
    el('cp-bar').style.width = base.div(req).max(0).min(1) * 100 + "%"

    el('bh-tier').textContent = format(player.singularity.bh_tier,0)
    el('bh-tier-button').className = el_classes({locked: base.lt(req), 'half-huge-btn': true})

    let text = lang_text('constellation-boosts')

    for (let i = 0; i < CONSTELLATION.boosts.length; i++) {
        let b = CONSTELLATION.boosts[i], unl = bht.gte(b.req)

        el(`constellation-boost-${i}-div`).style.display = el_display(unl)

        if (unl) {
            let curr = CURRENCIES[b.name]
            el(`constellation-boost-${i}-amount`).textContent = format(curr.amount)
            el(`constellation-boost-${i}-gain`).textContent = formatGain(curr.amount,tmp.currency_gain[b.name])
            el(`constellation-boost-${i}-effect`).innerHTML = text[i][d?2:1](toColoredText(b.effDesc(tmp.constellation_boosts[i],d),'lime'))
        }
    }
}