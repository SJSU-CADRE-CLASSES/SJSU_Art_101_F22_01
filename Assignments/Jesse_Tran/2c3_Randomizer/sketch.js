let colors = [];
let num;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  colors[0] = new FavColor("Jesse", 'green');
  colors[1] = new FavColor("Ella", 'blue');
  colors[2] = new FavColor("Steven", 'red');
  colors[3] = new FavColor("Jacob", 'purple');
  colors[4] = new FavColor("Davis", 'black');
  colors[5] = new FavColor("Brandon", 'gold');
  
  background(155);
  textSize(20);
  text("CLICK", width/2, height/2);
}

function draw() {
  //background(200);
  //colors[0].display();
  //colors[0].getName();
  //colors[0].getColor(); 
}

function mousePressed() {
  background(155);
  num = random(colors.length);
  colors[int(num)].display();
  colors[int(num)].whoWhos(); 
  return false;
}