/*
rot13..

cipher that translates a string to a new string

for each character in the original string:
if the character is a letter in the modern english alphabet (/a-z/i)
change it to the character 13 positions later in the alphabet.

a > n

n -m, else
+ - (26 - 13
*/
function rot13(string) {
  const rotateBy = 13;
  let encrypted = '';

  string.split('').forEach(function(char) {
    let charCode = char.charCodeAt();
    if (/[a-mA-M]/.test(char)) charCode += rotateBy;
    if (/[n-zN-Z]/.test(char)) charCode -= rotateBy;
    encrypted += String.fromCharCode(charCode);
  });

  return encrypted;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

 console.log(rot13("the quick brown fox jumps over the lazy dog.") === "gur dhvpx oebja sbk whzcf bire gur ynml qbt.");