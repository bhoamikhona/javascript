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
    // console.log(2037 - this.year);
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

/***********************************************************************/
/**************** REGULAR FUNCTIONS VS. ARROW FUNCTIONS ****************/
/***********************************************************************/

console.log(
  `/**************** REGULAR FUNCTIONS VS. ARROW FUNCTIONS ****************/`
);

/**
 * Let's now learn some of the pitfalls of the `this` keyword related to
 * regular functions and arrow functions.
 *
 * This way, we can learn when we should use and avoid each of them.
 *
 * To start, let's get back to the `bhoami` object from before, and we
 * will add a firstName property to it.
 *
 * We will also add another method to it, which will be an arrow function.
 */

let bhoamiObj = {
  firstName: 'Bhoami',
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

/**
 * The reason why it is undefined is because an arrow function does not
 * get its own `this` keyword. It simply uses the `this` keyword from
 * its parent's scope.
 *
 * The parent scope of this greet() method is the global scope (which in
 * the case of a browser is the window object).
 *
 * Since in the window object, there is no property that is called
 * firstName, it returns undefined.
 *
 * NOTE: When we try to access a property that does not exist, on a
 * certain object, we do not get an error. We get undefined.
 * NOTE: This behavior can get dangerous when we use `var` to define
 * variables, since `var` actually does create properties on the global
 * object, as we learned in one of the previous lessons. Hence, this is
 * another reason why we shouldn't use `var`.
 *
 * NOTE: The curly braces of bhoamiObj is not a code block, it is simply
 * the way we define an object. Everything inside the bhoamiObj is in the
 * global scope still - which includes the greet() method.
 */
bhoamiObj.greet(); // Hey undefined

/**
 * A big takeaway from this example is that as a best practice, you
 * should never ever use an arrow function as a method.
 *
 * This is even true if you are not even using the `this` keyword in a
 * particular method.
 *
 * Because if you have this rule of never using an arrow function as a
 * method, then you never have to think about which type of function you
 * should use.
 *
 * You will always just use a normal function expression, and that way,
 * you will prevent this kind of mistakes from happening.
 */

/**
 * Another pitfall of the `this` keyword is when we have a function inside
 * of a method.
 *
 * It is a pretty common thing to happen. So, let's take a look at an
 * example for that.
 */

bhoamiObj = {
  firstName: 'Bhoami',
  year: 1995,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

bhoamiObj.greet();
/**
 * When we call calcAge(), we get the error: "Cannot read property year
 * of undefined"
 *
 * This means that the `this` keyword is `undefined`. Why is that?
 *
 * When we call isMillenial(), it is just a regular function call, even
 * though it happens inside of a method; and the rule says that inside a
 * regular function call, the `this` keyword must be `undefined`.
 * Therefore, we get undefined.
 *
 * So, it is just as if the function was outside of the calcAge() method.
 * So, if we take the isMillenial() function out of the calcAge() method,
 * we will get the same result.
 *
 * Some people think that this is a bug in JavaScript but, it really
 * isn't. It is just how the `this` keyword works.
 *
 * It is a clear rule that a regular function call has the `this` keyword
 * set to undefined.
 */
bhoamiObj.calcAge();

/**
 * There are two solutions to this problem.
 *
 * The first solution is to use an extra variable that we usually call
 * "self", we declare it outside the function and set its value to `this`.
 */

bhoamiObj = {
  firstName: 'Bhoami',
  year: 1995,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

bhoamiObj.greet();

/**
 * Now, through the scope chain, `self` will be equal to `this` which
 * is outside of the isMillenial() function.
 *
 * This was kind of the pre-ES6 solution. You might find it in some
 * older code bases.
 *
 * Now in ES6, we have a more modern and a better solution, and that
 * solution is to use an arrow function.
 *
 * This works because an arrow function does not get its own `this`
 * keyword and it uses the `this` keyword of its parent's scope.
 */

bhoamiObj = {
  firstName: 'Bhoami',
  year: 1995,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 01 (PRE-ES6)
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 02 (POST-ES6)
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

bhoamiObj.greet();
bhoamiObj.calcAge();

/**
 * So, this shows why it is important to know how each of the different
 * type of functions work in regards to the `this` keyword; because,
 * you can really use them according to your specific needs.
 */

///// Arguments Keyword /////

/**
 * Just like the `this` keyword, the `arguments` keyword is only
 * available in regular functions.
 */

const addExpr = function (a, b) {
  // We get an array of all the arguments that we pass into the function
  console.log(arguments);
  return a + b;
};

const addArrow = (a, b) => a + b;

/**
 * This can be useful when we need a function to accept more parameters
 * than we actually specified.
 *
 * That is something that we never did before.
 *
 * Up until this point, we have only ever specified exactly the arguments
 * that we have defined in the function.
 *
 * But, it is completely legal to add more parameters.
 *
 * They will not have a name because we didn't name them but, they will
 * exist. Example:
 */

addExpr(2, 3, 4, 5, 6); // we can see them when we log the arguments array when we call the function.

/**
 * So, they do exist and we can therefore use them in the functions.
 *
 * For example, we can use a for-loop and loop over the `arguments` array.
 *
 * However, our point here is that the arrow functions do not get an
 * `arguments` keyword.
 */

const addArrow1 = (a, b) => {
  // console.log(arguments); // Error: arguments is not defined
  return a + b;
};

addArrow1(2, 3);

/**
 * This was just to show you that the arguments keyword exists but, that
 * it only exists in regular functions.
 *
 * Anyway, the `arguments` keyword is not that important in JS anymore
 * because now we have a more modern way of dealing with multiple
 * parameters.
 *
 * However, it is still important that you are aware that the `arguments`
 * keyword exists.
 */

/************************************************************************/
/****************** PRIMITIVES VS. OBJECTS IN PRACTICE ******************/
/************************************************************************/

console.log(
  `/****************** PRIMITIVES VS. OBJECTS IN PRACTICE ******************/`
);

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log(`Before Marriage: ${jessica.lastName}`);
console.log(`After Marriage: ${marriedJessica.lastName}`);

/**
 * Both the objects, jessica and marriedJessica have their lastName
 * changed to Davis even though we only changed the lastName in
 * marriedJessica.
 *
 * This happened because when we attempted to copy the original jessica
 * object, it did in-fact NOT create a new object in the heap.
 *
 * It is simply, just another variable in the stack, which holds the
 * reference to the original object.
 *
 * So, both of the variables viz jessica and marriedJessica simply point
 * to the exact same memory address in the heap.
 *
 * This is because in the stack, they both hold the same memory address
 * reference.
 *
 * Therefore, it makes sense that if we change a property on
 * marriedJessica, it will also change on jessica itself.
 *
 * This is also the reason why we can change properties in the
 * marriedJessica object, which was declared using a const.
 *
 * `const` is supposed to be for constants i.e. things that we cannot
 * change.
 *
 * However, the value that actually needs to be constant is the value in
 * the stack. And in this stick, the value only holds the reference,
 * which we are not actually changing.
 *
 * The only thing that we are changing is the underlying object that is
 * stored in the heap; and that is okay to change as it has nothing to do
 * with const or let.
 *
 * It is only about the value in the stack. But if we change something in
 * the heap - that has nothing to do with const or let.
 *
 * What we can't do it to assign a completely different object to
 * marriedJessica. Example:
 */

// marriedJessica = {}; // error

/**
 * This does not work because the new object will be stored at a different
 * position in memory, and therefore the reference to that position in
 * memory will have to change in the marriedJessica variable.
 *
 * Therefore, it does not work because it is in the stack and we cannot
 * change a constant value in the stack. So, we cannot change the value
 * to a new memory address, and therefore it does not work.
 *
 * If marriedJessica was defined with a `let` keyword then we could have
 * changed the reference point in the stack but, with const, it gives us
 * an error.
 *
 * In conclusion, completely changing the object i.e. assigning a new
 * object to a variable is completely different than simply changing a
 * property, as we did above.
 */

/**
 * What if we wanted to copy an object, in a way where we could then
 * change one of them without changing the other?
 */

// COPYING OBJECTS

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

/**
 * Now, if we really wanted to copy the jessica2 object, we could use a
 * function called `Object.assign()`.
 *
 * This function essentially merges two objects and then returns a new
 * one.
 *
 * So, we can simply merge a new empty object with jessica2 and this will
 * then create a completely new object where all the properties are really
 * copied.
 */

const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis';

console.log(`Before Marriage: ${jessica2.lastName}`); // williams
console.log(`After Marriage: ${jessicaCopy.lastName}`); // davis

/**
 * Now indeed, we can preserve the original lastName williams after we
 * change the lastName on the other object.
 *
 * So, this means that jessicaCopy is a real copy of the original object.
 *
 * Behind the scenes, this means that a new object was in fact created in
 * the heap and jessicaCopy is now pointing to that object.
 *
 * However, there is still a problem. This is because using this technique
 * of Object.assign() only works on the first level.
 *
 * In other words, if we have an object inside of an object then the
 * inner object will actually still be the same i.e. it will point to the
 * same place in memory.
 *
 * That's why we say that Object.assing() only creates a shallow copy
 * and not a deep clone, which is what we would like to have.
 *
 * Again, a shallow copy will only copy the properties in the first level
 * while a deep clone would copy everything.
 *
 * Example:
 */

// Remember that an array is really just an object, behind the scenes
const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy2 = Object.assign({}, jessica3);

jessicaCopy2.lastName = 'Davis';

console.log(jessica3);
console.log(jessicaCopy2);

/**
 * Right now we see the family array in both the objects.
 *
 * Let's now try and change that array in jessicaCopy2.
 */

jessicaCopy2.family.push('Mary');
jessicaCopy2.family.push('John');

console.log(jessica3);
console.log(jessicaCopy2);

/**
 * Here we are manipulating an object that is within an object.
 *
 * Now we see that both of the object i.e. jessica3 and jessicaCopy2 have
 * a family with four members.
 *
 * The change of lastName in jessicaCopy2 is preserver because it is in
 * the first level and Object.assign() took care of copying that property.
 * So, that was not changed in the original object, as we changed the
 * lastName in the jessicaCopy2 object.
 *
 * However, the family object is a deeply nested object. Therefore,
 * Object.assign() did not really, behind the scenes, copy it to the new
 * object.
 *
 * So, in essence, both the objects, jessica3 and jessicaCopy2 have a
 * property called family, which points at the same object in the memory
 * heap.
 *
 * Now, a deep clone is not easy to achieve, and it woul dbe beyond the
 * scope of this lesson to learn how to create a deep clone.
 *
 * Usually, we do something like this, which is very complex, using an
 * external library, for example, like Lo-Dash, and this library has a
 * ton of helpful tools and one of them is for deep cloning.
 *
 * We will do that in a later section, just so we can learn how to include
 * an external library to do those kinds of things.
 */
