let mic;
let figureChange = false;
let colorChange = false;
let tapMe = true;
let tapMecircle = false;
let boxPattern = true;
let Hello = true;

let chainDownUpFromLeft = [];
let chainDownUpFromRight = [];
let chainUpDownFromLeft = [];
let chainUpDownFromRight = [];
let chainLeftRightTop = [];
let chainLeftRightBottom = [];
let chainRightLeftTop = [];
let chainRightLeftBottom = [];
let helloText;

let myColors = ["#ccaed0", "#eebfd3", "#eeabac", "#f4c9a5", "#f8e7a7", "#cce2bc, #cbe4e4","#c5dbeb"];

function setup() {
  let cnv = createCanvas(400,400, );
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES);
  
  chainDownUpFromLeft[0] = new chainDownUpFromLeftClass(width*.8,height*1);
  chainDownUpFromLeft[1] = new chainDownUpFromLeftClass(width*.7,height*1.10);
  chainDownUpFromLeft[2] = new chainDownUpFromLeftClass(width*.6, height*1.20);
  chainDownUpFromLeft[3] = new chainDownUpFromLeftClass(width*.5, height*1.30);
  chainDownUpFromLeft[4] = new chainDownUpFromLeftClass(width*.4,  height*1.40);
  chainDownUpFromLeft[5] = new chainDownUpFromLeftClass(width*.3, height*1.50);
  chainDownUpFromLeft[6] = new chainDownUpFromLeftClass(width*.2, height*1.60);
  chainDownUpFromLeft[7] = new chainDownUpFromLeftClass(width*.1, height*1.70);
  chainDownUpFromLeft[8] = new chainDownUpFromLeftClass(width*.0, height*1.80);
  chainDownUpFromLeft[9] = new chainDownUpFromLeftClass(width*-.1, height*1.90);

  chainDownUpFromRight[0] = new chainDownUpFromRightClass (width*-.1,height*1);
  chainDownUpFromRight[1] = new chainDownUpFromRightClass (width*0,height*1.10);
  chainDownUpFromRight[2] = new chainDownUpFromRightClass (width*.1,height*1.20);
  chainDownUpFromRight[3] = new chainDownUpFromRightClass (width*.2,height*1.30);
  chainDownUpFromRight[4] = new chainDownUpFromRightClass (width*.3,height*1.40);
  chainDownUpFromRight[5] = new chainDownUpFromRightClass (width*.4,height*1.50);
  chainDownUpFromRight[6] = new chainDownUpFromRightClass (width*.5,height*1.60);
  chainDownUpFromRight[7] = new chainDownUpFromRightClass (width*.6,height*1.70);
  chainDownUpFromRight[8] = new chainDownUpFromRightClass (width*.7,height*1.80);
  chainDownUpFromRight[9] = new chainDownUpFromRightClass (width*.8,height*1.90);

  chainUpDownFromLeft[0] = new chainUpDownFromLeftClass (width*.75,height*-.25);
  chainUpDownFromLeft[1] = new chainUpDownFromLeftClass (width*.65,height*-.35);
  chainUpDownFromLeft[2] = new chainUpDownFromLeftClass (width*.55,height*-.45);
  chainUpDownFromLeft[3] = new chainUpDownFromLeftClass (width*.45,height*-.55);
  chainUpDownFromLeft[4] = new chainUpDownFromLeftClass (width*.35,height*-.65);
  chainUpDownFromLeft[5] = new chainUpDownFromLeftClass (width*.25,height*-.75);
  chainUpDownFromLeft[6] = new chainUpDownFromLeftClass (width*.15,height*-.85);
  chainUpDownFromLeft[7] = new chainUpDownFromLeftClass (width*.05,height*-.95);
  chainUpDownFromLeft[8] = new chainUpDownFromLeftClass (width*-.05,height*-1.05);
  chainUpDownFromLeft[9] = new chainUpDownFromLeftClass (width*-.15,height*-1.15);

  chainUpDownFromRight[0] = new chainUpDownFromRightClass (width*-.15,height*-.25);
  chainUpDownFromRight[1] = new chainUpDownFromRightClass (width*-.05,height*-.35);
  chainUpDownFromRight[2] = new chainUpDownFromRightClass (width*.05,height*-.45);
  chainUpDownFromRight[3] = new chainUpDownFromRightClass (width*.15,height*-.55);
  chainUpDownFromRight[4] = new chainUpDownFromRightClass (width*.25,height*-.65);
  chainUpDownFromRight[5] = new chainUpDownFromRightClass (width*.35,height*-.75);
  chainUpDownFromRight[6] = new chainUpDownFromRightClass (width*.45,height*-.85);
  chainUpDownFromRight[7] = new chainUpDownFromRightClass (width*.55,height*-.95);
  chainUpDownFromRight[8] = new chainUpDownFromRightClass (width*.65,height*-1.05);
  chainUpDownFromRight[9] = new chainUpDownFromRightClass (width*.75,height*-1.15);

  chainLeftRightTop[0] = new  chainLeftRightClass(width*.8,height*-.1);
  chainLeftRightTop[1] = new  chainLeftRightClass(width*.7,height*0);
  chainLeftRightTop[2] = new  chainLeftRightClass(width*.6, height*0.10);
  chainLeftRightTop[3] = new  chainLeftRightClass(width*.5, height*0.20);
  chainLeftRightTop[4] = new  chainLeftRightClass(width*.4, height*0.30);
  chainLeftRightTop[5] = new  chainLeftRightClass(width*.3, height*0.40);
  chainLeftRightTop[6] = new  chainLeftRightClass(width*.2, height*0.50);
  chainLeftRightTop[7] = new  chainLeftRightClass(width*.1, height*0.60);
  chainLeftRightTop[8] = new  chainLeftRightClass(width*0, height*0.70);
  chainLeftRightTop[9] = new  chainLeftRightClass(width*-.1, height*0.80);

  chainLeftRightBottom[0] = new  chainLeftRightClass(width*.8,height*0.80);
  chainLeftRightBottom[1] = new  chainLeftRightClass(width*.7,height*0.70);
  chainLeftRightBottom[2] = new  chainLeftRightClass(width*.6, height*0.60);
  chainLeftRightBottom[3] = new  chainLeftRightClass(width*.5, height*0.50);
  chainLeftRightBottom[4] = new  chainLeftRightClass(width*.4, height*0.40);
  chainLeftRightBottom[5] = new  chainLeftRightClass(width*.3, height*0.30);
  chainLeftRightBottom[6] = new  chainLeftRightClass(width*.2, height*0.20);
  chainLeftRightBottom[7] = new  chainLeftRightClass(width*.1, height*0.10);
  chainLeftRightBottom[8] = new  chainLeftRightClass(width*0, height*0.0);
  chainLeftRightBottom[9] = new  chainLeftRightClass(width*-.1, height*-.1);

  chainRightLeftTop[0] = new  chainRightLeftClass(width*-.1,height*-.1);
  chainRightLeftTop[1] = new  chainRightLeftClass(0,height*0);
  chainRightLeftTop[2] = new  chainRightLeftClass(width*.1, height*.1);
  chainRightLeftTop[3] = new  chainRightLeftClass(width*.2, height*0.2);
  chainRightLeftTop[4] = new  chainRightLeftClass(width*.3, height*0.3);
  chainRightLeftTop[5] = new  chainRightLeftClass(width*.4, height*0.4);
  chainRightLeftTop[6] = new  chainRightLeftClass(width*.5, height*0.5);
  chainRightLeftTop[7] = new  chainRightLeftClass(width*.6, height*0.6);
  chainRightLeftTop[8] = new  chainRightLeftClass(width*.7, height*0.7);
  chainRightLeftTop[9] = new  chainRightLeftClass(width*.8, height*0.8);

  chainRightLeftBottom[0] = new  chainRightLeftClass(width*-.1,height*.8);
  chainRightLeftBottom[1] = new  chainRightLeftClass(0,height*.7);
  chainRightLeftBottom[2] = new  chainRightLeftClass(width*.1, height*.6);
  chainRightLeftBottom[3] = new  chainRightLeftClass(width*.2, height*0.5);
  chainRightLeftBottom[4] = new  chainRightLeftClass(width*.3, height*0.4);
  chainRightLeftBottom[5] = new  chainRightLeftClass(width*.4, height*0.3);
  chainRightLeftBottom[6] = new  chainRightLeftClass(width*.5, height*0.2);
  chainRightLeftBottom[7] = new  chainRightLeftClass(width*.6, height*0.1);
  chainRightLeftBottom[8] = new  chainRightLeftClass(width*.7, height*0);
  chainRightLeftBottom[9] = new  chainRightLeftClass(width*.8, height*-.1);

  helloText = new helloTextClass();
}

function draw() {
  background('#fffff')
  
  if(figureChange == false){
      chainDownUpFromLeft[0].display();
      chainDownUpFromLeft[0].move();
      chainDownUpFromLeft[1].display();
      chainDownUpFromLeft[1].move();
      chainDownUpFromLeft[2].display();
      chainDownUpFromLeft[2].move();
      chainDownUpFromLeft[3].display();
      chainDownUpFromLeft[3].move();
      chainDownUpFromLeft[4].display();
      chainDownUpFromLeft[4].move();  
      chainDownUpFromLeft[5].display();
      chainDownUpFromLeft[5].move();
      chainDownUpFromLeft[6].display();
      chainDownUpFromLeft[6].move();
      chainDownUpFromLeft[7].display();
      chainDownUpFromLeft[7].move();
      chainDownUpFromLeft[8].display();
      chainDownUpFromLeft[8].move();
      chainDownUpFromLeft[9].display();
      chainDownUpFromLeft[9].move();  

      chainDownUpFromRight[0].display();
      chainDownUpFromRight[0].move();
      chainDownUpFromRight[1].display();
      chainDownUpFromRight[1].move();   
      chainDownUpFromRight[2].display();
      chainDownUpFromRight[2].move();   
      chainDownUpFromRight[3].display();
      chainDownUpFromRight[3].move();   
      chainDownUpFromRight[4].display();
      chainDownUpFromRight[4].move();   
      chainDownUpFromRight[5].display();
      chainDownUpFromRight[5].move();   
      chainDownUpFromRight[6].display();
      chainDownUpFromRight[6].move();   
      chainDownUpFromRight[7].display();
      chainDownUpFromRight[7].move();   
      chainDownUpFromRight[8].display();
      chainDownUpFromRight[8].move();   
      chainDownUpFromRight[9].display();
      chainDownUpFromRight[9].move();  
    // 
      chainUpDownFromLeft[0].display();
      chainUpDownFromLeft[0].move();
      chainUpDownFromLeft[1].display();
      chainUpDownFromLeft[1].move();
      chainUpDownFromLeft[2].display();
      chainUpDownFromLeft[2].move();
      chainUpDownFromLeft[3].display();
      chainUpDownFromLeft[3].move();
      chainUpDownFromLeft[4].display();
      chainUpDownFromLeft[4].move();
      chainUpDownFromLeft[5].display();
      chainUpDownFromLeft[5].move();
      chainUpDownFromLeft[6].display();
      chainUpDownFromLeft[6].move();
      chainUpDownFromLeft[7].display();
      chainUpDownFromLeft[7].move();
      chainUpDownFromLeft[8].display();
      chainUpDownFromLeft[8].move();
      chainUpDownFromLeft[9].display();
      chainUpDownFromLeft[9].move();
    //
      chainUpDownFromRight[0].display();
      chainUpDownFromRight[0].move();
      chainUpDownFromRight[1].display();
      chainUpDownFromRight[1].move(); 
      chainUpDownFromRight[2].display();
      chainUpDownFromRight[2].move(); 
      chainUpDownFromRight[3].display();
      chainUpDownFromRight[3].move(); 
      chainUpDownFromRight[4].display();
      chainUpDownFromRight[4].move(); 
      chainUpDownFromRight[5].display();
      chainUpDownFromRight[5].move(); 
      chainUpDownFromRight[6].display();
      chainUpDownFromRight[6].move(); 
      chainUpDownFromRight[7].display();
      chainUpDownFromRight[7].move();
      chainUpDownFromRight[8].display();
      chainUpDownFromRight[8].move();
      chainUpDownFromRight[9].display();
      chainUpDownFromRight[9].move();
    //
      chainLeftRightTop[0].display();
      chainLeftRightTop[0].move();
      chainLeftRightTop[1].display();
      chainLeftRightTop[1].move();
      chainLeftRightTop[2].display();
      chainLeftRightTop[2].move();
      chainLeftRightTop[3].display();
      chainLeftRightTop[3].move();
      chainLeftRightTop[4].display();
      chainLeftRightTop[4].move();
      chainLeftRightTop[5].display();
      chainLeftRightTop[5].move();
      chainLeftRightTop[6].display();
      chainLeftRightTop[6].move();
      chainLeftRightTop[7].display();
      chainLeftRightTop[7].move();
      chainLeftRightTop[8].display();
      chainLeftRightTop[8].move();
      chainLeftRightTop[9].display();
      chainLeftRightTop[9].move();
    // 
      chainLeftRightBottom[0].display();   
      chainLeftRightBottom[0].move(); 
      chainLeftRightBottom[1].display();   
      chainLeftRightBottom[1].move();
      chainLeftRightBottom[2].display();   
      chainLeftRightBottom[2].move();
      chainLeftRightBottom[3].display();   
      chainLeftRightBottom[3].move();
      chainLeftRightBottom[4].display();   
      chainLeftRightBottom[4].move();
      chainLeftRightBottom[5].display();   
      chainLeftRightBottom[5].move();
      chainLeftRightBottom[6].display();   
      chainLeftRightBottom[6].move();
      chainLeftRightBottom[7].display();   
      chainLeftRightBottom[7].move();
      chainLeftRightBottom[8].display();   
      chainLeftRightBottom[8].move();
      chainLeftRightBottom[9].display();   
      chainLeftRightBottom[9].move();
    //
      chainRightLeftTop[0].display();
      chainRightLeftTop[0].move();
      chainRightLeftTop[1].display();
      chainRightLeftTop[1].move();
      chainRightLeftTop[2].display();
      chainRightLeftTop[2].move();
      chainRightLeftTop[3].display();
      chainRightLeftTop[3].move();
      chainRightLeftTop[4].display();
      chainRightLeftTop[4].move();
      chainRightLeftTop[5].display();
      chainRightLeftTop[5].move();
      chainRightLeftTop[6].display();
      chainRightLeftTop[6].move();
      chainRightLeftTop[7].display();
      chainRightLeftTop[7].move();
      chainRightLeftTop[8].display();
      chainRightLeftTop[8].move();
      chainRightLeftTop[9].display();
      chainRightLeftTop[9].move();
    //
      chainRightLeftBottom[0].display();
      chainRightLeftBottom[0].move();
      chainRightLeftBottom[1].display();
      chainRightLeftBottom[1].move();
      chainRightLeftBottom[2].display();
      chainRightLeftBottom[2].move();
      chainRightLeftBottom[3].display();
      chainRightLeftBottom[3].move();
      chainRightLeftBottom[4].display();
      chainRightLeftBottom[4].move();
      chainRightLeftBottom[5].display();
      chainRightLeftBottom[5].move();
      chainRightLeftBottom[6].display();
      chainRightLeftBottom[6].move();
      chainRightLeftBottom[7].display();
      chainRightLeftBottom[7].move();
      chainRightLeftBottom[8].display();
      chainRightLeftBottom[8].move();
      chainRightLeftBottom[9].display();
      chainRightLeftBottom[9].move();
    //
      helloText.display();  
  }

  if(figureChange == true){
      circusPattern(.4,.01, .5, .5, .6, .01); //center-top
      circusPattern(.85, .01, .5, .5, 1.2, .01);//left-top
      circusPattern(.99,.6,.99,.4,.5,.5); //left middle
      circusPattern(.85, .99, .5, .5, 1.2, .99);//left-bottom
      circusPattern(.4, .99, .5, .5, .6, .99); //center-bottom
      circusPattern(-.2, .01, .5, .5, .15, .01);//right-top
      circusPattern(.01, .6, .01, .4, .5, .5) //right middle
      circusPattern(-.2, .99, .5, .5, .15, .99); //right-bottom
    //
      backgroundBorder();
    //
      circleCorner(.05,.05,);
      circleCorner(.95,.95,);
      circleCorner(.05,.95,);
      circleCorner(.95,.05,);
  }  
  
  if(figureChange == true){
    ear();
  //
    head(50);
  //
    hat();
    hatPattern(.24,.065,.53,.24);
    hatPattern(.25,.075,.51,.22);
    hatPattern(.26,.085,.49,.20);
    hatPattern(.27,.095,.47,.18);
    hatPattern(.28,.105,.45,.16);
    hatPattern(.29,.115,.43,.14);
    hatPattern(.30,.125,.41,.12);
    hatPattern(.31,.135,.39,.10);
    hatPattern(.32,.145,.37,.08);
    hatPattern(.33,.155,.35,.06);
    hatPattern(.34,.165,.33,.04);
    hatPattern(.35,.175,.31,.02);
    hatPattern(.36,.185,.29,0);
  //
    springBalance(.46,.62,.1,.05);
    springBalance(.45,.68,.1,.05);
    springBalance(.44,.74,.1,.05);
    springBalance(.45,.8,.1,.05);
    springBalance(.46,.86,.1,.05);
  //
    bodyBox();
  //
    bodyBoxTexture(.41,.785,.18,);
    bodyBoxTexture(.42,.795,.16);
    bodyBoxTexture(.43,.805,.14);
    bodyBoxTexture(.44,.815,.12);
    bodyBoxTexture(.45,.825,.10);
    bodyBoxTexture(.46,.835,.08);
    bodyBoxTexture(.47,.845,.06);
    bodyBoxTexture(.48,.855,.04);
    bodyBoxTexture(.49,.865,.02);
  //
    eye(.37,.39,.385,.37,.35,.385)
    eye(.63,.39,.645,.37,.61,.385);
  //
    nose();
  //   
    mouth();
  //
    blush();
    blush(.25,0);
  }
  
    giftBoxBackground();
    giftBoxBottom();
    giftBoxTop();
    tapToOpen();  
    dialouge();
}

function mousePressed() {
 if(mouseX > width * 0.60 &&
    mouseX < width * 0.40 &&
    mouseY > height * 0.94 &&
    mouseY < height * 0.73){
   console.log("mouse!");} 
  
  else if(
    mouseX <width * 0.60 &&
    mouseX > width *0.40 &&
    mouseY<height *0.94 && 
    mouseY >height*0.73){
    figureChange = !figureChange;
    boxPattern = !boxPattern;
    tapMe = !tapMe;
    tapMecircle = !tapMecircle;}
}

function dialouge() {
  push();
    if(figureChange == true){
    if(mouseX < width * 0.4 &&
       mouseX > width * 0 &&
       mouseY < height * 1 &&
       mouseY > height * 0){
  strokeWeight(2.5);
  stroke(random(myColors));
  textSize(13.5);
  textFont('Comic Sans MS');
  fill('white');
  rect(width*.07, height*.62, width*.32, height*.14, width*.1, height*.3)
  fill(random(myColors));
  noStroke();
  text('HELLO!', width*.13, height*.675, )
  text('HOW ARE YOU?', width*.1, height*.725, );}
  pop();}

  push();
     if(figureChange == true){   
     if(mouseX < width * 1 &&
        mouseX > width * 0.55 &&
        mouseY < height * 1 &&
        mouseY > height * 0){
    strokeWeight(2.5);
    stroke(random(myColors));
    textSize(13.5);
    textFont('Comic Sans MS');
    fill('white');
    rect(width*.575, height*.62, width*.38, height*.14, width*.1, height*.3)
    fill(random(myColors));
    noStroke();
    text('I AM TEE TEE', width*.65, height*.675, )
    text('NICE TO MEET YOU!', width*.595, height*.725,);}
  pop();}
}

function giftBoxBackground() {//giftBox
  push();
    if (tapMe == true){
      noStroke();
      fill(random(myColors));
      circle(width*.5,height*.81,150);
      stroke(random(myColors));
      noFill();
      circle(width*.5,height*.81,160);}
  pop(); 
}  

function giftBoxBottom() {//giftBox
  push();
    if (tapMe == true){
    stroke(random(myColors));
    strokeWeight(2.5);
    fill('white');
    square(width*.40, (height*.775) - mic.getLevel()*10,width*.20, 10);
    strokeWeight(1);  
    square(width*.415, (height*.79) - mic.getLevel()*10,width*.17, 7);}
  pop();
}

function giftBoxTop() {//giftBox
  push();
    if(tapMe == true){ 
      fill('white');
      stroke(random(myColors));
      strokeWeight(2.5);
      translate(0, (0)- mic.getLevel()*100)
      translate(width*.2, height*.60);
      rect(width*.17, height*.1, width*.26, height*.1, width*.26, height*.1, 10);
      strokeWeight(1);  
      rect(width*.185, height*.115, width*.23, height*.07, width*.23, height*.08, 10);
      translate(width*.15, height*-.1);
      triangle(width*.1, height*.25, width*.1, height*.15, width*.15, height*.2, );
      triangle(width*.2, height*.25, width*.2, height*.15, width*.15, height*.2, ); 
      translate(width*.025, height*.07);
      square(width*.1, height*.1, width*.05, 10);}
  pop();
} 

function tapToOpen() {//giftBox
  push();
    if(tapMe == true){
    if(mouseX < width * 0.60 &&
       mouseX > width * 0.40 &&
       mouseY < height * 0.94 && 
       mouseY > height* 0.73){
    textSize(12);
    textFont('Comic Sans MS');
    textAlign(CENTER);
    strokeWeight(2.5);
    stroke(random(myColors));
    fill('white');
    text('TAP TO OPEN', width*.475, height*.83, 20);}}
  pop();
}

function circleCorner(xpos, ypos,circleCornerColor) {//background
  push();
    strokeWeight(5);
    circle(width*xpos, height*ypos, 100);
    strokeWeight(2.3);
    stroke(random(myColors));
  pop();
}

function backgroundBorder() {//background  
  push();
    strokeWeight(20);
    stroke(random(myColors));
    noFill()
    rect(width*0, height*0, width*1, height*1,);
  pop();
}

function circusPattern(x1,y1,x2,y2,x3,y3) {//background
  push();
    noStroke();
    fill(random(myColors));
    triangle(width*x1, height*y1, width*x2, height*y2, width*x3, width*y3);
  pop();
}

function ear(x,y,w,) {//character
  push();
    fill(random(myColors));
    strokeWeight(1.5);
    stroke(random(myColors));
    square(width*0.21, (height*0.33) - mic.getLevel() * 70, width*0.1, 15,);
    square (width*0.69, (height*0.33) - mic.getLevel() * 70, width*0.1, 15,);
  pop();
}

function head() {//character
  push(); 
  fill('#FFF6D2');
  strokeWeight(1.5);
  stroke(random(myColors)); 
  ellipse(width*.5, (height*.35) - mic.getLevel() * 100, width*.5, height*.5,);
  pop();
}

function hat() {//character
  push();
    fill('#fffff');
    strokeWeight(2);
    stroke(random(myColors));
    rect(width*.23, (height*.055)- mic.getLevel()*100, width*.55, height*.26, 10);
  pop();
}

function hatPattern(x,y,w,h) {//character
  push();
    stroke(random(myColors));
    frameRate(10);
    push();
    strokeWeight(2.5);
    noFill();
    rect(width*x, (height*y)- mic.getLevel()*100, width*w, height*h, 5);
  pop();
}
  
function springBalance(x,y,w,h) {//character
  push();
    fill(random(myColors));
    strokeWeight(1.5);
    stroke(random(myColors));
    rect(width*x, (height*y) - mic.getLevel() * 100, width*w, height*h, 10,);
  pop();
}
  
function bodyBox() {//character
  push();
    fill('#fffff');
    strokeWeight(1.5);
    stroke(random(myColors));
    square(width*.40, (height*.775) - mic.getLevel()*10, width*.20, 10);
  pop();
}
  
function bodyBoxTexture(x,y,w) {//character
  push();
    noFill();
    strokeWeight(2);
    stroke(random(myColors)); 
    square(width*x, (height*y) - mic.getLevel()*10, width*w, 9);
  pop();
}  
  
function eye(xpos, ypos, xpos1, ypos1, xpos2, ypos2) {//character
  push();
    fill(random(myColors));
    strokeWeight(1.5);
    stroke(random(myColors));
    circle(width*xpos, (height*ypos)- mic.getLevel()*100, 40);
    fill('#ffffff');
    circle(width*xpos1, (height*ypos1) - mic.getLevel()*50, 15,);
    fill('#ffffff');
    circle(width*xpos2, (height*ypos2) - mic.getLevel()*50, 8);
  pop();
}
  
function nose(xpos,ypos) {//character
  push();
    fill(random(myColors));
    strokeWeight(1.5);
    stroke(random(myColors));
    triangle(width*.47, (height*.44) - mic.getLevel()*50, width*.53, height*.44 - mic.getLevel()*50,width*.5, (height*.40) - mic.getLevel()*60);
  pop();
} 

function mouth(xpos, ypos, xpos1, ypos1) {//character
  push();
    fill(random(myColors));
    strokeWeight(1.5);
    stroke(random(myColors));
    arc(width*.5, (height*.48) - mic.getLevel()*70, width*.15, height*.15, 0, 180, CHORD);
  pop();
}
  
function blush(x,y) {//character
  push();
    stroke(random(myColors));
    strokeWeight(3.5);
    translate(width*x,height*y);
    line(width*.35, (height*.46)- mic.getLevel()*20, width*.36, (height*.46) - mic.getLevel()*100);
    line(width*.37, (height*.48)- mic.getLevel()*100, width*.36, (height*.46)- mic.getLevel()*100);
    line(width*.37, (height*.48)- mic.getLevel()*100, width*.38, (height*.46)- mic.getLevel()*100);
    line(width*.39, (height*.48)- mic.getLevel()*100, width*.38, (height*.46)- mic.getLevel()*100);
    line(width*.39, (height*.48)- mic.getLevel()*100, width*.40, (height*.46)- mic.getLevel()*100);
    line(width*.40, (height*.46) - mic.getLevel()*100, width*.41, (height*.46)- mic.getLevel()*20);
  pop();  
}
