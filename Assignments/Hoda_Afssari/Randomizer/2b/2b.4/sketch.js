//Cats I love throughout my years and their owners 


//array
//global things
let cats = [{
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
    name: "Meowmeow" , 
    owner: "Afssari"
}, {
    name: "Meowmeow's triplets", 
    owner: "Afssari" 
}];

//calling variable
let randomIndex;

//runs once and stays
function setup () {
    createCanvas (windowWidth,windowHeight);
    background (168,250,240);

}

function draw () { 

    //saying this so user knows to click to start randomizer
    text("click to reveal a random cat name from a selection, up to 6 clicks allowed before having to refresh (for now)",windowWidth/2.3,windowHeight/2.3);mousePressed () 

    //calling variable
let mousePressed
}    

function mousePressed () {

    //background restated so that the array text doesn't stack up on each other and "erases" it
background(168,250,240);



    // defining variable: int makes it a whole number, random(cats.length) chooses a random number within the array
randomIndex = int(random(cats.length));
   //writes out the random number, .key is what category it chooses, and then at what location on screen
  text(cats[randomIndex].name,windowWidth/2,windowHeight/2);
  //removes chosen number from array in this instance
  cats.splice(random.Index,1);
}
