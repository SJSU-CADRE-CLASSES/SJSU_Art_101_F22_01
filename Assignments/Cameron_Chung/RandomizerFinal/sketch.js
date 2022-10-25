let draft, ready;
let animating = false;
let randomIndex; 
let button;
let shapes = [];
 

shapes = ['Draw a heart', 'Draw a circle', 'Draw a square', 'Draw a triangle']

function preload() {
  ready = loadImage("assets/sanrio_0.png");
  draft = loadImage("assets/background.jpg");

}

function setup() {
  createCanvas(1000, 800);
  textSize(15);
  image(ready, 0, 0);
  image(draft, 0, 0);
  randomIndex = int(random(shapes.length)-1);
  text(str(shapes[randomIndex]), 50, 50);
  console.log(shapes[0]);
  clearButton = createButton('click to change prompt');
  clearButton.mousePressed(clearScreen);
}

function randomizer(){
    animating = false;
    if(shapes[0]){
    clear();
    randomIndex = int(random(shapes.length)-1);
    text(shapes[randomIndex], 50, 50);
    console.log(shapes[0])
    shapes.splice(randomIndex, 1);
    } else{
    image(ready, 0, 0);
    image(draft, 0, 0);
    }
}

function clearScreen() {
  animating = true;
  randomIndex = int(random(shapes.length)-1);
  image(ready, 0, 0);
  image(draft, 0, 0);
  text(shapes[randomIndex], 50, 50);
}

function mouseDragged() {
  copy(ready, mouseX, mouseY, 20, 20, mouseX, mouseY, 40, 40);
}
