// ?---------------------------------------------
// ? Example 1: Exploring Property Descriptors
// ?---------------------------------------------

console.log(Math.PI);
// * Prints: 3.141592653589793

// ! Even if you try to overwrite Math.PI — it won't change
Math.PI = 5;

console.log("After changing", Math.PI);
// * Still prints: 3.141592653589793
// ! Because `Math.PI` is a read-only property

// ? Let's inspect the property descriptor for Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

/*
 * Prints:
 * {
 *   value: 3.141592653589793,
 *   writable: false,       // ❌ Can't modify value
 *   enumerable: false,     // 🚫 Won't show up in loops
 *   configurable: false    // ❌ Can't delete or reconfigure
 * }
 */


// ?---------------------------------------------
// ? Example 2: Custom Object Property Descriptors
// ?---------------------------------------------

const coffee = {
  name: "hazelnut",
  price: "200",
  isAvailable: true,
};

// * Get all property descriptors at once
console.log(Object.getOwnPropertyDescriptor(coffee));
// * Prints: undefined
// ! Because you must specify a property name

// ✅ Correct way
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));
/*
 * Prints:
 * {
 *   value: 'hazelnut',
 *   writable: true,       // ✅ Can modify
 *   enumerable: true,     // ✅ Will show in loops
 *   configurable: true    // ✅ Can delete or redefine
 * }
 */


// ? Loop through all key–value pairs
for (let [key, value] of Object.entries(coffee)) {
  console.log(`${key} : ${value}`);
}
/*
 * Prints:
 * name : hazelnut
 * price : 200
 * isAvailable : true
 */


// ?---------------------------------------------
// ? Example 3: Changing Property Descriptor
// ?---------------------------------------------

Object.defineProperty(coffee, "name", {
  writable: false,   // ❌ Can't modify
  enumerable: false, // 🚫 Won't show in loops
});

// * Check descriptor again
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));
/*
 * {
 *   value: 'hazelnut',
 *   writable: false,
 *   enumerable: false,
 *   configurable: true
 * }
 */


// ? Loop through again
for (let [key, value] of Object.entries(coffee)) {
  console.log(`${key} : ${value}`);
}
/*
 * Prints only:
 * price : 200
 * isAvailable : true
 *
 * ✅ `name` is hidden because enumerable = false
 */


// ?---------------------------------------------
// ? Summary:
// ?---------------------------------------------
//
// * writable     → Can the value be changed?
// * enumerable   → Will it appear in loops (Object.keys, for..in)?
// * configurable → Can we delete or redefine the property?
//
// ✅ Object.defineProperty() lets you finely control how a property behaves!
//
