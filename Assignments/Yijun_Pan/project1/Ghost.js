class ghostBody {
    constructor(_xpos,_ypos,_rot,_size,_speed){
      this.xpos = _xpos;
      this.ypos = _ypos;
      this.rot = _rot;   
      this.size = _size;
      this.speed = _speed;
      
      
    }
   display(){
   push();
   translate(this.xpos,this.ypos);
   rotate((count/100)*(this.rot));
   translate(width*-.5,height*-.5);
   scale(this.size);
   stroke(10);
   strokeWeight(4);
   fill(255,255,255);
   beginShape();
   curveVertex(width*0.3, height*0.7);
   curveVertex(width*0.36, height*0.25);
   curveVertex(width*0.48, height*0.13);
   curveVertex(width*0.6, height*0.14); 
   curveVertex(width*0.7, height*0.25); 
   curveVertex(width*0.78, height*0.64);
   curveVertex(width*0.8, height*0.7);
   curveVertex(width*0.56, height*0.78);
   endShape(CLOSE);
   pop();
   }
   move(){
     if(this.ypos <= height*1.6){
        this.ypos +=  this. speed;
        }else {
          this.ypos = -height;
        }
     
   } 
   
 }