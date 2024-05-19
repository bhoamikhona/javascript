'use strict';

/************************************************************************/
/************** CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR **************/
/************************************************************************/

console.log(
  `/************** CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR **************/`
);

let Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  // we can do the same with birthYear
  this.birthYear = birthYear;

  // creating a method - this works but this is a bad practice - never create a function inside of the constructor function
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

let bhoami = new Person('Bhoami', 1995);
console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

const matilda = new Person('Matilda', 2017);
console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}

const jay = 'Jay';

console.log(bhoami instanceof Person); // true
console.log(jay instanceof Person); // false

/************************************************************************/
/****************************** PROTOTYPES ******************************/
/************************************************************************/

console.log(
  `/****************************** PROTOTYPES ******************************/`
);

Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

bhoami = new Person('Bhoami', 1995);
console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

// taking a look at a constructor's prototype
console.log(Person.prototype);

// adding a method to a constructor's prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

bhoami.calcAge(); // 42

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995, calcAge: ƒ}

// prototype of bhoami
console.log(bhoami.__proto__);
console.log(Object.getPrototypeOf(bhoami));

// confirming that prototype of `bhoami` is the same as `Person()` prototype property
console.log(bhoami.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(bhoami) === Person.prototype); // true

// Person.prototype is the prototype of `bhoami` or any other object created by Person() constuctor function
console.log(Person.prototype.isPrototypeOf(bhoami)); // true

// Person.prototype is not the prototype of Person
console.log(Person.prototype.isPrototypeOf(Person)); // false

// creating a property on the prototype
Person.prototype.species = 'Homo Sapiens';

console.log(bhoami);
console.log(bhoami.species); // Homo Sapiens

// checking for properties that are directly on the object itself
console.log(bhoami.hasOwnProperty('firstName')); // true

// this is false because this property is not really inside of `bhoami` object. It simply has access to it because of its prototype.
console.log(bhoami.hasOwnProperty('species')); // false
