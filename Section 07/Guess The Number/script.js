'use strict';

/*
// Selecting HTML elements in Javascript and getting its content
console.log(document.querySelector(".message").textContent);

// Selecting HTML elements in Javascript and setting its content
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

// Getting and Setting the input field value
console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

// Handling the click of a button (In this case, the "Check!" button)

document.querySelector(".clcik");
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // These are inline styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/***********************************************************************/
/************************* CODING CHALLENGE 01 *************************/
/***********************************************************************/

/**
 * Implement the game's resent functionality, so that the player can make
 * a new guess! Here is how:
 *
 * 1. Select the element with the 'again' class and attach a click event
 * handler.
 *
 * 2. In the handler function, restore initial values of the score and
 * number variables.
 *
 * 3. Restore the initial conditions of the message, number, score, and
 * guess input field.
 *
 * 4. Also, restore the original background color (#222) and number width
 * (15rem).
 */

// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(".message").textContent = "Start Guessing...";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";

//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

/***********************************************************************/
