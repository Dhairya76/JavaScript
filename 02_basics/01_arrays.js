// ? Arrays

const my_arr = [0, 1, 2, 3, 4];

const heros = ["Iron Man", "Captain America"];

const new_arr = new Array(1, 2, 34, 56);

console.log("First array", my_arr);
console.log("Second array", heros);
console.log("Third array", new_arr);

// * Output:
// * First array [ 0, 1, 2, 3, 4 ]
// * Second array [ 'Iron Man', 'Captain America' ]
// * Third array [ 1, 2, 34, 56 ]

// ? Array Methods

heros.push("Thor"); // * Adds "Thor" to the end
console.log("Updated Array after push", heros);
// * Output: [ 'Iron Man', 'Captain America', 'Thor' ]

heros.pop(); // * Removes the last element ("Thor")
console.log("Updated Array after pop", heros);
// * Output: [ 'Iron Man', 'Captain America' ]

my_arr.unshift(76); // ! Adds element at the beginning (❗ not performant for large arrays)
console.log("Unshifted array", my_arr);
// * Output: [ 76, 0, 1, 2, 3, 4 ]

console.log("Original Array", new_arr);
// * Output: [ 1, 2, 34, 56 ]

new_arr.shift(); // * Removes the first element (1)
console.log("Shifted Array", new_arr);
// * Output: [ 2, 34, 56 ]

// ? Check presence and index
console.log(my_arr.includes(76)); // * true → 76 exists in the array
console.log(my_arr.indexOf(76)); // * 0 → index of 76
console.log(my_arr.indexOf(6)); // * -1 → 6 doesn't exist in array

// ? Joining array
const joined_arr = my_arr.join(); // * Converts array to comma-separated string
console.log("Array is", joined_arr); // * "76,0,1,2,3,4"
console.log(typeof joined_arr); // * string

// ? Slice vs Splice

const original_array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("A", original_array);
// * Output: [1, 2, 3, 4, 5, 6, 7, 8]

// ! SLICE: Returns selected elements as a **shallow copy**, does NOT modify original array
const slice_array = original_array.slice(1, 4); // * Extracts index 1 to 3 (4 is not included)
console.log("Sliced Array", slice_array); // * [2, 3, 4]
console.log("Original Array After Slice", original_array);
// * Still intact → [1, 2, 3, 4, 5, 6, 7, 8]

// ! SPLICE: Removes elements from original array and returns them → modifies the original array
const splice_array = original_array.splice(1, 4);
// * Removes 4 elements starting from index 1 → [2, 3, 4, 5]
console.log("Spliced Array", splice_array);
// * Output: [2, 3, 4, 5]
console.log("Original Array After Splice", original_array);
// * Output: [1, 6, 7, 8] → original array is changed

const marvel = ["Thor", "Captain America", "Iron Man"];
const dc = ["Batman", "SuperMan", "Aqua Man"];

// ! Incorrect way to merge arrays
marvel.push(dc);
// * This adds the `dc` array as a **nested array** (i.e., 2D array)
console.log(marvel);
// * Output: [ 'Thor', 'Captain America', 'Iron Man', [ 'Batman', 'SuperMan', 'Aqua Man' ] ]

// ? Correct way to merge arrays
const super_humans = marvel.concat(dc);
// * Returns a new array with `dc` elements appended
console.log(super_humans);
// * Output: [ 'Thor', 'Captain America', 'Iron Man', 'Batman', 'SuperMan', 'Aqua Man' ]

// ? Using Spread Operator (preferred modern approach)
const all_heros = [...marvel, ...dc];
// * Same result as concat, but cleaner and more flexible
console.log(all_heros);
// * Output: [ 'Thor', 'Captain America', 'Iron Man', 'Batman', 'SuperMan', 'Aqua Man' ]

// ? Flattening Arrays

const nested = [1, 2, 3, [4, 5], 6, 7, [8, 1, [3, 4]]];

// ! Use flat() to convert nested arrays into a single-level array
const flatten = nested.flat(Infinity);
// * `Infinity` ensures full depth flattening
console.log("Nested", nested);
// * Output: [1, 2, 3, [4, 5], 6, 7, [8, 1, [3, 4]]]

console.log("Flatten", flatten);
// * Output: [1, 2, 3, 4, 5, 6, 7, 8, 1, 3, 4]

// ? Array Checks and Conversions

console.log(Array.isArray("Thor"));
// * false → String is NOT an array

console.log(Array.from("Thor"));
// * Converts string to array of characters → [ 'T', 'h', 'o', 'r' ]

console.log(Array.from({ name: "Thor" }));
// * [] → returns empty array because it's not iterable
// ! Interesting case: `Array.from()` requires array-like or iterable objects

// ? Creating Arrays from arguments

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
// * Output: [100, 200, 300]
// * Creates array from individual values (like `new Array()` but safer)
