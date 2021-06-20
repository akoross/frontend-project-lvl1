#!/usr/bin/env node
import { readName, reradAnswer, answerAudit } from '../src/cli.js';

const name = readName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let counter = 3;
while (counter > 0) {
  const number = Math.floor(Math.random() * 10);

  let answerTrue = 'yes';
  if (number === 0 || number === 1) {
    answerTrue = 'no';
  } else if (number > 3) {
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        answerTrue = 'no';
      }
    }
  }

  const answer = reradAnswer(`Question: \n${number}\nYour answer: `);

  if (answerAudit(answer, answerTrue, name)) {
    counter -= 1;
  } else {
    counter = -1;
  }
}
if (counter === 0) {
  console.log(`Congratulations, ${name}!`);
}
