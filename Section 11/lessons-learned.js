'use strict';

let currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

/************************************************************************/
/********************** FOREACH WITH MAPS AND SETS **********************/
/************************************************************************/
console.log(
  `/********************** FOREACH WITH MAPS AND SETS **********************/`
);

/**
 * So we learned about the forEach() method on arrays.
 *
 * However, forEach() is also available on maps and sets so, let's take
 * a small detour now and see how forEach() works with maps and sets.
 *
 * We are going to start with maps.
 */

currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// MAP
/**
 * Remember that in the array of arrays (of currencies map), each of the
 * child array will be one entry of the map. Where the first element in
 * the child array is the key and the second element is the value.
 *
 * So, we can also call forEach() on a map.
 *
 * The callback function on the forEach() method for maps also has 3
 * parameters. So, when the forEach() method call the callback, it will
 * call the callback with 3 arguments.
 *
 * The first parameter is the current value in the current iteration, the
 * second parameter is the key, and third one is the entire map that is
 * being looped over.
 *
 * So, as you see, this is similar to the array, where in the array, the
 * first parameter is the current element of the array, the seocnd one is
 * the index and the third parameter is the entire array.
 *
 * So, there is a nice correspondence between array forEach() and maps
 * forEach(); therefore, it is quite each to memorize.
 */

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

/**
 * Indeed, it worked.
 *
 * So, we got the keys of each of the map entries and then also the value.
 *
 * Now let's try the same with a set.
 */

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}

/**
 * Let's now call forEach() on the `currenciesUnique` set.
 *
 * Once again, the callback function of the forEach() method has the
 * parameters of value, key, and set; and we we will see in a second,
 * if that actually makes sense.
 */

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`);
});

/**
 * We get:
 *
 * USD: USD
 * GBP: GBP
 * EUR: EUR
 *
 * So, what this means is that the key is exactly the same as the value.
 *
 * Why is that?
 *
 * Well, a set doesn't have keys and it doesn't have indexes either.
 * Therefore, there is no value that would make sense for the key.
 *
 * So, essentially, the `key` parameter makes no sense at all. It wouldn't
 * even have to be there.
 *
 * So, the people who designed the forEach() method for sets, they could
 * have simply omitted the second argument.
 *
 * But, if they did that, then the forEach() for set would be different
 * from others. So, that would then create confusion in developers.
 *
 * Therefore, it was decided to keep the same signature i.e. keep the
 * same three parameters in the callback function and simply to set the
 * second parameter equal to the first one.
 *
 * So, you can also write value instead of key, like so:
 * just to avoid that confusion.
 */

// currenciesUnique.forEach(function (value, value, set) {
//   console.log(`${value}: ${value}`);
// });

/**
 * But, this gives us an error because no two parameter names should be
 * the same.
 *
 * So, instead, you can just type underscore which in JavaScript means a
 * throwaway variable. So, that means a variable that is completely
 * unnecessary. So, it is just a convention which we will see again
 * a little bit later.
 */

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

/**
 * That's all you need to know about the forEach() method for maps and
 * sets.
 *
 * It is very straightforward if you already understood how it works for
 * arrays.
 */

/**********************************************************************/
/*************************** THE MAP METHOD ***************************/
/**********************************************************************/
console.log(
  `/*************************** THE MAP METHOD ***************************/`
);

/**
 * Let's now start seeing the three data transformation methods in
 * practice, starting with the `map()` method in this lesson.
 *
 * As we just learned (in the theoretical lesson), the `map()` method is
 * yet another way that we can use to loop over arrays.
 *
 * But unlike forEach(), the map() method will give us a brand new array.
 *
 * This new array will contain in each position the results of applying
 * a callback function to the original array elements.
 *
 * So, let's see how that works.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * Let's suppose the movements in the array above are in Euros, and we
 * will try to convert them to USD using the map() method.
 *
 * Let's suppose that 1€ = $1.1 - let's store that conversion rate in a
 * separate variable.
 */

const euroToUsd = 1.1;

/**
 * Now what we want to do is to basically multiply each element of the
 * movements array by 1.1 (i.e. the conversion rate).
 */

/**
 * Just like the forEach() method, the map() method also get a callback
 * function and this callback function also gets an argument - the current
 * element - just like in the forEach() method.
 *
 * In the callback function, we need to return the value that we want the
 * new array to have in the current position.
 *
 * In our example, we want the orignal array times the euroToUsd
 * conversion rate.
 *
 * Let's store the result in a variable so that we can take a look at
 * the new array in the console.
 */

let movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

console.log(movements);
console.log(movementsUSD);

/**
 * Don't mind the multiplication errors in the result, we will learn
 * where they are coming from a bit later but essentially, the new
 * values in the new array are exactly each value times 1.1
 *
 * Indeed, we ended up with a new array containing all the movements but
 * converted from euros to USD.
 *
 * Also, we can see that the original `movements` array was not mutated
 * at all.
 *
 * Indeed, the `map()` method really only returns a new array with the
 * new elements.
 *
 * This really is the fundamentals of the `map()` method works.
 *
 * So, we can use it and we will use it in all kinds of different
 * situations.
 *
 * Now, just to compare, let's write the same thing here with a for-of
 * loop. In this loop, we want to create a new array. So, the way that we
 * do it in for-of loop is to create an empty array outside of the loop
 * and then while iterating, we push the resulting item in the new array.
 */

let movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}

console.log(movementsUSDfor);

/**
 * The resulting array looks exactly the same as the result of map()
 * method.
 *
 * So, we could've used for-of loop instead of map() method and it doesn't
 * look that bad either but, it is a completely different philosophy.
 *
 * In the map() method, we use a function to solve the problem of creating
 * a new array.
 *
 * While in the for-of loop, we simply loop over one array and then
 * manually create a new one.
 *
 * So, they are completely different philosophies or we can also say
 * paradigms.
 *
 * Using map() method is more in line with functional programming which
 * is something that we have mentioned a couple of times in this course,
 * and we will talk about it later, in greater detail.
 *
 * Also, in modern JavaScript, there is definitely a push going on in the
 * direction of functional programming i.e. a more functional language.
 *
 * Therefore, in modern JavaScript, using map() method is the way to go.
 *
 * So, using methods together with callback functions is the new and
 * modern way of doing stuff.
 */

/**
 * Now, let's make our callback function in the map() method look a
 * little bit cleaner i.e. we can simplify it greatly.
 */

movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

/**
 * We could use an arrow function here and simplify it into just one
 * line of code.
 */

movementsUSD = movements.map(mov => mov * euroToUsd);

/**
 * So, now we have nice and clean, one liner callback function.
 *
 * However, many people don't like the way that it looks. They say that
 * it lacks the `function` and `return` keyword which leads to bad
 * readability, and that makes it more difficult to understand.
 *
 * There is a point to what they are saying and there is some truth in it
 * but, some people prefer the fact how much smaller and cleaner it looks
 * with arrow functions.
 *
 * So, if you understand it well enough (i.e. how the arrow functions
 * work) then you will become familiar with it pretty quickly. Then there
 * is no problem writing code using arrow functions.
 *
 * The main thing that you need to keep in mind is that we are returing
 * the value that is written right after the "arrow". So, you need to
 * remember that writing the arrow is like writing the `return` keyword,
 * at least in one liners.
 *
 * If you understand that, then you are good to go.
 *
 * We will keep using the arrow functions in these kinds of situations
 * for the rest of the course because, they are perfect for these small
 * callback functions.
 *
 * In fact they were really developed for this kind of application.
 *
 * But, if you do prefer the regular function syntax then feel free to
 * use them instead.
 *
 * With that being said, let's experiment a bit more and explore the
 * map() function further.
 */

/**
 * Just like the forEach() method, the map() method also has access to the
 * exact same three parameters i.e. besides the current array element, we
 * also get access to the current index as well as the whole array.
 *
 * So, let's now use the map() method to loop over the movements array
 * but, this time we are going to create a string similar to the one
 * that we created using forEach(), in one of the previous lessons, to
 * log onto the console.
 */

// here we are returning the string because it will then set that string
// as the current item in the new array
let movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDescriptions);

/**
 * Indeed, we get an array with strings that we previously logged on to
 * the console, when we used forEach() method (in one of the previous
 * lessons).
 *
 * NOTE:
 * By the way, it is completely acceptable to have 2 return statements
 * or even more in the same function, as long as only of them is
 * executed.
 *
 * We can simplify it further because the two returning strings are
 * pretty much the same thing except for the words "deposited" and
 * "withdrew".
 *
 * Let's use a ternary operator for that.
 *
 * Note that this has nothing to do with the map() method but, it is
 * a good way to also keep practicing the other skills that we have
 * been learning.
 */

movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

/**
 * It works just the same.
 *
 * In this case, we actually don't even need our third parameter which
 * is the array that we are iterating over. But, let's leave it there
 * for reference purposes.
 *
 * Also, it is a good idea to keep in mind why we actually get access
 * to the first two parameters.
 *
 * Once again, all we do here is to pass the callback function into the
 * map() method. But, we do not call the callback function ourselves.
 *
 * It is the map() method who will call the callback function for each
 * of the array elements in the movements array.
 *
 * Now, each time that the map() method calls the callback function, it
 * will simply pass in the current array element as well as the current
 * index and the whole array. Off those 3, in our case, we are only
 * using the first two, which are the current array element and the
 * current index.
 *
 * Hopefully by now, it is crystal clear of how it all works.
 *
 * Now, you could say that what we did here with the map() method is
 * essentially the same as what we did with the forEach() method. But,
 * in fact, there is a big, big difference between the two approaches.
 *
 * Before, we printed each line individually to the console, as we were
 * looping over the array i.e. in each of the iterations, we performed
 * some action that was then visible in the console and we call this
 * a side effect.
 *
 * So, the forEach() method creates side effects.
 *
 * But, with the map() method, all we did was to return each of the
 * strings from the callback. Basically, they got added into a new array
 * and finally, we logged that entire array to the console and the
 * elements one by one.
 *
 * So, in the map() method, we did not create a side effect in each
 * iteration. All we did was to build a brand new array.
 *
 * This idea of side-effects will become important again, as we talk
 * more about functional programming.
 *
 * This is how the map() method works. In the next lesson, we will see
 * a more practical application of it in the context of our Bankist
 * application.
 */

/***********************************************************************/
/************************** THE FILTER METHOD **************************/
/***********************************************************************/
console.log(
  `/************************** THE FILTER METHOD **************************/`
);

/**
 * Now let's learn about the filter() method, which as we learned before,
 * is used to filter array elements that satisfy a certain condition.
 *
 * How do we specify such a condition? We use a callback function.
 *
 * Let's work with our `movements` array again.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * Just like the other array methods such as forEach() and map(), the
 * filter() method also gets access to the current element, the current
 * index, and the entire array that we are looping over as the parameters
 * of the callback function.
 *
 * In our case, for now, we will simply access the current element, which
 * in filter() is usually all that we need.
 *
 * Now, what we want to do here is to create an array of deposits; and
 * deposits are only the movements that are above 0.
 *
 * So, we want to filter out the negative value.
 *
 * So, to make this work, in the body of the callback function, we would
 * have a condition which will check if the current element is above 0
 * or not. If the conditions results in true, then that value will be
 * stored in the new array; and to store it in the new array, we have to
 * return that value.
 *
 * So, we have to make the function return a boolean value. If the
 * returning value is true, then the current element makes it into the
 * new array, otherwise, it moves on to the next iteration.
 */

const deposits = movements.filter(function (mov) {
  // only the array elements for which the condition below is true
  // will make it into the new array. All the other values will simply
  // get filtered out i.e. they will not be included in the `deposits`
  // array.
  return mov > 0;
});
console.log('movements:', movements);
console.log('deposits:', deposits);

/**
 * That's it, it is really that simple.
 *
 * So, just as mentioned before, if you know how to use the callback
 * function correctly and if you know how and why it works, then all
 * of these methods become really, really simple.
 *
 * Let's do the same thing with the for-of loop just so you can
 * appreciate the difference.
 */

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log('depositsFor:', depositsFor);

/**
 * As expected, we get the same result.
 *
 * So you could ask again, what is the big difference here? What is the
 * big deal? Why not just use the for-of loop for everything.
 *
 * The reason for that is again, that there is a push in the JavaScript
 * community to use more functional code such as filter() method.
 *
 * But, there is also a more practical implication. That's because,
 * we can actually chain all of these methods together. Basically,
 * use them all one after another to build a big final result.
 *
 * A bit similar to what we did in our script.js file to create
 * usernames. But, in that case, we mixed string methods with array
 * methods however, later on, we will do big chains of only array
 * methods; and that would be completely impossible using the for-of
 * loop.
 *
 * So, that's another advantage of using the methods instead of the
 * regular for-of loop.
 */

/**
 * Anyway, let's complete another small challenge here, which is to
 * create an array of withdrawals.
 *
 * Let's create that using the filter() method, and without looking at
 * how we created deposits.
 */

const withdrawals = movements.filter(mov => mov < 0);
console.log('withdrawals:', withdrawals);

/**
 * This was the second of the data transformation methods (map(),
 * filter(), and reduce()). In the next lesson we will talk about
 * reduce().
 */
