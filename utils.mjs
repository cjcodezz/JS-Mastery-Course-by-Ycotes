// utils.mjs - small helper module to demonstrate ES modules and async behavior

export function fakeFetch(payload, delay = 800) {
  // Returns a promise that resolves after `delay` milliseconds.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: payload });
    }, delay);
  });
}

export function multiply(a, b) {
  return a * b;
}
