import readlineSync from 'readline-sync';

const readName = () => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const reradAnswer = (message) => {
  const answer = readlineSync.question(`${message}`);
  return answer;
};

const answerAudit = (answer, answerTrue, name) => {
  const result = answerTrue === answer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`,
    );
  }
  return result;
};

export { readName, reradAnswer, answerAudit };
