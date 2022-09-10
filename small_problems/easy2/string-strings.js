function stringy(number) {
  let binaryString = '';

  for (let index = 1; index <= number; index += 1) {
    let binary = index % 2 !== 0 ? 1 : 0;
    binaryString += String(binary);
  }

  console.log(binaryString);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"