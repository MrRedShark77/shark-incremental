var offline = {
    active: false,
    nosave: false,
    speed: 10,
    elapsed: 0,
}

function offlineDone() {
    offline.active = false
    el("app").style.display = ""
    el("offline").style.display = "none"
    el("offline-done").style.display = "none"
}

function simulateOffline(time) {
    if (offline.active) return

    offline.nosave = offline.active = true
    offline.speed = Math.max(12,time/5)
    offline.elapsed = 0

    el("app").style.display = "none"
    el("offline").style.display = ""
    resetCanvasGraph("offline")

    el("offline-time").innerHTML = `You have been offline for <b>${formatTime(time,0)}</b>.`

    graphs.offline.max_graph_x = time
    addGraphPlot("offline",0,player.fish,false)

    date = Date.now()
    var tt = 0

    var update_graph = setInterval(updateCanvasGraph,1000/FPS,"offline")
    var ol = setInterval(()=>{
        updateTemp()
        var diff = (Date.now()-date)/1000
        var dt = Math.min(time,offline.elapsed+diff*offline.speed)-offline.elapsed
        tt += diff
        // console.log(diff,dt,tt)
        calc(dt)
        offline.elapsed += dt

        date = Date.now()
        addGraphPlot("offline",offline.elapsed,player.fish,false)

        if (offline.elapsed >= time) {
            updateCanvasGraph("offline")
            offline.nosave = false
            clearInterval(ol)
            clearInterval(update_graph)
            el("offline-done").style.display = ""
        }
    }, 1000/FPS)
}