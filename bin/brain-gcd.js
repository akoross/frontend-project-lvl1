#!/usr/bin/env node
import { readName, reradAnswer, answerAudit } from '../src/cli.js';

const name = readName();
console.log('Find the greatest common divisor of given numbers.');
let counter = 3;
while (counter > 0) {
  const number1 = Math.ceil(Math.random() * 25);
  const number2 = Math.ceil(Math.random() * 25);
  const question = `Question: ${number1} ${number2}\nYour answer: `;
  let answerTrue = 1;

  for (let i = number1; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      answerTrue = i;
      break;
    }
  }

  const answer = reradAnswer(question);

  if (answerAudit(Number(answer), answerTrue, name)) {
    counter -= 1;
  } else {
    counter = -1;
  }
}

if (counter === 0) {
  console.log(`Congratulations, ${name}!`);
}
