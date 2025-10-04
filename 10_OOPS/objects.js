// * Function Declaration
function multiply_by_5(num) {
  return num * 5;
}

// ? In JS, functions are also objects.
//   You can attach custom properties to them.
multiply_by_5.power = 2;

console.log(multiply_by_5(5));     // * Prints: 25
console.log(multiply_by_5.power);  // * Prints: 2

// - The prototype object is created only for functions
//   (used when the function is called as a constructor with "new").
console.log(multiply_by_5.prototype); // * Prints an empty object {}

// ----------------------------------------------------------------------

// * Constructor Function
function create_user(user_name, score) {
  this.user_name = user_name;
  this.score = score;
}

// * Adding methods to the prototype (shared by all instances)
create_user.prototype.increment = function () {
  this.score++;
};

create_user.prototype.print_me = function () {
  console.log(`I am : ${this.user_name}`);
};

create_user.prototype.print_score = function () {
  console.log(`Score is : ${this.score}`);
};

// ! If we forget "new", the constructor function will not create a new object.
// const Thor = create_user("Thor", 100);   // ❌ Wrong
// const Loki = create_user("Loki", 99);    // ❌ Wrong

// ? Correct → Use "new" keyword
const Thor = new create_user("Thor", 100);
const Loki = new create_user("Loki", 99);

// * Using prototype methods
Thor.print_me();     // I am : Thor
Thor.increment();    // increases Thor's score by 1
Thor.print_score();  // Score is : 101


// ----------------------------------------------------------------------
/*
📌 What happens behind the scenes when you use "new":

1. A new empty object is created.
   Example: {}

2. This new object is linked to the constructor's prototype.
   - i.e. newObj.__proto__ = ConstructorFunction.prototype

3. The constructor function is executed with "this" bound to the new object.
   - Example: this.user_name = "Thor" → { user_name: "Thor" }

4. If the constructor doesn’t explicitly return an object,
   the new object is returned automatically.

This is why prototype methods (increment, print_me, etc.)
become available on all instances created with "new".
*/
// ----------------------------------------------------------------------


/* Here's what happens behind the scenes when the new keyword is used:
 A new object is created: The new keyword initiates the creation of a new JavaScript object.
  A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype. 
  The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
   The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned. */