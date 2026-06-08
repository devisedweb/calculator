const display = document.querySelector(".display p");
const buttons = document.querySelectorAll("button");

let num1 = "";
let op = "";
let num2 = "";

let resultDisplayed = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }

  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return "Invalid operator";
  }
}

function handleOperator(value) {
  resultDisplayed = false;

  if (num1 !== "" && op !== "" && num2 !== "") {
    let result = operate(op, Number(num1), Number(num2));

    if (result === null) {
      display.textContent = "Nice try. You can't divide by 0.";
      resetCalculator();
      return;
    }

    result = Number(result.toFixed(3));

    num1 = result.toString();
    num2 = "";
  }

  op = value;
}

function handleDigit(value) {
  if (resultDisplayed) {
    num1 = value;
    op = "";
    num2 = "";

    resultDisplayed = false;
    return;
  }

  if (op === "") {
    num1 += value;
  } else {
    num2 += value;
  }
}

function updateDisplay() {
  if (num1 === "" && op === "" && num2 === "") {
    display.textContent = "0";
    return;
  }

  display.textContent = `${num1} ${op} ${num2}`;
}

function clearCalculator() {
  num1 = "";
  op = "";
  num2 = "";

  updateDisplay();
}

function resetCalculator() {
  num1 = "";
  op = "";
  num2 = "";
  resultDisplayed = false;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    const operators = ["+", "-", "*", "/"];

    if (value === "clear") {
      clearCalculator();
      return;
    }

    if (value === "=") {
      let result = operate(op, Number(num1), Number(num2));

      if (result === null) {
        display.textContent = "Nice try. You can't divide by 0.";
        resetCalculator();
        return;
      }

      result = Number(result.toFixed(3));

      display.textContent = result;

      num1 = result.toString();
      op = "";
      num2 = "";

      resultDisplayed = true;

      return;
    }

    if (operators.includes(value)) {
      handleOperator(value);
    } else {
      handleDigit(value);
    }

    updateDisplay();
  });
});
