function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    var json = 'colors.json';
    loadJSON(json, drawColor);
    textAlign(CENTER);
}

function drawColor(data) {
    fill(data.yellow)
    textSize(100);
    text(data.yellow, windowWidth/2 ,windowHeight/2);

}
