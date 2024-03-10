var graphs = {};

function createCanvasGraph(el_id, config={}) {
    var e = document.getElementById(el_id+'-graph');
    if (!e) return
    graphs[el_id] = {
        canvas: e,
        ctx: e.getContext('2d'),
        // plots: new Array(201).fill().map((x,i)=>[i/100,(Math.sin(i*3*Math.PI/100)+1)/2]),

        plots: [
            /*
            [0,42],
            [1,74],
            [3,1132],
            [4,412],
            [7,748],
            
            [8,157],
            */
        ],

        axis_name: config.axis_name ?? ["X","Y"],
        color: config.color ?? "#888",
    }
    updateCanvasGraph(el_id)
}

function resetCanvasGraph(el_id) {
    graphs[el_id].plots = []
    updateCanvasGraph(el_id)
}

function makeAxisFromMinMax(n_min,n_max,n_log10) {
    var pow10 = Decimal.pow(10,n_log10), n_floor, n_ceil, n_grid

    // console.log(n_min,n_max,n_log10)

    if (n_min == n_max) {
        n_floor = Decimal.floor(n_min)
        n_ceil = Decimal.ceil(n_max)

        n_grid = [n_floor]
    }
    else {
        var jump = n_log10 == 0 ? E(1) : n_max.div(pow10).ceil().sub(n_min.div(pow10).floor()).mul(pow10).div(10)
        n_floor = n_min.div(jump).floor().mul(jump)
        n_ceil = n_max.div(jump).ceil().mul(jump)
        //console.log(n_min.format(),n_max.format(),n_floor.format(),n_ceil.format(),jump.format(),Math.round(n_ceil.sub(n_floor).div(jump).toNumber()))
        n_grid = new Array(Math.round(n_ceil.sub(n_floor).div(jump).toNumber())+1).fill().map((x,i) => jump.mul(i).add(n_floor))
        n_grid[0] = n_min, n_grid[n_grid.length-1] = n_max
    }

    // console.log(n_min,n_max)

    return {
        floor: n_min,
        ceil: n_max,
        length: n_grid.length,
        distance: n_max.sub(n_min),
        grid: n_grid,
        time: n_ceil == n_floor ? [0.5] : n_grid.map(g => g.sub(n_min).div(n_max.sub(n_min)).toNumber()),
    }
}

function checkFalseOoMs(n_min,n_max,n_oom) {
    var n_tetr = Decimal.tetrate(10,n_oom-1)
    return Decimal.max(n_max,n_tetr).iteratedlog(10,n_oom).sub(Decimal.max(n_min,n_tetr).iteratedlog(10,n_oom)).lt(10)
}

function getDataFromPlot(graph={},plot=[]) {
    if (plot.length == 0) plot = [[0,0]]

    var x_min, x_max, y_min, y_max, x_oom, y_oom, x_graph_max = graph.max_graph_x ?? 1, y_graph_max = graph.max_graph_y ?? 1

    plot.forEach((p,i) => {
        if (i == 0) {
            x_min = x_max = p[0]
            y_min = y_max = p[1]
        } else {
            x_min = Decimal.min(p[0],x_min)
            x_max = Decimal.max(p[0],x_max)
            y_min = Decimal.min(p[1],y_min)
            y_max = Decimal.max(p[1],y_max)
        }
    })

    x_oom = Decimal.slog(Decimal.max(x_max,x_graph_max),10).max(1).sub(1).floor().toNumber(), y_oom = Decimal.slog(Decimal.max(y_max,y_graph_max),10).max(1).sub(1).floor().toNumber()

    if (x_oom > 0 && checkFalseOoMs(x_min,x_max,x_oom)) x_oom--
    if (y_oom > 0 && checkFalseOoMs(y_min,y_max,y_oom)) y_oom--

    x_tetr = Decimal.tetrate(10,x_oom-1), y_tetr = Decimal.tetrate(10,y_oom-1)

    plot = plot.map(p => [Decimal.max(p[0],x_tetr).iteratedlog(10,x_oom),Decimal.max(p[1],y_tetr).iteratedlog(10,y_oom)])
    x_graph_max = Decimal.max(x_graph_max,x_tetr).iteratedlog(10,x_oom).max(1)
    y_graph_max = Decimal.max(y_graph_max,y_tetr).iteratedlog(10,y_oom).max(1)

    // console.log(plot)
    
    plot.forEach((p,i) => {
        if (i == 0) {
            x_min = x_max = p[0]
            y_min = y_max = p[1]
        } else {
            x_min = Decimal.min(p[0],x_min)
            x_max = Decimal.max(p[0],x_max).max(x_graph_max)
            y_min = Decimal.min(p[1],y_min)
            y_max = Decimal.max(p[1],y_max).max(y_graph_max)
        }
    })

    var x_log10 = Decimal.floor(Decimal.log10(Decimal.max(1,x_max))), y_log10 = Decimal.floor(Decimal.log10(Decimal.max(1,y_max)))
    var x_graph_log10 = Decimal.min(x_log10,Decimal.floor(Decimal.log10(Decimal.max(x_max.sub(x_min),0)))).toNumber(), y_graph_log10 = Decimal.min(y_log10,Decimal.floor(Decimal.log10(Decimal.max(y_max.sub(y_min),0)))).toNumber()
    
    var x_axis = makeAxisFromMinMax(x_min,x_max,x_graph_log10),
    y_axis = makeAxisFromMinMax(y_min,y_max,y_graph_log10)
    // console.log(x_axis,y_axis,y_graph_log10)
    return {
        x_oom,
        y_oom,
        x_axis,
        y_axis,
        time: plot.length == 1 ? [[0.5,0.5]] : plot.map(p => [p[0].sub(x_axis.floor).div(x_axis.distance),p[1].sub(y_axis.floor).div(y_axis.distance)]),
    }
}

function drawRotatedText(context,text,x,y,deg) {
    context.save();
    context.translate(x,y);
    context.rotate(Math.PI/180*deg);
    context.translate(-x,-y);
    context.fillText(text, x, y);
    context.restore();
}

function updateCanvasGraph(el_id) {
    var graph = graphs[el_id], e = graph.canvas
    if (!e) return
    var ctx = graph.ctx, plots = graph.plots, data = getDataFromPlot(graph,plots)

    // console.log(data.time)

    ctx.clearRect(0, 0, e.width, e.height);

    //ctx.fillColor = '#000'
    //ctx.fillRect(100,10,530,390)

    // Layer #1: Draw X-axis & Y-axis lines & levels

    var xt = 520, yt = 380
    ctx.lineWidth = 4; ctx.strokeStyle = '#333';
    ctx.fillStyle = '#fff'; ctx.textAlign = "right"; ctx.textBaseline = 'middle'; ctx.font = "14px Courier";

    data.y_axis.time.forEach((g,i)=> {
        let t = 400 - yt * g

        ctx.beginPath()
        ctx.moveTo(200, t)
        ctx.lineTo(790, t)
        ctx.stroke()

        ctx.fillText(format(data.y_axis.grid[i],1,12,"sc"), 200, t); //data.y_axis.grid[i]
    })

    ctx.fillText((data.x_oom > 0 ? `OoMs${data.x_oom > 1 ? "^" + format(data.x_oom,0,12,"sc") : ""} of ` : "") + graph.axis_name[0], 187, 450);

    data.x_axis.time.forEach((g,i) => {
        let t = 260 + xt * g

        ctx.beginPath()
        ctx.moveTo(t, 10)
        ctx.lineTo(t, 460)
        ctx.stroke()

        drawRotatedText(ctx,format(data.x_axis.grid[i],1,12,"sc"),t,460,-45) //data.x_axis.grid[i]
    })

    ctx.fillText((data.y_oom > 0 ? `OoMs${data.y_oom > 1 ? "^" + format(data.y_oom,0,12,"sc") : ""} of ` : "") + graph.axis_name[1], 214, 478);

    // Layer #2: Draw Graph

    ctx.lineWidth = 4; ctx.strokeStyle = ctx.fillStyle = graph.color;

    ctx.beginPath()
    if (data.time.length > 1) {

        data.time.forEach((g,i) => {
            if (i==0) ctx.moveTo(260 + xt * g[0], 400 - yt * g[1])
            else ctx.lineTo(260 + xt * g[0], 400 - yt * g[1])
        })

        ctx.stroke()
    } else {
        var g = data.time[0]

        ctx.arc(260 + xt * g[0], 400 - yt * g[1], 5, 0, 2 * Math.PI)

        ctx.fill()
    }

    // Layer #3: Draw Ox, Oy

    ctx.lineWidth = 4; ctx.strokeStyle = '#fff'

    ctx.beginPath()
    ctx.moveTo(190, 450)
    ctx.lineTo(790, 450)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(210, 10)
    ctx.lineTo(210, 470)
    ctx.stroke()
}

function addGraphPlot(el_id,x,y,update=true) {
    graphs[el_id].plots.push([x,y])
    if (update) updateCanvasGraph(el_id)
}