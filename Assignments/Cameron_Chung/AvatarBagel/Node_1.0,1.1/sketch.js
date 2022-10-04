let detailY;
let c = 800;
let d = 800

//sensitivity fir orbit control
let sesitivityX;
let sensitivityY;
let sensitivityZ;

function setup() {
  
  createCanvas(c, d, WEBGL);

  //slider for bagel evolution
  detailY = createSlider(0, 16, 0);
  detailY.position(10, height + 10);
  detailY.style('width', '800px');
}

function draw() {

  //light and movement of background
  background(190, 80, 100);
  let radius = width * 1.5;
 // rotateX(frameCount * 0.007);
  rotateY(frameCount * 0.007);
  ambientLight(30);
  orbitControl(3, 3, 3);

  //point light
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 100, 120, locX, locY, 50);
  specularMaterial(250);
  shininess(50);
  
  //personl bagel
  torus(100, 50, detailY.value());
  noStroke();

  //surrounding environment / movement
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
    let a = (j / 12) * PI;
    let b = (i / 12) * PI;
        translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b) );
      
      if (j % 2 === 0) {
      torus(25, 10, detailY.value());
      } else {
      torus(25, 10, detailY.value());
      }
      pop();
    }
  }
}
