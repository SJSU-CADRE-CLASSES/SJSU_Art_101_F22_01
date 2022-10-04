let mic;
let count = 0;
let speed = 5;
let x;
  x = 20
let y;
  y = 259
function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(128, 212, 255);
  mountain();
  iceberg();
  penguBody();
  penguFace();
  guntherWeh(text);
  //weh();

}
function mountain(){
  push();
  strokeWeight(5);
  stroke(153, 223, 255);
  fill(153, 223, 255)
  triangle(-80, 475, 64, 36, 260, 475);
  triangle(300, 475, 444, 36, 640, 475);
  fill(204, 239, 255);
  triangle(-80, 475, 64, 36, 180, 475);
  triangle(300, 475, 444, 36, 560, 475);
  pop();
}
function iceberg(){
  push();
  strokeWeight(5);
  stroke(153, 223, 255);
  fill(204, 239, 255);
  rect(-10, 360, width+80, 100);
  fill(153, 223, 255);
  rect(-10, 450, width+80, 100);
  noStroke();
  fill(179, 230, 255);
  ellipse(250, 406, 200, 36);
  pop();
}
function penguBody(){
  push();

  strokeWeight(2);
  stroke(30);
  fill(50,50,55)
  ellipse(130, 300, 70, 160);
  fill(57, 58, 63)
  ellipse(246, 250, 272, 312);
  fill(255, 250, 225)
  ellipse(225, 250, 220, 280);
  strokeWeight(2);
  stroke(40);
  rotate(5.01 / 0.1);
  fill(50,50,55)
  ellipse(290, 360, 70, 160);
  pop();
}

function penguFace(){
//   push();
//   strokeWeight(2);
//   stroke(60);
//   fill(20,200)
//   ellipse(260, 200, 60, 55);
//   ellipse(165, 200, 60, 55);
//   rotate(5 / 0.1);
//   noStroke();
//   fill(240, 240, 240)

//   ellipse(100, 225, 30, 22.5);
//   ellipse(192, 250, 30, 22.5);
//   fill(255, 204, 0)
//   triangle(150, 280, 140, 250, 60, 260);
//   fill(255, 180, 0)
//   triangle(150, 280, 130, 290, 60, 259);
//   pop();

}

/*
function weh(){
  push();
  fill(50,50,55)
  rotate(4.96 / 0.1);
  noStroke();
  textSize(32);
  text('weh', -100, 230);
  fill(0, 102, 153);
  pop();
}
*/

function guntherWeh(guntherTalk){
  push();
  fill(50,50,55)
  rotate(4.99 / 0.1);
  noStroke();
  textSize(20);
  guntherTalk = text('weh', x, x+240)
  fill(0, 102, 153);
  if (x < -2400){
    x = 50
  }
  x -= speed;
  pop();

  if (count<35){
    count++
  }else if (count==35){count=8};

  micLevel = mic.getLevel();
  if (mouseX>120){
    mouseX=120;
  }else if (mouseX<90){
    mouseX=90;
  }
  if (mouseY<220){
    mouseY=220;
  }else if (mouseY>240){
    mouseY=240;


  }
  push();
  strokeWeight(2);
  stroke(60);
  fill(20,200);
  ellipse(260, 200, 60, 55);
  ellipse(165, 200, 60, 55);
  rotate(5 / 0.1);
  noStroke();
  fill(240, 240, 240)
  // ellipse(100, 225, 15, 11.25);
  // ellipse(192, 250, 15, 11.25);
  ellipse(mouseX, mouseY, 25 + mic.getLevel()*25, 25 + mic.getLevel()*25);
  ellipse(mouseX + 92, mouseY+25, 25 + mic.getLevel()*25, 25 + mic.getLevel()*25);
  fill(255, 204, 0)
  triangle(150, 280, 140, 250, 60, 260);
  fill(255, 180, 0)
  triangle(150, 280, 130, 290, 60, y);

  if (x < -20){
    y = 259
  }
  if (y > 270){
    y = 259
  }
  y += speed/4;
  pop();




// class Triangle{
//   constructor(_xpos, _ypos,_rot,_size){
//     this.xpos = _xpos;
//     this.ypos = _ypos;
//     this.rot = _rot;
//     this.size = _size;

//   }

// display(){
//   push();
//   translate(this.xpos,this.ypos);
//   rotate(this.rot);
//   translate(width*-0.5,height*0.5);
//   scale(this.size);
//   fill(255,100,100,200);
//   beginShape();
//   vertex(width*0.4,height*0.2);
//   vertex(width*0.8,height*0.7);
//   vertex(width*0.2,height*0.8);
//   endShape(CLOSE);
//   pop();
//   }
// }

}
