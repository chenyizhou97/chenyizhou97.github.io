var ball;
var p1, p2;
var p1Score = 0;
var p2Score = 0;
var p1Up = false;
var p1Down = false;
var p2Up = false;
var p2Down = false;
var margin = 20;
var cnv;
var paddleBounceSFX, hitColliderSFX;
var colliders = [];

var sceneState = {
  INTRO: 0,
  LEVEL1: 1,
  LEVEL2: 2,
  LEVEL3: 3,
  LEVEL4: 4,
  LEVEL5: 5,
  LEVEL6: 6,
  LEVEL7: 7,
  LEVEL8: 8,
  LEVEL9: 9,
  LEVEL10: 10,
  WIN: 11,
};
var keyOn = false;
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
  ball = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);
}

function draw() {
  background(0);
  drawField();

  p1.move(p1Up, p1Down);
  p2.move(p2Up, p2Down);

  ball.update();
  p1.update();
  p2.update();
  for (var i = 0; i < colliders.length; i++) {
    colliders[i].update();
  }

  p1.display();
  p2.display();

  for (var i = 0; i < colliders.length; i++) {
    colliders[i].display();
  }

  ball.display(); 

  checkCollisionWithBall(ball, p1);
  checkCollisionWithBall(ball, p2);

  for (var i = 0; i < colliders.length; i++) {
    checkCollisionWithBall(ball, colliders[i]);
  }
  drawScene(currentState);
  checkTransition(currentState);
  keyOn = false;
}

function drawField() {
  stroke(255);
  noFill();
  line(0, margin, width, margin);
  line(0, height - margin, width, height - margin);
  for (var i = margin; i < height - margin - 15; i += 35) {
    var start = i;
    var finish = start + 15;
    line(width/2, start, width/2, finish);
  }

  fill(255);
  noStroke();
  textSize(64);
  textAlign(CENTER, CENTER);
  text(p1Score, width/2-50, 70);
  text(p2Score, width/2+50, 70);
}

function checkCollisionWithBall(ball, other) {
  if (ball.pos.x + ball.width/2 > other.pos.x && 
      ball.pos.x + ball.width/2 < other.pos.x + other.width && 
      ball.pos.y + ball.height/2 > other.pos.y &&
      ball.pos.y + ball.height/2 < other.pos.y + other.height) {
    ball.collided(other);
    other.collided(ball);
  }
}

function Ball() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.angle = random(TWO_PI);
  this.speed = 7;
  this.vel.x = cos(this.angle) * this.speed;
  this.vel.y = sin(this.angle) * this.speed;
  this.width = 15;
  this.height = 15;

  this.update = function() {
    if (this.pos.x < -this.width) {
      p2Score++;
      this.resetAfterPoint(0);
    } else if (this.pos.x > width) {
      p1Score++;
      this.resetAfterPoint(1);
    }

    if (this.pos.y < margin || 
        this.pos.y > height - margin - this.height) {
      this.vel.y *= -1;
    }

    this.pos.add(this.vel);
  };

  this.display = function() {
    noStroke();
    fill(255);
    rectMode(CORNER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

  this.resetAfterPoint = function(whichPlayer) {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.speed = 7;
    if (whichPlayer === 1) {
      this.getStartingAngle(4 * PI/6, 8 * PI/6);
    } else if (whichPlayer === 0) {
      this.getStartingAngle(-PI/3, PI/3);
    }
  }

  this.getStartingAngle = function(angleLow, angleHigh) {  
    var angle = random(angleLow, angleHigh);
    this.vel.x = cos(angle) * this.speed;
    this.vel.y = sin(angle) * this.speed;
  }

  this.collided = function(other) {
    
  }
};

function Paddle(num) {
  this.num = num;
  this.width = 15;
  this.height = 80;
  if (num == 0) {
    this.pos = createVector(margin, height/2);
  } else {
    this.pos = createVector(width-this.width-margin, height/2);
  }
  this.vel = createVector(0, 0);

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.display = function() {
    noStroke();
    fill(255);
    rectMode(CORNER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

  this.move = function(up, down) {
    this.vel.y = 0;
    if (up) {
      if (this.pos.y > margin) {
        this.vel.y = -5;
      } else {
        this.pos.y = margin;
      } 
    }
    if (down) {
      if (this.pos.y + this.height < height - margin) {
        this.vel.y = 5;
      } else {
        this.pos.y = height - this.height - margin;
      }
    } 
  }

  this.collided = function(other) {
    var diff = (other.pos.y + other.height/2) - this.pos.y;
    if (this.num === 0) {
      angle = map(diff, 0, this.height, -PI/3, PI/3);
    }
    if (this.num === 1) {
      angle = map(diff, this.height, 0, 4*PI/6, 8*PI/6);
    }
    other.speed += 1;
    other.vel.x = cos(angle) * other.speed;
    other.vel.y = sin(angle) * other.speed;
    
  }
}




function drawScene(whichScene) {
  switch (currentState) {
    case sceneState.INTRO:
      background(0);
      fill(255);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("welcome to PONG game", width/2, height/2);
      textSize(30);
      text("Pressed any key to continue..",width/2,400);
      text("Try to get 10 point higher than other player!",width/2,300)
      break;

    case sceneState.LEVEL1:
         background(0);
         drawField();

         p1.move(p1Up, p1Down);
         p2.move(p2Up, p2Down);

         ball.update();
         p1.update();
         p2.update();
      for (var i = 0; i < colliders.length; i++) {
         colliders[i].update();
      }

         p1.display();
         p2.display();

      for (var i = 0; i < colliders.length; i++) {
         colliders[i].display();
      }

         ball.display(); 

         checkCollisionWithBall(ball, p1);
        checkCollisionWithBall(ball, p2);

      for (var i = 0; i < colliders.length; i++) {
      checkCollisionWithBall(ball, colliders[i]);
      }
      break;

    case sceneState.WIN:
      background();
      drawField();
      if(p1Score>p2Score){
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(80);
        text("YOU WIN",225,height/2);
      }
      else{
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(80);
        text("YOU WIN",675,height/2);     
      }
      break;
      default:
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
    case sceneState.LEVEL1:
      if (p1Score+p2Score>4) {
         currentState++;
        setUpScene(currentState);
       }
       break;
    case sceneState.LEVEL2:
      if (p1Score+p2Score>8) {
         currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL3:
      if (abs(p1Score-p2Score)>10) {
        currentState = sceneState.WIN;
        setUpScene(currentState);
        }    
      if(p1Score+p2Score>12) {
         currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL4:
      if (abs(p1Score-p2Score)>10) {
        currentState = sceneState.WIN;
        setUpScene(currentState);
        }    
      if(p1Score+p2Score>16) {
         currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL5:
      if (abs(p1Score-p2Score)>10) {
        currentState = sceneState.WIN;
        setUpScene(currentState);
        }    
      if(p1Score+p2Score>20) {
         currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL6:
      if (abs(p1Score-p2Score)>10) {
        currentState = sceneState.WIN;
        setUpScene(currentState);
        }    
      if (p1Score+p2Score>24) {
         currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL7:
      if (abs(p1Score-p2Score)>10) {
        currentState = sceneState.WIN;
        setUpScene(currentState);
        }    
      if (p1Score+p2Score>28) {
         currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL8:
      if (abs(p1Score-p2Score)>10) {
        currentState = sceneState.WIN;
        setUpScene(currentState);
        }    
      if (p1Score+p2Score>32) {
         currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL9:
      if (abs(p1Score-p2Score)>10) {
        currentState = sceneState.WIN;
        setUpScene(currentState);
        }    
      if (p1Score+p2Score>36) {
         currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneState.LEVEL10:
      if (abs(p1Score-p2Score)>10) {
        currentState = sceneState.WIN;
        setUpScene(currentState);
        }    
      if (p1Score+p2Score>40) {
         currentState=sceneState.LEVEL1;
        setUpScene(currentState);
      }                                            
     break;
    case sceneState.WIN:
      if (keyOn){
        currentState = sceneState.INTRO;
        setUpScene(currentState);
      }
     break;
     default:
     break; 
  }
}



function keyPressed() {

  if (key === 'W') {
    p1Up = true;
  }
  if (key === 'S') {
    p1Down = true;
  }

  if (keyCode === UP_ARROW) {
    p2Up = true;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = true;
  }
  keyOn = true;
}

function keyReleased() {
  if (key === 'W') {
    p1Up = false;
  }
  if (key === 'S') {
    p1Down = false;
  }

  if (keyCode === UP_ARROW) {
    p2Up = false;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = false;
  }
}

function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneState.INTRO:
      break;
    case sceneState.LEVEL1:
      break;
    case sceneState.LEVEL2:
    colliders.push(new Bryan());
      break;
    case sceneState.LEVEL3:
    colliders.push(new Yizhou());
      break;
    case sceneState.LEVEL4:
    colliders.push(new Ellie());
      break;
    case sceneState.LEVEL5:
    colliders.push(new Yanwen());
      break;
    case sceneState.LEVEL6:
            colliders.push(new MaddyRed());
        colliders.push(new MaddyGreen());
        colliders.push(new MaddyBlue());
      break;
    case sceneState.LEVEL7:
    colliders.push(new AlyssaForrest());
      break;
    case sceneState.LEVEL8:
    colliders.push(new Sarah());
      break;
    case sceneState.LEVEL9:
    colliders.push(new Jackie());
      break;
    case sceneState.LEVEL10:
    colliders.push(new Cat());
      break;
    case sceneState.WIN:
      break;
    default:
      break;


  }
}



function Yang() {
  this.pos = createVector(width/2, height/2);
  this.speed = 5;
  this.angle = 0;
  this.vel = createVector(cos(this.angle) * this.speed, sin(this.angle) * this.speed);
  this.width = 100;
  this.height = 100;
 
  

  this.update = function() {
    this.angle = (this.angle + 0.05) % TWO_PI;
    this.vel.x = cos(this.angle) * this.speed;
    this.vel.y = sin(this.angle) * this.speed;
    this.pos.add(this.vel);


  }

  this.display = function(b,p) {
    stroke(255);
    if(p1Score>10 || p2Score>10){
    fill(255,0,0,50);
  } else {
    fill(255,20);
  }
    
  ellipse(width/2,height/2, b.pos.y-b.size/2, b.pos.y-b.size/2);
  fill(color(map(sin(this.angle), -1, 1, 0, 255), map(cos(this.angle), -1, 1, 0, 255), random(20,40),130));
  triangle(width/2,height/2,p.pos.x+p.width/2, p.pos.y+p.height/2,b.pos.x+b.size/2, b.pos.y+b.size/2);
    // stroke(255);
    // fill(255,10);
    // ellipse(width/2,height/2, b.pos.y+b.height/2, b.pos.y+b.height/2);
    // fill(color(map(sin(this.angle), -1, 1, 0, 255), map(cos(this.angle), -1, 1, 0, 255), 1,100));
    // triangle(width/2,height/2,p.pos.x+p.width, p.pos.y+p.height/2,ball.pos.x+ball.width/2, ball.pos.y+ball.height/2);
  }
  this.collided = function(b) {
    var d = dist(b.pos.x,b.pos.y,width/2,height/2);
     if(d < (b.pos.y-b.size/2)/2){
     

      for (var i =0; i <= b.pos.y-b.size/2; i+=15) {
        background(random(0,255),255-d,d+200,5);
        for(var j =10; j<=255; j+=15){

          stroke(random(0,j),random(255-j,j),i,240);
          noFill();
          ellipse(width/2,height/2,i,i);

        }}

      // var a = b.pos.x;
      // var b = b.pos.y;
      // // ellipse(a,b,50,50);
      
      
     }}


  


    // do something cool here! do something to yourself,
    // and also something to the other thing?
  }
