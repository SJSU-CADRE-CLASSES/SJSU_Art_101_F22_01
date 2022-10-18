//dog's habit and favorite colors

let dogs = [{
    //red
    name: "mowgli", habit: "to run", color: 'red'
}, {
    //purple
    name: "rico", habit: "to sleep", color: 'rgba(100%,0%,100%,0.5)'
}, {
    //blue
    name: "scooby", habit: "to play", color: 'rgb(0,0,255)'
}, {
    //yellow
    name: "simba", habit: "to eat", color: 'rgb(255,255,0)'
}, {
    //green
    name: "aero", habit: "to destroy things", color: 'rgb(0,255,0)'
}];
let randomIndex;

function setup() {

  createCanvas (600, 600);
  background (200);
  

}

function draw () {
    

}
function mousePressed () {
    clear();
    randomIndex = int(random (dogs.length));
//    background (random(200, 225));
    background (dogs[randomIndex].color);
  
    text(dogs[randomIndex].name, 50, 50);
    text(concat(" likes ", dogs[randomIndex].habit), 50 + 6 * dogs[randomIndex].name.length, 50);

}