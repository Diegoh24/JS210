// iterate over the string
// declare and initialize lowercaseString to empty string
// at each character, get the char code, assign it to a variable char code
// increment charCode by 32
// use static method fromCharCode, passing in charCode variable as arg
// assign the return value of the static method to variable lowercase
// concatenate lowercase character to lowercaseString


// edge cases: when the character is an integer,
// also don't increment and also when it's
// already lowercase.

// how to check if it is lowercase???
// array of lowercased letters
// how to check if character is already lowercase...
// use ascii code? regex??

function toLowerCase(string) {
  let lowercaseString = ''

  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);

    if (!Number(string[index]) && /[A-Z]/.test(string[index])) {
      charCode += 32
    }

    let lowercaseChar = String.fromCharCode(charCode);
    lowercaseString += lowercaseChar;
  }

  return lowercaseString;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');