let mic;
let myMap = 0;
let angle = 0;

var value1 = 150;
var value2 = 26;
var value3 = 130;



function setup() {
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  
}


function draw() {
 
  noStroke();
  angleMode(DEGREES); // Change the mode to   DEGREES
 background(130);
  
   push();
fill(value1,value2,value3);
translate(50,50);
rotate(15);
beginShape();
vertex(width*-.025, width*.025);
vertex(width*0, width*.0875);
vertex(width*.025, width*.025);
vertex(width*.0875, width*0);
vertex(width*.025, width*-.02);
vertex(width*0, width*-.0875);
vertex(width*-.025, width*-.02);
vertex(width*-.0875, width*0);
endShape();
    pop();
    
  
  
   wings();
  owl();
  nose();
}
 
function mouseClicked(){
  if(value1 ==150){
    value1 =0;
    value2 =0;
    value3 =0;
  }else{value1 =150;
    value2 =26;
     value3 =130;  }
  
}
  
   function nose() {
   micLevel = mic.getLevel();
   fill(160,20,40);
   ellipse(width/2,height/2,21 - micLevel * height*.4); 
   console.log(micLevel);
   }
 
 


  
//------------------     
function owl() {
 fill(133, 167, 236);
triangle(width*.25,width*.2,width*.25,width*.4,width*.5,width*.4); triangle(width*.75,width*.2,width*.5,width*.4,width*.75,width*.4);
  //ears
  
  fill(160,60,60);
  ellipse(width*.6,width*.8,width*.1,width*.15);
  ellipse(width*.4,width*.8,width*.1,width*.15);
  //legs
   

 
  fill(width*.33, width*.4175, width*.59);
  ellipse(width*.5,width*.5,width*.65,width*.65);
  //face

  fill(250);
  ellipse(width*.625,width*.425,width*.175,width*.175);
  ellipse(width*.375,width*.425,width*.175,width*.175);
  
  fill(random(300),random(5),random(150));
  ellipse(width*.625,width*.425,width*.1375,width*.1375);
  ellipse(width*.375,width*.425,width*.1375,width*.1375);
  //eyes
  
  fill(203, 244, 255);
rect(width*.3,width*.5,width*.4,width*.32,width*.15,width*.15,width*.3); 
//body
}  
  function wings() {
    
  push();
  translate(width/20,height/50);
  rotate(myMap);
  fill(133, 167, 236);
  ellipse(width*.2,width*.5,width*.3,width*.1);
  pop();  
    
  push();
  translate(width/50,height/8);
  fill(133, 167, 236); 
  rotate(3-myMap);
  fill(133, 167, 236);
  ellipse(width*.8,width*.5,width*.3,width*.1);
   console.log('my mouseX is' + mouseX);
  console.log('my mousey is'+ mouseY);
  myMap = map (mouseX,0, width, 5 ,10); 
  pop(); 
  

  
  //wings
  }


