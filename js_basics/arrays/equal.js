function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  let sortedArr1 = array1.slice().sort((a, b) => a - b);
  let sortedArr2 = array2.slice().sort((a, b) => a - b);

  for (let index = 0; index < array1.length; index += 1) {
    if (sortedArr1[index] !== sortedArr2[index]) return false;
  }

  return true;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true