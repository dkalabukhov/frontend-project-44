import startGame from '../index.js';
import { getRandomNonZeroNumber, getGreatestCommonDivisor } from '../utils.js';

const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNonZeroNumber();
    const secondNumber = getRandomNonZeroNumber();
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);

    correctAnswers.push(correctAnswer);
    questions.push(question);
  }

  startGame(description, questions, correctAnswers);
};

export default gcd;
