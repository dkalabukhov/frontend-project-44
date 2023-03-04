import readlineSync from 'readline-sync';
import { sayGreetings } from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const even = () => {
  const username = sayGreetings();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${username}`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default even;
