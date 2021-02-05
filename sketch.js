
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	box3 =new Box(1100,755,408,100);
	ground =new Ground(20,30,1000,10);
     ball1=new ball(800,700,30,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  
  box3.display()
  ground.display()
 ball1.display
}
function keyPressed(){
   if(keyCode=== UP_ARROW){
	   Matter.Body.applyForce(ball1.body,ball1.position,{x:85,y:-85});
   }
}



