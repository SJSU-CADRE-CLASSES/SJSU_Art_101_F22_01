let star1;
let star2;
function setup() {
let cnv = createCanvas(400,400);
cnv.mousePressed(userStartAudio);
mic = new p5.AudioIn();
mic.start();
x = width;
y = height;
star1 = new Star(width/2,height/2);
star2 = new Star(width/8,height/8);
}

function draw() {
background(220);
micLevel = mic.getLevel();
noStroke();
star1.display();
star1.move();
star2.display();
star2.move();
let leftWall = width/4;
let rightWall = width/3;
let xc = constrain(mouseX,leftWall,rightWall);
let yc = constrain(mouseY,leftWall,rightWall);
let p = height*.2 - micLevel * 2000;
hat(width*.1,p);
head(width*.2,height*.36);
eyes(width*.3,height*.45,height *.3,height*.3);
eyes(width*.7,height*.45,width*.3,height*.3);
pupil(xc,yc+height*.15,y/4,y/4);
pupil(xc + width*.4,yc+height*.15,y/4,y/4);
mouth(width*.5,height*.7);
// star(width,height);
y = y + 1;

if (y > height/1.6) {
y = y*.1;
}

}

function hat(hatX,hatY){
//hat
fill(color(64));
rect(hatX,hatY,width*.8,height/6);
rect(hatX+40,hatY-width*.15,width*.6,height/6.6);
}

function eyes(eyesX,eyesY,eyesW,eyesZ){
//eyes
fill(244);
ellipse(eyesX,eyesY,eyesW,eyesZ);
}
function pupil(pupilX,pupilY,sizeX,sizeY){ 
fill(0);
ellipse(pupilX,pupilY,sizeX,sizeY);
}

function head(headX,headY){
//head
let c =color('hsl(160,100%,50%)');
fill(c);
square(headX,headY,width*.6,30);
let a =color(240);
fill(a);
}

function mouth(mouthX,mouthY){
arc(mouthX,mouthY,width*.4,height*.3,0,PI);
}