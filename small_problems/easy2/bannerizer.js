function endRow(length) {
  let str = ''
  for (let count = 1; count <= length; count += 1) {
    str += '-';
  }
  return '+' + str + '+';
}

function emptyRow(length) {
  let str = ''
  for (let count = 1; count <= length; count += 1) {
    str += ' ';
  }
  return '|' + str + '|';
}

function textRow(message) {
  return '| ' + message + ' |'
}

function logInBox(message) {
  const length = message.length + 2

  console.log(endRow(length));
  console.log(emptyRow(length));
  console.log(textRow(message));
  console.log(emptyRow(length));
  console.log(endRow(length));

}


logInBox('To boldly go where no one has gone before.');
