#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import userName from '../src/cli.js';

console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;
while (i < 3) {
  const randomNumbers = _.random(1, 20);
  const answer = readlineSync.question(`Question: ${randomNumbers} \nYour answer: `);
  if (randomNumbers % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  } else if (randomNumbers % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
  } else if (randomNumbers % 2 !== 0 && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    process.exit();
  } else if (randomNumbers % 2 === 0 && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    process.exit();
  }
  i += 1;
}

console.log(`Congratulations, ${userName}!`);
