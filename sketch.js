var trex
var trex_pngrun
var cloud
var cloudsGroup
var obstacleGroup
var bird
var bomb
var missle
var bird2
var bomb2
var missle2
var tire
var truck
var dropGroup
var score = 0
var PLAY = 1
var END = 0
var GAMESTATE = PLAY
var RestartIMG
var GameOverIMG
var none

function preload() {
  trex_run = loadAnimation("/Running_GIF/sprite_00.png", "/Running_GIF/sprite_01.png",
    "/Running_GIF/sprite_02.png", "/Running_GIF/sprite_03.png", "/Running_GIF/sprite_04.png",
    "/Running_GIF/sprite_05.png", "/Running_GIF/sprite_06.png", "/Running_GIF/sprite_07.png",
    "/Running_GIF/sprite_08.png", "/Running_GIF/sprite_09.png", "/Running_GIF/sprite_10.png",
    "/Running_GIF/sprite_11.png", "/Running_GIF/sprite_12.png", "/Running_GIF/sprite_13.png")

  groundIMG = loadAnimation("background.desert (2)/sprite_0.png", "background.desert (2)/sprite_1.png", "background.desert (2)/sprite_2.png", "background.desert (2)/sprite_3.png", "background.desert (2)/sprite_4.png", "background.desert (2)/sprite_5.png",)
  backgroundIMG = loadImage("background.desert (2)/sprite_0.png")
  cloudIMG = loadImage("download-removebg-preview (2).png")

  trex_jump = loadAnimation("jump animation.right/sprite_00.png", "jump animation.right/sprite_01.png", "jump animation.right/sprite_02.png",
    "jump animation.right/sprite_03.png", "jump animation.right/sprite_04.png", "jump animation.right/sprite_05.png", "jump animation.right/sprite_06.png",
    "jump animation.right/sprite_07.png", "jump animation.right/sprite_08.png", "jump animation.right/sprite_09.png", "jump animation.right/sprite_10.png",
    "jump animation.right/sprite_11.png", "jump animation.right/sprite_12.png", "jump animation.right/sprite_13.png", "jump animation.right/sprite_14.png",
    "jump animation.right/sprite_15.png", "jump animation.right/sprite_16.png", "jump animation.right/sprite_17.png", "jump animation.right/sprite_18.png",
    "jump animation.right/sprite_19.png", "jump animation.right/sprite_20.png", "jump animation.right/sprite_21.png", "jump animation.right/sprite_22.png",)


  bird1 = loadAnimation("Bird/bird0.png", "Bird/bird1.png", "Bird/bird2.png",
    "Bird/bird3.png", "Bird/bird4.png", "Bird/bird5.png",)


  bird2 = loadAnimation("Bird.H/bird.H0.png", "Bird.H/bird.H1.png",
    "Bird.H/bird.H2.png", "Bird.H/bird.H3.png", "Bird.H/bird.H4.png", "Bird.H/bird.H5.png",)

  bomb = loadAnimation("Bomb/bomb0.png", "Bomb/bomb1.png", "Bomb/bomb2.png", "Bomb/bomb3.png",
    "Bomb/bomb4.png", "Bomb/bomb5.png", "Bomb/bomb6.png", "Bomb/bomb7.png", "Bomb/bomb8.png",)

  bomb2 = loadAnimation("Bomb.H/bomb.H0.png", "Bomb.H/bomb.H1.png", "Bomb.H/bomb.H2.png", "Bomb.H/bomb.H3.png",
    "Bomb.H/bomb.H4.png", "Bomb.H/bomb.H5.png", "Bomb.H/bomb.H6.png", "Bomb.H/bomb.H7.png", "Bomb.H/bomb.H8.png",)

  missle = loadAnimation("Missle/missle0.png", "Missle/missle1.png", "Missle/missle2.png", "Missle/missle3.png",
    "Missle/missle4.png", "Missle/missle5.png", "Missle/missle6.png", "Missle/missle7.png",)

  missle2 = loadAnimation("Missle.H/missle.H0.png", "Missle.H/missle.H1.png", "Missle.H/missle.H2.png", "Missle.H/missle.H3.png",
    "Missle.H/missle.H4.png", "Missle.H/missle.H5.png", "Missle.H/missle.H6.png", "Missle.H/missle.H7.png",)

  tire = loadAnimation("tire/tire0.png", "tire/tire1.png", "tire/tire2.png", "tire/tire3.png",
    "tire/tire4.png", "tire/tire5.png", "tire/tire6.png",)

  truck = loadAnimation("truck/Truck0.png", "truck/Truck1.png", "truck/Truck2.png",)

  trex_damaged = loadAnimation("Damaged/sprite_0.png", "Damaged/sprite_1.png", "Damaged/sprite_2.png",
    "Damaged/sprite_3.png", "Damaged/sprite_4.png", "Damaged/sprite_5.png", "Damaged/sprite_6.png", "Damaged/sprite_7.png",)

  GameOverIMG = loadAnimation("Game Over/sprite_00.png", "Game Over/sprite_01.png", "Game Over/sprite_02.png", "Game Over/sprite_03.png", "Game Over/sprite_04.png",
    "Game Over/sprite_05.png", "Game Over/sprite_06.png", "Game Over/sprite_07.png", "Game Over/sprite_08.png", "Game Over/sprite_09.png", "Game Over/sprite_10.png",
    "Game Over/sprite_11.png", "Game Over/sprite_12.png", "Game Over/sprite_13.png", "Game Over/sprite_14.png", "Game Over/sprite_15.png", "Game Over/sprite_16.png",
    "Game Over/sprite_17.png", "Game Over/sprite_18.png", "Game Over/sprite_19.png", "Game Over/sprite_20.png", "Game Over/sprite_21.png", "Game Over/sprite_22.png",
    "Game Over/sprite_23.png", "Game Over/sprite_24.png", "Game Over/sprite_25.png", "Game Over/sprite_26.png", "Game Over/sprite_27.png", "Game Over/sprite_28.png",
    "Game Over/sprite_29.png",)

  RestartIMG = loadImage("New Piskel-1.png (1) - Copy.png")

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  ground = createSprite(0, 200000, 600, 5)
  ground.addAnimation("ground", groundIMG)
  ground.velocityX = -5
  trex = createSprite(windowWidth/5, windowHeight-95, 0, 50)
  truck1 = createSprite(windowWidth-75, windowHeight-50, 55, 55)
  truck1.addAnimation("truck", truck)
  truck1.scale = 2
  trex.setCollider("circle", 0, 0, 25)
  GameOver = createSprite(windowWidth-350, windowHeight-350)
  Restart = createSprite(windowWidth-350, windowHeight-350)
  GameOver.addAnimation("gameover", GameOverIMG)
  Restart.addAnimation("restart", RestartIMG)
  GameOver.visible = false
  Restart.visible = false
  GameOver.scale=2
  Restart.scale=1.5
  trex.addAnimation("damaged", trex_damaged)

  trex.addAnimation("run", trex_run)
  trex.addAnimation("jump", trex_jump)
  ground.width = ground.width + 0
  edges = createEdgeSprites()
  ground.scale = 0.15
  cloudsGroup = new Group()
  dropGroup = new Group()
  obstacleGroup = new Group()
}
var array=[ [0,1], [2,3] ]
array.push([4,5])
console.log(array)
array.pop()
function draw() {

  background(backgroundIMG)
  text("Score:" + score, windowWidth/2, (windowHeight/2)-200)
  if (GAMESTATE == PLAY) {
    if (keyDown("SPACE") && trex.y >= (windowHeight-30)) {
      trex.velocityY = -8.5
      trex.changeAnimation("jump")
      trex.changeAnimation("run")
      trex.changeAnimation("jump")
      trex.scale = 0.06
    }
    if (obstacleGroup.isTouching(trex)) {
      GAMESTATE = END
    }


    trex.velocityY += 0.5
    trex.collide(edges[3])
    ground.velocityX = ground.velocityX - 0.000000000000000000005
    if (ground.x < 0) {
      ground.x = 400
score += Math.round(getFrameRate() /6)
    }
  }
  if (GAMESTATE == END) {
    trex.velocityX = 0
    trex.changeAnimation("damaged", trex_damaged)
    cloudsGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
    cloudsGroup.setLifetimeEach(-1)
    trex.velocityY = 5
    trex.collide(edges[3])
    GameOver.visible=true
    Restart.visible=true
    GameOver.depth = cloud.depth
    GameOver.depth+=1
    Restart.depth = cloud.depth
    Restart.depth+=1
if(mousePressedOver(Restart)){
  reset()
}

  }



  drawSprites()
  spawnclouds()
  spawnclouds2()
  spawnobstacles()
  spawnobstaclesH()
  if (trex.y >= 170) {

    trex.scale = 1
    trex.changeAnimation("run")


  }

}

function spawnclouds() {
  if (frameCount % 35 === 0) {
    j = Math.round(random(windowHeight-250, windowHeight-350))
    cloud = createSprite(windowWidth+500, j, 75, 40)
    cloud.addImage(cloudIMG)
    cloud.scale = 0.4
    cloud.velocityX = -4
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
    cloudsGroup.add(cloud)
  }

}
function spawnclouds2() {
  if (frameCount % 34 === 0) {
    j = Math.round(random(windowHeight-250, windowHeight-350))
    cloud = createSprite(windowWidth+500, j, 75, 40)
    cloud.addImage(cloudIMG)
    cloud.scale = 0.4
    cloud.velocityX = -4
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
    cloudsGroup.add(cloud)
  }

}


function spawnobstacles() {
  if (frameCount % 48 === 0) {
    var obstacle = createSprite(windowWidth+100, windowHeight-32, 50, 80)
    obstacle.velocityX = -5.8
    obstacle.setCollider("circle", 0, 0, 20)

    var c = Math.round(random(1, 6))
    switch (c) {
      case 1:
        obstacle.addAnimation("bird", bird1)
        break;
      case 2:
        obstacle.addAnimation("bomb", bomb)
        break;
      case 3:
        obstacle.addAnimation("tire", tire)
        break;
      case 4:
        obstacle.addAnimation("missle", missle)
        break;
      case 5:
        obstacle.remove()
        break;
      case 6:
        obstacle.remove()
        break;
      default:
        break;
    }


    obstacle.lifetime = 500
    obstacleGroup.add(obstacle)
  }
}

function spawnobstaclesH() {
  if (frameCount % 75 === 0) {
    var obstacleH = createSprite(windowWidth+100, windowHeight-132, 50, 80)
    obstacleH.velocityX = -7.3
    obstacleH.setCollider("circle", 0, 0, 25)
    var h = Math.round(random(1, 5))
    switch (h) {
      case 1:
        obstacleH.addAnimation("bird2", bird2)
        break;
      case 2:
        obstacleH.addAnimation("bomb2", bomb2)
        break;
      case 3:
        obstacleH.addAnimation("missle2", missle2)
        break;
      case 4:
        obstacleH.remove()
        break;
      case 5:
        obstacleH.remove()
        break;
      default:
        break;
    }

    obstacleH.lifetime = 500
    obstacleGroup.add(obstacleH)
  }
}

function reset(){
  GAMESTATE = PLAY
  GameOver.visible=false
  Restart.visible=false
  score = 0
  obstacleGroup.destroyEach()
  cloudsGroup.destroyEach()
  trex.changeAnimation("run")
}
