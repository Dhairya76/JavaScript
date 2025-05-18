// ? -------------------- WHILE LOOP --------------------

// * Initialize index variable
let index = 0;

while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index += 2; // * Increment by 2
}

// * Output:
// * Value of index is 0
// * Value of index is 2
// * Value of index is 4
// * Value of index is 6
// * Value of index is 8
// * Value of index is 10


// ? ----------- WHILE LOOP ON ARRAY (Iterating over array) -----------

let arr = ["Thor", "Iron Man", "Captain America"];

let i = 0;

while (i < arr.length) {
  console.log(`Hero is ${arr[i]}`); // * Access element at index i
  i += 1; // * Move to next index
}

// * Output:
// * Hero is Thor
// * Hero is Iron Man
// * Hero is Captain America


// ? -------------------- DO WHILE LOOP --------------------
// notes Executes the block once before checking the condition

let score = 1;

do {
  console.log(`Score is ${score}`); // * Always prints at least once
  score++;
} while (score < 10);

// * Output:
// * Score is 1
// * Score is 2
// * Score is 3
// * Score is 4
// * Score is 5
// * Score is 6
// * Score is 7
// * Score is 8
// * Score is 9


// notes --------------- DO WHILE WILL RUN EVEN IF CONDITION IS FALSE INITIALLY ---------------

let score1 = 11;

do {
  console.log(`Score is ${score1}`); // * Executes once even though score1 >= 10
  score1++;
} while (score1 < 10);

// * Output:
// * Score is 11
