/***********************************************************************/
/**************************** HELLO, WORLD! ****************************/
/***********************************************************************/
/* 
alert(`Hello, World!`);

let js = `amazing`;
if (js === `amazing`) alert(`JS is fun!`);

js = `boring`;
if (js === `amazing`) alert(`JS is fun!`);

40 + 8 + 23 - 10;
 */

/***********************************************************************/
/********************** LINKING A JAVASCRIPT FILE **********************/
/***********************************************************************/
/* 
let js = `amazing`;
if ((js = `amazing`));
alert(`JS is fun`);

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
 */

/************************************************************************/
/************************* VALUES AND VARIABLES *************************/
/************************************************************************/
/* 
console.log(`Bhoami`);
console.log(23);

// declaring a variable
let firstName = `Bhoami`; // camel case - standard in JS

// can re-use variables multiple times
console.log(firstName);
console.log(firstName);
console.log(firstName);

// snake case
let bhoami_khona = "BK";

// cannot use keywords as variables but, if you want to, may want to add $ or _ in front of it
let $function = 23;
let _new = "bhoami";

// constants are written in all caps
let PI = 3.14;

// descriptive variable names - always use this
let myFirstJob = "Programmer";
let myCurrentJob = "Web Developer";

// vs. non descriptive
let job1 = "Programmer";
let job2 = "Web Developer";
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 01 **********************/
/************************************************************************/

const country = "India";
const continent = "Asia";
let population = 1428;

console.log(country, continent, population);

/************************************************************************/
/****************************** DATA TYPES ******************************/
/************************************************************************/
/* 
// boolean
true;
console.log(true);

let javascriptIsFun = true; // declaring a variable
console.log(javascriptIsFun);

console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof `Bhoami`); // string

// dynamic typing in action
javascriptIsFun = `YES!`; // re-assigning a variable
console.log(typeof javascriptIsFun); // string

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(year);
console.log(typeof year);

// error in `typeof` operator
// JS says that the type of null is an object - this is an error
// null is similar to undefined so it should behave like undefined but, it
// does not. This error hasn't been fixed due to legacy reasons.
// Null is not an object
console.log(typeof null);
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 02 **********************/
/************************************************************************/

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/***********************************************************************/
/************************* LET, CONST, AND VAR *************************/
/***********************************************************************/
/* 
// can re-assign variables with `let`
let age = 30;
age = 31;

// value in a `const` variable cannot be changed
const birthYear = 1995;
// birthYear = 1991; // error

// cannot declare empty variables using `const`
// const job; // error

// var
var job = `programmer`;
job = `teacher`;
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 03 **********************/
/************************************************************************/

language = `Hindi`;
// continent = `Europe`; // error

/***********************************************************************/
/*************************** BASIC OPERATORS ***************************/
/***********************************************************************/
/* 
// Arithmetic Operators
const now = 2037;

const ageBhoami = now - 1995;
console.log(ageBhoami); // 42

const ageJonas = now - 1991;
console.log(ageJonas); // 46

// 2 ** 3 means 2 to the power of 3 i.e. 2 ** 3 = 2 * 2 * 2
console.log(ageBhoami * 2, ageBhoami / 10, 2 ** 3); // 84, 4.2, 8

const firstName = `Bhoami`;
const lastName = `Khona`;
console.log(firstName + " " + lastName); // Bhoami Khona

// Assignment Operators
let x = 10 + 5;
console.log(x); // 15

x += 10; // x = x + 10
console.log(x); // 25

x *= 4; // x = x * 4
console.log(x); // 100

x /= 2; // x = x / 2;
console.log(x); // 50

x++; // x = x + 1;
console.log(x); // 51

x--; // x = x - 1
x--; // x = x - 1
console.log(x); // 49

// Comparison Operators
console.log(ageJonas > ageBhoami); // true

let ageSarah = now - 2019;
console.log(ageSarah);
console.log(ageSarah >= 18); // true

ageSarah = now - 2020;
console.log(ageSarah);
console.log(ageSarah >= 18); // false

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 04 **********************/
/************************************************************************/

const halfPopulation = population / 2;
console.log(halfPopulation); // 714

population++;
console.log(population); // 1429

const finlandPopulation = 6;
console.log(population > finlandPopulation); // true

const avgPopulation = 33;
console.log(population < avgPopulation); // false

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

/***********************************************************************/
/************************* OPERATOR PRECEDENCE *************************/
/***********************************************************************/
/* 
const now = 2037;
const ageBhoami = now - 1995;
const ageJonas = now - 1991;

console.log(now - 1991 > now - 2018);

let x, y;

// = operator works from right-to-left
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

// JS follows PEMDAS-LR
let averageAge = ageBhoami + ageJonas / 2;

// this doesn't make sense, how can the average be greater than the two
// numbers? This is because the division operator was performed before
// the addition operator since, JS follows PEMDAS-LR
console.log(ageBhoami, ageJonas, averageAge); // 42, 46, 65

// The () have the highest order of precedence so, that will be performed
// first
averageAge = (ageBhoami + ageJonas) / 2;
console.log(ageBhoami, ageJonas, averageAge); // 42, 46, 44
 */

/***********************************************************************/
/************************* CODING CHALLEGNE 01 *************************/
/***********************************************************************/

// Data 01
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Data 02
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / (johnHeight * johnHeight);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

/***********************************************************************/
/******************** STRINGS AND TEMPLATE LITERALS ********************/
/***********************************************************************/
/* 
const firstName = `Bhoami`;
const job = `Web Developer`;
const birthYear = 1995;
const year = 2037;

// string concatenation with + operator
const bhoami =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(bhoami);

// template literal
const bhoamiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(bhoamiNew);

// can write a regular string with backticks
console.log(`Just a regular string...`);

// multi-line string without template literals
console.log(
  "String with \n\
multiple \n\
lines"
);

// multi-line string with template literals
console.log(`String
with
multiple
lines`);
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 05 **********************/
/************************************************************************/

description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

/************************************************************************/
/***************** TAKING DECISIONS: IF/ELSE STATEMENTS *****************/
/************************************************************************/
/* 
let age = 19;
age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  // else block is optional
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years 🙂`);
}

const birthYear = 1995;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
 */
/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 06 **********************/
/************************************************************************/

// population = 13;
// population = 130;

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average.`
  );
}

/***********************************************************************/
/************************* CODING CHALLEGNE 02 *************************/
/***********************************************************************/

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

/************************************************************************/
/********************* TYPE CONVERSION AND COERCION *********************/
/************************************************************************/
/* 
// type conversion
const inputYear = "1995";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Bhoami"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I'm ` + 23 + " years old."); // type coercion to string
console.log("23" - 10 - 3); // type coercion to number
console.log(`23` * `2`); // type coercion to number
console.log(`23` / `2`); // type coercion to number

// guess the output
let n = "1" + 1; // string 11
n = n - 1; // number 10
console.log(n);

// guess the output
console.log(2 + 3 + 4 + "5"); // this will be number 9 + string 5 - which will become string 95

// guess the output
console.log("10" - "4" - "3" - 2 + "5"); // this will become number 1 + string 5 - which will become string 15
 */
/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 07 **********************/
/************************************************************************/

console.log(`9` - `5`); // number 4
console.log(`19` - `13` + `17`); // string 617
console.log(`19` - `13` + 17); // number 23
console.log(`123` < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // number 1143

/***********************************************************************/
/*********************** TRUTHY AND FALSY VALUES ***********************/
/***********************************************************************/
/* 
console.log(Boolean(0)); // falsy
console.log(Boolean(undefined)); // false
console.log(Boolean(`Bhoami`)); // true

// trying to convert an empty object into boolean
console.log(Boolean({})); // true

console.log(Boolean(``)); // false

let money = 0;
money = 100;

if (money) {
  console.log(`Don't spend it all 😉`);
} else {
  console.log(`You should get a job! 💼`);
}

let height;
height = 123;

if (height) {
  console.log(`Yay! Height is defined!`);
} else {
  console.log(`Height is undefined!`);
}

// Here we can run into a problem if we decide to set height = 0.
// 0 is a perfectly valid number but, if we set it to zero, the else block
// will be executed since 0 is a falsy value.
// We can fix this using logical operators which we will learn about
// a bit later in the section.
 */
/************************************************************************/
/******************** EQUALITY OPERATORS: == VS. === ********************/
/************************************************************************/
/* 
let age = 18;
// age = 19;

if (age === 18) {
  console.log(`You just became an adult.`);
}

console.log(18 === 19); // false

// strict equality operator does not perform type coercion
console.log(`18` === 18); // false

// loose equality operator does perform type coercion
console.log(`18` == 18); // true

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  console.log(`Cool! 23 is an amazing number!`);
}

if (favorite === 23) {
  console.log(`Cool! 23 is an amazing number!`);
}

if (favorite === 23) {
  console.log(`Cool! 23 is an amazing number!`);
} else if (favorite === 7) {
  console.log(`7 is also a cool number`);
} else if (favorite === 9) {
  console.log(`9 is also a cool number`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favorite !== 23) console.log(`Why not 23?`);
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 08 **********************/
/************************************************************************/

// const numNeighbours = Number(prompt(`How many neighbour countries does you country have?`));
let numNeighbours = "9";
numNeighbours = 9;
numNeighbours = "0";
numNeighbours = 0;
numNeighbours = "1";
numNeighbours = 1;

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}

/***********************************************************************/
/************************** LOGICAL OPERATORS **************************/
/***********************************************************************/
/* 
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 09 **********************/
/************************************************************************/

// language = "English";
// population = "42";

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

/***********************************************************************/
/************************* CODING CHALLEGNE 03 *************************/
/***********************************************************************/

let dolphinAvg = (96 + 108 + 98) / 3;
let koalaAvg = (88 + 91 + 110) / 3;

dolphinAvg = (97 + 112 + 101) / 3;
koalaAvg = (109 + 95 + 123) / 3;

if (dolphinAvg === koalaAvg && dolphinAvg > 100 && koalaAvg > 100) {
  console.log(`It is a draw!`);
} else if (dolphinAvg > koalaAvg && dolphinAvg > 100) {
  console.log(`Dolphins are the winners!`);
} else if (koalaAvg > dolphinAvg && koalaAvg > 100) {
  console.log(`Koalas are the winners`);
}

dolphinAvg = (97 + 112 + 101) / 3;
koalaAvg = (109 + 95 + 106) / 3;

if (dolphinAvg === koalaAvg && dolphinAvg > 100 && koalaAvg > 100) {
  console.log(`It is a draw!`);
} else if (dolphinAvg > koalaAvg && dolphinAvg > 100) {
  console.log(`Dolphins are the winners!`);
} else if (koalaAvg > dolphinAvg && koalaAvg > 100) {
  console.log(`Koalas are the winners`);
} else {
  console.log(`There are no winners`);
}

/************************************************************************/
/************************* THE SWITCH STATEMENT *************************/
/************************************************************************/
/* 
const day = "thursday";

//  switch statement is more readable when you have a lot of `else-if` conditions
switch (day) {
  // day === 'monday'
  case "monday":
    console.log(`Plan the rest of the week`);
    console.log(`Go to code meetup`);
    break;
  case "tuesday":
    console.log(`Prepare for exams`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Finish assignments`);
    break;
  case "friday":
    console.log(`Revision`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy your weekend!`);
    break;
  default:
    console.log(`invalid day`);
    break;
}

if (day === "monday") {
  console.log(`Plan the rest of the week`);
  console.log(`Go to code meetup`);
} else if (day === "tuesday") {
  console.log(`Prepare for exams`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Finish assignments`);
} else if (day === "friday") {
  console.log(`Revision`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy your weekend!`);
} else {
  console.log(`invalid day`);
}
 */
/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 10 **********************/
/************************************************************************/

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "Spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`3rd place`);
    break;
  case "Hindi":
    console.log(`Number 4`);
    break;
  case "Arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}

/************************************************************************/
/********************** STATEMENTS AND EXPRESSIONS **********************/
/************************************************************************/
/* 
// Expressions:
3 + 4;
1991;
true && false && !false;
("bhoami");

// Statements:
if (23 > 10) {
  const str = `23 is bigger`;
}

// 2037 - 1995 is an expression
console.log(`I'm ${2037 - 1995} years old`);

// we cannot put if/else in there since it is a statement and we will get an error

// age = 18;
// console.log(`I'm ${if (age >= 18) {
//   const str = adult;
// } else {
//   const str = minor;
// }}`);
 */

/************************************************************************/
/****************** THE CONDITIONAL (TERNARY) OPERATOR ******************/
/************************************************************************/
/* 
const age = 23;
age >= 18
  ? console.log(`I like to drink wine 🍷`)
  : console.log(`I like to drink water 💧`);

// conditionally declaring variables using the ternary operator
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// without ternary operator:
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

// using ternary operator in a template literal
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 11 **********************/
/************************************************************************/

let averagePopulation = 33;

population = 13;
population = 130;
population = 1428;

console.log(
  `${country}'s population is ${
    population > averagePopulation ? `above` : `below`
  } average.`
);

/***********************************************************************/
/************************* CODING CHALLEGNE 04 *************************/
/***********************************************************************/

let bill = 275;
// bill = 40;
// bill = 430;

const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

console.log(
  `The bill was ${bill}, the tip was ${bill * tip} and the total value ${
    bill + bill * tip
  }`
);
