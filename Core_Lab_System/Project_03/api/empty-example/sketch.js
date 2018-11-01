var api = 'http://api.population.io/1.0/population/';
var country = '/United%20States/';
var age_y = '/25/';
var age_o = '/75/';
var format = '?format=json'
var pYoung,pOld;
var population_young, population_old;

function setup() {
  var cnv = createCanvas(1000, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  
  input1 = select('#Year');
  input2 = select('#Country')
  // print(url)

  var button = select('#submit');
  button.mousePressed(dataAsk);
}

function dataAsk(){
  var url_y = api+ input1.value() + '/' + input2.value() + age_y + format;
  loadJSON(url_y, gotDatay);

  var url_o = api+ input1.value() + '/' + input2.value() + age_o + format;
  loadJSON(url_o, gotDatao);
    	background(5);
    if(population_young&&population_old){

	for(var i=1; i<pOld; i++){
		ellipse(random(1,1000),random(1,800),10,10);
		noStroke();
		fill(230,0,0);
	}
	for(var e=1; e<pYoung; e++){
		ellipse(random(1,1000),random(1,800),10,10);
		noStroke();
		fill(0,0,230);
	}
  }
}

function gotDatay(data){
	// print(data);
 population_young = data;
 pYoung = population_young[0].total/10000;
}

function gotDatao(data){
	// print(data);
 population_old = data;
 pOld = population_old[0].total/10000; 
}


function draw() {

 }