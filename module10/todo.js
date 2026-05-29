// Module 10: To-Do App
// This file includes a basic to-do list manager with add, toggle, and remove logic.

const todos = [];

// Create a new to-do item and add it to the list.
export function addTodo(text) {
  const todo = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
  };

  if (!todo.text) {
    throw new Error('Todo text cannot be empty.');
  }

  todos.push(todo);
  return todo;
}

// Toggle the completed state for a single to-do.
export function toggleTodo(id) {
  const todo = todos.find((item) => item.id === id);
  if (!todo) {
    throw new Error('Todo not found: ' + id);
  }
  todo.completed = !todo.completed;
  return todo;
}

// Remove a to-do by ID.
export function removeTodo(id) {
  const index = todos.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error('Todo not found: ' + id);
  }
  return todos.splice(index, 1)[0];
}

// Return a copy of the current to-do list.
export function listTodos() {
  return todos.map((item) => ({ ...item }));
}
