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

let euroToUsd = 1.1;

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

/***********************************************************************/
/************************** THE REDUCE METHOD **************************/
/***********************************************************************/
console.log(
  `/************************** THE REDUCE METHOD **************************/`
);

/**
 * In this lesson, we are going to talk about the third data
 * transformations method, which is the reduce() method.
 *
 * We use the reduce() method to essentially boil down all the elements
 * in an array to one single value.
 *
 * In one of the previous lessons, we talked about the example of adding
 * up all the numbers in one array. So, let's try that now with the
 * `movements` array.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * By adding all the movements (deposits and withdrawals), we end up
 * with the global balance of the account.
 *
 * The reduce() method also gets a callback function but, this one is a
 * little bit different than the other ones e.g. map() and forEach().
 *
 * In the callback functions of map() and filter() methods, the first
 * parameter is the current element, the second parameter is current
 * index, and the third parameter is the entire array upon which the
 * method is called.
 *
 * But, in the callback function of the reduce() method, the first
 * parameter is actually something called the accumulator.
 *
 * This accumulator is essentially like a snowball that keeps
 * accumulating the value that we ultimately want to return.
 *
 * So, in the case of adding all the elements or all the numbers of an
 * array together, that will be the sum.
 *
 * As always, the callback function will be called in each iteration
 * of looping over the array.
 *
 * So, reduce() also loops over the array and calls the callback in
 * each iteration, but now, what will we actually do in each of these
 * iterations?
 *
 * Since the accumulator is the value that we will keep adding to, what
 * we are going to do here is add the current value to the accumulator.
 *
 * This works because in each call of the callback function, the
 * accumulator will be the current sum of all the previous values.
 *
 * So, we will really keep adding to this accumulator in each iteration
 * of the loop.
 *
 * Finally, we also need to return `acc + cur` from the callback - this
 * is how the new accumulator can then be used in the next iteration of
 * the loop.
 *
 * Basically, in each loop iteration, we return the updated accumulator
 * plus the new current value. So, like this, we can then keep adding
 * to it in the next iteration.
 *
 * This callback function is the first argument of the reduce() method.
 * But, the reduce() method actually has another i.e. a second parameter,
 * and that is the initial value of the accumulator.
 *
 * So, the second parameter is going to be the initial value of the
 * accumulator in the first loop iteration.
 *
 * In our case, it is going to be 0.
 *
 * With that, we should be able to take a look at our balance now.
 */

// accumulator -> SNOWBALL
let balance = movements.reduce(function (acc, cur, idx, arr) {
  console.log(`Iteration ${idx}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance); // 3840

/**
 * We have one single number as a result. So, indeed everything was
 * boiled down to one number, which we can suppose is all of the values
 * in the `movements` arrays added together.
 *
 * When we look at the accumulator in each iteration, we see that in
 * iteration 0, the accumulator is 0, which is the value that we
 * specified as the initial value.
 *
 * Then in the second iteration, the accumulator is already at 200 and
 * that's because the initial accumulator value (0) plus the current
 * value in the second iteration (200) is 200.
 *
 * In the next iteration, the accumulator's value is 200 and it will be
 * added to the new current value which is 450 so 200 + 450 is 650.
 *
 * 650 will be the updated accumulator value in the next iteration.
 * This will go on until the entire array has been looped over.
 *
 * So here you can really see the snowball effect of all the values,
 * adding up to one final value. In the end, that value is essentially
 * the accumulator.
 *
 * So, this is really how the reduce() method works.
 *
 * Let's do the same thing using the for-of loop.
 */

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2); // 3840

/**
 * Indeed, we get the same result.
 *
 * But, you can this common pattern that we always need an external
 * variable whenever we want to use a for-of loop.
 *
 * It is fine if you only need one loop but, it starts to become very
 * cumbersome and impractical when we use many loops for doing many
 * operations.
 *
 * So, these methods that we have been studying, they completely avoid
 * this extra variable and they simply return the variable or the value
 * right away.
 *
 * We can write the above reduce() example in an even simpler way
 * by using arrow function, like so:
 */

balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance); // 3840

/**
 * Understanding how the reduce() method works is very important, but it
 * is also way more confusing than the other ones, but I am sure you
 * are well underway of really understanding it.
 *
 * Now that we know how it workds, we can actually also calculate the
 * balance of movements in our bankist app and print it to our
 * application user interface.
 *
 * So, headover to bankist.js for that.
 */

/**
 * Now, just to finish this lesson about reduce() method, let's see one
 * final example because we can also do other things with it than just
 * adding all the values in an array.
 *
 * This time, we want to get the maximum value of the movements array
 * using the reduce() method.
 *
 * So, the result that we are looking for is 3000 from the movements
 * array.
 *
 * We can use reduce() method for this because reduce() method is for
 * boiling down the array into just one single value, but that value
 * can be whatever we want. It doesn't have to be a sm. It could be a
 * multiplication, or even something completely different, like a string
 * or an object, but here, we will keep working with numbers, but
 * this time, we want the maximum number.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * Whenever we use the reduce() method, we need to ask: "What should be
 * the purpose of this accumulator value?"
 *
 * In the above example, when we wanted to add all the values in an
 * array, the purpose of the accumulator was to keep track of the current
 * sum.
 *
 * In our current example, the accumulator will be the one that will
 * keep track of the current maximum value.
 *
 * So, let's just start by writing the logic in a bigger way so we
 * can understand what's happening and then we will simplify it to make
 * it a one-liner function.
 *
 * So, in the function body, we want to return the current accumulator
 * value if it is bigger than current movement value, otherwise we want
 * to return the current movement value. This is because in the next
 * iteration, the value that we return will be the value of the
 * accumulator.
 *
 * Also, the initial value of the accumulator will be the first element
 * of the array. We could have set it to 0 but, if the first value of
 * the movements array was negative and we were looking for the minimum
 * value in the array then that wouldn't work. Also, imagine if all
 * the values of the array are negative and we wanted to find the biggest
 * value of them all, then 0 wouldn't give us the expected outcome.
 *
 * So, don't just set the initial value of the accumulator to 0 if you
 * are looking for a maximum or minimum value. Always just go with the
 * first value of the array.
 */

// Maximum value in the movements array
let max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max); // 3000

/**
 * There are a ton of things that we can do with the reduce() method. It
 * is by far the most powerful array method there is and because of that,
 * it can also be the hardest one to use.
 *
 * So, we always need to think exactly what we want the accumulator and
 * the current value to be and how they should interact.
 *
 * Hopefully, with this exercise, we could demonstrate the thought
 * process a little bit and throughout the section and the rest of the
 * course, there will be some more exercises of the reduce() method so
 * that you can also learn better and better how to use it yourself.
 */

// simplifying the above exercise:
max = movements.reduce((acc, mov) => (acc > mov ? acc : mov));
console.log(max); // 3000

/**
 * NOTE: If there is no initial value explicitly mentioned when calling
 * the reduce() method, the first value of the array is set as the
 * initial value of the accumulator by default and the the callback
 * function starts executing with the second value in the arra as the
 * current value.
 *
 * To learn more, visit MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */

/***********************************************************************/
/******************** THE MAGIC OF CHAINING METHODS ********************/
/***********************************************************************/
console.log(
  `/******************** THE MAGIC OF CHAINING METHODS ********************/`
);

/**
 * Up until now, we have been using the map(), filter(), and reduce()
 * methods kind of in isolation.
 *
 * However, we can take it one step further by chaining all of these
 * methods one after another.
 *
 * For example, let's say that we wanted to take all the movement
 * deposits then convert them from euros to dollars and finally add them
 * all up, so that we know exactly how much was deposited into the
 * account in USD.
 *
 * Now, we could of course, do each of those operations individually
 * and store each result in a new variable.
 *
 * However, we can also do it all in one go. So, let's do that.
 *
 * We will start by using the filter() method to extract all the
 * deposits from the movements array, then we will use method chaining
 * to chain the map() method on the resulting array to convert each
 * deposit into USD, finally, we will chain the reduce() method to
 * sum all the deposits up.
 *
 * Method chaining works because map() and filter() return a new array
 * based on the conditions that we pass into their callback functions.
 * So, if the returning value is an array, then we can call another
 * array method on that returning value.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
euroToUsd = 1.1;

// PIPELINE Analogy
let totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((sum, mov) => sum + mov, 0);

console.log(totalDepositsUSD); // 5522.000000000001

/**
 * We could of course chain many other methods as long as they return
 * new arrays.
 *
 * NOTE: We cannot chain another array method after reduce() because
 * reduce() returns a single value. It does not return a new array.
 *
 * So, we can only chain an array method one after another, if the first
 * one returns an array.
 *
 * You can imagine all of it sort of like a pipeline that processes our
 * data. We access our data right at the beginning (like the movements
 * array in our example), then it goes through different steps of
 * processing (steps being filter(), map(), and reduce() in our case),
 * and the processed data comes out the other end of the pipeline.
 *
 * When we chain all these methods together, it can be a little hard
 * to debug if one of the results is not what we expect.
 *
 * For example, if our result was a negative value, it would be very
 * difficult to figure out which step of the pipeline that bug would
 * come from.
 *
 * To solve that, it would be good to check the result at every step.
 *
 * For demonstration purposes, let's introduce a mistake, let's filter
 * all the withdrawals instead of deposits.
 *
 */

totalDepositsUSD = movements
  .filter(mov => mov < 0) // mistake inserted
  .map(mov => mov * euroToUsd)
  .reduce((sum, mov) => sum + mov, 0);

console.log(totalDepositsUSD); // -1298.0000000000002

/**
 * Now to figure out where our mistake lies, we can take the help of
 * the `array` parameter that we get a hold of in each of these array
 * methods.
 */

totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, idx, arr) => {
    // finding the bug using the `arr` parameter
    console.log(arr); // [-400, -650, -130]
    return mov * euroToUsd;
  })
  .reduce((sum, mov) => sum + mov, 0);

console.log(totalDepositsUSD);

/**
 * So, if we want to see the result of filter(), we can use array
 * parameter of the next chained method because the input to that method
 * is essentially the output of the previous method.
 *
 * This is one of the greate use cases of having access to the array
 * parameter that we are iterating over in these array methods.
 *
 * Let's bring back our original correct solution:
 */

totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((sum, mov) => sum + mov, 0);

console.log(totalDepositsUSD); // 5522.000000000001

/**
 * Now that we know how the method chaining works, we can go back to our
 * application and calculate the statistics displayed below the movements
 * in the UI.
 *
 * So, head over to the script.js file for that.
 */

/**
 * Remarks about Chaining:
 *
 * 1. We should not overuse chaning, we should try to optimize it because,
 * chaining a lot of methods one after another can cause real performance
 * issues if we have huge arrays.
 *
 * If we have a huge chain of methods, chained one after another, we
 * should try to compress all the functionality that they do into as
 * little methods as possible.
 *
 * For example, sometimes we create way more map() methods that we
 * actually need, where we could just do it all in one map() call.
 *
 * So, when you chain methods like this, keep looking for opportunities
 * of keeping up your code's performance.
 *
 * 2. It is a bad practice in Javascript to chain methods that mutate
 * the underlying original array. An example of that is the `splice()`
 * method.
 *
 * You should not chain a method like `splic()` or `reverse()`. You can
 * do it if you wanted to and for a small application like this, it is
 * not a big deal, however, in a large scale application, it is usually
 * always a good practice to avoid mutating arrays.
 *
 * We will comeback to this, when we talk more about functional
 * programming.
 */

/***********************************************************************/
/*************************** THE FIND METHOD ***************************/
/***********************************************************************/
console.log(
  `/*************************** THE FIND METHOD ***************************/`
);

/**
 * After the very important map(), filter(), and reduce() methods, we
 * still have some more methods to learn which are also super important
 * and are used all the time.
 *
 * In this lesson, we are going to talk about the find() method.
 *
 * As the name suggests, we can use the find() method to retrieve one
 * element of an array based on a condition.
 *
 * Just like all the other array methods that we have been talking about,
 * the find() method also accepts a callback function which will then
 * be called as the method loops over the array.
 *
 * So, find() is just another method that loops over the array but then,
 * it does something different.
 *
 * In our case, what the find() method does is to retrieve an element
 * of the array.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let firstWithdrawal = movements.find(mov => mov < 0);

/**
 * As you see, just like the filter() method, the find() method also
 * needs a callback function that returns either true or false.
 *
 * Unline the filter() method, the find() method will not return a new
 * array but, it will only return the first element in the array that
 * satisfies the condition in its callback function.
 *
 * In other words, the find() method returns the first element in the
 * array for which the condition in the callback function returns true.
 */

console.log(movements);
console.log(firstWithdrawal); // -400

/**
 * So, as you see, the find() method is a bit similar to the filter()
 * method, but there are two fundamental differences.
 *
 * 1) filter() method returns all the elements that match the condition
 * while the find() method only returns the first one.
 *
 * 2) The filter() method returns a new array while find() method only
 * returns the element itself.
 *
 * Make sure you understand this fundamental difference.
 */

/**
 * Let's now take it to the next level and start working with an array
 * of objects that is, the `accounts` array.
 *
 * Array of objects is a very common data structure in JavaScript so,
 * let's now work with it along with find() method.
 *
 * In this context, the find() method becomes very useful because we can
 * find an object in an array based on some property of that object.
 */

console.log(accounts);
let account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

/**
 * Indeed, we get the account object where the owner is "Jessica Davis".
 *
 * This really, really powerful of arrays and objects where one array
 * contains multiple objects that all have similar structure.
 */

/**
 * Usually the goal of the find() method is just to find exactly one
 * element, and therefore, we usually set up a condition where only
 * one element can satisfy that condition.
 *
 * That's why we used the `===` operator in our example above.
 *
 * So, if the owner name is unique, then the equal operator will only
 * ever match one account with that particular name.
 *
 * We will use this in the next couple of lessons to implement the login
 * feature, and also some other features.
 *
 * Just for comparison, here is how we would do it using the for-of loop.
 */

account = {};
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    account = acc;
  }
}

console.log(account);

/**********************************************************************/
/*************************** SOME AND EVERY ***************************/
/**********************************************************************/
console.log(
  `/*************************** SOME AND EVERY ***************************/`
);

// SOME
/**
 * We are getting closer to the end of this section but, there are still
 * a couple of array methods left to learn.
 *
 * In this lesson, we are going to look at the some() and the every()
 * methods. To start learning about the some() method, let's look back
 * at includes() method that we studied earlier.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.includes(-130)); // true

/**
 * So, we can use the includes() method to test if an array includes a
 * certain value.
 *
 * However, we can only really test for equality. Basically, includes()
 * returns true if any value in the array is exactly equal to -130. So,
 * this is essentially testing for equality.
 *
 * But, what if we wanted to test for a condition instead? That's where
 * the some() method comes into play.
 *
 * Let's say that we would like to know if there has been any deposits
 * on this account. In other words, we want to know if there is any
 * positive movement in this array i.e. any number above 0. How would we
 * do that?
 */

let anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // true

anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits); // false

anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits); // true

/**
 * So, as you can see, the includes() and some() methods are kind of
 * similar.
 *
 * The difference is that we can only check for equality when using
 * includes() but, we can check for any condition with some().
 */

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
console.log(movements.some(mov => mov > 0));
console.log(movements.some(mov => mov === -130)); //  this is the same as what we did with includes() method but, this is just for demonstration purposes. Needless to say, it is better to use includes() if we are just checking for equality.

/**
 * Essentially, if there is any value in the array for which the
 * condition in the callback function is true, then the some() method
 * will return true, otherwise, it will return false.
 *
 * Let's now actually use this some() method to implement our missing
 * functionality in our bankist app, which is to request a loan to the
 * bank.
 *
 * The some() method will become helpful for the loan feature because,
 * our bank has a rule, which says that it only grants a loan if there
 * is at least one deposit with at least 10% of the requested loan
 * amount.
 *
 * So, head over to the script.js file for that.
 */

// EVERY
/**
 * Let's now talk about the close cousin of some() method which is
 * every() method.
 *
 * But, as you might have already guessed the difference between them, is
 * that every() only returns true if all of the elements in the array
 * satisfy the condition that we pass in.
 *
 * In other words, if every element passes the test in our callback
 * function, only then the every() method returns true and that's why
 * the method is called "every" in the first place.
 *
 * So, let's test it out now.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.every(mov => mov > 0)); // false

let movements2 = [430, 1000, 700, 50, 90];
console.log(movements2.every(mov => mov > 0)); // true

/**
 * This proves that every() returns true if all the elements in the array
 * satisfy the condition in the callback function.
 *
 * It is quite straightforward.
 */

/**
 * Now just to finish, let's see one more cool thing.
 *
 * Up until this point, we have always written the callback function
 * directly as an argument into our array methods.
 *
 * However, we could also write them separately and then pass the
 * function as a callback.
 */

// Separate Callback
let deposit = mov => mov > 0;

/**
 * So, our deposit() function is exactly the same as the callback
 * functions that we used in some() and every() method above.
 *
 * But, as mentioned before, there is no reason for the callback
 * functions to be directly written in all of the array methods.
 *
 * We could simply write them like this:
 */

console.log(movements.some(deposit));

/**
 * Now we could re-use the same function for all kinds of different
 * methods that require callbacks with a true/false condition.
 *
 * Example:
 */

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

/**
 * As you see, we get the expected result all by re-using the same
 * function.
 *
 * Now if we wanted to change the function, we would only have to do
 * it one place - and then all the results would become different
 * according to that.
 *
 * In practice, this is something that we do sometimes because it is,
 * of course, better for the DRY principle.
 */

/**********************************************************************/
/************************** FLAT AND FLATMAP **************************/
/**********************************************************************/
console.log(
  `/************************** FLAT AND FLATMAP **************************/`
);

/**
 * The next two array methods that we are going to learn are the flat()
 * and flatMap() methods. Thankfully, these are very easy to understand.
 * So, let's go.
 *
 * Let's say that we have an array with some arrays in it; essentially,
 * a nested array.
 */

arr = [[1, 2, 3], [4, 5, 6], 7, 8];

/**
 * This array is perfectly normal but, what if we wanted to take all
 * these nested arrays and put them all together in just one big array,
 * which contains all the numbers from 1 to 8.
 *
 * That's pretty simple using the new flat() method; and we say new
 * because both flat() and flatMap() were both introduced in ES2019.
 *
 * So, they are pretty recent and they will therefore not work in super
 * old browsers.
 */

console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

/**
 * That's it for the flat() method. It doesn't need a callback function
 * and we indeed get our full array from 1 to 8.
 *
 * It removed the nested arrays and flattened the array, which is why
 * the method is called flat().
 *
 * But now, let's say we have an array which is even deeper nested.
 *
 */

let arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

/**
 * Let's see what happens when we use flat() method on `arrDeep`.
 */

console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]

/**
 * Now we see a result which still contains the two inner arrays.
 *
 * This means that the flat() method only goes one level deep, when
 * flattening the array.
 *
 * We can fortunately fix that by using the `depth` argument.
 * The default value of `depth` argument is 1.
 */

console.log(arrDeep.flat(1)); // [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

/**
 * With the `depth` value of 2, we get the result that we have been
 * wanting.
 *
 * This works because it now goes even deeper, into the second level
 * of nesting and also takes the element out of that array.
 *
 * That is how flat() works but, this example is not really that useful
 * so, let's go back to the bank accounts.
 *
 * So, let's say that the bank itself wants to calculate the overall
 * balance of all the movements of all the accounts.
 *
 * So, how would we go about solving this problem?
 *
 * First of all, we have all these movements stored in arrays, and these
 * arrays are inside the objects in the accounts array.
 */

console.log(accounts);

/**
 * The first thing to do is to take those movements out of there and
 * put them all in one array.
 */

let accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

/**
 * Now we actually have a nested structure which is an array of arrays
 * and this big array has all the movements array from all the accounts
 * stored in it.
 *
 * Now we want one big array with all the movements values, not nested.
 */

let allMovements = accountMovements.flat();
console.log(allMovements);

/**
 * Now we have a nice big array which holds all the movements from all
 * the accounts in the bank.
 *
 * Now, all we have to do is to add them all together, which is pretty
 * easy at this point.
 */

let overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

/**
 * Now we get the final result of adding up all of the values, that were
 * originally as we started, in the separate movements arrays that were
 * in turn, inside of the account objects.
 *
 * We can make this all, more beautiful by using the power of method
 * chaining.
 */

// flat
overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

/**
 * Now, as it turns out, using a map() first and then flattening the
 * result is a pretty common operation; just like have it in our example
 * above.
 *
 * So, to solve this, there is another method that was also introduced
 * at the same time, which is flatMap().
 *
 * So, `flatMap()` essentially combines a map() and a flat() method,
 * into just one method, which is better for performance.
 *
 * So, let's re-create our example above but, this time with flatMap().
 *
 * NOTE: Since flatMap() also does mapping, it needs to receive exactly
 * the same callback as a map() method.
 */

// flatMap

overalBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

/**
 * So, flatMap() is essentially a map() method the difference is that,
 * in the end, it flattens the end result.
 *
 * Note that flatMap() only goes one level deep and we cannot change it.
 *
 * So, if you do need to go deeper than just one level, you still need
 * to use the flat() method.
 *
 * So, keep these two methods in mind whenever you find yourself in a
 * situation where you have nessted array and need to work with them.
 */

/**********************************************************************/
/*************************** SORTING ARRAYS ***************************/
/**********************************************************************/
console.log(
  `/*************************** SORTING ARRAYS ***************************/`
);

/**
 * We are almost finished with this section and with our application but,
 * one feature that is still missing in our application is the ability
 * to sort our movements.
 *
 * So, in this lesson, let's talk about sorting arrays.
 *
 * Now, sorting is a much-discussed topic in computer science and there
 * are countless algorithms and methods of sorting values and we might
 * actually talk about this a little bit later in the course.
 *
 * For now though, we are simply going to use JavaScript's built-in
 * sort() method.
 *
 * Let's start with an array of strings.
 */

let owners = ['Bhoami', 'Jonas', 'Zach', 'Mary', 'Amy'];
console.log(owners.sort()); // ['Amy', 'Bhoami', 'Jonas', 'Mary', 'Zach']

/**
 * Indeed, we not get out array nicely sorted alphabetically from A to Z.
 * So, it works just as expected.
 *
 * Now this actually mutates the original array. So, let's take a look at
 * it.
 */

console.log(owners); // ['Amy', 'Bhoami', 'Jonas', 'Mary', 'Zach']

/**
 * So, we have to be very careful with this method.
 *
 * Now let's try it with an array of numbers.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

/**
 * This time the result is not really what we are expecting.
 *
 * These numbers are not at all ordered in any way.
 *
 * The reason for this is that the sort() method does the sorting based
 * on strings. So, it might sound weird but, that is just how it works
 * by default.
 *
 * Basically, what it does is to convert everything to strings and then
 * it does the sorting itself.
 *
 * And if we look at the results as if they were strings, then the result
 * actually makes sense.
 *
 * The negative values always comes first. Then we have value that starts
 * with 1, then with 4, then with 6. After that are all the positive
 * values. The first positive value starts with 1, the second with 2, the
 * third with 3, fourth with 4, and last one with 7.
 *
 * So, they are alphabetically ordered as if they were strings.
 *
 * However, they are not strings and so we have to fix it.
 * In fact, we can fix it by passing in a compare callback function
 * into the sort() method.
 *
 * This callback function is called with two arguments. Let's simply
 * call those arguments `a` and `b`.
 *
 * These two parameters are essentially the current value and the next
 * value, if we imagine the sort() method looping over the array.
 *
 * However, in order to understand how the compare callback function
 * works, let's just think of a and b as simply being two consecutive
 * numbers in the array; and it doesn't matter which ones.
 *
 * Now, in our callback function, if we return a value that is less than
 * 0 then the value a will be sorted before value b.
 *
 * And if we return a value that is greater than 0, then b will be put
 * before a.
 *
 * So, let's use that in practice to sort the movements array in
 * ascending order.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// if return < 0, A before B (keep order)
// if return > 0, B before A (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1; // the number here doesn't matter, as long as it is greater than 0.
  if (b > a) return -1;
});

console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

/**
 * Now as we see, the array is indeed sorted in an ascending order.
 *
 * This is because the sort() method basically keeps looping over the
 * array and applying the callback function until everything is an
 * ascending order according to the rules that we establish in the
 * callback function.
 *
 * If we wanted to sort our array in descending order, we would simply
 * do it the other way around.
 */

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// if return < 0, A before B (keep order)
// if return > 0, B before A (switch order)

// Descending
movements.sort((a, b) => {
  if (a < b) return 1; // the number here doesn't matter, as long as it is greater than 0.
  if (b < a) return -1;
});

console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

/**
 * Now the array is nicely sorted the other way round.
 *
 * This works beautifully and it will also work for strings.
 */

let fruits = [
  'banana',
  'apple',
  'cherry',
  'grapes',
  'custard-apple',
  'guava',
  'pineapple',
];

// fruits ascending
fruits.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(fruits); // ['apple', 'banana', 'cherry', 'custard-apple', 'grapes', 'guava', 'pineapple']

fruits = [
  'banana',
  'apple',
  'cherry',
  'grapes',
  'custard-apple',
  'guava',
  'pineapple',
];

// fruits descending
fruits.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});

console.log(fruits); // ['pineapple', 'guava', 'grapes', 'custard-apple', 'cherry', 'banana', 'apple']

/**
 * Now, if we are working with numbers, then we can actually simplify
 * it a lot by simply using some simple math.
 *
 * Let's take a look at our condition:
 *
 * We already know that if a > b, then a - b would always be something
 * positive; and if a < b then a - b would always be something negative
 * so, with this, we can improve our callback function tremendously;
 * because all we need to return is a - b.
 */

// Ascending
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

/**
 * Let's recap what we did here.
 *
 * So, we already know that if a > b then it will be a positive number and
 * so, we will return a positive number. It doesn't have to be positive 1.
 * It just has to be greater than 0.
 *
 * Now, if it is the other way around i.e. if a < b, then it will be a
 * negative number therefore, something negative will be returned. Again,
 * it does not have to negative 1. It just needs to be less than 0.
 *
 * NOTE: If the return value is 0 i.e. a is equal to b then their
 * positions remain unchanged.
 *
 * Let's do the same for descending:
 */

// Descending
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

/**
 * This is basically the most of what you need to know about sorting
 * arrays with numbers.
 *
 * If you have a mixed array, like with strings and numbers together,
 * this is not going to work and it is advisable to simple not use the
 * `sort()` method in that case. That's because, there is not really a
 * point in doing so.
 *
 * But, now that we know how the sort method works, let's go back to our
 * bankist application and implement it there.
 */
