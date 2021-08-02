// Class syntax, constructor, static method, inheritance(extends, new)
class ClassName { // first letter of class name in upper Case
  constructor(variable1, variable2){
    this._variable1 = variable1; // "this" act like a printing template
    this._variable2 = variable2; // so that the new instance of class will get the similar framework
  }
}

class ChildClass extends ClassName { 
  //"extends" is keyword so that the method, getter, setter wll be inherited to the child class
  constructor(variable3){ 
    // parameters in constructor can be different from parameters of super()
    super(variable1, variable2) // to call the constructor of the parent class
    //can set a default parameter in super()
    this._variable3 = variable3;
  }
}


class Family {
  constructor (name, gender) { // allow new instance to inherit from the constructor under class
    this._name = name;              // in constructor, property can be set, so that the new instance have similar key but different value
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  set rename(input) {     
    return this._name = input;     
  }
  addAge(input) {       // method
    this._age = input;
  }
  addCareer(input) {       // method
    this._career = input;
  }
  static yell() {          // public scope_call by Family.yell()
    console.log('We are family!')
  } 
}
let one = new Family('Emily', 'F') // instance(object) is create with keyword "new" + Family(class name)
let two = new Family('Kit', 'F')
one.rename = 'Ping'
two.rename = 'Tan Tan'
two.addCareer('Sale person')
console.log(one)
console.log(two)

console.log('----class inheritance----')

class Friend extends Family {
  constructor(name, gender, meetAt) {
    super(name);
    this._gender = gender
    this._meetAt = meetAt;
  }
  static yell() {          // public scope_call by Friend.yell()
    console.log('We are friend!')
  }
}
let pui = new Friend('pui','F', 'MOSTT')
pui.addAge(29)  // the addAge method is inherited from the Family(parent) class
console.log(pui)

console.log(num)

