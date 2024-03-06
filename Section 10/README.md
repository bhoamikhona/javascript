# Section 10: A Closer Look At Functions

**About:** Functions are one of the most fundamental building blocks of any Javascript program. So, let's now turn our attention back to functions because, there is a lot that we don't know yet about them. In this section, we are going to study some quite advanced topics, such as higher order functions to bind method and also closure. It is crucial that you understand these topics before moving on to future sections.

## Table of Content

- [Section 10: A Closer Look At Functions](#section-10-a-closer-look-at-functions)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Default Parameters](#default-parameters)
    - [How Passing Arguments Work: Value vs. Reference](#how-passing-arguments-work-value-vs-reference)
    - [First-Class and Higher-Order Functions](#first-class-and-higher-order-functions)
    - [Functions Accepting Callback Functions](#functions-accepting-callback-functions)
    - [Functions Returning Functions](#functions-returning-functions)
    - [The call and apply Methods](#the-call-and-apply-methods)
    - [The bind Method](#the-bind-method)
    - [Immediately Invoked Function Expressions (IIFE)](#immediately-invoked-function-expressions-iife)
    - [Closures](#closures)
      - [Closures Summary](#closures-summary)
    - [More Closure Examples](#more-closure-examples)
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

### Functions Returning Functions

- Creating a function that returns a new function and how to call them.
- A super brief introduction to closures.

### The call and apply Methods

- Setting up `this` keyword manually and understanding why we would need it.
- `functionName.call(thisArg, arg1, ... , argN)` - This method calls the function with a given `this` value and arguments provided individually.
  - The `thisArg` is the value to use as `this` when calling `functionName`.
  - `arg1, ... , argN` - Arguments required for `functionName`.
- `functionName.apply(thisArg, argsArray)` - This method calls the specified function with a given `this` value, and `arguments` provided as an array (or an array-like object).
  - `thisArg` - The value of `this` provided for the call to `functionName`.
  - `argsArray` - An array-like object, specifying the arguments with which `functionName` should be called, or `null`, or `undefined` if no arguments shouls be provided to the function.

### The bind Method

- `functionName.bind(thisArg, arg1, ... , argN)` - This method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
  - `thisArg` - The value to be passed as the `this` parameter to the target function when the bound function is called.
  - `arg1, ... , argN` - Arguments to prepend to arguments provided to the bound function when invoking `functionName`.
- The concept of partial application.
  - Partial application means that a part of the arguments of the original function are already applied i.e. already set.
- `bind()` method with event listeners.
- `bind()` method with partial application.
- Use `null` as the value for `this` keyword in `bind()` incase you need to use `bind()` but, have no use for the `this` keyword.

### Immediately Invoked Function Expressions (IIFE)

- Creating an IIFE function and calling it.
- The importance of IIFE functions.
- A very brief introduction to data encapsulation and data privacy.

### Closures

- There is an almost mystical feature of JavaScript functions that many developers fail to fully understand.
- What we are talking about is something called <ins>closures</ins>.
- When asked what is the hardest JavaScript concept to understand, many JavaScript beginners say that it is closures.
- However, with right explanation, it is actually not that hard, especially if you understand everything that you've learned in this course thus far, such as execution context, the call stack, and scope chain.
- This is because closures kind of bring all of these concepts together in a beautiful, almost magical way.
- Let's see what closures are all about.
- We will start by creating a new function called `secureBooking()`.

```javascript
const secureBooking() = function() {}
```

- It is this function that will create the closure.
- The first thing you need to know about closures is that a closure is not a feature that we explicitly use i.e. we don't create closures manually like we create a new array or a new function.
- A closure simply happens automatically in certain situations, we just need to recognize those situations.
- That's what we are going to do here, in our example.
- We will create one of those situations so that we can then take a look at a closure.
- Let's continue writing our example.

```javascript
/**
 * this function is called secureBooking() because the passengerCount
 * variable canno t be manipulated/accessed from the outside of this
 * function.
 */
const secureBooking() = function() {
  // passengerCount will start at 0, but we will be able to manipulate it.
  let passengerCount = 0;
}
```

- What's special about this function is that it will return a new function.
- This returning function will update the `passengerCount` variable i.e. the variable defined in the parent function (that is an important detail to note).

```javascript
/**
 * this function is called secureBooking() because the passengerCount
 * variable canno t be manipulated/accessed from the outside of this
 * function.
 */
const secureBooking() = function() {
  // passengerCount will start at 0, but we will be able to manipulate it.
  let passengerCount = 0;

  // returns a function that updates passengerCount i.e. a variable
  // declared in the parent function.
  return function() {
    passengerCount++;
    // logging the updated passengerCount in the console
    console.log(`${passengerCount} passengers`);
  }
}

// calling secureBooking() function and storing the resulting function
// in a variable called `booker`.
const booker = secureBooking();
```

- This example is pretty similar to what we did in the [Functions Returning Functions](#functions-returning-functions) lesson.
- So, we have one function that we call and it will return a new function.
- So, as we call `secureBooking()`, it will return the function and this returning function will then be stored inside the `booker` variable.
- This means that `booker` is now going to be a function as well.
- So, let's analyze in detail what happens when `const booker = secureBooking()` is executed, using all the concepts that we already know about.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/f1b7a4ae-c2c0-41cd-963c-a849e7dfe306)
- Before we start running the `secureBooking()` function, our code is running in the global execution context.
- In the global execution context, we currently only have the `secureBooking()` function so, we can also say that the global scope now contains `secureBooking()`.
- Then, when the `secureBooking()` is actually executed, a new execution context is put on top of the execution stack.
- Remember, each execution context has a variable environment, which contains all its local variables.
- In this case, it only contains the `passengerCount` set to 0.
- This variable environment is also the scope of `secureBooking()` function. So, the scope chain of this execution context looks like this:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/ce8bb741-7790-4915-9f8c-9b15d317da42)
- So, `passengerCount` is in the local scope, but of course this scope also gets access to all variables of the parent's scopes.
- In this case, just a global scope.
- Anyway, in the next like of the `secureBooking()` function, a new function is returned and it will be stored in the `booker` variable.
- So the global context now also contains the `booker` varaible.
- Now, what else happens when the `secureBooking()` function returns?
- It's execution context pops off the stack and disappears.
- So, the `secureBooking() has done its job and it has now finished execution.
- It really is gone now and that's the important part to be aware of and to keep in mind.
- For now, that's actually all we did.
- So, all this is nothing new at this point.
- All we did was to analyze the call stack and the scope chain as we call the `secureBooking()` function. This is going to be important to later on understand the closure.
- So, as of now, we didn't see closure yet. All we did was use the knowledge that we already have to understand how the `booker()` function was created, because that's going to be important for the next step.
- Let's now go back to our code to actually use the `booker()` function and then finally see the closure in action.
- Now that we understand how the `booker()` function was created, let's now call it.

```javascript
/**
 * this function is called secureBooking() because the passengerCount
 * variable canno t be manipulated/accessed from the outside of this
 * function.
 */
const secureBooking() = function() {
  // passengerCount will start at 0, but we will be able to manipulate it.
  let passengerCount = 0;

  // returns a function that updates passengerCount i.e. a variable
  // declared in the parent function.
  return function() {
    passengerCount++;
    // logging the updated passengerCount in the console
    console.log(`${passengerCount} passengers`);
  }
}

// calling secureBooking() function and storing the resulting function
// in a variable called `booker`.
const booker = secureBooking();

// calling the booker() function
booker();
booker();
booker();

/*
OUTPUT:

1 passengers
2 passengers
3 passengers
*/
```

- Now when we reload the page, we get 1 passengers, 2 passengers, and 3 passengers as the output. What this means is that the `booker()` function was in fact able to increment the `passengerCount` to 1, then to 2, and then to 3.
- But now if we think about this, then how is this even possible?
- How can the `booker()` function update the `passengerCount` variable that is defined in a `secureBooking()` function that actually has already finished executing?
- The `secureBooking()` function has already finished its execution. It is gone. So, its execution context is no longer on the stack, but still the inner function, which is the `booker()` function, is still able to access the `passengerCount` variable that's inside of the `booker()` function that should no longer exist.
- Maybe you can guess what makes it possible - it is a closure.
- But, before we look into how closure works, just appreciate once more, how strange this actually is.
- Explanation:
- The `booker()` function is simply a function exists out in the global environment or in the global scope.
- The environmnet in which the `booker()` function was created i.e. the environment of `secureBooking()` function, is no longer active. It is in-fact gone.
- But still, the `booker()` function somehow continues to have access to the variables that were present at the time when it was created; in particular, the `passengerCount` variable.
- That's exactly what closure does.
- So, we can say that a closure makes a function remember all the variables that existed at the function's birth place.
- We can imagine the `secureBooking()` being the birth place of the `booker()` function.
- So, the `booker()` function remembers everything at its birthplace by the time it was created; and this cannot simply be explained with the scope chain alone.
- So, we need to also understand the closure. So, let's understand how it actually, really works.
- This is how we left the call stack and the scope chain:
- ![img](https://github.com/bhoamikhona/javascript/assets/50435319/cbe91663-d949-4f96-ac4f-da3853b841cd)
- The most important thing to notice here is that the execution context of `secureBooking()` is no longer in the call stack, this is because `secureBooking()` has finished its execution long ago.
- So now, it's time to finally run the `booker()` function and see exactly what's going to happen.
- ![z](https://github.com/bhoamikhona/javascript/assets/50435319/f4389d1a-603b-4b49-8fa2-83f2c27e861d)
- Note that `booker()` is really the function that is returned from the `secureBooking()` function which is located in the global scope.
- Anyway, the first thing that's going to happen is that a new execution context is created and put on top of the call stack, and the variable environment of this context is empty - simply because there are no variables declared in this function.
- What about the scope chain?
- Since `booker()` is in the global context, it is simply a child's scope of the global scope, just like this:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/d9096c6c-f811-4aff-b2db-05e46fa7e458)
- But maybe now you are starting to see the problem.
- How will the `booker()` function access the `passengerCount` variable? It is nowhere to be found in the scope chain.
- This is where we start to unveil the secret of closure.
- The secret is basically this: any function always has access to the variable environment of the execution context in which the function was created.
- In the case of `booker()` this function was created/born in the execution context of `secureBooking()`, which was popped off the stack previously.
- Therefore the `booker()` function will get access to the variable environment of the `secureBooking()` function which contains the `passengerCount` variable.
- ![gif](https://github.com/bhoamikhona/javascript/assets/50435319/22cefb70-3623-4b2d-8b11-e050f4d7c4a2)
- And this is how the function will be able to read and manipulate the `passengerCount` variable.
- So, it is this connection that we call closure.
- Let's recap to make it really clear:
- A function always has access to the variable environment of the execution context in which it was created, even after that execution context is gone - this last part is very important.
- The closure is then basically this varaible environment attached to the function, exactly as it was at the time and place that function was created.
- This probably still sounds confusing, but we will go through some analogies in a minute to make it more digestible.
- For now, we are just trying to understand the mechanism behind the closure, so how it all works behind the scenes.
- What matters the most here is that the `booker()` function has access to the `passengerCount` variable because it is basically defined in the scope in which the `booker()` function was actually created.
- In a sense, the scope chain is actually preserved through the closure, even when a scope has already been destroyed because its execution context is gone.
- This means that even though the execution context has actually been destroyed, the variable environment somehow keeps living somewhere in the engine.
- Now, we can say that the `booker()` function closed over its parent's scope or over its parent's variable environment; and this includes all function arguments even though, in this example, we don't have any.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/c89b978d-6e54-4164-82d4-3751a0bcee48)
- And now, this attached or closed over variable environment stays with the function forever.
- It will carry it around and be able to use it forever.
- To make it more digestible, we can also say that thanks to the closure, a function does not lose connection to variables that existed at the function's birthplace - that's a bit more intuitive.
- Let's see what happens now with the execution of the `booker()` function.
- ![gif](https://github.com/bhoamikhona/javascript/assets/50435319/ad71570a-6383-4828-b817-cc7398c127b0)
- The `booker()` function attempts to increase the `passengerCount` variable.
- However, this variable is not in the current scope.
- So, JavaScript will immediately look into the closure and see if it can find the variable there - and it does this even before looking at the scope chain.
- For example, if there was a global `passengerCount` variable set to 10, it would still first use the one in the closure.
- So the closure basically has priority over the scope chain.
- After running the `booker()` function, the `passengerCount` becomes 1, the message is logged and its execution context is popped off the stack.
- Then execution moves to the next line. We get a new execution context and the closure is still sthere, still attached to the function and the value is still 1.
- So, now this function executes, increasing the `passengerCount` to 2 and logging a message again.
- And that's what closure are and how they work behind the scenes.
- This is all quite complex. So, let's look at a couple of different definitions of closures. Some more formal one and some more intuitive ones and maybe easier to grasp.

#### Closures Summary

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/d2b1d30f-729a-4720-888d-0e43ea338a04)
- The most formal definition of closure is the one we already saw, which is that a closure is the closed over variable environment of the execution context in which a function was created even after that execution context is gone or in other words, even after the function to which the execution context belongs, has returned.
- Next, and a bit easier to understand, a closure gives a function access to all the variables of its parent's function. So the function in which it is defined even after that parent function has returned.
- So, the function keeps a reference to its outer scope even after that outer scope is gone, which basically preserves the scope chain throughout time.
- Another definition or let's say analogy is that a closure makes sure that a function never looses connection to the variables that existed at the function's birthplace.
- It remembers the variables, even after the birthplace is gone.
- It is like a person who doesn't lose connection to their hometown.
- In this analogy, the person is the function and the hometown is the function's parent scope, and the function then doesn't lose the connection to the variables stored in this parent scope.
- Finally, some people like to think of this attached variable environment as a backpack. In this analogy, a function has a backpack, which it carries around wherever it goes.
- This backpack contains all the variables that were present in the environment in which the function was created.
- Then, whenever a variable can't be found in the function scope, JavaScript will look into the backpack and take the missing variable from there.
- So, kind of similar to the other definitions, but maybe a little bit more visual.
- These are some of the different ways of defining closure, but they all mean the same thing i.e. they all represent the same idea.
- Finally, we need to understand that we do not have to create closures manually.
- Instead, this is something that JavaScript does completely automatically, we don't have to do anything.
- Also, there is no way for us to explicitly access closed over variables.
- That's because closures are not like a tangible thing. They are not like an object or so, that we can access.
- We cannot just reach into a closure and take variables from it.
- That's impossible because a closure is just an internal property of a function.
- We can observe that a closure happens because functions magically keep having access to variables that should no longer exist, but we cannot directly access these variables.
- However, what we can do is to actually take a look at this internal property, in the console.
- So, let's quickly do that before we finish this lesson.
- We can do that by using `console.dir()` of the `booker()` function itself.

```javascript
/**
 * this function is called secureBooking() because the passengerCount
 * variable canno t be manipulated/accessed from the outside of this
 * function.
 */
const secureBooking() = function() {
  // passengerCount will start at 0, but we will be able to manipulate it.
  let passengerCount = 0;

  // returns a function that updates passengerCount i.e. a variable
  // declared in the parent function.
  return function() {
    passengerCount++;
    // logging the updated passengerCount in the console
    console.log(`${passengerCount} passengers`);
  }
}

// calling secureBooking() function and storing the resulting function
// in a variable called `booker`.
const booker = secureBooking();

// calling the booker() function
booker();
booker();
booker();

/*
OUTPUT:

1 passengers
2 passengers
3 passengers
*/

// taking a look at the internal property in the console for closure
// look at: function anonymous() => scopes => closures
console.dir(booker);
```

> [!NOTE]
>
> - The `console.dir()` static method displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
> - In other words, `console.dir()` is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/fcd5a169-b674-4b75-9ba5-a4252f028030)
- If we look at the console now, we will see the internal scopes property and it is represented like so: `[[scopes]]`.
- This internal scopes property is basically the environment of the `booker()` function.
- If we expand it in the console, we can actually see the closure coming from `secureBooking()`.
- This is where we see the `passengerCount` which currently stands at 3.
- So, this closure is the variable environment of the `secureBooking()`.
- That's the one that is being preserved by the closure.
- NOTE: Whenever we see the double square brackets e.g. `[[scope]]`, it means that it is an internal property, which we cannot access from our code.
- In the next lesson we are going to take a look at 3 more examples of closures and also analyze how they work, because it is really important that you understand this concept of closures.
- It is a feature that's used all the time in JavaScript and many times, even without us realizing that closures are happening.
- So, if you want to become confident as a programmer, you always need to know how exactly everything in your code works, and that of course includes closures.
- MY ANALOGY:
- I think the concept of closures can be thought of as heirlooms.
- When an ancestor passes away, they leave their heirlooms behind for their children to own. So, when the function is finished executing and it's execution context is gone from the call stack, you can think of it as a function "dying" and the variables declared in it as its function, you can think of that returning function as the child of that parent function which gets the heirlooms to keep/use/access for whenever they need.

### More Closure Examples

- Creating closures without a function returning from another function.
- `setTimeout(function, milliseconds)` - This method calls a function after a number of milliseconds.
  - `function` - The function to execute
  - `milliseconds` (optional) - Number of milliseconds to wait before executing. Default is 0.
- Closures have priority over the scope chain.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
