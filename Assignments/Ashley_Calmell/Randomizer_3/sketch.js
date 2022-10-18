let feelings= [
    {name: "happy", color:"yellow"},
    {name:"sad", color:"blue"},
    {name:"envy", color:"green"},
    {name:"fear",color:"purple"},
    {name:"anger",color:"red"}
];
let randomIndex;
let animating= false;
let emotions = [];
let imageCounter=0;
let button;

function preload(){
    for (let i = 0; i <= 4; i++){
        emotions[i] = loadImage("asset/emotion_"+ i+".jpg")
    }
} 

function setup() {
    createCanvas(600,600);
    background(200);
    textSize(32);
    imageMode(CENTER);
    frameRate(8);

    text("click to randomize",50,50);
    console.log(emotions);

    button= createButton("click to randomize");
    button.mousePressed(buttonPressed);
    }

function draw() {
    if(animating==true){
        clear();
    image(emotions[imageCounter],width/2,height/2,400,400);
    };
    if(imageCounter < emotions.length-1){
    imageCounter++;
    console.log(imageCounter);
    } else{
        imageCounter=0;
    }}
function randomizer(){
    animating=false;
    
    if(feelings[0]){
        //background(random(255));
        clear();
        randomIndex= int(random(feelings.length));
        image(random(emotions),width/2,height/2,400,400);
        text(`${feelings[randomIndex].name}'s color is  
        ${feelings[randomIndex].color}`,200, height-50);
        feelings.splice(randomIndex,1); 
    } else{
        background(random(200,255));
        text("nothing left!",50,50);
    } 
}
function buttonPressed(){
    animating=true;
    setTimeout(randomizer,2000);
}
