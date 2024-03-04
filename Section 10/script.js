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

/**********************************************************************/
/********************* THE CALL AND APPLY METHODS *********************/
/**********************************************************************/
console.log(
  `/********************* THE CALL AND APPLY METHODS *********************/`
);

/**
 * In this lesson, we are going to go back to the `this` keyword and learn
 * how we can set the `this` keyword manually. We will also learn why we
 * would want to do that.
 *
 * Let's say that we are an ariline, again; and in this case, Luftansa.
 *
 * Let's create a very simple object for this airlime with a very simple
 * booking method as well.
 */

let luftansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],

  // Enhanced Object Literal Syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

luftansa.book(239, 'Bhoami K Khona'); // Bhoami K Khona booked a seat on Luftansa flight LH239
luftansa.book(635, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Luftansa flight LH635

console.log(luftansa);

/**
 * For now, this is just a nice review of how the `this` keyword works.
 *
 * Now, let's say that after some years, the Luftansa Group create a new
 * airline called Eurowings so, let's create that.
 */

let eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

/**
 * We also want to be able to take bookings for a Eurowings flight but,
 * simply copy pasting or re-creating the same book() function from
 * Luftansa to Eurowings is a bad practice.
 *
 * So, of course we are not going to do that. Instead, we will just take
 * the method and store it in an external function. Then, we can re-use
 * that function for all of the different airlines.
 *
 * So, we will simply create a new function in global scope called book()
 * and we will simply set it to `luftansa.book`.
 *
 * Again, this is possible because JavaScript has first class functions
 * so, we can simply take the book() function value from `luftansa` object
 * and store it into a new variable, which we also call book().
 */

let book = luftansa.book;

/**
 * We could have written the function in the gloabl scope but, that is
 * just not necessary.
 *
 * We have it inside the luftansa object and so, let's just leave it
 * there and assign it to the `book` variable in the global scope.
 *
 * Let's now try to use the book() in global scope to do a new booking
 * now and let's see what happens.
 */

// book(23, 'Sarah Williams'); // TypeError

/**
 * We get an error which says "Cannot read property of undefined".
 * So, why did that happen?
 *
 * It happened because the `book()` function in the global scope is now
 * just a regular function call; and as we learned in one of the previous
 * sections, in a regular function call, the `this` keyword points to
 * undefined (at least in strict mode).
 *
 * So again, the `book()` function in global scope is no longer a method.
 * It is now a separate function. It is a copy of the method inside the
 * luftansa object but, it is not a method anymore - it is now a function.
 *
 * So, in the global scope, the book() function is just a regular function
 * call. Therefore, the `this` keyword inside of it now points to
 * `undefined`.
 *
 * That's why it was mentioned earlier that the `this` keyword depends on
 * how the function is actually called.
 *
 * Make sure to understand these dynamics.
 *
 * Now, how do we actually fix this problem? In other words, how do we
 * tell JavaScript that we want to create a booking on the new Eurowings
 * airline.
 *
 * Well, we need to tell JavaScript explicitly what the `this` keyword
 * should be like.
 *
 * So, if we want to book a Luftansa flight, the `this` keyword should
 * point to `luftansa` but if we want to book a Eurowings flight, the
 * `this` keyword should point to `eurowings`.
 *
 * How do we do that? How do we tell JavaScript explicitly or manually
 * what the `this` keyword should look like?
 *
 * There are three function methods to do that viz call(), apply() and
 * bind().
 *
 * Let's see how:
 */

// book.call();

/**
 * Remember that a function is really just an object and object have
 * methods too and the call() method is one of them.
 *
 * In the call method, the first argument is exactly what we want the
 * `this` keyword to point to.
 *
 * After that, the rest of the arguments are for the actual function
 * that we are calling.
 */

book = luftansa.book;
book.call(eurowings, 23, 'Bhoami Khona'); // Bhoami Khona booked a seat on undefined flight EW23
console.log(eurowings);

/**
 * If we check the console now, we have the booking array and in it, we
 * have the object with ES23 which comes from the eurowings object and,
 * then, of course, the name.
 *
 * Let's re-cap what happened here.
 *
 * This time, we did not call the `book()` function ourselves. Instead,
 * we called the `call()` method and it is then this `call()` method,
 * which will call the book() function with the `this` keyword pointing
 * to `eurowings` object i.e. whatever we pass as the first argument of the call() method.
 *
 * This allows us to manually and explicitly set the `this` keyword of
 * any function that we want to call. Then all the arguments after the
 * first one are simply the arguments of the original function. In the
 * case of the book() function it is the flight number and passenger
 * name.
 *
 * We can also do the same for luftansa.
 */

book.call(luftansa, 239, 'Janine Adams'); // Janine Adams booked a seat on Luftansa flight LH239
console.log(luftansa);

/**
 * So, even though the code of the book() function is inside of the
 * luftansa object, we made it so that the `this` keyword inside it
 * would point to `eurowings` object.
 *
 * So, we have a way now of manually manipulating the `this` keyword
 * using the call() method.
 *
 * Of course, we could now keep going and create more airlines into the
 * luftansa group e.g. Swiss airlines.
 *
 * Of course, the property names will have to have the exact same format
 * as the original object because the book() method is trying to read
 * them.
 */

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

/**
 * Now we can go ahead and use our book() function on the Swiss Air Lines
 */

book.call(swiss, 312, 'Sheldon Cooper'); // Sheldon Cooper booked a seat on Swiss Air Lines flight LX312
console.log(swiss);

/**
 * There is a similar method to the call() method, which is the apply()
 * method.
 *
 * The apply() method does basically the exact same thing. The only
 * difference is that apply() does not receive a list of arguments
 * after the `this` keywrod but intead, it is going to take an array
 * of the arguments.
 *
 * So, it will take the elements from that array and pass it into the
 * function.
 */

const flightData = [312, 'Amy Farrah Fowler']; // Amy Farrah Fowler booked a seat on Swiss Air Lines flight LX312
book.apply(swiss, flightData);
console.log(swiss);

/**
 * The apply() method is not that used anymore in modern JavaScript
 * because now, we actually have a better way of doing the exact same
 * thing.
 *
 * We can use call() method and use the spread operator to expand the
 * array.
 */

book.call(swiss, ...flightData);
console.log(swiss);

/**
 * book.apply(swiss, flightData); is the same as book.call(swiss, ...flightData);
 *
 * Therefore, with modern JavaScript, it is preferred to always just
 * use the call() method and then spread out the arguments from an array
 * like we did above.
 *
 * In summary, we now have yet another tool in our toolbox and this one
 * allows us to explicitly define the `this` keyword in any function
 * that we want.
 *
 * But, there is yet another method which allows us to do the same thing
 * and that's the bind() mehtod. It is more important than the call()
 * and apply() methods so, we will learn all about it in the next lesson.
 */

/***********************************************************************/
/*************************** THE BIND METHOD ***************************/
/***********************************************************************/
console.log(
  `/*************************** THE BIND METHOD ***************************/`
);

/**
 * Let's now learn about the bind() method.
 *
 * Just like the call() method, bind() also allows us to manually set
 * `this` keyword for any function call.
 *
 * The difference is that bind() does not immediately call the function.
 *
 * Instead, it returns a new function where the `this` keyword is bound
 * i.e. it is set to whatever value we pass into bind().
 *
 * Let's continue with our airline example from previous lesson.
 *
 * Now, let's say that we need to use the book() function for eurowings
 * all the time.
 */

// code from previous lesson
luftansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],

  // Enhanced Object Literal Syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

book = luftansa.book;

book.call(eurowings, 23, 'Bhoami Khona');

/**
 * But now, as mentioned before, we can use the bind() method to create
 * a new function with the `this` keywrod also set to eurowings.
 */

// This will not call the book function. Instead, it will return a new
// function where this keyword will always be set to eurowings object.
let bookEW = book.bind(eurowings);

bookEW(23, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23
console.log(eurowings);

/**
 * As you see, bookEW() now looks like a regular function call again.
 * That's because bookEW() already has the `this` keyword set in stone.
 * Therefore, we no longer need to specify the `this` keyword again in
 * the arguments of bind() method.
 *
 * So, the parameters of bookEW() are now back to being just the flight
 * number and the passenger name.
 *
 * So, this is really, really helpful.
 *
 * Now, we could go ahead and of course, do the same for all the
 * airlines i.e. creating one booking function for each of the airlines.
 *
 * This would then make it a little bit easier to book a flight for each
 * of the airlines, if we have to do it multiple times.
 *
 * So, instead of having to use call() all the time, we can just do
 * bind() once and from there on, we can always use these functions.
 */

const bookLH = book.bind(luftansa);
const bookLX = book.bind(swiss);

/**
 * We are not going to use them all now because, we already know how
 * that works.
 *
 * This is great, but we can actually take this even further.
 *
 * In the call() method, we can pass multiple arguments besides the
 * `this` keyword, and in the bind() method, we can actually do that
 * same.
 *
 * Then, all of these arguments will also be basically set in stone i.e.
 * they will be defined and the function will then always be called with
 * these same arguments.
 *
 * For example, we could use bind() to create a function for one
 * specific airline and a specific flight number.
 */

const bookEW23 = book.bind(eurowings, 23);

/**
 * If we look at our original book() function in luftansa object,
 * remember that it needs the flight number and the passenger name.
 *
 * But now, i in our bookEW23() function, it is as if the first
 * argument was already set.
 *
 * So, our remaining function now only needs the passenger name, because
 * the flight number is already pre-set in the bind() method.
 */

bookEW23('Bhoami Khona'); // Bhoami Khona booked a seat on Eurowings flight EW23
bookEW23('Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Eurowings flight EW23

/**
 * Now if we check the bookings, both of them are for Eurowings flight
 * EW23.
 *
 * That's exactly what we were expecting as we preset the value 23 in the
 * bind() method.
 *
 * So, this allows us to set in stone certain arguments so, the resulting
 * function then becomes even simpler. So, all we need to pass in
 * right now in the bookEW23() function is the passenger name. Then
 * everything esle basically happens automatically.
 *
 * Taking this even further, we could even define the passenger name
 * in bind() method and the this bookEW23() function would always
 * book the flight EW23 for the same passenger. But, that is taking it
 * a bit too far; so, we are going to leave it the way it is.
 *
 * By the way, what we did above, basically specifying parts of the
 * argument beforehand, is actually a common pattern called partial
 * application.
 *
 * Essentially, partial application means that a part of the arguments
 * of the original function are already applied i.e. already set.
 *
 * That's exactly what bookEW23() function essentially is. It has the
 * flight number pre-defined.
 *
 * Hopefully this was a nice example for you to understand the call(),
 * apply(), and bind() methods, but there are also other situations in
 * which we can use the bind() method and were it is very useful.
 *
 * One example of that is when we use objects together with event
 * listeners.
 */

// With Event Listeners

/**
 * Now the "Buy new plane" button on the UI will finally come into play.
 *
 * Let's start by adding a new property only to the luftansa object and
 * set it to 300 - meaning that this company has 300 planes.
 */

luftansa.planes = 300;

/**
 * Then we also add a new method only to the Luftansa object, which is
 * to buy a new plane.
 */

luftansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

/**
 * Essentially, we want to add a new plane, whenver we click on the
 * "Buy new plane" button.
 *
 * Now let's attach the event handler to our "Buy new plane" button.
 */

// document.querySelector('.buy').addEventListener('click', luftansa.buyPlane);

/**
 * Now as we click on "Buy new plane" button, we get NaN in the console.
 *
 * So, `this.planes` is now not a number. The reason for that is that
 * the `this` keyword now the "Buy new plane" button element.
 *
 * Why is that?
 * In one of the theory lessons, we learned that in an event handler
 * function, the `this` keyword always points to the element on which
 * that handler is attached.
 *
 * In our case, the handler function is luftansa.buyPlane and it is
 * attached to the "Buy new plane" button element.
 *
 * Therefore, inside of the handler function or the event listener,
 * the `this` keyword will point to the button element. That's why the
 * `this` keyword returns the "Buy new plane" button.
 *
 * Here you have yet another proof that the `this` keyword is really
 * set dynamically. Because, if we simply called `luftansa.buyPlane()
 * in the global scope then of course, the `this` keyword would point
 * to `luftansa` object because, then that object would be calling the
 * function.
 *
 * In our case above, it is the addEventListener() that is calling
 * luftansa.buyPlane(). Therefore, the button itself will then become
 * `this` keyword.
 *
 * Now, in the handler function, we still need the `this` keyword to
 * point to the luftansa object itself. Otherwise, it will not work.
 *
 * So, what this means is that we need to manually define the `this`
 * keyword in the addEventListener() handler function.
 *
 * How should we do that? Should we use the call() method or the bind()
 * method.
 *
 * As the callback function of the event handler, we need to pass in the
 * function and not call it. This is because the event handler will
 * call the function when the event occurs.
 *
 * Now we already know that the call() method calls the function and
 * that is not what we need. Therefore, we will use the bind() method.
 *
 * This is because we know that bind() will return a new function.
 *
 * Within the bind() function, the `this` keyword should be luftansa
 * so, that is what we will pass in.
 */

document
  .querySelector('.buy')
  .addEventListener('click', luftansa.buyPlane.bind(luftansa));

/**
 * Now if we click on "Buy new plane" button, we get the luftansa
 * object.
 *
 * Also, now the number of planes is increasing each time that we click
 * on "Buy new plane" button.
 *
 * We have our problem solved and we will do this a couple of times
 * in the course as it is an important one.
 *
 * In general, the bind() method is something you really need to
 * understand.
 *
 * Now, just one final example here, which is again going to be about
 * partial application, because it is another big use case for the
 * bind() method.
 */

// Partial Application

/**
 * In this case of partial application, many times we are not even
 * interested in the `this` keyword but, we still use bind() for all
 * of it.
 *
 * Remember that partial application means that we can preset parameters.
 *
 * Let's start by creating a general function which adds a tax to some
 * value.
 */

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

/**
 * Above is the general function for adding tax.
 *
 * Now, let's say that there is one tax that we use all the time.
 *
 * So, let's create a function for that.
 *
 * For example, in Portugal, the Value Added Tax (VAT) is 23%.
 *
 * So, we can now use the bind() method on the our addTax() function
 * to preset the rate always - so, that will always be 23%.
 *
 * Then, we will have a function which only calculates the VAT for
 * whatever value we pass into it.
 *
 * Now, the first argument of bind() is always the `this` keyword. But,
 * in this case, we do not care about the `this` keyword at all so,
 * we can just put `null` in its place.
 *
 * I could be any other value because nothing will happen with it but,
 * it is kind of a standard to just use `null`.
 *
 * Then, the second argument will be the rate and we will pre-set it to
 * 23%. This would then set the rate value in stone.
 */

const addVAT = addTax.bind(null, 0.23);

/**
 * Now we can start using our addVAT() function.
 */

console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

/**
 * When you do this yourself, remember that the order of the arguments
 * is then important.
 *
 * If you want it to preset the rate, then it has to be the first
 * argument after the `this` keyword argument. Otherwise, it will
 * not work.
 *
 * Now, you could argue that what we just did here could easily hgave
 * been done with default parameters.
 *
 * But, what we did here is actually different, because this:
 * const addVAT = addTax.bind(null, 0.23);
 * is creating a brand new, simply, more specific function based on a
 * more general function, which is the addTax() function.
 *
 * Of course, the example could be a lot more complex too.
 *
 * So, it really is different because using bind() method, actually
 * really gives us a new function.
 *
 * So, it is as if we returned a new specific function from the addTax()
 * function.
 *
 * Now let's do a challenge. In this challenge, we need to essentially
 * re-write the whole tax example but, using the technique of one
 * function returning another function.
 *
 * Essentially, create a function that can return a function which will
 * do just what the addVAT() function does.
 */

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxRate(0.23)(100)); // 123
console.log(addTaxRate(0.23)(23)); // 28.29

/**
 * We first created the addTaxRate() function which in turn returns
 * another function. The addTaxRate() needs the rate and the returning
 * function needs the value and then the returning function calculates
 * and returns the result.
 *
 * Now this is just another way of doing the same thing and it is already
 * pretty advanced stuff.
 */

/***********************************************************************/
/*********** IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) ***********/
/***********************************************************************/
console.log(
  `/*********** IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) ***********/`
);

/**
 * Our next topic is something called "Immediately Invoked Function
 * Expressions". So, let's take a look at what they are.
 *
 * Sometimes in JavaScript, we need a function that is only executed
 * once, and then never again.
 *
 * Basically, a function that disappears right after it is called once.
 *
 * This might not appear to make much sense right now but, we actually
 * need this technique later; for example, with something called
 * async/await.
 *
 * So, how could we do that?
 *
 * We could simply create a function and then only execute it once.
 */

const runOnce = function () {
  console.log(`This will never run again.`);
};

runOnce();

/**
 * However, we can actually run this function again at some other point
 * in the code, if we wanted to. There is nothing stopping from calling
 * it once more:
 */

runOnce();

/**
 * So, this is not what we want to do. We want to actually execute a
 * function immediately and not even have to save it somewheree. This
 * is how we would do that:
 *
 * We write the function expression itself, without assigning it to any
 * variable.
 *
 * If we try to run it, we will get an error for now. It says that
 * function statements require a function name and that's because
 * JavaScript expects a function statement because we simply started
 * the like of code below with a function keyword.
 */

// function () {
//   console.log(`This will never run again.`);
// };

/**
 * However, we can still trick JS into thinking that all of it is just
 * an expression. We do that by simply wrapping all of it into a set
 * of parentheses.
 */

(function () {
  console.log(`This will never run again.`);
});

/**
 * Now, we basically transformed the statement that we had before into
 * an expression.
 *
 * So, now if we save this file, we get no errors.
 *
 * But also, this function didn't execute yet. We never called it.
 *
 * We can call it by adding another set of parenthese at the end of
 * that expression, like so:
 */

(function () {
  console.log(`This will never run again.`);
})(); // This will never run again.

/**
 * This is just a function expression:
 * (function () { console.log(`This will never run again.`) })
 *
 * and then we just immediately call it with a set of parentheses and
 * that is why this pattern is called the Immediately Invoked Function
 * Expression (IIFE).
 *
 * The same would also work for an arrow function.
 */

(() => console.log('This will ALSO never run again'))(); // This will ALSO never run again

/**
 * Now you might be wondering, why was this pattern actually invented?
 *
 * We already know that functions create scopes and what's important
 * here is that one scope does not have access to variables from an
 * inner scope.
 *
 * For example, in the global scope, we do not have access to any
 * variables that are defined in function scopes. That's because the
 * scope chain only works inside out i.e. the inner scopes have access
 * to anything defined outside but, parent scopes do not have access
 * to children scopes.
 *
 * Therefore, we say that all data defined inside a scope is private.
 * We also say that data within a scope is encapsulated within that
 * scope.
 *
 * For example, the `isPrivate` variable below is encapsulated inside its
 * function scope.
 */

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

/**
 * Data encapsulation and data privacy are extremely important concepts
 * in programming.
 *
 * Many times we actually need to protect our variables from being
 * accidentally overwritten by some other parts of the program or even
 * with external scripts or libraries.
 *
 * We will talk about this in detail in the Object Oriented Programming
 * section of the course.
 *
 * For now, keep in mind that it is important to hide variables and that
 * scopes are a good tool for doing this.
 *
 * This is also the reason why the Immediately Invoked Function
 * Expressions were invented.
 *
 * Basically, IIFE is not really a feature of the JS language. It is more
 * of a pattern, that some developers came up with, which was then
 * started to being used by many other developers.
 *
 * In ES6, variables declared with `const` or `let` also create their
 * own scope inside a block. We learned that in the Behind the scenes
 * section of this course.
 *
 * When we create a block and create a variable inside it, the global
 * scope still cannot access that variable:
 */

{
  const isPrivate = 23;
}

// console.log(isPrivate); // Error

/**
 * On the other hand, variables created by `var` would be accessible
 * in the parent scope:
 */

{
  const isPrivate = 23;
  var notPrivate = 42;
}

console.log(notPrivate); // 42

/**
 * This is something that we have already learned in the Behind the
 * Scenes section.
 *
 * This is the reason why, now in modern JavaScript IIFEs are not that
 * used anymore.
 *
 * This is because, if all we want is to create a new scope for data
 * privacy, all we need to do is to just create a block with curly
 * brace, like we did above.
 *
 * There is no need to create a function to create a new scope. Unless,
 * of course, we want to use `var` for our variables. But, we already
 * learned why it is a bad practice to use `var` so, we should avoid
 * using it in the first place.
 *
 * On the other hand, if what you really need is to execute a function
 * just once, then the IIFE pattern is still the way to go, even now
 * with modern JS.
 *
 * In fact, we will actually see a great use case of using an IIFE, a
 * little bit later.
 */
