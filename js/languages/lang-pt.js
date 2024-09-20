// This is portuguese language file! It's not English!

LANGUAGES.PT = {
    name: "Português",
    inter_name: "Portuguese",
    icon: "lang-pt",

    text: {
        // Currencies

        'fish-name': "Peixe",
        'fish-costName': toTextStyle('Peixe','fish'),

        'prestige-name': "Fragmentos de prestígio",
        'prestige-costName': "Fragmentos de " + toTextStyle('prestígio','prestige'),

        'coral-name': "Corais",
        'coral-costName': toTextStyle('Corais','coral'),

        'ice-name': "Gelo",
        'ice-costName': toTextStyle('Gelo','ice'),

        'salt-name': "Sal",
        'salt-costName': toTextStyle('Sal','salt'),

        'snow-name': "Neve comprimida",
        'snow-costName': toTextStyle('Neve comprimida','snow'),

        'kelp-name': "Alga",
        'kelp-costName': toTextStyle('Alga','kelp'),

        'core-name': "Fragmentos Magmáticos",
        'core-costName': 'Fragmentos '+toTextStyle('Magmáticos','core'),
        
        'humanoid-name': "Homens-Tubarões",
        'humanoid-costName': toTextStyle('Homens','humanoid') + '-Tubarões',

        'remnants-name': "Remanescentes",
        'remnants-costName': toTextStyle('Remanescentes','black-hole'),

        'dark-matter-name': "Matéria Negra",
        'dark-matter-costName': toTextStyle('Matéria Negra','black-hole'),

        'observ-name': "Observatórios",
        'observ-costName': toTextStyle('Observatórios','observ'),

        'reserv-name': "Reservatórios",
        'reserv-costName': toTextStyle('Reservatórios','reserv'),

        'full-shark-level': 'Nível do ' + toTextStyle('Tubarão', 'shark'),
        'full-shark-rank': 'Rank do ' + toTextStyle('Tubarão', 'shark'),
        
        'sharkoid-faith': toTextStyle('Fé Sharkoid','humanoid'),

        'traject-name': "Trajetos",
        'traject-costName': toTextStyle('Trajetos','traject'),

        'curr-top-0-req': x => `Alcançe <b>${format(x)}</b>  ${toTextStyle('Peixes','fish')} totais`, 
        'curr-top-0-reset': x => `Prestigie por <b>${x.format(0)}</b> Fragmentos de ${toTextStyle('Prestígio','prestige')}`,

        'curr-top-0-req': x => `Alcançe <b>${format(x)}</b>  Fragmentos de ${toTextStyle('prestígio','prestige')} totais`, 
        'curr-top-1-reset': x => `Entre no núcleo por <b>${x.format(0)}</b> Fragmentos ${toTextStyle('Magmáticos','core')}`,
        
        'curr-top-2-req': x => `Alcançe <b>${format(x)}</b> ${toTextStyle('Peixes','fish')}`, 
        'curr-top-2-reset': (x,next) => `Evolua seus ${toTextStyle('Tubarões','shark')} para <b>${format(x,0)}</b> ${toTextStyle('Homens','humanoid')}-Tubarões (Próximo em <b>${format(next)}</b> ${toTextStyle('Peixes','fish')})`,

        'curr-top-3-req': x => `Alcançe <b>${format(x)}</b> ${toTextStyle('Peixes','fish')} & <b>8</b> ${toTextStyle('Buracos Negros','black-hole')}`, 
        'curr-top-3-reset': x => `Sacrifique seus ${toTextStyle('Tubarões','shark')} para <b>${format(x,0)}</b> ${toTextStyle('Matéria Negra','black-hole')}`,

        'curr-top-4-req': x => `Alcançe <b>${format(x)}</b> ${toTextStyle('Observatórios','observ')}`, 
        'curr-top-4-reset': x => `Reserve seus observatórios para <b>${format(x,0)}</b> ${toTextStyle('Reservatórios','reserv')}`,

        'curr-top-5-req': x => `Alcançe <b>${format(x)}</b> ${toTextStyle('Reservatórios','reserv')}`, 
        'curr-top-5-reset': x => `Viaje para <b>${format(x,0)}</b> ${toTextStyle('Trajetos','traject')}`,
        
        'radioactive-name': toTextStyle('Radiação '+icon("radioactive"),'core'),

        // Tabs

        'tab-shark': toTextStyle('Tubarão','shark'),
        'tab-options': "Opções",
        'tab-scalings': "Escalas",
        'tab-auto': "Automação",
        'tab-research': toTextStyle('Pesquisa','prestige'),
        'tab-explore': "Exploração",
        'tab-space-base': toTextStyle('Base Espacial','observ'),

        'tab-core': toTextStyle('Núcleo','core'),
        'tab-core-reactor': "Reator do "+toTextStyle(' Núcleo','core'),
        'tab-core-radiation': "Radiação do "+toTextStyle(' Núcleo','core'),
        'tab-core-assembler': "Montador do "+toTextStyle(' Núcleo','core'),

        'tab-evolution': toTextStyle('Evolução','humanoid'),
        'tab-shark-rank': "Rank do "+toTextStyle(' Tubarão','shark'),
        'tab-evolution-tree': "Árvore da "+toTextStyle(' Evolução','humanoid'),
        'tab-evolution-goal': "Objetivos da "+toTextStyle(' Evolução','humanoid'),
        'tab-cultivation': "Cultivação",
        'tab-forge': "Forja",
        'tab-particle-accel': "Acelerador de Partículas",

        'tab-singularity': toTextStyle('Singularidade','black-hole'),
        'tab-black-hole': toTextStyle('Buraco Negro','black-hole'),
        'tab-singularity-milestones': "Marcos Importantes da "+toTextStyle(' Singularidade','black-hole'),
        'tab-solar-system': "Sistema Solar",
        'tab-constellation': toTextStyle('Constelação','star'),


        // Elements

        'fish-div': `Seu ${toTextStyle('Tubarão','shark')} comeu <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> peixes.`,
        'shark-stats': `Estatisticas do ${toTextStyle(' Tubarão','shark')}<br>Nível: <h4 id="shark-level">???</h4><br>Rank: <h4 id="shark-tier">???</h4> <span id="shark-next-rank"></span>`,

        'shark-elo-div': `O ELO do ${toTextStyle('Tubarão','shark')} é<h3>${toTextStyle('0','humanoid','shark-elo')}</h3>.`,
        'shark-rank-div': `O Rank do ${toTextStyle('Tubarão','shark')} é <h3 id="shark-rank">0</h3>.`,
        'shark-rank-req-div': `O próximo rank precisa do ELO do ${toTextStyle('Tubarão','shark')}<h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4>.`,
        'shark-rank-note': `Nota: Rank do Tubarão vai ser resetado quando você fazer um reset para Evolução.`,

        'option-title-1': "Opções Principais",
        'option-title-2': "Notações",
        'option-title-3': "Confirmações",
        'option-title-4': "Idiomas",

        'offline-speed': "Acelera o tempo que ficou em off",
        'offline-done': "Pronto",

        'radioactive-div': `O ${toTextStyle('Núcleo','core')} já produziu <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('Núcleo','core'), rf = toTextStyle('Peixe '+icon("radioactive"),'fish')
            return `
            <summary>O ${c} experimento da radiação</summary>
            Experimentar uma radiação do núcleo força o reset do ${toTextStyle('Núcleo','core')}.
            Enquanto esta no experimento, os reatores do núcleo core não funcionam. ${toTextStyle('Peixe','fish')}, Fragmentos de ${toTextStyle('Prestígio','prestige')} , e os recursos dos primeiros 4 oceanos sofrem uma raiz cúbica.
            O experimento força seu ${toTextStyle('Tubarão','shark')} a comer ${rf}.<br>
            Melhore com radioativo${rf} para gerar mais ${toTextStyle('Radiação '+icon("radioactive"),'core')}, que dá a voce impulsos adicionais.
            `
        },
        'radioboost-div': `Você tem <h3 id="radioactive-boost">0</h3> impulsos radioativos.`,

        'core-temp-div': `A temperatura do ${toTextStyle('Núcleo','core')} é <h3>${toTextStyle('6,150','core','core-temperature')}</h3>, que faz impulsionadores de radiação <h4 id="core-temp-effect">100%</h4> melhores.`,
        'core-temp-after-div': `(A temperatura do ${toTextStyle('Núcleo','core')} vai ser <span id="core-temp-after">???</span> depois de um reset do ${toTextStyle('Núcleo','core')})`,
        
        'sharkoid-faith-div': `Você tem <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('Fé Sharkoid','humanoid')}.`,
        'respec-evolution-tree': `Reseta a sua árvore da ${toTextStyle('evolução','humanoid')}`,
        'export-evolution-tree': `Exporta a sua árvore da ${toTextStyle('evolução','humanoid')}`,
        'import-evolution-tree': `Importa a sua árvore da ${toTextStyle('evolução','humanoid')}`,
        'evolution-tree-preset': `Árvores de ${toTextStyle('evolução','humanoid')} salvas`,
        
        'rerun-evolution': `Faz outra run de ${toTextStyle('evolução','humanoid')}, resetando a árvore`,
        
        'mining-text': `Minerando... <b id="mining-progress">???</b> | Dano <b id="mining-damage">???</b> | ${toTextStyle(`Fortuna da Mineração <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'super-mining-text': `Super Dano <b id="super-mining-damage">???</b> | ${toColoredText(`Super Fortuna da Mineração <span id="super-mining-fortune">0</span>`+icon("luck"),'orange')}`,
        'mining-tier-div': `Tier da Mineração: <h3 id="mining-tier">0</h3>`,
        'mining-ascend-div': `Ascensão da Mineração: <h3 id="mining-ascend">0</h3>`,
        'mining-note': `Observação: Se você ficar preso enquanto minerar minério com alta saúde (levando muito tempo), você deve recarregar a página.`,
        'mining-tier-undo-btn': `Reduz o Tier de Mineração por 1 se você ficar preso enquanto minerar.`,

        'black-hole-button': `Porque você maximizou todos os aceleradores de partículas, você precisa formar um buraco negro caso entre em outro universo.`,
        'black-hole-html': `Você formou <h2>${toTextStyle('0','black-hole','black-hole-amount')}</h2> buracos negros, que reduz o expoente de peixe & fragmento de prestígio e o multiplicador de fragmentos magmáticos por<h3 id="black-hole-effect">^???</h3>.`,

        'remnant-html': `Você tem <h3>${toTextStyle('0','black-hole','remnant-amount')}</h3> <span id="remnant-gain"></span> Remanescentes.`,

        'rocket-part-div': `Você criou o total de <h3 id="total-rocket-part">0</h3> Partes do Foguete.`,
        'observ-div': `Você tem <h3>${toTextStyle('0','observ','observ-amount')}</h3> <span id="observ-gain"></span> observatórios. (<h3>${toTextStyle('0','observ','observ-total')}</h3> total)`,
        'reserv-div': `Você tem <h3>${toTextStyle('0','reserv','reserv-amount')}</h3> <span id="reserv-gain"></span> reservatórios.`,
        'traject-div': `Você tem <h3>${toTextStyle('0','traject','traject-amount')}</h3> <span id="traject-gain"></span> trajetos.`,
        'experiment-div': `Seu Tier do ${toTextStyle('Experimento','experiment')} é <h3 id="experiment-tier">0</h3>.`,

        'bh-tier-div': `Seu Tier do Buraco Negro é <h3>${toTextStyle('0','black-hole','bh-tier')}</h3>.`,
        'bh-tier-button': `Chega o requerimento para melhorar o Tier do ${toTextStyle('Buraco Negro','black-hole')} para uma recompensa poderosa.`,
        
        // Upgrades

        'su-s1-req': "Nível 3",
        'su-s1-name': 'Força do Tubarão',
        'su-s1-desc': `Aumenta a quantidade de ${toTextStyle('Peixes','fish')} comidos por <b>+1</b> por nível.`,

        'su-s2-req': "Nível 7",
        'su-s2-name': 'Agilidade do Tubarão',
        'su-s2-desc': `Aumenta a base do bônus de ${toTextStyle('Peixe','fish')}, referente ao nível do ${toTextStyle('tubarão','shark')} por <b>+1</b> por nível.`,

        'su-s3-req': "Nível 15",
        'su-s3-name': 'Dente do Tubarão',
        'su-s3-desc': `Aumenta o expoente da primeira melhoria do ${toTextStyle('Tubarão','shark')} por <b>+50%</b> por nível.`,

        'su-s4-req': "Nível 38",
        'su-s4-name': 'Expoente do Tubarão',
        'su-s4-desc': `Aumento o expoente do ${toTextStyle('Peixe','fish')} por <b>+1%</b> por nível.`,

        'su-s5-req': "Nível 640",
        'su-s5-name': 'Tubarão Radioativo',
        'su-s5-desc': `Aumenta  a produção de ${toTextStyle('Radiação '+icon("radioactive"),'core')} por <b>x2</b> por nível.`,

        'su-p1-req': "Primeiro prestígio",
        'su-p1-name': 'Super Força do Tubarão',
        'su-p1-desc': `Aumenta a quantidade de ${toTextStyle('Peixes','fish')} comidos por <b>×3</b> por nível.`,

        'su-p2-req': "Primeiro prestígio",
        'su-p2-name': 'Impulsionador de Prestígio',
        'su-p2-desc': `Aumenta a quantidade de ${toTextStyle('Peixes','fish')} comidos por <b>×log10(${toTextStyle('Peixes','fish')})</b> por nível.`,

        'su-p3-name': 'Tubarão Escalonado',
        'su-p3-desc': `Atrasa o primeiro nível do ${toTextStyle('Tubarão','shark')} escala por <b>+1</b> por nível.`,

        'su-m1-name': 'Dano da Mineração',
        'su-m1-desc': `Aumenta o dano da mineração por <b>×2</b> por nível.`,

        'su-m2-name': 'Velocidade da Mineração',
        'su-m2-desc': `Aumenta a velocidade da mineração por <b>+10%</b> por nível.`,

        'su-m3-req': 'Tier 3 da Mineração',
        'su-m3-name': 'Pedra comprimida',
        'su-m3-desc': `Aumenta <b>Pedra</b> minerada por <b>×2</b> por nível.`,

        'su-m4-req': 'Tier 6 da Mineração',
        'su-m4-name': 'Fortuna da Mineração',
        'su-m4-desc': `Aumenta a ${toTextStyle('Fortuna da Mineração '+icon('luck'),'gold')} por <b>+5</b> por nível.`,

        'su-m5-req': 'Tier 9 da Mineração',
        'su-m5-name': 'Minérios Básicos',
        'su-m5-desc': `Aumenta os primeiros 4 minérios minerados por <b>×2</b> por nível.`,

        'su-m6-req': 'Ascensão da Mineração 1',
        'su-m6-name': 'Super Dano da Mineração',
        'su-m6-desc': `Aumenta o super dano da mineração por <b>×2</b> por nível.`,

        'su-m7-req': 'Ascensão da Mineração 3',
        'su-m7-name': 'Super Velocidade da Mineração',
        'su-m7-desc': `Aumenta a normal e super velocidade da mineração por <b>+25%</b> por nível.`,

        'su-m8-req': 'Ascensão da Mineração 6',
        'su-m8-name': 'Rádio Compressado',
        'su-m8-desc': `Aumenta a quantidade de <b>Radium-223</b> minerados por <b>×2</b> por nível.`,

        'su-m9-req': 'Ascensão da Mineração 12',
        'su-m9-name': 'Super Fortuna da Mineração',
        'su-m9-desc': `Aumenta a ${toColoredText('Super Fortuna da Mineração '+icon('luck'),'orange')} por <b>+5</b> por nível.`,
        
        // Researches

        'research-p1-name': "Agilidade Prestigiosa",
        'research-p1-desc': `'Agilidade de tubarão' agora afeta a base do bônus de Fragmentos de ${toTextStyle('prestígio','prestige')} do nível do ${toTextStyle('Tubarão','shark')} em uma taxa reduzida.`,

        'research-p2-name': "Melhoria EL de tubarão",
        'research-p2-desc': `As melhorias de ${toTextStyle("Peixe",'fish')} do ${toTextStyle("Tubarão",'shark')} não mais gastam ${toTextStyle("Peixes",'fish')}.`,

        'research-p3-name': "Nível de tubarão melhorado",
        'research-p3-desc': `Reduz a base do requerimento do nível do ${toTextStyle("Tubarão",'shark')} em <b>1</b>,
        mas força um reinício de ${toTextStyle("prestígio",'prestige')}, redefinindo seus Fragmentos de ${toTextStyle('prestígio','prestige')} e Melhorias de ${toTextStyle('prestígio','prestige')}
        Desbloqueie novas melhorias de ${toTextStyle("Tubarão",'shark')}.`,

        'research-p4-name': "Reinício melhor",
        'research-p4-desc': `Levemente melhore a formula do ganho de Fragmentos de ${toTextStyle('prestígio','prestige')}.`,

        'research-p5-name': "Mega Força",
        'research-p5-desc': `'Superforça de tubarão' é <b>1%</b> mais forte para cada nível do${toTextStyle("Tubarão",'shark')} , começando em 100.`,

        'research-p6-name': "Tubarão Superescalonado ",
        'research-p6-desc': `'Tubarão escalonado' é <b>duas veses</b> mais forte.`,

        'research-p7-name': "Melhores Recursos I",
        'research-p7-desc': `O efeito de ${toTextStyle("Corais",'coral')} e ${toTextStyle("Gelo",'ice')}  é melhor.`,

        'research-p8-name': "Nível do Tubarão 3.0",
        'research-p8-desc': `Reduz ainda mais a base do requerimento do Nível do ${toTextStyle("Tubarão",'shark')} por 1.`,

        'research-p9-name': "Impulsionador de Prestígio mais barato",
        'research-p9-desc': `Reduz o escalonamento da dilatação do 'Impulsionador de Prestígio' por <b>-0.05</b> por nível.`,

        'research-e1-name': "Sinergia oceânica I",
        'research-e1-desc': `${toTextStyle("Sal",'salt')} Impulsiona a quantidade de ${toTextStyle("Corais",'coral')} gerada.`,

        'research-e2-name': "Sinergia oceânica II",
        'research-e2-desc': `${toTextStyle("Neve Comprimida",'snow')} Impulsiona a quantidade de ${toTextStyle("Gelo",'ice')} gerado.`,

        'research-e3-name': "Automação da Exploração",
        'research-e3-desc': `Automaticamente ganha a base dos primeiros <b>X</b> oceanos sem precisar explorar.`,

        'research-e4-name': "Oxidação de Alga",
        'research-e4-desc': `<b>Oxigênio</b> agora afeta a produção de ${toTextStyle("Alga",'kelp')} de forma reduzida.`,

        'research-e5-name': "Automação da Exporação MK2",
        'research-e5-desc': `Automaticamente ganha a base do Oceano Indiano sem precisar explorar. Melhora o efeito de ${toTextStyle('Alga','kelp')} denovo.`,

        'research-e6-name': "Fossa de Sunda",
        'research-e6-desc': `A profundidade do <b>Oceano Indiano</b> não tem mais limite e faz o seu efeito mais forte depois.`,

        'research-c1-name': "Mantedor C de pesquisa",
        'research-c1-desc': `Mantenha ${toTextStyle("Pesquisa",'prestige')} ao entrar no ${toTextStyle('Núcleo','core')}.`,

        'research-c2-name': "Mantedor C de exploração",
        'research-c2-desc': `Mantenha os primeiros <b>X</b> oceanos desbloqueados e a profundidade deles ao entrar no  ${toTextStyle('Núcleo','core')}.`,

        'research-c3-name': "Afeição do neon I",
        'research-c3-desc': `<b>Neon</b> agora afeta 'Dente de tubarão', 'Expoente de tubarão', and 'Tubarão escalonado'.`,

        'research-c4-name': "Nickel Aprimorado",
        'research-c4-desc': `O poder do efeito do <b>Níquel</b> é <b>dobrado</b> `,

        'research-c5-name': "Impulso Adicional ao Núcleo",
        'research-c5-desc': `O bonûs da radiação do núcleo agora afeta o impulso do reator do núcleo para ${toTextStyle('Peixe','fish')} de forma reduzida.`,

        'research-c6-name': "Redução da Radiação",
        'research-c6-desc': `Fragmentos ${toTextStyle('Magmaticos','core')} reduz o limite da radiação de forma reduzida.`,

        'research-c7-name': "Dente do Tubarão Melhorado",
        'research-c7-desc': `O efeito do 'Dente do Tubarão' é elevado à potência de  <b>2.5</b>.`,

        'research-c8-name': "Ferro e Neon Melhorados",
        'research-c8-desc': `O efeito de <b>Ferro</b> é duas vezes mais forte, e o requerimento de <b>Ferro</b> e <b>Neon</b> são reduzidos drasticamente.`,

        'research-c9-name': "Impulso do Núcleo Melhorado",
        'research-c9-desc': `Melhora o impulso do reator do núcleo para ${toTextStyle('Peixe','fish')}.`,

        'research-c10-name': "Tubarão Super-Escalonado",
        'research-c10-desc': `'Tubarão Escalonado' agora atrasa a segunda escala do Nível do ${toTextStyle('Tubarão','shark')} de forma reduzida.`,

        'research-c11-name': "Redução da Radiação Melhorado",
        'research-c11-desc': `'Redução da Radiação' é mais forte significativamente.`,

        'research-c12-name': "Mega Redução da Radiação",
        'research-c12-desc': `Reduz de forma drástica o limite da radiação.`,
        
        'research-c13-name': "Super Tubarão Radioativo",
        'research-c13-desc': `'Tubarão Radioativo' é <b>50%</b> mais forte.`,

        'research-c14-name': "Impulso do Núcleo Exponencial",
        'research-c14-desc': `Reatores do núcleo agora providencia um impulso exponencial para ${toTextStyle('Peixe','fish')}.`,

        'research-c15-name': "Auto-Radiação",
        'research-c15-desc': `Você consegue comprar uma melhoria de radiação, custando ${toTextStyle('Peixe','fish')} normal em vez de ${toTextStyle('Peixe '+icon('radioactive'),'fish')} radioativo, mas é elevado a potência de <b>^0.0001</b>. Então aumenta o ganho em <b>×10</b> por nível.`,

        'research-m1-name': "Fortuna Magmática",
        'research-m1-desc': `Aumenta a ${toTextStyle('Fortuna da Mineração '+icon('luck'),'gold')} em <b>+5</b> por nível.`,

        'research-m2-name': "Tubarão Hiperescalado",
        'research-m2-desc': `A terceira escala do nível do ${toTextStyle("Tubarão",'shark')} é atrasada por <b>+1000</b>.`,

        'research-m3-name': "Impulso Radioativo Escalonado",
        'research-m3-desc': `Atrasa a escala dos 2 primeiros impulsos radioativos em <b>+1</b> por nível.`,

        'research-m4-name': "Tier da Mineração Melhorado",
        'research-m4-desc': `O segundo, terceiro, quarto e quinto efeito do tier da mineração são <b>+25%</b> mais forte por nível.`,

        'research-f1-name': "Expoente do Rank Básico",
        'research-f1-desc': `Aumenta o expoente do ELO do ${toTextStyle("Tubarão",'shark')} por <b>+25%</b> por nível.`,

        'research-f2-name': "Mais Fé Sharkoid",
        'research-f2-desc': `Ganha mais ${toTextStyle('Fé Sharkoid','humanoid')} a partir de ${toTextStyle('Peixe','fish')} e Fragmentos de ${toTextStyle("Prestígio",'prestige')}.`,

        'research-f3-name': "Reatores do Núcleo Escalonado",
        'research-f3-desc': `Atrasa a primeira escala dos reatores do núcleo em <b>+1</b> por nível.`,

        'research-f4-name': "Menos Softcap da Temperatura do Núcleo",
        'research-f4-desc': `O softcap da temperatura do ${toTextStyle('núcleo','core')} é mais fraco.`,

        'research-f5-name': "Impulso de Vibranium",
        'research-f5-desc': `<b>Vibranium</b> impulsiona dano da mineração de forma reduzida.`,

        'research-f6-name': "Tier da Mineração Universal",
        'research-f6-desc': `Os primeiros 9 minérios são impulsionados pelo tier da mineração.`,

        'research-f7-name': "Melhor ELO do Tubarão",
        'research-f7-desc': `A base de homens-tubarões na formula do ELO do ${toTextStyle("Tubarão",'shark')} é melhorado para <b>x</b> to <b>2<sup>x</sup>-1</b>.`,

        'research-f8-name': "Vida do Minério mais Fraco",
        'research-f8-desc': `O primeiro efeito do tier de mineração é reduzido.`,

        'research-s1-name': "Peixe de Sobra",
        'research-s1-desc': `${toTextStyle("Peixe",'fish')} impulsiona a geração de ${toTextStyle("Remanescentes",'black-hole')} de forma reduzida.`,

        'research-s2-name': "Melhorado Impulso do Rank",
        'research-s2-desc': `Melhora o Impulso do Rank do ${toTextStyle("Tubarão",'shark')} para Fragmentos de ${toTextStyle('Prestígio','prestige')}.`,

        'research-s3-name': "Oceano Puro",
        'research-s3-desc': `Os oceanos <b>Pacifico e Ártico</b> providênciam um impulso exponencial, e melhora os <b>oceanos Atlântico e Antártico</b>.`,

        'all-research': {
            's4': ["Oceano Puro II",`O oceano <b>Indíco</b> providência um impulso exponencial de forma reduzida.`],
            's5': ["Oceano Puro III",`As reduções do progresso de profundidade dos primeiros <b>N</b> oceanoss são removidos até o Oceano <b>Indíco</b>. O sexto nível melhorar o decímo bonûs radioativo.`],

            'dm1': ["Buraco Negro Inicial",`Começa com <b>+1</b> ${toTextStyle("Buraco Negro",'black-hole')} formado no sacrificio por nível. Cada inicial buraco negro atrasa a redução.`],
            'dm2': ["Sobra Melhorada I",`Melhora a melhoria de ${toTextStyle("Sobra",'black-hole')} "Bem-vindo denovo", ele afeta Fragmentos de ${toTextStyle("Prestígio",'prestige')}.`],
            'dm3': ["Sobra Melhorada II",`Melhora a melhoria de ${toTextStyle("Sobra",'black-hole')} "Mestre Tubarão".`],
            'dm4': ["Sobra Melhorada III",`Melhora is impulsos do nível do ${toTextStyle("Tubarão",'shark')} e rank para a geração de ${toTextStyle("Sobra",'black-hole')}.`],
            'dm5': ["Temperatura do núcleo sem softcap",`Remove o softcap da temperatura do ${toTextStyle('Núcleo','core')}.`],
            'dm6': ["Melhorado Gerador de Radiação",`Gerador de ${toTextStyle('Radiação '+icon('radioactive'),'core')} eleva a si mesmo ao expoente de forma reduzida.`],
            'dm7': ["Remanescentes Sombrios",`${toTextStyle("Matéria Negra",'black-hole')} no total impulsiona a geração de ${toTextStyle("Remanescentes",'black-hole')}.`],

            'e7': ["Sunda Trench MK2",`Improve the <b>Indian Ocean</b>’s depth progress significantly.`],

            'm5': ["Shark Rank 'onto' Super Mining",`${toTextStyle("Shark",'shark')} Rank boost to mining damage affects super mining damage at a reduced rate.`],
            'm6': ["The Uranium Shark",`'Shark Exponent' is overpowered.`],
            'm7': ["Double Remnant Scaling",`The first scaling of ${toTextStyle("Remanescentes",'black-hole')} upgrades is delayed by <b>+100</b>.`],
            'm8': ["Ultimate Radiation",`The 14th radioactive boost’s effect is improved.`],

            'o1': [`Automação do Observatório`,`Automatiza todas as melhorias de ${toTextStyle('Observatório','observ')} sem gastar. <i>Essa pesquisa não é resetada.</i>`],
            'o2': [`Afeição Universal do Trocador`,`A melhoria “Intensificador Universal” do ${toTextStyle('Reservatório','reserv')} afeta a base das melhorias “O Espaço”, “Peixe do Espaço”, “Pestígio do Espaço” do ${toTextStyle('Observatório','observ')}.`],
            'o3': [`Afeição Universal do Trocador II`,`A melhoria “Intensificador Universal” do ${toTextStyle('Reservatório','reserv')} afeta a base das melhorias “O Relativo”, Observável, “Peixe do Espaço II”, e “Prestígio do Espaço II” do ${toTextStyle('Reservatírio','reserv')}.`],
            
            'r1': [`Automação do Reservatório`,`Automatiza todas as melhorias de ${toTextStyle('Reservatório','reserv')} sem gastar. <i>Essa pesquisa não é resetada.</i>`],
            'r2': [`Reservatory Improvement`,`Improves ${toTextStyle('Reservatory','reserv')} gain formula even better.`],
            'r3': [`Reservatory Generation`,`Generates 100% of your ${toTextStyle('Reservatories','reserv')} gained on reset. <i>This research doesn’t get reset.</i>`],
        },

        // Exploration

        'explore-while': `Enquanto se explora`,
        'explore-inside': (a,b,c)=>`Base ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Alcançe mais do que ${format(c,0)}  ${toTextStyle("Peixes",'fish')}.`,
        'explore-outside': x=>`Seu valor base atual é ${x.format()}/s.<br>Explore o oceano!`,

        'explore-next': x=>`Próximo oceano no nível <h3>${format(x,0)}</h3> do ${toTextStyle("Tubarão",'shark')}`,

        'explore-doubler-1': x=>`Dobra ${x} ganho(s).`,
        'explore-doubler-2': `Dobra profundidade de progresso ganha.`,

        'explore-0-name': `Oceano Pacífico`,
        'explore-0-desc': `Ganho de ${toTextStyle('Peixes','fish')} é elevado à raiz quadrada.`,
        'explore-0-milestone': [
            `Incremente Fragmentos de ${toTextStyle('Prestígio','prestige')} ganhos à potencia de 1.05.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `Melhorar o ${toTextStyle('Tubarão','shark')} não vai mais gastar ${toTextStyle('Peixes','fish')}.`,
            `Incremente ${toTextStyle('Peixes','fish')} comidos à potencia de 1.05.`,
            `Desbloqueie o ${toTextStyle('Núcleo','core')}.`,
        ],

        'explore-1-name': `Oceano Ártico`,
        'explore-1-desc': `Redefine seus Fragmentos de ${toTextStyle('Prestígio','prestige')} e Melhorias de ${toTextStyle('Prestígio','prestige')}. O ganho de Fragmentos de ${toTextStyle('Prestígio','prestige')}  é enraizado em 2.`,
        'explore-1-milestone': [
            `Desbloqueia Auto melhorias de ${toTextStyle('Prestígio','prestige')} de ${toTextStyle('Tubarão','shark')}.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `Melhorias de ${toTextStyle('Prestígio','prestige')} de ${toTextStyle('Tubarão','shark')} não mais irão gastar Fragmentos de ${toTextStyle('prestígio','prestige')}.`,
            `Passivamente gere 100% dos Fragmentos de ${toTextStyle('Prestígio','prestige')} ganhos no ${toTextStyle('Prestígio','prestige')}.`,
        ],

        'explore-2-name': `Oceano Atlântico`,
        'explore-2-desc': `Redefine seus Fragmentos de ${toTextStyle('Prestígio','prestige')} e Melhorias de ${toTextStyle('Prestígio','prestige')}. O escalonamento do nível do ${toTextStyle('Tubarão','shark')} tem 10x sua força normal.` ,
        'explore-2-milestone': [
            `Os escalonamentos de 'Dentes de Tubarão' and 'Expoente de Tubarão' são levemente mais fracos.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `O primeiro escalonamento do nível de ${toTextStyle('Tubarão','shark')} começa +1 mais tarde por 500m de profundidade.`,
            `O poder do efeito do oceano é reduzido à metade.`,
        ],

        'explore-3-name': `Oceano Antártico`,
        'explore-3-desc': `Redefine seus Fragmentos de ${toTextStyle('Prestígio','prestige')} e Melhorias de ${toTextStyle('Prestígio','prestige')}. Você não consegue comprar melhorias de${toTextStyle('Tubarão','shark')}, ${toTextStyle('Peixes','fish')}, e ${toTextStyle('Prestige','prestige')}.`,
        'explore-3-milestone': [
            `Aumenta a base da exploração em 10x.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `O poder do efeito do oceano é reduzido à metade.`,
        ],

        'explore-4-name': `Oceano Índico`,
        'explore-4-desc': `Você está preso nos primeiros 4 oceanos ativados, e seu expoente do ${toTextStyle('Peixe','fish')} é enraizados em 0.75.`,
        'explore-4-milestone': [
            `Reduz o limite da radiação em /1,000.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `Reatores do núcleo escalam +5 depois.`,
            `Melhora o efeito de ${toTextStyle('Alga','kelp')}.`,
        ],

        // Core Radiation

        'cr-start': x=>x?"Para o experimento.":"Começa o experimento.",

        'upgrade-cr': (gen,cost)=>`
        Melhora a produção de ${toTextStyle('Radiação '+icon("radioactive"),'core')}.<br>
        Produzindo <b>${format(gen,0)}</b> por segundo.<br>
        Custo: ${format(cost,0)} ${toTextStyle('Peixe '+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`Reseta ${toTextStyle('Radiação '+icon("radioactive"),'core')}, mas aumenta o limite por <b>${formatMult(inc,0)}</b>, e melhora impulsos radioativos e as vezes adiciona novos efeitos. Você precisa chegar no limite para resetar.`,

        'cr-boosts': [
            x=>`Providência <h4>+${format(x)}</h4> reatores do núcleo a primeira linha.`,
            x=>`Impulsiona fragmentos ${toTextStyle('Magmáticos','core')} por <h4>${formatMult(x)}</h4>.`,
            x=>`As primeiras 4 melhorias de ${toTextStyle('Tubarão','shark')} ${toTextStyle('Peixe','fish')} são <h4>${formatPercent(x.sub(1))}</h4> mais poderosos.`,
            x=>`A segunda escala do Nível do ${toTextStyle('Tubarão','shark')} é atrasada por <h4>+${format(x)}</h4>.`,
            x=>`Aumenta a base do bonus de fragmentos ${toTextStyle('Magmáticos','core')}, referente ao nível do ${toTextStyle('tubarão','shark')} por <h4>+${format(x,3)}</h4>.`,
            x=>`Aumenta a base do bonus de ${toTextStyle('Peixe','fish')}, referente ao nível do ${toTextStyle('tubarão','shark')} por <h4>${formatPow(x,3)}</h4> ao expoente.`,
            x=>`As primeiras 3 melhorias de ${toTextStyle('Tubarão','shark')} ${toTextStyle('Prestígio','prestige')} são <h4>${formatPercent(x.sub(1))}</h4> mais poderoso.`,
            x=>`Nível do ${toTextStyle('Tubarão','shark')} impulsiona ELO do ${toTextStyle('Tubarão','shark')} por <h4>${formatMult(x)}</h4>.`,
            x=>`Impulsiona a quantidade de <b>Pedra</b> por <h4>${formatMult(x)}</h4>.`,
            x=>`Providência um bonus de compra para melhorias de exploração em <h4>${formatMult(x,3)}</h4>.`,
            x=>`Providência <h4>+${format(x)}</h4> reatores do núcleo a primeira linha.`,
            x=>`Impulsiona o ganho de ${toTextStyle('Matéria Negra','black-hole')} em <h4>${formatMult(x)}</h4>.`,
            x=>`Impulsiona a geração de ${toTextStyle('Remanescentes','black-hole')} em <h4>${formatMult(x)}</h4>.`,
            x=>`Os bonûs anteriores são <h4>${formatPercent(x.sub(1))}</h4> mais poderosos, exceto o sexto.`,
        ],

        // Core Reactor

        'core-0-name': `Ferro`,
        'core-0-desc': `${toTextStyle("Peixes",'fish')} se elevam baseado no tier do <b>Ferro</b>.`,

        'core-1-name': `Níquel`,
        'core-1-desc': `Fragmentos de ${toTextStyle('prestígio','prestige')} elevam a sua base baseado no tier do <b>Níquel</b>.`,

        'core-2-name': `Oxigênio`,
        'core-2-desc': `Produto da multiplicação dos recursos dos 4 primeiros oceanos impulsiona a produção deles baseado no tier do <b>Oxigênio</b>.`,

        'core-3-name': `Neon`,
        'core-3-desc': `Nível do ${toTextStyle("Tubarão",'shark')} reduz o seu requerimento baseado no tier do <b>Neon</b>.`,

        'core-4-name': `Enxofre`,
        'core-4-desc': `${toTextStyle("Peixe",'fish')} fortalece <b>Ferro</b> baseado no tier do <b>Enxofre</b>.`,

        'core-5-name': `Silício`,
        'core-5-desc': `Fragmento de ${toTextStyle("Prestígio",'prestige')} fortalece <b>Niquel</b> baseado no tier do <b>Silício</b>.`,

        'core-6-name': `Nitrogênio`,
        'core-6-desc': `${toTextStyle("Alga",'kelp')} fortalece <b>Oxigênio</b> baseado no tier do <b>Nitrogênio</b>.`,

        'core-7-name': `Hélio`,
        'core-7-desc': `Nível do ${toTextStyle("Tubarão",'shark')} fortalece <b>Neon</b> baseado no tier do <b>Hélio</b>.`,

        'core-8-name': `Magnésio`,
        'core-8-desc': `${toTextStyle("Peixe",'fish')} eleva a si mesmo ao expoente baseado no <b>Magnésio</b>.`,

        'core-9-name': `Sódio`,
        'core-9-desc': `Fragmentos de ${toTextStyle("Prestígio",'prestige')} eleva a si mesmo ao expoente baseado no tier do <b>Sódio</b>.`,

        'core-10-name': `Fósforo`,
        'core-10-desc': `Fragmentos ${toTextStyle("Magmaticos",'core')} eleva a si mesmo baseado no tier do <b>Fósforo</b>.`,

        'core-11-name': `Crômio`,
        'core-11-desc': `${toTextStyle("Homem",'humanoid')}-tubarão aumenta o expoente do ELO do ${toTextStyle("Tubarão",'shark')} baseado no tier do <b>Crômio</b>.`,

        'core-assembler-erase': `Modo de Apagar`,
        'core-assembler-choose': `Você está escolhendo`,
        'core-assembler-building-stats': (s,p,m) => `Força <b>${s}</b> | Colocados <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Construções maximas: ${mm} / ${m}<br>Requerimento: ${format(x)} Fragmentos ${toTextStyle("Magmaticos",'core')}`, 
        'ca-building-base': b => `[Base: ${b}]`,
        'ca-building-temp': t => `Aumenta a temperatura do núcleo em ${t}.`,

        'core-bonus': x => `Produto dos reatores do núcleo impulsiona a produção de ${toTextStyle("Peixes",'fish')} em <h4>${formatMult(x)}</h4>.`,

        // Evolution tree
        
        'evolution-tree-row': (r,a) => `<b>Linha ${r}</b><br>${a} Disponível`,
        'evolution-tree-ctn': [
            ["Corpo de Peixe", x=>`${toTextStyle('Peixe','fish')} impulsiona ELO do ${toTextStyle('Tubarão','shark')} ELO por <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Peixe','fish')} impulsiona o expoente do ELO do ${toTextStyle('Tubarão','shark')} por <b>${formatMult(x)}</b>.`],
            ["Corpo Prestigioso", x=>`Fragmentos de ${toTextStyle('Prestígio','prestige')} impulsiona ELO do ${toTextStyle('Tubarão','shark')} por <b>${formatMult(x)}</b>.`, x=>`Fragmentos de ${toTextStyle('Prestígio','prestige')} impulsiona o expoente do ELO do ${toTextStyle('Tubarão','shark')} por <b>${formatMult(x)}</b>.`],
            ["Corpo Radioativo", x=>`Fragmentos ${toTextStyle('Magmáticos','core')} impulsiona ELO do ${toTextStyle('Tubarão','shark')} por <b>${formatMult(x)}</b>.`, x=>`Fragmentos ${toTextStyle('Magmáticos','core')} impulsiona o expoente do ELO do ${toTextStyle('Tubarão','shark')} por <b>${formatMult(x)}</b>.`],
            ["Corpo Perfeito", x=>`ELO do ${toTextStyle('Tubarão','shark')} é multiplicado por <b>${formatMult(x,0)}</b>.`, x=>`O expoente do ELO do ${toTextStyle('Tubarão','shark')} é multiplicado por <b>${formatMult(x,0)}</b>.`],

            ["Tubarão de Aço", x=>`Ganha <b>${format(x,0)}</b> tiers bônus referente ao <b>Ferro</b>.`, x=>`Melhora <b>Ferro</b> significativamente.`],
            ["Tubarão Caro", x=>`Ganha <b>${format(x,0)}</b> tiers bônus referente ao <b>Níquel</b>.`, x=>`Melhora <b>Níquel</b> significativamente.`],
            ["Tubarão que respira ar", x=>`Ganha <b>${format(x,0)}</b> tiers bônus referente ao <b>Oxigênio</b>.`, x=>`Melhora <b>Oxigênio</b> significativamente.`],
            ["Tubarão Brilhante", x=>`Ganha <b>${format(x,0)}</b> tiers bônus referente ao <b>Neon</b>.`, x=>`Melhora <b>Neon</b> significativamente.`],

            ["Fossa das Marianas", x=>`A profundidade do <b>Oceano Pacifico</b> não mais tem limite, e faz seu efeito mais forte depois.`, x=>`Melhorar o progresso da profundidade do <b>Oceano Pacifico</b> significativamente.`],
            ["Um Pouco Profundo", x=>`A profundidade do <b>Oceano Ártico</b> não mais tem limite, e faz seu efeito mais forte depois.`, x=>`Melhorar o progresso da profundidade do <b>Oceano Ártico</b> significativamente.`],
            ["Milwaukee Profundo", x=>`A profundidade do <b>Oceano Atlântico</b> não mais tem limite, e faz seu efeito mais forte depois.`, x=>`Melhorar o progresso da profundidade do <b>Oceano Atlântico</b> significativamente.`],
            ["Trincheira Sanduíche do Sul", x=>`A profundidade do <b>Oceano Antártico</b> não mais tem limite, e faz seu efeito mais forte depois.`, x=>`Melhorar o progresso da profundidade do <b>Oceano Antártico</b> significativamente.`],

            ["Peixe Inflado", x=>`${toTextStyle('Peixe','fish')} é elevado à potência de <b>${format(x)}</b>.`, x=>`O expoente de ${toTextStyle('Peixe','fish')} é elevado à potência de <b>${format(x)}</b>.`],
            ["Superprestígio", x=>`Fragmentos de ${toTextStyle('Prestígio','prestige')} é elevado à potência de <b>${format(x)}</b>.`, x=>`O expoente de Fragmento de ${toTextStyle('Prestígio','prestige')} é elevado à potência de <b>${format(x)}</b>.`],
            ["Núcleo Comprimido", x=>`Fragmentos ${toTextStyle("Magmáticos",'core')} é elevado à potência de <b>${format(x)}</b>.`, x=>`Fragmentos ${toTextStyle("Magmáticos",'core')} é elevado à potência de <b>${format(x)}</b> denovo.`],
            ["Tubarão Caseiro", x=>`Reduz a base do requerimento de ${toTextStyle('Homens','humanoid')}-Tubarões por <b>${format(x,0)}</b>.`, x=>`O expoente de ${toTextStyle('Homens','humanoid')}-Tubarões é aumentado por <b>+${format(x)}</b>.`],

            ["Conversão do Tubarão", x=>`Ganha <b>${format(x,0)}</b> tiers bônus referente ao <b>Enxofre</b>.`, x=>`Ganha mais <b>${formatPow(x)}</b> tiers bônus referente ao <b>Enxofre</b> acima de 1.`],
            ["Tubarão Exoesqueleto", x=>`Ganha <b>${format(x,0)}</b> tiers bônus referente ao <b>Silício</b>.`, x=>`Ganha mais <b>${formatPow(x)}</b> tiers bônus referente ao <b>Silício</b> acima de 1.`],
            ["Tubarão Solar", x=>`Ganha <b>${format(x,0)}</b> tiers bônus referente ao <b>Nitrogênio</b>.`, x=>`Ganha mais <b>${formatPow(x)}</b> tiers bônus referente ao <b>Nitrogênio</b> acima de 1.`],
            ["Tubarão Voador", x=>`Ganha <b>${format(x,0)}</b> tiers bônus referente ao <b>Hélio</b>.`, x=>`Ganha mais <b>${formatPow(x)}</b> tiers bônus referente ao <b>Hélio</b> acima de 1.`],

            ["Corpo de Tubarão Grande", x=>`${toTextStyle('Peixe','fish')} impulsiona <b>'Corpo do Peixe'</b> em <b>${formatPow(x)}</b>.`, x=>`${toTextStyle('Peixe','fish')} impulsiona <b>'Corpo de Tubarão Grande'</b> e carregado <b>'Corpo de Peixe'</b> em <b>${formatPow(x)}</b>.`],
            ["Corpo Renascido", x=>`Fragmentos de ${toTextStyle('Prestígio','prestige')} impulsiona <b>'Corpo do Prestígio'</b> em <b>${formatPow(x)}</b>.`, x=>`Fragmentos de ${toTextStyle('Prestígio','prestige')} impulsiona <b>'Corpo Renascido'</b> e carregado <b>'Corpo Prestigioso'</b> em <b>${formatPow(x)}</b>.`],
            ["Corpo Sobrenatural", x=>`Fragmentos ${toTextStyle('Magmáticos','core')} impulsiona <b>'Corpo Radioativo'</b> em <b>${formatPow(x)}</b>.`, x=>`Fragmentos ${toTextStyle('Magmáticos','core')} impulsiona <b>'Corpo Sobrenatural'</b> e carregado <b>'Corpo Radioativo'</b> em <b>${formatPow(x)}</b>.`],
            ["Corpo Imortal", x=>`<b>'Corpo Perfeito'</b> é elevado ao <b>quadrado</b>.`,x=>`<b>'Corpo Imortal'</b> e carregado <b>'CorpoPerfeito'</b> são elevados ao <b>quadrado</b>.`],

            ['Sorte do Mar', x=>`${toTextStyle('Peixe','fish')} impulsiona ${toTextStyle('Fortuna da Mineração '+icon('luck'),'gold')} em <b>+${format(x)}</b>`, x=>`${toTextStyle('Peixe','fish')} impulsiona a ${toColoredText('Super Fortuna da Mineração '+icon('luck'),'orange')} em <b>+${format(x)}</b>.`],
            ['Sorte da Terra', x=>`<b>Pedra</b> impulsiona ${toTextStyle('Fortuna da Mineração '+icon('luck'),'gold')} em <b>+${format(x)}</b>`, x=>`<b>Rádio-223</b> impulsiona a ${toColoredText('Super Fortuna da Mineração '+icon('luck'),'orange')} em <b>+${format(x)}</b>.`],
            ['Sorte do Tubarão', x=>`${toTextStyle('Homens','humanoid')}-Tubarões impulsiona ${toTextStyle('Fortuna da Mineração '+icon('luck'),'gold')} em <b>+${format(x)}</b>`, x=>`${toTextStyle('Homens','humanoid')}-Tubarões impulsiona a ${toColoredText('Super Fortuna da Mineração '+icon('luck'),'orange')} em <b>+${format(x)}</b>.`],
            ['Pura Sorte', x=>`A ${toTextStyle('Fortuna da Mineração '+icon('luck'),'gold')} é aumentada em <b>+${format(x)}</b>.`, x=>`A ${toColoredText('Super Fortuna da Mineração '+icon('luck'),'orange')} é aumentada em <b>+${format(x)}</b>.`],

            ["Ferro Melhorado", x=>`Melhora a construção do <b>Ferro</b>.`],
            ["Níquel Melhorado", x=>`Melhora a construção do <b>Níquel</b>.`],
            ["Oxigênio Melhorado", x=>`Melhora a construção do <b>Oxigênio</b>.`],
            ["Neon Melhorado", x=>`Melhora a construção do <b>Neon</b>.`],

            ["Ferro Irônico", x=>`Melhore o reator de <b>Ferro</b>.`],
            ["Cofrinho", x=>`Melhore o reator de <b>Níquel</b>.`],
            ["Ozônio", x=>`Melhore o reator de <b>Oxigênio</b>.`],
            ["Resíduos Radioativos Falsos", x=>`Melhore o reator de <b>Neon</b>.`],

            ["Coluna 1 mais Forte", x=>`As melhorias da primeira coluna acima dessa melhoria são <b>${formatPercent(x-1)}</b> mais forte.`],
            ["Coluna 2 mais Forte", x=>`As melhorias da segunda coluna acima dessa melhoria são <b>${formatPercent(x-1)}</b> mais forte.`],
            ["Coluna 3 mais Forte", x=>`As melhorias da terceira coluna acima dessa melhoria são <b>${formatPercent(x-1)}</b> mais forte.`],
            ["Coluna 4 mais Forte", x=>`As melhorias da quarta coluna acima dessa melhoria são <b>${formatPercent(x-1)}</b> mais forte.`],

            ["Forja de Peixe", x=>`${toTextStyle('Peixe','fish')} deixa forja mais rápido por <b>${formatMult(x)}</b>.`],
            ["Forja de Prestígio", x=>`Fragmentos de ${toTextStyle('Prestígio','prestige')} deixa forja mais rápido por <b>${formatMult(x)}</b>.`],
            ["Forja Magmática", x=>`Fragmentos ${toTextStyle('Magmáticos','core')} deixa forja mais rápido por <b>${formatMult(x)}</b>.`],
            ["Forja Rápida", x=>`Forja é <b>${formatMult(x)}</b> mais rápido.`],

            ["Coluna Verdadeira 1", x=>`Você consegue comprar toda a primeira coluna acima.`],
            ["Coluna Verdadeira 2", x=>`Você consegue comprar toda a segunda coluna acima.`],
            ["Coluna Verdadeira 3", x=>`Você consegue comprar toda a terceira coluna acima.`],
            ["Coluna Verdadeira 4", x=>`Você consegue comprar toda a quarta coluna acima.`],
        ],

        'evolution-goal-status': (x,y)=>x?"DESBLOQUEADO":y?"BLOQUEADO":"EM PROGRESSO",
        'evolution-goal-ctn': [
            [
                x=>`Ganhe pelo menos <b>${format(x,0)}</b> Fragmentos ${toTextStyle("Magmáticos",'core')} na primeira vez que entrar no ${toTextStyle("Núcleo",'core')}.`,
                `Passivamente gera <b>100%</b> dos seus Fragmentos ${toTextStyle("Magmáticos",'core')} que você pega quando entra no ${toTextStyle("Núcleo",'core')}.`
            ],[
                x=>`Alcançe <b>${format(x,0)}</b> Fragmentos ${toTextStyle("Magmáticos",'core')} no total sem comprar a construção do montador do ${toTextStyle("núcleo",'core')}.`,
                `Mantenha o montador do ${toTextStyle("núcleo",'core')} em ${toTextStyle('Evolução','humanoid')}.`
            ],[
                x=>`Alcançe <b>${format(x,0)}</b> Fragmentos ${toTextStyle("Magmáticos",'core')} no total.`,
                `Melhore a formula de Fragmentos de ${toTextStyle('Prestígio','prestige')} para Fragmentos ${toTextStyle("Magmáticos",'core')}.`
            ],[
                x=>`Alcançe <b>${format(x,0)}</b> Fragmentos de ${toTextStyle('Prestígio','prestige')} no total sem gerar ${toTextStyle('Alga','kelp')}.`,
                `Começa com a profundidade no limite em cada oceano.`,
            ],[
                x=>`Alcançe <b>${format(x,0)}</b> Fragmentos de ${toTextStyle('Prestígio','prestige')} no total sem gerar recursos em cada oceano.`,
                `Mantenha pesquisa em ${toTextStyle('Evolução','humanoid')}.`,
            ],[
                x=>`Alcançe <b>${format(x,0)}</b> Fragmentos de ${toTextStyle('Prestígio','prestige')} no total.`,
                `Melhore ainda mais a formula do ganho de Fragmentos de ${toTextStyle('Prestígio','prestige')}.`,
            ],[
                x=>`Alcançe <b>${format(x,0)}</b> ${toTextStyle('Peixe','fish')} no total com no mínimo de <b>10</b> impulsos radioativos.`,
                `Impulsos radioativos não mais reseta as melhorias relacionadas a ${toTextStyle('Radiação '+icon("radioactive"),'core')}. Você começa com um gerador, e ${toTextStyle('Radiação '+icon("radioactive"),'core')} consegue ir além do seu limite.`,
            ],[
                x=>`Alcançe <b>${format(x,0)}</b> ${toTextStyle('Peixe','fish')} no total sem impulsos radioativos.`,
                `Impulsos radioativos não mais reseta. Desbloqueia Auto-Impulsos Radioativos.`,
            ],[
                x=>`Alcançe <b>${format(x,0)}</b> ${toTextStyle('Peixe','fish')} no total.`,
                `Primeira escala do Rank do ${toTextStyle('Tubarão','shark')} é atrasada por <b>+5</b>.`,
            ],
        ],

        // Cultivation

        'ore-names': {
            'stone': "Pedra",
            'coal': "Carvão",
            'iron': "Ferro",
            'gold': "Ouro",
            'platinum': "Platina",
            'diamond': "Diamante",
            'bismuth': "Bismuto",
            'obsidian': "Obsidiana",
            'vibranium': "Vibranium",
            'radium': "Rádio-223",
            'uranium': "Urânio-235",
            'berkelium': "Berkélio-247",
            'californium': "Califórnio-252",
            'oganesson': "Oganessônio-294",
            'sharkium': "Sharkium",
        },

        'mined-resources-text': `Recursos Minerados`,
        'mining-tier': `Tier da Mineração`,
        'next-mining-tier': `No <b>Tier da Mineração</b>`,
        'mining-tier-reset': `Aumenta o <b>Tier da Mineração</b>, mas multiplica a vida e a quantidade ganha de cada minério.`,
        'mining-tier-ore-unlock': x=>`Desbloqueia o mínerio ${x}.`,
        'mining-tier-ore-generation': x=>`Você não vai mais minerar o minério ${x}, mas vai gerar baseado na velocidade da mineração e fortuna.`,

        'mining-ascend': `Ascensão da Mineração`,
        'next-mining-ascend': `Na <b>Ascensão da Mineração</b>`,
        'mining-ascend-reset': `Aumenta a <b>Ascensão da Mineração</b>, mas força a redefinição de singularidade para poderosos impulsos.`,

        'mining-tier-bonus': [
            x=>`A vida do minério é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Pedra</b> e <b>Carvão</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Ferro</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Ouro</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Platina</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Bismuto</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Diamante</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Obsidiana</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Os primeiros 9 minéros são aumentados em <b>${formatPow(x)}</b>.`,
            x=>`A vida do Super Minério é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Rádio-223</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Urânio-235</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Berkélio-247</b> é aumentado em <b>${formatMult(x)}</b>.`,
            x=>`Quantidade de <b>Califórnio-252</b> é aumentado em <b>${formatMult(x)}</b>.`,
        ],

        // Forge

        'forge': {
            'anvil': ['Tier da Bigorna','Desbloqueia novas melhorias de forja.'],
            'drill': ['Tier da Broca','Aumenta o multiplicador da <b>Pedra</b> minerados.'],
            'shard': ['Fragmento Refinado',`Aumenta o multiplicador de Fragmentos de ${toTextStyle('Prestígios','prestige')}.`],
            'tree': ['Árvore Extraordinária Tree',`Desbloqueia uma nova linha de árvore da ${toTextStyle('Evolução','humanoid')}.`],
            'adv_research': ['Pesquisa Avançada',`Desbloqueia uma nova pesquisa.`],
            'auto': ['Automação Avançada',`Desbloqueia uma nova automação.`],
            'shark': ['Nível do Tubarão mais Distante',`Atrasa a terceira escala do Nível do ${toTextStyle('Tubarão','shark')}.`],
            'refined_shard': ['Fragmento Energizado',`Aumenta o expoente de Fragmento de ${toTextStyle('Prestígio','prestige')}.`],
            'wormhole': ['Buraco de Minhoca',`Desbloqueia um novo Acelerador de Partícula.`],
            'matter': ['Condensador de Matéria',`Aumenta a geração de ${toTextStyle('Sobra','black-hole')}.`],
        },
        'forge-progress': (x,s) => x ? `Forjando <b>${x}</b>... <b>${s}</b>` : `Forja está vazia`,
        'forge-speed': x => `Velocidade da Forja: <b>${x}</b>`,
        'forge-button': ['Cancelar Forja','Começa a Forja','Sem materias suficientes para forjar'],

        // Particle Accelerator

        'particle-accel-condense': x => `Condensa para ${x}:`,
        'particle-accel-boost': [
            x => `Aumenta a produção de ${toTextStyle('Radiação '+icon("radioactive"),'core')} em <b>${x}</b>.`,
            x => `Aumenta o progresso da profundidade em cada oceano em <b>${x}</b>.`,
            x => `Aumenta a quantidade de <b>Pedra</b> e o dano da mineração em <b>${x}</b>.`,
            x => `Ganha <b>${x}</b> mais ${toTextStyle('Homens','humanoid')}-Tubarões.`,
            x => `Atrasa a primeira escala dos reatores do núcleo em <b>${x}</b>.`,
            x => `Aumenta o exponente do ELO do ${toTextStyle("Tubarão",'shark')} em <b>${x}</b>.`,
        ],

        // Singularity

        'black-hole-texts': [
            `Você tem matéria o suficiente para formar um buraco negro.... Mas o que você está fazendo enquanto tá preso dentro do buraco negro? Sem problemas, tem um buraco branco que vai enviar você a outro universo, mas é um pouco complexo.`,
            `Como você está em um universo paralelo? Então, você está indo ficar preso em outro buraco negro!`,
            `Espera um minuto... Como você pegou ${toTextStyle("Peixe",'fish')} tão rápido, não importa como? Eu vou te colocar em sérios problemas!`,
            `Sério isso...`,
            `...`,
            `Por favor para aqui!`,
            `ESSA É A SUA ULTIMA CHANCE!`,
            `Ahh... Ok... Você venceu! Aqui está sem reduções...`,
        ],
        get 'singularity-milestones'() {
            return [
                [`1 Buraco Negro`,`Desbloqueia ${toTextStyle("Remanescentes",'black-hole')}. Nível do ${toTextStyle("Tubarão",'shark')} impulsiona a geração de ${toTextStyle("Remanescentes",'black-hole')}.`],
                [`2 Buracos Negros`,`Começa com automações desbloqueadas na redefinção, com o intervalo inicial. Rank do ${toTextStyle("Tubarão",'shark')} impulsiona a geração de ${toTextStyle("Remanescentes",'black-hole')}.`],
                [`3 Buracos Negros`,`Mantenha automações na redefinição. Começa com o conteúdo da pre-cultivação desbloqueada e 10 ${toTextStyle("Homens",'humanoid')}-Tubarões. Desbloqueia mais pesquisas.`],
                [`4 Buracos Negros`,`Mantenha os objetivos da ${toTextStyle("Evolução",'humanoid')} completos na redefinição. Aceleradores de Partículas são 10 vezes mais rápido.`],
                [`5 Buracos Negros`,`Vida do minério escala mais fraco. Desbloqueia mais automação.`],
                [`6 Buracos Negros`,`A cada buraco negro formado dobra a geração de ${toTextStyle("Remanescentes",'black-hole')}.`],
                [`7 Buracos Negros`,`Começa com cultivação desbloqueada na redefinição.`],
                [`8 Buracos Negros`,`Os nerfs do ${toTextStyle("Buraco Negro",'black-hole')} são agora removidos se você tem pelo menos 8 ${toTextStyle("Buracos Negros",'black-hole')}. Formar buraco negro não mas faz a animação. Desbloqueia o novo conteúdo.`],
            
                [`1 Matéria Negra no Total`,`Mantenha pre-Pesquisa da ${toTextStyle("Singularidade",'black-hole')}, árvore da ${toTextStyle("Evolução",'humanoid')}, e forjas na redefinição. Desbloqueia mais presquisas.`],
                [`10 Matéria Negra no Total`,`Automaticamente ativa todos os aceleradores de partículas.`],
                [`${format(1e6)} Matéria Negra no Totalr`,`Mantenha pesquisa <b>s1-s3</b> no sacrificio. Desbloqueia mais automação. Melhorias de sobra não mais gasta.`],
                [`${format(1e12)} Matéria Negra no Total`,`Desbloqueia o novo conteúdo.`],
                [`${format(1e100)} Matéria Negra no Total`,`Passivamente gera 100% da sua ${toTextStyle("Matéria Negra",'black-hole')} ganhado na redefinição.`],
            ]
        },

        'remnant-upgrades': [
            [`Bem-vindo`,x=>`Os bonûs do Nível do ${toTextStyle("Tubarão",'shark')} são ${x} mais fortes.`],
            [`Fluindo`,x=>`Base da Multiplicação da Exploração é impulsionado em ${x}.`],
            [`Meia-vida`,x=>`Reatores do ${toTextStyle("Núcleo",'core')} são ${x} mais fortes.`],
            [`Sem Perda de Tempo`,x=>`Velocidade da forja é aumentada em ${x}.`],

            [`Bem-vindo denovo`,x=>`${toTextStyle("Peixe",'fish')} impulsiona a si mesmo em ${x}.`],
            [`Grão-mestre`,x=>`Os bonûs do Rank do ${toTextStyle("Tubarão",'shark')} são ${x} mais fortes.`],
            [`Nível Galáctico`,x=>`As 3 primeiras escalas do Nível do ${toTextStyle("Tubarão",'shark')} são atrasadas em ${x}.`],
            [`Mestre Tubarão`,x=>`ELO do ${toTextStyle("Tubarão",'shark')} é aumentado em ${x}.`],

            [`Profundidade sem fundo`,x=>`O progresso da profundidade de cada oceano é impulsionado em ${x}.`],
            [`Batata Quente`,x=>`Impulsos Radioativos são ${x} mais fortes.`],
            [`Mega Nível`,x=>`A quarta escala do Nível do ${toTextStyle("Tubarão",'shark')} é atrasada em ${x}.`],
            [`Mineiro de Elite`,x=>`A terceira escala do tier de mineração é atrasada em ${x}.`],

            [`Auto-Aceleração`,x=>`${toTextStyle("Remanescentes",'black-hole')} impulsiona a si mesmo em ${x}.`],
            [`Poder Supremo`,x=>`As primeiras 12 melhorias de ${toTextStyle("Sobra",'black-hole')} são ${x} mais poderosas, exceto a quarta.`],
            [`Eficiência VI`,x=>`O super dano da mineração é impulsionado em ${x}.`],
            [`Tubarão Sobrenatural`,x=>`O expoente de ${toTextStyle("Homens",'humanoid')}-tubarões é aumentado em ${x}.`],
        ],

        'solar-system-list': {
            'sun':     ["Sol",`???`,`???`],
            'mercury': ["Mercúrio",`Mercúrio é o menor planeta do sistema solar e o mais próximo do Sol. Ele é nomeado em homenagem ao deus romano antigo do comércio, porque se move pelo céu mais rapidamente do que os outros planetas. Mercúrio é coberto por crateras de impacto e é semelhante à Lua em aparência, indicando uma falta de atividade geológica interna ao longo do último bilhão de anos. O planeta tem quase nenhuma atmosfera, então sua temperatura de superfície varia mais do que a de qualquer outro planeta no sistema solar.`,`As 3 primeiras escalas dos impulsos radioativos são atrasado em ×10. Multiply ${toTextStyle('Observatories','observ')} generation by 10 again.`],
            'venus':   ["Vênus",`Vênus é o segundo planeta mais próximo do Sol e o sexto maior do Sistema Solar. É nomeado em homenagem à antiga deusa romana do amor. Vênus possui uma atmosfera densa composta por mais de 96% de dióxido de carbono. A temperatura média da superfície de Vênus é de 735 K (462 °C), tornando-o o planeta mais quente do sistema solar. Vênus não possui satélites naturais. No céu da Terra, é o terceiro corpo celeste mais brilhante, depois do Sol e da Lua.`,`Passivamente gera 100% do atual ${toTextStyle('Homens','humanoid')}-tubarões como ${toTextStyle('Homens','humanoid')}-tubarões, mas auto-${toTextStyle('Homem','humanoid')}-tubarão não mais funciona. Melhora ${toTextStyle('Homem','humanoid')}-tubarão drasticamente, e a terceira escala do rank do ${toTextStyle('Tubarão','shark')} é atrasada em ×2. Multiplica a geração de ${toTextStyle('Observatórios','observ')} em 10.`],
            'earth':   ["Terra",`???`,`???`],
            'mars':    ["Marte" ,`Marte é o quarto planeta mais distante do Sol no Sistema Solar. Ele pertence ao grupo dos planetas terrestres, pois possui uma superfície sólida e um tamanho comparável ao da Terra. O terreno de Marte apresenta características únicas, incluindo crateras de impacto, vulcões, vales, desertos e calotas polares de gelo. Marte possui formações geológicas que se assemelham à erosão causada pela água e minerais que só poderiam ter se formado por exposição prolongada à água. A questão da existência de vida em Marte tem interessado cientistas por séculos.`,`Ganha a habilidade de terraformar qualquer melhoria da árvore da ${toTextStyle('Evolução','humanoid')} para bônus poderosos, mas o custo cresce rápido. Desbloqueia nova automação. Multiplica a geração de ${toTextStyle('Observatórios','observ')} em 10.`],
            'moon':    ["Lua",`Bem-vindo ao Sistema Solar! Você está livre para explorar alguns planetas, mas isso requer observação para recompensas poderosas. Force um reset de singularidade, reiniciando algumas pesquisas e a árvore de evolução (ela retorna depois), mas a redução do buraco negro é forçada para ^0.5, quase todas as características pós-cultivo estão desativadas, e você não pode explorar nenhum oceano. Você pode gerar ${toTextStyle('Observatórios', 'observ')} na base espacial, que ajudam você a progredir mais rápido com suas atualizações. Há dificuldade, que não afeta o progresso, mas as características da base espacial para facilitar o progresso. Vamos começar com a Lua da Terra! Ela é chamada de Luna, mas Theta, originalmente antes da colisão.`,`Desbloqueia a Ascensão da Mineração e novas melhorias de ${toTextStyle('Sobra','black-hole')}. Ascensão da mineração força a redefinição de singularidade para poderosos bônus e vários mínerios.`],
            'jupiter': ["Júpiter",`Júpiter é o maior planeta do Sistema Solar e o quinto mais distante do Sol. É um gigante gasoso com uma massa 2,47 vezes maior do que a massa combinada de todos os outros planetas do Sistema Solar. Júpiter é conhecido desde a antiguidade e é mencionado na mitologia e nas crenças religiosas de diferentes culturas. O nome moderno do planeta vem do nome do antigo deus romano supremo do trovão. A atmosfera de Júpiter é caracterizada por uma série de fenômenos atmosféricos, como tempestades, relâmpagos, auroras e a Grande Mancha Vermelha, uma gigantesca tempestade conhecida desde o século XVII.`,`Desbloqueia mais melhorias de ${toTextStyle('Sobra','black-hole')}. Multiplica denovo a geração de ${toTextStyle('Observatórios','observ')} em 10.`],
            'saturn':  ["Saturno",`Saturno é o sexto planeta a partir do Sol e o segundo maior planeta do sistema solar, depois de Júpiter. Saturno é classificado como um gigante gasoso porque é composto principalmente de hidrogênio e hélio. O planeta é nomeado em homenagem ao deus romano da agricultura. Saturno é cercado por anéis compostos por partículas de gelo, elementos pesados e poeira. O planeta possui 146 satélites conhecidos, sendo o maior deles Titã. Saturno tem um campo magnético planetário e um sistema de anéis proeminente.`,`Desbloqueia uma nova linha de reatores do ${toTextStyle('Núcleo','core')}. <i>Esses reators não são resetado por Evolução ou depois, mas não são afetados pela melhoria de ${toTextStyle('Sobra','black-hole')} “Meia-vida”.</i>`],
            'uranus':  ["Urano",`Urano é o sétimo planeta mais distante do Sol no sistema solar. Foi descoberto em 1781 pelo astrônomo inglês William Herschel e nomeado em homenagem ao deus grego do céu, Urano. Urano foi o primeiro planeta descoberto na era moderna e com a ajuda de um telescópio. Urano é o terceiro maior planeta em diâmetro e o quarto maior em massa no sistema solar. É composto principalmente de gelo e rocha, e sua atmosfera contém hidrogênio, hélio e metano. Urano possui um sistema de anéis e 28 satélites. O eixo de rotação de Urano está "deitado de lado", fazendo com que o planeta orbite o Sol, alternadamente voltando seus polos norte e sul em direção a ele.`, `Remova a superpopulação do ${toTextStyle('Tubarão','shark')}. O multiplicador de ${toTextStyle('Fé Sharkoid','humanoid')} é dobrada.`],
            'neptune': ["Netuno",`Netuno é o oitavo e mais distante planeta do Sistema Solar. Sua distância média do Sol é de 4,5 bilhões de quilômetros. Netuno é um dos planetas gigantes, com 17 vezes a massa da Terra. É o quarto em diâmetro equatorial, sendo 3,9 vezes maior que a Terra. A atmosfera de Netuno é semelhante às camadas gasosas de outros planetas principais do sistema solar. Ela é composta principalmente de hidrogênio e hélio, com misturas de metano, água, amônia e outros compostos. Netuno é considerado um dos planetas mais frios do sistema solar, com uma temperatura média que varia em torno de -200 °C. A atmosfera de Netuno possui os ventos mais fortes de qualquer planeta do sistema solar.`,`Desbloqueia a ${toTextStyle('Constelação','star')} que melhora o ${toTextStyle('Buraco Negro','black-hole')} ainda mais para uma recompensa poderosa.`],
            'pluto':   ["Plutão",`???`,`???`],
        },
        
        'build-rocket-part': x => `Construa ${x} Partes do Foguete.`,
        'total-rp': "Partes do Foguete no total",
        'solar-system-lock-reward': `Você deve completar ${toTextStyle('observação','observ')} para revelar a recompensa.`,
        'solar-system-goal': x => `Objetivo: Pegar <h4>${x}</h4> ${toTextStyle('Observatórios','observ')} no total.`,
        'solar-system-status': x => [`Começa Observação`,`Desista da Observação`,`Completa Observação`][x],
        'observ-progress': x => `Alcançe <b>${x}</b> ${toTextStyle('Observatórios','observ')} no total`,
        'observ-cond': `Completa ${toTextStyle('Observação','observ')}`,

        // Automation

        'auto-shark-name': `Auto melhoria do nível de ${toTextStyle("Tubarão",'shark')}`,
        'auto-su-name': `Auto melhoria '${toTextStyle("Peixe","fish")}' de ${toTextStyle("Tubarão",'shark')}  `,
        'auto-spu-name': `Auto melhoria '${toTextStyle("Prestígio","prestige")}' de ${toTextStyle("Tubarão",'shark')} `,
        'auto-eu-name': `Auto melhoria de Exploração`,
        'auto-core_reactor-name': `Auto-${toTextStyle("Núcleo","core")} do Reator`,
        'auto-core_radiation-name': `Auto-Radiação do ${toTextStyle("Núcleo","core")}`,
        'auto-radioactive_boosts-name': `Auto-Impulsionadores Radioativos`,
        'auto-mining_upgs-name': `Auto-Melhoria de Mineração do ${toTextStyle("Tubarão","shark")}`,
        'auto-humanoid-name': `Auto-${toTextStyle("Homens","humanoid")}-Tubarões`,
        'auto-research-name': `Auto-Pre-Pesquisa da ${toTextStyle("Singularidade","black-hole")}`,
        'auto-mining_tier-name': `Auto-Tier da Mineração`,
        'auto-remnant-name': `Auto-Melhorias de ${toTextStyle("Remanescentes","black-hole")}`,
        'auto-faith-name': `Auto-${toTextStyle("Fé Sharkoid","humanoid")}`,

        'auto-cost': (D,cost,name) => `Diminua o intervalo em ${formatReduction(D,0)}.<br>Custo: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Intervalo: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress

        'progress-0-text': r => `Alcançe ${format(r)} ${toTextStyle('Peixes','fish')} no total `, 
        get 'progress-0-cond-text'() { return `Faça um ${toTextStyle('Prestígio','prestige')}` },

        'progress-1-text': r => `Alcançe ${format(r)} Fragmentos de ${toTextStyle('prestígio','prestige')} para desbloquear Automação`,
        'progress-2-text': r => `Alcançe ${format(r)} Fragmentos de ${toTextStyle('prestígio','prestige')} para desbloquear Research`,
        'progress-3-text': r => `Alcançe nível de ${toTextStyle('Tubarão','shark')} ${format(r,0)} para desbloquear Exploração`,
        'progress-4-text': r => `Alcançe ${format(r)}m of Pacific ocean's depth para desbloquear the ${toTextStyle('Núcleo','core')}`,

        'progress-5-text': r => `Alcançe ${format(r)} Fragmentos de ${toTextStyle('prestígio','prestige')} totais`, 
        get 'progress-5-cond-text'() { return `Entre o ${toTextStyle('Núcleo','core')}` },

        'progress-6-text': r => `Alcançe ${format(r)} Fragmentos ${toTextStyle('Magmaticos','core')} para desbloquear o proximo conteudo do ${toTextStyle('Núcleo','core')}`, 
        'progress-7-text': r => `Alcançe o Nível do ${toTextStyle('Tubarão','shark')} ${format(r,0)} para desbloquear o proximo tipo de oceano`, 
        'progress-8-text': r => `Alcançe ${format(r)} Fragmentos ${toTextStyle('Magmaticos','core')} para desbloquear o proximo conteudo do ${toTextStyle('Núcleo','core')}`, 
        'progress-9-text': r => `Alcançe ${format(r)} ${toTextStyle('Peixes','fish')} no total para desbloquear os novos reatores do ${toTextStyle('Núcleo','core')}`, 

        'progress-10-text': r => `Alcançe ${format(r)} ${toTextStyle('Peixes','fish')} no total`, 
        get 'progress-10-cond-text'() { return `Evolua seus ${toTextStyle('Tubarões','shark')}` },

        'progress-11-text': r => `Alcançe ${format(r,0)} ${toTextStyle('Homens','humanoid')}-tubarões para desbloquear o proximo conteudo da ${toTextStyle('Evolução','humanoid')}`, 
        'progress-12-text': r => `Alcançe ${format(r,0)} ${toTextStyle('Homens','humanoid')}-tubarões para desbloquear o proximo conteudo da ${toTextStyle('Evolução','humanoid')}`, 
        'progress-13-text': r => `Chega ao Tier de Mineração ${format(r,0)} para desbloquear a proxima linha da árvore da ${toTextStyle('Evolução','humanoid')}`, 
        'progress-14-text': r => `Chega ao Tier de Mineração ${format(r,0)} para desbloquear o proximo conteudo da ${toTextStyle('Evolução','humanoid')}`, 
        'progress-15-text': r => `Chega ao Tier de Mineração ${format(r,0)} para desbloquear o proximo conteudo da ${toTextStyle('Evolução','humanoid')}`,

        'progress-16-text': r => `Completa ${format(r,0)} aceleradores de particula`, 
        get 'progress-16-cond-text'() { return `Forma ${toTextStyle('Buraco Negro','black-hole')}` },

        'progress-17-text': r => `Forma ${format(r,0)} ${toTextStyle('Buracos Negros','black-hole')}`,

        'progress-18-text': r => `Alcançe ${format(r)} ${toTextStyle('Peixe','fish')} no total`, 
        get 'progress-18-cond-text'() { return `Faça um ${toTextStyle('Sacrificio','black-hole')}` },

        'progress-19-text': r => `Alcançe ${format(r)} ${toTextStyle('Matéria Negra','black-hole')} no total`,

        'maxed-progress': "Todas as funcionalidades desbloqueadas!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestígio','prestige'), s = toTextStyle('Tubarão','shark'), f = toTextStyle('Peixes','fish')
            return `
            <h3>${p}</h3><br>
            ${p} é a primeira camada de reinício. Prestigiar redefine seu ${s}, melhorias de ${s} , e ${f} por Fragmentos de ${p}.
            Primeiro ${p} Desbloqueia novas melhorias de ${s}.<br>
            <img src="textures/PrestigeShard.png"><br>
            Você tem certeza que você gostaria de prestigiar?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Núcleo','core'), m = toTextStyle('Magmáticos','core'), p = toTextStyle('Prestígio','prestige')
            return `
            <h3>O ${c}</h3><br>
            O ${c} é a segunda camada de reinício. Entrar no núcleo redefine tudo que ${p} redefine, quanto Fragmentos de ${p}, melhorias de ${p}, ${toTextStyle('Pesquísa','prestige')} (quase), and Exploração por Fragments ${m} ,
            desbloqueando o reator do ${c} pela primeira vez.<br>
            <img src="textures/Magmatic.png"><br>
            Você tem certeza que gostaria de entrar no núcleo?
            `
        },
        get 'reset-humanoid-message'() {
            let e = toTextStyle('Evolução','humanoid'), c = toTextStyle('núcleo','core'), m = toTextStyle('Magmáticos','core'), p = toTextStyle('Prestígio','prestige')
            return `
            <h3>A ${e}</h3><br>
            <subtitle>“Mutando vai fazer os tubarões mais selvagens, transformando em homens-tubarões. Pórem com o custo de tudo que você tem nesse ponto.”</subtitle>
            A ${e} é a terceira camada de reinício. Evoluir os tubarões redefine tudo que ${c} redefine, quanto Fragmentos ${m}, reatores ${c}, radiação do ${c}, montador de ${c}, e algumas ${toTextStyle('Pesquisa','prestige')} para ${toTextStyle('Homens','humanoid')}-tubarões.
            Também desbloquea o Rank e a árvore da ${e}.<br>
            <img src="textures/Evolution.png"><br>
            Você tem certeza que gostaria de evoluir seus tubarões?
            `
        },
        get 'reset-black-hole-message'() {
            let e = toTextStyle('Buraco Negro','black-hole'), c = toTextStyle('Evolução','humanoid')
            return `
            <h3>The ${e}</h3><br>
            O ${e} é o quarto e a maior camada de reinício.
            Formar o ${e} redefine tudo que ${c} redefine, também o rank do tubarão, homens-tubarões, árvore da evolução, fé sharkoid, objetivos da evolução, cultivação, forja, aceleradores de partícula, algumas pesquisas, algumas automações, e alguns progressos de conteúdos para um novo ${e}.
            Porémr, cada ${e} reduz os recursos um pouco, mas desbloqueia benefícios como marcos importantes.<br>
            <img src="textures/black-hole.png"><br>
            Você tem certeza que você quer entrar em outro universo?
            `
        },
        
        // Other
        
        'scalings': {
            'shark_level' : `Nível do Tubarão`,
            'shark_rank' : `Rank do Tubarão`,
            'su_s3' : `Melhoria "Dente do Tubarão"`,
            'su_s4' : `Melhoria "Expoente do Tubarão"`,
            'su_m1' : `Melhoria "Dano da Mineração"`,
            'su_m3' : `Melhoria "Pedra comprimida"`,
            'su_m5' : `Melhoria "Minérios Basicos"`,
            'cr_boost' : `Impulsos Radioativos`,
            'mining_tier' : `Tier da Mineração`,
            'mining_ascend' : `Ascensão da Mineração`,
            'remnant_upg' : `Melhorias de Sobra`,
        },
        'scaling-start': "Começa em",
        'scaling-mode': {
            "L": x => `<b>${x}</b> linearmente`,
            "D": x => `<b>${x}</b> ao expoente`,
        },
        'scaling-info': `Escalas vão aparecer quando você chegar nelas. <b>N</b> - Quantidade, <b>S</b> - Começo`,

        'shark-bonus-remnants': x => `+${x.format(0)} ${toTextStyle('Remanescentes','black-hole')}`,

        'shark-overpopulation': (x,y) => `Por causa da superpopulação do ${toTextStyle('Tubarão','shark')} em <h4>${toTextStyle(format(y),'fish')}</h4>, ${toTextStyle('Peixe','fish')} comido, ganho de ${toTextStyle('Peixe','fish')} é reduzido por <h4>${format(x,3)}√</h4>.`,

        'shark-rank-bonuses': {
            fish: x => `${formatPow(x)} ${toTextStyle('Peixe','fish')}`,
            prestige: x => `${formatPow(x)} Fragmento de ${toTextStyle('Prestígio','prestige')}`,
            mining_damage: x => `${formatMult(x)} Dano da Mineração`,
            so: x => `${formatPow(x)} Atraso da superpopulação do ${toTextStyle('Tubarão','shark')}`,
            vibranium: x => `${formatMult(x)} <b>Vibranium</b>`,
            remnants: x => `${formatMult(x)} ${toTextStyle('Remanescentes','black-hole')}`,
        },

        'reward': "Recompensa",
        'new-preset': "Novo Preset",
        'maxed': "Maximizado",
        'difficulty': "Dificuldade",

        'remove': "Remova",
        'overwrite-current': "Substitir Atual",
        'load': "Carregar",
        'force-load': "Forcar Carregamento",

        'upgrade-shark': x => `Melhore nível de ${toTextStyle('Tubarão','shark')}<br>Custo: ${x.format(0)} ${toTextStyle('Peixes','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} produção base dos ${toTextStyle('Peixes','fish')} `,
        'shark-bonus-prestige': x => `${formatMult(x)} Fragmento de ${toTextStyle('Prestígio','prestige')} `,
        'shark-bonus-core': x => `${formatMult(x)}  Fragmentos ${toTextStyle('Magmáticos','core')}`,

        'level': "Nível",
        'effect': "Efeito",
        'cost': "Custo",
        'buyMax': "Comprar max",
        'require': "Requer",
        'next-at': "Próximo em",
        'depth': "Profundidade",
        
        'research-afford': bool => bool ? "Comprar" : "Não se pode comprarr",
        'research-bought': bool => bool ? `<b>Comprado</b>` : `<b>Não comprado</b>`,
        'research-pages': x => `${x} páginas`,

        'offline-time-text': x=>`Você ficou offline por <b>${formatTime(x,0)}</b>.`,
        'off-on': bool => bool ? "Ligado" : "Desligado",

        'popup-desc' : {
            import: `Copie seu save. CUIDADO: IRÁ SUBSTITUIR SEU SAVE ATUAL!`,
            wipe: ` Você tem certeza que gostaria de limpar seu save? Para limpar, digite "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
            "evolution-tree-respec": `Você tem certeza que quer resetar a árvore da ${toTextStyle('Evolução','humanoid')}? Vai fazer uma redefinição em ${toTextStyle('Evolução','humanoid')}, não vai ganhar Fragmentos${toTextStyle('Humanóide','humanoid')}.`,
            "evolution-tree-import": `Cola aqui sou atual árvore da evolução.`,
        },

        'notify-desc' : {
            save: "Jogo salvo!",
            copy_to_clipboard: "Copiado a área de transferência!",
            forge_completed: x => `Forja <b>${x}</b> completa!`
        },

        'radio-desc' : {
            'notation': ['Notação de formatação',['Científico','Padrão','Científico mixo']],
            'comma-format': ['Maximas OdM com vírgulas',['3','6','9','12','15']],
            'autosave': ['Autosave',['Desabilitado','Habilitado']],
            'autosave-time': ['Intervalo de autosave ',['15s','30s','60s','120s']],
            'offline': ['Progresso Offline',['Desabilitado','Habilitado']],
            'max-research-amt': ['Máximo de melhorias de pesquisas por página',['∞','15','20','25','30']],
            'visible-research': [`Visibilidade das pesquisas compradas`,["Mostra","Esconde"]],
            'notify': ['Notificações',['Desabilitado','Habilitado']],
        },

        'radio-desc-default' : ['Desabilitado','Habilitado'],

        'prompt-placeholder': "Digite texto aqui...",

        'option-buttons-text': ["Salve","Exportar via área de transferência","Exportar via arquivo","Importar via área de transferência","Exportar via arquivo","LIMPAR!!!"],

        'confirm-prestige': "Prestígio",
        'confirm-core': "Entre no núcleo",
        'confirm-humanoid': "Evolua seu Tubrão",
        'confirm-black-hole': "Forma o Buraco Negro",
        'confirm-sacrifice': "Sacrifica seus Tubarões",
    },
}
