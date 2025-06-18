const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operand1;
let operand2;
let operator;

const operate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      add(num1, num2)
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '*':
      multiply(num1, num2);
      break;
    case '/':
      divide(num1, num2);
      break;
  }
}

const contentWrapper = document.querySelector('.content-wrapper');
const output = document.querySelector('.output');

contentWrapper.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const value = e.target.value;

  if (value === 'AC') {
    output.textContent = '';
  } else if (value === 'DEL') {
    if (output.lastChild) output.removeChild(output.lastChild);
  } else {
    const operators = ['+', '-', '/', '*'];

    if (
      output.lastChild &&
      operators.includes(output.lastChild.textContent) &&
      operators.includes(value)
    ) return;

    const content = document.createTextNode(value);
    output.appendChild(content);
  }
});