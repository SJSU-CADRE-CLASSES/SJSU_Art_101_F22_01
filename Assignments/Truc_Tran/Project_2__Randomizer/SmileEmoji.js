class SmileEmoji{constructor(x,y){
    this.x = x;
    this.y = y;
    this.col = random(myColors);}

emoji(){push(); //face
noStroke();
fill(this.col);
translate(this.x,this.y);
circle(width*0,height*0,width*.20);
pop();

push(); //mouth
stroke('#836953');
strokeWeight(3);
noFill();
translate(this.x,this.y);
beginShape();
vertex(width*.07, height*.03);
bezierVertex(width*0.05, height*.1, width*-.05, height*.1, width*-0.07, height*.03);
endShape();
pop();

push();//eyes
noStroke();
fill('#836953');
translate(this.x,this.y);
ellipse(width*-.04,height*-.01,width*.02,height*.05);
ellipse(width*.04,height*-.01,width*.02,height*.05);
pop();}}