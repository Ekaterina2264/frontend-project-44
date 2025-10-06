import BrainGames, { randomInt } from '../index.js';

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

function round() {
  const number = randomInt(0, 100);
  const question = String(number);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default function even() {
  BrainGames(description, round);
}
