import readlineSync from 'readline-sync';

const playGame = (max, min) => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${playerName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no"');

    let counter = 0;

    while (counter < 3) {
        const number = Math.floor(Math.random() * (max - min)) + min;
        let correctAnswer = '';

        if (number % 2) {
            correctAnswer = 'no';
        } else {
            correctAnswer = 'yes';
        }

        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');

        if (answer === correctAnswer) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
            console.log(`Let's try again, ${playerName}!`);
            break;
        }
    }

    if (counter === 3) {
        console.log(`Congratulations, ${playerName}!`);
    }
};

export default playGame;
