// my favorite sanrio characters
let randomIndex;
let animating = false;
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

function setup() {
    createCanvas(600, 600);
    background(200);
    textSize(32);

    text("Click to Randomize", 50, 50);
}

function draw() {

    if(animating == true){
        ellipse(random(width), random(height), random(50, 200));
    }

}

function randomizer(){
    animating = false;
    if(sanrio[0]){
    // dispays random name and splices it out if the array
    background(random(200, 255));
    randomIndex = int(random(sanrio.length));
    text(`${sanrio[randomIndex].name}'s color is ${sanrio[randomIndex].color}`, 50, 50);
    //text(sanrio[randomIndex].name + "'s color is " + sanrio[randomIndex].color, 50, 50);
    sanrio.splice(randomIndex, 1);
    } else{
        background(random(200, 255));
        text("nothing left!", 50, 50);
    }
}

function mousePressed() {
    animating = true;
    setTimeout(randomizer, 2000);

}