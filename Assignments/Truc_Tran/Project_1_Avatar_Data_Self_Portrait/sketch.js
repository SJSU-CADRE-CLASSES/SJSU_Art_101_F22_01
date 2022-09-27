let mic;
let figureChange = false;
let colorChange = false;
let tapMe = true;
let tapMecircle = false;
let boxPattern = true;
let Hello = true;

let chainDownUpFromLeft = [];
let chainDownUpFromRight = [];
let chainUpDownFromLeft = [];
let chainUpDownFromRight = [];
let chainLeftRightTop = [];
let chainLeftRightBottom = [];
let chainRightLeftTop = [];
let chainRightLeftBottom = [];
let helloText;

let myColors = ["#ccaed0", "#eebfd3", "#eeabac", "#f4c9a5", "#f8e7a7", "#cce2bc, #cbe4e4","#c5dbeb"];

function setup() {
  let cnv = createCanvas(400,400, );
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES);
  
  chainDownUpFromLeft[0] = new chainDownUpFromLeftClass(width*.8,height*1);
  chainDownUpFromLeft[1] = new chainDownUpFromLeftClass(width*.7,height*1.10);
  chainDownUpFromLeft[2] = new chainDownUpFromLeftClass(width*.6, height*1.20);
  chainDownUpFromLeft[3] = new chainDownUpFromLeftClass(width*.5, height*1.30);
  chainDownUpFromLeft[4] = new chainDownUpFromLeftClass(width*.4,  height*1.40);
  chainDownUpFromLeft[5] = new chainDownUpFromLeftClass(width*.3, height*1.50);
  chainDownUpFromLeft[6] = new chainDownUpFromLeftClass(width*.2, height*1.60);
  chainDownUpFromLeft[7] = new chainDownUpFromLeftClass(width*.1, height*1.70);
  chainDownUpFromLeft[8] = new chainDownUpFromLeftClass(width*.0, height*1.80);
  chainDownUpFromLeft[9] = new chainDownUpFromLeftClass(width*-.1, height*1.90);
