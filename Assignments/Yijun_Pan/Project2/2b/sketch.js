let colors = [{
  name:"red",
  color: "rose"
},{
  name:"orange",
  color:"juice"
},{
  name:"yellow",
  color:"banana"
},{
  name:"green",
  color:"grass"
},{
  name:"blue",
  color:"sky"
},{
  name:"purple",
  color:"lavender"

}];

let randomIndex;


function setup(){
  createCanvas(600,600);
  background(200);

}

function draw(){

}

function mousePressed(){
  background(random(200,240));
  randomIndex = int(random(colors.length));
  text(colors[randomIndex].name,50,50);
  colors.splice(randomIndex,1);
}
