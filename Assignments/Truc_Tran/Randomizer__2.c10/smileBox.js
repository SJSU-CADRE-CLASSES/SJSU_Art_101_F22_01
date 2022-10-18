class smileBox{constructor(){}
         
title(){push();
      textSize(46);
      textFont('Comic Sans MS');
      
      //text("MESSAGE FOR YOU", width*.04+3,height*.52+3);
      rotate(5)
      fill(random(myColors));
      noStroke();
      rect(width*0.06, height*.38, width*.1, height*.10)
      fill('white')
      text("M", width*.07, height*.46)

      rotate(-10);
      fill(random(myColors));
      noStroke();
      rect(width*0.12, height*.43, width*.1, height*.10)
      fill('white')
      text("E", width*.14, height*.51)

      rotate(15);
      fill(random(myColors));
      noStroke();
      rect(width*0.37, height*.32, width*.1, height*.10)
      fill('white')
      text("S", width*.38, height*.4)

      rotate(-15);
      fill(random(myColors));
      noStroke();
      rect(width*0.4, height*.44, width*.1, height*.10)
      fill('white')
      text("S", width*.415, height*.52)

      rotate(15);
      fill(random(myColors));
      noStroke();
      rect(width*0.65, height*.3, width*.1, height*.10)
      fill('white')
      text("A", width*.665, height*.38)

      rotate(-15);
     
      noStroke();
      fill('#836953');
      rect(width*0.68+3, height*.46+3, width*.1, height*.10)
      fill(random(myColors));
      rect(width*0.68, height*.46, width*.1, height*.10)
      fill('white')
      text("G", width*.70, height*.54)

      rotate(15);
      noStroke();
      fill('#836953');
      rect(width*.93+3, height*.24+3, width*.1, height*.10)
      fill(random(myColors));
      rect(width*.93, height*.24, width*.1, height*.10)
      fill('white')
      text("E", width*.95, height*.32)

      rotate(-15);
      noStroke();
     // fill('#836953');
      //rect(width*.92+3, height*.14+3, width*.1, height*.10)
      fill(random(myColors));
      rect(width*.05, height*.55, width*.1, height*.10)
      fill('white')
      text("F", width*.07, height*.63)

      rotate(15);
      noStroke();
      fill(random(myColors));
      rect(width*.34, height*.47, width*.1, height*.10)
      fill('white')
      text("O", width*.35, height*.55)

      rotate(-15);
      noStroke();
      fill(random(myColors));
      rect(width*.33, height*.58, width*.1, height*.10)
      fill('white')
      text("R", width*.35, height*.665)

      rotate(15);
      noStroke();
      fill(random(myColors));
      rect(width*.61, height*.42, width*.1, height*.10)
      fill('white')
      text("Y", width*.63, height*.5)

      rotate(-15);
      noStroke();
      fill(random(myColors));
      rect(width*.6, height*.6, width*.1, height*.10)
      fill('white')
      text("O", width*.61, height*.68)

      rotate(15);
      noStroke();
      fill(random(myColors));
      rect(width*.88, height*.38, width*.1, height*.10)
      fill('white')
      text("U", width*.895, height*.465)

      //fill('#836953');
      //text("MESSAGE FOR YOU", width*.04,height*.52)
      pop();}
            
dashline(){push();
      noStroke();
      fill(random(myColors));
     // rect(width*0, height*.4-5, width*1, height*.17)
      fill(random(myColors));
     // rect(width*0, height*.4+5, width*1, height*.17)
      fill('white');
      //rect(width*0, height*.4, width*1, height*.17)
      pop();}}