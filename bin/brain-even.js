#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import userName from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumbers = _.random(1, 20);
const answer = readlineSync.question(`Question: ${randomNumbers} \nYour answer: `);
if (randomNumbers % 2 === 0 && answer === 'yes') {
  console.log('Correct!');
} else if (randomNumbers % 2 !== 0 && answer === 'no') {
  console.log('Correct!');
} else if (randomNumbers % 2 !== 0 && answer !== 'no') {
  console.log(`'${answer}' is wrong answer ;(. Correct answer wes 'no'.\nLet's try again, ${userName}!`);
  process.exit();
} else if (randomNumbers % 2 === 0 && answer !== 'yes') {
  console.log(`'${answer}' is wrong answer ;(. Correct answer wes 'yes'.\nLet's try again, ${userName}!`);
  process.exit();
}

const randomNumbers2 = _.random(1, 20);
const answer2 = readlineSync.question(`Question: ${randomNumbers2} \nYour answer: `);
if (randomNumbers2 % 2 === 0 && answer2 === 'yes') {
  console.log('Correct!');
} else if (randomNumbers2 % 2 !== 0 && answer2 === 'no') {
  console.log('Correct!');
} else if (randomNumbers2 % 2 !== 0 && answer2 !== 'no') {
  console.log(`'${answer2}' is wrong answer ;(. Correct answer wes 'no'.\nLet's try again, ${userName}!`);
  process.exit();
} else if (randomNumbers2 % 2 === 0 && answer2 !== 'yes') {
  console.log(`'${answer2}' is wrong answer ;(. Correct answer wes 'yes'.\nLet's try again, ${userName}!`);
  process.exit();
}

const randomNumbers3 = _.random(1, 20);
const answer3 = readlineSync.question(`Question: ${randomNumbers3} \nYour answer: `);
if (randomNumbers3 % 2 === 0 && answer3 === 'yes') {
  console.log('Correct!');
} else if (randomNumbers3 % 2 !== 0 && answer3 === 'no') {
  console.log('Correct!');
} else if (randomNumbers3 % 2 !== 0 && answer3 !== 'no') {
  console.log(`'${answer3}' is wrong answer ;(. Correct answer wes 'no'.\nLet's try again, ${userName}!`);
  process.exit();
} else if (randomNumbers3 % 2 === 0 && answer3 !== 'yes') {
  console.log(`'${answer3}' is wrong answer ;(. Correct answer wes 'yes'.\nLet's try again, ${userName}!`);
  process.exit();
}

console.log(`Congratulations, ${userName}!`);
