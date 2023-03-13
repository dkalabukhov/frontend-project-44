import startGame, { roundsNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomMathOperator = () => {
  const mathOperators = ['+', '-', '*'];
  const randomMathOperator = mathOperators[getRandomNumber(0, mathOperators.length - 1)];

  return randomMathOperator;
};

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < roundsNumber; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const mathOperator = getRandomMathOperator();
    const question = `${firstNumber} ${mathOperator} ${secondNumber}`;
    let tempAnswer;

    if (mathOperator === '+') {
      tempAnswer = firstNumber + secondNumber;
    } else if (mathOperator === '-') {
      tempAnswer = firstNumber - secondNumber;
    } else if (mathOperator === '*') {
      tempAnswer = firstNumber * secondNumber;
    }

    const correctAnswer = tempAnswer.toString();

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }

  startGame(description, questions, correctAnswers);
};

export default runCalcGame;
