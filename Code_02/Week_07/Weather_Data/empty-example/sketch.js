
var weather;

function setup() {
 createCanvas(600,400);
 loadJSON('http://api.wunderground.com/api/3e880f4563c3edaa/conditions/q/CA/San_Francisco.json',gotData)；
    
}

function gotData(data){
	weahter = data;
}


function draw() {
background(50);
  if(weather){
  	noStroke();
  	 text(weather.current_observation.display_location.full,100,50); 
     text(weather.current_observation.observation_time,100,100);
     text('Current Temperature is'+ weather.current_observation.temp_f +'F' ,50, 200);
     rect(0,230,weather.current_observation.temp_f,30);

  }
}