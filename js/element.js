function el_display(bool) { return bool ? "" : "none" }
function el_classes(data) { return Object.keys(data).filter(x => data[x]).join(" ") }

function updateHTML() {
    updateTabs()

    updateSharkUpgradesHTML()

    var f, ff = []

    el('fish-div').style.display = el_display(!player.omni.active)
    el('game-speed-div').style.display = el('antimatter-div').style.display = el('antimatter-god-div').style.display = el_display(!player.omni.god && player.omni.active)
    el('antimatter-equivalent-div').style.display = el_display(player.omni.active)
    el('god-fish-div').style.display = el_display(player.omni.god)

    if (player.omni.god) {
        f = CURRENCIES['omni-fish'].amount

        el('god-fish-amount').textContent = f.format(0)
        el('god-fish-gain').textContent = tmp.currency_gain['omni-fish'].gt(0) ? f.formatGain(tmp.currency_gain['omni-fish']) : ""
        el('antimatter-equivalent').innerHTML = OMNI.god_equivalents[player.omni.overmodification] ?? "Ω"
    } else if (player.omni.active) {
        f = CURRENCIES['anti-fish'].amount, ff = []

        if (f.gte(tmp.omni.op_start)) ff.push(icon("warn"));

        el('antimatter-amount').innerHTML = f.format(0) + (ff.length > 0 ? " " + ff.join("") : "")
        el('antimatter-gain').textContent = tmp.currency_gain['anti-fish'].gt(0) ? f.formatGain(tmp.currency_gain['anti-fish'].mul(tmp.speed)) : ""

        el('antimatter-equivalent').innerHTML = OMNI.equivalents[player.omni.tier] ?? "∞"

        el('omni-tier').textContent = player.omni.tier.format(0)

        el('game-speed').textContent = formatMult(tmp.speed)

        el('antimatter-god-div').style.display = el_display(f.gte(tmp.omni.op_start))
        if (f.gte(tmp.omni.op_start)) el('antimatter-god-penalty').textContent = format(tmp.omni.op_penalty,3);
    } else {
        f = CURRENCIES.fish.amount, ff = []
        
        if (f.gte(tmp.fish_cap)) ff.push(icon("benzene"));
        if (f.gte(tmp.shark_op_start)) ff.push(icon("biohazard"));
        if (tmp.cr_active) ff.push(icon("radioactive"));

        el('fish-amount').innerHTML = f.format(0) + (ff.length > 0 ? " " + ff.join("") : "")
        el('fish-gain').textContent = tmp.currency_gain.fish.gt(0) ? CURRENCIES.fish.amount.formatGain(tmp.currency_gain.fish) : ""
    }

    updateTopCurrenciesHTML()
    updateProgressHTML()

    updateTooltips()
}

function setupHTML() {
    setupTabs()

    setupScalingsTable()
    setupSharkHTML()
    setupTopCurrenciesHTML()
    setupAutomationHTML()
    setupResearchHTML()
    setupExplorationHTML()
    setupCoreHTML()
    setupEvolutionHTML()
    setupForgeHTML()
    setupPAHtml()
    setupSingularityHTML()
    setupSpaceBaseHTML()
    setupHadronHTML()

    setupOmniHTML()
    setupUndeadHTML()
    setupRuneHTML()
    REBIRTH.setupHTML()

    setupTooltips()

    setupLanguageHTML()
    
    let text = lang_text("option-buttons-text")
    el('option-buttons').innerHTML = `
    <button class="big-btn" onclick="save()">${text[0]}</button>
    <button class="big-btn" onclick="export_copy()">${text[1]}</button>
    <button class="big-btn" onclick="exporty()">${text[2]}</button>
    <button class="big-btn" onclick="importy()">${text[3]}</button>
    <button class="big-btn" onclick="importy_file()">${text[4]}</button>
    <button class="big-btn" id="wipe" onclick="wipeConfirm()">${text[5]}</button>
    <button class="big-btn" onclick="window.open('https://discord.gg/mrredshark77-club-710184682620190731')">${text[6]}</button>
    <button class="big-btn" onclick="window.open('https://boosty.to/mrredshark77/donate')">${text[7]}</button>
    `

    for (let x of document.getElementsByTagName('*')) if (x.id in lang_data && ALLOWED_LANG_KEY_TO_ELEMENT_ID.includes(x.id)) x.innerHTML = lang_text(x.id);

    REBIRTH.postSetupHTML()

    text = lang_text("endings")
    for (let i = 0; i < 2; i++) el('ending-'+i).innerHTML = text[i];

    text = lang_text("ending-options")
    for (let i = 0; i < 4; i++) el('ending-button-'+i).innerHTML = text[i];
}

function setupTopCurrenciesHTML() {
    let h = ""

    for (let [i,x] of Object.entries(TOP_CURR)) {
        h += `
        <div class="curr-top" id="curr-top-${i}-div">
            <div id="curr-top-${i}-amt1"><span id="curr-top-${i}-amt2">???</span> ${CURRENCIES[x.curr].costName}</div><button onclick="doReset('${x.reset ?? x.curr}')" id="curr-top-${i}-btn">Reset</button>
        </div>
        `
    }

    el('currs-top').innerHTML = h
}
function updateTopCurrenciesHTML() {
    for (let [i,x] of Object.entries(TOP_CURR)) {
        i = parseInt(i)

        var unl = !x.unl || x.unl()
        el(`curr-top-${i}-div`).style.display = el_display(unl)

        if (!unl) continue

        var c = CURRENCIES[x.curr]
        el(`curr-top-${i}-amt2`).textContent = c.amount.format(0) + ((c.passive??1)>0?" "+c.amount.formatGain(tmp.currency_gain[x.curr].mul(c.passive)):"")

        let req = !x.req || x.req()
        el(`curr-top-${i}-btn`).innerHTML = req ? lang_text('curr-top-'+i+'-reset',tmp.currency_gain[x.curr],...c.moreArg??[]) : lang_text('curr-top-'+i+'-req',c.require)
        el(`curr-top-${i}-btn`).className = el_classes({locked: !req, omni: i > 6})
    }
}

function updateProgressHTML() {
    let f = player.feature
    let p = PROGRESS[f]

    el('fp-bar').className = tmp.ss_difficulty ? "observ" : ""
    
    if (p || tmp.ss_difficulty) {
        let l = 0, m = Decimal.pow(10,l-1), amount, req, auto = false, cond_text = "???", progress_text = "???";

        if (tmp.ss_difficulty) {
            let ss = SOLAR_SYSTEM[player.solar_system.active]

            amount = CURRENCIES.observ.total, req = ss.goal, l = 1, cond_text = lang_text('observ-cond'), progress_text = lang_text('observ-progress',format(req,0));
        } else {
            amount = p.amount, req = p.require, auto = p.auto, l = p.logHeight??0, cond_text = lang_text('progress-'+f+'-cond-text'), progress_text = lang_text('progress-'+f+'-text',req);
        }
        
        let percent = ( l > 0 ? amount.max(m).iteratedlog(10,l).div(Decimal.max(req,m).iteratedlog(10,l)) : amount.div(req) ).max(0).min(1).toNumber()
        if (isNaN(percent)) percent = 0;
        let cond = !auto && amount.gte(req)

        el('fp-text').innerHTML = cond && (tmp.ss_difficulty || p.cond_text) ? cond_text : progress_text + " ("+formatPercent(percent,3)+")"
        el('fp-bar').style.width = percent*100+"%"
        el('fp-bar').style.animation = cond ? "cond-bar 1s infinite" : "none"
    } else {
        el('fp-text').innerHTML = lang_text('maxed-progress')
        el('fp-bar').style.width = "100%"
        el('fp-bar').style.animation = "none"
    }
}