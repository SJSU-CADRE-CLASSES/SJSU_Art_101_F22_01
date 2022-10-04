class flower{
  constructor(_xpos,_ypos,_rot,_size,_speed){
  this.xpos=_xpos;
    this.ypos=_ypos;
    this.rot=_rot; 
    this.size=_size;
    this.speed=_speed;
  }
display(){
  push();
  scale(this.size)
   translate(this.xpos,this.ypos);
  fill(250, 226, 87)
  ellipse(width*.4,30,10,10)
  fill(252)
  ellipse(width*.4,20,12,12)
   ellipse(width*.42,26,12,12)
  ellipse(width*.414,37,12,12)
   ellipse(width*.39,39,12,12)
   ellipse(width*  .382,28,12,12)
  pop(); 
}
 move(){
   if(this.ypos<=height*1.3){
   this.ypos += 10;
 } else{this.ypos= -height*.5;}
}
}