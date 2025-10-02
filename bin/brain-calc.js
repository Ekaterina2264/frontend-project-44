#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

let i = 0;
while (i < 3) {
  const a = Math.floor(Math.random() * 101);
  const b = Math.floor(Math.random() * 101);
  const operators = ['+', '-', '*'];
  const indexOperator = Math.floor(Math.random() * operators.length);
  const operator = operators[indexOperator];
  console.log(`Question: ${a} ${operator} ${b}`);
  const answer = readlineSync.question('Your answer: ');

  let correctAnswer;

  if (operator === '+') {
    correctAnswer = a + b;
  } else if (operator === '-') {
    correctAnswer = a - b;
  } else if (operator === '*') {
    correctAnswer = a * b;
  }

  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
}
