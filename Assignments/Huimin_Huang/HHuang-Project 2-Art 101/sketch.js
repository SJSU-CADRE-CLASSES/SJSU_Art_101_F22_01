//let dogs =[{name:"dilion", color:"dog treat"},{name:"Ziggy",color:"chartrese"},{name:"mercedes",color:"poop"},{name:"petunia", color:"rose gold"},{name:"kloot",color:"coffee grind brown"},{name:"nala", color:"stardust"}]

let randomIndex;
let animating = false;
let memes = [];
let imageCounter = 0;
let button;

function preload(){

    for (let i = 0; i <= 5; i++){
      memes[i] = loadImage(`assets/meme_${i}.jpg`)
    }
}

function setup(){
    createCanvas(600, 600);
    background(175, 200, 186);
    textSize(24);
    textFont('courier');
    textAlign(CENTER);
    textStyle(BOLD);
    fill(255);
    imageMode(CENTER);
    frameRate(8);

    text("You are on DIET!!!",width/2,height/2);
    console.log(memes);
    setTimeout(changeBackground,1000);
    button = createButton("click to randomize");
    button.mousePressed(buttonPressed);
    button.class("randomizerButton");
}

function draw(){

    if(animating == true){
      clear();
      image(memes[imageCounter], width/2, height/2);
      imageCounter++;
    }
      if (imageCounter < memes.length - 1){
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }

}

function changeBackground(){
  if (counter <= 5) {
    counter++;
    console.log(counter)
  background(random(255),random(255),random(255));
  setTimeout(changeBackground,1000);
} else {

}
}

function randomizer(){
  animating = false;
    if (dogs[0]){

  clear();
  randomIndex = int(random(dogs.length));

  image(random(memes), width/2, height/2);
  text(`${dogs[randomIndex].name, width/2, height - 100 }'s favorite color is
 ${dogs[randomIndex].color}`, width / 2, 50);
  dogs.splice(randomIndex, 1);
} else {
  background(random(200,255));
  text("nothing left!",50,50);
}
}

function buttonPressed(){
  animating = true;
  setTimeout(randomizer,2000);



}
