function toLetter(grade) {
  if (grade >= 90)
    return 'A';
  else if (grade >= 80)
    return 'B';
  else if (grade >= 70)
    return 'C';
  else if (grade >= 60)
    return 'D';
  else
    return 'F'
}

function getGrade(score1, score2, score3) {
  let sum = score1 + score2 + score3
  let avg = sum / 3;
  return toLetter(avg);
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50 ,95));    //