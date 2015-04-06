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
	
	function moveCatterpillar(ball) {
		var e = e || window.event;
		var cursor = { x : 0, y : 0 };
		cursor.x = e.pageX;
		cursor.y = e.pageY;
		var delay = 1;
		
		var x = cursor.x + 40;
		var y = cursor.y + 20;
		
		ball.animate({ 'top' : y + 'px', 'left' : x + 'px'}, 3);
		
	};

	$.each($(".ball"),function() {
			var color = getRandomColor();
			var size = getRandom(20,100);
			var margin = getRandom(-20,10);
			
			$(this).css('height', size);
			$(this).css('width', size);
			$(this).css('background', color);			
			$(this).css('margin-top', margin);
			$(this).css('margin-left', margin);
			$(this).css('margin-right', margin);
			$(this).css('margin-bottom', margin);
			
		});
		
	
	$('#wrap').mousemove( function() {
		
		$.each($(".ball"), function() {
			moveCatterpillar($(this));
		});
	});	
});
	
