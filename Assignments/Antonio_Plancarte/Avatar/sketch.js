var b1 = 1150;
var b2 = 1125;
var b3 = 1100;
var b4 = 1075;
var b5 = 1050;
var b6 = 1025;
var b7 = 1000;
var b8 =  975;
var b9 =  950;
var b10 = 925;
var b11 = 900;
var b12 = 875;
var b13 = 850;
var b14 = 825;
var b15 = 800;
var b16 = 775;
var b17 = 750;
var b18 = 725;
var b19 = 700;
var b20 = 675;
var b21 = 650;
var b22 = 625;
var b23 = 600;
var b24 = 575;
var b25 = 550;
var b26 = 525;
var b27 = 500;
var b28 = 475;
var b29 = 450;
var b30 = 425;
var b31 = 400;
var b32 = 375;
var b33 = 350;
var b34 = 325;
var b35 = 300;
var b36 = 275;
var b37 = 250;
var b38 = 225;
var b39 = 200;
var b40 = 175;
var b41=  150;

let mic;

function setup() {
createCanvas(600, 600);
  mic = new p5.AudioIn();
  mic.start();
  
;
  
  
} 

function eyebrows(){//eyebrows//
fill('black'); 
 rect(275, 175, 80, 20);
  fill('black'); 
 rect(450, 175, 80, 20);}

function hair2(){//hair2//
  fill('black')
  arc(400, 180, 330, 280, 330, radians(355));}

function mouth(micInput){//mouth2//

  ellipse(width/1.5,height/1.3,150,micInput*200)
}

function glasses(){//glasses//
 fill('black'); 
 rect(371, 253, 55, 2);
  fill('black'); 
 rect(173, 254, 55, 2);
  fill('black'); 
 rect(572, 254, 55, 2);
fill('black');
  arc(400, 350, 380, 360, 0, PI);

  fill('tan');}

function body(){//body//
   fill('black');
 arc(400,850,500,600, radians(180), radians(0));}

function nose(){//nose//
    fill('tan');
  ellipse(400,350,40,50, radians(180), radians(0));}



function eyes(){fill('black');
  
  

  
  
  // xc is the mouseX, but constrained
  // between the leftWall and rightWall!
 
  let xc = constrain(mouseX, 275, 325);
  let yc = constrain(mouseY, 220, 315);
                //left eye            
  arc(xc, yc, 100, 80, 0, PI);
  fill('black');
  
  //right eyes
  arc(xc+200, yc, 100, 80, 0, PI);
}

function head(){//head//

  
  ellipse(400, 300, 400, 460);
  
  arc(400, 365, 40, 40, 90, 0);


  fill(0, 0, 255, 50); 
  ellipse(300, 275, 150, 150); 
  fill(0, 0, 255, 50); 
  ellipse(500, 275, 150, 150);}

function hair(){fill('black');
  ellipse(500,30,130,130, radians(180), radians(0));

 
  fill('tan');
  ellipse(400,700,600,130, radians(180), radians(0));
 
 fill('tan');
  rect(365, 500, 75, 500);
               
 
}

function backdrop(){
//background//
 
   fill('white');
  ellipse(400, 300 , b1,b1);
  b1 = b1 - 1;

  fill('black');
  ellipse(400, 300, b2,b2);
  b2 = b2 - 1;
  
  fill('white');
  ellipse(400, 300, b3,b3);
  b3 = b3 - 1;
  
  fill('black');
  ellipse(400, 300, b4,b4);
  b4 = b4 - 1;
  
  fill('white');
  ellipse(400, 300, b5,b5);
  b5 = b5 - 1;
  
  fill('black');
  ellipse(400, 300, b6,b6);
  b6 = b6 - 1;
  
  fill('white');
  ellipse(400, 300, b7,b7);
  b7 = b7 - 1;
  
  fill('black');
  ellipse(400, 300, b8,b8);
  b8 = b8 - 1;
  
  fill('white');
  ellipse(400, 300, b9,b9);
  b9 = b9 - 1;
  
  fill('black');
  ellipse(400, 300, b10,b10);
  b10 = b10 - 1;
  
  fill('white');
  ellipse(400, 300, b11,b11);  
  b11 = b11 - 1;
  
  fill('black');
   ellipse(400, 300, b12,b12);
  b12 = b12 - 1;
  
  fill('white');
  ellipse(400, 300, b13,b13);
  b13 = b13 - 1;
  
  fill('black');
  ellipse(400, 300, b14,b14);
  b14 = b14 - 1;
  
  fill('white');
  ellipse(400, 300, b15,b15);
  b15 = b15 - 1;

  fill('black');
  ellipse(400, 300, b16,b16);
   b16 = b16 - 1;
  
  fill('white');
  ellipse(400, 300, b17,b17);
   b17 = b17 - 1;
  
  fill('black');
  ellipse(400, 300, b18,b18);
   b18 = b18 - 1;
  
  fill('white');
  ellipse(400, 300, b19,b19);
   b19 = b19 - 1;
  
  fill('black');
  ellipse(400, 300, b20,b20);
   b20 = b20 - 1;
  
  fill('white');
  ellipse(400, 300, b21, b21);
   b21 = b21 - 1;
  
  fill('black');
  ellipse(400, 300, b22,b22);
  b22 = b22 - 1;
    
  fill('white');
  ellipse(400, 300, b23,b23);
  b23 = b23 - 1;
  
  fill('black');
  ellipse(400, 300, b24,b24);
  b24= b24 - 1;
    
  fill('white');
  ellipse(400, 300, b25,b25);
  b25 = b25- 1;
  
  fill('black');
  ellipse(400, 300, b26,b26);
  b26= b26 - 1;
  
  fill('white');
  ellipse(400, 300, b27,b27);
  b27 = b27 - 1;
  
  fill('black');
  ellipse(400, 300, b28,b28);
  b28 = b28 - 1;
  
  fill('white');
  ellipse(400, 300, b29,b29);
  b29 = b29 - 1;
  
  fill('black');
  ellipse(400, 300, b30,b30);
  b30 = b30 - 1;
  
  fill('white');
  ellipse(400, 300, b31,31);
  b31 = b31 - 1;
  
  fill('black');
  ellipse(400, 300, b32,b32);
  b32 = b32 - 1;
  
  fill('white');
  ellipse(400, 300, b33,b33);
  b33 = b33 - 1;
  
  fill('black');
  ellipse(400, 300, b34,b34);
  b34 = b34 - 1;

  fill('white');
  ellipse(400, 300, b35,b35);
  b35 = b35 - 1;

  fill('black');
  ellipse(400, 300, b36,b36);
  b36 = b36 - 1;

  fill('white');
  ellipse(400, 300, b37,b37);  
  b37 = b37 - 1;

  fill('black');
  ellipse(400, 300, b38,b38);
  b38 = b38 - 1;
  
  fill('white');
  ellipse(400, 300, b39,b39);
  b39 = b39 - 1;

  fill('black');
  ellipse(400, 300, b40,b40);
  b40 = b40 - 1;

  fill('white');
  ellipse(400, 300, b41,b41);
  b41 = b41 - 1;  
 }

function draw() {
  micLevel = mic.getLevel(); 
  background(0,0,0)
  backdrop()
  hair()
  head()
  eyes()
  nose()
  glasses()
  mouth(micLevel)
  hair2()
  eyebrows()
  firstEffects = new Effects(200,200);
  firstEffects.display();
  //console.log(micLevel);


 //console.log(backdrop);


  


  

  




  if(b41 == 1){
   b1 = 1150;
   b2 = 1125;
   b3 = 1100;
   b4 = 1075;
   b5 = 1050;
   b6 = 1025;
   b7 = 1000;
   b8 =  975;
   b9  = 950;
   b10 = 925;
   b11 = 900;
   b12 = 875;
   b13 = 850;
   b14 = 825;
   b15 = 800;
   b16 = 775;
   b17 = 750;
   b18 = 725;
   b19 = 700;
   b20 = 675;
   b21 = 650;
   b22 = 625;
   b23 = 600;
   b24 = 575;
   b25 = 550;
   b26 = 525;
   b27 = 500;
   b28 = 475;
   b29 = 450;
   b30 = 425;
   b31 = 400;
   b32 = 375;
   b33 = 350;
   b34 = 325;
   b35 = 300;
   b36 = 275;
   b37 = 250;
   b38 = 225;
   b39 = 200;
   b40 = 175;
   b41 = 150;
  }





}