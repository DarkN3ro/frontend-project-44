import readlineSync from 'readline-sync';
import _ from 'lodash';
import greeting, { checkAnswer, checkPrime } from '../index.js';

export default () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const questionValue = _.random(1, 100);
    const result = checkPrime(questionValue);
    const answer = readlineSync.question(`Question: ${questionValue} \nYour answer: `);
    checkAnswer(result, answer, userName);
    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
