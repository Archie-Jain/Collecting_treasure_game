 var path,boy,cash,diamonds,jwellery,sword,end1,endImg;
 var  pathImg,boy,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
 var treasureCollection = 0;
 var cashG,diamondsG,jwelleryG,swordGroup;
 var PLAY=1;
 var END=0;
 var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  cashImg = loadImage("cash.png");
  //diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg=loadAnimation("gameOver.png");
  boyImg=loadAnimation("runner1.png","runner2.png");
}

function setup(){
  
  createCanvas(400,400);
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;


 //creating boy running
 boy = createSprite(70,330,20,20);
 boy.addAnimation("SahilRunning",boyImg);
 boy.scale=0.08;

 cashG=new Group();
// diamondsG=new Group();
 jwelleryG=new Group();
 swordGroup=new Group();
  


}

function draw() {

  background(0);
  //CODE FOR MOVING THE BOY WITH MOUSE
  boy.x = World.mouseX;
  
  //code for colliding boy with edges
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    

    if (cashG.isTouching(boy)) {
      treasureCollection=treasureCollection+50;
      cashG.destroyEach();
    }
  /*  else if (diamondsG.isTouching(boy)) {
      treasureCollection=treasureCollection+100;
      diamondsG.destroyEach();
      
    }*/
    else if(jwelleryG.isTouching(boy)) {
      treasureCollection=treasureCollection+100;
      jwelleryG.destroyEach();
      
    }else{
      if(swordGroup.isTouching(boy)) {
        
      //code for creating the image of 'game over'
      end1=createSprite(200,200,10,10);
      end1.addAnimation("boyrunning",endImg);
      end1.scale=0.5;
      gameState=END;
       
      }
    if(gameState===PLAY){
    createCash();
   // createDiamonds();
    createJwellery();
    createSword(); 
      }
      if(gameState===END){
        cashG.destroyEach();
        cashG.setVelocityEach(0);
      //  diamondsG.destroyEach();
        //diamondsG.setVelocityEach(0);
        jwelleryG.destroyEach();
        jwelleryG.setVelocityEach(0);
        swordGroup.setVelocityEach(0);
        swordGroup.destroyEach();
        boy.destroy();
        path.setVelocity(0,0);
      }
  }

  drawSprites();
  textSize(20);
  fill("orange");
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40,     10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

/*function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50,         350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}*/

function createJwellery() {
  if (World.frameCount % 100 == 0) {
  var jwellery = createSprite(Math.round(random(50,         350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40,   10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
