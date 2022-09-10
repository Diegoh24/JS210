function oddElementsOf(arr) {
  let oddArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (index % 2 !== 0) oddArray.push(arr[index]);
  }

  return oddArray;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

function appendReversedArr(arr) {
  return arr.concat(arr.slice().reverse());
}

console.log(appendReversedArr(digits));

function sortDescending(arr) {
  let copyArr = arr.slice();
  return copyArr.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function matrixSums(arr) {
  return arr.map( arr => arr.reduce((sum, num) => sum + num));
}

result = matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]
console.log(result);

function uniqueElements(arr) {
  let uniqueArr = [];
  arr.forEach( element => !uniqueArr.includes(element) ? uniqueArr.push(element) : '');
  return uniqueArr;
}

result = uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
console.log(result);

function missing(arr) {
  let missingInts = [];

  for (let currentNum = arr[0]; currentNum <= arr[arr.length - 1]; currentNum += 1) {
    arr.includes(currentNum) ? 'continue' : missingInts.push(currentNum);
  }

  return missingInts;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []