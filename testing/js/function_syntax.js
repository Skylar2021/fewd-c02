let num = 4;  
let anotherNum = 3;  

// define function with name: add()
function add(n1, n2) {  // n1, n2 are parameter that input to function 
  return n1 + n2;       // instruction: how code(parameter) to be executed
}

// num, anotherNum is arguments: give actual value to input for the function
add(num, anotherNum); // or add(4, 3), identifier for calling a function


// add() was assigned to variable sum --> function expression
let sum = add(num, anotherNum); 


function multiply(n1, n2) {
  return n1 * (n2 + 1);
}

multiply(sum, sum); 

let outcome = multiply(sum, sum);

console.log(sum)
console.log(outcome)

