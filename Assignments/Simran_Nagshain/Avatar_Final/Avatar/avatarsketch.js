let mic;
let yPos = 0;
class Particle {
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }
  createParticle() {
    noStroke();
    fill('rgba(127,115,241,0.5)');
    ellipse(this.x,this.y,this.r);
  }

  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.4)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}
let particles = [];

function setup() {   
  createCanvas(400, 400);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
}
 mic = new p5.AudioIn();
  mic.start();
  frameRate(1000);
}

function draw() {
  background('#23283C'); 
  dots();
  rounds();
  body();
  eyes();
  teeth();
  nose();
  light();
  antena();
  microphone(); 
}

function body(){
  push();
  stroke('rgb(138,133,133)');
  fill('rgb(224,224,224)');
  rect(50, 50, 250, 250);
  noFill();
  pop();  
}

function eyes(){
  push();
  fill(255);
  stroke('black');
  ellipse(135, 130, 55, 55);
  ellipse(220, 130, 55, 55);
  //left pupil
   let x1 = map(mouseX, 0, width, 135, 125);
  fill(51);
  ellipse(x1, 130, 15, 45);  
  //right pupil
   let x2 = map(mouseX, 0, width, 220, 210);
  ellipse(x2, 130, 15, 45);
  describe(`Two black ellipses move with mouse x.
  Bottom has more range from X`);
  pop(); 
}

function teeth(){  
  push();
  stroke('black');
   fill(255);
  rect(110, 212,140,30);
   noFill();
  //midline
  stroke('black');
  line(110, 227, 250, 227);
  //teeth
  stroke('black');
  line(180, 212, 180, 242);
  line(145, 212, 145, 242);
  line(216, 212, 216, 242);
  line(175, 50, 250, 50);
  pop();   
}

  function light(){
  push();
    //left light
    fill('green');
  ellipse(230, 285, 15, 15);
    noFill();
    //right light
    fill('red');
  ellipse(260, 285, 15, 15);
    noFill();
  pop();  
}
  
  function nose(){
  push();
    stroke('black');
    fill('grey');
  triangle(177.5, 168, 188, 177.5, 168, 177.5);
  pop();
}
  
  function antena(){
  push();
    stroke('white');
    fill('grey');
  line (177.5, 50, 177.5, 25);
  strokeWeight(5);
  stroke (220);
  circle (177.5, 15, 20)
  pop();
}

function microphone(){
let vol = mic.getLevel();
  stroke ('black')
  fill('grey');
  let h = map(vol, 0, 1, height, 0);
  triangle (width / 2.254, h - 235 , 188, 177.5, 168, 177.5);
}

function rounds(){
  fill(75,0,0,25);
  stroke ('#23283C');
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  ellipse(199, yPos, width, yPos);
}

function dots(){
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
