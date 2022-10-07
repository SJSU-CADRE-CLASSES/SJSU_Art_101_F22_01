// Gamertag Generator
let name1 = ["Fresh", "Stumpy", "Chunky", "Sexy", "Purple", "Wiggly", "Huge", "Bloody", "Mr", "Mrs", "Small", "Big", "Happy", "Sad", "Jolly", "Serious", "Skinny", "Fat", "Average", "Weird", "Cursed", "Lovely", "Flying", "Flaming", "Speedy", "Shmunky", "Awesome", "Epic", "Exciting", "Ultimate", "Random", "Lil", "Strong", "Young", "Big", "Reckless", "Milky", "Fitted", "Short", "Wonky", "Wiggly", "Chilly", "Stiff", "Moist", "Loud", "Violent", "Peaceful", "Long", "Freaky", "Filthy", "Dirty", "Quiet", "Large", "Active", "Twisted", "Deranged", "Crazy", "Smart", "Blind", "Shifty"]

let name2 = ["Pig", "Pancakes", "Doggo", "Whale", "Fish", "Banana", "Butterfly", "Scallop", "Duck", "Goose", "Bean", "Tortilla", "Flower", "Biker", "Blade", "Kitty", "Shepard", "Cow", "Rockstar", "Avocado", "Broccoli", "Skateboard", "Mango", "Lemon", "Cabbage", "Sponge", "Plant", "Chopstick", "Violin", "Dunky", "Donut", "Raisin", "Loaf", "Man", "Lady", "Burger", "Worm", "Sneaker", "Kirby", "Broccoli", "Cereal", "Pebble", "Stick", "Freddy", "Mouse", "Noodle", "Pickle", "Panda"]

let number = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "24", "17", "66", "123", "101", "23", "77", "01", "22", "47", "64", "81", "27", "9"];

let underscore = [" ", " ", "_"]

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);

  // console.log(name1[int(random(name1.length))]);

}

function draw() {

}




function mousePressed(){

  background(220)
  textSize(24);
  textFont('Georgia');
  fill(0)
  text('Your Gamertag is:', 36, 80);
  text('   ________________', 20, 116);

  fill(0, 130, 52)
  randomIndex = int(random(name1.length));
  text(name1[randomIndex], 45, 110);

  randomIndex = int(random(name2.length));
  text(name2[randomIndex], 145, 110);

  randomIndex = int(random(number.length));
  text(number[randomIndex], 250, 110);

  randomIndex = int(random(underscore.length));
  text(underscore[randomIndex], 235, 110);
}
