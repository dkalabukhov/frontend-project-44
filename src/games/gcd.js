import startGame, { roundsNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let divisor;

  for (let i = 1; i <= firstNumber && i <= secondNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      divisor = i;
    }
  }

  return String(divisor);
};

const runGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < roundsNumber; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);

    correctAnswers.push(correctAnswer);
    questions.push(question);
  }

  startGame(description, questions, correctAnswers);
};

export default runGcdGame;
