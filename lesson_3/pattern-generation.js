//  1, 7 stars
//  2, 6 stars
//


function generatePattern(number) {
  for (let digits = 1; digits <= number; digits += 1) {
  let pattern = '';

  for (let number = 1; number <= digits; number += 1) {
    pattern += String(number);
  }

  for (let count = digits + 1; count <= number; count += 1) {
    pattern += '*';
  }

  console.log(pattern);
  }
}

generatePattern(8);