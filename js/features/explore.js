const EXPLORE = [
    {
        resource: "coral",
        level_req: 110,
        maxDepth: 10935,

        effect(r,d) {
            let m = d.div(this.maxDepth).max(1)
            let x = r.add(1).pow(hasResearch('p7') ? 4 : 3).pow(m.pow(.85)).min('ee2000'),
            y = hasResearch('s3') ? r.add(1).log10().add(1).pow(m.log10().add(1).root(2).overflow(100,0.5,2)) : E(1)
            return [x,y]
        },
        effDesc: x => formatMult(x[0]) + (x[1].gt(1) ? ", " + formatPow(x[1]) : "") + " " + CURRENCIES.fish.costName,

        cost: [
            [l=>Decimal.pow('1e700', Decimal.pow(1.015, l.div(tmp.explore_MP))), x=>x.log('1e700').log(1.015).mul(tmp.explore_MP).floor().add(1),"fish"],
            [l=>Decimal.pow(10, l.scale(1e8,2,"ME2").div(tmp.explore_MP).pow(1.2)).mul(1e6), x=>x.div(1e6).log10().root(1.2).mul(tmp.explore_MP).scale(1e8,2,"ME2",true).floor().add(1)]
        ],

        fish_req: E('1e135'),

        milestone: [
            100, 250, 1000, 5000, 10935
        ],
    },{
        resource: "ice",
        level_req: 130,
        maxDepth: 5450,

        effect(r,d) {
            let m = d.div(this.maxDepth).max(1)
            let x = r.add(1).pow(hasResearch('p7') ? 2 : 1.5).pow(d.div(this.maxDepth).max(1).pow(.8)).min('ee2000'),
            y = hasResearch('s3') ? r.add(1).log10().add(1).pow(m.log10().add(1).root(2).overflow(100,0.5,2)) : E(1)
            return [x,y]
        },
        effDesc: x => formatMult(x[0]) + (x[1].gt(1) ? ", " + formatPow(x[1]) : "") + " " + CURRENCIES.prestige.costName,

        cost: [
            [l=>Decimal.pow('1e120', Decimal.pow(1.015, l.div(tmp.explore_MP))), x=>x.log('1e120').log(1.015).mul(tmp.explore_MP).floor().add(1),"prestige"],
            [l=>Decimal.pow(10, l.scale(1e8,2,"ME2").div(tmp.explore_MP).pow(1.2)).mul(1e6), x=>x.div(1e6).log10().root(1.2).mul(tmp.explore_MP).scale(1e8,2,"ME2",true).floor().add(1)]
        ],

        fish_req: E('1e440'),

        milestone: [
            100, 250, 1000, 5450
        ],
    },{
        resource: "salt",
        level_req: 175,
        maxDepth: 8605,

        effect(r,d) {
            let x = hasResearch('s3') ? r.add(1).log10().add(1).pow(d.div(this.maxDepth).max(1).log10().add(1).root(2).overflow(100,0.5,2)) : r.add(1).log10().div(100).mul(d.div(this.maxDepth).max(1).log10().root(2).div(5).add(1))
            if (hasDepthMilestone(2,3)) x = x.mul(1.5);
            return x.add(1)
        },
        effDesc: x => formatPow(x,3) + " " + CURRENCIES.fish.costName,

        cost: [
            [l=>Decimal.pow(100, l.div(tmp.explore_MP).pow(1.25)).mul(1e30), x=>x.div(1e30).log(100).root(1.25).mul(tmp.explore_MP).floor().add(1),"coral"],
            [l=>Decimal.pow(10, l.scale(1e8,2,"ME2").div(tmp.explore_MP).pow(1.2)).mul(1e6), x=>x.div(1e6).log10().root(1.2).mul(tmp.explore_MP).scale(1e8,2,"ME2",true).floor().add(1)]
        ],

        fish_req: E('1e170'),

        milestone: [
            100, 250, 1000, 8605
        ],
    },{
        resource: "snow",
        level_req: 210,
        maxDepth: 7236,

        effect(r,d) {
            let x = hasResearch('s3') ? r.add(1).log10().add(1).pow(d.div(this.maxDepth).max(1).log10().add(1).root(2).overflow(100,0.5,2)) : r.add(1).log10().div(100).mul(d.div(this.maxDepth).max(1).log10().root(2).div(5).add(1))
            if (hasDepthMilestone(3,2)) x = x.mul(1.5);
            return x.add(1)
        },
        effDesc: x => formatPow(x,3) + " " + CURRENCIES.prestige.costName,

        cost: [
            [l=>Decimal.pow(100, l.div(tmp.explore_MP).pow(1.25)).mul(1e27), x=>x.div(1e27).log(100).root(1.25).mul(tmp.explore_MP).floor().add(1),"ice"],
            [l=>Decimal.pow(10, l.scale(1e8,2,"ME2").div(tmp.explore_MP).pow(1.2)).mul(1e6), x=>x.div(1e6).log10().root(1.2).mul(tmp.explore_MP).scale(1e8,2,"ME2",true).floor().add(1)]
        ],

        fish_req: E('1e200'),

        milestone: [
            100, 250, 7236
        ],
    },{
        resource: "kelp",
        level_req: 1000,
        maxDepth: 7290,

        effect(r,d) {
            let m = d.div(this.maxDepth).max(1)
            let x = expPow(r.add(1),hasDepthMilestone(4,3) ? 0.75 : 0.5)
            if (hasResearch('e5')) x = x.max(r.add(1).root(2));
            x = x.pow(m.log10().root(2).div(8).add(1)).overflow('ee12',0.5,2)
            let y = hasResearch('s4') ? r.add(10).log10().log10().mul(m.log10().add(10).log10()).root(2).div(2).add(1) : E(1)
            return [x,y]
        },
        effDesc: x => formatMult(x[0]) + (x[1].gt(1) ? ", " + formatPow(x[1],3) : "") + " " + lang_text("radioactive-name"),

        cost: [
            [l=>Decimal.pow(10, l.div(tmp.explore_MP).pow(1.1)).mul(1e15), x=>x.div(1e15).log(10).root(1.1).mul(tmp.explore_MP).floor().add(1),"core"],
            [l=>Decimal.pow(10, l.scale(1e5,2,"ME2").div(tmp.explore_MP).pow(1.2)).mul(1e6), x=>x.div(1e6).log10().root(1.2).mul(tmp.explore_MP).scale(1e5,2,"ME2",true).floor().add(1)]
        ],

        fish_req: E('1e6000'),

        milestone: [
            100, 250, 5000, 7290
        ],
    },
]

function getResourceOtherMult(i) {
    let x = E(1)
    switch (i) {
        case 0:
            if (hasResearch('e1')) x = x.mul(researchEffect('e1'))
        break;
        case 1:
            if (hasResearch('e2')) x = x.mul(researchEffect('e2'))
        break;
        case 4:
            if (hasResearch('e4')) x = x.mul(researchEffect('e4'))
        break;
    }
    if (i < 4) x = x.mul(coreReactorEffect(2))
    if (hasDepthMilestone(i,1)) x = x.mul(Decimal.pow(1.25,player.shark_level.root(2).overflow(1e12,0.5)))
    return x
}

function getBaseExploration(i=player.explore.active,amt=player.explore.best_fish) {
    let req = EXPLORE[i]?.fish_req??EINF
    let x = amt.div(req)
    if (x.lt(1)) return E(0)
    x = i == 4 ? x.log10().div(100).add(1).pow(2) : x.log10().add(1).pow(2)
    if (hasDepthMilestone(3,0)) x = x.mul(10);
    x = x.mul(remnantUpgEffect(1))
    return x
}

function inExploration(i) { return player.explore.active == i || player.explore.active == 4 && i < 4 }
function hasDepthMilestone(i,j) { return tmp.explore_mil_reached[i][j] }

function calcNextDepth(x,gain,i) {
    if (x.lt(10)) {
        var g = x.add(gain)
        if (g.gte(10)) {
            gain = g.sub(10)
            x = E(10)
        } else return g
    }

    let b = E(2), q = i >= player.research.s5

    if (x.gte(10)) {
        // x = Decimal.pow(10,Decimal.pow(10,x.log10().pow(2)).add(gain).log10().root(2))

        x = x.log10().pow(2).pow10()

        let rss1 = E('ee4'), rss2 = E('ee6')
        let rss2_loglog = rss2.log10().log10()

        let rs1 = q && x.gte(rss1), rs2 = q && x.gte(rss2)

        if (rs2) x = x.log10().log10().div(rss2_loglog).pow(2).mul(rss2_loglog).pow10().pow10()
        if (rs1) x = x.scale(rss1,b,"D")

        x = x.add(gain)

        rs1 ||= q && x.gte(rss1)
        if (rs1) x = x.scale(rss1,b,"D",true)

        rs2 ||= q && x.gte(rss2)
        if (rs2) x = x.log10().log10().div(rss2_loglog).root(2).mul(rss2_loglog).pow10().pow10()

        x = x.log10().root(2).pow10()
    }
    return x
}

function enterExploration(i) {
    if (player.explore.unl <= i) return

    if (player.explore.active == -1) player.explore.active = i
    else {
        let a = player.explore.active
        player.explore.base[a] = player.explore.base[a].max(getBaseExploration(a))
        player.explore.active = player.explore.active == i ? -1 : i
    }

    player.explore.best_fish = E(0)

    if (player.explore.active >= 1) {
        CURRENCIES.prestige.amount = E(0)
        resetSharkUpgrades('p1','p2','p3')
    }

    doReset('prestige',true)
}

function buyExploreUpgrade(i,j) {
    if (player.feature < 4) return;
    if (player.explore.unl <= i) return

    var amt = player.explore.upg[i][j]
    var E = EXPLORE[i], cost = E.cost[j], curr = j == 1 ? player.explore.res[i] : CURRENCIES[cost[2]].amount
    if (curr.gte(cost[0](amt))) {
        var bulk = cost[1](curr)
        player.explore.upg[i][j] = bulk.gt(amt) ? bulk : amt.add(1)
    }
}

function setupExplorationHTML() {
    let h = ""
    EXPLORE.forEach((x,i)=>{
        let curr = CURRENCIES[x.resource]
        let texts = lang_text(`explore-${i}-milestone`)
        h += `
        <div class="explore-div" id="explore-${i}-div">
            <div class="explore-desc">
                <button id="explore-${i}-explore" onclick="enterExploration(${i})">Your current base is 0/s.<br>Explore the ocean!</button>
                <div>
                    <div style="min-height: 118px; text-align: left;">
                        <h3>${lang_text("explore-"+i+"-name")}</h3><br>
                        ${curr.costName}: <span id="explore-${i}-res">0</span><br>
                        <b>${lang_text("effect")}:</b> <span id="explore-${i}-effect">???</span><br>
                        <b>${lang_text("depth")}:</b> <span id="explore-${i}-depth">0m</span>
                    </div><div class="table-left">
                        <button class="explore-cost" id="explore-${i}-cost1" onclick="buyExploreUpgrade(${i},0)"></button>
                        <button class="explore-cost" id="explore-${i}-cost2" onclick="buyExploreUpgrade(${i},1)">Double depth progression gained.<br>Cost: ???</button>
                    </div>
                </div><div>
                    <span><b>${lang_text("explore-while")}:</b> ${lang_text("explore-"+i+"-desc")}</span><br><br>
                    ${x.milestone.map((p,j) => `<span id="explore-${i}-milestone-${j}">• ${format(p,0,12,"sc")}m: ${texts[j]}</span><br>`).join("")}
                </div>
            </div>
        </div>
        `
    })
    el("explore-table").innerHTML = h
}

function updateExplorationHTML() {
    var a = player.explore.active

    var texts = [
        lang_text("require"),
        lang_text("explore-doubler-2"),
    ]
    EXPLORE.forEach((x,i)=>{
        let unl = player.explore.unl > i, el_id = `explore-${i}-`
        el(el_id+'div').style.display = el_display(unl)
        if (unl) {
            let b = player.explore.base[i]
            if (i == a) {
                let bb = getBaseExploration(i)
                el(el_id+'explore').innerHTML = lang_text('explore-inside',b,bb,x.fish_req)
                //`Base ${b.format()}/s`+(bb.gt(b) ? " ➜ " : " ~ ")+`${bb.format()}/s`+`.<br>Reach ${format(x.fish_req,0)} best ${fish_text}.`
            }
            else el(el_id+'explore').innerHTML = lang_text("explore-outside",b)

            let res = player.explore.res[i], curr = CURRENCIES[x.resource], text_curr = curr.costName

            el(el_id+'res').textContent = res.format(0) + " " + res.formatGain(tmp.currency_gain[x.resource])
            el(el_id+'effect').innerHTML = x.effDesc(tmp.explore_eff[i])

            let depth = player.explore.depth[i]
            el(el_id+'depth').innerHTML = depth.format() + "m / " + format(x.maxDepth,0) + "m " + depth.formatGain(calcNextDepth(depth,tmp.depth_gain[i].div(FPS),i).sub(depth).mul(FPS))

            var cost_el = el(el_id+'cost1'), costs = x.cost[0], upgs = player.explore.upg[i]
            
            var amount = upgs[0], cost = costs[0](amount), res_curr = CURRENCIES[costs[2]]
            cost_el.innerHTML = `${lang_text("explore-doubler-1",text_curr)} [${amount.format(0)}]<br>${texts[0]}: ${cost.format(0)} ${res_curr.costName}`
            cost_el.className = el_classes({"explore-cost": true, locked: res_curr.amount.lt(cost)})

            cost_el = el(el_id+'cost2'), costs = x.cost[1], amount = upgs[1], cost = costs[0](amount)
            cost_el.innerHTML = `${texts[1]} [${amount.format(0)}]<br>${texts[0]}: ${cost.format(0)} ${text_curr}`
            cost_el.className = el_classes({"explore-cost": true, locked: res.lt(cost)})

            for (let j = 0; j < x.milestone.length; j++) {
                let p = x.milestone[j]
                el(`explore-${i}-milestone-${j}`).style.backgroundColor = depth.gte(p) ? "#0804" : "transparent"
            }
        }
    })

    el("next-explore").innerHTML = player.explore.unl < EXPLORE.length ? lang_text("explore-next",EXPLORE[player.explore.unl].level_req) : ""
}

function updateExplorationTemp() {
    tmp.explore_MP = getCRBoost(9)

    EXPLORE.forEach((x,i)=>{
        tmp.explore_eff[i] = x.effect(player.explore.unl > i ? player.explore.res[i] : E(0), player.explore.depth[i])

        let upg = player.explore.upg[i]
        tmp.explore_upg_boost[i] = [Decimal.pow(2,upg[0]), Decimal.pow(2,upg[1])]

        let d = player.explore.base[i].mul(tmp.explore_upg_boost[i][1])
        if (hasDepthMilestone(i,1)) d = d.mul(Decimal.pow(1.25,player.shark_level.root(2)))
        tmp.depth_gain[i] = d.pow(getPAEffect(1)).pow(remnantUpgEffect(8))

        tmp.explore_mil_reached[i] = x.milestone.map((p) => player.explore.depth[i].round().gte(Decimal.round(p)))

        tmp.explore_mult[i] = getResourceOtherMult(i)
    })
}