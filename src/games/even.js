import startGame, { roundsNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < roundsNumber; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    questions.push(randomNumber);
    correctAnswers.push(correctAnswer);
  }

  startGame(description, questions, correctAnswers);
};

export default runEvenGame;
