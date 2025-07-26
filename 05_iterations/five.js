// ? -------------------- forEach with Anonymous Function --------------------

const coding = ["js", "ruby", "cpp", "python", "java"];

coding.forEach(function (item) {
  console.log(item); // * Prints each language name in the array
});

// * Output:
// js
// ruby
// cpp
// python
// java

// ? -------------------- forEach with Arrow Function --------------------

coding.forEach((item) => {
  console.log(item); // * Same result as above, using arrow function
});

// * Output:
// js
// ruby
// cpp
// python
// java

// ? -------------------- forEach with Named Function --------------------

function printMe(item) {
  console.log(item); // * Custom function passed to forEach
}

coding.forEach(printMe); // * Calls printMe for each item in the array

// * Output:
// js
// ruby
// cpp
// python
// java

// ? -------------------- forEach with item, index, and array --------------------

function printMe(item, index, arr) {
  console.log(item, index, arr); // * Shows current item, its index, and the full array
}

coding.forEach(printMe);

// * Output:
// js 0 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
// ruby 1 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
// cpp 2 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
// python 3 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
// java 4 [ 'js', 'ruby', 'cpp', 'python', 'java' ]

// ? -------------------- forEach on Array of Objects --------------------

const mycoding = [
  { language: "Javascript", extension: ".js" },
  { language: "Python", extension: ".py" },
  { language: "C++", extension: ".cpp" },
];

mycoding.forEach((ele) => {
  console.log(
    `Language is ${ele.language} and its file extension is ${ele.extension}`
  );
});

// * Output:
// Language is Javascript and its file extension is .js
// Language is Python and its file extension is .py
// Language is C++ and its file extension is .cpp

// * forEach example: iterates over each item in array but returns undefined

const values = coding.forEach((item) => {
  console.log(item); // * Prints each language
  return item; // ! Has no effect, return value is ignored
});

// ? What does this print?
console.log(values);
// * Returns: undefined — forEach does not return a new array

// notes use map() or filter() if you want to create a new array

// * filter example: returns a new array based on condition
const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filter_nums = Nums.filter((num) => num > 4);
console.log(filter_nums);
// * Returns: [5, 6, 7, 8, 9, 10]

// ! Incorrect: No return statement means undefined is returned
const filter_nums_2 = Nums.filter((num) => {
  num > 4; // ! Missing 'return'
});

console.log(filter_nums_2);
// * Returns: [] (empty array)

// notes Always use `return` in block-body arrow functions

// * Corrected version with explicit return
const filter_nums_3 = Nums.filter((num) => {
  return num > 4;
});

console.log(filter_nums_3);
// * Returns: [5, 6, 7, 8, 9, 10]

// * Using forEach to manually filter
const filter_nums_via_forEach = [];

Nums.forEach((num) => {
  if (num > 4) {
    filter_nums_via_forEach.push(num); // * Only adds if condition is met
  }
});

console.log(filter_nums_via_forEach);
// * Returns: [5, 6, 7, 8, 9, 10]

// notes Use filter for cleaner code, forEach when more control is needed

// * Book filter examples
const books = [
  { title: "Book One", genre: "Fiction", publish: 1990, edition: 2000 },
  { title: "Book Two", genre: "History", publish: 1985, edition: 1995 },
  { title: "Book Three", genre: "Science", publish: 2005, edition: 2010 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1978, edition: 1985 },
  { title: "Book Five", genre: "Biography", publish: 1999, edition: 2004 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
  { title: "Book Ten", genre: "Biography", publish: 2000, edition: 2008 },
];

const History_books = books.filter((bk) => bk.genre === "History");
console.log("History books", History_books);
// * Returns: Book Two & Book Seven

const publish_after_2000 = books.filter((bk) => bk.publish > 2000);
console.log("Publish after 2000", publish_after_2000);
// * Returns: Book Three & Book Eight

const book_required = books.filter((bk) => {
  return bk.publish >= 1990 && bk.genre === "Fiction";
});
console.log("Book after 1990 and Fiction", book_required);
// * Returns: Book One

// notes Combine multiple conditions in a single filter callback
