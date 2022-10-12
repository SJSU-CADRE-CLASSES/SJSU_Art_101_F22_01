let width = 400;
let goLeft = false;


function setup() {
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {

  // background(138, 154, 91);
  let x = map(mouseX, 138, width, 154, 91);

background(x,154,91);
  fill(50);

  eyes(2.8,1.5);
  eyelids(2.8,1.5);
  lips();
  mouth(400/2,height/2);
  tongue();
  cloud(2.8,1.5);

  push();
   // let cloud = color(49, 40, 40, 50);
fill(49, 40, 40, 50);
    noStroke();
    circle(400/2.2,height/1.8,51);
    circle(400/2.3,height/2,72);
   // circle(400/2.4,height/2.55,103);
  circle(400/2.1,height/3,124);
   // circle(400/2,height/4.6,145);
    circle(400/2.5,height/9,156);
    circle(400/1.1,height/9,147);
   // circle(400/1.3,height/8,148);
    circle(400/1.5,height/9,149);
    circle(400/1.7,height/8,141);
    circle(400/1.9,height/9,142);
   // circle(400/2,height/8,143);
    circle(400/11,height/9,144);
    circle(400/5,height/8,145);
    circle(400/4,height/9,146);
    //lowerlevel_cloud
   // circle(400/5.5,height/6,147);
    circle(400/9,height/5.7,148);
    circle(400/3,height/5.5,149);
    circle(400/1.6,height/4.5,141);
    circle(400/1.3,height/4,142);
  //  circle(400/1.1,height/5,143);
  pop();

  push();
  micLevel = mic.getLevel();
  let y = micLevel;
  fill(49, 40, 40, 50);
  noStroke();
 // ellipse(width/2, height/1.7, y*1000, y*1000);
  ellipse(400/2,height/1.7, y*1000,mic.getLevel()*1000);
  pop();

  //mouseover blunt
  push();
  fill(111, 78, 55);
  posX= constrain(mouseX,0,355);
  posY= constrain(mouseY,150,300);
  rect(posX, posY, 100, 10);
  console.log(mouseX)
  pop();

}

function windowReseized(){
  resizeCanvas(windowWidth,windowHeight);
}

function eyes(posOne,posTwo){
    //eyes

    push();
  //eyes
  let eyes = color(227, 66, 52);
fill(eyes);
  noStroke();
  circle(400/posOne,height/2.8,122);
  circle(400/posTwo,height/2.8,122);
  //pupils
  fill(0)
  ellipse(400/posOne,height/2.8,400/8);
  ellipse(400/posTwo,height/2.8,400/8);
  pop();
}

function eyelids(posOne,posTwo){
  //eyelids

  push();
//eyelids
  let eyelids = color(139, 128, 0);
fill(eyelids);
  arc(400/posOne,height/2.88,400/3.2, 130, PI, 0 + TWO_PI);
  arc(400/posTwo,height/2.75,400/3.2, 130, PI, 0 + TWO_PI);
  pop();

}
function mouth(){
  push();
 let mouth = color(193,104,115);
fill(mouth);
  circle(400/2, height/1.7,50);

  pop();

}
function cloud(xpos,ypos){
  push();
  // translate(width/xpos,height/ypos);
  // rotate(count*.25);
  // translate(width*-.5,height*-.5);
 let cloud = color(49, 40, 40, 50);
fill(cloud);
  noStroke();
  //upperlever_cloud
    // circle(width/2.2,height/1.8,51);
    //circle(width/2.3,height/2,72);
    //circle(width/2.4,height/2.55,103);
    //circle(width/2.1,height/3,124);
    circle(width/2,height/4.6,145);
    circle(width/2.5,height/9,156);
    circle(width/1.1,height/9,147);
    circle(width/1.3,height/8,148);
    circle(width/1.5,height/9,149);
    circle(width/1.7,height/8,141);
    circle(width/1.9,height/9,142);
    circle(width/2,height/8,143);
    circle(width/11,height/9,144);
    circle(width/5,height/8,145);
    circle(width/4,height/9,146);
    //lowerlevel_cloud
    circle(width/5.5,height/6,147);
    circle(width/9,height/5.7,148);
    circle(width/3,height/5.5,149);
    circle(width/1.6,height/4.5,141);
    circle(width/1.3,height/4,142);
    circle(width/1.1,height/5,143);
    if (goLeft == false){
          width= width+.4

    }
  if (goLeft==true){
    width=width-.4

  }
  if(width>400)
    {
      goLeft= true;

    }
  if(width<0)
    {
      goLeft= false;
    }

  pop();
}

function lips(){
  push();
  let lips = color(139, 128, 0);
  // 120,220,95
 //let lips = color(210,134,115);
fill(lips);
    noStroke();
  circle(400/2, height/1.7,65);

  pop();

}

function tongue(){
push();
 let tongue = color(255, 182, 193);
fill(tongue);
      //noStroke();
  arc(400/2.06, height/1.57, 40, 70, 0, PI + QUARTER_PI);
pop();
}
