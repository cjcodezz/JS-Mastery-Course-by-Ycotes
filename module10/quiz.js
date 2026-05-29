// Module 10: Quiz App
// This file defines a simple quiz with questions and answer checking.

export const questions = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which language is used for web pages?',
    choices: ['Python', 'JavaScript', 'C++', 'Java'],
    answer: 'JavaScript',
  },
  {
    question: 'What is 5 + 7?',
    choices: ['10', '12', '14', '15'],
    answer: '12',
  },
];

// Get quiz question data by index.
export function getQuestion(index) {
  if (index < 0 || index >= questions.length) {
    throw new Error('Question index out of range');
  }
  return questions[index];
}

// Check whether the selected answer is correct.
export function checkAnswer(index, selectedChoice) {
  const question = getQuestion(index);
  return question.answer === selectedChoice;
}

// Run the quiz in a simple way and return the score.
export function runQuiz(answers) {
  if (!Array.isArray(answers)) {
    throw new Error('Answers must be provided as an array.');
  }

  let score = 0;
  answers.forEach((answer, index) => {
    if (checkAnswer(index, answer)) {
      score += 1;
    }
  });

  return {
    score,
    total: questions.length,
  };
}
