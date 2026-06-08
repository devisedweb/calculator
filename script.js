let num1;
let op;
let num2;

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

console.log(operate("+", 3, 5));
console.log(operate("-", 10, 4));
console.log(operate("*", 2, 3));
console.log(operate("/", 8, 2));
