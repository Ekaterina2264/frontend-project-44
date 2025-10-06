import BrainGames, { randomInt } from '../index.js';

const description = 'What is the result of the expression?';

function round() {
  const a = randomInt(0, 10);
  const b = randomInt(0, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${a} ${operator} ${b}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = a + b;
      break;
    case '-':
      correctAnswer = a - b;
      break;
    case '*':
      correctAnswer = a * b;
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }

  return [question, String(correctAnswer)];
}

export default function сalc() {
  BrainGames(description, round);
}
