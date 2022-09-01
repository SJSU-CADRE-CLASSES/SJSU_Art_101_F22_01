function setup( ) {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

 function draw () {
  background(0);

//Outter Left Eye
  fill(random(255),random(255),random(255) );
  ellipse (width*.419,width*.501,width*.05,width*.087)
//Outter Right Eye
  ellipse (width*.557,width*.5,width*.057,width*.087)
//Inner Right Eye
  let g=color("#39FF14")
  fill(g)
  ellipse (width*.557,width*.525,width*.02, width*.037)
//Inner Left Eye
  let r=color("#EABFFF")
  fill(r)
  ellipse (width*.419,width*.528,width*.022, width*.036)
//nostrils
ellipse (width*.462,width*.587,width*.025,width*.0125)
ellipse (width*.518,width*.587,width*.025,width*.0125)
//mouth
triangle(width*.55,width*.70,width*.40,width*.65,width*.55,width*.69)
//Eyebrow Left 
rect(width*.525,width*.4,width*.112,width*.0225,width*.125)
//Eyebrow Right
let q=color("#39FF14")
fill(q)
rect(width*.35,width*.4,width*.1125,width*.0225,width*.125)
  stroke(255);
  noFill();
beginShape();
//Outter Nose
square(width*.445,width*.567,width*.035)
square(width*.5,width*.567,width*.035)

//LEGS Left
quad(width*.55,width*.375,width*.03,width*.025,width*.192,width*.75,width*.03,width*.235)
quad(width*.275,width*.75,width*.06,width*.05,width*.385,width*1.5,width*.06,width*.47)
//LEGS Right
quad(290,8,399,210,300,90,89,160)



//Body
  let spacing = map(mouseX, 0, width, 5, 100);
for (let a = 0; a < 360; a += spacing) {
    let x = 100 * sin(a) + 200;
    let y = 100 * cos(a) + 200;
    vertex(x, y);
  }
  
  //vertex (200,100);
  //vertex (200, 100);
  //vertex (200,100);
  //vertex (50, 75);
  //vertex (100, 50);
endShape(CLOSE);


}