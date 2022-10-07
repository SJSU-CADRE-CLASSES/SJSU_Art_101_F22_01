let myValue = 0;

//let count = 0
function setup() {
  createCanvas(500,500);
  background(255);
  rectMode (CENTER);
    ellipseMode(CENTER);
   mic = new p5.AudioIn ();
  mic.start();
  //noStroke
  // strokeWeight (.75)
  
}

function draw() {
  background(255);
    fill(random() * 255);
  ellipse(random()*500, random()*500, 50, 50);
     
  let x = width/2 //x=250
  let y = height/3.33 //y=150
  
  faceHead();
  eyebrows();
  eyes();
  nose();
  mouth();
  body();
  pocket();  
  smileyFace();
  arms();
  hands();
  legs();
  feet();
  ellipse(mouseY, mouseX, mouseX, mouseY);
  //line(0, mouseY, 500, mouseY);
  bow();

  
//   beginShape()
//   line(195,165,305,165)
//   line(195,165,250,210)
//   line(305,165,250,210)
//   endShape()

}

function faceHead(){
 
  let x = width/2 //x=250
  let y = height/3.33 //y=150
  //face
  push()
  fill (0);  
  square(x,y,200);
  fill (228,184,139);
  ellipse(x,y,width/4.5,width/4.25);
  pop()
  
}

function bow (){
   //let x = 1;//width/2 //x=250
  //let y = 1; //height/3.33 //y=150
  push()
 
  fill (51,255,251)
  ellipse(width/2.7,height/6.25,width/33.3,height/50)
  ellipse(width/2.56, height/6.25,width/33.33,height/50)
  circle(width/2.63,height/6.25,width/50)
  pop()
  
}

function eyebrows(){
 let x = width/2 //x=250
  let y = height/3.33 //y=150
  //eyebrows
 // rotate(0)
  push()
  fill (0)
  rect(235,115,17,3)
  rect(265,115,17,3)
  pop()
}

function eyes(){
 let x = width/2 //x=250
  let y = height/3.33 //y=150
  //eyes 
  
  //outer(r,l)
  push()  
  fill (225);
  ellipse(width/2.13,height/3.85,height/40,width/30.7);
  ellipse(width/1.89,height/3.85,height/40,width/30.7);
  pop()
  
//inner
  push()
   fill (98,52,18);
  ellipse (width/2.13,height/3.77,width/100,height/100.5);
  ellipse (width/1.89,height/3.77,width/100,height/100.5);
  pop()
}

function nose(){
  let x = width/2 //x=250
  let y = height/3.33 //y=150
  //nose
 push() 
  beginShape();
  noFill ()
curveVertex(width/2, height/3.57); 
  curveVertex(width/2, height/3.44);
  curveVertex(width/2, height/3.18)
curveVertex(width/1.81, height/3.03);
endShape();
  pop()
  
}

function mouth (){
  micLevel = mic.getLevel();
 let x = width/2 //x=250
  let y = height/3.33 //y=150 
 push();
  arc (250,175,40,micLevel*1000,TWO_PI,PI,CHORD);
  pop();
}

function body(){
 let x = width/2 //x=250
  let y = height/3.33 //y=150
  push()
  fill (51,255,251)
  //fill(random(255),random(255),random(255))
  //rectMode(CENTER)
 rect(width/2,height/1.54,width/5,height/3.33)
  
  pop()
}

function pocket(){
   let x = width/2 //x=250
  let y = height/3.33 //y=150
  //pocket
push()
  fill (myValue);
  square (width/1.85,height/1.8,width/16.7);
  pop()
}

function mouseMoved(){
  
  myVvalue = myValue + 5;
  if (myValue > 255) {
    myValue = 0;
  }
  
}

function smileyFace(){
 let x = width/2 //x=250
  let y = height/3.33 //y=150
  //smileyface
 push()
  fill(51,255,251)
  noStroke()
  circle (width/1.88,height/1.81,width/166.6)
  circle (width/1.81,height/1.81,width/166.6)
  
   fill(255);
  noStroke();
  arc(271,284,10,5,TWO_PI,PI); 
pop()
}

function arms(){
   let x = width/2 //x=250
  let y = height/3.33 //y=150 
  //arms rl
 push()
  fill (0)
  rect (width/1.6,height/1.72,width/16.66,height/20); 
  rect (width/2.68,height/1.72,width/16.66,height/20);
  pop()
}

function hands(){
  let x = width/2 //x=250
  let y = height/3.33 //y=150
   //hands
  push()
  fill (228,184,139)
  ellipse(width/1.5,height/1.72,width/20,height/18.5)
  ellipse(width/3,height/1.72,width/20,height/18.5)
  pop()

}

function legs(){
let x = width/2 //x=250
  let y = height/3.33 //y=150
  //legs
push()
  fill (0)
   rect (width/1.85,height/1.2,width/18.5,height/14.3)
  rect (width/2.17,height/1.2,width/18.5,height/14.3)
  pop()
}

function feet(){
  let x = width/2 //x=250
  let y = height/3.33 //y=150
   //feet
 push()
  fill (228,184,139)
  ellipse(width/1.85,height/1.125,width/20)
  ellipse(width/2.17,height/1.125,width/20)
  pop()
  
}  