
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground,ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    ground = new Ground(600,height,1200,20)
	ball=new Ball (15,5,10,10)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box2 = new rect(500,650,20,100,"red");
	box3 = new rect(295,650,20,100,"red");
	box1 = new rect(400,690,200,20,"red");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
ball.display()
box1.display()
box2.display()
box3.display()
keypressed()
}
function keypressed(){
	if(keyCode===Up_Arrow){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85})
	}
}


