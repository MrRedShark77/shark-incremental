// verson translation 0.3.2
LANGUAGES.RU = {
    name: "Russian",
    inter_name: "Русский",
    icon: "lang-ru",

    text: {
        // Currencies (Валюты)

        'fish-name': "Рыба",
        'fish-costName': toTextStyle('Рыб','fish'),

        'prestige-name': "Осколок Престижа",
        'prestige-costName': "Осколков " + toTextStyle('Престижа','prestige'),

        'coral-name': "Коралл",
        'coral-costName': toTextStyle('Коралла','coral'),

        'ice-name': "Лед",
        'ice-costName': toTextStyle('Льдов','ice'),

        'salt-name': "Соль",
        'salt-costName': toTextStyle('Солей','salt'),

        'snow-name': "Сжатый Снег",
        'snow-costName': toTextStyle('Сжатых Снега','snow'),

        'kelp-name': "Ламинария",
        'kelp-costName': toTextStyle('Ламинария','kelp'),

        'core-name': "Магматические Фрагменты",
        'core-costName': toTextStyle('Магматических','core') + ' Фрагментов',

        'humanoid-name': "Человекопободные Акулы",
        'humanoid-costName': toTextStyle('Человекоподобные','humanoid') + ' Акулы',

        'remnants-name': "Остатки",
        'remnants-costName': toTextStyle('Остатки','black-hole'),

        'dark-matter-name': "Темная Материя",
        'dark-matter-costName': toTextStyle('Темная Материя','black-hole'),

        'observ-name': "Наблюдения",
        'observ-costName': toTextStyle('Наблюдений','observ'),

        'reserv-name': "Резерлюдения",
        'reserv-costName': toTextStyle('Резерлюдения','reserv'),

        'traject-name': "Траектория",
        'traject-costName': toTextStyle('Траектории','traject'),

        'full-shark-level': toTextStyle('Акульий','shark') + ' Уровень',
        'full-shark-rank': toTextStyle('Акульий','shark') + ' Ранг',

        'sharkoid-faith': toTextStyle('Акулаподобная Вера','humanoid'),

        'curr-top-0-req': x => `Набрать <b>${format(x)}</b> ${toTextStyle('Рыб','fish')}`, 
        'curr-top-0-reset': x => `Престиж за <b>${x.format(0)}</b> Осколков ${toTextStyle('Престижа','prestige')}`,

        'curr-top-1-req': x => `Набрать <b>${format(x)}</b> Осколков ${toTextStyle('Престижа','prestige')}`, 
        'curr-top-1-reset': x => `Войти в ядро за <b>${x.format(0)}</b> ${toTextStyle('Магматических','core')} Фрагментов`,

        'curr-top-2-req': x => `Набрать <b>${format(x)}</b> ${toTextStyle('Рыб','fish')}`, 
        'curr-top-2-reset': (x,next) => `Эволюционировать твоих ${toTextStyle('Акул','shark')} в <b>${format(x,0)}</b> ${toTextStyle('Человекоподобных','humanoid')} Акул (Следующая на <b>${format(next)}</b> ${toTextStyle('Рыб','fish')})`,

        'curr-top-3-req': x => `Набрать <b>${format(x)}</b> ${toTextStyle('Рыб','fish')} и <b>8</b> ${toTextStyle('Черных Дыр','black-hole')}`, 
        'curr-top-3-reset': x => `Пожертвуй своих ${toTextStyle('Акул','shark')} ради <b>${format(x,0)}</b> ${toTextStyle('Темной Материи','black-hole')}`,
        
        'curr-top-4-req': x => `Набрать <b>${format(x)}</b> ${toTextStyle('Наблюдений','observ')}`, 
        'curr-top-4-reset': x => `Зарезервировать в <b>${format(x,0)}</b> ${toTextStyle('Резерлюдения','reserv')}`,

        'curr-top-5-req': x => `Набрать <b>${format(x)}</b> ${toTextStyle('Резевлюдений','reserv')}`, 
        'curr-top-5-reset': x => `Провести рассчет ради <b>${format(x,0)}</b> ${toTextStyle('Траекторий','traject')}`,
        

        'radioactive-name': toTextStyle('Радиация '+icon("radioactive"),'core'),
        // Tabs (Вкладки)

        'tab-shark': toTextStyle('Акула','shark'),
        'tab-options': "Настройки",
        'tab-scalings': "Масштабирование",
        'tab-auto': "Автоматика",
        'tab-research': toTextStyle('Изучение','prestige'),
        'tab-explore': "Исследование",
        'tab-space-base': toTextStyle('Космическая База','observ'),
        
        'tab-core': toTextStyle('Ядро','core'),
        'tab-core-reactor': "Реактор "+toTextStyle('Ядра','core'),
        'tab-core-radiation':"Радиация "+toTextStyle('Ядра','core'),
        'tab-core-assembler': "Сборщик "+toTextStyle('Ядра','core'),

        'tab-evolution': toTextStyle('Эволюция','humanoid'),
        'tab-shark-rank': toTextStyle('Акулий','shark') + " Ранг",
        'tab-evolution-tree':  "Дерево "+toTextStyle('Эволюции','humanoid'),
        'tab-evolution-goal':  "Цели "+toTextStyle('Эволюции','humanoid'),
        'tab-cultivation': "Культивирование",
        'tab-forge': "Кузня",
        'tab-particle-accel': "Ускоритель Частиц",

        'tab-singularity': toTextStyle('Сингулярность','black-hole'),
        'tab-black-hole': toTextStyle('Черная Дыра','black-hole'),
        'tab-singularity-milestones': "Вехи "+toTextStyle('Сингулярности','black-hole'),
        'tab-solar-system': "Солнечная Система",

        // Elements (Элементы)

        'fish-div': `Ваша ${toTextStyle('Акула','shark')} съела <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> рыб.`,
        'shark-stats': `Статистика ${toTextStyle('Акулы','shark')}<br>Уровень: <h4 id="shark-level">???</h4><br>Ранг: <h4 id="shark-tier">???</h4>`,

        'shark-elo-div': `ELO твоей ${toTextStyle('Акулы','shark')}  равно <h3>${toTextStyle('0','humanoid','shark-elo')}</h3>.`,
        'shark-rank-div': `Твой ${toTextStyle('Акульий','shark')} Ранг равен <h3 id="shark-rank">0</h3>.`,
        'shark-rank-req-div': `Следующий ранг требует ELO ${toTextStyle('Акулы','shark')} равно <h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4>.`,
        'shark-rank-note': `Примечание: Акульий ранг будет сброшен при Эволюционном сбросе`,

        'option-title-1': "Основные Настройки",
        'option-title-2': "Запись Чисел",
        'option-title-3': "Подтверждения",
        'option-title-4': "Языки",

        'offline-speed': "Ускорить Оффлайн Скорость",
        'offline-done': "Завершено!",

        'radioactive-div': `${toTextStyle('Ядро','core')} создало <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('Ядра','core'), rf = toTextStyle('Рыбу '+icon("radioactive"),'fish')
            return `
            <summary>Радиационный Эксперимент  ${c}</summary>
            Экспериментации с радиацией ядра произведет ${toTextStyle('Ядерный','core')} сброс.
            Пока эксперимент активен, все ядерные реакторы не работают, и количество съеденной ${toTextStyle('Рыбы','fish')}, осколоков ${toTextStyle('Престижа','prestige')} и ресурсов первых четырех океанов коренится на 3.
            Эксперимент заставит вашу ${toTextStyle('Акулу','shark')} есть радиоактивную ${rf}.<br>
            Покупайте улучшения за радиоактивную ${rf}, чтобы генерировать больше ${toTextStyle('Радиации '+icon("radioactive"),'core')}, которая дает вам дополнительные бонусы.
            `
        },
        'radioboost-div': `У вас есть <h3 id="radioactive-boost">0</h3> радиоактивных бонусов.`,

        'core-temp-div': `Температура ${toTextStyle('Ядра','core')} равна <h3>${toTextStyle('6,150','core','core-temperature')}</h3>, что делает радиоактивные усиления <h4 id="core-temp-effect">100%</h4> эффективнее.`,
        'core-temp-after-div': `(Температура ${toTextStyle('Ядра','core')} будет равна <span id="core-temp-after">???</span> после сброса ${toTextStyle('Ядра','core')} )`,

        'sharkoid-faith-div': `У тебя есть <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('Акулоподобной Веры','humanoid')}.`,
        'respec-evolution-tree': `Сбросить Древо ${toTextStyle('Эволюции','humanoid')}`,
        'respec-evolution-tree-2': `Сбросить только затерраформенное Древо ${toTextStyle('Эволюции','humanoid')}`,
        'export-evolution-tree': `Экспортировать Древо ${toTextStyle('Эволюции','humanoid')}`,
        'import-evolution-tree': `Импортировать Древо ${toTextStyle('Эволюции','humanoid')}`,
        'evolution-tree-preset': `Заготовки Древа ${toTextStyle('Эволюции','humanoid')}`,

        'rerun-evolution': `Перезапустить ${toTextStyle('Эволюции','humanoid')}, попутно сбросив Древо`,

        'mining-text': `Копаю... <b id="mining-progress">???</b> | Урон <b id="mining-damage">???</b> | ${toTextStyle(`Удача Копания <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'super-mining-text': `Супер Урон <b id="super-mining-damage">???</b> | ${toColoredText(`Супер Удача Копания <span id="super-mining-fortune">0</span>`+icon("luck"),'orange')}`,
        'mining-tier-div': `Уровень Копания: <h3 id="mining-tier">0</h3>`,
        'mining-ascend-div': `Восхождений Копания: <h3 id="mining-ascend">0</h3>`,
        'mining-note': `Примечание: Если вы застряли на руде с большим количеством здоровья (уйдет слишком много времени), перезапусти страницу.`,
        'mining-tier-undo-btn': `Понизить Уровень Копания на 1, если ты застрял во время копания`,
        'mining-ascend-undo-btn': `Понизить Восхождение Копания на 1, если ты застрял во время копания`,

        'black-hole-button': `Из-за того, что ты заполнил до отказа все ускорители частиц, тебе нужно сформировать черную дыру для отправки в другую вселенную`,
        'black-hole-html': `Ты сформировал <h2>${toTextStyle('0','black-hole','black-hole-amount')}</h2> черную дыру, из-за чего экспонента рыбы с осколков престижа, а также множитель магматических фрагментов снижены на <h3 id="black-hole-effect">^???</h3>.`,

        'remnant-html': `У тебя есть <h3>${toTextStyle('0','black-hole','remnant-amount')}</h3> <span id="remnant-gain"></span> остатков.`,
        
        'rocket-part-div': `Ты создал всего <h3 id="total-rocket-part">0</h3> Частей Ракеты`,
        'observ-div': `У тебя есть <h3>${toTextStyle('0','observ','observ-amount')}</h3> <span id="observ-gain"></span> наблюдений. (<h3>${toTextStyle('0','observ','observ-total')}</h3> всего)`,
        'reserv-div': `У тебя есть <h3>${toTextStyle('0','reserv','reserv-amount')}</h3> <span id="reserv-gain"></span> резерлюдеий.`,
        'traject-div': `У тебя есть <h3>${toTextStyle('0','traject','traject-amount')}</h3> <span id="traject-gain"></span> траекторий.`,

        // Upgrades

        'su-s1-req': "Уровень 3",
        'su-s1-name': 'Сила Акулы',
        'su-s1-desc': `Увеличивает количество съеденной ${toTextStyle('Рыбы','fish')} на <b>+1</b> за уровень.`,

        'su-s2-req': "Уровень 7",
        'su-s2-name': 'Ловкость Акулы',
        'su-s2-desc': `Увеличивает базовый бонус ${toTextStyle('Рыбы','fish')} уровня ${toTextStyle('Акулы','shark')} на <b>+1</b> за уровень.`,

        'su-s3-req': "Уровень 15",
        'su-s3-name': 'Зубы Акулы',
        'su-s3-desc': `Увеличивает показатель 1-го улучшения ${toTextStyle('Акулы','shark')} на <b>+50%</b> за уровень.`,

        'su-s4-req': "Уровень 38",
        'su-s4-name': 'Экспонента Акулы',
        'su-s4-desc': `Увеличивает экспоненту ${toTextStyle('Рыбы','fish')} на <b>+1%</b> за уровень.`,

        'su-s5-req': "Уровень 640",
        'su-s5-name': 'Радиоактивная Акула',
        'su-s5-desc': `Увеличивает производство ${toTextStyle('Радиации '+icon("radioactive"),'core')} в <b>2</b> раза за уровень.`,

        'su-p1-req': "Первый Престиж",
        'su-p1-name': 'Суперсила Акулы',
        'su-p1-desc': `Увеличивает количество съеденной ${toTextStyle('Рыбы','fish')} на <b>x3</b> за уровень.`,

        'su-p2-req': "Первый Престиж",
        'su-p2-name': 'Престижный Усилитель',
        'su-p2-desc': `Увеличивает количество съеденной ${toTextStyle('Рыбы','fish')} на <b>×lg(${toTextStyle('Рыба','fish')})</b> за уровень.`,

        'su-p3-name': 'Масштабная Акула',
        'su-p3-desc': `Увеличивает первую шкалу уровня ${toTextStyle('Акулы','shark')}, начиная с <b>+1</b> за уровень.`,

        'su-m1-name': 'Урон Копания',
        'su-m1-desc': `Увеличивает урон копания в <b>×2</b> за уровень.`,

        'su-m2-name': 'Скорость Копания',
        'su-m2-desc': `Увеличивает скорость копания на <b>+10%</b> за уровень.`,

        'su-m3-req': 'Уровень Копания 3',
        'su-m3-name': 'Сжатый Камень',
        'su-m3-desc': `Увеличивает количество добываемого <b>Камня</b> в <b>×2</b> за уровень.`,

        'su-m4-req': 'Уровень Копания 6',
        'su-m4-name': 'Удача Копания',
        'su-m4-desc': `Увеличивает ${toTextStyle('Удача Копания '+icon('luck'),'gold')} на <b>+5</b> за уровень.`,

        'su-m5-req': 'Уровень Копания 9',
        'su-m5-name': 'Базовые Руды',
        'su-m5-desc': `Увеличивает количество добываемые первых 4 руд в <b>×2</b> за уровень.`,

        'su-m6-req': 'Восходение Копания 1',
        'su-m6-name': 'Супер Урон Копания',
        'su-m6-desc': `Увеличивает супер урон копания в <b>×2</b> за уровень.`,

        'su-m7-req': 'Восходение Копания 3',
        'su-m7-name': 'Супер Скорость Копания',
        'su-m7-desc': `Увеличивает скорость обычного и супер копания на <b>+25%</b> за уровень.`,

        'su-m8-req': 'Восходение Копания 6',
        'su-m8-name': 'Сжатый Радий',
        'su-m8-desc': `Увеличивает количество добываемого <b>Радия-223</b> в <b>×2</b> за уровень.`,

        'su-m9-req': 'Восходение Копания 12',
        'su-m9-name': 'Супер Удача Копания',
        'su-m9-desc': `Увеличивает ${toColoredText('Супер Удачу Копания '+icon('luck'),'orange')} на <b>+5</b> за уровень.`,

        // Researches

        'research-p1-name': "Престижная Ловкость",
        'research-p1-desc': `'Ловкость Акулы' теперь влияет на базовый бонус осколков ${toTextStyle('Престижа','prestige')} уровня ${toTextStyle('Акулы','shark')} в меньшей степени.`,

        'research-p2-name': "Улучшение Акулы EL",
        'research-p2-desc': `${toTextStyle("Рыбные",'fish')} улучшения ${toTextStyle("Акулы",'shark')} больше не тратят ${toTextStyle("Рыбы",'fish')}.`,

        'research-p3-name': "Обновленный уровень Акулы",
        'research-p3-desc': `Уменьшает базу требования уровня ${toTextStyle("Акулы",'shark')} на <b>1</b>,
        но делает ${toTextStyle("Престижный",'prestige')} сброс, сбросив осколки ${toTextStyle("Престижа",'prestige')} и ${toTextStyle("Престижные",'prestige')} улучшения.
        Разблокирует новые улучшения ${toTextStyle("Акулы",'shark')}.`,

        'research-p4-name': "Улучшенный Престиж",
        'research-p4-desc': `Немного улучшите формулу получения осколков ${toTextStyle("Престижа",'prestige')}.`,

        'research-p5-name': "Мега-Сила",
        'research-p5-desc': `'Суперсила Акулы' на <b>1%</b> сильнее за каждый уровень ${toTextStyle("Акулы",'shark')}, начиная со 100.`,

        'research-p6-name': "Супермасштабная Акула",
        'research-p6-desc': `'Масштабная Акула' в <b>два</b> раза сильнее.`,

        'research-p7-name': "Лучшие Ресурсы I",
        'research-p7-desc': `Эффекты ${toTextStyle("Коралла",'coral')} и ${toTextStyle("Льда",'ice')} становятся лучше.`,

        'research-p8-name': "Углубленно Улучшенный Уровень Акулы",
        'research-p8-desc': `Больше уменьшить базу требования уровня ${toTextStyle("Акулы",'shark')} на 1.`,

        'research-p9-name': "Дешёвый Престижный Усилитель",
        'research-p9-desc': `Уменьшает деление машстабирования 'Престижного Усилителя' на <b>-0.05</b> за уровень.`,

        'research-e1-name': "Океанский Синтез I",
        'research-e1-desc': `${toTextStyle("Соль",'salt')} усиливает генерацию ${toTextStyle("Кораллов",'coral')}.`,

        'research-e2-name': "Океанский Синтез II",
        'research-e2-desc': `${toTextStyle("Сжатый Снег",'snow')} усиливает генерацию ${toTextStyle("Льда",'ice')}.`,

        'research-e3-name': "Автоматизация Исследований",
        'research-e3-desc': `Автоматически обновлять лучшую базу первых <b>X</b> океанов вне исследования.`,

        'research-e4-name': "Оксидированная Ламинария",
        'research-e4-desc': `Теперь <b>Кислород</b> увеличивает производство ${toTextStyle("Ламинарии",'kelp')} в меньшей степени.`,

        'research-e5-name': "Автоматизация Исследований Версия 2",
        'research-e5-desc': `Автоматически обновлять лучшую базу Индийского океана вне исследования. Улучшает эффект ${toTextStyle('Ламинарии','kelp')} еще раз.`,

        'research-e6-name': "Зондский желоб",
        'research-e6-desc': `Передела глубины <b>Индийского океана</b> больше нет и его эффект будет ещё сильнее после этого.`,


        'research-c1-name': "C-Хранитель Изучения",
        'research-c1-desc': `Сохраняет ${toTextStyle("Изучения",'prestige')} при входе в ${toTextStyle('Ядро','core')}.`,

        'research-c2-name': "C-Хранитель Исследования",
        'research-c2-desc': `Сохраняет первые <b>X</b> разблокированных океанов и их глубину при входе в ${toTextStyle('Ядро','core')}.`,

        'research-c3-name': "Привязанность Неона I",
        'research-c3-desc': `<b>Неон</b> теперь влияет на 'Зубы Акулы', 'Экспоненту Акулы', and 'Масштабную Акулу'.`,

        'research-c4-name': "Улучшенный Никель",
        'research-c4-desc': `Эффект <b>Никеля</b> в <b>два</b> раза сильнее.`,

        'research-c5-name': "Дополнительный Бонус Ядра",
        'research-c5-desc': `Теперь первый бонус радиации ядра увеличивает бонус ядерного реактора к ${toTextStyle('Рыбе','fish')} в меньшей степени.`,

        'research-c6-name': "Уменьшение Радиации",
        'research-c6-desc': `${toTextStyle('Магматические','core')} фрагменты уменьшают лимит радиации ядра в меньшей степени.`,

        'research-c7-name': "Громадные Акульи Зубы",
        'research-c7-desc': `Эффект 'Зубы Акулы' увеличен в <b>2.5</b> степени.`,

        'research-c8-name': "Лучшее Железо и Неон",
        'research-c8-desc': `Эффект <b>Железа</b> в два раза сильнее, а также требования для <b>Железа</b> и <b>Неона</b> значительно пониженны.`,

        'research-c9-name': "Лучшее Усиление Ядра",
        'research-c9-desc': `Улучшает усиление реактора ядра к ${toTextStyle('Рыбам','fish')}.`,

        'research-c10-name': "Супер-Масштабная Акула",
        'research-c10-desc': `'Масштабная Акула' теперь отдаляет второе мастабирование Уровня ${toTextStyle('Акулы','shark')} в меньшем порядке.`,

        'research-c11-name': "Лучшее Уменьшение Радиации",
        'research-c11-desc': `'Уменьшение Радиации' теперь слегкая сильнее.`,

        'research-c12-name': "Мега Уменьшение Радиации",
        'research-c12-desc': `Значительное снижает предел радиации.`,

        'research-c13-name': "Супер Радиоактивная Акула",
        'research-c13-desc': `'Радиоактивная Акула' теперь <b>50%</b> сильнее.`,

        'research-c14-name': "Экспонентное Усиление Ядра",
        'research-c14-desc': `Реакторы ядра теперь дают экспонентное усиление ${toTextStyle('Рыбам','fish')}.`,

        'research-c15-name': "Само-Радиация",
        'research-c15-desc': `Теперь вы можете покупать Радиационные улучшения, ценной обычной ${toTextStyle('Рыбы','fish')} за место радиоактивной ${toTextStyle('Рыбы '+icon('radioactive'),'fish')}, но в порядке <b>^0.0001</b>. Дальнейшее улучшение увеличивает соотношение в <b>×10</b> за уровень.`,

        'research-m1-name': "Магматическая Удача",
        'research-m1-desc': `Увеличивает ${toTextStyle('Удачу Копания '+icon('luck'),'gold')} на <b>+5</b> за уровень.`,

        'research-m2-name': "Гипер-Масштабная Акула",
        'research-m2-desc': `Третье мастабирование Уровня ${toTextStyle('Акулы','shark')} отдаленно на <b>+1000</b>.`,

        'research-m3-name': "Масштабный Радиоактивное Усиление",
        'research-m3-desc': `Отдаляет первые 2 мастабирования радиоактивных усилений на <b>+1</b> за уровень.`,

        'research-m4-name': "Лучший Уровень Копания",
        'research-m4-desc': `Вторые-Пятые эффекты Уровень Копания теперь на <b>+25%</b> сильнее за уровень.`,

        'research-f1-name': "Базовая Экспонента Ранга",
        'research-f1-desc': `Увеличивает экспоненту ELO ${toTextStyle("Акулы",'shark')} на <b>+25%</b> за уровень.`,

        'research-f2-name': "Больше Акулаподобная Веры",
        'research-f2-desc': `Получай больше ${toTextStyle('Акулаподобная Веры','humanoid')} из ${toTextStyle('Рыбы','fish')} и осколков ${toTextStyle("Престижа",'prestige')}.`,

        'research-f3-name': "Масштабируемые Реакторы Ядра",
        'research-f3-desc': `Отдаляет первое масштабирование реакторов ядра на <b>+1</b> за уровень.`,

        'research-f4-name': "Меньший Софткап Термературы Ядра",
        'research-f4-desc': `Софткап для Термературы ${toTextStyle('Ядра','core')} теперь гораздо слабее.`,

        'research-f5-name': "Усиление Вибраниума",
        'research-f5-desc': `<b>Вибраниум</b> улучшает урон копания в уменьшенном порядке.`,

        'research-f6-name': "Универсальный Уровень Копания",
        'research-f6-desc': `Первые 9 руда усиливаются благодаря уровню копания.`,

        'research-f7-name': "Лучший ELO Акулы",
        'research-f7-desc': `Основа для человекоподобных акул в формуле для ELO ${toTextStyle("Shark",'shark')} улучшенно с <b>x</b> до <b>2<sup>x</sup>-1</b>.`,

        'research-f8-name': "Уменьшенное Здоровье Руды",
        'research-f8-desc': `Первый эффект от уровня копания теперь слабее.`,

        'research-s1-name': "Рыба Остатка",
        'research-s1-desc': `${toTextStyle("Рыба",'fish')} усиливает генерацию ${toTextStyle("Остатков",'black-hole')} в уменьшенном порядке.`,

        'research-s2-name': "Лучшее Усиление Ранга",
        'research-s2-desc': `Улучшает усиленние Ранга ${toTextStyle("Акулы",'shark')} к Осколкам ${toTextStyle('Престижа','prestige')}.`,

        'research-s3-name': "Чистые океаны",
        'research-s3-desc': `<b>Тихий и Арктические океаны</b> дают экспоненциальное усиление, а также улучшает <b>Атлантический & Южные океаны</b>.`,

        'all-research': {
            's4': ["Чистые океаны II",`<b>Индийский океан</b> дает экспоненциальное усиление в уменьшенном порядке.`],
            's5': ["Чистые океаны III",`Сокращение прогресса глубины первых <b>N</b> Океанов до появления <b>Индийского Океана</b> убраны. 6 уровень улучшает 10-е усиление радиации.`],

            'dm1': ["Стартовая Черная Дыра",`Начинай с <b>+1</b> ${toTextStyle("Черной Дырой",'black-hole')} при жертвенном сбросе за уровень. Каждая стартовая черная дыра откладывает сокращение.`],
            'dm2': ["Лучший Остаток I",`Улучшает улучшение ${toTextStyle("Остатка",'black-hole')} "Привет Снова", оно влияет теперь на осколки ${toTextStyle("Престижа",'prestige')}`],
            'dm3': ["Лучший Остаток II",`Улучшает улучшение с "Мастер Акулы".`],
            'dm4': ["Лучший Остаток III",`Улучшает усиления уровня и ранга ${toTextStyle("Акулы",'shark')} к генерации ${toTextStyle("Остатка",'black-hole')}`],
            'dm5': ["Безсофткапная Температура Ядра",`Убирает софткап Температуры ${toTextStyle('Ядра','core')}.`],
            'dm6': ["Лучшая Генерация Радиации",`Генератор ${toTextStyle('Радиации '+icon('radioactive'),'core')} увеличивается самостоятельно по экспоненте в уменьшенном порядке.`],
            'dm7': ["Темные остатки",`Вся ${toTextStyle("Темная Материя",'black-hole')} за все время усиливает генерацию ${toTextStyle("Остатка",'black-hole')}.`],

            'm5': ["Рвнг Акулы 'в' Супер Копании",`Усиление Ранга ${toTextStyle("Акулы",'shark')} к Урону Копания теперь влияет на супер урон в уменьшенном порядке.`],
            'm6': ["Урановая Акула",`'Экспонента Акулы' теперь черзмерно сильная.`],
            
            'o1': [`Автоматизация Обсерватории`,`Автоматизирует все улучшения Наблюдения без траты валюты. <i>Это улчшение не сбрасывается.</i>`],
        },

        // Exploration (Исследования)

        'explore-while': `Во время исследования`,
        'explore-inside': (a,b,c)=>`База ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Набрать ${format(c,0)} ${toTextStyle("Рыб",'fish')}.`,
        'explore-outside': x=>`Ваша текущая база - ${x.format()}/s.<br>Исследуйте океан!`,

        'explore-next': x=>`Новый океан на <h3>${format(x,0)}</h3> уровне ${toTextStyle("Акулы",'shark')}.`,

        'explore-doubler-1': x=>`Удваивает генерацию ${x}.`,
        'explore-doubler-2': `Удваивает получение глубины прогрессии.`,

        'explore-0-name': `Тихий Океан`,
        'explore-0-desc': `Количество ${toTextStyle('Рыб','fish')} коренится на 2.`,
        'explore-0-milestone': [
            `Возведёт количество осколков ${toTextStyle('Престижа','prestige')} в 1.05-й степени.`,
            `Увеличивает ресурс и глубину прогрессии на 25% за уровень ${toTextStyle('Акулы','shark')} с квадратным корнем.`,
            `При повышении уровня ${toTextStyle('Акулы','shark')} больше не будет тратить Рыбу.`,
            `Возведёт количество съеденной ${toTextStyle('Рыбы','fish')} в 1.05-й степени.`,
            `Разблокирует ${toTextStyle('Ядро','core')}.`,
        ],

        'explore-1-name': `Арктический Океан`,
        'explore-1-desc': `Сбросит осколки ${toTextStyle("Престижа",'prestige')} и ${toTextStyle("Престижные",'prestige')} улучшения. Количество осколков ${toTextStyle('Престижа','prestige')} коренится на 2.`,
        'explore-1-milestone': [
            `Разблокирует Авто-${toTextStyle("Престижное","prestige")} Улучшение ${toTextStyle("Акулы","shark")}.`,
            `Увеличивает ресурс и глубину прогрессии на 25% за уровень ${toTextStyle('Акулы','shark')} с квадратным корнем.`,
            `${toTextStyle("Престижные","prestige")} улучшения ${toTextStyle("Акулы","shark")} больше не будут тратить осколки ${toTextStyle('Престижа','prestige')}.`,
            `Пассивно генерирует 100% осколков ${toTextStyle('Престижа','prestige')}, заработанных на ${toTextStyle('Престиже','prestige')}.`,
        ],

        'explore-2-name': `Атлантический Океан`,
        'explore-2-desc': `Сбросит осколки ${toTextStyle("Престижа",'prestige')} и ${toTextStyle("Престижные",'prestige')} улучшения. Масштабы уровня ${toTextStyle('Акулы','shark')} в 10 раз сильнее.` ,
        'explore-2-milestone': [
            `Масштабирование 'Зуб Акулы' и 'Экспоненты Акулы' немного слабее.`,
            `Увеличивает ресурс и глубину прогрессии на 25% за уровень ${toTextStyle('Акулы','shark')} с квадратным корнем.`,
            `Первая шкала уровня ${toTextStyle('Акулы','shark')} начинает действовать через +1 на 500 м глубины.`,
            `Эффект этого океана на 50% мощнее.`,
        ],

        'explore-3-name': `Южный Океан`,
        'explore-3-desc': `Сбросит осколки ${toTextStyle("Престижа",'prestige')} и ${toTextStyle("Престижные",'prestige')} улучшения. Вы не можете покупать ${toTextStyle('Рыбные','fish')} и ${toTextStyle('Престижные','prestige')} улучшения ${toTextStyle('Акулы','shark')}.`,
        'explore-3-milestone': [
            `Увеличьте базу исследований в 10 раз.`,
            `Увеличивает ресурс и глубину прогрессии на 25% за уровень ${toTextStyle('Акулы','shark')} с квадратным корнем.`,
            `Эффект этого океана на 50% мощнее.`,
        ],

        'explore-4-name': `Индийский Океан`,
        'explore-4-desc': `Вы заперты в первых четырех океанах, а экспонента ваших ${toTextStyle('Рыб','fish')} уменьшена в 0.75 степени.`,
        'explore-4-milestone': [
            `Уменьшить лимит радиации ядра на /1,000.`,
            `Увеличивает ресурс и глубину прогрессии на 25% за уровень ${toTextStyle('Акулы','shark')} с квадратным корнем.`,
            `Шкала ядерных реакторов начинает действовать через +5.`,
            `Улучшить заработок ${toTextStyle('Ламинарий','kelp')}.`,
        ],


        // Core Reactor (Реактор Ядра)

        'core-0-name': `Железо`,
        'core-0-desc': `${toTextStyle("Рыба",'fish')} возведёт себя в степень на основе уровня <b>Железа</b>`,

        'core-1-name': `Никель`,
        'core-1-desc': `Осколки ${toTextStyle("Престижа",'prestige')} возведут свою базу в степень на основе уровня <b>Никеля</b>.`,

        'core-2-name': `Кислород`,
        'core-2-desc': `Произведение ресурсов первых четырех океанов увеличивает их производство на основе уровня <b>Кислорода</b>.`,

        'core-3-name': `Неон`,
        'core-3-desc': `Уровень ${toTextStyle("Акулы",'shark')} снижает свое требование на основе уровня <b>Неона</b>.`,

        'core-4-name': `Сера`,
        'core-4-desc': `${toTextStyle("Рыба",'fish')} усиливает <b>Железо</b> на основе уровня <b>Серы</b>`,

        'core-5-name': `Силикон`,
        'core-5-desc': `Осколки ${toTextStyle("Престижа",'prestige')} усиливают <b>Никель</b> на основе уровня <b>Силикона</b>`,

        'core-6-name': `Нитроген`,
        'core-6-desc': `${toTextStyle("Ламинария",'kelp')} усиливает <b>Кислород</b> на основе уровня <b>Нитрогена</b>.`,

        'core-7-name': `Гелий`,
        'core-7-desc': `Уровень ${toTextStyle("Акулы",'shark')} усиливает <b>Неон</b> на основе уровня <b>Гелия</b>.`,

        'core-8-name': `Магний`,
        'core-8-desc': `${toTextStyle("Рыба",'fish')} увеличивает саму себя по экспоненте на основе уровня <b>Магния</b>`,

        'core-9-name': `Натрий`,
        'core-9-desc': `Осколки ${toTextStyle("Престижа",'prestige')} увеличивают сами себя по экспоненте на основе уровня <b>Натрия</b>`,

        'core-10-name': `Фосфор`,
        'core-10-desc': `${toTextStyle("Магматические",'core')} осколки увеличивают сами себя на основе уровня <b>Фосфора</b>`,

        'core-11-name': `Хром`,
        'core-11-desc': `${toTextStyle("Человекоподобные",'humanoid')} акулы увеличивают экспоненту ELO ${toTextStyle("Акулы",'shark')} на основе уровня <b>Хрома</b>.`,

        'core-bonus': x => `Произведение ядерных реакторов увеличивает количество съеденной ${toTextStyle("Рыбы",'fish')} на <h4>${formatMult(x)}</h4>.`,

        'core-assembler-erase': `Режим Уборки`,
        'core-assembler-choose': `Ты выбрал`,
        'core-assembler-building-stats': (s,p,m) => `Сила <b>${s}</b> | Поставлено <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Максимум построек: ${mm} / ${m}<br>Требуется: ${format(x)} ${toTextStyle("Магматических",'core')} фрагментов`, 
        'ca-building-base': b => `[Основа: ${b}]`,
        'ca-building-temp': t => `Увеличивает термературу Ядра на ${t}.`,

        // Core Radiation (Радиация Ядра)

        'cr-start': x=>x?"Остановить эксперимент.":"Начать эксперимент.",

        'upgrade-cr': (gen,cost)=>`
        Улучшить заработок ${toTextStyle('Радиации '+icon("radioactive"),'core')}.<br>
        Производится <b>${format(gen,0)}</b> в секунду.<br>
        Стоимость: ${format(cost,0)} ${toTextStyle('Рыбы '+icon("radioactive"),'fish')}`,
        
        'reset-cr': (inc)=>`Сбросить ${toTextStyle('Радиацию '+icon("radioactive"),'core')}, но увеличить её лимит на <b>${formatMult(inc,0)}</b>, и иногда добавить новое улучшение или улучшить бонусы. Вам необходимо достичь лимита, чтобы совершить сброс.`,
        
        'cr-boosts': [
            x=>`Добавить <h4>+${format(x)}</h4> дополнительных ядерных реакторов в первую строчку.`,
            x=>`Улучшить заработок ${toTextStyle('Магматических','core')} фрагментов в <h4>${formatMult(x)}</h4>.`,
            x=>`Первые четыре ${toTextStyle('Рыбных','fish')} улучшений сильнее на <h4>${formatPercent(x.sub(1))}</h4>.`,
            x=>`Вторая шкала уровня ${toTextStyle('Акулы','shark')} начинает действовать через <h4>+${format(x)}</h4>.`,
            x=>`Увеличить базовый показатель бонуса от ${toTextStyle('Магматических','core')} фрагментов на уровень ${toTextStyle('Акулы','shark')} на <h4>+${format(x,3)}</h4>.`,
            x=>`Увеливает ${toTextStyle('Рыбный','fish')} бонус Уровеня ${toTextStyle('Акулы','shark')} в <h4>${formatPow(x,3)}</h4> по экспоненте.`,
            x=>`Первые три ${toTextStyle('Престижных','prestige')} улучшения ${toTextStyle('Акулы','shark')} тепенрь на <h4>${formatPercent(x.sub(1))}</h4> более сильные.`,
            x=>`Уровень ${toTextStyle('Акулы','shark')} усиливает ELO ${toTextStyle('Акулы','shark')} в <h4>${formatMult(x)}</h4>.`,
            x=>`Увеличивает количество добываемого <b>Камня</b> в <h4>${formatMult(x)}</h4>.`,
            x=>`Дает <h4>${formatMult(x,3)}</h4> бонусную покупку для улучшений Исследования.`,
            x=>`Дает <h4>+${format(x)}</h4> бонус реакторов ядра на втором ряду`,
            x=>`Усиливает ${toTextStyle('Темную Материю','black-hole')} в <h4>${formatMult(x)}</h4>.`,
            x=>`Усиливает генерацию ${toTextStyle('Остатка','black-hole')} в <h4>${formatMult(x)}</h4>.`,
            x=>`Предыдущие бонусы (кроме шестого) теперь <h4>${formatPercent(x.sub(1))}</h4> более сильнее.`,
        ],

        // Evolution Tree (Древо Эволюции)

        'evolution-tree-row': (r,a) => `<b>Ряд ${r}</b><br>${a} доступно`,
        'evolution-tree-ctn': [
            ["Рыбное Тело", x=>`${toTextStyle('Рыба','fish')} усиливает ELO ${toTextStyle('Акулы','shark')} в <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Рыба','fish')} усиливает экспоненту ELO ${toTextStyle('Акулы','shark')} в <b>${formatMult(x)}</b>.`],
            ["Престижное Тело", x=>`Осколки ${toTextStyle('Престижа','prestige')} усиливает ELO ${toTextStyle('Акулы','shark')} в <b>${formatMult(x)}</b>.`, x=>`Осколки ${toTextStyle('Престижа','prestige')} усиливают экспоненту ELO ${toTextStyle('Акулы','shark')} в <b>${formatMult(x)}</b>.`],
            ["Радиоактивное Тело", x=>`${toTextStyle('Магматитеские','core')} фрагменты усиливает ELO ${toTextStyle('Акулы','shark')} в <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Магматитеские','core')} фрагменты усиливают экспоненту ELO ${toTextStyle('Акулы','shark')} в <b>${formatMult(x)}</b>.`],
            ["Идеальное Тело", x=>`ELO ${toTextStyle('Акулы','shark')} усиливается в <b>${formatMult(x,0)}</b>.`, x=>`Экспонента ELO ${toTextStyle('Акулы','shark')} увеличена в <b>${formatMult(x)}</b>.`],

            ["Стальная Акула", x=>`Дает <b>${format(x,0)}</b> бонус уровней <b>Железа</b>.`, x=>`Значительно усиливает <b>Железо</b>.`],
            ["Ценная Акула", x=>`Дает <b>${format(x,0)}</b> бонус уровней <b>Никеля</b>`, x=>`Значительно усиливает <b>Никель</b>.`],
            ["Дышащий Воздухом Акула", x=>`Дает <b>${format(x,0)}</b> бонус уровней <b>Кислорода</b>`, x=>`Значительно усиливает <b>Кислород</b>.`],
            ["Светящийся Акула", x=>`Дает <b>${format(x,0)}</b> бонус уровней <b>Неона</b>`, x=>`Значительно усиливает <b>Неон</b>.`],

            ["Марианская Впадина", x=>`Передела глубины <b>Тихого Океана</b> больше нет и его эффект будет ещё сильнее после этого.`, x=>`Значительное улучшает процесс погружения в <b>Тихий океан</b>.`],
            ["Жёлоб Литке", x=>`Передела глубины <b>Арктического Океана</b> больше нет и его эффект будет ещё сильнее после этого.`, x=>`Значительное улучшает процесс погружения в <b>Арктический океан</b>.`],
            ["Милуокская глубина ", x=>`Передела глубины <b>Атлантического Океана</b> больше нет и его эффект будет ещё сильнее после этого.`, x=>`Значительное улучшает процесс погружения в <b>Атлантический океан</b>.`],
            ["Южная Сандвичевская Впадина", x=>`Передела глубины <b>Южного Океана</b> больше нет и его эффект будет ещё сильнее после этого.`, x=>`Значительное улучшает процесс погружения в <b>Южный океан</b>.`],

            ["Инфлянционная Рыба", x=>`${toTextStyle('Рыба','fish')} поднята на <b>${format(x)}</b> порядка.`, x=>`Экспонента ${toTextStyle('Рыбы','fish')} поднята на <b>${format(x)}</b> порядка.`],
            ["Сверх-престиж", x=>`Осколки ${toTextStyle('Престижа','prestige')} подняты на <b>${format(x)}</b> порядка.`, x=>`Экспонента Осколков ${toTextStyle('Престижа','prestige')} поднята на <b>${format(x)}</b> порядка.`],
            ["Сжатое Ядро", x=>`${toTextStyle("Магматические",'core')} фрагменты подняты на <b>${format(x)}</b> порядка.`, x=>`${toTextStyle("Магматические",'core')} фрагменты подняты на <b>${format(x)}</b> порядка вновь.`],
            ["Самодельная Акула", x=>`Снижает основу для ${toTextStyle('Человекоподобной','humanoid')} акулы на <b>${format(x,0)}</b>.`, x=>`Экспонента ${toTextStyle('Человекоподобных','humanoid')} акул увеличена на <b>+${format(x)}</b>.`],

            ["Конвертация Акул", x=>`Дает <b>${format(x,0)}</b> бонус уровней <b>Серы</b>`, x=>`Дает <b>${formatPow(x)}</b> больше бонусных уровней <b>Серы</b> выше 1.`],
            ["Экоскелетная Акула", x=>`Дает <b>${format(x,0)}</b> бонус уровней <b>Силикона</b>`, x=>`Дает <b>${formatPow(x)}</b> больше бонусных уровней <b>Силикона</b> выше 1.`],
            ["Солнечная Акула", x=>`Дает <b>${format(x,0)}</b> бонус уровней <b>Нитрогена</b>`, x=>`Дает <b>${formatPow(x)}</b> больше бонусных уровней <b>Нитрогена</b> выше 1.`],
            ["Летающая Акула", x=>`Дает <b>${format(x,0)}</b> бонус уровней <b>Гелия</b>`, x=>`Дает <b>${formatPow(x)}</b> больше бонусных уровней <b>Гелия</b> выше 1.`],

            ["Тело Великой Акулы", x=>`${toTextStyle('Рыба','fish')} усиливает <b>'Рыбное Тело'</b> в <b>${formatPow(x)}</b>.`],
            ["Перерождённое Тело", x=>`Осколки ${toTextStyle('Престижа','prestige')} усиливает <b>'Престижное Тело'</b> в <b>${formatPow(x)}</b>.`],
            ["Сверхестественное Тело", x=>`${toTextStyle('Магматические','core')} фрагменты усиливает <b>'Радиоактивное Тело'</b> в <b>${formatPow(x)}</b>.`],
            ["Бессмертное Тело", x=>`<b>'Идеальное тело'</b> теперь <b>в квадрате</b>.`],

            ['Удача Моря', x=>`${toTextStyle('Рыба','fish')} усиливает ${toTextStyle('Удачу Копания '+icon('luck'),'gold')} на <b>+${format(x)}</b>`],
            ['Удача Земли', x=>`<b>Камень</b> усиливает ${toTextStyle('Удачу Копания '+icon('luck'),'gold')} на <b>+${format(x)}</b>`],
            ['Удача Акулы', x=>`${toTextStyle('Человекоподобные','humanoid')} Акулы усиливает ${toTextStyle('Удачу Копания '+icon('luck'),'gold')} на <b>+${format(x)}</b>`],
            ['Чистая Удача', x=>`${toTextStyle('Удача Копания '+icon('luck'),'gold')} усиливается на <b>+${format(x)}</b>`],

            ["Лучшее Железа", x=>`Усиливает постройку <b>Железа</b>.`],
            ["Лучшее Никеля", x=>`Усиливает постройку <b>Никеля</b>.`],
            ["Лучшее Кислорода", x=>`Усиливает постройку <b>Кислорода</b>.`],
            ["Лучшее Неона", x=>`Усиливает постройку <b>Неона</b>`],

            ["Железное Железо", x=>`Усиливает реактор <b>Железа</b>.`],
            ["Свинка-копилка", x=>`Усиливает реактор <b>Никеля</b>.`],
            ["Озон", x=>`Усиливает реактор <b>Кислорода</b>.`],
            ["Искустенные Радиоактивные Отходы", x=>`Усиливает реактор <b>Неона</b>.`],

            ["Сильная Колона 1", x=>`Верхние улучшение по первой колоне теперь на <b>${formatPercent(x-1)}</b> сильнее.`],
            ["Сильная Колона 2", x=>`Верхние улучшение по второй колоне теперь на <b>${formatPercent(x-1)}</b> сильнее.`],
            ["Сильная Колона 3", x=>`Верхние улучшение по третьей колоне теперь на <b>${formatPercent(x-1)}</b> сильнее.`],
            ["Сильная Колона 4", x=>`Верхние улучшение по четвёртой колоне теперь на <b>${formatPercent(x-1)}</b> сильнее.`],

            ["Кузня Рыб", x=>`${toTextStyle('Рыбы','fish')} ускоряют ковку в <b>${formatMult(x)}</b>.`],
            ["Престижная Кузня", x=>`Осколки ${toTextStyle('Престижа','prestige')} ускоряют ковку в <b>${formatMult(x)}</b>.`],
            ["Магматическая Кузня", x=>`${toTextStyle('Магматические','core')} фрагменты ускоряют ковку в <b>${formatMult(x)}</b>.`],
            ["Быстрая Кузня", x=>`Ковка теперь в <b>${formatMult(x)}</b> быстрее.`],

            ["Истиная Колона 1", x=>`Вы можете покупать первую колону Древа Эволюции`],
            ["Истиная Колона 2", x=>`Вы можете покупать вторую колону Древа Эволюции`],
            ["Истиная Колона 3", x=>`Вы можете покупать третью колону Древа Эволюции`],
            ["Истиная Колона 4", x=>`Вы можете покупать четвёртую колону Древа Эволюции`],
        ],

        'evolution-goal-status': (x,y)=>x?"UNLOCKED":y?"LOCKED":"IN PROGRESS",
        'evolution-goal-ctn': [
            [
                x=>`Заработать по крайней мере <b>${format(x,0)}</b> ${toTextStyle("Магматических",'core')} фрагментов при первом заходе в ${toTextStyle("Ядро",'core')}.`,
                `Пассивно генерирует <b>100%</b> ${toTextStyle("Магматичекских",'core')} фрагментов заработанные при заходе в ${toTextStyle("Ядро",'core')}.`
            ],[
                x=>`Достичь <b>${format(x,0)}</b> всего ${toTextStyle("Магматических",'core')} фрагментов без покупки построек Сборщика ${toTextStyle("Ядра",'core')}`,
                `Сохранение Сборщика ${toTextStyle("Ядра",'core')} при ${toTextStyle('Эволюции','humanoid')}.`
            ],[
                x=>`Достичь <b>${format(x,0)}</b> всего ${toTextStyle("Магматических",'core')} фрагментов.`,
                `Улучшает формулу осколков ${toTextStyle('Престижа','prestige')} для ${toTextStyle("Магматических",'core')} фрагментов`
            ],[
                x=>`Достичь <b>${format(x,0)}</b> всего осколков ${toTextStyle('Престижов','prestige')} без генерации ${toTextStyle('Ламинарий','kelp')}.`,
                `Теперь ты начинаешь с уже достигнутым пределом глубины океанов.`,
            ],[
                x=>`Достичь <b>${format(x,0)}</b> всего осколков ${toTextStyle('Престижов','prestige')} без генерации ресурсов океанов`,
                `Изучения больше не сбрасываются при ${toTextStyle('Эволюции','humanoid')}.`,
            ],[
                x=>`Достичь <b>${format(x,0)}</b> всего осколков ${toTextStyle('Престижов','prestige')} `,
                `Дальнейшее улучшение формулы получения осколков ${toTextStyle('Престижа','prestige')}.`,
            ],[
                x=>`Достичь <b>${format(x,0)}</b> всего ${toTextStyle('Рыбов','fish')} при помощи максимум <b>10</b> радиоактивных бонусов.`,
                `Радиоактивные бонусы больше не сбрасывает улучшения связанные с ${toTextStyle('Радиацией '+icon("radioactive"),'core')}. Теперь ты будешь начинать с одним гененратором и ${toTextStyle('Радиация '+icon("radioactive"),'core')} может выходить за пределы.`,
            ],[
                x=>`Достичь <b>${format(x,0)}</b> всего ${toTextStyle('Рыбов','fish')} без радиоактивных бонусов.`,
                `Радиоактивные бонусы больше ничего не сбрасывают. Открывает Авто-Радиоактивные-Бонусы.`,
            ],[
                x=>`Достичь <b>${format(x,0)}</b> всего ${toTextStyle('Рыбов','fish')}.`,
                `Первое масштабирование Ранга ${toTextStyle('Акулы','shark')} отдаленно на <b>+5</b>.`,
            ],
        ],

        // Cultivation (Культивация)

        'ore-names': {
            'stone': "Камень",
            'coal': "Уголь",
            'iron': "Железо",
            'gold': "Золото",
            'platinum': "Платина",
            'diamond': "Алмаз",
            'bismuth': "Бисмут",
            'obsidian': "Обсидиан",
            'vibranium': "Вибраниум",
            'radium': "Радий-223",
            'uranium': "Уран-235",
            'berkelium': "Беркулий-247",
            'californium': "Калифорний-252",
            'oganesson': "Оганесон-294",
            'sharkium': "Акулиум",
        },

        'mined-resources-text': `Добытые Ресурсы`,
        'mining-tier': `Уровень Копания`,
        'next-mining-tier': `На <b>Уровне Копания</b>`,
        'mining-tier-reset': `Увеличь <b>Уровень Копания</b>, однако это ещё увеличит и множитель здоровья с количеством ресурса`,
        'mining-tier-ore-unlock': x=>`Открывает ${x}.`,
        'mining-tier-ore-generation': x=>`Из шахты исчезнит ${x}, однако он начнет пасивно генерироваться на основе скорости добычи и удачи.`,

        'mining-ascend': `Восхождение Копателя`,
        'next-mining-ascend': `На <b>Восхожденние Копания</b>`,
        'mining-ascend-reset': `Увеличивает <b>Восхождение Копания</b> ради сильных усилений, но также спровоцирует Сброс Сингулярности.`,

        'mining-tier-bonus': [
            x=>`Здоровье руды увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Камня</b> и <b>Уголя</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Железа</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Золота</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Платины</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Бисмута</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Алмаза</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Обсидиана</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемых первых десяти руд увеличено в <b>${formatPow(x)}</b>.`,
            x=>`Здоровье супер руды увеличено в<b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Радия-223</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Урана-235</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Беркулий-247</b> увеличено в <b>${formatMult(x)}</b>.`,
            x=>`Количество добываемого <b>Калифорний-252</b> увеличено в <b>${formatMult(x)}</b>.`,
        ],

        // Forge (Кузня)

        'forge': {
            'anvil': ['Уровень Наковальни','Откроет новые улучшения Кузни.'],
            'drill': ['Уровнь Дрели','Увеличивает множитель добывемого <b>Камня</b>'],
            'shard': ['Обработанный Осколок',`Увеличивает множитель осколков ${toTextStyle('Престижа','prestige')}.`],
            'tree': ['Экстроординарное Древо',`Unlocks new row of the ${toTextStyle('Evolution','humanoid')} tree.`],
            'adv_research': ['Продвинутое Изучение',`Открывает новые изучения`],
            'auto': ['Продвинутая Автоматизация',`Открывает новые элементы автоматизации`],
            'shark': ['Отдалённый Уровень Акулы',`Отдаляет третье масштабирование Уровня ${toTextStyle('Акулы','shark')}`],
            'refined_shard': ['Энергитический Осколок',`Увеличивает экспоненту осколков ${toTextStyle('Престижа','prestige')}`],
            'wormhole': ['Червоточина',`Открывает новый Ускоритель Частиц`],
            'matter': ['Конденцатор Материи',`Увеличивает генерацию ${toTextStyle('Остатка','black-hole')}.`],
        },
        'forge-progress': (x,s) => x ? `Ковка в процессе <b>${x}</b>... <b>${s}</b>` : `Кузня пустует.`,
        'forge-speed': x => `Скорость Ковки: <b>${x}</b>`,
        'forge-button': ['Отмена Ковки','Начать Ковку','Не хватает ресурсов для Ковки'],

        // Particle Accelerator (Ускоритель Частиц)

        'particle-accel-condense': x => `Сконцентрировать ${x} для:`,
        'particle-accel-boost': [
            x => `Увеличения производства ${toTextStyle('Радиации '+icon("radioactive"),'core')} в <b>${x}</b>.`,
            x => `Увеличения преодоления глубины каждого океана в <b>${x}</b>.`,
            x => `Увеличения количества <b>Камня</b> и урона копания в <b>${x}</b>.`,
            x => `Получения <b>${x}</b> больше ${toTextStyle('Человекоподобных','humanoid')} Акул.`,
            x => `Отдаления первого масштабирования реакторов ядра на <b>${x}</b>.`,
            x => `Увеличения экспоненты ELO ${toTextStyle("Акулы",'shark')} в <b>${x}</b>.`,
        ],

        // Singularity (Сингулярнось)

        'black-hole-texts': [
            `Ты получил достаточно материи для формирования черной дыры.... Но что тебе делать, пока ты находиться в плену черной дыры? Не волнуйся, здесь есть белая дыра, которая отправит тебя в другую вселенную, но там будет чуть тяжелее.`,
            `Как там бытие в паралельной вселенной? Что ж, теперь ты снова оказался в плену очередной черной дыры!`,
            `Погоди... Как ты получил так быстро получил столько ${toTextStyle("Рыбы",'fish')}, несмотря ни на что? У тебя сейчас будут серьёзные проблемы.`,
            `Серьёзно...`,
            `...`,
            `Пожалуйста, ради всего святого, остановись на этом!`,
            `ЭТО ТВОЙ ПОСЛЕДНИЙ ШАНС!`,
            `Господи.. Ладно... Твоя взяла! Вот... Без ограничений...`,
        ],
        get 'singularity-milestones'() {
            return [
                [`1 Черная Дыра`,`Открывает ${toTextStyle("Остаток",'black-hole')}. Уровень ${toTextStyle("Акулы",'shark')} усиливает генерацию ${toTextStyle("Остатка",'black-hole')}.`],
                [`2 Черных Дыры`,`При сбросе, ты начинаешь со открытыми автоматизаторами на стартовых интервалах. Теперь и Ранг ${toTextStyle("Акулы",'shark')} усиливает генерацию ${toTextStyle("Остатка",'black-hole')}.`],
                [`3 Черных Дыры`,`Интервалы автоматизаторов, пре-Культивизационные функции, 10 ${toTextStyle("Человекоподобных",'humanoid')} Акул теперь остаются при сбросе. Открывает ещё новые изучения.`],
                [`4 Черных Дыры`,`${toTextStyle("Эволюционные",'humanoid')} цель остаются при сбросе. Ускорители Частиц работают в 10 раз быстрее.`],
                [`5 Черных Дыры`,`Здоровье руды теперь масштабируется слабее. Открывает новые автоматизации.`],
                [`6 Черных Дыры`,`Двойная генерация ${toTextStyle("Остатка",'black-hole')} за каждую сформированную Черную дыру.`],
                [`7 Черных Дыры`,`Культивация при сбросе сразу открыта.`],
                [`8 Черных Дыры`,`Наказания ${toTextStyle("Черной Дыры",'black-hole')} теперь не будет, если ты сформировал 8 текущих ${toTextStyle("Черных Дыр",'black-hole')}. Анимация при формировании больше не проигрывается. Открывает новая функция.`],
            
                [`1 Всего Темной Материи`,`Теперь при сбросе сохраняются до${toTextStyle("Сингулярностные",'black-hole')} изучения, Древо ${toTextStyle("Эволюции",'humanoid')} и Кузня. Новые изучения также открываются.`],
                [`10 Всего Темной Материи`,`Автоматическая активация всех за раз Ускорителей Частиц`],
                [`${format(1e6)} Всего Темной Материи`,`Изучения <b>s1-s3</b> остаются при Жертве. Открывает новую автоматизацию. Улучшения Остатка теперь не берут Остаток при покупке.`],
                [`${format(1e12)} Всего Темной Материи`,`Открывает новая функция.`],
            ]
        },

        'remnant-upgrades': [
            [`Приветствуем`,x=>`Бонусы за Уровень ${toTextStyle("Акулы",'shark')} теперь ${x} сильнее.`],
            [`Текущий`,x=>`Базовый множитель Исследования усилен в ${x}.`],
            [`Период полураспада`,x=>`Реакторы ${toTextStyle("Ядра",'core')} теперь ${x} сильнее.`],
            [`У меня мало времени...`,x=>`Кузня работает в ${x} быстрее.`],

            [`Привет Снова`,x=>`${toTextStyle("Рыба",'fish')} самоусиливается на ${x}.`],
            [`Грандмастер`,x=>`Бонусы Ранг ${toTextStyle("Акулы",'shark')} теперь ${x} сильнее.`],
            [`Галлактический Уровень`,x=>`Первые три масштабирования Уровня ${toTextStyle("Акулы",'shark')} отдаленные на ${x}.`],
            [`Мастер Акул`,x=>`ELO ${toTextStyle("Акулы",'shark')} увеличены в ${x}.`],

            [`Глубина Без Дна`,x=>`Прохождение глубины каждого океана усилено в ${x}.`],
            [`Горячая Картошка`,x=>`Радиоактивные бонусы тепера ${x} сильнее.`],
            [`Мега Уровень`,x=>`Четвёртое Масштабирование Уровня ${toTextStyle("Акулы",'shark')} отсроченно на ${x}.`],
            [`Элитный Шахтер`,x=>`Третье Масштабирование Уровня Копания отсроченно на ${x}.`],

            [`Само-Ускоритель`,x=>`${toTextStyle("Остаток",'black-hole')} самоусиливается в ${x}.`],
            [`ВСЕМОГУЩАЯ СИЛА`,x=>`Первые 12 улучшений (кроме 4ого) ${toTextStyle("Остатка",'black-hole')} теперь ${x} более сильнее.`],
            [`Эффективность VI`,x=>`Супер урон добычи увеличен в ${x}.`],
            [`Сверхъестественная Акула`,x=>`Экспонента ${toTextStyle("Человекоподобных",'humanoid')} акул увеличено на ${x}.`],
        ],

        'solar-system-list': {
            'sun':     ["Солеце",`???`,`???`],
            'mercury': ["Меркурий",`Меркурий самая маленькая планета, но и самая близкая к Солнцу в Системе. Имя пошло от древнего Римского бога коммерции из-за того, что он движется по небу быстрее всего остальных планет. Меркурий чем-то схожь с Луной, благодаря обилию кратеров, внешнему виду и отсуствия геологической активности на протяжении миллиарда лет. В связи с отсуствием атмосферы, температура на поверхности наиболее изменчива, чем на других планетах.`,`Первые 3 масштабирования Радиоактивных Бонусов отдалены в ×10. Множитель x10 для ${toTextStyle('Наблюдений','observ')} также приложен.`],
            'venus':   ["Венера",`Венера - вторая от Солнца и шестая по размеру в Системе. Имя получено от древнего Греческого бога любви. Имеет обильную атмосферу, состоящая из более чем 96% углекислого газа. Имеет температуру поверхности 735 K (462 °C), что делает её самой горячей в Системе. Спутников не имеет. Третье по яркости на небе Земли, после Луны и Солнца.`,`По каким-то неизвестным причинам, наш Авто-${toTextStyle('Человекоподобный','humanoid')} стал работать нестабильно. Плохая новость: его уже нельзя отключить. Хорошая: теперь он пасивно генерирует 100% от текущего количества ${toTextStyle('Человекоподобных','humanoid')} акул в качестве бонусных ${toTextStyle('Человекоподобных','humanoid')} акул. Также это значительно улучшает ${toTextStyle('Человекоподобных','humanoid')} акул и отдаляет третье Масштабирование Ранга ${toTextStyle('Акул','shark')} в ×2. Несмотря на отстальные результаты, мы набрали опыта и теперь ${toTextStyle('Наблюдения','observ')} генерируется в 10 раз быстрее.`],
            'earth':   ["Земля",`???`,`???`],
            'moon':    ["Луна",`Привествуем в Солнечной системы! Чтож, ты волен путешествовать по планетам, однако перед получение сильной награды нужно провести Наблюдения. Это вынудит Сброс Сингулярности, сбросит некоторые Изученияя и Древо Эволюции (они вернутся после). Также наказание Черной дыры будет  ^0.5, почти все пост-Циливизиация функции отключены и без исследования океанов. Ты будешь генерировать ${toTextStyle('Наблюдения','observ')} на Космической базе, чьи улучшения ускорят процесс. Будет сложно, само наблюдения никак не вляет вне себя, но функции базы помогут с продвижением. Начнем с простого - со Спутника нашей Земли! Она называется Луна, но до столковения, изначально её звали Тета.`,`На Луне, Акулы нашли место рождения, невиданных до сих пор, руд. Открыто Восхождение Копания и новое ${toTextStyle('Остаточное','black-hole')} улучшение. Восходение провоцирует сброс Сингулярности взамен на мощные бонусы и разные новые руды.`],
            'mars':    ["Марс",`Марс - четвёртая от Солнца в Системе. Принадлежит к Земной группе, посему имеет твёрдую поверхность и размеры сравнимой с Землёй. Ландшафт имеет уникальное строение, включая кратеры, вукланы, долины, пустыни, и полярные ледяные шапки. Марс также имеет индивидуальную геологию, что напоминает эрозию воды и матерьялы, которые сформировались в следствиие длительного воздействия с водой. А вопросы о существования жизни на ней интересов ученых во все времена.`,`Теперь мы может "затерраформить" любую часть древа ${toTextStyle('Эволюции','humanoid')} ради новых сильных улучшений, но и цена такюе будет сильно кусаться. Вместе с этом открывается новая Автоматика и ${toTextStyle('Наблюдения','observ')} генерируются в 10 раз сильнее.`],
            'jupiter': ["Юпитер",`Юпитер - самая большая планета в Системе и пятая по одалённости от Солнца. Является газовым гигантом, чья масса в 2.47 раз больше, чем у всех остальных планет в Системе вместе взятых. О нем знали ещё с античности и упоминался в различных религиях, мифологиях и культурах. Современное имя пошло от ещё одно древнего бога Греции - на этот раз высшего бога молний. А его атмосфера известна характерным число атмосферных финоменов, по типу штормов, молний, сияний и Большим Красным Пятном - гигантским штормов, известным ещё с 17ого века.`,`Ученые нашли новые способы использования ${toTextStyle('Остатка','black-hole')} в виде новых улучшений. Также их глаз стал ещё лучше, генерация ${toTextStyle('Наблюдений','observ')} увеличен на один десяток (x10).`],
            'saturn':  ["Сатурн",`Является шестым от Солнца и вторым по размерам после Юпитера. Он имеет классификацию Газового Гиганта в связи с тем, что он состоит в основном из водорода и гелия. Имя планеты получено от Греческого бога сельского хозяйства. Также окружён кольцами, сделанными из ледяных частиц, тяжёлых элементов и пыли, и 146 известных спутников, самый большой из них является Титан. Имеет магнитное планетарное поле.`,`Обилие различных элементов, открыло новые ряд элементов в реакторе ${toTextStyle('Ядра','core')}. <i>Они остаются после сбросов Эволюции и далее, но на них не действует улучшение ${toTextStyle('Остатка','black-hole')} “Период полураспада”.</i>`],
            'uranus':  ["Уран",`???`,`???`],
            'neptune': ["Нептун",`???`,`???`],
            'pluto':   ["Плутон",`???`,`???`],
        },

        'build-rocket-part': x => `Сделать ${x} Часть Ракеты.`,
        'total-rp': "всего ЧР",
        'solar-system-lock-reward': `Ты должен завершить ${toTextStyle('наблюдение','observ')} для раскрытия награды.`,
        'solar-system-goal': x => `Цель по всего ${toTextStyle('Наблюдениям','observ')}: <h4>${x}</h4>`,
        'solar-system-status': x => [`Начать Наблюдение`,`Сдаться`,`Завершить`][x],
        'observ-progress': x => `Достигни всего <b>${x}</b> ${toTextStyle('Наблюдений','observ')}`,
        'observ-cond': `Заверши ${toTextStyle('наблюдения','observ')}`,

        'space-base-upgrades': {
            'o1': [`Космос`,x=>`${toTextStyle('Наблюдения','observ')} усиленны в ${x}.`],
            'o2': [`Косморыба`,x=>`${toTextStyle('Рыба','fish')} усиленна в ${x}.`],
            'o3': [`Престиж Космоса`,x=>`Осколки ${toTextStyle('Престижа','prestige')} усиленны в ${x}.`],
            'o4': [`Космоядро`,x=>`${toTextStyle('Магматические','core')} осколки усиленны в ${x}.`],
            
            'e1': [`Обменик Рыбы`,x=>`${toTextStyle('Наблюдения','observ')} усиленны в ${x}.`],
            'e2': [`Обменик Престижа`,x=>`${toTextStyle('Наблюдения','observ')} усиленны в ${x}.`],
            'e3': [`Обменик Ядра`,x=>`${toTextStyle('Наблюдения','observ')} усиленны в ${x}.`],
            'e4': [`Наблюдай-Резервируй`,x=>`${toTextStyle('Резерлюдения','reserv')} усиленны в ${x}.`],
            'e5': [`Универсальный Обменик`,x=>`Основа для улучшений Наблюдения типа “Обменик” увеличено на ${x}.`],

            'r1': [`Относительность`,x=>`${toTextStyle('Наблюдения','observ')} усиленны в ${x}.`],
            'r2': [`Наблюдательность`,x=>`${toTextStyle('Резерлюдения','reserv')} усиленны в ${x}.`],
            'r3': [`Косморыба II`,x=>`${toTextStyle('Рыба','fish')} усиленна в ${x}.`],
            'r4': [`Престиж Космоса II`,x=>`Осколки ${toTextStyle('Престижа','prestige')} усиленны в ${x}.`],

            't1': [`Транспорт`,x=>`${toTextStyle('Наблюдения','observ')} усиленны в ${x}.`],
            't2': [`Ревервируемость`,x=>`${toTextStyle('Резерлюдения','reserv')} усиленны в ${x}.`],
            't3': [`Относительность II`,x=>`${toTextStyle('Траектории','traject')} усиленны в ${x}.`],
            't4': [`Косморыба III`,x=>`${toTextStyle('Рыба','fish')} усиленна в ${x}.`],
        },

        // Automation (Автоматизация)

        'auto-shark-name': `Авто-Уровень ${toTextStyle("Акулы","shark")}`,
        'auto-su-name': `Авто-${toTextStyle("Рыбное","fish")} Улучшение ${toTextStyle("Акулы","shark")}`,
        'auto-spu-name': `Авто-${toTextStyle("Престижное","prestige")} Улучшение ${toTextStyle("Акулы","shark")}`,
        'auto-eu-name': `Авто-Улучшение Исследования`,
        'auto-core_reactor-name': `Авто-${toTextStyle("Ядро","core")} Реактор`,
        'auto-core_radiation-name': `Авто-${toTextStyle("Ядро","core")} Радиация`,
        'auto-radioactive_boosts-name': `Авто-Радиоактивный Бонусы`,
        'auto-mining_upgs-name': `Авто-${toTextStyle("Акула","shark")} Улучшение Копания`,
        'auto-humanoid-name': `Авто-${toTextStyle("Человекоподобная","humanoid")} Акула`,
        'auto-research-name': `Авто-До-${toTextStyle("Сингулярные","black-hole")} Изучения`,
        'auto-mining_tier-name': `Авто-Уровень Копания`,
        'auto-remnant-name': `Авто-${toTextStyle("Остаточные","black-hole")} Улучшения`,
        'auto-faith-name': `Авто-${toTextStyle("Акулаподобная","humanoid")} Вера`,

        'auto-cost': (D,cost,name) => `Уменьшить интервал на ${formatReduction(D,0)}.<br>Цена: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Интервал: ${format(a,3)}с`+(maxed ? "" :` ➜ ${format(b,3)}с`),

        // Progress


        'progress-0-text': r => `Набери ${format(r)} всего ${toTextStyle('Рыбы','fish')}`, 
        get 'progress-0-cond-text'() { return `Соверши ${toTextStyle('Престиж','prestige')}` },

        'progress-1-text': r => `Набери ${format(r)} ${toTextStyle('Престижных','prestige')} осколков, чтобы открыть Автоматизацию`,
        'progress-2-text': r => `Набери ${format(r)} ${toTextStyle('Престижных','prestige')} осколков, чтобы открыть Изучения`,
        'progress-3-text': r => `Набери ${format(r,0)} Уровень ${toTextStyle('Акулы','shark')} to unlock Exploration`,
        'progress-4-text': r => `Доберись до ${format(r)}м глубины Тихого Океана, чтобы достичь ${toTextStyle('Ядра','core')}`,

        'progress-5-text': r => `Достигни ${format(r)} всего ${toTextStyle('Престижных','prestige')} осколков`, 
        get 'progress-5-cond-text'() { return `Войди в ${toTextStyle('Ядро','core')}` },

        'progress-6-text': r => `Набери ${format(r)} ${toTextStyle('Магматических','core')} фрагментов, чтобы открыть новую фишку ${toTextStyle('Ядра','core')} `, 
        'progress-7-text': r => `Набери ${format(r,0)} Уровень ${toTextStyle('Акулы','shark')} для открытия нового Океана`, 
        'progress-8-text': r => `Набери ${format(r)} ${toTextStyle('Магматических','core')} фрагментов, чтобы открыть новую функцию ${toTextStyle('Ядра','core')}`, 
        'progress-9-text': r => `Доберись ${format(r)} всего ${toTextStyle('Рыбы','fish')} для открытия Реакторов ${toTextStyle('Ядра','core')}`, 

        'progress-10-text': r => `Набери ${format(r)} всего ${toTextStyle('Рыбы','fish')}. Снова.`, 
        get 'progress-10-cond-text'() { return `Эволюционируй своих ${toTextStyle('Акул','shark')}` },

        'progress-11-text': r => `Достигни ${format(r,0)} ${toTextStyle('Человекоподобных','humanoid')} акул для новой функции ${toTextStyle('Эволюции','humanoid')}`, 
        'progress-12-text': r => `Достигни ${format(r,0)} ${toTextStyle('Человекоподобных','humanoid')} акул для новой функции ${toTextStyle('Эволюции','humanoid')}`, 
        'progress-13-text': r => `Достигни ${format(r,0)} Уровня Копания для открытия следующего ряда Древа ${toTextStyle('Эволюции','humanoid')}`, 
        'progress-14-text': r => `Достигни ${format(r,0)} Уровня Копания, чтобы открыть новую возможость ${toTextStyle('Эволюции','humanoid')}`, 
        'progress-15-text': r => `Достигни ${format(r,0)} Уровня Копания, чтобы открыть новую возможость ${toTextStyle('Эволюции','humanoid')}`,

        'progress-16-text': r => `Заполни ${format(r,0)} ускорителей частиц`, 
        get 'progress-16-cond-text'() { return `Время сформировать ${toTextStyle('Черную Дыру','black-hole')}` },

        'progress-17-text': r => `Сформируй ${format(r,0)} ${toTextStyle('Черных Дыр','black-hole')}`,

        'progress-18-text': r => `Набери ${format(r)} всего ${toTextStyle('Рыбы','fish')}.`, 
        get 'progress-18-cond-text'() { return `${toTextStyle('Пожертвуй своих акул','black-hole')}` },

        'progress-19-text': r => `Набери ${format(r)} всего ${toTextStyle('Темной Материи','black-hole')}`,

        'maxed-progress': `${toTextStyle('Весь функционал открыт, а в Сингулярности новый контент.','traject')}`,


        // Reset (Сбросы)        
        
        get 'reset-prestige-message'() {
            return `
            <h3>${toTextStyle('Престиж','prestige')}</h3><br>
            ${toTextStyle('Престиж','prestige')} является первым слоем сброса. Он сбросит ${toTextStyle('Акулу','shark')}, улучшения для неё и ${toTextStyle('Рыбу','fish')} взамен на Осколки ${toTextStyle('Престижа','prestige')}.
            Помимо этого, после первого данного сброса, ${toTextStyle('Престиж','prestige')} откроет новые улучшения для ${toTextStyle('Акулы','shark')}.<br>
            <img src="textures/PrestigeShard.png"><br>
            Вы уверены в своем решении насчёт ${toTextStyle('Престижа','prestige')}?
            `
        },
        get 'reset-core-message'() {
            return `
            <h3>Магматическое Ядро</h3><br>
            ${toTextStyle('Ядро','core')} является вторым слоем сброса. После входа в Ядро, сбросится все, что и при ${toTextStyle('Престиже','prestige')}, а также осколки ${toTextStyle('Престижа','prestige')}, ${toTextStyle('Престижные','prestige')} улучшения, некоторые ${toTextStyle('Изучения','prestige')} и Исследования ради ${toTextStyle('Магматических','core')} фрагментов.
            Данное действия также открое Реактор ${toTextStyle('Ядра','core')}.<br>
            <img src="textures/Magmatic.png"><br>
            Готовы ли вы отправиться к ${toTextStyle('Ядру','core')}?
            `
        },
        get 'reset-humanoid-message'() {
            let e = toTextStyle('Эволюция','humanoid'), m = toTextStyle('Магматические','core')
            return `
            <h3>${e}</h3><br>
            <subtitle>“Мутация сделает акул более дикими, превращая их в Человекоподобных. Однако ценной всего, чего вы достигли до данного момента.”</subtitle>
            ${e} является третим слоев сброса. Данное действие сбросит все, как и при ${toTextStyle('Ядре','core')}, но ещё и ${m} фрагменты, ${m} реакторы, ${toTextStyle('Магматическую','core')} радиацию, Сборщик ${toTextStyle('Ядра','core')} с некоторыми ${toTextStyle('Изучениями','prestige')} с целью получения ${toTextStyle('Человекоподобных','humanoid')} акул.
            Ещё в подарок откроется Ранг и Древо ${toTextStyle('Эволюции','humanoid')}.<br>
            <img src="textures/Evolution.png"><br>
            Вы уверены, что хотите совершить ${toTextStyle('Эволюцию','humanoid')}?
            `
        },
        get 'reset-black-hole-message'() {
            let e = toTextStyle('Черная Дыра','black-hole'), c = toTextStyle('Эволюция','humanoid')
            return `
            <h3>Открытие ${toTextStyle('Черной Дыры','black-hole')}</h3><br>
            <subtitle>“Если долго всматриваться в бездну, то бездна начнет всматриваться в тебя. Тоже самое и с ${toTextStyle('Черными Дырами','black-hole')}.”</subtitle>
            Это является четвёртым и крупномасштабным сбросом.
            ${e} сбросит все, что и ${c}, но помимо этого ранг акулы, человекоподобных акул, древо и цели эволюции, акулаподобную веру, культивацию с кузней и ускорителями частиц, некоторые изучения, автоматизацию и функциональный прогресс ради новой ${toTextStyle('Черной Дыры','black-hole')}.
            Однако помните, каждая ${toTextStyle('Черной Дыра','black-hole')} снижет получаемое количество ресурсов, однако ещё и откроет полезности по типу вех.<br>
            <img src="textures/black-hole.png"><br>
            Готовы преодолеть ${toTextStyle('страх неизвестности','black-hole')} и отправиться в новую вселенную?
            `
        },
        get 'reset-sacrifice-message'() {
            let e = toTextStyle('Жертва','black-hole'), c = toTextStyle('Черная Дыра','black-hole')
            return `
            <h3>${e} должна быть принесина.</h3><br>
            <subtitle>“Надеюсь, что это не закончиться как обычно. Как по Лавкрафту.”</subtitle>
            ${toTextStyle('Жертвоприношение','black-hole')} является мини-слоем сброса.
            Отправка ваших акул на жертву, сбросит все, что и ${c} но также, текущие черные дыры (первые 7 вех остануться), остатки, остаточные улучшения и некоторые изучения взамен на ${toTextStyle('Темную Материю','black-hole')}.<br>
            <img src="textures/sacrifice.png"><br>
            Вы готовы к ${toTextStyle('Жертвоприношению','black-hole')}?
            `
        },

        // Other (Прочее)


        'scalings': {
            'shark_level' : `Уровень Акулы`,
            'shark_rank' : `Ранг Акулы`,
            'su_s3' : `Улучшение "Зубы Акулы"`,
            'su_s4' : `Улучшение "Экспонента Акулы"`,
            'su_m1' : `Улучшение "Урон Копания"`,
            'su_m3' : `Улучшение "Сжатый Камень"`,
            'su_m5' : `Улучшение "Базовая Руда"`,
            'cr_boost' : `Радиоактивный бонус`,
            'mining_tier' : `Уровень Копания`,
            'remnant_upg' : `Улучшения Остатка`,
        },
        'scaling-start': "Начинается с",
        'scaling-mode': {
            "L": x => `<b>${x}</b> линейно`,
            "D": x => `<b>${x}</b> по экспоненте`,
        },
        'scaling-info': `Масштабирование будут действовать с момента их достижения. Если что, это плохо. <b>N</b> - количество, <b>S</b> - точка старта.`,

        'upgrade-shark': x => `Повысить уровень ${toTextStyle('Акулы','shark')}<br>Цена: ${x.format(0)} ${toTextStyle('Рыб','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} к основе ${toTextStyle('Рыбы','fish')}`,
        'shark-bonus-prestige': x => `${formatMult(x)} Осколков ${toTextStyle('Престижа','prestige')}`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('Магматических','core')} фрагментов`,
        'shark-bonus-remnants': x => `+${x.format(0)} ${toTextStyle('Остатков','black-hole')}`,
        
        'shark-overpopulation': (x,y) => `Из-за сверхпопуляции ${toTextStyle('Акул','shark')} начиная с <h4>${toTextStyle(format(y),'fish')}</h4>, поедаемая ${toTextStyle('Рыба','fish')} была пониженина в <h4>${format(x,3)}√</h4>.`,

        'shark-rank-bonuses': {
            fish: x => `${formatPow(x)} ${toTextStyle('Рыбы','fish')}`,
            prestige: x => `${formatPow(x)} осколков ${toTextStyle('Престижа','prestige')}`,
            mining_damage: x => `${formatMult(x)} Урона Копания`,
            so: x => `${formatPow(x)} отсрочка сверхпопуляции ${toTextStyle('Акул','shark')}`,
            vibranium: x => `${formatMult(x)} <b>Вибраниума</b>`,
            remnants: x => `${formatMult(x)} ${toTextStyle('Остатков','black-hole')}`,
        },

        'total': "всего",
        'level': "Уровень",
        'effect': "Эффект",
        'cost': "Цена",
        'buyMax': "Купить Максимум",
        'require': "Требуется",
        'next-at': "Следующее",
        'depth': "Глубина",
        'reward': "Награда",
        'new-preset': "Новая заготовка",
        'maxed': "Максимум",
        'difficulty': "Сложность",

        'remove': "Убрать",
        'overwrite-current': "Перезаписать текущим",
        'load': "Загрузить",
        'force-load': "Принудительно загрузить",
        
        'offline-time-text': x=>`Вы были не в игре <b>${formatTime(x,0)}</b>.`,
        
        'research-afford': bool => bool ? "Купить" : "Недостаточно ресурсов",
        'research-bought': bool => bool ? `<b>Куплен</b>` : `<b>Не куплен</b>`,
        'research-pages': x => `${x} страниц`,

        'off-on': bool => bool ? "ВКЛ" : "ВЫКЛ",

        'popup-buttons': [
            ["Да","Нет"],
            ["Ок","Отмена"],
        ],

        'popup-desc' : {
            import: `Вставьте свое сохранение. ПРЕДУПРЕЖДЕНИЕ: ТЕКУЩЕЕ СОХРАНЕНИЕ БУДЕТ ПЕРЕЗАПИСАНО!`,
            wipe: `Вы уверены, что хотите стереть свои сохранения? Чтобы стереть, введите "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
            "evolution-tree-respec": `Вы уверены, что хотите сбросить Древо ${toTextStyle('Эволюции','humanoid')}? Это спровоцирует сброс ${toTextStyle('Эволюции','humanoid')}, без получения ${toTextStyle('Человекоподобных','humanoid')} акул.`,
            "evolution-tree-import": `Вставь в свое Древо Эволюции`,
        },

        'notify-desc' : {
            save: "Игра сохранена!",
            copy_to_clipboard: "Скопировано в буфер",
            forge_completed: x => `Ковка <b>${x}</b> завершина.`,
        },

        'radio-desc' : {
            'notation': ['Формат записи чисел',['Научный','Стандартный','Смешанный научный','Логарифмический']],
            'comma-format': ['Максимальное кол-во чисел в научной нотации (после е)',['3','6','9','12','15']],
            'autosave': ['Автосохранение',['Отключено','Включено']],
            'autosave-time': ['Интервал автосохранения',['15с','30с','60с','120с']],
            'offline': ['Оффлайн-прогресс',['Отключено','Включено']],
            'max-research-amt': ['Максимум изучений за страницу',['∞','15','20','25','30']],
            'visible-research': [`Показывать купленные/максимальные изучения`,["Да","Нет"]],
            'notify': ['Уведомление Вкладкой',['Выключено','Включено']],
        },

        'radio-desc-default' : ['Отключено','Включено'],

        'prompt-placeholder': "Введите текст...",

        'option-buttons-text': ["Сохранить","Экспорт через буфер обмена","Экспорт через файл","Импорт через запрос","Импорт через файл","ОЧИСТИТЬ!!!","Присоединиться к сообществу (Discord)","<span style='font-size: 13px'>Поддержать разработчика (Boosty)</span>"],

        'confirm-prestige': "Престиж",
        'confirm-core': "Вход в ядро",
        'confirm-humanoid': "Эволюция акул",
        'confirm-black-hole': "Формирование Черной Дыры",
        'confirm-sacrifice': "Жертвоприношение",
    },
}
