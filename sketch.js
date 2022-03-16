var engine
var world
var ground;
var earthimg;
var spaceimg;
var sunimg;
var hanumanjiimg;
var hero;
var sun;
var bar, bargroup;
var paddle, paddlegroup






function preload() {
  earthimg = loadImage("/assets/background1.jpg");
  spaceimg = loadImage("/assets/SPACE1.jpg")
  hanumanjiimg = loadImage("/assets/hanumanji2.png");
  sunimg = loadImage("/assets/SUNPICK1.jpg");


}

function setup() {
  createCanvas(1200, 600);


  ground = createSprite(750, 580, 1500, 50)


  hero = createSprite(300, 450, 30, 20,);
  hero.addImage(hanumanjiimg)
  hero.scale = 0.3;
  hero.debug=true;
  hero.setCollider("rectangle",0,0,90,350)

  sun = createSprite(1150, 50, 30, 20,);
  sun.addImage(sunimg)
  sun.scale = 0.15;
  sun.debug=true;
  sun.setCollider("circle",0,0,700)

  //World.add(world,hero);
  paddlegroup = new Group();
  bargroup = new Group();



}

function draw() {

  background(earthimg);

  hero.velocityY += 0.9;
  hero.collide(ground)


  if (keyDown("SPACE") && hero.y > 0) {
    hero.velocityY = -5
  }

  if (keyDown("DOWN_ARROW") && hero.y < 500) {
    hero.y += 2
  }
  if (keyDown("RIGHT_ARROW") && hero.x < 1150) {
    hero.x += 2
  }

  if (keyDown("LEFT_ARROW") && hero.x > 0) {
    hero.x -= 2
  }
  spawn_paddel()

  hero.bounceOff(bargroup);

  if(paddlegroup.isTouching(hero)){
   hero.velocityX=0;
   hero.velocityY=0;
   // hero.collide(paddlegroup);

  }


  if(hero.isTouching(sun)){
    background(spaceimg);

  }
  drawSprites()
}

function spawn_paddel() {
  if (frameCount % 100 === 0) {
    paddle = createSprite(0, 100, 50, 10)
    paddle.y = Math.round(random(100, 400));
    paddle.velocityX = +2;
    paddle.lifetime = 900;
    paddlegroup.add(paddle)
   // paddle.debug=false;


    bar = createSprite(0, 100, 70, 10)
    bar.y = paddle.y + 5;
    bar.velocityX = +2;
    bar.lifetime = 900;
    bar.visible = true;
    bar.debug = true
    bargroup.add(bar);

  }

} 