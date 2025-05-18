// ? -------------------- for..in loop on Object --------------------

const myobj = {
  game1: "cricket",
  game2: "football",
  game3: "hockey",
};

for (const key in myobj) {
  console.log(myobj[key]); // * Access values using keys
}

// * Output:
// cricket
// football
// hockey

// ? -------------------- Difference: for..in vs for..of --------------------
// ? for..in works on enumerable properties (keys) - suitable for objects
// ? for..of works on iterable elements like arrays, strings, maps, etc.


// ? -------------------- for..in loop on Array --------------------

const ar = ["a", "b", "c", "d", "e"];

for (const key in ar) {
  console.log(key); // * Outputs indices (as strings) of array elements
}

// * Output:
// 0
// 1
// 2
// 3
// 4

for (const key in ar) {
  console.log(ar[key]); // * Accesses the value at each index
}

// * Output:
// a
// b
// c
// d
// e

// ? Note: for..in is not ideal for arrays because it iterates over keys, not values.
// ? Use for..of for cleaner value iteration:

for (const val of ar) {
  console.log(val); // * Directly prints values
}

// * Output:
// a
// b
// c
// d
// e


// ? -------------------- for..in does NOT work on Map --------------------

const map = new Map();

map.set("Asgard", "Thor");
map.set("Leader", "Captain America");
map.set("Avengers", "Iron Man");
map.set("Asgard", "Thor"); // * Duplicate key, will not be added again

for (const key in map) {
  console.log(key); // ! Nothing prints — Map is not enumerable like plain objects
}

// * Output: (Nothing)

// ? Correct way: Use for..of with Map.entries()

for (const [key, value] of map) {
  console.log(`${key} -> ${value}`);
}

// * Output:
// Asgard -> Thor
// Leader -> Captain America
// Avengers -> Iron Man
