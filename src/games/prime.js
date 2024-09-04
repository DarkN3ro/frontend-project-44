import readlineSync from 'readline-sync';
import _ from 'lodash';
import userName from '../cli.js';
import { checkAnswer, checkPrime } from '../index.js';

export default () => {
  console.log(`Hello, ${userName}!`);
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
