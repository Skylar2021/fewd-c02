let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// original length
console.log(secretMessage.length)
// remove the last element
secretMessage.pop()
// double check the length
console.log(secretMessage.length)
// add elements to the end
secretMessage.push('to', 'Program')
// replace the index 7 element
secretMessage[7] = 'right';
// remove the index 0 string
secretMessage.shift()
// add element to the begining
secretMessage.unshift('Programming')
// remove index 6-10 and add know
secretMessage.splice(6, 5, 'know')
// to print the array as a sentence and check the result
console.log(secretMessage.join(' '))