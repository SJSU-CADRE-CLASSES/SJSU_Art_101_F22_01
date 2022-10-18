class smileBox{constructor(){this.col = random(myColors);}
         
title(){push();
        textSize(45);
  textFont('Comic Sans MS')
  noStroke();
  fill(random(myColors));
        
  rect(width*.147, height*.385, width*.70, height*.18, width*.05);
  fill(random(myColors));
       strokeWeight(6);
        stroke('white')
  text("HAPPY BOX", width*.18,height*.52)
  pop();
              }
               
               
titleEnd(){
  push();
  textSize(20);
  textFont('Comic Sans MS')
  fill('#836953');
        textAlign(CENTER);
 text('THINK OF THE THINGS THAT MAKE YOU HAPPY, NOT THE THING THAT MAKE YOU SAD!',width*.07,height*.4,width*.85,height*.5); 
  


pop();}
               
dashline(){
  push();
  
  stroke(random(myColors));
  strokeWeight(10);
  line(width*.1, height*.35, width*.15, height*.35);
  line(width*.2, height*.35, width*.25, height*.35);
  line(width*.3, height*.35, width*.35, height*.35);
  line(width*.4, height*.35, width*.45, height*.35);
  line(width*.5, height*.35, width*.55, height*.35);
  line(width*.6, height*.35, width*.65, height*.35);
  line(width*.7, height*.35, width*.75, height*.35);
  line(width*.8, height*.35, width*.85, height*.35);
  
  push();
  
  stroke(random(myColors));
  line(width*.9, height*.35, width*.9, height*.40);
  line(width*.9, height*.45, width*.9, height*.50);
  line(width*.9, height*.55, width*.9, height*.60);
  pop();
   stroke(random(myColors));
  line(width*.1, height*.60, width*.15, height*.60);
  line(width*.2, height*.60, width*.25, height*.60);
  line(width*.3, height*.60, width*.35, height*.60);
  line(width*.4, height*.60, width*.45, height*.60);
  line(width*.5, height*.60, width*.55, height*.60);
  line(width*.6, height*.60, width*.65, height*.60);
  line(width*.7, height*.60, width*.75, height*.60);
  line(width*.8, height*.60, width*.85, height*.60);
  
  stroke(random(myColors));
  line(width*.1, height*.35, width*.1, height*.40);
  line(width*.1, height*.45, width*.1, height*.50);
  line(width*.1, height*.55, width*.1, height*.60);
  pop();
}}
