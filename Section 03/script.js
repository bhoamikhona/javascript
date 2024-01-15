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

/************************************************************************/
/************************ INTRODUCTION TO ARRAYS ************************/
/************************************************************************/
/* 
// traditional
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// creating an array using literal syntax
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// creating an array using Array() function
const y = new Array(1991, 1984, 2008, 2020);

// retrieving items from an array
console.log(friends[0]);
console.log(friends[2]);

// getting number of elements in an array
console.log(friends.length);

// getting last element of an array
// can access elements with expression in the square brackets e.g.:
console.log(friends[friends.length - 1]);

// mutate elements in an array
friends[2] = "Jack";

console.log(friends);

// cannot replace entire array if it was declared using const but, you can mutate values inside it.
// friends = ['Bob', 'Alice']; // error

// arrays can hold different values of different types
// In each array element position, JS expects an expression so, we can even have expressions in an array as those expressions will eventually be replaced by their resulting values.
// Same is true for variables
// We can also have another array nested inside of an array
const firstName = "bhoami";
const bhoami = [firstName, "khona", 2037 - 1995, friends];

console.log(bhoami); // ['bhoami', 'khona', 42, Array(3)]
console.log(bhoami.length); // 4

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
 */
/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 05 **********************/
/************************************************************************/

const populations = [1428, 333, 67, 68];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

/************************************************************************/
/******************* BASIC ARRAY OPERATIONS (METHODS) *******************/
/************************************************************************/
/* 
const friends = ["Michael", "Steven", "Peter"];

// push() adds the specified element to the end of an array and returns the new length of the array
const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength);

// unshift() adds the specified element in the beginning of an array and returns the new length of the array.
friends.unshift("John");
console.log(friends);

// pop() removes the last of the array and returns the removed element
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

// shift() removes the first element of the array and returns the removed element
friends.shift();
console.log(friends);

// indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// includes() determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// includes() uses strict equality
friends.push(23);
console.log(friends.includes(23)); // true
console.log(friends.includes("23")); // false

if (friends.includes("Peter")) {
  console.log(`You have a friend called Peter.`);
}
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 06 **********************/
/************************************************************************/

const neighbours = [
  `Afghanistan`,
  `Bangladesh`,
  `Bhutan`,
  `China`,
  `Maldives`,
  `Myanmar`,
  `Nepal`,
  `Pakistan`,
  `Lanka`,
];

console.log(neighbours);

neighbours.push(`Utopia`);
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes(`Germany`)) {
  console.log(`Probably not a central European country :D`);
}

const index = neighbours.indexOf(`Lanka`);
neighbours[index] = `Sri Lanka`;
console.log(neighbours);

/***********************************************************************/
/************************* CODING CHALLENGE 02 *************************/
/***********************************************************************/

const calcTip = function (bill) {
  const percent = bill >= 50 && bill <= 300 ? 15 : 20;
  return bill * (percent / 100);
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

/***********************************************************************/
/*********************** INTRODUCTION TO OBJECTS ***********************/
/***********************************************************************/
/* 
// array
const bhoamiArray = [
  "bhoami",
  "khona",
  2037 - 1995,
  "web developer",
  ["michael", "peter", "steven"],
];

// object
// creating an object with object literal syntax
const bhoamiObj = {
  firstName: "bhoami",
  lastName: "khona",
  age: 2037 - 1995,
  job: "web developer",
  friends: ["michael", "peter", "steven"],
};
 */

/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 07 **********************/
/************************************************************************/

let myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1428,
  neighbours: [
    `Afghanistan`,
    `Bangladesh`,
    `Bhutan`,
    `China`,
    `Maldives`,
    `Myanmar`,
    `Nepal`,
    `Pakistan`,
    `Lanka`,
  ],
};

/************************************************************************/
/*********************** DOT VS. BRACKET NOTATION ***********************/
/************************************************************************/
/* 
const bhoami = {
  firstName: "bhoami",
  lastName: "khona",
  age: 2037 - 1995,
  job: "web developer",
  friends: ["michael", "peter", "steven"],
};

console.log(bhoami);

// getting an object property using dot notation
console.log(bhoami.lastName);

// getting an object property using bracket notation
console.log(bhoami["lastName"]);

// getting a property using expressions
const nameKey = "Name";
console.log(bhoami["first" + nameKey]);
console.log(bhoami["last" + nameKey]);

// cannot get properties with dot notation - when using an expression
// console.log(bhoami."first" + nameKey); // error

// const interestedIn = prompt(
//   `What do you want to know about Bhoami? Choose between firstName, lastName, age, job, and friends`
// );

const interestedIn = "job";

// we get undefined here because bhoami does not have a property called interestedIn
console.log(bhoami.interestedIn); // undefined

// to remedy this, instead of using dot notation, we need to use brackets notation.
// because then we can put any expression in it and so, it will accept a variable name and JS will replace that variable name with its value.
console.log(bhoami[interestedIn]); // this works

if (bhoami[interestedIn]) {
  console.log(bhoami[interestedIn]);
} else {
  console.log(`Wrong request, try again.`);
}

// Adding new properties to an object using dot and brackets notation:

bhoami.location = "India";
bhoami["github"] = "@bhoamikhona";
console.log(bhoami);

// Challenge
// "Bhoami has 3 friends, and her best friend is called Michael"
console.log(
  `${bhoami.firstName} has ${bhoami.friends.length} friends, and her best friend is called ${bhoami.friends[0]}`
);
 */
/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 08 **********************/
/************************************************************************/

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

/************************************************************************/
/**************************** OBJECT METHODS ****************************/
/************************************************************************/
/* 
// Adding functions inside objects
const bhoami = {
  firstName: "bhoami",
  lastName: "khona",
  birthYear: 1995,
  job: "web developer",
  friends: ["michael", "peter", "steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this); // `this` points to the object that is calling it
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear; // creating a new property called age in bhoami object
    return this.age;
  },

  // challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.age} year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(bhoami.calcAge(1995)); // calling the function using dot notation
// console.log(bhoami["calcAge"](1995)); // calling the function using bracket notation

// the object bhoami is calling the calcAge() method so, in the method, `this` will point to the object bhoami.
console.log(bhoami.calcAge());

console.log(bhoami.age);

// Challenge
// "Bhoami is a 42 year old web developer, and she has a/no driver's license"
console.log(bhoami.getSummary());
 */
/************************************************************************/
/********************** FUNDAMENTALS ASSIGNMENT 09 **********************/
/************************************************************************/

myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1428,
  neighbours: [
    `Afghanistan`,
    `Bangladesh`,
    `Bhutan`,
    `China`,
    `Maldives`,
    `Myanmar`,
    `Nepal`,
    `Pakistan`,
    `Lanka`,
  ],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsIsland: function () {
    this.isIsland = this.neighbours.length ? true : false;
    return this.isIsland;
  },
};

myCountry.describe();
console.log(myCountry.checkIsIsland());
console.log(myCountry.isIsland);

/***********************************************************************/
/************************* CODING CHALLENGE 03 *************************/
/***********************************************************************/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
} else {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
}
