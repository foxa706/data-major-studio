function setup() {
  createCanvas(200, 200);
  background(255);
  noStroke();

}

function draw() {
  var c = random(256);
  fill(50, c, c);
  ellipse(100, 100, 200, 200);
  // for (var i = 0; i<20; i++){
  //   stroke(0, 100);
  //   fill(0, 0+(i*10), 100+(i*10));
  //   ellipse(mouseX, mouseY, 300/i, 300/i); 
  // }
}