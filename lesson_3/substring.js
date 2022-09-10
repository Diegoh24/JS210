// input: string, start_index, length
// output: string, starting at index1, of length

// declare and initialize subString to ''
// iterate over string, starting at startIndex, length times.
// at each iteration access the stirng at currenIndex, concatenate to subString
// return subString

function substr(string, start, length) {
  if (start < 0) start = string.length + start;
  let subString = '';

  for (let size = 1; size <= length; size += 1) {
    if (!string[start]) break;
    subString += string[start];
    start += 1
  }

  return subString
}


let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""