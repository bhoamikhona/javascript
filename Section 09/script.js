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
  fri: { open: op, close: cl },
} = openingHours;

console.log(op, cl);

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
