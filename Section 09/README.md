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
    - [Summary: Which Data Structure to Use?](#summary-which-data-structure-to-use)
    - [Working with Strings](#working-with-strings)
      - [Part 1](#part-1)
      - [Part 2](#part-2)
      - [Part 3](#part-3)
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

### Summary: Which Data Structure to Use?

- Dealing and working with data is the main in thing that we do as developers.
- That's the reason why, since the beginning of the course, we have been working with JavaScript's built-in data structures, like arrays and objects.
- In the last few lessons, we learned about two new data structures which are sets and maps.
- Now, we have four data structures from which we can choose.
- So, this lesson is created to show you the pros and cons of each data structure and also, when to choose each of them.
- Let's first start by quickly categorizing where data can actually come from.
- There are essentially three sources of data:
  - From the program itself
    - First, the data can be written within the program source code itself like status messages that will be displayed on a webpage based on user actions.
  - From the UI
    - Second, data can come from the user interface i.e. from the webpage. It can either be data the user inputs into some form or data test already written somehow in the DOM.
    - For example, this can be the user's tasks in a todo app or expenses in a budget app.
  - From External Sources
    - Finally, data can come from external sources, which is usually a web API.
    - What is a web API?
      - API stands for <ins>Application Programming Interface</ins> and we can basically use a web API to get data from other web applications.
      - For example, we can use a web API to get the current weather in any city or data about movies or currency conversion rates, and really any kind of data that you can imagine.
      - We will learn how all that works, later in the course.
- So, no matter where the data comes from and what kind of data it is, we usually always have collections of data that we then need to store somewhere.
- So, where do we store collections of data?
  - We use data structures.
  - But, as we've learned - there are 4 built-in data structures in JavaScript.
  - So, now we need a way of deciding between them, but it is not that hard.
    - ![image](https://github.com/bhoamikhona/javascript/assets/50435319/9bcba259-bd9f-41ae-9471-ebd1cc702809)
    - The first decision is this: Do we just need a simple list of values? If so, then we are going to use an array or a set.
    - On the other hand, if we need key-value pairs, then we need an object or a map.
  - So, the big difference is that with a key-value pair, we have a way of describing the values - by using the key.
  - On the other hand, in a list like an array or a set, we simply have the values without any description.
- Now, as a quick example, let's go back to getting data from a web API because in modern JavaScript applications that's usually the most common source of data.
- So, data from Web APIs usually comes in a special data format called <ins>JSON</ins> which looks like this:
- ![json-example](https://github.com/bhoamikhona/javascript/assets/50435319/b46a4275-b4b3-4539-8a6b-d245693bdd82)
- JSON is essentially just text i.e. a long string, but it can easibly be converted to JavaScript objects because it uses the same formatting as JavaScript objects and arrays.
- In the image above, we have three objects that describe recipes.
- We have the values in green, e.g. the value of "title" and the value of "publisher".
- And it makes complete sense that these values are then described using a key. Otherwise, we would have no idea what the different values actually are.
- So, key-value pairs are essential here and that is why this data is stored in an object, and not in an array.
- Now, each of these recipe objects in itself can be seen as a value.
- And since we have many of them, it means that we have, again, a collection of data and therefore, we need a data structure to store them.
- Do we want to describe each of the objects?
  - It is not necessary.
  - This is because we already know that they are all recipes and whatever information we need about the recipes is already stored right in each of the objects.
  - So, all we want is basically a simple list where all the recipes are held together.
  - That is why, an array is the perfect data structure for that.
  - In fact, creating an array of objects is extremely important in JavaScript.
- We will be working on this kind of data all the time as a professional JavaScript developer. That is why, we are placing so much focus on it.
- Other built-in JavaScript Data Structures:
  - WeakMap
  - WeakSet
- Non built-in Data Structures: (These are used in other programming languages but, they are not built into JS)
  - Stacks
  - Queues
  - Linked Lists
  - Trees
  - Hash Tables
- All of these Data Structures don't matter for now but, you should know that there are more that just the 4 built-in data structures.
- Now, let's talk about the built-in data structures.
  - At this point, you already know how to use them but, it is important to know when to use them.
  - Starting with Arrays vs. Sets
    - ![image](https://github.com/bhoamikhona/javascript/assets/50435319/944c1367-d063-4a7c-91f7-652d48c5dd65)
    - We already know that we shoiuld use them for simple lists of values when we do not need to describe the values.

| Arrays                                                                                                                | Sets                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| You should use arrays whenever you need to store values in order, and when these values might contain duplicates.     | Sets, on the other hand, should only be used when you are working with unique values.                                                                                                                                             |
| Also, you should always use arrays when you need to manipulate data because, tehre are a ton of useful array methods. | Besides that, you can also use sets in situations when high-performance is imperative. This is because, operations like searching for an item or deleting an item from a set can be up to 10 times faster in sets than in arrays. |
| -                                                                                                                     | One great use case for sets is to remove duplicate values from an array, like we did before.                                                                                                                                      |
| -                                                                                                                     | So, sets are really not meant to replace arrays but, to compliment them whenever we are dealing with unique values.                                                                                                               |

- Now let's talk about objects vs. maps, and we already know that we should use these key-value data structures whenever we need to describe the values using keys.
- But, when to use objects and when to use maps?
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/0f3a1cff-cbcb-4c9b-acfe-37be0f5300cf)

| Objects                                                                                                                                                                                                                                                             | Maps                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Objects have the traditional key-value data structure simply because we didn't have maps before ES6, but using objects simply as key-value stores has a couple of technical disadvantages. That's why some people say that we have been abusing objects for this.   | Map, on the other hand are way better suited for simple key-value stores because they offer better performance, in fact.                     |
| However, the biggest advantage of objects is how easy it is to write them and to access data by simply using the dot or the brackets operator. Also, most developers are already super used to objects so, they simply keep using them for simple key-value stores. | Also, maps keys can have any data type.                                                                                                      |
| -                                                                                                                                                                                                                                                                   | Maps are easy to iterate.                                                                                                                    |
| -                                                                                                                                                                                                                                                                   | It is easy to compute the size of a map.                                                                                                     |
| If you need functions as values then you should absolutely use an objet for that. In objects, these functions are then called methods and you can use the `this` keyword to access properties of the same object, which is impossible in maps.                      | As a conclusion you should use maps when you simply need to map keys to values.                                                              |
| Also, when working with JSON data, you will probably be using objects for that as well unless you then want to convert the objects to maps, but that is usually not something that we do.                                                                           | You should also use maps when you need keys that are not strings because, as we saw in the last lesson, this can be very powerful sometimes. |

- In conclusion, we still use objects all the time but, maps are also a very important data structure right now and way more important than sets.

### Working with Strings

#### Part 1

- Retrieving a string character using indexes.
- Length property of strings.
- `string.indexOf(substring, position)` - It searches the string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurence of the specified substring at an index greater than or equal to the specified number. `position` parameter is optional.
- `string.lastIndexOf(substring, position)` - It searches the substring and returns the index of the last occurence of the specified substring. It takes an optional starting position and returns the last occurence of the specified substring at an index less than or equal to the specified number. `position` parameter is optional.
- `string.slice(indexStart, indexEnd)` - The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string. `indexEnd` parameter is optional. The sliced string will include the character of the start index and exclude the character at the end index.
- Extracting the first and last word of a string.
- Negative indexes.
- The process of <ins>boxing</ins>.

#### Part 2

- Changing the case of a string.
- `string.toLowerCase()` - This method returns the calling string value converted to lower case.
- `string.toUpperCase()` - This method returns the calling string value converted to upper case.
- `string.trim()` - This method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
- Method chaining on strings.
- `string.trimStart()` - This method removes whitespace from the beginning of a string and returns a new string, without modifying the original string. `trimLeft()` is an alias of this method.
- `string.trimEnd()` - This method removes whitespace from the end of a string and returns a new string, without modifying the original string. `trimRight()` is an alias of this method.
- Replace parts of strings.
- `string.replace(pattern, replacement)` - This method returns a new string with one, some, or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a `string` or a `RegExp`, and the `replacement` can be a string or a function called for each match. If the `pattern` is a string, only the first occurence will be replaced. The original string is left unchanged.
- `string.replaceAll('pattern', 'replacement')` - This method returns a new string with all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a `RegEx`, and the `replacement` can be a string or a function to be called for easy match. The original string is left unchanged.
- Regular Expressions (RegEx).
- Methods that return booleans.
- `string.includes(searchString, position)` - This method performs a case-sensitive search to determine whether one string may be found within another string, returning `true` or `false` as appropriate. `position` is an optional parameter.
- `string.startsWith(searchString, position)` - This method determines whether a string begins with the characters of a specified string, returning `true` or `false` as appropriate. `position` is an optional parameter.
- `string.endsWith(searchString, endPosition)` - This method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate. `endPosition` is an optional parameter.

#### Part 3

- `string.split(separator, limit)` - This method takes a pattern and divides a string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array. `limit` is an optional parameter.
- `array.join(separator)` - This method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. `separator` is an optional parameter.
- Padding a string.
- `string.padStart(targetLength, padString)` - This method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string. `padString` is an optional parameter. The default value for `padString` parameter is the space character.
- `string.padEnd(targetLength, padString)` - This method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string. `padString` is an optional parameter. The default value for `padString` parameter is the space character.
- `string.repeat(count)` - This method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

### Other Lessons

- Escape Sequences (Learned in The Spread Operator Lesson)

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
