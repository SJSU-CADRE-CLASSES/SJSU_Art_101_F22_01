let mic;
//letmiclevel
function setup() {
  let cnv = createCanvas(800, 800);
  cnv.mousePressed(userStartAudio);
   mic=new p5.AudioIn();
    mic.start();
 
}
function draw(){
  let x=width/2;
  let y=height/2; 
  background(50,165,170);
  //a teal background for the base of the avatar
  
    line(x, y*0, y, y*2);
  //throughline
  //scaling complete

dresstri(); 

mouth();

linecircles();

}
function dresstri(){
  let x=width/2;
  let y=height/2;
  fill(240)
  triangle(x*0.5,y*0.19, x, 0, x*1.5, y*0.19);
fill(51)
  triangle(x*0.62,y*0.18, x, y*0.08, x*1.37, y*0.18);
fill(240)
  triangle(x*0.5,y*1.81, x, y*2, x*1.5, y*1.81);
fill(51)
  triangle(x*0.62,y*1.82, x, y*1.93, x*1.37, y*1.82);
  //North & South triangles for aesthetic effect
  //scaling complete
}
function linecircles(){
  let x=width/2
  let y=height/2
  fill (51)
    ellipse(x, 0, x*.15, y*.15);
  fill(240)
     ellipse(x, y*.25, y*.1, y*.1);
  fill(51)
    ellipse(x, y*.38, x*0.06, y*0.06);
  fill(51)
    ellipse(x, y*1.63, x*0.06, y*0.06);
  fill(240)
    ellipse(x, y*1.75, y*.1, y*.1);
  fill(51)
    ellipse(x, y*2, x*0.14, y*0.14);
  //series of ellipses that look neat
  //scaling complete
}
function mouth(){
  //micLevel = mic.getLevel();
  let x=width/2
  //let x=micLevel
  let y=height/2
  noStroke()
  fill(51)
  triangle(x*.25,y, x, y*.42, x, y*1.57)
fill(51)
  triangle(x*1.75, y, x, y*.42, x,y*1.57)
  //scaling complete
  
   text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  noFill();
  //mouse point tracker for work in progress
  //circle(mouseX, mouseY, 25);
}