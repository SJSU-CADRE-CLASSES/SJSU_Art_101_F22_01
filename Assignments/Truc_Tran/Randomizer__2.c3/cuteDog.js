class cuteDog{constructor(x,y){this.x = x; this.y = y; this.col = random(myColors);}


head(){push();
    translate(this.x,this.y);
    noStroke();
    fill(this.col);
    square(width*0, height*0, width*.145, height*.14, height*.1, width*.1, height*.1);
    pop();}

ears(){push();
    translate(this.x,this.y);
    fill('#85766a'); //dropshadow
    noStroke();
    beginShape();
    vertex(width*.04 + 1, height*.007);
    bezierVertex(width*-.1 + 1, height*.1, width*.04 + 1, height*.15, width*.03 + 1, height*.05);
    endShape();

    fill(this.col);
    beginShape();
    vertex(width*.04, height*.007);
    bezierVertex(width*-.1, height*.1, width*.04, height*.15, width*.03, height*.05);
    endShape();

    fill('#85766a'); //dropshadow
    beginShape();
    vertex(width*.105 - 1, height*0.007);
    bezierVertex(width*.25 - 1, height*.1, width*.1 - 1, height*.15, width*.12 - 1, height*.05);
    endShape();

    fill(this.col);
    beginShape();
    vertex(width*.105, height*0.007);
    bezierVertex(width*.25, height*.1, width*.1, height*.15, width*.12, height*.05);
    endShape();
    pop();}

eyes(){push();
    translate(this.x,this.y);
    fill('#836953');
    noStroke();
    ellipse(width*.045, height*.08, width*.025, height*.025);

    fill('#f7f5ef');
    noStroke();
    ellipse(width*.041, height*.078, width*0.008,height*.008);
    ellipse(width*.05, height*.085, width*0.006,height*.007);

    fill('#836953');
    ellipse(width*.1, height*.08, width*.025, height*.025);

    fill('#f7f5ef');
    noStroke();
    ellipse(width*.098, height*.078, width*0.008,height*.008);
    ellipse(width*.105, height*.085, width*0.006,height*.007);
    pop();}

nose(){push();
    translate(this.x,this.y);
    noStroke();
    fill('#836953');
    ellipse(width*.075, height*.1, width*.02, height*.015);
    pop();}

mouth(){push();
    translate(this.x,this.y);
    fill("#f79cae");
    stroke("#f79cae");
    beginShape();
    vertex(width*.06, height*.11);
    bezierVertex(width*.05, height*.14, width*.1, height*.14, width*.09, height*.11);
    endShape();

    fill(this.col);
    stroke('#836953');
    beginShape();
    vertex(width*.05, height*.11);
    bezierVertex(width*.05, height*.125, width*.08, height*.125, width*.075, height*.11);
    endShape();
  
    fill(this.col);
    stroke('#836953');
    beginShape();
    vertex(width*.075, height*.11);
    bezierVertex(width*.07, height*.125, width*.105, height*.125, width*.10, height*.11);
    endShape();
    pop();}

blush(){
    push();
    translate(this.x,this.y);
    noStroke();
    fill("#f79cae");
    ellipse(width*.035, height*.105, width*0.015,height*.01);
    ellipse(width*.115, height*.105, width*0.015,height*.01);
    pop();}

move(){if( this.y <= height *3){this.y = this.y + 2;}
    else{this.y = -height * 1;}}}
