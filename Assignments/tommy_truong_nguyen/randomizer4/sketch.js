//card rarities
let rare = [];

let randomIndex;
let animate = false;
let raika = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;
let BG;
let cards;

function preload(){

    for (let i = 0; i <= 16; i++){
        //raika[i] = loadImage("assets/raika_" + i + ".JPG")
        raika[i] = loadImage(`assets/raika_${i}.JPG`)
        BG = loadImage("assets/background.JPG");
        cards = loadImage("assets/cards.JPG");
    }

}

function setup() {
    cnv = createCanvas(800, 568);
    cnv.parent("#canvasDiv");

    background(0, 0, 0);
    image(BG, 0, 0);
    image(cards, width/2 - 375, height/2 - 50)
    textSize(36);
    textFont("Matrix II");
    textAlign(CENTER);
    textStyle(BOLD);
    fill(51);
    imageMode(CENTER);
    frameRate(24);

    //text("click to randomize", 50, 50);
    
    //button = createButton("click to randomize")
    startRandomizerButton = select("#randButton");
    startRandomizerButton.mousePressed(buttonPressed);
    //button.class("randomizerButton"); 

    addMoreButton = select("#addMoreButton");
    addMoreButton.mousePressed(addAnotherInput);

    for (let i = 0; i < 1; i++) {
        nameInputs.push(createInput());
        nameInputs[nameInputs.length - 1].parent("#inputFields");
    }
}

function draw() {

    if(animate == true){
        //clear();
        //ellipse(random(width), random(height), random(50, 200));
        image(raika[imageCounter], width/2, height/2);

        if (imageCounter < raika.length - 1)
        imageCounter++;
    }   else {
        imageCounter = 0;
    }
    
}

function addAnotherInput(){
nameInputs.push(createInput());
nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer() {
    animate = false; 

    if (rare[0]){
        //background(random(200, 255));
      
        //clear();
        randomIndex = int(random(rare.length));
        //text(rare[randomIndex].name + "from" + rare[randomIndex].nation, 50, 50);
        image(random(raika), width/2, height/2);

        fill(255);
        rect(width/2 - 120, height/2 - 40, 250, 55);

        fill(51);
        text(rare[randomIndex], width/2, height/2);
       
        rare.splice(randomIndex, 1);
    } else {
        background(random(200, 255));
        fill(51);
        text("DECK OUT", width/2, height/2);
    }

}

function buttonPressed() {

if (firstTime == true){
    for (let i = 0; i < nameInputs.length; i++){
        rare.push(nameInputs[i].value());
    }
    firstTime = false;
}

    animate = true; 
    setTimeout(randomizer, 500);

}