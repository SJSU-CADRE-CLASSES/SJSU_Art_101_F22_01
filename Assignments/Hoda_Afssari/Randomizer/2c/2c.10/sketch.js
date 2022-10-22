
//array
//global things
let cats = [
    {
        name: "Bella", 
        owner: "Alizeh"
    }, {
        name: "Zuko", 
        owner: "Sareh"
    }, {
        name: "Whisker", 
        owner: "Sareh"
    }, {
        name: "Cookie", 
        owner: "Maryam"
    }, {
        name: "Meowmeow", 
        owner: "Afssari"
    }, {
        name: "Meowmeow's triplets", 
        owner: "Afssari" 
    }];
    


 let randomIndex;
 let animating = false;
 let imageCounter = 0
 let catimages = [];
 let button;
 let animate;




    function preload(){
    
        for (let i = 0; i <= 5; i++){
            catimages[i] = loadImage(`assets/catimage_`+i+`.JPG`)
    
        }
    }
    
    //runs once and stays
    function setup (){
        createCanvas(windowWidth,windowHeight);
        background(168,250,240);
      //  button = createButton("need to ease anxiety? click to choose a cat to hang out with");
      button = select("#randButton")
       // button.position(windowWidth/2.3,windowHeight/15);
        button.mousePressed(buttonPressed);
        button.class(".randomizerButton")
        button.style("padding", "10px");
        button.style("background-color", "#a8faf0")
      
        
        imageMode(CENTER);
        textSize (windowWidth/50);
      //  textAlign (CENTER);
    
        frameRate(20);
        console.log(catimages);
       // text ("which cat should I hang out with",windowWidth/2.5,windowHeight/2.5);
    }



    
    function draw(){


        if (animating == true) {
            
            clear();
            image(catimages[i][imageCounter],windowWidth/2.3,windowHeight/155);
        
            if(imageCounter < catimages.name -1) {
            imageCounter++;
             console.log(imageCounter);
            } else {
            imageCounter = 0;
                }
            }
        }
    
    
    
        function randomizer (){
            animating = false;
          if (cats[0]){
           clear();
          // background(168);
           
            randomIndex = int(random(cats.length));
            text(cats[randomIndex].name,width/15,height/15);
            image(catimages[randomIndex],width/2,height/2);
            cats.splice(randomIndex,1);
            catimages.splice(randomIndex,1);
            } else {
           clear();
          // textAlign(CENTER)
          background(168,250,240)
            text("no more friend's cat options :(, go to a cat cafe :)",width/3,height/3);
            
            }
        }
    
    
    function buttonPressed () {
        animating = true
        setTimeout(randomizer, 1000);
    
    }
