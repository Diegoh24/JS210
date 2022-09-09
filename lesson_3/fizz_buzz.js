function fizzbuzz() {
 for (let currentNum = 1; currentNum <= 100; currentNum += 1) {
    if (currentNum % 3 === 0 && currentNum % 5 === 0)
      console.log('FizzBuzz');
    else if (currentNum % 3 === 0)
      console.log('Fizz');
    else if (currentNum % 5 === 0)
      console.log('Buzz');
    else
      console.log(currentNum);
 }
}

fizzbuzz();