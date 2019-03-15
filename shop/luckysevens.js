
/*
Name: Daniel Clarke
Date Created: 03/014/2019
Most recent revision: 03/14/2019

JavaScript backbone used to control the outcome of the Luky Seven's game
*/

/*initializing variables*/

var die,die1,die2, roll, count, maxCount, maxFunds, bank, temp;

/*Declaring variables*/
roll = die + die;
count = 0;
bank = 0;
temp = 0;
maxFunds = 0;
maxCount = 0;

/*Below are a list of three functions which
  1. creates a virtual six sided die
  2. clears any error if error exist
  3. checks for errors then proceeds to simulation if no errors
*/

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["lucky"].elements.length;
        loopCounter++) {
        if (document.forms["lucky"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["lucky"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function validateItems() {
    clearErrors();
    var funds = document.forms["lucky"]["funds"].value;
    if (funds <= "0" || isNaN(funds)) {
        alert("Bet must be greater than $0.");
        document.forms["lucky"]["funds"]
           .parentElement.className = "form-group has-error";
        document.forms["lucky"]["funds"].focus();
        return false;
    }

    maxFunds = funds
    bank = funds;

/* loop to automate the virtual rolling of die*/
    while (funds > 0) {
      count++;
      die1 = rollDice();
      die2 = rollDice();
      roll = die1 + die2;

      if (roll =="7") {
        funds +=4;
      }
      else {
        funds -=1;
      }

      if(funds > maxFunds){
        maxFunds = funds;
        maxCount = count;
      }
    }


/*gathers data from variables for html to call upon*/
   document.getElementById("results").style.display = "block";
   document.getElementById("money").innerText = bank;
   document.getElementById("totRolls").innerText = count;
   document.getElementById("winnings").innerText = maxFunds;
   document.getElementById("rollWin").innerText = maxCount;
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;


}
