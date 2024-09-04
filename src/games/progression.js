import readlineSync from 'readline-sync';
import _ from 'lodash';
import userName from '../cli.js';
import { checkAnswer } from '../index.js';

export default () => {
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  let i = 0;
  while (i < 3) {
    const firstNum = _.random(1, 20);
    const skipNum = _.random(2, 5);
    const hideNum = _.random(0, 9);
    let maxNum = firstNum;
    for (let x = 1; x <= 10; x += 1) {
      maxNum += skipNum;
    }

    const numbers = [];
    for (let j = firstNum; j < maxNum; j += skipNum) {
      numbers.push(j);
    }
    const rigthAnswer = numbers[hideNum].toString();
    numbers[hideNum] = '..';
    const questionNumbers = numbers.join(' ');
    const answer = readlineSync.question(`Question: ${questionNumbers} \nYour answer: `);
    const result = rigthAnswer;

    checkAnswer(result, answer, userName);
    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
