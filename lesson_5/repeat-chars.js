function repeatedCharacters(string) {
  let charCount = {}

  let chars = string.toLowerCase().split('')
  chars.forEach(char => charCount[char] ? charCount[char] += 1 : charCount[char] = 1);

  chars.forEach(char => charCount[char] <  2 ? delete charCount[char] : '');

  console.log(charCount)
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }