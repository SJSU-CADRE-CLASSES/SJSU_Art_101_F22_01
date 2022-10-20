var img;
let servantImg = []; 
var bgImg;

let mySound; 

let summons = [];
let num;
let bgColor = 155;
let txtSize = 20; 
let animating = false; 
let button; 

function preload() {
  // preload() runs once, it may make you wait
  img = loadImage('assets/Saintquartz.png');
  bgImg = loadImage('assets/summonBg.jpeg'); 

  for (let i = 0; i <= 6; i++){
    servantImg[i] = loadImage("assets/s"+ i+".png"); 
  }

  soundFormats('ogg');
  mySound = loadSound('assets/summmoning.ogg');
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  summons[0] = new Servant("Senji Muramasa", "Saber", servantImg[0]);
  summons[1] = new Servant("Aśvatthāman", "Archer", servantImg[1]);
  summons[2] = new Servant("Scáthach", "Lancer", servantImg[2]);
  summons[3] = new Servant("Odysseus", "Rider", servantImg[3]);
  summons[4] = new Servant("Huyan Zhuo", "Assassin", servantImg[4]);
  summons[5] = new Servant("Merlin", "Castor", servantImg[5]);
  summons[6] = new Servant("Arjuna (Alter)", "Beserker", servantImg[6]);
  
  background(bgImg);
  //textSize(txtSize);
  //text("CLICK to randomize", width/2.3, height/2); 

  //button = createButton("Click to Randomize"); 
  button = select("#randButton"); 
  button.mousePressed(buttonPressed); 
  button.class("randomizerButton"); 
}

function draw() {
  //background(bgColor);
  //colors[0].display();
  //colors[0].getName();
  //colors[0].getColor();
  
  if(animating == true) { 
    fill(random(255), random(255), random(255));
    size = random(50, 500); 
    image(img, random(width)-100, random(height)-100, size, size); 
  }
}

function buttonPressed() {
  animating = true;
  mySound.play(); 
  // Changes the background after 1 second. 1000 = 1 second. 1000ms
  //setTimeout(changeBackGround, 1000);

  // 3 seconds
  setTimeout(Randomizer, 5000); 
}

function Randomizer() {
  animating = false; 
  mySound.stop();
  
  background(bgImg);
  num = random(summons.length);
  summons[int(num)].display();
  summons[int(num)].whoWhos();
}

//function changeBackGround() {
//   background(random(255), random(255), random(255)); 
//}