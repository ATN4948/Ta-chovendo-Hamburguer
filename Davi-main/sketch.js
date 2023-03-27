var SuperJorel;
var Edges;
var Ramp1;
var Ramp2;
var Ramp3;
var Ramp4;
var Ramp5;
var Ramp6;
var Ramp7;
var RampGroup;
var bloquinhoGroup;
var gameState = 'start';
var barilpng;
var andandoporai

function preload() {
barilpng = loadImage("Baril.png")
andandoporai = loadAnimation("andando1.png", "andando2.png", "andando3.png", "andando4.png", "andando5.png", "andando6.png");
}

function setup() {
  createCanvas(1900, 950);
  createRamp();
  SuperJorel = createSprite(910, 770, 50, 50);
  SuperJorel.addAnimation("andando", andandoporai)
  Edges = createEdgeSprites();
  bloquinhoGroup = new Group();


}

function draw() {
  background("black");

  if (gameState === 'start') {
    //camera.x = SuperJorel.x;
    //dcamera.y = SuperJorel.y;

    SuperJorel.collide(Edges)
    drawSprites();
    controlJorel();
    SuperJorel.collide(RampGroup);

    if (SuperJorel.isTouching(RampGroup)) {
      SuperJorel.setVelocity(0, 0);
    }

    tachovendohamburger();
    bloquinhoGroup.collide(RampGroup);

    SuperJorel.velocityY = SuperJorel.velocityY + 1.3;
    

    if (SuperJorel.velocity.x > 10) {
      SuperJorel.velocityX = 0;
    }

    if (SuperJorel.x > 1020 && SuperJorel.y < 100) {
      gameState = 'win';
    }

    if (SuperJorel.collide(bloquinhoGroup)) {
      gameState = 'end';
    }

  } else if (gameState === 'win') {
    win();
  } else if (gameState === 'end') {
    gameOver();
  }


}

function controlJorel() {
  if (keyIsDown(65)) {
    SuperJorel.x -= 15;
  }

  if (keyIsDown(68)) {
    SuperJorel.x += 15;
  }

  if (keyIsDown(32)) {
    SuperJorel.y -= 26;
  }
  // console.log(SuperJorel.y)
  // console.log(SuperJorel.x)

}


function createRamp() {
  Ramp1 = createSprite(400, 209, 340, 10);
  Ramp1.shapeColor = "red";
  Ramp1.rotation = 185;
  Ramp2 = createSprite(797, 244, 500, 10);
  Ramp2.shapeColor = "red";
  Ramp2.rotation = 185;
  Ramp3 = createSprite(1100, 439, 390, 10);
  Ramp3.shapeColor = "red";
  Ramp3.rotation = 175;
  Ramp4 = createSprite(1540, 400, 500, 10);
  Ramp4.shapeColor = "red";
  Ramp4.rotation = 175;
  Ramp5 = createSprite(510, 600, 900, 10);
  Ramp5.shapeColor = "red";
  Ramp5.rotation = 185;
  Ramp6 = createSprite(910, 800, 900, 10);
  Ramp6.shapeColor = "red";
  Ramp6.rotation = 180;
  Ramp7 = createSprite(1350, 130, 900, 10);
  Ramp7.shapeColor = "red";
  Ramp7.rotation = 180;
  RampGroup = new Group();
  RampGroup.add(Ramp1);
  RampGroup.add(Ramp2);
  RampGroup.add(Ramp3);
  RampGroup.add(Ramp4);
  RampGroup.add(Ramp5);
  RampGroup.add(Ramp6);
  RampGroup.add(Ramp7);
}

function tachovendohamburger() {
  if (frameCount % 90 === 0) {
    var bloquinho = createSprite(Math.round(random(100, 350)), 20, 50, 50);
    bloquinho.addImage(barilpng)
    bloquinhoGroup.add(bloquinho);
    bloquinhoGroup.setVelocityEach(0, 30);
    
  }
}

function win() {
  textSize(50);
  text("Parabens! Você ganhou!", width / 2 - 500, height / 2);

}

function gameOver() {
  textSize(50);
  text("Você perdeu! Tente novamente.", width / 2 - 500, height / 2);
}

