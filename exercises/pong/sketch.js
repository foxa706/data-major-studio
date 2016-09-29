var posX = [];
var posY = [];

var speedX = [];
var speedY = [];

function setup() {
    createCanvas(500, 500);

    for (var i = 0; i<10; i ++){
        posX[i] = random(width);
        posY[i] = random(height);
        speedX[i] = random(-10, 10);
        speedY[i] = random(-10, 10);
    }
    noStroke();
}

function draw() {
    background(0, 100, 200);
    fill(0);
    
    for(var i = 0; i<10; i ++){
        posX[i] += speedX[i];
        posY[i] += speedY[i];
        
        ellipse(posX[i], posY[i], 10, 10);
        
        if (posX[i] > 500){
            speedX[i] *= -1;
        }//right wall
        if (posX[i] < 0){
            speedX[i] *= -1;
        }
        if(posY[i] < 0 ){
            speedY[i] *= -1;
        }
    }

    
}
