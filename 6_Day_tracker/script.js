function getCurrentDay() {
	var dayNames = [
		"Sunday", "Monday", "Tuesday", "Wednesday", 
		"Thursday", "Friday", "Saturday"
    ];
	
	var date = new Date();
	var day = date.getDay();
	var today = dayNames[day];
	return today;
}

function doSomething() {
	
	var today = getCurrentDay();
	today = today.toString();
	today = today.toLowerCase();
	
	var ele = document.getElementById(today);
	ele.style.height = '400px';
	ele.style.background = 'yellow';
	ele.style.border = '0px';
	
	switch (ele.id) {
		case 'sunday':
			document.getElementById('daybar').innerHTML = "SUNDAY FUNDAY!"
			break;
		case 'monday':
			document.getElementById('daybar').innerHTML = "BACK TO WORK..."
			break;
		case 'tueday':
			document.getElementById('daybar').innerHTML = "TODAY IS TUESDAY"
			break;
		case 'wednesday':
			document.getElementById('daybar').innerHTML = "HUMPDAY WEDNESDAY"
			break;
		case 'thursday':
			document.getElementById('daybar').innerHTML = "THIRSTY THURSDAY"
			break;
		case 'friday':
			document.getElementById('daybar').innerHTML = "FRIDAY WEEKEND!"
			break;
		case 'saturday':
			document.getElementById('daybar').innerHTML = "SATURDAYYYY!!!"
			break;
		default :
			document.getElementById('daybar').innerHTML = "?? something went wrong??"
			break;
	}
	
}

doSomething();
