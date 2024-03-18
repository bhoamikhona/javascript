# Section 11: Working With Arrays

**About:** This section is all about arrays. In JavaScript, arrays are probably the most used data structure. We use arrays all the time, and therefore, JavaScript has countless modern array methods, which we can also imagine as array tools. In this section, we will learn all about these tools, how to use them, and more importantly - when to use them. We will do that while building our next beautiful project, so that you can immediately apply all these array tools to a real world situation. Let's get started.

- [Live Website]()
  - Username: bkk
  - Pin: 6666

## Project: Bankist App

**About**: This is an online banking application. Once you log into the application, you will first see all of the transactions made in that particular's user's account, its bank balance, and you can either transfer money, request a loan, or close the account. You can sort all of the transactions made in the bank account, and you can log into another account to check its details. Each bank account can be set up according to currency used in their country.

- ![Bankist-flowchart](https://github.com/bhoamikhona/javascript/assets/50435319/fae6a673-14ee-407b-b707-940a02212117)

## Table of Content

- [Section 11: Working With Arrays](#section-11-working-with-arrays)
  - [Project: Bankist App](#project-bankist-app)
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
    - [forEach with Maps and Sets](#foreach-with-maps-and-sets)
      - [forEach with Maps](#foreach-with-maps)
      - [forEach with Sets](#foreach-with-sets)
    - [Creating DOM Elements](#creating-dom-elements)
    - [Data Transformations: map, filter, reduce](#data-transformations-map-filter-reduce)
      - [map()](#map)
      - [filter()](#filter)
      - [reduce()](#reduce)
    - [The Map Method](#the-map-method)
    - [Computing Usernames](#computing-usernames)
    - [The Filter Method](#the-filter-method)
    - [The Reduce Method](#the-reduce-method)
    - [The Magic Of Chaining Methods](#the-magic-of-chaining-methods)
    - [The Find Method](#the-find-method)
    - [Implementing Login](#implementing-login)
    - [Implementing Transfers](#implementing-transfers)
    - [The findIndex Method](#the-findindex-method)
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

### forEach with Maps and Sets

#### forEach with Maps

- The `forEach()` method of `Map` instance executes a provided function once per each key/value pair in this map, in insertion order.
  - Parameters
    - `callbackFn` - A function to execute for each entry in the map. The function is called with the following arguments:
      - `value` - Value of each iteration.
      - `key` - Key of each iteration.
      - `map` - The map being iterated.
    - `thisArg` (optional) - A value to use as `this` when execution `callbackFn`.
  - Returns
    - `undefined`

#### forEach with Sets

- The `forEach()` method of `Set` instances executes a provided function once for each value in this set, in insertion order.
  - Parameters:
    - `callbackFn` - A function to execute for each entry in the set. The function is called with the following arguments:
      - `value` - Value of each iteration.
      - `key` - Key of each iteration. This is always the same as `value`.
      - `set` - The set being iterated.
    - `thisArg` (optional) - A value to use as `this` when executing `callbackFn`.
  - Returns
    - `undefined`

### Creating DOM Elements

- In this lesson, we are finally going to work with DOM again, and learn a couple of DOM manipulation techniques. We will use them together with the `forEach()` method that we learned in the past couple of lessons.
- To add HTML elements to the HTML file using Javascript, we can use a method called `insertAdjacentHTML()`
- `domElement.insertAdjacentHTML(position, text)` - This method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
  - `position` - A string representing the position relative to the element. Must be one of the following strings:
    - `beforebegin` - Before the element. Only valid if the element is in the DOM tree and has a parent element.
    - `afterbegin` - Just inside the element, before its first child.
    - `beforeend` - Just inside the element, after its last child.
    - `afterend` - After the element. Only valid if the element is in the DOM tree and has a parent element.
  - `text` - The string to be parsed as HTML or XML and inserted into the tree.
- `domElement.innerHTML` - The `innerHTML` property gets or sets the HTML or XML markup contained within the element. Setting the value of `innerHTML` removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML given in the string.
  - `element.innerHTML;` - getting an HTML element
  - `element.innerHTML = ' '` - setting an HTML content to empty string
  - `element.innerHTML = '<h1>Hi</h1>'` - setting an HTML content to a Heading 1 tag with "hi" in it.
- There are many other ways of creating elements in HTML using Javascript besides `insertAjacentHTML()` and we will study all of them in great detail in a future section but, this one is the more preferred. Since all we have to do is to create a string of HTML and then we can insert that simply using this method.

### Data Transformations: map, filter, reduce

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/584bf698-8276-4ccd-8f4a-1ad3b560c390)
- In JavaScript, there are three big and important array methods that we use all the time to perform data transformations.
- Basically, these are methods that we use to create new arrays based on transforming data from other arrays.
- In recent years, these tools have become really popular and for good reason. Therefore, you will see them everywhere you look in modern JavaScript.
- The tools that we are talking about are `map()`, `filter()`, and `reduce()`. These are three array methods and in this lesson, we are going to get a quick overview of them.
- Then, over the next couple of lessons, we are going to dive deep into these three methods in practice so that we can use them throughout the rest of the course.

#### map()

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/2d71d381-ef4c-41ff-bc5b-8ea153d26fa8)
- First, the `map()` method is yet another method that we can use to loop over arrays.
- `map()` is actually similar to the `forEach()` method that we studied before but, with the difference that `map()` creates a brand new array based on the original array.
- Essentially, the `map()` method takes an array, loops over that array and in each iteration, it applies the callback function that we specify in our code to the current array element.
- In the example, in the image above, we say that each element should be multiplied by 2. With that in place in the callback, the `map()` method multiplies every single element by 2 and puts it into a new array.
- We say that it maps the values of the original array to a new array and that's why this method is called `map()`; and it is exetremely useful. Usually, way more useful than the `forEach()` method because `forEach()` simply allows us to do some work with each array element. But `map()` on the other hand, builds a brand new array containing the results of applying an operation to the original array.
- We will use the `map()` method in practice, right in the next lesson.

#### filter()

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/9e0bff2d-7069-4867-9345-58b2b942e5b1)
- Next up, we have the `filter()` method, which as the name says, is used to filter elements in the original aaray which satisfy a certain condition.
- In the example, in the image above, we are only looking for elements greater than 2.
- So, all the elements that pass the test that we specified will make it into a new filtered array.
- In other words, elements for which the condition in true will be included in a new array that the `filter()` method returns.
- All the other elements will be filtered out i.e. they will not be included in the new array.

#### reduce()

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/b0bc4717-44b1-449b-86c2-52198cb870b8)
- Finally, there is also the `reduce()` method which we use to boil down all the elements of the original array into one single value.
- An example of this can be to add all the elements of an array together.
- But, we can also do many other interesting things.
- For the example of adding up all the numbers in the array, we need to specify an operation like this: `acc + current` where we have an accumulator variable.
- Then, as the `reduce()` method loops over the array, it keeps adding the current eleemnt onto the accumulator until at the end - where we have the total sum of all the elements.
- So, you can imagine this as a snowball that keeps getting bigger and bigger as it rolls down the hill - this is known as the snowball effect and `reduce()` is pretty similar to that. So, keep that in mind as a nice analogy.
- We can also say that this whole process has now reduced the original array to one single value, which in the case of our example, is the sum of all the elements.
- But, it can of course do many other operations.
- Now it is this reduced value that gets returned from the `reduce()` method in the end.
- So, there is no new array in this case, only the reduced value.
- This probably sounds more complicated than it actually is so, let's put it into practice right in the next lesson.

### The Map Method

- The `array.map(callbackFn(element, index, array){}, thisArg)` method creates a new array populated with the results of calling a provided function on every element in the calling array.
- Parameters:
  - `callbackFn` - A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:
    - `element` - The current element being processed in the array.
    - `index` - The index of the current element being processed in the array.
    - `array` - The array `map()` was called upon.
  - `thisArg` (optional) - A value to use as `this` when executing `callbackFn`.
- This method will return a new array with each element being the result of the callback function.

### Computing Usernames

- It is important to distinguish when we should use `map()` and when we should use `forEach()`.
- We can use `map()` when we want to create a new array. Where as we should use `forEach()` when we just want to update an existing object or an array.
- In this lesson, we are trying to create usernames for each of the accounts in the `accounts` array and to do that, we need to iterate over that array and update each `account` object with the newly created username. So, we are not trying to create a new array, we are just trying to update the existing array of objects. Hence, the better choice in this case is to use `forEach()` and not `map()`.
- This whole thing banks on the idea of <ins>side-effect</ins>.
- In JavaScript, a side-effect occurs when a piece of code modifies the state of an object or introduces a subtle alteration in code execution.
- In simpler terms, if a component or function is not purely functional, it exhibits a side-effect.
- To learn more, visit these sources: [LinkedIn](https://www.linkedin.com/pulse/javascript-side-effects-react-john-musa/) and [GreenRoots Blog](https://blog.greenroots.info/what-are-pure-functions-and-side-effects-in-javascript)

### The Filter Method

- The `array.filter(callbackFn(element, index, array){}, thisArg)` creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
- Parameters:
  - `callbackFn` - A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. The function is called with the following arguments:
    - `element` - The current element being processed in the array.
    - `index` - The index of the current element being processed in the array.
    - `array` - The array `filter()` was called upon.
  - `thisArg` - A value to use as `this` when executing `callbackFn`.
- If no elements pass the test, an empty array will be returned.

### The Reduce Method

- The `reduce(callbackFn(accumulator, currentValue, currentIndex, array){}, initialValue)` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceeding element. The final result of running the reducer across all elements of the array is a single value.
- The first time that the callback is run, there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of 0).
- Parameters:
  - `callbackFn` - A function to execute for each element in the array. Its return value becomes the value of the `accumulator` parameter on the next invocation of `callbackFn`. For the last invocation, the return value because the return value of `reduce()`. The function is called with the following arguments:
    - `accumulator` - The value resulting from the previous call to `callbackFn`. On the first call, `initialValue` if specified, otherwise the value of `array[0]`.
    - `currentValue` - The value of the current element. On first call, the value of `array[0]` if an `initialValue` was specified, otherwise the value of `array[1]`.
    - `currentIndex` - The index position of `currentValue` in the array. On first call, `0` if `initialValue` was specified, otherwise 1.
    - `array` - The array `reduce()` was called upon.
  - `initialValue` (optional) - A value to which `accumulator` is initialized the first time the callback is called. If `initialValue` is specified, `callbackFn` starts executing with the first value in the array as `currentValue`. If `initialValue` is not specified, accumulator is initialzied to the first value in the array, and `callbackFn` starts executing with the second value in the array as `currentValue`. In this case, if the array is empty (so that there's no first value to return as `accumulator`), an error is thrown.
- The value that results from running the "reducer" callback function to completion over the entire array.

### The Magic Of Chaining Methods

- Examples of chaining methods.
- Completed the statistics (income, outcome, interest) part of the bankist application.
- Debugging method chaining, in case there is an error.
- Remarks about method chaining:
  - We should not overuse chaning, we should try to optimize it because, chaining a lot of methods one after another can cause real performance issues if we have huge arrays.
  - It is a bad practice in Javascript to chain methods that mutate the underlying original array. An example of that is the `splice()` method.
- Remarks about Method Chaining:
  - We should not overuse chaining.
    - We should try to optimize it because chaining a ton of methods one after another can cause real performance issues if we have huge arrays.
    - If we have a huge chain of methods, chained one after another, we should try to compress all the functionality that they do into as little methods as possible.
    - For example, sometimes we create way more `map()` methods than we actually need, where we could just do it all in one `map()` call.
    - So, when you chain methods like this, keep looking for opportunities to keep you code's performance up.
  - It is a bad practice in JavaScript to chain methods that mutate the underlying original array.
    - An example of that is `splice()` method.
    - You should not chain a method like `splice()` or the `reverse()`
    - methods.
    - You can technically chain them, and for small applications like our bankist app, it is not a big deal and it is not going to cause problems, but, in a large scale application, it usually always a good practice to avoid mutating arrays (we will come back to this when we talk a little bit more about functional programming).

### The Find Method

- The `array.find(callbackFn(element, index, array){}, thisArg)` method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.
- Parameters:
  - `callbackFn` - A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
    - `element` - The current element being processed in the array.
    - `index` - The index of the current element being processed in the array.
    - `array` - The array `find()` was called upon
  - `thisArg` (optional) - A value to use as `this` when executing `callbackFn`.

### Implementing Login

- In this lesson, we will implement log in functionality, and dynamically displayed information depending on the account that has been logged in.
- In an HTML form, the default behavior of the submit button is to reload the page. In order to prevent that from happening, we can call `preventDefault()` on events parameter of the event listener.
- The `event.preventDefault()` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when:
  - Clicking on a "submit" button, prevent it from submitting a form.
  - Clicking on a link, prevent the link from following the URL.
- NOTE: Not all events are cancelable. Use `cancelable` property to find out if an event is cancelable.
- The `HTMLElement.blur()` method removes keyboard focus from the current element.
- Another great thing about forms is that whenever we have one of the input fields, and we click/type into it and then we hit 'enter' then that will automatically trigger a click event on the submit button.
- So clicking into or typing into any of the input fields of the form and then hitting enter, will trigger the submit button.
- Now since we added a 'click' event, event listener to the submit button now both, the 'enter' key and the 'click' event will trigger the event listener function attached to it.

### Implementing Transfers

- In this lesson, we are going to implement our next feature, which is to transfer money from one user to another.
- Here's how transfers work - we input the username of another user to whom we want to transfer and then the amount.

### The findIndex Method

- Now that we have a good grip on the `find()` method, we will learn about a close cousin of it, which is the `findIndex()` method.
- The `findIndex()` method works almost the same ways as `find()` but, as the name suggests, `findIndex()` returns the index of the found element and not the element itself.
- The `array.findIndex(callbackFn(element, index, array){}, thisArg)` method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
- Parameters:
  - `callbackFn` - A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
    - `element` - The current element being processed in the array.
    - `index` - The index of the current element being processed in the array.
    - `array` - The array `findIndex()` was called upon.
  - `thisArg` (optional) - A value to use as `this` when executing `callbackFn`.
- So, let's see a great usecase for `findIndex()` in our bankist application, which is the close account feature; and in our application, closing an account means to basically, just delete that account object from our `accounts` array.
- To delete an element from an array, we use the `splice()` method but, in order to use that, we need the index at which we want to delete and that's where `findIndex()` comes into play.
- You might notice that `findIndex()` is very similar to the `indexOf()` method that we've studied before but, the big difference is that, with `indexOf()`, we can only search for a value that is in the array e.g. `indexOf(23)` but, on the other hand, with `findIndex()`, we can create a complex condition e.g. `findIndex(function (element) {element > 13})`.
- So, both of those methods return an index number but, `indexOf()` is a lot simpler than `findIndex()`.
- NOTE: Both, the `find()` and `findIndex()` methods get access to current index, and the current array. So as always, besides the current element, these other two values are also available. Also, both `find()` and `findIndex()` methods were added to JavaScript in ES6.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
