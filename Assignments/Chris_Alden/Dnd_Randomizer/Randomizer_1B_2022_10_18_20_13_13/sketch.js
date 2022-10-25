
//sources for images --> https://www.dndbeyond.com/classes
//this is array 1
  let dndRaces = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Halfling",
    "Human",
    "Tiefling",
    "Half-Orc",
    "Leonin",
    "Satyr",
    "Aasimar",
    "Changling",
  ];
  let dnds = [];
function preload (){
    for (let i = 1; i <= 12; i++){
        dnds[i] = loadImage(`Assets/dnd_${i}.png`)
    }
}
let randomIndex;
let animating = false;

  function setup() {
    console.log(dnds);
    createCanvas(600, 600);
    background(220);
    strokeWeight(2);
    textSize(32);
    console.log("initial race array");
    console.log(dndRaces);
    
  }
  
  function draw () {
    if(animating == true){
        clear();
        image(random(dnds), 40, 40);
    }
}
function randomizer() {
    animating = false;
    if (dndRaces) {
        randomIndex = int(random(dndRaces.length));
        console.log(dndRaces[randomIndex]);
        image(random(dnds), 40, 40);
        text(dndRaces[randomIndex], 50, 400);
    }
}

  function mousePressed() {
    animating = true;
    background(random(200, 255));
    setTimeout(randomizer, 500);

  }