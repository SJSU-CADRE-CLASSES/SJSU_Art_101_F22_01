//Boba Milkteas
let milkteas = [{
  name: "Brown sugar boba milktea",
  color: "brown and black"
}, {
  name:"Matcha latte",
  color:"green"
}, {
  name: "Thai tea",
  color: "orange"
}, {
  name: "Fruit tea",
  color:"rainbow color"
}];

let colorful = ["#cdb4db","#ffc8dd","#8BC34A", "#f4a261", "#bde0fe", "#ffc8dd","#ffb4a2","#bbd0ff", "#d0f4de"];

let randomIndex;

// let counter = 0

let animating = false;

function setup(){
  createCanvas(displayWidth,displayHeight);
  background(21,116,200);
  textSize(45);

  text("Click to Randomize", width/2, height/2);

  // setTimeout(changeBackground,2000);
//console.log("initial array is")
//console.log(milkteas);

//milkteas.pop();
//console.log("array after pop");
//console.log(milkteas);

//milkteas.push("oolong"):
//console.log("array after push")
//console.log(milkteas);

//milkteas.shift();
//console.log("array after shift");
//console.log(milkteas);

//milkteas.unshift("oolong"):
//console.log("array after unshift")
//console.log(milkteas);

// console.log(milkteas[1].color);

// console.log(milkteas[randomIndex].name);
// console.log(milkteas);
}

function draw(){
  if(animating == true){
    noStroke();
    fill(random(colorful));
    ellipse(random(width),random(height),random(10,300));
  }
}

// function changeBackground(){
//   if (counter <= 10){
//     counter++;
//   background(random(230),random(250),random(200));
//   setTimeout(changeBackground, 2500);
// } else {
// }
// }

function randomizer(){
  animating = false;

  if (milkteas[0]){
  background(0);
  randomIndex = int(random(milkteas.length));
 text(`${milkteas[randomIndex].name}'s favourite color is ${milkteas[randomIndex].color}.`,width*0.1,height*0.2);
 // text(milkteas[randomIndex].name + "'s favourite color is " + milkteas[randomIndex].color + ".",width*0.1,height*0.2);
 milkteas.splice(randomIndex,1);
} else {
  background(0);
  text("Nothing Left!", width/2, height*0.2);
  }
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer,2000);

}
