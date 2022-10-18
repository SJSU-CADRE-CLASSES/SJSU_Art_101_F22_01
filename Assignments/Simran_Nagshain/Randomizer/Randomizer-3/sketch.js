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
let animating = false;
let dog = [];
let imageCounter = 0;
let button;

function preload(){
    for (let i = 0; i <=4; i++){
       dog[i] = loadImage('images/dog_{i}.jpg')
    }
}



function setup() {

  createCanvas (600, 600);
  background (200);
  imageMode(center);
  frameRate(5);
  text ("click to randomize", 50, 50);
  console.log (dog);
  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

}

function draw () {

if (animating == true){
    clear(); 
   image(dog[imageCounter],width/2, height/2);

   if (imageCounter < dog.length - 1){
    imageCounter++;
    console.log(imageCounter);
   } else {
    imageCounter = 0;
   }
   
}    

}
function randomizer (){
    animating = false;
    clear();
    randomIndex = int(random (dogs.length));
//    background (random(200, 225));
    background (dogs[randomIndex].color);
    text(`${dogs[randomIndex].name} likes ${dogs[randomIndex].habit}`, width/2, height - 50);
   image(random(dog),width/2, height/2);
    //text(concat(" likes ", dogs[randomIndex].habit), 50 + 6 * dogs[randomIndex].name.length, 50);

}

function buttonPressed () {
    animating = true;
    setTimeout (randomizer, 2000);
  
}