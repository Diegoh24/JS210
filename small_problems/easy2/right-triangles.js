// log a right triangle whos sides have n stars.
// make a function to log the right number of spaces
// number of spaces is descending, starts at stars - 1, until there are no spaces


function triangle(stars) {
  for (let row = 1; row <= stars; row += 1) {
    let spaces = stars - row;
    let string = ''

    for (let space = 1; space <= spaces; space += 1) {
      string += ' ';
    }

    for (let star = 1; star <= stars - spaces; star += 1) {
      string += '*';
    }

    console.log(string);
  }
}

triangle(9);