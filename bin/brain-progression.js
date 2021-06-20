#!/usr/bin/env node
import { readName, reradAnswer, answerAudit } from '../src/cli.js';

const name = readName();
console.log('What number is missing in the progression?');
let counter = 3;
while (counter > 0) {
  const number = Math.ceil(Math.random() * 10);
  const step = Math.ceil(Math.random() * 10);
  const missElement = Math.floor(Math.random() * 9);
  const progression = [number];
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const progressionMiss = [...progression];
  progressionMiss[missElement] = '..';
  const question = `Question: ${progressionMiss.join(' ')}\nYour answer: `;
  const answerTrue = progression[missElement];

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
