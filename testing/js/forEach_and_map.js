
const nm = ['Amy', 'Tom', 'Jerry']

console.log('----.forEach()---')
// .forEach(): 
function greet(nm) {
  console.log('HI!' + nm)
}
nm.forEach(greet) // .forEach callback a function once for every element in array

// inline
nm.forEach(greet = nm => {console.log('Hi! ' + nm)})

console.log('----.map()-----')
// .map()
// creates a new array populated with the results of calling a provided function on every element in the calling array
function addGreet(nm) {
  return 'HIHI!!' + nm;
}

const greetNm = nm.map(addGreet)

console.log(greetNm)