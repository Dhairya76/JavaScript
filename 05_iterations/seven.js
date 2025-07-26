const my_nums = [1, 2, 3];

// * Using reduce to calculate the sum of all numbers in the array
const total = my_nums.reduce((acc, currval) => {
  console.log(`acc: ${acc} and currval: ${currval}`); // * Logs the state of accumulator and current value
  return acc + currval; // * Adds current value to accumulator
}, 0); // * Initial value of accumulator is 0

// ? What gets printed during reduce execution:
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3

console.log(total);
// * Prints: 6

// notes reduce() is used when you want to boil down an array to a single value (e.g., sum, product, object, etc.)

// * Shopping cart example with reduce
const cart = [
  { item: "JS Course", price: 2999 },
  { item: "SQL Course", price: 1999 },
  { item: "Python Course", price: 4999 },
  { item: "ML Course", price: 3999 },
];

// * Calculate total price of all items in the cart
const cart_price_total = cart.reduce((acc, item) => {
  return item.price + acc; // * Adds each item's price to the running total
}, 0); // * Initial accumulator value is 0

console.log(cart_price_total);
// * Prints: 13996

// notes Use reduce for totals, grouping, counting, and combining complex structures

// TODO Try adding quantity to each item and calculate a weighted total (price * quantity)
// TODO Format the total with currency (e.g., ₹13996 → ₹13,996)

// ! Be cautious with reduce — avoid making it overly complex inside the callback
