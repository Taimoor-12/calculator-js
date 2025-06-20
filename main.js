const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operand1 = "";
let operand2 = "";
let operator = "";

let result = 0;

const operate = (num1, num2, operator) => {
  let answer = 0;
  switch (operator) {
    case "+":
      answer = add(num1, num2);
      break;
    case "-":
      answer = subtract(num1, num2);
      break;
    case "*":
      answer = multiply(num1, num2);
      break;
    case "/":
      if (num2 === 0) {
        alert("You cannot divide with zero!");
        return;
      }
      answer = divide(num1, num2);
      break;
  }

  result = Number.isInteger(answer) ? answer : answer.toFixed(2);
};

const contentWrapper = document.querySelector(".content-wrapper");
const output = document.querySelector(".output");

const operators = ["+", "-", "/", "*"];

contentWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") return;

  const value = e.target.value;
  let chars = output.textContent.split("");

  if (value === "AC") {
    resetData();
  } else if (value === "DEL") {
    removeFromOutput(chars);
  } else if (value === "=") {
    if (!operand1 || !operand2 || !operator) return;
    prepareOperation();
  } else if (value === ".") {
    handleDecimalInput(chars, value);
  } else {
    handleArithmeticInput(chars, value);
  }
});

const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

document.addEventListener("keydown", (e) => {
  const value = e.key;
  let chars = output.textContent.split("");

  if (value === "Escape") {
    resetData();
  } else if (value === "Backspace") {
    removeFromOutput(chars);
  } else if (value === "=") {
    if (!operand1 || !operand2 || !operator) return;
    prepareOperation();
  } else if (value === ".") {
    handleDecimalInput(chars, value);
  } else if (numberKeys.includes(value) || operators.includes(value)) {
    handleArithmeticInput(chars, value);
  }
});

const prepareOperation = () => {
  operate(Number(operand1), Number(operand2), operator);
  const resultString = String(result);
  operand1 = resultString;
  operand2 = "";
  operator = "";
  output.textContent = resultString;
};

const removeFromOutput = (chars) => {
  const char = chars.pop();
  if (operators.includes(char)) {
    operator = "";
  } else if (chars.some((char) => operators.includes(char))) {
    const operand2Arr = operand2.split("");
    operand2Arr.pop();
    operand2 = operand2Arr.join("");
  } else {
    const operand1Arr = operand1.split("");
    operand1Arr.pop();
    operand1 = operand1Arr.join("");
  }

  output.textContent = chars.join("");
};

const resetData = () => {
  output.textContent = "";
  operand1 = "";
  operand2 = "";
  operator = "";
  result = 0;
};

const handleArithmeticInput = (chars, value) => {
  if (operand1 && operand2 && operator && operators.includes(value)) {
    prepareOperation();
    operator = value;
    output.textContent += value;
    return;
  }

  // we don't want an operator showing when there are no operands.
  if (!operand1 && operators.includes(value)) return;

  if (operator && operators.includes(value)) {
    chars.pop();
    chars.push(value);
    operator = value;
    output.textContent = chars.join("");
    return;
  }

  if (operators.includes(value)) {
    operator = value;
  } else if (!operator) {
    operand1 += value;
  } else {
    operand2 += value;
  }
  
  if (chars.length === 1 && chars[0] === "0" && !operators.includes(value)) {
    output.textContent = value;
    return;
  }

  output.textContent += value;
};

const handleDecimalInput = (chars, value) => {
  if (chars.length === 0) return;

  const hasOperator = chars.some((char) => operators.includes(char));

  if (hasOperator && operand2 && !operand2.includes(".")) {
    operand2 += value;
  } else if (!hasOperator && operand1 && !operand1.includes(".")) {
    operand1 += value;
  } else {
    return;
  }

  chars.push(value);
  output.textContent = chars.join("");
};
