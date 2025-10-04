let my_name = "Virat";

console.log(my_name.length);
// * Prints 5

// ? What if we add more spaces in the end
my_name = "Virat     ";
console.log(my_name.length);
// * Prints 10
// - Spaces are also counted in the string length

// ? Now I want a method called "trueLength" which ignores trailing spaces
// * We'll later add this method to String's prototype

// ----------------------------------------------------------------------
// Example: Objects, Arrays, Functions → all in JS are Objects
// ----------------------------------------------------------------------

let my_heros = ["Thor", "Iron Man"];

let hero_power = {
  thor: "hammer",
  iron_man: "Arc Reactor",

  getIronManPower: function () {
    console.log(`Iron Man's power is ${this.iron_man}`);
  },
};

// * Adding a method to Object.prototype (highest level in JS object chain)
//   Since arrays, objects, and functions all inherit from Object,
//   they will also have access to this method.
Object.prototype.air = function () {
  console.log("Air is everywhere");
};

// hero_power.air();   // * Prints "Air is everywhere"
// my_heros.air();     // * Prints "Air is everywhere"

// ----------------------------------------------------------------------
// Prototype Inheritance
// ----------------------------------------------------------------------

const user = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  make_video: true,
};

const teaching_support = {
  is_available: false,
};

const ta_support = {
  make_assignment: "JS",
  full_time: true,

  // - ta_support inherits from teaching_support
  __proto__: teaching_support,
};

// Teacher inherits from user
Teacher.__proto__ = user;

// ? Modern way (instead of __proto__)
// - teaching_support inherits from Teacher
Object.setPrototypeOf(teaching_support, Teacher);

// ----------------------------------------------------------------------
// Extending Built-in Objects (String)
// ----------------------------------------------------------------------

// * Adding a custom method `trueLength` to all strings
//   (useful for trimming spaces before measuring length)
String.prototype.trueLength = function () {
  console.log(`${this}`); // * Logs the original string
  console.log(`True Length is: ${this.trim().length}`);
};

let another_name = "Avengers    ";

another_name.trueLength();  // Prints string + its true length
my_name.trueLength();       // Works on previously defined my_name

"Captain America     ".trueLength(); // Also works directly on string literals

// ----------------------------------------------------------------------
/*
📌 Key Takeaways:

1. Everything in JS is an object
   - Arrays, functions, strings → all inherit from Object.

2. Prototype Inheritance
   - Objects can inherit properties/methods from other objects.
   - Old way: obj.__proto__
   - Modern way: Object.setPrototypeOf(obj, parentObj)

3. Extending Built-ins
   - We can add methods to built-in prototypes like String, Array, etc.
   - Example: String.prototype.trueLength()
   - ⚠️ Caution: Avoid overusing this in production as it may create conflicts.

4. Prototype Chain Example (for a String):
   "Virat" → String.prototype → Object.prototype → null
*/
// ----------------------------------------------------------------------
