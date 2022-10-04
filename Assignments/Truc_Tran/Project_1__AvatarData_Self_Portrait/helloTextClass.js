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
      pop();
    
  //ANYOUNG-HASEYO
  push();
    if(tapMe == true){
    if(mouseX < width * 0.35 &&
        mouseX > width * 0 &&
        mouseY < height * 0.2 && 
        mouseY > height * 0.05){
    noStroke();
    textFont('Comic Sans MS');
    textSize(24);
    fill(random(myColors));
    rect(width*.02, height*.05, width*.35, height*.15, width*.1, height*.3);
    stroke(random(myColors));
    noFill();
    rect(width*.01, height*.04, width*.37, height*.17, width*.1, height*.3);
    fill('white');
    text('안녕하세요', width*.05, height*.15);}}  
  pop();
    
  //KONICHIWA
  push();
    if(tapMe == true){
    if(mouseX < width *0.9 &&
       mouseX > width *0.55 &&
       mouseY < height *0.5 && 
       mouseY > height*0.35){
      noStroke();
      textFont('Comic Sans MS');
      textSize(25);
      fill(random(myColors));
      rect(width*.53, height*.35, width*.35, height*.15, width*.1, height*.3);
      stroke(random(myColors));
      noFill();
      rect(width*.52, height*.34, width*.37, height*.17, width*.1, height*.3);
      fill('white');
      text('こんにちは', width*.55, height*.45);}}
  pop(); 
  
  //SAWADI
  push();
    if(tapMe == true){
    if(mouseX < width *0.3 &&
       mouseX > width *0.15 &&
       mouseY < height *0.77 && 
       mouseY > height*0.6){
    noStroke();
    textFont('Comic Sans MS');
    textSize(25);
    fill(random(myColors));
    rect(width*.122, height*.6, width*.2, height*.15, width*.1, height*.3);
    stroke(random(myColors));
    noFill();
    rect(width*.112, height*.59, width*.22, height*.17, width*.1, height*.3);
    fill('white');
    text('สวัสดี', width*.15, height*.70)}}
  pop();
    
  //NIHAO
  push();
    if(tapMe == true){
    if(mouseX < width *0.28 &&
       mouseX > width *0.05 &&
       mouseY < height *0.95 && 
       mouseY > height*0.8){
    noStroke();
    textFont('Comic Sans MS');
    fill(random(myColors));
    textSize(25);
    rect(width*.065, height*.8, width*.2, height*.15, width*.1, height*.3);
    stroke(random(myColors));
    noFill();
    rect(width*.056, height*.79, width*.22, height*.17, width*.1, height*.3);
    fill('white');
    text('你好', width*.1, height*.90);}}
  pop();
  
  //BONJOUR
  push();
    if(tapMe == true){
    if(mouseX < width *0.9 &&
       mouseX > width *0.7 &&
       mouseY < height *0.82 && 
       mouseY > height*0.7){
    noStroke();;
    textFont('Comic Sans MS');
    fill(random(myColors));
    rect(width*.73, height*.7, width*.25, height*.13, width*.1, height*.25)
    stroke(random(myColors));
    noFill();
    rect(width*.72, height*.69, width*.27, height*.15, width*.1, height*.25)
    textSize(23);
    fill('white');
    text('Bonjour', width*.75, height*.78);}}
  pop();

  //ZDRAVSTUYTE
  push();
  if(tapMe == true){
  if(mouseX < width *1 &&
     mouseX > width *0.58 &&
     mouseY < height *0.68 && 
     mouseY > height*0.52){
    noStroke();
    textFont('Comic Sans MS');
    textSize(21);
    fill(random(myColors));
    rect(width*.59, height*.50, width*.39, height*.16, width*.1, height*.25);
    stroke(random(myColors));
    noFill();
    rect(width*.58, height*.49, width*.41, height*.18, width*.1, height*.25);
    fill('white');
    text('Здравствуйте', width*.60, height*.6);}}
  pop();

  //OLDA
  push();
     if(tapMe == true){
     if(mouseX < width *.9 &&
        mouseX > width *0.76 &&
        mouseY < height *.9 && 
        mouseY > height*0.82){
    push();
    noStroke();
    textFont('Comic Sans MS');
    textSize(23);
    fill(random(myColors));
    rect(width*.765, height*.85, width*.15, height*.1, width*.1, height*.3);
    stroke(random(myColors));
    noFill();
    rect(width*.755, height*.84, width*.17, height*.12, width*.1, height*.3);
    fill('white');   
    text('olá', width*.8, height*.92);}}
  pop();

  //HOLA
  push();
    if(tapMe == true){
    if(mouseX < width *.9 &&
       mouseX > width *0.6 &&
       mouseY < height *0.35 && 
       mouseY > height*0.2){
    push();
    noStroke();
    textFont('Comic Sans MS');
    textSize(23);
    fill(random(myColors));
    rect(width*.71, height*.22, width*.2, height*.12, width*.1, height*.25);
    stroke(random(myColors));
    noFill();
    rect(width*.7, height*.21, width*.22, height*.14, width*.1, height*.25);
    fill('white');
    text('Hola', width*.75, height*.3);}}
  pop();

  //NAMASTE
  push();
    if(tapMe == true){
    if(mouseX < width *.9 &&
       mouseX > width *0.7 &&
       mouseY < height *0.2 && 
       mouseY > height*0){
      noStroke();
      textFont('Comic Sans MS');
      textSize(23);
      fill(random(myColors));
      rect(width*.72, height*.069, width*.2, height*.12, width*.1, height*.25);
      stroke(random(myColors));
      noFill();
      rect(width*.71, height*.059, width*.22, height*.14, width*.1, height*.25);
      fill('white');
      text('नमस्ते', width*.75, height*.15);}}
  pop();

  //BELLO
  push();
  if(tapMe == true){
  if(mouseX < width *0.6 &&
     mouseX > width *0.35 &&
     mouseY < height *0.17 && 
     mouseY > height*0.05){
    noStroke();
    textFont('Comic Sans MS');
    textSize(30);
    fill(random(myColors));
    rect(width*.34, height*.065, width*.25, height*.12, width*.1, height*.25);
    stroke(random(myColors));
    noFill()
    rect(width*.33, height*.055, width*.27, height*.14, width*.1, height*.25);
    fill('white');
    text('Bello!', width*.37, height*.15);}} 
  pop();
  
  //IAM HERE
  push();
    if(tapMe == true){
    if(mouseX < width * 0.60 &&
       mouseX > width * 0.40 &&
       mouseY < height * 0.94 &&
       mouseY > height * 0.73){
    noStroke();
    textSize(20);
    textFont('Comic Sans MS');
    fill(random(myColors));
    rect(width*.3, height*.45, width*.40, height*.15, width*.1, height*.3);
    stroke(random(myColors));
    noFill();
    rect(width*.29, height*.44, width*.42, height*.17, width*.1, height*.3);
    fill('white');
    text('I AM HERE', width*.365, height*.545);}}
  pop();
  }
} 
