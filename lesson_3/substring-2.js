/*
input: string, start, end
start && end > 0 && start && end < string length
- if both conditions are true, return string from index start to index end - 1

if start > end, swap the values
if start === end, return ''
if end is omitted, end defaults to the end of the string, last index

if start || end is less than 0 or NaN, treat it as 0.
if either start or end is greate rthan the length of str, default to string lengt - 1
*/

function substring(string, start, end = string.length) {
  let substring = ''
  let startCopy = start;

  if (start > end) {
    start = end;
    end = startCopy;
  }

  if (start < 0 || !Number(start)) start = 0;
  if (end < 0 || !Number(end)) end = 0;


  for (let index = start; index < end; index += 1) {
    substring += string[index] || ''
  }
  console.log(substring);
}


let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   //