var popups = []
var popupVisibled = false

/*
Popup Types:
- Normal
- Confirmation
- Prompt
*/

function createPopup(text, type="normal", options={}) {

    popups.push({
        type,
        html: text,
        ...options,
    })
    
    updatePopup()
}

function createNormalPopup(text,buttonName=lang_text('popup-buttons')[1][0],buttonFunction) {
    createPopup(text, "normal", {
        buttonName: [buttonName],
        buttonFunction: [buttonFunction],
    })
}

function createConfirmationPopup(text,acceptFunc,rejectFunc) {
    createPopup(text, "normal", {
        buttonName: lang_text('popup-buttons')[0],
        buttonFunction: [acceptFunc,rejectFunc],
    })
}

function createPromptPopup(text,acceptFunc,rejectFunc) {
    createPopup(text, "prompt", {
        buttonName: lang_text('popup-buttons')[1],
        buttonFunction: [acceptFunc,rejectFunc],
    })
}

function updatePopup() {
    var popup_el = el('popup')

    if (popups.length > 0 && !popupVisibled) {
        var p = popups[0]

        popupVisibled = true
        popup_el.style.pointerEvents = 'all'
        popup_el.style.opacity = 1
        popup_el.style.transform = 'scale(1)'

        el('popup-html').innerHTML = p.html + (p.type == 'prompt' ? '<br><textarea id="popup-input" placeholder="'+lang_text('prompt-placeholder')+'" rows="5"></textarea>' : '')
        el('popup-btns').innerHTML = p.buttonName.map((b,i) => `<button id="popup-btn${i}">${b}</button>`).join('')

        var closePopup = () => {
            popups.splice(0,1)

            popupVisibled = false
            popup_el.style.pointerEvents = 'none'
            popup_el.style.opacity = 0
            popup_el.style.transform = 'scale(1.1)'

            setTimeout(updatePopup,500)
        }

        p.buttonName.forEach((b,i) => {
            el(`popup-btn${i}`).addEventListener('click', () => {
                p.buttonFunction?.[i]?.(el("popup-input")?.value)
                closePopup()
            })
        })
    }
}