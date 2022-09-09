function stringToSignedInteger(string) {
  let integer = 0;
  let base = string.length - 1;
  let digits = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

  string.split('').forEach(function(digit) {
    if (digits[digit]) integer += (10 ** base) * digits[digit];
    base -= 1;
  });

  return string[0] === '-' ? -1 * integer : integer;
}

function stringToInteger(string) {
  let integer = 0;
  let base = string.length - 1;
  let digits = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

  string.split('').forEach(function(digit) {
    integer += (10 ** base) * digits[digit];
    base -= 1;
  });
  return integer;
}

// function stringToInteger(str) {
//     result = 0;
//     while (str != String(result)) {
//         result++;
//     }
//     return result;
// }


console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));


console.log(stringToSignedInteger('4321'));     // 4321
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));