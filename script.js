let display = document.getElementById("display");
let history = document.getElementById("history");

function appendToDisplay(value) {
  display.value += value;
}

function result() {
  try {
    history.value = display.value;
    display.value = eval(display.value);
  } catch {
    alert("Invalid Inputs");
    display.value = "";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function clearAll() {
  display.value = "";
}

function resetAll() {
  display.value = "";
  history.value = "";
}

function safeOpration(callback, message) {
  if (display.value.trim() === "" || isNaN(display.value)) {
    alert("Invalid Input");
    display.value = "";
    return;
  }
  var temp = display.value;
  display.value = callback(Number(display.value));
  history.value = `${message} ${temp} is: `;
}

function half() {
  safeOpration((value) => value / 2, "Half of ");
}

function squareroot() {
  safeOpration((value) => Math.sqrt(value), "Half of ");
}

function cube() {
  safeOpration((value) => Math.pow(value, 3), "Half of ");
}

function square() {
  safeOpration((value) => Math.pow(value, 2), "Half of ");
}
