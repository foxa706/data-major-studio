var data;

function preload(){
    data = loadJSON("dogs.json");  
}

function setup() {
    createCanvas(300, 300);
    // dog = {
    //     breed: 'Westie',
    //     col: color(255)
    // }
    textAlign(CENTER);

}


function draw() {
    background(0);
    // fill(dog.col);
    for(var i = 0; i<data.dogs.length; i++){
        fill(data.dogs[i].r, data.dogs[i].g, data.dogs[i].b);
        text(data.dogs[i].breed, width/2, height/data.dogs.length*(i+.5));
    }
}s

