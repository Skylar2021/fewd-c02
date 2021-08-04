//Define and export a function in utilities.js called formatNumber(). This function should have a number parameter and should return a string representation of that number value with a comma (,) character between every 3rd digit.
//const result = formatNumber(1234567.89);
//result = "1,234,567.89"
formatNumber = (number) => {
  numString = number.toString()
  if (numString.includes('.')) {
    let k = '.'.indexOf()
    
    console.log(numString)
    console.log(k)
    // return numString.slice(k, ',')
    console.log(numString.slice(k, ','))
  } 
  else {

  }
  
    

  
  
}


formatNumber(123456.89)

