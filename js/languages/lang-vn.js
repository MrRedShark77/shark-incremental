// This is main language file! It's Vietnamese!

LANGUAGES.VN = {
    name: "Vietnamese",
    inter_name: "Tiếng Việt",
    icon: "lang-vn",

    text: {
        // Currencies

        'fish-name': "Cá",
        'fish-costName': toTextStyle('Cá','fish'),

        'prestige-name': "Mãnh Prestige",
        'prestige-costName': "Mãnh " + toTextStyle('Prestige','prestige'),

        'coral-name': "San Hô",
        'coral-costName': toTextStyle('San Hô','coral'),

        'ice-name': "Đá",
        'ice-costName': toTextStyle('Đá','ice'),

        'salt-name': "Muối",
        'salt-costName': toTextStyle('Muối','salt'),

        'snow-name': "Tuyết Nén",
        'snow-costName': toTextStyle('Tuyết Nén','snow'),
    
        'kelp-name': "Tảo Bẹ",
        'kelp-costName': toTextStyle('Tảo Bẹ','kelp'),

        'core-name': "Miếng Mắc Ma",
        'core-costName': 'Miếng ' + toTextStyle('Mắc Ma','core'),

        'curr-top-0-req': x => `Chạm tới tổng cộng <b>${format(x)}</b> con ${toTextStyle('Cá','fish')}`, 
        'curr-top-0-reset': x => `Làm uy tín để nhận <b>${x.format(0)}</b> Mãnh ${toTextStyle('Prestige','prestige')}`,

        'curr-top-1-req': x => `Chạm tới tổng cộng <b>${format(x)}</b> Mãnh ${toTextStyle('Prestige','prestige')}`, 
        'curr-top-1-reset': x => `Vào lõi để nhận <b>${x.format(0)}</b> Miếng ${toTextStyle('Mắc Ma','core')}`,

        'radioactive-name': toTextStyle('Bức Xạ '+icon("radioactive"),'core'),

        // Tabs

        'tab-shark': toTextStyle('Cá Mập','shark'),
        'tab-options': "Cài Đặt",
        'tab-auto': "Tự Động",
        'tab-research': toTextStyle('Nghiên Cứu','prestige'),
        'tab-explore': "Cuộc thám hiểm",
        'tab-core': toTextStyle('Lõi','core'),
        'tab-core-reactor': "Lò phản ứng " + toTextStyle('Lõi','core'),
        'tab-core-radiation': "Bức Xạ "+toTextStyle('Lõi','core'),

        // Elements

        'fish-div': `${toTextStyle('Cá Mập','shark')} của bạn đã ăn <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> con cá.`,
        'shark-stats': `Thông số của ${toTextStyle('Cá Mập','shark')}<br>Level: <h4 id="shark-level">???</h4><br>Rank: <h4 id="shark-tier">???</h4>`,

        'option-title-1': "Cài đặt chính",
        'option-title-2': "Kí hiệu",
        'option-title-3': "Yêu cầu xác nhận",
        'option-title-4': "Ngôn ngữ",

        'offline-speed': "Tăng tốc tiến trình ngoại tuyến",
        'offline-done': "Xong",

        'radioactive-div': `${toTextStyle('Lõi','core')} đã sản xuất <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('Lõi','core'), rf = toTextStyle('Cá '+icon("radioactive"),'fish')
            return `
            <summary>Cuộc Thí Nghiệm Bức Xạ ${c}</summary>
            Thí nghiệm với bức xạ lõi reset từ ${toTextStyle('Lõi','core')} trở xuống.
            Trong cuộc thí nghiệm, tất cả các lò phản ứng lõi không hoạt động, và căn bậc ba lượng ${toTextStyle('Cá','fish')}, mãnh ${toTextStyle('Prestige','prestige')}, và tài nguyên đầu tiên của bốn đại dương nhận được.
            Cuộc thí nghiệm buộc ${toTextStyle('Cá Mập','shark')} của bạn ăn ${rf} phóng xạ.<br>
            Nâng cấp với ${rf} phóng xạ để sản sinh thêm ${toTextStyle('Bức Xạ '+icon("radioactive"),'core')}, cái mà cho bạn thêm boost.
            `
        },
        'radioboost-div': `Bạn có <h3 id="radioactive-boost">0</h3> boost phóng xạ.`,

        // Upgrades

        'su-s1-req': "Level 3",
        'su-s1-name': 'Sức Mạnh Cá Mập',
        'su-s1-desc': `Tăng lượng ${toTextStyle('Cá','fish')} đã ăn lên <b>+1</b> mỗi level.`,

        'su-s2-req': "Level 7",
        'su-s2-name': 'Độ Nhanh Nhẹn của Cá Mập',
        'su-s2-desc': `Tăng cơ số phần thưởng ${toTextStyle('Cá','fish')} của level ${toTextStyle('Cá Mập','shark')} lên <b>+1</b> mỗi level.`,

        'su-s3-req': "Level 15",
        'su-s3-name': 'Răng Cá Mập',
        'su-s3-desc': `Tăng lũy thừa của nâng cấp ${toTextStyle('Cá Mập','shark')} đầu tiên lên <b>+50%</b> mỗi level.`,

        'su-s4-req': "Level 38",
        'su-s4-name': 'Lũy thừa Cá Mập',
        'su-s4-desc': `Tăng luỹ thừa của ${toTextStyle('Cá','fish')} lên <b>+1%</b> mỗi level.`,

        'su-s5-req': "Level 640",
        'su-s5-name': 'Cá Mập Phóng Xạ',
        'su-s5-desc': `Tăng lượng sản xuất ${toTextStyle('Bức Xạ '+icon("radioactive"),'core')} lên <b>x2</b> mỗi level.`,

        'su-p1-req': "Lần Prestige đầu tiên",
        'su-p1-name': 'Siêu Sức Mạnh Cá Mập',
        'su-p1-desc': `Tăng lượng ${toTextStyle('Cá','fish')} đã ăn lên <b>×3</b> mỗi level.`,

        'su-p2-req': "Lần Prestige đầu tiên",
        'su-p2-name': 'Tăng Prestige',
        'su-p2-desc': `Tăng lượng ${toTextStyle('Cá','fish')} đã ăn lên <b>×lg(${toTextStyle('Cá','fish')})</b> mỗi level.`,

        'su-p3-name': 'Cá Mập Mở Rộng',
        'su-p3-desc': `Làm chậm sự mở rộng của level ${toTextStyle('Cá Mập','shark')} đầu tiên lên <b>+1</b> mỗi level.`,

        // Researches

        'research-p1-name': "Độ Nhanh Nhẹn của Prestige",
        'research-p1-desc': `'Độ Nhanh Nhẹn của Cá Mập' bây giờ ảnh hưởng tới cơ số phần thưởng Mãnh ${toTextStyle('Prestige','prestige')} của Level ${toTextStyle("Cá Mập",'shark')} ở một tỉ lệ nhỏ.`,

        'research-p2-name': "Nâng Cấp Cá Mập EL",
        'research-p2-desc': `Nâng cấp ${toTextStyle("Cá",'fish')} của ${toTextStyle("Cá Mập",'shark')} không còn chi tiêu lượng ${toTextStyle("Cá",'fish')} nữa.`,

        'research-p3-name': "Level Cá Mập Được Nâng Cấp",
        'research-p3-desc': `Giảm cơ số của mức yêu cầu level ${toTextStyle("Cá Mập",'shark')} xuống <b>1</b>,
        nhưng sẽ reset từ ${toTextStyle("Prestige",'prestige')} trở xuống, reset Mãnh ${toTextStyle("Prestige",'prestige')} và các nâng cấp ${toTextStyle("Prestige",'prestige')} của bạn.
        Mở khóa các nâng cấp ${toTextStyle("Cá Mập",'shark')}.`,

        'research-p4-name': "Prestige Tốt Hơn",
        'research-p4-desc': `Cải thiện một xíu về công thức số lượng mãnh ${toTextStyle("Prestige",'prestige')} nhận được.`,

        'research-p5-name': "Siêu Sức Mạnh",
        'research-p5-desc': `'Siêu Sức Mạnh Cá Mập' mạnh hơn <b>1%</b> cho mỗi Level ${toTextStyle("Cá Mập",'shark')}, bắt đầu ở 100.`,

        'research-p6-name': "Siêu Cá Mập Mở Rộng",
        'research-p6-desc': `'Cá Mập Mở Rộng' mạnh gấp <b>hai lần</b>.`,

        'research-p7-name': "Tài Nguyên I Tốt Hơn",
        'research-p7-desc': `Hiệu ứng của ${toTextStyle("San Hô",'coral')} và ${toTextStyle("Đá",'ice')} tốt hơn.`,

        'research-p8-name': "Level Cá Mập Được Nâng Cấp Xa Hơn",
        'research-p8-desc': `Giảm cơ số yêu cầu của level ${toTextStyle("Cá Mập",'shark')} xa hơn xuống 1.`,

        'research-e1-name': "Sự Hiệp Lực Đại Dương I",
        'research-e1-desc': `${toTextStyle("Muối",'salt')} làm tăng số lượng sản sinh ${toTextStyle("San Hô",'coral')}.`,

        'research-e2-name': "Sự Hiệp Lực Đại Dương II",
        'research-e2-desc': `${toTextStyle("Tuyết Nén",'snow')} làm tăng số lượng sản sinh ${toTextStyle("Đá",'ice')}.`,

        'research-e3-name': "Tự Động Thám Hiểm",
        'research-e3-desc': `Tự động cập nhật cơ số cao nhất đại dương <b>X</b> đầu tiên mà không cần khám phá.`,

        'research-e4-name': "Sự Oxy Hóa của Tảo Bẹ",
        'research-e4-desc': `<b>Oxy</b> giờ ảnh hưởng đến sản xuất ${toTextStyle("Tảo Bẹ",'kelp')} ở một tỉ lệ nhỏ.`,

        'research-c1-name': "Nghiên Cứu C-Keeper",
        'research-c1-desc': `Giữ ${toTextStyle("Nghiên Cứu",'prestige')} khi bước vào ${toTextStyle('Lõi','core')}.`,

        'research-c2-name': "Cuộc Thám Hiểm C-Keeper",
        'research-c2-desc': `Giữ đại dương <b>X</b> đã mở khóa đầu tiên và độ sâu của chúng khi bước vào ${toTextStyle('Lõi','core')}.`,

        'research-c3-name': "Sự Ảnh Hưởng Của Neon I",
        'research-c3-desc': `<b>Neon</b> giờ ảnh hưởng đến 'Răng Cá Mập', 'Lũy'Thừa Cá Mập', và 'Cá Mập Mở Rộng'.`,

        'research-c4-name': "Kẽm Tốt Hơn",
        'research-c4-desc': `Hiệu ứng của <b>Kẽm</b> mạnh gấp <b>hai lần</b>.`,

        'research-c5-name': "Boost Lõi Thêm",
        'research-c5-desc': `Boost đầu tiên của bức xạ lõi giờ ảnh hưởng đến boost con ${toTextStyle('Cá','fish')} của lò phản ứng lõi ở một tỉ lệ nhỏ.`,

        'research-c6-name': "Giảm Lượng Bức Xạ",
        'research-c6-desc': `Mãnh ${toTextStyle('Mắc Ma','core')} giảm giới hạn bức xạ ở một tỉ lệ nhỏ.`,

        'research-c7-name': "Răng Cá Mập Lớn Hơn",
        'research-c7-desc': `Hiệu ứng của 'Răng Cá Mập' được nâng lên <b>^2.5</b>.`,

        // Exploration

        'explore-while': `Trong khi khám phá`,
        'explore-inside': (a,b,c)=>`Cơ số: ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Chạm tới ${format(c,0)} con ${toTextStyle("Cá",'fish')} cao nhất.`,
        'explore-outside': x=>`Cơ số hiện tại của bạn: ${x.format()}/s.<br>Khám phá đại dương!`,

        'explore-next': x=> `Đại Dương tiếp theo ở Level${toTextStyle("Cá Mập",'shark')} <h3>${format(x,0)}</h3>.`,

        'explore-doubler-1': x=>`Gấp đôi ${x} nhận được.`,
        'explore-doubler-2': `Gấp đôi tiến trình độ sâu nhận được.`,

        'explore-0-name': `Thái Bình Dương`,
        'explore-0-desc': `Căn bậc 2 lượng ${toTextStyle('Cá','fish')} nhận được.`,
        'explore-0-milestone': [
            `Nâng mãnh ${toTextStyle('Prestige','prestige')} nhận được lên ^1.05.`,
            `Tăng tài nguyên và tiến trình độ sâu lên 25% nhân lên mỗi căn bậc 2 của level ${toTextStyle('Cá Mập','shark')}.`,
            `Level ${toTextStyle('Cá Mập','shark')} sẽ không còn chi tiêu lượng ${toTextStyle('Cá','fish')} nữa.`,
            `Nâng lượng ${toTextStyle('Cá','fish')} lên ^1.05.`,
            `Mở khóa ${toTextStyle('Lõi','core')}.`,
        ],

        'explore-1-name': `Bắc Băng Dương`,
        'explore-1-desc': `Reset mãnh ${toTextStyle("Prestige",'prestige')} và các nâng cấp ${toTextStyle("Prestige",'prestige')} của bạn. Căn bậc 2 lượng mãnh ${toTextStyle('Prestige','prestige')} nhận được.`,
        'explore-1-milestone': [
            `Mở khóa tự động nâng cấp ${toTextStyle('Prestige','prestige')} của ${toTextStyle('Cá Mập','shark')}.`,
            `Tăng tài nguyên và tiến trình độ sâu lên 25% nhân lên mỗi căn bậc 2 của level ${toTextStyle('Cá Mập','shark')}.`,
            `Các nâng cấp ${toTextStyle('Prestige','prestige')} của ${toTextStyle('Cá Mập','shark')} sẽ không còn chi tiêu mãnh ${toTextStyle('Prestige','prestige')} nữa.`,
            `Tự động sản xuất 100% lượng mãnh ${toTextStyle('Prestige','prestige')} nhận được trong ${toTextStyle('Prestige','prestige')} mỗi giây.`,
        ],

        'explore-2-name': `Đại Tây Dương`,
        'explore-2-desc': `Reset mãnh ${toTextStyle("Prestige",'prestige')} và các nâng cấp ${toTextStyle("Prestige",'prestige')} của bạn. Level ${toTextStyle('Cá Mập','shark')} mở rộng mạnh gấp 10 lần.` ,
        'explore-2-milestone': [
            `Sự mở rộng của 'Răng Cá Mập' và 'Lũy Thừa Cá Mập' yếu hơn một tí.`,
            `Tăng tài nguyên và tiến trình độ sâu lên 25% nhân lên mỗi căn bậc 2 của level ${toTextStyle('Cá Mập','shark')}.`,
            `Sự mở rộng của level ${toTextStyle('Cá Mập','shark')} đầu tiên bắt đầu +1 sau mỗi 500m độ sâu.`,
            `Hiệu ứng của ${toTextStyle("Muối",'salt')} mạnh hơn 50%.`,
        ],

        'explore-3-name': `Nam Đại Dương`,
        'explore-3-desc': `Reset mãnh ${toTextStyle("Prestige",'prestige')} và các nâng cấp ${toTextStyle("Prestige",'prestige')}. Bạn không thể mua các nâng cấp ${toTextStyle('Cá','fish')} của ${toTextStyle('Cá Mập','shark')} & ${toTextStyle('Prestige','prestige')}.`,
        'explore-3-milestone': [
            `Tăng cơ số của các cuộc thám hiểm lên 10 lần.`,
            `Tăng tài nguyên và tiến trình độ sâu lên 25% nhân lên mỗi căn bậc 2 của level ${toTextStyle('Cá Mập','shark')}.`,
            `Hiệu ứng của ${toTextStyle('Tuyết Nén','snow')} mạnh hơn 50%.`,
        ],

        'explore-4-name': `Ấn Độ Dương`,
        'explore-4-desc': `Bạn bị kẹt trong hoạt động của bốn đại dương đầu tiên, và lũy thừa ${toTextStyle('Cá','fish')} của bạn thì giảm xuống ^0.75.`,
        'explore-4-milestone': [
            `Giảm giới hạn bức xạ lõi xuống /1,000.`,
            `Tăng tài nguyên và tiến trình độ sâu lên 25% nhân lên mỗi căn bậc 2 của level ${toTextStyle('Cá Mập','shark')}.`,
            `Các lò phản ứng lõi mở rộng +5 sau.`,
            `Cải thiện ${toTextStyle('Tảo Bẹ','kelp')} tốt hơn.`,
        ],

        // Core Reactor

        'core-0-name': `Sắt`,
        'core-0-desc': `${toTextStyle("Cá",'fish')} nâng chính nó lên dựa vào cấp của <b>Sắt</b>.`,

        'core-1-name': `Kẽm`,
        'core-1-desc': `Mãnh ${toTextStyle("Prestige",'prestige')} nâng cơ số của chúng lên dựa vào cấp của <b>Kẽm</b>.`,

        'core-2-name': `Oxy`,
        'core-2-desc': `Sản phẩm của các tài nguyên đầu tiên của bốn đại dương tăng sự sản xuất của chúng dựa vào cấp của <b>Oxy</b>.`,

        'core-3-name': `Neon`,
        'core-3-desc': `Level ${toTextStyle("Cá Mập",'shark')} giảm mức yêu cầu của nó dựa vào cấp của <b>Neon</b>.`,

        'core-bonus': x => `Sản phẩm của các lò phản ứng lõi sẽ tăng lượng ${toTextStyle("Cá",'fish')} lên <h4>${formatMult(x)}</h4>.`,

        // Core Radiation

        'cr-start': x=>x?"Dừng cuộc thí nghiệm.":"Bắt đầu cuộc thí nghiệm.",

        'upgrade-cr': (gen,cost)=>`
        Nâng cấp sản xuất ${toTextStyle('Bức Xạ '+icon("radioactive"),'core')}.<br>
        Sản xuất <b>${format(gen,0)}</b> mỗi giây.<br>
        Giá: ${format(cost,0)} con ${toTextStyle('Cá '+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`Reset ${toTextStyle('Bức Xạ '+icon("radioactive"),'core')}, nhưng tăng giới hạn của nó lên <b>${formatMult(inc,0)}</b>, và thỉnh thoảng thêm một boost mới hoặc nâng cấp boost. Bạn cần chạm tới mức giới hạn để reset.`,

        'cr-boosts': [
            x=>`Cung cấp các lò phản ứng lõi ở hàng ngang đầu tiên thêm <h4>+${format(x)}</h4>.`,
            x=>`Tăng mãnh ${toTextStyle('Mắc Ma','core')} lên <h4>${formatMult(x)}</h4>.`,
            x=>`Bốn nâng cấp ${toTextStyle('Cá','fish')} của ${toTextStyle('Cá Mập','Shark')} đầu tiên mạnh hơn <h4>${formatPercent(x.sub(1))}</h4>.`,
            x=>`Sự mở rộng của level ${toTextStyle('Cá Mập','shark')} thứ hai bị trễ lên <h4>+${format(x)}</h4>.`,
            x=>`Tăng cơ số phần thưởng mãnh ${toTextStyle('Mắc Ma','core')} của level ${toTextStyle('Cá Mập','shark')} lên <h4>+${format(x,3)}</h4>.`,
        ],

        // Automation

        'auto-shark-name': `Tự động level ${toTextStyle("Cá Mập","shark")}`,
        'auto-su-name': `Tự động nâng cấp ${toTextStyle("Cá",'fish')} của ${toTextStyle("Cá Mập","shark")}`,
        'auto-spu-name': `Tự động nâng cấp ${toTextStyle("Prestige",'prestige')} của ${toTextStyle("Cá Mập","shark")}`,
        'auto-eu-name': `Tự động nâng cấp các cuộc thám hiểm`,

        'auto-cost': (D,cost,name) => `Giảm khoảng thời gian xuống ${formatReduction(D,0)}.<br>Giá: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Khoảng thời gian: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress

        'progress-0-text': r => `Chạm tới tổng cộng ${format(r)} ${toTextStyle('Cá','fish')}`, 
        get 'progress-0-cond-text'() { return `Làm một ${toTextStyle('Prestige','prestige')}` },

        'progress-1-text': r => `Chạm tới ${format(r)} mãnh ${toTextStyle('Prestige','prestige')} để mở khóa Tự Động`,
        'progress-2-text': r => `Chạm tới ${format(r)} mãnh ${toTextStyle('Prestige','prestige')} để mở khóa Nghiên Cứu`,
        'progress-3-text': r => `Chạm tới level ${toTextStyle('Cá Mập','shark')} ${format(r,0)} để mở khóa Cuộc Thám Hiểm`,
        'progress-4-text': r => `Chạm tới độ sâu ${format(r)}m của Thái Bình Dương để mở khóa ${toTextStyle('Lõi','core')}`,

        'progress-5-text': r => `Chạm tới tổng cộng ${format(r)} mãnh ${toTextStyle('Prestige','prestige')}`, 
        get 'progress-5-cond-text'() { return `Bước vào ${toTextStyle('Lõi','core')}` },

        'progress-6-text': r => `Chạm tới ${format(r)} mãnh ${toTextStyle('Mắc Ma','core')} để mở khóa tính năng lõi mới`, 

        'progress-7-text': r => `Chạm tới level ${toTextStyle('Cá Mập','shark')} ${format(r,0)} để mở khóa loại đại dương mới`,

        'maxed-progress': "Các tính năng đã được mở khóa!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestige','prestige'), s = toTextStyle('Cá Mập','shark'), f = toTextStyle('Cá','fish')
            return `
            <h3>${p}</h3><br>
            ${p} là tầng reset đầu tiên. Prestige reset các nâng cấp ${s}, ${s}, và ${f} để nhận mãnh ${p}.
            Lần ${p} đầu tiên mở khóa các nâng cấp ${s} mới.<br>
            <img src="textures/PrestigeShard.png"><br>
            Bạn có chắc chắn rằng bạn muốn prestige không?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Lõi','core'), m = toTextStyle('Mắc Ma','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>${c}</h3><br>
            ${c} là tầng reset thứ hai. Bước vào lõi reset mọi thứ mà ${p} làm, cũng như mãnh ${p}, nâng cấp ${p}, ${toTextStyle('Nghiên Cứu','prestige')} (Hầu hết là vậy), và Cuộc thám hiểm để nhận miếng ${m}.
            Nó cũng mở khóa lò phản ứng ${c}.<br>
            <img src="textures/Magmatic.png"><br>
            Bạn có chắc chắn rằng bạn muốn bước vào lõi không?
            `
        },
        
        // Other

        'upgrade-shark': x => `Nâng cấp Level ${toTextStyle('Cá Mập','shark')}<br>Giá: ${x.format(0)} con ${toTextStyle('Cá','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} cơ số của ${toTextStyle('Cá','fish')}`,
        'shark-bonus-prestige': x => `${formatMult(x)} mãnh ${toTextStyle('Prestige','prestige')}`,
        'shark-bonus-core': x => `${formatMult(x)} miếng ${toTextStyle('Mắc Ma','core')}`,
        // 'shark-bonus-rad': x => `${formatMult(x)} ${toTextStyle('Bức Xạ ' + icon("radioactive"),'core')}`,

        'level': "Level",
        'effect': "Hiệu ứng",
        'cost': "Giá",
        'buyMax': "Mua tất cả",
        'require': "Yêu cầu",
        'next-at': "Tiếp theo ở",
        'depth': "Độ sâu",

        'offline-time-text': x=>`Bạn đã off trong <b>${formatTime(x,0)}</b>.`,

        'research-afford': bool => bool ? "Mua" : "Không thể mua",
        'research-bought': bool => bool ? `<b>Đã mua</b>` : `<b>Chưa mua</b>`,

        'off-on': bool => bool ? "BẬT" : "TẮT",

        'popup-buttons': [
            ["Có","Không"],
            ["Ok","Hủy"],
        ],

        'popup-desc' : {
            import: `Dán vào trò chơi của bạn. LƯU Ý: NÓ SẼ GHI ĐÈ LÊN TRÒ CHƠI HIỆN TẠI CỦA BẠN!`,
            wipe: `Bạn có chắc chắn rằng bạn muốn xóa đi dữ liệu trò chơi của bạn không? Để xóa, nhập "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
        },

        'notify-desc' : {
            save: "Đã lưu trò chơi!",
        },

        'radio-desc' : {
            'notation': ['Định dạng kí hiệu',['Khoa học','Tiêu chuẩn','Trộn lẫn với khoa học']],
            'comma-format': ['OoM tối đa của các số sau dấu phẩy',['3','6','9','12','15']],
            'autosave': ['Tự động lưu',['Tắt','Bật']],
            'autosave-time': ['Khoảng thời gian tự động lưu',['15s','30s','60s','120s']],
            'offline': ['Tiến triển ngoại tuyến',['Tắt','Bật']],
        },

        'radio-desc-default' : ['Tắt','Bật'],

        'prompt-placeholder': "Nhập văn bản vào đây...",

        'option-buttons-text': ["Lưu","Xuất vào bộ nhớ tạm","Xuất dưới dạng tệp tin","Nhập dưới dạng kí tự","Nhập từ tệp tin","XÓA DỮ LIỆU!!!",'Tham gia vào cộng đồng (Discord)','Ủng hộ người tạo (Người ủng hộ)'],

        'confirm-prestige': "Prestige",
        'confirm-core': "Vào lõi",
    },
}