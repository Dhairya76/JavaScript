const my_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ? Need to add 10 to each number
const my_new_nums = my_nums.map((num) => num + 10);

console.log(my_new_nums);
// * Prints: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// notes map() creates a new array with transformed values

// * Chaining map and filter methods
const chain = my_nums
  .map((num) => num * 10) // * Multiply each number by 10
  .map((num) => num + 1) // * Add 1 to each result
  .filter((num) => num >= 40); // * Keep only values >= 40

console.log(chain);
// * Prints: [41, 51, 61, 71, 81, 91, 101]

// notes Method chaining allows step-by-step transformation
// notes You can break each .map() or .filter() into separate lines for readability

// TODO Try reducing the chain to a single map or custom function if performance matters

// ! Be cautious: chaining too many methods can reduce readability if overused
