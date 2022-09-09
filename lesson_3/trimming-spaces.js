function trim(string) {
  let trimmedString = '';

  for (let index = 0; index < string.length; index += 1) {
   trimmedString += string[index] ? string[index] : '';
  }
  console.log(trimmedString);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
// trim('      ');   // ""
// trim('');