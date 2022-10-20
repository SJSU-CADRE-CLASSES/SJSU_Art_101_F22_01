class Servant {
  
    constructor(nameParam, classParam, imgParam){
      this.name = nameParam;
      this.class = classParam;
      this.img = imgParam; 
    }
    
    display() {
      image(this.img, width/2.45, height/8, 256, 362); 
    }
    
    getName() {
      text(this.name, width/2, height/3.5);
    }
    getClass() {
      text(this.class, width/2, height/3);
    }
    
    whoWhos() {
      textSize(40); 
      textStyle(BOLD);
      fill(255, 127, 63); 
      //text(this.name+"'s"+" favorite color is "+ this.class+"!", width/2.5, height/1.65);
      text("You have summoned " + this.name + "! From the " + this.class + " class!", width/6, height/1.5); 
    }
  }