const display = document.getElementById("display");
const historyPanel = document.getElementById("history");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += ` ${operator} `;
}

function clearDisplay() {
  display.value = "";
}

function calculateSquareRoot() {
  if (display.value) {
    display.value = Math.sqrt(parseFloat(display.value)).toFixed(2);
  }
}

function calculate() {
  try {
    const expression = display.value.replace("×", "*").replace("÷", "/");
    const result = eval(expression);
    if (!isNaN(result)) {
      addToHistory(`${display.value} = ${result}`);
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyPanel.appendChild(li);
}

function clearHistory() {
  historyPanel.innerHTML = "";
}
