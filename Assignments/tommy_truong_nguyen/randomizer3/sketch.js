//card rarities
let rare = [{
    name: "Common", nation: "Dragon" }, {
    name: "Holo Rare", nation: "Dark"}, {
    name: "Special Parallel", nation: "Keter"}, {
    name: "Rare", nation: "Stoicheia"}, {
    name: "Double Rare", nation: "Brandt"}, {
    name: "Triple Rare", nation: "Lyrical"}, {
    name: "DSR", nation: "Drajeweled"}]

let randomIndex;
let animate = false;
let raika = [];
let imageCounter = 0;
let button;

function preload(){

    for (let i = 0; i <= 16; i++){
        //raika[i] = loadImage("assets/raika_" + i + ".JPG")
        raika[i] = loadImage(`assets/raika_${i}.JPG`)
    }

}

function setup() {
    createCanvas(600, 600);
    background(200);
    textSize(32);
    imageMode(CENTER);
    frameRate(24);

    text("click to randomize", 50, 50);
    
    button = createButton("click to randomize")
    button.mousePressed(buttonPressed);
}

function draw() {

    if(animate == true){
        clear();
        //ellipse(random(width), random(height), random(50, 200));
        image(raika[imageCounter], width/2, height/2);

        if (imageCounter < raika.length - 1)
        imageCounter++;
    }   else {
        imageCounter = 0;
    }
    
}

function randomizer() {
    animate = false; 

    if (rare[0]){
        //background(random(200, 255));
        clear();
        randomIndex = int(random(rare.length));
        text(`${rare[randomIndex].name} from  ${rare[randomIndex].nation}`, width / 2, height - 25);
        //text(rare[randomIndex].name + "from" + rare[randomIndex].nation, 50, 50);
            image(random(raika), width/2, height/2);
        rare.splice(randomIndex, 1);
    } else {
        background(random(200, 255));
        text("nothing left", 50, 50);
    }

}

function buttonPressed() {

    animate = true; 
    setTimeout(randomizer, 2000);

}