const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const getRandomNonZeroNumber = () => Math.round(1 + Math.random() * 100);

const getRandomMathOperator = () => {
  const mathOperators = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * 3);
  const randomMathOperator = mathOperators[randomNumber];

  return randomMathOperator;
};

const getGreatestCommonDivisor = (num1, num2) => {
  let firstNumber = num1;
  let secondNumber = num2;
  let remainder;
  let counter = true;
  let result;

  while (counter) {
    if (firstNumber > secondNumber) {
      remainder = firstNumber % secondNumber;
      if (remainder === 0) {
        result = secondNumber;
        counter = false;
      } else {
        firstNumber = remainder;
      }
    } else if (secondNumber > firstNumber) {
      remainder = secondNumber % firstNumber;
      if (remainder === 0) {
        result = firstNumber;
        counter = false;
      } else {
        secondNumber = remainder;
      }
    } else if (firstNumber === secondNumber) {
      result = firstNumber;
      counter = false;
    }
  }

  return result.toString();
};

export { getRandomNumber, isEven, getRandomMathOperator };
export { getGreatestCommonDivisor, getRandomNonZeroNumber };
