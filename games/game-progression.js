import {
    sayHello, roundCount, playerAnswer, getRandom, endGame, getProgression,
} from '../src/index.js';

const playGame = () => {
    const playerName = sayHello();

    console.log('What number is missing in the progression?');

    let counter = 0;

    while (counter < roundCount) {
        const progressionLen = getRandom(5, 10);
        const objProgressionInfo = getProgression(progressionLen);

        const correctAnswer = objProgressionInfo.spaced.toString();

        const result = playerAnswer(objProgressionInfo.chain, correctAnswer, playerName);

        if (result) {
            counter += 1;
        } else {
            break;
        }
    }

    endGame(counter, playerName);
};

export default playGame;
