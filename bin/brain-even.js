#!/usr/bin/env node
import { readName, reradAnswer } from '../src/cli.js';

const name = readName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 3;
while (counter > 0) {
  const number = Math.floor(Math.random() * 100);

  let answerTrue;
  if (number % 2 === 0) {
    answerTrue = 'yes';
  } else {
    answerTrue = 'no';
  }

  const answer = reradAnswer(`Question: \n${number}\nYour answer: `);

  if (answerTrue === answer) {
    console.log('Correct!');
    counter -= 1;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.Let's try again, ${name}!`,
    );
    counter = -1;
  }
}
if (counter === 0) {
  console.log(`Congratulations, ${name}!`);
}
