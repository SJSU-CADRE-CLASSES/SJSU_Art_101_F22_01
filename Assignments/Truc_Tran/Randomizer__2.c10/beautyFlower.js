class beautyFlower{constructor(x,y){this.x = x; this.y = y;}

pistil(){push();
    scale(1);
    noStroke();
    fill('#f8e7a7');
    translate(this.x,this.y);
    circle(width*0, height*.192,width*.06);
    pop();}

petal(){push();  
    scale(1);
    noStroke();
    translate(this.x,this.y);
    fill(random(myColors));
    circle(width*0,height*.16,25);
    fill(random(myColors));
    circle(width*.035,height*.185,25);
    fill(random(myColors));
    circle(width*-.035,height*.185,25);
    fill(random(myColors));
    circle(width*-.025,height*.225,25);
    fill(random(myColors));
    circle(width*.025,height*.225,25);
    pop();}}