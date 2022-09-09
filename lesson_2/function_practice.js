function average(arr) {
  return sum(arr) / arr.length
}

function sum(arr) {
  let total = 0
  for (let index = 0; index < arr.length; index += 1) {
    total += arr[index];
  }
  return total
}

console.log(average([10, 5, 15]));