/* Define a function called rollDice */
function rollDice(){
    // create a variable called roll, set it equal to random 1-6
    let roll = Math.floor(Math.random()*6+1);
    if (roll = 6) alert("6! you win");
    else alert("You rolled a " + roll);
  }

  /* Simple Guess Program */

// define function guessGame
function guessGame(){


  // generate a random integer 1-100
    var answer = Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
    alert(answer);
  // create guess and set equal to 0 
    let guess = 0
  // loop while guess is not equal to answer
    while (guess != answer) {
    // set guess equal to asking user to "Guess a number, 1-100"
    guess = prompt()
    // if guess equals answer display "Correct!" 
    if (guess == answer) alert("Correct"); 
    // or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("Too high");
    // or if guess is less than answer display "Too low!" 
    else if (guess < answer) alert("Too low");
    // else say "Bad input"
    else alert("Bad input");
  // end the loop
    }
// end the function
}
   



/* Simple Guess Program */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
    var answer = Math.floor(Math.random()*100+1);
  // create guess and set equal to 0 
    let guess = 0
  // loop while guess is not equal to answer or to "q"
    while (guess != answer && guess != "q"){
    // set guess equal to asking user to "Guess a number, 1-100"
    guess = prompt("guess a number");
    // if guess equals "q" display "Quitter!"
    if (guess == "q") alert("Quitter!");
    // or if guess equals answer display "Correct!" 
    else if (guess == answer) alert("Correct");
    // or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
    else if (guess < answer) alert("Too low!");
    // or say "Bad input"
    else alert("Bad inut");
  // end the loop
    }
// end the function
  }


  /* Guess Game Program by [Mykhailo]
 * Adds the ability to play again. 
 */

/* newGame is an outer loop giving the user an option 
 * to play again, using a boolean variable called again.
 */

// define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
  let again = true;
  // loop as long as again is true 
  while (again) {
    // run the guessGame function 
    guessGame();
    // ask to play again with again set to a confirm
    again = confirm("Whould you like to play again?");
    // close the loop
  }
  // thank the player for playing
  if ( guess = answer) alert("Thank you for playing!")
  // close the function
}

  
// create a function called guessGame 
  function guessGame(){
  // create guess and set equal to 0 
    let guess = 0
  // create tries and set equal to 0 
    let tries = 0
  // create variable answer and generate a random integer 1-100
    var answer = Math.floor(Math.random()*100+1);
  // loop while guess is not equal to answer
    while (guess != answer);{
    // set guess equal to asking user to "Guess a number, 1-100"
    guess = prompt("Guess a number, 1-100");
    // add one to tries
    tries++;
    // if guess equals answer display "Correct in [tries] tries!" 
    if (guess == answer) alert("Correct in " + tries + " tries!");
    // or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
    else if (guess < answer) alert("Too low!");
    // if it's none of those, say "Bad Input!"
    else alert("Bad input");
    // end the loop
    }
  // end the function
  }



  // define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
  let again = true;
  // run the guessGame function
  guessGame();
  // loop as long as again is true 
  while (again) {
    // ask to play again with again set to a confirm
    again = confirm("Would you like to play again?");
    // if again is true run the guessGame function
    if (again = true) {
      guessGame();
    }
    // close the loop
  }
  // thank the player for playing
  alert("Thank you for playing");
  // close the function
}

// create a function called guessGame
function guessGame(){
  // create guess and set equal to 0 
  let guess = 0
  // create tries and set equal to 0 
  let tries = 0
  // create variable answer and generate a random integer 1-100
  var answer = math.floor(Math.random()*100+1);
  // loop while guess is not equal to answer
  while (guess != answer) {
    // set guess equal to asking user to "Guess a number, 1-100"
    let guess = prompt("Guess a number, 1-100");
    // add one to tries
    tries++
    // if guess equals answer display "Correct in [tries] tries!" 
    if (guess == answer) alert("Correct in "+ tries + "tries!");
    // or if guess is "q" break the loop
    else if (guess = "q") break;
    // or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
    else if (guess < answer) alert("Too low!");
    // if it's none of those, say "Bad Input!"
    else alert("Bad input");
    // end the loop
  }
  // end the function
}