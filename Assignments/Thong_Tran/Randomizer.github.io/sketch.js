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

function setup() {
  createCanvas(400,400);
  background (200);

  //console.log(dogs([]).type);
  console.log(dogs[int(random(4))]);
}

function draw() {
  background(220);

}
