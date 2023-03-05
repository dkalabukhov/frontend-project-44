const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const getRandomNonZeroNumber = () => Math.round(1 + Math.random() * 100);

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

export { getRandomNumber, isEven, getRandomMathOperator };
export { getGreatestCommonDivisor, getRandomNonZeroNumber };
