let myColors = ["#c5dbeb","#cbe4e4","#cce2bc","#f4c9a5","#eeabac","#eebfd3","#ccaed0",];
let animation = false;
let words = [
  {name:"🍩 LIFE IS SHORT! SMILE WHILE YOU STILL HAVE TEETH!😁"},   
  {name:"🍪 SMILE, IT'S FREE THERAPHY.🥳"},
  {name:"🧋 DON'T WORRY! BE HAPPY!🤗"},
  {name:"🍦 SAY CHEESE!✌️"},
  {name:"🍭 NO MATTER WHAT LIFE THOWS AT YOU. KEEP SMILING.😁"},
  {name:"🍰 IF YOU DON'T HAVE A SMILE, I WILL GIVE YOU ONE OF MINE.😝"},
  {name:"🍧 BE HAPPY FOR THIS MOMENT. THIS MOMENT IS YOUR LIFE.😚"},
  {name:"🍫 THERE ARE SO MANY BEAUTIFUL REASON TO BE HAPPY TODAY.🥰 "},
  {name:"🍡 TODAY IS A PERFECT DAY TO JUST BE HAPPY.😊"},
  {name:"🧁 WHAT MAKES YOU HAPPY DOESN'T NEED TO MAKE SENSE TO OTHERS.😎"},]
let cnv;  
let angle = 0;         
let smile = [];
let flower = [];
let message = [];
let button = [];
let backgroundtext= [];
let paper = [];


function setup() {
  cnv = createCanvas(500, 500);
  cnv.parent("#canvasDiv")
  angleMode(DEGREES);

  for (let i = 0; i <= 5; i++){
  smile[i] = new SmileEmoji(random(width), random(height))};
  flower[0] = new beautyFlower(width*1.18, height*.2);
  paper[0] = new PaperPattern();
  backgroundtext[0] = new TextAsBackground(0,0);
  backgroundtext[1] = new TextAsBackground(width*.27,0);
  backgroundtext[2] = new TextAsBackground(width*.55,0);
  backgroundtext[3] = new TextAsBackground(width*.82,0);

  background('white');
  paper[0].hori();
  paper[0].verti();
  backgroundtext[0].HAI();
  backgroundtext[1].HAI();
  backgroundtext[2].HAI();
  backgroundtext[3].HAI();
  message[0] = new MessageForYou();
  message[0].messageforyou();

  //button = createButton("OPEN THE BOX");
  button = select ("#openButton")
  button.mousePressed(buttonPressed)
  button.class("randomizerButton")}

function draw() {if (animation == true){
  for (let i = 0; i< smile.length; i++){smile[i].emoji()}
  if (smile.length > 50) {smile.splice(0,1)}
  else{smile.push(new SmileEmoji(random(width), random(height)));}}
}
 
function randomizer(){randomIndex =  int(random(words.length));
  animation = false;
  if (words[0]){push();
    background('white');
    paper[0].hori();
    paper[0].verti();
    backgroundtext[0].HAI();
    backgroundtext[1].HAI();
    backgroundtext[2].HAI();
    backgroundtext[3].HAI();
    message[0].messageforyou();

    noStroke();
    fill(random(myColors)); 
    rect(width*.1+5, height*.06+5, width*.8, height*.28)
    fill('white'); 
    rect(width*.1, height*.06, width*.8, height*.28)
    fill(random(myColors));
    stroke(random(myColors));
    strokeWeight(3);
    line(width*.11, height*.09, width*.88, height*.09, width*.3, height*.09);
    line(width*.13, height*.32, width*.13, height*.07, width*.15, height*.22);
    pop();

  
    push();
    flower[0].petal();
    flower[0].pistil();

    textAlign(LEFT);
    textFont('Comic Sans MS');
    textSize(22);
    textLeading(34);
    strokeWeight(3);
    fill('#836953'); 
    textStyle(BOLD);
    text(words[randomIndex].name,width*.15,height*.12, width*.7,height*.65);
    pop();} else {}}

function buttonPressed(){
  animation = true;
  setTimeout(randomizer, 5000);}