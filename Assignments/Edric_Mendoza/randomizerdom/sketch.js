let cars = [];

let randomIndex;
let animating = false;
// let counter = 0;
let memes = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs; = [];
let firstTime = true;

function preload() {
  for (let i = 0; i <= 4; i++) {
    memes[i] = loadImage(`assets/meme_${i}.JPG`)
  }

}


function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  background(20, 40, 200);
  textSize(22);
  textFont('Courier new');
  textAlign(CENTER);
  fill(255);
  imageMode(CENTER);
  frameRate(8);

  text("click to randomize", 50, 50);
  // console.log(memes);

  // button = createButton("click to randomize");
  startRandomizerButton = select('#randButton')
  startRandomizerButton.mousePressed(addAnotherInput);

  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(buttonPressed);

  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
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

  if (animating == true) {
    clear();
    image(memes[imageCounter], width / 2, height / 2);
    if (imageCounter < memes.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
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
function addAnotherInput() {
  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }

  function randomizer() {
    animating = false;
    if (cars[0]) {
      // background(random(200, 225));
      clear();
      randomIndex = int(random(cars.length));
      image(random(memes), width / 2, height / 2);
      text(cars[randomIndex], width / 2, height - 25);
      // text(cars[randomIndex].name + " is " + cars[randomIndex].color, 50, 50);
      cars.splice(randomIndex, 1);
    } else {
      background(random(200, 225));
      text("nothing left", 50, 50);
    }
  }

  function buttonPressed() {
    if (firstTime) {
      for (let i = 0; i < nameInputs.length; i++) {
        dogs.push(nameInputs[i].value());

      firstTime = false;
    }
    animating = true;
    setTimeout(randomizer, 2000);


  }
