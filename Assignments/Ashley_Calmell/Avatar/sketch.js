let mic;
let count= 0;
let Tri=[];

 
function setup() {
  angleMode(DEGREES);
let cnv = createCanvas(500, 500);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  
  for(let i=0;i<= 40; i++){
     Tri[i]= new flower(random(width),random(height),random(360),random(10)/10,random(1,20)/10);
  }
  //_xpos,_ypos,_rot,_size,_speed
    
}

function draw() {
  if (mouseIsPressed === true) {
    background(250, 145, 169);
  } else {
    background(252, 121, 134);
  }
  
  angleMode(DEGREES);
  noStroke ();

  HelloKit();
  hat();
  mel();
  hair();
  skin();
  eyeball();
  Eyeballs();
  extra();
  MelNose();
  eyelinermouth();
    
  for(let i= 0; i< Tri.length; i++){
    Tri[i].display();
  Tri[i].move();
    
  }
  
 // Tri[0].display();
  //Tri[0].move();
 // Tri[1].display();
 // Tri[1].move();
 // Tri[2].display();
 // Tri[2].move();
  //Tri[3].display();
  //Tri[3].move();
 
}


function HelloKit(){
    push();  
  fill(252)
  ellipse(frameCount % width, 252, 90);//head
  triangle(frameCount%width, 230, frameCount%width+40,
           190,frameCount%width + 38, 240);//right ear
  triangle(frameCount%width-5, 216, frameCount%width-40, 190,
           frameCount%width - 35, 230);//left ear
    fill(224, 0, 37);
   triangle(frameCount%width+20, 216, frameCount%width+10, 190,
            frameCount%width-10, 220);//left bow
   ellipse(frameCount%width+21,217,20,20);//bowdot
    triangle(frameCount% width+40, 245, frameCount%width+50, 210,
             frameCount%width+25, 219);//right bow
    fill(0);
    ellipse(frameCount%width-25,253,10,12)//left eye
    ellipse(frameCount%width+25,253,10,12)//right eye
    fill(214, 197, 2);
    ellipse(frameCount%width,260,10,7)//nose    
    pop();
  }
function mel(){
   push();
   fill(252, 252, 252)//melody white face
   ellipse(width *.46,height*.20, width*.30,height* .10 )//melody face shape
   pop();
}
function hat(){
    translate(width/20,height/20);
  push();
  fill(255, 194, 232)//hat color
  circle(width*.46,width*.36,width*.50);//hat
  ellipse(width*.64, width*.40,width*.15,width*.50);//right ear
  ellipse(width*.28,width*.40, width*.15,width*.50);//left ear
  pop();
  }
function hair(){
  push();
   fill(110, 74, 31)//hair color 
  rect(width*.28, width*.21, width*.36, width*.40, 20);//hair back
  pop();
  }
function skin(){
  push();
  fill(255, 213, 161)//skin color 
  circle(width*.46, width*.40, width*.34);//head
  square(width*.25, width*.64, 180, 20);//body
  rect(200, 270, 55, 50);//neck
  rect(302, 310, 45, 150, 20);//right arm
  circle(325, 290, 50);//hand
  ellipse(316, 265, 12, 55);//left finger
  ellipse(330, 265, 12, 55);//right finger
  pop();
  }
function eyeball(){
  push();
    fill(247, 248, 250)//eyeball white
  ellipse(190,190,50,50)//left eye
    ellipse(270,190,50,50)//right eye
  pop();
  }
function Eyeballs(){
   
  posX= constrain(mouseX,180,200);//moving in eye
  posY= constrain(mouseY,180,200);//moving in eye
  push();
  fill(18, 56, 14);//iris color
   ellipse(posX,posY,30);
   ellipse(posX+80,posY,30);
  pop();
 }//rotate
function extra(){
  push();
  fill(255, 213, 161)//skin color  
  rect(165, 165, 50, 17);//eyelid
rect(245, 165, 50, 17);//right eyelid
  pop();
  
  push();
  fill(223, 247, 225)//shirt color
  rect(170,350,130,170)//shirt
  pop();
  
  
  push();
    fill(110, 74, 31)//hair color
 rect(245,160,50,8,20)//right eyebrow 
  rect(165,160,50,8,20)//left eyebrow
  triangle(130, 210, 158, 120, 229, 107);//left bang
    triangle(329, 207, 320, 120, 220, 107);//right bang
  rect(160, 285, 35, 80);//left hair strand
  rect(260, 285, 35, 80);//left hair strand
   pop();
  
  push();
   fill(0)//melody eyeballs
 ellipse(187, 95, 10, 15);//melody left eye
  ellipse(270, 95, 10, 15);//melody right eye
  pop();
  }
function MelNose(){
  push();
  fill(247, 205, 77)//melody nose
   ellipse(230, 100, 15, 10);//nose
  pop();
  }
function eyelinermouth(){
  push();
  fill(0)//eyeliner
  rect(165,180,50,6,20)//left eyeliner
  rect(245,180,50,6,20)//right eyeliner
  triangle(166, 185, 200, 180, 140, 178);//left wing
  triangle(295, 186, 270, 180, 320, 178);//right wing
   micLevel = mic.getLevel();
  let y = width*.53 - micLevel * height
  triangle(width*.50,width*.47,width*.43,width*.47,width*.46,y);//mouth
  pop();
  }//mic



