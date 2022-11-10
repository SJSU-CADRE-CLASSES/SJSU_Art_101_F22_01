let osc, playing, freq, amp;
let value = 0;
let cloudx = 100;
let cloudy = 100;


 function setup() {
  let cnv = createCanvas (500, 400) ;
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
   strokeWeight(2); 
    fill(0);
  }

function draw() {
  
  if (mouseIsPressed == true) {
    fill(100,3,4); // purple
  }
  else {
    fill(1,2,85);   // blue
  }
  rect(1, 1, 500, 500);

  let x = width/2;
  let y= height/4.5;
  
  fill(51);
rect(220,115,60,85);
rect(220,195,20,85);
fill(51);
rect(260,195,20,85);
fill(51);
rect(280,120,20,60);
fill(51);
rect(200,120,20,65);
fill(170,100,60);
  rect(0,280,500,120);
fill(140);
ellipse(x,y,50,60);
fill(180,3,0);
circle(265,85,12);
circle(235,85,12);
fill(130,100,0);
triangle(500, 400, 200, 295, 25, 337);
triangle(337, 330, 120, 286, 40, 350); 
  
  fill(120)
  arc(205, 188, 25, 80, 18, PI + QUARTER_PI, PIE);
describe(
  'grey ellipse with top right quarter missing with black outline around the shape'
);
  
  arc(295, 185, 25, 80, 200, PI + QUARTER_PI, PIE);
describe(
  'grey ellipse with top right quarter missing with black outline around the shape'
);
  
  if ((mouseX > 40) && (mouseX < 80) && (mouseY > 20) && (mouseY < 80)){
    fill(180);
  }
  else {
    fill(210);
    
    ellipse(75, 65, 60, 80);
    
     freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text('tap to play', 440, 20);
  text('freq: ' + freq, 440, 40);
  text('amp: ' + amp, 428, 60);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);  
    
  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 100, cloudy + 100)
  fill(200);
  cloudx+=0.1;
  
  function makeCloud(cloudx, cloudy) {
  fill(250)
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
    
    
  }
    
}
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}