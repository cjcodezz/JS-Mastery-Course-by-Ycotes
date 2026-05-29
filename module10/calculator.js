// Module 10: Calculator App
// This file contains a simple calculator logic example.
// The demo can be extended to connect with UI buttons and display.

// Add two numbers and return the result.
export function add(a, b) {
  return a + b;
}

// Subtract the second number from the first.
export function subtract(a, b) {
  return a - b;
}

// Multiply two numbers.
export function multiply(a, b) {
  return a * b;
}

// Divide two numbers, with error checking for zero.
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Parse a simple expression and calculate the result.
export function calculate(expression) {
  // This is a basic example. It supports +, -, *, and / only.
  const cleaned = expression.replace(/\s+/g, '');
  const match = cleaned.match(/^([-+]?\d+(?:\.\d+)?)([+\-*/])([-+]?\d+(?:\.\d+)?)$/);

  if (!match) {
    throw new Error('Invalid expression. Use a format like 3 + 4.');
  }

  const [, left, operator, right] = match;
  const a = parseFloat(left);
  const b = parseFloat(right);

  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: throw new Error('Unsupported operator: ' + operator);
  }
}
