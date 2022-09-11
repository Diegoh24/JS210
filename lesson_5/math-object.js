// 180 / pi is 1 radian
// 1 radian === 57.2958

let radiansToDegress = radians => radians / (Math.PI / 180);

let variable = 180;
console.log(Math.abs(variable));

Math.pow(16, 6);


//rounding numbers
let number;
Math.round(number) // rounds down if decimal < 0.5

Math.floor(number) // rounds down to the next lower integer
Math.ceil(number) // rounds upw to the next higher integer


function randomNum(min, max) {
  if (min === max) return min;

  let ordered = [min, max].sort((a, b) => a - b);
  min = ordered[0]
  max = ordered[1]

  let difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min
}

randomNum(40, 50);
randomNum(50, 40);
randomNum(45, 45);