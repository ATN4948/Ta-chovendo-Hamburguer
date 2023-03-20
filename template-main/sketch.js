var SuperJorel
var Edges
var Ramp1
var Ramp2
var Ramp3
var RampGroup
var bloquinhoGroup



function preload(){

}

function setup(){
createCanvas(1900,950)
createRamp() 
SuperJorel = createSprite(910,770,50,50);
Edges = createEdgeSprites()
bloquinhoGroup = new Group()


}

function draw() {
  background("black");
  SuperJorel.collide(Edges)    
  drawSprites();
        controlJorel()
        SuperJorel.collide(RampGroup)

  tachovendohamburger()
  bloquinhoGroup.collide(RampGroup)

  SuperJorel.velocityY = SuperJorel.velocityY + 1.3
}

function controlJorel(){
  if (keyIsDown(65)) {
    SuperJorel.x -= 5;
  }

  if (keyIsDown(68)) {
    SuperJorel.x += 5;
  }

  if (keyIsDown(32)) {
    SuperJorel.y -= 30
  }
}
function createRamp(){
  Ramp1 = createSprite(400,209,340,10)
  Ramp1.shapeColor = "red"
  Ramp1.rotation = 185
  Ramp2 = createSprite(797,244,500,10)
  Ramp2.shapeColor = "red"
  Ramp2.rotation = 185
  Ramp3 = createSprite(1100,439,390,10)
  Ramp3.shapeColor = "red"
  Ramp3.rotation = 175
  Ramp4 = createSprite(1540,400,500,10)
  Ramp4.shapeColor = "red"
  Ramp4.rotation = 175
  Ramp5 = createSprite(510,600,900,10)
  Ramp5.shapeColor = "red"
  Ramp5.rotation = 185
  Ramp6 = createSprite(910,800,900,10)
  Ramp6.shapeColor = "red"
  Ramp6.rotation = 180
  Ramp7 = createSprite(1350,130,900,10)
  Ramp7.shapeColor = "red"
  Ramp7.rotation = 180
 RampGroup = new Group()
 RampGroup.add(Ramp1)
 RampGroup.add(Ramp2)
 RampGroup.add(Ramp3)
 RampGroup.add(Ramp4)
 RampGroup.add(Ramp5)
 RampGroup.add(Ramp6)
 RampGroup.add(Ramp7)
 RampGroup.debug = true


}

function tachovendohamburger() {
  if (frameCount % 90 === 0) {
   var bloquinho = createSprite(Math.round(random(100,350)),20,50,50)
   bloquinhoGroup.add(bloquinho)
   bloquinhoGroup.setVelocityEach(0,30)
  }
}