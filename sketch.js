const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, rope, rope2, rope3, rope4, rope5;
var bobDiameter;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  bobDiameter = 40;

  roof = new Roof(400, 200, 250, 20);
  bobObject1 = new Bob(300, 400, bobDiameter);
  bobObject2 = new Bob(350, 400, bobDiameter);
  bobObject3 = new Bob(400, 400, bobDiameter);
  bobObject4 = new Bob(450, 400, bobDiameter);
  bobObject5 = new Bob(500, 400, bobDiameter);

  rope = new Rope(bobObject1.body, roof.body, -bobDiameter * 2.5, 0);
  rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter * 1.3, 0);
  rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter * 0.1, 0);
  rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter * -1.2, 0);
  rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter * -2.4, 0);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
  Force();
}

function Force() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {
      x: -1000,
      y: -45,
    });
  }
}
