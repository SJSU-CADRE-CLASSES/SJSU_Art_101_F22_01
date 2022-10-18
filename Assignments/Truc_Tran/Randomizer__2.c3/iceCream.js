class iceCream{constructor(x,y){
    this.x = x;
    this.y = y;
    this.col = random(myColors);
    this.col1 = random(myColors);
    this.col2 = random(myColors)}

bowltop(){push();
    translate(this.x,this.y);
    fill(this.col);
    noStroke();
   rect(width*-.06, height*.19, width*.14, height*.02, 10)
    pop();}

icecream(){push();
    translate(this.x,this.y);
    fill(this.col2);
    noStroke();
   circle(width*.01, height*0.145, width*.065);
  
    fill(this.col1);
  circle(width*-.02, height*0.175, width*.065);
  
    fill(this.col);
   circle(width*.04, height*0.175, width*.065);
    pop();}

bowlbottom(){push();
    translate(this.x,this.y);
    fill(this.col);
    noStroke();
     rect(width*0, height*.22, width*.02, height*.09, 12)
   rect(width*-.03, height*.3, width*.08, height*.02, 10)
    fill('#f4c9a5');
  ellipse(width*.01, height*0.22 ,width*.13, height*.1);
    pop();}

move(){if(this.y <= height *.9){this.y = this.y + 2;}
    else{this.y = -height * 1;}}
}
