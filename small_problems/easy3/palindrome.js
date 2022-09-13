function isPalindrome(string) {
  return (string.split('').join() === string.split('').reverse().join());
}

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

function isRealPalindrome(string) {
  let alphanumericString = string.replace(/[^a-z]/gi, '').toLowerCase();
  console.log(isPalindrome(alphanumericString));
}

// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

function isPalindromicNumber(number) {
  console.log(isPalindrome(String(number)));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true