myBackground = false;
myBackground_color = 220;

myButton = false;

myButton_colorR = 140;
myButton_colorG = 140;
myButton_colorB = 140;

function setup() {
  createCanvas(400, 400);
    background(220);
}

function draw() {
  background(myBackground_color);
  
    if(myBackground == true){
    myBackground_color = 150;
  } else if(myBackground == false){
    myBackground_color = 220
  }
  
    if(myButton == true){
    myButton_colorR = random(255);
    myButton_colorG = random(255);
    myButton_colorB = random(255);
  } else if(myButton == false){
    myButton_colorR = 220
    myButton_colorG = 220
    myButton_colorB = 220
  }
  
  fill(myButton_colorR,myButton_colorG,myButton_colorB)
  rect(30, 20, 55, 55);  
  
}

function mousePressed(){
  // if(mouseX > 30 && mouseX < 85 && mouseY > 20 && mouseY < 85){
  //      myBackground = !myBackground
  //     console.log(mouseX)
  //   }
  
  //myButton = !myButton;
  
    if(mouseX <= 30 && mouseX <= 85 && mouseY >= 20 && mouseY <= 85){
       myButton = !myButton
      console.log(mouseX)
    }
    // if(mouseX < 30 && mouseX > 85 && mouseY < 20 && mouseY > 85){
    //    myButton = !myButton
    //   console.log(mouseX)
    // }
  
  }