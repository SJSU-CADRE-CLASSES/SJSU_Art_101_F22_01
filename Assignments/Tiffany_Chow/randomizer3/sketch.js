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
  let hootys = [];

  function preload(){
    for (let i = 0; i <= 13; i++){
      hootys[i] = loadImage(`image/hooty_${1}.JPG`)
    }
  }

  function setup(){
    createCanvas(displayWidth,displayHeight);
    background(186, 136, 240 );
    textSize(50);
    imageMode(CENTER);
    frameRate(12);
   

    text("click to randomize, width/2, height/2");
     console.log(hootys);

function draw(){
 

  if(animating == true){
     clear();
   Image(hootys[imageCounter],width/2, height/2);

   if (imageCounter < hootys.length - 1)
   imageCounter++;
   console.log(imageCounter); 
  }else{
    imageCounter = 0;
  }
}
   
  function randomizer(){
    animating = false;
  
    if (owls[0]){
    background(0);
    clear();
    randomIndex = int(random(owls.length));
   text(owls[randomIndex].name,50,50);
   image(random(hootys), width/2,height /2);
   owls.splice(randomIndex,1);
  } else {
    background(0);
    text("nothing left!", width/2, height*0.2);
    }
  }
  //  function randomizer(){
  //   animating = false;
  
  //   if (owls[0]){
  //   background(0);
  //   clear();
  //   randomIndex = int(random(owls.length));
  //  text(`${owls[randomIndex].name}'s favourite color is ${owls[randomIndex].color}.`,width*0.1,height*0.2);
  //  // text(owls[randomIndex].name + "'s favourite color is " + owls[randomIndex].color + ".",width*0.1,height*0.2);
  //  owls.splice(randomIndex,1);
  // } else {
  //   background(0);
  //   text("nothing left!", width/2, height*0.2);
  //   }
  // }
  
  function mousePressed(){
    animating = true;
    setTimeout(randomizer,2000);
  
  }