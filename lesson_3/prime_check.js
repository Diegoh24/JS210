function isPrime(number) {
 for(let current_num = 2; current_num < number; current_num += 1) {
    if (number % current_num == 0) return false;
 }
 return number > 1
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false