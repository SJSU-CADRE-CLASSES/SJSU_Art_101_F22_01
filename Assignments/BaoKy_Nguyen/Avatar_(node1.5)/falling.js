class Ball {          constrcutor(_xPos,_yPos,_size){
    this.xPos =_xPos;
    this.yPos = _yPos;
    this.size = _size;
    
  }
  
   display(){
     fill(random(colorful));
     push();
     translate(this.xPos, this.yPos);
     scale(this.size);
     circle(width*0.2,height*0.1,19);
     pop();
   }
   
  move(){
    if (this.yPos <= height*1.5){
      this.yPos += 2;
    } else {
      this.yPos = -height*0.5;
      }
  }       
  }