import {
    sayHello, roundCount, playerAnswer, getRandom, endGame, isPrime,
} from '../src/index.js';

const playGame = () => {
    const playerName = sayHello();

    console.log('Answer \'yes\' if given number is prime. Otherwise answer \'no\'');

    let counter = 0;

    while (counter < roundCount) {
        const number = getRandom(1);

        const correctAnswer = isPrime(number);

        const result = playerAnswer(number, correctAnswer, playerName);

        if (result) {
            counter += 1;
        } else {
            break;
        }
    }

    endGame(counter, playerName);
};

export default playGame;
