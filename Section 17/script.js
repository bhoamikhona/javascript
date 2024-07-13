/************************************************************************/
/**************** EXPORTING AND IMPORTING IN ES6 MODULES ****************/
/************************************************************************/
console.log(
  `/*************************** IMPORTING MODULE ***************************/`
);

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(x); // ERROR: x is not defined

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// Importing everything using *
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Importing default value from shoppingCart.js
// import add from './shoppingCart.js';

// Mixed named and default imports
import add, {
  addToCart,
  totalPrice as price,
  tq,
  cart,
} from './shoppingCart.js';

add('pizza', 2);
add('apples', 5);
console.log(price);
console.log(cart);

/***********************************************************************/
/********************** TOP-LEVEL AWAIT (ES 2022) **********************/
/***********************************************************************/

console.log('Start fetching');

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);

console.log('Something');

/**
 * This function will basically do a fetch request to the same URL above,
 * but it will only return the very last post.
 */
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
