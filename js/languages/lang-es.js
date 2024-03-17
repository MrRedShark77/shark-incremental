// This is main language file! It's Spanish!

LANGUAGES.ES = {
    name: "Spanish",
    inter_name: "Español",
    icon: "lang-es",

    text: {
        // Currencies

        'fish-name': "Peces",
        'fish-costName': toTextStyle('Peces','fish'),

        'prestige-name': "Cristales de prestigio",
        'prestige-costName': "Cristales de " + toTextStyle('Prestigio','prestige'),

        'coral-name': "Coral",
        'coral-costName': toTextStyle('Coral','coral'),

        'ice-name': "Hielo",
        'ice-costName': toTextStyle('Hielo','ice'),

        'salt-name': "Sal",
        'salt-costName': toTextStyle('Sal','salt'),

        'snow-name': "Nieve Comprimida",
        'snow-costName': toTextStyle('Nieve Comprimida','snow'),

        'core-name': "Fragmentos Magmáticos",
        'core-costName': 'Fragmentos ' + toTextStyle('Magmáticos','core'),

        'curr-top-0-req': x => `Alcanza <b>${format(x)}</b> ${toTextStyle('Peces','fish')} en total`, 
        'curr-top-0-reset': x => `Haz prestigio para conseguir <b>${x.format(0)}</b> cristales de ${toTextStyle('Prestigio','prestige')}`,

        'curr-top-1-req': x => `Alcanza un total de <b>${format(x)}</b> cristales de ${toTextStyle('Prestigio','prestige')}`, 
        'curr-top-1-reset': x => `Entra al núcleo para conseguir <b>${x.format(0)}</b> fragmentos ${toTextStyle('Magmáticos','core')}`,

        // Tabs

        'tab-shark': toTextStyle('Tiburón','shark'),
        'tab-options': "Opciones",
        'tab-auto': "Automatización",
        'tab-research': toTextStyle('Investigaciones','prestige'),
        'tab-explore': "Exploración",
        'tab-core': "El "+toTextStyle('Núcleo','core'),
        'tab-core-reactor': "Reactor " + toTextStyle('Núclear','core'),

        // Elements

        'fish-div': `Tu ${toTextStyle('Tiburón','shark')} ha comido <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> peces.`,
        'shark-stats': `Estadísticas del ${toTextStyle('Tiburón','shark')}<br>Nivel: <h4 id="shark-level">???</h4><br>Rango: <h4 id="shark-tier">???</h4>`,

        'option-title-1': "Opciones Principales",
        'option-title-2': "Notaciones",
        'option-title-3': "Confirmaciones",
        'option-title-4': "Idiomas",
        
        // Upgrades

        'su-s1-req': "Nivel 3",
        'su-s1-name': 'Fuerza del Tiburón',
        'su-s1-desc': `Aumenta los ${toTextStyle('Peces','fish')} comidos en <b>+1</b> por nivel.`,

        'su-s2-req': "Nivel 7",
        'su-s2-name': 'Agilidad de Tiburón',
        'su-s2-desc': `Aumenta la base de los niveles del ${toTextStyle('Tiburón','shark')} en un bonus de ${toTextStyle('Peces','fish')} de <b>+1</b> por nivel.`,

        'su-s3-req': "Nivel 15",
        'su-s3-name': 'Dientes de Tiburón',
        'su-s3-desc': `Aumenta el exponente de la primera mejora del ${toTextStyle('Tiburón','shark')} en un <b>+50%</b> por nivel.`,

        'su-s4-req': "Nivel 38",
        'su-s4-name': 'Exponente del Tiburón',
        'su-s4-desc': `Aumenta el exponente de los ${toTextStyle('Peces','fish')} en <b>+1%</b> por nivel.`,

        'su-p1-req': "Primer Prestigio",
        'su-p1-name': 'Fuerza de Super Tiburón',
        'su-p1-desc': `Aumenta los ${toTextStyle('Peces','fish')} comidos en <b>×3</b> por nivel.`,

        'su-p2-req': "Primer Prestigio",
        'su-p2-name': 'Potenciador de prestigio',
        'su-p2-desc': `Aumenta los ${toTextStyle('Peces','fish')} comidos en <b>×lg(${toTextStyle('Peces','fish')})</b> por nivel.`,

        'su-p3-name': 'Escalado de Tiburón',
        'su-p3-desc': `Retrasa el primer escalado de los niveles del ${toTextStyle('Tiburón','shark')} en <b>+1</b> por nivel.`,

        // Researches

        'research-p1-name': "Agilidad Prestigiosa",
        'research-p1-desc': `'Agilidad del Tiburón' ahora afecta a la base de los niveles del ${toTextStyle("Tiburón",'shark')} bonus de cristales de ${toTextStyle("Prestigio",'prestige')} por una baja cantidad .`,

        'research-p2-name': "Mejora de Tiburón EL",
        'research-p2-desc': `Las mejororas de ${toTextStyle("Tiburón",'shark')} que usan ${toTextStyle("Peces",'fish')} ya no gastan ${toTextStyle("Peces",'fish')}.`,

        'research-p3-name': "Niveles de Tiburón Mejorados",
        'research-p3-desc': `Reduce la base de los requisitos de los niveles del ${toTextStyle("Tiburón",'shark')} por <b>1</b>,
        pero fuerza un reseteo de ${toTextStyle("Prestigio",'prestige')}, reseteando tus cristales de ${toTextStyle("Prestigio",'prestige')} y las mejoras de ${toTextStyle("Prestigio",'prestige')}.
        Desbloquea mejoras de ${toTextStyle("Tiburón",'shark')}.`,

        'research-p4-name': "Mejor Prestigio",
        'research-p4-desc': `Mejora ligeramente la fórmula de ganar cristales de ${toTextStyle("Prestigio",'prestige')}.`,

        'research-p5-name': "Mega Fuerza",
        'research-p5-desc': `'Fuerza de Super Tiburón' es un <b>1%</b> más poderoso por cada nivel del ${toTextStyle("Tiburón",'shark')} empezando en 100.`,

        'research-p6-name': "Tiburón Super Escalado",
        'research-p6-desc': `'Tiburón Escalado' es el <b>doble</b> de poderoso.`,

        'research-p7-name': "Mejores recursos I",
        'research-p7-desc': `El efecto de ${toTextStyle("Coral",'coral')} y el ${toTextStyle("Hielo",'ice')} son mejores.`,

        'research-e1-name': "Sinergia oceánica I",
        'research-e1-desc': `La ${toTextStyle("Sal",'salt')} impulsa los ${toTextStyle("Corales",'coral')} generados.`,

        'research-e2-name': "Sinergia oceánica II",
        'research-e2-desc': `La ${toTextStyle("Nieve Comprimida",'snow')} impulsa el ${toTextStyle("Hielo",'ice')} generado.`,

        'research-c1-name': "Investigaciones C-Keeper",
        'research-c1-desc': `Manten tus ${toTextStyle("Investigaciones",'prestige')} al entrar al ${toTextStyle('Núcleo','core')}.`,

        'research-c2-name': "Exploración C-Keeper",
        'research-c2-desc': `Mantén los primeros <b>X</b> océanos desbloqueados y su profundidad al entrar al núcleo ${toTextStyle('Núcleo','core')}.`,

        'research-c3-name': "Afecto de Neón I",
        'research-c3-desc': `El <b>Neón</b> ahora afecta a los 'Dientes de Tiburón', 'Exponente del Tiburón', y a 'Escalado de Tiburón'.`,

        'research-c4-name': "Mejor Níquel",
        'research-c4-desc': `El efecto del <b>Níquel</b> es el <b>doble</b> de poderoso.`,

        // Exploration

        'explore-while': `Mientras exploras`,
        'explore-inside': (a,b,c)=>`Base ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Alcanza ${format(c,0)} ${toTextStyle("Peces",'fish')}.`,
        'explore-outside': x=>`Tu base actual es de ${x.format()}/s.<br>¡Explora el océano!`,

        'explore-next': x=>`Nuevo océano al conseguir el nivel <h3>${format(x,0)}</h3> del ${toTextStyle("Tiburón",'shark')}.`,

        'explore-doubler-1': x=>`Duplica ${x} ganado.`,
        'explore-doubler-2': `Duplica la progresión conseguida de profundidad.`,

        'explore-0-name': `Océano Pacífico`,
        'explore-0-desc': `Los ${toTextStyle('Peces','fish')} ganados son enraizados por 2.`,
        'explore-0-milestone': [
            `Aumenta los cristales de ${toTextStyle('Prestigio','prestige')} ganados elevados a 1.05.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `Nivelar el ${toTextStyle('Tiburón','shark')} ya no gasta ${toTextStyle('Peces','fish')}.`,
            `Aumenta los ${toTextStyle('Peces','fish')} comidos a la potencia de 1.05.`,
            `Desbloquea el ${toTextStyle('Núcleo','core')}.`,
        ],

        'explore-1-name': `Océano Ártico`,
        'explore-1-desc': `Reinicia tus cristales de ${toTextStyle("Prestigio",'prestige')} y mejoras de ${toTextStyle("Prestigio",'prestige')}. La ganancia de los cristales de ${toTextStyle('Prestigio','prestige')} es enraizada por 2.`,
        'explore-1-milestone': [
            `Desbloquea Auto-mejoras de ${toTextStyle('Prestigio','prestige')} del ${toTextStyle("Tiburón","shark")}.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `Las mejoras de ${toTextStyle('Prestigio','prestige')} del ${toTextStyle('Tiburón','shark')} ya no gastan cristales de ${toTextStyle('Prestigio','prestige')}.`,
            `Genera pasivamente el 100% de los cristales de ${toTextStyle('Prestigio','prestige')} que ganarías en un ${toTextStyle('Prestigio','prestige')}.`,
        ],

        'explore-2-name': `Océano Atlántico`,
        'explore-2-desc': `Resetéa tus cristales de ${toTextStyle("Prestigio",'prestige')} y mejoras de ${toTextStyle("Prestigio",'prestige')}.Nivelar el ${toTextStyle('Tiburón','shark')} escala 10x más rápido.` ,
        'explore-2-milestone': [
            `El escalado de 'Dientes del Tiburón' y 'Exponente del Tiburón' son ligeramente más débiles.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `El escalado de los niveles del ${toTextStyle('Tiburón','shark')} empiezan +1 más tarde por cada 500m de profundidad.`,
            `El efecto de la ${toTextStyle("Sal",'salt')}' es un 50% más fuerte.`,
        ],

        'explore-3-name': `Oceáno Antártico`,
        'explore-3-desc': `Resetéa tus cristales de ${toTextStyle("Prestigio",'prestige')} y mejoras de ${toTextStyle("Prestigio",'prestige')}. No puedes comprar mejoras de ${toTextStyle('Peces','fish')} y ${toTextStyle('Prestigio','prestige')} del ${toTextStyle('Tiburón','shark')}.`,
        'explore-3-milestone': [
            `Aumenta la base de la exploración en 10x.`,
            `Aumenta los recursos y el progreso de la profundidad en un 25% por cada raíz cuadrada de los niveles del ${toTextStyle('Tiburón','shark')}.`,
            `El efecto de ${toTextStyle('Nieve Comprimida','snow')} es un 50% más fuerte.`,
        ],

        // Core Reactor

        'core-0-name': `Hierro`,
        'core-0-desc': `Los ${toTextStyle("Peces",'fish')} se aumentan a sí mismos basados en los niveles de <b>Hierro</b>.`,

        'core-1-name': `Níquel`,
        'core-1-desc': `Los cristales de ${toTextStyle("Prestigio",'prestige')} aumentan su base basados en los niveles de <b>Níquel</b>.`,

        'core-2-name': `Oxígeno`,
        'core-2-desc': `Los recursos de los primeros cuatro océanos aumentan su producción basados en los niveles de <b>Oxígeno</b>.`,

        'core-3-name': `Neón`,
        'core-3-desc': `Los niveles del ${toTextStyle("Tiburón",'shark')} bajan sus requisitos basados en los niveles de <b>Neón</b>.`,

        'core-bonus': x => `Los reactores del núcleo impulsarán los ${toTextStyle("Peces",'fish')} en <h4>${formatMult(x)}</h4>.`,

        // Automation

        'auto-shark-name': `Auto-niveles del ${toTextStyle("Tiburón","shark")}`,
        'auto-su-name': `Auto-mejoras de ${toTextStyle("Peces","fish")} del ${toTextStyle("Tiburón","shark")}`,
        'auto-spu-name': `Auto-mejoras de ${toTextStyle('Prestigio','prestige')} del ${toTextStyle("Tiburón","shark")}`,
        'auto-eu-name': `Auto-mejoras de exploración`,

        'auto-cost': (D,cost,name) => `Disminuye el intérvalo en ${formatReduction(D,0)}.<br>Precio: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Intérvalo: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress

        'progress-0-text': r => `Alcanza un total de ${format(r)} ${toTextStyle('Peces','fish')}`,
        get 'progress-0-cond-text'() { return `Haz un ${toTextStyle('prestigio','prestige')}` },

        'progress-1-text': r => `Alcanza ${format(r)} cristales de ${toTextStyle('Prestigio','prestige')} para desbloquear la automatización`,
        'progress-2-text': r => `Alcanza ${format(r)} cristales de ${toTextStyle('Prestigio','prestige')} para desbloquear las Investigaciones`,
        'progress-3-text': r => `Alcanza el nivel ${format(r,0)} del ${toTextStyle('Tiburón','shark')} para desbloquear la exploración`,
        'progress-4-text': r => `Alcanza ${format(r)}m  de la profundidad del océano Pacífico para desbloquear el ${toTextStyle('Núcleo','core')}`,

        'progress-5-text': r => `Alcanza un total de ${format(r)} cristales de ${toTextStyle('Prestigio','prestige')}`, 
        get 'progress-5-cond-text'() { return `Entra al ${toTextStyle('Núcleo','core')}` },

        'maxed-progress': "¡Todas las mecánicas desbloqueadas!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestigio','prestige'), s = toTextStyle('Tiburón','shark'), f = toTextStyle('Peces','fish')
            return `
            <h3>${p}</h3><br>
            El ${p} es la primera capa de reinicio. Hacer prestigio reiniciara las mejoras de ${s}, ${s} , y los ${f} por cristales de ${p} .
            El primer ${p} desbloqueará mejoras de ${s}.<br>
            <img src="textures/PrestigeShard.png"><br>
            ¿Estás seguro que quieres hacer un prestigio?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Núcleo','core'), m = toTextStyle('Magmáticos','core'), p = toTextStyle('Prestigio','prestige')
            return `
            <h3>El ${c}</h3><br>
            El ${c} es la segunda capa de reinicio. Entrar al núcleo reiniciara todo lo que el ${p} hace, también como los cristales de ${p} , mejoras de ${p} , ${toTextStyle('Investigaciones','prestige')} (casi todas), y exploraciones por fragmentos ${m}.
            Tambien desbloquea el reactor del ${c}.<br>
            <img src="textures/Magmatic.png"><br>
            ¿Estás seguro que quieres entrar al núcleo?
            `
        },
        
        // Other

        'upgrade-shark': x => `Mejora el nivel del ${toTextStyle('Tiburón','shark')} <br>Precio: ${x.format(0)} ${toTextStyle('Peces','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} ${toTextStyle('Peces','fish')} la base de los peces`,
        'shark-bonus-prestige': x => `Cristales de ${formatMult(x)} ${toTextStyle('prestigio','prestige')}`,
        'shark-bonus-core': x => `${formatMult(x)} Fragmentos ${toTextStyle('magmáticos','core')} `,

        'level': "Nivel",
        'effect': "Effecto",
        'cost': "Precio",
        'buyMax': "Comprar máximo",
        'require': "Requiere",
        'next-at': "Siguiente en",
        'depth': "Profundidad",

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
            save: "!Juego guardado!"
        },

        'radio-desc' : {
            'notation': ['Formato de notación',['Científica','Estándar','Científica Mezclada']],
            'comma-format': ['Máximos OoMs de comas en números',['3','6','9','12','15']],
            'autosave': ['Autoguardado',['Desactivado','Activado']],
            'autosave-time': ['Intervalo de Autoguardado',['15s','30s','60s','120s']],
            'offline': ['Progreso offline',['Desactivado','Activado']],
        },

        'radio-desc-default' : ['Desactivado','Activado'],

        'prompt-placeholder': "Escribe aquí para...",

        'option-buttons-text': ["Guardar","Exportar al portapapeles","Exportar en un archivo","Importar por texto","Importar de un archivo","¡¡¡BORRAR PROGRESO!!!"],

        'confirm-prestige': "Hacer prestigio",
        'confirm-core': "Entrar al núcleo",
    },
}