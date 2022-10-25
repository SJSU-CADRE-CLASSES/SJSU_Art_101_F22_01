let draft, ready;
let animating = false;
let randomIndex; 
let button;
let shapes = [];
 
shapes[0] = "heart";
shapes[1] = "circle";
shapes[2] = "square";
shapes[3] = "triangle";
//console.log(shapes);

function preload() {
  ready = loadImage("assets/sanrio_0.png");
  draft = loadImage("assets/background.jpg");
//   for (let i = 0; i <= 3; i++){
//     shapes[i] = text(`${shapes[randomIndex]}`, 50, 50);
// }
}

function setup() {
  createCanvas(1000, 800);
  textSize(15);
  image(ready, 0, 0);
  image(draft, 0, 0);
  text('''+shapes[randomIndex]+''', 50, 50);
  clearButton = createButton('click to change prompt');
  clearButton.mousePressed(clearScreen);
}

function randomizer(){
    animating = false;
    if(shapes[0]){
    clear();
    // background(random(200, 255));
    randomIndex = int(random(shapes.length));
    //text(shapes[randomIndex], 50, 50);
    console.log(shapes[0])
    shapes.splice(randomIndex, 1);
    } else{
    image(ready, 0, 0);
    image(draft, 0, 0);
    }
}

function clearScreen() {
  animating = true;
  clear();
  image(ready, 0, 0);
  image(draft, 0, 0);
  //text(`${shapes[randomIndex]}`, 50, 50);
}

function mouseDragged() {
  copy(ready, mouseX, mouseY, 20, 20, mouseX, mouseY, 40, 40);
}
