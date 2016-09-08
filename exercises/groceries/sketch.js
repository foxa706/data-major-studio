var table;

// function preload() {

//   table = loadTable("groceries.tsv", "tsv", "header");

// }

function setup() {
//use for assets to load with callback   
    createCanvas(windowWidth, windowHeight);
    //full browser window
    loadTable("groceries.tsv", "tsv", 'header', showData); 
    text('Groceries:', 20, 50 );
    textAlign(CENTER);
      
 
}

//just showing with callback
function showData(data){
  var count = data.getRowCount();
  var rowHeight = height/count;

  
  for (var i = 0; i<count; i++){
      var amount = data.getString(i, 0);
      var unit = data.getString(i, 1);
      var item = data.getString(i, 2);
      var source = data.getString(i, 3);
      
      if (source === 'market'){
          fill(0, 255, 100);
      }else{
          fill(0);
      }
    text(amount + ' ' + unit + ' ' + item + ' ' + source, width/2, rowHeight*(i+1));
  }
    
}