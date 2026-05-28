// Module 7: ES6+ Features (module)
// This file demonstrates Promises, async/await, optional chaining, default parameters, and module usage.

import { fakeFetch, multiply } from './utils.mjs';

// Helper to show messages on the demo page and in the console.
function log(message) {
  console.log(message);
  const out = document.querySelector('#output');
  if (out) {
    const line = document.createElement('div');
    line.textContent = message;
    out.appendChild(line);
  }
}

// 1) Promises - create a promise and handle with .then/.catch
function promiseExample() {
  const p = new Promise((resolve, reject) => {
    // do some async-like work
    setTimeout(() => {
      const success = true; // flip to false to see reject
      if (success) resolve('Promise resolved: 👍');
      else reject('Promise failed: ❌');
    }, 500);
  });

  p.then((msg) => log(msg)).catch((err) => log(err));
}

// 2) async / await - easier syntax to work with promises
async function asyncAwaitExample() {
  try {
    const response = await fakeFetch({ name: 'Aisha', id: 1 }, 700);
    log('async/await result: ' + JSON.stringify(response.data));
  } catch (err) {
    log('async error: ' + err);
  }
}

// 3) Optional chaining and nullish coalescing
function optionalChainingExample() {
  const user = { profile: { email: 'alex@example.com' } };
  // optional chaining `?.` lets you safely access nested props that may not exist.
  log('email via optional chaining: ' + (user?.profile?.email || 'no email'));

  const missing = null;
  // nullish coalescing `??` returns right-hand side only when left is null or undefined.
  log('value with nullish coalescing: ' + (missing ?? 'default value'));
}

// 4) Default parameters
function greet(name = 'Friend') {
  return `Hello, ${name}!`;
}

// 5) Modules usage - using multiply from utils.mjs
function moduleExample() {
  log('3 * 4 = ' + multiply(3, 4));
}

// Wire to UI buttons
const btnPromise = document.querySelector('#btnPromise');
const btnAsync = document.querySelector('#btnAsync');
const btnOptional = document.querySelector('#btnOptional');
const btnGreet = document.querySelector('#btnGreet');
const btnModule = document.querySelector('#btnModule');

if (btnPromise) btnPromise.addEventListener('click', promiseExample);
if (btnAsync) btnAsync.addEventListener('click', asyncAwaitExample);
if (btnOptional) btnOptional.addEventListener('click', optionalChainingExample);
if (btnGreet)
  btnGreet.addEventListener('click', () => {
    const name = document.querySelector('#greetName').value.trim();
    log(greet(name));
  });
if (btnModule) btnModule.addEventListener('click', moduleExample);

// Expose few functions for console testing
window.es6 = { promiseExample, asyncAwaitExample, optionalChainingExample, greet, moduleExample };

log('Module 7 loaded. Use the buttons to run examples.');
