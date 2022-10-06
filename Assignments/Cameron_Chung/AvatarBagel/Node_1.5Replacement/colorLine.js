class colorLine {
    constructor(_xpos, _ypos){
      this.xpos = _xpos;
      this.ypos = _ypos;
    }
    display(){
    // mouse position for drawing the line
    if(mouseX !== pmouseX && mouseY !== pmouseY ){
      points.shift();
      
      let point = createVector(mouseX, mouseY);
      points.push(point);
    }
    
  // colors for beginning and end of the line
    let c1 = color('rgb(235,188,249)');
    let c2 = color('rgb(252,0,184)');
    
  
    for (let i=1; i<points.length; i++) {
      
      let howFar = map(i, 1,points.length, 0,1);
      let c = lerpColor(c1, c2, howFar);
      stroke(c);
      strokeWeight(5);
      strokeJoin(ROUND);
      noFill();
    
  // previous and current positions    
      let prev = points[i-1];
      let curr = points[i];
      line(prev.x, prev.y, curr.x, curr.y);
    }
  
    
    }
    
  }