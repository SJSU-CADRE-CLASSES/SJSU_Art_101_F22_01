// dnd character classes
let dndClasses = [
    {
      name: "Bard",
    },
    {
      name: "Paladin",
    },
    {
      name: "Wizard",
    },
    {
      name: "Sorcerer",
    },
    {
      name: "Rogue",
    },
    {
      name: "Cleric",
    },
    {
      name: "Barbarian",
    },
    {
      name: "Druid",
    },
    {
      name: "Fighter",
    },
    {
      name: "Monk",
    },
    {
      name: "Ranger",
    },
    {
      name: "Warlock",
    },
  ];
  
  let dndRaces = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Halfling",
    "Human",
    "Tiefling",
    "Half-Orc",
    "Leonin",
    "Satyr",
    "Aasimar",
    "Changling",
  ];
  
  let randomIndex1;
  let randomIndex2;
  
  function setup() {
    console.log("setup running");
    createCanvas(600, 600);
    background(220);
    strokeWeight(2);
    textSize(32);
  
    console.log("initial class array");
    console.log(dndClasses);
  
    console.log("initial race array");
    console.log(dndRaces);
  }
  
  function draw() {}
  
  function mousePressed() {
    background(random(200, 255));
  
    randomIndex1 = int(random(dndClasses.length));
    console.log(dndClasses[randomIndex1].name);
  
    randomIndex2 = int(random(dndRaces.length));
    console.log(dndRaces[randomIndex2]);
  
    text(dndClasses[randomIndex1].name, 50, 50);
    text(dndRaces[randomIndex2], 200, 50);
  }