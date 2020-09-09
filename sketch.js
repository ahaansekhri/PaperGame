
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,binL,binM,binR;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,450,10);
	ground = new Ground(620,650,1200,20);
	binL = new Bin(1000,605,10,70);
	binR = new Bin(1100,605,10,70);
	binM = new Bin(1050,635,88,10);

	Engine.run(engine);
}


function draw() {
  background(255);

  paper1.display();
  ground.display();
  binL.display();
  binR.display();
  binM.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-20});


	}


}


