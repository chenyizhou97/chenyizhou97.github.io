var token;
var t;
var txt;
var counts = {};

var fontsize = 35;

var power;
var scores =0 ;

var god; 
var s,d,b,bo,In,Co;

var GData;

var shoot = false;

var demon;
var demons;
var numOfDemon = 50;
var bullet;
var bullets;
var boom;
var booms;
var boomP;
var bomb = 0;

var Color = 0;

var demonHp = [];


var sceneState = {
INTRO: 0,
CONTROL: 1,
GAME: 2,
SCORE: 3,
};
var currentState = sceneState.INTRO;


function preload(){
   s = loadImage("data/God.png");
   d = loadImage("data/Demon.png");
   b = loadImage("data/Bullet.png");
   bo = loadImage("data/Boom.png");
   In = loadImage("data/IntroScreen.png");
   Co = loadImage("data/Controlscreen.png")
}


function setup() {

  var cnv = createCanvas(600, 900);

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  

   background(0);

   

  john1 = createButton('John 1');
  john1.position(40, 100);
  john1.mousePressed(dataAsk1);

  john2 = createButton('John 2');
  john2.position(40, 150);
  john2.mousePressed(dataAsk2);

  john3 = createButton('John 3');
  john3.position(40, 200);
  john3.mousePressed(dataAsk3);

  john4 = createButton('John 4');
  john4.position(40, 250);
  john4.mousePressed(dataAsk4);

  john5 = createButton('John 5');
  john5.position(40,300);
  john5.mousePressed(dataAsk5);

  
  background(0);

  demons = new Group();
  bullets = new Group();
  booms = new Group();

for(var i= 0; i < numOfDemon; i++){
  	demon = createSprite(random(50,550), random(-3000,-200), 78, 81);
    demon.addImage(d);
    demon.addSpeed(2,90);
    demons.add(demon);
    demonHp[i] = 50;
    }

for(var i = 0; i < 3; i ++){
   boom = createSprite(random(50,550),random(-3000,-200),22,34);
   boom.addImage(bo);
   boom.addSpeed(3.5,90);
   booms.add(boom);
}


  // setUpScene(currentState);

  
}

function gotData(data){
 t = data;
 gData = data.verses.verse;
 txt = data.text;
 token = txt.split(/\W+/);
 for (var i =0; i<token.length; i++){
 	var word = token[i].toLowerCase();
 	if(counts[word] === undefined){
 		counts[word] = 1;
 	}else{
 		counts[word] = counts[word] +1;
 	}
 	if(counts['god'] === undefined){
 		counts['god'] = 0;
 	}
 	if(counts['lord'] === undefined) {
 		counts['lord'] = 0;
 	}
 	if(counts['father'] === undefined) {
 		counts['father'] = 0;
 	}
 	if(counts['jesus'] === undefined) {
 		counts['jesus'] = 0;
 	}
 	if(counts['believes'] === undefined) {
 		counts['believes'] = 0;
 	}

    power = counts['god'] + counts['father'] + counts['lord'] + counts['jesus']  + counts['believes']; 
 }

}

function dataAsk1(){
  loadJSON('data/john_1.json', gotData);  
  john1.hide();
  john2.hide();
  john3.hide();
  john4.hide();
  john5.hide();
  currentState++;
}

function dataAsk2(){
  loadJSON('data/john_2.json', gotData); 
  john1.hide();
  john2.hide();
  john3.hide();
  john4.hide();
  john5.hide(); 
  currentState++;
}

function dataAsk3(){
  loadJSON('data/john_3.json', gotData);
  john1.hide();
  john2.hide();
  john3.hide();
  john4.hide();
  john5.hide();
  currentState++;   
}

function dataAsk4(){
  loadJSON('data/john_4.json', gotData); 
  john1.hide();
  john2.hide();
  john3.hide();
  john4.hide();
  john5.hide(); 
  currentState++; 
}

function dataAsk5(){
  loadJSON('data/john_5.json', gotData);
  john1.hide();
  john2.hide();
  john3.hide();
  john4.hide();
  john5.hide();
  currentState++;  
}



function draw() {
    drawScene(currentState);
    // console.log(demonHp[1]);
 }

 function drawScene(whichScene) {
    switch(currentState){
  	case sceneState.INTRO:
  	image(In,0,0);
    break;

    case sceneState.CONTROL:
    image(Co,0,0);
    break;

    case sceneState.GAME:

    background(Color);
    Color -= 2;

    if(bomb < 0){
    	bomb = 0;
    } 
    if(bomb < 1){
    	boomP = 0;
    }else{
    	boomP = random(3,10);
    }


     god = createSprite(mouseX, height-60, 78, 75);
     god.addImage(s);

    drawSprites(demons);
    drawSprite(god);
    drawSprites(bullets);
    drawSprites(booms);


for (var j = 0; j < demons.length; j++) {
 for (var i = 0; i < bullets.length; i++) {
    if (demons[j].overlap(bullets[i])) {
      bullets[i].remove();
      demonHp[j] -= power;
      if(demonHp[j]<0){
          demons[j].remove();
          scores += 100;
      } 
    }
  }
}

for (var i = 0; i < booms.length; i++){
	if(god.overlap(booms[i])){
		bomb++;
		booms[i].remove();
	}
}


   

   fill(255);
   textSize(30);
   textAlign(CENTER);
   text('Bomb:'+ bomb, 500, 40);
   text('Score:'+ scores,60,40);
   text('Power:'+ power,width/2,40);
   break;

    case sceneState.SCORE:
    background(0);
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text('Game Over',width/2, height/2);
    text('Your Score: ' + scores,width/2, height/2+60);
    textSize(20);
    text('Refresh page for restart.', width/2,750);
    break; 
   }
}
 

 function setUpScene(whichScene) {
    switch (whichScene) {
    case sceneState.INTRO:
    break;

    case sceneState.GAME:
    break;

    case sceneState.SCORE:
    break;
  }
}


 function keyPressed(){
   if(keyCode === 13){
   	currentState++;
   	if(currentState>3){
   		currentState = 0;
   	}
   	createP('The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.');
   	createP('No one has seen God at any time. The one and only Son, who is in the bosom of the Father, he has declared him.')
   	createP('You worship that which you don’t know. We worship that which we know; for salvation is from the Jews.')
   }
  
	if(keyCode === 32){
		bomb -= 1;
		Color = 233;
for (var j = 0; j < demons.length; j++) {
		
		demonHp[j] -= boomP;
    }
  } 
}

function mousePressed(){
  bullet = createSprite(mouseX, height-60, 30, 30);
  bullet.addSpeed(10,-90);
  bullet.addImage(b);
  bullets.add(bullet);
}
	