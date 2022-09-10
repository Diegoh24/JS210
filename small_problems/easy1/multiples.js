function multisum(number) {
  let sum = 0;

  for (let currentNum = 3; currentNum <= number; currentNum += 1) {
    if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      sum += currentNum;
    }
  }

  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168