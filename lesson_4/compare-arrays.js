function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) return false;
  }

  return true
}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false

function firstElementOf(arr) {
  console.log(arr[0]);
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

function lastElementOf(arr) {
  console.log(arr[arr.length - 1]);
}

lastElementOf(['U', 'S', 'A']);  // returns "A"

function nthElementOf(arr, index) {
  console.log(arr[index]);
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // what does this return?
nthElementOf(digits, -1);  // what does this return?

function firstNOf(arr, count) {
  console.log(arr.slice(0, count));
}

let digits1 = [4, 8, 15, 16, 23, 42];
firstNOf(digits1, 3);    // returns [4, 8, 15]

function lastNOf(arr, count) {
  let index = arr.length - count;

  if (index < 0) { index = 0 }
  console.log(arr.slice(index));
}

let digits2 = [4, 8, 15, 16, 23, 42];
lastNOf(digits2, 9);    // returns [16, 23, 42]

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]