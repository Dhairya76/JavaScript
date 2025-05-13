// ? --------------------------- BASIC FOR LOOP ---------------------------

for (let i = 0; i < 10; i++) {
    const element = i;
  
    if (element == 5) {
      console.log("5 is best"); // * Special message when i is 5
    }
  
    console.log(element); // * Prints numbers from 0 to 9
  }
  
  // * Output includes "5 is best" and each number from 0 to 9
  
  
  // ? -------------------- NESTED FOR LOOP (Multiplication Table) --------------------
  
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i + "*" + j + " = " + i * j); 
      // * Prints multiplication results (e.g., 2*3 = 6)
    }
  
    console.log(`Outer Loop ${i}`); 
    // * Marks end of inner loop iteration for that outer loop index
  }
  
  
  // ? -------------------- LOOPING THROUGH AN ARRAY --------------------
  
  const myarray = ["Thor", "Captain America", "Iron Man"];
  
  for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
  
    console.log(`${element} is at index ${index}`);
    // * Prints each superhero and their index
  }
  
  
  // ? -------------------- BREAK STATEMENT --------------------
  
  for (let i = 1; i <= 20; i++) {
    if (i == 8) {
      console.log(`Detected ${i}`);
      break; // * Exits the loop when i equals 8
    }
  
    console.log(`Value of i is ${i}`);
  }
  
  // * Output stops at i = 8 due to break
  
  
  // ? -------------------- CONTINUE STATEMENT --------------------
  
  console.log("---------------- Continue --------------");
  
  for (let i = 1; i <= 20; i++) {
    if (i == 8) {
      console.log(`Detected ${i}`);
      continue; // * Skips current iteration when i equals 8
    }
  
    console.log(`Value of i is ${i}`);
  }
  
  // * i = 8 is detected but not printed in the value line due to continue
  