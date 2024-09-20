const AUTO_MIN_INTERVAL = 1/FPS
var auto_time = {}

const AUTOMATION = {
    shark: {
        unl: ()=>player.feature>=2 || player.singularity.best_bh.gte(2),
        interval: [1,0.9],

        cost: x=>Decimal.pow(3,x).mul(1e3),
        bulk: x=>x.div(1e3).log(3).floor().add(1),

        curr: "prestige",

        trigger() {
            upgradeShark(true)
        },
    },
    su: {
        unl: ()=>player.feature>=2 || player.singularity.best_bh.gte(2),
        interval: [1,0.8],

        cost: x=>Decimal.pow(2,x).mul(1e3),
        bulk: x=>x.div(1e3).log(2).floor().add(1),

        curr: "prestige",

        su: ['s5','s4','s3','s2','s1'],

        trigger() {
            buyAllSharkUpgrades(this.su)
        },
    },
    spu: {
        unl: ()=>hasDepthMilestone(1,0) || player.singularity.best_bh.gte(2),
        interval: [1,0.9],

        cost: x=>Decimal.pow(1e5,x).mul(1e125),
        bulk: x=>x.div(1e125).log(1e5).floor().add(1),

        curr: "prestige",

        su: ['p3','p2','p1'],

        trigger() {
            buyAllSharkUpgrades(this.su)
        },
    },
    eu: {
        unl: ()=>player.core.times>0 || player.singularity.best_bh.gte(2),
        interval: [1,0.9],

        cost: x=>Decimal.pow(2,x).mul(100),
        bulk: x=>x.div(100).log(2).floor().add(1),

        curr: "core",

        trigger() {
            for (let i=0; i<EXPLORE.length; i++) {
                for (let j=0; j<2; j++) buyExploreUpgrade(i,j)
            }
        },
    },
    core_reactor: {
        unl: ()=>player.humanoid.times>0 || player.singularity.best_bh.gte(2),
        interval: [10,0.9],

        cost: x=>Decimal.pow(1e10,x+1),
        bulk: x=>x.log(1e10).floor(),

        curr: "core",

        trigger() {
            let l = tmp.core_reactor_unl
            if (!hasResearch('m10')) l = Math.min(l,8);
            for (let i=0; i<l; i++) upgradeCoreReactor(i);
        },
    },
    core_radiation: {
        unl: ()=>player.humanoid.times>0 || player.singularity.best_bh.gte(2),
        interval: [1,0.9],

        cost: x=>Decimal.pow(1e10,x+1),
        bulk: x=>x.log(1e10).floor(),

        curr: "core",

        trigger() {
            CORE_RAD.purchaseGeneration()
        },
    },
    radioactive_boosts: {
        unl: ()=>hasEvolutionGoal(7) || player.singularity.best_bh.gte(2),
        interval: [1,0.9],

        cost: x=>Decimal.pow(1e100,x+1),
        bulk: x=>x.log(1e100).floor(),

        curr: "core",

        trigger() {
            CORE_RAD.purchaseBoost()
        },
    },
    mining_upgs: {
        unl: ()=>hasForgeUpgrade('auto') || player.singularity.best_bh.gte(2),
        interval: [1,0.9],

        cost: x=>Decimal.pow(100,x+1).mul(1e70),
        bulk: x=>x.div(1e70).log(100).floor(),

        curr: "stone",

        get su() {
            let x = ['m1','m2','m3','m4','m5']
            if (hasResearch('m10')) x.push('m6','m7','m8','m9');
            return x
        },

        trigger() {
            buyAllSharkUpgrades(this.su)
        },
    },
    humanoid: {
        unl: ()=>!isSSObserved('venus') && (hasForgeUpgrade('auto',2) || player.singularity.best_bh.gte(2)),
        interval: [10,0.9],

        cost: x=>Decimal.pow(10,x+1).mul(1e2),
        bulk: x=>x.div(1e2).log(10).floor(),

        curr: "obsidian",

        trigger() {
            let g = tmp.currency_gain.humanoid
            CURRENCIES.humanoid.amount = CURRENCIES.humanoid.amount.add(g)
            if (g.gt(0)) {
                increaseFeature(11)
                player.humanoid.times++
            }
        },
    },
    research: {
        unl: ()=>player.singularity.best_bh.gte(5),
        interval: [1,0.9],

        cost: x=>Decimal.pow(1e3,x+1).mul(1e6),
        bulk: x=>x.div(1e6).log(1e3).floor(),

        curr: "remnants",

        trigger() {
            for (let i of PRE_BH_RESEARCH) {
                let r = RESEARCH[i], max = r.max??1

                purchaseResearch(i, !r.noBuyMax && max > 1)
            }
        },
    },
    mining_tier: {
        unl: ()=>player.singularity.best_bh.gte(5),
        interval: [1,0.9],

        cost: x=>Decimal.pow(1e3,x+1).mul(1e15),
        bulk: x=>x.div(1e15).log(1e3).floor(),

        curr: "remnants",

        trigger() {
            MINING_TIER.upgrade(true)
        },
    },
    remnant: {
        unl: ()=>hasSMilestone(10),
        interval: [1,0.9],

        cost: x=>Decimal.pow(1e6,x+1).mul(1e60),
        bulk: x=>x.div(1e60).log(1e6).floor(),

        curr: "remnants",

        trigger() {
            for (let i = 0; i < REMNANT_UPGS.length; i++) buyRemnantUpg(i);
        },
    },
    faith: {
        unl: ()=>isSSObserved('mars'),
        interval: [1,0.9],

        cost: x=>Decimal.pow(1e3,x+1).mul(1e15),
        bulk: x=>x.div(1e15).log(1e3).floor(),

        curr: "dark-matter",

        trigger() {
            for (let i = 0; i < 3; i++) purchaseSharkoidFaith(i);
        },
    },
}

for (let [i,x] of Object.entries(AUTOMATION)) {
    x.max = Math.ceil(Math.log(AUTO_MIN_INTERVAL/x.interval[0])/Math.log(x.interval[1]))
    auto_time[i] = 0
}

function toggleAutomation(i) {
    if (AUTOMATION[i].unl()) player.auto[i][1] = !player.auto[i][1]
}

function isAutoEnabled(i) {
    return AUTOMATION[i].unl() && player.auto[i][1]
}

function buyAutomation(i) {
    const A = AUTOMATION[i]
    if (A.unl()) {
        let res = CURRENCIES[A.curr], cost = A.cost(player.auto[i][0])
        if (res.amount.gte(cost)) {
            let bulk = A.bulk(res.amount).min(A.max).toNumber()
            if (bulk > player.auto[i][0]) {
                cost = A.cost(bulk-1)
                res.amount = res.amount.sub(cost).max(0)
                player.auto[i][0] = bulk
            }
        }
    }
}

function setupAutomationHTML() {
    el("auto-table").innerHTML = Object.entries(AUTOMATION).map(([i,x]) => {
        return `
        <div class="auto-div" id="auto-${i}-div">
            <div class="auto-name">${lang_text('auto-'+i+'-name')}</div>
            <div id="auto-${i}-interval">Interval: 1.000s ➜ 0.800s</div>
            <button id="auto-${i}-switch" class="auto-button-switch" onclick="toggleAutomation('${i}')">OFF</button>
            <button id="auto-${i}-cost" class="auto-button" onclick="buyAutomation('${i}')">Decrease Interval by 20%.<br>Cost: ???</button>
        </div>
        `
    }).join("")
}

function updateAutomationHTML() {
    for (let [i,x] of Object.entries(AUTOMATION)) {
        let unl = x.unl()
        el(`auto-${i}-div`).style.display = el_display(unl)
        if (unl) {
            let a = player.auto[i], maxed = a[0]>=x.max
            let [I,D] = x.interval
            el(`auto-${i}-interval`).textContent = lang_text('auto-interval',Math.max(I*D**a[0],AUTO_MIN_INTERVAL),Math.max(I*D**(a[0]+1),AUTO_MIN_INTERVAL),maxed) // `Interval: ${format(Math.max(I*D**a[0],AUTO_MIN_INTERVAL),3)}s`+(maxed ? "" :` ➜ ${format(Math.max(I*D**(a[0]+1),AUTO_MIN_INTERVAL),3)}s`)
            
            el(`auto-${i}-switch`).textContent = lang_text('off-on',a[1])

            el(`auto-${i}-cost`).style.display = el_display(!maxed)
            if (!maxed) {
                let res = CURRENCIES[x.curr], cost = x.cost(a[0])

                el(`auto-${i}-cost`).innerHTML = lang_text('auto-cost',D,cost,res.costName) // `Decrease Interval by ${formatReduction(D,0)}.<br>Cost: ${format(cost,0)} ${res.costName}`
                el(`auto-${i}-cost`).className = el_classes({'auto-button': true, locked: res.amount.lt(cost)})
            }
        }
    }
}