import {
  sayHello, roundCount, playerAnswer, getRandom, endGame, gcdRec,
} from '../src/index.js';

const playGame = () => {
  const playerName = sayHello();

  console.log('Find the greatest common divisor of given numbers.');

  let counter = 0;

  while (counter < roundCount) {
    const number1 = getRandom();
    const number2 = getRandom();

    const correctAnswer = gcdRec(number1, number2);

    const result = playerAnswer(`${number1} ${number2}`, correctAnswer.toString(), playerName);

    if (result) {
      counter += 1;
    } else {
      break;
    }
  }

  endGame(counter, playerName);
};

export default playGame;
