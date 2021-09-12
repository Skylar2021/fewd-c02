
let obj = {
    name: 'Olivia',
    skill: 'LOL'
}

// Object.entries() pass in object, then return an array with [key, value]
let exa = Object.entries(obj)
console.log(exa) // [ [ 'name', 'oli' ], [ 'skill', 'LOL' ] ]

// Object.fromEntries() pass in array, then return an object with {key, value}
let newObj = Object.fromEntries(exa)
console.log(newObj)// { name: 'oli', skill: 'LOL' }