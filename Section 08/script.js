'use strict';

/***********************************************************************/
/************************* SCOPING IN PRACTICE *************************/
/***********************************************************************/

console.log(
  `/************************* SCOPING IN PRACTICE *************************/`
);

/**
 * This calcAge() is defined in the global scope, that's because it is in
 * the top level.
 *
 * Also, this function will create its own scope which will be equivalent
 * to the variable environment of its execution context.
 */
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  /**
   * This firstName variable is not defined in the scope of the calcAge()
   * function. However, it is a global variable that we defined in the top
   * level code.
   *
   * Therefore, through the scope chain, it is going to be made available
   * inside of this (calcAge()) scope.
   */
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      /**
       * If we define a new variable in this scope with the name
       * 'firstName', we will get Steven as firstName instead of Bhoami
       * This is because JS will first look at the current scope before
       * going through a variable lookup.
       * It finds steven in this scope so, it will stop the search there.
       *
       * NOTE: You can have different variables with repeated variable
       * names, defined in different scopes. This is same as defining
       * different functions with the same parameter names. This works
       * because each parameter is only defined in that scope of the
       * function. Therefore, it is not a problem at all to have many
       * functions with the exact same parameter names, in the same way
       * that it is not a problem to have functions with the same variable
       * names inside of them.
       */
      const firstName = 'Steven';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      // functions are also block scoped - starting in ES6
      function add(a, b) {
        return a + b;
      }

      /**
       * Let's see what happens when we re-define a variable from a parent
       * scope inside of an inner scope. So, not creating a new variable,
       * but simply re-assigning the value of a variable.
       *
       * We are in the printAge() scope, in which we have an output
       * variable. Then we have an inner scope (child scope), in which
       * we re-define the output variable from the outter scope (parent
       * scope).
       *
       * Now if we try to access the output variable, its value will have
       * been changed. This is because we manipulated an existing variable
       * inside of a child scope.
       */
      output = 'New Output';
      console.log(output);
    }

    // console.log(str); // error - because `const` and `let` are block scoped
    console.log(millenial); // this works because `var` is function scoped, it doesn't care for blocks

    /**
     * The scope of the `add()` function is on the block in which it was
     * defined.
     * So, we can only use it inside the if() block.
     * This proves that functions are in fact block scoped.
     * NOTE: This is only true for strict mode. If you turn the strict
     * mode off, this will work.
     */
    // add(2, 3); // error
  }

  printAge();

  return age;
}

const firstName = 'Bhoami';
calcAge(1995);

/**
 * Only inner scope can have access to the variables of its outer scope,
 * but not the other way around.
 * The same goes for functions
 */
// console.log(age); // error
// printAge() // error

/************************************************************************/
/********************* HOISTING AND TDZ IN PRACTICE *********************/
/************************************************************************/

console.log(
  `/********************* HOISTING AND TDZ IN PRACTICE *********************/`
);

// Hoisting with Variables
console.log(me); // undefined
// console.log(job); // Reference Error
// console.log(year); // Reference Error

var me = `Bhoami`;
let job = `Web Developer`;
const year = 1995;

// Hoisting with Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExp(2, 3)); // Reference Error
// console.log(addArr(2, 3)); // Type Error

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

/**
 * Any variables declared with `var` will be hoisted and set to `undefined`
 * In line 131, when we are trying to call this function, the value of
 * this 'addArr' is undefined, so it gives type error that is trying to
 * say that 'undefined' is not a function type (at that point in the
 * code).
 */
var addArr = (a, b) => a + b;

// Only function that you can call before declaration is function declaration.

// PITFALL OF HOISTING EXAMPLE
/**
 * All the products are deleted even though we set numProducts to 10, why
 * is that?
 * It is because of hoisting.
 * Prior to the line of declaration, the variable 'numProducts' is
 * initialized to `undefined` and undefined is a falsy value, which is why
 * all the products are deleted.
 */
console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}

/**
 * This is just a tiny example but in a large code base with 1000s of
 * lines of code and without best practices, something like this can
 * totally happen and it is going to be a bug that is hard to find.
 *
 * So, what are these best practices? What is the conclusion of all this?
 *
 * First, don't use `var` variables. Use `const` most of the time to
 * declare variables and `let` if you really need to change the variable
 * later.
 *
 * Also, to write clean code, you should delcare your variables at the top
 * of each scope. That will just make your code at least look a little
 * bit better.
 *
 * Finally, always declare all your functions first and use them only
 * after the declaration. This applies to all types of functions, even
 * function declarations, which are hoisted.
 */

var x = 1;
let y = 2;
const z = 3;

// now look at the window object in the chrome developer tools
// you will find a property of x which is set to 1 in it
// however, you won't find y or z there - that's because they were declared with let or const
//  so variables created by using let or const, do not create properties on the window object

// to confirm:
// console.log(x === window.x); // true
// console.log(x === window.y); // false
// console.log(x === window.z); // false

/************************************************************************/
/********************* THE THIS KEYWORD IN PRACTICE *********************/
/************************************************************************/

console.log(
  `/********************* THE THIS KEYWORD IN PRACTICE *********************/`
);

// the this keyword in the global scope is simply the window object
console.log(this); // window object

/**
 * The `this` keyword in this calcAge() function is undefined
 *
 * This means that inside a regular function, in strict mode, the this
 * keyword will be undefined.
 * In sloppy mode, it will also be the global object, which in browser
 * is the window object.
 */
const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};

calcAge1(1995);

/**
 * Now let's see what happens when we have an arrow function - it is the
 * global object, which in case of browser is the window object.
 *
 * This is because the arrow function does not get its own `this` keyword,
 * instead, it uses the lexical this keyword i.e. the this keyword of its
 * parent element.
 *
 * For our calcAge2() function, the parent element is the global scope
 * so, it is the window object.
 */
const calcAge2 = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // global object (window object in this case)
};

calcAge2(1991);

/**
 * When we have have method call, the `this` keyword inside the method
 * will be the object that is calling the method.
 */
const bhoami = {
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

bhoami.calcAge();

/**
 * When we say that the `this` keyword points to the object that is
 * calling the method, it means that it will not simply point at the
 * object in which we wrote the method.
 *
 * We might think that since the calcAge() function is written inside
 * the bhoami object above, that is why the `this` keyword is taking
 * its value but, that is not the case.
 *
 * The `this` keyword is taking `bhoami` object value because `bhoami`
 * object is calling it.
 *
 * To prove it, let's see what happens when some other object calls the
 * calcAge() function inside the `bhoami` object.
 */

const jonas = {
  year: 1991,
};
console.log(`im here`);

/**
 * a function is just a value, therefore, we can do this:
 * here we are copying the calcAge() function from the `bhoami` object
 * and then creating and setting a new property inside the `jonas` object
 * with property name calcAge.
 */
jonas.calcAge = bhoami.calcAge;

/**
 * Now if we take a look at the jonas object then we will the calcAge()
 * function inside it.
 *
 * So, we copied the calcAge() function from one object to another and
 * this is called METHOD BORROWING.
 */
console.log(jonas); // { year: 1991, calcAge: f }

jonas.calcAge(); // 46

const f = bhoami.calcAge; // now f is equal to the calcAge() function
console.log(f);

f(); // since no object is calling this function, the `this` keyword is undefine*
