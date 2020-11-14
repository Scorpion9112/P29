const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState="Stay"
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  ground1= new Ground(300,285,250,10)
  fill("lightBlue")
  box1= new Box(215,275,30,40)
  box2= new Box(240,275,30,40)
  box3= new Box(270,275,30,40)
  box4= new Box(300,275,30,40)
  box5= new Box(330,275,30,40)
  box6= new Box(360,275,30,40)
  box7= new Box(385,275,30,40)
  fill("pink")
  box8= new Box(240,230,30,40)
  box9= new Box(270,230,30,40)
  box10= new Box(300,230,30,40)
  box11= new Box(330,230,30,40)
  box12= new Box(360,230,30,40)
  fill("green")
  box13= new Box(270,195,30,40)
  box14= new Box(300,195,30,40)
  box15= new Box(330,195,30,40)
  fill("grey")
  box16= new Box(300,155,30,40)
  ground2=new Ground(600,165,200,10)
  box17= new Box(545,155,30,40)
  box18= new Box(570,155,30,40)
  box19= new Box(600,155,30,40)
  box20= new Box(630,155,30,40)
  box21= new Box(655,155,30,40)
  box22= new Box(570,115,30,40)
  box23= new Box(600,115,30,40)
  box24= new Box(630,115,30,40)
  box25= new Box(600,75,30,40)
  p1=new Poly(100,200)
  rope=new SlingShot(p1.body,{x:100,y:200})
  
}

function draw(){
  background(0);  
  drawSprites();
  Engine.update(engine);
  fill("lightBlue")
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  fill("pink")
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  fill("lightGreen")
  box13.display()
  box14.display()
  box15.display()
  fill("grey")
  box16.display()
  ground1.display()
  ground2.display()
  fill("lightBlue")
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  fill("lightGreen")
  box22.display()
  box23.display()
  box24.display()
  fill("pink")
  box25.display()
  p1.display()
  rope.display()
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(p1.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  rope.fly();
  gameState = "launched";
}