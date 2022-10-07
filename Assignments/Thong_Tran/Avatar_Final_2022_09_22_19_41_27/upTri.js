class UpTri {
  constructor (_xpos,_ypos,_rot, _size) {
    this.expos = _xpos;
    this.ypos = _ypos;
    this.rot = _rot;
    this.size = _size;
  }
  display() {
  strokeWeight(3);
  fill('rgba');
  translate(width/this.xpos,height/this.ypos);
  scale(this.size);
  rotate(count*this.rot);
  beginShape();
  translate(width*-.2,height*-.9);
  vertex(width*.2,height*.2);
  vertex(width*.25,height*.3);
  vertex(width*.4,height*.50);
  vertex(width*.50,height*.56);
  endShape(CLOSE);
    
  }
  move () {
    this.rot = this.rot + .1;
    if (this.ypos <= height * 5) {
    this.ypos = this.ypos + 2;
    } else {
      this.ypos = -height*.3;
    }
}
}