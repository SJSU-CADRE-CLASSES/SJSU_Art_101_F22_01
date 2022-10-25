let shapes = [{
  name: "circle"
}, {
  name: "square"
}, {
  name: "triangle"
}, {
  name: "star"
}, {
  name: "ellipse"
}, {
  name: "rhombic"
}, {
  name: "parallelogram"
}, {
  name: "pentagon"
},
];

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
  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(10);
  imageMode(CENTER);
  text("Memory Test", width/2, height/2);
  //setTimeout(changeBackground,1000);
  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);
  button.position(240, 610);

  console.log(trolls);
  frameRate(5);


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

  if (shapes[0]) {
    clear();
    randomIndex = int(random(shapes.length));
    text(`What color is the ${shapes[randomIndex].name} ?`, width/2, height/2);
    // text(colors[randomIndex].name + "is",width*0.5,height*0.5 +
    // colors[randomIndex].color,width*0.5,height*0.5);
    image(radom(trolls), width/2, height/2);
    shapes.splice(randomIndex, 1);
  } else {
    // background(random(200, 240));
    text("nothing left!", 50, 100);
  }

}

function buttonPressed() {
  animating = true;

  setTimeout(randomize, 2000);


}
