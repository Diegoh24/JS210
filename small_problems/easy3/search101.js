let rlSync = require('readline-sync');
let numbers = []


for (let number = 1; number < 6; number += 1) {
  let message = `Enter the ${number} number: `;
  let inputNumber = rlSync.question(message);
  numbers.push(Number(inputNumber));
}

let last = Number(rlSync.question('Enter the last number: '));
let inNumbers = numbers.includes(last) ? 'does' : 'does not';

console.log(`The number ${last} ${inNumbers} appear in `, numbers);



