//new flie
let owls = [{
    name:"Nala",
    do: " a great day!/ᐠ - ˕ -マ <333" ,
    color: "red"
  }, {
    name:"Lucy",
    do: " a colorful and beautiful life.(=^･ω･^=) <33" ,
    color:"green"
  }, {
    name: "Max",
    do: "no barrier comes in your way!!(˶˃ᆺ˂˶)" ,
    color: "blue"
  }, {
    name: "Oliver",
    do: " lots of happiness,and good luck!!ฅ^•ﻌ•^ฅ" ,
    color:"purple"
  }, {
    name:"Callie",
    do: " relax and calming day.(｡^•ㅅ•^｡) <3" ,
    color:"pink"
  }];
  
  let randomIndex;
  let animating = false;
  let cats = [];
  let imageCounter = 1;
  let button;

  function preload(){
    for (let i = 1; i <= 5; i++){
      cats[i] = loadImage('image/cats_'+i+'.jpg');
      
    }
  }

function setup(){
    createCanvas(600,600);
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
    image(cats[imageCounter],600,600);

    if (imageCounter < cats.length - 1){
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

  image(random(cats),windowWidth/2, windowHeight/2);
  textSize (30);
  text(owls[randomIndex].name+' wish you '+owls[randomIndex].do, 100,200);
  fill(owls[randomIndex].color);
}

function buttonPressed(){
    animating = true;
    setTimeout(randomizer,2000);
 }