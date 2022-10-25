//Cats I love throughout my years and their owners 


//array
//global things
let cats = [
{
    name: "Bella", 
    owner: "Alizeh"
}, {
    name: "Zuko", 
    owner: "Sareh"
}, {
    name: "Whisker", 
    owner: "Sareh"
}, {
    name: "Cookie", 
    owner: "Maryam"
}, {
    name: "Meowmeow", 
    owner: "Afssari"
}, {
    name: "Meowmeow's triplets", 
    owner: "Afssari" 
}];

//calling variable
let randomIndex;
let animating = false;
let catimages = [];

// // function preload(){

//     for (let i = 0; i <= 15; i++){
//         catimages[i] = loadImage(`assets/catimage_${i}.JPG`)

//     }


//runs once and stays
function setup () {
    createCanvas (windowWidth,windowHeight);
    imageMode(CENTER);
    background (168,250,240);
    textSize (windowWidth/27);

     //saying this so user knows to click to start randomizer
    textAlign (CENTER);
    text ('click to reveal a random cat name/owner name from a selection',windowWidth/2.5,windowHeight/2.5);
    
    // console.log(catimages);
}


function draw () { 

    
    if (animating == true){
    ellipse (random(width), random(height), random(windowWidth/5, windowWidth/10));
    }
   
}    

function randomizer(){
    animating = false

    if (cats[0]){ //if something in array/if not in array 
    // defining variable: int makes it a whole number, random(cats.length) chooses a random number within the array
    randomIndex = int(random(cats.length));
   //writes out the random number, .key is what category it chooses, and then at what location on screen
  
   //text(`${cats[randomIndex].name}'+'s owner is '${cats[randomIndex].owner}`, windowWidth/2,windowHeight/2);
  
   text(`${cats[randomIndex].name}'s owner is ${cats[randomIndex].owner}`, windowWidth/2,windowHeight/2);
  //removes chosen number from array in this instance
    cats.splice(random.Index,.5);


} else { //if not in array the display
    // background(random(200, 255))
    textAlign (CENTER);
text ('no more group of cats :(,',windowWidth/2,windowHeight/2) //nothing left game over 

  //////background restated so that the array text doesn't stack up on each other and "erases" it
  background(168,250,240);

}
}

function mousePressed () {
    animating = true
    setTimeout(randomizer, 1000);
    background(168,250,240);

}
// }


