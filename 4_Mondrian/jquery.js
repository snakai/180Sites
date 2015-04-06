$(document).ready(function () {
	//$("[id^=box]").css('background','#194257');
	var mouseColor = 'red';
	
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
		$.each($("[id^=box]"), function(index, value) { 
			var randomColor = getRandomColor();
			$(this).css('background',randomColor);
			console.log(index + ' : ' + randomColor + ' : ' + value.id);
		});
	};
	
	$("[id^=box]").click(function() {
		var randomColor = getRandomColor();
		if (mouseColor != null) {
			$(this).css('background',mouseColor);
		}
		else {
		$(this).css('background',randomColor);
		}
	});
	
	$("#random").click(function() {
		colorTheBoxes();
	});
	
	$(".color").click(function() {
		if ($(this).attr('id') === 'random') {
			mouseColor = null;
		} else {
		mouseColor = $(this).attr('id');
		}
	});
	
	colorTheBoxes();
	

});