import startGame from '../index.js';
import {
  getProgressionStep, getRandomNumber, getMissingNumber, getProgression,
} from '../utils.js';

const progression = () => {
  const description = 'What number is missing in the progression?';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const progressitonStep = getProgressionStep();
    const firstNumber = getRandomNumber();
    const arithmeticProgression = getProgression(firstNumber, progressitonStep);

    const missingNumber = getMissingNumber();
    const correctAnswer = arithmeticProgression[missingNumber].toString();
    arithmeticProgression.splice(missingNumber, 1, '..');
    const question = arithmeticProgression.join(' ');

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }
  startGame(description, questions, correctAnswers);
};

export default progression;
