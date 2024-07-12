// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log(`Importing module`);

// this will basically create a namespace for all the values that is exported from shoppingCart module
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

// import add from './shoppingCart.js';
// add('pizza', 2);

import add, {
  addToCart,
  cart,
  totalPrice as price,
  tq,
} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 3);

// to see the live connection between modules
console.log(cart);
