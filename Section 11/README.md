# Section 11: Working With Arrays

**About:** This section is all about arrays. In JavaScript, arrays are probably the most used data structure. We use arrays all the time, and therefore, JavaScript has countless modern array methods, which we can also imagine as array tools. In this section, we will learn all about these tools, how to use them, and more importantly - when to use them. We will do that while building our next beautiful project, so that you can immediately apply all these array tools to a real world situation. Let's get started.

## Table of Content

- [Section 11: Working With Arrays](#section-11-working-with-arrays)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Simple Array Methods](#simple-array-methods)
      - [Slice Method](#slice-method)
      - [Splice Method](#splice-method)
      - [Reverse Method](#reverse-method)
      - [Concat Method](#concat-method)
      - [Join Method](#join-method)
    - [The New at Method](#the-new-at-method)
    - [Looping Arrays: forEach](#looping-arrays-foreach)
  - [Author](#author)

## Lessons Learned

### Simple Array Methods

#### Slice Method

- `array.slice(start, end)` - This method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included), where `start` and `end` represent the index of items in that array. The original array will not be modified.
  - `start` (optional) - zero-based index at which to start extraction, converted to an integer. 0 is the default value.
  - `end` (optional) - zero-based index at which to end extraction, converted to an integer. `slice()` extracts up to but, not including `end`. `array.length` is the default value.

#### Splice Method

- `array.splice(start, deleteCount, item1, ... ,itemN)` - This method changes the contents of an array by removing or replacing existing elements and/or adding new elemens in place.
  - `start` - Zero based index at which to start changing the array. If `start` is omitted, nothing is deleted. This is different from passing `undefined`, which is converted to `0`.
  - `deleteCount` (optional) - An integer indicating the number of elements in the array to remove from `start`. If `deleteCount` is omitted, or if its value is greater than or equal to the number of elements after the position specified by `start`, then all elements from `start` to the end of the array will be deleted. If `deleteCount` is `0` or negative, no elements are removed. In this case, you should specify at least one new element.
  - `item1, ... ,itemN` - The elements to add to the array, beginning from `start`. If you do not specify any elements, `splice()` will only remove elements from the array.

#### Reverse Method

- `array.reverse()` - This method reverses an array in-place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

#### Concat Method

- `array.concat(value0, ... , value N)` - This method is used to merge two or more arrays. It does not change the existing arrays but instead, returns a new array.
  - `value0, ... ,valueN` (optional) - Arrays and/or values to concatenate into a new array. If all `valueN` parameters are omitted, `concat()` returns a shallow copy of the existing array on which it is called.

#### Join Method

- `array.join(separator)` - This method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
  - `separator` (optional) - Specifies a string to separate each pair of adjacent elements of the array. The separator is converted into a string if necessary. If omitted, the array elements are separated with a comma (","). If `separator` is an empty string, all elements are joined without any characters in between them.

### The New at Method

- `array.at(index)` - This method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
  - `index` - Zero based index of the array element to be returned, converted to an integer. Negative index counts back from the end of the array -- if `index < 0`, `index + array.length` is accessed.
- The `at()` method can also be used on strings.

### Looping Arrays: forEach

- `forEach(callbackFn, thisArg)` - This method executes a provided function once for each array element.
  - `callbackFn` - A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:
    - `element` - The current element being processed in the array.
    - `index` - The index of the current element being processed in the array.
    - `array` - The array `forEach()` was called upon.
  - `thisArg` (optional) - A value to use as `this` when executing `callbackFn`.
  - NOTE: You cannot break out of a forEach() loop. The `continue` and `break` statements do not work in a forEach() loop at all. If you want to use `continue` or `break` statements, use for-of loop or regular for-loop.
- `Math.abs(x)` - This static method returns the absolute value of a number.
  - `x` - It takes a number as an input.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
