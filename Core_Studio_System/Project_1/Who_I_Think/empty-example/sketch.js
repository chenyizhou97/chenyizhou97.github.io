var  angel;
var  demon;
var  a;
var  d;
var  desk;
var  bed;
var  Desk;
var  Bed;
var  f1,f2,f3,f4,f5;
var  fr1,fr2,fr3,fr4,fr5;
var  iX;



function preload() {
  a = loadImage("assets/Angel.png")
  d = loadImage("assets/Demon.png")
  desk = loadImage("assets/Desk.png")
  bed = loadImage("assets/Bed.png")
  f1 = loadImage("assets/Friends_1.png")
  f2 = loadImage("assets/Friends_2.png")
  f3 = loadImage("assets/Friends_3.png")
  f4 = loadImage("assets/Friends_4.png")
  f5 = loadImage("assets/Friends_5.png")
}


function setup() {
  createCanvas(1300, 700);
  fr1 = createSprite(900,444,85,212);
  fr1.addImage(f1);
  fr2= createSprite(960,470,85,212);
  fr2.addImage(f2);
    fr3= createSprite(1060,500,85,212);
  fr3.addImage(f3);
    fr4= createSprite(1120,520,85,212);
  fr4.addImage(f4);
    fr5= createSprite(1180,450,85,212);
  fr5.addImage(f5);
  Desk= createSprite(500,420,85,212);
  Desk.addImage(desk);
  Bed= createSprite(130,420,85,212);
  Bed.addImage(bed);

}


function draw() {

iX = mouseX;


background(255);

  angel = createSprite(iX,444,85,212);
  angel.addImage(a);
  demon = createSprite(iX,444,85,212);
  demon.addImage(d);

  fill(0);
  noStroke();
  rect(0,0,650,700);
  fill(150);
  noStroke();
  rect(650,500,650,200);
  fill(255,193,95);
  noStroke();
  rect(0,500,650,200);

  drawSprite(fr5);
  drawSprite(fr4);
  drawSprite(fr3);
  drawSprite(fr2);
  drawSprite(fr1);

  drawSprite(Desk);
  drawSprite(Bed);

  if(iX<650){
  	drawSprite(demon);
  }
  if(iX>=650){
  	drawSprite(angel);
  }

}
