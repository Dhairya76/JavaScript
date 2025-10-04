// -----------------------------------------------------------------
// ✅ ES6 CLASS SYNTAX
// -----------------------------------------------------------------
class User {
  constructor(username, email, password) {
    // * The constructor method runs automatically
    //   whenever a new object is created with "new User()"
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // * Instance method: accessible to all objects created from User
  encryptPassword() {
    return `${this.password}abc`;
  }

  // * Another instance method
  changeName() {
    return `${this.username.toUpperCase()}`;
  }
}

// Create a new instance of User class
const chai = new User("chai", "chai@meta.com", 12345);

console.log(chai.encryptPassword()); // * Prints: 12345abc
console.log(chai.changeName());      // * Prints: CHAI
console.log(chai);                   // * User { username: 'chai', email: 'chai@meta.com', password: 12345 }


// -----------------------------------------------------------------
// 🚀 BEHIND THE SCENES: What actually happens
//   Classes are just "syntactic sugar" over constructor functions
// -----------------------------------------------------------------

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// * Methods are added to the prototype, not directly inside the object
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeName = function () {
  return `${this.username.toUpperCase()}`;
};

// Create a new instance using constructor function
const tea = new User("Tea", "tea@meta.ai", 12345);

console.log(tea.encryptPassword()); // * Prints: 12345abc
console.log(tea.changeName());      // * Prints: TEA
console.log(tea);                   // * User { username: 'Tea', email: 'tea@meta.ai', password: 12345 }


// -----------------------------------------------------------------
/*
📌 Key Takeaways:

1. ES6 `class` is just a cleaner way to write constructor functions.
   - Both create objects when used with `new`.

2. Methods defined inside `class` are actually placed on
   User.prototype (not copied into each object).

3. Benefits of prototype-based method sharing:
   - Saves memory (all instances share the same function reference).
   - Allows inheritance using prototype chain.

4. Example equivalence:
   class User { encryptPassword(){} } 
   ⇔
   User.prototype.encryptPassword = function(){}

So behind the scenes, both "chai" and "tea" objects behave the same.
*/
// -----------------------------------------------------------------
