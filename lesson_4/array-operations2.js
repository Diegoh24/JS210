function indexOf(arr, value) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === value) return index;
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

function lastIndexOf(arr, value) {
  let lastIndex = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === value && index > lastIndex) lastIndex = index;
  }

  console.log(lastIndex ? lastIndex : -1);
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1

function push(arr, element) {
  arr[arr.length] = element
  return arr.length;
}

function slice(arr, startIndex, lastIndex) {
  let sliced = [];

  for (let index = startIndex; index < lastIndex; index += 1) {
    push(sliced, arr[index]);
  }

  console.log(sliced);
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]

function splice(arr, startIndex, length) {
  let splicedArr = []
  for (let index = startIndex; index < arr.length; index += 1) {
    if (index < startIndex + length) push(splicedArr, arr[index]);
    arr[index] = arr[index + length];
  }

  arr.length = arr.length - length;
  return splicedArr;
}

let count5 = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count5, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
console.log(count5);                                 // [ 1, 2, 8 ]

function concat(arr1, arr2) {
  let resultArr = [];

  for (let index = 0; index < arr1.length; index += 1) {
    push(resultArr, arr1[index]);
  }

  for (let index = 0; index < arr2.length; index += 1) {
    push(resultArr, arr2[index]);
  }

  console.log(resultArr);
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]

function join(arr, delimiter) {
  let string = ''

  arr.forEach( element => string += (String(element) + delimiter));

  console.log(string);
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'