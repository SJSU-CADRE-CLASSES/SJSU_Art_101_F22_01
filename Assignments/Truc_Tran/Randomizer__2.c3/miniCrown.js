 class miniCrown{constructor(x,y){this.x = x; this.y = y; this.col = random(myColors)}

crown(){push();
   translate(this.x,this.y)
   fill('white');
   noStroke();
   rect(width*.125,height*.105,height*.124,width*.05,height*.03);
   triangle(width*.125, height*.125, height*.125, width*.05, height*.17, width*.125);
   triangle(width*.2, height*.125, width*.25, width*.05, height*.25, width*.125);
   triangle(width*.15, height*.125, width*.186, height*.05,width*.22 , height*.125);
   circle(width*.125, height*.05,width*.02);
   circle(width*.187, height*.05,width*.02);
   circle(width*.25, height*.05,width*.02);
   pop();}
                }
