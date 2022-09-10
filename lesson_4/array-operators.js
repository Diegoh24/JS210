function push(arr, element) {
  arr[arr.length] = element
  return arr.length;
}


let count = [0, 1, 2];
push(count, 3);         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

function pop(arr) {
  let last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  console.log(last);
}

let c = [1, 2, 3];
pop(c);             // 3
console.log(c);                  // [ 1, 2 ]

console.log('3 :');

function unshift(arr, element) {
  for (let index = arr.length; index > 0; index -= 1) {
    arr[index] = arr[index - 1];
  }

  arr[0] = element;
  return arr.length
}

let count2 = [1, 2, 3];
unshift(count2, 0);      // 4
console.log(count2);                  // [ 0, 1, 2, 3 ]

function shift(arr) {
  let first = arr[0]
  for (let index = 0; index < arr.length - 1; index += 1) {
    arr[index] = arr[index + 1]
  }

  arr.length = arr.length - 1;
  return first;
}

let count3= [1, 2, 3];
shift(count3);           // 1
console.log(count3);                  // [ 2, 3 ]