import startGame from '../index.js';
import { getRandomNumber, getRandomMathOperator } from '../utils.js';

const calc = () => {
  const description = 'What is the result of the expression?';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
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

export default calc;
