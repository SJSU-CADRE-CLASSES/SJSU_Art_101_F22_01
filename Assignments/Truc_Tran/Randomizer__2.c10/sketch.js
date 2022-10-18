let myColors = ["#c5dbeb","#cbe4e4","#cce2bc","#f4c9a5","#eeabac","#eebfd3","#ccaed0",];
let animation = false;
let words = [
  {name:"LIFE IS SHORT! SMILE WHILE YOU STILL HAVE TEETH! 😁"},     
  {name:"SMILE, IT'S FREE THERAPHY.  🥳"},
  {name:"DON'T WORRY! BE HAPPY! 🤗;)"},
  {name:"SAY CHEESE! ✌️"},
  {name:"NO MATTER WHAT LIFE THOWS AT YOU. KEEP SMILING. 😁"},
  {name:"IF YOU DON'T HAVE A SMILE, I WILL GIVE YOU ONE OF MINE.😝"},
  {name:"BE HAPPY FOR THIS MOMENT. THIS MOMENT IS YOUR LIFE.😚"},
  {name:"STOP FEELING SORRY. FOR YOURSELF AND YOU WILL BE HAPPY.🥰 "},
  {name:"NOBODY CAN MAKE YOU HAPPY UNTIL YOU ARE HAPPY WITH YOURSELF FIRST.😊"},
  {name:"WHAT MAKES YOU HAPPY DOESN'T NEED TO MAKE SENSE TO OTHERS. 😎"},]
let cnv;  
let angle = 0;         
let smile = [];
let flower = [];
let box = [];
let quotebox = [];
let button = [];
let areyouhappy= [];
let pattern = [];

function setup() {
  cnv = createCanvas(500, 500);
  cnv.parent("#canvasDiv")
  angleMode(DEGREES);

  for (let i = 0; i <= 5; i++){
  smile[i] = new smileEmoji(random(width), random(height))};
  flower[0] = new beautyFlower(width* .25, height *.15);
  pattern[0] = new backgroundPattern();
  areyouhappy[0] = new AreYouHappy(0,0);
  areyouhappy[1] = new AreYouHappy(width*.27,0);
  areyouhappy[2] = new AreYouHappy(width*.55,0);
  areyouhappy[3] = new AreYouHappy(width*.82,0);
  
  background('white');
  pattern[0].hori();
  pattern[0].verti();
  areyouhappy[0].AUH();
  areyouhappy[1].AUH();
  areyouhappy[2].AUH();
  areyouhappy[3].AUH();

  box[0] = new smileBox();
  box[0].dashline();
  box[0].title();

//button = createButton("OPEN THE BOX");
  button = select ("#openButton")
  button.mousePressed(buttonPressed)
  button.class("randomizerButton")}

function draw() {
  if (animation == true){  
   for (let i = 0; i< smile.length; i++){smile[i].emoji();}
  smile.push(new smileEmoji(random(width), random(height)));}}
 
function randomizer(){
  randomIndex =  int(random(words.length));
  animation = false;
  if (words[0]){
    push();
    noStroke();
    rect(width*.1, height*.135,width*.8, height*.73,15)
    pop();
    flower[0].petal(); flower[0].pistil();
    push();
    textAlign(LEFT);
    textFont('Comic Sans MS');
    textSize(30);
    stroke('white')
    strokeWeight(3);
    fill('#836953'); 
    text(words[randomIndex].name,width*.16,height*.21, width*.7,height*.65);
    pop();} else {}}

function buttonPressed(){
  animation = true;
  setTimeout(randomizer, 5000);}