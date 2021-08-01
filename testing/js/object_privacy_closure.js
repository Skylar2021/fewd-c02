"use strict"
let obj = (function () {  // closure
  // block scope(privacy, can't be accessed from the outside)
  let key1 = 'value1';
  return {
    // global scope
    key2: 'value2',
    get key1(){
      return key1
    },
    set key1(value) {
      key1 = value
    }
  }
}) ();// IIFE: immediately invoked function expression
// run immediately without calling the function


// if () didn't add to the end of obj --> let prop in obj()
for (let prop in obj) {
  console.log(prop)
  
}
