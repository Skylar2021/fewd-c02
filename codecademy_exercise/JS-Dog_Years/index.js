// my age
let myAge = 20;

// The first two years of a dog’s life count as 10.5 dog years each
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

// later year minus early year by 2
let laterYears = myAge - 2;

// Each year following equates to 4 dog years
laterYears = laterYears * 4
console.log(`later years: ${laterYears} early yesr: ${earlyYears}`)

// add my age and later year
myAgeInDogYears = earlyYears + laterYears

// my name
myName = 'Skylar'
myName = myName.toLowerCase()

// summary
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)