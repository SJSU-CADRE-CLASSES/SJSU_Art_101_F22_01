// Gamertag Generator
let name1 = ["Fresh", "Stumpy", "Chunky", "Sexy", "Purple", "Wiggly", "Huge", "Bloody", "Mr", "Mrs", "Small", "Big", "Happy", "Sad", "Jolly", "Serious", "Skinny", "Fat", "Average", "Weird", "Cursed", "Lovely", "Flying", "Flaming", "Speedy", "Shmunky", "Awesome", "Epic", "Exciting", "Ultimate", "Random", "Lil", "Strong", "Young", "Big", "Reckless", "Milky", "Fitted", "Short", "Wonky", "Wiggly", "Chilly", "Stiff", "Moist", "Loud", "Violent", "Peaceful", "Long", "Freaky", "Filthy", "Dirty", "Quiet", "Large", "Active", "Twisted", "Crazy", "Smart", "Blind", "Shifty", "King", "Queen", "Mister", "Huge", "Yellow"]

let name2 = ["Pig", "Pancakes", "Doggo", "Whale", "Fish", "Banana", "Butterfly", "Scallop", "Duck", "Goose", "Bean", "Tortilla", "Flower", "Biker", "Blade", "Kitty", "Shepard", "Cow", "Rockstar", "Avocado", "Broccoli", "Skateboard", "Mango", "Lemon", "Cabbage", "Sponge", "Plant", "Chopstick", "Violin", "Dunky", "Donut", "Raisin", "Loaf", "Man", "Lady", "Burger", "Worm", "Sneaker", "Kirby", "Broccoli", "Cereal", "Pebble", "Stick", "Freddy", "Mouse", "Noodle", "Pickle", "Panda", "Burger", "Egg", "Lotion", "Toast", "Pickle", "Panda"]

let number = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "24", "17", "66", "123", "101", "23", "77", "01", "22", "47", "64", "81", "27", "9"];

let underscore = [" ", " ", "_"]

let randomIndex;
let avatar = [];
let imageCounter = 0;
let BGimg;
function preload(){

  for (let i = 0; i <= 9; i++){
    avatar[i] = loadImage(`assets/avatar${i}.JPG`)
    BGimg = loadImage(`assets/gameboybg.JPG`)

  pixelFont = loadFont(`assets/minecraft.ttf`)
  }

}
function setup() {
  createCanvas(540, 960);
  background(220);
  image(BGimg, 0, 0);

  textSize(20);
  textFont(pixelFont);
  fill(34, 51, 48)
  text('Press A to', 210, 270);
  text('Generate Gamertag', 160, 310);
  console.log(avatar);

  // console.log(name1[int(random(name1.length))]);

}

function draw() {

}

function mousePressed(){

  if (mouseX > 420  && mouseX < 500 
    && mouseY > 500 && mouseY < 700) 
{
    let buttonA = dist(mouseX, mouseY, 260, 100);

  background(220)
  image(BGimg, 0, 0);
  textSize(18);
  textFont(pixelFont);
  fill(34, 51, 24)
  text('Your Gamertag is:', 140, 200);
  text('     ________________', 124, 236);

  fill(34, 51, 24)
  randomIndex = int(random(name1.length));
  text(name1[randomIndex], 149, 230);

  randomIndex = int(random(name2.length));
  text(name2[randomIndex], 249, 230);

  randomIndex = int(random(number.length));
  text(number[randomIndex], 354, 230);

  randomIndex = int(random(underscore.length));
  text(underscore[randomIndex], 339, 230);


  image(avatar[imageCounter], 200, 275);

  if (imageCounter < avatar.length - 1){
  imageCounter++;
  console.log(imageCounter);
} else {
  imageCounter = 0;
}

}

}
