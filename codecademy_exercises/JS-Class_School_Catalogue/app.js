class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set newNumberOfStudents(input){
    if (typeof input === 'number') return this._numberOfStudents = input;
    if (typeof input !== 'number') console.log('Invalid input: numberOfStudents must be set to a Number.')
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers){
    let i = Math.floor(Math.random() * substituteTeachers.length)
    return substituteTeachers[i]
  }
}

class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents)
    this._pickupPolicy = pickupPolicy;
  }
}

let a = new Primary('Test', 'primary', 350, 'unknown')
console.log(a)