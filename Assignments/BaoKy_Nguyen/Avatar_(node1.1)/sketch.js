let count = 0;


function setup() {  
  createCanvas(400, 400);
  
}


function draw() {
  background(244,172,183);
 
  let x = width/2;
  let y = height*3/10;
  
 flower(2);

  
  //Cup underlayer
  noStroke();
  beginShape()
  fill(254, 254, 254,250)
  vertex (width*.2,height*.3)
  vertex (width*.8,height*.3)
  vertex (width*0.7,height*1)
  vertex (width*0.3,height*1)
  endShape(close)
  
  angleMode(DEGREES)
  
  //milktea
  beginShape()
  fill(176, 137, 104)
  vertex (width*.243,height*.6)
  vertex (width*.75,height*.65)
  vertex (width*0.7,height*1)
  vertex (width*0.3,height*1)
  endShape(close)
  
  //tea top  
  ellipse(160,240,125.5,80);
   fill(254,254,254,250)
   ellipse(249,245,106,85);
  
  
  //Straw
  push();
  translate(width/2,height/2);
  rotate(22)
  translate(width*-.5,height*-.5);
  fill(123, 44, 191,240)
  rect(250, 10, 30, 400);
  fill(130, 50, 200)
  ellipse(265,10,30,5);
  pop();
  
 
  Bubbles();
  
 cupUpperlayer();
  
   if (count<360){
    count++
  }else if (count==360)(count=0);
  
  eyes(1.3);
 
  
}
function flower(rot){
//rotating flower(symbolize sun)
  push();
  rotate(count*rot)
   fill(255, 12, 29)
  ellipse(32,55,66,66);
  ellipse(69,1,66,66);
  ellipse(-19,40,66,66);
  ellipse(-23,-24,66,66);
  ellipse(30,-38,66,66);
  //orange circle
  fill(255, 165, 0)
  ellipse(20,1,66,66);
  pop();
}
  
function Bubbles(){
 //bubbles
  fill(111, 75, 53)
  circle(140,250,20)
  circle(250,300,25)
  circle(160,360,25)
  circle(180,330,20)
  circle(220,380,25)
}

function cupUpperlayer(){
  //Cup upperlayer
  push();
  stroke(3,40)
  beginShape()
  fill(254, 254, 254,70)
  vertex (width*.2,height*.3)
  vertex (width*.8,height*.3)
  vertex (width*0.7,height*1)
  vertex (width*0.3,height*1)
  endShape(close)
  pop(); 
}

;
function eyes(ji){
  //eyes
  push();  
  fill(0)
  circle(width*.39,height*.55,65)
  circle(width*.62,height*.55,65)
  push();
  square(width*.42, height*.65, 65);
  pop();
  fill(255)
  circle(width*.39,height*.55,35)
  circle(width*.62,height*.55,35)
  
//  translate(width/2,height/2);
//   scale(ji)
// translate(width*-.5,height*-.5);
  
//    fill(0)
//   circle(width*.39,height*.55,65)
//   circle(width*.62,height*.55,65)
//   push();
//   square(width*.42, height*.65, 65);
//   pop();
//   fill(255)
//   circle(width*.39,height*.55,35)
//   circle(width*.62,height*.55,35)
//   pop();
}









