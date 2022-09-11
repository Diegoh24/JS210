function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}
// all functions have an argumen to
calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

function penultimate(string) {
  console.log(string.split(' ').slice(-2, -1)[0]);
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"