let x, y;
let t = 0; // time variable
let changeDirection = false;
let direction = 1;
let mic // controlling audio input
let bubbles = []; // colored bubbles 
let numObjects = 50;
let centerX;
let centerY;
let angle = 0;
let distance = 100;

function setup() {

  let cnv = createCanvas(400, 400);
  
  // function for bubbles via click
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  
  mic = new p5.AudioIn();
  mic.start();
  
  x = width / 2;
  y = height;
  
centerX = width/2;
centerY = height/2;
noStroke();
ellipseMode(CENTER);
  
}

function draw() {
  background('rgba(51, 255, 255, .05)');
    
      // Waves:
        //this is my x and y grid of ellipses
          for (let x = 0; x <= width; x = x + 30) {
          for (let y = 0; y <= height; y = y + 30) {
          
      // starting point of each circle based on mouse position- mouse           interaction
        const xAngle = map(mouseX, 0, width, -5 * PI, 5 * PI, true);
        const yAngle = map(mouseY, 0, height, -5 * PI, 5 * PI, true);
          
      // particle location varies with this 
        const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circular path
        const myX = x + 20 * cos(2 * PI * t + angle);
        const myY = y + 20 * sin(2 * PI * t + angle);

      // particles
        fill(117, 219, 213)
        ellipse(myX, myY, 10);
    }
  }

      // update time
        t = t + 0.01;
  
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].col();
    }
  
 micLevel = mic.getLevel();
  let y = height - micLevel * height;
  
  fill(120)
  
  manateeTail(direction)
  
  manatee(direction)
  
  
  if(direction>width/5){
		changeDirection=true}
	else if (direction<=0){
		changeDirection=false}
  
  	if (direction>=0 && changeDirection == false){
		direction=direction+1}
  
	//if x is greater than OR equal to 0, move right
	else if(changeDirection == true){
		direction=direction-1}
  
  console.log(direction)
  
  manateeHead(direction)
  
  seagrass()
  
  orbs(micLevel)
}

function orbs(micInput){
  noStroke()
  fill(255)
  ellipse(random(width), random(height), micInput*200);
  stroke(1)
}

function manateeHead(direction){
  push() 
  strokeWeight(2);
  translate(0, direction*width/200)
  ellipse(200, 200, 150, 150)
  
  //this is the snoot
  strokeWeight(2);
  fill(150)
  circle(200, 200, 75)
  circle(175, 200, 50)
  circle(225, 200, 50)
  
  //these are the eyes 
  fill(0)
  circle(240, 165, 15)
  circle(160, 165, 15)
  fill(255)
  circle(240, 165, 10)
  circle(160, 165, 10)
 pop() 
}

function manateeTail(direction){
push()
translate(0, direction*width/150)
ellipse(width/2, y/3.5, 250, 200);
pop()
}

function manatee(direction) {
  push()
  translate(0, direction*width/300)
  //this is the body
  fill(120);
  strokeWeight(2);
  ellipse(200, 200, 300, 250)
  quad(50, 200, 100, 290, 75, 350, 50, 320);
  quad(350, 200, 350, 320, 325, 350, 300, 290);
  pop()
}

function seagrass(){ 
  fill('rgba(0,255,0, 0.25)');
  triangle(0, 400, 50, 350, 100, 400);
  triangle(50, 400, 100, 350, 150, 400);
  triangle(100, 400, 150, 350, 200, 400);
  triangle(150, 400, 200, 350, 250, 400);
  triangle(200, 400, 250, 350, 300, 400);
  triangle(250, 400, 300, 350, 350, 400);
  triangle(300, 400, 350, 350, 400, 400);
  let vol = mic.getLevel();
  fill('teal');
  let h = map(vol, 0, 1, height, 0);
}

function mouseDragged() {
  let r = random(10, 100);
  let colr = random(50, 200);
  let colg = random(0, 100);
  let colb = random(50, 255);
  let b = new Bubble(mouseX, mouseY, r, colr, colg, colb);

  bubbles.push(b);
}
  // The push function saves the current drawing style settings and transformations
  // pop restores these settings.
class Bubble {
  constructor(_x, _y, _r, _colr, _colg, _colb) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.colr = _colr;
    this.colg = _colg;
    this.colb = _colb;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    //noStroke();
    ellipse(this.x, this.y, this.r);
  }

  col() {
    fill(this.colr, this.colg, this.colb, 50);
    // this.colr = random(50, 200);
    // this.colg = random(0, 100);
    // this.colb = random(50, 255);
  }

}



  