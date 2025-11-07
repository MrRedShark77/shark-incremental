const ELEMENT_SYMBOLS = [
    'Nu',
    'H','He','Li','Be','B','C','N','O','F','Ne',
    'Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca',
    'Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn',
    'Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr',
    'Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn',
    'Sb','Te','I','Xe','Cs','Ba','La','Ce','Pr','Nd',
    'Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb',
    'Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg',
    'Tl','Pb','Bi','Po','At','Rn','Fr','Ra','Ac','Th',
    'Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm',
    'Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds',
    'Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og'
];

const ISOTOPES = {
    get cost() {
        let x = player.omni.total_isotopes.scaleAll('isotopes').pow(1.25).mul(50).add(100).pow10()

        x = x.div(decaySeriesEffect(10,0))

        return x.max(1e100)
    },
    get amount() {
        if (player.omni.nucleus.lt(1e100)) return E(0);

        let x = player.omni.nucleus.mul(decaySeriesEffect(10,0)).log10().sub(100).div(50).root(1.25).scaleAll('isotopes',true).floor().add(1)

        return x
    },
    get unspent() {
        let x = player.omni.total_isotopes
        for (let i = 0; i < this.ctn.length; i++) x = x.sub(player.omni.isotopes[i]);
        return x.max(0);
    },

    ctn: [
        { // 0
            id: 1,
            unl: () => true,
            rewards: [
                [1,0,()=>.1,x=>format(x,3)],
                [2,0,()=>.075,x=>format(x,3)],
                [3,0,()=>.05,x=>format(x,3)],
                [4,0,()=>.025,x=>format(x,3)],
            ],
        },{
            id: 2,
            unl: () => true,
            rewards: [
                [3,[2,1],()=>{
                    let base = Decimal.add(2, ISOTOPES.boost(1,1)[1]).mul(decaySeriesEffect(15,0)), exp = Math.max(.5, ISOTOPES.boost(1,2), ISOTOPES.boost(1,3), ISOTOPES.boost(1,4))

                    return [base,player.omni.undead_upgs[4].pow(exp).add(player.omni.undead_upgs[5].pow(exp)).pow_base(base)]
                },x=>[format(x[0],0),formatMult(x[1])]],
                [4,[1,0],x=>[1,x],x=>[format(x[0],0),"+"+format(x[1],0)]],
                [5,0,()=>.55,x=>formatPow(x,2)],
                [6,0,()=>.6,x=>formatPow(x,2)],
                [7,0,()=>.65,x=>formatPow(x,2)],
            ],
        },{
            id: 3,
            unl: () => player.omni.tier.gte(29),
            rewards: [
                [5,0,()=>.04,x=>format(x,2)],
                [6,0,()=>.03,x=>format(x,2)],
                [7,0,()=>.02,x=>format(x,2)],
                [8,0,()=>.01,x=>format(x,2)],
            ],
        },{
            id: 6,
            unl: () => player.omni.tier.gte(31),
            rewards: [
                [11,[2,1],()=>{
                    let base = Decimal.add(2, ISOTOPES.boost(3,1)[1]), exp = Math.max(1/3, ISOTOPES.boost(3,2), ISOTOPES.boost(3,3))

                    return [base,UNDEAD.chance.pow(exp).pow_base(base)]
                },x=>[format(x[0],0),formatMult(x[1])]],
                [12,[1,0],x=>[1,x],x=>[format(x[0],0),"+"+format(x[1],0)]],
                [13,0,()=>.4,x=>formatPow(x,1)],
                [14,0,()=>.5,x=>formatPow(x,1)],
            ],
        },{
            id: 7,
            unl: () => player.omni.tier.gte(32),
            rewards: [
                [13,1,()=>2,x=>x],
                [14,0.25,()=>0.5,x=>x],
                [15,1,()=>Decimal.add(decaySeriesEffect(6,0),1).log10().div(10).add(1).sqrt(),x=>format(x,3)+'√'],
                [16,1,()=>10,x=>x],
            ],
        },{ // 5
            id: 8,
            unl: () => player.omni.tier.gte(34),
            rewards: [
                [15,1,()=>1.25,x=>formatPercent(x-1,0)],
                [16,1,()=>1.2,x=>formatPercent(x-1,0)],
                [17,1,()=>1.15,x=>formatPercent(x-1,0)],
                [18,1,()=>1.1,x=>formatPercent(x-1,0)],
                [19,1,()=>1.05,x=>formatPercent(x-1,0)],
            ],
        },{
            id: 10,
            unl: () => player.omni.tier.gte(37),
            rewards: [
                [19,0,()=>.025,x=>format(x,3)],
                [20,0,()=>.020,x=>format(x,3)],
                [21,0,()=>.015,x=>format(x,3)],
                [22,0,()=>.010,x=>format(x,3)],
                [23,0,()=>.005,x=>format(x,3)],
            ],
        },
    ],

    setupHTML() {
        let h = ''

        for (let i = 0; i < this.ctn.length; i++) {
            const D = this.ctn[i]

            h += `<div class="isotope-div" id="isotope-${i}-div">
                <div class="isotope-buttons">
                    <button id="isotope-${i}-up" onclick="ISOTOPES.increment(${i})">+</button>
                    <button id="isotope-${i}-down" onclick="ISOTOPES.decrement(${i})">-</button>
                </div><div class="isotope-buttons">
                    <button id="isotope-${i}-up2" onclick="ISOTOPES.max(${i})">++</button>
                    <button id="isotope-${i}-down2" onclick="ISOTOPES.clear(${i})">--</button>
                </div>
                ${D.rewards.map((x,j) => `<div class="isotope-symbol" id="isotope-${i}-reward-${j}"><div><sup>${x[0]}</sup>${ELEMENT_SYMBOLS[D.id]}</div></div>`).join('')}
            </div>`
        }

        el('isotopes-table').innerHTML = h;

        let text = {
            element: lang_text('full-element-name'),
            isotopes: lang_text('isotope-rewards'),
        }

        for (let i = 0; i < this.ctn.length; i++) {
            const D = this.ctn[i]

            D.rewards.forEach((x,j) => {
                updateTooltip(el(`isotope-${i}-reward-${j}`), () => {
                    return `<h4>${text.element[D.id]}-${x[0]}</h4><hr class='line'>${text.isotopes[i][j](toColoredText(x[3](x[2](player.omni.isotopes[i])),'lime'))}`
                })
            })
        }
    },

    updateHTML() {
        var unspent = this.unspent;

        for (let i = 0; i < this.ctn.length; i++) {
            const D = this.ctn[i], unl = D.unl(), id = 'isotope-'+i;

            el(id+'-div').style.display = el_display(unl)
            if (!unl) continue;

            for (let j = 0; j < D.rewards.length; j++) el(`isotope-${i}-reward-${j}`).className = el_classes({'isotope-symbol': true, locked: player.omni.isotopes[i].lt(j+1)});

            el(id+'-up').className = el(id+'-up2').className = el_classes({locked: unspent.lte(0) || player.omni.isotopes[i].gte(D.rewards.length)})
            el(id+'-down').className = el(id+'-down2').className = el_classes({locked: player.omni.isotopes[i].lte(0)})
        }

        el('isotopes-amount').innerHTML = format(unspent,0) + " / " + format(player.omni.total_isotopes,0);
        el('isotopes-next').innerHTML = format(this.cost);
    },

    increment(i) {
        if (this.unspent.gt(0) && player.omni.isotopes[i].lt(this.ctn[i].rewards.length)) player.omni.isotopes[i] = player.omni.isotopes[i].add(1);
    },
    decrement(i) {
        if (player.omni.isotopes[i].gt(0)) {
            player.omni.isotopes[i] = player.omni.isotopes[i].sub(1);
            RESETS.reaction.doReset()
        }
    },
    max(i) {
        if (this.unspent.gt(0) && player.omni.isotopes[i].lt(this.ctn[i].rewards.length)) player.omni.isotopes[i] = player.omni.isotopes[i].add(this.unspent).min(this.ctn[i].rewards.length);;
    },
    clear(i) {
        if (player.omni.isotopes[i].gt(0)) {
            player.omni.isotopes[i] = E(0);
            RESETS.reaction.doReset()
        }
    },

    temp() {
        for (let i = 0; i < this.ctn.length; i++) {
            const D = this.ctn[i], T = tmp.omni.isotopes_effect[i], I = player.omni.isotopes[i]

            for (let j = D.rewards.length - 1; j >= 0; j--) T[j] = I.gt(j) ? D.rewards[j][2](I) : D.rewards[j][1];
        }
    },

    has: (i,j) => player.omni.isotopes[i].gt(j),
    boost: (i,j) => tmp.omni.isotopes_effect[i][j],
}