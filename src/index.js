import readlineSync from 'readline-sync';

const roundCount = 3;
const max = 100;
const min = 0;

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

const getRandom = (minV = min, maxV = max) => (Math.floor(Math.random() * (maxV - minV)) + minV);

const endGame = (counter, playerName) => {
  if (counter === roundCount) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

const gcdRec = (a, b) => {
  if (b) {
    return gcdRec(b, a % b);
  }

  return Math.abs(a);
};

const getProgression = (len) => {
  const firstElem = getRandom(1, 50);
  const step = getRandom(2, 10);

  const spaceIndex = getRandom(1, len);
  let spacedElem = 0;

  let progresChain = firstElem;

  for (let i = 1; i < len; i += 1) {
    const nextElem = firstElem + i * step;

    if (i !== spaceIndex) {
      progresChain = `${progresChain} ${nextElem}`;
    } else {
      progresChain = `${progresChain} ..`;
      spacedElem = nextElem;
    }
  }

  return { chain: progresChain, spaced: spacedElem };
};

const isPrime = (num) => {
  let answer = 'yes';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = 'no';
      break;
    }
  }

  return answer;
};

export {
  sayHello, roundCount, max, min, playerAnswer, getRandom, endGame, gcdRec,
  getProgression, isPrime,
};
