let angle = 0;
let count = 0;
let c1,c2;
let mic;
let vertexY = 270;
let vertexY2 = 310;
let shadowWidth = 120;

let togglee = true;
let toggle = true;
let bbody = [];

function setup(){
  let cnv = createCanvas(400,400);
  mic = new p5.AudioIn();
  mic.start();

  
  
  angleMode(DEGREES);
  
  
   for(let i = 0; i<=2;i++){
   bbody[i] = new ghostBody(random(width*0.9),random( height*0.7),random(360),random(6)/10,random(1,4));
   }
}


function draw(){
  
  micLevel = mic.getLevel();
  
  c1 = color(0);
  c2 = color(255, 153, 0);
    for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
  
  for(let i = 0; i < bbody.length; i++){
   bbody[i].display();
   bbody[i].move();
   }
  
  body();
  eyes();
  whiteeye();
  mouth(); 
  black();
  hand(10,10);
  hand(-80,60);
  
 if (count<360){
    count--
  }else if (count==360){count = 0};
  
  angle = angle + 2;
  // console.log(mouseX,mouseY);
  // console.log(micLevel);
}

function whiteeye(){
  push();
  stroke(255,255,255);
  posX = constrain(mouseX,155,165);
  posY = constrain(mouseY,151,169);
  fill(255,255,255);
  //translate(width*.4, height*.4);
  ellipse(posX, posY, 10, 10);
  pop();
  
  push();
  stroke(255,255,255);
  posX = constrain(mouseX,235,250);
  posY = constrain(mouseY,151,169);
  fill(255,255,255);
  //translate(width*.4, height*.4);
  ellipse(posX, posY, 10, 10);
  pop();

}

function eyes(){
  push();
  fill(20);
  stroke(10);
  ellipse(width*0.4, height*0.4, 20, 30);
  fill(20);
  ellipse(width*0.6, height*0.4, 20, 30);
  pop();
}

function mouth(){
  push();
  fill(1);
  stroke(10);
  ellipse(width*0.5, height*0.5,20,micLevel*600);
  pop();
}


function black(){
  
  if (togglee == true){
      shadowWidth = shadowWidth + 0.3
      } else if(togglee == false){
    shadowWidth = shadowWidth - 0.3    
      }

  if (shadowWidth > 180 || shadowWidth < 120){
    togglee = true
    console.log('true!')
  }
  if (shadowWidth > 180){
    togglee = false
    console.log('false!')
  }

  
  push();
  fill(100);
  noStroke();
  ellipse(width*0.55, height*0.88, shadowWidth, height*0.04);
  pop();
  
  
  
}

function body(){
  
  if (toggle == true){
      vertexY = vertexY + 0.1
      vertexY2 = vertexY2 + 0.1
      } else if(toggle == false){
      vertexY = vertexY - 0.1
      vertexY2 = vertexY2 - 0.1    
      }
  //console.log(vertexY)

  if (vertexY > 330 || vertexY < 270){
    toggle = true
    //console.log('true!')
  }
  if (vertexY2 > 330){
    toggle = false
    //console.log('false!')
  }
  push();
  stroke(10);
  strokeWeight(4);
  fill(255,255,255);
  beginShape();
  curveVertex(width*0.3, height*0.7);
  curveVertex(width*0.36, height*0.25);
  curveVertex(width*0.48, height*0.13);
  curveVertex(width*0.6, height*0.14); 
  curveVertex(width*0.7, height*0.25); 
  curveVertex(width*0.78, height*0.64);
  curveVertex(width*0.8, vertexY);
  curveVertex(width*0.56, vertexY2);
  endShape(CLOSE);
  pop();
  


}

function hand(x,y){
  push();
  translate(width*.38, height*.55)
  rotate(210);
  
  translate(0,0);
  stroke(10);
  strokeWeight(2);
  beginShape();
  fill(255,255,255)
  arc(x,y, 20, 20,120, PI + QUARTER_PI, OPEN);
  endShape(CLOSE);
  pop();
}