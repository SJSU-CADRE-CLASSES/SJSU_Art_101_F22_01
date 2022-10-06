class Sun {
    constructor(_x,_y){
    this.x = _x;
    this.y = _y;
    }
    
    display(){
      
    this.x = width/2 //x=250
    this.y = height/3.33 //y=150
    fill (255,255,102);  
    ellipse(this.x/3,this.y/2,width/6.5,width/6.25); 
    }
    
    move(){
      this.x = this.x + 50;
    }
  }