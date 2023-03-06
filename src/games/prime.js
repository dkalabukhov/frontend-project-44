import startGame from '../index.js';
import { getRandomNumberAboveOne, isPrime } from '../utils.js';

const prime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumberAboveOne();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }

  startGame(description, questions, correctAnswers);
};

export default prime;
