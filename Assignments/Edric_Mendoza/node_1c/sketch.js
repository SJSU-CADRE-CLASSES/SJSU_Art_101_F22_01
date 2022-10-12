function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(99, 155, 80);
  fill(90);


  head();
  eyes(2.8,1.5);
  mouth(width/2,height/2);
  cloud(10,10);


}
function head(){
  push();
    let c = color(255, 204, 110);
fill(c);
  noStroke();
  ellipse(windowWidth/2, windowHeight/2);

  //ellipse(200, 200, 365, 389);
  pop();

}

function eyes(){

  push();
  let eyes = color('red');
fill(eyes);
  noStroke();
  circle(115,160,122);
  circle(280,160,122);
  pop();

//   push();
//   let eyes = color('red');
// fill(eyes);
//   noStroke();
//   circle(115,160,122);
//   circle(280,160,122);
//   pop();

  push();
    let pupil = color('#222222');
fill(pupil);
  circle(115,160,60);
    circle(280,160,60);
  pop();

  push();
  let el = color(225, 210, 150);
fill(el);
  arc(115, 160, 130, 130, PI, 0 + TWO_PI, OPEN);
  arc(280, 160, 130, 130, PI, 0 + TWO_PI, OPEN);
  pop();

}
function mouth(){
  push();
 let mouth = color('#fae');
fill(mouth);
arc(200, 270, 80, 80, 0, PI + QUARTER_PI, PIE);
  pop();

}
function cloud(xpos,ypos){
  push();
  // translate(width/xpos,height/ypos);
  // rotate(count*.25);
  // translate(width*-.5,height*-.5);
 let cloud = color(39, 0, 0, 90);
fill(cloud);
  noStroke();
    circle(205,38,81);
    circle(305,42,76);
    circle(345,48,74);
    circle(100,38,77);
    circle(80,49,78);
    circle(38,38,72);
    circle(40,45,78);
    circle(215,38,73);
    circle(325,68,75);
    circle(185,69,48);
    circle(280,39,89);
    circle(175,69,75);
    circle(220,90,66);
    circle(363,38,73);
    circle(63,52,82);
    circle(150,82,82);
    circle(163,44,55);
    circle(263,55,62);
pop();

}
