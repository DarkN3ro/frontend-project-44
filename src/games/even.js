import readlineSync from 'readline-sync';
import _ from 'lodash';
import greeting, { checkAnswer } from '../index.js';

export default () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const checkEvenNum = (randomNumbers) => {
      if (randomNumbers % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    const randomNumbers = _.random(1, 20);
    const answer = readlineSync.question(`Question: ${randomNumbers} \nYour answer: `);
    const result = checkEvenNum(randomNumbers);
    checkAnswer(result, answer, userName);
    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
