// const NAME = 'Victor';

// console.log(`Good Morning, ${NAME}`);
// console.log(`Good Afternoon, ${NAME}`);
// console.log(`Good Evening, ${NAME}`);

let rlSync = require('readline-sync');

function getName() {
 let fname = rlSync.question("What's your first name?\n");
 let lname = rlSync.question("What's your last name?\n");
 return `${fname} ${lname}`
}

function greet(name) {
 console.log(`Hello ${name}!`);
}

greet(getName());