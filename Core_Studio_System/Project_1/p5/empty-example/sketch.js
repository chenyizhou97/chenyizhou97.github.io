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


function preload() {
  s = loadImage("assets/school.png")
  h = loadImage("assets/home.png")
  me = loadImage("assets/me.png")
}


function setup() {
  createCanvas(1300, 700);
  g = 255;
  i = createSprite(mouseX,288,85,212);
  i.addImage(me);
  home = createSprite(100,234,349,266);
  home.addImage(h);
  school = createSprite(864,161,336,339);
  school.addImage(s);

}


function draw() {
 if(!gspeed){
  g--;
 }

if(gspeed){
  g++;
}


background(r, g, b);


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