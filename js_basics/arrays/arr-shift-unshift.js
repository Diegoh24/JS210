function shift(arr) {
  let first = arr[0];

  let tempArr = arr.slice(1);
  for (let index = 0; index < tempArr.length; index += 1) {
    arr[index] = tempArr[index];
  }

  arr.length = tempArr.length;
  return first;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

function unshift(arr, ...newElements) {
  let newArr = newElements
  arr.forEach(val => newArr.push(val) );

  for (let index = 0; index < newArr.length; index += 1) {
    arr[index] = newArr[index];
  }

  return arr.length
}

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]