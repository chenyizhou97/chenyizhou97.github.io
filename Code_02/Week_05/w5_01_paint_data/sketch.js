// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 5
// saving/loading paint data
// based on example by Jon Beilin

var paintmarks = [];
var paintDataFile = 'paintData.json';
var scale;
var R,G,B;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  for (var i = 0; i < paintmarks.length; i++) {
    paintmarks[i].display();
  }

  fill(0);
  textSize(24);
  text("drag the mouse across the canvas to draw.", 50, 570);
  text("press 'S' to save a json file with the current paint data.", 50, 600);
  text("press 'L' to load a json file from your computer.", 50, 630);
}

function PaintMark(position, scale, R, G, B) {
  this.position = position;
  this.scale = scale;
  this.R = R;
  this.G = G;
  this.B = B;


  this.display = function() {
    noStroke();
    fill(this.R,this.G,this.B);
    ellipse(this.position.x, this.position.y, this.scale, this.scale);
  }

}

function mouseDragged() {
  paintmarks.push(new PaintMark(createVector(mouseX, mouseY), random(10, 30), random(0,255), random(0,255), random(0,255)));
}

function keyPressed() {
  if (key === 'S') {
    savePaintData();	
  }
  if (key === 'L') {
    loadPaintData();
  }
}

function savePaintData() {
  positionsToSave = [];
  for (var i = 0; i < paintmarks.length; i++) {
    positionsToSave.push(
      { 
        x: paintmarks[i].position.x, 
        y: paintmarks[i].position.y, 
        scale: paintmarks[i].scale,
        R: paintmarks[i].R,
        G: paintmarks[i].G,
        B: paintmarks[i].B
      }
    );
  }
  saveJSON(positionsToSave, 'paintData.json');
}

function loadPaintData() {
  loadJSON(paintDataFile, parsePaintData);
}

function parsePaintData(data) {
  paintmarks = [];
  scale;
  R,G,B;

  for (var i = 0; i < data.length; i++) {

    // console.log(data[i].scale);

    paintmarks.push(new PaintMark(createVector(data[i].x, data[i].y), data[i].scale, data[i].R, data[i].G, data[i].B));
  }

}