function multiplesOfThreeAndFive() {
  for (let current_num = 3; current_num <= 100; current_num += 1) {
    if (current_num % 3 === 0 && current_num % 5 === 0) {
      console.log(String(current_num) + '!');
    } else if (current_num % 3 === 0 || current_num % 5 === 0) {
      console.log(String(current_num));
    }
  }
}

multiplesOfThreeAndFive();