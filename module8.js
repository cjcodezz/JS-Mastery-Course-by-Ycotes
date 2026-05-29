// Module 8: APIs and Async JavaScript
// This file demonstrates using the Fetch API, handling JSON, and working with async/await.

// Helper to log messages in the browser and console.
function log(message) {
  console.log(message);
  const out = document.querySelector('#output');
  if (out) {
    const line = document.createElement('div');
    line.textContent = message;
    out.appendChild(line);
  }
}

// Build a safe fetch wrapper that handles HTTP errors consistently.
async function safeFetch(url, options = {}) {
  const response = await fetch(url, options);

  // Throw for non-2xx HTTP responses so callers can catch the error.
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
  }

  // Parse JSON from the response body.
  return response.json();
}

// 1) Fetch API example: GET request to load a list of users.
async function fetchUsersExample() {
  log('Fetching users...');

  try {
    const users = await safeFetch('https://jsonplaceholder.typicode.com/users');
    log(`Loaded ${users.length} users.`);
    log('First user: ' + JSON.stringify(users[0]));
  } catch (error) {
    log('Error fetching users: ' + error.message);
  }
}

// 2) Fetch API example: POST request to create a new post.
async function createPostExample() {
  log('Creating a new post...');

  const postBody = {
    title: 'My Async JavaScript Post',
    body: 'This post was sent using Fetch API and async/await.',
    userId: 42,
  };

  try {
    const createdPost = await safeFetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    });

    log('Post created successfully. ID: ' + createdPost.id);
    log('Response body: ' + JSON.stringify(createdPost));
  } catch (error) {
    log('Error creating post: ' + error.message);
  }
}

// 3) Error handling example: attempt to fetch a missing resource.
async function fetchWithErrorExample() {
  log('Fetching a nonexistent resource to demonstrate error handling...');

  try {
    await safeFetch('https://jsonplaceholder.typicode.com/unknown-route');
  } catch (error) {
    log('Expected error: ' + error.message);
  }
}

// 4) Working with JSON example: converting objects to JSON and back.
function jsonExample() {
  const data = {
    name: 'Aisha',
    age: 23,
    skills: ['JavaScript', 'APIs', 'async/await'],
  };

  // Convert a JavaScript object into a JSON string.
  const jsonString = JSON.stringify(data);
  log('JSON string: ' + jsonString);

  // Convert the JSON string back into a JavaScript object.
  const parsedData = JSON.parse(jsonString);
  log('Parsed object name: ' + parsedData.name);
}

// Expose functions for console usage.
window.module8 = {
  fetchUsersExample,
  createPostExample,
  fetchWithErrorExample,
  jsonExample,
};

log('Module 8 loaded. Run module8.fetchUsersExample(), module8.createPostExample(), module8.fetchWithErrorExample(), or module8.jsonExample() from the console.');
