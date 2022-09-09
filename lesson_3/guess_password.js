const message = "The program displays a dialog that asks the user to enter a password. \
\nIf the user enters the wrong password, keep asking up to three times. After \
\nthree failures, log the access denied."

console.log(message);

const rlSync = require('readline-sync');

for (let attempt = 1; attempt <= 3; attempt += 1) {
  let input = rlSync.question('What is the password: ');

  if (input === 'password') {
    console.log("You successfully logged in.");
    break;
  } else if (attempt === 3) {
    console.log("You have been denied access");
  }
}
