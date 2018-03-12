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
  p1 = new Ball(0);
  p2 = new Ball(1);
}

function draw() {
  drawScene(currentState);
  checkTransition(currentState);
  console.log(keyOn);
}

function Ball(num) {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.speed = 2;
  this.width = 15;
  this.height = 15;
  this.pos.y = this.pos.y- this.speed;

  this.update = function(up, down, left, right) {
  	if(up){
      this.pos.y = this.pos.y- this.speed;
  	}
  	if(down){
      this.pos.y = this.pos.y+ this.speed;
  	}
  	if(left){
      this.pos.x = this.pos.x- this.speed;
  	}
  	if(right){
      this.pos.x = this.pos.x+ this.speed;
  	}  	  	    
  }
  

  this.display = function() {
    noStroke();
    fill(0);
    rectMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.width, this.height);
  }
 }

function drawField() {
  stroke(0);
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
      text("This is INRO", width/2, height/2);
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
       drawField();
       background(255);

       p1.update();
       p2.update();

       p1.display();
       p2.display();
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
    case sceneState.INSTRUCTION:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
    case sceneState.GAME:
      if (gameEnd) {
        currentState++;
        setUpScene(currentState);
      }
    case sceneState.WIN:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }            
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

  if (key === 'W') {
    p1Up = true;
    p1Down = false;
    p1Left = false;
    p1Right = false;
  }
  if (key === 'S') {
    p1Up = false;
    p1Down = true;
    p1Left = false;
    p1Right = false;

  }
  if (key === 'A') {
    p1Up = false;
    p1Down = false;
    p1Left = true;
    p1Right = false;
  }  
  if (key === 'D') {
    p1Up = false;
    p1Down = false;
    p1Left = false;
    p1Right = true;
  }  
  if (keyCode === UP_ARROW) {
    p2Up = true;
    p2Down = false;
    p2Left = false;
    p2Right = false;
  }
  if (keyCode === DOWN_ARROW) {
    p2Up = false;
    p2Down = true;
    p2Left = false;
    p2Right = false;

  }
  if (keyCode === LEFT_ARROW) {
    p2Up = false;
    p2Down = false;
    p2Left = true;
    p2Right = false;

  }
  if (keyCode === RIGHT_ARROW) {
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

