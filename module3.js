// Module 3: Control Statements and Loops
// Simple examples with clear comments to help beginners understand the flow.

// 1. if-else conditions
function checkNumber(value) {
  if (value > 0) {
    return 'Positive number';
  } else if (value < 0) {
    return 'Negative number';
  } else {
    return 'Zero';
  }
}

console.log(checkNumber(5)); // Positive number
console.log(checkNumber(-2)); // Negative number
console.log(checkNumber(0)); // Zero

// 2. switch statement
function weekdayName(day) {
  switch (day) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day';
  }
}

console.log(weekdayName(1)); // Monday
console.log(weekdayName(7)); // Sunday
console.log(weekdayName(10)); // Invalid day

// 3. for loop
function countToFive() {
  let result = '';
  for (let i = 1; i <= 5; i++) {
    result += i + ' ';
  }
  return result.trim();
}

console.log('For loop:', countToFive()); // 1 2 3 4 5

// 4. while loop
function subtractUntilZero(start) {
  let value = start;
  let steps = [];
  while (value > 0) {
    steps.push(value);
    value -= 1;
  }
  return steps.join(', ');
}

console.log('While loop:', subtractUntilZero(4)); // 4, 3, 2, 1

// 5. do-while loop
function doWhileExample(limit) {
  let count = 0;
  let values = [];
  do {
    values.push(count);
    count += 1;
  } while (count < limit);
  return values.join(', ');
}

console.log('Do-while loop:', doWhileExample(3)); // 0, 1, 2

// 6. Nested loops and logic building
function multiplicationTable(size) {
  let table = '';
  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      table += row * col + '\t';
    }
    table += '\n';
  }
  return table;
}

const tableString = multiplicationTable(3);
console.log('Nested loops table:\n' + tableString);

function show(msg) {
  console.log(msg);
  const out = document.querySelector('#module3-output');
  if (out) {
    const p = document.createElement('div');
    p.textContent = msg;
    out.appendChild(p);
  }
}

show('Module 3 loaded.');
show('checkNumber(5): ' + checkNumber(5));
show('weekdayName(3): ' + weekdayName(3));
show('For loop result: ' + countToFive());
show('While loop result: ' + subtractUntilZero(4));
show('Do-while result: ' + doWhileExample(3));
show('Multiplication table (3x3) is below.');

const tableOutput = document.querySelector('#table-output');
if (tableOutput) {
  // Show the multiplication table on the page for easy viewing.
  tableOutput.textContent = tableString;
}
