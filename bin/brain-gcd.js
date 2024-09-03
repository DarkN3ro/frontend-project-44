#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import userName from '../src/cli.js';

console.log('Find the greatest common divisor of given numbers.');

let i = 0;
while (i < 3) {
  const numberOne = _.random(1, 100);
  const numberTwo = _.random(1, 100);
  const answer = readlineSync.question(`Question: ${numberOne} ${numberTwo}  \nYour answer: `);

  const resultOne = [];
  for (let l = 1; l <= numberOne; l += 1) {
    for (let j = 1; j <= numberOne; j += 1) {
      if ((numberOne / l) === j) {
        resultOne.push(l);
      }
    }
  }

  const resultTwo = [];
  for (let x = 1; x <= numberTwo; x += 1) {
    for (let y = 1; y <= numberTwo; y += 1) {
      if ((numberTwo / x) === y) {
        resultTwo.push(x);
      }
    }
  }

  const sameNum = [];
  for (let m = 0; m < resultOne.length; m += 1) {
    for (let k = 0; k < resultTwo.length; k += 1) {
      if (resultOne[m] === resultTwo[k]) {
        sameNum.push(resultOne[m]);
      }
    }
  }

  const findMaxNum = Math.max(...sameNum);
  const findMaxToStr = findMaxNum.toString();

  if (findMaxToStr === answer) {
    console.log('Correct!');
  } else if (findMaxToStr !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${findMaxToStr}'.\nLet's try again, ${userName}!`);
    process.exit();
  }
  i += 1;
}

console.log(`Congratulations, ${userName}!`);
