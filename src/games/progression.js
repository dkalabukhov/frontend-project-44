import startGame, { roundsNumber } from '../index.js';
import getRandomNumber from '../utils.js';

const integerOfSeries = 10;

const getProgression = (startingNumber, progressionStep, seriesNumber) => {
  const arithmeticProgression = [startingNumber];
  let temp = startingNumber;

  for (let i = 0; i < seriesNumber - 1; i += 1) {
    temp += progressionStep;
    arithmeticProgression.push(temp);
  }

  return arithmeticProgression;
};

const runProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < roundsNumber; i += 1) {
    const progressitonStep = getRandomNumber(1, 5);
    const startingNumber = getRandomNumber(1, 100);
    const arithmeticProgression = getProgression(startingNumber, progressitonStep, integerOfSeries);

    const missingNumber = getRandomNumber(0, 9);
    const correctAnswer = arithmeticProgression[missingNumber].toString();
    arithmeticProgression[missingNumber] = '..';
    const question = arithmeticProgression.join(' ');

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }
  startGame(description, questions, correctAnswers);
};

export default runProgressionGame;
