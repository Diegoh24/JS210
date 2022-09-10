const rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun ');
let verb = rlSync.question('Enter a verb ');
let adjective = rlSync.question('enter an adjective ');
let adverb = rlSync.question('Enter an adverb ');

let msg = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;

console.log(msg);
