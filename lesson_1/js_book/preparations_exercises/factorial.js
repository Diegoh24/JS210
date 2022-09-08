// 1,

// function factorial(number) {
//   let fact = 1
//   for (let current_num = 1; current_num <= number; current_num += 1) {
//     fact *= current_num
//   }
//   return fact
// }

// recursion factorial, 3, f(1) * f(2) * f(3) * f(4)
function factorial(number) {
  if (number === 1) {
   return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320


/*
4
5
1
3
101
*/