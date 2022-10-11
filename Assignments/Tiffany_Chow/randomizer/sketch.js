// owl
let owls =[{
  name:"cry",
  color: "two"
},{
  name:"sad",
  color: "four"
},{
  name:"happy",
  color:"six" 
}];
let owls = [{
    name: "sad",
    color: "red and blue"
  }, {
    name:"joy",
    color:"pink"
  }, {
    name: "bonk",
    color: "white"
  }, {
    name: "mull",
    color:"yellow"
  }];
  

  
  let randomIndex;
  
  function setup(){
    createCanvas(displayWidth,displayHeight);
    background(121,6,20);

// function setup() {
//     cearteCanvas(600,600);
//     background(200);

//     owls[0]= "one"
//     owls[1]= "two"

//     console.log("initial arry is");
//     console.log(owls);

//     owls.splice(4,1);
//     console.log("array after splice")
//     console.log(owls);

//     owls.unshift("alive");
//     console.log("array after push")
//     console.log(owls);

// }

function draw(){

}

function mousePressed(){
  background(random(colorful));
  randomIndex = int(random(owls.length));
 text(owls[randomIndex].name ,width/3,height*0.2);
owls.splice(randomIndex,1);

}