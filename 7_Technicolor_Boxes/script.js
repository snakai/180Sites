$(document).ready( function() {
	
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

	$('.square').mouseover(function () {
		randomColor = getRandomColor();
		$(this).css('background',randomColor);
	});
	
	
});

