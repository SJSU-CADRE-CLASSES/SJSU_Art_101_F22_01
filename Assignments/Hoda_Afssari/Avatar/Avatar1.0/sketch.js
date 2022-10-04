//let count = 0
function setup() {
    createCanvas(500,500);
    background(255);
    
  }
  
  function draw() {
    let x = width/2 //x=250
    let y = height/3.33 //y=150
     rectMode (CENTER);
      ellipseMode(CENTER);
    //noStroke
    // strokeWeight (.75)
    
  //face
    push()
    fill (0);  
    square(x,y,width/2.5);
    fill (228,184,139);
    ellipse(x,y,width/4.5,width/4.25);
    pop()
    
  push()
    //eyebrows
   // rotate(0)
    fill (0)
    rect(235,115,17,3)
    rect(265,115,17,3)
    pop()
    
   //eyes 
    
    //outer(r,l)
    push()  
    fill (225);
    ellipse(width/2.13,height/3.85,height/40,width/30.7);
    ellipse(width/1.89,height/3.85,height/40,width/30.7);
    pop()
    
  //inner
    push()
     fill (98,52,18);
    ellipse (width/2.13,height/3.77,width/100,height/100.5);
    ellipse (width/1.89,height/3.77,width/100,height/100.5);
    pop()
   
  //   //eyelashes
  //   //line()
    
    
    //nose
   push() 
    beginShape();
    noFill ()
  curveVertex(width/2, height/3.57); 
    curveVertex(width/2, height/3.44);
    curveVertex(width/2, height/3.18)
  curveVertex(width/1.81, height/3.03);
  endShape();
    pop()
    
   //  push()
   // //translate(10,10)
   //  rotate()
   //  arc(250, 170, 100, 80, 0, PI + QUARTER_PI, CHORD)
   //  rotate(100)
   // pop()
    
  //   beginShape()
  //   line(195,165,305,165)
  //   line(195,165,250,210)
  //   line(305,165,250,210)
    
  //   // let p1=(18
  //   // let lb=line(195,165,250,210)
  //   // let lc=line(305,165,250,210)
  //   let p1 = { x: 195, y: 165 };
  // let p2 = { x=195, y=165 };
  // let p3 = { x=250, y=210 };
  // let p4 = { x: 305, y: 165 };
  //   curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    
    // endShape()
    
    //body
    push()
    fill (51,255,251)
    //fill(random(255),random(255),random(255))
    //rectMode(CENTER)
   rect(width/2,height/1.54,width/5,height/3.33)
    
    pop()
    
    push()
    //pocket
      fill (0)
    square (width/1.85,height/1.8,width/16.7);
    pop()
    
    //smileyface
   push()
    fill(51,255,251)
    noStroke()
    circle (width/1.88,height/1.81,width/166.6)
    circle (width/1.81,height/1.81,width/166.6)
    
   fill(51,255,251)
     stroke(55)
  line(width/1.88,height/1.75,width/1.81,height/1.75); 
   pop()
     
    
    //arms rl
   push()
    fill (0)
    rect (width/1.6,height/1.72,width/16.66,height/20); 
    rect (width/2.68,height/1.72,width/16.66,height/20);
    pop()
    
     //hands
    push()
    fill (228,184,139)
    ellipse(width/1.5,height/1.72,width/20,height/18.5)
    ellipse(width/3,height/1.72,width/20,height/18.5)
    pop()
  
    
    //legs
  push()
    fill (0)
     rect (width/1.85,height/1.2,width/18.5,height/14.3)
    rect (width/2.17,height/1.2,width/18.5,height/14.3)
    pop()
    
    //feet
   push()
    fill (228,184,139)
    ellipse(width/1.85,height/1.125,width/20)
    ellipse(width/2.17,height/1.125,width/20)
    pop()
  }
  
  
  // function draw(){
  //   if (count<360)(
  //     count++) 
  //   else if (count==360)(count=0);
    
  //   //eyes
  //     //outer(r,l)
  //   push()  
  //   fill (225);
  //   rotate(count);
  //   ellipse(width/2.13,height/3.85,height/40,width/30.7);
  //   ellipse(width/1.89,height/3.85,height/40,width/30.7);
    
  // //inner
  //    fill (98,52,18);
  //   ellipse (width/2.13,height/3.77,width/100,height/100.5);
  //   ellipse (width/1.89,height/3.77,width/100,height/100.5);
  //   pop()
    
  // }