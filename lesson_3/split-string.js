function splitString(string, delimiter) {
  let delimitedString = ''

  for (let index = 0; index < string.length; index += 1) {
    let currentCharacter = string[index]

    if (currentCharacter !== delimiter) delimitedString += currentCharacter;

    if (currentCharacter === delimiter || !delimiter) {
      console.log(delimitedString);
      delimitedString = ''
    }
  }

  if (!!delimitedString) console.log(delimitedString);
}

// first argument is a string, second argument given is the delimiter
//  declare a variable 'delimitedstring'
//  iterate over the string by index,
  //concatenate and reassign every string to the variable delimitedString
//  if one of the characters is the delimiter, log the string and reassign it to an empty string.

splitString('abc,123,hello world', ',');

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o
splitString('hello', ';');
// logs:
// hello
splitString(';hello;', ';');
// logs:
//  (this is a blank line)