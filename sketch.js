const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ball;
var ground;

function setup() {
  createCanvas(800,400);
  myEngine = Engine.create()
  myWorld = myEngine.world
  var bounce = {
  restitution:1.0
  }
  ball = Bodies.circle(200,100,30,bounce);
  World.add(myWorld, ball);

  var floor = {
  isStatic: true
  }
  ground = Bodies.rectangle(200,400,70,10,floor);
  World.add(myWorld, ground);
}

function draw() {
  background(0); 
  Engine.update(myEngine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20) 
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 700,20);
}