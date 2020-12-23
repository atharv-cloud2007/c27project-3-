
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
//increasing from left to right 
var ground1,paper1,paper2,paper3,paper4,paper5;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,200,400,30)
	paper1 = new Paper (320,210,40)
	paper2 = new Paper (360,210,40)
	paper3 = new Paper(400,210,40)
	paper4 = new Paper (440,210,40)
	paper5 = new Paper (480,210,40)
	chain1 = new Chain (paper3.body,ground1.body,0,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display()
  paper1.display()
  paper2.display()
  paper3.display()
  paper4.display()
  paper5.display()
  chain1.display()
 
}



