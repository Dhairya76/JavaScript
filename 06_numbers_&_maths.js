const score = 400;
console.log(score); // * Simple number declaration and output

const balance = new Number(100);
console.log(balance); // * Prints [Number: 100] — using the Number object instead of primitive

// ? Convert to string and get its length
console.log(balance.toString()); // * Outputs: "100"
console.log(balance.toString().length); // * Outputs: 3 (length of the string "100")

// ? Fix to 2 decimal places
console.log(balance.toFixed(2)); // * Outputs: "100.00"

const otherNumber = 1123.8966;

// ? toPrecision formats the number to 3 significant digits
console.log(otherNumber.toPrecision(3)); // * Outputs: "1.12e+3" — scientific notation

// ! Example error in original comment: it didn't match value
// console.log(otherNumber.toPrecision(3)); // * Outputs: "124" for 123.8966
// console.log(otherNumber.toPrecision(3)); // * Outputs: "23.9" for 23.8966

const hundreds = 1000000;

// ? Converts number to locale-specific string representation
console.log(hundreds.toLocaleString()); // * Outputs: "1,000,000" (US locale by default)

// ------------------------------------------------------------------------------------
// ! MATHS SECTION
// ------------------------------------------------------------------------------------

console.log(
  " ---------------------------------- MATHS --------------------------------------------------------"
);

// ? Math.abs() returns absolute value
console.log(Math.abs(-7)); // * Outputs: 7

// ? Math.round() rounds to nearest integer
console.log(Math.round(4.6)); // * Outputs: 5

// ? Math.ceil() rounds up to nearest integer
console.log(Math.ceil(4.2)); // * Outputs: 5

// ? Math.floor() rounds down to nearest integer
console.log(Math.floor(4.9)); // * Outputs: 4

// ? Math.min() returns the smallest value
console.log(Math.min(4, 9, 3, 1, 5, 0)); // * Outputs: 0

// ? Math.max() returns the largest value
console.log(Math.max(4, 9, 3, 1, 5, 0)); // * Outputs: 9

// ? Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // * Example: 0.472938472

// ? Multiply to scale range (0–10)
console.log(Math.random() * 10); // * Example: 7.472938472

// ? Generate random number between 1 and 10 (inclusive)
console.log(Math.floor(Math.random() * 10 + 1)); // * Example: 8

const min = 10;
const max = 20;

// ? Generate random number between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // * Example: 17
