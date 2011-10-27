function loadImg(){
	document.getElementById("loader").style.visibility = "hidden"; 
	document.getElementById("description").style.visibility = "visible";
	document.getElementById("button-panel").style.visibility = "visible";
	document.getElementById("stats").style.visibility = "visible";
}

function load(x){
	var l = setTimeout("loadImg()", x);
	
}

// simple and handy function to send the user to play.html
function gotoplay(){
	return window.location = "play.html";
}

function showDice(x){

	return "<img src=\"res/i/dice_"+x+".png\" align=\"middle\" />";
}
