const checkAnswer = (result, answer, userName) => {
  if (result === answer) {
    console.log('Correct!');
  } else if (result !== answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    process.exit();
  }
};

const checkDivider = (number) => {
  const result = [];
  for (let a = 1; a <= number; a += 1) {
    for (let b = 1; b <= number; b += 1) {
      if ((number / a) === b) {
        result.push(a);
      }
    }
  }
  return result;
};

export { checkAnswer, checkDivider };
