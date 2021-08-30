var sea, boat;
    
 var seaBackground,  boat_Swaying


function preload(){
  boat_Swaying = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png" );
  seaBackground = loadImage("sea.png");
}

function setup(){
  
 // making background
 sea = createSprite( 200, 200, 400, 20);
 sea.addImage("sea", seaBackground)
 sea.scale=0.23
 
 
  
 
  // creating boat 
  createCanvas(700,400);
  boat = createSprite(200, 300, 10, 10);
  boat.addAnimation("swaying", boat_Swaying);
  boat.scale=0.2;


  
}

function draw() {
  background("blue");
 
  // making ship move (loop)
  sea.velocityX=3;
  console.log(sea.x);
  if (sea.x>400){
    sea.x=200
  }


    drawSprites();
}
