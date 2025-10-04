// ------------------------------------------------------------------
// ✅ Base Class: User
// ------------------------------------------------------------------
class User {
  constructor(user_name) {
    this.user_name = user_name; // * Set the username when object is created
  }

  // * Instance method → available on objects created from User
  logMe() {
    console.log(this.user_name);
  }

  // * Static method → belongs to the class itself, not the objects
  //   Can only be called using User.createId(), not on an instance
  static createId() {
    return `123`;
  }
}

const Avengers = new User("Avengers");

// console.log(Avengers.createId()); 
// ! ❌ Error: createId is a static method → it cannot be accessed on instances
// * Static methods are meant to be utility functions tied to the class itself,
//   not to a specific object.

// ------------------------------------------------------------------
// ✅ Subclass: Teacher (extends User)
// ------------------------------------------------------------------
class Teacher extends User {
  constructor(user_name, email) {
    // * super() calls the parent constructor (User)
    super(user_name);
    this.email = email; // Add Teacher-specific property
  }
}

const samsung = new Teacher("Samsung", "samsung@apple.com");

console.log(samsung);
// * Prints: Teacher { user_name: 'Samsung', email: 'samsung@apple.com' }

samsung.logMe(); 
// * Works fine → Inherited instance method from User

// console.log(samsung.createId());
// ! ❌ Error again: createId is static → can’t be accessed via an object
// * Static methods are only available on the class (User.createId() or Teacher.createId())

// ------------------------------------------------------------------
/*
📌 Key Takeaways:

1. Instance Methods:
   - Defined normally inside a class (e.g., logMe).
   - Accessible to every object created from the class.
   - Example: samsung.logMe()

2. Static Methods:
   - Declared with the `static` keyword.
   - Belong to the class itself, not to the instance.
   - Useful for utility/helper functions (e.g., generate IDs, format data).
   - Example: User.createId()

3. Inheritance with static methods:
   - Static methods are inherited by subclasses too.
   - Example: Teacher.createId() ✅ works
   - But: const t = new Teacher(...); t.createId() ❌ error

4. Error in this code:
   - Trying to call createId() on `Avengers` or `samsung` (instances).
   - Should call `User.createId()` or `Teacher.createId()`.
*/
// ------------------------------------------------------------------
