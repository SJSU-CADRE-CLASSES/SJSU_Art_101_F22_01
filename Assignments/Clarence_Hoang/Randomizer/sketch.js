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
let button;
let imageCounter= 0;

function preload(){
  for (let i = 0; i <= 5; i++){
    friends[i] = loadImage(`assets/friend_${i}.jpg`);
  }
}

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(15);
  imageMode(CENTER);
  text("My Best Friends",50,50);
  text("Click to randomize",50,200);
  
  
 
  button = createButton("Click to randomize");
  button.mousePressed(buttonPressed);
  y = 0;
}

function draw() {
  resetBar();
  if(animating ==true){
    image(friends[imageCounter],width/2,height/2)
    if(imageCounter < friends.length - 1){
      imageCounter++;
    } else {
      imageCounter = 0;
    }
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

function buttonPressed(){
  animating = true;
  setTimeout(randomizer,1000);
}