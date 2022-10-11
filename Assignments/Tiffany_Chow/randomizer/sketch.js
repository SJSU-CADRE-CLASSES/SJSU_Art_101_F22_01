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

let randomIndex;

function setup() {
  createCanvas(600,600);
  background(200);

 
 
}
function mousePressed() {
  background(random(200,255));
   randomIndex = int(random(owls.length));
  Text(owls[randomIndex].name,50,50);
  owls.splice(randomIndex, 1);
}

function draw(){

}