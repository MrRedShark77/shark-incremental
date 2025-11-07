const DNA = {
    get length() {
        let x = E(1)

        for (let i in NUCLEOBASES.ctn) x = x.mul(player.hadron.nucleobases[i].amount.add(1));

        x = x.sub(1).max(0).root(4).mul(2 * .34)

        .mul(simpleResearchEffect('h17')).mul(simpleResearchEffect('h18'))

        if (hasResearch('h21')) x = x.mul(player.hadron.dna.pow(.801 + player.hadron.dna.min(1e100).log10().toNumber()/100 * .064346524)); // 24
        
        return x
    },

    expand() {
        let length = this.length

        if (length.gt(player.hadron.dna)) {
            player.hadron.dna = length

            updateTemp()

            player.hadron.amount = E(0)
            player.hadron.total = E(0)

            for (let i in NUCLEOBASES.ctn) {
                player.hadron.nucleobases[i] = {
                    amount: E(0),
                    experience: E(0),
                    upg: [E(0), E(0)],
                }
            }

            doReset('hadron',true)

            tmp.pass = 3
        }
    },

    get boosts() {
        let y = player.hadron.dna, d3 = hasDNAMilestone(3)

        let x = {}

        x.fish = hasDNAMilestone(4) ? y.div(1e3) : d3 ? y.sqrt().div(100) : y.add(1).log10().div(100)

        x.nucleobases = d3 ? y.sqrt().div(10).add(1) : y.add(1).log10().div(10).add(1).sqr()

        return x
    },

    milestones: [ 300, 400, 500, 600, 800, 1000, 2250, 3800, 1e4, 114031.763335 ],
}

function hasDNAMilestone(i) { return player.hadron.dna.gte(DNA.milestones[i]) }

function updateDNATemp() {
    const B = DNA.boosts

    tmp.dna_boosts.fish = B.fish
    tmp.dna_boosts.nucleobases = B.nucleobases
}

function updateDNAHTML() {
    el('dna-length').innerHTML = player.hadron.dna.format(3)
    el('dna-length-gain').innerHTML = hasDNAMilestone(8) ? "+"+DNA.length.sub(player.hadron.dna).max(0).mul(FPS).format(3)+"/s" : "+"+DNA.length.sub(player.hadron.dna).max(0).format(3)

    el('dna-boost1').innerHTML = tmp.dna_boosts.fish.format(4)
    el('dna-boost2').innerHTML = formatPercent(tmp.dna_boosts.nucleobases.sub(1))

    for (let i in DNA.milestones) {
        // el('dna-milestone-'+i).style.display = player.hadron.dna.gte(DNA.milestones[i]) ? 'table-row' : 'none'
        el('dna-milestone-'+i).className = el_classes({'completed': player.hadron.dna.gte(DNA.milestones[i])})
        el('dna-milestone-'+i+'-length').innerHTML = format(DNA.milestones[i],0) + "nm"
    }
}

function setupDNAHTML() {
    let h = '', text = lang_text('dna-milestones')

    for (let i in DNA.milestones) {
        h += `
        <tr id="dna-milestone-${i}">
            <td id="dna-milestone-${i}-length">${format(DNA.milestones[i],0)}nm</td>
            <td>${text[i]}</td>
        </tr>
        `
    }
    
    el('dna-milestone-table').innerHTML = h
}