rlSync = require('readline-sync');
numberOne = Number(rlSync.question('Enter the first number: '));
numberTwo = Number(rlSync.question('Enter the second number: '));

console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);

console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);
console.log(`${numberOne} / ${numberTwo} = ${parseInt(numberOne / numberTwo)}`);
console.log(`${numberOne} % ${numberTwo} = ${numberOne % numberTwo}`);
console.log(`${numberOne} ** ${numberTwo} = ${numberOne ** numberTwo}`);