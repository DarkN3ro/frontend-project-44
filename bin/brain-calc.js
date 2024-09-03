#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import userName from '../src/cli.js';

console.log('What is the result of the expression?');

let i = 0;
while (i < 3) {
  const numOne = _.random(1, 30);
  const numTwo = _.random(1, 30);
  const operations = ['-', '+', '*'];
  const random = _.sample(operations);
  const sum = `${numOne} ${random} ${numTwo}`;
  const answer = readlineSync.question(`Question: ${sum} \nYour answer: `);
  let result;
  if (random === '*') {
    result = numOne * numTwo;
  } else if (random === '-') {
    result = numOne - numTwo;
  } else if (random === '+') {
    result = numOne + numTwo;
  }
  const str = result.toString();
  if (str === answer) {
    console.log('Correct!');
  } else if (result !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${str}'.\nLet's try again, ${userName}!`);
    process.exit();
  }
  i += 1;
}

console.log(`Congratulations, ${userName}!`);