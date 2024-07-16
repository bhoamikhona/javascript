/************************************************************************/
/**************** EXPORTING AND IMPORTING IN ES6 MODULES ****************/
/************************************************************************/
console.log(
  `/*************************** EXPORTING MODULE ***************************/`
);

/* console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
} */

/***********************************************************************/
/********************** TOP-LEVEL AWAIT (ES 2022) **********************/
/***********************************************************************/

/* console.log('Exporting Module');

// Adding a blocking code to see that the importing module will wait for
// this to finish
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const x = 0;
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
} */
