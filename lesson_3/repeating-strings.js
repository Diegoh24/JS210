function repeat(string, times) {
  let finalString = ''

  if (times < 0 || typeof times !== 'number') return;

  for (let repeat = 1; repeat <= times; repeat += 1) {
    finalString += string;
  }

  return finalString;
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""

repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined