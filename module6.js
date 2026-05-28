// Module 6: DOM Manipulation

// Note: This code should be added to a webpage with HTML elements.
// The DOM is the browser's representation of the HTML page.

// 1. DOM structure
// The DOM stands for Document Object Model.
// It represents HTML elements as objects that JavaScript can change.

// Example HTML structure expected for this code:
// <div id="app">
//   <h1 id="title">Welcome</h1>
//   <button id="changeButton">Change Text</button>
//   <input id="nameInput" type="text" placeholder="Type your name" />
//   <p id="message"></p>
//   <form id="myForm">
//     <input id="emailInput" type="email" placeholder="Email" />
//     <button type="submit">Send</button>
//   </form>
// </div>

// 2. Selecting HTML elements
// We can find elements by id, class, tag, or CSS selector.
const titleElement = document.getElementById('title');
const button = document.querySelector('#changeButton');
const nameInput = document.querySelector('#nameInput');
const messageParagraph = document.querySelector('#message');
const form = document.querySelector('#myForm');
const emailInput = document.querySelector('#emailInput');

// 3. Changing content and styles
// Change the text content of an element.
titleElement.textContent = 'DOM Manipulation ';

// Change the style of the title.
titleElement.style.color = 'red';
titleElement.style.fontFamily = 'Arial, sans-serif';

// Add a simple message in the paragraph.
messageParagraph.textContent = 'Type your name and click say hello.';
messageParagraph.style.fontSize = '24px';
messageParagraph.style.color = 'green';

// 4. Event listeners
// Run code when the button is clicked.
button.addEventListener('click', () => {
  const name = nameInput.value.trim();

  if (name === '') {
    messageParagraph.textContent = 'Please enter your name first.';
    messageParagraph.style.color = 'red';
    return;
  }

  messageParagraph.textContent = `Hello, ${name}! Nice to meet you.`;
  messageParagraph.style.color = 'blue';
});

// Run code when the user types in the input.
nameInput.addEventListener('input', () => {
  titleElement.textContent = 'Ready to greet!';
});

// 5. Form handling
// Prevent the form from reloading the page on submit.
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop the default browser behavior.

  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    messageParagraph.textContent = 'Please enter your email before sending.';
    messageParagraph.style.color = 'red';
    return;
  }

  messageParagraph.textContent = `Email saved: ${emailValue}`;
  messageParagraph.style.color = 'purple';

  // Clear the form field after submit.
  emailInput.value = '';
});

// Additional simple example: create a new element and add it to the page.
const newNote = document.createElement('p');
newNote.textContent = 'This line was added with JavaScript.';
newNote.style.fontStyle = 'italic';
newNote.style.color = 'orange';

const appDiv = document.querySelector('#app');
appDiv.appendChild(newNote);
