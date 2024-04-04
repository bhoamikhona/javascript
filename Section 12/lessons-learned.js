'use strict';

/***********************************************************************/
/******************* CONVERTING AND CHECKING NUMBERS *******************/
/***********************************************************************/

console.log(
  `/******************* CONVERTING AND CHECKING NUMBERS *******************/`
);

/**
 * Let's start this section by learning how numbers work in JavaScript,
 * how to convert values to numbers and also how check if certain values
 * are numbers or not.
 *
 * The first thing that you should know about numbers is that in
 * JavaScript, all numbers are presented internally as floating point
 * numbers i.e. as decimals even if we write them as integers.
 */

console.log(23 === 23.0); // true

/**
 * That's the reason why we only have one data type for all numbers.
 *
 * Also, numbers are represented internally in a 64 base 2 format. This
 * means that numbers are always stored in a binary format.
 *
 * Basically, they are only composed of 0s and 1s.
 *
 * In this binary form, it is very hard to represent some fractions that
 * are very easy to represent in the base 10 system that we are used to.
 *
 * Base 10 is basically the numbers from 0 to 9 while binary is 0 and 1.
 *
 * As mentioned before, there are certain numbers that are very difficult
 * to represent in base 2 and one example of that is the fraction 0.1
 *
 * That then results in very weird results like this:
 */

console.log(0.1 + 0.2); // 0.30000000000000004

/**
 * This is kind of a classic or a running joke in JavaScript because this
 * result of 0.30000000000000004 should, of course, be 0.3 and not with
 * all the extra 0s.
 *
 * But JavaScript simply has no better way of representing these numbers.
 *
 * In base 10, 1/10 is simply 0.1 and that is very easy to represent.
 * But, for example, if we were trying to do 3/10 then that is also
 * impossible to represent for us. The result of 3/10 would be
 * 3.3333333... until inifinity.
 *
 * So in binary, the same thing happens with 0.1
 *
 * We basically get an inifinite fraction with 0.3 which then results
 * in this weird result of 0.30000000000000004
 *
 * In some cases, JavaScript does some rounding behind the scenes to try
 * its best to hide these problems but some operations, such as 0.1 + 0.3
 * JS simply cannot mask the fact that behind the scenes, they cannot
 * represent certain fractions.
 *
 * By the way, many other languages use the same system, for example,
 * PHP or Ruby so don't let anyone make fun of JavaScript because of this.
 *
 * We just have to accept that it works this way because we really cannot
 * do anything against it.
 *
 * So just be aware that you cannot do precise scientific or financial
 * calculations in JavaScript because eventually, you will run into a
 * problem like we just did.
 */

// this is incorrect but, it is an error beacause JS works with binary
// behind the scenes and there is nothing we can do about it so just,
// be aware about it.
console.log(0.1 + 0.2 === 0.3); // false

/**
 * Now that we know how JavaScript represents numbers, let's go back
 * to actually working with them.
 *
 * We know how to convert a string to a number using the Number()
 * constructor function.
 */

console.log(Number('23')); // 23 of type number

/**
 * But there is also an easier way - it is kind of a trick really, and it
 * works like this:
 */

console.log(+'23'); // 23 of type number

/**
 * So we just add a `+` operator before the string.
 *
 * This works because when JavaScript sees the plus operator, it will do
 * type coercion i.e. it will automatically convert all the operands to
 * numbers.
 *
 * This makes our code look a lot cleaner. So, let's go to our bankist
 * app and replace all the occurences of Number() with the `+` sign.
 * So head over to the script.js file for that.
 *
 * Our project will work the same but our code will look a little bit
 * cleaner now.
 */

/**
 * So above, we converted strings to numbers but, we can also do something
 * called parsing.
 *
 * We can parse a number from a string.
 *
 * On the `Number` object, which is kind of this function `Number()` but,
 * it is also an object in the end because in JavaScript, every function
 * is also an object.
 *
 * So, on this `Number` object, we have some methods to do parsing.
 * So, let's use `parseInt()`. Within `parseInt()`, we pass a string and
 * this string can even include some symbols.
 *
 * JavaScript will then automatically try to figure out the number that is
 * in this string.
 */

console.log(Number.parseInt('30px')); // 30 of type number

/**
 * In order to make `parseInt()` work, the string needs to start with
 * a number. If we start with anything else, it will not work. We will
 * instead get `NaN`.
 */

console.log(Number.parseInt('e23')); // NaN

/**
 * So, this is a little bit like type coercion but even more advanced
 * because as we just saw, it tries to get rid of unnecessary symbols that
 * are not numbers.
 *
 * This can be very useful in situations like "30px" where we get some
 * kind of unit from CSS and then need to get rid of that unit.
 *
 * Now, the `parseInt()` function actually accepts a second argument,
 * which is the so-called regex.
 *
 * The regex is the base of the numeral system that we are using. In our
 * examples above of `parseInt()` we are using base 10 numbers i.e.
 * numbers from 0 to 9; and most of the time, we do use base 10 numbers.
 *
 * So, we should always pass in the number 10 as the second argument, like
 * so:
 */

console.log(Number.parseInt('30px', 10)); // 30 of type number

/**
 * This will help avoid some bugs in some situations; and as you will see,
 * the result is the same.
 *
 * But, if we were working, for example, with binary, then the result
 * will be comletely different.
 */

// passing base 2 as the second argument i.e. binary
console.log(Number.parseInt('30px', 2)); // NaN
console.log(Number.parseInt('101px', 2)); // 5 of type number

/**
 * This was with integers and that's what the "Int" stands for in
 * `parseInt()` but, there is also `parseFloat()`.
 */

console.log(Number.parseInt('2.5rem')); // 2 of type number
console.log(Number.parseFloat('2.5rem')); // 2.5 of type number

/**
 * Now it reads the decimal point number from our string. If we used
 * `parseInt()`, it only reads the part before the decimal point.
 *
 * By the way, we could also have white spaces before and after the
 * string but, that would not affect parseInt() or parseFloat().
 */

console.log(Number.parseInt('    23.2px   ', 10)); // 23 of type number
console.log(Number.parseFloat('    23.2px   ', 10)); // 23.2 of type number

/**
 * parseInt() and parseFloat() are also so-called global functions. So,
 * we do not have to have to call them on Number.
 *
 * This would also work:
 */

console.log(parseInt('2.5rem'));
console.log(parseFloat('2.5rem'));

/**
 * But simply calling `parseInt()` and `parseFloat()` is an old-school
 * way of doing it. In modern JavaScript, it is more encouraged to call
 * these functions on Number object like so: `Number.parseInt()` and
 * `Number.parseFloat()`.
 *
 * We say that the `Number` provides something called a namespace. So,
 * a namespace for all these different functions like parseInt() and
 * parseFloat().
 *
 * Anyway, let's explore another function of the Number namespace and
 * that is the `isNaN()`.
 *
 * We can use it to check if any value is a number. Well, not any value
 * but, more about that later.
 */

// is 20 NaN? -> false
console.log(Number.isNaN(20)); // false

// here we also get false because the string "20" is just a regular value,
// it is not NaN.
console.log(Number.isNaN('20')); // false

/**
 * Now let's try it by converting something. If we convert the string
 * "20X" to a number then what happens?
 */

// we get true here, this is because when we try to convert "20X" to a
// number, we get NaN
console.log(Number.isNaN(+'20X')); // true
console.log(+'20X'); // NaN

/**
 * Let's try something else. Let's, for example, divide 23 by 0. Maybe
 * you know that dividing any number by 0 gives us inifinite i.e. dividing
 * by 0 is not allowed in Math.
 *
 * But, infinity is not NaN so, we get false.
 *
 * NOTE: Infinity is a special value that also exists in JavaScript
 */

console.log(23 / 0); // Infinity
console.log(Number.isNaN(23 / 0)); // false

/**
 * So, this `isNaN()` is not a perfect way for checking if a value is a
 * number because it doesn't consider this `Infinity` use case and
 * sometimes, this might very well happen.
 *
 * Therefore, there is a better method called `isFinite()`. So, let's try
 * that one with the same examples.
 */

// this is true because 20 is of type number and it is finite
console.log(Number.isFinite(20)); // true

// this is false because string "20" is not of type number
console.log(Number.isFinite('20')); // false

// this is false because converting "20X" string to number results in NaN
console.log(Number.isFinite(+'20X')); // false

// this is false because it results in Infinity which is the opposite of
// finite and that is also where the name of the function comes from i.e.
// isFinite()
console.log(Number.isFinite(23 / 0)); // false

/**
 * Basically, the result of isFinite() should be the opposite of isNaN()
 * because isNaN() was check if the value passed was NaN, whereas
 * isFinite() checks if the value is finite or not.
 *
 * We also get a `false` when we pass in string "20" in isFinite() because
 * it also checks the type of the value that is passed.
 *
 * Now, all this may sound a bit confusing but, just know that isFinite()
 * is indeed the best way of checking if a value is a number; and by
 * number we also mean a real number i.e. value of type number, not a
 * string.
 *
 * So, isFinite() method is the ultimate method that you should use to
 * check if any value is a number, at least when you are working with
 * floating point numbers.
 *
 * So, if you are sure that you just need to check for an integer, then
 * you can use `isInteger()` as well.
 *
 * You should only use isNaN() if you want to check whether the value is
 * literally NaN.
 */

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23.2)); // false
console.log(Number.isInteger(23 / 0)); // false

/**
 * Now, in our project that we are currently building, there is not really
 * a need to check if any of the input is really a number or not and so,
 * in this particular case, we don't need to go back and change anything
 * but, it is still good to know about all this, especially the isFinite()
 * method.
 *
 * The isFinite() method should be your go-to method whenever you need
 * to check if something is a number or not.
 *
 * And parseFloat() should be your go-to whenever you need to read a value
 * out of a string, for example, coming from CSS.
 */

/***********************************************************************/
/************************** MATH AND ROUNDING **************************/
/***********************************************************************/

console.log(
  `/************************** MATH AND ROUNDING **************************/`
);

/**
 * Let's now learn about some more mathematical operations and also about
 * rounding numbers.
 *
 * We have already been using lots of mathematical operations, for
 * example, plus, minus, times, divide, exponential etc. So, we don't
 * need to go over those again.
 *
 * Let's start here with the square root.
 *
 * Just like many other functions the square root is part of the math
 * namespace.
 *
 * `Math.sqrt()` - this stands for square root and all we have to do is
 * to pass in a number and it will give us the square root of that number.
 */

console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(25)); // 5

/**
 * The same could be achieved by the exponentiation operator as well,
 * like so:
 */

console.log(4 ** (1 / 2)); // 2
console.log(25 ** (1 / 2)); // 5

/**
 * The same would work for the cubic root.
 */

console.log(Math.cbrt(8)); // 2
console.log(8 ** (1 / 3)); // 2

/**
 * Next up, let's get the maximum value of a couple of values. We use
 * Math.max() for that.
 *
 * So, as the name suggests `Math.max()` would return the maximum
 * value.
 */

console.log(Math.max(5, 18, 23, 11, 2)); // 23

/**
 * The `Math.max()` function actually does type coercion. However, it
 * does not do parsing.
 */

console.log(Math.max(5, 18, '23', 11, 2)); // 23 - it does perform type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN - it does not do parsing

/**
 * Just as we have Math.max(), we also have Math.min().
 */

console.log(Math.min(5, 18, 23, 11, 2)); // 2

/**
 * Besides a couple of methods, there are also constants on the math
 * object or on the math namespace.
 *
 * For example, if we wanted to calculate the radius of a circle with
 * 10 pixels, we could do that. For that, we use `Math.PI`
 */

console.log(Math.PI); // 3.141592653589793

/**
 * Let's say we get 10px from the user interface.
 */

// calculating the area of a circle with 10px radius
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

/**
 * Another thing that is on the Math object is the random() function that
 * we already have been using a couple of times.
 *
 * It is very important to be able to generate good random numbers when
 * we need them.
 *
 * So before, we already created randome dice rolls, like so:
 */

console.log(Math.trunc(Math.random() * 6) + 1);

/**
 * Now let's actually generalize this formula so that we can use it from
 * now on to always generate random integers between two values.
 */

let randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;

/**
 * We do (max - min) because the random function generates a number
 * between 0 and 1
 *
 * If we multiply 0 ... 1 by (max - min) then we get a number between
 * 0 and (max - min)
 *
 * Now if we add min to all of it, we get
 * min ... (max - min + min)
 *
 * which is the same as
 * min ... max
 *
 * 0 ... 1 -> 0 ... (max - min) -> min ... max
 *
 * This is how we end up with a nice function which will always give us a
 * number that is going to stay between min and max.
 *
 * Let's try it out.
 */

console.log(randomInt(10, 20));

/**
 * Next up, let's talk a little bit about rounding and let's start by
 * rounding integers.
 *
 * We have already been using `Math.trunc()` - and what this does is to
 * simply remove any decimal part.
 */

console.log(Math.trunc(23.3)); // 23

/**
 * But, we also have other ways.
 *
 * We also have Math.round() and this one will always round to the
 * nearest integer.
 */

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.8)); // 24

/**
 * Then we also have Math.ceil() - and this one will basically round
 * it up a number
 */

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.8)); // 24

/**
 * Then we also have Math.floor() - this one will basically round
 * it down a number
 */

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.8)); // 23

/**
 * By the way, all of these methods, they also do type coercion.
 *
 * So, if we pass in a string of number, it will work just the same.
 */

console.log(Math.floor('23.8')); // 23

/**
 * Now you might think that Math.floor() and Math.trunc() are very
 * similar and indeed, they do that sam when we are dealing with positive
 * numbers.
 *
 * Basically, floor() and trunc(), both cut off the decimal part when we
 * are dealing with positive numbers.
 *
 * However, for negative numbers, it doesn't work this way.
 */

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

/**
 * The `Math.trunc()` works like before i.e. the number gets truncated
 * i.e. it removes the decimal part but, `Math.floor()` now gets rounded
 * to -24.
 *
 * This is because, with negative numbers, the rounding works the other
 * way around.
 *
 * So, actually floor() is a little bit better than trunc() because it
 * works in all situations, no matter if we are dealing with positive
 * or negative numbers.
 *
 * So, let's replace the Math.trunc() to Math.floor() in our randomInt()
 * function. So, that it works in all situations even if we give it
 * negative inputs.
 */

randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

/**
 * That was rounding integers.
 *
 * Now let's talk about floating point numbers or we can also say
 * decimals.
 *
 * With decimals, it works a little bit in a different way. Let's see
 * how.
 *
 * With decimals, we have to specify the number within a set of
 * parentheses and then on that number, we call the `toFixed()` method.
 */

console.log((2.7).toFixed(0)); // 3 - type string

/**
 * So, toFixed() will always return a string and not a number. That's
 * important to keep in mind.
 */

console.log((2.7).toFixed(3)); // 2.700 - type string

/**
 * Now instead of passing in 0 in the toFixed() function, when we pass
 * in 3, we get 2.700.
 *
 * So, it adds 0s until it has exactly three decimal parts, just like we
 * specified in the toFixed() function.
 */

console.log((2.345).toFixed(2)); // 2.35 - type string

/**
 * Now if we want to convert its result to a number, we simply need to
 * add a plus sign in the beginning, like so:
 */

console.log(+(2.345).toFixed(2)); // 2.35 - type number

/**
 * So, with decimals it works differently than with integers, and that's
 * because, once again, things in Javascript evolved kind of in a weird
 * way.
 *
 * If the language was designed today, it would be very different but,
 * this is what we have to work with now.
 *
 * Keep in mind that `(2.7).toFixed(3)` works in a similar way to string
 * methods.
 *
 * `2.7` is a number i.e. a primitive data type and primitives do not have
 * methods so, behind the scenes, JS will do boxing.
 *
 * Boxing is to transform the number to a `Number` object, then call the
 * method on that object. Once the operation is finished, it will convert
 * it back to a primitive type.
 */

// Let's go back to our bankist project and apply some of these methods that we learned in this lesson.

/************************************************************************/
/************************ THE REMAINDER OPERATOR ************************/
/************************************************************************/

console.log(
  `/************************ THE REMAINDER OPERATOR ************************/`
);

/**
 * One operator that we did not learn about in the last lesson is the
 * remainder operator.
 *
 * The reason for that is that the remainder operator has actually some
 * special use cases, and so it deserves a lesson on its own.
 *
 * What is the remainder operator?
 *
 * As the name says, the remainder operator simply returns the remainder
 * of a division.
 *
 * So let's check that out.
 */

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

/**
 * Now, one thing that is many times used in programming is to check
 * whether a certain number is even or odd.
 *
 * A number is even if it is divisible by 2, otherwise odd; and divisible
 * means that when the number is divided 2, the remainder is 0.
 */

console.log(6 % 2); // 0
console.log(6 / 2); // 3

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

/**
 * Let's create a function which checks if a number is even or not.
 */

const isEven = x =>
  x % 2 === 0 ? console.log('even number') : console.log('odd number');

isEven(6);
isEven(15);

/**
 * Of course, this works to check if any number is divisible by any other
 * number.
 *
 * Whenever the results of the remainder operator is 0, then that means
 * that the first number is completely divisible by the second one.
 *
 * Again, this is sometimes very important to know in programming.
 *
 * Let's see another example here, involving our application. Not really
 * in practical terms but, just to have some fun.
 *
 * Let's select all of the rows of our movements and add a background
 * color to all the even rows.
 */

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

/**
 * So, whenever you need to do something every Nth time, it might be a
 * good idea to use the remainder operator for that.
 */

/************************************************************************/
/************************** NUMERIC SEPARATORS **************************/
/************************************************************************/

console.log(
  `/************************** NUMERIC SEPARATORS **************************/`
);

/**
 * Starting from ES2021, we can use a feature called "Numeric Separators"
 * to format numbers in a way that is easier for us, or for other
 * developers to read and to understand.
 *
 * Let's say that we wanted to represent a really large number. For
 * example, the diameter of our solar system.
 */

let diameter = 287460000000;

/**
 * Just from looking at this number, it is really difficult to read and
 * to understand it. Does it mean 28 billion or is it just 2 billion or
 * really, what is this number? It is really hard to read like this -
 * there are just too many 0s here.
 *
 * Now, to help with this, when we write a number this large in the normal
 * English language, we usually use a 1000 separator like a comma.
 *
 * We would write this number like so: 287,460,000,000
 *
 * Then it becomes really easy to immediately see that this means
 * 287 billion and 460 million.
 *
 * Now, fortunately, we can do the name thing in JavaScript as well, using
 * the new numeric separators.
 *
 * Numeric separators are simply underscores that we can place anywhere
 * that we want in our numbers. This will make it really easy to
 * understand and to parse numbers that are this large.
 */

diameter = 287_460_000_000;

/**
 * Now let's just log to the console to see what JavaScript actually
 * sees.
 */

console.log(diameter); // 287460000000

/**
 * Here we see that the JS engine basically ignores the undescores. It
 * simply sees the number itself.
 *
 * What this means, is that we can actually place the underscores i.e.
 * the numeric separators anywhere that we want.
 *
 * Let's do another example.
 */

// Using the underscore makes it obvious that the price is in cents.
const priceCents = 345_99;
console.log(priceCents); // 34599

/**
 * Basically, we can use the underscores now to give meanings to certain
 * parts of our numbers.
 *
 * Let's try another one.
 */

let transferFee1 = 15_00;

/**
 * Here, it immediately looks like it is $15 and 0 cents. But if we did
 * the same thing like this:
 */

let transferFee2 = 1_500;

/**
 * Then it suddenly looks like 1 thousand 500.
 *
 * While, in fact, it is the exact same number. Both of them are exactly
 * 1500. But, the underscore alone gives them different meanings.
 *
 * So, we can use that to our advantage, whenever we write numbers in
 * our JavaScript code.
 *
 * Let's create another variable here called PI, and this one is to show
 * you some restrictions as to where we can place the underscore.
 *
 * 1) We can only place underscores between numbers.
 */

let PI = 3.14_15;
console.log(PI);

/**
 * But the underscore there doesn't really makes sense.
 *
 * So, how about we want to place it right after the decimal point?
 */

// PI = 3._1415; // error
// console.log(PI);

/**
 * Now we get an error because that is not allowed.
 *
 * It is also not allowed to place it in the right before the decimal
 * point.
 */

// PI = 3_.1415; // error

/**
 * We also cannot place the _ at the beginning of the number, nor can
 * we place it at the very end.
 */

// PI = _3.1415; // error
// PI = 3.1415_; // error

/**
 * We can also not have two underscore in a row
 */

// PI = 3.14__15; // error

/**
 * Now the one final detail that we need to be aware of is that when we
 * try to convert strings that contain underscores to a number - that
 * will not work as expected.
 *
 * Let's try to use the `Number()` function that we learned before to
 * convert a string to a number.
 */

console.log(Number('230000')); // 230000

/**
 * The above example works just fine, however, if we place an underscore
 * or a numeric separator in between, we get NaN.
 */

console.log(Number('230_000')); // NaN

/**
 * What this means is that you should really only use these numeric
 * separators, when you are writing down numbers explicitly in code.
 *
 * If you need to store a number in a string, for example in an API,
 * or if you get a number as a string from an API, you should not use
 * underscore in there, because then JavaScript will not be able to
 * parse the number correctly out of that string.
 *
 * It will not work as expected and you will get the `NaN` that might
 * introduce bugs into your application.
 *
 * The same is true for `parseInt()` function.
 */

console.log(Number.parseInt('230_000')); // 230
console.log(Number.parseFloat('230_000')); // 230

/**
 * Here we do not get NaN but, we only get 230 i.e. only the part that is
 * before the underscore.
 *
 * Everything else will then be ignored.
 */

/***********************************************************************/
/************************* WORKING WITH BIGINT *************************/
/***********************************************************************/

console.log(
  `/************************* WORKING WITH BIGINT *************************/`
);

/**
 * Let's now meet one of the primitive data types, that we never talked
 * about before and that is BigInt.
 *
 * BigInt is a special type of integer that was introduced in ES2020 so,
 * let's quickly take a look at it.
 *
 * In the first lesson of this section we learned that numbers are
 * represented internally as 64 bits. This means that there are exactly
 * 64 ones and zeros to represent any given number.
 *
 * Of these 64 bits, only 53 are used to actually store digits themselves.
 * The rest are for storing the position of the decimal point and the
 * sign.
 *
 * If there are only 53 bits to store the number, that means that there is
 * a limit of how big numbers can be, and we can calculate that number.
 *
 * To calculate that, we can do 2 raised to 53 minus 1. We subtract 1
 * because numbers start from 0; and it is 2 because we are working with
 * base 2 numbers i.e. binary.
 */

console.log(2 ** 53 - 1); // 9007199254740991

/**
 * This gigantic number 9007199254740991 is essentially the biggest
 * number that JavaScript can safely represent.
 *
 * This number is so important that it is even stored into the number
 * namespace as MAX_SAFE_INTEGER
 */

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

/**
 * Any number that is larger than MAX_SAFE_INTEGER is not safe. This means
 * that it cannot be represented accurately.
 *
 * For example:
 */

console.log(2 ** 53 + 0); // 9007199254740992

// it should have added 2 to 9007199254740991 here but, it only added 1 to the number
console.log(2 ** 53 + 1); // 9007199254740992

/**
 * This means that JavaScript can simply not represent these numbers
 * accurately.
 *
 * So, if we do calculations with numbers that are bigger than
 * MAX_SAFE_INTEGER, we might lose precision.
 *
 * In some numbers it does actually work because JavaScript, behind the
 * scenes uses some tricks to still represent some of the unsafe
 * numbers but, again, sometimes it works and sometimes it doesn't.
 *
 * That's why we call them unsafe numbers.
 */

console.log(2 ** 53 + 2); // 9007199254740994
console.log(2 ** 53 + 3); // 9007199254740996
console.log(2 ** 53 + 4); // 9007199254740996

/**
 * This can be a problem sometimes because in some situations we might
 * need really, really big numbers. Way bigger than the ones above - for
 * example, for database IDs or when interacting with real 60 bit numbers.
 *
 * These 60 bit numbers are actually used in other languages.
 *
 * So, we might, for example, from some API, get a number that is larger
 * than the ones above. Then we have no way of storing that in JavaScript.
 * Atleast, not until 2019 because starting from ES 2020, a new primitive
 * was added, which is called BigInt.
 *
 * BigInt stands for big integers and it can be used to store numbers as
 * large as we want.
 */

// this probably does not have precision because it is larger than MAX_SAFE_INTEGER
console.log(1614687651646465498646684643168765435348); // 1.6146876516464654e+39

// If we use `n` then it will be a bigInt
console.log(1614687651646465498646684643168765435348n); // 1614687651646465498646684643168765435348n

/**
 * The `n` at the end basically transforms the number into a bigInt
 * number.
 *
 * So, it is a huge number but now, JavaScript has a way of finally
 * displaying it accurately.
 *
 * We can also create BigInt by using the BigInt function.
 */

console.log(BigInt(1614687651646465498646684643168765435348)); // 1614687651646465382056585393973135147008n

/**
 * Using the BigInt() function gives us a similar result, but not the
 * same because JavaScript will first have to still represent the
 * number internally before it can then transform it into a BigInt.
 *
 * That's the reason the second number is a bit different.
 *
 * So, BigInt() should really be used only for small numbers.
 */
console.log(BigInt(3123144)); // 3123144n

/**
 * This is how we create the BigInt numbers but, let's now see some
 * operations with these numbers.
 */

console.log(10000000000000000000000n + 1000000000000000000000n);
console.log(10000000000000000000000n * 1000000000000000000000n);

/**
 * What's not possible is to mix BigInt with regular number.
 */

let huge = 649849651648446798451654n;
let num = 23;

// console.log(huge + num); // Type Error

/**
 * This is where we would have to conver the regular number to a bigInt
 * and this is where we would use the BigInt() constructor function.
 */

console.log(huge + BigInt(num)); // 649849651648446798451677n

/**
 * Event the Math operations that we talked about earlier in this section
 * are not going to work here.
 *
 * For example:
 */

// console.log(Math.sqrt(649849651648446798451654n)); // Type Error

/**
 * However there are two exceptions to this which are the comparison
 * operators and the plus operator when working with strings.
 *
 * So, let's see that.
 */

// This still works just as expected.
console.log(20n > 15); // true

// However, when we do this, we get false - this makes sense because === does not perform type coercion and in fact, the number 20 and bigInt 20 are of two different types.
console.log(20n === 20);

console.log(typeof 20n); // bigint
console.log(typeof 20); // number

// this is true because the lose equality operator does perform type coercion.
console.log(20n == 20); // true
console.log(20n == '20'); // true

/**
 * So, that is one exception.
 *
 * The other exception is when we do string concatenations.
 */

console.log(huge + ' is REALLY big!'); // 649849651648446798451654 is REALLY big!

/**
 * As you see, the number is converted to a stirng, even the bigInt
 * number.
 *
 * Finally,  let's look at what happens with divisions because bigInt
 * is indeed an integer.
 *
 * So, what happens if we do this:
 */

console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.33...

/**
 * With bigInt, it will simply return the closest bigInt. Basically,
 * it simply cuts the decimal part off.
 */

console.log(12n / 3n); // 4n

/**
 * This is all we needed to know in an introduction lesson like this
 * about BigInt.
 *
 * This new primitive type adds some new capabilities to the JavaScript
 * language, when you really need to work with huge numbers.
 *
 * In practice, you will probably not use it very much but, it is still
 * good to know that bigInt exists and also how it works.
 */

/**********************************************************************/
/*************************** CREATING DATES ***************************/
/**********************************************************************/

console.log(
  `/*************************** CREATING DATES ***************************/`
);

/**
 * When we build real world applications, one type of data that comes up
 * all the time is dates and times.
 *
 * So, let's learn the fundamentals of dates and times in this lesson
 * so that in the next one, we can then implement them into our
 * application.
 *
 * Dates and time can be a little messy and confusing in JavaScript but,
 * we will try to make the fundamentals as clear as possible.
 *
 * First, we need to create a date and there are exactly 4 ways of
 * creating dates in JavaScript.
 *
 * They all use the new Date() constructor function, but they can
 * accept different parameters. So, let's see how.
 */

// Create Date

/**
 * The first way of creating a date is to use the Date() constructor
 * with the `new` keyword and we can then assign it to a variable.
 */

let now = new Date();
console.log(now); // Wed Apr 03 2024 23:26:05 GMT+0530 (India Standard Time)

/**
 * We get the current date and time at this very moment.
 *
 * The second method of creating a date is to parse the date from a date
 * string.
 */

console.log(new Date('Aug 02 2020 18:05:41')); // Sun Aug 02 2020 18:05:41 GMT+0530 (India Standard Time)
console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0530 (India Standard Time)

/**
 * So, simply providing a string - it will then automatically parse
 * the time based on that.
 *
 * So, JavaScript is pretty smart in parsing out the string that we
 * provide in the parentheses.
 *
 * However, it is generally not a good idea to do this because it can
 * be quite unreliable. However, if the string was actually created by
 * JavaScript itself, then of course it is pretty safe.
 *
 * Let's try to parse one of the dates string in our accounts object.
 * This will work because it was JavaScript who created these dates.
 * NOTE: The Z in the date means UTC i.e. Coordinated Universal Time,
 * which is basically the time without any time zone in London and also
 * without daylight savings.
 */

console.log(new Date(account1.movementsDates[0]));

/**
 * That was based on a string but, we can also pass in year, month, day,
 * hour, minute, and even second in this constructor.
 */

// You might have noticed that we put the value of month as 10 but, we
// got November which is the 11th month of the year. This means that
// months are 0 based in JavaScript.
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time)

/**
 * What's cool about this is that JavaScript auto corrects the date.
 *
 * So, let's try that again differently. Let's try Nov 31st but, we
 * already know that November only has 30 days.
 *
 * So, if we take a look at our result below, we get the corrected
 * result.
 */
console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT+0530 (India Standard Time)
console.log(new Date(2037, 10, 33)); // Thu Dec 03 2037 00:00:00 GMT+0530 (India Standard Time)

/**
 * So this is sometimes pretty useful.
 *
 * Finally, we can also pass into the date constructor function, the
 * amount of milliseconds passed since the beginning of the Unix time,
 * which is January 1, 1970.
 *
 * So, let's see that:
 */

// 0 milliseconds after the first Unix time
console.log(new Date(0)); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

/**
 * This will actually be pretty useful, even though it looks a bit
 * strange.
 *
 * Let's now create a date that is 3 days after the beginning of Unix
 * time.
 */

// Days * Hours * Minutes * Seconds * Milliseconds - this is how we
// convert days to milliseconds.
// This number that we calculated here, is called a timestamp. We will
// see why this is useful, a little bit later.
let timestamp = 3 * 24 * 60 * 60 * 1000;

console.log(new Date(timestamp)); // Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)

/**
 * These dates that we created above are in fact, just another type of
 * special type of object. Therefore, they have their own methods, just
 * like arrays or maps or strings.
 *
 * So, we can use those methods to get or to set components of a date.
 */

// Working with dates
let future = new Date(2037, 10, 19, 15, 23);
console.log(future); // Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)

/**
 * getFullYear() returns the year of the date provided.
 *
 * There is also getYear() but, don't use that one, use getFullYear()
 * instead.
 */
console.log(future.getFullYear()); // 2037

/**
 * Next up, is getMonth(), and remember that this one is 0 based.
 *
 * So, 10 is actually the month number 11.
 */
console.log(future.getMonth()); // 10

/**
 * Then we have getDate() which returns the day of the month, and
 * getDay() returns the day of the week.
 *
 * NOTE: getDay() returns a number which represents the day of the week.
 * Sunday is number 0.
 */

console.log(future.getDate()); // 19
console.log(future.getDay()); // 4

/**
 * Besides these, we also have 3 more which are getHours(), getMinutes(),
 * and getSeconds().
 */

console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0

/**
 * So sometimes, these can be pretty useful to work with the dates.
 *
 * Besides that, we can also get a nicely formatted string using the
 * toISOString() method.
 */

console.log(future.toISOString()); // 2037-11-19T09:53:00.000Z

/**
 * We get ISO string which follows some kind of international standard,
 * and maybe you noticed that it is actually similar to the string that
 * we used before coming from `account1.movementDates`. They were
 * generated from toISOString() method.
 *
 * So, that's one of the very useful cases - when you want to convert
 * a particular date object into a string that you can then store
 * somewhere.
 *
 * Finally, we can also get the timestamp for the date. Remember that
 * the timestamp is the milliseconds, which have passed since January 1,
 * 1970.
 */
console.log(future.getTime()); // 2142237180000

/**
 * Now we can take the number 2142237180000 and reverse it.
 *
 * So, if we wanted, we could now create a new date only based on these
 * milliseconds, and it will then give us exactly that same time.
 */
console.log(new Date(2142237180000)); // Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time)

/**
 * Timestamps are actually so important that there is a special method
 * that we can use to get the timestamp for right now.
 *
 * So, if you simply want the current timestamp for this exact moment,
 * then you don't even need to create a new date.
 *
 * All we have to do is to call Date.now() and that then gives us the
 * current timestamp.
 */
console.log(Date.now()); // 1712210501767
console.log(new Date(1712210501767)); // Thu Apr 04 2024 11:31:41 GMT+0530 (India Standard Time)

/**
 * Finally, there are also the set versions of all of these methods.
 *
 * Let's look at the one for the year however, we will not go through
 * all of them here.
 */

future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0530 (India Standard Time)

/**
 * There also exists setMonth(), setDate(), setDay(), etc.
 *
 * These also perform auto correction just like we saw in
 * `new Date(2037, 10, 33)`
 *
 * That's basically all the methods that you need to know about dates
 * and most of them are quite intuitive and all you need to know really
 * is that there are all these different ways of creating dates.
 *
 * In the next lesson, we will then sum up what we just learned here to
 * add dates to the bankers application and make our project even better.
 */

/***********************************************************************/
/************************ OPERATIONS WITH DATES ************************/
/***********************************************************************/

console.log(
  `/************************ OPERATIONS WITH DATES ************************/`
);

/**
 * Let's now perform some operations with dates.
 *
 * One cool thing that we can do with dates is to do calculations with
 * them.
 *
 * For example, we can subtract one date from another date, in order
 * to calculate how many days have passed between the two dates.
 *
 * This works because whenever we attempt to convert a date to a number,
 * then the result is going to be the timestamp in milliseconds. With
 * these milliseconds, we can then perform calculations.
 */

future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future)); // 2142237180000

// the same thing is going to happen when we use the + operator on it
console.log(+future); // 2142237180000

/**
 * So, that does in fact mean that we can now do operations with it.
 *
 * If we subtract one date from another, the result is going to be a
 * number like this one: 2142237180000 i.e. a timestamp in milliseconds
 * and then we can simply convert those milliseconds back to days, hours,
 * etc.
 *
 * So, let's now create a function that takes two dates and it is going
 * to return the number of days that pass between the two dates.
 */

let calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

let days = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days); // 10

days = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days); // -10

// to get rid of the negative value, we can use Math.abs()
calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

days = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days); // 10

/**
 * This works great but, if you need really precise calculations, for
 * example, including time changes due to daylight saving changes, and
 * other weird edge cases, then you should use a date library like
 * Moment.js
 *
 * Moment.js is a library that is available for free for all JavaScript
 * developers but, for something like this, we should be fine.
 *
 * Let's say that one of these days that we pass into calcDaysPassed()
 * also has time, let's see what happens to the result then.
 */

days = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 8));
console.log(days); // 10.333333333333334

/**
 * Now we get 10.33 and we might not want that so, in this case, we can
 * simply use Math.round() on all of the returning values.
 */
calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

days = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 8));
console.log(days); // 10

/**
 * Now let's use this function of calcDaysPassed to format and display
 * the dates in our applicaion in a nicer way in our applciation.
 *
 * Basically what we want to do it that if one movement happened today,
 * then instead of the current date, we want to display "Today". For
 * yesterday, we wanna display "Yesterday". If it happened day before
 * yesterday, we wanna say "2 days ago", so on and so forth.
 *
 * Pretty sure you might have seen this kind of stuff in many web
 * application that you use in your daily life.
 *
 * So, let's head on over to our bankist app and make the necessary
 * changes.
 */

/***********************************************************************/
/******************* INTERNATIONALIZING DATES (INTL) *******************/
/***********************************************************************/

console.log(
  '/******************* INTERNATIONALIZING DATES (INTL) *******************/'
);

/**
 * JavaScript has a new internationalization API. That sounds very fancy
 * but, all it does is to allow us to easily format numbers and strings
 * according to different languages.
 *
 * With this new API, we can make our applications support different
 * languages for users around the world which is pretty important.
 *
 * For example, currencies or dates are represented in a completely
 * different way in Europe or in the U.S. or in Asia.
 *
 * There is a lot of language specific things that we can do with the
 * Internationalization API but, in this section, we are just briefly
 * going to talk about formatting dates and numbers.
 *
 * Starting with dates in this lesson.
 *
 * In our application, we have dates in two places. First - below
 * "current balance" and the others are listed along with movements.
 *
 * Let's go back to our code and find the place which displays the date
 * right below the "current balance" label so that we can format that
 * according to different languages and see what it looks like.
 *
 * So, head over to our bankist application for that.
 */

const todaysDate = new Date(); // Mon Aug 07 2023 01:43:43 GMT+0530 (India Standard Time)
console.log(todaysDate);

/**
 * To format a date, we will have to use the Internationalization API for
 * that -- Its namespace is `Intl`.
 *
 * For times and dates, we use DateTimeFormat() method. All we need to
 * pass into this method is a so-called locale string. This locale is
 * usually the language then a dash and then a country, e.g. "en-US".
 *
 * So this: `new Intl().DateTimeFormat()` will create a so-called
 * formatter for the language in the country that we passed in as a
 * parameter.
 *
 * We will go through a list of these locale string codes soon.
 *
 * So, all of this: `new Intl().DateTimeFormat("en-US")` creates a
 * formatter, and on that formmater, we can call `format()` method.
 *
 * And into the `format()` function, we pass in the date that we want to
 * format.
 */
const formattedDate1 = new Intl.DateTimeFormat('en-US').format(todaysDate);

console.log(formattedDate1); // 8/7/2023

/**
 * That's it. Let's reload the web-page and see what we have.
 *
 * Here you will find the all of the locale strings that you might need
 * for your projects:
 * http://www.lingoes.net/en/translator/langcode.htm
 */

/**
 * This is the most straightforward way of formatting dates and times but,
 * we can actually take it to the next level and add some options to also
 * customize it a little bit.
 *
 * For example, we can see that right now, it only displays the date and
 * not the time so, we can change that by providing an options object
 * to `DateTimeFormat()` function.
 *
 * So, let's define this optional object outside in the global scope and
 * inside this object, all we have to do is to specify the 'hour'
 * property and set it to numeric. Same for 'minute'.
 */

let options = {
  hour: 'numeric',
  minute: 'numeric',
};

/**
 * Now we have to provide this options object as a second argument into
 * the DateTimeFormat() function.
 */

const formattedDate2 = new Intl.DateTimeFormat('en-US', options).format(
  todaysDate
);

console.log(formattedDate2); // 1:52 AM

/**
 * As we see, we get the time, but on the the other hand, the date is gone
 * so, let's get that back as well.
 */

options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'short',
};

const formattedDate3 = new Intl.DateTimeFormat('en-US', options).format(
  todaysDate
);

console.log(formattedDate3); // Mon, August 7, 2023 at 2:06 AM

/**
 * In many situations, it makes more sense to not define the locale
 * manually, but instead to simply get it from the user's browser.
 *
 * That's pretty easy to do as well.
 */

const locale = navigator.language;
console.log(locale); // en

/**
 * Now let's use all of this knowledge in our bankist application.
 */
