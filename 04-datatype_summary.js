// Primitive Data Types
// ? Primitive data types are immutable (cannot be changed) and stored directly in memory.

// * Number – Represents numeric values (e.g., 10, 3.14, -42).

//  *String – Represents textual data (e.g., "Hello", 'World').

//  *Boolean – Represents true or false.

//  *Undefined – A variable that has been declared but not assigned a value.

//  *Null – Represents an intentional absence of any object value.

//  *BigInt – Used for very large integers (BigInt(12345678901234567890n)).

//  *Symbol – Used for creating unique identifiers.


let num = 42;        // Number
let str = "Hello";   // String
let isTrue = true;   // Boolean
let notDefined;      // Undefined
let empty = null;    // Null
let big = 12345678901234567890n; // BigInt
let unique = Symbol("id"); // Symbol


// Non-Primitive (Reference) Data Types
// Non-primitive types are objects and stored as references in memory.

//*  Object – A collection of key-value pairs.

// *Array – A special type of object used to store multiple values.

// *Function – A callable object.

// *Date – Used to handle dates and times.

// *RegExp – Represents regular expressions.

// *Map and Set – Used for key-value pairs and unique values, respectively.

let person = { name: "John", age: 30 };  // Object
let numbers = [1, 2, 3, 4, 5];           // Array
let greet = function() { console.log("Hi!"); }; // Function
let now = new Date(); // Date
let regex = /hello/i; // RegExp
let myMap = new Map(); // Map
let mySet = new Set(); // Set


// Feature	               |             Primitive Data Types	                  |         Non-Primitive Data Types
// Storage	               |            Stored directly in memory	              |         Stored as references (heap memory)
// Mutability	           |           Immutable (values cannot be changed)	      |         Mutable (values can be modified)
// Copy Behavior	       |          Copied by value	                          |         Copied by reference