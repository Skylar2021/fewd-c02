// for in loop & for of loop in Array
let arr = [1, 3, 5]
arr.foo = 'Hello'
arr.a = 'Yo'

for(let item in arr){
  console.log('for in loop: ' + item)
}
console.log('-------')
for(let item of arr){
  console.log('for of loop: ' + item)
}

let arr1 = new Array(3) // new is optional
let arr2 = Array.of('Yo!')
// console.log(arr1)
// console.log(arr2)
