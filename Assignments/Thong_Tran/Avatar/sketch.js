
let count = 0;
let myMap = 0;
let mic;
let on = 1;
let upTri;
let downTri;
let thirdTri;
let fourTri;
let fiftTri;
let t = 0;
function setup() {
  let cnv=createCanvas(400, 400);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES);
  colorMode (HSB,150);
   x = 1;
   y = 1;
  changeDirection = false;
  upTri  = new UpTri ( width*.5,height*.5,.3,.3);
  downTri =  new DownTri (width*.4,height*3,.3,2);
  thirdTri = new ThirdTri (width*-2,height*-3,-3);
  fourTri  = new UpTri ( width*3,height*3,.3,4);
  fiftTri =  new UpTri (width*.2,height*.2,.3,2);
  
}
function draw(){
  if (count<360){
    count++
} else if (count==360){count=0};
    

  t = t + 0.01; // update time
  background(200,100,50);
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10);
      t = t + 0.01 ; 
    }
  fill(50);
  strokeWeight(3);
  body ();
  neck();
  face();
  leftEye();
  rightEye();
  mouth();
  leftIris(); 
  }
 
    posX = constrain(mouseX,2,400);
    posY = map(mouseY,200,400,200,500);
    ellipse(posX,posY,60);
    ellipse(posX,posY,40);
    ellipse(posX,posY,20);
//bottom square 
rect(x,350, 55, 55);
    if(x>width){
		changeDirection=true}
    else if (x<=0){
		changeDirection=false}   
    if (x>=0 && changeDirection == false){
		x=x+1}
    else if(changeDirection == true){
		x=x-1}
//top square
rect(x,1, 55, 55);
    if(x>width){
		changeDirection=true}
    else if (x<=0){
		changeDirection=false}   
    if (x>=0 && changeDirection == false){
		x=x+1}
    else if(changeDirection == true){
		x=x-1}
//right square
rect(350,y, 55, 55);
    if(y>height){
		changeDirection=true}
    else if (y<=0){
		changeDirection=false}   
    if (y>=0 && changeDirection == false){
		y=y+1}
    else if(changeDirection == true){
		y=y-1}
//left square
rect(1,y, 55, 55);
    if(y>height){
		changeDirection=true}
    else if (y<=0){
		changeDirection=false}   
    if (y>=0 && changeDirection == false){
		y=y+1}
    else if(changeDirection == true){
		y=y-1}
  
  rightIris();
  posX=constrain(mouseX,200,300);
  posY=constrain(mouseY,200,300);
  console.log(mouseX);
  myMap= map(mouseX,0,width,50,90)
  
  upTri.display();
  downTri.display();
  thirdTri.display();
  
  upTri.move();
  fourTri.display();
  fiftTri.display();
  fourTri.move();
  fiftTri.move();
  
    
  background('rgba(220,220,220,.05)');
    
  function mousePressed(){
    if (mouseX > width * 0.4 && mouseX < width*0.8 && mouseY > height * 0.05 && mouseY <height*0.35){
      console.log("mouse!");
    }
  }
  function windowResize(){
    resizeCanvas(windowWidth,windowHeight);
  }
   
function face () {
  fill ('lightgreen');
  ellipse (width/2, height/3.5,300);
}
function neck () {
  fill('orange');
  ellipse (width/2, height/1.6,100);
}
function body () {
  fill ('blue');
  ellipse (width/2, height/1,350);
}

function leftEye(){
  fill('white');
  ellipse(width*.35, width*.25, width*.15, width*.15);
}
function rightEye(){
  fill('white');
  ellipse(width*.62, width*.25, width*.15, width*.15);
}
function mouth(){
  fill('red');
  ellipse(width/2,height/2,100,mic.getLevel()*1000);
}
function leftIris(){
  fill(random(200), random(200), random (200));
  ellipse(width/2.8, height/4,20,mic.getLevel()*2000);
}
function rightIris(){
  fill(random(200), random(200), random (200));
 ellipse(width/1.6, height/4,20,mic.getLevel()*2000); 

}
function bubble(xpos,ypos){
   ellipse(xpos,ypos,100,100);
}
}