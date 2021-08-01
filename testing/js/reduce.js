const cost = ['I ', 'am ', 'learning ', 'coding.'] // can be any datatype

// sum ;

console.log(cost.reduce((n1 , n2) => n1 + n2))
console.log(cost.reduce((n1 , n2) => n1 + n2, 'Hello! '))

let arr = [1, 3, 5, 7, 9]

// multiply
console.log('-------------')
console.log(arr.reduce((n1 , n2) => n1 * n2))
console.log(arr.reduce((n1 , n2) => n1 * n2, 2))

