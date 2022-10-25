let catImg =[];

//types of cats
function preload() {
    for(let i = 0; i <= 4; i++){
      catImg[i] = loadImage("assets/cat"+ i+".jpg"); 
    }
}

let cats = 

[{
    
    breed:"American Shorthair", 
    age: "Kitten",
    pic: catImg[1]
}, 

{
    
    breed:"British Shorthair", 
    age: "Adult",
    pic: catImg[2]
}, 
{
    
    breed:"Sphynx", 
    age:"Senior",
    pic: catImg[3]
}, 
{
    
    breed:"Russian Blue", 
    age: "Kitten",
    pic: catImg[4]
},
{
    
    breed:"Domestic Shorthair", 
    age: "Senior",
    pic: catImg[0]
}];

let randomIndex;
let animating = false;

function setup() {
    createCanvas(600, 600);
    background(200);
    textSize(32);
    
    text("click to randomize", 50, 50 );
    
    //console.log(cats.length)
    //console.log(cats[randomIndex].breed);
    //console.log(cats);
    //console.log(cats[3].age);
    //console.log(cats[int(random(3))]);
}

function draw() {
    if(animating== true) {
        ellipse(random(width), random(height), random(50, 200));
    }
}
   
function randomizer(){
    animating = false;

    if(cats[0]){
        //this displays random name and splices it out of array
        background (random(200, 255));
        
        randomIndex= int(random(cats.length));
        text(`${cats[randomIndex].breed} 's lucky day
        Age: ${cats[randomIndex].age}`, 50, 50);
        image(catImg[randomIndex], 300, 300, 100, 100);
        cats.splice(randomIndex, 1);
        //text(cats[randomIndex].breed + "'s lucky day Age: " + cats[randomIndex].age, 50, 50);
        //cats.splice(randomIndex, 1);

    }
    else 
    {

        background (random(200, 255));
        text("nothing here!", 50, 50);
    }
        
}
  
function mousePressed(){
    animating = true;
    setTimeout (randomizer, 2000);  
}