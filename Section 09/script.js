'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/************************************************************************/
/************************* DESTRUCTURING ARRAYS *************************/
/************************************************************************/
console.log(
  `/************************* DESTRUCTURING ARRAYS *************************/`
);

/**
 * Let's start this section by learning about array destructuring.
 *
 * Destructuring is an ES6 feature and it is basically a way of unpacking
 * values from an array or an object into separate variables.
 *
 * In other words, destructuring is to break a complex data structure down
 * into a smaller data structure like a variable.
 *
 * For arrays, we use destructuring to retrieve elements from the array
 * and store them into variables in a very easy way.
 */

let arr = [2, 3, 4];

// traditional way of retrieving individual items from an array
let a = arr[0];
let b = arr[1];
let c = arr[2];

// array destructuring
let [x, y, z] = arr;

console.log(a, b, c); // 2, 3, 4
console.log(x, y, z); // 2, 3, 4

/**
 * Basically, we write the syntax [x, y, z] = arr; and then the first
 * element will become x, the second element will become y, and thir
 * element will become z.
 *
 * It looks like an array but, it is really noit. It is a destructuring
 * assignment. So, whenever JavaScript sees it on the left side of = sign,
 * it knows that it should do destructuring.
 *
 * When you do destructuring, just don't forget to actually also declare
 * the variables using const.
 *
 * Note that even though we did destructuring, which sounds kind of
 * destructive, the orginal array is not affected.
 */

console.log(arr); // [2, 3, 4]

/**
 * So, we are not destroying the array, we are just destructuring it i.e.
 * unpacking it.
 */

/**
 * When destructuring, we do not have to take all the elements out of the
 * array. When destructuring an array, it will simply follow the order of
 * the elements in the array.
 *
 * We can only take the first two like so:
 */

let [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

/**
 * Now let's say that we only wanted to take the first category and the
 * third.
 *
 * To do that, we simply leave a "hole" in the destructuring operator.
 */

let [main, , secondary] = restaurant.categories;

/**
 * Now, the second element will be skipped and the one that would be
 * assigned to secondary is the third element in the array.
 */

console.log(main, secondary); // Italian Vegetarian

/**
 * With this, we don't have to create a variable for al the elements that
 * we might not even need.
 *
 * If we need the first and third element, we can just skip the one in the
 * middle.
 *
 * This is really powerful and we use destructuring to do a lot of cool
 * things.
 *
 * For example, let's say that the owner of the restaurant now decided to
 * switch the main and the secondary category.
 */

// this is how we would do it without destructuring:
// let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// this is how we would do it with destructuring
[secondary, , main] = restaurant.categories;
console.log(main, secondary);

/**
 * Another trick with destructuring is that we can immediately destruct
 * an array and then we can immediately destruct the result into different
 * variables.
 *
 * This basically allows us to return multiple values from a function.
 *
 * So, let's try that and write a function to order food.
 *
 * So, in our restaurant object, let's add a method and call it order.
 *
 * This order method will accept two parameters, the first parameter will
 * be an index for the starter menu and the second parameter will be an
 * index for the main menu
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // order method
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.order(2, 0); // ["Garlic Bread", "Pizza"]

// We recieved an array but, we can simply destructure it like so:

let [starter, mainCourse] = restaurant.order(2, 0); // Garlic Bread Pizza
console.log(starter, mainCourse);

/**
 * This is how we basically receive two return values from a function.
 *
 * We could have done it without destructuring and still return an array
 * from the function but, this is a very handy way of then immediately
 * creating two varaibles out of one function call.
 */

/**
 * Now that we understand how destructuring works, let's take it one step
 * further.
 *
 * What happens if we have a nested array?
 */

// nested destructuring
let nested = [2, 4, [5, 6]];

let [i, , j] = nested; // 2, [5, 6]

/**
 * What if we wanted all the individual values?
 *
 * Then we would essentially have to do destructuring inside of
 * destructuring.
 *
 * It sounds complicated but, it is not.
 */

let [l, , [m, n]] = nested;
console.log(l, m, n); // 2, 5, 6

/**
 * We can also set default values for the variables when are extracting
 * them.
 *
 * This is going to be very useful in the case that we don't know the
 * length of the array, and this can sometimes happen in real-world
 * applications, as you will see later.
 *
 * So, if we have an array that is shorter than we might think, then we
 * might try to unpack the array in positions that don't even exist.
 *
 */

// default values

/**
 * Let's pretend that we don't know the array
 */

let [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined

/**
 * This is basically the same as trying to read an element at position 2
 * of the array [8, 9] but, it only has elements in position 0 and 1.
 *
 * Therefore, we get undefined.
 *
 * To remedy that, we can assign default values. So, let's simply set them
 * all to 1.
 */

[p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

/**
 * This can sometimes be useful when we get data from an API.
 *
 * So, we are going to use this and everything that we learned in this
 * lesson, a bit later in the course.
 */
