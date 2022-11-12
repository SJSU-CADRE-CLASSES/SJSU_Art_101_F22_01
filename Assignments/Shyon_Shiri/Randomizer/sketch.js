var backgroundColor;
var isOverCircle;

let dancingWords = [];

let maxDistance;

class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian() {
    this.x += random(-7, 7);
    this.y += random(-7, 7);
    this.element.position(this.x, this.y);
  }
}

function setup() {

  createCanvas(800, 800);
  
  backgroundColor = color(300, 50, 12);

  
   createP(
    'Grades Homeworks Work Job Tests Sores Finals Mid-Terms SAT ACT' +
      ' Bills Taxes Projects Family Friends Stress Worry Deadlines Assignments Responsibilty Perfection Capability Disrupment Confusion '
  ).addClass('text').hide();
  
   const texts = selectAll('.text');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
      const dw = new DanceSpan(spannedWord, random(600), random(150));
      dancingWords.push(dw);
      
      noStroke();
  max_distance = dist(0, 0, width, height);
      
    }
  }
}
 
function draw() {
  
   for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
  
  background(backgroundColor);
 

  var distance = dist(mouseX, mouseY, 200, 200); 
  

  if(distance < 150)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  
  rect(290, 385, 35, 150, 100);
  rect(345, 385, 35, 150, 100);
  rect(290, 240, 90, 175, 160);
  ellipse(285, 330, 50, 120);
  ellipse(380, 330, 50, 120);
         
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
  if(isOverCircle == true)
  {
    fill(100);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  
ellipse(335, 200, 100, 100);         
circle(365,220,12);
circle(305,220,12);

}
 
function mousePressed()
{
  if(isOverCircle == true)
  {
    backgroundColor = color(random(255), random(400), random(255));
  }
}
}