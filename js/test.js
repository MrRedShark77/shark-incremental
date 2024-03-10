function onload() {
    /*
    new FontFace('graphFont', 'url(style/RobotoCondensed-VariableFont_wght.ttf)').load().then((f)=>{
        document.fonts.add(f);
        
    });
    */

    createCanvasGraph("test",{axis_name: ["Time","Value"]})

    var i = 0
    setInterval(() => {
        addGraphPlot("test", i, Decimal.pow(2,i**2))
        //addGraphPlot("test", i, 1000-Math.sin(i**0.5)*i)
        i += 1
    },100)
}