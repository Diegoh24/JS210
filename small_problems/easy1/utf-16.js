function utf16Value(string) {
  let utf16 = 0

  string.split('').forEach(function(char) {
    let charCode = char.charCodeAt();
    utf16 += charCode;
  });

  console.log(utf16);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);