let feelings= [
    {name: "happy", color:"yellow"},
    {name:"sad", color:"blue"},
    {name:"envy", color:"green"},
    {name:"fear",color:"purple"},
    {name:"anger",color:"red"}
];
let randomIndex;
let animating= false;
function setup() {
    createCanvas(600,600);
    background(200);
    textSize(32);
    text("click to randomize",50,50);
    
   
    }

function draw() {

    if(animating==true){
ellipse(random(width),random(height),random(50,200));
    }

}
function randomizer(){
    animating=false;
    if(feelings[0]){
        background(random(255));
        randomIndex= int(random(feelings.length));
        text(`${feelings[randomIndex].name}'s color is  
        ${feelings[randomIndex].color}`,50,50);
        feelings.splice(randomIndex,1);
       
    } else{
        background(random(200,255));
        text("nothing left!",50,50);
    } 
}
function mousePressed(){
    animating=true;
    setTimeout(randomizer,2000);

   
}
