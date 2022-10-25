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
  age: "5"
}, {
  name: "bobo",
  type: "monty",
  age: "8"
}];

let randomIndex;
let animating = true;
let dog = [];
let imageCounter = 1;
let button;


function preload() {
  for (let i = 1; i <= 4; i++) {
    (dog)[i] = loadImage('assets/dog__' + i + '.jpg')
  }
}


function setup() {
  createCanvas(600, 600);
  background(200);
  textSize (40);
  text("click to begin", 50, 50);
  imageMode(CENTER);
  // setTimeout(changeBackground, 2000);
  frameRate(2);

button = createButton ("click to randomize");
button.mousePressed (buttonPressed);
}
function draw() {


  if (animating == true) {
    clear();
    image(dog[imageCounter], width / 2, height / 2);

    if (imageCounter < dog.length - 1) {

      imageCounter++;

    } else {
      imageCounter = 1;
    }
  }

}
// function changeBackground() {
//   background(random(200), random(249), random(255));
// }
function randomizer() {
  animating = false;

  if (dogs[0]) {

    // background(random(200, 255));
    clear();
    randomIndex = int(random(dogs.length));

   
    image(random(dog), width / 2, height / 2);
       text(dogs[randomIndex].name, width/2, height - 100);
    dogs.splice(randomIndex, 1);

  } else {
    text("end", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}