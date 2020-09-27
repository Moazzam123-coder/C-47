var bgimg;
var Ground;
var lion,cow,horse,car,stone;
var bat,bird,ostrich,plane;
var gameState = "LOADING"
var score = 0;

function preload()
{
  lion = loadImage("lion.png");
  cow =loadImage("cow.png");
  horse = loadImage("horse.png");
  //car = loadImage("car.png");
  stone = loadImage("stone.png");
  bat = loadImage("bat.png");
  bird = loadImage("bird.png");
  ostrich = loadImage("ostrich.png");
  plane = loadImage("plane.png");
bgimg = loadImage("FinalGround.png");
//bg2 = loadAnimation("city.jpg","city2.jpg");
plA= loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  ObstacleGroup = createGroup();
 StartButton = createButton("▶️");
 StartButton.position(windowWidth/3,windowHeight/2);
 QuitButton = createButton("⎋");
 Restart = createButton("Reset");
 Restart.position(windowWidth*2/3,windowHeight/2);
 Restart.hide();
 QuitButton.position(windowWidth*2/3,windowHeight/2)
 // Rbutton = createButton("→");
 // Lbutton = createButton("←");
  Ubutton = createButton("↑");
  Dbutton = createButton("↓");
 // Rbutton.position(windowWidth*7/8,windowHeight*7/8);
  Dbutton.position(windowWidth*5/6,windowHeight*7/8);
 // Lbutton.position(windowWidth/20,windowHeight*7/8);
  Ubutton.position(windowWidth/10,windowHeight*7/8);
  Ground = createSprite(windowWidth/2,windowHeight/2);
  //Ground.addAnimation(bg2);
  Ground.addImage("Ground",bgimg);
  Ground.scale = 3;
  
  Dev = createSprite(400, 200, 50, 50);
  Dev.addAnimation("player",plA);
  Dev.scale= 0.5;
  Edges = createEdgeSprites();
}

function draw() {
  background(bgimg);  
  StartButton.mousePressed(()=>{
    gameState = "start";
    StartButton.hide();
    QuitButton.hide();
  })

  
 /* Rbutton.mousePressed(()=>{
    Dev.velocityX = 4
  })
  Lbutton.mousePressed(()=>{
    Dev.velocityX = -4
  })*/
  Dbutton.mousePressed(()=>{
    Dev.velocityY = 4
  })
  Ubutton.mousePressed(()=>{
    Dev.velocityY = -35
  })

if(gameState==="start")
{ score += Math.round(getFrameRate()/60);
 // console.log(score);
  var DisplayScore = createElement("h4");
  DisplayScore.html("SCORE:"+score);
  DisplayScore.position(displayWidth*5/6,displayHeight/5);
 // text("SCORE"+score,displayWidth*5/6,displayHeight);
 Ground.velocityX = -4;
  if(Ground.x<0){
    Ground.x = Ground.width/2;

  }
 Dev.velocityY+=3;
 Dev.collide(Edges);
 SpawnObstacleGround();
 SpawnObstacleAir();
 if(ObstacleGroup.isTouching(Dev))
 {
   gameState = "end";
 }

}
if(gameState==="end")
{
  text("SCORE"+score,displayWidth*5/6,displayHeight);
Ground.velocityX = 0;
Dev.velocityY = 0;
Restart.show();
ObstacleGroup.setVelocityXEach(0);
ObstacleGroup.setLifetimeEach(-1);
}
Restart.mousePressed(()=>{
  gameState = "start";
  Restart.hide();
  ObstacleGroup.destroyEach();
  score = 0;
}) 
console.log(score);
  drawSprites();
  QuitButton.mousePressed(()=>{
    textSize(30);
    text("THANKS FOR PLAYING",displayWidth/3,displayHeight/2);
  })
}

function SpawnObstacleAir()
{
if(World.frameCount%100===0)
{
  var lion = createSprite(windowWidth,windowHeight/15);
  lion.velocityX = -7;
 // bat.addImage("bat",bat);
 ObstacleGroup.add(lion);
 lion.Lifetime = 300;
}
if(World.frameCount%400===0)
{
  var horse = createSprite(windowWidth,windowHeight/15);
  horse.velocityX = -7;
 // bat.addImage("bat",bat);
 ObstacleGroup.add(horse);
 horse.Lifetime = 300;
}
if(World.frameCount%1100===0)
{
  var cow = createSprite(windowWidth,windowHeight/15);
  cow.velocityX = -7;
 // bat.addImage("bat",bat);
 ObstacleGroup.add(cow);
 cow.Lifetime = 300;
}
if(World.frameCount%1500===0)
{
  var stone = createSprite(windowWidth,windowHeight/15);
  stone.velocityX = -7;
 // bat.addImage("bat",bat);
 ObstacleGroup.add(stone);
 stone.Lifetime = 300;
}


}
function SpawnObstacleGround()
{
if(World.frameCount%200===0)
{
  var bat = createSprite(windowWidth,windowHeight*7/8);
  bat.velocityX = -7;
 // bat.addImage("bat",bat);
 ObstacleGroup.add(bat);
 bat.Lifetime = 300;
}
if(World.frameCount%600===0)
{
  var plane = createSprite(windowWidth,windowHeight*7/8);
  plane.velocityX = -7;
 // bat.addImage("bat",bat);
 ObstacleGroup.add(plane);
 plane.Lifetime = 300;
}
if(World.frameCount%1300===0)
{
  var ostrich = createSprite(windowWidth,windowHeight*7/8);
  ostrich.velocityX = -7;
 // bat.addImage("bat",bat);
 ObstacleGroup.add(ostrich);
 ostrich.Lifetime = 300;
}
if(World.frameCount%1700===0)
{
  var bird = createSprite(windowWidth,windowHeight*7/8);
  bird.velocityX = -7;
 // bird.addImage("bird",bird);
 ObstacleGroup.add(bird);
 bird.Lifetime = 300;
}


}