# Section 10: A Close Look At Functions

**About:** Functions are one of the most fundamental building blocks of any Javascript program. So, let's now turn our attention back to functions because, there is a lot that we don't know yet about them. In this section, we are going to study some quite advanced topics, such as higher order functions to bind method and also closure. It is crucial that you understand these topics before moving on to future sections.

## Table of Content

- [Section 10: A Close Look At Functions](#section-10-a-close-look-at-functions)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Default Parameters](#default-parameters)
    - [How Passing Arguments Work: Value vs. Reference](#how-passing-arguments-work-value-vs-reference)
    - [First-Class and Higher-Order Functions](#first-class-and-higher-order-functions)
    - [Functions Accepting Callback Functions](#functions-accepting-callback-functions)
  - [Author](#author)

## Lessons Learned

### Default Parameters

- Setting default values for function parameters before ES6, using short circuit
- Setting default values for function parameters after ES6
- You can override the default values set in the after ES6 method.
- The default values can contain expressions since expressions produce values.
- We can use the values of other parameters that were set before it, to set the default value of the current parameter.
- We cannot skip arguments of a function when we try to call it.
- If we want to leave 'middle' arguments so, they can have default values, we can set them to `undefined` because, setting them to `undefined` is the same thing as not even setting them.

### How Passing Arguments Work: Value vs. Reference

- Changing the value of parameters inside a function, does not affect the original variables that were passed in, as long as that is a primitve type.
- Changing the value of parameter inside a function, does affect the original object if the passed value is that of an object.
- Passing a primitive type to a function is really just the same as creating a copy outside of the function. So, the value is simply copied.
- On the other hand, when we pass an object to a function, it is really just like copying an object. So, whatever we change in a copy, will also happen in the original.
- Interaction of multiple functions with the same object, can create some problems. Look at its [script](./script.js) file to check out an example for it.
- Passing by value and passing by reference.
- Javascript does not have passing by reference. It only has passing by value; even though it looks like it is passing by reference.

### First-Class and Higher-Order Functions

(Theoretical Lesson)

- Let's now talk about a fundamental property of the Javascript language, which is the fact that it has first class functions.
- This enables us to write higher order functions but, what is that all about?
  - Javascript is a language that has first-class functions which in technical terms means that functions are so-called first citizens.
  - In practice, that means that functions are simply treated as values.
  - We've already touched on this idea a couple of times before but, this is such an important feature of the language that it is worth spending some more time on it.
- Why does Javascript work this way?

  - It is simply because functions are really just another type of objects in Javascript.
  - Since objects are values, functions are values too.
  - Since functions are values, there are a bunch of interesting things that we can do with them, like storing them in variables or object properties, which we have already done a couple times before.

  ```javascript
  const add = (a, b) => a + b; // storing functions in variables

  const counter = {
    value: 23,
    inc: function () {
      this.value++;
    }, // function as an object property
  };
  ```

  - We can also pass functions as arguments to other functions; and we actually already did that before when we added event handlers/listeners to DOM objects.

  ```javascript
  const greet = () => console.log('Hey Bhoami');
  btnClose.addEventListener('click', greet); // passing greet (a function) as parameter to `addEventListener()` function.
  ```

  - Now to make things more interesting, we can also return a function from another function. This may sound crazy but, it can be very useful.
  - Finally, remember that functions are object; and many types of objects in Javascript have methods. So, there are also function-methods i.e. methods that we can call on functions. Again, this may sound crazy but, we will see how to use this to our advantage throughout this section.

  ```javascript
  // we will learn about bind() later in this section
  counter.inc.bind(someOtherObject);
  ```

- The fact that Javascript has first-class functions makes it possible for us to use and write higher-order functions.
- A higher order function is either a function that receive another function as an argument or a function that returns a new function.

```javascript
// Example 01: A function that receives another function as an argument
const greet = () => console.log('Hey Bhoami');
btnClose.addEventListener('click', greet); // passing greet (a function) as parameter to `addEventListener()` function.

// Example 02: A function that returns a new function
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}
```

- We usually say that the function that is passed in as a parameter, is a callback function. That's because the callback function will be called later by the higher order function.
- As for a function that returns another function, this style of function is also used a lot in Javascript but, it is also more advanced. We will explore this deeper a bit later.
- There often seems to be some confusion between first-class functions and higher-order functions. Some people think that they are the same thing but, they are 2 different things.
- First-class function is just a feature that a programming language either has or does not have. All it means that all functions are values. That's it. There are no first-class functions in practice. It is just a concept.
- There are, however, higher-order function in practice, which are possible because the language supports first class functions. So, it is a subtle difference but, still worth noting if you want to be able to talk like a true Javascript master.
- In the next lesson, we will actually create our own higher-order functions.

### Functions Accepting Callback Functions

- Creating functions that accept other functions as an input.
- Functions have methods and properties that you can call on them.
- `function.name` - This property of a function instance indicates the function's name as specified when it was created, or it may be either `anonymous` or `''` (an empty string) for functions created anonymously.
- `array.forEach(callbackFunction)` - This method executes a provided function once for each array element.
- Understanding why callbacks are used so much in Javascript and why are they so helpful.
- Understanding code abstractions.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
