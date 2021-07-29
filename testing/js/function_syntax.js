let num = 4;  
let anotherNum = 3;  

add(num, anotherNum); // identifier for calling a function
sum = add(num, anotherNum); // num, anotherNum is arguments: give actual value to input for the function

multiply(sum, sum); 
outcome = multiply(sum, sum);

// define function with name: add()
function add(n1, n2) {  // n1, n2 are parameter  
  return n1 + n2;       // instruction: how code to be executed
}

function multiply(n1, n2) {
  return n1 * (n2 + 1);
}

console.log(sum)
console.log(outcome)

