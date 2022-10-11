let colors = [{
  name:"rose",
  color: "red"
},{
  name:"pumpkin",
  color:"orange"
},{
  name:"banana",
  color:"yellow"
},{
  name:"grass",
  color:"green"
},{
  name:"sky",
  color:"blue"
},{
  name:"lavender",
  color:"purple"

}];

let randomIndex;
let counter = 0;
let animating = false;



function setup(){
  createCanvas(600,600);
  background(200);
  textSize(32);
  text("click to randomize",width*0.5,height*0.5);
  //setTimeout(changeBackground,1000);

}

function draw(){
  if(animating == true){
    ellipse(random(width), random(height),random(50,200));
    fill(random(255),random(255),random(255));
  }
}
// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//     console.log(counter);
//     background(random(255),random(255),random(255));
//     setTimeout(changeBackground,1000);
// } else {
//
// }
function randomize() {
  animating = false;

  if (colors[0]) {
    background(random(200,240));
    randomIndex = int(random(colors.length));
    text(`${colors[randomIndex].name} is ${colors[randomIndex].color}`,50,100);
    // text(colors[randomIndex].name + "is",width*0.5,height*0.5 +
    // colors[randomIndex].color,width*0.5,height*0.5);
    colors.splice(randomIndex,1);
  } else {
    background(random(200,240));
    text("nothing left!",50,100);
  }

}
function mousePressed(){
  animating = true;

  setTimeout(randomize,2000);


}
