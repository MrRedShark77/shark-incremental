document.addEventListener("keydown",e=>{
    var keyCode = e.keyCode;

    console.log(keyCode)

    // Shark Level
    if (keyCode == 83) upgradeShark()

    // Prestige
    if (keyCode == 80) doReset('prestige')

    // Core
    if (keyCode == 67) doReset('core')
})