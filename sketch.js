const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow;
 var bac;
 var engine, world;

 function preload(){
   bac=loadImage("snow2.jpg");
   snow=loadImage("snow4.webp");

 }
 function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  snow1=new Snow(120,30);
  snow2=new Snow(220,30);
  snow3=new Snow(320,30);
  snow4=new Snow(420,30);
  snow5=new Snow(520,30);

}

function draw() {
  background(bac);  
  Engine.update(engine);
  snow1.display();
  snow1.update();
  snow2.display();
  snow2.update();
  snow3.display();
  snow3.update();
  snow4.display();
  snow4.update();
  snow5.display();
  snow5.update();
  
  drawSprites();
}