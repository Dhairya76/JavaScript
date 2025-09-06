const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const weight_guide = document.querySelector("#weight-results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please Enter a valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please Enter a valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      weight_guide.innerHTML = "UnderWeight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weight_guide.innerHTML = "Normal";
    } else {
      weight_guide.innerHTML = "OverWeight";
    }
  }
});
