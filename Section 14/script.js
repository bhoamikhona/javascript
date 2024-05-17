'use strict';

/************************************************************************/
/************** CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR **************/
/************************************************************************/

console.log(
  `/************** CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR **************/`
);

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  // we can do the same with birthYear
  this.birthYear = birthYear;

  // creating a method - this works but this is a bad practice - never create a function inside of the constructor function
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

const matilda = new Person('Matilda', 2017);
console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}

const jay = 'Jay';

console.log(bhoami instanceof Person); // true
console.log(jay instanceof Person); // false
