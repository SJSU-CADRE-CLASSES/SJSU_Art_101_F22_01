// dnd character classes
let dnd = [
{name: "Bard", color: "green"},
{name: "Paladin", color: "yellow"}, 
{name: "Wizard", color: "red"}, 
{name: "Sorcerer", color: "orange"}, 
{name: "Rogue", color: "black"}, 
{name: "Cleric", color: "grey"}, 
{name: "Barbarian", color: "magenta"}, 
{name: "Druid", color: "darkgreen"}, 
{name: "Fighter", color: "purple"}, 
{name: "Monk", color: "pink"}, 
{name: "Ranger", color: "brown"}, 
{name: "Warlock", color: "teal"}
];

let randomIndex

function setup() {
  createCanvas(600, 600);
  background (200);
  
  randomIndex = int(random(dnd.length));
    console.log(dnd[randomIndex].name);
    text(dnd[randomIndex].name, 50, 50);

dnd.splice(randomIndex, 1);
console.log(dnd);

  console.log ("initial array is");
  console.log (dnd);
  
  dnd.pop();
  console.log ("array after pop");
  console.log (dnd);
  
  dnd.push();
  console.log ("array after push");
  console.log (dnd);
}

function draw() {
  background(220);
}

function mousePressed(){

if (dnd[0]){



    randomIndex = int(random(dnd.length));
    console.log(dnd[randomIndex].name);
    text(dnd[randomIndex].name, 50, 50);
    dnd.splice(randomIndex, 1);
    console.log(dnd);

} else{
    text("nothin' left!", 50, 50);
}
}