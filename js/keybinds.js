document.addEventListener("keydown",e=>{
    var keyCode = e.keyCode;

    // console.log(keyCode)

    // Shark Level
    if (keyCode == 83) upgradeShark()

    // Prestige
    if (keyCode == 80) doReset('prestige')

    // Core
    if (keyCode == 67) doReset('core')

    // Evolution
    if (keyCode == 69) doReset('humanoid')

    // Popup
    var p = popups[0]
    if (p && popupVisibled) {
        if (keyCode == 13) el("popup-btn0")?.click()
        if (keyCode == 27) el("popup-btn1")?.click()
    }
})