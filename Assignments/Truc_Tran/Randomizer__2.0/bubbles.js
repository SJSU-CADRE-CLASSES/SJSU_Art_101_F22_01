class bubbles{constructor(x,y){
  this.x = x;
  this.y = y;
  this.col = color('#c5dbeb');
}

display(){
  ellipse(this.x,this.y,50);
  noStroke();
  fill(this.col);
}

move(){
  {if(
    this.y <= height){
    this.y += 2;}
   else{this.y = 0;}}
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
}
              
mousePressed(){
  {let d = dist(mouseX, mouseY, this.x, this.y)
  if (d < 50){
    console.log("mouse");
    this.col = color(random(myColors));}}
}
}
