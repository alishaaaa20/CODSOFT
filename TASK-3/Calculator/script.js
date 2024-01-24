let display = document.getElementById("display");

function handleButtonClick(event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent === "=") {
      calculateResult();
    } else {
      addToDisplay(event.target.textContent);
    }
  }
}

function addToDisplay(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = "Error";
  }
}

function clearDisplay() {
  display.textContent = "0";
}
