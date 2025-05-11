// ? ------------------------ TRUTHY / FALSY CHECKS ------------------------

const email = [];

if (email) {
  console.log("Got the user"); 
  // * Prints Got the user
  // ? An empty array is considered a truthy value in JavaScript
} else {
  console.log("No user");
}

// ? If `email = ""` (empty string), it would be falsy and print "No user"
// ? If `email = []` (empty array), it's truthy, so "Got the user" is printed

// ! Falsy values in JS:
// ! false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ? Examples of truthy values:
// ? "0", "false", " ", [], {}, function(){}

// ? --------------------- CHECKING EMPTY ARRAY ---------------------

if (email.length === 0) {
  console.log("Array is empty");
  // * Prints "Array is empty" because .length of [] is 0
}

// ? --------------------- CHECKING EMPTY OBJECT ---------------------

const mail = {};

if (Object.keys(mail).length === 0) {
  console.log("Object is empty");
  // * Prints "Object is empty" because there are no keys in the object
}

// ? ------------------ NULLISH COALESCING OPERATOR (??) ------------------
// notes The ?? operator returns the right-hand side only if the left-hand side is null or undefined

let val1;

val1 = 5 ?? 10;
console.log(val1); // * 5 — 5 is not null/undefined

val1 = null ?? 10;
console.log(val1); // * 10 — null triggers the fallback

val1 = [] ?? 10;
console.log(val1); // * [] — array is not null/undefined

val1 = undefined ?? 10;
console.log(val1); // * 10 — fallback used due to undefined

val1 = undefined ?? 20 ?? 10;
console.log(val1); // * 20 — takes the first non-null/undefined value

// ! Unlike ||, ?? does NOT consider falsy values like 0, "", false — it only checks for null and undefined

// ? ------------------------ TERNARY OPERATOR ------------------------

const ice_tea_price = 100;

ice_tea_price >= 80
  ? console.log("Greater")  // * Executes this block because 100 >= 80 is true
  : console.log("Less");

// * Prints "Greater"

// notes Ternary syntax: condition ? true_block : false_block;
// notes Useful for inline conditional logic
