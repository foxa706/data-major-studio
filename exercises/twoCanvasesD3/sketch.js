function setup(){
  loadTable('LaborInNonAgricultSector.tsv', 'tsv', "header", showData);
}

function showData(data){
  var min = 10000000;
  var max = 0;
  
  var count = data.getRowCount();
  console.log("number of rows: " + count);
  for(var row = 0; row<count; row++){
    //now go through the colums to reach the specific one
    for(var col = 3; col<26; col++){
      var value = float(data.getString(row, col));
      console.log(value);
      if(min > value){
        //looks at the data and then keeps bumping it down to the abs min
        min = value;
      }
    } if (max < value){
      max = value;
    }
    console.log("min= " + min + "max= " + max);

  }
}

// canvas c1
var c1 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 300);
  }

  p.draw = function() {
    p.background (128, 0, 0);
    p.ellipse(canvas2.mouseX, canvas2.mouseY, 30, 30);
  }
};

// create second sketch
var c2 = function(p) {

  p.setup = function() {
    p.createCanvas(400, 300);
  }

  p.draw = function() {
    p.background(0, 128, 128);
    p.ellipse(canvas1.mouseX, canvas1.mouseY, 30, 30);
  }
  
  p.mousePressed = function() {
      p.rect(canvas1.mouseX, canvas2.mouseY, 50, 50)
  }
};

// start canvases
var canvas1 = new p5(c1);
var canvas2 = new p5(c2);