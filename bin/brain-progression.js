#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import userName from '../src/cli.js';
import { checkAnswer } from '../src/index.js';

console.log('What number is missing in the progression?');

let i = 0;
while (i < 3) {
  const num = _.random(1, 20);
  const skip = _.random(2, 5);
  const hide = _.random(0, 9);
  let maxNum = num;
  for (let x = 1; x <= 10; x += 1) {
    maxNum += skip;
  }

  const numbers = [];
  for (let j = num; j < maxNum; j += skip) {
    numbers.push(j);
  }
  const rigthAnswer = numbers[hide].toString();
  numbers[hide] = '..';
  const question = numbers.join(' ');
  const answer = readlineSync.question(`Question: ${question} \nYour answer: `);
  const result = rigthAnswer;

  checkAnswer(result, answer, userName);
  i += 1;
}

console.log(`Congratulations, ${userName}!`);
