let o= 200;

function setup() {
  createCanvas(400, 400);
 
}


function draw() {
  //background(150,100,120);
  
  noStroke();
  
  fill(133, 167, 236);
  triangle(100,70,100,180,300,210);
  triangle(300,70,150,180,300,210);
  //ears
  
  fill(160,60,60);
  ellipse(250,310,40,60);
  ellipse(150,310,40,60);
  //legs
  
   
  fill(133, 167, 236);
  ellipse(320,230,30,80);
  ellipse(80,230,30,80);

  //wings
 
  fill(133, 167, 236);
  ellipse(o,o,260,260);
  //face


  fill(255,255,255);
  ellipse(250,170,70,70);
  ellipse(150,170,70,70);
  
  fill(60,60,60);
  ellipse(250,170,55,55);
  ellipse(150,170,55,55);
  //eyes
  
  fill(203, 244, 255);
  rect(120,200,160,125,60,60,120); 
  
  fill(160,60,60);
  triangle(180,180,220,180,200,210);
  //nose
  
  



  
}



