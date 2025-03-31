// Declaring string variables (stored in stack memory)
const name = "Steve";  
const nick_name = "Caps";  

// Creating a string object (stored in heap memory)
const team = new String("Avengers");  

// Concatenating strings using the + operator
console.log(name + " " + nick_name); // One way to combine strings

// Using template literals for string interpolation
console.log(`The name is ${name} and we call him ${nick_name}`); // Another way

// String properties and methods
console.log(team.length);  // Get the length of the string
console.log(team.toUpperCase());  // Convert string to uppercase
console.log(team.charAt(3));  // Get character at index 3 (0-based index)
console.log(team.indexOf("g"));  // Find index of the first occurrence of 'g'

// Extracting substrings
const new_string = team.substring(0, 4);  // Extract characters from index 0 to 3 (4 is excluded)
console.log(new_string);  // Output: "Aven"

const string_slice = team.slice(2, 4);  // Extract characters from index 2 to 3 (4 is excluded)
console.log(string_slice);  // Output: "en"

// Removing extra spaces
const string_trim = "    Avengers        ";
console.log(string_trim);  // Prints with spaces
console.log(string_trim.trim());  // Removes spaces from both ends

// String replacement
const string_replace = "http://avengers.com";
console.log(string_replace);  // Original string
console.log(string_replace.replace("http", "https"));  // Replace 'http' with 'https'
console.log(string_replace.includes(".com"));  // Check if ".com" exists in the string (returns true)

// Splitting a string into an array
const string_split = "Caps , Iron Man , Thor";
console.log(string_split.split(","));  // Split string by comma into an array
