class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._testScores = [];
    this._averageTestScores = null;
    this._schoolOverview = null;
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
  get testScores(){
    return this._testScores;
  }
  get averageTestScores(){
    return this._averageTestScores;
  }
  get schoolOverview(){
    return this._schoolOverview
  }
  set schoolOverview(grade){
    return this._schoolOverview = grade
  }
  set averageTestScores(num) {
    return this._averageTestScores = num
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
  addTestScores(score) {
    this.testScores.push(score)
  }
  calAverageTestScores(){
    return this.averageTestScores = (this.testScores.reduce((n1, n2) => n1 + n2)) / this.testScores.length
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents){
    super(name, 'middle', numberOfStudents)
  }
}

class HighSchool extends School {
  constructor(name,numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    console.log(this._sportsTeams)
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
lorraineHansbury.addTestScores(50)
lorraineHansbury.addTestScores(74)
lorraineHansbury.addTestScores(68)
lorraineHansbury.calAverageTestScores()
lorraineHansbury.schoolOverview = 'B'
console.log(lorraineHansbury)

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.addTestScores(60)
alSmith.addTestScores(89)
alSmith.addTestScores(77)
alSmith.calAverageTestScores()
alSmith.schoolOverview = 'A-'
console.log(alSmith)

const holy = new MiddleSchool('St. Holy', 250)
holy.addTestScores(55)
holy.addTestScores(66)
holy.addTestScores(77)
holy.calAverageTestScores()
holy.schoolOverview = 'B'
console.log(holy)