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

function setup() {
    createCanvas(600, 600);
    background(200);
    textSize(32);

    text("click to randomize", 50, 50);
    
}

function draw() {

    if(animate == true){
        ellipse(random(width), random(height), random(50, 200));
    }
    
}

function randomizer() {
    animate = false; 

    if (rare[0]){
        background(random(200, 255));
        randomIndex = int(random(rare.length));
        text(`${rare[randomIndex].name} from  ${rare[randomIndex].nation}`, 50, 50);
        //text(rare[randomIndex].name + "from " + rare[randomIndex].nation, 50, 50);
        rare.splice(randomIndex, 1);
    } else {
        background(random(200, 255));
        text("nothing left", 50, 50);
    }

}

function mousePressed() {

    animate = true; 
    setTimeout(randomizer, 2000);

}