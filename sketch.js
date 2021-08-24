//engine properties ko continue karne ke liye use karte
const Engine = Matter.Engine;
//virtual world banane ke liye jismai hum bodies add karenge
const World = Matter.World;
//body banane ke liye use karte
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
function setup() {
    createCanvas(400,400);
  
    engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution: 0.95,
    friction:0.01
  }

  var ground_options={
    isStatic: true
  }

  ball=Bodies.circle(100,10,20,ball_options)
  World.add(world,ball);

  ground=Bodies.rectangle(0,380,400,15,ground_options)
  World.add(world,ground)

}

function draw() 
{//ball.position- (x,y)
  background(0)
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,400,15)
}

