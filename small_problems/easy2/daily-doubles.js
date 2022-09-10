function crunch(string) {
  let crunch = ''

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index + 1]) {
      crunch += string[index];
    }
  }

  console.log(crunch);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""