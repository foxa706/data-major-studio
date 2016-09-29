var id;
var slider;

function setup() {
    id = select('#kafka');//.kafka if it were a class
    id.mousePressed(click);//now h1 element has become interactive, setting up a listener
    //click is our callback
    id.mouseReleased(release);
    //deliberate use of callbacks for behaviors
    slider = createSlider(0, windowWidth, 128);
    slider.position(windowWidth/2, windowHeight/2);
    slider.changed(move);
    noCanvas();
}

function draw() {

}

function click(){
    console.log('click');
    //can use css to style in js
    id.style('color', 'orange');
}

function release(){
    id.style('color', 'blue');
    id.style('font-size', '90pt');
}

function move(){
    id.position(slider.value() , windowHeight/2);
}