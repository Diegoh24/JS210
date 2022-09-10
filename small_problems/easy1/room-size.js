const rlSync = require('readline-sync');

let length = rlSync.question('Enter the length of the room in meters:\n');
let width = rlSync.question('Enter the width of the room in meters: \n');
let area = Number(length) * Number(width);
let areaSquareFeet = area * 10.7639;

let message = `The area of the room is ${area.toFixed(2)} square meters (${areaSquareFeet.toFixed(2)} square feet).`;
console.log(message);

