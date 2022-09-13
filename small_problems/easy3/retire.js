const rlSync = require('readline-sync');

let age = parseInt(rlSync.question('What is your age? '));
let retirementAge = parseInt(rlSync.question('At what age would you like to retire? '));

let years = retirementAge - age;

console.log(`It's 2022, you will retire in ${2022 + years}`);
console.log(`You have only ${years} left of work to go!`);
