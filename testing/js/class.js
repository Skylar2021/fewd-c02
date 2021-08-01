"use strict";
class Family {
  constructor (name, num, gender) { // allow new instance to inherit from the constructor under class
    this._name = name;              // inside constructor, property can be set, so that the new instance have similar key but different value
    this._sequence = num;
    this._gender = gender
  }
  static yell() {
    console.log('We are family!')
  }
}

let one = new Family('Emily', 1, 'F') // instance(object) is create with keyword "new" + Family
let two = new Family('Kit', 2, 'F')

console.log(one)
console.log(two)

