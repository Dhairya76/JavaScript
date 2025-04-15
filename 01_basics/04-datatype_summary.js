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
// Storage	               |             Stored directly in memory	              |         Stored as references (heap memory)
// Mutability	           |             Immutable (values cannot be changed)	  |         Mutable (values can be modified)
// Copy Behavior	       |             Copied by value	                      |         Copied by reference




// ------------------------------------ MEMORY ALLOCATION --------------------------------


// Stack Memory Example (Primitives)
let a = 10;  // Stored in stack
let b = a;   // A copy of 'a' is created in stack
b = 20;
console.log(a); // Output: 10 (original remains unchanged)
console.log(b); // Output: 20

// Heap Memory Example (Reference Types)
let obj1 = { name: "John" }; // Object stored in heap, reference stored in stack
let obj2 = obj1;  // 'obj2' stores reference to same heap memory
obj2.name = "Doe"; // Modifying 'obj2' also modifies 'obj1'

console.log(obj1.name); // Output: "Doe"
console.log(obj2.name); // Output: "Doe"





// ? Definition:

// * Stack memory is used for storing primitive values and function execution contexts.

// * Heap memory is used for storing objects and reference types.

// ? Speed:

// * Stack memory is faster because it follows a Last In, First Out (LIFO) structure.

// * Heap memory is slower as it requires dynamic allocation and garbage collection.

// ? Storage:

// * Primitive data types like Number, String, Boolean, null, undefined, BigInt, and Symbol are stored in the stack.

// * Objects, arrays, and functions are stored in the heap, while their references are stored in the stack.

// ? Access:

// * Stack variables are accessed directly, making them efficient.

// * Heap variables are accessed through references, which makes operations slightly slower.

// ? Mutability:

// * Primitive values in the stack are copied when assigned to a new variable, so modifying one does not affect the other.

// * Objects in the heap are referenced, meaning multiple variables can point to the same object, and modifying one affects all references.

// ? Memory Management:

// * The stack automatically clears unused values once the function execution is completed.

// * The heap requires garbage collection to remove unused objects, which can cause performance overhead.