const GALACTIC_EXPLORE = [
    {
        tier_req: 111,
        fish_req: E('eee800'),

        effect(x) { return expPow(x.add(1),hasResearch('ge5') ? 3.5 : 2) },
        effDesc: x => formatPow(x),

        upgrade: [x => Decimal.tetrate(10,x.mul(.01).add(4.522587978449902)), x => x.max(1).slog(10).sub(4.522587978449902).div(.01).floor().add(1), 'core'], // ee1e400
    },{
        tier_req: 124,
        fish_req: E('eee10000'),

        effect(x) { return expPow(x.add(1),4) },
        effDesc: x => formatPow(x),

        upgrade: [x => Decimal.tetrate(10,x.mul(.01).add(4.707552179385802)), x => x.max(1).slog(10).sub(4.707552179385802).div(.01).floor().add(1), 'prestige'], // ee1e10000
    },{
        tier_req: 143,
        fish_req: E('eee1e6'),

        effect(x) { return expPow(x.add(1),hasResearch('ge10') ? 4 : 2) },
        effDesc: x => formatMult(x),

        upgrade: [x => Decimal.tetrate(10,x.mul(.01).add(3.392912401008867)), x => x.max(1).slog(10).sub(3.392912401008867).div(.01).floor().add(1), 'humanoid'], // e1e100
    },{
        tier_req: 161,
        fish_req: E('eee9.6e6'),

        effect(x) { return x.add(1).log10().div(10).add(1).pow(3) },
        effDesc: x => formatPow(x,3),

        upgrade: [x => Decimal.tetrate(10,x.mul(.01).add(3.9004007556831843)), x => x.max(1).slog(10).sub(3.9004007556831843).div(.01).floor().add(1), 'remnants'], // ee1e7
    },
]

GALACTIC_EXPLORE.forEach(x => { x.slog_fish_req = x.fish_req.slog(10) })

function getGalacticExplorationScore(fish,i) {
    const GE = GALACTIC_EXPLORE[i]
    var s = E(0)
    if (fish.gte(GE.fish_req)) {
        s = fish.slog(10).sub(GE.slog_fish_req).mul(10).add(1).pow(2).sub(1).pow10().max(1)
    }
    return s
}

function inGalacticExploration(i) { return player.hadron.gal_explore.active == i }
function galacticExplorationEffect(i,def=1) { return tmp.gal_explore_eff[i] ?? def }

function enterGalacticExploration(i) {
    let ge = player.hadron.gal_explore

    if (ge.unl <= i) return

    if (ge.active == -1) ge.active = i
    else {
        let a = ge.active
        ge.score[a] = ge.score[a].max(getGalacticExplorationScore(ge.best_fish,a))
        ge.active = ge.active == i ? -1 : i
    }

    ge.best_fish = E(0)

    doReset('hadron',true)
}

function upgradeGalacticExploration(i) {
    const GE = GALACTIC_EXPLORE[i]
    let ge = player.hadron.gal_explore

    if (ge.unl <= i) return

    let u = ge.upg[i], cost = GE.upgrade[0](u), amt = CURRENCIES[GE.upgrade[2]].amount

    if (amt.gte(cost)) ge.upg[i] = u.add(1).max(GE.upgrade[1](amt));
}

function updateGalacticExploreTemp() {
    let ge = player.hadron.gal_explore

    let base = 2
    if (hasResearch('ge9')) base++;

    base = Decimal.add(base,getNucleobaseEffect('thymine',1,0));

    for (let i = 0; i < GALACTIC_EXPLORE.length; i++) {
        const GE = GALACTIC_EXPLORE[i]
        
        tmp.gal_explore_eff[i] = GE.effect(ge.unl > i ? ge.res[i] : E(0))
        tmp.gal_explore_mult[i] = ge.upg[i].pow_base(base)
    }

    tmp.gal_explore_mult_base = base
}

function setupGalacticExploreHTML() {
    let h = "", text = [lang_text('gal-explore'),lang_text('score')]

    for (let i = 0; i < GALACTIC_EXPLORE.length; i++) {
        const GE = GALACTIC_EXPLORE[i]
        let g_text = text[0][i]

        h += `
        <div id="gal-explore-${i}-div" class="gal-explore">
            <div class="gal-explore-req">
                ${lang_text('gal-explore-require',`<b>${format(GE.tier_req)}</b>`)}
            </div><div class="gal-explore-div">
                <div style="min-height: 200px;">
                    <h3>${toTextStyle(g_text[0],'gal-explore-'+i)}</h3><br>
                    <b>${text[1]}:</b> <span id="gal-explore-${i}-score">???</span>
                    <br class="black-line">
                    ${g_text[2]}
                    <br class="black-line">
                    You have <span id="gal-explore-${i}-res">???</span> ${toTextStyle(g_text[1],'gal-explore-'+i)}.
                    <div id="gal-explore-${i}-effect">Boost Placeholder</div>
                </div><div class="table-center">
                    <button id="gal-explore-${i}-enter" class="explore-cost" onclick="enterGalacticExploration(${i})">Explore the ocean.</button>
                    <button id="gal-explore-${i}-upg" class="explore-cost" onclick="upgradeGalacticExploration(${i})">Increase <text-style text="gal-explore-0">Blue Algae</text-style> gained by <text-style style="color: lime;">+1</text-style>.<br>Cost: ???</button>
                </div>
            </div>
        </div>
        `
    }

    el('gal-explore-table').innerHTML = h
}

function updateGalacticExploreHTML() {
    let text = [lang_text('gal-explore'),lang_text('gal-explore-ocean'),lang_text('cost')], ge = player.hadron.gal_explore

    for (let i = 0; i < GALACTIC_EXPLORE.length; i++) {
        const GE = GALACTIC_EXPLORE[i]
        let el_id = `gal-explore-${i}`, unl = ge.unl > i

        el(el_id + '-div').className = el_classes({'gal-explore':true,'unlocked':unl})
        if (unl) {
            let score = ge.score[i], ge_text = text[0][i]

            el(el_id + '-score').textContent = format(score)
            el(el_id + '-res').textContent = format(ge.res[i],0) + " " + formatGain(ge.res[i],tmp.currency_gain['gal-explore-'+i])
            el(el_id + '-effect').innerHTML = ge_text[3](toColoredText(GE.effDesc(tmp.gal_explore_eff[i]), 'lime'))

            let h = ""

            if (ge.active == i) {
                let cur_score = getGalacticExplorationScore(ge.best_fish,i)
                h = lang_text('gal-explore-inside',compareStyle(format(cur_score),cur_score,score),format(GE.fish_req))
            } else h = text[1];

            el(el_id + '-enter').innerHTML = h

            let cost = GE.upgrade[0](ge.upg[i]), curr = CURRENCIES[GE.upgrade[2]]

            el(el_id + '-upg').innerHTML = lang_text('gal-explore-upgrade',CURRENCIES['gal-explore-'+i].costName,toColoredText(formatMult(tmp.gal_explore_mult[i]),'lime'))+"<br>"+text[2]+": "+format(cost)+" "+curr.costName
            el(el_id + '-upg').className = el_classes({'explore-cost':true,'locked':curr.amount.lt(cost)})
        }
    }
}