
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
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation('moving',monkey_running);
  monkey.scale=0.1;

ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);




}


function draw() {
background(255);
 
   if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
  if (keyDown("space")) {
      monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  Food();
  obstacles();
  
  
  
  drawSprites();
}
function Food(){ 
if (frameCount % 80 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 100;
    FoodGroup.add(banana);

}
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    var rand = Math.round(random(1, 6));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6 
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  
  
  
  
  }
}



