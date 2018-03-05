float x = 500;
float y = 300;
int i, n, j, m, b;
int r=15;
float speedX = 5;
float speedY = 0;
int speedPeddle=6;
int s1 = 0;
int s2 = 0;
boolean UpL, DownL, UpR, DownR;
int easy=30;//7.5 to Infinity easy

int[] blocks = new int[600];
  PFont font;


void setup() {
  size(1000, 600);
  background(155);

  for (b=0; b<20; b++) {
    blocks[b] = 1;
  }

  i = 15;
  j = 975;
  n = 270;
  m = 270;
  

}

void draw() {
  move();
  cleantrails();

  bouncing();
  notifications();
  breakout();
  paddleMove();
  blockGone();
  keyRestricted();
}

void paddleMove() {
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


void keyPressed() {
  if (key == 'w'||key == 'W') {
    UpL = true;
  }
  if (key == 's'||key == 'S') {
    DownL = true;
  }
  if (keyCode == UP) {
    UpR = true;
  }
  if (keyCode == DOWN) {
    DownR = true;
  }
}

void keyReleased() {
  if (key == 'w'||key == 'W') {
    UpL = false;
  }
  if (key== 's'||key == 'S') {
    DownL = false;
  }
  if (keyCode == UP) {
    UpR = false;
  }
  if (keyCode == DOWN) {
    DownR = false;
  }
}

void keyRestricted() {
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