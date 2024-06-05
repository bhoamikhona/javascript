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

let jay = 'Jay';

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

/***********************************************************************/
/***************************** ES6 CLASSES *****************************/
/***********************************************************************/

console.log(
  `/***************************** ES6 CLASSES *****************************/`
);

// class expression
const PersonClExpr = class {};

// class declaration
class PersonClDecl {}

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica); // PersonCl {firstName: 'Jessica', birthYear: 1996}
jessica.calcAge(); // 41
console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

/***********************************************************************/
/************************* SETTERS AND GETTERS *************************/
/***********************************************************************/

console.log(
  `/************************* SETTERS AND GETTERS *************************/`
);

const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jennifer = new PersonCl2('Jennifer Davis', 1996);

console.log(jennifer.age);
console.log(jennifer);
console.log(jennifer._fullName); // Jennifer Davis
console.log(jennifer.fullName); // Jennifer Davis

const walter = new PersonCl2('Walter', 1965);
console.log(walter);

/************************************************************************/
/**************************** STATIC METHODS ****************************/
/************************************************************************/

console.log(
  `/**************************** STATIC METHODS ****************************/`
);

/////////////////////////////
// Constructor Function
const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.hey = function () {
  console.log('Hey there! 👋');

  //  the `this` keyword is the entire constructor function and the reason
  // for that is because that is exactly the object that is calling this
  // method.
  console.log(this);
};

// static method attached to constructor
Person2.hey();

// static method cannot be called on an instance because it is simply
// not in the prototype of the object
const arya = new Person2('Arya', 1995);
// arya.hey(); // error

/////////////////////////////
// Class
const PersonCl3 = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Static Method
  static hey() {
    console.log('Hey there! 👋');

    // the `this` keyword points to this entire class
    console.log(this);
  }
};

PersonCl3.hey();

/***********************************************************************/
/**************************** OBJECT.CREATE ****************************/
/***********************************************************************/

console.log(
  `/**************************** OBJECT.CREATE ****************************/`
);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

let steven = Object.create(PersonProto);
console.log(steven);
console.log(steven.__proto__);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

/***********************************************************************/
/************************* CODING CHALLENGE 02 *************************/
/***********************************************************************/

console.log(
  `/************************* CODING CHALLENGE 02 *************************/`
);

/**
 * TODO 01:
 *
 * Re-create Challenge 01, but this time using the ES6 class (call it
 * CarCl)
 */

let CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
};

/**
 * TODO 02:
 *
 * Add a getter called 'speedUS' which returns the current speed in mi/h
 * (divide by 1.6)
 */

CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
};

/**
 * TODO 03:
 *
 * Add a setter called 'speedUS' which sets the current speed in mi/h
 * (but converts it to km/h before storing the value, by multiplying the
 * input by 1.6)
 */

CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
};

/**
 * TODO 04:
 *
 * Create a new car and experiment with the 'accelerate' and 'brake'
 * methods, and with the getter and setter.
 *
 * Test Data 01: 'Ford' going at 120 km/h
 */

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);

/************************************************************************/
/********* INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS *********/
/************************************************************************/

console.log(
  `/********* INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS *********/`
);

const PersonInherit = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // using call() to set `this` keyword
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();

// this should work now
mike.calcAge();

// inspecting everything in the console
console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.dir(Student.prototype.constructor); // fix this

// this is true because Student is the constructor function of mike
console.log(mike instanceof Student);

/**
 * But if we try the same thing with Person, that should also be true.
 *
 * This is because we linked the prototypes together using
 * Object.create()
 */
console.log(mike instanceof Person);

// Of course mike is also an instance of Object because it is also in
// its prototype chain.
console.log(mike instanceof Object);

Student.prototype.constructor = Student; // fixed

/***********************************************************************/
/************************* CODING CHALLENGE 03 *************************/
/***********************************************************************/

console.log(
  `/************************* CODING CHALLENGE 03 *************************/`
);

/**
 * TODO 01:
 *
 * Use a constructor function to implement an Electric Car (called 'EV')
 * as a child "class" of 'Car'. Besides a make and current speed, the
 * 'EV' also has the current battery charge in % ('charge' property)
 */

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
console.dir(EV.prototype.constructor);
EV.prototype.constructor = EV;
console.dir(EV.prototype.constructor);

/**
 * TODO 02:
 *
 * Implement a 'chargeBattery' method which takes an argument 'chargeTo'
 * and sets the battery charge to 'chargeTo'.
 */

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

/**
 * TODO 03:
 *
 * Implement an 'accelerate' method that will increase the car's speed by
 * 20, and decrease the charge by 1%. Then log a message like this:
 * "Tesla going at 140 km/h, with a charge of 22%"
 */
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

/**
 * TODO 04:
 *
 * Create an electric car object and experiment with calling 'accelerate',
 * 'brake', and 'chargeBattery' (charge to 90%). Notice what happens when
 * you 'accelerate'!
 *
 * HINT: Review the definition of polymorphism 😉
 *
 * TEST DATA: Tesla going at 120km/h, with a charge of 23%
 */
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();
console.log(tesla);

/************************************************************************/
/************** INHERITANCE BETWEEN "CLASSES": ES6 CLASSES **************/
/************************************************************************/

console.log(
  `/************** INHERITANCE BETWEEN "CLASSES": ES6 CLASSES **************/`
);

class PersonCl4 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there 👋`);
  }
}

class StudentCl4 extends PersonCl4 {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl4('Marth Jones', 2012, 'Computer Science');
console.log(martha); // Student {_fullName: 'Martha Jones', birthYear: 2012, course: "Computer Science"}

martha.introduce(); // My name is Martha Jones and I study Computer Science

martha.calcAge(); // I'm 25 years old, but as a student I feel more like 35

console.dir(martha);

/************************************************************************/
/************* INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE *************/
/************************************************************************/

console.log(
  `/************* INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE *************/`
);

const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

steven = Object.create(PersonProto1);

const StudentProto1 = Object.create(PersonProto1);
StudentProto1.init = function (firstName, birthYear, course) {
  // we use call() because we will need to manually set the `this` keyword
  PersonProto1.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto1.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

jay = Object.create(StudentProto1);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();

/***********************************************************************/
/************************ ANOTHER CLASS EXAMPLE ************************/
/***********************************************************************/

console.log(
  `/************************ ANOTHER CLASS EXAMPLE ************************/`
);

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface of our Objects
  deposit(val) {
    this.movements.push(val);
  }

  /**
   * We are calling deposit here because the withdraw method works in
   * the same way.
   *
   * Also, of course we can call other methods inside of a certain
   * method. But, we will still need to use the `this` keyword in order
   * to access the other method
   */
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000); // this should not be accessible - but it is

// pin accessible outside of the class - this shouldn't happen
console.log(acc1.pin);

console.log(acc1);
/***********************************************************************/
/*********** ENCAPSULATION: PROTECTED PROPERTIES AND METHODS ***********/
/***********************************************************************/

console.log(
  `/*********** ENCAPSULATION: PROTECTED PROPERTIES AND METHODS ***********/`
);

class Account2 {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc2 = new Account2('Bhoami', 'INR', 1111);

acc2.deposit(250);
acc2.withdraw(140);
acc2.requestLoan(1000);
// acc2.approveLoan(1000);

// console.log(acc2.pin);
console.log(acc2._movements); // still accessible if we use the underscore

// not this is the correct way of getting the movements:
console.log(acc2.getMovements());

console.log(acc2);

/***********************************************************************/
/*********** ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS ***********/
/***********************************************************************/

console.log(
  `/*********** ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS ***********/`
);

class Account3 {
  /**
   * Here the semi-colon is necessary (even if you find it weird, it has
   * to be there)
   *
   * Also, it looks like a variable but, we don't have to declare it
   * using `const` or `let`.
   *
   * This is how we simply define a public field.
   *
   * NOTE that public fields are added to instances and not to prototypes
   */
  // 1) Public field
  locale = navigator.language;

  // 2) Private field
  #movements = [];
  #pin; // undefined

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // redefine
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // 4) Private Methods
  #approveLoan(val) {
    return true;
  }

  // 5) Static Public
  static helper() {
    console.log('Helper');
  }
}

const acc3 = new Account3('Bhoami', 'INR', 1111);

acc3.deposit(250);
acc3.withdraw(140);
acc3.requestLoan(1000);
console.log(acc3._movements);
console.log(acc3.getMovements());
console.log(acc3);

// console.log(acc1.#movements); // error
// console.log(acc1.#pin); // error

// calling static public method
Account3.helper();

/**********************************************************************/
/************************** CHAINING METHODS **************************/
/**********************************************************************/

console.log(
  `/************************** CHAINING METHODS **************************/`
);

class Account4 {
  locale = navigator.language;

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    // here we are returning `this` because it points to the current object i.e. the account that is calling this method
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper');
  }
}

const acc4 = new Account4('Bhoami', 'INR', 1111);

acc4.deposit(250);
acc4.withdraw(140);
acc4.requestLoan(1000);
console.log(acc4._movements);
console.log(acc4.getMovements());
console.log(acc4);

Account3.helper();

// Chaining Methods - this should work now
acc4.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc4);
console.log(acc4.getMovements());
