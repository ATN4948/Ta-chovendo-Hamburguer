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
SuperJorel = createSprite(100,200,50,50);
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
}

function controlJorel(){
  if (keyIsDown(87)) {
    SuperJorel.y -= 5;
  }

  if (keyIsDown(65)) {
    SuperJorel.x -= 5;
  }

  if (keyIsDown(68)) {
    SuperJorel.x += 5;
  }

  if (keyIsDown(83)) {
    SuperJorel.y += 5;
  }
}
function createRamp(){
  Ramp1 = createSprite(100,200,150,10)
  Ramp1.shapeColor = "red"
  Ramp1.rotation = 185
  Ramp2 = createSprite(250,214,150,10)
  Ramp2.shapeColor = "red"
  Ramp2.rotation = 185
  Ramp3 = createSprite(400,227,150,10)
  Ramp3.shapeColor = "red"
  Ramp3.rotation = 185
  Ramp4 = createSprite(550,240,150,10)
  Ramp4.shapeColor = "red"
  Ramp4.rotation = 185
 RampGroup = new Group()
 RampGroup.add(Ramp1)
 RampGroup.add(Ramp2)
 RampGroup.add(Ramp3)
 RampGroup.add(Ramp4)
 RampGroup.debug = true
}

function tachovendohamburger() {
  if (frameCount % 90 === 0) {
   var bloquinho = createSprite(Math.round(random(100,350)),20,50,50)
   bloquinhoGroup.add(bloquinho)
   bloquinhoGroup.setVelocityEach(0,30)
  }
}