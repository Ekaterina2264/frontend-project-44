#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;
while (i < 3) {
  const random = Math.floor(Math.random() * 101);
  console.log(`Question: ${random}`);
  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = random % 2 === 0 ? 'yes' : 'no';

  if (answer === correctAnswer) {
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
