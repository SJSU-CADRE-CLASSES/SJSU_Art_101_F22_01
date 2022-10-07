// Cats that my family has owned over the years. 
let cats = [{name: "Kairi", color: "teal"}, {name: "Buddy", color: "red"}, {name: "Taz", color: "orange"}, "Bijou", "Sassy", "Mittens", "Bo", "Claire"];

function setup() {
  createCanvas(600, 600);
  background (200);
  
//   cats[0] = "Kairi Kai-Kai";
//   cats[1] = "Buddy The Budster";
//   cats[2] = "Taz Tazzy";
//   cats[3] = "Bijou Bijoooooouuu";
//   cats[4] = "Sassy Sassafrass";
//   cats[5] = "Mittens Little Mit";
//   cats[6] = "Bo Bobo";
//   cats[7] = "Claire Claire-Bear";
  
  console.log ("initial array is");
  console.log (cats[0]);
  
  cats.pop();
  console.log ("array after pop");
  console.log (cats);
  
  cats.push();
  console.log ("array after push");
  console.log (cats);

}

function draw() {
  background(220);
}