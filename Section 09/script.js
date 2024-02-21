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

/***********************************************************************/
/************************ DESTRUCTURING OBJECTS ************************/
/***********************************************************************/
console.log(
  `/************************ DESTRUCTURING OBJECTS ************************/`
);

/**
 * We talked about destructuring arrays, but we can also destructure
 * objects.
 *
 * So, let's do that now.
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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

/**
 * To destructure object, we use the curly braces, because that is also
 * how we create objects.
 *
 * Then all we have to do is to provide the variable names that exactly
 * match the property names that we want to retrieve from the object.
 *
 * NOTE:
 * Since in an object, the order of elements does not matter, we don't
 * need to manually skip elements like we did in an array.
 *
 * NOTE:
 * When destructuring, the order of the elements do not matter, either.
 */

let { name, openingHours, categories } = restaurant;

/**
 * This is exactly the same as with arrays but, here we have to use the
 * curly braces and specify the exact name of the properties.
 *
 * But just like with arrays, object destructuring creates brand new
 * variables based on the object that they are set equal to.
 */

console.log(name, openingHours, categories);

/**
 * That's the fundamentals of destructuring objects.
 *
 * This is an extremely useful addition ot the language.
 * Especially when we deal with the result of an API call, which
 * basically means to get data from another web application, like weather
 * data or data about movies or something like that.
 *
 * This data usually comes in the form of objects. So, then destructuring
 * is really a lifesaver. It allows us to write a lot less code.
 *
 * So, this is really used in modern applications.
 *
 * But now, what if we wanted the variable names to be different from
 * property names?
 *
 * Of course we still need to reference the property names like we did
 * before, otherwise JavaScript has no way of knowing what we actually
 * want.
 *
 * To use a different variable name, we first specify the property name
 * followed by a colon and then the name that we want to use. Example:
 */

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

/**
 * So the variables that we now created are called `restaurantName`,
 * `hours`, and `tags`
 */

console.log(restaurantName, hours, tags);

/**
 * This is going to immensely helpful when dealing with third-party data.
 *
 * Another useful feature for object destructuring is setting default
 * values when destructuring for the case that we are trying to read a
 * property that does not exist on the obejct.
 *
 * NOTE: We get undefined when we try to access properties in an object
 * that do not exist.
 */

// default values
let { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

/**
 * Mutating variables while destructuring objects:
 */

a = 111;
b = 999;

let obj = { a: 23, b: 7, c: 14 };

/**
 * Here we are getting a syntax error and the reason for that is that
 * when we start a line with a curly brace, like the one below, JS expects
 * a code block.
 *
 * And since we cannot assign anything to a code block, like we did below,
 * we get the eeor: "Unexpected token".
 */

// {a,b} = obj;

/**
 * To solive this, the trick is to wrap all of it into a set of
 * parentheses.
 */

({ a, b } = obj);

/**
 * Now if we log a and b, it will work
 */
console.log(a, b); // 23 7

/**
 * So, we did override a = 111 and b = 999 but, in order to do that, we
 * had to wrap the destructuring assignment into parentheses.
 */

// Nested Objects
/**
 * Now that we know how object destructuring owrks, we need to talk about
 * nested objects.
 *
 * Let's say that we wanted to create two variables, open and close.
 * These should contain the open and close hours for Friday.
 *
 * `openingHours` is an object and inside that object, we have another
 * object called `fri`.
 */

// NOTE: We have already destructured and stored openingHours in its variable so, we are just going to use that.
const {
  fri: { open: op, close: clo },
} = openingHours;

console.log(op, clo);

/**
 * Now to finish, we will see a really cool application of this
 * destructuring.
 *
 * In our restaurant object, we will create another method.
 *
 * Many times in JS, we have functions with a lot of parameters.
 * But then it can be hard to know the order of parameters for someone
 * that is using the function.
 *
 * So, instead of defining the parameters manually, we can just pass an
 * object into the function as an argument, and the function will then
 * immediately destructure that object.
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  // new function
  // we can destructure the parameters right away
  // since we did destructuring in the paretheses, we have 4 variable names
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

// Here we just called our new function and passed in an object of options
// this is pretty standard in JS, especially in third party libraries
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30.

/**
 * It is important to realize that we passed in one object into the
 * function. We did not pass four arguments.
 *
 * Then, inside the function, as we receive that object, we do immediate
 * destructuring.
 *
 * That's why the names in the object destructuring have to be the exact
 * same as the ones that are passed in.
 *
 * But what's great about this is that we don't have to match the order
 * of the properties being passed in to the order in which they are being
 * destructured in the parentheses.
 *
 * This makes it really easy for the user of the function to specify
 * all the arguments.
 *
 * So, this is great but, we can even use some more knowledge that we
 * gained here, which is the default valies.
 *
 * So, we can now use it to basically set default values on some of them.
 * (Look at the oderDelivery function for the example).
 */

// In this object that we passed, we do not have any property for time
// So then, as the JS does destructuring, it took the default value of
// 20:00
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
}); // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00.

/**
 * So, if you ever need to a write a function, like the one in our
 * example i.e. a complex one with a lot of parameters that might be
 * hard to specify, keep this technique in mind.
 *
 * This becomes even more useful as the amount of parameters increases.
 */

/***********************************************************************/
/********************** THE SPREAD OPERATOR (...) **********************/
/***********************************************************************/
console.log(
  `/********************** THE SPREAD OPERATOR (...) **********************/`
);

/**
 * Let's now talk about the amazing spread operator.
 *
 * We can use the spread operator to basically expand an array into all
 * its elements.
 *
 * Basically, unpacking all the array elements at once.
 *
 * Let's say that we have an array and we want to create a new array based
 * on this array but, with some new elements at the beginning.
 *
 * So how would we do that?
 *
 * With what we already know, we would need to loop over our existing
 * array or even worse, do it manually.
 */

arr = [7, 8, 9];

// traditionally
let tranditionalNewArry = [1, 2, arr[0], arr[1], arr[2]];
console.log(tranditionalNewArry);

/**
 * Now, starting from ES6, we can achieve the same result in a much
 * better way using the spread operator.
 *
 * With the spread operator, it is going to work like this:
 */

let newArray = [1, 2, ...arr];
console.log(newArray);

/**
 * What the spread operator does is to basically take all the values out
 * of `arr` and then write them individually as if we wrote them manually,
 * like we did in the traditional way.
 *
 * If we wrote it without `...` then we would have the `arr` array nested
 * inside the new array.
 *
 * This is because, we are including the entire array.
 */

let nestedNewArray = [1, 2, arr];

/**
 * But with the spread operator, it is like taking all the elements out
 * of the array and writing them manually.
 *
 * This means that we can use spread opertors whenever we would otherwise
 * write multiple values separated by commas.
 *
 * That situation happens whenever we write an array literal like we did
 * above.
 *
 * So, that's the first situation in which it is very useful to expand an
 * array.
 *
 * The second situation is when we pass arguments into functions.
 *
 * For example, let's say that we wanted to actually log the individual
 * elements of the newArray.
 */

/**
 * If we logged the array, like we did below, then it is of course,
 * going to look like just one value which is an array
 */
console.log(newArray); // [1, 2, 7, 8, 9]

/**
 * But, if we use the spread operator to expand the new array, then see
 * what happens then:
 */

console.log(...newArray); // 1 2 7 8 9

/**
 * Now it logged the individual elements of the array.
 *
 * So, this would be the same as writing 1, 2, 7, and 9 individually.
 *
 * So, once again, whenever we need the elements of an array individually,
 * we can use the spread operator.
 *
 * That is useful when we write an array and when we need to pass
 * multiple elements into a function like we did in the console.log()
 * function above.
 */

/**
 * Let's see a bit more useful example.
 *
 * In this example, we will create an array with one more food item
 * in the mainMenu array of the restaurant object.
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

/**
 * So, basically, we want to create a new menu here.
 *
 * Let's say that we want the original array plus one new element.
 *
 * We can do that by simply expanding the array and then add more items,
 * spearated by comma.
 */

let newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

/**
 * Keep in mind, here we are indeed creating a completely new array.
 *
 * We are not manipulating the restaurant.mainMenu array. You can see that
 * by the square brackets.
 *
 * The square brackets synctax is simply the way in which we have always
 * been writing new arrays.
 */

/**
 * Now you might have noticed that the spread operator is actually a bit
 * similar to destructuring, because it also helps us to get elements
 * out of arrays.
 *
 * The big difference is that the spread operator takes all the elements
 * from the array and it also doesn't create new variables.
 *
 * As a consequence, we can only use it in places where we would otherwise
 * write values separated by commas.
 */

/**
 * Next, let's learn about two important use cases of the spread operator,
 * which is to create shallow copies of arrays and to merge two arrays
 * together.
 */

// Copy Array

/**
 * Let's simply create a copy of the main menu.
 */

let mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

/**
 * That's it. Here we created a shallow copy of the mainMenu array in the
 * restaurant object.
 *
 * It is a little bit similar to `Object.assign()` that we used in the
 * previous section.
 *
 * But here, the spread operator syntax is a lot easier to use.
 *
 * Now, to join two arrays together (two arrays or more), we can use the
 * same technique.
 */

// Join two or more arrays
menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

/**
 * Here, with the spread operator, we took all the elements out from
 * the main menu and wrote them in the new array and we did the same
 * thing with the starter menu.
 */

/**
 * We learned previously that the spread operator works on arrays but,
 * that is not entirely true.
 *
 * The spread operator works on all so-called interables.
 *
 * What is an iterable?
 *
 * There are different iterables in JavaScript and we wil talk all about
 * them by the end of the course, but for now, just know that iterables
 * are things like arrays, strings, maps, or strings but, not objects.
 *
 * Basically, most of the built-in data structures in JavaScript are
 * now iterables, except objects.
 *
 * Anyway, since strings are also iterables, that means that we can use
 * the spread operator on a string as well.
 *
 * Let's see an example of that:
 */

let str = 'Bhoami';

let letters = [...str, ' ', 'K'];
console.log(letters); // ['B', 'h', 'o', 'a', 'm', 'i', ' ', 'K']

/**
 * Here we get an array where each letter of the original string is now
 * an individual element.
 *
 * So, just like we expanded/unpacked an array, we now did the same
 * thing with a string.
 *
 * Keep in mind that we can still only use the spread operator when building an array, or when we pass values into a function.
 *
 * We cannot use the spread operator in template literals, as it is not
 * a place that expects multiple values separated by comma.
 */

console.log(...str); // B h o a m i
console.log('B', 'h', 'o', 'a', 'm', 'i'); // B h o a m i

// console.log(`${..str}`); // Unexpected Token Error

/**
 * So, multiple values separated by a comma are usually only expected when
 * we pass arguments into a functiom, or when we build a new array.
 *
 * So, take a note of that because that is important to understand about
 * the spread operator.
 *
 * Let's now write our own function that accepts multiple arguments and
 * then use the spread operator to actually pass those arguments.
 * So, this will be a real-life example.
 *
 * We will add this function as a method in our restaurant object.
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  // new method
  /**
   * Let's say that we want a method to order just pasta; and the pasta
   * always needs to have exactly three ingredients.
   */
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

/**
 * Here we are simply building an array of three ingredients that are
 * going to be entered by the user.
 */

// let ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

let ingredients = ['Cheese', 'Bell Peppers', 'Onions'];

console.log(ingredients);

// Here is how we would have called the orderPasta function traditionally:
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// With the spread operator, we can call it like so:
restaurant.orderPasta(...ingredients);

/**
 * The better solution is to use spread operator amongst the two, above.
 * Especially, considering that an array could be a lot longer than just
 * 3 elements.
 *
 * So, indeed, always go with the spread operator in such situations. It
 * is an amazing addition to the language.
 */

/**
 * Now, just to finish this lesson, since ES2018, the spread operator
 * actually also works on objects, even though objects are not iterables.
 *
 * To see it in action, let's create a new restaurant object with all the
 * data from the original restaurant object, plus some additional data.
 */

// NOTE: The order does not matter
let newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

/**
 * Since we were able to do shallow copies of arrays, using the spread
 * operator, we can do the same with objects.
 *
 * So, instead of using `Object.assign()`, we can use the spread operator
 * for that
 */

let restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';

// this tells us that we did indeed make a copy of the object restaurant
console.log(restaurant.name); // Classico Italiano
console.log(restaurantCopy.name); // Ristorante Roma

/***********************************************************************/
/********************* REST PATTERN AND PARAMETERS *********************/
/***********************************************************************/
console.log(
  `/********************* REST PATTERN AND PARAMETERS *********************/`
);

/**
 * Moving on, let's now talk about the rest pattern and rest parameters.
 *
 * The rest pattern looks exactly like the spread operator i.e. it has the
 * same syntax of the three dots but, it actually does the opposite of the
 * spread operator.
 *
 * Remember that we use the spread operator to build new arrays or to
 * pass multiple values into a function. Those are the two use cases of
 * the spread operator and in both cases, we use the spread operator to
 * expand an array into individual elements.
 *
 * Now, the rest pattern uses the exact same syntax, however, to collect
 * multiple elements and condense them into an array.
 *
 * So, that's really the opposite of spread.
 *
 * The spread operator is to unpack an array while the rest is to pack
 * elements into an array and since that sounds really confusing, let's
 * write some code and let's start by exploring the use case of building
 * arrays.
 */

// recap of spread operator
// Spread Operator because on the RHS of =
arr = [1, 2, ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

/**
 * In the example above, we are still using the spread operator; and we
 * know that we are using the spread operator because we are using it on
 * the right hand side (RHS) of the assignment operator i.e. the equal
 * sign.
 *
 * However, we can also use it on the left hand side (LHS) of the
 * assignment operator, together with destructuring.
 */

let nums = [1, 2, 3, 4, 5];
// Rest Syntax because on the LHS of the operator
let [s, t, ...others] = nums;

/**
 * Here we are taking the first element of the nums array and setting it
 * equal to 's', then we setting 't' equal to the second element of nums,
 * finally, we are just grabbing all of the remaining elements in the
 * nums array, putting them in an array and setting it equal to 'others'.
 *
 * So, the rest pattern basically collects the elements that are unused
 * in the destructuring assignment.
 */

console.log(s); // 1
console.log(t); // 2
console.log(others); // [3, 4, 5]

/**
 * So, here we used the rest syntax because it is on the LHS of the
 * assignment operator.
 */

/**
 * Let's see another example here. This example will show you that
 * we can use the three dots on both sides of the assignment operator.
 *
 * Let's say that we have an array which will be the entire menu; and we
 * know how to build that using the spread operator.
 */

// 1) Destructuring with Rest Pattern

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

/**
 * So here, on the LHS, we are first using the spread operator to combine
 * the mainMenu and the starterMenu to create one big array which
 * contains the entire menu.
 *
 * Then, on the RHS, we are picking out pizza, skipping the second item,
 * then picking the risotto, and the collecting all of the remaining
 * items on the entire menu - putting them in an array and assigning
 * them to a variable called otherFood, using the rest syntax.
 *
 * NOTE: The rest syntax collects all the array after the last variable.
 * So, in our case, the last variable is risotto. It does not include any
 * skipped elements. So, it really just is the rest of the elements. For
 * that reason, the rest pattern always must be the last in the
 * destructuring assignment because, otherwise, how will JavaScript know
 * until when it should collect the rest of the array?
 *
 * If the rest pattern is not the last one in the destructuring
 * assignment, it will throw an error:
 */

// let exampleArr = [1, 2, 3, 4, 5, 6];
// let [u, v, ...rest, w] = exampleArr; // SyntaxError: Rest element must be last element

/**
 * Also, for the same reason, there can only ever be one rest pattern in
 * any destructuring assignment.
 */

/**
 * Now let's use rest pattern in objects because, it also works indeed
 * in objects.
 *
 * The difference then of course, is that the remaining elements will
 * be collected into a new object and not into a new array.
 *
 * Let's work with with the opening hours and let's say that we want to
 * select only saturday and the rest should go into a new object, which
 * are the weekdays.
 */

let { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays); // {thu: {…}, fri: {…}}

/**
 * Now we know how the rest pattern works to collect elements in a
 * destructuring assignment.
 */

// 2) Functions with Rest Pattern

/**
 * Remember that for the spread operator, the second use case was to
 * pass multiple arguments into a function all at the same time.
 *
 * Now, as you can guess, the Rest Operator can basically do the
 * opposite.
 *
 * So, let's write an example function for that.
 *
 * In a real-world adding function, we want to take an arbitrary amount
 * of arguments and simply add all of them together.
 *
 * We will pass an arbitrary amount of parameters into an add function
 * but, we won't specify that number in the function parentheses so,
 * how will we be able achieve our goal?
 *
 * We will use the rest pattern, and in this case, it is actually called
 * rest parameters.
 *
 * So, in the function parentheses, we will use the rest pattern.
 * We will log that in the console, and once we do that, we will see that
 * we get an array of all the parameters passed into the function.
 *
 * Again, the rest syntax takes multiple values and packs them all into
 * one array. So, it does the opposite of the spread operator.
 *
 * With the spread operator we expand, and with the rest pattern we
 * compress. In case of function parameters, it is called rest parameters
 * or rest arguments.
 */

let add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 4, 2, 1, 4);

/**
 * At this point, we have a working add function which can accept any
 * number of parameters.
 *
 * Now let's take it to the next level. Let's create yet another array
 * and call it x.
 */

x = [23, 5, 7];

/**
 * Mpw if we wanted to take these values (in the array x) and call
 * the add function, how would we do that?
 *
 * We simply use the spread operator. That's it.
 */

add(...x);

/**
 * This is exactly what we learned in the previous lesson.
 *
 * We are taking all the numbers of the array and spreading them in
 * paretheses when invoking the add function.
 *
 * So, this is a good example of showing hwo spread is the opposite of
 * rest because, after these numbers are being spread when invoking
 * the function, inside the function, they are being collected into the
 * numbers array by the rest parameter.
 *
 * You might be wondering why we are not simply writing an add function
 * which takes an array as an argumetn adn then we don't need to use
 * rest and spread operators.
 *
 * Well, it is way better to do it the way we did because then the
 * function can accept both an array (by using the spread operator) as
 * well as all the single values.
 *
 * Also, it feels a little bit more natural to simply pass as many
 * arguments as we want to add together into the function. So, without
 * having to deal with arrays if we don't want to.
 *
 * So, the rest parameters is something that you will see all the time
 * in modern JavaScript code basis.
 */

/**
 * Now to finish, let's use rest parameters in our restaurant example
 * to see some edge cases.
 *
 * So, let's add yet another method to our restaurant object and this
 * time it is going to be about ordering pizza.
 *
 * Pizzas need to have atleast one ingredient but, the other ingredients
 * are optional. So, rest parameters are perfect for this.
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  // new method
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here is your pizza with ${mainIngredient}, ${otherIngredients}`
    );
  },
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

/**
 * The take away from this example is that the rest parameters  server
 * to collect all of the remaining (basically unused) parameters.
 */

/**
 * RECAP:
 *
 * The spread and the rest syntax, both look exactly the same but, they
 * work in opposite ways depending on where they are used.
 *
 * The spread operator is used where we would otherwise write values,
 * spearated by a comma.
 *
 * On the other hand, the rest pattern is basically used where we would
 * otherwise write variable names separated by commas.
 *
 * It is a subtle distiction but, this is how you know when and where
 * to use spread and rest.
 */

/**********************************************************************/
/******************** SHORT CIRCUITING (&& AND ||) ********************/
/**********************************************************************/
console.log(
  `/******************** SHORT CIRCUITING (&& AND ||) ********************/`
);

/**
 * Let's go back to the two logical operators that we've already used
 * before, but we didn't use their full potential yet.
 *
 * We are taling about the AND operator and the OR operator, and how
 * we can use them for something called short circuiting.
 *
 * Up until this point, we have used logical operators only to combine
 * Boolean values.
 *
 * But the truth is that we can do a lot more with the AND and OR
 * operators.
 *
 * Let's start with the OR operator.
 */
///// OR OPERATOR /////
console.log(3 || 'Bhoami'); // 3

/**
 * This is something that we didn't do before, which is to use, basically
 * the non-boolean values as the operands for the logical operators.
 *
 * The result of the above operation is 3.
 *
 * This means that the result of the OR operator doesn't always have to
 * be a boolean.
 *
 * This is something that we didn't learn before.
 *
 * So, there are three properties of the logical operators that we didn't
 * learn them before.
 *
 * 1) They can use any data type
 * 2) They can return any data type
 * 3) They do something called short-circuiting a.k.a. short circuit evaluation
 *
 * In the above example, we used two non-boolean values and it returned
 * a non-boolean value as well.
 *
 * Now about the short-circuiting:
 *
 * In the case of OR operator, short circuiting means that if the first
 * value is a truthy value, it will immediately return that first value.
 *
 * That's exactly what we saw in the above example, where we got 3,
 * which is a truthy value.
 *
 * Again, if the first operand is truthy in the OR operator, then the
 * other operand will not even be evaluated.
 *
 * So, JavaScript will not even take a look at it.
 *
 * That's what we mean by short-circuiting.
 *
 * Let's see another example:
 */

/**
 * The result of the operation below is Bhoami. That is because the
 * first operand is an empty string which is a falsy value.
 *
 * So, the second operand will be evaluated which is Bhoami and it will
 * then be returned.
 *
 * Here we see again that the result of the OR operator doesn't have to
 * be boolean. It will simply be the truthy value.
 */
console.log('' || 'Bhoami'); // Bhoami

/**
 * Next up, we have true or 0.
 *
 * The first value is truthy, in fact, it is literally true.
 *
 * Therefore, that will simply be the result of the operator.
 */
console.log(true || 0); // true

/**
 * Here we have undefined or null.
 *
 * As we already know, undefined is a falsy value, and so we then go
 * to the second operand - so, there is no short-circuiting, and so
 * that is then the one that is going to be returned.
 *
 * So, we get null; and that happens even though null is a falsy value.
 */
console.log(undefined || null); // null

/**
 * Let's now generalize this to more operators.
 *
 * So, we can get the general rule of how this operator works, no matter
 * with how many values.
 */

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

/**
 * The result of the above operation is "Hello".
 *
 * That's essentially because 'Hello' is the first truthy value in the
 * chain of OR operations.
 *
 * First it will go to 'undefined' which is falsy so, it will move on
 * to 0, which is again falsy, then to the empty string and finally to
 * "Hello", which is truthy. So, here the operation will short-circuit
 * the evaluation and "Hello" will be returned.
 *
 * If we think about it, it makes sense because in OR operation, the
 * result is true, if at least one operand is true.
 *
 * So, if the first operand is already true, then JavaScript doesn't
 * even have to look at the other values because the result of the
 * operation will already be true anyway.
 *
 * So, it will short-circuit and then simply return that first result.
 */

/**
 * Now let's see a more practical application of this.
 *
 * Let's say that there might be a property on the restaurant object with
 * the number of guests but, we don't know if it exists. However, we
 * want to basically define a variable based on this number of guests.
 *
 * And we want to set a default value if it doesn't exits.
 */

restaurant.numGuests = 23;

let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

/**
 * Instead of doing this, we can take advantage of short circuiting and
 * the OR operator.
 */

let guests2 = restaurant.numGuests || 10;
console.log(guests2);

/**
 * So, this is a way easier method of setting default value than having
 * to deal with the ternary operator or even worse, an if-statement.
 *
 * So, that is short-circuiting with the OR operator.
 *
 * NOTE: Both of the above solutions won't work when the number of guests
 * is 0. This is because 0 is a falsy value so, it will default to the
 * value of 10 but, a restaurant can have 0 number of guests. It is a
 * perfectly valid number. So, if it is 0, we do not want it to default
 * to 10. We will explore a great solution to this problem in the next
 * lesson.
 */

/**
 * Now, let's talk about the AND Operator.
 *
 * We can do the same thing with the AND operator. Also, the AND operator
 * also has short-circuiting.
 *
 * So, let's take a look at that.
 */

///// AND OPERATOR /////

/**
 * When it comes to short circuit evaluation, the AND operator works in
 * the exact opposite way of the OR operator.
 */

console.log(0 && 'Bhoami'); // 0

/**
 * The result of above operation is 0.
 *
 * This means that the AND operator short circuits when the first value
 * is falsy, and then immediately returns that falsy value without even
 * evaluating the second operand.
 *
 * That is the exact opposite of the OR Operator which short circuits
 * when the first operator is true.
 */

console.log(7 && 'Bhoami'); // Bhoami

/**
 * In this case, we get "Bhoami"
 *
 * So, when it is truthy, it means that the evaluation continues and
 * then simply the last value is returned.
 *
 * Once again, this makes sense if we think about it.
 *
 * So, the AND operator is only true if all the operands are true.
 *
 * So, if the first operand is false, then it means that the entire
 * result of the AND operation will already be false anyway.
 *
 * So, there is no need to even look at any of the other operands.
 */

console.log('Hello' && 23 && null && 'Bhoami'); // null

/**
 * The result this time is `null`.
 *
 * The string "Hello" is truthy so, the evaluation continues, then we
 * have the number 23 which is also truthy, and then we reach at `null`,
 * which is falsy. So, now the evaluation will short-circuit since the
 * result will be false anyway and it will return `null`.
 *
 * Now, let's see another practical example.
 */

// we want to use the orderPizza() function only if it exists
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

/**
 * Many times we can use the AND operator to actually avoid an
 * if-statement like the one above, where all we want to do is to check
 * if a certain property or value exists.
 *
 * So, in this case, what we're doing is to basically pretend that we
 * don't know if orderPizza() exists. So, we first check if it exists
 * and only then we execute it.
 *
 * Now, with the knowledge gained about the AND operator, we can do the
 * same thing in a much simpler way.
 */

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/**
 * So, in the first operand, if `restaurant.orderPizza` is undefined,
 * the evaluation will shortcircuit and nothing else will happen.
 *
 * But if it is true, it will evaluate the second operand and return that
 * value - this is where we are actually calling the function.
 *
 * So, this gives us, essentially the same result that the if block
 * gives us.
 *
 * Now this does not suggest that you should replace all of your if
 * statements with AND and OR operators. Please don't do that because
 * that will make your code very hard to read in the future.
 */

/**
 * Summary:
 *
 * The OR operator will return the first truthy value of all the operands
 * or simply the last value if all of them are false.
 *
 * On the other hand, the AND operator will return the first falsy value
 * or the last value if all of them are truthy.
 *
 * As for practical applications, we can use the OR operator to set
 * default values, and we can use the AND operator to execute code in
 * the second operand if the first one is true.
 */

/**********************************************************************/
/**************** THE NULLISH COALESCING OPERATOR (??) ****************/
/**********************************************************************/
console.log(
  `/**************** THE NULLISH COALESCING OPERATOR (??) ****************/`
);

/**
 * Let's now learn about the new operator with the funny name of nullish
 * coalescing operator.
 *
 * In the last lesson, we use the OR operator to set a default value
 * in case that the first value was a falsy value.
 */

restaurant.numGuests = 0;

let guests3 = restaurant.numGuests || 10;
console.log(guests3);

/**
 * So, here when we set numGuests to 0, then JavaScript will still take
 * the default value of 10 and assign it to guests3 because 0 is a falsy
 * value now, and therefore, we go to the second operand.
 *
 * However, fortunately for us, there is a very good solution to this,
 * and that's the new operator with the very weird name of nullish
 * coalescing operator.
 *
 * It is an operator that was introduced in ES2020, and it works like
 * this:
 */

let guestCorrect = restaurant.numGuests ?? 10;

/**
 * It works almost the same way as the OR operator, really almost the
 * same, but it will fix our error.
 */

console.log(guestCorrect); // 0

/**
 * Indeed, we get a 0 now. Only when the `restaurant.numGuests` return
 * undefined will it get the default value of 10.
 *
 * Why does this work?
 *
 * Well it works because the nullish coalescing operator works with the
 * idea or with the concept of nullish values instead of falsy values.
 *
 * Nullish values are `null` and `undefined`, that's it. It does not
 * include 0 or an empty string.
 *
 * So basically, for the nullish coalescing operator, it is as if the
 * 0 and the empty string were not falsy values. For the nullish
 * coalescing operator, 0 and empty string are truthy values.
 *
 * But again, this operator does work with the principle of nullish
 * values. So, all the nullish values will short circuit the evaluation
 * when using `??`.
 *
 * So, only if the first operand was null or undefined, will the second
 * operand be executed and returned.
 */

/**********************************************************************/
/******************** LOGICAL ASSIGNEMNT OPERATORS ********************/
/**********************************************************************/
console.log(
  `/******************** LOGICAL ASSIGNEMNT OPERATORS ********************/`
);

/**
 * Now, even more modern than the nullish coalescing operator that we
 * just learned are three new so-called logical assignment operators
 * that were introduced in ES 2021.
 *
 * So, let's see how they work.
 *
 * In order to do that in an effective way, let's quickly start by
 * creating two new restaurant object.
 */

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

/**
 * The first thing that we want to do now is to set a default number of
 * guests for all the restaurant objects that do not have that property.
 *
 * Let's start by using the OR operator to do this.
 */

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

/**
 * Let's remind ourselves that this works because of short-circuiting.
 *
 * In the OR operator, if the first value is truthy, then that first
 * value will immediately be returned and the second value will not even
 * be evaluated.
 *
 * So, by doing the the above operation, we are returning the number of
 * guests if it does exist, otherwise we will return 10.
 */

console.log(rest1); // {name: 'Capri', numGuests: 20}
console.log(rest2); // {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

/**
 * The rest2 did not have a number of guests so now the numGuests is 10.
 * Again, that is because of short-circuiting.
 *
 * So, nothing new up until this point.
 *
 * But now, let's introduce ourselves to the very first logical
 * assignment operator, which is the OR assignment operator.
 *
 * With that operator, we will be able to write the same thing but, in a
 * more concise way.
 */

///// OR ASSIGNMENT OPERATOR /////

// this is the same as `rest1.numGuests = rest1.numGuests || 10`
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);

/**
 * Basically, the OR assignment operator assigns a value to a variable
 * if that variable is currently falsy.
 *
 * So, exactly like a regular OR operator.
 *
 * That works beautifully, except in one situation that we already
 * encountered in the previous lesson - where the numGuests value is 0.
 *
 * The OR assignment operator will assign a value to a variable if that
 * variable is falsy and 0 is a falsy value. But 0 number of guests is
 * a perfectly valid number. So, although the code is working as
 * expected, it is still an error. However, we fortunately have a
 * solution for it.
 *
 * The solution is Logical Nullish Assignment Operator, and it works like
 * this:
 */

///// NULLISH ASSIGNMENT OPERATOR /////
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);

/**
 * Now we get 0 if the existing value is 0. So, that is exactly the
 * result we want.
 *
 * Just remember that nullish basically means `null` or `undefined`.
 *
 * In a nutshell, the nullish assignment operator will assign a value to
 * a variable if that exact variable is currently nullish.
 */

/**
 * We also have the Logical AND Assignment operator.
 *
 * To learn about that one, let's say that we want to anonymize the names
 * of the restaurant owners.
 *
 * So, when there currently is an owner, we want to basically replace it
 * with the string "anonymous".
 *
 * With the tools that we already know, this is how we will do it:
 */

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest2);

/**
 * This works because of short circuiting.
 *
 * In the particular case of the AND operator, it short circuits when the
 * first value is falsy, and then immediately returns that falsy value.
 */

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// console.log(rest1); // {name: 'Capri', numGuests: 0, owner: undefined}

/**
 * Right now, if you check `rest1`, you will see that is being set to
 * undefined. This is because `rest1.owner` does not exist, which is
 * why it is undefines.
 *
 * Since the AND operator short circuits when the first value is falsy,
 * then that is the value that is immediately returned.
 *
 * Here is how the logical AND assignment operator works:
 */

///// AND ASSIGNMENT OPERATOR /////
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); // {name: 'Capri', numGuests: 0}
console.log(rest2);

/**
 * In the case of rest2, the owner has been replaced by <ANONYMOUS>.
 *
 * In the case of rest1, we have an even better result than the regular
 * AND operator because with the regular AND operator, we actually got
 * the rest1.owner set to undefined. But with the logical AND assignment
 * operator, the rest1.owner simply doesn't exist in rest1 object.
 *
 * This is better because we don't want our object property to be set to
 * undefined.
 *
 * So basically, what the logical AND assignment operator does is to
 * assign a value to a variable if it is currently truthy.
 *
 * So, clearly in rest1 object, the owner property didn't exist so,
 * nothing happened. The object stayed exactly the same.
 *
 * In the rest2 object, the owner property was truthy so, it replaced it
 * with another string.
 *
 * So, if you ever need to assign a value to a variable that is already
 * defined i.e. a variable that has a value which at the time is truthy,
 * then you can use the logical assignment operator.
 */

/***********************************************************************/
/******************* LOOPING ARRAYS: THE FOR-OF LOOP *******************/
/***********************************************************************/
console.log(
  `/******************* LOOPING ARRAYS: THE FOR-OF LOOP *******************/`
);
/**
 * Let's now talk about a new way of looping over arrays, which was
 * introduced in ES6 and that's the for-of loop.
 *
 * Let's say we wanted to loop over our entire menu.
 *
 * So, let's start by creating the entire menu again.
 */

menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

/**
 * We already know how to loop over an array with a regular for-loop.
 * We would have to set up a counter, a condition, and also update the
 * counter; and that is a lot of work.
 *
 * That's why we have the for-of loop now, in which we don't need any of
 * that. It is so much simpler.
 *
 * Here is how it works:
 *
 * We still write `for` and then we create a variable inside a set of
 * parentheses, followed by the keyword `of` and then the iterable name.
 */

for (const item of menu) console.log(item);

/**
 * If we now check our console, we will find all our items in the menu
 * array, individually logged to the console.
 *
 * So the for-of loop will automatically loop over the entire array and
 * in each iteration, it will give us access to the current array
 * element, which we can specify within its parentheses. In our case,
 * we called it "item" but, of course we can call it whatever we want.
 *
 * NOTE: Just like in the if/else statement, we don't need to create a
 * code block if we only have one line to execute.
 *
 * So, it is pretty simple, but it is a really nice level of abstraction
 * over the regular for-loop.
 *
 * We can do the same thing with for-of loop, that we do with the
 * regular for-loop but, without worrying about the underlying details
 * such as counters and conditions.
 *
 * What's also great about the for-of loop, is that we can still use the
 * `continue` and `break` keywords. This is important because in the
 * next section, we will learn other ways of looping arrays and in those
 * onese, you will not be able to continue or to break. So, you will
 * need to keep that in mind.
 *
 * But now, what if we also wanted the current index and not just the
 * current element?
 *
 * Well, in the for-of loop, it is actually a bit of a pain when we need
 * that index, because originally the for-of loop was really just meant
 * to give you the current element.
 *
 * However, you can get both and you will have to do it like this:
 */

// Instead of just menu, you will have to call the entries() array on it
for (const item of menu.entries()) {
  console.log(item);
}

/**
 * If you check the console right now, you will see that each item is now
 * an array with the index in the array element itself.
 *
 * So, let's quickly take a look at what this mysterious menu.entries()
 * is.
 */

console.log(menu.entries());

/**
 * We get this weird Array Iterator which is not really helpful but,
 * we will learn all about iteraotr by the end of the course.
 *
 * But, if we want to take a look at menu.entries(), we need to expand
 * it using the spread operator and then create a new array based on
 * that.
 */

// This is just to take a look at what menu.entries() actually is
console.log([...menu.entries()]);

/**
 * If we now take a look at the console, we will see that it is basically
 * an array, where in each postion, it contains a new array; and each of
 * these new array contain the index number along with the element of
 * the original array.
 *
 * So, now if we wanted to print a nice menu then we can take advantage
 * of the data we get from menu.entries()
 */

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

/**
 * This works great but, we are actually, at this point, smarter than
 * doing it like this.
 *
 * That's because if 'item' is now an array, we can de-structure it.
 *
 * We don't have to manually take element 0 and element 1, that is the
 * old-school way. So, let's not do it in a better way.
 *
 * We can destructure the array right inside the parentheses.
 */

for (const [idx, el] of menu.entries()) {
  console.log(`${idx + 1}: ${el}`);
}

/**
 * Indeed, it works the same.
 *
 * So, once again destructuring made our live a little bit easier.
 * So, it is a great addition to the JavaScript language.
 * The same is also true for the for-of loop, which makes it a lot easier
 * to loop over arrays.
 */

/**********************************************************************/
/********************** ENHANCED OBJECT LITERALS **********************/
/**********************************************************************/
console.log(
  `/********************** ENHANCED OBJECT LITERALS **********************/`
);

/**
 * Maybe you've been noticing that we have been talking a lot about the
 * ES6 features and even newer additions to the language.
 *
 * So, let's continue with that now with yet another enhancement, which
 * is enchanced object literals.
 *
 * So, let's take a closer look at our restaurant object.
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here is your pizza with ${mainIngredient}, ${otherIngredients}`
    );
  },
};

/**
 * This restaurant object is an object literal, you can see that because
 * we basically wrote this object literally in our code using the curly
 * braces syntax.
 *
 * So, this entire object has been written using the object literal
 * syntax.
 *
 * Now ES6 introduced three ways, which make it easier to write object
 * literals like this.
 *
 * So, let's go through them one-by-one now.
 *
 * First off, let's say that we have an object that is outside of the
 * restaurant object.
 *
 * So, let's cut the openingHours child object and create another
 * object outside of the restaurant object.
 */

openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

/**
 * So, openingHours is now its own object.
 *
 * Now, we still want to have the openingHours object inside of the
 * restaurant. So, we can do it like so:
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here is your pizza with ${mainIngredient}, ${otherIngredients}`
    );
  },
  // adding the openingHours object to the restaurant object
  openingHours: openingHours,
};

console.log(restaurant);

/**
 * So, before we would have to write write `openingHours: openingHours`
 * within the restaurant object to create a property inside of it called
 * `openingHours`.
 *
 * But the issue here is that the variable name and the property name
 * are exactly the same. So, we are writing the same thing twice.
 *
 * So, with the enhanced object literals, you don't need to write it
 * like that anymore. You can just write `openingHours` inside the
 * restaurant object.
 *
 * What this will do now is to take the `openingHours` object and put it
 * into the restaurant object and create a property name with exactly
 * that variable name.
 *
 * Like so:
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here is your pizza with ${mainIngredient}, ${otherIngredients}`
    );
  },
  // ES6 Enhanced Object Literal: adding the openingHours object to the restaurant object
  openingHours,
};

console.log(restaurant);

/**
 * If we check the console now, then we will see that the `openingHours`
 * is still inside the restaurant object, just like before.
 *
 * Ofcourse the name of `openingHours` can be anything you want but,
 * make sure you change the name inside the object as well otherwise,
 * JS will not know what variable you are talking about.
 *
 * So, that's a very handy enhancement.
 */

/**
 * Let's now check out the second enchancement.
 *
 * The second enchancement to the object literals is about writing
 * methods.
 *
 * In ES6, we no longer have to create a property and then set it to
 * a function expression, like we have always been doing.
 *
 * We can write it in an easier way - which is to get rid of the
 * `function` keyword and the semi-colon (for key-value pair) and it
 * will work exactly the same but, with a slightly easier syntax
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Enhanced Object Literal: you can get rid of `function` keyword
  // and the semi-colon that separated key-value pairs and it will work
  // exactly the way it is supposed to
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here is your pizza with ${mainIngredient}, ${otherIngredients}`
    );
  },
  openingHours,
};

console.log(restaurant);

/**
 * The third enhancement is that we can now compute property names
 * instead of having to write them out manually and literally.
 *
 * Compute just means calculate so, let's try it out now.
 *
 * Let's say that we had an array with all the weekdays.
 */

weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

/**
 * Now we want to take the property names from openingHours object and
 * instead of writing them manually, we want to use our weekdays array
 * to calculate the property names using the bracket syntax.
 *
 * Basically, we can put any expression inside the bracket syntax as
 * we learned in the fundamentals section.
 */

openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // we can do anything within these square brackets
  // this is just for demonstration purposes
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

console.log(openingHours);

/**
 * Now if we check the console, we will see that we still get 'thu'
 * and 'fri' and last property name is "day-6".
 *
 * So, we computed the last property name (in openingHours object) using
 * a template literal.
 *
 * So before, we could only compute values but now, we can also compute
 * properties of an object.
 */

/**********************************************************************/
/*********************** OPTIONAL CHAINING (?.) ***********************/
/**********************************************************************/
console.log(
  `/*********************** OPTIONAL CHAINING (?.) ***********************/`
);

/**
 * Let's learn about an even newer feature of objects and also of arrays
 * which is called optional chaining.
 *
 * This one is really amazing.
 *
 * So, let's say that we wanted to get the opening hours of our
 * restaurant for Monday.
 */

restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  // new method
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here is your pizza with ${mainIngredient}, ${otherIngredients}`
    );
  },
};

console.log(restaurant.openingHours.mon);

/**
 * Actually, `restaurant.openingHours.mon` doesn't exist. So we get
 * undefined.
 *
 * But, let's pretend that we don't know if this restaurant opens on
 * Monday or not, which could be the case if we are getting this data
 * from a real web service (a web API); and in that service there could
 * be multiple restaurants and not all of them would open on Monday.
 *
 * So, we have no way of knowing if this particular restaurant would
 * open on Monday or not.
 *
 * But now, let's go even further because we actually want to know
 * exactly the hour during which the restaurant opens on Monday.
 */

// console.log(restaurant.openingHours.mon.open);

/**
 * Now, we get an error. This is because the result of
 * `restaurant.openinghours.mon` was undefined.
 *
 * Then undefined.mon is really an error. So, that's the error we get
 * in our console.
 *
 * So, in order to avoid this error, we would first have to check if
 * `restaurant.openingHours.mon` actually exists.
 *
 * To do that, we could do something like this:
 */

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

/**
 * We could also use a logical operator if we want but, let's go with
 * the if-statement for now.
 *
 * If we do the same for friday then it would work because we already
 * know that friday exists
 */

if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}

/**
 * But let's focus on Monday, which is the day that doesn't exist in
 * our openingHours object.
 *
 * So with the if-statement, we atleast got rid of our error.
 *
 * It is not a big deal to add the if/else logic here but, it does make
 * our code a little bit more unreadable and more messy.
 *
 * However this is just checking for one property, which is 'mon' but,
 * now imagine that the `openingHours` would also be optional or in
 * other words, that maybe the restaurant object doesn't even have the
 * openingHours object.
 *
 * In that case, we would have to check for both: 'mon' and
 * 'openingHours', which would look something like this:
 */

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

/**
 * So, this can get out of hand pretty quickly when we have deeply
 * nested objects with lots of optional properties; and sometimes that
 * does happen in the real-world.
 *
 * Therefore ES2020 introduced a great solution for this, which is a
 * feature called optional chaining.
 *
 * With optional chaining, if a certain property does not exist, then
 * undefined is returned immediately.
 *
 * So, that will then avoid that kind of error that we saw earlier.
 *
 * This is how that works: (let's re-create it now with optional
 * chaining).
 */

// Without Optional Chaining
// console.log(restaurant.openingHours.mon.open); // error

// With Optional Chaining
console.log(restaurant.openingHours.mon?.open); // undefined

/**
 * For the optional chaining operator, instead of just a dot `.`, we use
 * a question mark `?` and then a dot `.`
 *
 * Here is how the optional chaining works:
 *
 * Only if the property before the `?` exists i.e. only if `mon` exists,
 * then the `open` property will be read from the object. If it does
 * not exist, then immediately `undefined` will be returned.
 *
 * And exists here actually means the nullish concept that we already
 * talked about before. So, a property exists if it is not `null` or not
 * `undefined`. So, if it is 0 or an empty string then it still exists,
 * of course.
 *
 * So, the result of the above operation, with optional chaining is
 * `undefined`.
 *
 * Of course, we can have multiple optional chaining, like so:
 */

console.log(restaurant.openingHours?.mon?.open);

/**
 * So, this makes it really easy to prevent all kinds of bugs that
 * sometimes we might not even expect.
 *
 * It also takes away all the extra work of using the if/else statement
 * simply by adding a question mark.
 *
 * Now, let's see a little bit more of a real-world example. For that
 * let's work with the weekdays array.
 */

weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

/**
 * Now what we want to do is to loop over this array and log to the
 * console, whether the restaurant is open or close on each of the days.
 */

for (const day of weekdays) {
  // NOTE: If we want to use a variable name as the property name of an
  // object, we need to use the square brackets notation.
  // We learned this in the fundamentals section so, if you don't
  // remember, please refer that.
  const open = restaurant.openingHours[day]?.open || 'are closed';

  console.log(
    `On ${day}, we ${typeof open !== 'number' ? open : 'open at ' + open}`
  );
}

/**
 * We have a problem here. On Saturday, it says that the restaurant is
 * closed but, the restaurant is actually open on Saturday.
 *
 * If we look at our openingHours object, we will find a property
 * called 'sat' which opens at 0.
 *
 * So here, we have the same problem as before where 0 is falsy value,
 * which is why it triggers the second part.
 *
 * But, we also saw a solution to this, which is to use the nullish
 * coalescing operator.
 *
 * So, let's use that now.
 */

for (const day of weekdays) {
  // using the nullish coalescing operator
  const open = restaurant.openingHours[day]?.open ?? 'are closed';

  console.log(
    `On ${day}, we ${typeof open !== 'number' ? open : 'open at ' + open}`
  );
}

/**
 * Now we are getting the desired result.
 *
 * So, this is an amazing use case of the optional chaining operator and
 * the nullish coalescing operator working together.
 *
 * In fact, they were introduced into the language at the same time in
 * ES2020 because they were really designed to work well with each other.
 *
 * So again, both of them rely on this new concept of nullish and the
 * nullish values are null and undefined. So, this is true for both,
 * the nullish coalescing operator and the optional chaining.
 *
 * Now that you understand how it works, let's move on to the next topic,
 * which is on methods.
 */

// METHODS

/**
 * So, optional chaining does indeed also work for calling methods.
 *
 * Essentially, we can check if a method actually exists before we
 * call it.
 */

// calling the method only if it exists
// We should always the nullish coalescing operator with optional chaining
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // this method exists, so it works - ['Focaccia', 'Pasta']

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

/**
 * So, just like before, the optional chaining operator will check
 * if orderRisotto() actually exists and if it doesn't, it will
 * immediately return `undefined`. So the entire first operand returns
 * undefined so because of the nullish coalescing operator, we
 * immediately go to the second operand.
 *
 * So, really useful on methods as well.
 *
 * Finally, optional chaining also works on arrays as well.
 */

// ARRAYS

/**
 * Basically, we can use the optional chaining operator to check if an
 * array is empty.
 */

let users = [
  { name: 'Bhoami', email: 'bhoami@email.com' },
  { name: 'Jonas', email: 'jonas@email.com' },
];

/**
 * This optional chaining checks if the value on the left of the question
 * mark exists. In our case, it does exists, so it returns the name.
 */
console.log(users[0]?.name ?? 'User array is empty');

/**
 * Now we set the users array to empty so, users[0] does not exist and
 * we get "User array empty" as a result.
 */
users = [];
console.log(users[0]?.name ?? 'User array is empty');

/**
 * Without optional chaining, this is how we would have written the same
 * thing as above:
 */

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array is empty');
}

/**
 * So, using the if/else statement is a lot more work than using the
 * optional chaining operator.
 *
 * Therefore, optional chaining is a much better solution.
 *
 * So, get used to the optional chaining operator, which almost always
 * is used together with the nullish coalescing operator so that we can
 * do something in case we don't get a result from the object or from
 * the array that is on the LHS.
 */

/***********************************************************************/
/********** LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES **********/
/***********************************************************************/
console.log(
  `/********** LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES **********/`
);

/**
 * We learned about the for-of loop to loop over arrays, which remember
 * is an iterable, but we can also loop over objects, which are not
 * iterable, but in an indirect way.
 *
 * We have different options here, depending on what exactly we want to
 * loop over. Do we want to loop over the objet's property names, or the
 * values or both together.
 *
 * Let's start by simply looping over property names. Remember that
 * property names are also called keys.
 *
 * Now, ultimately we will still have to use the for-of loop to loop
 * over the array, but again, we are going to do that in an indirect way.
 *
 * So, we are not actually going to loop over the object itself. Instead,
 * we are going to loop over, an array.
 *
 * So, let's see how:
 */

openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

/**
 * We get an array with the three property names.
 */
let properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

/**
 * We can also use it to compute how many properties are in the object.
 *
 * Let's say we wanted to print a string saying how many days the
 * restaurant is open.
 */

let openStr = `We are open on ${properties.length} days: `;

/**
 * We will loop over the properties array now
 */
for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

/**
 * Now, if we wanted the property values, then we would use
 * Object.values()
 */

let values = Object.values(openingHours);
console.log(values); // [{…}, {…}, {…}]

/**
 * Now to really simulate, to loop over the entire object, we actually
 * need entries().
 *
 * So, entries() is basically property names plus values together.
 *
 * We already saw the entries() before when we looped over an array.
 * So, we can do something similar on objects and that will then also
 * return the key and the value.
 *
 * It works differently on objects because it is not going to be a method
 * that we call on the object itself.
 *
 * This distiction between the array and the object is important as we
 * loop over the entire object.
 *
 * For Arrays: arrayName.entries()
 * For Objects: Object.entries(objectName)
 */

// Entire Object
let entries = Object.entries(openingHours);
console.log(entries); // [Array(2), Array(2), Array(2)]

/**
 * Basically, Object.entries(), Object.keys(), and Object.values(), all
 * transform an object into an array.
 *
 * Now we can use it to loop over the object.
 */

for (const x of entries) {
  console.log(x); // here we have each key and each value
}

/**
 * Just like with arrays, we can destructure `x` right in the parentheses.
 *
 * The value is an object, so we have to destructure that as well.
 */
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/**********************************************************************/
/******************************** SETS ********************************/
/**********************************************************************/
console.log(
  `/******************************** SETS ********************************/`
);

/**
 * In the past, JavaScript has always had very little built-in data
 * structures.
 *
 * So basically, we only had objects and arrays.
 *
 * But in ES6, two more data stuctures were finally introduced; and they
 * are sets and maps.
 *
 * These are pretty common data structures that already exist in other
 * programming languages and now they also exist in JavaScript.
 *
 * So, in this lesson, let's learn all about sets.
 *
 * A set is basically just a collection of unique values.
 *
 * So, this means that a set can never have any duplicates; and this
 * property makes them useful in certain situations.
 *
 * Let's create a new set.
 *
 * To create a new set, we write the `new` keyword followed by `Set()`
 * and within its parentheses, we need to pass in an iterable.
 *
 * Most common iterable is an array.
 *
 * NOTE: Sets can hold mixed data types.
 */

let ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

/**
 * When we check in the console, we can see that get a set which has a
 * size of 3 and the only values that are in there are Pasta, Pizza, and
 * Risotto.
 *
 * So, all the duplicates are gone.
 *
 * We can also see that a set actually looks very similar to an array.
 * There are no key-value pairs, it is just a bunch of values grouped
 * together, in this case into a set.
 *
 * Just like arrays, sets are also iterables.
 *
 * Of course, a set is still very different from an array.
 * First, because its elements are unique, and second, because the order
 * of elements in the set is irrelevant.
 * We will see why in a second.
 *
 * But anyway, keep in mind that strings are also iterables.
 * So, we can do this:
 */

console.log(new Set('Bhoami')); // {'B', 'h', 'o', 'a', 'm', 'i'}

/**
 * Of course, the set could also be empty, like this:
 */

console.log(new Set()); // Set(0) {size: 0}

/**
 * Let's now learn how to actually work with sets.
 *
 * First off, we can get the size of a set.
 */

console.log(ordersSet.size); // 3

/**
 * Note how it is called 'size' and not 'length' like it is in arrays.
 * Don't make that confusion.
 *
 * Next, we can check if a certain element is in a set.
 */
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Lasagna')); // false

/**
 * Comparing to the arrays, the has() method for sets is similar to the
 * inlcudes() method in arrays.
 *
 * Next up, we can also add new elements to a set.
 */

// let's say someone ordered it twice
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

console.log(ordersSet); // {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

/**
 * The 'Garlic Bread' got added but, of course, only one of them got
 * added.
 *
 * This is because the set has to be unique so, the second one was simply
 * ignored.
 *
 * Finally, we can also delete elements.
 */

ordersSet.delete('Risotto');
console.log(ordersSet); // {'Pasta', 'Pizza', 'Garlic Bread'}

/**
 * Notice how all the method names are very straightforward.
 *
 * This is because set is such a modern feature.
 *
 * The modern concepts really have more straightforward names and a
 * different way of working with data structures.
 *
 * In fact, in arrays, there is actually no method that is this simple
 * to delete elements.
 *
 * We will see how to delete elements from arrays, later. But what we
 * can say is it is a little bit more complex.
 *
 * Now you may ask, how do we retrieve values out of a set? Can we maybe
 * use an index, like in arrays?
 *
 * The answer is no. It doesn't work and it will give us undefined.
 */

console.log(ordersSet[0]); // undefined

/**
 * This is because in sets, there are no indexes.
 *
 * In fact, there is no way of getting values out of a set. If we think
 * about it, then it makes sense.
 *
 * There is really no need for getting data out of a set. That's because
 * if all values are unique, and it their order does not matter, then
 * there is no point of retrieving values out of a set.
 *
 * All we need to know is whether a certain value is in the set or not
 * and that's why we have the has() method.
 *
 * If your goal is to actually store value and then retrieve it, then
 * the best use case, is to just use an array.
 *
 * You wouldn't use a set for that.
 *
 * Finally, there is one more method for sets, however, it is not that
 * important. All we can use it for is to basically delete all of the
 * elements of the set.
 */

ordersSet.clear();
console.log(ordersSet); // Set(0) {size: 0}

// re-building the set so, we can work with it a bit more
ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

console.log(ordersSet);

/**
 * As mentioned before, sets are also iterables.
 *
 * Therefore, we can loop over them.
 */

for (const order of ordersSet) {
  console.log(order);
}

/**
 * If we check the console now, we should get each of the orders logged
 * on there.
 *
 * So, looping is possible, just like any other iterable.
 *
 * Now that we know how to work with sets, let's see a big use case
 * for them.
 *
 * In a normal code base, the main use case of sets is actually to
 * remove duplicate values of arrays.
 *
 * Example:
 * Let's say that we have an array in our restaurant, which contains
 * the staff of our restaurant.
 */

// Example
let staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

/**
 * So, we have all our staff in the array above but, now let's say that
 * we are interested in knowing only which different postions there are
 * in our restaurant.
 *
 * In other words, we would basically like to have an unique array of
 * the 'staff' array above i.e. array without duplicates.
 *
 * So, let's create a set for that.
 */

let staffUnique = new Set(staff);
console.log(staffUnique); // {'Waiter', 'Chef', 'Manager'}

/**
 * So, we have a set now with waiter, chef, and manager, which are the
 * three unique positions.
 *
 * But, we want it to be an array.
 *
 * The conversion from a set to an array is pretty easy because they are
 * both iterables.
 *
 * So, remember from earlier that the spread operator works on all
 * iterables. That includes sets.
 *
 * So, we can now create an array around it basically.
 */

staffUnique = [new Set(staff)];
console.log(staffUnique); // [Set(3)]

/**
 * Now we can unpack the set using the spread operator, like so:
 */

staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']

/**
 * So now, indeed, we end up with a new array.
 *
 * So, the spread operator works just same on sets as it does on arrays.
 *
 * Now, if we only wanted to know how many different positions there
 * are, then the `size` property is very useful.
 */

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

/**
 * Now we won't even need to create the new array at all.
 *
 * The same could even be done with counting how many different letters
 * there are in a string, since strings are an iterable too.
 */

console.log(new Set('bhoamikkhona').size); // 8

/**
 * As a conclusion, sets are not intended to replace arrays at all.
 *
 * So, whenever you need to store values in order, and that might contain
 * duplicates, always just use arrays.
 *
 * That's also true when you need to really manipulate data, because
 * arrays have access to a lot of great array methods that we are going
 * to study a bit later.
 *
 * Sets have this very useful property of being unique; and it is also
 * very easy to interact with sets by using all of their straightforward
 * methods.
 *
 * However, they are not nearly as important as arrays.
 *
 * So, keep sets in mind when you need to work with unique values but,
 * besides that, you can just continue using arrays.
 */

/**********************************************************************/
/************************* MAPS: FUNDAMENTALS *************************/
/**********************************************************************/
console.log(
  `/************************* MAPS: FUNDAMENTALS *************************/`
);

/**
 * It is time to learn about the other new JavaScript data structure and
 * it is maps.
 *
 * Maps are a lot more useful than sets.
 *
 * What exactly is a map?
 * In JavaScript, a map is a data structure that we use to map values to
 * keys.
 *
 * So, just like an object, data is stored in key-value pairs in maps.
 * The big difference between objects and maps is that in maps, the keys
 * can have any type and this can be huge.
 *
 * In objects, the keys are basically always strings. But in maps, we can
 * have any type of key.
 *
 * It could even objects, or arrays, or other maps. So, this can lead to
 * some really great and advanced stuff.
 *
 * So, let's create a restaurant map.
 */

// we create maps using its constructor function, like so:
let rest = new Map();

/**
 * The easiest way to create a map is to actually create an empty map
 * just like we did above, without passing anything in it.
 *
 * To fill up a map, we can use the set() method.
 *
 * Within the set() method, we pass in two arguments. The first is the
 * key name and the second argument is the value.
 */

rest.set('name', 'Classico Italiano');

/**
 * As you see, the set() method is pretty similar to the add() method
 * that we had in sets.
 *
 * So, both allow us to add a new element to the data structure.
 *
 * Remember that we can use any data type that we want.
 *
 * Let's say that the restaurant has two locations. So, we can create a
 * key with a number, it doesn't have to be string.
 */

rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

/**
 * Calling the set() method like we did above, not only updates the map
 * that it is called on but, it also returns the map.
 *
 * We can see it if we log it to the console:
 */

console.log(rest.set(2, 'Lisbon, Portugal')); // {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

/**
 * The fact that the set() method actually returns the updated map
 * allows us to chain the set() method like this:
 */

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23);

console.log(rest); // {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal', 'categories' => Array(4), 'open' => 11, …}

/**
 * So, calling the set() method returns the updated map. So, the entire
 * set() chain above is the updated map and we can continue it further.
 */

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

/**
 * We will see how the boolean key will be helpful in a minute.
 *
 * Now, in order to read data from a map we use the `get()` method.
 *
 * The get() method is available in all the maps.
 *
 * So, all we need to do is to pass in the name of the key.
 */

console.log(rest.get('name'));
console.log(rest.get(true));

/**
 * As you see in the console, the `true` key is mapped to "We are open
 * :D" and `name` is mapped to "Classico Italiano".
 *
 * When we get the elements, the data type of the key matters.
 */

console.log(rest.get('true')); // undefined
console.log(rest.get(true)); // "We are open :D"

/**
 * Now just for fun, let's use the fact that we can have Boolean keys.
 *
 * We also have the 'open' and 'close' time and so as you see, they are
 * related.
 *
 * So, let's create something fun with them.
 *
 * Let's say that we have the current time; and we could actually get
 * the current time from JavaScript but, we don't know how yet.
 *
 * So, let's just say it is 21 hours, which is 9:00 PM.
 */

let time = 21;

/**
 * So, when we pass in `true`, we will get `We are open :D` and when we
 * pass in `false`, we will get `We are closed :(`
 *
 * So, in order to get the correct string according to current time, all
 * we need to do is to compare the current time with the `open` and
 * `close` in map.
 */

// Here `time > rest.get('open')` (A) will return a boolean
// `time < rest.get('close')` (B) will return a boolean
// and then `A && B` will return a boolean
// then, depending on whether `A && B` returns true or false, we call rest.get()
// so, this is pretty clever
let open = rest.get(time > rest.get('open') && time < rest.get('close'));

console.log(open);

/**
 * So, this is very clever but, it is not very readable so, don't over-
 * use this pattern.
 *
 * This just really goes to show the power of having Booleans as map
 * keys.
 *
 * Anyway, let's now keep exploring the methods that are available on
 * maps.
 *
 * We already have methods to set() and to get(). Now, we can also check
 * if a map contains a certain key.
 *
 * So, let's log to the console the result of calling the has() method.
 */

console.log(rest.has('categories')); // true

/**
 * We can also delete elements from the map, and that happens based on
 * the key.
 */

rest.delete(2);
console.log(rest);

/**
 * Comparing this to objects, we can also delete properties from object
 * using something called the delete operator but, that is really a
 * slow process and usually it is not encouraged to do that.
 *
 * About the has() method, objects also do have a method called
 * hasOwnProperty() but, we will talk about that in the object oriented
 * programming section.
 *
 * Next, maps also have the `size` property
 */

console.log(rest.size); // 7

/**
 * We can also clear i.e. remove all the elements from the map using the
 * clear() method.
 */

rest.clear();
console.log(rest); // Map(0) {size: 0}

// re-initializing map
rest
  .set('name', 'Classico Italiano')
  .set(1, 'Firenze, Italy')
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);

/**
 * So, as you can see, there is some overlap in the way that we work
 * with maps and sets.
 *
 * This is because they were both introduced in ES6.
 *
 * Now, just to finish, let's see that we can in-fact use arrays or
 * objects as map keys.
 */

// array as map key
rest.set([1, 2], 'Test');
console.log(rest);

/**
 * Now to get the data based on that array, let's try rest.get([1,2])
 */

console.log(rest.get([1, 2])); // undefined

/**
 * It returned undefined, and not the value "Test" that we were hoping
 * for.
 *
 * The reason for this is that the two arrays, the one in the set()
 * method and the one in the get() method, might look the same but,
 * they are not the same object.
 *
 * Even though we wrote them in the same way and they have the same
 * elements, they are not the same object in the heap.
 *
 * The key is the EXACT [1,2] object in the set() in the memory. It is
 * not the one in the get() method.
 *
 * So, this cannot work.
 *
 * In order to make it work, we would have to do this:
 */

arr = [1, 2];
rest.set(arr, 'test');

console.log(rest);

console.log(rest.get(arr)); // 8: {Array(2) => "test"}

/**
 * So, the solution is to store that array in a variable first and then
 * set that variable as the key.
 *
 * This works because now, the arr variable refers to the same place
 * in the memory in both, the set() and get() methods.
 *
 * With this we proved that we can indeed use objects as map keys.
 *
 * This can be very useful with DOM elements which, in fact are also
 * nothing more than just a special type of object.
 *
 * Let's look at an example for that:
 */

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); // 9: {h1 => "Heading"}

/**
 * Now if we check in the console, you will see that in the map.
 *
 * As we hover over it, you can see it even highlights the heading on
 * the web page.
 *
 * So, that is the key of that specific map entry.
 *
 * This sounds crazy but, it is possible and it can enable some advanced
 * functionality.
 */

/***********************************************************************/
/*************************** MAPS: ITERATION ***************************/
/***********************************************************************/
console.log(
  `/*************************** MAPS: ITERATION ***************************/`
);

/**
 * Let's continue learning about maps.
 *
 * In the last lesson we created an empty map and then added elements
 * to it by using the set() method.
 *
 * However, there is actually another way of populating a new map
 * without having to use the set() method.
 *
 * This other way of adding elements is more preferrable because the
 * set() method can be very cumbersome when there are a lot of values
 * to set.
 *
 * Instead we can create a new map like this:
 *
 * NOTE: We will be implementing something like a quiz.
 *
 * Inside the Map() constructor function, we can pass in an array and
 * this array itself will contain multiple arrays.
 *
 * In each of these child arrays, the first position is going to be
 * the key and the second position is going to be the value.
 */

let question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

/**
 * So, when creating a new map from scratch, directly in the code, it
 * is preferrable to do the way we did it above instead of using the
 * set() function.
 *
 * But, when we keep adding new elements programmatically i.e. using
 * code, then of course the set() method is still the way to go.
 *
 * The array of arrays structure should look familiar to you because
 * that is the same array structure which is returned from calling
 * Object.entries().
 */

// easy way to convert objects to maps
console.log(Object.entries(openingHours)); // array of arrays

/**
 * The result of Object.entries(openingHours) is an array of arrays,
 * and within each of the child array, the first element is the key and
 * the second element is the value.
 *
 * This means that there is an easy way to convert from objects to maps.
 */

let hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

/**
 * Keep this small trick in mind, whenever you need a map and you already
 * have an object.
 *
 * Next up, let's talk about iteration and iteration is possible on maps
 * because as we already know, maps are also iterables.
 *
 * So, the for-loop is also available for them.
 *
 * Let's use the for-loop to print the three options of quiz/question map
 * to the console.
 */

console.log(question.get('question'));
/**
 * This loop is exactly the same as we did when we looped over the
 * object. The only difference is that for the object, we needed
 * Object.entries(). This is because, the object is not an iterable but,
 * then we converted it to an iterable using Object.entries()
 */
for (const [key, value] of question) {
  /**
   * Keep in mind that we only want to print the answer options from our
   * question map. So, we only want to print if the key is a number.
   * For that, let's use what we already know.
   */
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// getting a user input for their answer
// let answer = Number(prompt('Your answer'));
let answer = 3;
console.log(answer);

/**
 * Now we can use the power of the boolean keys in the map, in order to
 * either print the success message or the error message.
 */

console.log(question.get(answer === question.get('correct')));

/**
 * With that, we finished our nice little quiz.
 *
 * Now, just to finish, as a side note, sometimes we also need to convert
 * a map back to an array of arrays.
 *
 * We can do it like so:
 */

// convert map to an array of arrays
console.log([...question]);

// Some array methods that are also applicable to map:
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

/**
 * They give us the weird MapIterator in the console if we simply do it
 * like we did above.
 *
 * So, in order to get rid of it, simply use the spread operator and
 * put them in an array, like so:
 */

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/**
 * This all we need to know about maps for now.
 *
 * Now you might be wondering, when should we use maps/object? OR
 * When should we use arrays/sets? This is because they are pretty
 * similar.
 *
 * That is what we will answer in the next theorectical lesson. There
 * we will learn how to choose between all the data structures including
 * arrays and sets.
 *
 * NOTE: Since it is theoretical, the notes are in the README.md file.
 */

/***********************************************************************/
/******************** WORKING WITH STRINGS: PART 01 ********************/
/***********************************************************************/
console.log(
  `/******************** WORKING WITH STRINGS: PART 01 ********************/`
);

/**
 * Over the next few lessons, we will learn how to work with strings so,
 * we are going to take a look at a couple of useful string methods.
 *
 * In this part of the section, we are going to leave the restaurant
 * theme behind and work on things related to airplanes and airlines.
 *
 * Let's start by creating an airline variable.
 */

let airline = 'Air India';
let plane = 'A320';

/**
 * Just like in arrays, we can get the character of a string at a
 * certain position.
 */

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

/**
 * We get 3 and 2 from postion 1 and 2 but, both of them are still
 * strings so, we would have to convert them into Number if we wanted
 * them to be numbers.
 *
 * This is how we can do that:
 */

console.log(Number(plane[1])); // 3
console.log(Number(plane[2])); // 2

// We can also do this:
console.log('B737'[0]); // B

// We can read the length property of strings, just like we can in arrays
console.log(airline.length); // 9
console.log('B737'.length); // 4

/**
 * Next up, let's talk about methods.
 *
 * Again, comparing strings to arrays here, strings also have methods
 * and some of them are quite similar to the array methods.
 */

// indexOf()
console.log(airline.indexOf('r')); // 2

// NOTE: Strings are also 0 based

// lastIndexOf()
console.log(airline.lastIndexOf('i')); // 7

// searching for words using indexOf() - this case sensitive so, if we
// search for India with a small i, we will get -1 because it cannot
// find "india" in the string
console.log(airline.indexOf('India')); // 4
console.log(airline.indexOf('india')); // -1

/**
 * What can we do with these indexes? Why are they useful?
 *
 * One good use case is to extract part of a string using the slice()
 * method and a slice() method needs indexes as arguments.
 *
 * Therefore, sometimes it can be very useful to first figure out the
 * index of part of a string to then extract that.
 *
 * Let's see how the slice() method works:
 */

console.log(airline.slice(4)); // India

/**
 * The result is "India" and the reason for that is the 4 that we passed
 * in, is the begin parameter i.e. the position at which the extraction
 * will start.
 *
 * Remember that strings are 0 based. So, we get "I" as position 4
 * therefore, the slice() method begins to extract there.
 *
 * The result that we get from using the slice() method is called as a
 * sub-string because it is just a part of the original string.
 *
 * Keep in mind that slice() method does not change the underlying
 * string, and that is because it is actually impossible to mutate
 * strings since they are primitive types.
 *
 * So, if we wanted to use the substring from the slice() method, we
 * would first have to store it in some variable or some other data
 * structure.
 *
 * So, slice() method and all the other methods that we are going to talk
 * about are always going to return a new string.
 *
 * Besides the begin parameter that we already specified in the slice()
 * method, we can also specify the end parameter. So, let's try that:
 */

console.log(airline.slice(4, 6)); // In

/**
 * At position 4, it is the letter I; at position 5, it is the letter n
 * but, we did not get the letter at position 6 - which is d. So this
 * tells us that the end value is not included in the string.
 *
 * So basically, the slice() method stops extractice before reaching
 * the index number 6. This is really important to keep in mind.
 *
 * NOTE: The length of the extracted string (or substring) is always
 * going to be the start index that we passed in minus the end index.
 *
 * In our case 6 - 4 is to 2 and that is the length of "In".
 *
 * Up until this point we have hard-coded the values that we pass into
 * the slice() method; but many times we don't even know the string that
 * we received yet.
 *
 * So, let's now try to extract the first word of the airline string but,
 * without knowing any of the indexes - this is where the indexOf()
 * and the lastIndexOf() become really important. Basically, we do not
 * have to hardcode what we pass into slice() method.
 *
 * So, since we want the first word, the start index will be 0 and the
 * end parameter will be indexOf() space character.
 *
 * REMEMBER: The indexOf() method returns the first occurence of the
 * provided parameter in the string it is called upon.

* REMEMBER: The lastIndexOf() method returns the last occurence of the
 * provided parameter in the string it is called upon.
 */

console.log(airline.slice(0, airline.indexOf(' ')));

// here we don't need the end parameter because we are starting at the
// space character in the string and it will go till the end, giving us
// the last word in the string.
// NOTE: Since the character at the starting position is included in the
// result, we need to add 1 to it so, it will get rid of the space at the
// beginning of the string
console.log(airline.slice(airline.lastIndexOf(' '))); // " India"
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // "India"

/**
 * That's the fundamentals of the slice() method but, we can do even more
 * with it.
 *
 * We can even pass a negative arugment in the slice() method and then
 * it will start counting from the end.
 */

// this will start from the second last index of the string
console.log(airline.slice(-2)); // ia

// we can also specify a negative end parameter
/**
 * Here we started at 1, that is why the A is cut off and then the end
 * index is not included in the slice() method that is why the last
 * letter is cut off.
 */
console.log(airline.slice(1, -1)); // ir Indi

/**
 * We will need all of these different combinations of slice(),
 * indexOf(), and lastIndexOf() methods in different situations. So, it
 * is good that you know how to use them because, you will need them at
 * some point.
 *
 * Now let's practice a little bit, what we just learned and write a
 * function that receives an airplane seat and logs to the console,
 * whether it is a middle seat or not.
 *
 * In small planes like A320 or the Boeing 737, we only have 6 seats in
 * a row - that means that B and E are the middle seats.
 *
 * So, what we have to do here is to basically take the last character
 * of the string and check if it is B or E.
 */

const checkMiddleSeat = function (seat) {
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log(`You got the middle seat 😬`);
  } else {
    console.log(`You got lucky 😎`);
  }
};

checkMiddleSeat('11B'); // You got the middle seat 😬
checkMiddleSeat('23C'); // You got lucky 😎
checkMiddleSeat('3E'); // You got the middle seat 😬

/**
 * That's how we extract parts of strings and it is something that is
 * really important to do.
 *
 * Now before we move on, let's just stop for a second and understand
 * why all of it actually works.
 *
 * We know that strings are just primitives. So, why do they have
 * methods? Shouldn't methods only be available on objects such as
 * arrays?
 *
 * That is actually true. However, JavaScript is really smart, so here
 * is how it works:
 *
 * Whenever we call a method on a string, JavaScript will automatically,
 * behind the scenes convert that string primitive to a string object
 * with the same content.
 *
 * Then, it is on that object where the methods are called.
 *
 * This process is called boxing because, it basically takes our string
 * and puts it into a box, which is the object.
 *
 * So, basically what happens is this:
 */

console.log(new String('bhoami')); // String {'bhoami'}

/**
 * What JavaScript does is to call the `String()` function, and if you
 * look in the console, it looks a little bit more like an object.
 *
 * And if you further expand and look into it (in the console), you will
 * find methods that we could call upon it, including the slice() method
 * that we just learned.
 *
 * These methods are beyond the scope of this lesson but, we will come
 * back to it learn what it is, a little bit later.
 *
 * What matters for now is that `new String('bhoami')` indeed is now an
 * object. We can confirm that using the `typeof` operator, like so:
 */

console.log(typeof new String('bhoami')); // object

/**
 * So this conversion of string from primitive type to an object type is
 * what JavaScript does behind the scenes whenever we call a method on a
 * string.
 *
 * Then, when the operation is done, the object is converted back to a
 * regular string primitive.
 *
 * In fact, all string methods return primitives. Even if called on a
 * string object.
 *
 * We can confirm that like so:
 */

// the result of all of this is then back to being a string
console.log(typeof new String('bhoami').slice(2)); // string

/**
 * Don't get confused by this. This is just a theory explanation behind
 * why all of this works in case, you are curious, and I hope you are.
 */

/***********************************************************************/
/******************** WORKING WITH STRINGS: PART 02 ********************/
/***********************************************************************/
console.log(
  `/******************** WORKING WITH STRINGS: PART 02 ********************/`
);

/**
 * Let's continue with some simple string methods. The first two are
 * going to be for changing the case of a string.
 */

// converting to lower case
console.log(airline.toLowerCase()); // air india
console.log('BhOaMi'.toLowerCase()); // bhoami

// converting to upper case
console.log(airline.toUpperCase()); // AIR INDIA
console.log('BhOaMi'.toUpperCase()); // BHOAMI

/**
 * The above two methods we use all the time.
 *
 * Let's use them on a more practical example to fix the capitalization
 * in a passenger name.
 */

// fix capitalization in name
let passenger = 'BhOaMi';
let passengerLower = passenger.toLowerCase();
let passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect); // Bhoami

/**
 * Let's do another real-life example, which is to check a user input
 * email.
 *
 * This will not really be checking, it will be more like comparing
 * emails.
 */

// comparing emails
let email = 'hello@email.com';

/**
 * Let's say, when logging in the passenger makes mistakes of leaving
 * spaces, hitting the enter key to go to the next line, and leaves
 * certain characters capital.
 *
 * But, the email is kind of still correct and valid.
 *
 * So, we can now still compare if passenger's email and the one they
 * used to login are still kind of the same.
 *
 * It would be different, if they had different letters but, they are
 * the same because the difference is only letter casing and white
 * spaces.
 *
 * For eamils, they are still valid even with the capitalization off.
 */

let loginEmail = ' Hello@Email.Com \n';

/**
 * When we check user input like this, the first step is usually to
 * convert it to lower case.
 */

let lowerEmail = loginEmail.toLowerCase();

/**
 * Now we must also get rid of all the white spaces in the entered email.
 * There is even a method for that, which is `trim()`.
 */

let trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // hello@email.com

/**
 * Now it looks exact like the original passenger email.
 *
 * Now, just look closely at what we did here.
 *
 * We called `toLowerCase()` on the `loginEmail`, then stored it in the
 * `lowerEmail` variable. Then on that variable, we called the `trim()`
 * method.
 *
 * But, why do we even need the intermediate variable? We could do all
 * of it in one step, like so:
 */

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@email.com

/**
 * This works because, each of these string methods return a new string,
 * and on strings, we can call string methods.
 *
 * So, when we do `loginEmail.toLowerCase()`, it returns a string that
 * is all in lower case, and then on that returned string, we call the
 * trim() method, which gets rid of all the white spaces.
 *
 * For the sake of completetion, let's compare the original email with
 * normalizedEmail.
 */

console.log(email === normalizedEmail); // true

/**
 * Since ES2019, there is also trimStart() and trimEnd(), which as their
 * name suggests, you can use to trim the white space only from the start
 * of the string or only from the end.
 *
 * Next up, let's learn one of the most important thing about strings,
 * which is to replace parts of strings.
 */

// replacing
let priceGB = '₤288,97';
let priceUS = priceGB.replace('₤', '$').replace(',', '.');

console.log(priceUS); // $288.97

/**
 * We can also replace entire words, not just single characters.
 *
 * Just like other String methods, replace() also returns a brand new
 * string. It doesn't mutate the original string.
 */

let annoucement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(annoucement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!

/**
 * Notice how only the first 'door' was replaced by 'gate' in the
 * announcement string.
 *
 * So, replace() only replaces the first occurence of the search string.
 *
 * To replace all the occurences, we have a method called replaceAll().
 */

console.log(annoucement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

/**
 * Another solution to this problem is to use regular expressions or
 * regex.
 *
 * Regular expressions are one of the most complex and confusing topics
 * of programming, but we will still take a short look at them at some
 * point in the course.
 *
 * For now, we are just going to use a very simple regular expression
 * to tell the replace method that it should actually target all the
 * occurences of 'door' in the announcement string and not just the first
 * one.
 *
 * To create a regular expression, we need to write the string between
 * slashes, not between quotes.
 */

// NOTE: /door/ is yellow now, which means that it is some kind of string but, it is not a so-called regular expression.
console.log(annoucement.replace(/door/, 'gate')); // All passengers come to boarding gate 23. Boarding door 23!

/**
 * Now all we want to do, in this case, to add a `g` flag after the
 * closing slash in the regular expresssion. This `g` flag stands for
 * "global".
 *
 * Now all the occurences will be targeted.
 */
console.log(annoucement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

/**
 * NOTE: The replace() method is also case sensitive - just like all of
 * the other string methods are.
 *
 * Now, as a final topic of this lesson, there are three simple methods
 * that return booleans.
 *
 * These methods are inlcudes(), startsWith(), and endsWith().
 */

plane = 'Airbus A320neo';

// includes()
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false

// startsWith()
// NOTE: It doesn't have to match the entire word
console.log(plane.startsWith('Air')); // true
console.log(plane.startsWith('Ai')); // true
console.log(plane.startsWith('Aib')); // false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

/**
 * So, whenever you need to take some decision based on the contents
 * of a string, these three methods viz includes(), startsWith(), and
 * endsWith() are very helpful.
 */

// Practice Exercises
let checkBaggae = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed on board`);
  } else {
    console.log(`Welcome aboard!`);
  }
};

checkBaggae('I have a laptop, some Food, and a pocket Knife.');
checkBaggae('Socks and camera.');
checkBaggae('Got some snacks and a gun for protection.');

/***********************************************************************/
/******************** WORKING WITH STRINGS: PART 03 ********************/
/***********************************************************************/
console.log(
  `/******************** WORKING WITH STRINGS: PART 03 ********************/`
);

/**
 * This is the third and final part of working with strings. Let's start
 * by learning about one of the most powerful string methods, which is
 * split().
 *
 * split() allows us to split a string into multiple parts based on a
 * divider string.
 *
 * So, let's check that out.
 */

console.log('a+very+nice+string');

/**
 * Let's say that for some reason we have a string like the one above and
 * now on that string, we can call the split() method.
 *
 * As an argument, we need to specify a divider string, so in this case,
 * we will say +
 *
 * What will happen now is that it will split up the string by the +
 * sign and then store results into elements of a new array.
 */

console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']

/**
 * Essentially everything split up by the divider string.
 */

console.log('Bhoami Khona'.split(' ')); // ['Bhoami', 'Khona']

/**
 * This is very useful as we can now use the power of destructuring to
 * create new variables like so:
 */

const [firstName, lastName] = 'Bhoami Khona'.split(' ');
console.log(firstName, lastName);

/**
 * We could have done the same with the slice() method but, that would
 * have been too complicated and for longer sentences, almost impossible.
 *
 * By using split() method, it is very straightforward.
 *
 * Now, let's say that we want to make lastName uppercase and add "Miss"
 * in the beginning.
 *
 * So, we could just use a simple template literal and do that but, there
 * is something else that we want to learn here - which is the join()
 * method.
 *
 * join() method is essentially the opposite of split().
 *
 * So, let's create an array, which contains all that we just said.
 *
 * Then we want to call the join() method with a joining string on that
 * array and we will get the result that we wanted.
 */

let newName = ['Miss', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Miss Bhoami KHONA

/**
 * Indeed, we now get one entire string which is composed of the three
 * parts of the array, joined together by the joining string passed as
 * an argument to the join() method.
 *
 * NOTE: The joining string can be anything you want. It doesn't have to
 * be a space character.
 *
 * This combination of split() and join() is very powerful and we will
 * use it all the time.
 *
 * In fact, we can use it to for something that we already did in one of
 * the previous lessons, which is to capitalize name.
 *
 * But, with this, it makes it really easy to capitalize an entire name
 * with multiple names in there.
 */

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica anne smith davis'); // Jessica Anne Smith Davis
capitalizeName('bhoami kuleen khona'); // Bhoami Kuleen Khona
capitalizeName('jonas schmedtmann'); // Jonas Schmedtmann

/**
 * Now, no matter how long a naame we feed into this function, it will
 * always give us the correct output.
 *
 * Next up, let's talk about padding a string.
 *
 * Padding a string means to add a number of characters to the string
 * until the string has a certain desired length.
 */

// Padding
let message = 'Go to gate 23';

// the first parameter is how long you want the string to be
// the second paramter is what do you want to pad the string with
console.log(message.padStart(25, '+')); // ++++++++++++Go to gate 23
console.log('Bhoami'.padStart(25, '+')); // +++++++++++++++++++Bhoami

// there is also padEnd()
console.log(message.padStart(25, '+').padEnd(35, '+')); // ++++++++++++Go to gate 23++++++++++

/**
 * The above operation will basically add 10 '+' to the string because
 * the result of padStart() will already make the string 25 characters
 * long.
 *
 * Now, let's see a more real-world example of padding strings.
 *
 * When you see a credit card number on the internt, you never see
 * the entire number. Usually you only see the last 4 digits and the
 * rest is masked with some symbol.
 *
 * So, let's implement a function that actually does that masking.
 */

const maskCreditCard = function (number) {
  /**
   * Here we are converting the number to a string.
   *
   * This works because whenever one of the operands of the + operator
   * is a string, it performs type coercion and converts the other
   * operand to string as well.
   *
   * We learned this in the fundamentals section of the course.
   */
  const str = number + '';

  /**
   * Here we are grabbing the last 4 digits of the number using negative
   * indexes and storing it in a variable.
   */
  const last = str.slice(-4);

  /**
   * Here we are just padding the start of the string with '*' characters
   * upto the length of the original string.
   */
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123504683095));
console.log(maskCreditCard(231668323255));

/**
 * To finish, the last string method that we will see is the repeat()
 * method.
 *
 * As the name suggests, this method allows us to repeat the same string
 * multiple times.
 *
 * Let's say that the weather is bad at an airport. When that happens,
 * they usually have those long messages on the screen with texts
 * repeating and running all the time.
 */

let message2 = 'Bad weather... All departures dealyed... ';

/**
 * If you check the console now, the same message will have been printed
 * 5 times.
 *
 * It is the same big string that has been repeated over and over again.
 *
 * NOTE: These repeated string won't be separate strings. They will
 * combine into one big string.
 */
console.log(message2.repeat(5));

/**
 * We can also simulate that due to the bad weather, there are now many
 * planes waiting in line for takeoff.
 */

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

/**
 * We didn't talk about ALL the string methods that exist but, you can
 * check them out on MDN if you want to know.
 */
