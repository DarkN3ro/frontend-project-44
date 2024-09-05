import readlineSync from 'readline-sync';

const checkDivider = (number) => {
  const result = [];
  for (let a = 1; a <= number; a += 1) {
    if ((number % a) === 0) {
      result.push(a);
    }
  }
  return result;
};

const checkPrime = (questionValue) => {
  if (questionValue <= 1) {
    return 'no';
  }
  let y = 2;
  while (y < questionValue) {
    if ((questionValue % y) === 0) {
      return 'no';
    }
    y += 1;
  }
  return 'yes';
};
export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const checkAnswer = (result, answer, userName) => {
  if (result === answer) {
    console.log('Correct!');
  } else if (result !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    process.exit();
  }
};

export { checkAnswer, checkDivider, checkPrime };
