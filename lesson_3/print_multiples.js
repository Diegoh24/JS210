function logMultiples(number) {
 for (let current_num = 100; current_num > 0;) {
   let x;
   if (current_num % number === 0 && current_num % 2 === 1) {
     console.log(current_num);
     x = number;
   }
   current_num -= x || 1;
 }
}

console.log('----')
logMultiples(17);
console.log('----')


logMultiples(15);
