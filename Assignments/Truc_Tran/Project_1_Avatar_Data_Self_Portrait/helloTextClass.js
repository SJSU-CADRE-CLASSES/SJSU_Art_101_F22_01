class helloTextClass{
  constructor(){}
  
  display(){
  //HELLO
    push();
       if(tapMe == true){
       if(mouseX < width * 0.3 &&
          mouseX > width * 0.05 &&
          mouseY < height * 0.55 && 
          mouseY > height * 0.4){
      noStroke();
      textFont('Comic Sans MS');
      textSize(30);
      fill(random(myColors));
      rect(width*.076, height*.4, width*.23, height*.15, width*.1, height*.3);
      stroke(random(myColors));
      noFill();
      rect(width*.067, height*.39, width*.25, height*.17, width*.1, height*.3)
      fill('white');
      text('Hello', width*.1, height*.50);}}
    pop(); 
    
  //XIN CHAO
    push();
      if(tapMe == true){
      if(mouseX < width * 0.6 &&
         mouseX > width * 0.3 &&
         mouseY < height * 0.35 && 
         mouseY > height * 0.2){
      noStroke();
      textFont('Comic Sans MS');
      textSize(30);
      fill(random(myColors));
      rect(width*.27, height*.2, width*.35, height*.15, width*.1, height*.3);
      stroke(random(myColors));
      noFill();
      rect(width*.26, height*.19, width*.37, height*.17, width*.1, height*.3);    
      fill('white');
      text('Xin chào', width*.3, height*.3);}}
