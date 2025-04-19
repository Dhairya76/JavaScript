// console.log("T");
// console.log("H");
// console.log("O");
// console.log("R");

// ? What if I need to duplicate the above console statements multiple times?
// ? It's a hassle — let's wrap it into a function and reuse it!

function say_name() {
    console.log("T");
    console.log("H");
    console.log("O");
    console.log("R");
    console.log("----------------");
  }
  
  // say_name()
  // say_name()
  // say_name()
  
  // ! We're not doing type checking for now — this function isn't foolproof.
  // ! We'll take up type safety later.
  function add_two_numbers(num1, num2) {
    // ? Here, num1 and num2 are parameters
    console.log(num1 + num2);
  }
  
  // ? 3 and 4 are arguments
  add_two_numbers(3, 4); // * Prints 7
  add_two_numbers(3, "a"); // * Prints 3a
  add_two_numbers(3, "4"); // * Prints 34
  add_two_numbers(3, null); // * Prints 3
  
  function add_two_numbers_with_return(num1, num2) {
    // ? Returns the sum
    return num1 + num2;
  
    console.log("Yoo"); 
    // ! Unreachable code — anything after return won't execute
  }
  
  const result = add_two_numbers(3, 5);
  // ? Function executes, adds 3 + 5 = 8, but it doesn't return, so:
  console.log("Result is", result); // * Prints: Result is undefined
  
  const result_return = add_two_numbers_with_return(3, 5);
  console.log("Result is", result_return); // * Prints: Result is 8 ✅
  
  // ? Handling default or missing parameters
  function log_in_user_message(username) {
    if (!username) {
      console.log("Please enter a username");
      return;
    }
    return `${username} just logged in`;
  }
  
  console.log(log_in_user_message("Thor")); // * Prints: Thor just logged in
  console.log(log_in_user_message()); // * Prints: Please enter a username
  
  // ? Let's provide a default value in case no username is given
  function log_in_user_message_with_default_value(username = "Avengers") {
    if (!username) {
      console.log("Please enter a username");
      return;
    }
    return `${username} just logged in`;
  }
  
  console.log(log_in_user_message_with_default_value()); 
  // * Prints: Avengers just logged in ✅
  
  // ? Now let's look at functions returning values using rest parameters
  
  function calculate_price(num1) {
    return num1;
  }
  
  function calculate_price1(...num1) {
    // ? Rest operator collects all passed values into an array
    return num1;
  }
  
  console.log(calculate_price(2)); // * Prints: 2
  console.log(calculate_price(200, 300, 400)); // * Prints: 200 ❌ only first one returned
  console.log(calculate_price1(200, 300, 400)); // * Prints: [200, 300, 400] ✅
  
  // ? Working with objects as function arguments
  const user = {
    username: "Thor",
    id: 3,
  };
  
  function handle_object(obj) {
    console.log(`The user is ${obj.username} and id is ${obj.id}`);
  }
  
  handle_object(user); 
  // * Prints: The user is Thor and id is 3 ✅
  
  handle_object({
    username: "Tony",
    id: 1,
  });
  // * Prints: The user is Tony and id is 1 ✅
  
  // ? Array destructuring / access in functions
  const my_array = [4, 7, 8, 1, 2];
  
  function return_second_value(arr) {
    return arr[1]; // ? Returns the second element
  }
  
  console.log(return_second_value(my_array)); // * Prints: 7
  console.log(return_second_value([1, 5, 2, 7, 4])); // * Prints: 5
  