'use strict';

/************************************************************************/
/************************** DEFAULT PARAMETERS **************************/
/************************************************************************/
console.log(
  `/************************** DEFAULT PARAMETERS **************************/`
);

/**
 * Let's start this section about functions with one of the easiest parts,
 * which is default parameters. Let's talk about that now.
 *
 * Sometimes, it is useful to have functions where some parameters are set
 * by default. This way we do not have to pass them in manually in case
 * we don't want to change the default.
 *
 * In this section, we want to continue with the airline theme that we
 * started by the end of the last section.
 *
 * Let's now create a very basic booking function and we are going to do
 * that, starting with the knowledge that we already had previously i.e.
 * without the default parameters first.
 */

let bookings = [];

let createBooking = function (flightNum, numPassengers, price) {
  // enhanced object literal syntax
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

/**
 * So, we start with an empty bookings array and each time we have a
 * booking, we call the createBooking() function and push that booking
 * into the `bookings` array. This is basically to simulate that we are
 * keeping the bookings in some kind of system.
 *
 * This is all very fictional but, it just to show you how the default
 * parameters work.
 *
 * Based on what we learned in the last section about short-circuiting,
 * how would we implement default parameters?
 *
 * Let's start by calling createBooking function withuot specifying some
 * parameters and see what we get.
 */

createBooking('LH123'); // {flightNum: 'LH123', numPassengers: undefined, price: undefined}

/**
 * If we look at the console right now, we wil find that the numPassengers
 * and price are undefined because, we didn't specify them.
 *
 * So, let's use short-circuiting to our advantage, since we know that
 * they are falsy values.
 *
 * NOTE: What we are doing here is the old way of setting default
 * parameters, just to see how it would work before ES6.
 */

createBooking = function (flightNum, numPassengers, price) {
  // ES5 way of setting default parameters
  numPassengers ||= 1;
  price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 199}

/**
 * Above is the ES5 way of setting default values for parameters.
 *
 * However, in ES6, we have a better way to achieve the same result, and
 * it looks like this:
 */

// ES6 way of setting default parameters
createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 199}

/**
 * The ES6 way of setting default values for parameters is a lot nicer
 * and is a lot more intuitive to read.
 *
 * Of course, if we want, we can override those defaults, otherwise it
 * wouldn't make much sense.
 *
 * So, let's try overriding those.
 */

createBooking('LH123', 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}

/**
 * One thing that is really cool about the default values is that they
 * can contain any expression.
 *
 * For example:
 */

// multiplying the price by 2 - example of an expression as a default parameter:
createBooking = function (flightNum, numPassengers = 1, price = 199 * 2) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 398}

/**
 * But, what is even more useful is that we can actually use the values
 * of the other parameters that are set before it.
 *
 * Example: `price` should be calculated based on the number of passengers
 */
createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // default value of price - calculated based on a parameter that was set before this parameter
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

createBooking('LH123', 5); // {flightNum: 'LH123', numPassengers: 5, price: 995}

/**
 * So, the price is now dynamically calculated by default, based on the
 * number of passengers and the price we specify.
 *
 * Again, this only works for parameters that are defined in the list of
 * parameters before the one that we are using it in.
 *
 * NOTE:
 * It wouldn't work the other way round. This is because JS reads the
 * parameters in the order that they are specified so, if we try to use
 * a parameter A in parameter B, parameter B is defined before parameter
 * A - JS will not know what parameter A.
 *
 * Example:
 */

createBooking = function (
  flightNum,
  price = 199 * numPassengers,
  numPassengers = 1
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

createBooking('LH123', 5); // {flightNum: 'LH123', numPassengers: 1, price: 5}

/**
 * Another thing to note here that we cannot skip arguments when we call
 * a function.
 *
 * For example, in our function below, we wanted to leave the
 * numPassengers as the default value, but then specify the price.
 */

createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

// skipping the numPassengers here and specifying the price
createBooking('LH123', 1000); // {flightNum: 'LH123', numPassengers: 1000, price: 199000}

/**
 * This doesn't work because the second parameter is numPassengers and
 * so the number of passengers is now 1000.
 *
 * So, if we want to skip an argument when calling a function, the trick
 * is to set the parameter that you want to skip to `undefined`.
 *
 * Example:
 */

createBooking('LH123', undefined, 1000); // {flightNum: 'LH123', numPassengers: 1, price: 1000}

/**
 * This works because setting the parameter to `undefined` is the same
 * thing as not even setting it i.e. when we don't set a parameter,
 * meaning that if we don't even pass an argument into that parameter
 * it by default, takes the value of `undefined`.
 *
 * So, explicitly setting it to `undefined` is exactly the same as not
 * even setting the value of the parameter.
 *
 * So, this is how we basically skip a default parameter that we want to
 * leave at its default.
 *
 * So, if we reload and check the console, we will see that the result
 * of above function call is that we now indeed have the price set to 1000
 * and the numPassengers set to 1 (which is the default that we set in
 * the function).
 *
 * So, default parameters are yet another very nice addition to the
 * language in ES6 and pretty straightforward to understand too.
 */

/************************************************************************/
/*********** HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE ***********/
/************************************************************************/
console.log(
  `/*********** HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE ***********/`
);

/**
 * In this lesson, let's quickly talk about how exactly it works to pass
 * arguments into function.
 *
 * This goes back to the lesson in which we talked about primitive vs.
 * objects (or primitive type vs. reference types).
 *
 * So, this lesson is kind of a review to that lesson but, applied to
 * functions. This is because, it is super important that we really
 * understand how primitives and objects work in the context of functions.
 */

// flight number
let flight = 'LH234';

// passenger
let bhoami = {
  name: 'Bhoami Khona',
  passport: 2345121,
};

// a check in function where our passenger can check in
let checkIn = function (flightNum, passenger) {
  /**
   * Let's say that the flight number was changed.
   *
   * NOTE: This is not a good practice to change the value of the
   * parameters of a function but, this is just to make a point.
   *
   * Let's say for some reason, the flight number is changed to LH999.
   */
  flightNum = 'LH999';
  passenger.name = 'Ms.' + passenger.name;

  // assume that the passport number is coming from database and we are
  // cross-checking it with the one provided by the passenger.
  if (passenger.passport === 2345121) {
    // alert('check in');
    console.log('check in');
  } else {
    // alert('wrong passport');
    console.log('wrong passport');
  }
};

checkIn(flight, bhoami);

/**
 * Now we want to log the flight and the `bhoami` object, both in the
 * console, after calling the checkIn() function.
 */
console.log(flight);
console.log(bhoami);

/**
 * If we check the console, we will find that our flight number is still
 * LH234 - which is exactly as we defined it before the checkIn()
 * function, even though it seems like it was re-defined inside the
 * function - it really wasn't.
 *
 * After the flight, we also get the `bhoami` object but, the name
 * inside the `bhoami` object is changed to "Ms.Bhoami Khona" - this
 * change was made inside the function.
 *
 * Let's analyze what happened here.
 *
 * The flightNum is a primitive type - it is just a string and as we
 * passed that value into the function (when we called the function),
 * the flight number there is basically just a copy of the original
 * value.
 *
 * So, flightNum - the argument contains the copy of the variable
 * flightNum. So, the flightNum argument is a copy of the orginal value,
 * it is not the orginal value of the flightNum variable.
 *
 * So, flightNum is a completely different varaible than the argument that
 * we passed in. Therefore, as we change the flightNum argument's value
 * inside the checkIn() function, it is not reflected outside, in the
 * original flightNum variable - which is why the original flightNum
 * variable is still "LH234", exactly for the same reason as we saw before
 * in the primitives vs. reference types lesson.
 *
 * But now what about the `bhoami` object that we passed into the
 * checkIn() function? In the checkIn() function, the `bhoami` object
 * is referred to as "passenger".
 *
 * In the function we changed the `passenger` object and as we then saw,
 * the original `bhoami` object was also affecter by that change. So,
 * why did that happen?
 *
 * When we pass a reference type to a function, what is really copied
 * is reall just a reference to the object in the memory heap.
 *
 * So, that would be exactly like doing this: `const passenger = bhoami`.
 * As you already know, when we try to copy an object like this, we are
 * really only copying the reference to that object in the memeory
 * heap, but they both point to the same object in the memory.
 *
 * That's exactly what is also happening here, with the `bhoami` object,
 * as we pass it into the checkIn() funtion where it is called passenger.
 *
 * So, inside the checkIn() function, as we are manipulating the passenger
 * object, it is exactly the same as manipulating the `bhoami` object.
 * This is because, they both are the same object in the memory heap.
 *
 * In summary, passing a primitive type to a function is really just
 * the same as creating a copy like this: `const flightNum = flight`,
 * outside of the function. So, the value is simply copied.
 *
 * On the other hand, when we pass an object to a function, it is really
 * just like copying an object like this: `const passenger = bhoami`.
 *
 * So, whatever we change in the copy, will also happen in the original.
 *
 * Now, of course, we need to be careful with this behavior and always
 * keep it in mind. This is because the fact that objects behave this
 * way when passed to functions can have un-forseeable consequences in
 * large code bases. This is especially true when you are working with
 * multiple developers.
 *
 * Let's write another quick function here to see what can happen, in
 * order to prepare you for real-life.
 *
 * Let's just create a function called newPassport(). It will accept
 * any person and basically, it will simply change that person's passport
 * number.
 */

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

/**
 * Let's call the newPassport() function with `bhoami` object.
 *
 * Let's say that I booking the flight with my original passport number
 * that is already defined in the original `bhoami` object. So, the
 * original passport number will be then used to compare my passport to
 * inside the checkIn() function.
 *
 * But now, I change my passport before I checkIn().
 *
 * So, let's see what happens then.
 */
newPassport(bhoami);
checkIn(flight, bhoami);

/**
 * If we check the console now, it says "wrong password". So, what is
 * happening now is that we have two function manipulating the same
 * object and that is creating a problem.
 *
 * In the newPassport() function, I am passing in an object, and that
 * object is called `person` inside the newPassport() function. As the
 * function manipulates that `person` object, it also gets reflected in
 * the original `bhoami` object.
 *
 * Now as we pass that `bhoami` object in the checkIn() function, the
 * passport is no longer the same as the original one.
 *
 * This is a good example of how the interaction of different functions
 * with the same object can create some issues.
 *
 * Of course this is just a simple example but, I'm sure you get the
 * point.
 *
 * What matters is that you are aware of this issue and then you can
 * be careful with it.
 */

/**
 * In programming, there are two terms that are used all the time when
 * dealing with functions, which is passing by value, and passing by
 * reference.
 *
 * Many experienced programmers that are new to JavaScript have some
 * confusion between these terms and how it works in JavaScript. So,
 * let's quickly address that here.
 *
 * JavaScript does not have passing by reference, it only has passing
 * by value - even though it looks like it's passing by reference.
 *
 * So, there are languages like C++, where you can pass a reference to
 * any value, instead of the value itself. This works even with
 * primitives. So, you could pass a reference to the value of 5, and
 * then the original value, outside of the function, would be changed.
 * This is called "Pass by Reference".
 *
 * But, once again, JavaScript does not have pass by reference.
 *
 * So, if you already know some programming, but are new to JavaScript,
 * be sure to understand it.
 *
 * This is confusing because, because as we just learned, for objects,
 * we do infact pass in a reference, which is the memory address of the
 * object. However, that reference itself is still a value. It is simply
 * a value that contains a memory address.
 *
 * Basically, we pass a reference to the function, but we do not pass
 * by reference, and this is an important distiction.
 */

/**
Explanation

When we pass a primitive type as an argument on a function, the function makes a copy of the original value, and works with it.

When we pass an object as an argument on a function, the function makes a copy of the reference that points to the place of the memory where the object is stored. This copy is a value itself, is not a reference. Through this value, the original object can be modified from inside of a function.



Summary

- In programming languages, Arguments can be passed by value, or passed by reference.

- JavaScript works only passing by value.

- When we pass primitive values, the function works with a value, which is a copy of the original value.

- When we pass an object, the function works with a value, which is a copy of the reference that address to the spot in the memory where the original object is in the memory (still is not a reference).
 */
/************************************************************************/
/**************** FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ****************/
/************************************************************************/
console.log(
  `/**************** FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ****************/`
);

/**
 * Now that we know what higher-order functions are, let's actually create
 * our own, just to demonstrate how they work.
 *
 * In this lesson, we are going to create a function that accepts other
 * functions as an input.
 *
 * But to start, let's write two very generic functions that do simple
 * string transformations.
 */

// This function simply replaces all the spaces in a string
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// This function will transform the first word of the input string to uppercase
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function - Takes in a function as an argument
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  /**
   * In the last lesson we learned that function even have methods and
   * besides methods, they can even have properties.
   * So, functions have a `name` property.
   */
  console.log(`Transformed by: ${fn.name}`);
};

/**
 * Basically, what we want the transformer() function to do is to
 * transform the string that we pass in, using the function that we pass
 * in.
 *
 * Notice how we are only passing in the function value itself. We are not
 * calling it, we are really just passing in its value. It will be the
 * transformer() function that will call that function.
 */
transformer('JavaScript is the best!', upperFirstWord); // JAVASCRIPT is the best!

/**
 * If we check our console now, we see that the original string looks like
 * the way we passed it in but then, the transformed string indeed, was
 * transformed just as we hoped it would.
 *
 * So, the first word is the uppercase and that is of course the work of
 * upperFirstWord() function.
 *
 * Finally, we can also see that it was transformed by upperFirstWord -
 * that is the `fn` name.
 *
 * So, `name` is just a property of functions which returns the name of
 * the function and we can use it on any function in JavaScript.
 *
 * Now let's try the same with our other function:
 */

transformer('JavaScript is the best!', oneWord); // javascriptisthebest!

/**
 * Let's recap:
 *
 * We are calling the transformer function and into that function, we are
 * passing the callback function.
 *
 * Remember that the functions we pass in as arguments are called
 * callback functions and that's because we do not call them ourselves
 * but instead, we tell JavaScript to basically call them later.
 *
 * In our case, calling them later happens inside the transformer()
 * function. The callback functions inside the transformer() function is
 * called `fn` so, we have to use fn() to call those functions inside
 * transformer().
 *
 * In fact, this is exactly the same idea that we already talked about,
 * using the addEventListener() function.
 *
 * Let's say that we have this very simple function called highFive()
 * which doesn't really do much except of logging something to the
 * console.
 */

const highFive = function () {
  console.log('👋');
};

document.body.addEventListener('click', highFive);

/**
 * Just like our transformer function, we pass in a callback function
 * in the addEventListener() function.
 *
 * The callback function in the case of addEventListener() is also
 * called the event handler or event listener but, that doesn't really
 * matter.
 *
 * What matters is that conceptually, the argument function `highFive` is
 * the callback function and the addEventListener() function is the
 * higher order function.
 *
 * So, it is just a callback function that JS will call whenever we
 * click on the body.
 *
 * There are many other examples in the JavaScript language; and this
 * concept of callback functions is used all the time in built-in JS
 * functions.
 *
 * So, there are many more examples, for example the forEach() function
 * that we call on arrays:
 */

// NOTE: We will learn about forEach() in the next section
['Bhoami', 'Jonas', 'Janine'].forEach(highFive);

/**
 * If we check the console now, we will find that the highFive() function
 * was executed 3 times. That's because we have 3 elements in the array
 * on which we called the forEach() method. But, we will learn about the
 * forEach() method in the next section.
 *
 * What matters here is that once again, we use the concept of the
 * callback function here.
 *
 * This is something that is really common in JavaScript.
 *
 * Let's now take a minute or two to understand why that is. Why are
 * callback functions so much used in JavaScript and why are they so
 * helpful?
 *
 * The first big advantage of this is that it makes it each to split up
 * our code into more re-usable and interconnected parts.
 *
 * The second and way more important advantage is the fact that callback
 * functions allow us to create abstraction.
 *
 * Let's understand what that means.
 *
 * What we did in our transformer example was to create a level of
 * abstraction and abstraction is something that is really important in
 * programming.
 *
 * Basically, what abstraction means is that we hide the detail of some
 * code implementation because we don't really care about all that detail.
 *
 * This allows us to think about problems at a higher more abstract level.
 * That's why it is called an abstration.
 *
 * Coming back to our tranformer example, the transformer() function
 * does not care at all how the string is transformed. It doesn't care
 * about that level of detail.
 *
 * All that it wants to do is to transform a string, but doesn't care
 * how it should do it.
 *
 * What we mean here is that we could have easily taken the code from
 * oneWord() function or upperFirstWord() function and directly placed
 * it inide the transformer() function but instead, we abstracted those
 * codes away into other functions.
 *
 * So, we created a new level of abstraction and by doing that our main
 * transformer() function is really only concerned with transforming the
 * input string itself but, it doesn't matter how the transforming
 * actually works.
 *
 * Basically, it is delegating the string transformation to the other
 * lower level of functions, which are oneWord() and upperFirstWord().
 *
 * Hope this makes sense and we will also come back to this idea of
 * abstraction later when we talk about object oriented programming.
 *
 * But, it is good for you think and talk about it as soon as possible,
 * so that you can start to get an idea of this really important concept
 * of abstraction.
 *
 * Now, with this idea of abstraction and higher levels and lower levels
 * of abstraction, it makes sense that the kind of transformer() function
 * is, is called a higher-order function.
 *
 * Again, that's because functions like transformer() operates at a higher
 * level of abstraction, leaving the low-level details to the low-level
 * functions.
 *
 * NOTE: They are not really called lower-order or low-level functions
 * but, that just makes sense in this kind of a circumstance.
 *
 * Understand this is absolutely crucial for your process. In fact, this
 * lesson could be considered one of the most important lessons in the
 * course. This is because callback functions are really, a vital part
 * of the JavaScript language. That's one of the main takeaways from this
 * lesson.
 *
 * They allow us to create the kind of logic that we used in our
 * transformer() function so, it is good idea to review this lesson
 * thoroughly and maybe even write your own example of something that
 * you see in the real world using the same concept.
 *
 * In the built-in functions like addEventListener() and forEach(),
 * these callback functions are very important and useful because we
 * use them to tell addEventListener() and forEach() what exactly they
 * should do.
 *
 * For example, the addEventListener() function on its own would have
 * no idea of what to do whenever the click event happens. That's why
 * we pass in the callback function to tell the addEventListener()
 * function exactly what to do.
 */

/***********************************************************************/
/******************** FUNCTIONS RETURNING FUNCTIONS ********************/
/***********************************************************************/
console.log(
  `/******************** FUNCTIONS RETURNING FUNCTIONS ********************/`
);

/**
 * Let's now do the oppposite of the last lesson and create a function
 * that returns a new function.
 *
 * Let's create a simple greet() function which will take a simply
 * greeting string as an argument and it will simply return a another
 * function.
 *
 * This function that we return will have a parameter to receive
 * arguments. This function will simple log to the console the greeting
 * and the name of the person that we pass into it.
 */

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

/**
 * Let's now actually use the greet() function
 */
greet('Hey');

/**
 * What will be the result of the function call above?
 *
 * It is going to be the function that we are returning from it. So, let's
 * store it in a variable.
 */

const greeterHey = greet('Hey');

/**
 * Now, `greeterHey` is the function that has been returned when we called
 * greet().
 *
 * This means that we can now call `greeterHey` function just as as if it
 * was any other function that we defined ourselves.
 */

greeterHey('Bhoami'); // Hey Bhoami
greeterHey('Jonas'); // Hey Jonas

/**
 * Now if we check the console, we get "Hey Bhoami" and "Hey Jonas" and
 * this worked because greeterHey is essentially the function that is
 * returned from greet() function when we called it.
 *
 * Now we are calling it with the argument 'Bhoami' and 'Jonas' which is
 * called `name` inside of that function.
 *
 * The greeting itself is still coming from the greet() function and in
 * case you are wondering why that works, it is because of something
 * called a closure.
 *
 * Closures are a very complex and difficult to understand mechanism
 * that's part of JavaScript, which is why there are 2 separate lessons
 * at the end of the section about closures.
 *
 * Closures is one of the most misunderstood topics in JavaScript so,
 * don't worry about it now. What matters here is that our first function
 * greet(), returned a new function that we stored into `greeterHey`
 * variable and this variable is now just a function that we can call
 * as we did above.
 *
 * Of course, we can also do it all in one go:
 */

greet('Hello')('Bhoami'); // Hello Bhoami

/**
 * Here greet("Hello") represents the function that is returned from
 * the greet() function and we call that function by using another set
 * of parentheses and an argument.
 *
 * It is sort of like chaining methods.
 *
 * It looks a bit weird but, it works.
 *
 * At this point in time, this example might look a bit weird and
 * unnecessary for you, you might wonder what is the point of having
 * functions returning other functions?
 *
 * But, this will actually become extremely useful in some situations.
 * Especially if we are using a really important programming paradigm
 * called functional programming.
 *
 * We will look into functional programming by the end of the course.
 *
 * Make sure to understand what happened here; especially this: greet('Hello')('Bhoami');
 *
 * If you understand that, then I'm sure you understand everything we
 * learned in this lesson.
 *
 * As a small challege, try to re-write the entire greet() function as
 * an arrow function.
 *
 * It might look a little bit confusing but, I am sure you can do it.
 * So, just take some time and try to re-write the entire greet()
 * function using only arrow functions.
 */

// challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Howdy')('Bhoami'); // Howdy Bhoami

/**
 * So, using arrow function is an even shorter way of writing the greet()
 * function but, in my opinion it is a lot more confusing to look at,
 * especially if you are a beginner. That's why it is better to write it
 * using the traditional function syntax.
 *
 * But, in the end, it is also simply one arrow function returning
 * another arrow function. That's the essence of this lesson - which I
 * hope is clear to you.
 */
