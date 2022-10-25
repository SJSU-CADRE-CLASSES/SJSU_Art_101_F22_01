// Images
var img;
let servantImg = []; 
var bgImg;

// Sounds
let mySound;
let servantSounds = [];  

// Variable Controls
let summons = [];
let num;
let bgColor = 155;
let txtSize = 20; 
let animating = false; 
let button; 

function preload() {
  soundFormats('ogg');

  // Loading my image files
  img = loadImage('assets/Saintquartz.png');
  bgImg = loadImage('assets/summonBg.jpeg'); 

  for(let i = 0; i <= 6; i++){
    servantImg[i] = loadImage("assets/s"+ i+".png"); 
  }

  // Loading my sound files
  for(let i = 0; i <= 6; i++){
    servantSounds[i] = loadSound("assets/sA"+ i+".ogg"); 
  }

  mySound = loadSound('assets/summmoning.ogg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Arraylist of my Servants
  summons[0] = new Servant("Senji Muramasa", "Saber", servantImg[0], servantSounds[0]);
  summons[1] = new Servant("Aśvatthāman", "Archer", servantImg[1], servantSounds[1]);
  summons[2] = new Servant("Scáthach", "Lancer", servantImg[2], servantSounds[2]);
  summons[3] = new Servant("Odysseus", "Rider", servantImg[3], servantSounds[3]);
  summons[4] = new Servant("Oberon", "Prentender", servantImg[4], servantSounds[4]);
  summons[5] = new Servant("Merlin", "Castor", servantImg[5], servantSounds[5]);
  summons[6] = new Servant("Arjuna (Alter)", "Beserker", servantImg[6], servantSounds[6]);
  
  background(bgImg);

  //textSize(txtSize);
  //text("CLICK to randomize", width/2.3, height/2); 

  //button = createButton("Click to Randomize"); 

  // The DOM button
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
    // Stop Servants from talking if the button is pressed
    for(let i = 0; i <= 6; i++){
      servantSounds[i].stop(); 
    }

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

  // 5 seconds
  setTimeout(Randomizer, 5000); 
}

function Randomizer() {
  animating = false;
  
  background(bgImg);
  num = random(summons.length);
  summons[int(num)].display();
  summons[int(num)].whoWhos();

  mySound.stop();
}

//function changeBackGround() {
//   background(random(255), random(255), random(255)); 
//}