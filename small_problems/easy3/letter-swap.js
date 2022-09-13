function swap(string) {
  let chars = string.split('')
  let lastIndex = chars.length - 1;
  [chars[0], chars[lastIndex]] = [chars[lastIndex], chars[0]]

  console.log(chars.join(''));
}

function swap(string) {
  return string.split(' ').map(word => {
    return word.replace(/(^.)(.*)(.$)/, '$3$2$1' )
  }).join(' ')
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"