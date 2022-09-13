function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Teddy is ${getRandomInt(200, 150)} years old!`);