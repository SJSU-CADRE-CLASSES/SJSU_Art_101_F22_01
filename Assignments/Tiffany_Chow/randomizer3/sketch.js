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
  
  let star = ["#E6E82D","#FF4F00","#C2FFCD", "#EEC2FF","#EEFFFF"];
  
  let randomIndex;
  let animating = false;
  
  function setup(){
    createCanvas(displayWidth,displayHeight);
    background(186, 136, 240 );
    textSize(50);

    text("click to randomize, width/2, height/2");

    // setTimeout(changeBackground,1000);
  }
  
  // function changeBackground(){
  //   background(random(225),random(225),random(225));
  //   setTimeout(changeBackground, 1000);
  // }
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
  if(animating == true){
    noStroke();
    fill(random(star));
    ellipse(random(width),random(height),random(10,100));
  }
}
   
  function randomizer(){
    animating = false;
  
    if (owls[0]){
    background(0);
    randomIndex = int(random(owls.length));
   text(`${owls[randomIndex].name}'s favourite color is ${owls[randomIndex].color}.`,width*0.1,height*0.2);
   // text(owls[randomIndex].name + "'s favourite color is " + owls[randomIndex].color + ".",width*0.1,height*0.2);
   owls.splice(randomIndex,1);
  } else {
    background(0);
    text("nothing left!", width/2, height*0.2);
    }
  }
  
  function mousePressed(){
    animating = true;
    setTimeout(randomizer,2000);
  
  }
 

  
  // function draw(){
  
  // }
  
  // function mousePressed(){
  //   if(owls[0]){

  //   }
  //   background(random(star));
  //   randomIndex = int(random(owls.length));
  //  text(owls[randomIndex].name ,width/3,height*0.2);
  //  owls.splice(randomIndex,1);
  
  // }