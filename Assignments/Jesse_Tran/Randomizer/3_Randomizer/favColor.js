class FavColor {
  
    constructor(nameParam, colorParam){
      this.name = nameParam;
      this.color = colorParam;
      
    }
    
    display() {
      fill(this.color);
      ellipse(width/2, height/2, 100,100);
    }
    
    getName() {
      text(this.name, width/2, height/3.5);
    }
    getColor() {
      text(this.color, width/2, height/3);
    }
    
    whoWhos() {
      textSize(25); 
      text(this.name+"'s"+" favorite color is "+ this.color+"!", width/2.5, height/1.65);
  }
  }