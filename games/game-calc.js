import {
    sayHello, roundCount, playerAnswer, getRandom, endGame,
} from '../src/index.js';

const signs = ['+', '-', '*'];

const playGame = () => {
    const playerName = sayHello();

    console.log('What is the result of the expression?');

    let counter = 0;
    let correctAnswer = '';

    while (counter < roundCount) {
        const number1 = getRandom();
        const number2 = getRandom();
        const sign = getRandom(0, signs.length);

        switch (sign) {
        case 0:
            correctAnswer = number1 + number2;
            break;
        case 1:
            correctAnswer = number1 - number2;
            break;
        case 2:
            correctAnswer = number1 * number2;
            break;
        default:
            break;
        }

        const result = playerAnswer(`${number1} ${signs[sign]} ${number2}`, correctAnswer.toString(), playerName);

        if (result) {
            counter += 1;
        } else {
            break;
        }
    }

    endGame(counter, playerName);
};

export default playGame;
