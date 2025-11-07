document.addEventListener("keydown",e=>{
    var keyCode = e.keyCode;

    console.log(keyCode)

    // Popup
    var p = popups[0]
    if (p && popupVisibled) {
        if (keyCode == 13) el("popup-btn0")?.click();
        if (keyCode == 27) el("popup-btn1")?.click();
    } else {
        // Shark Level
        if (keyCode == 83) upgradeShark();

        // Prestige
        if (keyCode == 80) doReset(player.omni.active ? "transcend" : 'prestige');

        // Core
        if (keyCode == 67) doReset(player.omni.active ? "reaction" : 'core');

        // Evolution
        if (!e.shiftKey && keyCode == 69) doReset(player.omni.active ? "runeification" : 'humanoid');

        if (tmp.ss_difficulty) {
            if (keyCode == 82) doReset('reserv');
            if (keyCode == 84) doReset('traject');
            if (e.shiftKey && keyCode == 69) EXPERIMENT_TIER.reset();
        }
    }
})