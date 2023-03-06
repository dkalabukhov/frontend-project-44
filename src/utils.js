const isEven = (number) => number % 2 === 0;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getRandomNumberAboveOne = () => Math.round(Math.random() * 100 + 2);

const getRandomNumber = () => Math.round(Math.random() * 100);

const getRandomNonZeroNumber = () => Math.round(1 + Math.random() * 100);

const getProgressionStep = () => Math.round(Math.random() * 4 + 1);

const getProgression = (firstNumber, progressionStep) => {
  const arithmeticProgression = [firstNumber];
  let temp = firstNumber;

  for (let j = 0; j < 9; j += 1) {
    temp += progressionStep;
    arithmeticProgression.push(temp);
  }

  return arithmeticProgression;
};

const getMissingNumber = () => Math.round(Math.random() * 9);

const getRandomMathOperator = () => {
  const mathOperators = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * 3);
  const randomMathOperator = mathOperators[randomNumber];

  return randomMathOperator;
};

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let divisor;

  for (let i = 1; i <= firstNumber && i <= secondNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      divisor = i;
    }
  }

  return divisor.toString();
};

export {
  isEven, getRandomNumber, getRandomNonZeroNumber, getProgressionStep, getMissingNumber,
  getRandomMathOperator, getGreatestCommonDivisor, getProgression, getRandomNumberAboveOne,
  isPrime,
};
