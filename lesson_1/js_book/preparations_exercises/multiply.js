let multiply = (num1, num2) => num1 * num2;

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

let x = getNumber("Enter the first number: ");
// let number2 = getNumber("Enter the second number: ");

// console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);

if (x === 3)                            // Example 5
  console.log("x is 3");
else if (x == 4)
  console.log("x is 4");
else
  console.log("x is not 3 nor 4");
