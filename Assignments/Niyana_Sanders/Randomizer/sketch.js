// the people I love
let members = [{
  name: "Jalani",
  color: "dog treat color"
}, {
  name: "Elijah",
  color: "chartrese"
},{
  name: "Darrel",
  color: "poop"
},{
  name: "Kalani",
  color: "rose gold"
},{
  name: "Imani",
  color: "coffee grind brown"
},{
  name: "Amari",
  color: "startdust"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);

}

function draw () {

}

function mousePressed() {
    background(random(255));
    randomIndex = int(random(members.length));
    text(members[randomIndex].name, 50, 50);
    members.splice(randomIndex, 1);
}
