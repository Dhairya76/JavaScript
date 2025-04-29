// ? ---------------------------- Immediately Invoked Function Expressions (IIFE) ----------------------------

// ? IIFE using traditional function syntax
(function coffee() {
    console.log("Function Ran"); // * Prints: Function Ran
    // notes IIFE = Immediately Invoked Function Expression
    // notes This function runs as soon as it is defined
    // notes Helps in creating a private scope and avoiding global scope pollution
})();

// ? IIFE using arrow function syntax
((name) => {
    console.log(`Function Ran with ${name}`); // * Prints: Function Ran with Steve
    // notes Arrow function IIFE is another concise way of writing an IIFE
    // notes Useful for one-time logic that needs to run immediately with arguments
})("Steve");
