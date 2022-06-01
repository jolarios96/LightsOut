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
document.querySelectorAll(".light").forEach((element) => {
  let value = parseInt(element.value);

  // Toggle light state
  element.addEventListener("click", function () {
    // toggle middle light
    toggleLight(value);

    // toggle north light
    if (value - 5 > -1) toggleLight(value - 5);

    // toggle east light
    switch (value + 1) {
      case 0:
        break;
      case 5:
        break;
      case 10:
        break;
      case 15:
        break;
      case 20:
        break;
      default:
        if (value + 1 < 25) toggleLight(value + 1);
        break;
    }

    // toggle south light
    if (value + 5 < 25) toggleLight(value + 5);

    // toggle west light
    switch (value - 1) {
      case 4:
        break;
      case 9:
        break;
      case 14:
        break;
      case 19:
        break;
      case 24:
        break;
      default:
        if (value - 1 >= 0) toggleLight(value - 1);
        break;
    }
  });
});

function toggleCenter(element) {
  let value = parseInt(element.value);

  if (light_state_arr[value]) {
    element.style.backgroundColor = "var(--btn-off)";
    light_state_arr[value] = false;
    console.log(light_state_arr);
  } else {
    element.style.backgroundColor = "var(--btn-on)";
    light_state_arr[value] = true;
    console.log(light_state_arr);
  }
}

function toggleLight(value) {
  console.log(value);
  let element = document.querySelector("[value='" + value + "']");

  if (light_state_arr[value]) {
    element.style.backgroundColor = "var(--btn-off)";
    light_state_arr[value] = false;
    console.log(light_state_arr);
  } else {
    element.style.backgroundColor = "var(--btn-on)";
    light_state_arr[value] = true;
    console.log(light_state_arr);
  }
}
