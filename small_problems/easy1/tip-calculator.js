let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));
let tipPercent = Number(rlSync.question('What is the tip percentage? ')) / 100;

let tip = bill * tipPercent;
let total = bill + tip;
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);