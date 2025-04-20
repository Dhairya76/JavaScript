const user = {
  username: "Tony",
  price: 999,
  welcome_message: function () {
    console.log(`${this.username}, welcome to the team`); // ? 'this' refers to the current object
    console.log("Current context", this); // * Prints the whole user object as context
    // notes Useful for understanding what 'this' is pointing to at runtime
  },
};

// user.welcome_message(); // * Prints: Tony, welcome to the team

// ? Let's change the username and call the method again
// user.username = "Captain America";
// user.welcome_message(); // * Prints: Captain America, welcome to the team

console.log("Global Context", this); // * In Node.js, prints empty object `{}`
// notes In a browser, this would print the `window` object (important interview point)

// ? ---------------------------- Function vs Arrow Function ----------------------------

// Traditional function (function declaration)
// function chai() {
//   console.log("Inside function", this);
//   let username = "Nick";
//   console.log(this.username); // * undefined
  // notes 'this' inside a regular function refers to the global object (or undefined in strict mode)
// }

// Function expression
// const chai = function () {
//   console.log("Inside function", this);
//   let username = "Nick";
//   console.log(this.username); // * undefined
// };

// Arrow function
// const chai = () => {
//   console.log("Inside arrow function", this); // * {} (Inherits from surrounding context)
//   let username = "Nick";
//   console.log(this.username); // * undefined
  // notes Arrow functions don't have their own 'this'; they inherit from the parent context
// };

// chai(); // * Uncomment to test

// ? ---------------------------- Arrow Function Return Styles ----------------------------

const add_num = (num1, num2) => {
  return num1 + num2; // notes Explicit return style
};

const add_num_direct = (num1, num2) => ({ sum: num1 + num2 });
// notes Using parentheses to return an object directly without the return keyword
// notes If you use curly braces `{}` without parentheses, JS expects a function block instead

console.log(add_num(3, 4)); // * Prints: 7
console.log(add_num_direct(3, 4)); // * Prints: { sum: 7 }
