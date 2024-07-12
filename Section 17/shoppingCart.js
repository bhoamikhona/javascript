// Exporting Module
console.log(`Exporting module`);

// variable that are declared in this module - they are scoped to this module
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// this almost like exporting an object from this module
export { totalPrice, totalQuantity as tq };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
