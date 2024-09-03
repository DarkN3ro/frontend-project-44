#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import userName from '../src/cli.js';
import { checkAnswer } from '../src/index.js';

console.log('What is the result of the expression?');

let i = 0;
while (i < 3) {
  const numOne = _.random(1, 30);
  const numTwo = _.random(1, 30);
  const operations = ['-', '+', '*'];
  const random = _.sample(operations);
  const questionSum = `${numOne} ${random} ${numTwo}`;
  const answer = readlineSync.question(`Question: ${questionSum} \nYour answer: `);
  let sum;
  if (random === '*') {
    sum = numOne * numTwo;
  } else if (random === '-') {
    sum = numOne - numTwo;
  } else if (random === '+') {
    sum = numOne + numTwo;
  }
  const result = sum.toString();
  checkAnswer(result, answer, userName);

  i += 1;
}

console.log(`Congratulations, ${userName}!`);
