// my favorite sanrio characters
let randomIndex;
let animating = false;
let characters = [];
let imageCounter = 0;
let button;

let sanrio = [{
    name:"Kuromi", 
    color:"black"
}, {
    name:"myMelody", 
    color:"pink"
}, {
    name:"Cinnamoroll", 
    color:"white"
}, {
    name:"Kiki", 
    color:"blue"
}, {
    name:"Lala", 
    color:"pink"
}, {
    name:"Hello Kitty", 
    color:"white"
}];

function preload(){

    for (let i = 1; i <= 5; i++){
        characters[i] = loadImage(`assets/character_${i}.jpg`);
    }

}

function setup() {
    createCanvas(1000, 800);
    background(200);
    textSize(32);
    imageMode(CENTER);
    frameRate(12);

    text("Click to Randomize", width/2, height/2);
    button = createButton("click to randomize");
    button.mousePressed(buttonPressed);
}

function draw() {
    
    if(animating == true){
        clear();
        image(characters[imageCounter], width/2, height/2);

        if (imageCounter < characters.length - 1){
            imageCounter++;
            console.log(imageCounter);
        } else {
            imageCounter = 0;
        }
    }
    }


function randomizer(){
    animating = false;
    if(sanrio[0]){
    // dispays random name and splices it out if the array
    //background(random(200, 255));
    clear();
    randomIndex = int(random(sanrio.length));
    text(sanrio[randomIndex].name, 50, 50);
    image(random(characters), width / 2, height / 2);
    // text(sanrio[randomIndex].name + "'s color is " + sanrio[randomIndex].color, 50, 50);
    sanrio.splice(randomIndex, 1);
    } else{
        background(random(200, 255));
        text("nothing left!", 50, 50);
    }
}

function buttonPressed() {
    animating = true;
    setTimeout(randomizer, 2000);

}