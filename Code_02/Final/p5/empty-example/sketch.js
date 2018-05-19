var Jim;
var Jim_game;
var animWalk;
var animStand, animStand2;
var gameEnd = false;
var Z_sign;
var Z_anim;
var ground;
var g;
var mouse_moved = false;
var touch_started = false;
var bed;
var be;
var desk;
var d;
var bookshelf;
var bo;
var arrow_anim;
var arrow_sign;
var mouseIspressed= false;
var up = false;
var down = false;
var right = false;
var left = false;
var button1;
var button2;
var button3;

var animSidewalk;
var animUpwalk;
var animDownwalk;
var img_id;
var score;
var idea1,
    idea2,
    idea3,
    idea4,
    idea5,
    idea6,
    idea7,
    idea8,
    idea9,
    idea10;

var gameEnd= false;

var overlap1 = false;
var overlap2 = false;
var overlap3 = false;
var overlap4 = false;
var overlap5 = false;
var overlap6 = false;
var overlap7 = false;
var overlap8 = false;
var overlap9 = false;
var overlap10 = false;

var Z_frame = [
  {"name":"Z_frame01", "frame":{"x":600, "y": 200, "width": 120, "height": 150}},
  {"name":"Z_frame02", "frame":{"x":630, "y": 170, "width": 120, "height": 150}},
  {"name":"Z_frame03", "frame":{"x":660, "y": 140, "width": 120, "height": 150}},
];

var arrow_frame = [
  {"name":"arrow_frame01", "frame":{"x":1000, "y": 140, "width": 120, "height": 150}},
  {"name":"arrow_frame02", "frame":{"x":1000, "y": 160, "width": 120, "height": 150}},
  {"name":"arrow_frame03", "frame":{"x":1000, "y": 180, "width": 120, "height": 150}},
  {"name":"arrow_frame01", "frame":{"x":1000, "y": 180, "width": 120, "height": 150}},
  {"name":"arrow_frame02", "frame":{"x":1000, "y": 160, "width": 120, "height": 150}},
  {"name":"arrow_frame03", "frame":{"x":1000, "y": 140, "width": 120, "height": 150}},
];


var sceneState = {
INTRO: 0,
SCENE: 1,
GAME: 2,
WIN: 3,
};
var currentState = sceneState.INTRO;

// var keyOn = false;




function preload() {
  animWalk = loadAnimation("assets/Character_walk_01.png",
    "assets/Character_walk_02.png",
    "assets/Character_walk_03.png",
    "assets/Character_walk_04.png");

  animSidewalk = loadAnimation("assets/Character_walk_01_small.png",
    "assets/Character_walk_02_small.png",
    "assets/Character_walk_03_small.png",
    "assets/Character_walk_04_small.png");

  animUpwalk = loadAnimation("assets/Character_walk_01_up.png",
    "assets/Character_walk_02_up.png",
    "assets/Character_walk_03_up.png",
    "assets/Character_walk_04_up.png");

  animDownwalk = loadAnimation("assets/Character_walk_01_down.png",
    "assets/Character_walk_02_down.png",
    "assets/Character_walk_03_down.png",
    "assets/Character_walk_04_down.png");

  animStand = loadAnimation("assets/Character_stand.png")

  animStand2 = loadAnimation("assets/Character_stand_small.png")

  Z_anim = loadSpriteSheet('assets/Z_sign.png', Z_frame);

  arrow_anim = loadSpriteSheet('assets/arrow.png', arrow_frame);

  g = loadImage("assets/ground.png");
  be = loadImage("assets/Bed.png");
  d = loadImage("assets/Desk.png");
  bo = loadImage("assets/bookshelf.png");
  img_id = loadImage("assets/idea.png");

}


function setup() {
  createCanvas(1300, 700);
 
  score = 1;
  // ideas = new Group();
  
  Jim = createSprite(width/2,380, 120, 150);
  Jim.addAnimation("walk", animWalk);
  Jim.addAnimation("stand", animStand);

  Jim_game = createSprite(width/2,height/2, 72, 90);
  Jim_game.addAnimation("walkSide",animSidewalk);
  Jim_game.addAnimation("walkUp",animUpwalk);
  Jim_game.addAnimation("walkDown",animDownwalk);
  Jim_game.addAnimation("stand2",animStand2);

  Z_sign= createSprite(120,150);
  Z_sign.addAnimation("move",Z_anim);

  arrow_sign = createSprite(120,150);
  arrow_sign.addAnimation('move',arrow_anim);

  bookshelf= createSprite(800, 400, 240, 300);
  bookshelf.addImage(bo);
  desk= createSprite(1100, 425, 240, 300);
  desk.addImage(d);
  bed= createSprite(300, 425, 240, 300);
  bed.addImage(be);


  idea1 = createSprite(random(100,1200),random(100,600),72,90);
  idea2 = createSprite(random(100,1200),random(100,600),72,90);
  idea3 = createSprite(random(100,1200),random(100,600),72,90);
  idea4 = createSprite(random(100,1200),random(100,600),72,90);
  idea5 = createSprite(random(100,1200),random(100,600),72,90);
  idea6 = createSprite(random(100,1200),random(100,600),72,90);
  idea7 = createSprite(random(100,1200),random(100,600),72,90);
  idea8 = createSprite(random(100,1200),random(100,600),72,90);
  idea9 = createSprite(random(100,1200),random(100,600),72,90);
  idea10 = createSprite(random(100,1200),random(100,600),72,90);

  idea1.addImage(img_id);
  idea2.addImage(img_id);
  idea3.addImage(img_id);
  idea4.addImage(img_id);
  idea5.addImage(img_id);
  idea6.addImage(img_id);
  idea7.addImage(img_id);
  idea8.addImage(img_id);
  idea9.addImage(img_id);
  idea10.addImage(img_id);

      button1=createButton('click me to continue');
      button1.position(596, 600);
      button1.mousePressed(changeState);  


}

function draw() {

 drawScene(currentState);
 checkTransition(currentState);
 console.log(currentState);


}

function drawScene(whichScene) {
  switch (currentState) {
    case sceneState.INTRO:
      
      background(255, 204, 128);
      fill(0);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("Help Jim to finish final!", width/2, 150);
      textSize(30);
      Jim.changeAnimation('stand');
      drawSprite(Jim); 
      drawSprite(Z_sign); 



      break;

    case sceneState.SCENE:
      background(255, 204, 128);
      var eventX;

    eventX = mouseX;


    Jim.position.y = 475;
      

  if(eventX < Jim.position.x - 20) {
    Jim.changeAnimation('walk');
    // flip horizontally
    Jim.mirrorX(-1);
    // move left
    Jim.velocity.x = - 5;
  }
  else if(eventX > Jim.position.x + 20) {
    Jim.changeAnimation('walk');
    // flip horizontally
    Jim.mirrorX(1);
    // move right
    Jim.velocity.x = 5;

  }
  else {
    Jim.changeAnimation('stand');
    //if close to the mouse, don't move
    Jim.velocity.x = 0;
  }

     for (var x = 0; x < 1400; x += 120) {
         ground = createSprite(x, 625, 120, 150);
         ground.addImage(g);
         
         drawSprite(ground);
     }
     drawSprite(bookshelf);
     drawSprite(bed);
     drawSprite(desk);
     drawSprite(arrow_sign); 
     drawSprite(Jim);

     break;

  case sceneState.GAME:
      background(20);

      fill(230);
      textSize(30);
      textAlign(CENTER, CENTER);
      text("Use arrow key to control Jim", width/2, 70);

  if(left) {
    Jim_game.changeAnimation('walkSide');
    // flip horizontally
    Jim_game.mirrorX(-1);
    // move left
    Jim_game.velocity.x = - 5;
  }
  else if(right) {
    Jim_game.changeAnimation('walkSide');
    // flip horizontally
    Jim_game.mirrorX(1);
    // move right
    Jim_game.velocity.x = 5;
  }
  else if(up){
  	Jim_game.changeAnimation('walkUp');

    Jim_game.velocity.y = - 5;
  }
  else if(down){
  	Jim_game.changeAnimation('walkDown');

    Jim_game.velocity.y = 5;
  }  
  else {
    Jim_game.changeAnimation('stand2');
    //if close to the mouse, don't move
    Jim_game.velocity.x = 0;
    Jim_game.velocity.y = 0;
  }

   drawSprite(idea1);
   drawSprite(idea2);
   drawSprite(idea3);
   drawSprite(idea4);
   drawSprite(idea5);
   drawSprite(idea6);
   drawSprite(idea7);
   drawSprite(idea8);
   drawSprite(idea9);
   drawSprite(idea10);




   if(Jim_game.overlap(idea1)){
      overlap1=true;
      removeSprite(idea1);
   }
   else{
   	overlap1 = false;
   }
   if(Jim_game.overlap(idea2)){
     overlap2=true;
     removeSprite(idea2);
   }
   else{
   	overlap2 = false;
   }
   if(Jim_game.overlap(idea3)){
     overlap3=true;
     removeSprite(idea3);
   }
   else{
   	overlap3 = false;
   }
   if(Jim_game.overlap(idea4)){
     overlap4=true;
     removeSprite(idea4);
   }
   else{
   	overlap4 = false;
   }
   if(Jim_game.overlap(idea5)){
     overlap5=true;
     removeSprite(idea5);
   }
   else{
   	overlap5 = false;
   }
   if(Jim_game.overlap(idea6)){
     overlap6=true;
     removeSprite(idea6);
   }
   else{
   	overlap6 = false;
   }
   if(Jim_game.overlap(idea7)){
     overlap7=true;
     removeSprite(idea7);
   }
   else{
   	overlap7 = false;
   }
   if(Jim_game.overlap(idea8)){
     overlap8=true;
     removeSprite(idea8);
   }
   else{
   	overlap8 = false;
   }
   if(Jim_game.overlap(idea9)){
     overlap9=true;
     removeSprite(idea9);
   }
   else{
   	overlap9 = false;
   }
   if(Jim_game.overlap(idea10)){
     overlap10=true;
     removeSprite(idea10);
   }
   else{
   	overlap10 = false;
   }

   if(overlap1){
   	score+=1;
   }
   if(overlap2){
   	score+=1;
   }
   if(overlap3){
   	score+=1;
   }
   if(overlap4){
   	score+=1;
   }
   if(overlap5){
   	score+=1;
   }
   if(overlap6){
   	score+=1;
   }
   if(overlap7){
   	score+=1;
   }
   if(overlap8){
   	score+=1;
   }
   if(overlap9){
   	score+=1;
   }
   if(overlap10){
   	score+=1;
   }
  

  // if(score<10){
  // 	gameEnd=false;
  // }
  // else{
  // 	gameEnd =true;
  // }

  drawSprite(Jim_game);
    break;

    case sceneState.WIN:
      background(255, 204, 128);
      fill(0);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("You made it! Well Done!", width/2, 150);
      textSize(30);
      Jim.changeAnimation('stand');
      drawSprite(Jim);
      Jim.position.x= width/2; 
      drawSprite(Z_sign);     
      break;  

    } 
  }

  function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.SCENE:
       if(mouseIspressed && Jim.position.x>900 && Jim.position.y<1100){
        currentState++;
        setUpScene(currentState);
       }  
      break;
    case sceneState.GAME:
      if (gameEnd) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.WIN:
      if (keyOn) {
        currentState = 0;
        setUpScene(currentState);
      }
      break;            
    }
  }

 function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      button1=createButton('click me to continue');
      button1.position(600, 100);
      button1.mousePressed(changeState);            
      break;
    case sceneState.SCENE:
      break;
    case sceneState.GAME:
      button2=createButton('click me after collect all the "ideas"');
      button2.position(550, 650);
      button2.mousePressed(changeState); 
      break;
    case sceneState.WIN:
      break;
  }
}


 function keyPressed() {
  // if (key === 'F'){
  // 	keyOn = true;
  // }
  if (keyCode === UP_ARROW) {
    up = true;
  }
  if (keyCode === DOWN_ARROW) {
    down = true;

  }
  if (keyCode === LEFT_ARROW) {
  	left = true;

  }
  if (keyCode === RIGHT_ARROW) {
   right = true;
  }
}

function keyReleased(){
  // if (key === 'F'){
  // 	keyOn = false;
  // }
  if (keyCode === UP_ARROW) {
   up = false;
  }
  if (keyCode === DOWN_ARROW) {
    down = false;

  }
  if (keyCode === LEFT_ARROW) {
  	left = false;

  }
  if (keyCode === RIGHT_ARROW) {
   right = false;
  }
}

function mouseMoved() {
  mouse_moved = true;
}

function mousePressed(){
  mouseIspressed = true;
  button1.remove(); 
  button2.remove();
  button3.remove();   
}

function mouseReleased(){
	mouseIspressed = false;
}

function changeState(){
	currentState++;
}
