import {
    sayHello, roundCount, playerAnswer, max, min, getRandom, endGame,
} from '../src/index.js';

const playGame = () => {
    const playerName = sayHello();

    console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'');

    let counter = 0;
    let correctAnswer = '';

    while (counter < roundCount) {
        const number = getRandom(min, max);

        if (number % 2) {
            correctAnswer = 'no';
        } else {
            correctAnswer = 'yes';
        }

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
