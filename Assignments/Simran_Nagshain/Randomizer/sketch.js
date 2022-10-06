//dog's favorite colors

let dogs = [{
    name: "mowgli", color: "to run"
}, {
    name: "rico", color: "to sleep"
}, {
    name: "scooby", color: "to play"
}, {
    name: "simba", color: "to eat"
}, {
    name: "coco", color: "to destroy things"
}];
let randomIndex;

function setup() {

  createCanvas (600, 600);
  background (200);
  

}

function draw () {
    

}
function mousePressed () {
    background (random(200, 225));
    randomIndex = int(random (dogs.length));
    text(dogs[randomIndex].name, 50, 50);
    console.log ("likes", dogs[randomIndex].color);
    dogs.splice(randomIndex, 1);
}