function runningTotal(numbers) {
  console.log(numbers.map((number, idx) => numbers.slice(0, idx + 1).reduce((a, b) => a + b)));
}
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []


