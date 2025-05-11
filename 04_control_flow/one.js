// ? ---------------------------- IF / ELSE CONDITIONS ----------------------------

const temperature = 40;

if (temperature < 50) {
  console.log("Temperature is less than 50"); // * Executes because condition is true
}
console.log("Temperature is greater than 50"); 
// * Executes regardless of the if block
// notes This line is outside the "if" block, so it runs independently

// ? To fix the above logic, we can use "else"
if (temperature < 50) {
  console.log("Temperature is less than 50"); // * Executes
} else {
  console.log("Temperature is greater than 50");
}
// * Only one block will execute based on the condition

const score = 200;

if (score > 100) {
  const power = "fly"; // notes Scoped only inside this block
  console.log(`User power is ${power}`); // * Prints: User power is fly
}

// console.log(`User power is ${power}`); 
// ! ReferenceError: power is not defined
// ! Because 'power' is declared with 'const' inside an if block (block-scoped)

const balance = 1000;

// ? You can write single-line if statements without curly braces, but it's not recommended
if (balance > 500) console.log("Balance is sufficient"), console.log("Test2");
// ! Not a recommended practice as it's less readable
// * Prints: Balance is sufficient
// * Prints: Test2

// ? if...else if...else ladder
if (balance < 500) {
  console.log("Less Than 500");
} else if (balance < 750) {
  console.log("Less Than 750");
} else if (balance < 900) {
  console.log("Less Than 900");
} else {
  console.log("Less than 1200");
}
// * Since balance is 1000, it prints: Less than 1200

// ? Logical AND (&&) operator - both conditions must be true
const user_logged_in = true;
const debit_card = true;

if (user_logged_in && debit_card) {
  console.log("Allowed to purchase on website"); // * Executes
}
// * Prints: Allowed to purchase on website

// ? Logical OR (||) operator - either condition can be true
const logged_in_from_google = false;
const logged_in_from_email = true;

if (logged_in_from_google || logged_in_from_email) {
  console.log("User is logged in"); // * Executes
}
// * Prints: User is logged in
