// * ------------------- FOR..OF LOOP ------------------------

// ? for..of is used to iterate over **iterables** like arrays, strings, maps, sets, etc.
// ? It gives direct access to the values (not keys or indices)

const arr = [1, 2, 3, 4, 5, 6];

for (const element of arr) {
  console.log(`Element is ${element}`);
}

// * Output:
// Element is 1
// Element is 2
// Element is 3
// Element is 4
// Element is 5
// Element is 6

// ? No need for manual indexing or increment — for..of handles it


// * ------------------- FOR..OF with STRING ------------------------

const string = "Captain America";

for (const char of string) {
  console.log(`Letter is ${char}`);
}

// * Output:
// Letter is C
// Letter is a
// Letter is p
// Letter is t
// Letter is a
// Letter is i
// Letter is n
// Letter is
// Letter is A
// Letter is m
// Letter is e
// Letter is r
// Letter is i
// Letter is c
// Letter is a

// ? Strings are also iterable character-by-character


// * ------------------- FOR..OF with MAP ------------------------

const map = new Map();

map.set("Asgard", "Thor");
map.set("Leader", "Captain America");
map.set("Avengers", "Iron Man");
map.set("Asgard", "Thor"); // ? Duplicate key, ignored (overwrites previous value)

console.log("Map", map);

// * Output:
// Map(3) {
//   'Asgard' => 'Thor',
//   'Leader' => 'Captain America',
//   'Avengers' => 'Iron Man'
// }

for (const pair of map) {
  console.log(pair); // * Each element is an array: [key, value]
}

// * Output:
// [ 'Asgard', 'Thor' ]
// [ 'Leader', 'Captain America' ]
// [ 'Avengers', 'Iron Man' ]

for (const [key, hero] of map) {
  console.log(`${key} : ${hero}`); // * Destructuring key-value pairs
}

// * Output:
// Asgard : Thor
// Leader : Captain America
// Avengers : Iron Man


// * ------------------- FOR..OF with OBJECT ------------------------

const myobj = {
  game1: "cricket",
  game2: "football",
};

// ! Error: Objects are not iterable by default with for..of
// for (const [key, game] of myobj) {
//   console.log(`${key} : ${game}`);
// }

// ! Output:
// TypeError: myobj is not iterable

// ? To iterate over an object, use Object.entries() with for..of

for (const [key, value] of Object.entries(myobj)) {
  console.log(`${key} : ${value}`);
}

// * Output:
// game1 : cricket
// game2 : football

// ? Object.entries(obj) turns object into an array of [key, value] pairs
