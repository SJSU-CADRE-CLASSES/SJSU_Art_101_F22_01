//dog's habit and favorite colors

let dogs = [{
    //red
    name: "mowgli", habit: "to run", color: 'red'
}, {
    //pink
    name: "rico", habit: "to sleep", color: 'hsb(315,100%,100%)'
}, {
    //light purple
    name: "scooby", habit: "to play", color: 'rgb(190,190,255)'
}, {
    //yellow
    name: "simba", habit: "to eat", color: 'rgb(255,255,0)'
}, {
    //green
    name: "aero", habit: "to destroy things", color: 'rgb(0,255,0)'
}];
let randomIndex;
let animating = false;
let dog = [];
let t = "my favorite dogs and their habits";
let imageCounter = 0;
let button;

function preload(){
    for (let i = 0; i <=4; i++){
       dog[i] = loadImage('images/dog_'+i+'.jpg'0
   }
}



function setup() {

  createCanvas (600, 600);
  background (200);
  imageMode(CENTER);
  frameRate(5);
  textSize(30);
  text (t, width/2 - 230, height/2);
  console.log (dog);
  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

}

function draw () {

    if (animating == true){
        ellipse (random(width), random (height), random(50,550));
    } 

}

function randomizer (){
    animating = false;
    clear();
    randomIndex = int(random (dogs.length));
for (imageCounter = 0; imageCounter < dog.length - 1; imageCounter++){
    image(dog[imageCounter],width/2, height/2);
   }
   image(dog[randomIndex],width/2, height/2);
   textSize (32);

    fill(dogs[randomIndex].color);
    text(`${dogs[randomIndex].name} likes ${dogs[randomIndex].habit}`, 20, 30);

}

function buttonPressed () {
    animating = true;
    setTimeout (randomizer, 2000);
  
}