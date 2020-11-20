var fixedRect, movingRect;
var gameObject1;

var gameObject2, gameObject3;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(600, 200, 40, 40);
  movingRect.shapeColor = "green";
  

  gameObject1 = createSprite(200, 400, 40, 40);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(300, 400, 20, 20);
  gameObject2.velocityX = 4;
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(500, 400, 20, 20);
  gameObject3.velocityX = -4;
  gameObject3.shapeColor = "green";
  
}

function draw() {
  background("black");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  
  
  

  
  movingRect.shapeColor = "green";
  if(isTouching(gameObject1,movingRect)){
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue"
  }
  else{
    gameObject1.shapeColor = "green";
    
  }

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red"
  }
  else{
    fixedRect.shapeColor = "green";
    
  }

  bounceOff(gameObject2, gameObject3);

  drawSprites();
}

