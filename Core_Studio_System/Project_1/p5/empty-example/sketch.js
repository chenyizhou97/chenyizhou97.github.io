var  s;
var  h;
var  me;
var  school;
var  home;
var  i;
var  r = 9;
var  b = 255;
var g;
var gspeed = false;
var iX;

function preload() {
  s = loadImage("assets/school.png")
  h = loadImage("assets/home.png")
  me = loadImage("assets/me.png")
}


function setup() {
  createCanvas(1300, 700);
  g = 255;
  home = createSprite(274.5,367,349,266);
  home.addImage(h);
  school = createSprite(1032,300.5,336,339);
  school.addImage(s);

}


function draw() {

iX = mouseX;

 if(!gspeed){
  g--;
 }

if(gspeed){
  g++;
}


background(r, g, b);

  i = createSprite(iX,394,85,212);
  i.addImage(me);


  fill(150);
  noStroke();
  rect(0,500,1300,200);

  drawSprite(school);
  drawSprite(home);
  drawSprite(i);

}

function mouseClicked(){
   if(!gspeed){
    gspeed = true;
 }
   else if(gspeed){
    gspeed = false;
   }
}