function reverse(inputForReversal) {
  const IS_ARRAY = Array.isArray(inputForReversal)
  let reversedVal = IS_ARRAY ? [] : ''
  let length = inputForReversal.length

  for (let index = length -1; index >= 0; index -= 1) {
    let currentElement = inputForReversal[index]
    IS_ARRAY ? reversedVal.push(currentElement) : reversedVal += currentElement;
  }

  console.log(reversedVal);
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]