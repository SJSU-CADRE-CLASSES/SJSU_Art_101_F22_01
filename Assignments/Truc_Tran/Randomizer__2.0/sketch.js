let bubble = [];
let myColors = ["#ccaed0", "#eebfd3", "#eeabac", "#f4c9a5", "#f8e7a7", "#cce2bc", "#cbe4e4","#c5dbeb",];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  for (let i = 0; i <= 0; i++)
//{bubble.push(new bubbles(random(width),random(height)));
  {bubble[i] = new bubbles(random(width), random(height));
}   
}

function draw() {
  background('white');
  for ( let i = 0; i < bubble.length;i++){
  bubble[i].display();
  bubble[i].move();
}
  Hello();
}

function mousePressed(){
  bubble.push(new bubbles(mouseX,mouseY))
  for (let i = 0; i < bubble.length; i++)
    (bubble[i].mousePressed())
}

function Hello(){
  push();
  textSize(20);
  fill('white');
  text('HELLO! DO YOU SEE ME? ☺', width*.15, height*.5,)
  pop();
}

function keyPressed(){
 console.log("mouse");
 if (key == ' ') { bubble.splice(0,1);}
}
  
