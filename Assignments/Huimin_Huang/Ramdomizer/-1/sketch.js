let dogs =[{name:"dilion", color:"dog treat"},{name:"Ziggy",color:"chartrese"},{name:"mercedes",color:"poop"},{name:"petunia", color:"rose gold"},{name:"kloot",color:"coffee grind brown"},{name:"nala", color:"stardust"}]

let randomIndex;
function setup(){
    createCanvas(600, 600);
    background(200);


}
function draw(){

}

function mousePressed(){
  background(random(200,255));
  randomIndex = int(random(dogs.length));
 text(dogs[randomIndex].name, 50, 50);
dogs.splice(randomIndex, 1);
}
