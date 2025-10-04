import BrainGames from '../index.js';

const description =
  'Answer "yes" if the number is prime. Otherwise answer "no".';

function round() {
  const number = Math.floor(Math.random() * 101);
  const question = String(number);
  let correctAnswer;

  if (number < 2) {
    correctAnswer = 'no';
  } else if (number === 2) {
    correctAnswer = 'yes';
  } else if (number % 2 === 0) {
    correctAnswer = 'no';
  } else {
    let isPrime = true;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    correctAnswer = isPrime ? 'yes' : 'no';
  }
  return [question, correctAnswer];
}

export default function prime() {
  BrainGames(description, round);
}
