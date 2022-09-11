function dateSuffix(day) {
  if ([11, 12, 13].includes(day)) return day + 'th';

  switch (day % 10) {
    case 1: return day + 'st';
    case 2: return day + 'nd';
    case 3: return day + 'rd';
    default: return day + 'th';
  }
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

function formatTime(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();

  console.log(`${hour}:${minute}`);
}

let today = new Date();

formattedDate(today);

console.log(today.getFullYear());
console.log(today.getTime());

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1)

formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());
formattedDate(nextWeek);


console.log(today.toDateString() === nextWeek.toDateString());

console.log(today.getHours(), today.getMinutes());

formatTime(today);

