class ThirdTri {
  constructor (_xpos,_ypos,_rot) {
    this.expos = _xpos;
    this.ypos = _ypos;
    this.rot = _rot 
  }
  display() {
  strokeWeight(3);
  fill(mouseX);
  translate(width/this.xpos, height/this.ypos);
  rotate(count*this.rot);
  beginShape();
  translate(width*-.3,height*-.8);
  vertex(width*.2,height*.2);
  vertex(width*.25,height*.3);
  vertex(width*.4,height*.50);
  vertex(width*.50,height*.56);
 endShape(CLOSE);
    
  }
};