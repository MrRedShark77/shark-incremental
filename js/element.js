function el_display(bool) { return bool ? "" : "none" }
function el_classes(data) { return Object.keys(data).filter(x => data[x]).join(" ") }

function updateHTML() {
    updateTabs()

    el('fish-amount').innerHTML = CURRENCIES.fish.amount.format(0) + (tmp.cr_active ? " " + icon("radioactive") : "")
    el('fish-gain').textContent = tmp.currency_gain.fish.gt(0) ? CURRENCIES.fish.amount.formatGain(tmp.currency_gain.fish) : ""

    updateTopCurrenciesHTML()
    updateProgressHTML()
}

function setupHTML() {
    setupTabs()

    setupSharkHTML()
    setupTopCurrenciesHTML()
    setupAutomationHTML()
    setupResearchHTML()
    setupExplorationHTML()
    setupCoreHTML()

    setupLanguageHTML()

    let text = lang_text("option-buttons-text")
    el('option-buttons').innerHTML = `
    <button class="big-btn" onclick="save()">${text[0]}</button>
    <button class="big-btn" onclick="export_copy()">${text[1]}</button>
    <button class="big-btn" onclick="exporty()">${text[2]}</button>
    <button class="big-btn" onclick="importy()">${text[3]}</button>
    <button class="big-btn" onclick="importy_file()">${text[4]}</button>
    <button class="big-btn" id="wipe" onclick="wipeConfirm()">${text[5]}</button>
    `

    for (let x of document.getElementsByTagName('*')) if (x.id in lang_data) x.innerHTML = lang_text(x.id)
}

function setupTopCurrenciesHTML() {
    let h = ""

    for (let [i,x] of Object.entries(TOP_CURR)) {
        h += `
        <div class="curr-top" id="curr-top-${i}-div">
            <div id="curr-top-${i}-amt1"><span id="curr-top-${i}-amt2">???</span> ${CURRENCIES[x.curr].costName}</div><button onclick="doReset('${x.curr}')" id="curr-top-${i}-btn">Reset</button>
        </div>
        `
    }

    el('currs-top').innerHTML = h
}
function updateTopCurrenciesHTML() {
    for (let [i,x] of Object.entries(TOP_CURR)) {
        var unl = !x.unl || x.unl()
        el(`curr-top-${i}-div`).style.display = el_display(unl)

        if (!unl) continue

        var c = CURRENCIES[x.curr]
        el(`curr-top-${i}-amt2`).textContent = c.amount.format(0) + ((c.passive??1)>0?" "+c.amount.formatGain(tmp.currency_gain[x.curr].mul(c.passive)):"")

        let req = !x.req || x.req()
        el(`curr-top-${i}-btn`).innerHTML = req ? lang_text('curr-top-'+i+'-reset',tmp.currency_gain[x.curr]) : lang_text('curr-top-'+i+'-req',c.require)
        el(`curr-top-${i}-btn`).className = el_classes({locked: !req})
    }
}

function updateProgressHTML() {
    let f = player.feature
    let p = PROGRESS[f]
    
    if (p) {
        let l = p.logHeight??0, m = Decimal.pow(10,l-1)
        let percent = ( l > 0 ? p.amount.max(m).iteratedlog(10,l).div(Decimal.max(p.require,m).iteratedlog(10,l)) : p.amount.div(p.require) ).max(0).min(1).toNumber()
        let cond = !p.auto && p.amount.gte(p.require)

        el('fp-text').innerHTML = cond && p.cond_text ? lang_text('progress-'+f+'-cond-text') : lang_text('progress-'+f+'-text',p.require) + " ("+formatPercent(percent,3)+")"
        el('fp-bar').style.width = percent*100+"%"
        el('fp-bar').style.animation = cond ? "cond-bar 1s infinite" : "none"
    } else {
        el('fp-text').innerHTML = lang_text('maxed-progress')
        el('fp-bar').style.width = "100%"
        el('fp-bar').style.animation = "none"
    }
}