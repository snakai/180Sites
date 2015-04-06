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
	
	function colorTheBoxes() {
		$.each($("[class^=box]"), function(index, value) { 
			var randomColor = getRandomColor();
			$(this).css('background',randomColor);
		});
	};
	
	$('.box').click(function() {
		var animations = [ 'crawl', 'dangle', 'jump' , 'stretch', 'flip'];
		var ani = animations[Math.floor(Math.random() * 5)];
		
		$(this).addClass(ani);
		
		setTimeout(function () {
			$(this).removeClass(ani);
		}, 4000);
		
	});
	
	$('.box').mouseenter(function() {
		$(this).css('box-shadow', '0 0 8px #fff');
		$(this).css('color', 'red');
	});
	
	$('.box').mouseleave( function() {
		$(this).css('box-shadow', 'none');
	});
	
	colorTheBoxes();
	
	
});