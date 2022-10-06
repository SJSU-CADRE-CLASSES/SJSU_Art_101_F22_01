function setup() {
  createCanvas(500, 500);
}

function draw() {
  let noiseScale=0.02;//set up for background melt
  
  background(250, 145, 169);
  
  //background melt thing
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(x, mouseY+noiseVal*80, x, height);
  }
  //end of background melt code
  noStroke ();
  fill(255, 194, 232)//hat color
  
  circle(width*.46,width*.36,width*.50);//hat
  ellipse(width*.64, width*.40,width*.15,width*.50);//right ear
  ellipse(width*.28,width*.40, width*.15,width*.50);//left ear
   fill(252, 252, 252)//melody white face
  
  ellipse(width*.46, 106, 155, 55);//melody face shape
   fill(110, 74, 31)//hair color
  
  rect(140, 105, 180, 180, 20);//hair back
  
  fill(255, 213, 161)//skin color 
  
  circle(230, 200, 180);//head
  square(122, 320, 180, 20);//body
  rect(200, 270, 55, 50);//neck
  rect(302, 310, 45, 150, 20);//right arm
  circle(325, 290, 50);//hand
  ellipse(316, 265, 12, 55);//left finger
  ellipse(330, 265, 12, 55);//right finger
    fill(247, 248, 250)//eyeball white
  
  ellipse(190,190,50,50)//left eye
    ellipse(270,190,50,50)//right eye
  fill(18, 56, 14)//iris color
  ellipse(190,190,30,30)
  ellipse(270,190,30,30)
  
  fill(255, 213, 161)//skin color 
    
  rect(165, 165, 50, 17);//eyelid
rect(245, 165, 50, 17);//right eyelid
  fill(223, 247, 225)//shirt color
  
  rect(170,350,130,170)//shirt
  
    fill(110, 74, 31)//hair color
  
 rect(245,160,50,8,20)//right eyebrow 
  rect(165,160,50,8,20)//left eyebrow
  triangle(130, 210, 158, 120, 229, 107);//left bang
    triangle(329, 207, 320, 120, 220, 107);//right bang
  rect(160, 285, 35, 80);//left hair strand
  rect(260, 285, 35, 80);//left hair strand
   
   fill(0)//melody eyeballs
  
 ellipse(187, 95, 10, 15);//melody left eye
  ellipse(270, 95, 10, 15);//melody right eye
  fill(247, 205, 77)//melody nose}
  
   ellipse(230, 100, 15, 10);//nose
  fill(0)//eyeliner
  
  rect(165,180,50,6,20)//left eyeliner
  rect(245,180,50,6,20)//right eyeliner
  triangle(166, 185, 200, 180, 140, 178);//left wing
  triangle(295, 186, 270, 180, 320, 178);//right wing
}