let rlSync = require('readline-sync')

let phrase = rlSync.question('Enter a phrase: ');

console.log(`There are ${phrase.length} characters in "${phrase}".`);