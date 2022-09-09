// function gcd(integer1, integer2) {
//   let smaller_integer = integer1 <= integer2 ? integer1 : integer2
//   let gcd = 0;

//   for (let current_num = 1; current_num <= smaller_integer; current_num += 1) {
//     if (integer1 % current_num === 0 && integer2 % current_num === 0) {
//       gcd = gcd <= current_num ? current_num : gcd;
//     }
//   }

//   return gcd;
// }

function gcd(num1, num2) {
 var temp;

 while (num2 != 0) {
   temp = num2;
   num2 = num1 % num2;
   num1 = temp;
 }

 return temp;
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));