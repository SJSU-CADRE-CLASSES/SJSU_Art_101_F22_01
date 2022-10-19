//owls hooty being crazy 
let owls = [{
    name: "the sad one",
    do: "run" ,
    color: "red"
  }, {
    name:"mull",
    do: "play" ,
    color:"pink"
  }, {
    name: "the happy one",
    do: "jump" ,
    color: "blue"
  }, {
    name: "joy",
    do: "fly" ,
    color:"green"
  }];
  
  // let star = ["#E6E82D","#FF4F00","#C2FFCD", "#EEC2FF","#EEFFFF"];
  
  let randomIndex;
  let animating = false;
  let hootys = [];
  letimageCounter = 0;
  let button;

  function preload(){
    for (let i = 0; i <= 13; i++){
      hootys[i] = loadImage('image/hooty_'+i+'.jpg')
    }
  }

  function setup(){
    createCanvas(200,200);
    background(200);

    imageMode(CENTER);
    frameRate(9);
  
    text ("click to randomize",20, 20);
     console.log(hootys);
     button = createButton("click to randomize");
     button.mousePressed(buttonPressed);
  }

function draw () {
 

  if(animating == true){
     clear();
   image(hootys[imageCounter],width/2, height/2);

   if (imageCounter < hootys.length - 1){
   imageCounter++;
   console.log(imageCounter); 
  }else{
    imageCounter = 0;
  }
}
}

function randomizer (){
  animating = false;
 
  clear();
  randomIndex = int(random (owls.length));

  image(random(hootys),width/2, height/2);
  textSize (32);
  text(`${owls[randomIndex].name} will ${owls[randomIndex].do}`, width/6, height - 150);
  fill(owls[randomIndex].color);
}


  // function randomizer(){
  //   animating = false;
  
  //   if (owls[0]){
  //   background(0);
  //   clear();
  //   randomIndex = int(random(hootys.length));
  //  text(owls[randomIndex].name,50,50);
  //  image(random(hootys), width/2,height /2);
  //  owls.splice(randomIndex,1);
  // } else {
  //   background(0);
  //   text("nothing left!", width/2, height*0.2);
  //   }
  // }


  
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
    function buttonPressed () {
    animating = true;
    setTimeout(randomizer,2000);
  
  }
