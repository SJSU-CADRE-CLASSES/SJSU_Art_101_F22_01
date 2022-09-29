class Ball{ 
  constructor (_xpos,_ypos,_speed,_size){
  this.xpos = _xpos
  this.ypos = _ypos
  this.speed =_speed
  this.size = _size
  }
   display(){
     fill(random(colorful));
     ellipse(this.xpos,this.ypos,this.speed,this.size); 
   }
   move (){
     if (this.ypos <= height*1){
       this.ypos+= this.speed; 
     } else { 
     this.ypos = -height * 1;
     }  
   }
  }
  