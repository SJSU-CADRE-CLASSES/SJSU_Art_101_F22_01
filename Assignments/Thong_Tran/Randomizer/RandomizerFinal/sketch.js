//dog
let foods = [{

  name: "Pho",
}, {
  name: "Banh Mi",
  
}, {
  name: "Bun Bo Hue",
}, {
  name: "Bun Thit Nuong",
}, {
  name: "Mi Quang",
}, {
  name: "Bun Mam",
}, {
  name: "Curry",
}];

let randomIndex;
let animating = true;
let food = [];
let imageCounter = 1;
let button;
let randomButton;


function preload() {
  for (let i = 1; i <= 7; i++) {
    (food)[i] = loadImage('assets/food__' + i + '.jpg')
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  textSize (50);
  imageMode(CENTER);
  // setTimeout(changeBackground, 2000);
  frameRate(2);

button = createButton ("Click to Choose Food for Today");
button.mousePressed (buttonPressed);
button.class ("randomButton");
}
function draw() {


  if (animating == true) {
    clear();
    image(food[imageCounter], width/2, height/2);

    if (imageCounter < foods.length - 1) {

      imageCounter++;

    } else {
      imageCounter = 1;
    }
  }

}
function randomizer() {
  animating = false;

  if (food[0]) {

 
    clear();
    randomIndex = int(random(foods.length));

   
    image(random(food), width/2,height/2);
    foods.splice(randomIndex, 1);

  } else {
    text("Enjoy!", 500, 900);
  }
}
function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}