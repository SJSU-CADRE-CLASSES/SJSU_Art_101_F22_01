let future= [
    {name: "happiness", predict:"always have a snail trying to murder you"},
    {name:"wealth", predict:"consistently sneeze and fart at the same time"},
    {name:"love", predict:"never know your right from your left"},
    {name:"death",predict:"get adopted by Jeff Besos"},
    {name:"frustration",predict:"frequently get called that cool guy"},
    {name:"friendliness",predict:"get nicknamed Stinky Mcgee"},
    {name:"sadness",predict:"are really good at the Irish Jig"},
    {name:"stubbornness",predict:"will never be able to make a decision"},
    {name:"fear",predict:"have really nice ear lobes"},
    {name:"temptation",predict:"fist fight anyone names Joe"},
    {name:"beauty",predict:"become broke!"}
];
let randomIndex;
let animating= false;
let imageCounter=0;
let button;
let zodiacs=[];

function preload(){
    bg=loadImage('images/Crystalball.jpg');
    for (let i = 0; i <= 11; i++){
        zodiacs[i] = loadImage("images/zodiac_"+ i+".png")
    }
    
}
function setup() {
    createCanvas(800,600);
    textSize(20);
    frameRate(8); 
    button= createButton("click to get fortune");
    button.mousePressed(buttonPressed);
    button.position(340, 470);
    background(bg);
    }

function draw() {
    if (animating==true){
        clear();
        image(zodiacs[imageCounter],330,height/2,150,150);
        background(bg);
    };
    if(imageCounter < zodiacs.length-1){
        imageCounter++;
    } else{
        imageCounter=0;
    }
}
function randomizer(){
    animating=false;

    if(future[0]){
        textAlign(CENTER,CENTER);
        clear();
        background(bg);
        randomIndex=int(random(future.length));
        text(` you will find ${future[randomIndex].name}
   but you
    ${future[randomIndex].predict}
    -Lucky Zodiac-`, 390,250);
         future.splice(randomIndex,1);
         image(random(zodiacs),330,height/2,150,150);
        }else{
            fill(255);
            text("No more predictions!",400,50);
         }
    }
function buttonPressed(){
    animating=true;
    setTimeout(randomizer,1000);
   
}