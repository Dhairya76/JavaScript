// * Creating an object using Object Literal
const user = {
  user_name: "Thor",
  login_count: 8,
  signed_in: true,

  get_user_details: function () {
    // - Here "this" refers to the current object (user)
    // console.log("Got user details from database");
    // console.log(`Username : ${this.user_name}`);
    console.log(this); // ? Will print the full object with its properties
  },
};

// * Accessing object properties directly
console.log(user.user_name); // * Prints: Thor

// * Calling the method defined inside the object
console.log(user.get_user_details()); 
// ? Prints the "user" object and returns undefined 
// because no explicit return is inside get_user_details()


// * Constructor Function - Template for creating multiple users
function User(user_name, login_count, signed_in) {
  // * Assigning values to the object being created
  this.user_name = user_name;
  this.login_count = login_count;
  this.signed_in = signed_in;

  // - "return this" is NOT needed here because
  //   by default constructors return the object instance
  // return this;
}

// ! If you call it without "new" keyword, 
//   it won't create a new object, instead 
//   it will override global "this" (bad practice)

// const user_one = User("Tony", 10, true);
// const user_two = User("Steve", 11, false);
// ! The above will override user_one with user_two


// ? Correct way → use "new" keyword to create unique instances
const user_one = new User("Tony", 10, true);
const user_two = new User("Steve", 11, false);

console.log(user_one); // * User { user_name: 'Tony', login_count: 10, signed_in: true }
console.log(user_two); // * User { user_name: 'Steve', login_count: 11, signed_in: false }


// Notes Checking the constructor of an object
console.log(user_one.constructor);
// ? Prints: [Function: User]
// - Meaning: user_one was created using the "User" constructor function


// Notes instanceof Operator
console.log(user_one instanceof User); // true
console.log(user_two instanceof User); // true
console.log(user instanceof User);     // false (because it was created as an object literal)

// Notes instanceof checks whether an object is created by a specific constructor 
//   (by looking up its prototype chain).
