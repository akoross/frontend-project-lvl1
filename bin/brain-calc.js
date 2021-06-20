#!/usr/bin/env node
import { readName, reradAnswer, answerAudit } from '../src/cli.js';

const name = readName();
console.log('What is the result of the expression?');
const operator = ['+', '-', '*'];
let counter = 3;
while (counter > 0) {
  const number1 = Math.floor(Math.random() * 25);
  const number2 = Math.floor(Math.random() * 25);
  const operatorId = Math.floor(Math.random() * 3);
  const question = `Question: ${number1} ${operator[operatorId]} ${number2}\nYour answer: `;
  let answerTrue = 0;

  switch (operator[operatorId]) {
    case '+':
      answerTrue = number1 + number2;
      break;
    case '-':
      answerTrue = number1 - number2;
      break;
    case '*':
      answerTrue = number1 * number2;
      break;
    default:
      break;
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
