import readlineSync from 'readline-sync';

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function BrainGames(description, round, countRounds = 3) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}

export default BrainGames;
