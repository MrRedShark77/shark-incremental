// This is main language file! It's English! (not anymore HUEHUEHUEHUE)

LANGUAGES.PL = {
    name: "Polish",
    inter_name: "Polski",
    icon: "lang-pl",

    text: {
        // Currencies

        'fish-name': "Ryb",
        'fish-costName': toTextStyle('Ryby','Fish'),

        'prestige-name': "Odłamki prestiżu",
        'prestige-costName':"Odłamki " + toTextStyle('Prestiżu','prestige'),

        'coral-name': "Koral",
        'coral-costName': toTextStyle('Koral','coral'),

        'ice-name': "Lód",
        'ice-costName': toTextStyle('Lód','ice'),

        'salt-name': "Sól",
        'salt-costName': toTextStyle('Sól','salt'),

        'snow-name': "Skompresowany Śnieg",
        'snow-costName': toTextStyle('Skompresowany Śnieg','snow'),

        'kelp-name': "Wodorosty",
        'kelp-costName': toTextStyle('Wodorosty','kelp'),

        'core-name': "Fragmenty Magmatyczne",
        'core-costName': toTextStyle('Magmatyczne','core') + ' Fragmenty',

        'humanoid-name': "Człekowe Rekiny",
        'humanoid-costName': toTextStyle('Człekowe','humanoid') + ' Rekiny',

        'full-shark-level': 'Poziom ' + toTextStyle('Rekina','shark'),
 
        'sharkoid-faith': toTextStyle('Rekinowa Wiara','humanoid'),

        'curr-top-0-req': x => `Osiągnij <b>${format(x)}</b> łącznie ${toTextStyle('Ryb','fish')}`, 
        'curr-top-0-reset': x => `Osiągnij prestiż i uzyskaj <b>${x.format(0)}</b> Odłamków ${toTextStyle('Prestiżu','prestige')}`,

        'curr-top-1-req': x => `Osiągnij <b>${format(x)}</b> Całkowitą łączność Odłamków ${toTextStyle('Prestiżu','prestige')}`, 
        'curr-top-1-reset': x => `Wejdź do Rdzenia i odbierz <b>${x.format(0)}</b> ${toTextStyle('Magmatycznych','core')} Fragmentów`,

        'curr-top-2-req': x => `Osiągnij <b>${format(x)}</b> ${toTextStyle('Ryb','fish')}`, 
        'curr-top-2-reset': (x,next) => `Wyewoluuj swojego ${toTextStyle('Rekina','shark')} w <b>${format(x,0)}</b> ${toTextStyle('człeko','humanoid')} Rekina (Następny za <b>${format(next)}</b> ${toTextStyle('Ryb','fish')})`,

        'radioactive-name': toTextStyle('Radiacja '+icon("radioactive"),'core'),

        // Tabs

        'tab-shark': toTextStyle('Rekin','shark'),
        'tab-options': "Opcje",
        'tab-auto': "Automatyka",
        'tab-research': toTextStyle('Badania','prestige'),
        'tab-explore': "Eksploracja",

        'tab-core': toTextStyle('Rdzeń','core'),
        'tab-core-reactor': toTextStyle('Rdzeń','core')+" Reaktora",
        'tab-core-radiation': "Radiacja "+toTextStyle('Rdzenia','core'),
        'tab-core-assembler': "Monter "+toTextStyle('Rdzenia','core'),

        'tab-evolution': toTextStyle('Ewolucja','humanoid'),
        'tab-shark-rank': "Ranga "+toTextStyle('Rekina','shark'),
        'tab-evolution-tree': "drzewo "+toTextStyle('Ewolucji','humanoid'),
        'tab-evolution-goal': toTextStyle('Ewolucyjne','humanoid') + " Cele",
        'tab-cultivation': "Kultywacja",
        'tab-forge': "Kuźnia",
        'tab-particle-accel': "Akcelerator Cząsteczek",

        // Elements

        'fish-div': `Twój ${toTextStyle('Rekin','shark')} zjadł <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> ryb.`,
        'shark-stats': `${toTextStyle('Rekin','shark')} Statystki<br>Poziom: <h4 id="shark-level">???</h4><br>Ranga: <h4 id="shark-tier">???</h4> <span id="shark-next-rank"></span>`,

        'shark-elo-div': `Twojego ${toTextStyle('Rekina','shark')} ELO to <h3>${toTextStyle('0','humanoid','shark-elo')}</h3>.`,
        'shark-rank-div': `Ranga twojego ${toTextStyle('Rekina','shark')} to <h3 id="shark-rank">0</h3>.`,
        'shark-rank-req-div': `Następna Ranga wymaga <h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4> ${toTextStyle('Rekinowego','shark')} ELO .`,
        'shark-rank-note': `Notatka: Ranga rekina zostaje zresetowana kiedy wywołasz reset ewolucyjny.`,

        'option-title-1': "Głównie Opcje",
        'option-title-2': "Notacje",
        'option-title-3': "Potwierdzenia",
        'option-title-4': "Języki 'Nie ma lepszego języka niż polski więc to zignoruj'",

        'offline-speed': "Przyśpiesz czas Offline",
        'offline-done': "Zrobione",

        'radioactive-div': `${toTextStyle('Rdzeń','core')} Wyprodukował <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('Rdzenia','core'), rf = toTextStyle('ryby '+icon("radioactive"),'fish')
            return `
            <summary>Eksperyment Promieniowania ${c} </summary>
            eksperymentowanie z promenowaniem rdzenia wymusza reset ${toTextStyle('Rdzenia','core')}.
            Podczas eksperymentu reaktory rdzenia nie działają. A zasoby ${toTextStyle('Ryb','fish')}, Odłamków ${toTextStyle('Prestiżu','prestige')} , oraz z pierwszych 4 oceanów są poddane pierwiastkowi sześciennemu.
            Eksperyment zmusza twojego ${toTextStyle('Rekina','shark')} do zjadania napromieniowane ${rf}.<br>
            Ulepszaj za pomocą napromieniowanych ${rf} by generować więcej ${toTextStyle('Promieniowania '+icon("radioactive"),'core')}, Co przekłada się na dodatkowe wzmocnienia.
            `
        },
        'radioboost-div': `Posiadasz <h3 id="radioactive-boost">0</h3> Napromieniowanych wzmocnień.`,

        'core-temp-div': `Temperatura ${toTextStyle('Rdzenia','core')} to <h3>${toTextStyle('6,150','core','core-temperature')}</h3>, co sprawia ze napromieniowane wzmocnienia są o <h4 id="core-temp-effect">100%</h4> efektywne.`,
        'core-temp-after-div': `(Temperatura ${toTextStyle('Rdzenia','core')} bedzie <span id="core-temp-after">???</span> po resecie ${toTextStyle('Rdzenia','core')})`,

        'sharkoid-faith-div': `Masz <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('Rekinowej Wiary','humanoid')}.`,
        'respec-evolution-tree': `Zresetuj drzewo ${toTextStyle('Ewolucji','humanoid')}`,
        'export-evolution-tree': `Exportuj drzewo ${toTextStyle('Ewolucji','humanoid')}`,
        'import-evolution-tree': `Importuj drzewo ${toTextStyle('Ewolucji','humanoid')}`,
        'evolution-tree-preset': `Zapisane drzewa ${toTextStyle('Ewolucji','humanoid')}`,

        'rerun-evolution': `Zacznij od nowa ${toTextStyle('Ewolucje','humanoid')}, resetują jego drzewo`,

        'mining-text': `Kopie... <b id="mining-progress">???</b> | Obrażenia <b id="mining-damage">???</b> | ${toTextStyle(`Fortuna kopacza <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'mining-tier-div': `Szczebel Kopania: <h3 id="mining-tier">0</h3>`,
        'mining-note': `Notatka: Jeśli utkniesz podczas kopania rudy z wysokim zdrowiem (za dużo zajmuje czasu), zaleca się odświeżyć stronę.`,
        'mining-tier-undo-btn': `Zmniejsz Szczebel Kopania o 1 jeśli utkniesz podczas kopania.`,

        // Upgrades

        'su-s1-req': "Poziom 3",
        'su-s1-name': 'Siła Rekina',
        'su-s1-desc': `Zwiększa zjedzone ${toTextStyle('Ryby','fish')} o <b>+1</b> na poziom.`,

        'su-s2-req': "Poziom 7",
        'su-s2-name': 'Zwinność Rekina',
        'su-s2-desc': `Zwiększa bazę poziomu ${toTextStyle('Rekina','shark')} do bonusu ${toTextStyle('ryb','fish')} o <b>+1</b> na poziom.`,

        'su-s3-req': "Poziom 15",
        'su-s3-name': 'Zęby Rekina',
        'su-s3-desc': `Zwiększa wykładnik potęgowy pierwszego ulepszenia ${toTextStyle('rekina','shark')} o <b>+50%</b> na poziom.`,

        'su-s4-req': "Level 38",
        'su-s4-name': 'Potęga Rekina',
        'su-s4-desc': `Zwiększ wykładnik potęgowy ${toTextStyle('ryb','fish')} o <b>+1%</b> na poziom.`,

        'su-s5-req': "Poziom 640",
        'su-s5-name': 'Napromieniowany Rekin',
        'su-s5-desc': `Zwiększa produkcje ${toTextStyle('Napromieniowania'+icon("radioactive"),'core')} o <b>x2</b> na poziom.`,

        'su-p1-req': "Pierwszy prestiż",
        'su-p1-name': 'Super Siła Rekina',
        'su-p1-desc': `Zwiększa zjedzone ${toTextStyle('ryby','fish')} o <b>×3</b> na poziom.`,

        'su-p2-req': "Pierwszy prestiż",
        'su-p2-name': 'Wzmocnienie prestiżu',
        'su-p2-desc': `Zwiększa zjedzone ${toTextStyle('Ryby','fish')} o <b>×lg(${toTextStyle('ryb','fish')})</b> na poziom.`,

        'su-p3-name': 'Łuski Rekin',
        'su-p3-desc': `Opóźnia pierwsze skalowanie poziomu ${toTextStyle('Rekina','shark')} o <b>+1</b> na poziom.`,

        'su-m1-name': 'Obrażenia kopania',
        'su-m1-desc': `Zwiększa zadawane obrażenia podczas kopania o <b>×2</b> na poziom.`,

        'su-m2-name': 'Prędkość kopania',
        'su-m2-desc': `Zwiększa prędkość kopania o <b>+10%</b> na poziom.`,

        'su-m3-req': 'Szczebel kopania 3',
        'su-m3-name': 'Skompresowany kamień',
        'su-m3-desc': `Zwiększa wykopywanie <b>Kamienia</b> o <b>×2</b> na poziom.`,

        'su-m4-req': 'Szczebel Kopania 6',
        'su-m4-name': 'Fortuna Kopacza',
        'su-m4-desc': `Zwiększa ${toTextStyle('Fortunę Kopacza '+icon('luck'),'gold')} o <b>+5</b> na poziom.`,

        'su-m5-req': 'Szczebel Kopania 9',
        'su-m5-name': 'Podstawowe rudy',
        'su-m5-desc': `Zwiększa wydobywanie pierwszych 4 rud o <b>×2</b> na poziom.`,

        // Researches

        'research-p1-name': "Prestiżowa zwinność",
        'research-p1-desc': `'Zwinność rekina' wpływa teraz na bazowy bonus do odłamków ${toTextStyle("Prestiżu",'prestige')} ${toTextStyle("Rekina",'shark')} ze zmniejszoną siłą.`,

        'research-p2-name': "Łatwe życie Rekina",
        'research-p2-desc': `Ulepszenia ${toTextStyle("Ryb",'fish')} ${toTextStyle("Rekina",'shark')} nie będą już wykorzystywać ${toTextStyle("Ryb",'fish')}.`,

        'research-p3-name': "Ulepszone Poziomy Rekina",
        'research-p3-desc': `Zmniejsza wymagania do poziomu ${toTextStyle("Rekina",'shark')} o <b>1</b>,
        Ale wymusza reset ${toTextStyle("Prestiżu",'prestige')}, Resetują twoje odłamki ${toTextStyle("Prestiżu",'prestige')} i ulepszenia ${toTextStyle("Prestiżu",'prestige')}.
        Odblokowuje nowe ulepszenia ${toTextStyle("Rekina",'shark')}.`,

        'research-p4-name': "Lepszy Prestiż",
        'research-p4-desc': `Troszeczkę zwiększą formulę uzyskiwania odłamków ${toTextStyle("Prestiżu",'prestige')}.`,

        'research-p5-name': "Mega Siła",
        'research-p5-desc': `'Super Siła Rekina' jest silniejsza o <b>1%</b> na każdy poziom ${toTextStyle("Rekina",'shark')}, Poczynając od 100.`,

        'research-p6-name': "Super łuski Rekina",
        'research-p6-desc': `'Łuski Rekina' są <b>dwa razy</b> silniejsze.`,

        'research-p7-name': "Lepsze Surowce I",
        'research-p7-desc': `${toTextStyle("Koral",'coral')} oraz ${toTextStyle("Lód",'ice')}' są bardziej efektywne.`,

        'research-p8-name': "Bardziej Ulepszone Poziomy Rekina",
        'research-p8-desc': `Bardziej zmniejsza bazę wymaganą do poziomu ${toTextStyle("Rekina",'shark')} o 1.`,

        'research-p9-name': "Tani Wzmacniacz Prestiżu",
        'research-p9-desc': `Zmniejsza skalowanie ceny 'Wzmocnienia prestiżu' o <b>-0.05</b> Na poziom.`,

        'research-e1-name': "Synergia oceanu I",
        'research-e1-desc': `${toTextStyle("Sól",'salt')} wzmacnia generowane ${toTextStyle("Korale",'coral')}.`,

        'research-e2-name': "Synergia Oceanu II",
        'research-e2-desc': `${toTextStyle("Skompresowany śnieg",'snow')} wzmacnia generowany ${toTextStyle("Lód",'ice')}.`,

        'research-e3-name': "Automatyczna Eksploracja",
        'research-e3-desc': `Automatycznie zbieraj bazę pierwszego <b>X</b> oceanu bez jego eksploracji.`,

        'research-e4-name': "Natlenienie Wodorostów",
        'research-e4-desc': `<b>Tlen</b> teraz wpływa na produkcję ${toTextStyle("Wodorostów",'kelp')} ze zmniejszoną siłą.`,

        'research-e5-name': "Automatyczna Eksploracja V2.0",
        'research-e5-desc': `Automatycznie uzyskaj bazę z oceanu indyjskiego bez jego eksploracji. Ponownie ulepsza efekt ${toTextStyle('Wodorostów','kelp')}.`,

        'research-e6-name': "Rów Sundajski",
        'research-e6-desc': `<b>Ocean Indyjski</b>nie posiada już limitu, oraz zwiększa jego efekt po nim.`,

        'research-c1-name': "Zbadania Opiekuna-R",
        'research-c1-desc': `Zatrzymaj ${toTextStyle("Badania",'prestige')} kiedy wchodzisz do ${toTextStyle('Rdzenia','core')}.`,

        'research-c2-name': "Eksploracja Opiekuna-R",
        'research-c2-desc': `Zatrzymaj pierwsze odblokowane <b>X</b> oceany oraz ich głębokość po wejściu do ${toTextStyle('Rdzenia','core')}.`,

        'research-c3-name': "Wpływy Neonu I",
        'research-c3-desc': `<b>Neon</b> teraz wpływa na 'Zęby Rekina', 'Potęgę Rekina' oraz 'Łuski Rekina'.`,

        'research-c4-name': "lepszy Nikiel",
        'research-c4-desc': `Efekt <b>Niklu</b> jest teraz <b>Dwa razy</b> silniejszy.`,

        'research-c5-name': "Dodatkowy Wzmacniacz Rdzenia",
        'research-c5-desc': `Promieniowanie reaktora ma teraz wpływ na wzmocnienie z reaktora na ${toTextStyle('Ryby','fish')} ze zmniejszoną siła.`,

        'research-c6-name': "Redukcja Promieniowania",
        'research-c6-desc': `${toTextStyle('Magmatyczne','core')} fragmenty zmniejszają limit promieniowania ze zmniejszoną siła.`,

        'research-c7-name': "Większe zęby Rekina",
        'research-c7-desc': `Efekt 'Zębów Rekina' jest teraz poddany <b>2.5</b> potędze.`,

        'research-c8-name': "Lepsze Żelazo i Neon",
        'research-c8-desc': `Efekt <b>żelaza</b> jest teraz dwu krotnie potężniejszy, oraz wymagania <b>Żelaza</b> i <b>Neonu</b> są drastycznie mniejsze.`,

        'research-c9-name': "lepsze wzmocnienia Reaktora",
        'research-c9-desc': `Ulepsza wzmocnienia z reaktora do ${toTextStyle('Ryb','fish')}.`,

        'research-c10-name': "Super-Łuskowaty Rekin",
        'research-c10-desc': `'Łuski Rekina' teraz opóźniają skalowanie się poziomu ${toTextStyle('Rekina','shark')} ze zmniejszoną siłą.`,

        'research-c11-name': "Lepsza Redukcja Promieniowania",
        'research-c11-desc': `'Redukcja Promieniowania' jest teraz troszeczkę silniejsza.`,

        'research-c12-name': "Mega Redukcja Promieniowania",
        'research-c12-desc': `Drastycznie zmniejsza limit promieniowania.`,

        'research-c13-name': "Super Napromieniowany Rekin",
        'research-c13-desc': `'Napromieniowany Rekin' jest <b>50%</b> silniejszy.`,

        'research-c14-name': "Potężniejsze Wzmocnienie Reaktora",
        'research-c14-desc': `Rdzeń reaktora teraz dostarcza potężniejsze wzmocnienia do ${toTextStyle('Ryb','fish')}.`,

        'research-c15-name': "Samo-Promieniowanie",
        'research-c15-desc': `Możesz teraz kupować ulepszenia promieniowania używając zwykłych ${toTextStyle('Ryb','fish')} zamiast radioaktywnych ${toTextStyle('Ryb '+icon('radioactive'),'fish')}, Ale <b>^0.0001</b> stawką. Zwiększ stawkę o <b>×10</b> na poziom.`,

        'research-m1-name': "Magmatyczna Fortuna",
        'research-m1-desc': `Zwiększ ${toTextStyle('Fortunę Kopacza '+icon('luck'),'gold')} o <b>+5</b> na poziom.`,

        'research-m2-name': "Hyper-Łuskowaty Rekin",
        'research-m2-desc': `Trzecie skalowanie poziomu ${toTextStyle("Rekina",'shark')} jest opóźnione o <b>+1000</b>.`,

        'research-m3-name': "Skalowanie Napromieniowanego Wzmocnienia",
        'research-m3-desc': `Opóźnia pierwsze 2 skalowania napromieniowanego wzmocnienia o <b>+1</b> na poziom.`,

        'research-m4-name': "Lepsze Szczeble Kopania",
        'research-m4-desc': `Efekty drugiego, trzeciego, czwartego i piątego szczebla kopania są o <b>+25%</b> silniejsze na poziom.`,

        'research-f1-name': "Podstawowe Potęgowanie Rangi",
        'research-f1-desc': `Zwiększa potęgę ELO ${toTextStyle("Rekina",'shark')} o <b>+25%</b> na poziom.`,

        'research-f2-name': "Więcej Rekinowej Wiary",
        'research-f2-desc': `Uzyskaj więcej ${toTextStyle('Rekinowej Wiary','humanoid')} z ${toTextStyle('Ryb','fish')} i Odłamków ${toTextStyle("Prestiżu",'prestige')}.`,

        'research-f3-name': "Skalowane Reaktory Rdzenia",
        'research-f3-desc': `Opóźnij pierwsze skalowanie Rdzenia o <b>+1</b> na poziom.`,

        'research-f4-name': "Mniej Miękkiego-Limitu Temperatury Rdzenia",
        'research-f4-desc': `Miękki-limit temperatury ${toTextStyle('Rdzenia','core')} jest teraz słabszy.`,

        'research-f5-name': "Wzmocnienie Vibranium",
        'research-f5-desc': `<b>Vibranium</b> wzmacnia obrażenia kopania ze zmniejszoną siła.`,

        'research-f6-name': "Uniwersalny Szczebel Kopania",
        'research-f6-desc': `Pierwsze 9 rud jest wzmocnione przez szczebel Kopania.`,

        'research-f7-name': "Lepsze ELO Rekina",
        'research-f7-desc': `Baza człekowych-rekinów w formule dla ELO ${toTextStyle("Rekina",'shark')} jest ulepszona z <b>x</b> do <b>2<sup>x</sup>-1</b>.`,

        'research-f8-name': "Słabe zdrowie rud",
        'research-f8-desc': `Pierwszy efekt szczebla kopania jest mniejszy.`,

        // Exploration

        'explore-while': `Podczas eksploracji`,
        'explore-inside': (a,b,c)=>`Baza ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Zasięg ${format(c,0)} Najlepsze ${toTextStyle("Ryby",'fish')}.`,
        'explore-outside': x=>`Twoja aktualna baza to ${x.format()}/s.<br>Eksploruj ocean!`,

        'explore-next': x=>`Nowy ocean od <h3>${format(x,0)}</h3> poziomu ${toTextStyle("Rekina",'shark')}.`,

        'explore-doubler-1': x=>`Podwaja uzbierane ${x}.`,
        'explore-doubler-2': `Podwaja prędkość uzyskiwania głębokości.`,

        'explore-0-name': `Pacyfik`,
        'explore-0-desc': `Zyskiwanie ${toTextStyle('Ryb','fish')} jest spierwiastkowane kwadratowo.`,
        'explore-0-milestone': [
            `Podnieś potęgę uzyskiwania odłamków ${toTextStyle('prestiżu','prestige')} do 1.05.`,
            `Zwiększa postęp zasobów i głębokości o 25% na każdy pierwiastek kwadratowy poziomu ${toTextStyle('Rekina','shark')}`,
            `Zwiększanie poziomu ${toTextStyle('Rekina','shark')} Nie będzie już wykorzystywać ${toTextStyle('Ryb','fish')}.`,
            `Podnieś potęgę zjadania ${toTextStyle('Ryb','fish')} do 1.05.`,
            `Odblokuj ${toTextStyle('Rdzeń','core')}.`,
        ],

        'explore-1-name': `Ocean Arktyczny`,
        'explore-1-desc': `Resetuje twoje odłamki ${toTextStyle("Prestiżu",'prestige')} oraz ulepszenia ${toTextStyle("Prestiżu",'prestige')}. Uzyskiwanie odłamków ${toTextStyle('Prestiżu','prestige')} jest spierwiastkowane kwadratowo.`,
        'explore-1-milestone': [
            `Odblokuj Auto-ulepszenia ${toTextStyle('Prestiżu','prestige')} ${toTextStyle('Rekina','shark')}.`,
            `Zwiększa postęp zasobów i głębokości o 25% na każdy pierwiastek kwadratowy poziomu ${toTextStyle('Rekina','shark')}.`,
            `Ulepszenia ${toTextStyle('Prestiżu','prestige')} ${toTextStyle('Rekina','shark')} Nie będzie już wykorzystywać odłamków ${toTextStyle('Prestiżu','prestige')}.`,
            `Pasywnie generuje 100% odłamków ${toTextStyle('Prestiżu','prestige')} uzyskanych podczas ${toTextStyle('Prestiżu','prestige')}.`,
        ],

        'explore-2-name': `Ocean Atlantycki`,
        'explore-2-desc': `Resetuje twoje odłamki ${toTextStyle("Prestiżu",'prestige')} oraz ulepszenia ${toTextStyle("Prestiżu",'prestige')}. Skalowanie poziomu ${toTextStyle('Rekina','shark')} jest 10x silniejsze.` ,
        'explore-2-milestone': [
            `'Zęby Rekina' i 'Potęga Rekina' Skalują się trochę słabiej.`,
            `Zwiększa postęp zasobów i głębokości o 25% na każdy pierwiastek kwadratowy poziomu ${toTextStyle('Rekina','shark')}.`,
            `Pierwsze skalowanie poziomów ${toTextStyle('Rekina','shark')} zaczyna się +1 później na każde 500m głębokości.`,
            `Efekt ${toTextStyle("Soli",'salt')} jest 50% silniejszy.`,
        ],

        'explore-3-name': `Południowy Ocean`,
        'explore-3-desc': `Resetuje twoje odłamki ${toTextStyle("Prestiżu",'prestige')} oraz ulepszenia ${toTextStyle("Prestiżu",'prestige')}. Nie możesz kupować Ulepszeń ${toTextStyle('Ryb','fish')} i ${toTextStyle('Prestiżu','prestige')} ${toTextStyle('Rekina','shark')}.`,
        'explore-3-milestone': [
            `Zwieksza baze eksploracji o 10x.`,
            `Zwiększa postęp zasobów i głębokości o 25% na każdy pierwiastek kwadratowy poziomu ${toTextStyle('Rekina','shark')}.`,
            `Efekt ${toTextStyle('Skompresowane Śniegu','snow')} jest 50% silniejszy.`,
        ],

        'explore-4-name': `Ocean Indyjski`, 
        'explore-4-desc': `Jesteś uwięziony w pierwszych 4 oceanach, i twoje ${toTextStyle('Ryby','fish')} Są spotęgowane o 0.75.`,
        'explore-4-milestone': [
            `Zmniejsza limit napromieniowania o /1,000.`,
            `Zwiększa postęp zasobów i głębokości o 25% na każdy pierwiastek kwadratowy poziomu ${toTextStyle('Rekina','shark')}.`,
            `Reaktory ${toTextStyle("Rdzenia",'core')}  Skalują się +5 później.`,
            `Ulepsza efekt ${toTextStyle('Wodorostów','kelp')}.`,
        ],

        // Core Reactor

        'core-0-name': `Żelazo`,
        'core-0-desc': `${toTextStyle("Ryby",'fish')} zwiększają swoja bazę w oparciu o Szczebel <b>Żelaza</b>.`,

        'core-1-name': `Nikiel`,
        'core-1-desc': `Odłamki ${toTextStyle("Prestiżu",'prestige')} zwiększają swoja bazę w oparciu o Szczebel <b>Niklu</b>`,

        'core-2-name': `Tlen`,
        'core-2-desc': `Produkt pierwszych czterech oceanów' wzmacnia produkcje surowców w oparciu i szczebel <b>Tlenu</b>.`,

        'core-3-name': `Neon`,
        'core-3-desc': `Poziom ${toTextStyle("Rekina",'shark')} ma zmniejszone wymagania w oparciu o szczebel <b>Neonu</b>.`,

        'core-4-name': `Siarka`,
        'core-4-desc': `${toTextStyle("Ryby",'fish')} Wzmacniają <b>Żelazo</b> w oparciu o szczebel <b>Siarki</b>.`,

        'core-5-name': `Sylikon`,
        'core-5-desc': `Odłamki ${toTextStyle("Prestiżu",'prestige')} wzmacniają <b>Nickel</b> w oparciu o szczebel <b>Sylikonu</b>.`,

        'core-6-name': `Azot`,
        'core-6-desc': `${toTextStyle("Wodorosty",'kelp')} wzmacniają <b>Tlen</b> w oparciu o szczebel <b>Azotu</b>.`,

        'core-7-name': `Hel`,
        'core-7-desc': `Poziom ${toTextStyle("Rekina",'shark')} wzmacnia <b>Neon</b> w oparciu o szczebel <b>Helu</b>.`,

        'core-bonus': x => `Produkt reaktorów rdzenia wzmocni ${toTextStyle("Ryby",'fish')} o <h4>${formatMult(x)}</h4>.`,

        'core-assembler-erase': `Tryb Usuwania`,
        'core-assembler-choose': `Aktualnie Wybierasz`,
        'core-assembler-building-stats': (s,p,m) => `Siła <b>${s}</b> | Zamontowane <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Max montowań: ${mm} / ${m}<br>Wymagane: ${format(x)} ${toTextStyle("Magmatycznych",'core')} fragmentów`, 
        'ca-building-base': b => `[Baza: ${b}]`,
        'ca-building-temp': t => `Zwiększa temperaturę rdzenia o ${t}.`,

        // Core Radiation

        'cr-start': x=>x?"Zatrzymaj eksperyment.":"Zacznij eksperyment.",

        'upgrade-cr': (gen,cost)=>`
        Ulepsz produkcje ${toTextStyle('Napromieniowania'+icon("radioactive"),'core')}.<br>
        Produkowanie <b>${format(gen,0)}</b> per second.<br>
        Koszt: ${format(cost,0)} ${toTextStyle('P '+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`Zresetuj ${toTextStyle('Napromieniowanie '+icon("radioactive"),'core')}, ale zwiększ jego limit o <b>${formatMult(inc,0)}</b>, i ulepsza napromieniowane wzmocnienia czasami dodając nowe efekty. Musisz osiągnąć limit by zresetować.`,

        'cr-boosts': [
            x=>`Dostarcza dodatkowe <h4>+${format(x)}</h4> reaktory rdzenia w pierwszym rzędzie.`,
            x=>`Wzmacnia ${toTextStyle('Magmatyczne','core')} fragmenty o <h4>${formatMult(x)}</h4>.`,
            x=>`Pierwsze cztery ulepszenia ${toTextStyle('Ryb','fish')} ${toTextStyle('Rekina','shark')} są o <h4>${formatPercent(x.sub(1))}</h4> silniejsze.`,
            x=>`Skalowanie Drugiego poziomu ${toTextStyle('Rekina','shark')} jest opóźnione o <h4>+${format(x)}</h4>.`,
            x=>`Zwiększa bazę bonusu poziomu ${toTextStyle('Rekina','shark')} ${toTextStyle('Magmatycznych','core')} fragmentów o <h4>+${format(x,3)}</h4>.`,
            x=>`Zwiększa bonus do ${toTextStyle('ryb','fish')} Poziomu ${toTextStyle('Rekina','shark')} o <h4>${formatPow(x,3)}</h4> do wykładnika.`,
            x=>`Pierwsze trzy ulepszenia Odłamków ${toTextStyle('Prestiżu','prestige')} ${toTextStyle('Rekina','shark')} są o <h4>${formatPercent(x.sub(1))}</h4> silniejsze.`,
            x=>`Poziom ${toTextStyle('Rekina','shark')} wzmacnia ELO ${toTextStyle('Rekina','shark')} o <h4>${formatMult(x)}</h4>.`,
            x=>`Wzmacnia uzyskiwane <b>Kamienie</b> o <h4>${formatMult(x)}</h4>.`,
            x=>`Dostarcza <h4>${formatMult(x,3)}</h4> bonusu dla zakupionych ulepszeń eksploracji.`,
            x=>`Dostarcza dodatkowe <h4>+${format(x)}</h4> reaktory rdzenia w drugim rzędzie.`,
        ],

        // Evolution Tree

        'evolution-tree-row': (r,a) => `<b>Rząd ${r}</b><br>${a} dostępny`,
        'evolution-tree-ctn': [
            ["Rybie Ciało", x=>`${toTextStyle('Ryby','fish')} wzmacniają ${toTextStyle('Shark','shark')} ELO o <b>${formatMult(x)}</b>.`],
            ["Prestiżowe Ciało", x=>`Odłamki ${toTextStyle('Prestiżu','prestige')} wzmacniają ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`],
            ["Napromieniowane Ciało", x=>`${toTextStyle('Magmatyczne','core')} fragmenty wzmacniają ${toTextStyle('Rekinowe','shark')} ELO o <b>${formatMult(x)}</b>.`],
            ["Perfekcyjne Ciało", x=>`${toTextStyle('Rekinowe','shark')} ELO jest pomnażane o <b>${formatMult(x,0)}</b>.`],

            ["Stalowy Rekin", x=>`Uzyskaj <b>${format(x,0)}</b> bonusowych szczebli <b>Żelaza</b>.`],
            ["Drogi Rekin", x=>`Uzyskaj <b>${format(x,0)}</b> bonusowych szczebli <b>Niklu</b>.`],
            ["Tlenoodychający Rekin", x=>`Uzyskaj <b>${format(x,0)}</b> bonusowych szczebli <b>Tlenu</b>.`],
            ["świecący Rekin", x=>`Uzyskaj <b>${format(x,0)}</b> bonusowych szczebli <b>Neonu</b>.`],

            ["Rów Mariański", x=>`<b>Pacyfik</b> nie posiada już limitu, oraz zwiększa jego efekt po nim.`],
            ["Głebia Litke", x=>`<b>Ocean Arktyczny</b> nie posiada już limitu, oraz zwiększa jego efekt po nim.`],
            ["Głębia Milwaukee", x=>`<b>Ocean Atlantycki</b> nie posiada już limitu, oraz zwiększa jego efekt po nim.`],
            ["Rów Sandwichu Południowego", x=>`<b>Południowy Ocean</b> nie posiada już limitu, oraz zwiększa jego efekt po nim.`],

            ["Nadmuchiwane Ryby", x=>`${toTextStyle('Ryby','fish')} są podniesione do <b>${format(x)}th</b> potęgi.`],
            ["Ponad-Prestiż", x=>`Odłamki ${toTextStyle('Prestiżu','prestige')} są podniesione do <b>${format(x)}th</b> potęgi.`],
            ["Skompresowany Rdzeń", x=>`${toTextStyle("Magmatyczne",'core')} fragmenty są podniesione do <b>${format(x)}th</b> potęgi.`],
            ["Rekin Domowej Roboty", x=>`Zmniejsza bazę potrzebna do ${toTextStyle('człeko','humanoid')} rekina o <b>${format(x,0)}</b>.`],

            ["Konwersja Rekina", x=>`Uzyskaj <b>${format(x,0)}</b> bonusowych szczebli <b>Siarki</b>.`],
            ["Egzoszkielet Rekina", x=>`Uzyskaj <b>${format(x,0)}</b> bonusowych szczebli <b>Sylikonu</b>.`],
            ["Słoneczny Rekin", x=>`Uzyskaj <b>${format(x,0)}</b> bonusowych szczebli <b>Azotu</b>.`],
            ["Latający Rekin", x=>`Uzyskaj <b>${format(x,0)}</b> bonusowych szczebli <b>Helu</b>.`],

            ["Świetne Ciało Rekina", x=>`${toTextStyle('Ryby','fish')} wzmacniają <b>'Rybie cialo'</b> o <b>${formatPow(x)}</b>.`],
            ["Odrodzone Ciało", x=>`Odłamki ${toTextStyle('Prestiżowe','prestige')} wzmacniają <b>'Prestiżowe Ciało'</b> o <b>${formatPow(x)}</b>.`],
            ["Super Naturalne Ciało", x=>`${toTextStyle('Magmatyczne','core')} fragmenty wzmacniają <b>'Napromieniowane Ciało'</b> o <b>${formatPow(x)}</b>.`],
            ["Nieśmiertelne Ciało", x=>`<b>'Perfekcyjne Ciało'</b> jest <b>spotęgowane</b>.`],

            ['Szczęście Morza', x=>`${toTextStyle('Ryby','fish')} wzmacniają ${toTextStyle('Fortunę Kopacza '+icon('luck'),'gold')} o <b>+${format(x)}</b>`],
            ['Szczęście Ziemi', x=>`<b>Kamienie</b> wzmacniają ${toTextStyle('Fortunę Kopacza '+icon('luck'),'gold')} o <b>+${format(x)}</b>`],
            ['Szczęście Rekina', x=>`${toTextStyle('Człeko','humanoid')} Rekiny wzmacniają ${toTextStyle('Fortunę Kopacza '+icon('luck'),'gold')} o <b>+${format(x)}</b>`],
            ['Czyste Szczęście', x=>`${toTextStyle('Fortuna Kopacza '+icon('luck'),'gold')} jest zwiększona o <b>+${format(x)}</b>`],

            ["Lepsze Żelazo", x=>`Bardziej ulepsza części <b>Żelaza</b>.`],
            ["Lepszy Nikiel", x=>`Bardziej ulepsza części <b>Niklu</b>.`],
            ["Lepszy Tlen", x=>`Bardziej ulepsza części <b>Tlenu</b>.`],
            ["Lepszy Neon", x=>`Bardziej ulepsza części <b>Neonu</b>.`],

            ["Żelazne Żelazo", x=>`Bardziej ulepsza Reaktor <b>Żelaza</b>.`],
            ["Skarbonka", x=>`Bardziej ulepsza Reaktor <b>Niklu</b>.`],
            ["Ozon", x=>`Bardziej ulepsza Reaktor <b>Tlenu</b>.`],
            ["Sztuczne Radioaktywne Odpady", x=>`Bardziej ulepsza Reaktor <b>Neonu</b>.`],

            ["Silna Kolumna 1", x=>`Powyższe ulepszenia w pierwsze kolumnie są o <b>${formatPercent(x-1)}</b> silniejsze.`],
            ["Silna Kolumna 2", x=>`Powyższe ulepszenia w drugiej kolumnie są o <b>${formatPercent(x-1)}</b> silniejsze.`],
            ["Silna Kolumna 3", x=>`Powyższe ulepszenia w trzeciej kolumnie są o <b>${formatPercent(x-1)}</b> silniejsze.`],
            ["Silna Kolumna 4", x=>`Powyższe ulepszenia w czwartej kolumnie są o <b>${formatPercent(x-1)}</b> silniejsze.`],

            ["Rybna Kuźnia", x=>`${toTextStyle('Ryby','fish')} Przyśpieszają wykuwanie o <b>${formatMult(x)}</b>.`],
            ["Prestiżowa Kuźnia", x=>`Odłamki ${toTextStyle('Prestiżu','prestige')}Przyśpieszają wykuwanie o <b>${formatMult(x)}</b>.`],
            ["Magmetyczna Kuźnia", x=>`${toTextStyle('Magmatyczne','core')} fragmenty Przyśpieszają wykuwanie o <b>${formatMult(x)}</b>.`],
            ["Szybsza Kuźnia", x=>`Wykuwanie jest o <b>${formatMult(x)}</b> szybsze.`],

            ["Prawdziwa Kolumna 1", x=>`Możesz kupić pierwsza kolumnę drzewa ewolucji.`],
            ["Prawdziwa Kolumna 2", x=>`Możesz kupić drugą kolumnę drzewa ewolucji.`],
            ["Prawdziwa Kolumna 3", x=>`Możesz kupić trzecią kolumnę drzewa ewolucji.`],
            ["Prawdziwa Kolumna 4", x=>`Możesz kupić czwartą kolumnę drzewa ewolucji.`],
        ],

        'evolution-goal-status': (x,y)=>x?"ODBLOKOWANE":y?"ZABLOKOWANE":"W TRAKCIE",
        'evolution-goal-ctn': [
            [
                x=>`Uzbieraj Przynajmniej <b>${format(x,0)}</b> ${toTextStyle("Magmatycznych",'core')} fragmentów przy pierwszym wejściu do ${toTextStyle("Rdzenia",'core')}.`,
                `Pasywnie generuje <b>100%</b> ${toTextStyle("Magmatycznych",'core')} fragmentów uzyskanych po wejściu do ${toTextStyle("Rdzenia",'core')}.`
            ],[
                x=>`Osiągnij <b>${format(x,0)}</b> sumę ${toTextStyle("Magmatycznych",'core')} fragmentów bez zakupywania części montera ${toTextStyle("Rdzenia",'core')}.`,
                `Zatrzymaj Montera ${toTextStyle("Rdzenia",'core')} przy ${toTextStyle('Ewolucji','humanoid')}.`
            ],[
                x=>`Osiągnij <b>${format(x,0)}</b> sumę ${toTextStyle("Magmatycznych",'core')} fragmentów.`,
                `Udoskonala formulę Odłamków ${toTextStyle('Prestiżu','prestige')} dla ${toTextStyle("Magmatycznych",'core')} fragmentów.`
            ],[
                x=>`Osiągnij <b>${format(x,0)}</b> sumę odłamków ${toTextStyle('Prestiżu','prestige')} bez generowania ${toTextStyle('Wodorostów','kelp')}.`,
                `Zacznij już z osiągniętym limitem głębokości w każdym oceanie.`,
            ],[
                x=>`Osiągnij <b>${format(x,0)}</b> sumę odłamków ${toTextStyle('Prestiżu','prestige')} Bez generowania surowców w każdym oceanie.`,
                `Zachowaj badania przy ${toTextStyle('Ewolucji','humanoid')}.`,
            ],[
                x=>`Osiągnij <b>${format(x,0)}</b> sumę odłamków ${toTextStyle('Prestiżu','prestige')}.`,
                `Jeszcze bardziej udoskonala formułę uzyskiwania odłamków ${toTextStyle('Prestiżu','prestige')}.`,
            ],[
                x=>`Osiągnij <b>${format(x,0)}</b> sumę ${toTextStyle('Ryb','fish')} w najlepszym wypadku tylko z <b>10</b> wzmocnieniami promieniowania.`,
                `Wzmocnienia promieniowania już nie resetują ulepszeń związanych z ${toTextStyle('Promieniowaniem '+icon("radioactive"),'core')}. Zaczynasz z jednym generatorem, i ${toTextStyle('Promieniowanie '+icon("radioactive"),'core')} może przekroczyć limit.`,
            ],[
                x=>`Osiągnij <b>${format(x,0)}</b> sumę ${toTextStyle('Ryb','fish')} bez wzmocnień promieniowania.`,
                `Wzmocnienia napromieniowania już niczego nie resetują. Odblokowuje auto-wzmacnianie napromieniowania.`,
            ],[
                x=>`Osiągnij <b>${format(x,0)}</b> sumę ${toTextStyle('Ryb','fish')}.`,
                `Pierwsze skalowanie Rangi ${toTextStyle('Rekina','shark')} jest opóźnione o <b>+5</b>.`,
            ],
        ],

        // Cultivation

        'ore-names': {
            'stone': "Kamień",
            'coal': "Węgiel",
            'iron': "Żelazo",
            'gold': "Złoto",
            'platinum': "Platyna",
            'diamond': "Diament",
            'bismuth': "Bizmut",
            'obsidian': "Obsydian",
            'vibranium': "Vibranium",
            'radium': "Rad-223",
            'uranium': "Uran-235",
            'berkelium': "Berkel-247",
            'californium': "kaliforn-252",
            'oganesson': "Oganeson-294",
            'sharkium': "Rekinonium",
        },

        'mined-resources-text': `Wykopane rudy`,
        'mining-tier-reset': `Zwiększ <b>Szczebel Kopania</b>, Ale pomnóż zdrowie i wydobywaną ilość rud.`,
        'mining-tier-ore-unlock': x=>`Odblokuje rude: ${x} .`,
        'mining-tier-ore-generation': x=>`Już nie będziesz więcej wykopywać rudy: ${x}, Ale generować ją na podstawie fortuny kopacza i prędkości kopania.`,

        'mining-tier-bonus': [
            x=>`Zdrowie rudy jest zwiększone o <b>${formatMult(x)}</b>.`,
            x=>`Ilość wydobywanego <b>Kamienia</b> i <b>Węgla</b> jest zwiększona o <b>${formatMult(x)}</b>.`,
            x=>`Ilość wydobywanego <b>Żelaza</b> jest zwiększona o <b>${formatMult(x)}</b>.`,
            x=>`Ilość wydobywanego <b>Złota</b> jest zwiększona o <b>${formatMult(x)}</b>.`,
            x=>`Ilość wydobywanego <b>Platyny</b> jest zwiększona o <b>${formatMult(x)}</b>.`,
            x=>`Ilość wydobywanego <b>Bizmutu</b> jest zwiększona o <b>${formatMult(x)}</b>.`,
            x=>`Ilość wydobywanego <b>Diamentów</b> jest zwiększona o <b>${formatMult(x)}</b>.`,
            x=>`Ilość wydobywanego <b>Obsydianu</b> jest zwiększona o <b>${formatMult(x)}</b>.`,
        ],

        // Forge

        'forge': {
            'anvil': ['Szczebel Kowadła','Odblokowuje nowe ulepszenia kuźni.'],
            'drill': ['Szczebel Wiertła','Zwiększa mnożnik wydobywanego <b>Kamienia</b>.'],
            'shard': ['Wyrafinowany Odłamek',`Zwiększa mnożnik Odłamków ${toTextStyle('Prestiżu','prestige')}.`],
            'tree': ['Nadzwyczajne Drzewo',`Odblokowuje nowy rząd w Drzewie ${toTextStyle('Ewolucji','humanoid')}.`],
            'adv_research': ['Zaawansowane Badania',`Odblokowuje nowe badania.`],
            'auto': ['Zaawansowana Automatyzacja',`Odblokowuje nowe Automatyzacje.`],
            'shark': ['Odległe Poziomy Rekina',`opóźnia trzecie skalowanie poziomu ${toTextStyle('Rekina','shark')}.`],
            'refined_shard': ['Naładowany Odłamek',`Zwiększa potęgę odłamków ${toTextStyle('Prestiżu','prestige')}.`],
            'wormhole': ['Tunel czasoprzestrzenny',`Odblokowuje nowy Akcelerator Cząsteczek.`],
        },
        'forge-progress': (x,s) => x ? `Wykuwanie <b>${x}</b>... <b>${s}</b>` : `Kuzinia jest pusta`,
        'forge-speed': x => `Prędkość wykuwania: <b>${x}</b>`,
        'forge-button': ['Anuluj Wykuwanie','Zacznij wykuwanie','Niewystarczająco materiałów by wykuwać'],

        // Particle Accelerator

        'particle-accel-condense': x => `Zagęszczaj ${x} by:`,
        'particle-accel-boost': [
            x => `Zwiększyć produkowane ${toTextStyle('Promieniowanie '+icon("radioactive"),'core')} o <b>${x}</b>.`,
            x => `Zwiększyć postęp głębokości Każdego oceanu <b>${x}</b>.`,
            x => `Zwiększyć ilość i obrażenia <b>Kamienia</b> o <b>${x}</b>.`,
            x => `Uzyskać <b>${x}</b> więcej ${toTextStyle('Człekowych','humanoid')} Rekinów.`,
            x => `Opóźnić skalowanie pierwszych reaktorów rdzenia o <b>${x}</b>.`,
            x => `Zwiększyć Potęgowanie ${toTextStyle("Rekinowego",'shark')} ELO o <b>${x}</b>.`,
        ],

        // Automation

        'auto-shark-name': `Auto-Poziomy ${toTextStyle("Rekina","shark")}`,
        'auto-su-name': `Auto-Ulepszenia ${toTextStyle("Ryb","fish")} ${toTextStyle("Rekina","shark")}`,
        'auto-spu-name': `Auto-Ulepszenia ${toTextStyle("Prestiżu","prestige")} ${toTextStyle("Rekina","shark")}`,
        'auto-eu-name': `Auto-Ulepszenia Eksploracji`,
        'auto-core_reactor-name': `Auto-Reaktor ${toTextStyle("Rdzenia","core")}`,
        'auto-core_radiation-name': `Auto-Promieniowanie ${toTextStyle("Rdzenia","core")}`,
        'auto-radioactive_boosts-name': `Auto-Wzmacnianie Promieniowania`,
        'auto-mining_upgs-name': `Auto-ulepszenia Kopania ${toTextStyle("Rekina","shark")}`,
        'auto-humanoid-name': `Auto-${toTextStyle("Człekowe","humanoid")} Rekiny`,

        'auto-cost': (D,cost,name) => `Zmniejsza czas oczekiwania o ${formatReduction(D,0)}.<br>Koszt: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Czas oczekiwania: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress

        'progress-0-text': r => `Osiągnij ${format(r)} łącznię ${toTextStyle('Ryb','fish')}`, 
        get 'progress-0-cond-text'() { return `Wykonaj ${toTextStyle('Prestiż','prestige')}` },

        'progress-1-text': r => `Osiągnij ${format(r)} odłamków ${toTextStyle('Prestiżu','prestige')} by odblokować Automatyzacje`,
        'progress-2-text': r => `Osiągnij ${format(r)} odłamków ${toTextStyle('Prestiżu','prestige')} by odblokować Badania`,
        'progress-3-text': r => `Osiągnij ${format(r,0)} Poziom ${toTextStyle('Rekina','shark')} by odblokować Eksploracje`,
        'progress-4-text': r => `Osiągnij ${format(r)}m głębokości w Pacyfiku by odblokować ${toTextStyle('Rdzeń','core')}`,

        'progress-5-text': r => `Osiągnij ${format(r)} łącznie Odłamków ${toTextStyle('Prestiżu','prestige')}`, 
        get 'progress-5-cond-text'() { return `Wejdź do ${toTextStyle('Rdzenia','core')}` },

        'progress-6-text': r => `Osiągnij ${format(r)} ${toTextStyle('Magmatycznych','core')} fragmentów by odblokować następną funkcje ${toTextStyle('rdzenia','core')}`, 
        'progress-7-text': r => `Osiągnij ${format(r,0)} Poziomów ${toTextStyle('Rekina','shark')} by odblokować kolejny typ oceanu`, 
        'progress-8-text': r => `Osiągnij ${format(r)} ${toTextStyle('Magmatycznych','core')} fragmentów by odblokować następną funkcje ${toTextStyle('rdzenia','core')}`,
        'progress-9-text': r => `Osiągnij ${format(r)} łącznie ${toTextStyle('Ryb','fish')} By odblokować nowe reaktory ${toTextStyle('Rdzenia','core')}`, 

        'progress-10-text': r => `Osiągnij ${format(r)} łącznie ${toTextStyle('Ryb','fish')}`, 
        get 'progress-10-cond-text'() { return `Ewoluuj swojego ${toTextStyle('Rekina','shark')}` },

        'progress-11-text': r => `Osiągnij ${format(r,0)} ${toTextStyle('człekowych','humanoid')} Rekinów by odblokować nową funkcje ${toTextStyle('Ewolucji','humanoid')}`, 
        'progress-12-text': r => `Osiągnij ${format(r,0)} ${toTextStyle('człekowych','humanoid')} Rekinów by odblokować nową funkcje ${toTextStyle('Ewolucji','humanoid')}`, 
        'progress-13-text': r => `Osiągnij ${format(r,0)} Szczebel Kopania by odblokować nowy rząd w Drzewie ${toTextStyle('Ewolucji','humanoid')}`, 
        'progress-14-text': r => `Osiągnij ${format(r,0)} Szczebel Kopania by odblokować nową funkcje w ${toTextStyle('Ewolucji','humanoid')}`, 
        'progress-15-text': r => `Osiągnij ${format(r,0)} Szczebel Kopania by odblokować nową funkcje w ${toTextStyle('Ewolucji','humanoid')}`, 

        'maxed-progress': "Wszystko Odblokowane Świetna Robota!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestige','prestige'), s = toTextStyle('Rekina','shark'), f = toTextStyle('Ryby','fish')
            return `
            <h3>${p}</h3><br>
            ${toTextStyle('Prestiż','prestige')} jest pierwszą warstwą resetów. Prestiżowanie resetuje ${s}, Ulepszenia ${s}, oraz ${f} za Odłamki ${toTextStyle('Prestiżu','prestige')}.
            Pierwszy ${toTextStyle('Prestiż','prestige')} Odblokowuje nowe ulepszenia ${s}.<br>
            <img src="textures/PrestigeShard.png"><br>
            Jesteś pewien że chcesz wykonać prestiż??
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Core','core'), m = toTextStyle('Magmatic','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>The ${c}</h3><br>
            ${toTextStyle('Rdzeń','core')} jest drugą warstwą resetów. Wejście do Rdzenia resetuje wszystko co ${toTextStyle('Prestiż','prestige')} robi, tak jak i Odłamki ${toTextStyle('Prestiżu','prestige')}, Ulepszenia ${toTextStyle('Prestiżu','prestige')}, niektóre ${toTextStyle('badania','prestige')}, I eksploracje dla ${toTextStyle('Magmatycznych','core')} fragmentów.
            W dodatku odblokowuje reaktory ${toTextStyle('Rdzenia','core')}.<br>
            <img src="textures/Magmatic.png"><br>
            Czy jesteś pewien że chcesz wejść do Rdzenia?
            `
        },
        get 'reset-humanoid-message'() {
            let e = toTextStyle('Evolution','humanoid'), c = toTextStyle('Core','core'), m = toTextStyle('Magmatic','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>The ${e}</h3><br>
            <subtitle>“Mutowanie zrobi rekiny dzikie, zmieniając je w Człekowate-Rekiny. Ale kosztem wszystkiego co do teraz osiągnąłeś.”</subtitle>
            ${toTextStyle('Ewolucja','humanoid')} jest trzecią warstwą resetów. Ewoluowanie rekinów zresetuje wszystko co ${toTextStyle('Rdzeń','core')} robi, tak jak i ${toTextStyle('Magmatyczne','core')} fragmenty, reaktory ${toTextStyle('Rdzenia','core')}, promieniowanie ${toTextStyle('Rdzenia','core')}, Monter ${toTextStyle('Rdzenia','core')}, i niektóre ${toTextStyle('Badania','prestige')} za ${toTextStyle('Człekowe','humanoid')} Rekiny.
            W dodatku odblokowuje Range i drzewo ${toTextStyle('Ewolucji','humanoid')}.<br>
            <img src="textures/Evolution.png"><br>
            Jesteś pewien że chcesz ewoluować swoje rekiny??
            `
        },
        
        // Other

        'upgrade-shark': x => `Ulepszy Poziom ${toTextStyle('Rekina','shark')}<br>Koszt: ${x.format(0)} ${toTextStyle('Ryb','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} baza ${toTextStyle('Ryb','fish')}`,
        'shark-bonus-prestige': x => `${formatMult(x)} odłamków ${toTextStyle('Prestiżu','prestige')}`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('Magmatycznych','core')} fragmentów`,
        // 'shark-bonus-rad': x => `${formatMult(x)} ${toTextStyle('Promieniowania ' + icon("radioactive"),'core')}`,

        'shark-overpopulation': (x,y) => `Z powodu przeludnienia ${toTextStyle('Rekinów','shark')} do <h4>${toTextStyle(format(y),'Ryb')}</h4>, Zjedzone ${toTextStyle('Ryby','fish')} są zredukowane o <h4>${format(x,3)}√</h4>.`,

        'shark-rank-bonuses': {
            fish: x => `${formatPow(x)} ${toTextStyle('ryb','fish')}`,
            prestige: x => `${formatPow(x)} odłamków ${toTextStyle('Prestiżu','prestige')}`,
            mining_damage: x => `${formatMult(x)} Obrażeń Kopania`,
            so: x => `${formatPow(x)} Opóźnienie przeludnienia ${toTextStyle('Rekinów','shark')}`,
            vibranium: x => `${formatMult(x)} <b>Vibranium</b>`,
        },

        'level': "Poziom",
        'effect': "Efekt",
        'cost': "Koszt",
        'buyMax': "Kup Max",
        'require': "Wymaga",
        'next-at': "Następny za",
        'depth': "Głębokość",
        'reward': "Nagroda",
        'new-preset': "Nowy Zapis",
        'maxed': "Maks",

        'remove': "Usuń",
        'overwrite-current': "Nadpisz Aktualny",
        'load': "Załaduj",
        'force-load': "Wymuś Załadowanie",

        'offline-time-text': x=>`Byłeś Offline przez <b>${formatTime(x,0)}</b>.`,

        'research-afford': bool => bool ? "Zakup" : "Nie można zakupić",
        'research-bought': bool => bool ? `<b>Kupione</b>` : `<b>Nie Kupione</b>`,
        'research-pages': x => `${x} stron`,

        'off-on': bool => bool ? "Włączone" : "Wyłączone",

        'popup-buttons': [
            ["Tak","Nie"],
            ["Ok","Anuluj"],
        ],

        'popup-desc' : {
            import: `Wklej swój zapis. UWAGA: NADPISZE TWÓJ AKTUAL ZAPIS!`,
            wipe: `Jesteś pewien że chcesz wymazać swój zapis?? By wymazać, napisz: "<span class="free-select">Przepraszam, co nie chce rekinów!</span>"`,
            "evolution-tree-respec": `jesteś pewien ze chcesz ponownie rozdać drzewo ${toTextStyle('Ewolucji','humanoid')}? Wykona to reset ${toTextStyle('Ewolucji','humanoid')}, Nie zyskasz ${toTextStyle('człekowych','humanoid')} Rekinów.`,
            "evolution-tree-import": `Wklej swoje drzewo ewolucji.`,
        },

        'notify-desc' : {
            save: "Gra Zapisana!",
            copy_to_clipboard: "Skopiowano do schowka!",
            forge_completed: x => `Pomyślnie wykuto <b>${x}</b>!`,
        },

        'radio-desc' : {
            'notation': ['Notacja formatująca',['Naukowa','Standardowa','Mieszana naukowa','Logarytmiczna']],
            'comma-format': ['Maximum OoMs of Number Commas',['3','6','9','12','15']],
            'autosave': ['Autozapis',['Wyłączony','Włączony']],
            'autosave-time': ['Częstotliwość Autozapisu',['15s','30s','60s','120s']],
            'offline': ['Postęp Offline',['Wyłączony','Włączony']],
            'max-research-amt': ['Maksimum badań Na Stronę',['∞','15','20','25','30']],
            'visible-research': [`Widoczność Zakupionych Badań`,["Pokaż","Ukryj"]],
            'notify': ['Tab Notification',['Disabled','Enabled']],
        },

        'radio-desc-default' : ['Wyłączone','Włączone'],

        'prompt-placeholder': "Wpisz tekst tutaj...",

        'option-buttons-text': ["Zapisz","Exportuj do schowka","Exportuj jako plik","Importuj z tekstu","Importuj z pliku","WYMAŻ!!!",'Dołacz do społeczności (Discord)','Wesprzyj Twórce (Boosty)'],

        'confirm-prestige': "Prestiż",
        'confirm-core': "Wejdz do Rdzenia",
        'confirm-humanoid': "Ewoluuj Rekiny",
    },
}
