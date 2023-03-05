const getRandomNumber = () => Math.round(Math.random() * 100);

const getRandomMathOperator = () => {
  const mathOperators = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * 3);
  const randomMathOperator = mathOperators[randomNumber];

  return randomMathOperator;
};

const isEven = (number) => number % 2 === 0;

export { getRandomNumber, isEven, getRandomMathOperator };
