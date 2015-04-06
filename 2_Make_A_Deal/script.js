function doorClick(clicked_id) {
	var status = document.getElementById(clicked_id).getAttribute("text");
	var chosenDoor = document.getElementById(clicked_id).id;

	
	if (status === "closed") {
		document.getElementById('greendoor').setAttribute('text','opened');
		document.getElementById('orangedoor').setAttribute('text','opened');
		document.getElementById('bluedoor').setAttribute('text','opened');
		if (chosenDoor === 'orangedoor') {
			document.getElementById('bluedoor').innerHTML = '<img src="images/blue_door_fire.png"/>';
			document.getElementById('caption').innerHTML = 'I have opened the blue one for you and it held a <b>BAD</b> thing. </br> I will let you reconsider your option and let you open the GREEN door, if you decide.';
		} else {
			document.getElementById('orangedoor').innerHTML = '<img src="images/orange_door_fire.png"/>';
		}
	} else {
		if (chosenDoor === 'greendoor') {
			window.location.replace('you_win.html');
		}
		else {
			window.location.replace('you_lose.html');
		}
	}

	
};