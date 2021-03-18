const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1;
var circle1;
var circle2;
var circle3;
var ball1;
var box1;
var engine, world;
var backgroundimg;
var ground2;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14;
var block15;
var box2;
var box3;

function preload(){
    backgroundimg=loadImage("cityskyline.png")
}
function setup(){
 var canvas = createCanvas(800,700);
 engine = Engine.create();
 world = engine.world;
 ball1= new Ball(20,580,45)
 ground1=new Ground(600,height,1200,20)
 circle1= new Obstacle(590,250,50)
 circle2= new Obstacle(360,500,40)
 circle3= new Obstacle(160,250,50)
 box1= new Box(730,600,10,100)
 ground2= new Ground1(360,460,170,10)
 
 block1=new Blocks(290,442,25,25)
 block2=new Blocks(323,442,25,25)
 block3=new Blocks(356,442,25,25)
 block4=new Blocks(389,442,25,25)
 block5=new Blocks(422,442,25,25)

 block6=new Blocks(306,416,25,25)
 block7=new Blocks(340,416,25,25)
 block8=new Blocks(374,416,25,25)
 block9=new Blocks(408,416,25,25)
 
 block10=new Blocks(322,390,25,25)
 block11=new Blocks(357,390,25,25)
 block12=new Blocks(392,390,25,25)
 
 block13=new Blocks(339,364,25,25)
 block14=new Blocks(375,364,25,25)

 block15=new Blocks(356,338,25,25)
box2=new Box(450,600,10,100)
box3=new Box(590,650,300,10)
 
 

}

function draw(){
    background(backgroundimg);
   
    ground1.display();
    circle1.display(); 
    circle2.display();
    circle3.display();
    ball1.display() ;
    box1.display();
    ground2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    box2.display()
    box3.display()

   fill("yellow")
   textSize(30)
   
   text("PRESS UP ARROW KEY FOR LAUNCHING THE BALL ",20,100)


    Engine.update(engine);
     
    
}
function keyPressed(){
    if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:550,y:-590})
    }
  }
