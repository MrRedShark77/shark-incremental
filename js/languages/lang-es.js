// This is Spanish!

LANGUAGES.ES = {
    name: "Spanish",
    inter_name: "Español",
    icon: "lang-es",

    text: {
        // Currencies

        'fish-name': "Peces",
        'fish-costName': toTextStyle('Peces','fish'),

        'prestige-name': "Fragmentos de prestigio",
        'prestige-costName': "Fragmentos de " + toTextStyle('Prestigio','prestige'),

        'coral-name': "Coral",
        'coral-costName': toTextStyle('Coral','coral'),

        'ice-name': "Hielo",
        'ice-costName': toTextStyle('Hielo','ice'),

        'salt-name': "Sal",
        'salt-costName': toTextStyle('Sal','salt'),

        'snow-name': "Nieve Comprimida",
        'snow-costName': toTextStyle('Nieve Comprimida','snow'),
		
		'kelp-name': "Algas",
        'kelp-costName': toTextStyle('Algas','kelp'),

        'core-name': "Fragmentos Magmáticos",
        'core-costName': 'Fragmentos ' + toTextStyle('Magmáticos','core'),

        'full-shark-level': 'Niveles de ' +  toTextStyle('Tiburón','shark'),

        'curr-top-0-req': x => `Alcanza <b>${format(x)}</b> ${toTextStyle('Peces','fish')} en total`, 
        'curr-top-0-reset': x => `Haz un prestigio para conseguir <b>${x.format(0)}</b> fragmentos de ${toTextStyle('Prestigio','prestige')}`,

        'curr-top-1-req': x => `Alcanza un total de <b>${format(x)}</b> fragmentos de ${toTextStyle('Prestigio','prestige')}`, 
        'curr-top-1-reset': x => `Entra al núcleo para conseguir <b>${x.format(0)}</b> fragmentos ${toTextStyle('Magmáticos','core')}`,
		
		'radioactive-name': toTextStyle('Radiación '+icon("radioactive"),'core'),

        // Tabs

        'tab-shark': toTextStyle('Tiburón','shark'),
        'tab-options': "Opciones",
        'tab-auto': "Automatización",
        'tab-research': toTextStyle('Investigaciones','prestige'),
        'tab-explore': "Exploraciones",
        'tab-core': "El "+toTextStyle('Núcleo','core'),
        'tab-core-reactor': "Reactor " + toTextStyle('Nuclear','core'),
		'tab-core-radiation': "Radiación " + toTextStyle('Nuclear','core'),
        'tab-core-assembler': "Ensambladora " + toTextStyle('Nuclear','core'),

        // Elements

        'fish-div': `Tu ${toTextStyle('Tiburón','shark')} ha comido <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> peces.`,
        'shark-stats': `Estadísticas del ${toTextStyle('Tiburón','shark')}<br>Nivel: <h4 id="shark-level">???</h4><br>Rango: <h4 id="shark-tier">???</h4>`,

        'option-title-1': "Opciones principales",
        'option-title-2': "Notaciones",
        'option-title-3': "Confirmaciones",
        'option-title-4': "Idiomas",
		
		'offline-speed': "Acelerar progreso Offline",
        'offline-done': "Hecho",
		
		'radioactive-div': `El ${toTextStyle('Núcleo','core')} ha producido <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('Núcleo','core'), rf = toTextStyle('Peces '+icon("radioactive"),'fish')
            return `
            <summary>El Experimento de la Radiación del ${c}</summary>
            Experimentar con la radiación del núcleo fuerza un reseteo del ${toTextStyle('Núcleo','core')}.
            Durante el experimento, todos los reactores del núcleo no funcionan, y los ${toTextStyle('Peces','fish')}, fragmentos de ${toTextStyle('Prestigio','prestige')}, y los recursos de los primeros 4 océanos son enraizados al cubo.
            El experimento obliga a tu ${toTextStyle('Tiburón','shark')} a comer ${rf} radioactivos.<br>
            Mejora con ${rf} radioactivos para generar más ${toTextStyle('Radiación '+icon("radioactive"),'core')}, que dará impulsos adicionales.
            `
        },
        'radioboost-div': `Tienes <h3 id="radioactive-boost">0</h3> impulsos radioactivos.`,

        'core-temp-div': `La temperatura del ${toTextStyle('Núcleo','core')} es <h3>${toTextStyle('6,150','core','core-temperature')}</h3>, haciendo los impulsos radioactivos un <h4 id="core-temp-effect">100%</h4> más efectivos.`,
        'core-temp-after-div': `(La temperatura del ${toTextStyle('Núcleo','core')} sera <span id="core-temp-after">???</span> tras un reseteo del ${toTextStyle('Núcleo','core')})`,
        
        // Upgrades

        'su-s1-req': "Nivel 3",
        'su-s1-name': 'Fuerza del Tiburón',
        'su-s1-desc': `Aumenta los ${toTextStyle('Peces','fish')} comidos en <b>+1</b> por nivel.`,

        'su-s2-req': "Nivel 7",
        'su-s2-name': 'Agilidad del Tiburón',
        'su-s2-desc': `Aumenta la base del bonus de ${toTextStyle('Peces','fish')} de los niveles del ${toTextStyle('Tiburón','shark')} en <b>+1</b> por nivel.`,

        'su-s3-req': "Nivel 15",
        'su-s3-name': 'Dientes del Tiburón',
        'su-s3-desc': `Aumenta el exponente de la primera mejora del ${toTextStyle('Tiburón','shark')} en un <b>+50%</b> por nivel.`,

        'su-s4-req': "Nivel 38",
        'su-s4-name': 'Exponente del Tiburón',
        'su-s4-desc': `Aumenta el exponente de los ${toTextStyle('Peces','fish')} en <b>+1%</b> por nivel.`,
		
		'su-s5-req': "Level 640",
        'su-s5-name': 'Tiburón Radioactivo',
        'su-s5-desc': `Aumenta la producción de ${toTextStyle('Radiación '+icon("radioactive"),'core')} por <b>x2</b> por level.`,

        'su-p1-req': "Primer Prestigio",
        'su-p1-name': 'Fuerza de Super Tiburón',
        'su-p1-desc': `Aumenta los ${toTextStyle('Peces','fish')} comidos en <b>×3</b> por nivel.`,

        'su-p2-req': "Primer Prestigio",
        'su-p2-name': 'Potenciador de prestigio',
        'su-p2-desc': `Aumenta los ${toTextStyle('Peces','fish')} comidos en <b>×lg(${toTextStyle('Peces','fish')})</b> por nivel.`,

        'su-p3-name': 'Escalado de Tiburón',
        'su-p3-desc': `Retrasa el primer escalado de los niveles del ${toTextStyle('Tiburón','shark')} en <b>+1</b> por nivel.`,

        // Researches

        'research-p1-name': "Agilidad prestigiosa",
        'research-p1-desc': `'Agilidad del Tiburón' ahora afecta a la base de los niveles del ${toTextStyle("Tiburón",'shark')} dando un bonus de fragmentos de ${toTextStyle("Prestigio",'prestige')} a ritmo reducido.`,

        'research-p2-name': "Mejora de Tiburón EL",
        'research-p2-desc': `Las mejororas de ${toTextStyle("Tiburón",'shark')} que usan ${toTextStyle("Peces",'fish')} ya no gastan ${toTextStyle("Peces",'fish')}.`,

        'research-p3-name': "Niveles de Tiburón Mejorados",
        'research-p3-desc': `Reduce la base de los requisitos de los niveles del ${toTextStyle("Tiburón",'shark')} por <b>1</b>,
        pero fuerza un reseteo de ${toTextStyle("Prestigio",'prestige')}, reseteando tus fragmentos de ${toTextStyle("Prestigio",'prestige')} y las mejoras de ${toTextStyle("Prestigio",'prestige')}.
        Desbloquea mejoras de ${toTextStyle("Tiburón",'shark')}.`,

        'research-p4-name': "Mejor Prestigio",
        'research-p4-desc': `Mejora ligeramente la fórmula de ganar fragmentos de ${toTextStyle("Prestigio",'prestige')}.`,

        'research-p5-name': "Mega Fuerza",
        'research-p5-desc': `'Fuerza de Super Tiburón' es un <b>1%</b> más poderoso por cada nivel del ${toTextStyle("Tiburón",'shark')} empezando en 100.`,

        'research-p6-name': "Tiburón Super Escalado",
        'research-p6-desc': `'Tiburón Escalado' es el <b>doble</b> de poderoso.`,

        'research-p7-name': "Mejores recursos I",
        'research-p7-desc': `El efecto del ${toTextStyle("Coral",'coral')} y el ${toTextStyle("Hielo",'ice')} son mejores.`,
		
		'research-p8-name': "Niveles de Tiburón aún más Mejorados",
        'research-p8-desc': `Reduce aún más la base de los requisitos de los niveles del ${toTextStyle("Tiburón",'shark')} por 1.`,

        'research-e1-name': "Sinergia oceánica I",
        'research-e1-desc': `La ${toTextStyle("Sal",'salt')} impulsa los ${toTextStyle("Corales",'coral')} generados.`,

        'research-e2-name': "Sinergia oceánica II",
        'research-e2-desc': `La ${toTextStyle("Nieve Comprimida",'snow')} impulsa el ${toTextStyle("Hielo",'ice')} generado.`,
		
		'research-e3-name': "Automatización de Exploración",
        'research-e3-desc': `Actualiza automáticamente la base de los primeros <b>X</b> océanos sin explorar.`,

        'research-e4-name': "Oxidación de Algas",
        'research-e4-desc': `El <b>Oxígeno</b> ahora afecta a la producción de ${toTextStyle("Algas",'kelp')} a ritmo reducido.`,

        'research-e5-name': "Automatización de Exploración MK2",
        'research-e5-desc': `Actualiza automáticamente la base del Oceano Índico sin explorar. Mejora el efecto de las ${toTextStyle('Algas','kelp')} otra vez.`,

        'research-c1-name': "Investigaciones C-Keeper",
        'research-c1-desc': `Mantén tus ${toTextStyle("Investigaciones",'prestige')} al entrar al ${toTextStyle('Núcleo','core')}.`,

        'research-c2-name': "Exploración C-Keeper",
        'research-c2-desc': `Mantén los primeros <b>X</b> océanos desbloqueados y su profundidad al entrar al ${toTextStyle('Núcleo','core')}.`,

        'research-c3-name': "Afecto de Neón I",
        'research-c3-desc': `El <b>Neón</b> ahora afecta a 'Dientes del Tiburón', 'Exponente del Tiburón', y a 'Escalado de Tiburón'.`,

        'research-c4-name': "Mejor Níquel",
        'research-c4-desc': `El efecto del <b>Níquel</b> es el <b>doble</b> de poderoso.`,
		
		'research-c5-name': "Impulso del núcleo adicional",
        'research-c5-desc': `El primer impulso de la radiación del núcleo ahora afecta al impulso de ${toTextStyle('Peces','fish')} del reactor del núcleo a ritmo reducido.`,

        'research-c6-name': "Reducción Radioactiva",
        'research-c6-desc': `Los fragmentos ${toTextStyle('Magmáticos','core')} reducen el límite de la radiación del núcleo a ritmo reducido.`,

        'research-c7-name': "Mejores Dientes del Tiburón",
        'research-c7-desc': `El efecto de los 'Dientes del tiburón' es elevado a la potencia de <b>2.5</b> .`,

        'research-c8-name': "Mejor Hierro y Neón",
        'research-c8-desc': `El efecto del <b>Hierro</b> es el doble de fuerte y los requisitos para el <b>Hierro</b> y el <b>Neón</b> se reducen drasticamente.`,

        'research-c9-name': "Mejores impulsos del núcleo",
        'research-c9-desc': `Mejora el impulso de los reactores del núcleo hacia los ${toTextStyle('Peces','fish')}.`,

        'research-c10-name': "Tiburón superescalado",
        'research-c10-desc': `'Tiburón Escalado' ahora retrasa el segundo escalado de nivel del ${toTextStyle('Tiburón','shark')} a ritmo reducido.`,

        'research-c11-name': "Mejor Reducción Radioactiva",
        'research-c11-desc': `'Reducción Radioactiva' es levemente más poderosa.`,

        // Exploration

        'explore-while': `Mientras exploras`,
        'explore-inside': (a,b,c)=>`Base ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Alcanza ${format(c,0)} ${toTextStyle("Peces",'fish')}.`,
        'explore-outside': x=>`Tu base actual es de ${x.format()}/s.<br>¡Explora el océano!`,

        'explore-next': x=>`Nuevo océano al conseguir el nivel <h3>${format(x,0)}</h3> del ${toTextStyle("Tiburón",'shark')}.`,

        'explore-doubler-1': x=>`Duplica ${x} ganado.`,
        'explore-doubler-2': `Duplica la progresión de la profundidad ganada.`,

        'explore-0-name': `Océano Pacífico`,
        'explore-0-desc': `Los ${toTextStyle('Peces','fish')} ganados son enraizados por 2.`,
        'explore-0-milestone': [
            `Aumenta los fragmentos de ${toTextStyle('Prestigio','prestige')} ganados a la potencia de 1.05.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `Subir de nivel el ${toTextStyle('Tiburón','shark')} ya no gasta ${toTextStyle('Peces','fish')}.`,
            `Aumenta los ${toTextStyle('Peces','fish')} comidos a la potencia de 1.05.`,
            `Desbloquea el ${toTextStyle('Núcleo','core')}.`,
        ],

        'explore-1-name': `Océano Ártico`,
        'explore-1-desc': `Resetea tus fragmentos de ${toTextStyle("Prestigio",'prestige')} y mejoras de ${toTextStyle("Prestigio",'prestige')}. La ganancia de los fragmentos de ${toTextStyle('Prestigio','prestige')} es enraizada por 2.`,
        'explore-1-milestone': [
            `Desbloquea Auto-mejoras de ${toTextStyle('Prestigio','prestige')} del ${toTextStyle("Tiburón","shark")}.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `Las mejoras de ${toTextStyle('Prestigio','prestige')} del ${toTextStyle('Tiburón','shark')} ya no gastan fragmentos de ${toTextStyle('Prestigio','prestige')}.`,
            `Genera pasivamente el 100% de los fragmentos de ${toTextStyle('Prestigio','prestige')} que ganarías en un ${toTextStyle('Prestigio','prestige')}.`,
        ],

        'explore-2-name': `Océano Atlántico`,
        'explore-2-desc': `Resetea tus fragmentos de ${toTextStyle("Prestigio",'prestige')} y mejoras de ${toTextStyle("Prestigio",'prestige')}. El nivel del ${toTextStyle('Tiburón','shark')} escala 10x más rápido.` ,
        'explore-2-milestone': [
            `El escalado de 'Dientes del Tiburón' y 'Exponente del Tiburón' son ligeramente más débiles.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `El escalado de los niveles del ${toTextStyle('Tiburón','shark')} empiezan +1 más tarde por cada 500m de profundidad.`,
            `El efecto de la ${toTextStyle("Sal",'salt')} es un 50% más fuerte.`,
        ],

        'explore-3-name': `Océano Antártico`,
        'explore-3-desc': `Resetea tus fragmentos de ${toTextStyle("Prestigio",'prestige')} y mejoras de ${toTextStyle("Prestigio",'prestige')}. No puedes comprar mejoras de ${toTextStyle('Peces','fish')} y ${toTextStyle('Prestigio','prestige')} del ${toTextStyle('Tiburón','shark')}.`,
        'explore-3-milestone': [
            `Aumenta la base de la exploración en 10x.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `El efecto de la ${toTextStyle('Nieve Comprimida','snow')} es un 50% más fuerte.`,
        ],
		
		'explore-4-name': `Océano Índico`,
        'explore-4-desc': `Estás atrapado en los primeros cuatro océanos activos, y el exponente de los ${toTextStyle('Peces','fish')} es aumentado a la potencia de 0.75.`,
        'explore-4-milestone': [
            `Reduce el límite de la radiación del núcleo en /1,000.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `Los reactores del núcleo escalan +5 después.`,
            `Mejora el efecto de las ${toTextStyle('Algas','kelp')}.`,
        ],

        // Core Reactor

        'core-0-name': `Hierro`,
        'core-0-desc': `Los ${toTextStyle("Peces",'fish')} se aumentan a sí mismos basados en los niveles de <b>Hierro</b>.`,

        'core-1-name': `Níquel`,
        'core-1-desc': `Los fragmentos de ${toTextStyle("Prestigio",'prestige')} aumentan su base basados en los niveles de <b>Níquel</b>.`,

        'core-2-name': `Oxígeno`,
        'core-2-desc': `Los recursos de los primeros cuatro océanos aumentan su producción basados en los niveles de <b>Oxígeno</b>.`,

        'core-3-name': `Neón`,
        'core-3-desc': `Los niveles del ${toTextStyle("Tiburón",'shark')} bajan sus requisitos basados en los niveles de <b>Neón</b>.`,

        'core-4-name': `Azufre`,
        'core-4-desc': `Los ${toTextStyle("Peces",'fish')} fortalecen el <b>Hierro</b> en base al nivel del <b>Azufre</b>.`,

        'core-5-name': `Silicio`,
        'core-5-desc': `Los Fragmentos de ${toTextStyle("Prestigio",'prestige')} fortalecen el <b>Níquel</b> basado en el nivel del <b>Silicio</b>.`,

        'core-6-name': `Nitrógeno`,
        'core-6-desc': `Las ${toTextStyle("Algas",'kelp')} fortalecen el <b>Oxígeno</b> basado en el nivel del <b>Nitrógeno</b>.`,

        'core-7-name': `Helio`,
        'core-7-desc': `El nivel del ${toTextStyle("Tiburón",'shark')} fortalece el <b>Neón</b> basado en el nivel del <b>Helio</b>.`,

        'core-bonus': x => `Los reactores del núcleo impulsarán los ${toTextStyle("Peces",'fish')} en <h4>${formatMult(x)}</h4>.`,

        'core-assembler-erase': `Modo de borrado`,
        'core-assembler-choose': `Estás eligiendo`,
        'core-assembler-building-stats': (s,p,m) => `Poder <b>${s}</b> | Colocados <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Edificios máximos: ${mm} / ${m}<br>Requiere: ${format(x)} fragmentos ${toTextStyle("Magmáticos",'core')}`, 
        'ca-building-base': b => `[Base: ${b}]`,
        'ca-building-temp': t => `Aumenta la temperatura del nucleo en ${t}.`,
		
		// Core Radiation

        'cr-start': x=>x?"Terminar el experimento.":"Empezar el experimento.",

        'upgrade-cr': (gen,cost)=>`
        Mejora la producción de la ${toTextStyle('Radiación '+icon("radioactive"),'core')}.<br>
        Generando <b>${format(gen,0)}</b> por segundo.<br>
        Coste: ${format(cost,0)} ${toTextStyle('Peces '+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`Resetea la ${toTextStyle('Radiación '+icon("radioactive"),'core')}, pero aumenta su límite por <b>${formatMult(inc,0)}</b>, y a veces añade un nuevo impulso o mejora los impulsos. Necesitas llegar al límite para resetear.`,

        'cr-boosts': [
            x=>`Provee <h4>+${format(x)}</h4> reactores del núcleo extras en la primera fila.`,
            x=>`Impulsa los fragmentos ${toTextStyle('Magmáticos','core')} por <h4>${formatMult(x)}</h4>.`,
            x=>`Las primeras cuatro mejoras de ${toTextStyle('Peces','fish')} del ${toTextStyle('Tiburón','shark')} son un <h4>${formatPercent(x.sub(1))}</h4> más poderosos.`,
            x=>`El segundo escalado de los niveles del ${toTextStyle('Tiburón','shark')} se retrasa en <h4>+${format(x)}</h4>.`,
            x=>`Aumenta la base del bonus de fragmentos ${toTextStyle('Magmáticos','core')} de los niveles del ${toTextStyle('Tiburón','shark')} en <h4>+${format(x,3)}</h4>.`,
            x=>`Aumenta el bonus de ${toTextStyle('Peces','fish')} en base a los niveles del ${toTextStyle('Tiburón','shark')} al exponente de <h4>${formatPow(x,3)}</h4>.`,
            x=>`Las tres primeras mejoras de ${toTextStyle('Prestigio','prestige')} del ${toTextStyle('Tiburón','shark')} son <h4>${formatPercent(x.sub(1))}</h4> más fuertes.`,
        ],

        // Automation

        'auto-shark-name': `Auto-niveles del ${toTextStyle("Tiburón","shark")}`,
        'auto-su-name': `Auto-mejoras de ${toTextStyle("Peces","fish")} del ${toTextStyle("Tiburón","shark")}`,
        'auto-spu-name': `Auto-mejoras de ${toTextStyle('Prestigio','prestige')} del ${toTextStyle("Tiburón","shark")}`,
        'auto-eu-name': `Auto-mejoras de exploración`,

        'auto-cost': (D,cost,name) => `Disminuye el intervalo en un ${formatReduction(D,0)}.<br>Precio: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Intervalo: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress

        'progress-0-text': r => `Alcanza un total de ${format(r)} ${toTextStyle('Peces','fish')}`,
        get 'progress-0-cond-text'() { return `Haz un ${toTextStyle('prestigio','prestige')}` },

        'progress-1-text': r => `Alcanza ${format(r)} fragmentos de ${toTextStyle('Prestigio','prestige')} para desbloquear la automatización`,
        'progress-2-text': r => `Alcanza ${format(r)} fragmentos de ${toTextStyle('Prestigio','prestige')} para desbloquear las Investigaciones`,
        'progress-3-text': r => `Alcanza el nivel ${format(r,0)} del ${toTextStyle('Tiburón','shark')} para desbloquear la exploración`,
        'progress-4-text': r => `Alcanza ${format(r)}m  de la profundidad del océano Pacífico para desbloquear el ${toTextStyle('Núcleo','core')}`,

        'progress-5-text': r => `Alcanza un total de ${format(r)} fragmentos de ${toTextStyle('Prestigio','prestige')}`, 
        get 'progress-5-cond-text'() { return `Entra al ${toTextStyle('Núcleo','core')}` },
		
		'progress-6-text': r => `Alcanza ${format(r)} fragmentos ${toTextStyle('Magmáticos','core')} para desbloquear la siguiente característica del núcleo`, 
        'progress-7-text': r => `Alcanza el nivel ${format(r,0)} del ${toTextStyle('Tiburón','shark')} para desbloquear un nuevo tipo de océano`,
        'progress-8-text': r => `Alcanza ${format(r)} fragmentos ${toTextStyle('Magmáticos','core')} para desbloquear la siguiente característica del ${toTextStyle('Núcleo','core')}`, 
        'progress-9-text': r => `Alcanza ${format(r)} ${toTextStyle('Peces','fish')} totales para desbloquear nuevos reactores del  ${toTextStyle('Núcleo','core')}`, 

        'maxed-progress': "¡Todas las mecánicas desbloqueadas!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestigio','prestige'), s = toTextStyle('Tiburón','shark'), f = toTextStyle('Peces','fish')
            return `
            <h3>${p}</h3><br>
            El ${p} es la primera capa de reseteo. Hacer un prestigio resetea las mejoras de ${s}, y los ${f} por fragmentos de ${p} .
            El primer ${p} desbloqueará mejoras de ${s}.<br>
            <img src="textures/PrestigeShard.png"><br>
            ¿Estás seguro que quieres hacer un prestigio?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Núcleo','core'), m = toTextStyle('Magmáticos','core'), p = toTextStyle('Prestigio','prestige')
            return `
            <h3>El ${c}</h3><br>
            El ${c} es la segunda capa de reseteo. Entrar al núcleo resetea todo lo que el ${p} hace, también como los fragmentos de ${p} , mejoras de ${p} , ${toTextStyle('Investigaciones','prestige')} (casi todas), y exploraciones por fragmentos ${m}.
            Desbloqueando el reactor del ${c} la primera vez.<br>
            <img src="textures/Magmatic.png"><br>
            ¿Estás seguro que quieres entrar al núcleo?
            `
        },
        
        // Other

        'upgrade-shark': x => `Mejora el nivel del ${toTextStyle('Tiburón','shark')} <br>Precio: ${x.format(0)} ${toTextStyle('Peces','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} base de los ${toTextStyle('Peces','fish')}`,
        'shark-bonus-prestige': x => `${formatMult(x)} Fragmentos de ${toTextStyle('prestigio','prestige')}`,
        'shark-bonus-core': x => `${formatMult(x)} Fragmentos ${toTextStyle('magmáticos','core')} `,

        'level': "Nivel",
        'effect': "Efecto",
        'cost': "Precio",
        'buyMax': "Comprar el máximo",
        'require': "Requiere",
        'next-at': "Siguiente en",
        'depth': "Profundidad",
		
		'offline-time-text': x=>`Has estado desconectado por <b>${formatTime(x,0)}</b>.`,

        'research-afford': bool => bool ? "Comprar" : "No tienes suficiente",
        'research-bought': bool => bool ? `<b>Comprado</b>` : `<b>Sin comprar</b>`,

        'off-on': bool => bool ? "ENCENDIDO" : "APAGADO",

        'popup-buttons': [
            ["Sí","No"],
            ["Ok","Cancelar"],
        ],

        'popup-desc' : {
            import: `Pega tu guardado. ADVERTENCIA: ¡ESTO SOBRESCRIBIRÁ TU GUARDADO ACTUAL!`,
            wipe: `¿Estas seguro que quieres borrar tu guardado? Para borrar, escribe "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
        },

        'notify-desc' : {
            save: "¡Juego Guardado!"
        },

        'radio-desc' : {
            'notation': ['Formato de notación',['Científica','Estándar','Científica Mezclada']],
            'comma-format': ['Máximos OoMs con comas numéricas',['3','6','9','12','15']],
            'autosave': ['Autoguardado',['Desactivado','Activado']],
            'autosave-time': ['Intervalo de Autoguardado',['15s','30s','60s','120s']],
            'offline': ['Progreso offline',['Desactivado','Activado']],
        },

        'radio-desc-default' : ['Desactivado','Activado'],

        'prompt-placeholder': "Escribe aquí para...",

        'option-buttons-text': ["Guardar","Exportar al portapapeles","Exportar en un archivo","Importar por texto","Importar de un archivo","¡¡¡BORRAR PROGRESO!!!",'Únete a la comunidad (Discord)','Apoya al creador (Boosty)'],

        'confirm-prestige': "Hacer un prestigio",
        'confirm-core': "Entrar al núcleo",
    },
}