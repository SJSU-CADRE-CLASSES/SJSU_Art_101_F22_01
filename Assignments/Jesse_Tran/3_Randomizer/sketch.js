var img; 

let colors = [];
let num;
let bgColor = 155;
let txtSize = 20; 
let animating = false; 

function preload() {
  // preload() runs once, it may make you wait
    img = loadImage('assets/Saintquartz.png');
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  colors[0] = new FavColor("Jesse", 'green');
  colors[1] = new FavColor("Ella", 'blue');
  colors[2] = new FavColor("Steven", 'red');
  colors[3] = new FavColor("Jacob", 'purple');
  colors[4] = new FavColor("Davis", 'black');
  colors[5] = new FavColor("Brandon", 'gold');
  
  background(bgColor);
  textSize(txtSize);
  text("CLICK to randomize", width/2.3, height/2); 

  // Changes the background after 1 second. 1000 = 1 second. 1000ms
  //setTimeout(changeBackGround, 1000); 
}

function draw() {
  //background(bgColor);
  //colors[0].display();
  //colors[0].getName();
  //colors[0].getColor();
  
  if(animating == true){
    fill(random(255), random(255), random(255));
    size = random(50, 500); 
    image(img, random(width)-100, random(height)-100, size, size); 
  }
}

function mousePressed() {
  animating = true; 
 
  setTimeout(Randomizer, 3000); 
}

function Randomizer(){
  animating = false; 

  background(random(bgColor), random(bgColor), random(bgColor));
  num = random(colors.length);
  colors[int(num)].display();
  colors[int(num)].whoWhos();
}

//function changeBackGround(){
//   background(random(255), random(255), random(255)); 
//}