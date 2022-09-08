let a = 10;

switch (a) {
  case 5:
  case 4:
  case 3:
    console.log('a is 5');
    break;
  case 6:
  case 9:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 6, nor 5');
    break;
}

/*
false
true
3
3
false
true
false
false
false
true
false
true
*/
