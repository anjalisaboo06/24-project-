
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, bodies;
var ball, ground;
var binL, binR, binB;




function setup() {

	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 

console.log(world);
	Engine.run(engine);
  binL = new Dustbin(1100, 280, 10, 100);
  binR = new Dustbin(950, 280, 10, 100);
  ground = new Ground(600, 340, width, 20);

  binB = new Dustbin(1030, 330, 150, 10);
  ball = new Paper(500, 280, 5);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
   binL.display();
   binR.display();
   ground.display();
   binB.display();
  ball.display();
  keyPressed();
  drawSprites();
 
  
}

function keyPressed(){
if (keyCode=== UP_ARROW){
matter.body.applyForce(ball.body, ball.body, {x:85, y:-85});

}


}

