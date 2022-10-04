function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(100);
    
    body();
    ponytail(100,30);
    collar();
    head(200,200);
    eye();
    mole();
    big_hair();
    small_hair();
    eyebrow(60,60);
    mouth();
    iris(40,60);
    
  }
  function body(){
     push();
    strokeWeight(3);
    fill('rgba(0,255,0, 0.25)');
    stroke(255);
    quad(160, 290, 240, 290, 270, 410, 130, 410);
    //body^
    pop();
  }
  function ponytail(xpos,ypos,rot){
     push();
    translate(width/xpos,height/ypos);
    fill(51);
    stroke(51);
    quad(240, 280, 250, 260, 265, 350, 230, 380);
    //ponytail^
    pop();
    
  }
  function collar(){
     push();
    fill(255);
    stroke(255);
    triangle(160, 290, 200, 300, 175, 320);
    triangle(200, 300, 240, 290, 225, 320);
    //collar^
    pop();
    
  }
  function head(xpos,ypos,rot){
     push();
    translate(width/xpos,height/ypos);
    strokeWeight(3);
    fill('rgb(211,211,211)');
    stroke(255);
    ellipse(width*.5, width*.5, width*.5,width*.5);
    //head^
    pop();
    
    
  }
  function eye(){
     push();
    strokeWeight(3);
    fill(51);
    stroke(255);
    arc(250, 215, 60, 60, 0, PI + QUARTER_PI, CHORD);
    //eye^
    pop();
    
  }
  function mole(){
     push();
    strokeWeight(4);
    stroke(255);
    fill(51);
    stroke(51);
    point(250, 250);
    //mole^
    pop();
    
  }
  function big_hair(){
     push();
    fill(51);
    stroke(51);
    quad(70, 170, 220, 50, 260, 120, 100, 290);
    //big hair^
    pop();
    
  }
  function small_hair(){
     push();
    fill(51);
    stroke(51);
    quad(270, 100, 310, 130, 300, 260, 250, 130);
    //small hair*
    pop();
    
  }
  function eyebrow(xpos,ypos,rot){
     push();
    translate(width/xpos,height/ypos);
    strokeWeight(2);
    fill(51);
    stroke(255);
    rect(210, 160, 70, 20);
    //eyebrow^
    pop();
    
  }
  function mouth(){
     push();
    fill(51);
    stroke(51);
    circle(200, 280, 20);
    //mouth^
    pop();
    
  }
  function iris(xpos,ypos,rot){
    push();
    translate(width/xpos,height/ypos)
    fill('rgb(0,255,0)');
    square(240, 215, 15);
    //iris^
    pop();
    
  }