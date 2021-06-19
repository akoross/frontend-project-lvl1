import readlineSync from 'readline-sync';

const readName = () => {
  console.log('\nWelcom to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const reradAnswer = (message) => {
  const answer = readlineSync.question(`${message}`);
  return answer;
};

export { readName, reradAnswer };
