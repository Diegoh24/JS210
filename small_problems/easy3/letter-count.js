// function wordSizes(string) {
//   let wordSizesCount = {}

//   let words = string.split(' ');
//   if (words[0] === '') return wordSizesCount;

//   words.forEach(word => {
//     let wordSize = word.length
//     wordSizesCount[wordSize] ? wordSizesCount[wordSize] += 1: wordSizesCount[wordSize] = 1;
// });

//   return wordSizesCount
// }


// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

function wordSizes(string) {
  let wordSizesCount = {};

  let words = string.replace(/[^a-z ]/gi, '').split(' ');
  if (words[0] === '') return wordSizesCount;

  words.forEach(word => {
    let wordSize = word.length;
    wordSizesCount[wordSize] ? wordSizesCount[wordSize] += 1: wordSizesCount[wordSize] = 1;
 });

  console.log(wordSizesCount);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}