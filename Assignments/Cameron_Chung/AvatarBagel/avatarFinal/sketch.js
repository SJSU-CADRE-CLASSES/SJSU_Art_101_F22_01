let detailY;
let c = 800;
let d = 800;
  //sensitivity for orbit control
let sesitivityX;
let sensitivityY;
let sensitivityZ;
  //mic global
let mic;

/// trying to find

function setup() {
  
  createCanvas(c, d, WEBGL);
  
  //audio setup
  mic = new p5.AudioIn(); 
  mic.start();

  //slider for bagel evolution
  detailY = createSlider(0, 17, 0);
  detailY.position(10, height + 10);
  detailY.style('width', '800px');
}

function draw() {
  
  //mic.getLevel
  micLevel = mic.getLevel();
  console.log(mic.getLevel()*500);
  
  //light and movement of background
  background(micLevel*2000, micLevel*1000, micLevel*1600);
  let radius = width * 1.5;
  
  //auto rotation
  rotateY(frameCount * 0.007);
  ambientLight(10);
  orbitControl(3,3,3);

  //point light
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 100, 120, locX, locY, micLevel* 3000);
  specularMaterial(250);
  shininess(50);
  
  //personl bagel
  torus(windowWidth/10, 50, detailY.value());
  noStroke();
  //console.log(windowWidth)

  //surrounding environment / movement of surrounding torus
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
