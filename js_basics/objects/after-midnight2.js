const MILLISECONDS_IN_MINUTE = 60000
function afterMidnight(timeStr) {
  let [hour, minute] = timeStr.split(':');
  let date = new Date();

  date.setHours(hour);
  date.setMinutes(minute);

  console.log(date.getTime() / 60000);
}

// returns the number of minutes,

// use a date object instead of...

// returns the number of minutes - total number of minutes in a day
// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }

afterMidnight('00:00');       // 0
// beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
// beforeMidnight('12:34');      // 686