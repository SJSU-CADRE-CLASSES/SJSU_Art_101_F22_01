// angels from the Uvalde School Shooting
let angels = [{
  name: "Alexandria",
  color: "10"
},{
  name: "Alithia",
  color:"10"
},{
  name:"Amerie",
  color:"10"
},{
  name:"Annabell",
  color: "10"
},{
  name: "Eliahna Torres",
  color: "10"
},{
  name:"Eliahna Garcia", 
  color:"9"
},{
  name:"Eva",
  color:"44"
},{
  name:"Irma",
  color:"48"
},{
  name:"Jackie",
  color:"9"
},{
  name:"Jailah",
  color:"10"
},{
  name:"Jayce",
  color:"10"
},{
  name:"Jose",
  color:"10"
},{
  name:"Layla",
  color:"11"
},{
  name:"Maite",
  color:"10"
},{
  name:"Makenna",
  color:"10"
},{
  name:"Maranda",
  color:"11"
},{
  name:"Nevaeh",
  color:"10"
},{
  name:"Rojelio",
  color:"10"
},{
  name:"Tess",
  color:"10"
},{
  name:"Uziyah",
  color:"8"
},{
  name:"Xavier",
  color:"10"
}];

let randomIndex;
let animating = false;




function setup() {
  createCanvas(600,600);
  background(200);
  textSize(32);
  
  text("Click to Remember", 50, 50);
}

function draw() {
  
  if(animating == true){
    ellipse(random(width), random(height), random(50, 200));
    
  }
}


function randomizer(){
  animating = false;
  
  
  if (angels[0]) {
  // this displays random name and splices it out of array
  background(random(255),random(255),random(255));
  randomIndex = int(random(angels.length));
    text(angels[randomIndex].name + " was " +     angels[randomIndex].color + " years young", 50, 50);
  angels.splice(randomIndex, 1);
} else {
 background(random(200,255));
  text("The Police did nothing to save them!", 50, 50);
}
  
}


function mousePressed(){
  animating = true;
  setTimeout(randomizer, 2000);
  
}