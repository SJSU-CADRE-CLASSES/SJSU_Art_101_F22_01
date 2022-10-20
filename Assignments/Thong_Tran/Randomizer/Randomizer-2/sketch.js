//dog
let dogs = [{

name: "teddy",
type: "poodle",
age: "2"
}, {
  name: "sushi",
  type: "poodle",
  age: "2"
}, {
  name: "sausage",
  type: "yorki",
  age:"5"
}, {
  name: "bobo",
  type: "monty",
  age: "8"
}];

let randomIndex;
let animating = true;
function setup() {
  createCanvas(600,600);
  background (200);
  textSize(32);
  text("click to begin", 50, 50);

  setTimeout(changeBackground, 1000);
}
function draw() {
  if (animating == true){
    ellipse(random(width), random(height), random(50,50));
  }
  
}
function changeBackground() {
  background(random(200), random(249), random (255));
setTimeout (changeBackground,1000);
}
function randomizer() {
animating = false; 
  
if (dogs[0]){

background (random(200,255));
randomIndex = int(random(dogs.length));
  
text(dogs[randomIndex].name + "_type:" + dogs[randomIndex].type + "_age:" + dogs[randomIndex].age, 50, 50);
  
dogs.splice(randomIndex, 1);
  
} else {
  text("nothing left!?", 50, 50);
} 
}

function mousePressed () {
  setTimeout(randomizer, 2000);


}
