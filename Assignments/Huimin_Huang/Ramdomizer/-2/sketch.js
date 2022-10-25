let dogs =[{name:"dilion", color:"dog treat"},{name:"Ziggy",color:"chartrese"},{name:"mercedes",color:"poop"},{name:"petunia", color:"rose gold"},{name:"kloot",color:"coffee grind brown"},{name:"nala", color:"stardust"}]

let randomIndex;
let animating = false;
let counter = 0;
function setup(){
    createCanvas(600, 600);
    background(200);
    textSize(32);

    text("click to randomize",50,50);

    setTimeout(changeBackground,1000);

}
function draw(){

    if(animating == true){
      ellipse(random(width), random(height), random(50, 200));
    }
}

function changeBackground(){
  if (counter <= 5) {
    counter++;
    console.log(counter)
  background(random(255),random(255),random(255));
  setTimeout(changeBackground,1000);
} else {

}
}

function randomizer(){
  animating = false;
    if (dogs[0]){

  background(random(200,255));
  randomIndex = int(random(dogs.length));
 text(`${dogs[randomIndex].name }'s favorite color is
${dogs[randomIndex].color}`, 50, 50);
dogs.splice(randomIndex, 1);
} else {
  background(random(200,255));
  text("nothing left!",50,50);
}
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer,2000);



}
