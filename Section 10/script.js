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
