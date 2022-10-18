//Boba Milkteas
let milkteas = [{
  name: "Brown sugar boba milktea",
}, {
  name:"Matcha latte",
}, {
  name: "Thai tea",
}, {
  name: "fruit tea",
}];

let colorful = ["#cdb4db","#ffc8dd","#8BC34A", "#f4a261", "#bde0fe", "#ffc8dd","#ffb4a2","#bbd0ff", "#d0f4de"];

let randomIndex;

// let counter = 0
 let button;

let animating = false;

let toppings = [];

let imageCounter = 0;

function preload(){
  for ( let i = 0; i <= 4 ; i++ ){
    toppings[i] = loadImage(`images/toppings_${i}.png`)
  }
}

function setup(){
  createCanvas(displayWidth*0.8,displayHeight*0.8);
  background(21,116,200);
  textSize(45);
  imageMode(CENTER);
  frameRate(6);

  text("What drink should you get today?", width*0.1, height/4);


  button = createButton("Click to randomize");
  button.mousePressed(pressingButton);
}

function draw(){
  if(animating == true){
    noStroke();
    fill(random(colorful));
    ellipse(random(width),random(height),random(10,300));
    image(toppings[imageCounter], width/2, height/2);
    if (imageCounter < toppings.length - 1){
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer(){
  animating = false;

  if (milkteas[0]){
    clear();
  randomIndex = int(random(milkteas.length));
 text(`You should get ${milkteas[randomIndex].name} with`,width*0.1,height*0.2);
image(random(toppings), width/2, height/2);
 // milkteas.splice(randomIndex,1);
} else {
  background(colorful);
  text("Don't Drink Anymore!", width/2, height*0.2);
  }
}

function pressingButton(){
  animating = true;
  setTimeout(randomizer, 1500);

}
