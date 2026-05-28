// Module 5: Arrays and Objects

// 1. Array Methods
const fruits = ['apple', 'banana', 'orange'];

// push adds a new item to the end of the array.
fruits.push('grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']

// pop removes the last item from the array.
const lastFruit = fruits.pop();
console.log(lastFruit); // 'grape'
console.log(fruits); // ['apple', 'banana', 'orange']

// shift removes the first item.
const firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana', 'orange']

// unshift adds a new item at the beginning.
fruits.unshift('kiwi');
console.log(fruits); // ['kiwi', 'banana', 'orange']

// join combines items into a single string.
const fruitString = fruits.join(', ');
console.log(fruitString); // 'kiwi, banana, orange'

// forEach runs a function for every item.
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// map transforms every item and returns a new array.
const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(uppercaseFruits); // ['KIWI', 'BANANA', 'ORANGE']

// filter keeps only items that pass a test.
const shortNames = fruits.filter((fruit) => fruit.length <= 6);
console.log(shortNames); // ['kiwi', 'orange']

// find returns the first item that matches.
const foundFruit = fruits.find((fruit) => fruit.startsWith('b'));
console.log(foundFruit); // 'banana'

// 2. Objects and Properties
const user = {
  name: 'Riya',
  age: 21,
  city: 'Mumbai',
};

// Access properties with dot notation.
console.log(user.name); // 'Riya'
console.log(user.age); // 21

// Access properties with bracket notation.
console.log(user['city']); // 'Mumbai'

// Add or change a property.
user.email = 'riya@example.com';
console.log(user.email); // 'riya@example.com'

// Delete a property.
delete user.age;
console.log(user.age); // undefined

// 3. Destructuring
const book = {
  title: 'JavaScript Basics',
  author: 'Arjun',
  year: 2024,
};

// Pull values from the object into variables with the same names.
const { title, author } = book;
console.log(title); // 'JavaScript Basics'
console.log(author); // 'Arjun'

const scores = [10, 20, 30];

// Pull values from the array into variables by position.
const [firstScore, secondScore] = scores;
console.log(firstScore, secondScore); // 10 20

// 4. Spread Operator
const colors1 = ['red', 'green'];
const colors2 = ['blue', 'yellow'];

// Combine two arrays into one by spreading each item into a new array.
const allColors = [...colors1, ...colors2];
console.log(allColors); // ['red', 'green', 'blue', 'yellow']

const defaultSettings = { volume: 5, theme: 'dark' };
const userSettings = { theme: 'light' };

// Copy properties from both objects into a new object.
// Later properties overwrite earlier ones, so theme becomes 'light'.
const settings = { ...defaultSettings, ...userSettings };
console.log(settings); // { volume: 5, theme: 'light' }

// 5. JSON Handling
const student = {
  name: 'Neha',
  grade: 'A',
};

// Convert object to JSON string.
const studentJson = JSON.stringify(student);
console.log(studentJson); // '{"name":"Neha","grade":"A"}'

// Convert JSON string back to object.
const studentObj = JSON.parse(studentJson);
console.log(studentObj); // { name: 'Neha', grade: 'A' }
console.log(studentObj.name); // 'Neha'
console.log(studentObj.grade); // 'A'
