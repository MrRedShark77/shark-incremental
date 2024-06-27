const PARTICLE_ACCELERATOR = [
    {
        curr: "fish",

        req(c) {
            let x = c.mul(200).add(100).pow_base(10).pow_base(10)

            return x
        },
        percent(c) {
            let x = c.max(10).log10().log10().sub(100).div(200)

            return x
        },

        effect(p) {
            let x = p.mul(2).add(1)

            return x
        },
        effDesc: x => formatPow(x,3),
    },{
        curr: "prestige",

        req(c) {
            let x = c.mul(300).add(100).pow_base(10).pow_base(10)

            return x
        },
        percent(c) {
            let x = c.max(10).log10().log10().sub(100).div(300)

            return x
        },

        effect(p) {
            let x = p.add(1)

            return x
        },
        effDesc: x => formatPow(x,3),
    },{
        curr: "stone",

        req(c) {
            let x = c.mul(300).add(200).pow_base(10)

            return x
        },
        percent(c) {
            let x = c.max(1).log10().sub(200).div(300)

            return x
        },

        effect(p) {
            let x = p.div(4).add(1)

            return x
        },
        effDesc: x => formatPow(x,3),
    },{
        curr: "humanoid",

        req(c) {
            let x = c.mul(900).add(100)

            return x
        },
        percent(c) {
            let x = c.sub(100).div(900)

            return x
        },

        effect(p) {
            let x = p.mul(4).add(1)

            return x
        },
        effDesc: x => formatMult(x,3),
    },{
        curr: "core",

        req(c) {
            let x = c.mul(10).pow(2).mul(2.5e4).add(1e5).pow_base(10)

            return x
        },
        percent(c) {
            let x = c.max(1).log10().sub(1e5).div(2.5e4).root(2).div(10)

            return x
        },

        effect(p) {
            let x = p.mul(50)

            return x
        },
        effDesc: x => "+"+format(x),
    },{
        curr: "vibranium",

        req(c) {
            let x = c.mul(9).add(9).pow_base(10)

            return x
        },
        percent(c) {
            let x = c.max(1).log10().sub(9).div(9)

            return x
        },

        effect(p) {
            let x = p.mul(5)

            return x
        },
        effDesc: x => "+"+format(x),
    },
]

function setupPAHtml() {
    let h = ""

    for (let i = 0; i < PARTICLE_ACCELERATOR.length; i++) {
        var PA = PARTICLE_ACCELERATOR[i]

        h += `
        <div id="particle-accel-${i}-div">
            <button id="particle-accel-${i}-button" class="particle-accel-button" onclick="player.humanoid.particle_accel.active = ${i}"></button>
            <div class="particle-accel-bar">
                <div class="particle-accel-bar-proj" id="pab-${i}-proj"></div>
                <div class="particle-accel-bar-inner" id="pab-${i}-inner"></div>
                <div class="particle-accel-bar-outer" id="pab-${i}-outer">12.3%</div>
            </div>
        </div>
        `
    }

    el('particle-accel-table').innerHTML = h
}

function updatePAHtml() {
    let text = [
        lang_text('particle-accel-boost'),
    ]

    for (let i = 0; i < PARTICLE_ACCELERATOR.length; i++) {
        var PA = PARTICLE_ACCELERATOR[i], curr = CURRENCIES[PA.curr]

        let unl = tmp.partcle_accel_unl > i

        el(`particle-accel-${i}-div`).style.display = el_display(unl)

        if (!unl) continue

        el(`particle-accel-${i}-button`).innerHTML = lang_text('particle-accel-condense',curr.costName) + " " + text[0][i](PA.effDesc(tmp.particle_accel_eff[i]))
        el(`particle-accel-${i}-button`).className = el_classes({ active : player.humanoid.particle_accel.active == i, 'particle-accel-button' : true })

        let proj = PA.percent(curr.amount).max(0).min(1), per = player.humanoid.particle_accel.percent[i].max(0).min(1)

        el(`pab-${i}-proj`).style.width = proj.toNumber() * 100 + "%"
        el(`pab-${i}-inner`).style.width = per.toNumber() * 100 + "%"
        el(`pab-${i}-outer`).innerHTML = formatPercent(per) + (proj.sub(per).gt(1e-4) ? " (+" + formatPercent(proj.sub(per)) + ")" : "")
    }
}

function updatePATemp() {
    let u = 2 + player.humanoid.forge.level.wormhole

    tmp.partcle_accel_unl = u

    for (let i = 0; i < PARTICLE_ACCELERATOR.length; i++) {
        var PA = PARTICLE_ACCELERATOR[i]

        tmp.particle_accel_eff[i] = PA.effect(i < u ? player.humanoid.particle_accel.percent[i] : E(0))
    }
}

function getPAEffect(i,def=1) { return tmp.particle_accel_eff[i] ?? def }