// initialize gamestate array
let light_state_arr = [];

for (let n = 0; n < 25; n++) {
  if (Math.random() > 0.5) {
    light_state_arr[n] = true;
  } else {
    light_state_arr[n] = false;
  }
}

// create buttons
for (let n = 0; n < 25; n++) {
  // set light to newly created button element in #app > .container
  let element = document
    .querySelector("#app")
    .querySelector(".container")
    .appendChild(document.createElement("button"));

  // set element attributes
  element.setAttribute("id", "light-" + (n + 1));
  element.setAttribute("class", "light");
  element.setAttribute("value", n);

  // set style attributes
  element.style.border = "none";

  // if light is on, start with light on
  if (light_state_arr[n]) {
    element.style.backgroundColor = "var(--btn-on)";
  } else {
    element.style.backgroundColor = "var(--btn-off)";
  }
}

// console.log(document.querySelectorAll("#app>.container>.light"));
// select all .light class elements within #app > .container
document.querySelectorAll("#app>.container>.light").forEach((element) => {
  // Toggle light state
  element.addEventListener("click", function () {
    if (light_state_arr[element.value]) {
      element.style.backgroundColor = "var(--btn-off)";
      light_state_arr[element.value] = false;
      console.log(light_state_arr);
    } else {
      element.style.backgroundColor = "var(--btn-on)";
      light_state_arr[element.value] = true;
      console.log(light_state_arr);
    }
  });
});
