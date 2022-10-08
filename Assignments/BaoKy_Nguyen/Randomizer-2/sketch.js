//Boba Milkteas
let milkteas = [{
  name: "brownSugar",
  color: "brown and black"
}, {
  name:"Matcha",
  color:"green"
}, {
  name: "thaiTea",
  color: "orange"
}, {
  name: "fruitTea",
  color:"colorful"
}];

let mycolors = ["#cdb4db","#ffc8dd","#8BC34A", "#f4a261", "#bde0fe", "#ffc8dd","#ffb4a2","#bbd0ff", "#d0f4de"];

let randomIndex;

function setup(){
  createCanvas(displayWidth,displayHeight);
  background(21,116,200);
  textSize(45);


//console.log("initial array is")
//console.log(milkteas);

//milkteas.pop();
//console.log("array after pop");
//console.log(milkteas);

//milkteas.push("oolong"):
//console.log("array after push")
//console.log(milkteas);

//milkteas.shift();
//console.log("array after shift");
//console.log(milkteas);

//milkteas.unshift("oolong"):
//console.log("array after unshift")
//console.log(milkteas);

// console.log(milkteas[1].color);

// console.log(milkteas[randomIndex].name);
// console.log(milkteas);
}

function draw(){

}

function mousePressed(){
  if (milkteas[0]){
  background(random(mycolors));
  randomIndex = int(random(milkteas.length));
 text(milkteas[randomIndex].name ,width/3,height*0.2);
 milkteas.splice(randomIndex,1);
} else {
  background(random(mycolors));
  text("nothing left!", width/3, height*0.2);
  }
}
