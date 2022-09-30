
function setup() {
    let cnv = createCanvas(400,400);
    cnv.mousePressed(userStartAudio);
    mic = new p5.AudioIn();
    mic.start();
  }
  
  function draw() {
    background(150,200,300)
    
    
    size = 30;
    widthMult = 4;
    heightMult = 150;
    wall();
    
    micLevel = mic.getLevel();
    let y = 30 + micLevel * 3000;
    head();  
    leftEye();
    rightEye();
    mouth(200,310,y);
    eyebrow();
    nose();
    whiskers();
    ears();
    ball(mouseX,mouseY);
   
    
    
    
     
   
  
   }
  
  function head(){
    // fill('rgba(200,200,250,.5)') 
     fill('0') 
    circle(200, 200, 350);
  }
  
  function leftEye(){
    fill (20);
    //ellipse (100,180,55,40);
    ellipse (100,190,60,30);  
  }
  
  function rightEye(){
    fill (20);
    //ellipse (300,180,55,40);
    ellipse (300,190,60,30);
  }
  
  function mouth(mouthX,mouthY,mouthZ){
    line(200, 300, 200, 245);
    fill("#FCDAEC");
    arc(mouthX, mouthY, 100, mouthZ,250, PI +QUARTER_PI,CHORD); 
  }
  
  function eyebrow(){
    fill("#5F4D3D")
    arc(80, 140, 70, 20, 50, PI + QUARTER_PI, CHORD);
    arc(320, 140, 70, 20, 50, PI + QUARTER_PI, CHORD);
  }
  
  function nose(){
    fill("#5F4D3D")
    triangle(200, 250, 180, 220, 220, 220,)
  }
  
  function whiskers(){
    line(20, 200,80,220);
    line(20, 230,80,230);
    line(20, 260,80,240);
    
    line(380, 200,320,220);
    line(380, 230,320,230);
    line(380, 260,320,240);
  }
  
  function ears(){
    fill("#5F4D3D")
    triangle(40,120, 20,20,120,50); 
    triangle(380,20, 275,40,360,130);
    
    fill("#eb8ab6")
    triangle(60,100, 40,40,100,60);
    triangle(360,40, 300,60,340,100);
  }
  
  function move(){
    translate(width/2,height/2);
    rotate(angle);
    fill(55);
    noStroke();
    rectMode(CENTER);
    square (100,190,60,30);
    angle +=radians(100);
  }
  
  function ball(){
    fill("#FFC107")
    ellipse (mouseX,mouseY,50,50);
  }
  
  
  function wall(){
    
    strokeWeight(3);
    startR = (100);
    startG = (120);
    startB = (165);
    background(startR + 45, startG + 45, startB + 45);
    for (x = width; x > -size * widthMult; x -= size) {
    for (y = height; y > -size * heightMult; y -= size) {
    fill(
        (startR, startR + 90),
        (startG, startG + 90),
        random(startB, startB + 90)
        );
    push();
    translate(x + size / 2, y + size / 2);
    rect(
          0,
          0,
    size * floor(random(1, widthMult)),
    size * floor(random(1, heightMult))
    );
    pop();
    // noLoop();
    }
    }
    }
  
  
  
   