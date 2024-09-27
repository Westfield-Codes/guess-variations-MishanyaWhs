/* Define a function called rollDice */
function rollDice(){
    // create a variable called roll, set it equal to random 1-6
    let roll = Math.floor(Math.random()*6+1);
    if (roll = 6) alert("6! you win");
    else alert("You rolled a " + roll);
  }
   