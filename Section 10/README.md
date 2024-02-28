# Section 10: A Close Look At Functions

**About:** Functions are one of the most fundamental building blocks of any Javascript program. So, let's now turn our attention back to functions because, there is a lot that we don't know yet about them. In this section, we are going to study some quite advanced topics, such as higher order functions to bind method and also closure. It is crucial that you understand these topics before moving on to future sections.

## Table of Content

- [Section 10: A Close Look At Functions](#section-10-a-close-look-at-functions)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Default Parameters](#default-parameters)
    - [How Passing Arguments Work: Value vs. Reference](#how-passing-arguments-work-value-vs-reference)
  - [Author](#author)

## Lessons Learned

### Default Parameters

- Setting default values for function parameters before ES6, using short circuit
- Setting default values for function parameters after ES6
- You can override the default values set in the after ES6 method.
- The default values can contain expressions since expressions produce values.
- We can use the values of other parameters that were set before it, to set the default value of the current parameter.
- We cannot skip arguments of a function when we try to call it.
- If we want to leave 'middle' arguments so, they can have default values, we can set them to `undefined` because, setting them to `undefined` is the same thing as not even setting them.

### How Passing Arguments Work: Value vs. Reference

- Changing the value of parameters inside a function, does not affect the original variables that were passed in, as long as that is a primitve type.
- Changing the value of parameter inside a function, does affect the original object if the passed value is that of an object.
- Passing a primitive type to a function is really just the same as creating a copy outside of the function. So, the value is simply copied.
- On the other hand, when we pass an object to a function, it is really just like copying an object. So, whatever we change in a copy, will also happen in the original.
- Interaction of multiple functions with the same object, can create some problems. Look at its [script](./how-passing-arguments-work-value-vs-reference.js) file to check out an example for it.
- Passing by value and passing by reference.
- Javascript does not have passing by reference. It only has passing by value; even though it looks like it is passing by reference.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
