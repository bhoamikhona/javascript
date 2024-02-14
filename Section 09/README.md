# Section 09: Data Structures, Modern Operators, and Strings

**About:** In this section, we will continue learning about basic Javascript features and syntax but, this time with a focus on more modern Javascript. We're going to dive deeper into built-in data structures like objects, maps, and arrays. We will talk about modern ES6+ operators, such as destructuring, and optional chaining, and we will also take a look at how to work with strings. All of this together will give you a very solid and important foundation for the upcoming sections and projects.

## Table of Contents

- [Section 09: Data Structures, Modern Operators, and Strings](#section-09-data-structures-modern-operators-and-strings)
  - [Table of Contents](#table-of-contents)
  - [Lessons Learned](#lessons-learned)
    - [Destructuring Arrays](#destructuring-arrays)
    - [Destructuring Objects](#destructuring-objects)
    - [The Spread Operator (...)](#the-spread-operator-)
    - [Rest Pattern and Parameters](#rest-pattern-and-parameters)
    - [Short Circuiting (\&\& and ||)](#short-circuiting--and-)
    - [The Nullish Coalescing Operator (??)](#the-nullish-coalescing-operator-)
    - [Logical Assignment Operators](#logical-assignment-operators)
    - [Looping Arrays: The for-of Loop](#looping-arrays-the-for-of-loop)
    - [Other Lessons](#other-lessons)
  - [Author](#author)

## Lessons Learned

### Destructuring Arrays

- Skipping elements inbetween, while destructuring. (Leaving a hole).
- Switching the values of 2 variables using destructuring.
- Receiving multiple return values from a function in an array, and using destructuring to unpack the returned values.
- Nested destructuring i.e. destructuring array within an array.
- Setting default values while destructuring. This can be helpful while receiving data from an API or any other "outside" source.

### Destructuring Objects

- We do not need to leave "holes" in between properties as the order of properties in an object does not matter.
- Destructuring object with the EXACT property names.
- How to define different variable names than object's property names while destructuring objects.
- Setting default values.
- Mutating variables while destructuring objects.
- Nested Destructuring with objects.
- Using objects as a parameter to a function and the function immediately destructures it when there are a lot of parameters in order to make it user friendly to another developer (if it is a team project) who has never had an access to this code before as it would be harder know the order of parameters when there are so many.

### The Spread Operator (...)

- Creating shallow copies of arrays
- Merge two arrays together
- Spread Operator works on all iterables.
- Iterables: Arrays, Strings, Maps, Sets
- Objects are NOT iterables.
- Learning to use the spread operator on strings
- Multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array. This is important to know about the spread operator.
- Using the spread operator to pass arguments into a function.
- Since ES 2018, the spread operator also works on objects, even though objects are not iterables.
- Learning to use the spread operator on Objects.

### Rest Pattern and Parameters

- Collect elements in a destructuring assignment
  - Building arrays using the rest operator
  - Using Destructuring and Rest Pattern together
  - Rest Pattern for Objects
- Using Rest Pattern with Functions

> [!NOTE]
>
> - The spread operator is used where we would otherwise write values, spearated by a comma.
> - On the other hand, the rest pattern is basically used where we would otherwise write variable names separated by commas.
> - It is a subtle distiction but, this is how you know when and where to use spread and rest.

### Short Circuiting (&& and ||)

- There are 3 properties of logical operators that we haven't learned before.
  - They can use any data type.
  - They can return any data type.
  - They do something called short-circuiting or short-circuit evaluation.
- In the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value.
- The AND operator short circuits when the first value is falsy and then immediately returns that falsy value without even evaluating the second operand.

### The Nullish Coalescing Operator (??)

- It was introduced in ES2020.
- The Nullish Coalescing Operator works almost the same as the OR operator but with the idea/concept of nullish values instead of falsy values.
- The nullish values are `null` and `undefined`. It does not include 0 or empty string.
- So basically, for the nullish coalescing operator, it is as if the 0 and the empty string were not falsy values and were instead truthy values as well.
- So, all the nullish values will short circuit the evaluation. Only if it was null or undefined, the second operand will be evaluated.

### Logical Assignment Operators

- The logical OR assignment (`x ||= y`) operator only assigns if `x` is falsy.
- `x ||= y` is equivalent to `x = x || y`.
- The logical OR assignment works on the concept of falsy values, so to solve that problem, we also have the nullish assignment operator.
- `x ??= y`
- Logical AND assignment operator: `x &&= y`
- NOTE: When using the Logical AND Assignment Operator, what it does is to assign a value to a variable if it is currently truthy. If it is falsy, it does nothing. It will stay the same. Whereas, if you were to use the regular AND operator, it would have assigned `undefined` as a value if it was currently falsy.

### Looping Arrays: The for-of Loop

- The for-of loop was introduced in ES6.
- Syntax: `for (variable of iterable) { // code block }`
- The for-of loop will loop through the values of an iterable object (arrays, strings, maps...) and perform operations for each iteration, mentioned in the code block.
- So, with for-of loop, we can do the same thing that we can do with a regular for loop but, without having to deal with underlying details such as conditions and counters.
- We can use `continue` and `break` with for-of loop.
- Getting index of the current element while using for-of loop on an array by using `entries()`.

### Other Lessons

- Escape Sequences (Learned in The Spread Operator Lesson)

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
