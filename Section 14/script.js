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

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

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

/************************************************************************/
/************** PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS **************/
/************************************************************************/

console.log(
  `/************** PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS **************/`
);

Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

bhoami = new Person('Bhoami', 1995);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

bhoami.calcAge();

Person.prototype.species = 'Homo Sapiens';

console.log(bhoami.__proto__);
console.log(Object.getPrototypeOf(bhoami));

/**
 * Moving up on the prototype chain and looking at prototype of
 * `bhoami.__proto__`
 */

console.log(bhoami.__proto__.__proto__); // We get the prototype of `Object()`

// let's take it one step further
// We get null because `Object.prototype` is usually the top of the scope chain
console.log(bhoami.__proto__.__proto__.__proto__); // null

// this points back to the Person() object, itself
console.log(Person.prototype.constructor);

// to inspect that function, we need to use `console.dir()`
console.dir(Person.prototype.constructor);

// every function has a prototype so, let's look at that now
const arr = [3, 2, 4, 3, 4, 2, 1, 1, 5, 6]; // `new Array()` === []
console.log(arr.__proto__); // prototype of an array
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // value of `Object.prototype`
console.log(arr.__proto__.__proto__.__proto__); // null

/**
 * We know at this point that any array inherits all their methods from
 * its prototype.
 *
 * Therefore, we can use that knowledge to extend the functionality of
 * arrays even further.
 *
 * All we have to do is to say `Array.prototype` and then use the dot
 * operator to create a new method.
 */

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 2, 4, 1, 5, 6]

/**
 * However, what we did here i.e. extending the prototype of a built-in
 * object is generally not a good idea.
 *
 * If you are working on a small project on your own then maybe you can
 * get away with it but really, don't get into the habit of doing this
 * for multiple reasons.
 *
 * The first reason is that the next version of JS might add a method
 * with the same name but it might work in a different way.
 *
 * So your code will then use that new method, which remember, works
 * differently, thereby breaking your code.
 *
 * The second reason why you shouldn't do this is because when you work
 * on a team of developers, then this is really going to be a bad idea
 * because if multiple developers implement the same method with a
 * different name then that's just going to create so many bugs that it
 * is just not worth doing.
 *
 * So, it is just a nice and fun experiment but in practice, you should
 * probably not do it.
 */

// Let's take a look at some more built-in objects in the console.

// looking at the DOM element
// Remember that all the DOM elements are behind the scenes object.
const h1 = document.querySelector('h1');
console.dir(h1); // its prototype is 6 to 7 levels deep
console.log(h1.__proto__);

// checking the prototype of a function
// remember that functions in JS are objects so they do have prototypes
// that's why we were able to use methods like bind() on functions before
console.dir(x => x + 1);

/***********************************************************************/
/************************* CODING CHALLENGE 01 *************************/
/***********************************************************************/

console.log(
  `/************************* CODING CHALLENGE 01 *************************/`
);

/**
 * TODO 01:
 *
 * Use a constructor function to implement a `Car`. A car has a `make`
 * and a `speed` property. The `speed` property is the current speed of
 * the car in km/h.
 */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

console.log(Car);

/**
 * TODO 02:
 *
 * Implement an `accelerate` method that will increase the car's speed
 * by 10, and log the new speed to the console.
 */

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

console.log(Car.prototype);

/**
 * TODO 03:
 *
 * Implement a `brake` method that will decrease the car's speed by 5, and
 * log the new speed to the console.
 */

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

console.log(Car.prototype);

/**
 * TODO 04:
 *
 * Create 2 `Car` objects and experiment with calling `accelerate` and
 * `brake` mutliple times on each of them.
 *
 * Test Data:
 *
 * Data Car 01: 'BMW' going at 120 km/h
 * Data Car 02: 'Mercedes' going at 95 km/h
 */

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
