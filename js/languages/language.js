var lang_data = {}
const LANGUAGES = {}

function setupLanguage(lang=player.language) {
    lang_data = LANGUAGES.EN.text // Set Main Language

    if (lang !== 'EN' && lang in LANGUAGES) {
        lang_data = deepCheckLanguage(lang_data,LANGUAGES[lang].text)

        /*
        for (let [id,v] of Object.entries(c_lang_data)) {
            if (Object.getOwnPropertyDescriptor(lang_data, id).get) {
                Object.defineProperty(lang_data, id, {
                    get: Object.getOwnPropertyDescriptor(c_lang_data, id).get
                })
            } else lang_data[id] = v
        }
        */
    }
}

function changeLanguage(lang) {
    if (lang == player.language) return
    player.language = lang
    
    save()
    location.reload()
}

function setupLanguageHTML() {
    let h = ""

    for (let [id,v] of Object.entries(LANGUAGES)) {
        h += `
        <button class="lang-button" onclick="changeLanguage('${id}')">
            <img src="textures/${v.icon}.png">
            <div>${v.inter_name}</div>
        </button>
        `
    }

    el("languages").innerHTML = h
}

function deepCheckLanguage(obj,data) {
    for (let [i,v] of Object.entries(data)) {
        // console.log(i,v)
        if (Object.getOwnPropertyDescriptor(obj, i).get) {
            Object.defineProperty(obj, i, {
                get: Object.getOwnPropertyDescriptor(data, i).get
            })
        } else obj[i] = typeof obj[i] == 'object' ? deepCheckLanguage(obj[i],v) : v
    }
    return obj
}

function lang_text(id,...arg) {
    const L = lang_data[id]
    return typeof L == 'function' ? L(...arg) : L
}