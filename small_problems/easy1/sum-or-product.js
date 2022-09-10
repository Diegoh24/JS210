let rlSync = require('readline-sync');

let number = Number(rlSync.question('Please enter an integer greater than 0:'));

let operation = rlSync.question('Enter "s" to compute sum, or "p" to compute product');
operation = operation === 's' ? 'sum' : 'product'

let result = 1;

if (operation === 'sum') {
  for (let currentNum = 2; currentNum <= number; currentNum += 1) {
    result += currentNum
  }
} else {
  for (let currentNum = 2; currentNum <= number; currentNum += 1) {
    result *= currentNum;
  }
}

console.log(`The ${operation} of the integers between 1 and ${number} is ${result}.`);