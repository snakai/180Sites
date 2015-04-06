$(document).ready( function() {
	
	function currentTime() {
		var rightNow = new Date();
		var hour = rightNow.getHours();
		var minute = rightNow.getMinutes();
		var second = rightNow.getSeconds();
		
		hour = formatTime(hour);
		minute = formatTime(minute);
		second = formatTime(second);
		
		return [hour, minute, second];
	}
	
	function formatTime(t) {
		if (t < 10) {
			return (t = '0' + t);
		}
		else {
			return t;
		}
	}
	
	function formatColor(c) {
		if (c.length < 2) {
			return (c = '0' + c);
		}
		else {
			return c;
		}
	}
	
	function getColor(h, m, s) {
		var r = Math.round(255 * (h / 23)).toString(16);
		var g = Math.round(255 * (m / 59)).toString(16);
		var b = Math.round(255 * (s / 59)).toString(16);
		
		return (r + g + b ).toUpperCase();		
	}
	
	function setContents() {
		var t = currentTime();
		var c = getColor(t[0], t[1], t[2]);
		
		t = t[0] + ':' + t[1] + ':' + t[2];
		
		$("#time").text(t);
		$("#wrap").css("background-color", '#' + c);
		$("#color").text(c);
		
		setTimeout(function() {
		setContents();
		}, 500);
		
	}
	
	setContents();
	
});


