import readlineSync from 'readline-sync';
import _ from 'lodash';
import greeting, { checkAnswer } from '../index.js';

export default () => {
  const userName = greeting();
  console.log('What is the result of the expression?');

  let i = 0;
  while (i < 3) {
    const numOne = _.random(1, 30);
    const numTwo = _.random(1, 30);
    const operations = ['-', '+', '*'];
    const randomOperation = _.sample(operations);
    const questionSum = `${numOne} ${randomOperation} ${numTwo}`;
    const answer = readlineSync.question(`Question: ${questionSum} \nYour answer: `);
    let sum;
    if (randomOperation === '*') {
      sum = numOne * numTwo;
    } else if (randomOperation === '-') {
      sum = numOne - numTwo;
    } else if (randomOperation === '+') {
      sum = numOne + numTwo;
    }
    const result = sum.toString();
    checkAnswer(result, answer, userName);

    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
