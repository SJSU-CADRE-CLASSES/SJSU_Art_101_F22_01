// negative words
let negative = ["sad", "anxiety", "lonely", "strees","depression","frustration"]
let smileFace = [];

function setup() {
  createCanvas(400, 400);
  
  negative[1] = "anxious",
  console.log(negative);
  
  
  smileFace[0] = new smileFaceClass(width*.5, height*.3);
}

function draw() {
  background('white');
  smileFace[0].display();
}
