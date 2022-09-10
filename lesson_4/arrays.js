function lastInArray(arr) {
  return arr[arr.length - 1]
}

let lastInArr = arr => arr[arr.lengt - 1];

function rollCall(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    console.log(arr[index]);
  }
}

rollCall(['diego', 'rafael', 'juanita']);

let names = ['diego', 'rafael', 'juanita'];

function reverseArray(arr) {
  let reversedArr = []

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    reversedArr.push(arr[index]);
  }

  console.log(reversedArr);
}

reverseArray(names);


function arrToStr(arr) {
  let string = ''

  for (let index = 0; index < arr.length; index += 1) {
    string += String(arr[index]);
  }

  return string;

}

arrToStr([1, 'a', 4]);