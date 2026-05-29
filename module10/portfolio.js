// Module 10: Portfolio Interactions
// This file contains example data and utility functions for a portfolio page.

export const projects = [
  {
    title: 'Calculator App',
    description: 'A simple calculator built with JavaScript functions and event handling.',
    url: 'module10/calculator.html',
  },
  {
    title: 'To-Do App',
    description: 'A small task manager with add, toggle, and remove features.',
    url: 'module10/todo.html',
  },
  {
    title: 'Quiz App',
    description: 'A quiz interface with question selection and scoring logic.',
    url: 'module10/quiz.html',
  },
  {
    title: 'Weather App',
    description: 'A weather lookup demo using async functions and placeholder data.',
    url: 'module10/weather.html',
  },
  {
    title: 'Portfolio Interactions',
    description: 'Interactive portfolio cards and project previews.',
    url: 'module10/portfolio.html',
  },
];

// Return the list of portfolio projects.
export function getProjects() {
  return [...projects];
}

// Find a single project by its title.
export function getProjectByTitle(title) {
  return projects.find((project) => project.title === title) || null;
}
