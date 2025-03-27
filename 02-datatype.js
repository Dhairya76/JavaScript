// 🔵 Declaring variables with different data types in JavaScript
let name = "Steve";        // 🟢 String data type
let age = 25;              // 🟢 Number data type
let isLoggedIn = true;     // 🟢 Boolean data type

// =========================
// 🟣 Data Types in JavaScript
// =========================

// 🔹 Number: Can store numeric values (safe range up to 2^53 - 1)
// 🔹 BigInt: Used for numbers beyond the safe integer limit
// 🔹 String: Represents text, enclosed in quotes (" " or ' ')
// 🔹 Boolean: Can hold only `true` or `false` values
// 🔹 Null: Represents an intentional absence of value (special standalone value)
// 🔹 Undefined: A variable that has been declared but not assigned a value
// 🔹 Symbol: Used to create unique and immutable values (often for object properties)
// 🔹 Object: A collection of key-value pairs (arrays, functions, etc., are also objects)

// =========================
// 🔥 Interesting Facts About typeof Operator
// =========================

console.log(typeof "Steve");       // 🟢 Output: "string" - Strings are enclosed in quotes
console.log(typeof age);           // 🟢 Output: "number" - All numeric values (integers & decimals) fall under 'number'
console.log(typeof null);          // 🔴 Output: "object" - A known JavaScript bug, `null` is technically a primitive but typeof returns "object"
console.log(typeof undefined);     // 🟢 Output: "undefined" - Indicates a variable that has been declared but not assigned a value
