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
