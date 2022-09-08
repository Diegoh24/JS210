let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
 let upperCaseName = names[index].toUpperCase();
 upperNames.push(upperCaseName);
 index += 1;
}

console.log(upperNames);

upperNames = [];

// for loops let you see and understand the logic at a single glance, makes code cleaner and more organized

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);