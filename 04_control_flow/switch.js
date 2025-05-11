// ? ---------------------------- SWITCH STATEMENT ----------------------------

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break; // * Prevents fall-through to the next case
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March"); // * Executes this block because month === 3
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  default:
    console.log("Invalid month"); // notes This block runs if none of the above cases match
}

// * Output:
// * March

// notes SWITCH is used when you want to compare one variable against many possible values
// notes "break" is important — without it, execution will continue to the next case (fall-through)
// ! Always remember to add a "default" case to handle unexpected values
