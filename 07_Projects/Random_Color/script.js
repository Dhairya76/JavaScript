const random_color = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(random_color())

let change_color_id;

const start_changing_color = function () {
  function change_bg_color() {
    document.body.style.backgroundColor = random_color();
  }
  if (!change_color_id) {
    change_color_id = setInterval(change_bg_color, 1000);
  }
};

const stop_changing_color = function () {
  clearInterval(change_color_id);
  change_color_id = null;
};

document
  .querySelector("#start")
  .addEventListener("click", start_changing_color);

document.querySelector("#stop").addEventListener("click", stop_changing_color);
