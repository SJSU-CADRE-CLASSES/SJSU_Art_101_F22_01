var Nothing = 1; 
var y = 0;

function setup() {
  createCanvas(400, 400); 
}

function draw(){
  background("darkblue");

//fill("lightblue")
//ellipse(200,120,500)  
  
fill("yellow")
ellipse(200,60,500)
  
fill("tan")
rect(-10, -35, 420, 50, 20);
fill("tan")
rect(10, -15, 380, 50, 20);

fill("black")
ellipse(345,325,80);
fill("white")
ellipse(345,325,70);

fill("black")
quad(310, 350, 320, 360, 290, 390, 280, 380);
  
fill("red")
ellipse(50,150,100);
  
fill("red")
ellipse(350,150,100);



  Hand();
  //the other cards in hand 
  fill("white")
  stroke(1);
  rect(115, 75, 160, 210, 5)
  rect(108, 68, 160, 210, 5)
  
  
  
if (Nothing < 0.22) {
      stroke(1);
      rect(120, 70, 160, 210, 5);
    //cardName
      rect (130, 80, 135, 15);
    //picture
      rect (145, 105, 110, 90);
    //description
      rect (130, 205, 135, 60);
      fill("gold")
      textSize(32);
      text("Holo Rare", 130, 180)
    } else if (Nothing < 0.33) {
    //card
      rect(120, 70, 160, 210, 5);
    //cardName
      rect (130, 80, 135, 15);
    //picture
      rect (145, 105, 110, 90);
    //description
      rect (130, 205, 135, 60);
      fill("silver")
      textSize(32);
      text("Rare", 165, 180)
    } else if (Nothing > 0.33 && Nothing < 0.99) {
    //card
      rect (120, 70, 160, 210, 5);
    //cardName
      rect (130, 80, 135, 15);
    //picture
      rect (145, 105, 110, 90);
    //description
      rect (130, 205, 135, 60);
      fill("black")
      textSize(32);
      text("Common", 135, 180)
    } else {
      fill("white")
      rect (120, 70, 160, 210, 5);
      fill("darkblue")
      textSize(100);
      text("?", 165, 200)
    }
  
rect(120, y + 70, 160, 210, 5);
  y = y + -10
  
  Hand2();
  
}

function mousePressed(){
  if (Nothing == 1){
    Nothing = random(0,1);
  } else {
    Nothing = 1;
  }
  if (y == 0 || Nothing > 1 || Nothing < 1){
    y = y + -10;
  } else {
    y = 0;
  }
  console.log(Nothing)
}

function Hand(){
  
  fill("black")
  //fillIn
  quad(50, 170, 120, 170, 40, 300, 120, 350)
  //leftWrist
  quad(40, 300, 120, 350, 120, 400, 30, 400);
  //leftPalmThin
  quad(40, 300, 50, 170, 90, 190, 80, 310);
  //leftPalmBig
  quad(50, 190, 200, 100, 250, 300, 120, 350);
  //fingers
  quad(200, 100, 280, 80, 300, 250, 250, 300);
  //fingertips
  quad(280, 80, 310, 70, 320, 200, 300, 250);
  //thumb
  quad(50, 100, 80, 120, 110, 170, 50, 170);
  //thumbTip
  quad(70, 80, 100, 50, 80, 120, 50, 100);
  
}

function Hand2(xpos, ypos){
  
  translate(0, y);
  fill("black")
  //fillIn
  quad(360, 80, 420, 50, 420, 70, 360, 80);
  //fingerTips
  quad(200, 60, 290, 10, 290, -20, 210, 20);
  //fingers
  quad(270, 20, 290, -20, 420, 50, 360, 80);
  //palm
  quad(360, 80, 420, 70, 420, 250, 390, 250)
  //thumb  
  quad(270, 125, 390, 100, 390, 170, 270, 165);
  //thumbTip  
  quad(220, 140, 270, 120, 270, 170, 220, 180);

}

function Shine(xpos, ypos){
  
translate(xpos, ypos)  
beginShape();
fill("black")
noStroke();
vertex(-10, 10);
vertex(0, 35);
vertex(10, 10);
vertex(35, 0);
vertex(10, -8);
vertex(0, -35);
vertex(-10, -8);
vertex(-35, 0);
endShape();
  
}