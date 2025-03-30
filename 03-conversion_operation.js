// ? Declaring two variables with different data types
let score = 33;            // * Number data type
let score2 = "33";         // * String data type

console.log(typeof score);  // * Output: "number"
console.log(typeof score2); // * Output: "string"

// =========================
// ? Converting a string number to an actual number
// =========================
let num_conversion = Number(score2);
console.log(typeof num_conversion); // * Output: "number"

// =========================
// ?  Converting Alphanumeric String to a Number
// =========================
let alphanumeric = "341dbvc";
console.log("Value before conversion:", alphanumeric);     // * Output: "341dbvc"
console.log("Type before conversion:", typeof alphanumeric); // * Output: "string"

let alphanumeric_conversion = Number(alphanumeric);
console.log("Value After conversion:", alphanumeric_conversion); // * Output: NaN (Not a Number)
console.log("Type After conversion:", typeof alphanumeric_conversion); // * Output: "number" (NaN is still a number)

// =========================
// ? Converting Null to a Number
// =========================
let null_value = null;
console.log("Value before conversion:", null_value);     // * Output: null
console.log("Type before conversion:", typeof null_value); // * Output: "object" (A known JavaScript quirk)

let null_value_conversion = Number(null_value);
console.log("Value After conversion:", null_value_conversion); // * Output: 0
console.log("Type After conversion:", typeof null_value_conversion); // * Output: "number"

// =========================
// ? Converting Undefined to a Number
// =========================
let undefined_value = undefined;
console.log("Value before conversion:", undefined_value);     // * Output: undefined
console.log("Type before conversion:", typeof undefined_value); // * Output: "undefined"

let undefined_value_conversion = Number(undefined_value);
console.log("Value After conversion:", undefined_value_conversion); // * Output: NaN
console.log("Type After conversion:", typeof undefined_value_conversion); // * Output: "number"

// =========================
// ? Boolean Conversion
// =========================
// ✅ true → 1
// ✅ false → 0
// ✅ Empty string ("") → false
// ✅ Non-empty string (e.g., "Steve") → true

let is_logged_in = 1;
let boolean_conversion = Boolean(is_logged_in);
console.log(boolean_conversion); // * Output: true

let is_logged_in_string = "";
let boolean_conversion_string = Boolean(is_logged_in_string);
console.log(boolean_conversion_string); // * Output: false (empty string converts to false)

// =========================
// ? Number to String Conversion
// =========================
let a_number = 76;
let string_conversion = String(a_number);
console.log(string_conversion); // * Output: "76"
console.log(typeof string_conversion); // * Output: "string"
