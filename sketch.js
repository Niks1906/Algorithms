var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400,300,50,100);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  fixedRect = createSprite(400,300,100,100);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "white";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }



  drawSprites();
}