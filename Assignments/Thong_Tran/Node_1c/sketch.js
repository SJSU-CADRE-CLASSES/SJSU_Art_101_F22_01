function setup() {
  createCanvas(400, 400);
  
  mic = new p5.AudioIn();
  mic.start();
}
  function draw() {
  background(220,110,45);
    
  //left eye
  fill('white');
  ellipse(width*.35, width*.25, width*.15, width*.15);
    
  //right eye
    fill('white');
  ellipse(width*.62, width*.25, width*.15, width*.15);
    
    //mouth
    fill('red');
  arc(width*.5, width*.5, width*.15, width*.5, 0, PI + QUARTER_PI/25, CHORD);
    
    strokeWeight(5);
    
    //left iris
    fill(random(200), random(200), random (200));
    ellipse(width*.35, width*.25, width*.05, width*.05);
    
    //right iris
    fill(random(200), random(200), random (200));
    ellipse(width*.62, width*.25, width*.05, width*.05);
    
    //upper ellipse
    fill (random(200), random(200), random (200));
    ellipse(width*.02, width*.1, width*.5,width*.5);
    //right corner square
    fill (random(200), random(200), random (200));
    square(width*.80,height*.80,width*10);
    
    //left corner cicle 
    fill(random(200), random(200), random (200));
    circle(width*.2, width*.85, width*.25);
    
    //left cheek
    fill(0);
    arc(width*.3, width*.4, width*.09, width*.09, 0, PI + QUARTER_PI, OPEN);
    
    //right cheek
    
     arc(width*.7, width*.4, width*.09, width*.09, 0, PI + QUARTER_PI, OPEN);
    fill(0,0);
    
    //right chin
    arc(width*.5, width*.60, width*.3, width*.3, 100, PI/5 + QUARTER_PI/15, OPEN)
    //left chin
    arc(width*.2, width*.60, width*.3, width*.3, 100, PI/6 + QUARTER_PI/15, OPEN)
 
}