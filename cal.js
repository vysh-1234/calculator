'use strict';

let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
var currentInput = "";

// Update display arrow function
const updateDisplay = () => {
  display.textContent = currentInput || "0";
};

// Handle button clicks
const handleButtonClick = (e) => {
  try {
    let value = e.target.textContent;

    if (value === "C") {
      currentInput = "";
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch (err) {
        currentInput = "Error";
      }
    } else {
      currentInput += value;
    }

    updateDisplay();
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};

// Add event listeners
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => handleButtonClick(event));
});
