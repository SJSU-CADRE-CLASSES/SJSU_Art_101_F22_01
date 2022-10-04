//My favorite cats
let cats = [" Bella", "Zuko", "Cookie", "Meowmeow", "Meowmeow's triplets" ];

function setup () {
    createCanvas (600,600);
    background (114);

   console.log ("intial array is " + cats);
  //if do it larks way and have console.log cats under then it does the same thing as push
  
  cats.shift("array after shift "); //doesn't show array after pop for some reason
  console.log (cats);
  
  cats.unshift("Whisker");
  console.log("array after push ");
   console.log (cats);
 
}

function draw (){

}
