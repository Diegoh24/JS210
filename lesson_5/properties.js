function objectHasProperty(object, string) {
  return Object.keys(object).includes(string);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true

function incrementProperty(object, string) {
  for (let prop in object) {
    prop === string ? object[prop] += 1 : object[string] = 1;
  }
  console.log(object[string]);
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                              // { steve: 3, susie: 5, lucy: 1 }

function copyProperties(object1, object2) {
  let copyCount = 0

  for (let prop in object1) {
    object2[prop] = object1[prop];
    copyCount += 1;
  }

  return copyCount;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);                       // { model: 9000, enabled: true }

function wordCount(string) {
  let obj = {};

  string.split(' ').forEach(word => obj[word] ? obj[word] += 1 : obj[word] = 1);

  return obj;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }