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

function setup() {
    createCanvas(600, 600);
    background(200);

}

function draw() {
    
}

function mousePressed() {
    background(random(200, 255));
    randomIndex = int(random(rare.length));
    text(rare[randomIndex].name, 50, 50);
    rare.splice(randomIndex, 1);

}