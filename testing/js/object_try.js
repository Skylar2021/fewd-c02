

const person = {
  firstName: 'Wong',
  lastName: 'Skylar',
}
const { firstName, lastName } = person
console.log('Name : ' + lastName) // Name : Skylar
console.log('Last Name : ' + firstName) // Last Name : Skylar


console.log('--------getter and setter---------')

odj = { 
  _name: 'Cherie',
  get name() { 
  return this._name
  }, 
  set rename(input) {  // setter receive a parameter
    if (typeof input === 'string'){
      this._name = input 
    } else {
      console.log('Please enter a string!')
    }
  }
} 
console.log('get ' + odj.name) // to call getter/setter, no () is required 

console.log(odj.name) // Cherie
odj.rename = 'Skylar'
console.log(odj.name) // Skylar

console.log('-----Factory Function and object destructuring-----')

const odjFactory = (key1, key2) => {
  return {
    key1,
    key2,
    log() {
      console.log('This is how Factory Function is working.')
    }
  }
}
const firstTry = odjFactory('value1', 'value2')
console.log(firstTry) // log: { key1: 'value1', key2: 'value2', log: [Function: log] }
firstTry.log() // log: This is how Factory Function is working.

const {key2} = firstTry
console.log('key2: ' + key2)
