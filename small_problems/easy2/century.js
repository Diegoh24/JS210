function centurySuffix(century) {
  if ([11, 12, 13].includes(century % 100)) return 'th';

  switch(century % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function century(year) {
  let century = parseInt(year / 100);
  century = year % 100 === 0 ? century : century + 1;

  let centuryString = String(century) + centurySuffix(century);
  console.log(centuryString);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"