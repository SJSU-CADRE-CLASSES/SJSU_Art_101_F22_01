class smallCake{constructor(x,y){this.x = x, this.y = y; this.col = random(cakeColors);}

top(){push();
    translate(this.x,this.y);
    fill(this.col);
    noStroke();
    triangle(width*.08, height*.2, width*.12, height*.15, width*.21, height*.2);
    pop();}

side(){push();
    translate(this.x,this.y);
    fill('#85766a');
    noStroke();
    rect(width*.08, height*.2, width*.131, height*.07);
    pop();}

layers(){push();
    translate(this.x,this.y);
    fill(this.col);
    noStroke();
    rect(width*.08, height*.21, width*.131, height*.02);
    rect(width*.08, height*.24, width*.131, height*.02);
    pop();}

cherry(){push();
    translate(this.x,this.y);
    noFill();
    stroke('#85766a');
    beginShape();
    vertex(width*.08, height*.15);
    bezierVertex(width*.11, height*.17, width*.1, height*.16, width*.11, height*.17);
    endShape();

    noStroke();
    fill('#eeabac');
    circle(width*0.11,height*0.175,width*.035);
    pop();}

move(){if(this.y <= height *.9){this.y = this.y + 2;}
    else{this.y = -height * 1;}}
}
