//owls names is hooty 
let owls = [{
    name:":3",
    do: "run" ,
    color: "red"
  }, {
    name:"lol",
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
  
  let randomIndex;
  let animating = false;
  let hootys = [];
  let imageCounter = 1;
  let button;

  function preload(){
    for (let i = 1; i <= 13; i++){
      hootys[i] = loadImage('image/hooty_'+i+'.jpg');
      
    }
  }

function setup(){
    createCanvas(400,400);
    background(200);

    imageMode(CENTER);
    //frameRate(9);
  
    text ("click to randomize",20, 20);
     console.log(hootys);
     button = createButton("click to randomize");
     button.mousePressed(buttonPressed);
  }

function draw(){
  hootys[imageCounter]
  if(animating == true){
    clear();
  //here
    image(hootys[imageCounter],200,200);

    if (imageCounter < hootys.length - 1){
    imageCounter++;
    console.log(imageCounter); 
    }else{
      imageCounter = 1;
    }
  }
}

function randomizer(){
  animating = false;
 
 clear();
  randomIndex = int(random (owls.length));

  image(random(hootys),windowWidth/2, windowHeight/2);
  textSize (30);
  text(owls[randomIndex].name+' will '+owls[randomIndex].do, 60,200);
  fill(owls[randomIndex].color);
}

function buttonPressed(){
    animating = true;
    setTimeout(randomizer,2000);
 }