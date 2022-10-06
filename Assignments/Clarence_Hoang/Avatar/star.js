class Star {
    constructor(_starX,_starY){
      this.starX = _starX;
      this.starY = _starY;
      
    }
    display(){
      fill(255);  
      triangle(this.starX/13.3, this.starY/5.3, this.starX/6.89, this.starY/20, this.starX/4.65, this.starY/5.3);
      fill(255);
    }
    move(){
      if(this.starY<= height*1.08){
    this.starY +=2;
      }
      else {
        this.starY = 0
      }
      {
      if(this.starX<= width*1.08){
    this.starX +=2;
      }
      else {
        this.starX = 0
      }
    }
  }
  }