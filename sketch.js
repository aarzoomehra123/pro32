const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygonImage,polygon;
var ground,base1,base2 ;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,
box19,box20,box21,box22,box23,box24,box25;
var launch;
var backgroundImg;

var score = 0;
var bg = "bg.png";

function preload(){
  polygonImage = loadImage("polygon.png");
   getBackgroundImg();

}

function setup(){
	createCanvas(900,400);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 650, 850, 350);
    base1 = new Ground(390,300,250,10);
    base2 = new Ground(700,200,200,10);

 box1 = new Blocks(300,275,30,40);
  box2  = new Blocks(330,275,30,40);
  box3 = new Blocks(360,  275,30,40);
  box4= new Blocks(390, 275,30,40);
  box5 = new Blocks(420, 275,30,40);
  box6 = new Blocks(450, 275,30,40);
  box7= new Blocks(480, 275,30,40);
  box8 = new Blocks(330, 235,30,40)
  box9 = new Blocks(360, 235,30,40);
  box10= new Blocks(390, 235,30,40);
  box11 = new Blocks(420, 235,30,40);
  box12 = new Blocks(450, 235,30,40);
  box13 = new Blocks(360, 195,30,40);
  box14 = new Blocks(390, 195,30,40);
  box15 = new Blocks(420, 195,30,40);
  box16 = new Blocks(390, 155,30,40);

  box17 = new Blocks(640, 175,30,40);
  box18 = new Blocks(670, 175,30,40);
  box19 = new Blocks(700, 175,30,40);
  box20 = new Blocks(730, 175,30,40);
  box21 = new Blocks(760, 175,30,40);
  box22 = new Blocks(670,135,30,40);
  box23 = new Blocks(700,135,30,40);
  box24 = new Blocks(730,135,30,40);
  box25 = new Blocks(700,95,30,40);

ball = Bodies.circle(50,200,20);
World.add(world,ball)

	launch = new launcher(this.ball,{x:100,y:200})

	Engine.run(engine);
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
  
  textSize(25);
  noStroke()
  fill("red")
  text("Press Space to get a second Chance to Play!!",50 ,50);

  imageMode(CENTER)
  image(polygonImage ,ball.position.x,ball.position.y,40,40);

  noStroke()
  textSize(35)
  fill("violet")
  text("score " + score,width-300,50 )
  
  ground.display();
  base1.display();
  base2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  box25.display();
  box25.score();
  

  launch.display();

  drawSprites()
}

function mouseDragged()
{
	Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launch.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(this.ball, {x:55, y:445}) 
	  launch.attach(this.ball);
	}
}
 
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "bg.png";
  }
  else{
      bg = "bg2.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
 





