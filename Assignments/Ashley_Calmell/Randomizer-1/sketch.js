let feelings= [
    {name: "happy", color:"yellow"},
    {name:"sad", color:"blue"},
    {name:"envy", color:"green"},
    {name:"fear",color:"purple"},
    {name:"anger",color:"red"}
];
let randomIndex;
function setup() {
    createCanvas(600,600);
    background(200);

    
    }

function draw() {

}
function mousePressed(){
    background(random(255));
    randomIndex= int(random(feelings.length));
    text(feelings[randomIndex].name,50,50);
    feelings.splice(randomIndex,1);
   
}
