class SummonCircles{
  
  constructor(xPos, yPos, audioIn){
    this.xpos = xPos;
    this.ypos = yPos;
    this.audio = audioIn;
  }
  
  // Methods
  display(){
    fill('rgba(0,255,255,0.1)');
    //stroke(random(255),random(255), random(255));
    ellipse(this.xpos, this.ypos, 150*this.audio, 150*this.audio);
  }
  
  move(){
    this.ypos = this.ypos + 3;
    if(this.ypos > width*1.1){
      this.ypos = width*-.1;
      this.xpos = random(width);
      this.audio = random(-1,1)
    }
    console.log(this.ypos)
  }
}