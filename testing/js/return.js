// arrow function
let sum = num1 => console.log(num1 +num1) ; // single-line block
sum(1)

// without return
function cal(width, height) {
  console.log(width * height)
}
cal(5, 6)

// with return
function cal(width, height) {
  return (width * height)
}
console.log('result=' + cal(5, 6))