var die1;
var die2;
var sum;
var point;
var rollCount = 0;
var againRoll = 0;
var checkWinResult;
var checkLoseResult;
var winCount = 0;
var loseCount = 0;

function roll() {

	rollCount++; // roll count to know if it is the first time rolling of dice or not
	
	// rolling the 2 dice by using a for loop
    for (i = 1; i <= 2; i++) {

        var rollValue = Math.floor((Math.random() * 6) + 1);
        if (i == 1) {
            die1 = rollValue;
        }
        else if (i == 2) {
            die2 = rollValue;
        }
    }

	// assigning the values to print on the html page

    document.getElementById("hDie1").innerHTML = showDice(die1);
    document.getElementById("hDie2").innerHTML = showDice(die2);
    document.getElementById("hRollCount").innerHTML = rollCount;
    document.getElementById("hSum").value = die1 + die2;

	// returning the sum so that it can be used in the crap() function
    return die1 + die2;
}

// a function to check if the sum makes the user lose the game.
function checkLose(x) {

    if (rollCount == 1 && (x == 2 || x == 3 || x == 12)){
    	return true; // return true if the user has lost in 1st roll
    }
    else if (x == 7) {
        return true; // return true if the user has lost while trying to reach the point
    }
}

// a function to check if the sum makes the user win the game.
function checkWin(y) {

    if (rollCount == 1 && (y == 7 || y == 11)) {
    	return true; // return true if the user has won in 1st roll
    }
}

// a function to show the user has won the game
function won() {
    againRoll = 3;
    document.getElementById("notice").innerHTML = "You won the game."; // set the notice to won game
    document.getElementById("rollButton").disabled = true; // disable the roll button
    document.getElementById("rollButton").innerHTML = "You won!"; // change the text of the roll button
    document.getElementById("replay").style.visibility = "visible"; // show the replay button

    winCount++;
    document.getElementById("tWon").innerHTML = winCount;

    finalMoney(1);
    
}

// a function to show the user has lost the game
function lost() {

	document.getElementById("notice").innerHTML = "I'm sorry, you lost the game."; // set the notice to lost game
	document.getElementById("rollButton").disabled = true; // disable the roll button
    document.getElementById("rollButton").innerHTML = "You lost :("; // change the text of the roll button
    document.getElementById("replay").style.visibility = "visible"; // show the replay button

	loseCount++;
	document.getElementById("tLost").innerHTML = loseCount;
	
    finalMoney(0);
	    
    againRoll = 3;
}

// a function to roll again if the users reaches a point
function rollAgain() {
    sum = roll();

    if (sum == 7) {
        lost(); // the user loses the game if they roll 7 before reach their point
    }
    else if (point == sum) {
        won(); // user wins if they reach their point 
    }
}

// the main funtion which initiates the game, make decisions and more
function crap() {

    if (againRoll === 0) {
    
        sum = roll(); // roll the dice for the first time

        // check if the winner has won or lost
        checkWinResult = checkWin(sum);        
        checkLoseResult = checkLose(sum);


        if (checkWinResult === true) {
            won(); // tells the user that they have won the game
        }
        else if (checkLoseResult === true) {
            lost(); // tells the user that they have lost the game
        }
        else {

        	// to indicate the user has reached a point and they need to roll again
        	
            point = sum;
			document.getElementById("showPoint").innerHTML = "Point:"; // show the point field
            document.getElementById("hPoint").value = point; // assign the point value
            document.getElementById("notice").innerHTML = "You have reached a point, keep on rolling until you reach " + point + "."; // update the notice
            document.getElementById("rollButton").innerHTML = "Roll Again"; // change the text of the roll button
            
            againRoll = 1;
        }   
    }

    // if the user is coming back to roll again
    else if (againRoll == 1) {
        rollAgain();
    }
}

function playAgain(){

	againRoll = 0;

	document.getElementById("rollButton").innerHTML = "Roll the Dice!"; // Change of the text of the main button
	
	point = null; 
	document.getElementById("showPoint").innerHTML = ""; // show the point field	
	document.getElementById("hPoint").value = point; // assign the point value

	rollCount = 0;
	document.getElementById("hRollCount").innerHTML = rollCount; // assign the roll count

	document.getElementById("hDie1").innerHTML = "<img src=\"res/i/blank.png\" align=\"middle\" />"; // show blank images before rolling
	document.getElementById("hDie2").innerHTML = "<img src=\"res/i/blank.png\" align=\"middle\" />"; // shwo blank images before rolling

	sum = null;
	document.getElementById("hSum").value = sum; // assign sum	
	
	document.getElementById("notice").innerHTML = "So, roll the dice to start playing!"; // change the notice text
	document.getElementById("rollButton").disabled = false; // disable the roll button
    document.getElementById("rollButton").innerHTML = "Roll the Dice!"; // change the text of the roll button
    document.getElementById("replay").style.visibility = "hidden"; // hide the replay button
	
}
