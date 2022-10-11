//owls
let owls = [{
    name: "the sad one",
    color: "blue and purpule"
  }, {
    name:"mull",
    color:"pink"
  }, {
    name: "the happy one",
    color: "yellow"
  }, {
    name: "joy",
    color:"star"
  }];
  
  let colorful = ["#E6E82D","#FF4F00","#C2FFCD", "#EEC2FF","#EEFFFF"];
  
  let randomIndex;
  
  function setup(){
    createCanvas(displayWidth,displayHeight);
    background(186, 136, 240 );
  
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
  }
  
  function draw(){
  
  }
  
  function mousePressed(){
    background(random(colorful));
    randomIndex = int(random(owls.length));
   text(owls[randomIndex].name ,width/3,height*0.2);
   owls.splice(randomIndex,1);
  
  }