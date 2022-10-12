class cuteCat{constructor(x,y){
    this.x = x;
    this.y = y;
    this.col = random(animalColors);}
 
ears(){
    push();

        translate(this.x,this.y);
        noStroke();
        fill(this.col);
        triangle(width*.16, height*.19, width*.15, height*.13, width*.21, height*.15);
        fill('#f7f5ef');
        triangle(width*.167, height*.19, width*.158, height*.14, width*.21, height*.16);
        fill(this.col);
        triangle(width*.26, height*.19, width*.21, height*.15, width*.27, height*.13);
        fill('#f7f5ef');
        triangle(width*.255, height*.19, width*.23, height*.15, width*.262, height*.14);
    pop();}

head(){
    push();

    translate(this.x,this.y)
    noStroke();
    fill(this.col);
    ellipse(width*0.21,height*0.196,width*.1, height*.1);
    pop();}

nose(){
    push();

        translate(this.x,this.y)
        fill('#836953');
        noStroke();
        ellipse(width*.21, height*.201, width*0.02,height*.015);
    pop();
}

eyes(){
    push();

        translate(this.x,this.y)
        fill('#836953');
        noStroke();
        ellipse(width*.185, height*.188, width*0.02,height*.022);

        fill('#f7f5ef');
        noStroke();
        ellipse(width*.182, height*.185, width*0.008,height*.008);
        ellipse(width*.188, height*.1924, width*0.006,height*.006);

        fill('#836953');
        noStroke();
        ellipse(width*.235, height*.188, width*0.02,height*.022);

        fill('#f7f5ef');
        noStroke();
        ellipse(width*.232, height*.185, width*0.008,height*.008);
        ellipse(width*.238, height*.1924, width*0.006,height*.006);
    pop();
}

mouth(){
    push();

        translate(this.x,this.y)

        fill("#f097a8");
        stroke("#f097a8");
        beginShape();
        vertex(width*.195, height*.215);
        bezierVertex(width*.2, height*.235, width*.22, height*.235, width*.225, height*.215);
        endShape();

        stroke('#836953');
        fill(this.col);
        beginShape();
        vertex(width*.19, height*.21);
        bezierVertex(width*.19, height*.222, width*.21, height*.222, width*.21, height*.21);
        endShape();
    
        stroke('#836953');
        fill(this.col);
        beginShape();
        vertex(width*.23, height*.21);
        bezierVertex(width*.23, height*.222, width*.21, height*.222, width*.21, height*.21);
        endShape();
        pop();
}

blush(){
  
        push();

        translate(this.x,this.y)
        noStroke();
        fill("#f79cae");
        ellipse(width*.176, height*.21, width*0.015,height*.007);
        ellipse(width*.246, height*.21, width*0.015,height*.007);
        pop();}
    move(){
        if( this.y <= height *.9){
            this.y = this.y + 2;}
        else{this.y = -height * 1;}
    }  

mousePressed(){}
}
