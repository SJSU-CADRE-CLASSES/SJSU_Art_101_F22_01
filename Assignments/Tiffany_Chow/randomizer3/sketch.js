//owls names is hooty 
let owls = [{
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
  let imageCounter = 0;
  let button;

  function preload(){
    for (let i = 1; i <= 13; i++){
      hootys[i] = loadImage(`image/hooty_${i}.jpg`)
    }
  }

  function setup(){
    createCanvas(200,200);
    background(200);

    imageMode(CENTER);
    //frameRate(9);
  
    text ("click to randomize",20, 20);
     console.log(hootys);
     button = createButton("click to randomize");
     button.mousePressed(buttonPressed);
  }

function draw () {
  if(animating == true){
     clear();
   image(hootys[imageCounter],windowWidth/2, windowHeight/2);

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

  image(random(hootys),windowWidth/2, windowHeight/2);
  textSize (32);
  text(`${owls[randomIndex].name} will ${owls[randomIndex].do}`, windowWidth/6, windowHeight - 150);
  fill(owls[randomIndex].color);
}

    function buttonPressed () {
    animating = true;
    setTimeout(randomizer,2000);
  
  }
