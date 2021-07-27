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
console.log(resultArray.join('').toUpperCase() + '!')

// alternative

resultArray =input.split('')
                  .filter(item => vowels
                  .includes(item))
                  .map(item => item === 'u' || item === 'e' ? item + item : item)
                  .join('')
                  .toUpperCase()

console.log(resultArray + '!')




