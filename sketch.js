const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;
var fruitTree , fruitTree2 , fruitTree3;
var groundImg;
var carrier;
var fruitImage; 
var score=0;

function preload(){

backgroundImage = loadImage("sprites/bg.png");
getTime();
}

function setup() {
  createCanvas(1300, 600);

  engine = Engine.create();
    world = engine.world;

    fruitTree= new tree(650,580);
    fruitTree2= new tree(200,580);
    fruitTree3= new tree(1000,580);
    groundImg = new ground(650,590,1300,20);
    carrier= new box(400,300);
  carrier.debug = true;

    fruitImage= new fruit(650,300);
    fruitImage.debug = true;

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImage);  

  Engine.update(engine);
  fill("red");
textSize(40);
    text("score="+score,350,100);
    if(isTouching(carrier,fruitImage)){
    
      score=score+1;
    }

   fruitTree.display();
   fruitTree2.display();
   fruitTree3.display();
   groundImg.display();
   carrier.display();
   fruitImage.display();

  // if(isTouching(carrier,fruitImage)){
    
    //score=score+1;
  //}
 // drawSprites();
}

async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  
  var responseJson =  await response.json();
  
  console.log(responseJson);
  console.log(responseJson.datetime);
  
  var dateTime =  responseJson.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);
  
  if(hour>=6 && hour<=19){
   bg= "sprites/bg.png";
  }
  else{
  
      bg= "sprites/bg2.jpg";
  }
  
  backgroundImage=loadImage(bg);
  
  }
       



  