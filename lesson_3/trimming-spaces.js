function trim(string) {
  let startIndex = 0

  while (string[startIndex] === ' ') {
    startIndex += 1
  }

  let lastIndex = string.length - 1

  while (string[lastIndex] === ' ') {
    lastIndex -= 1;
  }

  let trimmedString = '';
  for (let index = startIndex; index <= lastIndex; index += 1) {
    trimmedString += string[index]
  }

  console.log(trimmedString);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');