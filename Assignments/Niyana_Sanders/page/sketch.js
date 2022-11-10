// Clouds - https://www.youtube.com/watch?v=r5txidNXpFI&t=576s > Perlin Cloud Tutorial
let mic;
let clouds = [];
let billows = 30;
let count = 0;
let myMap = 0;

function setup() {
let cnv = createCanvas(490, 490);
mic = new p5.AudioIn();
mic.start();
  
let w = width;
let h = height;

  for (let i = 0; i < billows; i++) {
    clouds.push(new cloudMaker(w / 2, h * 0.35, 60, 7, 150));
  }
}

function draw() {
micLevel = mic.getLevel();
background(0, 175, 255, 255);



  
  if (count < 360) {
    count++;
  } else if (count == 360) {
    count = 0;
  }
  
  push();
  ponyTail();
  rightEar();
  leftEar();
  Neck();
  Arms();
  Hands();
  Shoes();
  Pants();
  Body();
  Shirt();
  Jacket();
  Head();
  Hairline();
  Nose();
  leftEye();
  rightEye();
  butterFly(2, 5, 0.2); // xpos, ypos, rot
  mouth();
  sunRay();
  
  console.log("my mouseX is: " + mouseX);
  console.log("my mouseY is: " + mouseY);

  myMap = map(mouseX, 0, width, 0, 10);

  //SUN
  push();
  translate(width / 1.65, height * 0.16);
  stroke(200, 175, 0, 200);
  strokeWeight(5);
  fill(255, 255, 0, 255);
  circle(-230, 1, 125);
  pop();

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < clouds.length; i++) {
      clouds[i].update(j);
    }
  }

  //Grass

  push();
  stroke(100, 200, 255, 255);
  strokeWeight(5);
  fill(75, 200, 0, 255);
  beginShape();
  rect(0, height * 0.95, width, height - height * 0.9);
  endShape(CLOSE);
  pop();

  function ponyTail() {
    push();
    fill(48, 30, 12);
    beginShape();
    ellipse(177, 230, 120, 120);
    ellipse(130, 200, 30, 30);
    ellipse(125, 220, 30, 30);
    ellipse(125, 240, 30, 30);
    ellipse(130, 260, 30, 30);
    ellipse(130, 260, 30, 30);
    ellipse(145, 275, 30, 30);
    ellipse(165, 282, 30, 30);
    ellipse(165, 282, 30, 30);
    ellipse(185, 282, 30, 30);
    ellipse(205, 277, 30, 30);
    ellipse(220, 264, 30, 30);
    ellipse(228, 245, 30, 30);
    ellipse(228, 227, 30, 30);
    ellipse(222, 210, 30, 30);
    ellipse(215, 200, 30, 30);
    endShape(CLOSE);
    pop();
  }
  function rightEar() {
    push();
    //Right Ear
    fill(208, 138, 77);
    beginShape();
    ellipse(228, 173, 17, 30, 70);
    ellipse(228, 173, 12, 18, 70);
    ellipse(228, 179, 7, 13, 70);
    endShape(CLOSE);
    pop();
  }
  function leftEar() {
    push();
    fill(208, 138, 77);
    beginShape();
    ellipse(121, 173, 17, 30, 70);
    ellipse(121, 173, 12, 18, 70);
    ellipse(121, 178, 7, 13, 70);
    endShape(CLOSE);
    pop();
  }
  function Neck() {
    push();
    fill(208, 138, 77);
    beginShape();
    rect(165, 210, 25, 34);
    endShape(CLOSE);
    pop();
  }
  function Arms() {
    push();
    beginShape();
    //LEFT ARM
    rect(120, 260, 30, 80, 5);
    //RIGHT ARM
    rect(205, 260, 30, 80, 5);
    endShape(CLOSE);
    pop();
  }
  function Hands() {
    push();
    fill(208, 138, 77);
    beginShape();
    circle(140, 350, 45);
    circle(215, 350, 45);
    endShape(CLOSE);
    pop();
  }
  function Shoes() {
    push();
    fill(255, 255, 255);
    beginShape();
    circle(198, 450, 35);
    circle(160, 450, 35);
    endShape(CLOSE);
    pop();
  }
  function Pants() {
    push();
    fill(153, 204, 255);
    beginShape();
    rect(178, 340, 40, 110, 10);
    rect(140, 340, 40, 110, 10);
    endShape(CLOSE);
    pop();
  }
  function Body() {
    push();
    fill(208, 138, 77);
    //Top Half
    beginShape();
    triangle(120, 265, 233, 265, 178, 235);
    endShape(CLOSE);
    pop();
    //Lower Half
    push();
    beginShape();
    triangle(120, 265, 233, 265, 175, 340);
    endShape(CLOSE);
    pop();
  }
  function Shirt() {
    push();
    fill(255, 255, 255);
    beginShape();
    rect(147, 248, 5, 17, 17);
    rect(202, 248, 5, 17, 17);
    rect(130, 260, 100, 80, 20);
    endShape(CLOSE);
    pop();
  }
  function Jacket() {
    push();
    fill(0, 0, 225);
    beginShape();
    rect(117, 259, 30, 90, 40, 15, 10, 5);
    rect(208, 259, 30, 90, 40, 15, 10, 5);
    endShape(CLOSE);
    pop();
  }
  function Head() {
    push();
    fill(208, 138, 77);
    beginShape();
    ellipse(175, 170, 105, 120, 75);
    endShape(CLOSE);
    pop();
  }
  function Hairline() {
    push();
    fill(48, 30, 12);
    beginShape();
    ellipse(124, 155, 5, 5);
    ellipse(126, 150, 5, 5);
    ellipse(128, 145, 5, 5);
    ellipse(131, 140, 5, 5);
    ellipse(134, 135, 5, 5);
    ellipse(138, 131, 5, 5);
    ellipse(142, 127, 5, 5);
    ellipse(146, 123, 5, 5);
    ellipse(151, 120, 5, 5);
    ellipse(155, 117, 5, 5);
    ellipse(173, 113, 5, 5);
    ellipse(170, 113, 5, 5);
    ellipse(165, 114, 5, 5);
    ellipse(160, 115, 5, 5);

    ellipse(182, 113, 5, 5);
    ellipse(185, 113, 5, 5);
    ellipse(190, 115, 5, 5);
    ellipse(195, 117, 5, 5);
    ellipse(199, 120, 5, 5);
    ellipse(203, 122, 5, 5);
    ellipse(207, 126, 5, 5);
    ellipse(211, 130, 5, 5);
    ellipse(214, 134, 5, 5);
    ellipse(217, 138, 5, 5);
    ellipse(220, 143, 5, 5);
    ellipse(223, 148, 5, 5);
    ellipse(225, 153, 5, 5);
    ellipse(226, 158, 5, 5);
    endShape(CLOSE);
    pop();
  }
  function Nose() {
    push();
    fill(166, 109, 58);
    beginShape();
    triangle(175, 179, 180, 177, 175, 160);
    triangle(175, 179, 170, 177, 175, 160);
    endShape(CLOSE);
    pop();
  }
  function leftEye() {
    push();
    //Sclera
    fill(255, 255, 255);
    beginShape();
    arc(150, 150, 30, 28, 1200, PI + QUARTER_PI, CHORD);
    //Iris *Brown*
    fill(153, 76, 0);
    arc(147, 147, 21, 20, 1200, PI + QUARTER_PI, CHORD);
    //Pupil
    fill(random(255), random(255), random(255));
    ellipse(143, 148, 8, 12);
    endShape(CLOSE);
    pop();
  }
  function rightEye() {
    push();
    //Sclera
    fill(255, 255, 255);
    beginShape();
    arc(201, 155, 30, 28, 1200, PI + QUARTER_PI, CHORD);
    //Iris *Brown*
    fill(153, 76, 0);
    arc(198, 152, 20, 20, 1200, PI + QUARTER_PI, CHORD);
    //Pupil
    fill(random(255), random(255), random(255));
    ellipse(195, 153, 8, 12);
    endShape(CLOSE);
    pop();
  }
function mouth(){
  push();
  fill(random(255),random(255), random(255));
  stroke(15);
  ellipse(width*0.357, height*0.43,20,micLevel*600);
pop(); 
}
function sunRay(){
  push();
  stroke(200, 175, 0, 200);
  strokeWeight(5);
  fill(255, 255, 0, 255);
  //triangle(90,180,116,40,172,150);
  
  pop();
}
}

function cloudMaker(xc, yc, a, zlo, zhi) {
  this.r = zhi;
  this.rx = random(-a, a);
  this.ry = random(0, a);
  this.arange = 1;
  this.pos = createVector(this.rx * this.arange + xc, yc - this.ry);
  this.rainpos = this.pos.copy();
  this.zoff = random(10);
  this.zwave = 0;
  this.zmin = zlo;
  this.zmax = zhi;

  this.zrange = this.zmax;
  this.zrpol = -0.075;
  this.arange = this.zrpol;

  //Fall Rate for Raindrops
  this.rainvel = createVector(0.5, 3);
  this.rainfall = false;

  this.update = function (j) {
    this.zrange += this.zrpol;
    this.arange = (this.zmax - this.zrange) * 0.025;

    this.pos.set(
      this.rx * this.arange + xc,
      this.ry * (this.arange * 0.5) - yc + this.zmax * 1.75
    );
    if (this.zrange > this.zmax || this.zrange < this.zmin) {
      this.zrpol *= -1;
    }
    this.zoff += 0.0075;
    this.zwave = map(
      noise(this.zoff),
      0,
      1,
      this.zmin,
      this.zmax - this.zrange
    );
    this.r = this.zwave;

    //// Make rain, if big enough
    if (this.arange > 2.5) {
      let yesrain = random(1);
      if (yesrain < 0.005 && !this.rainfall) {
        this.rainfall = true;
        this.rainpos = this.pos.copy();
      }
    }

    if (this.rainfall) {
      push();
      translate(this.rainpos.x, this.rainpos.y);
      noFill();
      stroke(255, 125);
      let dropsize = map(this.arange, 0, 3.7, -6, 6);
      strokeWeight(2 + dropsize);
      point(0, 0);
      let rcolor = map(this.zrange, this.zmin, this.zmax, 300, -100);
      stroke(0, 100, 200, 255);
      strokeWeight(dropsize);
      point(0, 0);
      pop();
      this.rain();
    }

    /// Make Clouds
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();

    if (j === 0) {
      fill(175, 255);
      circle(0, 0, this.r + this.zmax * 0.075);
    }
    if (j === 1) {
      let ccolor = map(this.zrange, this.zmin, this.zmax, 125, 355);
      fill(ccolor, 255);
      circle(0, 0, this.r);
    }
    pop();
  };
  this.rain = function () {
    if (this.rainfall) {
      this.rainpos.add(this.rainvel);
      if (this.rainpos.y > height) {
        this.rainpos = this.pos.copy();
        this.rainfall = false;
      }
    }
  };
}

function butterFly(mouseX, mouseY, rot) {
  push();
  translate(width / 2, height / 2);
  rotate(myMap);
  translate(width * -0.5, height * -0.5);
  //Lwing Bottom
  fill(255, 185, 200);
  beginShape();
  curveVertex(width * 0.57, height * 0.81);
  curveVertex(width * 0.6, height * 0.723);
  vertex(width * 0.72, height * 0.7);
  curveVertex(width * 0.69, height * 0.75);
  curveVertex(width * 0.68, height * 0.8);
  endShape(CLOSE);
  //Rwing Bottom
  fill(255, 185, 200);
  beginShape();
  curveVertex(width * 0.83, height * 0.8);
  curveVertex(width * 0.79, height * 0.72);
  curveVertex(width * 0.62, height * 0.7);
  curveVertex(width * 0.71, height * 0.7);
  curveVertex(width * 0.72, height * 0.8);
  endShape(CLOSE);
  //Lwing Top
  fill(255, 173, 230);
  beginShape();
  curveVertex(width * 0.6, height * 0.6);
  curveVertex(width * 0.612, height * 0.7);
  curveVertex(width * 0.7, height * 0.7);
  vertex(width * 0.71, height * 0.7);
  endShape(CLOSE);
  //Rwing Top
  beginShape();
  curveVertex(width * 0.8, height * 0.6);
  curveVertex(width * 0.78, height * 0.7);
  curveVertex(width * 0.686, height * 0.7);
  vertex(width * 0.686, height * 0.7);
  endShape(CLOSE);
  //Body
  fill(210, 180, 140);
  ellipse(width * 0.7, width * 0.7, width * 0.04, width * 0.15);
  //Head
  fill(255, 185, 102);
  ellipse(width * 0.7, width * 0.62, width * 0.035, width * 0.05);
  pop();
}
