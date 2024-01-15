# Section 03: JavaScript Fundamentals - Part 02

**About:** In this section we will continue learning important JS fundamentals. We will learns basics of functions, objects, arrays, and loops. After this section, you will have a good foundation to start writing your own small programs using the power of JavaScript.

## Table of Contents

- [Lessons Learned](#lessons-learned)
  - [Activating Strict Mode](#activating-strict-mode)
  - [Functions](#functions)
  - [Function Declarations vs. Expressions](#function-declarations-vs-expressions)
  - [Arrow Functions](#arrow-functions)
  - [Functions Calling Other Functions](#functions-calling-other-functions)
  - [Reviewing Functions](#reviewing-functions)
    - [Recap](#recap)
    - [Anatomy of a Function](#anatomy-of-a-function)
  - [Introduction to Arrays](#introduction-to-arrays)
  - [Basic Array Operations (Methods)](#basic-array-operations-methods)
  - [Introduction to Objects](#introduction-to-objects)
  - [Dot vs. Bracket Notation](#dot-vs-bracket-notation)
  - [Object Methods](#object-methods)
- [Author](#author)

## Lessons Learned

### Activating Strict Mode

- JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode".
- Strict mode isn't just a subset: it intentionally has different semantics from normal code.
- Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode.
- Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.
- Strict mode makes several changes to normal JavaScript semantics:
  - Eliminates some JavaScript silent errors by changing them to throw errors.
  - Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
  - Prohibits some syntax likely to be defined in future versions of ECMAScript.

```javascript
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

- It is important that `"use strict";` is the very first line of code in the script file. If we have any code before it, the strict mode will not be activated. Comments are allowed since JS will just ignore them but, no code.

### Functions

- A function is a piece of code that we can re-use over and over again.
- It is a little bit like a variable but, for whole chunks of code.
- function body
- invoking/running/calling a function
- parameters
  - The actual values of parameters are called arguments.
- `return` keyword
- We can re-use the function with different input values to get different outputs.

> [!NOTE]
> A function in which we do not define a returning value, returns `undefined`.

- In conclusion, functions allow us to write more maintainable code as we can create re-usable chunks of code with them instead of having to manually wrtie the same code over and over again.

> [!NOTE]
> Functions are important for us, if we want to (and should) follow the DRY principle which stands for "Don't repeat yourself".

- `console.log()` is also a function which is built-in so, we don't have to write its code but, we call it exactly like we would call a function that we write.
- Same is true for `alert()`, `prompt()`, `Number()`, `String()`, `Boolean()`, or any other that we might have encountered up until now.

### Function Declarations vs. Expressions

- In JavaScript, there are different ways of writing functions and each type of function works in a slightly different way but, they are all still very similar.
- The functions that we learned in the last lesson are called function declarations because, we simply use the function keyword to declare a function, a bit like we declare a variable.
- A function expression is a function without a name and the whole function is then stored in a variable. This variable will now be the function.
- The function part of function expression is an expression (as the name suggests). Remember that expressions produce values and we can assign variables to those values. That's exactly what happens when we write a function expression.
- One big implication of what we just learned is that in JS, functions are in fact just values like a number or a string. They are not data types, they are not like string type or number type. They itself are values.
- Keep this in mind because this will become very important later when we really dig deep into functions.

#### Difference between Function Declaration and Function Expression

- We can call function declarations before they are defined.
- We cannot call function expressions before they are defined.
- It is a good practice to use function expression for that reason as it forces you to structure your code nicely where all the functions are defined at the top of the file and then using them instead of using a function first and then defining them at random places in the code.
  - But, at the end of the day, this comes down to personal preference.
- Internally, this happens because of a process called <ins>hoisting</ins> but, we will learn about that in [Section 08](../Section%2008).

### Arrow Functions

- Arrow functions are a special form of functione expressions.
- If it is one line of code in the function body of an arrow function, we do not need to use the `return` keyword. The return happens implicitly. In one-liner, we also do not need to use curly braces.
- If there is only one parameter, we do not need to use a set of parentheses. We need the parentheses if there are 0 or more than 1 parameters.

### Functions Calling Other Functions

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/cba78bf5-6687-4756-9dcb-70aace9d8270)
- Why do we call another function from within one function? Why not just do it all in one function and call it a day?
  - There are multiple reasons for it.
    - First, it is very common for one function to call another function.
    - Second, setting separate functions for repeated tasks allow us to follow the DRY principle (Don't repeat yourself principle).

### Reviewing Functions

- The `return` keyword will immediately exit the function after returning the value. We also say that the function has returned.

#### Recap

- The three types of functions:
  - <ins>Function Declaration:</ins> Function that can be used before it is declared.
  - <ins>Function Expression:<ins> Essentially a function value stored in a variable. It cannot be called before it is declared.
  - <ins>Arrow Function:</ins> A special form of Function Expression. They are great for one-line functions.

> [!Note]
> The three different ways of writing functions work in a similar way: receive data, transform data, and output data.

#### Anatomy of a Function

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/3aea229c-fbad-43eb-9fdb-833549efb237)

### Introduction to Arrays

- Array is a data structure that allows us to bundle multiple values together in a big "container".
- Creating a new array
  - using literal syntax
  - using `Array()` function
- Retrieving items from an array
- Getting an array's length
  - `length` property
- Getting the last element of an array using `length` property
- Mutate elements in an array
- Variable declared with `const` cannot be changed but, we can still change the element inside an array which is declared using `const`.
  - This is because only primitive values are immutable but, arrays are not primitive so, we can change the elements inside it.
  - It works this way because of the way that JS stores things in memory.
  - We will learn more about it in [Section 08](../Section%2008).
  - All you need to know for now is that you can mutate elements inside an array even if it was declared using `const`.
  - What you cannot do is to completely replace the array itself if you've declared it using `const`.
- An array can hold different values of different types, all at the same time.
- In each array element position, JS expects an expression so, we can even have expressions in an array as those expressions will eventually be replaced by their resulting values.
  - Same is true for variables
- We can also have another array nested inside of an array.

### Basic Array Operations (Methods)

- `push()` - Adds the specified element to the end of an array and returns the new length of the array.
- `unshift()` - Adds the specified element in the beginning of an array and returns the new length of the array.
- `pop()` - Removes the last element of the array and returns the removed element.
- `shift()` - Removes the first element of the array and returns the removed element.
- `indexOf()` - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- `includes()` - Determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.
  - `includes()` uses strict equality

### Introduction to Objects

- In arrays, we don't have a way to given each of its elements a name i.e. we cannot reference array elements via names, we reference them via their index numbers.
- To solve that problem, we have another data structure in JS called Objects.
- In objects we define key-value pairs. So, we can give each of the values a name.
- The key is similar to variable name which is followed by a colon and then a value.
- Value can be of any type that we want.
- Values can be expressions.
- Keys are also called properties.
- Objects are the most fundamental concept in whole of JS. So, there are many ways of creating objects.
  - Object literal syntax
- The order of key-value pairs in objects do not matter when we want to retrieve something from it, unlike arrays.
- This means that we should use arrays for ordered data and objects for unstructured data.
- We should also use objects for the data that we actually want to name, and then retrieve from the object, using that name.

### Dot vs. Bracket Notation

- Retrieve data from objects
  - Dot Notation
  - Bracket Notation
- Change data from objects
  - Dot Notation
  - Bracket Notation
- The difference between the dot and bracket notation is that within the square brackets, we could put any expression that we'd like.
- In dot notation, however, it has to be the exact property name that is declared inside the object.
- When should we use the dot notation and when should we use brackets notation?
  - When we need to first compute the property name, then use the brackets notation.
  - In any other case, just use the dot notation, which looks a lot cleaner and it's also easier to use.
- When we try to access a property that does not exist in an object, we get `undefined`.

### Object Methods

- In JS, functions are just another type of value.
- So, if a function is just a value then that means that we can create a key value pair in which the value is a function.
- This means that we can add functions to objects.
- To add a function as a key-value pair in an object, we write the function name as the key which is followed by a colon.
- After the colon, we use the `function` keyword along with a set of parentheses (for parameters) and then a code block - Just like a function expression. This works because the expression produces a value.
- Any function that is attached to an object is called a method.
- In every method (function attached to an object), JavaScript gives us access to a special variable called `this`.
- The `this` keyword is equal to the object on which the method is called. In other words, it is equal to the object calling the method.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
