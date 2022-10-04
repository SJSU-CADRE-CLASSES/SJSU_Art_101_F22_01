class smileFaceClass{
  constructor(_xpos,_ypos){
    this.xpos = _xpos
    this.ypos = _ypos
}
  
  display(){
  translate(this.xpos,this.ypos);
  circle(width*.1,height*.1,100);
}}
