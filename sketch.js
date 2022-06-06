var bg_img, ethan_img, s1_img, s2_img, s3_img, s4_img, s5_img, s6_img, s7_img, s8_img, s9_img, s10_img;
var ethan;
var solo;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
function preload()
{
  bg_img = loadImage('background.jpg');
  ethan_img = loadImage( 'ethan.gif');
  s1_img = loadImage('sordado.gif');
  s2_img = loadImage('sordado.gif');
  s3_img = loadImage('sordado.gif');
  s4_img = loadImage('sordado.gif');
  s5_img = loadImage('sordado.gif');
  s6_img = loadImage('sordado.gif');
  s7_img = loadImage('sordado.gif');
  s8_img = loadImage('sordado.gif');
  s9_img = loadImage('sordado.gif');
  s10_img = loadImage('sordado.gif');
}

function setup() 
{
  createCanvas(3000, windowHeight);
 ethan = createSprite(100, height-150);
  ethan.addImage(ethan_img);
 

 ethan.scale = 0.5;
  solo = createSprite(width/2, height -24, width, 20);
  s1 = createSprite(2300, height-150);
  s1.addImage("s1",s1_img);
  s1.scale = 0.5;

  s2 = createSprite(2300, height-150);
  s2.addImage("s2",s2_img);
  s2.scale = 0.5;

  s3 = createSprite(2300, height-150);
  s3.addImage("s3",s3_img);
  s3.scale = 0.5;

  s4 = createSprite(2300, height-150);
  s4 = addImage("s4",s4_img);
  s4.scale = 0.5;

  s5 = createSprite(2300, height-150);
  s5.addImage("s5",s5_img);
  s5.scale = 0.5;

  s6 = createSprite(2300, height-150);
  s6.addImage("s6",s6_img);
  s6.scale = 0.5;

  s7 = createSprite(2300, height-150);
  s7.addImage("s7",s7_img);
  s7.scale = 0.5;

  s8 = createSprite(2300, height-150);
  s8.addImage("s8",s8_img);
  s8.scale = 0.5;

  s9 = createSprite(2300, height-150);
  s9.addImage("s9",s9_img);
  s9.scale = 0.5;

  s10 = createSprite(2300, height-150);
  s10.addImage("s10",s10_img);
  s10.scale = 0.5;

s1.velocityX = -0.1;
s2.velocityX = -0.5;
s3.velocityX = 0.05;
s4.velocityX = -0.025;
s5.velocityX = -0.09;
s6.velocityX = -0.07;
s7.velocityX = 0.02;
s8.velocityX = 0.03;
s9.velocityX = -0.05;
s10.velocityX = 0.08;
}

function draw() 
{
  background(bg_img);

if (keyDown("space")&& ethan.y >= 700)
{
    ethan.velocityY = -12;
}
ethan.velocityY += 0.5;
ethan.collide(solo);
console.log(ethan.y)
 if (keyDown("A"))
 {
  ethan.x -= 10;
 }
  if (keyDown("D"))
  {
   ethan.x += 10;
 }
  drawSprites();

}