const input_string = "swiss";

const first_non_repeating_word = (word) => {
  const spiltted_word = word.split("");

  const occurence = {};

  spiltted_word.forEach((letter) => {
    if (occurence[letter]) {
      occurence[letter] += 1;
    } else {
      occurence[letter] = 1;
    }
  });

  return Object.keys(occurence).find((key) => occurence[key] === 1);
};

const letter_is = first_non_repeating_word(input_string);

console.log(letter_is);
