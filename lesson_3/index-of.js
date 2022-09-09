// function indexOf(firstString, secondString) {
//   for (let index = 0; index < firstString.length; index += 1) {
//     for (let lastIndex = index + 1; lastIndex <= firstString.length; lastIndex += 1) {
//       let substring = firstString.slice(index, lastIndex);
//       if (substring === secondString) {
//         console.log(index);
//         return
//       }
//     }
//   }
//   console.log(-1);
//   return -1
// }

function indexOf(firstString, secondString) {
  let firstIndex = 0;

  for (let index = 0; index < firstString.length ; index += 1) {
    let substring = firstString[index];
    for (let index2 = index + 1; index2 < firstString.length; index2 += 1) {
      if (substring == secondString) firstIndex = index;
      substring += firstString[index2];
      if (substring == secondString) firstIndex = index;
    }
  }

  return firstIndex ? firstIndex : -1;
}


indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');


// function lastIndexOf(firstString, secondString) {
//   let finalIndex = 0;
//   for (let index = 0; index < firstString.length; index += 1) {
//     for (let lastIndex = index + 1; lastIndex <= firstString.length; lastIndex += 1) {
//       let substring = firstString.slice(index, lastIndex);
//       if (substring === secondString) {
//         finalIndex = finalIndex < index ? index : finalIndex;
//       }
//     }
//   }
//   return finalIndex ? finalIndex : -1;
// }

function lastIndexOf(firstString, secondString) {
  let lastIndex = 0;

  for (let index = 0; index < firstString.length ; index += 1) {
    let substring = firstString[index];
    if (substring === secondString) lastIndex = lastIndex < index ? index : lastIndex;

    for (let index2 = index + 1; index2 < firstString.length; index2 += 1) {
      substring += firstString[index2];
      if (substring === secondString) lastIndex = lastIndex < index ? index : lastIndex;
    }
  }

  console.log(lastIndex ? lastIndex : -1);
}

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');