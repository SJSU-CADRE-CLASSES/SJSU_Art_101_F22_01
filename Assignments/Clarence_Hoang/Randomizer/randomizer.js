let bestFriends = [
  {name:"jeante",color:"black"},
  {name:"robel",color:"maroon"},
  {name:"noah",color:"blue"},
  {name:"bryan",color:"purple"},
  {name:"jeff",color:"yellow"},
  {name:"brian",color:"green"}]

let randomIndex;
let animating = false;
let friends = [];

function preload(){
  for (let i = i; i <= 6; i++){
    friends[i] = loadImage(`assets/friend_${i}.JPG`);
  }
}

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(15);
  text("My Best Friends",50,50);
  text("Click to randomize",50,200);
  y = 0;
  ImageBitmapRenderingContext(CENTER);
  console.log(friends);
}

function draw() {
  let rightWall = width;
  let xc = constrain();
  resetBar();
  if(animating ==true){
    image(friends[0],width/2,height/2)
  }
}

function resetBar(){

  fill(50,50,255)
  if(animating == true){
    clear();
  rect(0,height-20,y,20);
  } else{
  y = 1;
  }
 y = y +5.5;
  
}
function randomizer(){
  fill(0)
  animating = false;
  if(bestFriends[0]){
  background(random(200,255));
  randomIndex = int(random(bestFriends.length));
  text(`${bestFriends[randomIndex].name}'s favorite color is ${bestFriends[randomIndex].color}`,50,50);  
  // text(bestFriends[randomIndex].name +"'s favorite color is " + bestFriends[randomIndex].color,50,50);
  bestFriends.splice(randomIndex,1);
} else {
  background(random(200,255));
  text("Find more friends!",50,50);
}
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer,1000);
}