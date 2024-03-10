var radios = {}
var radios_config = {}

function createRadio(id, title, names=[], config={}) {
    var e = document.getElementById('radio-'+id)

    if (!e) return

    radios[id] = player.radios[id]??config.start_position??0
    if (player.radios[id] === undefined) player.radios[id] = radios[id]

    radios_config[id] = {
        length: names.length,
    }

    var width = config.width ?? 120

    e.innerHTML = `${title}<div class="input-radio-list">${names.map((x,i) => `<div class="input-radio-ctn" style="width: ${width}px" onclick="chooseRadio('${id}',${i})"><div>${x}</div></div>`).join('')}<div class='input-ratio-select' id="radio-${id}-select" style="width: ${width}px; left: ${radios[id]/names.length*100}%"></div></div>`
}

function updateRadio(id) {
    var e = document.getElementById('radio-'+id+'-select')

    if (!e) return

    e.style.left = (radios[id]/radios_config[id].length*100)+'%'
}

function chooseRadio(id,v) {
    player.radios[id] = radios[id] = v
    updateRadio(id)

    if (id == 'autosave-time') {
        clearInterval(autosave)
        autosave = setInterval(save, [15000,30000,60000,120000][player.radios[id]], true)
    }
}