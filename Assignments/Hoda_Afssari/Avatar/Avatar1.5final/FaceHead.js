class FaceHead {
    constructor(_x,_y){
    this.x = _x;
    this.y = _y;
    }
    
    display(){
      
    this.x = width/2 //x=250
    this.y = height/3.33 //y=150
    fill (0);  
    square(this.x,this.y,200);
    fill (228,184,139);
    ellipse(this.x,this.y,width/4.5,width/4.25); 
    }
  }