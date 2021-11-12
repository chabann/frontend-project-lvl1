import readlineSync from 'readline-sync';

const sayHello = () => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);

    return playerName;
};

const playerAnswer = (number, correctAnswer, playerName) => {
    let result = true;
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${playerName}!`);
        result = false;
    }

    return result;
};

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const endGame = (counter, playerName) => {
    if (counter === roundCount) {
        console.log(`Congratulations, ${playerName}!`);
    }
};

const roundCount = 3;
const max = 100;
const min = 0;

export {
    sayHello, roundCount, max, min, playerAnswer, getRandom, endGame,
};
