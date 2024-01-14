/************************************************************************/
/************************ ACTIVATING STRICT MODE ************************/
/************************************************************************/
"use strict";

/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  // intentionally making an error here to check if we get an error in console with and without strict mode
  // we do not get an error in sloppy mode - we do get an error in strict mode.
  // in sloppy mode, without console telling us about this error, it would have been hard to find this bug.
  // hasDriverLicense = true; // error
  hasDriversLicense = true; // fixed
}

if (hasDriversLicense) console.log(`I can drive :D`);

// 'use strict' introduces a shortlist of variable names to us that are reserved for features that might be added to the language a bit later.
// so, if we use them now, it might not be a problem but, after those features are released, they might break our code.
// so, use strict keeps us in check, in relation to bugs, in advance.

// const interface = "audio"; // we get an error here because 'interface' might later become an reserved keyword in JS.

// There are other changes that strict mode brings on with funcitons and objects that we haven't learned about but, will be mentioned when we learn about those concepts.
 */

/***********************************************************************/
/****************************** FUNCTIONS ******************************/
/***********************************************************************/
/* 
function logger() {
  console.log(`My name is Bhoami.`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // parameters
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); // arguments
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

// we can now re-use the function with different input values to get different outputs
const appleOrangeJuice = fruitProcessor(3, 6);
console.log(appleOrangeJuice);
 */
/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 01 **********************/
/************************************************************************/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descIndia = describeCountry(`India`, 1428, `New Delhi`);
const descFinland = describeCountry(`Finland`, 6, `Helsinki`);
const descPortugal = describeCountry(`Portugal`, 10, "Lisbon");

console.log(descIndia, descFinland, descPortugal);

/***********************************************************************/
/**************** FUNCTION DECLARATIONS VS. EXPRESSIONS ****************/
/***********************************************************************/
/* 
const now = 2037;

// able to call function declaration before defining
console.log(calcAge1(1995));

// function declaration
function calcAge1(birthYear) {
  return now - birthYear;
}

const age1 = calcAge1(1991);

// cannot call function expression before defining
// console.log(calcAge2(1995)); // error

// function expression
const calcAge2 = function (birthYear) {
  return now - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 02 **********************/
/************************************************************************/

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percIndia1 = percentageOfWorld1(1428);
const percUSA1 = percentageOfWorld1(332);
const percPortugal1 = percentageOfWorld1(10);

console.log(percIndia1, percUSA1, percPortugal1);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const percIndia2 = percentageOfWorld2(1428);
const percUSA2 = percentageOfWorld2(332);
const percPortugal2 = percentageOfWorld2(10);

console.log(percIndia2, percUSA2, percPortugal2);

/***********************************************************************/
/*************************** ARROW FUNCTIONS ***************************/
/***********************************************************************/
/* 
// implicit return of value
// one parameter; one line of code
const calcAge3 = (birthYear) => 2037 - birthYear;

// calling an arrow function
const age3 = calcAge3(1995);
console.log(age3); // 42

// Example: more than one line of code, more than one parameters
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1995, `Bhoami`)); // 19
console.log(yearsUntilRetirement(1991, `Jonas`)); // 19
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 03 **********************/
/************************************************************************/

const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

const percIndia3 = percentageOfWorld3(1428);
const percUSA3 = percentageOfWorld3(332);
const percPortugal3 = percentageOfWorld3(10);

console.log(percIndia3, percUSA3, percPortugal3);

/***********************************************************************/
/****************** FUNCTIONS CALLING OTHER FUNCTIONS ******************/
/***********************************************************************/
/* 
const cutFruitPieces = function (fruit) {
  return fruit * 6;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 04 **********************/
/************************************************************************/

const describePopulation = function (country, population) {
  return `${country} has about ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};

console.log(describePopulation("India", 1428));
console.log(describePopulation("USA", 332));
console.log(describePopulation("Portugal", 10));

/***********************************************************************/
/************************* REVIEWING FUNCTIONS *************************/
/***********************************************************************/
/* 
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
    console.log(
      `This will not get printed because it is after the return statement. The return statement would have already exited the function after returning the value.`
    );
  } else {
    console.log(`${firstName} has already retired! 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1995, `Bhoami`));
console.log(yearsUntilRetirement(1970, `Mike`));
 */

/***********************************************************************/
/************************* CODING CHALLENGE 01 *************************/
/***********************************************************************/

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No Winner`);
  }
};

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
