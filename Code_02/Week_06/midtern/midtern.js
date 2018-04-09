var sceneState = {
INTRO: 0,
INSTRUCTION: 1,
GAME: 2,
WIN: 3,
};
var marginy =20;
var marginx =20;
var p1Up = false;
var p1Down = false;
var p1Left = false;
var p1Right = false;
var p2Up = false;
var p2Down = false;
var p2Left = false;
var p2Right = false;
var keyOn = false;
var gameEnd = false;
var currentState = sceneState.INTRO;
var p1, p2;
var food1X, food1Y;
var food2X, food2Y;
var food3X, food3Y;
var totalP1 = 0;
var totalP2 = 0;

var foods = [];
var foodNums=1;
var curScore,preScore;

  function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

  function windowResized() {
  centerCanvas();
}

function setup() {
  cnv = createCanvas(900, 500);
  centerCanvas();


  p1 = new Snake1();
  p2 = new Snake2();

for (var i= 0; i<foodNums; i++){
	foods.push(new food());
 }
}

function draw() {
  pos1X = p1.pos.x;
  pos1Y = p1.pos.y;
  pos2X = p2.pos.x;
  pos2Y = p2.pos.y;

  drawScene(currentState);
  checkTransition(currentState);
  // console.log(keyOn);
}

function Snake1() {
  this.pos = createVector(random(200,700), random(100,400));
  this.vel = createVector(0,2);
  this.speed = 2;
  this.scl = 20;
  this.tail= [];  

  
  this.update = function(){
    this.pos.add(this.vel);

    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (totalP1 >= 1) {
      this.tail[totalP1 - 1] = createVector(this.x, this.y);
    }


    this.pos.x = constrain(this.pos.x, 10, width-10);
    this.pos.y = constrain(this.pos.y, 30, height-30);

  }
 
  this.move = function(up, down, left, right) {
  	if(up){
      this.vel.y = -this.speed;
      this.vel.x = 0;
  	}
  	if(down){
      this.vel.y = this.speed;
      this.vel.x = 0;
  	}
  	if(left){
      this.vel.x = -this.speed;
      this.vel.y = 0;
  	}
  	if(right){
      this.vel.x = this.speed;
      this.vel.y = 0;
  	}	  	    
  }

  this.display = function() {
    noStroke();
    rectMode(CENTER);
    for (var i = 0; i < this.tail.length; i++) {
      ellipse(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
    }
    ellipse(this.pos.x, this.pos.y, this.scl, this.scl);
  }
}

function Snake2() {
  this.pos = createVector(random(200,700), random(100,400));
  this.vel = createVector(0,2);
  this.speed = 2;
  this.scl = 20;
  this.tail= [];

  
  this.update = function(){
    this.pos.add(this.vel);

    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (totalP2 >= 1) {
      this.tail[totalP2 - 1] = createVector(this.x, this.y);
    }


    this.pos.x = constrain(this.pos.x, 10, width-10);
    this.pos.y = constrain(this.pos.y, 30, height-30);

  }
 
  this.move = function(up, down, left, right) {
    if(up){
      this.vel.y = -this.speed;
      this.vel.x = 0;
    }
    if(down){
      this.vel.y = this.speed;
      this.vel.x = 0;
    }
    if(left){
      this.vel.x = -this.speed;
      this.vel.y = 0;
    }
    if(right){
      this.vel.x = this.speed;
      this.vel.y = 0;
    }         
  }

  this.display = function() {
    noStroke();
    rectMode(CENTER);
    for (var i = 0; i < this.tail.length; i++) {
      ellipse(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
    }
    ellipse(this.pos.x, this.pos.y, this.scl, this.scl);
  }
}


function food(num){ 
  this.pos= createVector(random(40,860), random(40,460));
  this.scl= 20;

  this.display= function (){
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.scl, this.scl);
    if (this.eat1||this.eat2){
      this.pos= createVector(random(40,860), random(40,460)); 
    }
  }

  this.update= function(){
    var d1 = dist(pos1X, pos1Y, this.pos.x, this.pos.y);
    var d2 = dist(pos2X, pos2Y, this.pos.x, this.pos.y);

    this.eat1;
    this.eat2;

    if(d1<10){
      this.eat1 = true;
      totalP1++;
    }
    else if(d2<10){
      totalP2++;
      this.eat2 = true;

    }     
    else{
      this.eat1 = false;
      this.eat2 = false;      
    }       
  }
}

function moreFood(){
	console.log(curScore,",",preScore);
	curScore = totalP1+totalP2;
	preScore = 0;
	while(curScore-preScore>4){
		foodNums= foodNums+2;
		preScore = curScore;
	}
}

function drawField() {
  stroke(0);
  strokeWeight(2);
  noFill();
  line(0, marginy, width, marginy);
  line(0, height - marginy, width, height - marginy);
  line(0, marginy, 0, height-marginy);
  line(width-2, marginy, width-2, height- marginy);
}

function drawScene(whichScene) {
  switch (currentState) {
    case sceneState.INTRO:
      background(255);
      fill(0);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("Welcome to Greedy Snake!", width/2, height/2);
      textSize(30);
      text("Pressed any key to continue..",width/2,400);
      break;
   
    case sceneState.INSTRUCTION:
      background(255);
      fill(0);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("Eat as much fruit as possible！", width/2, height/2);
      textSize(30);
      text("Pressed any key to continue..",width/2,400);
      break;
     
     case sceneState.GAME:
       background(255);
       drawField();
       

       for (var i=0; i<foods.length;i++){
       	foods[i].update();
       	foods[i].display();
       	moreFood();
       }

       // food1.display();
       // food2.display();
       // food3.display();       

       // food1.update();
       // food2.update();
       // food3.update();

       p1.update();
       p2.update();

       
       fill(100,100,255);
       p1.display();
       fill(255,100,100);
       p2.display();

       p1.move(p1Up, p1Down, p1Left, p1Right);
       p2.move(p2Up, p2Down, p2Left, p2Right);


       break;

     case sceneState.WIN:
      background(255);
      fill(0);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("WIN!", width/2, height/2);
      textSize(30);
      text("Pressed any key to restart..",width/2,400);
      break;
    }
  }


  function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.INSTRUCTION:
      if (keyOn) {
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
        currentState++;
        setUpScene(currentState);
      }
      break;            
    }
  }

  function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.INSTRUCTION:
      break;
    case sceneState.GAME:
      break;
    case sceneState.WIN:
      break;
      }
  }  


  function keyPressed() {

  if (key === 'W' && !p1Down) {
    p1Up = true;
    p1Down = false;
    p1Left = false;
    p1Right = false;
  }
  if (key === 'S' && !p1Up) {
    p1Up = false;
    p1Down = true;
    p1Left = false;
    p1Right = false;

  }
  if (key === 'A' && !p1Right) {
    p1Up = false;
    p1Down = false;
    p1Left = true;
    p1Right = false;
  }  
  if (key === 'D' && !p1Left) {
    p1Up = false;
    p1Down = false;
    p1Left = false;
    p1Right = true;
  }  
  if (keyCode === UP_ARROW && !p2Down) {
    p2Up = true;
    p2Down = false;
    p2Left = false;
    p2Right = false;
  }
  if (keyCode === DOWN_ARROW && !p2Up) {
    p2Up = false;
    p2Down = true;
    p2Left = false;
    p2Right = false;

  }
  if (keyCode === LEFT_ARROW && !p2Right) {
    p2Up = false;
    p2Down = false;
    p2Left = true;
    p2Right = false;

  }
  if (keyCode === RIGHT_ARROW && !p2Left) {
    p2Up = false;
    p2Down = false;
    p2Left = false;
    p2Right = true;

  }
  keyOn = true;
  if(key === 'F'){
  	gameEnd = true;
  }
}

function keyReleased(){
  if (key === 'F'){
  	gameEnd = false;
  }
  keyOn= false
}

