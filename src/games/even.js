import startGame from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const even = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    questions.push(randomNumber);
    correctAnswers.push(correctAnswer);
  }

  startGame(description, questions, correctAnswers);
};

export default even;
