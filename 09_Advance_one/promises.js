// * ----------------------- PROMISE ONE -----------------------
// * A simple Promise example
// * Promises take a function with (resolve, reject) parameters
// ? Here we simulate an async task (setTimeout, DB call, crypto, etc.)
const promise_one = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Is Completed");
    resolve(); // * Moves the promise into "fulfilled" state
  }, 1000);
});

// * Promise consumption: .then() runs when resolve() is called
promise_one.then(function () {
  console.log("Promise Consumed");
});


// * ----------------------- PROMISE TWO -----------------------
// * Creating and consuming in one go
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 done");
});


// * ----------------------- PROMISE THREE -----------------------
// * Resolve a promise with some data (object)
const promise_three = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ user_name: "Tony Stark", email: "tony@avengers.com" });
  }, 1000);
});

// * Accessing resolved data in .then()
promise_three.then(function (user) {
  console.log(user);
  // * Prints: { user_name: "Tony Stark", email: "tony@avengers.com" }
});


// * ----------------------- PROMISE FOUR -----------------------
// * Introducing error handling (resolve vs reject)
const promise_four = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false; // ! Flip this to true to test reject()
    if (!error) {
      resolve({ user_name: "Avengers", password: "1234" });
    } else {
      reject("ERROR!! Something went wrong");
    }
  }, 2000);
});

// * Consuming with .then(), .catch(), .finally()
promise_four
  .then((user) => {
    console.log(user); // * Logs object if resolved
    return user.user_name; // * Passing value to next .then()
  })
  .then((user_name) => {
    console.log(user_name); // * Logs "Avengers"
  })
  .catch((err) => {
    console.log(err); // ! Handles any error from reject()
  })
  .finally(() => {
    console.log("Finally it is done"); // * Always runs (success or fail)
  });


// * ----------------------- PROMISE FIVE -----------------------
// * Consuming a promise using async/await instead of .then()
const promise_five = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ user_name: "Avengers", password: "1234" });
    } else {
      reject("ERROR!! Something went wrong");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promise_five; // * Waits until promise resolves/rejects
    console.log(response);
  } catch {
    console.log("Error Caught"); // ! Error handling
  }
}

consumePromiseFive();


// * ----------------------- FETCH API + ASYNC/AWAIT -----------------------
// * Example: Fetching data from API with async/await
async function getFirstTodo() {
  try {
    const response = await fetch("https://dummyjson.com/todos/1");
    const data = await response.json(); // * Parsing JSON from response
    console.log(data);
  } catch (error) {
    console.log(error, "Error in TODO"); // ! Handles fetch/network errors
  }
}

getFirstTodo();


// * ----------------------- FETCH API + PROMISE CHAIN -----------------------
// * Fetching data using traditional .then() chain
fetch("https://dummyjson.com/todos/4")
  .then((res) => {
    return res.json(); // * Must return response.json() for next .then()
  })
  .then((data) => {
    console.log(data); // * Logs full todos list
  })
  .catch((e) => {
    console.log(e); // ! Handles errors (e.g., network issue)
  });


// notes: Summary
// - Use .then()/.catch() for promise chaining
// - Use async/await for cleaner, synchronous-looking code
// - Always handle errors (catch/finally)
// TODO: Try combining multiple promises with Promise.all() or Promise.race()
