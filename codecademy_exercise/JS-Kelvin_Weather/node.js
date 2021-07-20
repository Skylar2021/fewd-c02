const kelvin = 293;
// The forecast today is 293 Kelvin

let celsisus = kelvin - 273;
// celsisus is 273 degrees less than Kelvin.

let fahrenheit = celsisus * ( 9 / 5 ) + 32;
// Fahrenheit = Celsius * (9/5) + 32

// to round down fahrenheit
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celsisus * ( 33 / 100 );
//Newton = Celsius * (33/100)

newton = Math.floor(newton)
// round down newton

console.log(`The temperature is ${newton} degrees newton`)