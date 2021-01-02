var fixedRect,movingRect;
function setup() {

  createCanvas(800,400);
 fixedRect =createSprite(200,200,50,80);
 movingRect =createSprite(400,200,80,30);
 fixedRect.shapeColor ="green";
 movingRect.shapeColor ="green";
}

function draw() {
  background(255,255,255);
  movingRect.y =World.mouseY; 
  movingRect.x =World.mouseX; 

  if(movingRect-fixedRect.x ===fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor ="red";
  }
  drawSprites();

}