// ? What is a Singleton?
// * In JS, Singleton refers to a single instance of an object.
// * You can create a singleton using Object.create or constructor patterns.

// ? Object Literals

const sym = Symbol("symbol1"); // * Creating a unique Symbol

const js_user = {
  name: "Thor",
  "Full name": "Thor Odinson", // ! Needs bracket notation for access
  age: 123,
  [sym]: "sym1", // * Using symbol as a key
  location: "Asgard",
  teams: ["Avengers", "Guardians"],
};

console.log("Name is", js_user.name);
console.log("Another way to access is Name is", js_user["name"]);
// * Both dot and bracket notation work here

// ? Accessing properties with space in key - bracket notation ONLY
console.log("Full name is", js_user["Full name"]);

// ? Symbol keys don't show up in normal console.log unless explicitly accessed
console.log("Symbol Value is", js_user);
// * Symbol will show as: [Symbol(symbol1)]: 'sym1'

// ? Data type inspection (symbol will still appear)
console.log("Symbol Value is", js_user);

// ? Updating object values
console.log("Age is", js_user["age"]);
js_user.age = 126;
console.log("Age is", js_user["age"]);

// ! Freezing object prevents modifications
// Object.freeze(js_user);

// ? Adding methods to object
js_user.greeting = function () {
  console.log("I am function");
};
console.log(js_user.greeting()); // * I am function

js_user.greeting2 = function () {
  console.log(`Hello, ${this.name}, I am groot`);
};
console.log(js_user.greeting2()); // * Hello, Thor, I am groot

// ? Another way to create object (Singleton style)
const user = new Object();
user.id = "1234";
user.name = "Tony";
user.is_logged_in = true;

console.log(user);
// * Output: { id: '1234', name: 'Tony', is_logged_in: true }

// ? Nested Object example
const another_user = {
  email: "tony@gmailcom",
  full_name: {
    user_full_name: {
      first_name: "Tony",
      last_name: "Stark",
    },
  },
};

console.log(another_user);
// * Access: another_user.full_name.user_full_name.first_name

// ? Merging objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2); // ? Traditional way

const obj3 = { ...obj1, ...obj2 }; // * Modern way using spread
console.log(obj3);
// * Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// ? Array of Objects
const array_of_objects = [
  { id: 1, is_logged_in: true },
  { id: 2, is_logged_in: true },
  { id: 3, is_logged_in: false },
  { id: 4, is_logged_in: false },
];

console.log(array_of_objects[0].id); // * Accessing first object’s ID

// ? Object Utility Methods

console.log(Object.keys(user));
// * Output: [ 'id', 'name', 'is_logged_in' ]

console.log(Object.values(user));
// * Output: [ '1234', 'Tony', true ]

console.log(Object.entries(user));
// * Output: [ ['id', '1234'], ['name', 'Tony'], ['is_logged_in', true] ]

console.log(user.hasOwnProperty("is_logged_in"));
// * Output: true → confirms key existence

const course = {
    name: "JS",
    price: 999,
    instructor: "Steve",
  };
  
  // ? Object Destructuring
  const { instructor } = course; 
  // * This extracts the 'instructor' key directly from the object
  // * Equivalent to: const instructor = course.instructor;
  
  console.log("Instructor is", instructor); 
  // * Output: Instructor is Steve
  