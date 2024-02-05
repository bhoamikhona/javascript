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
