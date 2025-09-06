let random_number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const user_input = document.querySelector("#guessField");
const guess_slot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const start_over = document.querySelector(".resultParas");

const p = document.createElement("p");

let previous_guess = [];

let number_of_guesses = 1;

let play_game = true;

if (play_game) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(user_input.value);
    validate_guess(guess);
  });
}

function validate_guess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    previous_guess.push(guess);
    if (number_of_guesses === 10) {
      display_guess(guess);
      display_message(`Game Over. Random Number Was ${random_number}`);
      end_game();
    } else {
      display_guess(guess);
      check_guess(guess);
    }
  }
}

function check_guess(guess) {
  if (guess === random_number) {
    display_message(`You guessed it right`);
    end_game();
  } else if (guess < random_number) {
    display_message(`Number is too low`);
  } else if (guess > random_number) {
    display_message(`Number is too high`);
  }
}

function display_guess(guess) {
  user_input.value = "";
  guess_slot.innerHTML += `${guess}, `;
  number_of_guesses++;
  remaining.innerHTML = `${11 - number_of_guesses}`;
}

function display_message(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function new_game() {
  const new_game_button = document.querySelector("#newGame");
  new_game_button.addEventListener("click", function (e) {
    e.preventDefault();
    random_number = parseInt(Math.random() * 100 + 1);
    previous_guess = [];
    number_of_guesses = 1;
    guess_slot.innerHTML = "";
    remaining.innerHTML = `${11 - number_of_guesses}`;
    user_input.removeAttribute("disabled");
    start_over.removeChild(p);
    play_game = true;
    display_message("")
  });
}

function end_game() {
  user_input.value = "";
  user_input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  start_over.appendChild(p);
  play_game = false;
  new_game();
}
