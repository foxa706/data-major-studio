var x = [];
var y = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    fill(0, 0, 255, 100);
}

function draw() {
        background(0, 255, 200);
        
        line(0, 0, mouseX, mouseY);
        
        rect(mouseX, mouseY, 100, 100);
        
        beginShape();
        for(var i = 0; i<x.length; i++){
            vertex(x[i], y[i]);
            text(i, x[i], y[i]);
            
        }
        endShape(CLOSE);

}

function mouseReleased(){
    x.push(mouseX);
    y.push(mouseY);
    
}
