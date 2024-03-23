# Section 12: Numbers, Dates, Intl, and Timers

**About:** Over the last few sections, we have learned all about common Javascript data structures and strings but now, it is time to turn our attention onto two additional ways of representing data: numbers and dates. These might be a bit less important than things like strings and arrays but, you should still know how to use them. So, in this section, we will continue working on the Bankist App, but now we will incorporate numbers, dates, and also internalization, and timers, which are another two very important aspects that you should know about.

## Demo

- [Live Site](./index.html)
  - Username: bkk and Pin: 6666

## Table of Content

- [Section 12: Numbers, Dates, Intl, and Timers](#section-12-numbers-dates-intl-and-timers)
  - [Demo](#demo)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Converting and Checking Numbers](#converting-and-checking-numbers)
    - [Math and Rounding](#math-and-rounding)
    - [The Remainder Operator](#the-remainder-operator)
  - [Author](#author)

## Lessons Learned

### Converting and Checking Numbers

- Behind the scenes, the numbers in Javascript are represented in Binary so, all the calculations happen in base 2 instead of base 10.
- This leads to some calculation errors that we can do nothing about.
- We can convert strings to Numbers by just adding a `+` before it.
  - e.g. `Number("24")` === `+"24"`
- `Number.parseInt()`
  - The `Number.parseInt(string, radix)` static method parses a string argument and returns an integer of the specified radix or base.
  - Parameters:
    - `string` - The value to parse, coerced to a string. Leading whitespaces in this argument is ignored.
    - `radix` - An integer between 2 and 36 that represent the radix (the base in mathematical numeral systems) of the string. If radix is undefined or 0, it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed.
  - Return Value:
    - An integer parsed from the given string is returned.
    - If the radix is smaller than 2 or bigger than 36, or the first non-whitespace character cannot be converted to a number, NaN is returned.
- `Number.parseFloat()`
  - The `Number.parseFloat(string)` static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
  - Parameters:
    - `string` - The value to parse, coerced to a string. Leading whitespace in this argument is ignored.
  - Return Value:
    - A floating point number parsed from the given string.
    - Or NaN when the first non-whitespace character cannot be converted to a number.
- `Number.isNaN()`
  - The `Number.isNaN(value)` static method determines whether the passed value is the number value NaN, and return false if the input is not of the Number type. It is more robust version of the original, global `isNaN()` function.
  - Parameters:
    - `value` - The value to be tested for `NaN`.
  - Return Value:
    - The boolean value `true` if the given value is a number with value `NaN`. Otherwise, false.
- `Number.isFinite()`
  - The `Number.isFinite(value)` static method determines whether the passed value is a finite number -- that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.
  - Parameters:
    - `value` - The value to be tested for finiteness.
  - Return Value:
    - The boolean value true if the given value is a finite number. Otherwise false.

### Math and Rounding

- `Math.sqrt(x)`
  - The `Math.sqrt()` static method returns the square root of a number.
  - Parameters:
    - `x` - A number greater than or equal to 0.
  - Return Value:
    - The square root of `x`, a non-negative number. If `x < 0`, returns `NaN`.
- `Math.cbrt(x)`
  - The `Math.cbrt()` static method returns the cub root of a number.
  - Parameters:
    - `x` - A number.
  - Return Value:
    - The cube root of `x`.
- `Math.max(val1, val2, ... , valN)`
  - The `Math.max()` static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
  - Parameters:
    - `val1`, `val2`, ... ,`valN` - Zero or more numbers among which the largest value will be selected and returned.
  - Return Value:
    - The largest of the given numbers. Returns `NaN` if any of the parameters is or is converted to `NaN`. Returns -Infinity if no parameters are provided.
- `Math.min(val1, val2, ... , valN)`
  - The `Math.min()` static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
  - Parameters:
    - `val1`, `val2`, ... ,`valN` - Zero or more numbers among which the lowest value will be selected and returned.
  - Return Value:
    - The smallest of the given numbers. Returns `NaN` if any of the parameters is or is converted into `NaN`. Returns Infinity if no parameters are provided.
- `Math.PI` - The `Math.PI` static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.
- `Math.random()`
  - The `Math.random()` static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range -- which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
  - It returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
- `Math.trunc(x)`
  - The `Math.trunc()` static method method returns the integer part of a number by removing any fractional digits.
  - Parameters:
    `x` - A number.
  - Return Value:
    - The integer part of `x`.
- `Math.round(x)`
  - The `Math.round()` static method returns the value of a number rounded to the nearest integer.
  - Parameters:
    - `x` - A number.
  - Return Value:
    - The value of `x` rounded to the nearest integer.
- `Math.ceil(x)`
  - The `Math.ceil()` static method always rounds up and returns the smallest integer greater than or equal to a given number.
  - Parameters
    - `x` - A number.
  - Return Value:
    - The smallest integer greater than or equal to `x`.
- `Math.floor(x)`
  - The `Math.floor()` static method always rounds down and returns the largest integer less than or equal to a given number.
  - Parameters:
    - `x` - A number.
  - Return Value:
    - The largest integer smaller than or equal to `x`.
- NOTE: All of these methods also do type coercion.
- `toFixed(digits)`
  - The `toFixed()` method formats a number using fixed-point notation.
  - Parameters:
    - `digits` (optional) - The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.
  - Return Value:
    - A string representing the given number using fixed-point notation.

### The Remainder Operator

- `x % y` - The remainder (`%`) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
