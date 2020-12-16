var backgroundImg;
var flame;
var background;

function preload(){
    backgroundImg = loadImage("images/Iceberg.png");
}
function setup(){
    createCanvas(displayWidth, displayHeight);
    background = createSprite(displayWidth, displayHeight, displayWidth, displayHeight)
   
      background.addImage(backgroundImg);
 background.scale = 2;
    flame = new Fire(displayWidth/2,displayHeight/2,50,75);
}
function draw(){

     hot();
     drawSprites();
}


function hot(){
    flame.display();
    flame.play();
  if(keyIsDown(UP_ARROW)){
    flame.y = flame.y + 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    flame.y = flame.y - 10;
  }  
}