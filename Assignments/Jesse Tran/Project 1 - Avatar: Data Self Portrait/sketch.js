var firstBallSize = 50;
var secondBall = 30;
var thirdBall = 80;

let count = 0;

let test = [];

let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start(); 
  
  test[1] = new SummonCircles(width/2, height/2, random(1));
  test[2] = new SummonCircles(3, 3, random(1.5));
}

function draw() {
  micLevel = mic.getLevel();
  
  // New BG
  if(mouseIsPressed){
    count++;
  }
  if(count > 20){
    background('rgba(10,122,122,0.01)');
  
  test[0] = new SummonCircles(random(width),random(height),micLevel);
  
  //test[1] = new SummonCircles(width/2, height/2, mic.getLevel());
  
  test[0].display();
  test[1].display();
  test[1].move();
  test[2].display();
  test[2].move();
  }
  else{
    fullPortrait();
  head(random(10));
  console.log(micLevel); 
  star(micLevel);
  crossHairs();
  }
  }

function body(){
  // Body
  noStroke()
  fill(207,166,136);
  rect(170,210,60,50); // Neck
  fill(random(255),random(255),random(255));
  rect(150,260,100,200); // Inner Shirt
  }

function backGroundBalls(){
  // Green Ball Background
  fill(0,255,150);
  ellipse(width/2,height/2, secondBall, secondBall); 
  secondBall = secondBall - .5;
  
  // White Ball Background
  fill(255,255,255);
  ellipse(width/2, height/2, thirdBall, thirdBall); 
  thirdBall = thirdBall - .5;
  }

function outterBody(){
  // Outter Body
  fill(255,255,255);
  rect(125,250,50,200);
  rect(225,250,50,200);
  rect(80,280,50,150);// Left Arm
  rect(270,280,50,150);// Right Arm
    
  }

function head(size){
  // Background Hair
  fill(0,0,0);
  triangle(125,225,200,200,175,130);
  triangle(275,225,200,200,225,130);
  rect(140,165,20,30);
  rect(240,165,20,30);
  
  // Head 
  fill(222,193,151);
  ellipse(200,150,125,125);
  triangle(158,195,242,195,200,250); // Chin
  triangle(159,195,200,250,158,225); // Left Jaw
  triangle(241,195,200,250,241,225); // right Jaw
  
  // Glasses
  fill(0,0,0)
  rect(145,150,45,25); // Left Lens
  rect(210,150,45,25); // Right Lens
  rect(190,152,20,3); // Bridge
  
  // Nose
  fill(196,170,132);
  triangle(190,180,210,180,200,170);
  
  // Eye Brows 
  fill(0,0,0);
  rect(150,145,35,2); // Left Brow
  rect(215,145,35,2); // Right Brow
  
  // Eye
  fill(255,0,0);
  ellipse(233,164,size,size);
  
  // Mouth
  fill(217,137,137);
  triangle(180,210,220,210,200,200);
  
  // Hair
  fill(40,40,40);
  triangle(150,100,160,145,190,100);
  triangle(150,100,190,145,210,100);
  triangle(180,100,210,145,240,100);
  triangle(210,100,240,145,250,100);
  
  triangle(200,80,120,150,120,200);
  triangle(200,80,280,150,280,200);
  
  triangle(200,80,135,100,120,200);
  triangle(200,80,265,100,280,200);
  
  triangle(170,80,230,80,200,135);
  }

function crossHairs(){
  // Crosshair code
  stroke(0);
  line(mouseX - 40, mouseY, mouseX - 10, mouseY); // Left   
  line(mouseX, mouseY - 10, mouseX, mouseY - 40); // Up
  line(mouseX + 10, mouseY, mouseX + 40, mouseY); // Right  
  line(mouseX, mouseY + 10, mouseX, mouseY + 40); // Down
  noStroke(0);
  
  if (mouseIsPressed){
    fill(255, 10, 10); 
    noStroke(); 
    ellipse(mouseX, mouseY, 15, 15);
  }
  
  if(thirdBall < -470){
    firstBallSize = 30;
    secondBall = 10;
    thirdBall = 10;
  }
  }
  
function fullPortrait(){
  background('rgba(160,255,150,0.01)');
    
  // Black Ball Background
  ellipse(width/2, height/2, firstBallSize, firstBallSize); 
  firstBallSize = firstBallSize - 1;
  
  // Body
  noStroke()
  fill(207,166,136);
  rect(170,210,60,50); // Neck
  fill(random(0),random(255),random(255));
  rect(150,260,100,200); // Inner Shirt
  
  // Green Ball Background
  fill(0,255,150);
  ellipse(width/2,height/2, secondBall, secondBall); 
  secondBall = secondBall - .5;
  
  // White Ball Background
  fill(255,255,255);
  ellipse(width/2, height/2, thirdBall, thirdBall); 
  thirdBall = thirdBall - .5;
  
  // Outter Body
  fill(255,255,255);
  rect(125,250,50,200);
  rect(225,250,50,200);
  rect(80,280,50,150);// Left Arm
  rect(270,280,50,150);// Right Arm
  
  // Background Hair
  fill(0,0,0);
  triangle(125,225,200,200,175,130);
  triangle(275,225,200,200,225,130);
  rect(140,165,20,30);
  rect(240,165,20,30);
  
  // Head 
  fill(222,193,151);
  ellipse(200,150,125,125);
  triangle(158,195,242,195,200,250); // Chin
  triangle(159,195,200,250,158,225); // Left Jaw
  triangle(241,195,200,250,241,225); // right Jaw
  
  // Glasses
  fill(0,0,0)
  rect(145,150,45,25); // Left Lens
  rect(210,150,45,25); // Right Lens
  rect(190,152,20,3); // Bridge
  
  // Nose
  fill(196,170,132);
  triangle(190,180,210,180,200,170);
  
  // Eye Brows 
  fill(0,0,0);
  rect(150,145,35,2); // Left Brow
  rect(215,145,35,2); // Right Brow
  
  // Eye
  fill(255,0,0);
  ellipse(233,164,5,5);
  
  // Mouth
  fill(217,137,137);
  triangle(180,210,220,210,200,200);
  
  // Hair
  fill(40,40,40);
  triangle(150,100,160,145,190,100);
  triangle(150,100,190,145,210,100);
  triangle(180,100,210,145,240,100);
  triangle(210,100,240,145,250,100);
  
  triangle(200,80,120,150,120,200);
  triangle(200,80,280,150,280,200);
  
  triangle(200,80,135,100,120,200);
  triangle(200,80,265,100,280,200);
  
  triangle(170,80,230,80,200,135);
  
  if(thirdBall < -470){
    firstBallSize = 30;
    secondBall = 10;
    thirdBall = 10;
  }
  
}

function star(micInput){
  ellipse(random(400),random(400),micInput*500,micInput*500); 
}