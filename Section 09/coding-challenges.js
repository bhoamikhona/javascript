'use strict';

/***********************************************************************/
/************************* CODING CHALLENGE 01 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 01 *************************/`
);

/**
 * We are building a football betting app. Suppose we get data from a web
 * service about a certain game (given below). In this challenge we are
 * going to work with that data.
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/**
 * TODO 01:
 *
 * Create one player array for each team (variables 'players1' and
 * 'players2')
 */

// my solution:
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];

// actual solution:
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

/**
 * TODO 02:
 *
 * The first player in any player array is the goalkeeper and the others
 * are field players. For Bayern Munich (team 1) create one variable
 * ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with
 * all the remaining 10 field players.
 */

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

/**
 * TODO 03:
 *
 * Create an array 'allPlayers' containing all players of both teams
 * (22 players).
 */

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

/**
 * TODO 04:
 *
 * During the game, Bayern Munich (team 1) used 3 substitute players. So
 * create a new array ('players1Final') containing all the original team1
 * players plus 'Thiago', 'Coutinho', and 'Perisic'
 */

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

/**
 * TODO 05:
 *
 * Based on the game.odds object, create one variable for each odd (called
 * 'team1', 'draw', and 'team2').
 */

// my solution:
// const { team1, x: draw, team2 } = game.odds;

// actual solution:
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

/**
 * TODO 06:
 *
 * Write a function ('printGoals') that receives an arbitrary number of
 * player names (not an array) and prints each of them to the console,
 * along with the number of goals that were scored in total (number of
 * player names passed in).
 *
 * TEST DATA: First, use players 'Davies', 'Muller', 'Lewandowski', and
 * 'Kimmich'. Then call the function again with players from `game.scored`
 */

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }

  console.log(`Total number of goals: ${players.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

/**
 * TODO 07:
 *
 * The team with the lower odd is more likely to win. Print to the console
 * which team is more likely to win, without using an if/else statement
 * or the ternary operator.
 */

team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 2 is more likely to win`);

/***********************************************************************/
/************************* CODING CHALLENGE 02 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 02 *************************/`
);

/**
 * Let's continue with our fooball betting app! Keep using the 'game'
 * variable from before.
 */

/**
 * TODO 01:
 *
 * Loop over the game.scored array and print each player name to the
 * console, along with the goal number (Example: "Goal 1: Lewandowski")
 */

for (const [index, value] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1}: ${value}`);
}

/**
 * TODO 02:
 *
 * Use a loop to calculate the average odd and log it to the console (We
 * already studies how to calculate averages, you can go check if you
 * don't remember)
 */

// My Solution:
// let avgOdd = 0;

// for (const odd of Object.values(game.odds)) {
//   avgOdd += odd;
// }

// avgOdd /= 3;
// console.log(avgOdd);

// Actual Solution:
let odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

/**
 * TODO 03: Print the 3 odds to the console, but in a nice formatted way,
 * exactly like this:
 *    Odd of victory Bayern Munich: 1.33
 *    Odd of draw: 3.25
 *    Odd of victory Borrussia Dortmund: 6.5
 *
 * Get the team names directly from the game object, don't hardcode them
 * (except for "draw").
 *
 * HINT: Note how the odds and the game objects have the same property
 * names 😉
 */

// My Solution:
// console.log(Object.keys(game.odds));

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`Odd of victory ${team}: ${odd} `);
// }

// Actual Solution:
for (const [team, odd] of Object.entries(game.odds)) {
  let teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

/**
 * TODO 04:
 *
 * BONUS: Create an object called 'scorers' which contains the names of
 * the players who scored as properties, and the number of goals as the
 * value. In this game, it will look like this:
 *    {
 *      Gnarby: 1,
 *      Hummels: 1,
 *      Lewandowski: 2
 *    }
 */

const scorers = {};

// My Solution:
// for (const player of game.scored) {
//   if (scorers[player]) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }

// Actual Solution:
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

/***********************************************************************/
/************************* CODING CHALLENGE 03 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 03 *************************/`
);

/**
 * Let's continue with our football betting app! This time, we have a map
 * called 'gameEvents' given below, with a log of the events that happened
 * during the game. The values are the events themselves, and the keys are
 * the minutes in which each event happened (a football game has 90
 * minutes plus some extra time).
 */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

/**
 * TODO 01:
 *
 * Create an array 'events' of the different game events that happened (no
 * duplicates).
 */

const events = [];
console.log([...new Set(gameEvents.values())]);

/**
 * TODO 02:
 *
 * After the game has finished, it was found that the yellow card from
 * minute 64 was unfair. So, remove this event from the game events log.
 */

gameEvents.delete(64);
console.log(gameEvents);

/**
 * TODO 03:
 *
 * Compute and log the following string to the console: "An event
 * happened, on average, every 9 minutes" (keep in mind that a game has
 * 90 minutes).
 */

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// The pop() function removes the last element of the array and return
// its value to us so, we are using it to our advantage here.
// Also, this time part is a BONUS
time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

/**
 * TODO 04:
 *
 * Loop over 'gameEvents' and log each element to the console, marking
 * whether it is in the first half or the second half (after 45 min) of
 * the game, like this:
 *
 * [FIRST HALF] 17: ⚽ GOAL
 */

for (const [min, event] of gameEvents) {
  const gameHalf = min < 45 ? 'FIRST' : 'SECOND';
  console.log(`[${gameHalf} HALF]: ${event}`);
}

/***********************************************************************/
/************************* CODING CHALLENGE 04 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 04 *************************/`
);

/**
 * Write a program that receives a list of variable names written in
 * underscore_case and convert them to camelCase.
 *
 * The input will come from a textarea inserted into the DOM (see code
 * below to insert the elements), and conversion will happen when the
 * button is pressed.
 *
 * Test Data: (pasted to text area, including spaces):
 * underscore_case
 *  first_name
 * Some_Variable
 *  calculate_AGE
 * delayed_departure
 *
 * Output: (5 separate console.log outputs):
 * underscoreCase      ✅
 * firstName           ✅✅
 * someVariable        ✅✅✅
 * calculateAge        ✅✅✅✅
 * delayedDeparture    ✅✅✅✅✅
 *
 * Hints:
 * 1) Remember which character defines a new line in the text area. 😉
 * 2) The solution only needs to work for a variable made out of 2 words,
 * like a_b.
 * 3) Start without worrying about the ✅. Tackle that only after you have
 * the variable name conversion working. 😉
 * 4) This challenge is difficult on purpose, so start watching the
 * solution in case you're stuck. Then pause and continue!
 *
 * Afterwards, test with your own test data!
 */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// my solution:
// const camelCase = function (str) {
//   str = str.toLowerCase().trim();

//   const capitalLetter = str.slice(str.indexOf('_') + 1)[0].toUpperCase();

//   return (
//     str.slice(0, str.indexOf('_')) +
//     capitalLetter +
//     str.slice(str.indexOf('_') + 2)
//   );
// };

// actual solution:
// convert to capital case
const capitalCase = function (word) {
  word = word.toLowerCase();
  return word[0].toUpperCase() + word.slice(1);
};

// convert to camel case
const camelCase = function (variableName) {
  variableName = variableName.trim();
  const [firstWord, secondWord] = variableName.split('_');
  return firstWord.toLowerCase() + capitalCase(secondWord);
};

// Testing
console.log(camelCase(`underscore_case`));
console.log(camelCase(` first_name`));
console.log(camelCase(`Some_Variable`));
console.log(camelCase(` calculate_AGE`));
console.log(camelCase(`delayed_departure`));

// button click event
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    console.log(camelCase(row).padEnd(20) + '✅'.repeat(i + 1));
  }
});

/**
TEST DATA:

underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure
 */
