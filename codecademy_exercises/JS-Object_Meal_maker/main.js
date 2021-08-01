//  randomly create a three-course meal based on what is available on a menu. 
"use strict"
const menu = {
  _course: {
    appetizers:[] ,
    mains: [],
    desserts:[]    
  },

  get course() {
    return this._course      
    },
  prolongCourse(courseName, dish){
    
    return this._course[courseName].push(dish)
    // return Object.assign(this._course[courseName], dish)
  },
  get appetizers() {
    return this._course.appetizers      
    },
  get mains() {
    return this._course.mains      
    },
  get desserts() {
    return this._course.desserts      
    },
  set setAppetizers(input) {
    this._course.appetizers.push(input)
  },
  set setMains(input) {
    this._course.mains.push(input)
  },
  set setDesserts(input) {
    this._course.desserts.push(input)
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    return this.prolongCourse(courseName, dish)
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this.course[courseName];
    const dishesIndex = Math.floor(Math.random() * dishes.length)
    return dishes[dishesIndex]
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers') 
    let main = this.getRandomDishFromCourse('mains') 
    let dessert = this.getRandomDishFromCourse('desserts') 
    let totalPrice = dessert['price'] + main.price + appetizer.price
    return (`Appetizer: ${appetizer.name},\nMain: ${main.name},\nDessert: ${dessert.name},\nTotale cost: $${totalPrice}`)
  },
}

// console.log(menu)
// add menu
menu.addDishToCourse('desserts', 'cookies', 15)
menu.addDishToCourse('desserts', 'cake', 30)
menu.addDishToCourse('desserts', 'donut', 25)
menu.addDishToCourse('desserts', 'cupcake', 17)
// console.log(menu.course.desserts)
menu.addDishToCourse('appetizers', 'fruits salad', 25)
menu.addDishToCourse('appetizers', 'cesar salad', 25)
menu.addDishToCourse('appetizers', 'pumkin soup', 35)
menu.addDishToCourse('appetizers', 'mashroom soup', 35)
// console.log(menu.course.appetizers)
menu.addDishToCourse('mains', 'beef steak', 60)
menu.addDishToCourse('mains', 'lamp steak', 65)
menu.addDishToCourse('mains', 'pork chop', 55)
menu.addDishToCourse('mains', 'plantbase', 60)

let meal = menu.generateRandomMeal()
console.log(meal)

