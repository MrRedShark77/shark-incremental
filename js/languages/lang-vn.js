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

        'core-name': "Miếng Mắc Ma",
        'core-costName': 'Miếng ' + toTextStyle('Mắc Ma','core'),

        'curr-top-0-req': x => `Chạm tới tổng cộng <b>${format(x)}</b> con ${toTextStyle('Cá','fish')}`, 
        'curr-top-0-reset': x => `Làm uy tín để nhận <b>${x.format(0)}</b> Mãnh ${toTextStyle('Prestige','prestige')}`,

        'curr-top-1-req': x => `Chạm tới tổng cộng <b>${format(x)}</b> Mãnh ${toTextStyle('Prestige','prestige')}`, 
        'curr-top-1-reset': x => `Vào lõi để nhận <b>${x.format(0)}</b> Miếng ${toTextStyle('Mắc Ma','core')}`,

        // Tabs

        'tab-shark': toTextStyle('Cá Mập','shark'),
        'tab-options': "Cài Đặt",
        'tab-auto': "Tự Động",
        'tab-research': toTextStyle('Nghiên Cứu','prestige'),
        'tab-explore': "Cuộc thám hiểm",
        'tab-core': toTextStyle('Lõi','core'),
        'tab-core-reactor': "Lò phản ứng " + toTextStyle('Lõi','core'),

        // Elements

        'fish-div': `${toTextStyle('Cá Mập','shark')} của bạn đã ăn <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> con cá.`,
        'shark-stats': `Thông số của ${toTextStyle('Cá Mập','shark')}<br>Level: <h4 id="shark-level">???</h4><br>Rank: <h4 id="shark-tier">???</h4>`,

        'option-title-1': "Cài đặt chính",
        'option-title-2': "Kí hiệu",
        'option-title-3': "Yêu cầu xác nhận",
        'option-title-4': "Ngôn ngữ",

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

        'su-p1-req': "Lần Prestige đầu tiên",
        'su-p1-name': 'Siêu Sức Mạnh Cá Mập',
        'su-p1-desc': `Tăng lượng ${toTextStyle('Cá','fish')} đã ăn lên <b>×3</b> mỗi level.`,

        'su-p2-req': "Lần Prestige đầu tiên",
        'su-p2-name': 'Tăng Điểm Uy Tín',
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
        nhưng sẽ reset từ ${toTextStyle("Prestige",'prestige')} trở xuống, reset Mãnh ${toTextStyle("Prestige",'prestige')} và các nâng cấp ${toTextStyle("Prestife",'prestige')} của bạn.
        Mở khóa các nâng cấp ${toTextStyle("Cá Mập",'shark')}.`,

        'research-p4-name': "Prestife Tốt Hơn",
        'research-p4-desc': `Cải thiện một xíu về công thức số lượng mãnh ${toTextStyle("Prestige",'prestige')} nhận được.`,

        'research-p5-name': "Siêu Sức Mạnh",
        'research-p5-desc': `'Siêu Sức Mạnh Cá Mập' mạnh hơn <b>1%</b> cho mỗi Level ${toTextStyle("Cá Mập",'shark')}, bắt đầu ở 100.`,

        'research-p6-name': "Siêu Cá Mập Mở Rộng",
        'research-p6-desc': `'Cá Mập Mở Rộng' mạnh gấp <b>hai lần</b>.`,

        'research-p7-name': "Tài Nguyên I Tốt Hơn",
        'research-p7-desc': `Hiệu ứng của ${toTextStyle("San Hô",'coral')} và ${toTextStyle("Đá",'ice')} tốt hơn.`,

        'research-e1-name': "Sự Hiệp Lực Đại Dương I",
        'research-e1-desc': `${toTextStyle("Muối",'salt')} làm tăng số lượng sản sinh ${toTextStyle("San Hô",'coral')}.`,

        'research-e2-name': "Sự Hiệp Lực Đại Dương II",
        'research-e2-desc': `${toTextStyle("Tuyết Nén",'snow')} làm tăng số lượng sản sinh ${toTextStyle("Đá",'ice')}.`,

        'research-c1-name': "Nghiên Cứu C-Keeper",
        'research-c1-desc': `Giữ ${toTextStyle("Nghiên Cứu",'prestige')} khi bước vào ${toTextStyle('Lõi','core')}.`,

        'research-c2-name': "Cuộc Thám Hiểm C-Keeper",
        'research-c2-desc': `Giữ đại dương <b>X</b> đã mở khóa đầu tiên và độ sâu của chúng khi bước vào ${toTextStyle('Lõi','core')}.`,

        'research-c3-name': "Sự Ảnh Hưởng Của Neon I",
        'research-c3-desc': `<b>Neon</b> giờ ảnh hưởng đến 'Răng Cá Mập', 'Lũy'Thừa Cá Mập', và 'Cá Mập Mở Rộng'.`,

        'research-c4-name': "Kẽm Tốt Hơn",
        'research-c4-desc': `Hiệu ứng của <b>Kẽm</b> mạnh gấp <b>hai lần</b>.`,

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

        'maxed-progress': "Các tính năng đã được mở khóa!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestige','prestige'), s = toTextStyle('Cá Mập','shark'), f = toTextStyle('Cá','fish')
            return `
            <h3>${p}</h3><br>
            ${p} là tầng reset đầu tiên. Làm uy tín reset các nâng cấp ${s}, ${s}, và ${f} để nhận mãnh ${p}.
            Lần ${p} đầu tiên mở khóa các nâng cấp ${s} mới.<br>
            <img src="textures/PrestigeShard.png"><br>
            Bạn có chắc chắn rằng bạn muốn làm uy tín không?
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

        'level': "Level",
        'effect': "Hiệu ứng",
        'cost': "Giá",
        'buyMax': "Mua tất cả",
        'require': "Yêu cầu",
        'next-at': "Tiếp theo ở",
        'depth': "Độ sâu",

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

        'option-buttons-text': ["Lưu","Xuất vào bộ nhớ tạm","Xuất dưới dạng tệp tin","Nhập dưới dạng kí tự","Nhập từ tệp tin","XÓA DỮ LIỆU!!!"],

        'confirm-prestige': "Làm Uy tín",
        'confirm-core': "Vào lõi",
    },
}