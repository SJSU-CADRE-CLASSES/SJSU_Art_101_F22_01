let colors = [{
  name: "rose",
  color: "red"
}, {
  name: "pumpkin",
  color: "orange"
}, {
  name: "banana",
  color: "yellow"
}, {
  name: "grass",
  color: "green"
}, {
  name: "sky",
  color: "blue"
}, {
  name: "lavender",
  color: "purple"

}];

let randomIndex;
let counter = 0;
let animating = false;
let trolls = [];
let imageCounter = 0;
let button;


function preload() {
  for (let i = 0; i <= 5; i++) {
    trolls[i] = loadImage(`assets/troll_${i}.jpeg`)
  }
}




function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(100);
  imageMode(CENTER);
  text("click to randomize", width/2, height/2);
  //setTimeout(changeBackground,1000);
  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

  console.log(trolls);
  frameRate(8);


}

function draw() {
  if (animating == true) {
    clear();
    image(trolls[imageCounter], width/2, height/2);

    if (imageCounter < trolls.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }


  }
}
// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//     console.log(counter);
//     background(random(255),random(255),random(255));
//     setTimeout(changeBackground,1000);
// } else {
//
// }
function randomize() {
  animating = false;

  if (colors[0]) {
    clear();
    randomIndex = int(random(colors.length));
    text(`${colors[randomIndex].name} is ${colors[randomIndex].color}`, width/2, height/2);
    // text(colors[randomIndex].name + "is",width*0.5,height*0.5 +
    // colors[randomIndex].color,width*0.5,height*0.5);
    image(radom(trolls), width/2, height/2);
    colors.splice(randomIndex, 1);
  } else {
    background(random(200, 240));
    text("nothing left!", 50, 100);
  }

}

function buttonPressed() {
  animating = true;

  setTimeout(randomize, 2000);


}
