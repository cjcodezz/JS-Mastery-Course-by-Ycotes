// Module 2: Variables and Data Types
// Simple, beginner-friendly examples with short explanations.

// 1. var, let, const
// - `var` is function-scoped and can be redeclared.
// - `let` is block-scoped and cannot be redeclared in the same scope.
// - `const` is block-scoped and must be initialized; it cannot be reassigned.

// var example
var x = 1;
var x = 2; // redeclaration is allowed with var
console.log('var x after redeclare:', x); // 2

// let example
let y = 10;
// let y = 11; // Error: redeclaration not allowed
y = 12; // reassignment allowed
console.log('let y after reassignment:', y); // 12

// const example
const z = 5;
// z = 6; // Error: assignment to constant variable
console.log('const z remains:', z); // 5

// Block scope example
{
  let local = 'inside';
  var globalVar = 'still visible outside';
  const cLocal = 'const inside';
  console.log('local inside block:', local);
}
// console.log(local); // Error - local is not defined (block scope)
console.log('globalVar outside block (var):', globalVar);

// 2. Primitive vs Non-Primitive types
// Primitives: number, string, boolean, null, undefined, symbol, bigint
// Non-primitive: objects, arrays, functions (these are referenced)

// Primitive assignment copies the value.
let a = 5;
let b = a; // copy value
b = 10;
console.log('a after changing b (primitive):', a); // 5

// Non-primitive assignment copies the reference.
const obj1 = { name: 'Raj' };
const obj2 = obj1; // both variables point to the same object
obj2.name = 'Rakesh';
console.log('obj1 after changing obj2 (reference):', obj1.name); // 'Rakesh'

// To clone objects use spread or Object.assign
const obj3 = { ...obj1 }; // shallow copy
obj3.name = 'Cloned';
console.log('obj1 name:', obj1.name); // still 'Rakesh'
console.log('obj3 name:', obj3.name); // 'Cloned'

// 3. Operators and expressions
const num1 = 10;
const num2 = 3;
console.log('Add:', num1 + num2); // 13
console.log('Subtract:', num1 - num2); // 7
console.log('Multiply:', num1 * num2); // 30
console.log('Divide:', num1 / num2); // 3.333...
console.log('Modulus:', num1 % num2); // 1

// Comparison operators
console.log('== vs ===');
console.log("'5' == 5 ->", '5' == 5); // true (type coercion)
console.log("'5' === 5 ->", '5' === 5); // false (strict equality)

// 4. Template literals
const name = 'Mina';
const greeting = `Hello, ${name}! Welcome.`; // easier string interpolation
console.log(greeting);

// 5. Type conversion and coercion
// Explicit conversion (recommended)
const strNum = '123';
const toNumber = Number(strNum); // 123 (number)
console.log('Number("123") ->', toNumber, typeof toNumber);

const val = 0;
const boolVal = Boolean(val); // false
console.log('Boolean(0) ->', boolVal);

// parseInt and parseFloat for numeric strings with text
console.log("parseInt('42px') ->", parseInt('42px'));
console.log("parseFloat('3.14em') ->", parseFloat('3.14em'));

// Implicit coercion (automatic, be careful)
console.log("'3' + 2 ->", '3' + 2); // '32' (string concatenation)
console.log("'3' - 2 ->", '3' - 2); // 1 (numeric subtraction coerces '3' to 3)

// Practical small examples that show values on the page (if present)
function show(msg) {
  console.log(msg);
  const out = document.querySelector('#module2-output');
  if (out) {
    const el = document.createElement('div');
    el.textContent = msg;
    out.appendChild(el);
  }
}

show('Module 2 loaded — check console and page output.');
show('var x after redeclare: 2');
show('let y after reassignment: 12');
show('const z remains: 5');
show('obj1 after changing obj2 (reference): Rakesh');
show('Template literal example: ' + greeting);

// Export nothing; this is intended as a demo script included in HTML.
