const REBIRTH = {
    waiting: false,

    reset() {
        createConfirmationPopup(lang_text("popup-desc")["rebirth-confirm"],()=>this.process(true))
    },
    undo() {
        createConfirmationPopup(lang_text("popup-desc")["rebirth-undo"],()=>this.process(false))
    },

    process(next=false) {
        if (this.waiting)
            return;

        this.waiting = true;
        el('ending').style.opacity = 0;
        el('ending').animate({
            opacity: [1,0]
        },{
            duration: 10000,
            iterations: 1,
        })
        document.body.style.backgroundColor = 'lightseagreen'
        document.body.animate({
            background: ['black','lightseagreen']
        },{
            duration: 10000,
            iterations: 1,
        })

        setTimeout(() => {
            this.doReset();

            if (next) {
                player.rebirth.first = true;
                player.rebirth.points = player.rebirth.points.add(1);
                player.rebirth.total = player.rebirth.total.add(1);
                player.rebirth.best = Math.min(player.rebirth.best, player.timePlayed)

                player.rebirth.past10.push([player.timePlayed, E(1)])
                if (player.rebirth.past10.length > 10) player.rebirth.past10.splice(0,1);
            }

            player.timePlayed = 0;

            el('ending').style.display = 'none';
            el('app').style.display = el('tabs').style.display = el('main-line').style.display = el('god-tab').style.display = el('bottom-div').style.display = '';
            el('app').style.opacity = 1;
            
            el('app').animate({
                opacity: [0,1]
            },{
                duration: 10000,
                iterations: 1,
            })
        }, 10000);
    },

    doReset() {
        tab = 0
        tab_name = "shark-upgs"

        const keep_presets = player.humanoid.tree_preset

        const force_key = [
            'fish', 'total_fish', 'shark_level', 'shark_rank', 'shark_tier', 'shark_upg',

            'prestige', 'research', 'explore', 'core', 'humanoid', 'singularity',
            'solar_system', 'hadron', 'auto', 'omni', 'end', 'feature'
        ]
        const D = getPlayerData()

        for (const K of force_key) player[K] = D[K];
        player.humanoid.tree_preset = keep_presets;
        this.restore();

        reloadTemp()
    },

    restore() {
        this.upgrades.forEach((x,i) => {
            if (player.rebirth.upgrades.includes(i)) x?.();
        })
    },

    calculateGlobalMult() {
        let x = E(1), y = { other : E(1) }

        x = (y.base = player.rebirth.total.add(1)).mul(x)
        x = (y.time = Decimal.div(86400, player.rebirth.best).sqrt().add(.5).max(1)).mul(x)

        if (this.hasUpgrade(9)) x = x.mul(1.5);

        y.other = x.div(y.base).div(y.time)

        return [x, y]
    },

    upgrades: [
        () => {
            unlockAutomations(['shark','su','spu','eu','core_reactor','core_radiation','radioactive_boosts','research'])
        },
        () => {
            unlockAutomations(['mining_upgs','humanoid','mining_tier','faith','evolution_tree','mining_ascend','remnant','sing_research','rocket_part'])
        },
        () => {
            unlockAutomations(['nucleobase','gal_eu'])
        },
        () => {
            unlockAutomations(['osu','ostu','ue','nucleus'])
        },
        null,
        null,
        null,
        null,
        null,
        null,
    ],

    hasUpgrade: i => player.rebirth.upgrades.includes(i),

    purchaseUpgrade(i) {
        if (!player.rebirth.upgrades.includes(i) && player.rebirth.points.gte(1)) {
            player.rebirth.points = player.rebirth.points.sub(1);
            player.rebirth.upgrades.push(i)
            this.upgrades[i]?.()
        }
    },

    temp() {
        [tmp.global_mult, tmp.global_mults] = this.calculateGlobalMult();
    },

    setupHTML() {
        let h = ''

        for (let i = 0; i < this.upgrades.length; i++) {
            h += `<button class="rebirth-upgrade" id='rebirth-upgrade-${i}' style="background: url('textures/rebirth/upg${i}.png')" onclick="REBIRTH.purchaseUpgrade(${i})"></button>`;
        }

        el('rebirth-upgrades-div').innerHTML = h;

        h = `<tr>
            <td></td>
            <td>${lang_text('rebirth-time')}</td>
            <td>${lang_text('rebirth-points')}</td>
        </tr>`

        for (let i = 0; i < 10; i++) {
            h += `<tr id="rebirth-past10-${i}">
                <td>#${i+1}</td>
                <td id="rebirth-past10-${i}-time">???</td>
                <td id="rebirth-past10-${i}-worth">???</td>
            </tr>`
        }

        el('rebirth-past10-table').innerHTML = h;

        let text = lang_text('rebirth-upgrades')

        for (let i = 0; i < this.upgrades.length; i++) updateTooltip(el(`rebirth-upgrade-${i}`), () => {
            return `<h4>${text[i][0]}</h4><hr class='line'>${text[i][1]}`
        })
    },

    postSetupHTML() {
        let text2 = lang_text('global-mults')

        updateTooltip(el('global-mult'), () => {
            return `<h4>${lang_text('global-mult-title')}</h4><hr class='line'><ul>${['base','time','other'].map(id => `<li>${text2[id](toColoredText(formatMult(tmp.global_mults[id]), 'lime'))}</li>`).join("")}</ul>`
        })
    },

    html: {
        upgrades() {
            el('rebirth-amount').innerHTML = `${format(player.rebirth.points,0)} / ${format(player.rebirth.total,0)}`
            el('global-mult').textContent = formatMult(tmp.global_mult)

            for (let i = 0; i < REBIRTH.upgrades.length; i++) {
                el(`rebirth-upgrade-${i}`).className = el_classes({'rebirth-upgrade': true, locked: player.rebirth.points.lt(1), bought: player.rebirth.upgrades.includes(i)})
            }
        },
        past10() {
            for (let i = 0; i < 10; i++) {
                const p = player.rebirth.past10[i]
                el(`rebirth-past10-${i}`).style.display = el_display(p !== undefined)
                if (p !== undefined) {
                    el(`rebirth-past10-${i}-time`).textContent = formatTime(p[0])
                    el(`rebirth-past10-${i}-worth`).textContent = format(p[1],0)
                }
            }
        },
    },
}