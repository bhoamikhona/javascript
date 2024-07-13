/************************************************************************/
/**************** EXPORTING AND IMPORTING IN ES6 MODULES ****************/
/************************************************************************/
console.log(
  `/*************************** EXPORTING MODULE ***************************/`
);

console.log('Exporting Module');

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
}
