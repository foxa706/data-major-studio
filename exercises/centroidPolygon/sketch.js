//https://en.wikipedia.org/wiki/Centroid

var x = [];
var y = [];
//need Cx and Cy for centroid
var cx, cy;
var a; //area of the polygon

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
        
        cx = 0; 
        cy = 0;
        a = 0;
        
        //centroid formula, will need to do a summation
        for(var i = 0; i<x.length-1; i++ ){
            //ennumerate
            cx += (x[i] + x[i+1]) * (x[i]*y[i+1] - x[i+1] * y[i]);
            cy += (y[i]+ y[i+1]) * (x[i]*y[i+1] - x[i+1] * y[i]);
            a += x[i]*y[i+1] - x[i+1] * y[i];
        }
        a = 0.5 * a;
        cx = cx / (6*a);
        cy = cy / (6*a);
        
        ellipse(cx, cy, 10, 10);
      //  console.log(cx + ' '+ cy);
    }


function mouseReleased(){
    x.push(mouseX);
    y.push(mouseY);
    
}
