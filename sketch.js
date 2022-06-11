var trex, trex_running;
var ground, invisibleGround, groundImage;
var numeroAleatorio;
var nuvemImage

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  nuvemImage = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  numeroAleatorio =Math.round( random(1,100));

  //criar um sprite trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
    
  //criar um sprite ground (chão)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  //criar um sprite de chão invisível (chão)
  invisibleGround = createSprite(200,200,400,20);
  invisibleGround.visible = false;
}

function draw() {
  background("white");

  
  //pular quando a barra de espaço for pressionada
  // collide
  // posição
  // && trex.y > 166
  // duas condições no mesmo if - && - e / || - ou

  if (keyDown("space") && trex.collide(invisibleGround)) {
    trex.velocityY = -13;
  }

  trex.velocityY = trex.velocityY + 0.8
  //reseta o solo
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisibleGround);
  criarNuvens();
  drawSprites();
}
function criarNuvens(){
  if(frameCount%60 == 0){
    var nuvem = createSprite(600,100,40,10);
    nuvem.addImage("nuvem" , nuvemImage);
    nuvem.scale = 0.1;
    nuvem.velocityX = -3;
    nuvem.y = Math.round(  random(30,80));
    nuvem.depth = trex.depth;
    trex.depth = trex.depth + 1 ;
    
  }
}