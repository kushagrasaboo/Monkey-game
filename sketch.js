
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500, 500)
  
 monkey=createSprite(80,315,10,10)
  monkey.addAnimation("moveing",monkey_running);
  monkey.scale=0.1
  
 FoodGroup=new Group()
 obstacleGroup=new  Group()
}


function draw() {
background("lightgreen");
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  
  if(keyDown("space")&& monkey.y>=310){
     monkey.velocityY=-12;
     }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
  
  
   stroke("white");
  textSize(20);
  fill("white")
  
  if(World.frameCount % 80 == 0){
     banana=createSprite(500,Math.round(random(200,240)),10,10)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-8
    FoodGroup.add(banana)
    banana.setLifetime=50
     }
  
  if(World.frameCount % 300 == 0){
     obstacle=createSprite(500,320,10,10)
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2
    obstacle.velocityX=-6
    obstacleGroup.add(obstacle)
     }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime,100,50);
  
 drawSprites();
}






