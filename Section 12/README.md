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
    - [Numeric Separators](#numeric-separators)
    - [Working with BigInt](#working-with-bigint)
    - [Creating Dates](#creating-dates)
    - [Operations with Dates](#operations-with-dates)
    - [Internationalizing Dates (Intl)](#internationalizing-dates-intl)
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

### Numeric Separators

- The numeric separator allows you to create a visual separation between groups of digits by using underscores (`_`) as separators.
- NOTE: You cannot use the numeric separator before or after the decimal point, nor can you use it at the start or end of a number.
- NOTE: When trying to convert from string to number, if a numeric separator is present, you will get NaN.
- NOTE: When trying to use `parseInt()` to convert a string to a number, and underscore is present, you will only get the number before the underscore, the rest is ignored.

### Working with BigInt

- `Number.MAX_SAFE_INTEGER` - This static data property represents the maximum safe integer in Javascript `((2 ** 53) - 1)` === 9,007,199,254,740,991, or ~9 quadrillion.
- `BigInt` values represent numeric values which are too large to be represented by the number primitive.
- A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending `n` to the end of an integer literal, or by calling the `BigInt()` function (without the `new` operator) and giving it an integer value or string value.
- `BigInt()` Constructor
  - The `BigInt(value)` function returns primitive values of type BigInt.
  - Parameters:
    - `value` - The numeric value of the object being created. It may be a string, an integer, a boolean, or another `BigInt`.
  - Return Value:
    - A `BigInt` value. Number values must be integers and are converted to BigInts. The boolean value `true` becomes `1n`, and `false` becomes `0n`. Strings are parsed as if they are source text for integer literals, which means they can have leading and trailing whitespaces and can be prefixed with `0b`, `0o`, or `0x`.
- How the math operators work with bigInt and their exceptions.

### Creating Dates

- Javascript `Date` objects represent a single moment in time in platform-independent format. `Date` objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
- `Date()` Constructor
  - The `Date()` constructor creates `Date` Objects. when called as a function, it returns a string representing the current time.
  - Parameters:
    - `Date(year, monthIndex, day, hours, minutes, seconds, and milliseconds)`
    - `year` - Integer value representing the year. Values from `0` to `99` map to years `1900` to `1999`. All other values are the actual year.
    - `monthIndex` - Integer value representing the month, beginning with 0 for Jan to 11 for Dec.
    - `day` (optional) - Integer value representing the day of the month. Defaults to 1.
    - `hours` (optional) - Integer value between 0 and 23 representing the hour of the day. Defaults to 0.
    - `minutes` (optional) - Integer value representing the minute segment of a time. Defaults to 0.
    - `seconds` (optional) - Integer value representing the second segment of a time. Defaults to 0.
    - `milisecond` (optional) - Integer value representing the milisecond segment of a time. Defaults to 0.
  - There are 5 basic forms of the `Date()` constructor:
    - No Parameters:
      - When no parameters are provided, the newly-created `Date` object represents the current date and time as of the time of instantiation. The returned date's timestamp is the same as the number returned by `Date.now()`.
    - Time value or timestamp number
      - `value` - An integer value representing the timestamp (the number milliseconds since midnight at the beginning of January 1, 1970, UTC - a.k.a. the epoch).
    - Date String
      - `dateString` - A string value representing a date, parsed and interpreted using the same algorithm implemented by `Date.parse()`.
    - Date Object
      - `dateObject` - An existing `Date` object. This effectively makes a copy of the existing `Date` object with the same date and time. This is equivalent to `new Date(dateObject.valueOf())`, except the `valueOf()` method is not called.
    - Individual Date and Time Component Values:
      - year, monthIndex, day, hours, minutes, seconds, and milliseconds.
  - Return Value:
    - Calling `new Date()` returns a Date object. If called with an invalid date string, or if the date to be constructed will have a timestamp less than 8,640,000,000,000,000 or greater than 8,640,000,000,000,000 milliseconds, it returns an invalid date.
- `date.getFullYear()` - This method of `Date` instances returns the year for this date according to local time.
- `date.getMonth()` - This method returns the month for this date according to the local time, as a zero-based value (where zero indicates the first month of the year).
- `date.getDate()` - This method returns the day of the month for this date according to local time.
- `date.getDay()` - This method returns the day of the week for this date according to local time, where 0 represents Sunday.
- `date.getHours()` - This method returns the hours for this date according to local time.
- `date.getMinutes()` - This method returns the minutes for this date according to local time.
- `date.getSeconds()` - This method returns the seconds for this date according to local time.
- `date.getMilliseconds()` - This method returns the milliseconds for this date according to local time.
- `date.toISOString()` - this method returns a string representing this date in the date-time-string format, a simplified format based on ISO 8601, which is always 24 or 27 characters long. The timezone is alwasy UTC, as denoted by the suffix `z`.
- `date.getTime()` - This method returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of Jan 1, 1970, UTC.
- `Date.now()` - This static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of Jan 1, 1970, UTC.
- `date.setFullYear()` - This method changes the year, the month, and/or day of the month for this date according to the local time.
- There are also setHours(), setDate(), setMilliseconds(), setMinutes(), etc. You can go through those in MDN docs.

### Operations with Dates

- Calculating/adding/subtracting between two dates
- [Moment.js](https://momentjs.com/) library

### Internationalizing Dates (Intl)

- Javascript has a new internationalization API. That sounds very fancy, but all it does is to allow us to easily format numbers and strings according to different languages.
- So, with this new API, we can make our application support different languages for users around the world, which is pretty important.
- For example, currencies and dates are represented in a completely different way in Europe or in the US or in Asia.
- There are a lot of language specific things that we can do with the internationalization API but, in this section, we are just briefly going to talk about formatting date and numbers -- starting with dates in this lesson.
- Intl
  - The `Intl` namespace object contains several constructors as well as functionality common to the internationalization constructors and other language sensitive functions. Collectively, they comprise the ECMAScript internationalization API, which provides language sensitve string comparison, number formatting, date and time formatting, and more.
  - Unlike most global objects, `Intl` is not a constructor. You cannot use it with `new` operator or invoke the `Intl` object as a function. All properties and methods of `Intl` are static (just like the `Math` object).
  - Locales Argument
    - The `locales` argument is used to determine the locale used ina given operation. The Javascript implementation examines `locales`, and then computes a locale it understands that comes closest to satisfying the expressed preference.
  - Options Argument
    - The `options` argument must be an object with properties that vary between constructors and functions. If the `options` argument is not provided or is undefined, default values are used for all properties.
- `Intl.DateTimeFormat(locales, options)` Constructor
  - This constructor creates `Intl.DateTimeFormat` objects, and `Intl.DateTimeFormat` object enables language-sensitive date and time formatting.
  - Parameters:
    - `locales` (optional) - A string with a BCP 47 language tag, or an array of such strings. The following Unicode extension keys are allowed:
      - `nu` - Numbering system.
      - `ca` - Calendar.
      - `hc` - Hour cycle.
    - `options` (optional) - An object with some or all of the following properties:
      - `datestyle`
      - `timeStyle`
      - `calendar`
      - `dayPeriod`
      - `numberingSystem`
      - `localeMatcher`
      - `timeZone`
      - `hour12`
      - `hourCycle`
      - `formatMatcher`
      - `weekday`
      - `era`
      - `year`
      - `month`
      - `day`
      - `hour`
      - `minute`
      - `second`
      - `fractionalSecondDigits`
      - `timeZoneName`
    - Return Value:
      - A new `Intl.DateTimeFormat` Object.
  - `Intl.DateTimeFormat(locales, options).format(date)`
    - The `format(date)` method of `Intl.DateTimeFormat` instances formats a date according to the locale and formatting options of this `Intl.DateTimeFormat` object.
    - It accepts a date parameter to format.
- `Navigator`
  - The `Navigator` interface represents the sate and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.
  - A `Navigator` object can be retrieved using the read-only `window.navigator` property.
  - `Navigator.language` - This read-only property returns a string representing the preferred language of the user, usually the language of the browser UI.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
