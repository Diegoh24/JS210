function isPrime(number) {
 for(let currentNum = 2; currentNum < number; currentNum += 1) {
    if (number % currentNum == 0) return false;
 }
 return number > 1
}


// if the sum of 2 primes is equal to expectedSum print the 2 values.
function checkGoldbach(expectedSum) {
  let primeSum;
  for (let currentNum = 2; currentNum < expectedSum; currentNum += 1) {
     for (let innerNum = currentNum; innerNum < expectedSum; innerNum += 1) {
       if (currentNum + innerNum === expectedSum) {
        if (isPrime(currentNum) && isPrime(innerNum)) {
          console.log(currentNum, innerNum);
          primeSum = true;
        }
       }
     }
  }
  if (!primeSum) console.log(null);
}


checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

//

// 34 +
//