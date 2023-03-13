import readlineSync from 'readline-sync';

export const roundsNumber = 3;

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const showGameDescription = (description) => {
  console.log(description);
};

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const showCongratulations = (username) => {
  console.log(`Congratulations, ${username}`);
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// description, [questions], [correctAnswers]
const startGame = (description, questions, correctAnswers) => {
  const username = sayGreetings();
  showGameDescription(description);

  for (let i = 0; i < roundsNumber; i += 1) {
    showQuestion(questions[i]);
    const answer = getAnswer();

    if (answer === correctAnswers[i]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswers[i]}.`);
      console.log(`Let's try again, ${username}`);
      return;
    }
  }

  showCongratulations(username);
};

export default startGame;
