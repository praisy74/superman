const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxes = [];
var boxes1 = [];
var boxes2 = [];
var boxes3 = [];
var boxes4 = [];
var box1,box2,box3,box4,box5,box6
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 1000);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1500, 20);
  hero = new Hero(400,500,250);
  rope = new Rope(hero.body, { x: 500, y: 30 });
  monster = new Monster(1300,350,300);

   box1 = new Box(695, 340, 70, 300);
    box2 = new Box(695, 180, 100, 30);
   box3 = new Box(976, 340, 70, 300);
    box4 = new Box(976, 180, 100, 30);
    box5 = new Box(840, 130, 450, 70);
    //box6 = new Box(690, -10, , 35);
   /*box7 = new Box(600, 100, 60, 35);
    box8 = new Box(660, 100, 60, 35);
    box9 = new Box(720, 100, 60, 35);
    box10 = new Box(780, 100, 60, 35);
    box11 = new Box(840, 100, 60, 35);
    box12 = new Box(900, 100, 60, 35);
    //box13 = new Box(700, 100, 70, 70);
    //box14 = new Box(700, 100, 70, 70);*/
 

 for (var j = 600; j <=1100; j=j+60) 
  {
    boxes.push(new Box(j,585,60,30));
  }
  for (var a = 630; a <=1070; a=a+60) 
  {
    boxes1.push(new Box(a,555,60,30));
  }
 for (var c = 660; c <=1020; c=c+60) 
  {
    boxes2.push(new Box(c,525,60,30));
  }
  for (var e = 690; e <=1020; e=e+60) 
  {
    boxes3.push(new Box(e,495,60,30));
  }
}


function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
   box1.display();
  box2.display();
box3.display();
  box4.display();
  box5.display()
 // box6.display()
 /*box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()*/

  hero.display();
  rope.display();
  monster.display();
  for (var k = 0; k < boxes.length; k++) {
    boxes[k].display();
  }
  for (var b = 0; b < boxes1.length; b++) {
    boxes1[b].display();
  }
  for (var d = 0; d < boxes2.length; d++) 
  {
    boxes2[d].display();
  }
  for (var f = 0; f < boxes3.length; f++) 
  {
    boxes3[f].display();
  }
  

 
 console.log(mouseX,mouseY)

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope.fly();
}