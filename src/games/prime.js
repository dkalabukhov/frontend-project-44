import startGame, { roundsNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const runPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < roundsNumber; i += 1) {
    const question = getRandomNumber(2, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }

  startGame(description, questions, correctAnswers);
};

export default runPrimeGame;
