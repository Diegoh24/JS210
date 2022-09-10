function shortLongShort(string1, string2) {
  let shortString = string1.length < string2.length ? string1 : string2;
  let longString = shortString === string1 ? string2 : string1;

  console.log(shortString + longString + shortString);
}
// given 2 strings, determine which is the longer string:
// asses the size of both strings, assign the shorter string to var shortString
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"