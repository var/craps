var huMoney = null;

var uMoney;

var betAmount = 0;

var tempUMoney;

var newUMoney;

var betAgain = 0;

var startover = 0;



function initialMoney() {

	huMoney = document.getElementById("userMoney").value;

	if (huMoney == 0 || huMoney == null)
	{
		document.getElementById("notice").innerHTML = "Please enter a value more than 0";
	}
	else if (huMoney > 0){
		// show a loading effect
    	document.getElementById("loader").style.visibility = "visible";
    	load(3000);

		// assigning the value that the user has entered
    	document.getElementById("hUserMoney").value = huMoney;

		// removing the money panel
    	var mp = document.getElementById("money-panel");
		mp.parentNode.removeChild(mp);

    	document.getElementById("rollButton").disabled = true; // disable the roll button until the bet valuse has been updated
    	document.getElementById("notice").innerHTML = "Update your bet money so that you can start playing."; // change the notice accordingly
	}
	else{
		document.getElementById("notice").innerHTML = "Please enter a vaild amount";
	}
	

}

function bet() {

	// temporary variables until parseFloat
    var tempumoney = null;
     tempumoney = document.getElementById("hUserMoney").value; 
    var tempbetamount = null;
     tempbetamount = document.getElementById("userBet").value;

    // assign to variables after parseFloat
    uMoney = parseFloat(tempumoney);
    betAmount = parseFloat(tempbetamount);
    
	// check for conditions
	if (tempbetamount == 0 || tempbetamount == null)
	{
		document.getElementById("notice").innerHTML = "Please enter a value greater than 0.";
        document.getElementById("betButton").disabled = false;
	}
	else if (betAmount > uMoney)
	{
		document.getElementById("notice").innerHTML = "Sorry, you cannot bet more than what you have.";
        document.getElementById("betButton").disabled = false;
	}
	else if (betAmount > 0)
	{
    	// do calculation to the change the total amount
    	tempUMoney = uMoney - betAmount;
    
    	document.getElementById("betButton").disabled = true; // disable the bet button as the user won't have anything to do after

		document.getElementById("userBet").disabled = true; // disable the bet form field so that the user doesn't change later
        document.getElementById("hUserMoney").value = tempUMoney; // get the user's total money after bet 
        document.getElementById("rollButton").disabled = false; // enable the roll button so that the user can start rolling
        document.getElementById("notice").innerHTML = "So, start rolling the dice to play."; // change the notice accordingly

        if (betAgain == 1) {

			// check if the user is betting again
            playAgain(); 
            betAgain = 0;

        }
	}
    else 
    {
		document.getElementById("notice").innerHTML = "Please enter a vaild amount to bet.";
        document.getElementById("betButton").disabled = false;
    }

}



function finalMoney(x) {

	// function to calculate the money after the user either wins or loses
    if (x == 1) {

        newUMoney = uMoney + betAmount;
        document.getElementById("hUserMoney").value = newUMoney; // update the value if wins

    }

    else if (x == 0) {

        newUMoney = uMoney - betAmount;
        document.getElementById("hUserMoney").value = newUMoney; // update the value if loses

        if (newUMoney == 0) {

			// check if the user has lost all his money
            document.getElementById("replay").innerHTML = "Start Over";
            document.getElementById("notice").innerHTML = "I'm sorry, you lost all your money, please start over.";

            startover = 1;

        }

    }

}



function advPlayAgain() {


    if (startover == 1) {

        startover = 0;
        gotoplay();

    }

    else {


        document.getElementById("notice").innerHTML = "Please update your bet again.";
        document.getElementById("userBet").disabled = false;
        document.getElementById("betButton").disabled = false;
        document.getElementById("rollButton").disabled = true;
        document.getElementById("rollButton").innerHTML = "Update bet";
        document.getElementById("replay").style.visibility = "hidden";

        betAgain = 1;

    }

}
