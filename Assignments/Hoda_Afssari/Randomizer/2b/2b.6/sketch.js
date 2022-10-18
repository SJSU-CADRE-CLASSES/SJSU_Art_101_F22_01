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
let counter = 0;

//runs once and stays
function setup () {
    createCanvas (windowWidth,windowHeight);
    background (168,250,240);
    textSize (windowWidth/25);

    setTimeout(changeBackground, 1000);
    
}

function draw () { 

    //saying this so user knows to click to start randomizer
textAlign (CENTER);
text ('click to reveal a random cat name/owner name from a selection',windowWidth/2,windowHeight/2);mousePressed () 


    //calling variable
let mousePressed
}    

function changeBackground(){
    if (counter <= 5 ) {
        counter++;
        console.log(counter)
        
    background(random(200), random(200), random(255));
    setTimeout(changeBackground, 5000);

    } else {

    }
}

function mousePressed () {

    //background restated so that the array text doesn't stack up on each other and "erases" it
background(168,250,240);


if (cats[0]){ //if something in array/if not in array 

    // defining variable: int makes it a whole number, random(cats.length) chooses a random number within the array
randomIndex = int(random(cats.length));
   //writes out the random number, .key is what category it chooses, and then at what location on screen
  text(cats[randomIndex].name,windowWidth/2,windowHeight/2);
  //removes chosen number from array in this instance
  cats.splice(random.Index,1);

} else { //if not in array the display
    textAlign (CENTER);
text ('no more group of cats :(,',windowWidth/2,windowHeight/2);mousePressed () //nothing left game over 


}
}
