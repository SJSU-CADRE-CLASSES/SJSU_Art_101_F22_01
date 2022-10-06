let mic;
//let micLevel;

function setup() {
  createCanvas(400, 400);
  
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(220,250,200);
  
  leftEye();
  rightEye();
  mouth();
  
}

function leftEye(){
  fill(random(255),random(255),random(255));
  ellipse(100,100,100,80);
  fill(20);
  ellipse(map(mouseX,0,width,50,150),map(mouseY,0,width,60,140),10,10);
}

function rightEye(){
  fill(random(255),random(255),random(255));
  ellipse(300,100,100,100);
  fill(20);
  ellipse(map(mouseX,0,width,250,350),map(mouseY,0,width,60,140),10,10)
}

function mouth(){
  //fill(random(255),random(255),random(255));
  ellipse(200,300,100,mic.getLevel()*300);
}