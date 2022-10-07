function setup() {
    createCanvas(400,400);
    background(237,239,239);
    //noStroke();
    //strokeWeight()
  }
  
  function draw() {
    let x = width/2
    let y = height/4
  
    //face
   fill(0,0,0)
  square(125,25,150);
    
     fill (228,184,139)
  ellipse(x,y,width/5.3,width/5)
  
    //eyes
    fill (255)
    ellipse (width/1.9,width/4.44,width/40,width/30.7)
    ellipse (width/2.10,width/4.44,width/40,width/30.7)
    
    //iris
    fill (width/3.88,width/6.8,width/6.8)
    ellipse (width/1.9,width/4.4,width/80,width/100)
    ellipse (width/2.10,width/4.4,width/80,width/100)
    
   // fill (228,184,139)
    beginShape();   
   vertex(200,95) 
   curveVertex (200,105)
    curveVertex (205,110)
    
    
     fill(51,255,251)
   rect(width/2.67,width/2.3,width/4,width/2.67)
    
    fill (0)
     square (width/1.9,width/2,width/13.3);
  fill (0)  
   rect (width/2.5,width/1.23,width/13.3,width/13.3)
    rect (width/1.9,width/1.23,width/13.3,width/13.3)
    
    fill (228,184,139)
    ellipse(width/1.7,width/1.10,width/16,width/16)
    ellipse(width/2.2,width/1.10,width/16,width/16)
    
    //sleeves (right,left)
       fill (0)
  
    rect (width/1.6,width/1.9,width/13.33,width/13.33)
  rect (width/3.33,width/1.9,width/13.33,width/13.33)
    
    point 
    //hands (right,left)
   
    fill (228,184,139)
    
   ellipse(width/1.37, width/1.77,width/16,width/16)
    ellipse(width/3.63,width/1.77,width/16,width/16)
    
  
  }
  
  