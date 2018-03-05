void breakout() {

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