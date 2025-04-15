// * Declaring a constant variable 'account_id' and assigning a fixed value
// ! Constants cannot be reassigned after declaration
const account_id = 1234321; 

// * Declaring variables using 'let' and 'var'  
// ? 'let' is block-scoped (recommended)  
// ? 'var' is function-scoped (can cause issues in some cases)
let account_email = "steve@gmail.com"; 
var account_password = "123456"; 

// * Declaring a variable without 'let', 'var', or 'const' (Not Recommended)  
// ! This creates a global variable, which can lead to unexpected behavior
account_city = "Mumbai"; 

// * Declaring a variable without assigning a value  
// ? By default, it will have the value 'undefined'
let account_state; 

// ! Trying to change the value of 'account_id' will cause an error
// account_id = 43; // ❌ This will throw an error because 'account_id' is a constant

// * Updating values of other variables (Allowed for 'let' and 'var')
account_email = "tony@gmail.com"; 
account_password = "789"; 
account_city = "New York"; 

// * Logging the account_id to the console
console.log(account_id); 

// * Displaying all values in a table format for better readability
console.table([account_id, account_email, account_password, account_city, account_state]); 
