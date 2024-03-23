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
