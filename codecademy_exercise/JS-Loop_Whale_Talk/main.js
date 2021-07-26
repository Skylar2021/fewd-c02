let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (i = 0; i < input.length; i++){
  // console.log('i = ' + i); 
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }     
  }
  if (input[i] === 'u' || input[i] === 'e') {
      resultArray.push(input[i])
  }
}
console.log((resultArray.join('')).toUpperCase() + '!')

// try other phrase
let input1 = 'a whale of a deal!';

let resultArray1 = [];
for (i = 0; i < input1.length; i++){
  // console.log('i = ' + i); 
  for (j = 0; j < vowels.length; j++) {
    if (input1[i] === vowels[j]) {
      resultArray1.push(input1[i])
    }     
  }
  if (input1[i] === 'u' || input1[i] === 'e') {
      resultArray1.push(input1[i])
  }
}
console.log((resultArray1.join('')).toUpperCase() + '!')
