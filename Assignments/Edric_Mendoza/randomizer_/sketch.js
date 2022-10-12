let cars = [{
  name: "jetta",
  color: "green"
}, {
  name: "mustang",
  color: "grey"
}, {
  name: "glk",
  color: "black"
}, {
  name: "beetle",
  color: "blue"
}, {
  name: "venue",
  color: "blue"
}];

let randomIndex;
let animating = false;
// let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(220);
  textSize(22);

  text("click to randomize", 50, 50);

  // randomIndex = int(random(dog.length));
  // text(cars[randomIndex].name, 50, 50);
  // cars.splice(randomIndex, 1);

  // console.log(cars[randomIndex].name);
  // console.log(cars);
  // console.log(cars[0].name);

  // console.log("initial arrat is")
  // console.log(cars);
  // cars.splice(2, 2);
  // console.log("array after splice")
  // console.log(cars);

  // cars.unshift("mustang");
  // console.log("array after unshift")
  // console.log(cars);

// setTimeout(changeBackground, 1000);
// setInterval(changeBackground, 1000);

}

function draw() {
if (animating == true){
  ellipse(random(width), random(height), random(50, 200));
}
}
// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//     console.log(counter)
//
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 1000);
// } else {
//
// }
// }
function randomizer(){
  animating = false;
  if (cars[0]){
    background(random(200,225));
    randomIndex = int(random(cars.length));
    text(`${cars[randomIndex].name} is ${cars[randomIndex].color}`, 50, 50);
    // text(cars[randomIndex].name + " is " + cars[randomIndex].color, 50, 50);
    cars.splice(randomIndex, 1);
  } else {
    background(random(200,225));
    text("nothing left", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
