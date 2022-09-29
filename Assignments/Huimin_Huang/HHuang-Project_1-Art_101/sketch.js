function setup(){
    createCanvas(600,600);
     happy=0;
     i=1;
    }
   
   function draw(){
    background(233,204,211);
    fill(255);
   
    drawMe();
   
    // text(mouseX+" "+mouseY,mouseX,mouseY);
   
   
   }
   
   function drawMe(){
   //hair
    stroke(248,179,127);
    strokeWeight(2);
    fill(249,223,205);
    beginShape();
    vertex(130,600);
    bezierVertex(-50,470,230,470,80,350);
    bezierVertex(20,290,100,260,135,220);
    bezierVertex(180,150,150,70,300,60);
    bezierVertex(450,70,420,150,465,220);
    bezierVertex(500,260,580,290,520,350);
    bezierVertex(370,470,650,470,470,600);
    endShape();
     
   //face  
   push();
       fill(255);
       stroke(244,206,200);
       ellipse(295, 230, 220, 200);
       pop();
     
   //eyebrow
   noFill();
     strokeWeight(3);
     stroke(50,50,50);
     arc(240,200,90,50,PI + 1.25*QUARTER_PI,TWO_PI- 1.3*QUARTER_PI);
     arc(340,200,90,50,PI + 1.3*QUARTER_PI,TWO_PI- 1.25*QUARTER_PI);
     
     
   //neck
   push();
       fill(255);
       stroke(244,206,200);
       rect(280,330,30,30);
     
   //body  
   fill(97,154,220);
      stroke(248,179,127);
      beginShape();
      vertex(180,600);
      bezierVertex(180,500,300,100,420,600);
      endShape(CLOSE);
   
   push();
       if(happy===0)
       {
       //mouth-happy
         fill(235,80,126);
           triangle(296, 265, 286, 300, 306, 300);
           }else{
        //mouth-i     
           fill(235,80,126);
           ellipse(295,280,30,40);			
       }
       pop();
     
   
         push();
       if(happy===0)
       {  
         //eye
   push();
       fill(0);
    ellipse(240,220,18,30);
    ellipse(340,220,18,30);
       fill(255);
         //eyemove
       var t1=(mouseX-400)/300*4.5;
       var t2=(mouseY-200)/400*4.5;
       fill(255);
       noStroke();
       ellipse(241+t1,224+t2,5,10);
       ellipse(341+t1,224+t2,5,10);
       }else{
       fill(255,215,0);
       star(240, 220, 17, 10);
       star(340, 220, 17, 10);
       }
   }
   
   function mouseClicked()
   {
     if(happy===0)
     {
       happy=1;
     }else{
       happy=0;
     }
   }
     
   function star(x, y, radius1, radius2) {
     let angle = PI*2/5;
     let halfAngle = angle / 2.0;
     beginShape();
     for (let a = 0; a < PI*2; a += angle) {
       let sx = x + cos(a) * radius1;
       let sy = y + sin(a) * radius1;
       vertex(sx, sy);
       sx = x + cos(a + halfAngle) * radius2;
       sy = y + sin(a + halfAngle) * radius2;
       vertex(sx, sy);
     }
       endShape(CLOSE);
   
     
   }
   