class beautyFlower{constructor(x,y){
    this.x = x;
    this.y = y;
    this.col = random(beautyFlowerColors);
}

pistil(){
    push();
        //noStroke();
  stroke('white');
        fill('#f8e7a7');
        translate(this.x,this.y);
        circle(width*0, height*.192,27);
    pop();
}

petal(){
    push();   fill('white');
        //noStroke();
    stroke('white');
        translate(this.x,this.y);
      //  fill(this.col);
        circle(width*0,height*.15,25);
       // fill(this.col);
        circle(width*.04,height*.18,25);
       // fill(this.col);
        circle(width*-.04,height*.18,25);
       // fill(this.col);
        circle(width*-.03,height*.23,25);
       // fill(this.col)
        circle(width*.03,height*.23,25);
    pop();}
                   
move(){
    if( this.y <= height *3){
        this.y = this.y + 2;}
    else{this.y = -height * 1;}
}   }
