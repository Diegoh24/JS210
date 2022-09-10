/*
slice method takes 3 arguments:
array, integer representing begin index, end index
- returns a new array containing the extracting elements from begin index
up to but not including end index
 does not mutate

*/

// function slice(arr, start, end) {
//   let newArr = []
//   end = end >= arr.length ? arr.length : end;

//   for (let index = start; index < end; index += 1) {
//     newArr.push(arr[index]);
//   }

//   console.log(newArr);
// }

// slice([1, 2, 3], 1, 2);               // [2]
// slice([1, 2, 3], 2, 0);               // []
// slice([1, 2, 3], 5, 1);               // []
// slice([1, 2, 3], 0, 5);               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// slice(arr1, 1, 3);                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

/*
starting at the starting index, you have to loop
deleteCount times to delete delteCount elements

how do you ensure that the elements are deleted and that the change is mutated?
you can iterate over the array, and anywhere where the elements fall in the range,
don't add them to the new array
*/
function splice(array, start, deleteCount, ...elements) {
  let validValues = []

  for (let index = 0; index < array.length; index += 1 ) {
    if (elements.length > 0 && index === start) {
      elements.forEach(val => validValues.push(val));
    }

    if (index < start || index >= deleteCount + start) {
      validValues.push(array[index]);
    }
  }

  for (let index = 0; index < validValues.length; index += 1) {
    array[index] = validValues[index]
  }
  array.length = validValues.length;
}

let a = [1, 2, 3]

splice(a, 1, 2);              // [2, 3]
// console.log(a);
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

const arr2 = [1, 2, 3];
splice(arr2, 1, 1, 'two');             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
splice(arr4, 1, 0);                    // []
splice(arr4, 1, 0, 'a');               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
splice(arr5, 0, 0, 'a');               // []
console.log(arr5);