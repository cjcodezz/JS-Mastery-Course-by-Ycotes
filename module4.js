// Module 4: Functions

// 1. Function Declaration
// A normal named function that can be called later.
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Amit')); // Hello, Amit!

// 2. Arrow Functions
// A shorter way to write functions. Good for small tasks.
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 7)); // 12

// If the function body is just a single expression, we can write it even shorter:
const multiply = (x, y) => x * y;
console.log(multiply(3, 4)); // 12

// 3. Callback Functions
// A callback is a function passed into another function to run later.
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    // Call the action function with the current index.
    action(i);
  }
}

// Here we pass an arrow function as the callback.
repeat(3, (i) => {
  console.log(`Callback run number ${i + 1}`);
});
// Output:
// Callback run number 1
// Callback run number 2
// Callback run number 3

// 4. Closures
// A closure is when a function keeps access to variables from its outside scope.
function createCounter() {
  let count = 0; // This value is remembered by the inner function.
  
  return function () {
    count += 1; // The inner function changes the remembered value.
    return count;
  };
}

// createCounter returns a new function that can update `count`.
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// The inner function keeps access to `count` even after createCounter() has finished.

// 5. Higher-Order Functions
// These functions either take other functions as arguments or return functions.
const numbers = [1, 2, 3, 4, 5];

// map runs a callback on every item and returns a new array.
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter keeps only the items that return true inside the callback.
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 6. Recursion
// Recursion is when a function calls itself.
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}



// 5!

console.log(factorial(5)); // 120

// Simple recursive example: count down from a number.
function countdown(n) {
  if (n <= 0) {
    console.log('Done!');
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(3);
// Output:
// 3
// 2
// 1
// Done!
