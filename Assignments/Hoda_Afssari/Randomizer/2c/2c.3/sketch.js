//Cats I love throughout my years and their owners 



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
    


     //calling variable
 let randomIndex;
 let animating = false;
 let catimages = [];
 let imageCounter = 0
 let imageLoad; 


  //  function preload(){
    
        for (let i = 1; i <= 6; i++){
            catimages[i] = loadImage(`assets/catimage_'+i+'.JPG`)
    
        }
    
    
    //runs once and stays
    function setup () {
        createCanvas (windowWidth,windowHeight);
        imageMode(CENTER);
        background (168,250,240);
        textSize (windowWidth/27);
        frameRate(15);
        

         //saying this so user knows to click to start randomizer
        textAlign (CENTER);
        text ('click to reveal a random cat name/owner name from a selection',windowWidth/2.5,windowHeight/2.5);
        
        console.log(catimages);

        loadImage('assests/catimage.JPG', img => image(img,50,50) )

    
        
        
    }
    
    
    function draw () { 
        
        if (animating == true){
            clear();
        image(catimages[imageCounter], width/2, height/2);
            
        if (imageCounter < catimage.name - 1){
            imageCounter++;
            console.log(imageCounter);
        } else {
            imageCounter = 0;
        }
    }
    }
    
    function randomizer(){
        animating = false
    
        if (cats[0]){ //if something in array/if not in array 
            //background(168,250,240);
            clear();
        
            // defining variable: int makes it a whole number, random(cats.length) chooses a random number within the array
         randomIndex = int(random(cats.length));
       //writes out the random number, .key is what category it chooses, and then at what location on screen
      
       //text(`${cats[randomIndex].name}'+'s owner is '${cats[randomIndex].owner}`, windowWidth/2,windowHeight/2);
      
       //text(`${cats[randomIndex].name}'s owner is ${cats[randomIndex].owner}`, windowWidth/2,windowHeight/2);
     
       text(cats[randomIndex].name, 50, 50);
       image(random(catimages), width / 2, height / 2);
    
       //removes chosen number from array in this instance
        cats.splice(random.Index,1);
    
    
    } else { //if not in array the display
         background(random(200, 255))
        textAlign (CENTER);
    text ('no more group of cats :(,',windowWidth/2,windowHeight/2) //nothing left game over 
    
      //////background restated so that the array text doesn't stack up on each other and "erases" it
    //   background(168,250,240);
    
    }
    }
    
    function mousePressed () {
        animating = true
        setTimeout(randomizer, 1000);
    
    
//     }
//     }
    
    
// }


// //Cats I love throughout my years and their owners 


// //array
// //global things
// let cats = [
//     {
//         name: "Bella", 
//         owner: "Alizeh"
//     }, {
//         name: "Zuko", 
//         owner: "Sareh"
//     }, {
//         name: "Whisker", 
//         owner: "Sareh"
//     }, {
//         name: "Cookie", 
//         owner: "Maryam"
//     }, {
//         name: "Meowmeow", 
//         owner: "Afssari"
//     }, {
//         name: "Meowmeow's triplets", 
//         owner: "Afssari" 
//     }];
    
//     //calling variable
//     let randomIndex;
//     let animating = false;
//     let catimages = [];
//     let imageCounter;
//     // let catimage_0;
//     // let catimage_1;
//     // let catimage_2;
//     // let catimage_3;
//     // let catimage_4;
//     // let catimage_5;



//     function preload(){

//         for (let i = 0; i <= 5; i++)
//         catimages[i] = loadImage(`assets/catimage_`+i+`.jpg`);
//         {

//         }
//     }


    
    
    
//     //runs once and stays
//     function setup () {
//         createCanvas (windowWidth,windowHeight);
//         background (168,250,240);
//         textSize (windowWidth/27);
//         imageMode(CENTER);

//         // image(catimage, windowWidth/2, windowHeight/2)

    
//          //saying this so user knows to click to start randomizer
//         textAlign (CENTER); 
//         text ('click to reveal a random cat name/owner name from a selection',windowWidth/2.5,windowHeight/2.5);
        
//         // console.log(catimages);
//     }
    
    
//     function draw () { 
    
        
//         if (animating == true){
//        // ellipse (random(width), random(height), random(windowWidth/5, windowWidth/10));
//        image(catimages[imageCounter], width/2, height/2);
//         }
       
//     }    
    
//     function randomizer(){
//         animating = false
    
//         if (cats[0]){ //if something in array/if not in array 
//         // defining variable: int makes it a whole number, random(cats.length) chooses a random number within the array
//         randomIndex = int(random(cats.length));
//        //writes out the random number, .key is what category it chooses, and then at what location on screen
      
//        //text(`${cats[randomIndex].name}'+'s owner is '${cats[randomIndex].owner}`, windowWidth/2,windowHeight/2);
      
//        text(`${cats[randomIndex].name}'s owner is ${cats[randomIndex].owner}`, windowWidth/2,windowHeight/2);
//       //removes chosen number from array in this instance
//         cats.splice(random.Index,.5);
    
    
//     } else { //if not in array the display
//         // background(random(200, 255))
//         textAlign (CENTER);
//     text ('no more group of cats :(,',windowWidth/2,windowHeight/2) //nothing left game over 
    
//       //////background restated so that the array text doesn't stack up on each other and "erases" it
//       background(168,250,240);
    
//     }
//     }
    
//     function mousePressed () {
//         animating = true
//         setTimeout(randomizer, 1000);
//         //////background restated so that the array text doesn't stack up on each other and "erases" it
//       background(168,250,240);
       
//     }
//     // }
    
    }