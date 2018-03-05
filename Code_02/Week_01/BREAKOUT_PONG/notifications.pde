void notifications() {

  //mid line
  
 
  stroke(0);
  line(500, 0, 500, 600);
  
  //text pos
  fill(255);
  // The font must be located in the sketch's 
// "data" directory to load successfully
font = loadFont("Loaded.vlw");
  textFont(font);
  textSize(80);
  text(s1, 380, 100);
  text(s2, 570, 100);
}