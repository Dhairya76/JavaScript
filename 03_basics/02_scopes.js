// ? -------------------------------- SCOPES ----------------------------------

// ? ----------------- Global Scope -----------------

// var a = 10; // ! Not Recommended to use var
let a = 10;
const b = 20;
let c = 30;

console.log(a); // * Prints: 10
console.log(b); // * Prints: 20
console.log(c); // * Prints: 30

// ? No issues so far — all variables are in the global scope

// ? ----------------- Block Scope -----------------

if (true) {
  // ? Variables declared with let/const are limited to this block
  let a = 1; // ? Shadows the global 'a'
  const e = 2;
  let f = 3;

  console.log("Inner:", a); // * Prints: 1
}

// console.log(d); // ! Error: d is not defined (if let/const was used)
// ? With var, this would've worked and caused bugs due to var being function-scoped

// console.log(e); // ! Error: e is not defined
// console.log(f); // ! Error: f is not defined

// ? ----------------- Nested Scope -----------------

console.log("----------------- Nested Scope -----------------");

function one() {
  const username = "Thor";

  function two() {
    const team = "Avengers";
    console.log(username); // * Prints: Thor — has access to parent's scope
  }

  // console.log(team); // ! Error: team is not defined outside 'two'
  two();
}

one();

// ? ----------------- Same Behavior in if-else -----------------

if (true) {
  const username = "Thor";

  if (true) {
    const team = "Avengers";
    console.log(username + " is a part of " + team); 
    // * Prints: Thor is a part of Avengers ✅
  }

  // console.log(team); // ! Error: team is not defined outside inner if
}

// console.log(username); // ! Error: username is block-scoped

// ? ----------------- Function Declarations vs Function Expressions -----------------

add_one(3); // * Works fine ✅

function add_one(num) {
  return num + 1;
}

// add_two(5); // ! Error: Cannot access 'add_two' before initialization ❌
const add_two = function (num) {
  // * Function Expression — assigned to a variable
  return num + 2;
};
