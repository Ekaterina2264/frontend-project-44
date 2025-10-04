import BrainGames from '../index.js';

const description = 'What number is missing in the progression?';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function round() {
  const start = randomInt(0, 20);
  const step = randomInt(1, 10);
  const length = randomInt(5, 10);
  const hiddenElem = randomInt(0, length - 1);

  const questionArr = [];
  for (let i = 0; i < length; i += 1) {
    questionArr.push(start + i * step);
  }
  const correctAnswer = questionArr[hiddenElem];
  questionArr[hiddenElem] = '..';
  const question = questionArr.join(' ');
  return [question, String(correctAnswer)];
}

export default function progression() {
  BrainGames(description, round);
}
