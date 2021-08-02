// for in loop in object
// iterates a specified variable over all the enumerable properties of an object
toDoList =  {
  name:'Amy',
  'assigned to':'Tom',
  monitor:'Jerry'}

for (item in toDoList) {
  console.log(toDoList.item)
}
console.log(toDoList.name)



