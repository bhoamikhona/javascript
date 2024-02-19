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
    - [Enhanced Object Literals](#enhanced-object-literals)
    - [Optional Chaining (?.)](#optional-chaining-)
    - [Looping Objects: Object Keys, Values, and Entries](#looping-objects-object-keys-values-and-entries)
    - [Sets](#sets)
    - [Maps: Fundamentals](#maps-fundamentals)
    - [Maps: Iteration](#maps-iteration)
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

### Enhanced Object Literals

- ES6 introduced 3 ways, which make it easier to write object literals.
  - An easier way to incorporate another, outside object into an object.
  - The second enhancement to object literals is about writing methods. In ES6, we no longer have to create a property, and then set it to a function expression, like we have been doing so far.
  - The third enhancement is that we can now compute property names instead of having to write them out manually and literally.

### Optional Chaining (?.)

- Introduced in ES2020.
- The `?.` operator is like the `.` chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.
- When used with function calls, it returns undefined if the given function does not exist.
- Multiple Optional Chaining Operators.
- The nullish coalescing operator and optional chaining were introduced into the language at the same time in ES2020 because they were really designed to work well with each other. Also, both of them rely on the concept of nullish values.
- Optional chaining to call methods.
- Optional chaining on arrays.

### Looping Objects: Object Keys, Values, and Entries

- Using for-of loop to loop over object's property names and values.
- `Object.keys()` - It returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon object.
- `Object.values()` - It returns an array whose elements are values of enumerable string-keyed properties found directly upon object.
- Looping over entire object using `entries()`.
- `Object.entries()` - It returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object.

### Sets

- A set is just a collection of unique values i.e. no duplicates.
- Differences and similarities between sets and arrays.
- Using String as an iterable to pass into the Set().
- Empty Set.
- `setName.size` - The Set.size property returns the number of elements in a set. If the set is empty, the size of the set will be returned as 0.
- `setName.has()` - The `has()` method indicates whether the Set object contains the specified value. It returns true if the specified value is present, otherwise false.
- `setName.add()` - The `add()` method is used to add an element to Set object with a specified value. Each element must have a unique value.
- `setName.delete()` - The `delete()` method is used to delete an element with a specified value in a set and it returns a boolean value depending upon the availability of the element. It will not modify the set if the element with a specified value does not exist in the set and return false instead.
- There is no way of retrieving elements out of a set.
- `setName.clear()` - The `clear()` method is used for the removal of ALL elements from a set and make it empty. No arguments are required to be sent as parameters. It returns an `undefined` return value.
- Looping over sets.
- Converting an array to a set.
- Converting a set to an array.

### Maps: Fundamentals

- What is map?
- The difference between maps and objects.
- Creating a new, empty map.
- `mapName.set(key, value)` - The `set()` method is used to add key-value pairs to a Map object. It can also be used to update the value of an existing key. Each value must have a unique key so that they get mapped correctly.
- `mapName.get()` - The `get()` method is used for returning a specific element among all the elements which are present in the map. It takes the key of the element to be returned as an argument and returns the element which is associated with the specified key passed as an argument. If the key passed as an argument is not present in the map, then `mapName.get()` returns `undefined`.
- `mapName.has()` - The `has()` method is used to check whether an element with the specified key exists in a map or not. It returns a boolean value indicating the presence or absence of an element with the specified key in the map.
- `mapName.delete()` - The `delete()` method is used to delete the specified element among all the elements which are present in the map. It takes the key which needs to be removed from the map, thus removing the element associated with that key and returning true. If the key is not present, it will return false.
- `mapName.size` - The `size` property is used to return the number of key-value pairs stored in a map.
- `mapName.clear()` - The `clear()` method is used for the removal of all the elements from a map and making it empty. No arguments are required and it returns `undefined` value.
- Using booleans, arrays, and objects as map keys.
- Using maps with DOM elements.

### Maps: Iteration

- Another method of populating a map, by passing in an array of arrays in the `new Map()`. Each array inside the array will have two elements, the first element being the key, and the second being the value. Example:

```javascript
const chocolates = new Map([
  ['Cadbury', 'Dairy Milk'],
  ['Nestle', 'Kit Kat'],
  ['Hershey', 'Kisses'],
]);
```

- Convert objects to maps.
- Looping over maps.
- Convert maps to arrays (array of arrays).
- `mapName.entries()` - The `entries()` method is used for returning an iterator object which contains all the key-value pairs of each element of the map. It does not require any arguments.
- `mapName.keys()` - The `keys()` is used to extract the keys from a given map object and return the iterator object of keys. The keys are returned in the order they were inserted.
- `mapName.values()` - The `values()` method is used to return an iterator object that contains the value of each element present in the map. The order of the values are in the same order that they were inserted into the map.
- NOTE: The above 3 methods of `entries()`, `keys()`, and `values()` return an iterator but, in order to get rid of them, just use the spread operator within square bracket to convert them into an array.
- NOTE: `[...question.entries()]` is exactly the same as `[...question]`

### Other Lessons

- Escape Sequences (Learned in The Spread Operator Lesson)

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
