var x = 500;
var y = 300;
var i, n, j, m, b;
var r=15;
var speedX = 5;
var speedY = 0;
var speedPeddle=6;
var s1 = 0;
var s2 = 0;
var UpL, DownL, UpR, DownR;
var easy=30;//7.5 to Infinity easy
var blocks_gone;
var bx, by;

var blocks = new Array(600);


function setup() {
createCanvas(1000, 600);
  background(155);

    for (b=0; b<20; b++) {
    blocks[b] = 1; 

}


  i = 15;
  j = 975;
  n = 270;
  m = 270;
  
}

function draw() {
  move();
  cleantrails();
  bouncing();
  notifications();
  breakout();
  paddleMove();
  blockGone();
  keyRestricted();
}



function blockGone() {
  blocks_gone = 1;

  for (b=0; b<20; b++) {
    // Calculate the x,y position of upper right corner
    bx = 500;
    by = b*30; 

    // Check if we we have a block (blocks[x] is 1)
    if (blocks[b]==1) { 
      // Draw the block
      fill(255);
      rect(bx, by, r, r);
      // Since we drew a block, all are not gone
      blocks_gone = 0;
    }
    // Check if ball is over the block, if so, remove it (blocks[i]=0) 
    // first check bounce on top/bottom
    if (x>(bx) && x<(bx+r+easy) &&
      y>(by) && y<(by+r+easy) && blocks[b]==1) { 
      blocks[b]=0;
    }
  }
}



function bouncing() {
  if (y < 25) {
    speedY = abs(speedY);
  }
  if (y > 575) {
    speedY = -speedY;
  }
  if(x>15){
   if (x < 25 && y > n && y < n+30) {
     speedX = abs(speedX);
     speedX = speedX+0.5;
     speedY = random(-7, -1);
  }
   if (x < 25 && y > n+30 && y < n+60) {
     speedX = abs(speedX);
     speedX = speedX+0.5;
     speedY = random(1, 7);
  }
}
  if(x<985){
   if (x > 960 && y > m && y < m+30) {
     speedX = -speedX;
     speedX = speedX-0.5;
     speedY = random(-7, -1);
  }
  if (x > 960 && y > m+30 && y < m+60) {
     speedX = -speedX;
     speedX = speedX-0.5;
     speedY = random(1, 7);
  }
}
  //scores
  if (x < -75) {
    s2 = s2+1;
    x = 500;
    y = 300;
    speedX = 7;
    speedY = 0;
    if (s2 == 10) {
      noLoop();
      fill(255);
      textSize(30);
      text("Right player win", 50, 300);
    }
  }
  if (x > 1075) {
    s1 = s1+1;
    x = 500;
    y = 300;
    speedX = -7;
    speedY = 0;
    if (s1 == 10) {
      noLoop();
      fill(255);
      textSize(30);
      text("Left player win", 50, 300);
    }
  }
}

function breakout() {

//ball
  smooth();
  noStroke();
  fill(255);
  rect(x, y, r, r);
  //paddle one
  fill(245,58,0);
  //left one
  rect(i, n, r, 5*r);

  //right one
  fill(0,186,255);
  rect(j, m, r, 5*r);

}

function cleantrails() {
  background(0);
  
}


function move() {
  x = x+speedX;
  y = y+speedY;
}

function notifications() {
 
 
  // stroke(0);
  // line(500, 0, 500, 600);
  fill(255);
  textSize(80);
  text(s1, 380, 100);
  text(s2, 570, 100);

}


function paddleMove() {
  if (UpL ) {
    n=n-speedPeddle;
  }
  if (DownL) {
    n=n+speedPeddle;
  } else if (UpR ) {
    m=m-speedPeddle;
  } else if (DownR) {
    m=m+speedPeddle;
  }
}


function keyPressed() {
  if (key == 'w'||key == 'W') {
    UpL = true;
  }
  if (key == 's'||key == 'S') {
    DownL = true;
  }
  if (keyCode === UP_ARROW) {
    UpR = true;
  }
  if (keyCode === DOWN_ARROW) {
    DownR = true;
  }
}

function keyReleased() {
  if (key == 'w'||key == 'W') {
    UpL = false;
  }
  if (key== 's'||key == 'S') {
    DownL = false;
  }
  if (keyCode === UP_ARROW) {
    UpR = false;
  }
  if (keyCode === DOWN_ARROW) {
    DownR = false;
  }
}


function keyRestricted() {
  if (m<0) {
    m=0;
  } 
  if (m>525) { 
    m=525;
  }
  if (n<0) {
    n=0;
  } 
  if (n>525) { 
    n=525;
  }
}
