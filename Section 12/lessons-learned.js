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
