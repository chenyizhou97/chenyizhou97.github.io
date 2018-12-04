var api = 'https://bible-api.com/';
var book1 = 'john 3';
var t;
var txt;

function setup() {
  var cnv = createCanvas(800, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  background(0);
  
  // button = createButton('Jhon 3');
  // button.position(20, 65);
  // button.mousePressed(dataAsk1);
 dataAsk1();
}

function gotData(data){
 t = data;
 txt = data.text;
}

function dataAsk1(){
  var url_1 = api+book1;
  loadJSON(url_1, gotData);
}

function draw() {

 }