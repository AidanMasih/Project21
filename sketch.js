var canvas;
var music;

function preload(){
    music = loadSound("music.mp3 ");
}


function setup(){
    canvas = createCanvas(800,600);
    topEdge = createSprite(198,-45,2000,100)
    leftEdge = createSprite(-45,207,100,2000)
    rightEdge = createSprite(850,198,100,2000)
    //create 4 different surfaces
                                               
     green = createSprite(100,580,200,50);
     blue = createSprite(310,580,200,50);
     red = createSprite(520,580,200,50);
     yellow = createSprite(730,580,200,50);
    //create box sprite and give velocity
     box = createSprite(random(20,750),200,50,50);
     box.velocityX=3;
     box.velocityY=3
    
     
}

function draw() {
   music.play(); 

    background(rgb(169,169,169));
    if(box.isTouching(green)){
        box.shapeColor=rgb(0,128,0);  
     }
     if(box.isTouching(blue)){
        box.shapeColor=rgb(0,0,255);  
     }
          
     if(box.isTouching(yellow)){
        box.shapeColor=rgb(255,255,0);  
     }
     if(box.isTouching(red)){
        box.shapeColor=rgb(255,0,0); 
        box.velocityX=0 
        box.velocityY=0 
        music.stop();
     }
     
    //create edgeSprite
    createEdgeSprites()
    box.bounceOff(green) ;     
    box.bounceOff(blue);
    box.bounceOff(red);
    box.bounceOff(yellow);
    box.bounceOff(topEdge);
    box.bounceOff(leftEdge);
    box.bounceOff(rightEdge);
     green.display();
     green.shapeColor="green";  
     blue.display();
     blue.shapeColor="blue";  
     red.display();
     red.shapeColor="red";  
     yellow.display();
     yellow.shapeColor="yellow";  
     box.display();
     topEdge.display();
     leftEdge.display();
     rightEdge.display();
     //add condition to check if box touching surface and make it box
     
}
