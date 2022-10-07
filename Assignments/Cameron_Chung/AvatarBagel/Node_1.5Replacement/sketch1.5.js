// how many points in teh line (length)
let numPoints = 60;
let points = [];

let tryOne;

function setup () {
  createCanvas (windowWidth, windowHeight);
  noCursor();
  
  for(let i=0; i<numPoints; i++){
    let point = createVector(width/2, height/2);
    points.push(point);
  }
  
  tryOne = new colorLine();
}

function draw () {
  background(50);
  tryOne.display();
}
