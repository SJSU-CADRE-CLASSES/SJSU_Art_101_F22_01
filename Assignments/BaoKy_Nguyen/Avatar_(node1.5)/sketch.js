let mic;
let count = 0;
let myMap = 0;
let circleChange = false;
let scaleChange = false;
let colorChange = false;

let ball = [];

let colorful = ["#cdb4db","#ffc8dd","#8BC34A", "#f4a261", "#bde0fe", "#ffc8dd","#ffb4a2","#bbd0ff", "#d0f4de" ];

let eyecolor = ["#030303","#EDF8E1", "#FAEDE2", "#FFFFFF" ];

function setup(){   
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  

  for (let i = 0; i <= 20; i++){  
   ball[i] = new Ball
   (random(width), random(height),random(4,10),random(10,40));
     }
 // xpos, ypos, speed, size
 
}

function draw() {
  background(244,172,183);
 
  let x = width/2;
  let y = height*3/10;
  
  if (count<360){
    count++
  }else if (count==360)(count=0);

  for( let i = 0; i < ball.length; i++ ){
   ball[i].display();
   ball[i].move();
  }

//cursor following
  push();
  fill("#bde0fe")
  ellipse(mouseX, mouseY, 25)
  pop(close);
  
  
//flower1
  push();
  scale(0.5);
  translate(width*1.8, height/2.4)
  flower(3);
  pop();
  
  //flower2
  push();
  scale(0.9);
  translate(width*0.1, height*0.8);
  flower(4);
  pop();
  
  //flower3
  push();
 scale(0.7);
  translate(width*0.3, height*0.1);
  flower(2);
  pop();
  
    //flower4
  push();
 scale(0.4);
  translate(width*1.3, height*0.6);
  flower(7);
  pop();
  
  
  //flower4
  push();
  scale(0.8);
  translate(width*0.9,height*1.1);
  flower(2);
  pop();
 
  Cupunderlayer();
  
  angleMode(DEGREES)
  
  milktea();
  teatop();
  straw();
  Bubbles();
    if(circleChange== true){ circle(width/1.9,height/1.2,25)
      circle(width/1.6,height/1,20)
      circle(width/2.6,height/1.3,30)
      circle(width/2.8,height/1.03,20)
     }
  
  cupUpperlayer();
  eyes(1.3);
  mouth();
  
  myMap = map(mouseX,0,width,0,-10);
  
}
function mousePressed(){
   
   if(mouseX>width*0.5 &&
      mouseX<width *0.7 && 
      mouseY>height*0.2 && 
      mouseY<height*0.8){
   console.log("mouse!");  
   } 
   else if (mouseX<width*0.3||
             mouseX>width*0.9){
        circleChange = !circleChange;    
       scaleChange = !scaleChange;
     colorChange =!colorChange;
              }

 } 
function mouth (){
  push();
  micLevel = mic.getLevel();
  let m = micLevel;
  fill('rgba(278,180,180,0.8)');
  ellipse(width/2, height*0.70, m*600,m*400);
  pop();
}
function flower(rot){
 if (colorChange == true){
  push();
  rotate(count*rot)
   fill(255, 12, 29)
  ellipse(32,55,66,66);
  ellipse(67,3,66,66);
  ellipse(-19,40,66,66);
  ellipse(-24,-24,66,66);
  ellipse(30,-38,66,66);
  //orange circle
  fill(255, 165, 0)
  ellipse(18,4,70,70);
  pop();   
 } 
}
function milktea(){
    //milktea
  beginShape()
  fill(176, 137, 104)
  vertex (width*0.243,height*0.6)
  vertex (width*0.75,height*0.65)
  vertex (width*0.7,height*1)
  vertex (width*0.3,height*1)
  endShape(close)
}
function teatop(){
    //tea top  
  ellipse(160,240,125.5,80);
   fill(254,254,254,250)
   ellipse(249,245,106,85);
} 
function straw (){
   //Straw
  push();
  translate(width/2,height/2);
  rotate(22)
  rotate(myMap)
  translate(width*-0.5,height*-0.5);
  fill(123, 44, 191,240)
  rect(250, 10, 30, 400);
  fill(130, 50, 200)
  ellipse(265,10,30,5);
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
function Cupunderlayer(){
   //Cup underlayer
  noStroke();
  beginShape()
  fill(254, 254, 254,250)
  vertex (width*0.2,height*0.3)
  vertex (width*0.8,height*0.3)
  vertex (width*0.7,height*1)
  vertex (width*0.3,height*1)
  endShape(close)
}
function cupUpperlayer(){
  //Cup upperlayer
  push();
  stroke(3,40)
  beginShape()
  fill(254, 254, 254,70)
  vertex (width*0.2,height*0.3)
  vertex (width*0.8,height*0.3)
  vertex (width*0.7,height*1)
  vertex (width*0.3,height*1)
  endShape(close)
  pop(); 
}
function eyes(){
  //eyes
  push();  
  fill(0)
  circle(width*0.39,height*0.55,65)
  circle(width*0.62,height*0.55,65)
 if(scaleChange == false){ 
  fill(random(eyecolor))
  circle(width*0.39,height*0.55,35)
  circle(width*0.62,height*0.55,35)
 } 
if(scaleChange == true){
 scale(0.97) 
  fill(255)
  circle(width*0.39,height*0.55,35)
  circle(width*0.62,height*0.55,35) 
  pop();
} 
} 