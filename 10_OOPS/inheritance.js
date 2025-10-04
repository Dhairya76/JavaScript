// ------------------------------------------------------------------
// ✅ Base Class: User
// ------------------------------------------------------------------
class User {
  constructor(user_name) {
    this.user_name = user_name; // Assign user_name when creating object
  }

  // * Instance method (available to all objects created from User)
  logMe() {
    console.log(`Username is: ${this.user_name}`);
  }
}

// ------------------------------------------------------------------
// ✅ Derived Class: Teacher (extends User)
// ------------------------------------------------------------------
class Teacher extends User {
  constructor(user_name, email, password) {
    // ? super() calls the parent class constructor
    //   It initializes `user_name` in the User class
    super(user_name);

    // * Add Teacher-specific properties
    this.email = email;
    this.password = password;
  }

  // * Method only available to Teacher objects
  add_course() {
    console.log(`New Course was added by: ${this.user_name}`);
  }
}

// ------------------------------------------------------------------
// ✅ Create instances
// ------------------------------------------------------------------
const chai = new Teacher("chai", "chai@gmail", 1234);
chai.add_course(); 
// * Prints: New Course was added by: chai

const tea = new User("Masal Chai");

console.log(tea);
// * Prints: User { user_name: 'Masal Chai' }

tea.logMe(); 
// * Prints: Username is: Masal Chai

// ------------------------------------------------------------------
// ✅ Relationship Checks
// ------------------------------------------------------------------
console.log(chai === tea);            // * false → chai and tea are different objects
console.log(chai instanceof Teacher); // * true  → chai was created from Teacher
console.log(chai instanceof User);    // * true  → Teacher extends User, so chai is also a User
// ------------------------------------------------------------------

/*
📌 Key Takeaways:

1. `extends` → allows a class to inherit from another class.
   - Teacher inherits properties and methods from User.

2. `super()` → calls the parent constructor.
   - Must be called before using `this` in a subclass.

3. `instanceof` → checks if an object is an instance of a class 
   or its parent classes in the prototype chain.

   chai instanceof Teacher → true
   chai instanceof User    → true (because Teacher extends User)
   tea instanceof Teacher  → false

4. Equality (===) compares references, not content.
   - chai and tea are different objects → returns false.
*/
// ------------------------------------------------------------------
