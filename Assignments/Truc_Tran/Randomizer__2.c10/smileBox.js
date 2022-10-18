class smileBox{constructor(){}
         
title(){push();
      textSize(46);
      textFont('Comic Sans MS');
      fill(random(myColors));
      text("MESSAGE FOR YOU", width*.04+3,height*.52+3);
      fill('#836953');
      text("MESSAGE FOR YOU", width*.04,height*.52)
      pop();}
            
dashline(){push();
      noStroke();
      fill(random(myColors));
      rect(width*0, height*.4-5, width*1, height*.17)
      fill(random(myColors));
      rect(width*0, height*.4+5, width*1, height*.17)
      fill('white');
      rect(width*0, height*.4, width*1, height*.17)
      pop();}}