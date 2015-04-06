function randomAlert() {
	alert("hi");
};

function displayTime() {
	var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
	
	var date = new Date();
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	
	currentTime = 'The current time is: ' + monthNames[monthIndex] + '-' + day + '-' + year + "     " + hour + ':' + minute + ':' + second;
	
	document.getElementById("time").innerHTML = currentTime;
};

displayTime();