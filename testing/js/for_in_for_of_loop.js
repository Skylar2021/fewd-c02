//for in
// iterates a specified variable over all the enumerable properties of an object
toDoList =  {
  name:'Amy',
  'assigned to':'Tom',
  monitor:'Jerry'
}

console.log('----for in loop in object----')
for (item in toDoList) {
  console.log(`key: ${item}`)
}
  
console.log('----for in loop in array----')
let arr = [1, 3, 5, 7]
let arr1 = ['one', 'two', 'three']
arr.text = 'OK!'
for (let i in arr){
console.log('i: ' + i)
}
// for in loop in object: loop through key 
// for in loop in array: loop through index + custom property

// for of loop: loop through value
// for iterable only!!!
//
console.log('----for of loop in array----')
for (let i of arr){
 
  console.log(`index of i: ${arr.indexOf(i)} = ${i}`)
}
