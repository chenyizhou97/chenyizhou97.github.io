var allRecipes= [];	// used to store all the breeds data from the API request
var recipeSelectElement; // gives the user an option to select a breed
var buttonElement; // gives the user a button to press after selecting the breed 
var linkElement;	// the reference to the image element we'll be using to show the doggo
var foodTyped; // variable storing the string to the currently selected breed

function setup() {
  noCanvas();

  loadJSON('https://github.com/sinker/tacofancy', gotAllrecipes);

  createElement('h1', 'Here is the Taco wiki');
  createElement('h3', 'Try to find out the Taco you want to make and see how to make it!');

  buttonElement = createButton('Delicious!');
  buttonElement.mousePressed(onButtonPressed);
  var recipeSelectElement=createInput('');
  inp.input(recipeSelectElement	);


}

function gotAllrecipes(data) {
	allRecipes = Object.value(data.message);
	for (var i = 0; i < allRecipes.length; i++) {
		recipeSelectElement.option(allRecipes[i]);
	}
	selectedrecipe = recipeSelectElement.value();
	recipeSelectElement.changed(searchEvent);
}
	
// callback for changing the select element, on line 46
function searchEvent() {
	selectedrecipe = recipeSelectElement.value();
	console.log(selectedrecipe);
}

// http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 
function onButtonPressed() {
	loadJSON('https://www.recipepuppy.com/api/?q=' + selectedrecipe + '&p=1', onGotRecipes);
}

// callback for line 58, when the API request is completed, display the new image and delete the old one.
function onGotRecipes(data) {
	imgElement.remove();
	imgElement = createImg(data.message);
}