// --------------------------------------------------------------
// Function that sets only user_name
// --------------------------------------------------------------
function set_user_name(user_name) {
  this.user_name = user_name;  // assigns user_name to current context (this)
  console.log("Called");
}

// --------------------------------------------------------------
// Function that creates a new user with user_name, email, password
// --------------------------------------------------------------
function create_user(user_name, email, password) {
  // ! Problem:
  //   If we call set_user_name(user_name) directly,
  //   then inside set_user_name, `this` does NOT point to our
  //   create_user object. Instead, it points to:
  //     - global object (window in browsers, global in Node)
  //   So `this.user_name` never gets assigned to the new object.

  // set_user_name(user_name);   // ❌ Wrong (loses context)

  // ------------------------------------------------------------
  // ✅ Solution:
  // Use `.call(this, user_name)`
  //   - `.call()` allows us to explicitly set the value of `this`
  //   - Here, we pass the current object being constructed (this)
  //   - This ensures `user_name` is assigned correctly to our object
  // ------------------------------------------------------------
  set_user_name.call(this, user_name);

  // Assign other properties normally
  this.email = email;
  this.password = password;
}

// --------------------------------------------------------------
// Creating a new user using `new` keyword
// --------------------------------------------------------------
const chai = new create_user("chai", "chai@google.com", 1234);

console.log(chai);

// * Prints:
//   create_user {
//      user_name: 'chai',
//      email: 'chai@google.com',
//      password: 1234
//   }
