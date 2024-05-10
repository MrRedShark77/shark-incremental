LANGUAGES.FR = {
	name: "French",
	inter_name: "Français",
	icon: "lang-fr",

	text: {
		// Devises

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

		'humanoid-name': "Requins Humanoïdes",
        'humanoid-costName':  'Requins ' + toTextStyle('Humanoïdes','humanoid'),

        'full-shark-level': 'Niveau du ' + toTextStyle('Requin','shark'),

		'sharkoid-faith': toTextStyle('Foi sharkoïde','humanoid'),

		'curr-top-0-req': x => `Atteignez un total de <b>${format(x)}</b> ${toTextStyle('Poissons','fish')}`, 
		'curr-top-0-reset': x => `Prestige pour <b>${x.format(0)}</b> Éclats de ${toTextStyle('Prestige','prestige')}`,

		'curr-top-1-req': x => `Atteignez un total de <b>${format(x)}</b> éclats de ${toTextStyle('Prestige','prestige')}`, 
		'curr-top-1-reset': x => `Entrez dans le noyau pour <b>${x.format(0)}</b> Fragments ${toTextStyle('Magmatique','core')}`,

		'curr-top-2-req': x => `Atteignez <b>${format(x)}</b> ${toTextStyle('poissons','fish')}`, 
        'curr-top-2-reset': (x,next) => `Evoluez vos ${toTextStyle('Requins','shark')} en <b>${format(x,0)}</b> Requins ${toTextStyle('Humanoïdes','humanoid')}  (Prochain à <b>${format(next)}</b> ${toTextStyle('poissons','fish')})`,

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
        'tab-core-assembler': "Assembleur du " + toTextStyle('Noyau','core'),

		'tab-evolution': toTextStyle('Évolution','humanoid'),
        'tab-shark-rank': "Rang de " + toTextStyle('Requin','shark'),
        'tab-evolution-tree':  "Arbre d'" + toTextStyle('Évolution','humanoid'),
        'tab-evolution-goal':  "Objectifs d'" + toTextStyle('Évolution','humanoid'),
		'tab-cultivation': "Culture",

		// Elements

		'fish-div': `Votre ${toTextStyle('Requin','shark')} a mangé <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> poissons.`,
		'shark-stats': `Statistiques du ${toTextStyle('Requin','shark')} <br>Niveau: <h4 id="shark-level">???</h4><br>Rang: <h4 id="shark-tier">???</h4> <span id="shark-next-rank"></span>`,

		'shark-elo-div': `L'ELO de votre ${toTextStyle('Requin','shark')} est de <h3>${toTextStyle('0','humanoid','shark-elo')}</h3>.`,
        'shark-rank-div': `Le rang de votre ${toTextStyle('Requin','shark')} est de <h3 id="shark-rank">0</h3>.`,
        'shark-rank-req-div': `Le prochain rang nécessite ${toTextStyle('Requin','shark')} ELO de <h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4>.`,
        'shark-rank-note': `Note: Le rang de requin est réinitialisé lorsque vous déclenchez une réinitialisation de l'évolution.`,

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

        'core-temp-div': `La température du ${toTextStyle('Noyau','core')} est de <h3>${toTextStyle('6,150','core','core-temperature')}</h3>, ce qui rend les boosts radioactifs <h4 id="core-temp-effect">100%</h4> plus efficace.`,
        'core-temp-after-div': `(La température du ${toTextStyle('Noyau','core')} va être <span id="core-temp-after">???</span> après la réinitialisation du ${toTextStyle('Noyau','core')})`,

		'sharkoid-faith-div': `Vous avez <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('Foi sharkoïde','humanoid')}.`,
        'respec-evolution-tree': `Réinitialiser l'arbre d'${toTextStyle('Évolution','humanoid')}`,
		'export-evolution-tree': `Exporter l'arbre d'${toTextStyle('Évolution','humanoid')} Tree`,
        'import-evolution-tree': `Importer l'arbre d'${toTextStyle('Évolution','humanoid')} Tree`,
        'evolution-tree-preset': `Préréglages de l'arbre d'${toTextStyle('Évolution','humanoid')}`,

        'rerun-evolution': `Recommencer l'${toTextStyle('Évolution','humanoid')}, réinitialise l'arbre`,

		'mining-text': `Minage en cours... <b id="mining-progress">???</b> | Dégâts <b id="mining-damage">???</b> | ${toTextStyle(`Fortune de minage <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'mining-tier-div': `Niveau du minage: <h3 id="mining-tier">0</h3>`,

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

		'su-m1-name': 'Dégâts de Minage',
        'su-m1-desc': `Augmente les dégâts de minage de <b>×2</b> par niveau.`,

        'su-m2-name': 'Mining Speed',
        'su-m2-desc': `Augmente la vitesse de minage de <b>+10%</b> par niveau.`,

        'su-m3-req': 'Niveau de minage 3',
        'su-m3-name': 'Pierre concentrée',
        'su-m3-desc': `Augmente la <b>Pierre</b> extraite de <b>×2</b> par niveau.`,

        'su-m4-req': 'Niveau de minage 6',
        'su-m4-name': 'Fortune de minage',
        'su-m4-desc': `Augmente la ${toTextStyle('Fortune de minage '+icon('luck'),'gold')} de <b>+5</b> par niveau.`,

        'su-m5-req': 'Niveau de minage 9',
        'su-m5-name': 'Minerais de base',
        'su-m5-desc': `Augmente les 4 premiers minérais minés de <b>×2</b> par niveau.`,

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

		'research-p9-name': "Booster de prestige économique",
        'research-p9-desc': `Reduce the dilation scaling of 'Prestige Booster' by <b>-0.05</b> per level.`,

		'research-e1-name': "Synérgie de l'Océan I",
		'research-e1-desc': `${toTextStyle("Sels",'salt')} augmente les ${toTextStyle("Coraux",'coral')} généré.`,

		'research-e2-name': "Synérgie de l'Océan II",
		'research-e2-desc': `${toTextStyle("Neige comprimé",'snow')} augmente les ${toTextStyle("Glaces",'ice')} généré.`,

		'research-e3-name': "Automatisation de l'Éxploration",
		'research-e3-desc': `Améliore automatiquement la meilleure base des premiers <b>X</b> océans sans explorer.`,
		
		'research-e4-name': "Oxydation du Varech",
		'research-e4-desc': `L'<b>Oxygene</b> affecte maintenant la production de ${toTextStyle("Varech",'kelp')} à taux réduit.`,

        'research-e5-name': "Automatisation de l'Éxploration MK2",
        'research-e5-desc': `Améliore automatiquement la meilleure base de l'océan Indien sans éxplorer. Améliore l'effet du ${toTextStyle('Varech','kelp')} à nouveau.`,

		'research-e6-name': "Fosse de la Sonde",
        'research-e6-desc': `L'<b>Océan Indien</b> n'a plus de limite, and rend l'effet plus puissant après.`,

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

        'research-c8-name': "Fer & Neon amélioré",
        'research-c8-desc': `L'effet du <b>Fer</b> est doublement plus puissant, et le requis pour le <b>Fer</b> & <b>Neon</b> est drastiquement réduit.`,

        'research-c9-name': "Boost du Noyau amélioré",
        'research-c9-desc': `Améliore le boost du Noyau pour les ${toTextStyle('Poissons','fish')}.`,

        'research-c10-name': "Super-Scaled Shark",
        'research-c10-desc': `'Barème du Requin' retarde maintenant la mise à l'échelle du deuxième niveau du ${toTextStyle('Requin','shark')} à taux réduit.`,

        'research-c11-name': "Meilleure réduction des Radiations",
        'research-c11-desc': `'La réduction des Radiations est légèrement plus forte.`,

		'research-c12-name': "Mega réduction des Radiations",
        'research-c12-desc': `La limite des Radiations est grandement réduite.`,

		'research-c13-name': "Super Requin Radioactif",
        'research-c13-desc': `'Requin Radioactif' est <b>50%</b> plus puissant.`,

        'research-c14-name': "Booste exponentiel du Noyau",
        'research-c14-desc': `Les réacteurs du Noyau donne maintenant un boost exponentiel au ${toTextStyle('Poisson','fish')}.`,

        'research-c15-name': "Auto-radiation",
        'research-c15-desc': `Vous pouvez acheter une amélioration de radiation, qui coûte du ${toTextStyle('Poisson','fish')} au lieu de ${toTextStyle('Poisson '+icon('radioactive'),'fish')} radioactif, mais à la puissance <b>^0.0001</b>. Après, augmente le taux de <b>×10</b> par niveau.`,

		'research-m1-name': "Fortune Magmatique",
        'research-m1-desc': `Augmente la ${toTextStyle('Fortune de minage '+icon('luck'),'gold')} de <b>+5</b> par niveau.`,

        'research-m2-name': "Requin à hyper-échelle",
        'research-m2-desc': `Le troisième niveau d'échelle du ${toTextStyle("Requin",'shark')} est retardée de <b>+1000</b>.`,

        'research-m3-name': "Boost radioactif à grande échelle",
        'research-m3-desc': `Retarde les 2 premières augmentations radioactives de <b>+1</b> par niveau.`,

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

        'core-4-name': `Soufre`,
        'core-4-desc': `Les ${toTextStyle("Poissons",'fish')} renforce le <b>Fer</b> basé du niveau de <b>Soufre</b>.`,

        'core-5-name': `Silicone`,
        'core-5-desc': `Éclats de ${toTextStyle("Prestige",'prestige')} renforce le <b>Nickel</b> basé sur le niveau de <b>Silicone</b>.`,

        'core-6-name': `Azote`,
        'core-6-desc': `Le ${toTextStyle("Varech",'kelp')} renforce l'<b>Oxygène</b> basé sur le niveau d'<b>Azote</b>.`,

        'core-7-name': `Hélium`,
        'core-7-desc': `Le niveau de ${toTextStyle("Requin",'shark')} renforce le <b>Néon</b> basé sur le niveau d'<b>Hélium</b>.`,
		
		'core-bonus': x => `Le produit des réacteurs du noyau vont booster vos ${toTextStyle("Poissons",'fish')} de <h4>${formatMult(x)}</h4>.`,

        'core-assembler-erase': `Effacer`,
        'core-assembler-choose': `Vous choisissez`,
        'core-assembler-building-stats': (s,p,m) => `Puissance <b>${s}</b> | Placé <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Élements Max: ${mm} / ${m}<br>Requis: ${format(x)} Fragments ${toTextStyle("Magmatique",'core')}`, 
        'ca-building-base': b => `[Base: ${b}]`,
        'ca-building-temp': t => `Augmente la température du Noyau de ${t}.`,
		
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
            x=>`Augmente le bonus du niveau du ${toTextStyle('Requin','shark')} pour les ${toTextStyle('Poissons','fish')} de <h4>${formatPow(x,3)}</h4> à l'éxposant.`,
            x=>`Les 3 premières améliorations de ${toTextStyle('Prestige','prestige')} sont <h4>${formatPercent(x.sub(1))}</h4> plus puissant.`,
			x=>`Le niveau du ${toTextStyle('Requin','shark')} booste l'ELO de <h4>${formatMult(x)}</h4>.`,
			x=>`Augmente le nombre de <b>Pierre</b> minée de <h4>${formatMult(x)}</h4>.`,
		],

		// Evolution Tree

        'evolution-tree-row': (r,a) => `<b>Rangée ${r}</b><br>${a} disponibles`,
        'evolution-tree-ctn': [
            ["Corps de poisson", x=>`${toTextStyle('Poisson','fish')} booste l'ELO du ${toTextStyle('Requin','shark')} de <b>${formatMult(x)}</b>.`],
            ["Corps prestigieux", x=>`Les Éclats de ${toTextStyle('Prestige','prestige')} booste l'ELO du ${toTextStyle('Requin','shark')} de <b>${formatMult(x)}</b>.`],
            ["Corps radioactif", x=>`Les Fragments ${toTextStyle('Magmatique','core')} booste l'ELO du ${toTextStyle('Requin','shark')} de <b>${formatMult(x)}</b>.`],
            ["Corps parfait", x=>`L'ELO du ${toTextStyle('Requin','shark')} et multiplié par <b>${formatMult(x,0)}</b>.`],

            ["Requin d'acier", x=>`Gagnez <b>${format(x,0)}</b> niveaux bonus de <b>Fer</b>.`],
            ["Requin précieux", x=>`Gagnez <b>${format(x,0)}</b> niveaux bonus de <b>Nickel</b>.`],
            ["Requin respirant", x=>`Gagnez <b>${format(x,0)}</b> niveaux bonus d'<b>Oxygène</b>.`],
            ["Requin lumineux", x=>`Gagnez <b>${format(x,0)}</b> niveaux bonus de <b>Néon</b>.`],

            ["Fosse des Mariannes", x=>`La profondeur de l'<b>Océan Pacifique</b> n'a plus de limite, and rend l'effet plus puissant après.`],
            ["Fosse de Litke", x=>`La profondeur de l'<b>Océan Arctique</b> n'a plus de limite, and rend l'effet plus puissant après.`],
            ["Fosse de Milwaukee", x=>`La profondeur de l'<b>Océan Atlantique</b> n'a plus de limite, and rend l'effet plus puissant après.`],
            ["Fosse des Sandwich du Sud", x=>`La profondeur de l'<b>Océan Austral</b> n'a plus de limite, and rend l'effet plus puissant après.`],

            ["Poisson gonflé", x=>`Le ${toTextStyle('Poisson','fish')} est élevé à la puissance <b>${format(x)}</b>.`],
            ["Surprestige", x=>`Les Éclats de ${toTextStyle('Prestige','prestige')} sont élevés à la puissance <b>${format(x)}</b>.`],
            ["Noyau compressé", x=>`Les Fragments ${toTextStyle("Magmatique",'core')} sont élevés à la puissance <b>${format(x)}</b>.`],
            ["Requin fait maison", x=>`Réduit la base nécessaire du Requin ${toTextStyle('Humanoïde','humanoid')} de <b>${format(x,0)}</b>.`],

            ["Conversion du Requin", x=>`Gagnez <b>${format(x,0)}</b> niveau bonus de <b>Soufre</b>.`],
            ["Requin exosquelette", x=>`Gagnez <b>${format(x,0)}</b> niveau bonus de <b>Silicone</b>.`],
            ["Requin solaire", x=>`Gagnez <b>${format(x,0)}</b> niveau bonus d'<b>Azote</b>.`],
            ["Requin volant (weeeeee)", x=>`Gagnez <b>${format(x,0)}</b> niveau bonus d'<b>Hélium</b>.`],

            ["Super corps de Requin", x=>`Les ${toTextStyle('Poissons','fish')} booste <b>'Corps parfait'</b> de <b>${formatPow(x)}</b>.`],
            ["Corps de renaissance", x=>`Les Éclats de ${toTextStyle('Prestige','prestige')} booste <b>'Corps prestigieux'</b> de <b>${formatPow(x)}</b>.`],
            ["Corps surnaturel", x=>`Les Fragments ${toTextStyle('Magmatique','core')} booste <b>'Corps radioactif'</b> de <b>${formatPow(x)}</b>.`],
            ["Corps immortel", x=>`<b>'Corps parfait'</b> est mis au <b>carré</b>.`],

			['Chance de la mer', x=>`Les ${toTextStyle('Poissons','fish')} booste la ${toTextStyle('Fortune de minage '+icon('luck'),'gold')} par <b>+${format(x)}</b>`],
            ['Chance de la terre', x=>`Les <b>Pierres</b> booste la ${toTextStyle('Fortune de minage '+icon('luck'),'gold')} par <b>+${format(x)}</b>`],
            ['Chance du Requin', x=>`Les Requins ${toTextStyle('Humanoïdes','humanoid')} booste la ${toTextStyle('Fortune de minage '+icon('luck'),'gold')} par <b>+${format(x)}</b>`],
            ['Pure chance', x=>`La ${toTextStyle('Fortune de minage '+icon('luck'),'gold')} est augmenté de <b>+${format(x)}</b>`],

            ["Meilleur Fer", x=>`Améliore le bâtiment du <b>Fer</b>.`],
            ["Meilleur Nickel", x=>`Améliore le bâtiment du <b>Nickel</b>.`],
            ["Meilleur Oxygène", x=>`Améliore le bâtiment de l'<b>Oxygène</b>.`],
            ["Meilleur Néon", x=>`Améliore le bâtiment du <b>Néon</b>.`],
        ],

        'evolution-goal-status': (x,y)=>x?"DÉBLOQUÉ":y?"BLOQUÉ":"EN PROGRESSION",
        'evolution-goal-ctn': [
            [
                x=>`Obtiens au moins <b>${format(x,0)}</b> Fragments ${toTextStyle("Magmatique",'core')} en entrant pour la première fois dans le ${toTextStyle("Noyau",'core')}.`,
                `Génère passivement <b>100%</b> des Fragments ${toTextStyle("Magmatique",'core')} gagnés en entrant dans le ${toTextStyle("Noyau",'core')}.`
            ],[
                x=>`Atteindre un total de <b>${format(x,0)}</b> Fragments ${toTextStyle("Magmatique",'core')} sans acheter les batiments de l'assembleur du ${toTextStyle("Noyau",'core')}.`,
                `Garde l'assembleur du ${toTextStyle("Noyau",'core')} en faisant une ${toTextStyle('Évolution','humanoid')}.`
            ],[
                x=>`Atteindre un total de <b>${format(x,0)}</b> Fragments ${toTextStyle("Magmatique",'core')}.`,
                `Améliore la formule des Éclats de ${toTextStyle('Prestige','prestige')} par Fragments ${toTextStyle("Magmatique",'core')}.`
            ],[
                x=>`Atteindre un total de <b>${format(x,0)}</b> Éclats de ${toTextStyle('Prestige','prestige')} sans générer du ${toTextStyle('Varech','kelp')}.`,
                `Commence avec toutes les profondeurs atteintes à chaque océan.`,
            ],[
                x=>`Atteindre un total de <b>${format(x,0)}</b> Éclats de ${toTextStyle('Prestige','prestige')} sans générer des ressources dans chaque océan.`,
                `Garde les recherches en faisant une ${toTextStyle('Évolution','humanoid')}.`,
            ],[
                x=>`Atteindre un total de <b>${format(x,0)}</b> Éclats de ${toTextStyle('Prestige','prestige')}.`,
                `Améliore la formule des Éclats de ${toTextStyle('Prestige','prestige')} gagnés.`,
            ],[
                x=>`Atteindre un total de <b>${format(x,0)}</b> ${toTextStyle('Poissons','fish')} avec un maximum de <b>10</b> boosts radioactifs.`,
                `Les boosts radioactifs ne réinitialise plus les améliorations liés à la ${toTextStyle('Radiation '+icon("radioactive"),'core')}. Vous commencez avec un générateur, et la ${toTextStyle('Radiation '+icon("radioactive"),'core')} peut aller au-delà de ses limites.`,
            ],[
                x=>`Atteindre un total de <b>${format(x,0)}</b> ${toTextStyle('Poissons','fish')} sans boosts radioactifs.`,
                `Les boosts radioactifs ne réinitialise plus rien. Débloque les boosts radioactifs automatiques.`,
            ],[
                x=>`Atteindre un total de <b>${format(x,0)}</b> ${toTextStyle('Poissons','fish')}.`,
                `Le premier rang de ${toTextStyle('Requin','shark')} commence <b>+5</b> fois plus tôt.`,
            ],
        ],

		// Cultivation

        'ore-names': {
            'stone': "Pierre",
            'coal': "Charbon",
            'iron': "Fer",
            'gold': "Or",
            'platinum': "Platine",
            'diamond': "Diamant",
            'bismuth': "Bismuth",
            'obsidian': "Obsidienne",
            'vibranium': "Vibrantium",
            'radium': "Radium-223",
            'uranium': "Uranium-235",
            'berkelium': "Berkelium-247",
            'californium': "Californium-252",
            'oganesson': "Oganesson-294",
            'sharkium': "Requinum",
        },

        'mined-resources-text': `Ressources minées`,
        'mining-tier-reset': `Augmente le <b>Niveau de Minage</b>, mais multiplie la santé et la quantité de chaque minerai.`,
        'mining-tier-ore-unlock': x=>`Débloque ${x}.`,
        'mining-tier-ore-generation': x=>`Vous ne minerez plus ${x}, mais il va être généré en fonction de la vitesse et de la fortune de minage.`,

        'mining-tier-bonus': [
            x=>`La santé du minerai est augmentée de <b>${formatMult(x)}</b>.`,
            x=>`La quantité de <b>Pierre</b> et de <b>Charbon</b> est augmentée de <b>${formatMult(x)}</b>.`,
            x=>`La quantité de <b>Fer</b> est augmentée de <b>${formatMult(x)}</b>.`,
            x=>`La quantité d'<b>Or</b> est augmentée de <b>${formatMult(x)}</b>.`,
            x=>`La quantité de <b>Platine</b> est augmenté de <b>${formatMult(x)}</b>.`,
        ],

		// Automation

		'auto-shark-name': `Auto-Niveau du ${toTextStyle("Requin","shark")}`,
		'auto-su-name': `Auto-Améliorations de ${toTextStyle("Poissons","fish")}`,
		'auto-spu-name': `Auto-Améliorations de ${toTextStyle("Prestige","prestige")}`,
		'auto-eu-name': `Auto-Améliorations d'Éxploration`,
		'auto-core_reactor-name': `Auto-Améliorations du Réacteur du ${toTextStyle("Noyau","core")}`,
        'auto-core_radiation-name': `Auto-Améliorations de Radiation du ${toTextStyle("Noyau","core")}`,
        'auto-radioactive_boosts-name': `Auto-Améliorations des boosts radioactifs`,

		'auto-cost': (D,cost,name) => `Réduit l'intervale de ${formatReduction(D,0)}.<br>Coût: ${format(cost,0)} ${name}`,
		'auto-interval': (a,b,maxed) => `Intervale: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

		// Progress

		'progress-0-text': r => `Atteignez un total de ${format(r)} ${toTextStyle('Poissons','fish')}`, 
		get 'progress-0-cond-text'() { return `Faite un ${toTextStyle('Prestige','prestige')}` },

		'progress-1-text': r => `Atteignez ${format(r)} Éclats de ${toTextStyle('Prestige','prestige')} pour débloquer Automatisation`,
		'progress-2-text': r => `Atteignez ${format(r)} Éclats de ${toTextStyle('Prestige','prestige')} pour débloquer la Recherche`,
		'progress-3-text': r => `Atteignez le niveau ${format(r,0)} du ${toTextStyle('Requin','shark')} pour débloquer l'Exploration`,
		'progress-4-text': r => `Atteignez une profondeur de ${format(r)}m dans l'océan Pacifique pour débloquer le ${toTextStyle('Noyau','core')}`,

		'progress-5-text': r => `Atteignez un total de  ${format(r)} Éclats de ${toTextStyle('Prestige','prestige')}`, 
		get 'progress-5-cond-text'() { return `Entrer dans le ${toTextStyle('Noyau','core')}` },

		'progress-6-text': r => `Atteignez ${format(r)} Fragments ${toTextStyle('Magmatique','core')} pour débloquer la nouvelle fonctionnalitée du ${toTextStyle('Noyau','core')}`,
		'progress-7-text': r => `Atteignez le niveau du ${toTextStyle('Requin','shark')} ${format(r,0)} pour débloquer un nouvel océan`,
        'progress-8-text': r => `Atteignez ${format(r)} Fragments ${toTextStyle('Magmatique','core')} pour débloquer la nouvelle fonctionnalitée du ${toTextStyle('Noyau','core')}`,
        'progress-9-text': r => `Atteignez un total de ${format(r)} ${toTextStyle('Poissons','fish')} pour débloquer de nouveaux réacteurs du ${toTextStyle('Noyau','core')}`,

		'progress-10-text': r => `Atteignez un total de ${format(r)} ${toTextStyle('Poissons','fish')}`, 
        get 'progress-10-cond-text'() { return `Evoluez votre ${toTextStyle('Requin','shark')}` },

        'progress-11-text': r => `Atteignez ${format(r,0)} Requins ${toTextStyle('Humanoïdes','humanoid')} pour débloquer la nouvelle fonctionnalité d'${toTextStyle('Évolution','humanoid')}`,
		'progress-12-text': r => `Atteignez ${format(r,0)} Requins ${toTextStyle('Humanoïdes','humanoid')} pour débloquer la nouvelle fonctionnalité d'${toTextStyle('Évolution','humanoid')}`, 
        'progress-13-text': r => `Atteignez le niveau ${format(r,0)} de minage pour débloquer une nouvelle rangée dans l'arbre d'${toTextStyle('Évolution','humanoid')}`, 

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
		get 'reset-humanoid-message'() {
            let e = toTextStyle('Évolution','humanoid'), c = toTextStyle('Noyau','core'), m = toTextStyle('Magmatique','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>L'${e}</h3><br>
            <subtitle>“La mutation rendra les requins sauvages et les transformera en requins humanoïdes. Cependant, il vous en coûtera tout ce que vous aviez jusqu'à présent.”</subtitle>
            L'${e} est la troisième couche de réinitialisation. Évoluer les requins va réinitialiser tout ce que fait le ${c}, ainsi que les Fragments ${m}, les réacteurs de ${c}, les radiations du ${c}, l'assembleur du ${c}, et quelques ${toTextStyle('Recherches','prestige')} pour les Requins ${toTextStyle('Humanoïdes','humanoid')}.
            Il débloque également le rang et l'arbre d'${e}.<br>
            <img src="textures/Evolution.png"><br>
            Êtes-vous sûr de vouloir faire évoluer vos requins ?
            `
        },
		
		// Other

		'upgrade-shark': x => `Améliorer le niveau du ${toTextStyle('Requin','shark')} <br>Coût: ${x.format(0)} ${toTextStyle('Fish','fish')}`,
		'shark-bonus-fish': x => `+${x.format(0)} Base du ${toTextStyle('Poissons','fish')}`,
		'shark-bonus-prestige': x => `${formatMult(x)} Éclats de ${toTextStyle('Prestige','prestige')}`,
		'shark-bonus-core': x => `${formatMult(x)} Fragments ${toTextStyle('Magmatique','core')}`,
		// 'shark-bonus-rad': x => `${formatMult(x)} ${toTextStyle('Radiation ' + icon("radioactive"),'core')}`,

		'shark-overpopulation': (x,y) => `En raison de la surpopulation de ${toTextStyle('Requin','shark')} à <h4>${format(y)}</h4>, les ${toTextStyle('Poissons','fish')} consommés sont réduits de <h4>${format(x,3)}√</h4>.`,

		'shark-rank-bonuses': {
            fish: x => `${formatPow(x)} ${toTextStyle('Poissons','fish')}`,
            prestige: x => `${formatPow(x)} Éclats de ${toTextStyle('Prestige','prestige')}`,
			mining_damage: x => `${formatMult(x)} dégâts de minage`,
        },

		'level': "Niveau",
		'effect': "Effet",
		'cost': "Coût",
		'buyMax': "Acheter Max",
		'require': "Exige",
		'next-at': "Suivant à",
		'depth': "Profondeur",
		'reward': "Récompense",
		'new-preset': "Nouveau préréglage",

		'remove': "Supprimer",
        'overwrite-current': "Remplacer l'actuel",
        'load': "Charger",
        'force-load': "Forcer le chargement",
		
		'offline-time-text': x=>`Vous avez été hors-ligne depuis <b>${formatTime(x,0)}</b>.`,

		'research-afford': bool => bool ? "Acheter" : "Pas assez",
		'research-bought': bool => bool ? `<b>Acheté</b>` : `<b>Non acheté</b>`,
		'research-pages': x => `${x} pages`,

		'off-on': bool => bool ? "ON" : "OFF",

		'popup-buttons': [
			["Oui","Non"],
			["Ok","Annuler"],
		],

		'popup-desc' : {
			import: `Coller le code de votre sauvegarde. ATTENTION: ÉCRASERA VOTRE SAUVEGARDE ACTUELLE!`,
			wipe: `Êtes-vous sûr de vouloir réinitialiser votre sauvegarde ? Pour effacer, taper "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
			"evolution-tree-respec": `Êtes-vous sûr de vouloir réinitialiser votre arbre d'${toTextStyle('Évolution','humanoid')}? Vous allez faire une ${toTextStyle('Évolution','humanoid')}, sans gagner de Requins ${toTextStyle('Humanoïdes','humanoid')}.`,
			"evolution-tree-import": `Copiez votre arbre d'évolution.`,
		},

		'notify-desc' : {
			save: "Jeu sauvegardé!",
			copy_to_clipboard: "Copié dans le presse-papier !",
		},

		'radio-desc' : {
			'notation': ['Formatage des notations',['Scientifique','Standard','Scientifique mixe']],
			'comma-format': ['Nombre maximum de OoMs après la virgule',['3','6','9','12','15']],
			'autosave': ['Sauvegarde automatique',['Désactiver','Activer']],
			'autosave-time': ['Intervalle de la sauvegarde automatique',['15s','30s','60s','120s']],
			'offline': ['Progression Hors-ligne',['Désactiver','Activer']],
			'max-research-amt': ['Nombres de recherches maximales par page',['∞','15','20','25','30']],
            'visible-research': [`Visibilité de la recherche achetée`,["Affiché","Masquée"]],
		},

		'radio-desc-default' : ['Désactiver','Activer'],

		'prompt-placeholder': "Entrer du texte ici...",

		'option-buttons-text': ["Sauvegarder","Exporter via le presse-papier","Exporter via un fichier","Importer via code","Importer via un fichier","RÉINITIALISER!!!","Rejoindre la communauté (Discord)","Supporter le créateur (Boosty)"],

		'confirm-prestige': "Prestige",
		'confirm-core': "Entrer dans le Noyau",
		'confirm-humanoid': "Évoluer vos Requins",
	},
}