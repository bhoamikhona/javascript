'use strict';

/************************************************************************/
/************************* SIMPLE ARRAY METHODS *************************/
/************************************************************************/
console.log(
  `/************************* SIMPLE ARRAY METHODS *************************/`
);

/**
 * Let's begin this section with a couple of simple and very easy to
 * understand array methods, just to expand our array toolkit a little
 * bit more.
 *
 * Before we start learning about array methods, let's quickly understand
 * why arrays actually do have methods.
 *
 * Remember that methods are simply functions that we can call on objects.
 * Basically, they are functions attached to objects.
 *
 * So, if we have array methods, this means that array themselves are also
 * objects.
 *
 * These array methods are simply functions that are attached to all
 * arrays that we create in JavaScript.
 *
 * We will learn why all arrays have access to these methods in a later
 * section when we talk about prototypal inheritance.
 *
 * For now, just understand that arrays are objects, and that they get
 * access to special built-in methods that we can essentially see as
 * tools for arrays.
 *
 * So, as mentioned before, in this lesson, we are going to start by
 * learning some very simple tools that we can use on arrays.
 *
 * Let's start by defining a simple test array that we can work with, and
 * we will make it as simple as possible because that will help us
 * understand some of the things that we are going to do here.
 */

let arr = ['a', 'b', 'c', 'd', 'e'];

/***** SLICE METHOD *****/
console.log(`/***** SLICE METHOD *****/`);
/**
 * The first method that we are going to talk about is the `slice()`
 * method. This slice() method is very similar to the slice() method
 * that is available on strings.
 *
 * With the slice() method, we can extract part of any array, but without
 * changing the original array.
 *
 * Essentially, we can take a slide of an array and that's why it is
 * called "slice".
 *
 * Just like with the slice() method related to strings, there is a begin
 * parameter which indicates the index at which we will start extracting.
 *
 * When we say begin parameter should equal to 2, the slice should
 * start at position 2 and take all the way to the end.
 *
 * NOTE: slice() will return a new array.
 */

console.log(arr.slice(2)); // ['c', 'd', 'e']

/**
 * We can also define the end parameter.
 *
 * But, just like in strings, the end parameter is not included in the
 * result.
 */

console.log(arr.slice(2, 4)); // ['c', 'd']

/**
 * The length of the resulting array will be end parameter - begin
 * parameter.
 *
 *  Next, just like in strings, we can define a negative parameter, and
 * it will then start to copy from the end of the array.
 */

console.log(arr.slice(-2)); // ['d', 'e']

/**
 * -2 will basically take the last two elements of the array.
 *
 * So, with this, it is pretty easy to simply get the last element of
 * any array.
 */

// last element of the array
console.log(arr.slice(-1)); // ['e']

/**
 * This is a very nice trick that is sometimes useful.
 *
 * We can also use a negative index as the end parameter.
 */

console.log(arr.slice(1, -2)); // ['b', 'c']

/**
 * We get ['b', 'c'] as the result above and that is because it starts
 * at position 1 and it extracts everything except the last two elements.
 * That's what the -2 means as the end parameter.
 *
 * If you find this confusing then just experiment a bit more with it.
 *
 * Finally, we can use the slice() method to simply create a shallow
 * copy of any array. To do that, we simply call the slice() method on
 * an array without passing in any arguments at all:
 */

console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

/**
 * If you remember, we already did something similar in one of the
 * previous sections, but using the spread operator, like so:
 */

console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

/**
 * The above trick with the spread operator gives us the exact same result
 * as using the slice() method to create a copy of the original array.
 *
 * So, now the question is if you should use the spread operator or the
 * slice() method, in order to create a shallow copy?
 *
 * That's entirely up to you. It is just a matter of personal preference.
 *
 * The only time you really need to use the slice() method is when you
 * want to chain multiple methods together i.e. calling array methods
 * one after the other.
 *
 * We will learn about method chaining later, in this section.
 *
 * That is the slice() method.
 */

/***** SPLICE METHOD *****/
console.log(`/***** SPLICE METHOD *****/`);

/**
 * Next up is a method with a very similar name which is called splice().
 *
 * A splice() method works in almost the same way as slice().
 *
 * But the fundamental difference is that it does actually change the
 * original array i.e. it mutates the original array.
 *
 * So, let's see it in action:
 */

console.log(arr.splice(2)); // ['c', 'd', 'e']

/**
 * The result of the above operation looks exactly the same as when we
 * used slice().
 *
 * But now, look at what happens to the original array:
 */

console.log(arr); // ['a', 'b']

/**
 * We see that all that remains in the original aray is the first two
 * elements.
 *
 * So now, the extracted elements are actually gone from the original
 * array i.e. splice() deleted them.
 *
 * So, what we can see is that splice() actually does mutate the original
 * array. It takes part of the array and returns it and then the original
 * array itself loses this part that was extracted.
 *
 * In practicem most of the time the value that the splice() method
 * returns, doesn't even interest us. All we are usually interested in is
 * to just delete one or more elements from an array using splice.
 *
 * One pretty common use case is to simply remove the last element of an
 * array.
 */

// removing the last element of the array using splice()
arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(-1);
console.log(arr); // ['e']

/**
 * The second parameter of `splice()` method is `deleteCount`. So, it
 * tells how many number of elements do you want to remove from an array
 * from the starting postion.
 *
 * Basically, the second argument is an integer that indicates the
 * number of elements in the array to remove starting from the index
 * of the start parameter.
 */

arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(1, 2);
console.log(arr); // ['a', 'd', 'e']

/**
 * So, the first parameter of the splice() method works the same as the
 * slice() method but, the second parameter is really the number of
 * elements that we want to delete.
 */

/***** REVERSE METHOD *****/
console.log(`/***** REVERSE METHOD *****/`);

/**
 * Next up, we are going to talk about reverse.
 */

arr = ['a', 'b', 'c', 'd', 'e'];

/**
 * Let's say that we are working with arr2 and the alphabets placed in it
 * are all in wrong otrder and we need to reverse it.
 *
 * That's exactly what we use reverse() for.
 */
let arr2 = ['j', 'i', 'h', 'g', 'j', 'f'];

console.log(arr2.reverse()); // ['f', 'j', 'g', 'h', 'i', 'j']

/**
 * Indeed, it now returns the reverse array.
 *
 * NOTE:
 * An important fact to note here is that the reverse() method actually
 * does mutate the original array. This is important to keep in mind.
 *
 * If we log our arr2, we will see that it is now reversed too:
 */

console.log(arr2); // ['f', 'j', 'g', 'h', 'i', 'j']

/**
 * You might be noticing that in each of the methods, we are mentioning
 * which ones mutate the original array and which ones don't.
 *
 * That's because it is a very important characteristic of each of these
 * methods. This is because in certain situations, we might not want
 * to mutate the original array, and then we cannot use of any of these
 * methods.
 */

/***** CONCAT METHOD *****/
console.log(`/***** CONCAT METHOD *****/`);

/**
 * Next up is the concat() method and this one is used to concatenate
 * two arrays.
 *
 * Let's create a variable called letters, and letters will be the result
 * of calling the concat() method on arrays.
 */

let letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']

/**
 * Now we have the 10 first letters of the alphabets in our `letters`
 * array.
 *
 * So, the first array will be the one on which the concat() method is
 * called.
 *
 * The second array is the one that we pass into the concat() method.
 *
 * In one of the previous sections, we achieved the same result in another
 * way, which looked like this:
 */

console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'g', 'h', 'i', 'j']

/**
 * This gives us the exact same result and it also does not mutate
 * any of the involved arrays.
 *
 * So just like concat(), which also does not mutate the original array.
 *
 * It is just the matter of personal preference if you prefer to use the
 * concat() method or the spread operator.
 */

/***** JOIN METHOD *****/
console.log(`/***** JOIN METHOD *****/`);

/**
 * Finally, there the join() method that we already talked about before,
 * but we will talk briefly about it here, just for the sake of
 * completetion.
 *
 * Let's join all the alphabets in our `letters` array by using the
 * `-` separator.
 */

console.log(letters.join('-')); // a-b-c-d-e-f-j-g-h-i-j

/**
 * So, as you already know, the result here is a string with the
 * separator that we specify in the parameter.
 */

/**
 * Great! So, your array tool set is rapidly growing here. Remember that
 * you already know push(), shift(), pop(), unshift(), indexOf(), and
 * includes() from the intro section.
 *
 * Now, if you ever lose track of all of these different methods, and how
 * they work, you can always come back to these lessons or of course,
 * check the documentation on MDN.
 *
 * No developer knows all of these by heart because it is just too many
 * methods to keep track of and it is very hard to know everything by
 * heart so, always refer to these lessons or the MDN in case you want
 * to remind yourself of how these work.
 *
 * Let's move on to the next lesson now, where we will take array methods
 * to a whole new level.
 */

/***********************************************************************/
/************************** THE NEW AT METHOD **************************/
/***********************************************************************/
console.log(
  `/************************** THE NEW AT METHOD **************************/`
);

/**
 * There's a new, very simple array method in ES2022, which is the at()
 * method. So, let's take a look at it.
 *
 * Let's start by creating a dummy array:
 */

arr = [23, 11, 64];

/**
 * Now, if we wanted to take one of these value out of the array, let's
 * say the first one then we would traditionally do this:
 */

console.log(arr[0]); // 23

/**
 * With the new at() method, we can do the exact same thing using a
 * method.
 */

console.log(arr.at(0)); // 23

/**
 * Basically, we can now replace the traditional bracket notation with the
 * more modern looking at() method, if we prefer to use array methods like
 * this.
 *
 * Maybe this doesn't look all too useful. What is the big deal here?
 * Actually, there is one particularity of the at() method which makes it
 * quite useful to use instead of the brackets notation.
 *
 * Let's now say that we wanted to get the last element of the array.
 *
 * Supposing that we do not know the length of the array, we would write
 * something like this:
 */

console.log(arr[arr.length - 1]); // 64

/**
 * This is quite a common scenario in JavaScript and that's why there is
 * also another solution. We could use the slice() method that we just
 * learned in the last lesson.
 *
 * Using the slice() method, we get the copy of the original array and if
 * we pass in -1, we get the last element of the array.
 *
 * Just like we learned in the previous lesson.
 *
 * As a result, we get a copy of the array only with the last element in
 * it.
 */

console.log(arr.slice(-1)); // [64]

/**
 * But, since we only need the value, we can use the brackets notation
 * to pull that out of the array, like so:
 */

console.log(arr.slice(-1)[0]); // 64

/**
 * So, these are the two more traditional ways of solving the problem
 * of getting the last element.
 *
 * However, as you can probably guess, the new at() method makes this
 * process even easier.
 *
 * Now, all we have to do is write this:
 */

console.log(arr.at(-1)); // 64

/**
 * Essentially, we can pass in negative indexes in the at() method, just
 * like we did in the slice() method.
 *
 * Basically, the negative indexes start counting from the right side
 * of the i.e. the end of the array.
 *
 * If we pass in -2, we get the second to last element of the array:
 */

console.log(arr.at(-2)); // 11

/**
 * But, most of the time, the thing that we are most interested in is the
 * -1 to get the last element of the array.
 *
 * Now the question is, should you use the at() method or should you use
 * the bracket notation?
 *
 * If you want to get the last element of an array, or basically start
 * counting from the end of an array, then you should probably start
 * using the at() method. Also, if you want to do something called
 * "Method Chaining", which we will talk about later in this section,
 * then the at() method is also perfect for that.
 *
 * On the other hand, if you just want to quickly get a value from an
 * array, like the first element of the array, then of course you can keep
 * using the brackets notation.
 *
 * NOTE: The at() method also works on strings:
 */

console.log('bhoami'.at(0)); // b
console.log('bhoami'.at(-1)); // i

/***********************************************************************/
/*********************** LOOPING ARRAYS: FOREACH ***********************/
/***********************************************************************/
console.log(
  `/*********************** LOOPING ARRAYS: FOREACH ***********************/`
);

/**
 * In this lesson we will loop over an array using the forEach() method.
 *
 * Now, we have already learned how to loop over an array using the
 * for-of loop but, the forEach() method is really fundamentally
 * different.
 *
 * From now on we will start working with our bank account data, but
 * in a very simplified way.
 */

// took this data from the script.js file
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * Let's say that we wanted to loop over this movements array in order
 * to print a message for each movement in this bank account.
 *
 * The positive values are deposits and the negative values are
 * withdrawals.
 *
 * So, we can print something to the console that says whether the user
 * deposited or withdrew some money.
 *
 * We will first do that by using the for-of loop, just so we can compare
 * it with forEach() method.
 */

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

/**
 * Our for-of solution works perfectly but now, let's finally learn how
 * to use the forEach() method to achieve the exact same thing - buy
 * in an easier way.
 *
 * We call the forEach() method on the movements array and as an argument,
 * it requires a callback function.
 *
 * So, forEach() is technically a higher order function as we learned in
 * the last section, whcih requires a callback function in order to tell
 * it what to do.
 *
 * So, it is the forEach() method that will call the callback function,
 * we will not be calling it ourselves. That is, of course, important to
 * keep in mind.
 *
 * When exactly will the forEach() method actually call the callback
 * function?
 *
 * Well, what the forEach() method does is to loop over the array, and in
 * each iteration it will execute the callback function that we pass in.
 *
 * Also as the forEach() method calls the callback function in each
 * iteration it will pass in the current element of the array as an
 * argument.
 *
 * So, we can specify that in the callback function as a parameter, and
 * in our case, let's call it again 'movement'.
 *
 * So, each time the callback function is called (i.e. in each iteration)
 * it will receive the current element of the array as an argument.
 *
 * We can of course give any name to this argument as we want but, let's
 * just call it 'movement' because that what we called it in the for-of
 * loop.
 *
 * In the code body of this callback function, we can do exactly what we
 * did in the for-of loop.
 */

console.log(`---`);

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

/**
 * Indeed, we get the same result as we got in with the for-of loop.
 *
 * That's essentially how the forEach() method works.
 *
 * So, basically behind the scenes, this happens:
 *
 * Iteration 0: function (200)
 * Iteration 1: function (450)
 * Iteration 2: function (-400)
 * ...
 *
 * so on and so forth, until it reaches the end of the array.
 *
 * This part of the forEach() method i.e. passing in the current element
 * of the array like above, is especially important to understand.
 *
 * Basically, this is exactly the concept that we went over in the last
 * section when we learned that we use a callback function to tell
 * another - higher order function exactly what it should do.
 *
 * So, in this case, we tell forEach() that in each iteration, it should
 * log one of the two strings on the console.
 *
 * So, we give the forEach() method instructions by giving it a callback
 * function which contains these instructions.
 *
 * It might be quite a hard concept to wrap your head around but, if you
 * just continue using it then eventualy it will start to make sense.
 *
 * Now if we compare the for-of and forEach(), you might notice that
 * forEach() method is a bit easier to write and easier to read.
 *
 * Maybe you don't agree with it but, that's okay because, it is always
 * good to develop your own style of programiming.
 *
 * But, using the forEach() method and especially understanding the logic
 * behind it with the callback function, is still really important for
 * all the other methods that we are going to learn later.
 *
 * Anyways, let's learn some more about forEach() method because we are
 * not done yet.
 */

/**
 * What if we needed access to a counter variable in the forEach() method,
 * just like we can access the current index of the array in the for-of
 * loop.
 *
 * Remember how we did that in for-of:
 */

console.log(`---`);

for (const [index, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${index + 1}: You deposited ${value}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${value}`);
  }
}

/**
 * Let's now do the same in the forEach() method.
 *
 * With forEach(), it is fortunately a lot easier to get access to the
 * current index.
 *
 * To understand how it works, we need to remember once more that it is
 * the forEach() method who calls the callback function in each iteration.
 *
 * And as it calls this callback function, it also passes in the current
 * element of th array but, actually that's not all it passes in. In fact,
 * forEach() passes in the current element, the index and the entire
 * array that we are looping.
 *
 * Therefore, we can specify them in the callback function's parameter
 * list.
 *
 * Of course, we can just use one like we have been doing thus far, or
 * we can use two or all three of them. And as always, the names of these
 * parameters don't matter but, what does matter is the order.
 *
 * The first parameter always needs to be the current elements, the
 * second parameter always needs to be the current index, and third
 * parameter always needs to be the entire array that we are looping
 * over.
 *
 * This is because that is the order in which the arguments i.e. the
 * actual values are passed into our callback function.
 */
console.log(`---`);

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${movement}`);
  }
});

/**
 * I hope you can see that it is a lot easier to get the current index
 * in the forEach() method.
 *
 * Just notice that the order of the parameters is different in forEach()
 * and for-of loop.
 *
 * In forEach(), the first value is the current element and the second
 * one is the index.
 *
 * While when we use the entries() in the for-of loop, the first element
 * is the index and second element is current element.
 *
 * This is how we loop over arrays with the forEach() method.
 *
 * When should you use the forEach() method and when should you use the
 * for-of loop?
 *
 * Well, one fundamental difference between the two of them is that you
 * cannot break out of a forEach() loop.
 *
 * So, the `continue` and `break` statements do not work in a forEach()
 * loop at all.
 *
 * So instead, forEach() will always loop over the entire array and there
 * is nothing that you can do about it.
 *
 * So, if you really need to break out of a loop then you have to keep
 * using the for-of loop.
 *
 * Other than that, it really comes down to your personal preference.
 */
