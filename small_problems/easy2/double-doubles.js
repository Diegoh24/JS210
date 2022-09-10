function twice(ogNum) {
  let number = ogNum.toString();

  let half = parseInt(number.length / 2)
  let leftSide = number.slice(0, half);
  let rightSide = number.slice(half, number.length);

  return leftSide === rightSide ? ogNum : ogNum * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676