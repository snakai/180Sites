function getRandom(min, max) {
	var random = Math.random() * (max - min) + min;
	var fixedRandom = Math.floor(random);
	return fixedRandom;
};

function getRandomColor() {
	
	var r = getRandom(10,99);
	var g = getRandom(10,99);
	var b = getRandom(10,99);
	var color = ('#' + r + g + b);	
	return color;
};

function changeBGColor() {
	
	var randomColor = getRandomColor();
	
	document.body.style.backgroundColor = randomColor;
	
};

function changeButtonColor() {
	
	var randomColor = getRandomColor();
	
	document.getElementById('clicky').style.backgroundColor = randomColor;
	
};

function changeFontColor() {
	
	var randomColor = getRandomColor();
	
	document.getElementById('clicky').style.color = randomColor;
	
};