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

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
