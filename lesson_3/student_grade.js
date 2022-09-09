function letterGrade(grade) {
 switch (Math.floor(grade/ 10)) {
    case 10:
    case 9:
      return 'A';
    case 8:
    case 7:
      return 'B';
    case 6:
    case 5:
      return 'C';
    default:
      return 'F';
  }
}

const rlSync = require('readline-sync');
let grades = [];

for (let count = 1; count <= 3; count += 1) {
 let grade = rlSync.question(`Enter score ${count}: `);
 grades.push(Number(grade));
}

let average = grades.reduce((sum, grade) => sum + grade) / grades.length;

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade(average)}".`);