// function evenOrOdd(number) {
// if (typeof number !== 'number') { return "NOT A NUMBER" };
// return number % 2 == 0 ? 'even' : 'odd';
// }

// let x = 'lol';

// console.log(evenOrOdd(x));

// function upperIfTenOrMore(string) {
//   return string.length > 10 ? string.toUpperCase() : string;
// }

// console.log(upperIfTenOrMore('hello world'));
// console.log(upperIfTenOrMore('hello'));

function numberRange(number) {
 if (number <= 50 ) {
   return number < 0 ? `${number} is less than 0` : `${number} is between 0 and 50`;
 } else if (number <= 100) {
   return `${number} is between 51 and 100`;
 } else {
   return `${number} is greater than 100`;
 }
}

console.log(numberRange(25));
console.log(numberRange(75));
console.log(numberRange(125));
console.log(numberRange(-25));



numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);