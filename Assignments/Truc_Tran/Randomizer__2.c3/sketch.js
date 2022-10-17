let beautyFlowerColors = ["#c5dbeb","#cbe4e4","#cce2bc","#f4c9a5","#eeabac","#eebfd3","#ccaed0",];
let animalColors = ["#fbd49e","#B1907F"];
let myColors = ["#c5dbeb","#cbe4e4","#cce2bc","#f8e7a7","#f4c9a5","#eeabac","#eebfd3","#ccaed0",];
let icecreamColors1 = ["#cce2bc","#eeabac"];
let icecreamColors2 = ["#ccaed0","#836953"];
let icecreamColors3 =["#eebfd3", "#c5dbeb"];
let cakeColors = ["#cce2bc","#eebfd3","#f8e7a7","#f5c8a5"];
let animation = false;


let words = [{name:"LIFE IS SHORT! SMILE WHILE YOU STILL HAVE TEETH! :D"}, {name:"SMILE, IT'S FREE THERAPHY ^^"},{name:"DON'T WORRY! BE HAPPY ;)"},{name:"SAY CHEESE, DON'T FORGET TO SMILE TODAY :)"}, {name:"NO MATTER WHAT LIFE THOWS AT YOU. KEEP SMILING ;>"}, {name:"IF YOU DON'T HAVE A SMILE, I WILL GIVE YOU ONE OF MINE :P"}
            ]
let smile = [];
let box = [];
let flower = [];
let angle = 0;
let quotebox = [];
let dog = [];
let cat = [];
let crown = [];
let icecream = [];
let cake = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i <= 0; i++){
  smile[i] = new smileEmoji(random(width), random(height))}
  
  flower[0] = new beautyFlower(width*.5, height*.52)
 crown[0] = new miniCrown(width*.315, height*.18)
    
    for (let i = 0; i <= 5 ; i++){
  dog[0] = new cuteDog(width*.05, height*.03)
      dog[1] = new cuteDog(width*.29, height*.03)
       dog[2] = new cuteDog(width*.55, height*.03)
             dog[3] = new cuteDog(width*.81, height*.03)}
  
      for (let i = 0; i <= 2 ; i++){
  cat[0] = new cuteCat(width *.035, height*.06)
  cat[1] = new cuteCat(width *.29, height*.06)
cat[2] = new cuteCat(width *.55, height*.06)
  cat[3] = new cuteCat(width *.80, height*.06)
       cat[4] = new cuteCat(width *-.22, height*.06)}
  
  
 
 

icecream[0] = new iceCream(width*.1, height*.65)
  icecream[1] = new iceCream(width*.37, height*.65)
   icecream[2] = new iceCream(width*.62, height*.65)
   icecream[3] = new iceCream(width*.88, height*.65)
  
  cake[0] = new smallCake(width*-.15, height*.5)
  cake[1] = new smallCake(width*.1, height*.5)
  cake[2] = new smallCake(width*.35, height*.5)
  cake[3] = new smallCake(width*.6, height*.5)
  cake[4] = new smallCake(width*.86, height*.5)
  background('white');
  
  
  

    for (let i = 0; i <= 5 ; i++){
dog[0].head(); dog[0].eyes(); dog[0].ears(); dog[0].nose(); dog[0].mouth(); dog[0].blush();
    
dog[1].head(); dog[1].eyes(); dog[1].ears(); dog[1].nose(); dog[1].mouth(); dog[1].blush();  
    
    dog[2].head(); dog[2].eyes(); dog[2].ears(); dog[2].nose(); dog[2].mouth(); dog[2].blush();
    
     dog[3].head(); dog[3].eyes(); dog[3].ears(); dog[3].nose(); dog[3].mouth(); dog[3].blush();}
 
cat[0].ears();cat[0].head();cat[0].eyes();cat[0].nose();cat[0].mouth();cat[0].blush();
  cat[1].ears();cat[1].head();cat[1].eyes();cat[1].nose();cat[1].mouth();cat[1].blush();
  
  cat[2].ears();cat[2].head();cat[2].eyes();cat[2].nose();cat[2].mouth();cat[2].blush();
 cat[3].ears();cat[3].head();cat[3].eyes();cat[3].nose();cat[3].mouth();cat[3].blush();
  cat[4].ears();cat[4].head();cat[4].eyes();cat[4].nose();cat[4].mouth();cat[4].blush();
  


  icecream[0].bowlbottom();
    icecream[0].icecream();
   icecream[0].bowltop();
  icecream[1].bowlbottom();
    icecream[1].icecream();
   icecream[1].bowltop();
  
  icecream[2].bowlbottom();
    icecream[2].icecream();
   icecream[2].bowltop();
  
   icecream[3].bowlbottom();
    icecream[3].icecream();
   icecream[3].bowltop();

 cake[0].top();
        cake[0].side();
        cake[0].layers();
        cake[0].cherry();
  
  cake[1].top();
        cake[1].side();
        cake[1].layers();
        cake[1].cherry();
  
  cake[2].top();
        cake[2].side();
        cake[2].layers();
        cake[2].cherry();
  
   cake[3].top();
        cake[3].side();
        cake[3].layers();
        cake[3].cherry();
  
   cake[4].top();
        cake[4].side();
        cake[4].layers();
        cake[4].cherry();
  

  
                                      
  quotebox[0] = new quoteBox();
  dog [0] = new cuteDog();
  box[0] = new smileBox();
  box[0].dashline();
  box[0].title();
 
  push();strokeWeight(10);
  noFill();
  stroke(random(myColors))
  rect(width*0, height*0, width*1, height*1)
    pop();
}
//Bubble.push(new bubble(random(width), random(height)))
//line(width*.1, height*.36, width*.9, height*.36);
//line(width*.1, height*.6, width*.9, height*.6);
  


function draw() {


  
  if (animation == true){
  // smile((random(width), random(height)));
  
   for (let i = 0; i< smile.length; i++){smile[i].emoji();}
  smile.push(new smileEmoji(random(width), random(height)));
  
   }
  //background(220);
 
 
   
  }
  





 

 
  
  

function randomizer(){
  
  randomIndex =  int(random(words.length));
  
  animation = false;
  if (words[0]){
  background('white');
  strokeWeight(5);
  stroke(random(myColors));
  //fill('#836953');
  stroke('#836953');
  strokeWeight(1.5);

push();
    fill(random(myColors));
  noStroke();
  rect(width*.1, height*.135,width*.8, height*.73,15)
    pop();
    push();
     fill('#836953');
      textAlign(CENTER);
      textFont('Century Gothic');
  textSize(20);
    strokeWeight(3);
    textStyle(BOLD);
    stroke('white')
  text(words[randomIndex].name,width*.2,height*.425, width*.6,height*.6);

  flower[0].petal(); flower[0].pistil();
    crown[0].crown();
    pop();
    
   quotebox[0].dashline(); 
   // flower.pop();
    //for (let i = 0; i< Bubble.length; i++){Bubble[i].bubbleface1(); Bubble[i].bubbleface();}
  //  Bubble[int(random(bubble.length))]
  //Bubble.push(new bubble(width*.25, height*.5))
  
  words.splice(randomIndex,1);} else {
    
   // push();
    rect(width*.07, height*.33,width*.85, height*.3,15)
   
   // pop();
                                      

  box[0].titleEnd();
                         }
}


function mousePressed(){
  animation = true;
  setTimeout(randomizer, 5000);
  
}
function smileFace(x,y,r){
  push();
    noStroke()
    fill(random(myColors));
    translate(width*x,width*y);
    circle (width*.15,height*.1,10);
    pop();
}
