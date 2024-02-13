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

### Other Lessons

- Escape Sequences (Learned in The Spread Operator Lesson)

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
