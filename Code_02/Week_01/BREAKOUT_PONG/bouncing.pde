void bouncing() {
  if (y < 25) {
    speedY = abs(speedY);
  }
  if (y > 575) {
    speedY = -speedY;
  }
  if (x < 25 && y > n && y < n+60) {
    speedX = abs(speedX);
    speedX = speedX+0.5;
    speedY = random(-10, 10);
  }
  if (x > 960 && y > m && y < m+60) {
    speedX = -speedX;
    speedX = speedX-0.5;
    speedY = random(-10, 10);
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