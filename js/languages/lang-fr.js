LANGUAGES.FR = {
	name: "French",
	inter_name: "Français",
	icon: "lang-fr",

	text: {
		// Currencies

		'fish-name': "Poissons",
		'fish-costName': toTextStyle('Poissons','fish'),

		'prestige-name': "Éclats de prestige",
		'prestige-costName': "Éclats de " + toTextStyle('Prestige','prestige'),

		'coral-name': "Coraux",
		'coral-costName': toTextStyle('Coraux','coral'),

		'ice-name': "Ice",
		'ice-costName': toTextStyle('Glaces','ice'),

		'salt-name': "Salt",
		'salt-costName': toTextStyle('Sel','salt'),

		'snow-name': "Compressed Snow",
		'snow-costName': toTextStyle('Neige comprimé','snow'),
		
		'kelp-name': "Varech",
		'kelp-costName': toTextStyle('Varech','kelp'),

		'core-name': "Fragments Magmatique",
		'core-costName': ' Fragments' + toTextStyle('Magmatique','core'),

        'full-shark-level': toTextStyle('Shark','shark') + ' Level',

		'curr-top-0-req': x => `Atteignez un total de <b>${format(x)}</b> ${toTextStyle('Poissons','fish')}`, 
		'curr-top-0-reset': x => `Prestige pour <b>${x.format(0)}</b> Éclats de ${toTextStyle('Prestige','prestige')}`,

		'curr-top-1-req': x => `Atteignez un total de <b>${format(x)}</b> éclats de ${toTextStyle('Prestige','prestige')}`, 
		'curr-top-1-reset': x => `Entrez dans le noyau pour <b>${x.format(0)}</b> Fragments ${toTextStyle('Magmatique','core')}`,

		'radioactive-name': toTextStyle('Radiation '+icon("radioactive"),'core'),

		// Tabs

		'tab-shark': toTextStyle('Requin','shark'),
		'tab-options': "Options",
		'tab-auto': "Automatisation",
		'tab-research': toTextStyle('Recherche','prestige'),
		'tab-explore': "Exploration",
		'tab-core': "Le " + toTextStyle('Noyau','core'),
		'tab-core-reactor': "Réacteur du " + toTextStyle('Noyau','core'),
		'tab-core-radiation': "Radiation du " + toTextStyle('Noyau','core'),
        'tab-core-assembler': toTextStyle('Core','core')+" Assembler",

		// Elements

		'fish-div': `Votre ${toTextStyle('Requin','shark')} a mangé <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> poissons.`,
		'shark-stats': `Statistiques du ${toTextStyle('Requin','shark')} <br>Niveau: <h4 id="shark-level">???</h4><br>Rang: <h4 id="shark-tier">???</h4>`,

		'option-title-1': "Options principales",
		'option-title-2': "Notations",
		'option-title-3': "Confirmations",
		'option-title-4': "Langues",

		'offline-speed': "Accelérer",
		'offline-done': "Terminer",

		'radioactive-div': `Le ${toTextStyle('Noyau','core')} à produit <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
		get 'radioactive-summary'() {
			var c = toTextStyle('Noyau','core'), rf = toTextStyle('Poissons '+icon("radioactive"),'fish')
			return `
			<summary>L'${c}Expérimentation de Radiation</summary>
			Expérimenter avec la radiation du noyau force une réinitialisation de ${toTextStyle('Noyau','core')}.
			Pendant l'expérience, aucun des réacteurs du noyau ne fonctionnent, et les ${toTextStyle('Poissons','fish')}, Éclats de ${toTextStyle('Prestige','prestige')}, et les ressources des 4 premiers océans sont mis à leur racine cubique.
			L'Expérimentation force votre ${toTextStyle('Requin','shark')} à manger des ${rf} radioactifs.<br>
			Améliorer avec des ${rf} pour générer plus de ${toTextStyle('Radiation '+icon("radioactive"),'core')}, ce qui vous donne des boosts supplémentaires.
			`
		},
		'radioboost-div': `Vous avez <h3 id="radioactive-boost">0</h3> boosts radioactif.`,

        'core-temp-div': `The ${toTextStyle('Core','core')}'s temperature is <h3>${toTextStyle('6,150','core','core-temperature')}</h3>, which makes radioactive boosts <h4 id="core-temp-effect">100%</h4> effective.`,
        'core-temp-after-div': `(The ${toTextStyle('Core','core')}'s temperature will be <span id="core-temp-after">???</span> after a ${toTextStyle('Core','core')} reset)`,

		// Upgrades

		'su-s1-req': "Niveau 3",
		'su-s1-name': 'Force du Requin',
		'su-s1-desc': `Augmente le nombre de ${toTextStyle('Poissons','fish')} mangés de <b>+1</b> par niveau.`,

		'su-s2-req': "Niveau 7",
		'su-s2-name': 'Agilité du Requin',
		'su-s2-desc': `Augmente le bonus de base de ${toTextStyle('Poissons ','fish')} de <b>+1</b> par niveau du ${toTextStyle('Requin','shark')}.`,

		'su-s3-req': "Niveau 15",
		'su-s3-name': 'Dents du Requin',
		'su-s3-desc': `Augmente l'exposant de la 1ère Amélioration du ${toTextStyle('Requin','shark')} de <b>+50%</b> par niveau.`,

		'su-s4-req': "Niveau 38",
		'su-s4-name': 'L\'éxposant du Requin',
		'su-s4-desc': `Augment l'exposant de  ${toTextStyle('Poissons','fish')} de <b>+1%</b> par niveau.`,

		'su-s5-req': "Niveau 640",
		'su-s5-name': 'Requin Radioactif',
		'su-s5-desc': `Augmente la production de ${toTextStyle('Radiation '+icon("radioactive"),'core')} de <b>x2</b> par niveau.`,

		'su-p1-req': "Premier Prestige",
		'su-p1-name': 'Super Force du Requin',
		'su-p1-desc': `Augmente le nombre de ${toTextStyle('Poissons','fish')} mangés de <b>×3</b> par niveau.`,

		'su-p2-req': "Premier Prestige",
		'su-p2-name': 'Booster de Prestige',
		'su-p2-desc': `Augmente le nombre de ${toTextStyle('Poissons','fish')} mangés de <b>×lg(${toTextStyle('Poissons','fish')})</b> par niveau.`,

		'su-p3-name': 'Barème du Requin',
		'su-p3-desc': `Augmentre le premier barème du niveau du ${toTextStyle('Requin','shark')} commençant de <b>+1</b> par niveau.`,

		// Researches

		'research-p1-name': "Agilité Prestigieuse",
		'research-p1-desc': `'Agilité du Requin' affecte désormais la base du bonus du niveau du ${toTextStyle("Requin",'shark')} Éclats de ${toTextStyle("Prestige",'prestige')} à taux réduit.`,

		'research-p2-name': "Amélioration EL du Requin",
		'research-p2-desc': `Les amélioration ${toTextStyle("Poissons",'fish')} ne dépense plus de ${toTextStyle("Poissons",'fish')}.`,

		'research-p3-name': "Niveau du Requin amélioré",
		'research-p3-desc': `Réduit la base du requis pour le niveau du ${toTextStyle("Requin",'shark')} par <b>1</b>,
		mais force une réinitialisation ${toTextStyle("Prestige",'prestige')}, réinitialisant vos Éclats de ${toTextStyle("Prestige",'prestige')} et amélioration ${toTextStyle("Prestige",'prestige')}.
		Débloque de nouvelles amélioration de ${toTextStyle("Requin",'shark')}.`,

		'research-p4-name': "Meilleur Prestige",
		'research-p4-desc': `Améliore légèrement la formule de gain des Éclats de ${toTextStyle("Prestige",'prestige')}.`,

		'research-p5-name': "Mega Force",
		'research-p5-desc': `'Super Force du Requin' est <b>1%</b> plus puissant par niveau du ${toTextStyle("Requin",'shark')}, commeçant à 100.`,

		'research-p6-name': "Super Barème du Requin",
		'research-p6-desc': `'Barème du requin' est <b>deux fois</b> plus fort.`,

		'research-p7-name': "Meilleures Ressources I",
		'research-p7-desc': `Effet des ${toTextStyle("Coraux",'coral')} et ${toTextStyle("Glaces",'ice')}' est meilleurs.`,

		'research-p8-name': "Niveau du Requin amélioré II",
		'research-p8-desc': `Réduit encore la base du requis pour le niveau du ${toTextStyle("Requin",'shark')} de 1.`,

		'research-e1-name': "Synérgie de l'Océan I",
		'research-e1-desc': `${toTextStyle("Sels",'salt')} augmente les ${toTextStyle("Coraux",'coral')} généré.`,

		'research-e2-name': "Synérgie de l'Océan II",
		'research-e2-desc': `${toTextStyle("Neige comprimé",'snow')} augmente les ${toTextStyle("Glaces",'ice')} généré.`,

		'research-e3-name': "Automatisation de l'Éxploration",
		'research-e3-desc': `Améliore automatiquement la meilleure base des premiers <b>X</b> océans sans explorer.`,
		
		'research-e4-name': "Oxydation du Varech",
		'research-e4-desc': `L'<b>Oxygene</b> affecte maintenant la production de ${toTextStyle("Varech",'kelp')} à taux réduit.`,

        'research-e5-name': "Exploration Automation MK2",
        'research-e5-desc': `Automatically gain base in the Indian Ocean without exploring. Improve ${toTextStyle('Kelp','kelp')}'s effect again.`,

		'research-c1-name': "C-Gardien de la Recherche",
		'research-c1-desc': `Garder les ${toTextStyle("Recherche",'prestige')} à l'entrée du ${toTextStyle('Noyau','core')}.`,

		'research-c2-name': "C-Gardien de l'Exploration",
		'research-c2-desc': `Garder le(s) premier(s) <b>X</b> océans débloqué et leur profondeur à l'éntrée du ${toTextStyle('Noyau','core')}.`,

		'research-c3-name': "L'Affection du Néon I",
		'research-c3-desc': `Le <b>Néon</b> affecte maintenant les 'Dents du Requin', 'L\éxposant du Requin', et 'Barème du Requin'.`,

		'research-c4-name': "Nickel Amélioré",
		'research-c4-desc': `L'effet de <b>Nickel</b> est <b>deux fois</b> plus puissant.`,

		'research-c5-name': "Boost du Noyau additionnel",
		'research-c5-desc': `Le premier boost de la radiation du noyau affecte maintenant le boost du réacteur du noyau pour les ${toTextStyle('Poissons','fish')} à taux réduit.`,

		'research-c6-name': "Réduction des Radiations",
		'research-c6-desc': `Fragments ${toTextStyle('Magmatique','core')} réduit la limite de la radiation du noyau à taux réduit.`,

		'research-c7-name': "Dents du Requin amélioré",
		'research-c7-desc': `L'effet de 'Dents du Requin' est augmenté à la puissance <b>2.5e</b>.`,

        'research-c8-name': "Better Iron & Neon",
        'research-c8-desc': `<b>Iron</b>'s effect is twice as powerful, and <b>Iron</b>'s & <b>Neon</b>'s requirements are reduced drastically.`,

        'research-c9-name': "Better Core Boost",
        'research-c9-desc': `Improve the core reactor's boost to ${toTextStyle('Fish','fish')}.`,

        'research-c10-name': "Super-Scaled Shark",
        'research-c10-desc': `'Scaled Shark' now delays the second ${toTextStyle('Shark','shark')} Level scaling at a reduced rate.`,

        'research-c11-name': "Better Radiation Reduction",
        'research-c11-desc': `'Radiation Reduction' is stronger slightly.`,

		// Exploration

		'explore-while': `En explorant`,
		'explore-inside': (a,b,c)=>`Base ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Atteignez ${format(c,0)} ${toTextStyle("Poissons",'fish')}.`,
		'explore-outside': x=>`Votre base actuelle est de ${x.format()}/s.<br>Explorer l'océan!`,

		'explore-next': x=>`Nouvel océan au niveau <h3>${format(x,0)}</h3> du ${toTextStyle("Requin",'shark')}.`,

		'explore-doubler-1': x=>`Double ${x} acquis.`,
		'explore-doubler-2': `Double profondeur de la progression acquise.`,

		'explore-0-name': `Océan Pacifique`,
		'explore-0-desc': `Le gain de ${toTextStyle('Poissons','fish')} est divisé par 2.`,
		'explore-0-milestone': [
			`Augmenter les Éclats de ${toTextStyle('Prestige','prestige')} acquis à la puissance 1.05e.`,
			`Augmenter les ressources et la profondeur de la progression de 25% par niveau du ${toTextStyle('Requin','shark')} à la racine carrée.`,
			`Augmenter le niveau du ${toTextStyle('Requin','shark')} ne dépensera plus de ${toTextStyle('Poissons','fish')}.`,
			`Augmente le nombre de ${toTextStyle('Poissons','fish')} mangé à la puissance 1.05e.`,
			`Débloquer le ${toTextStyle('Noyau','core')}.`,
		],

		'explore-1-name': `Océan Arctique`,
		'explore-1-desc': `Réinitialise vos Éclats de ${toTextStyle("Prestige",'prestige')} et amélioration de ${toTextStyle("Prestige",'prestige')}. Gain des Éclats de ${toTextStyle('Prestige','prestige')} mis à la racine carrée.`,
		'explore-1-milestone': [
			`Débloque les auto améliorations de ${toTextStyle('Prestige','prestige')} du ${toTextStyle('Requin','shark')}.`,
			`Augmenter les ressources et la profondeur de la progression de 25% par niveau de ${toTextStyle('Requin','shark')} à la racine carrée.`,
			`Améliorations de ${toTextStyle('Prestige','prestige')} ne dépensera plus d'Éclats de ${toTextStyle('Prestige','prestige')}.`,
			`Génére passivement 100% des Éclats de ${toTextStyle('Prestige','prestige')} reçu en faisant un ${toTextStyle('Prestige','prestige')}.`,
		],

		'explore-2-name': `Océan Atlantique`,
		'explore-2-desc': `Réinitialise vos Éclats de ${toTextStyle("Prestige",'prestige')} et améliorations de ${toTextStyle("Prestige",'prestige')}. L'échelle du niveau du ${toTextStyle('Requin','shark')} est 10x plus puissantes.` ,
		'explore-2-milestone': [
			`L'échelle des 'Dents du Requin' et 'L'éxposant du Requin' sont légèrement plus faible.`,
			`Augmenter les ressources et la profondeur de la progression de 25% par niveau du ${toTextStyle('Requin','shark')} à la racine carrée.`,
			`La première échelle du niveau du ${toTextStyle('Requin','shark')} commence plus tard de +1 par 500m de profondeur.`,
			`L'effet de l'océan est 50% plus puissant.`,
		],

		'explore-3-name': `Océan Austral`,
		'explore-3-desc': `Réinitialise vos Éclats de ${toTextStyle("Prestige",'prestige')} et améliorations de ${toTextStyle("Prestige",'prestige')}. Vous ne pouvez pas acheter d'améliorations ${toTextStyle('Poissons','fish')} & ${toTextStyle('Prestige','prestige')} du ${toTextStyle('Requin','shark')}.`,
		'explore-3-milestone': [
			`Augmenter la base d'éxploration de 10x.`,
			`Augmenter les ressources et la profondeur de la progression de 25% par niveau de ${toTextStyle('Requin','shark')} à la racine carrée.`,
			`L'effet de l'océan est 50% plus puissant.`,
		],

		'explore-4-name': `Océan Indien`,
		'explore-4-desc': `Vous êtes piégé dans les quatre premiers océans actifs, et l'exposant de vos ${toTextStyle('Poissons','fish')} est élevé à la puissance 0,75e.`,
		'explore-4-milestone': [
			`Diminuer la limite de la radiation du noyau de /1,000.`,
			`Augmentation de la progression des ressources et de la profondeur de 25% par niveau de ${toTextStyle('Requin','shark')} à la racine carrée.`,
			`Les réacteurs du noyau sont mis à l'échelle plus tard de +5.`,
			`Améliore le ${toTextStyle('Varech','kelp')}.`,
		],

		// Core Reactor

		'core-0-name': `Fer`,
		'core-0-desc': `Le ${toTextStyle("Poissons",'fish')} s'augmente basé sur le niveau de <b>Fer</b>.`,

		'core-1-name': `Nickel`,
		'core-1-desc': `L'Éclats de ${toTextStyle("Prestige",'prestige')} augmente sa base baseé sur le niveau de <b>Nickel</b>.`,

		'core-2-name': `Oxygène`,
		'core-2-desc': `Le produit des ressources des quatre premiers océans augmente leur production en fonction du niveau de l'<b>Oxygène</b>.`,

		'core-3-name': `Néon`,
		'core-3-desc': `Niveau du ${toTextStyle("Requin",'shark')} réduit le ${toTextStyle("Poissons",'fish')} requis basé sur le niveau du <b>Néon</b>.`,

        'core-4-name': `Sulfur`,
        'core-4-desc': `${toTextStyle("Fish",'fish')} strengthens <b>Iron</b> based on <b>Sulfur</b>'s tier.`,

        'core-5-name': `Silicon`,
        'core-5-desc': `${toTextStyle("Prestige",'prestige')} shard strengthen <b>Nickel</b> based on <b>Silicon</b>'s tier.`,

        'core-6-name': `Nitrogen`,
        'core-6-desc': `${toTextStyle("Kelp",'kelp')} strengthens <b>Oxygen</b> based on <b>Nitrogen</b>'s tier.`,

        'core-7-name': `Helium`,
        'core-7-desc': `${toTextStyle("Shark",'shark')} Level strengthens <b>Neon</b> based on <b>Helium</b>'s tier.`,
		
		'core-bonus': x => `Le produit des réacteurs du noyau vont booster vos ${toTextStyle("Poissons",'fish')} de <h4>${formatMult(x)}</h4>.`,

        'core-assembler-erase': `Erase Mode`,
        'core-assembler-choose': `You're choosing`,
        'core-assembler-building-stats': (s,p,m) => `Strength <b>${s}</b> | Placed <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Max buildings: ${mm} / ${m}<br>Require: ${format(x)} ${toTextStyle("Magmatic",'core')} fragments`, 
        'ca-building-base': b => `[Base: ${b}]`,
        'ca-building-temp': t => `Increase the core's temperature by ${t}.`,
		
		// Core Radiation

		'cr-start': x=>x?"Arrêter l'expérience.":"Commencer l'expérience.",

		'upgrade-cr': (gen,cost)=>`
		Améliorer votre production de ${toTextStyle('Radiation '+icon("radioactive"),'core')}.<br>
		Produit <b>${format(gen,0)}</b> par seconde.<br>
		Coût: ${format(cost,0)} ${toTextStyle('Poissons '+icon("radioactive"),'fish')}`,

		'reset-cr': (inc)=>`Réinitialise vos ${toTextStyle('Radiation '+icon("radioactive"),'core')}, mais augmente sa limite de <b>${formatMult(inc,0)}</b>, et parfois ajoute un nouveau boost ou améliore les boosts. Vous devez atteindre la limite pour réinitialiser.`,

		'cr-boosts': [
			x=>`Fournis <h4>+${format(x)}</h4> réacteurs du noyau bonus sur la première rangée.`,
			x=>`Boost vos Fragments ${toTextStyle('Magmatique','core')} de <h4>${formatMult(x)}</h4>.`,
			x=>`Les 4 premières améliorations de ${toTextStyle('Poissons','fish')} du ${toTextStyle('Requin','shark')} sont <h4>${formatPercent(x.sub(1))}</h4> plus puissants.`,
			x=>`Le deuxième échelonnement du niveau du ${toTextStyle('Requin','shark')} est retardé de <h4>+${format(x)}</h4>.`,
			x=>`Augmente le base du niveau du ${toTextStyle('Requin','shark')} pour le bonus de Fragments ${toTextStyle('Magmatique','core')} de <h4>+${format(x,3)}</h4>.`,
            x=>`Increase ${toTextStyle('Shark','shark')} Level's ${toTextStyle('Fish','fish')} bonus by <h4>${formatPow(x,3)}</h4> to the exponent.`,
            x=>`The first three ${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades are <h4>${formatPercent(x.sub(1))}</h4> more powerful.`,
		],

		// Automation

		'auto-shark-name': `Auto-Niveau du ${toTextStyle("Requin","shark")}`,
		'auto-su-name': `Auto-Améliorations de ${toTextStyle("Poissons","fish")}`,
		'auto-spu-name': `Auto-Améliorations de ${toTextStyle("Prestige","prestige")}`,
		'auto-eu-name': `Auto-Améliorations d'Éxploration`,

		'auto-cost': (D,cost,name) => `Réduit l'intervale de ${formatReduction(D,0)}.<br>Coût: ${format(cost,0)} ${name}`,
		'auto-interval': (a,b,maxed) => `Intervale: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

		// Progress

		'progress-0-text': r => `Atteignez un total de ${format(r)} ${toTextStyle('Poissons','fish')}`, 
		get 'progress-0-cond-text'() { return `Faite un ${toTextStyle('Prestige','prestige')}` },

		'progress-1-text': r => `Atteignez ${format(r)} Éclats de ${toTextStyle('Prestige','prestige')} pour débloquer Automatisation`,
		'progress-2-text': r => `Atteignez ${format(r)} Éclats de ${toTextStyle('Prestige','prestige')} pour débloquer la Recherche`,
		'progress-3-text': r => `Atteignez le niveau ${format(r,0)} du ${toTextStyle('Requin','shark')} pour débloquer l'Exploration`,
		'progress-4-text': r => `Atteignez une profonder de ${format(r)}m dans l'océan Pacifique pour débloquer le ${toTextStyle('Noyau','core')}`,

		'progress-5-text': r => `Atteignez un total de  ${format(r)} Éclats de ${toTextStyle('Prestige','prestige')}`, 
		get 'progress-5-cond-text'() { return `Entrer dans le ${toTextStyle('Noyau','core')}` },

		'progress-6-text': r => `Atteignez ${format(r)} Fragments ${toTextStyle('Magmatique','core')} pour débloquer la nouvelle fonctionnalitée du Noyau`,
		'progress-7-text': r => `Atteignez le niveau du ${toTextStyle('Requin','shark')} ${format(r,0)} pour débloquer un nouvel océan`,
        'progress-8-text': r => `Reach ${format(r)} ${toTextStyle('Magmatic','core')} fragments to unlock the next ${toTextStyle('Core','core')} feature`,
        'progress-9-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')} to unlock new ${toTextStyle('Core','core')} reactors`,

		'maxed-progress': "Toutes les fonctionnalités sont acquises!",

		// Reset

		get 'reset-prestige-message'() {
			let p = toTextStyle('Prestige','prestige'), s = toTextStyle('Requin','shark'), f = toTextStyle('Poissons','fish')
			return `
			<h3>${p}</h3><br>
			${p} est la première couche de réinitialisation. Faire un prestige réinitialise le ${s}, amélioration de 	${s}, et ${f} pour des Éclats de ${p}.
			Premier ${p} débloque de nouvelles améliorations du ${s}.<br>
			<img src="textures/PrestigeShard.png"><br>
			Êtes-vous sûr de vouloir faire un prestige?
			`
		},
		get 'reset-core-message'() {
			let c = toTextStyle('Noyau','core'), m = toTextStyle('Magmatique','core'), p = toTextStyle('Prestige','prestige')
			return `
			<h3>Le ${c}</h3><br>
			Le ${c} est la seconde couche de réinitialisation. Entrer dans le noyau réinitialise les mêmes chose que ${p}, ainsi que les Éclats de ${p}, amélioration de ${p}, ${toTextStyle('Recherche','prestige')} (presque), et l'Exploration pour des Fragments ${m},
			débloquant le Réacteur du ${c} pour la première fois.<br>
			<img src="textures/Magmatic.png"><br>
			Êtes-vous sûr de vouloir entrer dans le Noyau?
			`
		},
		
		// Other

		'upgrade-shark': x => `Améliorer le niveau du ${toTextStyle('Requin','shark')} <br>Coût: ${x.format(0)} ${toTextStyle('Fish','fish')}`,
		'shark-bonus-fish': x => `+${x.format(0)} Base du ${toTextStyle('Poissons','fish')}`,
		'shark-bonus-prestige': x => `${formatMult(x)} Éclats de ${toTextStyle('Prestige','prestige')}`,
		'shark-bonus-core': x => `${formatMult(x)} Fragments ${toTextStyle('Magmatique','core')}`,
		// 'shark-bonus-rad': x => `${formatMult(x)} ${toTextStyle('Radiation ' + icon("radioactive"),'core')}`,

		'level': "Niveau",
		'effect': "Effet",
		'cost': "Coût",
		'buyMax': "Acheter Max",
		'require': "Exige",
		'next-at': "Suivant à",
		'depth': "Profondeur",
		
		'offline-time-text': x=>`Vous avez été hors-ligne depuis <b>${formatTime(x,0)}</b>.`,

		'research-afford': bool => bool ? "Acheter" : "Pas assez",
		'research-bought': bool => bool ? `<b>Acheté</b>` : `<b>Non acheté</b>`,

		'off-on': bool => bool ? "ON" : "OFF",

		'popup-buttons': [
			["Oui","Non"],
			["Ok","Annuler"],
		],

		'popup-desc' : {
			import: `Coller le code de votre sauvegarde. ATTENTION: ÉCRASERA VOTRE SAUVEGARDE ACTUELLE!`,
			wipe: `Êtes-vous sûr de vouloir réinitialiser votre sauvegarde ? Pour effacer, taper "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
		},

		'notify-desc' : {
			save: "Jeu sauvegardé!",
		},

		'radio-desc' : {
			'notation': ['Formatage des notations',['Scientifique','Standard','Scientifique mixe']],
			'comma-format': ['Nombre maximum de OoMs après la virgule',['3','6','9','12','15']],
			'autosave': ['Sauvegarde automatique',['Désactiver','Activer']],
			'autosave-time': ['Intervalle de la sauvegarde automatique',['15s','30s','60s','120s']],
			'offline': ['Progression Hors-ligne',['Désactiver','Activer']],
		},

		'radio-desc-default' : ['Désactiver','Activer'],

		'prompt-placeholder': "Entrer du texte ici...",

		'option-buttons-text': ["Sauvegarder","Exporter via le presse-papier","Exporter via un fichier","Importer via code","Importer via un fichier","RÉINITIALISER!!!"],

		'confirm-prestige': "Prestige",
		'confirm-core': "Entrer dans le Noyau",
	},
}