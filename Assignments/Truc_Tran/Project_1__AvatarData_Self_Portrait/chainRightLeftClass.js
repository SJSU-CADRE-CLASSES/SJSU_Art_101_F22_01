class chainRightLeftClass {
  constructor(_xpos,_ypos,){
    this.xpos = _xpos;
    this.ypos = _ypos;}

  display(){
    push();
      noFill();
      stroke(random(myColors));     
      translate(this.xpos, this.ypos);
      square(width*.1, height*.1,width*.1, 10);
      square(width*.11, height*.11,width*.08, 8);
    //
      fill(random(myColors));
      circle(width*.1,height*.1,10);
      circle(width*.2,height*.1,10);
      circle(width*.1,height*.2,10);
      circle(width*.2,height*.2,10);  
    pop();}
  
  move(){
    if (this.xpos <= width * 1.5){
        this.xpos = this.xpos + 10;}
    else{this.xpos = -width*.9;}}}
