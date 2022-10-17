let circleY = [];
let pic; 

function preload(){
  pic = loadImage('bears.JPG');
  
}

function setup() {
  pic = loadImage('bears.JPG'); // Load the image
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 25; i++) {
    circleY[i] = random(height);
  }
}

function draw() {
  background(255);
  
  image(pic, 0, -50, windowWidth, windowWidth);
  
  for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 25);

    circleY[i]++;
    
    if (circleY[i] > height) {
      circleY[i] = 0;
    }
  }
}