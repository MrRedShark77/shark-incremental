// This is portuguese language file! It's not English!

LANGUAGES.PT = {
    name: "Português",
    inter_name: "Portuguese",
    icon: "lang-pt",

    text: {
        // Currencies

        'fish-name': "Peixe",
        'fish-costName': toTextStyle('Peixes','fish'),

        'prestige-name': "Fragmentos de prestígio",
        'prestige-costName': "Fragmentos de " + toTextStyle('prestígio','prestige'),

        'coral-name': "Corais",
        'coral-costName': toTextStyle('Corais','coral'),

        'ice-name': "Gelo",
        'ice-costName': toTextStyle('Gelo','ice'),

        'salt-name': "Salt",
        'salt-costName': toTextStyle('Sal','salt'),

        'snow-name': "Neve comprimida",
        'snow-costName': toTextStyle('Neve comprimida','snow'),

        'core-name': "Fragmentos Magmáticos",
        'core-costName': 'Fragmentos '+toTextStyle('Magmáticos','core') ,

        'curr-top-0-req': x => `Alcançe <b>${format(x)}</b>  ${toTextStyle('Peixes','fish')} totais`, 
        'curr-top-0-reset': x => `Prestigie por <b>${x.format(0)}</b> Fragmentos de ${toTextStyle('Prestígio','prestige')}`,

        'curr-top-0-req': x => `Alcançe <b>${format(x)}</b>  Fragmentos de ${toTextStyle('prestígio','prestige')} totais`, 
        'curr-top-1-reset': x => `Entre no núcleo por <b>${x.format(0)}</b> Fragmentos ${toTextStyle('Magmáticos','core')} `,

        // Tabs

        'tab-shark': toTextStyle('Tubarão','shark'),
        'tab-options': "Opções",
        'tab-auto': "Automação",
        'tab-research': toTextStyle('Pesquisa','prestige'),
        'tab-explore': "Exploração",
        'tab-core': "O "+toTextStyle('Núcleo','core'),
        'tab-core-reactor': "Reator do"+toTextStyle(' núcleo','core'),

        // Elements

        'fish-div': `O seu ${toTextStyle('Tubarão','shark')} comeu <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> peixes.`,
        'shark-stats': `Stats do ${toTextStyle('Tubarão','shark')} <br>Nível: <h4 id="shark-level">???</h4><br>Rank: <h4 id="shark-tier">???</h4>`,

        'option-title-1': "Opções principais",
        'option-title-2': "Notações",
        'option-title-3': "Confirmações",
        'option-title-4': "Idiomas",

        // Upgrades

        'su-s1-req': "Nível 3",
        'su-s1-name': 'Força de tubarão',
        'su-s1-desc': `Aumenta ${toTextStyle('Peixes','fish')} comidos em <b>+1</b> por nível.`,

        'su-s2-req': "Nível 7",
        'su-s2-name': 'Agilidade de tubarão',
        'su-s2-desc': `Aumentas a base do nível do bonus de ${toTextStyle('Peixe','fish')} do nível do ${toTextStyle('Tubarão','shark')}   em <b>+1</b> por nível.`,

        'su-s3-req': "Nível 15",
        'su-s3-name': 'Dente de tubarão',
        'su-s3-desc': `Aumenta o exponente da 1ª Melhora do ${toTextStyle('Tubarão','shark')} em <b>+50%</b> por nível.`,

        'su-s4-req': "Nível 38",
        'su-s4-name': 'Expoente de tubarão',
        'su-s4-desc': `Aumenta o expoente da produção de ${toTextStyle('Peixes','fish')} em <b>+1%</b> por nível.`,

        'su-p1-req': "Primeiro prestígio",
        'su-p1-name': 'Superforça de tubarão',
        'su-p1-desc': `Aumenta ${toTextStyle('Peixes','fish')} comidos em <b>×3</b> por nível.`,

        'su-p2-req': "Primeiro prestígio",
        'su-p2-name': 'Impulso de prestígio',
        'su-p2-desc': `Aumenta ${toTextStyle('Peixes','fish')} comidos em <b>ln(${toTextStyle('Peixes','fish')})</b> por nível.`,

        'su-p3-name': 'Tubarão escalonado',
        'su-p3-desc': `Aumenta o primeiro começo do escalonamento do nível do ${toTextStyle('Tubarão','shark')}  em <b>+1</b> por nível.`,

        // Researches

        'research-p1-name': "Agilidade Prestigiosa",
        'research-p1-desc': `'Agilidade de tubarão' agora afeta a base do bônus de Fragmentos de ${toTextStyle('prestígio','prestige')} do nível do ${toTextStyle('Tubarão','shark')} em uma taxa reduzida.`,

        'research-p2-name': "Melhoria EL de tubarão",
        'research-p2-desc': `as melhorias de ${toTextStyle("Peixe",'fish')} do ${toTextStyle("Tubarão",'shark')} não mais gastam ${toTextStyle("Peixes",'fish')}.`,

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
        'research-p7-desc': `o efeito de ${toTextStyle("Corais",'coral')} e ${toTextStyle("Gelo",'ice')}  é melhor.`,

        'research-e1-name': "Sinergia oceânica I",
        'research-e1-desc': `${toTextStyle("Sal",'salt')} Impulsiona a quantidade de ${toTextStyle("Corais",'coral')} gerada.`,

        'research-e2-name': "Sinergia oceânica II",
        'research-e2-desc': `${toTextStyle("Neve Comprimida",'snow')} Impulsiona a quantidade de ${toTextStyle("Gelo",'ice')} gerado.`,

        'research-c1-name': "Mantedor C de pesquisa",
        'research-c1-desc': `Mantenha ${toTextStyle("Pesquisa",'prestige')} ao entrar no ${toTextStyle('Núcleo','core')}.`,

        'research-c2-name': "Mantedor C de exploração",
        'research-c2-desc': `Mantenha os primeiros <b>X</b> oceanos desbloqueados e a profundidade deles ao entrar no  ${toTextStyle('Núcleo','core')}.`,

        'research-c3-name': "Afeição I do neon",
        'research-c3-desc': `<b>Neon</b> agora afeta 'Dente de tubarão', 'Expoente de tubarão', and 'Tubarão escalonado'.`,

        'research-c4-name': "Nickel Aprimorado",
        'research-c4-desc': `o poder do efeito do <b>Nickel</b> é <b>dobrado</b> `,

        // Exploration

        'explore-while': `Enquanto se explora`,
        'explore-inside': (a,b,c)=>`Base ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Alcançe mais do que ${format(c,0)}  ${toTextStyle("Peixes",'fish')}.`,
        'explore-outside': x=>`Seu valor base atual é ${x.format()}/s.<br>Explore o oceano!`,

        'explore-next': x=>`Próximo oceano no nível <h3>${format(x,0)}</h3> do ${toTextStyle("Tubarão",'shark')}`,

        'explore-doubler-1': x=>`Dobra ${x} ganho(s).`,
        'explore-doubler-2': `Dobra profundidade de progresso ganha.`,

        'explore-0-name': `Oceano Pacífico`,
        'explore-0-desc': `${toTextStyle('Peixes','fish')} gain is rooted by 2.`,
        'explore-0-milestone': [
            `Incremente Fragmentos de ${toTextStyle('prestígio','prestige')} ganhos à potencia de 1.05.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `Melhorar o ${toTextStyle('Tubarão','shark')} não vai mais gastar ${toTextStyle('Peixes','fish')}.`,
            `Incremente ${toTextStyle('Peixes','fish')} comidos à potencia de 1.05.`,
            `Desbloqueie o ${toTextStyle('Núcleo','core')}.`,
        ],

        'explore-1-name': `Oceano ártico`,
        'explore-1-desc': `Redefine seus Fragmentos de ${toTextStyle('prestígio','prestige')} e Melhorias de ${toTextStyle('prestígio','prestige')}. O ganho de Fragmentos de ${toTextStyle('prestígio','prestige')}  é enraizado em 2.`,
        'explore-1-milestone': [
            `Desbloqueia Auto melhorias de ${toTextStyle('Prestígio','prestige')} de ${toTextStyle('Tubarão','shark')}.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `Melhorias de ${toTextStyle('Prestígio','prestige')} de ${toTextStyle('Tubarão','shark')} não mais irão gastar Fragmentos de ${toTextStyle('prestígio','prestige')}.`,
            `Passivamente gere 100% dos Fragmentos de ${toTextStyle('prestígio','prestige')} ganhos no ${toTextStyle('Prestígio','prestige')}.`,
        ],

        'explore-2-name': `Atlantic Ocean`,
        'explore-2-desc': `Redefine seus Fragmentos de ${toTextStyle('prestígio','prestige')} e Melhorias de ${toTextStyle('prestígio','prestige')}. O escalonamento do nível do ${toTextStyle('Tubarão','shark')} tem 10x sua força normal` ,
        'explore-2-milestone': [
            `Os escalonamentos de 'Dentes de Tubarão' and 'Expoente de Tubarão' são levemente mais fracos.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `O primeiro escalonamento do nível de ${toTextStyle('Tubarão','shark')} começa +1 mais tarde por 500m de profundidade.`,
            `O poder do efeito do oceano é reduzido à metade.`,
        ],

        'explore-3-name': `Southern Ocean`,
        'explore-3-desc': `Redefine seus Fragmentos de ${toTextStyle('prestígio','prestige')} e Melhorias de ${toTextStyle('prestígio','prestige')}. Você não consegue comprar melhorias de${toTextStyle('Tubarão','shark')}, ${toTextStyle('Peixes','fish')}, e ${toTextStyle('Prestige','prestige')}.`,
        'explore-3-milestone': [
            `Aumenta a base da exploração em 10x.`,
            `Aumenta o recurso e a profundidade de progresso em 1.25 elevado à raiz quadrada do nível de ${toTextStyle('Tubarão','shark')} .`,
            `O poder do efeito do oceano é reduzido à metade.`,
        ],

        // Core Reactor

        'core-0-name': `Ferro`,
        'core-0-desc': `${toTextStyle("Peixes",'fish')} se elevam baseado no nível do <b>Ferro</b>.`,

        'core-1-name': `Nickel`,
        'core-1-desc': `Fragmentos de ${toTextStyle('prestígio','prestige')} elevam a sua base baseado no nível do <b>Nickel</b>.`,

        'core-2-name': `Oxigênio`,
        'core-2-desc': `Produto da multiplicação dos recursos dos 4 primeiros oceanos Impulsiona a produção deles baseado no nível do <b>Oxigênio</b>.`,

        'core-3-name': `Neon`,
        'core-3-desc': `Nível do ${toTextStyle("Tubarão",'shark')} reduz o seu requerimento baseado no nível do <b>Neon</b>.`,

        'core-bonus': x => `Produto dos reatores do núcleo Impulsiona a produção de ${toTextStyle("Peixes",'fish')} em <h4>${formatMult(x)}</h4>.`,

        // Automation

        'auto-shark-name': `Auto melhoria do nível de ${toTextStyle("Tubarão",'shark')}`,
        'auto-su-name': `Auto melhoria '${toTextStyle("Peixe","fish")}' de ${toTextStyle("Tubarão",'shark')}  `,
        'auto-spu-name': `Auto melhoria '${toTextStyle("Prestígio","prestige")}' de ${toTextStyle("Tubarão",'shark')} `,
        'auto-eu-name': `Auto melhoria de Exploração`,

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
            unlocking the ${c} reactor for the first time.<br>
            <img src="textures/Magmatic.png"><br>
            Você tem certeza que gostaria de entrar no núcleo?
            `
        },
        
        // Other

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

        'research-afford': bool => bool ? "Comprar" : "Não se pode pagar",
        'research-bought': bool => bool ? `<b>Comprado</b>` : `<b>Não comprado</b>`,

        'off-on': bool => bool ? "Ligado" : "Desligado",

        'popup-buttons': [
            ["Sim","Não"],
            ["Ok","Cancelar"],
        ],

        'popup-desc' : {
            import: `Copie seu save. CUIDADO: IRÁ SUBSTITUIR SEU SAVE ATUAL!`,
            wipe: ` Você tem certeza que gostaria de limpar seu save? Para limpar, digite "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
        },

        'notify-desc' : {
            save: "Jogo salvo!",
        },

        'radio-desc' : {
            'notation': ['Notação de formatação',['Científico','Padrão','Científico mixo']],
            'comma-format': ['Maximas OdM com vírgulas',['3','6','9','12','15']],
            'autosave': ['Autosave',['Desabilitado','Habilitado']],
            'autosave-time': ['Intervalo de autosave ',['15s','30s','60s','120s']],
            'offline': ['Progresso Offline',['Desabilitado','Habilitado']],
        },

        'radio-desc-default' : ['Desabilitado','Habilitado'],

        'prompt-placeholder': "Digite texto aqui...",

        'option-buttons-text': ["Salve","Exportar via área de transferência","Exportar via arquivo","Importar via área de transferência","Exportar via arquivo","LIMPAR!!!"],

        'confirm-prestige': "Prestígio",
        'confirm-core': "Entre no núcleo",
    },
}