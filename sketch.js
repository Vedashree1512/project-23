var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	boxR = createSprite(340,600,10,100);
	boxL = createSprite(460,600,10,100);
	boxB = createSprite(410,640,120,10);
	box1 = new Box(340,600,10,100);
	
	box2 = new Box(460,600,10,100);
    
	box3 = new Box(400,640,120,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  fill("green");
  rect(ground.position.x,ground.position.y,800,10);
  box1.display();
  box2.display();
  box3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	console.log("downArrowPressed");
	Matter.Body.setStatic(packageBody,false);
    

    
  }
}



